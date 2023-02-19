import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <div>
      <table className={css.transactionHistory}>
        <thead className={css.head}>
          <tr>
            <th style={{ padding: 10 }}>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(item => {
            return (
              <tr className={css.tr} key={item.id}>
                <td className={css.td} style={{ textTransform: 'capitalize' }}>
                  {item.type}
                </td>
                <td className={css.td}>{item.amount}</td>
                <td className={css.td}>{item.currency}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
