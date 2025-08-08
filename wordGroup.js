export class WordGroup
{
    #groupLetter
    #wordCount
    #words = new Map();
    letterIndexes = new Map();

    constructor(letter)
    {
        this.#wordCount = 0;
        this.#groupLetter = letter;
    }

    get wordCount()
    {
        return this.#wordCount;
    }

    containsWord(wordID)
    {
        return this.#words.has(wordID);
    }

    addWord(word)
    {
        this.#words.set(word.wordID, word);
        this.#wordCount++;
    }

    showWords()
    {
        for(let value of this.#words.values())
        {
            value.showInfo();
        }
    }
}