module.exports = function(app) {

app.get("/api/friends", function(req, res) {
	res.sendFile(path.join(__dirname, "../data/friends.js"));
	console.log("Req: "+ req);
});

app.post("/api/friends", function(req, res) {

	var newFriend = req.body;

		  newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();

		  console.log(newFriend);

		  friends.push(newFriend);

		  res.json(newFriend);
	});
};