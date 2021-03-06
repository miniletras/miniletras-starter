import styles from './Fraction.module.css'
import Texts from '../texts/Texts'

export default function Fraction({ fr }) {
  switch (fr?.src) {
    case 'img': return <img className={styles.imgs} src={`/img/fr_${fr.fraction}-sheet_${fr.sheet}.png`} />;
    case 'text':
      return <Texts fr={ fr } />;
    default: return <></>;
  }
}