import {Grid} from "./grid.js";
import {Word} from "./word.js";
import {groupedWords} from "./groupedWords.js";

let isValidMove;
let gridRowSize = 30;
let gridColSize = 30;

let grid1 = new Grid(gridRowSize, gridColSize, "grid");
let word1 = new Word("seat");
let word2 = new Word("treat");
let word3 = new Word("eat");


let words = [];

words.push(word1);
words.push(word2);
words.push(word3);

let groupedWordsObj = new groupedWords();
groupedWordsObj.groupWords(words);

for(let i = 0; i < groupedWordsObj.groupCount; i++)
{
    for(let j = 0; j < groupedWordsObj.groups; j++)
    {
        for(let k = j + 1; k < groupedWordsObj.groups; k++)
        {
            
        }
    }
}

console.log("before filter:");
groupedWordsObj.showWordGroups();
groupedWordsObj.filterGroups();
console.log("After filter");
groupedWordsObj.showWordGroups();

//main algorithm