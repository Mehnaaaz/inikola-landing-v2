import { useState } from "react";

export default function FAQ({ items = [] }) {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <div className="faq">
      {items.map((it, idx) => {
        const open = idx === openIdx;
        return (
          <button
            key={it.q}
            className={`faqItem ${open ? "faqItem--open" : ""}`}
            onClick={() => setOpenIdx(open ? -1 : idx)}
            type="button"
          >
            <div className="faqItem__q">
              <span>{it.q}</span>
              <span className="faqItem__icon">{open ? "–" : "+"}</span>
            </div>
            <div className="faqItem__a">
              <p>{it.a}</p>
            </div>
          </button>
        );
      })}
    </div>
  );
}
