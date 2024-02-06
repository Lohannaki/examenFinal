
export class Country {

    #awnsers; 
    #infos; 
    #element; 
    constructor(options) {
        this.#infos = options; 
        this.#awnsers = this.getAwnsers();  
        console.log(this.#infos.flag); 
        this.#element = this.#infos.flag; 
    }

    getAwnsers () {
        const set = new Set(); 
        const awnsersTab = Object.values(this.#infos.translations); 
        awnsersTab.forEach(element => {
            const option = element.common.toLowerCase(); 
            set.add(option);  
        }); 
        return set; 
    }

    checkAwnser (submission) {
        const lowSubmission = submission.toLowerCase(); 
        return this.#awnsers.has(lowSubmission);
    }

    render () {
        const html = `
        <div id="flag">
            <h1>${this.#element}</h1>
        </div>
        `

        document.querySelector('main').insertAdjacentHTML("afterbegin", html); 
    }
}