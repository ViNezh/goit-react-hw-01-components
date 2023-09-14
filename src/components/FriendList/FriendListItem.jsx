import './FriendList.css';
export const FriendListItem = ({ avatar, name, isOnline, id }) => {
  const statusIs = isOnline ? 'online' : 'offline';
  return (
    <li className="item" id={id}>
      <span className="status" id={statusIs}></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};
