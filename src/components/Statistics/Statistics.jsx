import s from "./Statistics.module.css";

function Statistics({ title, stats }) {
  function generateColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}
      <ul className={s.statList}>
        {stats.map((item) => (
          <li key={item.id} className={s.item} style={{backgroundColor: generateColor()}}>
            <span>{item.label}</span>
            <span className={s.percentage}>{item.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Statistics;
