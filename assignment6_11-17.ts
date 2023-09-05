// QUESTION 11
// Names: Store the names of a few of your friends in a array called names. 
// Print each person’s name by accessing each element in the list, one at a time.
var FriendsNames11:string[]=["Ali","Ahmad","Aslam"];
for (var i:number=0;i<FriendsNames11.length;i++){
console.log(FriendsNames11[i]);
}
// QUESTION 12
// Greetings: Start with the array you used in Exercise 11, but instead of just
// printing each person’s name, print a message to them. The text of each message 
// should be the same, but each message should be personalized with the person’s 
//name.
var FriendsNames12:string[]=["Ali","Ahmad","Aslam"];
for (var i:number=0;i<FriendsNames12.length;i++){
console.log("Hello Dear Mr. ",FriendsNames12[0]);
console.log("Hello Dear ",FriendsNames12[1]);
console.log("Hello",FriendsNames12[2]);
}
// Question 13
// Your Own Array: Think of your favorite mode of transportation, such as a 
// motorcycle or a car, and make a list that stores several examples. 
// Use your list to print a series of statements about these items, such as 
// “I would like to own a Honda motorcycle.”
var MyCar:string[]=["White Color","Good Fuel Average","AC","excellent Suspension"];
for(let i:number=0;i<1;i++){
    console.log("I like",MyCar[0],"car with",MyCar[1],"an", MyCar[2], "and", MyCar[3]);
}
// Question 14
// Guest List: If you could invite anyone, living or deceased, to dinner, 
// who would you invite? Make a list that includes at least three people you’d like 
// to invite to dinner. Then use your list to print a message to each person, 
// inviting them to dinner.

let DinnerInv14:string[]=["Manto", "Newton", "Putin"];
for(let i:number=0;i<DinnerInv14.length;i++){
    console.log("Dear Mr.",DinnerInv14[i],"You re invited to join us on a dinner",);
}

// Question 15
// Changing Guest List: You just heard that one of your guests can’t make the 
// dinner, so you need to send out a new set of invitations. You’ll have to think 
// of someone else to invite.

// Start with your program from Exercise 14. Add a print statement 
// at the end of your program stating the name of the guest who can’t make it.
let DinnerInvDel:string[]=["Manto", "Newton", "Putin"];
for(let i:number=0;i<1;i++){
console.log("Announcement: Mr.",DinnerInvDel[2],"Will not be the part of dinner");
}

// Modify your list, replacing the name of the guest who can’t m
// ake it with the name of the new person you are inviting.
let DinnerInvAdd:string[]=["Manto", "Newton", "Putin"];{
    DinnerInvAdd.splice(2,1,"King Salman");
    console.log(DinnerInvAdd);
}
//Print a second set of invitation messages, one for each person who is 
//still in your list.
for(let i:number=0;i<DinnerInvAdd.length;i++){
    console.log("Announcement with Revision: Mr.",DinnerInvAdd[i],"You re invited to join us on a dinner",);
}
// QUESTION 16
// More Guests: You just found a bigger dinner table, so now more space is available.
// Think of three more guests to invite to dinner.Start with your program from 
// Exercise 15. Add a print statement to the end of your program informing people 
// that you found a bigger dinner table.
let DinnerInvMore:string[]=["Manto", "Newton", "Putin"];{
    DinnerInvMore.splice(2,1,"King Salman");
    console.log(DinnerInvMore);
}

for(let i:number=0;i<DinnerInvMore.length;i++){
console.log("Announcement with Revision: Mr.",DinnerInvMore[i],"You re invited to join us on a dinner",);
}
console.log("wE HAVE A BIG TABLE ARRIVING SOON, AND WE WILL INVITE THREE MORE GUESTS");

let DinnerInvMore1:string[]=["Manto", "Newton", "King Salman"];{
    DinnerInvMore1.unshift("Shoaib");
    console.log(DinnerInvMore1);
}
for(let i:number=0;i<DinnerInvMore1.length;i++){
console.log("Mr.",DinnerInvMore1[i],"You re invited to join us on a dinner",);
}
//Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
let DinnerInvMore2:string[]=["Shoaib","Manto", "Newton", "King Salman"];{
    DinnerInvMore2.splice(2,0,"Tesla");
    console.log(DinnerInvMore2);
}
for(let i:number=0;i<DinnerInvMore2.length;i++){
console.log("Mr.",DinnerInvMore2[i],"You re invited to join us on a dinner",);
}
let DinnerInvMore3:string[]=["Shoaib","Manto","Tesla", "Newton", "King Salman"];{
    DinnerInvMore3.splice(5,0,"Babar");
    console.log(DinnerInvMore3);
}
for(let i:number=0;i<DinnerInvMore3.length;i++){
console.log("Mr.",DinnerInvMore3[i],"You re invited to join us on a dinner",);
}

//question 17
// Shrinking Guest List: You just found out that your new dinner table won’t 
// arrive in time for the dinner, and you have space for only two guests.
// Start with your program from Exercise 16. Add a new line that prints a message 
// saying that you can invite only two people for dinner.
let DinnerShrink:string[]=["Shoaib","Manto","Tesla", "Newton", "King Salman","Babar"];{
    
console.log("I can invite only two persons for dinner as table is not arriving tonight");
}
// Remove guests from your list one at a time until only two names remain in your 
// list. Each time you pop a name from your list, print a message to that person 
// letting them know you’re sorry you can’t invite them to dinner.
let DinnerShrink1:string[]=["Shoaib","Manto","Tesla", "Newton", "King Salman","Babar"];
for(let i:number=5;i>1;i--){
    console.log("Mr.", DinnerShrink1[i],"We are sorry You're not invited for dinner");
    DinnerShrink1.pop();   
}
console.log(DinnerShrink1);
//Print a message to each of the two people still on your list, letting them know they’re still invited.
for(let j:number=0;j<DinnerShrink1.length;j++){
    console.log("Mr.", DinnerShrink1[j],"You're invited for dinner");
}
DinnerShrink1.shift(); 
DinnerShrink1.pop(); 
console.log("AN EMPTY LIST",DinnerShrink1);

    