import { LightningElement,wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import uid from '@salesforce/user/Id';

export default class WireUserDemoDetails extends LightningElement {
    userId = uid;

    @wire(getRecord,{recordId:'$userId',fields:['User.Name','User.Email']})
    getUserDetails(response){
        console.log(response);
    }
}