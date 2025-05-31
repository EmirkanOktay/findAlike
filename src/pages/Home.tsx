import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Section from '../components/Section'
import Section2 from '../components/section2'
import Section3 from '../components/Section3'
import Section4 from '../components/Section4'

function Home() {
    return (
        <div>
            <Navbar />
            <Section />
            <Section2 />
            <Section3 />
            <Section4 />
            <Footer />
        </div>
    )
}

export default Home