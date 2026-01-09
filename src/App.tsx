import { Layout } from './components/layout'
import { Hero, TechStack, Projects, Contact } from './components/sections'

function App() {
  return (
    <Layout>
      <Hero />
      <TechStack />
      <Projects />
      <Contact />
    </Layout>
  )
}

export default App
