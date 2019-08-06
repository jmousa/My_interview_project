import { Selector } from 'testcafe';

fixture `Getting Started`
    .page `http://devexpress.github.io/testcafe/example`;

test('My first test', async t => {
    await t
        .typeText('#developer-name', 'John Smith')
        .click('#submit-button');

    const articleHeader = await Selector('.result-content').find('h1');

    // Obtain the text of the article header
    let headerText = await articleHeader.innerText;
});

// testcafe chrome test.js
// testcafe firefox test.js
// testcafe edge test.js
// testcafe safari test.js

// testcafe "chrome:headless" test.js

// testcafe chrome test.js --speed 1