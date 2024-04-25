import css from "./FriendListItem.module.css";
import clsx from "clsx";

export default function FriendListItem({ friend }) {
  return (
    <div className={css.item}>
      <img src={friend.avatar} alt="Avatar" width="48" />
      <p>{friend.name}</p>
      <p className={clsx(friend.isOnline ? css.online : css.offline)}>
        {friend.isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}
