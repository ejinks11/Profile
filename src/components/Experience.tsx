import { experiences } from '../content.ts'

export function Experience() {
  return (
    <section id="work" className="section" aria-labelledby="work-heading">
      <div className="section-heading">
        <p className="eyebrow">01 — Experience</p>
        <h2 id="work-heading">Internships and campus roles</h2>
      </div>
      <ol className="entries">
        {experiences.map((item) => (
          <li key={`${item.organization}-${item.role}`}>
            <div className="entry-meta">
              <p className="period">{item.period}</p>
              <p className="org">{item.organization}</p>
              {item.location ? <p className="where">{item.location}</p> : null}
            </div>
            <div>
              <h3>{item.role}</h3>
              <p>{item.summary}</p>
              {item.points.length > 0 && (
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              )}
              <ul className="tags" aria-label="Tools">
                {item.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
