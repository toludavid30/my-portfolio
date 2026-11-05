import { useEffect, useRef, useState } from 'react'
import './styling.css'

const image = (name) => `/assets/${name}`

const projects = [
  { title: "Dolu's Brand", label: '01 / E-commerce', image: 'screenshot-47.png', description: 'An elegant e-commerce brand website showcasing products with a focus on user experience and responsive design.', live: 'https://dolu-s-brand.vercel.app/', repo: 'https://github.com/toludavid30/Dolu-s-Brand', tech: ['React', 'CSS', 'Vercel'] },
  { title: 'The Best Speed Nigeria Limited', label: '02 / Company site', image: 'tbsnl-snapshot.png', description: 'A responsive Vite + React website showcasing services, products, careers, and export-focused marketing content.', live: 'https://best-speed.com', repo: 'https://github.com/toludavid30/Best-Speed', tech: ['Vite', 'React', 'Responsive'] },
  { title: 'Creator Flow', label: '03 / Platform', image: 'screenshot-46.png', description: 'A dynamic platform for creators, built with the MERN stack. Features user authentication, content management, and interactive UIs.', live: 'https://creator-flow-iota.vercel.app/', repo: 'https://github.com/toludavid30/creator-flow', tech: ['MERN', 'Auth', 'MongoDB'] },
  { title: 'Sociamart Waitlist', label: '04 / Landing page', image: 'screenshot-81.png', description: 'A responsive, engaging waitlist page for a new social-commerce platform, designed to collect early adopter sign-ups.', live: 'https://sociamart-waitlist-seven.vercel.app/', repo: 'https://github.com/toludavid30/SociamartWaitlist', tech: ['React', 'UX', 'Forms'] },
  { title: 'Cozy Noshes', label: '05 / Product · In progress', image: 'cozy-noshes.png', description: 'A food and recipe app for discovering recipes, managing orders, and creating personalized culinary experiences.', live: 'https://cozy-noshes.vercel.app/', repo: 'https://github.com/toludavid30/cozyNoshes', tech: ['MERN', 'Recipes', 'Product'] },
]

const skills = ['React.js', 'Node.js', 'C# / .NET', 'PostgreSQL', 'MSSQL', 'MongoDB', 'JavaScript ES6+', 'Supabase', 'HTML5', 'CSS3', 'Git / GitHub', 'Express.js', 'Blockchain fundamentals']
const Arrow = () => <span aria-hidden="true">↗</span>

