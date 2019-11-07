import { Selector } from "testcafe";
 
export class BasePage {
 
    baseUrl = 'http://www.ericrochester.com/name-game/';
 
    title = Selector(".header")
 
    photo1 = Selector(":nth-child(1) > .shade")
    photo2 = Selector(":nth-child(2) > .shade")
    photo3 = Selector(":nth-child(3) > .shade")
    photo4 = Selector(":nth-child(4) > .shade")
    photo5 = Selector(":nth-child(5) > .shade")
 
    tries    = Selector(".attempts")
    correct  = Selector(".correct")
    streak   = Selector(".streak")
 
}
