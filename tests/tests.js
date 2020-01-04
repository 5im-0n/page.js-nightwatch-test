module.exports = {
	'navigate to nohashbang.html': function (browser) {
		var url = 'http://127.0.0.1:8001/';
		browser
		.url(url)
		.waitForElementVisible('#someoutput')
		.assert.urlEquals(url)
		.click('.hello-link')
		.assert.urlEquals(url + 'hello')
		.click('.hello-with-qs-link')
		.assert.urlEquals(url + 'hello?some=query&str=ing')
		.url(url + '?some=query&str=ing')
		.assert.urlEquals(url + '?some=query&str=ing')
		.url(url + 'hello?some=query&str=ing')
		.assert.urlEquals(url + 'hello?some=query&str=ing')
		.end();
	},
	'navigate to hashbang.html': function (browser) {
		var url = 'http://127.0.0.1:8000/';
		browser
			.url(url)
			.waitForElementVisible('#someoutput')
			.assert.urlEquals(url)
			.click('.hello-link')
			.assert.urlEquals(url + '#!/hello')
			.click('.hello-with-qs-link')
			.assert.urlEquals(url + '#!/hello?some=query&str=ing')
			.url(url + '?some=query&str=ing')
			.assert.urlEquals(url + '#!?some=query&str=ing')
			.url(url + '?some=query&str=ing#!/hello')
			.assert.urlEquals(url + '#!/hello?some=query&str=ing')
			.end();
	}
  };
