export default function StatsRow({ stats = [] }) {
  return (
    <div className="statsRow" role="list">
      {stats.map((s) => (
        <div className="stat" key={s.k} role="listitem">
          <div className="stat__k">{s.k}</div>
          <div className="stat__v">{s.v}</div>
        </div>
      ))}
    </div>
  );
}
