import "./Background.css"

const stars = Array.from({ length: 55 }, (_, i) => ({
  top: `${(i * 37) % 100}%`,
  left: `${(i * 53 + 7) % 100}%`,
  size: i % 6 === 0 ? 3 : 2,
  driftDuration: `${(100 + (i % 5) * 15).toFixed(1)}s`,
  driftDelay: `${((i * 0.9) % 3).toFixed(1)}s`,
  twinkleDuration: `${(3 + (i % 4) * 0.4).toFixed(1)}s`,
  twinkleDelay: `${((i * 0.7) % 4).toFixed(1)}s`,
  x1: `${((i * 13) % 101) - 50}px`,
  y1: `${((i * 7) % 101) - 50}px`,
  x2: `${((i * 129) % 101) - 50}px`,
  y2: `${((i * 119) % 101) - 50}px`,
  x3: `${((i * 123) % 101) - 50}px`,
  y3: `${((i * 131) % 101) - 50}px`,
  bright: i % 7 === 0,
}))

function Background() {
  return (
    <div className="background" aria-hidden="true">
      <div className="background__sweep" />
      {stars.map((s, index) => (
        <span
          key={index}
          className={
            s.bright ? "background__star background__star--bright" : "background__star"
          }
          style={{
            top: s.top,
            left: s.left,
            width: `${s.size}px`,
            height: `${s.size}px`,
            animationDuration: s.driftDuration,
            animationDelay: s.driftDelay,
            "--x1": s.x1,
            "--y1": s.y1,
            "--x2": s.x2,
            "--y2": s.y2,
            "--x3": s.x3,
            "--y3": s.y3,
            "--tw-duration": s.twinkleDuration,
            "--tw-delay": s.twinkleDelay,
          }}
        />
      ))}
    </div>
  )
}

export default Background
