import { about, coursework, skillGroups } from '../content.ts'

export function Education() {
  return (
    <section id="education" className="section" aria-labelledby="education-heading">
      <div className="section-heading">
        <p className="eyebrow">03 — Background</p>
        <h2 id="education-heading">School, tools, and how I spend the time</h2>
      </div>
      <div className="about-copy">
        {about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <div className="split">
        <article>
          <h3>Coursework</h3>
          <ul className="plain-list">
            {coursework.map((course) => (
              <li key={course}>{course}</li>
            ))}
          </ul>
        </article>
        <article>
          <h3>Skills</h3>
          <div className="skill-groups">
            {skillGroups.map((group) => (
              <div key={group.label}>
                <h4>{group.label}</h4>
                <ul className="tags">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  )
}
