export default function FriendList({friends}) {
   return (<>
      <ul>
         {friends.map((friend) => { 
            return <div key={friend.id}>
               <img src={friend.avatar} alt="Avatar" width="48" />
               <p>{friend.name}</p>
               <p>{friend.isOnline}</p>
            </div>})}
      </ul>
   </>)
}