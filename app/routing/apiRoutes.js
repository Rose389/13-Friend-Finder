// dependendancies
var express = require("express");

// A GET route with the url `/api/friends`. 
var app = express();


/// ----- API Route Requests ----- ///
app.get("/api/friends", handleGetFriendsRequest);

app.post("/api/friends", handlePostFriendsRequest)

/// ----- Controllers to handle route requests ----- ///

// response to write data from friends.js to the page as a json object
function handleGetFriendsRequest(req, res) {
			var friends = getAllFriends()
			res.writeHead(200, { "Content-Type": "application/json" });
		  	res.json(friends);
		}

// response to write data to friends.js as a json object
function handlePostFriendsRequest(req, res) {
			var friends = getAllFriends()
			res.writeHead(200, { "Content-Type": "application/json" });
		  	res.json(friends);
		}

/// ----- Database handlers ----- ///

// retrieve data from friends.js database
function getAllFriends() {
	var friends = fs.readFile(__dirname + "/friends.js", function(err, data) {
        return data;
      });	
	return friends
}

function postNewFriend() {
	var friend = 
}


// A POST routes `/api/friends`. 



	// This will be used to handle incoming survey results. 
		// when submit button is clicked


	// This route will also be used to handle the compatibility logic. 
		//
		/*......Determine the user's most compatible friend using the following as a guide......

   * Convert each user's results into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`).
   * With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the `totalDifference`.
     * Example: 
       * User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
       * User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
       * Total Difference: **2 + 1 + 2 =** **_5_**
   * Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both `5-3` and `3-5` as `2`, and so on. 
   * The closest match will be the user with the least amount of difference.

7. Once you've found the current user's most compatible friend, display the result as a modal pop-up.
   * The modal should display both the name and picture of the closest match. 
*/



	// RESTful -- CRUD (create, read, update, delete)