const Home = () => {
  const [scrolled, setScrolled] = useState(false)
  const projectPinRef = useRef(null)
  const projectTrackRef = useRef(null)
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 48); window.addEventListener('scroll', onScroll, { passive: true }); return () => window.removeEventListener('scroll', onScroll) }, [])
  useEffect(() => {
    const dot = document.querySelector('.cursor-dot')
    const move = (event) => { if (dot) { dot.style.left = `${event.clientX}px`; dot.style.top = `${event.clientY}px` } }
    const over = (event) => { if (dot && event.target.closest('a, button, .project-card')) dot.classList.add('is-hover') }
    const out = (event) => { if (dot && event.target.closest('a, button, .project-card')) dot.classList.remove('is-hover') }
    window.addEventListener('pointermove', move); window.addEventListener('pointerover', over); window.addEventListener('pointerout', out)
    return () => { window.removeEventListener('pointermove', move); window.removeEventListener('pointerover', over); window.removeEventListener('pointerout', out) }
  }, [])
  useEffect(() => {
    let frame
    const updateProjects = () => {
      if (!projectPinRef.current || !projectTrackRef.current) return
      const pin = projectPinRef.current.getBoundingClientRect()
      const viewportWidth = document.documentElement.clientWidth
      const maxTravel = Math.max(0, projectTrackRef.current.scrollWidth - viewportWidth + 48)
      const progress = Math.min(1, Math.max(0, -pin.top / Math.max(1, pin.height - window.innerHeight)))
      projectTrackRef.current.style.transform = `translate3d(${-maxTravel * progress}px, 0, 0)`
    }
    const onScroll = () => { cancelAnimationFrame(frame); frame = requestAnimationFrame(updateProjects) }
    window.addEventListener('scroll', onScroll, { passive: true }); window.addEventListener('resize', onScroll)
    onScroll()
    return () => { cancelAnimationFrame(frame); window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll) }
  }, [])

  return <div className="site-shell">
    <div className="cursor-dot" aria-hidden="true" />
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}><nav className="nav container" aria-label="Primary navigation">
      <a className="brand" href="#home">Agbede <span>T.D.</span></a>
      <div className="nav-links">{['Home', 'About', 'Projects', 'Skills', 'Contact'].map((link) => <a key={link} href={`#${link.toLowerCase()}`} className={link === 'Home' ? 'active' : ''}>{link}</a>)}</div>
      <a className="nav-contact" href="mailto:toludavid30@gmail.com">Let's talk <Arrow /></a>
    </nav></header>

    <main>
      <section className="hero container" id="home"><div className="hero-copy">
        <p className="eyebrow hero-reveal">Creative technologist <span>✦</span> Full-stack software developer</p>
        <h1><span className="line-mask"><span className="hero-reveal delay-1">Hi, I'm Agbede</span></span><span className="line-mask"><span className="hero-reveal delay-2 purple-text">Tolulope David.</span></span><span className="line-mask"><span className="hero-reveal delay-3">I build <em>useful</em> digital</span></span><span className="line-mask"><span className="hero-reveal delay-4">experiences.</span></span></h1>
        <p className="hero-intro hero-reveal delay-4">I turn thoughtful ideas into robust, scalable web applications with a sharp eye for detail.</p>
        <div className="hero-actions hero-reveal delay-4"><a className="button primary" href="#projects">View my work <Arrow /></a><a className="button secondary" href="/Agbede-Tolulope-David-CV.html" download>Download CV <Arrow /></a></div>
      </div><div className="hero-art" aria-hidden="true"><div className="orb orb-purple" /><div className="orb orb-gold" /><div className="art-grid" /><span className="art-note">01<br /><small>build / learn / repeat</small></span></div><div className="scroll-cue"><span /> Scroll to explore</div></section>

      <section className="about section container" id="about"><div className="section-kicker"><span>01</span> About me</div><div className="about-grid"><h2>Code with<br /><span>character.</span></h2><div className="about-body"><p className="lead">Hello! I'm Agbede Tolulope David, a software developer with about three years of experience building robust and scalable web applications.</p><p>My freelance journey has given me the chance to work across diverse projects and continually expand my skillset. I work across modern JavaScript, C#/.NET, relational databases, and cloud-ready application architecture.</p><p>Beyond coding, I have a keen interest in creative design and minor blockchain experience. I believe a great application isn't just functional; it's also beautiful and provides an exceptional user experience.</p><a className="text-link" href="mailto:toludavid30@gmail.com">Let's build something amazing <Arrow /></a></div><div className="portrait-wrap"><img src={image('profile.jpeg')} alt="Agbede Tolulope David" /><span className="portrait-caption">Lagos, Nigeria · 2025</span></div></div></section>

      <section className="skills" id="skills"><div className="marquee-track">{[...skills, ...skills].map((skill, index) => <span key={`${skill}-${index}`}>{skill} <b>✦</b></span>)}</div><div className="skills-inner container"><div className="section-kicker"><span>02</span> The toolkit</div><h2>Curious by<br /><span>default.</span></h2><p>Tools I use to make ideas real, from first sketch to final deploy.</p><div className="skill-list">{skills.map((skill, index) => <span key={skill}><small>0{index + 1}</small>{skill}</span>)}</div></div></section>

      <section className="projects" id="projects" style={{ overflow: 'clip' }}><div className="projects-intro container"><div className="section-kicker"><span>03</span> Selected work</div><h2>A few things<br /><span>I've made.</span></h2><p>Keep scrolling to move through the work. The gallery pins briefly, then releases you back into the page.</p></div><div className="project-pin" ref={projectPinRef} style={{ height: '360vh', position: 'relative' }}><div className="project-track" ref={projectTrackRef} style={{ position: 'sticky', top: '14vh' }}>{projects.map((project) => <article className="project-card" key={project.title}><div className="project-image"><img src={image(project.image)} alt={`${project.title} preview`} /><span>{project.label}</span></div><div className="project-details"><h3>{project.title}</h3><p>{project.description}</p><div className="tag-row">{project.tech.map((tag) => <span key={tag}>{tag}</span>)}</div><div className="project-links"><a href={project.live} target="_blank" rel="noreferrer">Live site <Arrow /></a><a href={project.repo} target="_blank" rel="noreferrer">GitHub <Arrow /></a></div></div></article>)}</div></div></section>

      <section className="contact section container" id="contact"><div className="section-kicker"><span>04</span> Get in touch</div><div className="contact-grid"><h2>Have an idea?<br /><span>Let's talk.</span></h2><div><p>Have a project in mind or just want to chat? I’m always open to thoughtful conversations and interesting challenges.</p><a className="email-link" href="mailto:toludavid30@gmail.com">toludavid30@gmail.com <Arrow /></a><div className="socials"><a href="https://github.com/toludavid30" target="_blank" rel="noreferrer">GitHub</a><a href="https://linkedin.com/in/tolulope-agbede-22b521361" target="_blank" rel="noreferrer">LinkedIn</a><a href="tel:+2348125160451">Phone</a></div></div></div></section>
    </main>
    <footer className="footer"><div className="container footer-inner"><a className="brand" href="#home">Agbede <span>T.D.</span></a><p>© {new Date().getFullYear()} Agbede Tolulope David. All rights reserved.</p><a href="#home">Back to top ↑</a></div></footer>
  </div>
}

export default Home
