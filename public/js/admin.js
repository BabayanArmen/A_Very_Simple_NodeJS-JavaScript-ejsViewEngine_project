const headline = document.querySelector("#headline")
const article = document.querySelector("#article")

async function addArticle() {
    obj = {
        headline: headline.value,
        article: article.value,
    }
    const response = await fetch('http://localhost:3000/articles/add', {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const data = await response
    const dataJson = await response.json()
    console.log(data)
    console.log(dataJson)

    headline.value = ''
    article.value = ''
}