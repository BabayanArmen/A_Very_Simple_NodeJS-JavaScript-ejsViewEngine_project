const articles = []

module.exports = class Article {
    constructor(headline, article) {
        this.headline = headline
        this.article = article
    }

    save() {
        articles.push({
            headline: this.headline,
            article: this.article
        })
    }

    static getArticles() {
        return articles
    }
}