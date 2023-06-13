const library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

const numberOfBooksRead = Object.values(library).reduce((count, curr) => {
  // write your code here
  if(curr.readingStatus === true){
        count++;
    }
    return count;
}, 0);


// Do not change the code below

alert(numberOfBooksRead());
