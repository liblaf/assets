import styles from "./styles.module.css";

const AVATARS: string[] = ["nahida", "white"];

export default function Letters({ format }: { format: string }): JSX.Element {
  return (
    <div>
      {AVATARS.map(
        (letter: string): JSX.Element => (
          <img
            alt={letter.toUpperCase()}
            className={styles.avatar}
            src={`/avatar/${format}/${letter}.${format}`}
          />
        )
      )}
    </div>
  );
}
