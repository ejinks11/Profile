import { profile } from '../content.ts'

export function Contact() {
  return (
    <section id="contact" className="section contact" aria-labelledby="contact-heading">
      <div className="section-heading">
        <p className="eyebrow">04 — Contact</p>
        <h2 id="contact-heading">Say hello</h2>
        <p>
          The fastest way to reach me is email. I am happy to talk about an internship, a
          project, or a problem you are stuck on.
        </p>
      </div>
      <ul className="contact-list">
        {profile.emails.map((email) => (
          <li key={email.value}>
            <span>{email.label}</span>
            <a href={`mailto:${email.value}`}>{email.value}</a>
          </li>
        ))}
        <li>
          <span>GitHub</span>
          <a href={profile.github} target="_blank" rel="noreferrer">
            github.com/Ejinks2
          </a>
        </li>
        {profile.linkedIn ? (
          <li>
            <span>LinkedIn</span>
            <a href={profile.linkedIn} target="_blank" rel="noreferrer">
              {profile.linkedIn.replace(/^https?:\/\//, '')}
            </a>
          </li>
        ) : null}
      </ul>
    </section>
  )
}
