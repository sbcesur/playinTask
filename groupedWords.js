import {WordGroup} from "./wordGroup.js"

export class groupedWords
{
    #groups = new Map();
    #groupCount;

    constructor()
    {
        this.#groupCount = 0;
    }

    get groupCount()
    {
        return this.#groupCount;
    }

    get groups()
    {
        return this.#groups;
    }

    groupWords(words)
    {
        for(let i = 0; i < words.length; i++)
        {
            let word = words[i];

            for(let j = 0; j < word.wordLength(); j++)
            {
                this.addToWordGroup(word.getLetter(j), word, j);
            }
        }
    }

    addToWordGroup(commonLetter, word, letterIndex)
    {
        if(!this.#groups.has(commonLetter))
        {
            this.#groups.set(commonLetter, new WordGroup(commonLetter));
            this.#groupCount++;
        }
        
        let currentGroup = this.#groups.get(commonLetter);

        if(!currentGroup.containsWord(word.wordID))     //first time adding word
        {
            currentGroup.addWord(word);


            let letterIndexArray = [];
            letterIndexArray.push(letterIndex);
            currentGroup.letterIndexes.set(word.wordID, letterIndexArray);

        }
        else if(commonLetter == word.getLetter(letterIndex))    //word alreadi in group
        {
            currentGroup.letterIndexes.get(word.wordID).push(letterIndex);
        }
    }

    showWordGroups()
    {
        console.log(this.#groups);
    }

    filterGroups()
    {
        for(const [key, value] of this.#groups) 
        {
            if(value.wordCount <= 1) 
            {
                this.#groups.delete(key);
            }
        }       
    }
}