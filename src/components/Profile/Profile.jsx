import styles from './Profile.module.css'

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={styles.profileCard}>
      <div className={styles.header}>
        <img src={image} alt="User avatar" className={styles.avatar} />
        <p className={styles.nameTitle}>{name}</p>
        <p className={styles.description}>@{tag}</p>
        <p className={styles.description}>{location}</p>
      </div>

      <ul className={styles.statList}>
        <li className={styles.statElement}>
          <span className={styles.statScores}>Followers</span>
          <span className={styles.statScores}>{stats.followers}</span>
        </li>
        <li className={styles.statElement}>
          <span className={styles.statScores}>Views</span>
          <span className={styles.statScores}>{stats.views}</span>
        </li>
        <li className={styles.statElement}>
          <span className={styles.statScores}>Likes</span>
          <span className={styles.statScores}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}