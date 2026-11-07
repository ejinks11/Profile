import { Contact } from './components/Contact.tsx'
import { Education } from './components/Education.tsx'
import { Experience } from './components/Experience.tsx'
import { Hero } from './components/Hero.tsx'
import { Projects } from './components/Projects.tsx'
import { SiteHeader } from './components/SiteHeader.tsx'
import { profile } from './content.ts'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#top">
        Skip to content
      </a>
      <div className="page" id="top">
        <SiteHeader />
        <main>
          <Hero />
          <Experience />
          <Projects />
          <Education />
          <Contact />
        </main>
        <footer className="site-footer">
          <p>
            {profile.name} · {profile.location}
          </p>
          <a href="#top">Back to top</a>
        </footer>
      </div>
    </>
  )
}
