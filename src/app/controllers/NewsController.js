class NewsController {
  index(req, res) {
    // Render the news page
    res.render("news");
  }

  show(req, res) {
    // Render the news detail page
    res.send("NEWS DETAIL");
  }
}

module.exports = new NewsController();