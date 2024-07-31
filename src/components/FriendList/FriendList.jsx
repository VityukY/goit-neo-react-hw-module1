import styles from './FriendList.module.css'
import clsx from 'clsx'

export default function FriendList({friends}) {
   return (<>
      <ul className={styles.friendList}>
         {friends.map((friend) => { 
            return <li key={friend.id} className={styles.friendListItem}>
               <img className={styles.friendAvatar} src={friend.avatar} alt="Avatar" width="48" />
               <p className={styles.friendName}>{friend.name}</p>
               <p className={clsx(friend.isOnline ? styles.online : styles.offline)}>{friend.isOnline? 'Online': 'Offline'}</p>
            </li>})}
      </ul>
   </>)
}