import css from './Transaction.module.css';
import { TransactionItem } from './TransactionItem';
export const TransactionHistory = ({ transactions }) => {
  return (
    <section className={css.transactionHistory}>
      <table className={css.transactions}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(transaction => (
            <TransactionItem
              type={transaction.type}
              amount={transaction.amount}
              currency={transaction.currency}
              key={transaction.id}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
};
