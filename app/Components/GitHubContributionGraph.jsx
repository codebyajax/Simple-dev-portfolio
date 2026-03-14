"use client";
import { useState, useEffect } from "react";

function generateMockData() {
  const weeks = [];
  const now = new Date();
  const cursor = new Date(now);
  cursor.setDate(cursor.getDate() - 364);
  cursor.setDate(cursor.getDate() - cursor.getDay());

  while (cursor <= now) {
    const week = [];
    for (let d = 0; d < 7; d++) {
      const date = new Date(cursor);
      const isFuture = date > now;
      const count = isFuture ? 0 : Math.random() < 0.35 ? 0 : Math.floor(Math.random() * 14);
      week.push({ date: date.toISOString().split("T")[0], count });
      cursor.setDate(cursor.getDate() + 1);
    }
    weeks.push(week);
  }
  return weeks;
}

const LEVEL_COLORS = ["#f4f4f5", "#d4d4d8", "#a1a1aa", "#52525b", "#18181b",];


function getLevel(count) {
  if (count === 0) return 0;
  if (count <= 3) return 1;
  if (count <= 6) return 2;
  if (count <= 9) return 3;
  return 4;
}

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const CELL_SIZE = 10;
const CELL_RADIUS = 2;
const CELL_GAP = 2.5;

export default function GitHubContributionGraph() {
  const username = "ajaxuzi";
  const [weeks, setWeeks] = useState([]);
  const [tooltip, setTooltip] = useState(null);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const data = generateMockData();
    setWeeks(data);

    const now = new Date();
    const yearStart = new Date(now.getFullYear(), 0, 1);
    const yearTotal = data
      .flat()
      .filter(d => new Date(d.date) >= yearStart)
      .reduce((sum, d) => sum + d.count, 0);
    setTotal(yearTotal);
  }, []);

  const monthLabels = [];
  weeks.forEach((week, wi) => {
    const first = week[0];
    if (first) {
      const d = new Date(first.date);
      if (d.getDate() <= 7) {
        monthLabels.push({ wi, label: MONTHS[d.getMonth()] });
      }
    }
  });

  return (
    <div className="padding p-0! mt-5! select-none">


      <div style={{ overflowX: "auto" }}>
        <div style={{ position: "relative", minWidth: "fit-content" }}>
          <div style={{ display: "flex",  marginBottom: 4, height: 16, position: "relative" }}>
            {monthLabels.map(({ wi, label }) => (
              <div key={wi} style={{
                position: "absolute",
                left: wi * (CELL_SIZE + CELL_GAP),
                fontSize: 11,
                color: "inherit",
                opacity: 0.8,
                whiteSpace: "nowrap",
                fontFamily: "inherit",
              }}>
                {label}
              </div>
            ))}
          </div>

          <div style={{ display: "flex", gap: CELL_GAP }}>


            {weeks.map((week, wi) => (
              <div key={wi} style={{ display: "flex", flexDirection: "column", gap: CELL_GAP }}>
                {week.map((day, di) => {
                  const level = getLevel(day.count);
                  return (
                    <div
                      key={di}
                      onMouseEnter={(e) => setTooltip({ day, x: e.clientX, y: e.clientY })}
                      onMouseLeave={() => setTooltip(null)}
                      style={{
                        width: CELL_SIZE,
                        height: CELL_SIZE,
                        borderRadius: CELL_RADIUS,
                        background: LEVEL_COLORS[level],
                        border: "1px solid rgba(0, 0, 0, 0.08)",
                        cursor: "pointer",
                        opacity: 0.7
                      }}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-5">
        <p style={{ fontFamily: "inherit", fontSize: "13px", color: "inherit", opacity: 0.6}}>
          <span style={{opacity: 1 }}>{total.toLocaleString()}</span> activities in {new Date().getFullYear()}
        </p>

        <div style={{ display: "flex", alignItems: "center", gap: 2,  justifyContent: "flex-end" }}>
          <span style={{ fontFamily: "inherit", fontSize: 11, color: "inherit", opacity: 0.6 }}>Less</span>
          {LEVEL_COLORS.map((color, i) => (
            <div key={i} style={{
              width: CELL_SIZE,
              height: CELL_SIZE,
              borderRadius: CELL_RADIUS,
              background: color,
              border: "1px solid rgba(0, 0, 0, 0.08)",
              opacity:0.7
            }} />
          ))}
          <span style={{ fontFamily: "inherit", fontSize: 11, color: "inherit", opacity: 0.6 }}>More</span>
        </div>
      </div>


      {tooltip && (
        <div style={{
          position: "fixed",
          left: tooltip.x + 12,
          top: tooltip.y - 36,
          background: "#111",
          border: "1px solid #333",
          borderRadius: 6,
          padding: "6px 10px",
          fontSize: 12,
          fontFamily: "inherit",
          color: "#ccc",
          pointerEvents: "none",
          zIndex: 1000000,
          whiteSpace: "nowrap",
          boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
        }}>
          <span style={{ color: "#fff", fontWeight: 600 }}>{tooltip.day.count} activitie (s)</span>
          {" on "}
          {new Date(tooltip.day.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
        </div>
      )}
    </div>
  );
}
