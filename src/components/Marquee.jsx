export default function Marquee({ items = [] }) {
  // Duplicate items for seamless loop
  const loop = [...items, ...items];
  return (
    <div className="marquee" aria-label="Partner and venture strip">
      <div className="marquee__track">
        {loop.map((t, i) => (
          <div className="marquee__item" key={`${t}-${i}`}>
            {t}
          </div>
        ))}
      </div>
    </div>
  );
}
