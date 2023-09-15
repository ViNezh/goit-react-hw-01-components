import css from './Transaction.module.css';
import PropTypes from 'prop-types';
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

const TransactionItem = ({ type, amount, currency, id }) => {
  return (
    <tr key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};
TransactionItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  id: PropTypes.string,
};
