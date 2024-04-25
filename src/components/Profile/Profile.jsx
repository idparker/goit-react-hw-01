import css from "./Profile.module.css";

export function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.card}>
      <div>
        <img src={image} alt={name} className={css.avatar} />
        <p>{name}</p> <p>@{tag}</p> <p>{location}</p>
      </div>
      <ul className={css.stats}>
        <li className={css.item}>
          <span>Followers </span>
          <span>{stats.followers}</span>
        </li>
        <li className={css.item}>
          <span>Views </span>
          <span>{stats.views}</span>
        </li>
        <li className={css.item}>
          <span>Likes </span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
