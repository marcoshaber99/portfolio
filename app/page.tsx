import About from "@/components/About";
import SectionDivider from "@/components/SectionDivider";
import Intro from "@/components/intro";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
    </main>
  )
}
