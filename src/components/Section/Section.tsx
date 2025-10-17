import styles from './Section.module.css';

interface SectionProps {
  children: React.ReactElement;
}

export const Section = ({ children }: SectionProps) => {
  return <div className={styles.content}>{children}</div>;
};
