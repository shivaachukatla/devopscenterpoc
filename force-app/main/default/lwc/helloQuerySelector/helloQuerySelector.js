import { LightningElement } from 'lwc';

export default class HelloQuerySelector extends LightningElement {
    userNames = ["John","smith","nik","mike"];
    fetchValuesHandler(event){
        const userElements = this.template.querySelectorAll(".name");
        Array.from(userElements).forEach(item=>{
            console.log(item.innerText);
        })
    }
}