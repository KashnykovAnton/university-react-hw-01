import clsx from "clsx";
import s from "./FriendListItem.module.css";

function FriendListItem({ friends }) {
  return friends.map((friend) => (
    <li key={friend.id} className={s.item}>
      <span className={clsx(s.status, friend.isOnline ? s.statusOnline : s.statusOffline)}></span>
      <img className={s.avatar} src={friend.avatar} alt="User avatar" width="48" />
      <p className={s.name}>{friend.name}</p>
    </li>
  ));
}

export default FriendListItem;
