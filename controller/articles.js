const Article = require('../models/article')

exports.add = (req, res) => {
    // console.log(req.body)
    const article = new Article(req.body.headline, req.body.article)
    article.save()
    res.status(200).json({message: "new article added"})
}