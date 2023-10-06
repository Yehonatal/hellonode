const express = require("express");

const app = express();

app.get("/", function (request, response) {
    response.send("Hello Node 😅");
});

// JSON object dummy response of a user's profile on /users/:username
app.get("/users/:username", function (request, response) {
    const { username } = request.params;

    const user = {
        username: username,
        name: username,
        email: username + "@example.com",
        age: 23,
        location: "New York, USA",
        interests: ["Programming", "Hiking", "Photography"],
        bio: "I'm a software developer who loves exploring the outdoors and capturing moments with my camera.",
        profilePicture: "https://example.com/profile-picture.jpg",
        contact: {
            phone: "123-456-7890",
            twitter: "@" + username,
            linkedin: `https://www.linkedin.com/in/${username}/`,
        },
        education: "Bachelor's in Computer Science",
        work: "Software Engineer at Google",
        userRole: "Regular User",
        privacySettings: {
            allowContact: true,
            showEmail: false,
        },
        favoriteBooks: [
            "The Hitchhiker's Guide to the Galaxy",
            "The Catcher in the Rye",
        ],
        achievements: ["Gold Badge - 200 Posts", "Silver Badge - 1000 Likes"],
    };

    response.json(user);
});

const port = 5000;
app.listen(port, function () {
    console.log("Started application on port %d", port);
});
