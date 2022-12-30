import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import NAME_FIELD from '@salesforce/schema/Account.Name'
import ANNUAL_REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue'
import TYPE_FIELD from '@salesforce/schema/Account.Type'
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry'



export default class RecordFormDemp extends LightningElement {
    recordId;
    showRecordInViewMode=false;
    objectName = ACCOUNT_OBJECT;
    fieldList = [NAME_FIELD, ANNUAL_REVENUE_FIELD, TYPE_FIELD, INDUSTRY_FIELD]

    successHandler(event){ 
        this.recordId = event.detail.id;
        this.showRecordInViewMode = true;
        const toastEvent = new ShowToastEvent({ 
            title:"Account created",
            message:"Record ID: "+ event.detail.id,
            variant:"success"
        })
        this.dispatchEvent(toastEvent)
    }
}