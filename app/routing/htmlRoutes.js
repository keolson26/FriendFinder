module.exports = function(app) {

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "server.html"));
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
};