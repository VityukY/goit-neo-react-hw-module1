import styles from './TransactionHistory.module.css'
export default function TransactionHistory ({items}) {

   return <>
      <table className={styles.table}>
      <thead >
         <tr className={styles.header}>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
         </tr>
      </thead>

      <tbody>
         {items.map (transaction => {
            return (
               <tr className={styles.row} key={transaction.id}>
               <td>{transaction.type}</td>
               <td>{transaction.amount}</td>
               <td>{transaction.currency}</td>
            </tr>
            )
         })}
      </tbody>
      </table>
   </>
}