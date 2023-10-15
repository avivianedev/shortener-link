export function getLinksSave(key) {
    const myLinks = localStorage.getItem(key)
    let linksSaves = JSON.parse(myLinks) || []; // SALVOU OS LINKS DO STORAGE NESSE ARRAY
    return linksSaves;
}

export async function saveLink(key, newlink) {
    let linksStored = await getLinksSave(key);

    // Verificar se o novo link ja tem salvo no localStorage, não deixar duplicar.
    const hasLInk = linksStored.some(link => link === newlink);

    if (hasLInk) {
        alert('Links already in the list')
        return
    }
    // Adiocnar o novo link na lista
    linksStored.push(newlink)
    await localStorage.setItem(key, JSON.stringify(linksStored))
    console.log('Link salvo')
}
