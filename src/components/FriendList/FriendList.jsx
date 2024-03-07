import FriendListItem from "../FriendListItem/FriendListItem";
import s from "./FriendList.module.css";

function FriendList({ friends }) {
  return (
    <ul className={s.friendList}>
      <FriendListItem friends={friends} />
    </ul>
  );
}

export default FriendList;
