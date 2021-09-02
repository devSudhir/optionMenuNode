const readline = require("readline");

const myBooks = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const books = [
  {
    id: 1,
    name: "js",
  },
  {
    id: 2,
    name: "node",
  },
  {
    id: 3,
    name: "react",
  },
  {
    id: 4,
    name: "redux",
  },
  {
    id: 5,
    name: "Html",
  },
];
const myFun = () => {
  myBooks.question(
    "Press 1 - Show all books \n Press 2 - Add a new book \n Press 3 - Quit \n",
    (answer) => {
      if (answer == 1) {
        console.log("1 pressed");
        books.map((ele, index) => {
          console.log(`${index + 1}.${ele.name}`);
        });
        //myBooks.close();
        myFun();
      } else if (answer == 2) {
        console.log("2 pressed");
        myBooks.question("Please Enter Book Name?\n", (answer) => {
          const payload = {
            id: books.length,
            name: answer,
          };
          books.push(payload);
          myFun();
        });
        //myBooks.close();
        myFun();
      } else if (answer == 3) {
        myBooks.question("Do you want to quit? Y/N \n", (answer) => {
          if (answer.toUpperCase() === "Y") {
            myBooks.close();
          } else {
            //myBooks.close();
            myFun();
          }
        });
      } else {
        console.log("Invalid input, please choose one of the below options!");
        //myBooks.close();
        myFun();
      }
    }
  );
};
myBooks.on("close", () => {
  console.log("Bye Bye");
});
myFun();
