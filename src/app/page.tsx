import About from "@/components/About"
import Contact from "@/components/Contact"
import Hero from "@/components/Hero"
import MyWork from "@/components/MyWork"
import Skills from "@/components/Skills"


function Home() {
  return (
    <div>
      <Hero /> 
      <About />
      <Skills />
      <MyWork />
      <Contact />    
    </div>
  )
}

export default Home