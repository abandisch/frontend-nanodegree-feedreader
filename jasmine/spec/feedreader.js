/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('Should have a URL defined and the URL should not be empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.trim().length).toBeTruthy();
            });
        });

        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('Should have a name defined and the name should not be empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.trim().length).toBeTruthy();
            });
        });
    });


    /**
     * Test suite: The menu
     */
    describe('The menu', function() {
        var $body = $('body');

        /* A test that ensures the menu element is hidden by default. */
        it('Should ensure that the menu element is hidden by default', function() {
            var bodyClass = $body.attr('class');
            expect(bodyClass).toBe("menu-hidden");
        });


        /* A test that ensures the menu changes visibility when the menu icon is clicked.
         * This test has two expectations: does the menu display when clicked and does it hide when clicked again.
         */
        it('Should ensure the menu changes visibility when the menu icon is clicked', function() {
            var $menu_icon = $('.menu-icon-link'),
                bodyClassAfterClicking;

            $menu_icon.trigger('click');
            bodyClassAfterClicking = $body.attr('class');
            expect(bodyClassAfterClicking).toBeFalsy();

            $menu_icon.trigger('click');
            bodyClassAfterClicking = $body.attr('class');
            expect(bodyClassAfterClicking).toBe("menu-hidden");
        });
    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {

        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        it('Should have at least one .entry element within the .feed container', function(done) {
            var numberOfEntries = $('.feed').find('.entry').length;
            expect(numberOfEntries).toBeTruthy();
            done();
        });

    });

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        var currentContent,
            newContent,
            enoughFeeds = (allFeeds.length >= 2);

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        beforeEach(function(done) {
            if (enoughFeeds) {
                currentContent = $('.feed').find('.entry').find('h2').text();
                loadFeed(1, function() {
                    newContent = $('.feed').find('.entry').find('h2').text();
                    done();
                });
            } else {
                done();
            }
        });

        it('Should ensure a new feed changes the content', function(done) {
            if (enoughFeeds) {
                expect(currentContent).not.toBe(newContent);
            } else {
                fail("Cannot test - not enough feeds");
            }
            done();
        });

        afterEach(function(done) {
            if (enoughFeeds) {
                loadFeed(0);
            }
            done();
        });
    });

}());
