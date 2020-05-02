# Persona 5 Tool

## Status

This a Work-In-Progress, and will require much more hours until it is feature complete

## What this tool is (and is not)

This tool is meant to help track progress through Persona 5 and Persona 5 Royal.

This tool is not a walkthrough, more a guide to the different collectibles of the game for completionists. There are already plenty of walkthroughs out there, and the game itself is straightforward enough that it does not usually require a walkthrough.

## Design philosophies

The pages should have a Persona 5 feel to them. I do so by recreating the feel for some of the components, and by borrowing assets from the game to complement them.

The pages are statically generated and the content should be accessible without Javascript enabled. Javascript is meant to complement the user experience with basic interactivity. If some basic HTML and CSS trickery can do the same thing as a Javascript functionnality, it should do so.

The tool should work fine on mobile on modern phones. I want to be able to use this tool to help me with the game, and I use my phone to look up mementos requests, confidant dialogue options, test answers and more when playing. Right now most websites I use are slow to load and use and riddled with ads. I want this tool to be intuitive, fast and fat-fingers friendly.

Related items should be linked. If a book mentions it should be bought at Shinjuku Bookstore, it should have a list to a page about the bookstore. If a confidant requires a specific level of Guts, it should link to a page with activities to increase Guts. If an item requires a specific Mementos Request to be obtained, it should link to that mementos request.

The content of the site should stay relatively small to facilite faster downloads and give the site a feeling of speed. Images should be a reasonable size for display. There should be no external JS libraries, no JS framework and no undesirable JS code like trackers, miners, etc. The tool is simple enough that basic vanilla JS should do the job.

The tool does not rely on any backend. The only backend part of this is a hosting service / CDN, and right now we are using the Github Pages as hosting. All of the data is saved in the browser and stays there.

## Features

Most of these features are not yet implemented. This is more of a wishlist for this tool.

* List of books and where / how to get them, with the possiblity to mark each one as acquired and record progress in reading them;
* List of video games, how to obtain them and bonuses granted;
* List of confidants and bond level;
* Help page and/or dialogue options for each confidant. Ideally, it shows the next dialogue based on current bond level, and allows to quickly mark options as completed;
* List of mementos requests, how to start/id/complete them, rewards, etc.
* List of PS4 trophies and tips on how to obtain them.
* List of locations and when / how to unlock them;
* Quick help guides for boosting social stats;
