export class Component{
    #state = Object.freeze({});
    constructor(tagName){
        this.node = document.createElement(tagName);
    }
    set state(newState){
        this.#state = Object.freeze({...(this.#state), ...newState});
        this.render();
    }
    get state(){
        return this.#state;
    }
    render(){}
}

