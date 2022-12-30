import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {
    myQuestions=[
        {
            id:"Question1",
            question:"Which one of the following is not a template loop?",
            answers:{
                a:"for:each",
                b:"iterator",
                c:"map loop"
            },
            correctAnswer:"c"
        },
        {
            id:"Question2",
            question:"Which of the file is invald in LWC component folder?",
            answers:{
                a:".svg",
                b:".apex",
                c:".js"
            },
            correctAnswer:"b"
        },
        {
            id:"Question3",
            question:"WHich one of the following is not a directive?",
            answers:{
                a:"for:each",
                b:"if:true",
                c:"@track"
            },
            correctAnswer:"c"
        }
    ]

    selected ={}
    correctAnswers = 0;
    changeHandler(event){
        const {name,value} = event.target;
        this.selected = {...this.selected,[name]:value};
    }

    submitHandler(event){
        event.preventDefault();
        let correct = this.myQuestions.filter(item=>this.selected[item.id] === item.correctAnswer);
        this.correctAnswers = correct.length;
    }
    resetHandler(){
        this.selected = {}
        this.correctAnswers = 0;
    }

    get allNotSelected(){
        console.log('allnotselected '+!(Object.keys(this.selected).length === this.myQuestions.length));
        return !(Object.keys(this.selected).length === this.myQuestions.length);
    }
}