import css from './FriendList.module.css';
import './FriendList.module.css';
export const FriendListItem = ({ avatar, name, isOnline, id }) => {
  const statusIs = isOnline ? 'online' : 'offline';
  return (
    <li className={css.item} key={id}>
      <span className={`${css.status} ${css[statusIs]}`}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};
