const array_one = ["apple", "dog", "cat", "food", "kite", "elephant", "lunch", "book", "laptop"];
const array_two = ["dog", "goose", "kite", "meal", "laptop"];

let combinedArrays = array_one.concat(array_two);

let dupes = combinedArrays.filter((i, index) => {
    return combinedArrays.indexOf(i) !== index;
});

console.log(dupes)