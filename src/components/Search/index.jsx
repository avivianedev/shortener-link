import { useEffect, useState } from "react"
import "./Search.scss"

import api from "../../services/api"
import { getLinksSave, saveLink } from "../../services/storeLink"
import Button from "../Button"


export default function Search() {

    const [Link, SetLink] = useState('')
    const [ShowMgsError, SetShowMgsError] = useState(false)
    const [DataLink, SetDataLink] = useState({})

    const [myLinks, setMyLinks] = useState([]);

    const [classbnt, Setclassbnt] = useState(false)

    async function copyLink(link) {
        await navigator.clipboard.writeText(link)
        Setclassbnt({ ...classbnt, [link]: true });

        //alert('Copied!')
    }


    useEffect(() => {

        async function getLink() {
            const links = await getLinksSave("links")
            setMyLinks(links)

        }
        getLink()
    }, [])


    async function handleShortLink() {

        try {
            let url = new URL(Link)
            SetShowMgsError(false) // Mensagem de erro setada como false; 

            try {
                const response = await api.post('/shorten', {
                    long_url: Link
                })
                SetDataLink(response.data)
                saveLink("links", response.data)

                const links = await getLinksSave("links")
                setMyLinks(links)
                SetLink('')

            }
            catch (error) {
                alert('Problems connecting to the API', error)
                SetLink('')
            }

        }
        catch (error) {
            SetShowMgsError(true) // Mensagem de erro caso não seja url válida; 
        }
    }


    return (
        <section className="search-container">
            <div className="search-bg" >
                <input type="text"
                    className={ShowMgsError ? "input-error" : ""}
                    placeholder="Shorten a link here..."
                    onChange={(e) => SetLink(e.target.value)}
                    value={Link}

                />
                <button onClick={handleShortLink}>Shorten It!</button>
                {ShowMgsError && <span className="message-error">Plaese add a link</span>}

            </div>

            <section className="shortened-links-container">
                {myLinks.length > 0 && myLinks.map(l =>
                    <div key={l.id} className="shortened-links">
                        <p>{l.long_url}</p>
                        <div className="short-btn">
                            <span>{l.link}</span>

                            <Button title={classbnt[l.link] ? "Copied" : "Copy"}
                                onClick={() => copyLink(l.link)}

                                className={classbnt[l.link] ? "btn-copied" : "btn-copy"}
                            ></Button>
                        </div>
                    </div>
                )}

            </section>
        </section>
    )
}