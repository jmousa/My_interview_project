import { BasePage } from "../pages/BasePage";
 
const page = new BasePage();
 
fixture`Home`.page(page.baseUrl);
 
test('Correct title displays', async t => {
    await t
        .expect(page.title.textContent)
        .eql("name game")
});
 
// the idea is to set up an infinite loop so that the script keeps running //as long as
// the user is interacting with the application. but the guys at //stackoverflow seem 
// to think that are some issues with using the following construct in //javascript.
// while(1) and while(true) as well as for (;;) {} and it seems that they //are right.
// OK, let's go with the old fashioned approach. it always works
 
const maxTry = 1000;
let count = 0;
 
while (count < maxTry) {
 
 
  test('Attempts counter increments after selecting a first photo', async t => {
 
    const initialTriesCount    = Number(await page.tries.textContent);
    const initialCorrectCount  = Number(await page.correct.textContent);
    const initialStreakCount   = Number(await page.streak.textContent);
 
    console.log(initialTriesCount);
    console.log(initialCorrectCount);
    console.log(initialStreakCount);
    
    await t.click(page.photo3);
 
 
    const finalTriesCount    = Number(await page.tries.textContent);
    const finalCorrectCount  = Number(await page.correct.textContent);
    const finalStreakCount   = Number(await page.streak.textContent);
 
    console.log(finalTriesCount);
    console.log(finalCorrectCount);
    console.log(finalStreakCount);
 
    await t
    .expect(finalTriesCount)       
    .eql(initialTriesCount + 1);	// Verify the counters functionality as follows  A
 
    await t
    .expect(finalCorrectCount)	// Correct Answers have a lower probability of repeating test
    .lte( finalTriesCount); 
    
    await t
    .expect(finalStreakCount)  	// Verify the counters functionality as follows  C
    .lte(finalCorrectCount);   
    
 
 
///////////////////////////////////////////////////////////////
    await t.click(page.photo4);
 
    await t
    .expect(finalTriesCount)
    .eql(initialTriesCount + 1);
 
    await t
    .expect(finalCorrectCount)
    .lte( finalTriesCount);
 
    await t
    .expect(finalStreakCount)
    .lte(finalCorrectCount);
 
///////////////////////////////////////////////////////////////
    await t.click(page.photo2);
 
    await t
    .expect(finalTriesCount)
    .eql(initialTriesCount + 1);
 
    await t
    .expect(finalCorrectCount)
    .lte( finalTriesCount);
 
    await t
    .expect(finalStreakCount)
    .lte(finalCorrectCount);
 
///////////////////////////////////////////////////////////////
    await t.click(page.photo5);
 
    await t
    .expect(finalTriesCount)
    .eql(initialTriesCount + 1);
 
    await t
    .expect(finalCorrectCount)
    .lte( finalTriesCount);
 
    await t
    .expect(finalStreakCount)
    .lte(finalCorrectCount);
 
///////////////////////////////////////////////////////////////
    await t.click(page.photo1);
 
    await t
    .expect(finalTriesCount)
    .eql(initialTriesCount + 1);
 
    await t
    .expect(finalCorrectCount)
    .lte( finalTriesCount);
 
    await t
    .expect(finalStreakCount)
    .lte(finalCorrectCount);
 
  });
  count++;
}
 
 
 
// testcafe chrome Test.js --speed .75
// testcafe firefox Test.js --speed .75
// testcafe ie Test.js --speed .75
// testcafe edge Test.js --speed .75
// testcafe "safari:headless"  Test.js .75
 

// the above test speed seems to be the right one. 
// as the script is able to click on all the images
// before they refresh.
 
// let's now try to turn it in headless mode
// TestCafe support only 2 browsers in headless mode.
// testcafe "chrome:headless"  Test.js
// testcafe "firefox:headless"  Test.js
