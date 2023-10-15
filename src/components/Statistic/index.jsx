import "./Statistic.scss"

export default function Statistic() {

    return (

        <section className="statistic-container">
            <div className="statistic-text">
                <h2>Advanced Statistics </h2>
                <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
            </div>
            <div className="card-wrapper">
                <div className="card-container">
                    <div className="icon-card">
                        <img src="/assets/images/icon-brand-recognition.svg" alt="icon-brand-recognition" />
                    </div>
                    <div className="card-text">
                        <h3>Brand Recognition</h3>
                        <p>Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.</p>
                    </div>
                </div>
                <div className="line"></div>

                <div className="card-container">
                    <div className="icon-card">
                        <img src="/assets/images/icon-detailed-records.svg" alt="icon-detailed-records" />
                    </div>
                    <div className="card-text">
                        <h3>Detailed Records</h3>
                        <p>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
                    </div>
                </div>
                <div className="line"></div>

                <div className="card-container">
                    <div className="icon-card">
                        <img src="/assets/images/icon-fully-customizable.svg" alt="icon-fully-customizable" />
                    </div>
                    <div className="card-text">
                        <h3>Fully Customizable</h3>
                        <p>Customizable Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
                    </div>
                </div>


            </div>

        </section>
    )
}