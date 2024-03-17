import styles from "./styles.module.css";

const ALPHABET: string[] = "abcdefghijklmnopqrstuvwxyz".split("");

export default function Letters({ format }: { format: string }): JSX.Element {
  return (
    <div>
      {ALPHABET.map(
        (letter: string): JSX.Element => (
          <img
            alt={letter.toUpperCase()}
            className={styles.letter}
            src={`/letter/${format}/${letter}.${format}`}
          />
        ),
      )}
    </div>
  );
}
