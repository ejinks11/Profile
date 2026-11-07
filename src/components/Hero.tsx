import { profile } from '../content.ts'

export function Hero() {
  const primaryEmail = profile.emails[0]

  return (
    <section className="hero" aria-labelledby="intro-heading">
      <p className="eyebrow">Portfolio</p>
      <h1 id="intro-heading">{profile.name}</h1>
      <p className="role">{profile.role}</p>
      <p className="lede">{profile.lede}</p>
      <dl className="facts">
        <div>
          <dt>Based in</dt>
          <dd>{profile.location}</dd>
        </div>
        <div>
          <dt>Studying</dt>
          <dd>
            {profile.degree}
            <span>{profile.school}</span>
          </dd>
        </div>
        <div>
          <dt>Graduation</dt>
          <dd>{profile.graduation}</dd>
        </div>
        <div>
          <dt>GPA</dt>
          <dd>{profile.gpa}</dd>
        </div>
      </dl>
      <div className="hero-actions">
        <a className="button" href={`mailto:${primaryEmail.value}`}>
          {primaryEmail.value}
        </a>
        <a className="button button-quiet" href={profile.github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a className="text-link" href="#projects">
          See the work
        </a>
      </div>
    </section>
  )
}
