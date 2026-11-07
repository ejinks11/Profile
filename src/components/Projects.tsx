import { useState } from 'react'
import { projectCategories, projects, type ProjectCategory } from '../content.ts'

type Filter = 'All' | ProjectCategory

export function Projects() {
  const [filter, setFilter] = useState<Filter>('All')
  const visible =
    filter === 'All' ? projects : projects.filter((project) => project.category === filter)

  return (
    <section id="projects" className="section" aria-labelledby="projects-heading">
      <div className="section-heading">
        <p className="eyebrow">02 — Projects</p>
        <h2 id="projects-heading">Things I have built</h2>
        <p>
          Systems projects sit next to product work. Each one is something I can talk through,
          from the constraint to the part that was hard.
        </p>
      </div>
      <div className="filters" role="group" aria-label="Filter projects">
        {projectCategories.map((category) => (
          <button
            key={category}
            type="button"
            aria-pressed={filter === category}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <ol className="entries">
        {visible.map((project) => (
          <li key={project.title}>
            <div className="entry-meta">
              <p className="period">{project.period}</p>
              <p className="org">{project.category}</p>
            </div>
            <div>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <ul>
                {project.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <ul className="tags" aria-label="Topics">
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              {project.links.length > 0 && (
                <p className="entry-links">
                  {project.links.map((link) => (
                    <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                      {link.label}
                    </a>
                  ))}
                </p>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
