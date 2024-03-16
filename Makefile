ALPHABET != echo {a..z}
AVATAR   := nahida white
COLOR    := 06b6d4

default: static/avatar static/letter

#####################
# Auxiliary Targets #
#####################

.PHONY: static/avatar
static/avatar: static/avatar/jpg static/avatar/png

static/avatar/%/white.jpg:
	@ mkdir --parents --verbose "$(@D)"
	convert -size 2048x2048 xc:white "$@"

.PHONY: static/avatar/jpg
static/avatar/jpg: $(AVATAR:%=static/avatar/jpg/%.jpg)

.PHONY: static/avatar/png
static/avatar/png: $(AVATAR:%=static/avatar/png/%.png)

static/avatar/png/%.png: static/avatar/jpg/%.jpg
	@ mkdir --parents --verbose "$(@D)"
	convert -background none "$<" "$@"

.PHONY: static/letter
static/letter: static/letter/ico static/letter/png static/letter/svg

.PHONY: static/letter/ico
static/letter/ico: $(ALPHABET:%=static/letter/ico/%.ico)

static/letter/ico/%.ico: static/letter/png/%.png
	@ mkdir --parents --verbose "$(@D)"
	convert -background none "$<" -resize 128x128 "$@"

.PHONY: static/letter/png
static/letter/png: $(ALPHABET:%=static/letter/png/%.png)

static/letter/png/%.png: static/letter/svg/%.svg
	@ mkdir --parents --verbose "$(@D)"
	convert -background none "$<" "$@"

.PHONY: static/letter/svg
static/letter/svg: $(ALPHABET:%=static/letter/svg/%.svg)

static/letter/svg/%.svg:
	@ mkdir --parents --verbose "$(@D)"
	wget --output-document="$@" "https://api.iconify.design/twemoji/letter-$*.svg?color=%23$(COLOR)&height=512"
