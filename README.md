# Project 6: Feed Reader Testing

This is the 6th project for the Udacity Front-End Web Developer nanodegree submitted by Alexander Bandisch.

The purpose of this project is to create a suite of tests using the Jasmine javascript testing framework. These suite of tests will test the functionality of an existing web page application. 

## How to use the application

This is a single page application that loads RSS feeds and provides the users with links for the given feed. The user may open a menu that provides a selection of other feeds to load.  

## Where to view the Jasmine test results

The Jasmine test results are displayed at the bottom of the page.

### Start the application

To start the application, open `index.html` in your browser.

### Suite of Tests that are run

**Test Suite: RSS Feeds**
  * Tests to make sure that the `allFeeds` variable has been defined and that it is not empty.
  * Tests to ensure that each feed in the `allFeeds` object has a `URL` defined and that the `URL` is not empty.
  * Tests to ensure that each feed in the `allFeeds` object has a `name` defined and that the `name` is not empty.

**Test Suite: The Menu**
  * Tests that makes sure that the menu element is hidden by default.
  * Tests that ensures the menu changes visibility when the menu icon is clicked.

**Test Suite: Initial Entries**
  * Tests to make sure that when the loadFeed function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
  
**Test Suite: New Feed Selection**
  * A test that ensures when a new feed is loaded by the loadFeed function that the content actually changes.
