
import Banner from "../../components/Banner"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Search from "../../components/Search"
import Statistic from "../../components/Statistic"
import "./Home.scss"

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <section className="home-hero-wrapper">

                    <div className="home-text">
                        <h1> More than just<br /> shorter links</h1>
                        <p>Build your brand’s recognition and get detailed insights on how your links are performing.</p>
                        <button> Get Started</button>
                    </div>


                    <div className="home-image">
                        <img src="/assets/images/illustration-working.svg" alt="hero-image" />
                    </div>
                </section>

                <Search />
                <Statistic />
                <Banner />
                <Footer />
            </main>
        </>
    )
}


