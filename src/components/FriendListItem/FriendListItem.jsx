import styles from './FriendListItem.module.css'
import clsx from 'clsx'

export default function FriendListItem ({friend}) {
   return (<li className={styles.friendListItem}>
   <img className={styles.friendAvatar} src={friend.avatar} alt="Avatar" width="48" />
   <p className={styles.friendName}>{friend.name}</p>
   <p className={clsx(friend.isOnline ? styles.online : styles.offline)}>{friend.isOnline? 'Online': 'Offline'}</p>
</li>)
}