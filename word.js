let orientationEnum = {
    vertical : "vertical",
    horizontal : "horizontal"
}

export class Word
{
    static #idCounter = 0;

    #wordText;
    #isUsed;
    #id
    #orientation;

    get wordText()
    {
        return this.#wordText;
    }

    get isUsed()
    {
        return this.#isUsed;
    }

    set isUsed(boolValue)
    {
        this.#isUsed = boolValue;
    }

    get wordID()
    {
        return this.#id;
    }

    constructor(text)
    {
        this.#wordText = text;
        this.#isUsed = false;
        this.#id = Word.#idCounter++;
    }

    wordLength()
    {
        return this.#wordText.length;
    }

    getLetter(letterIndex)
    {
        return this.#wordText[letterIndex];
    }

    showInfo()
    {
        console.log("id = " + this.#id)
        console.log(this.#wordText);
        console.log("is used: " + this.isUsed);
    }
}