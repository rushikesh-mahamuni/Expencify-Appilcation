import React from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import 'react-dates/lib/css/_datepicker.css'

//const now=moment();
//console.log(now.format('MMMM Do, YYYY'))


export default class ExpenceForm extends React.Component{
    
    constructor(props){
        super(props);

        this.state={
            description :   props.expence ? props.expence.description :'',
            note:   props.expence ? props.expence.note :'',
            amount: props.expence ? (props.expence.amount/10).toString() :'',
            createdAt:  props.expence ? moment(props.expence.createdAt)  :moment(),
            calenderFocused:false,
            error:''
        };
    }
    

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({description}))
    };

    onNoteChange = (e) => {
        const note=e.target.value;
        this.setState(() => ({note  }))
    };

    onAmountChange = (e) => {
        const amount= e.target.value;
        if( !amount || amount.match(/^\d*(\.\d{0,2})?$/) ){
            this.setState(() => ({amount}))
        }
    };

    onDateChange = (createdAt) => {
        if(createdAt){
            this.setState(() => ({createdAt}))
        }
    };

    onFocusChange = (focused) => {
        this.setState(()=> ({calenderFocused:focused}))
    };

    onSubmit = (e) => {
        
        if(!this.state.description || !this.state.amount){
            this.setState(() =>({error:'Please Provide Description and Amount'}))
        }else{
            this.setState(() => ({error:''}))
            this.props.onSubmit({
                description:this.state.description,
                amount:parseFloat(this.state.amount,),
                createdAt:this.state.createdAt.valueOf(),
                note:this.state.note
            })
        }
        e.preventDefault();
    };
    
    render(){
        return(
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input 
                    type='text'
                    placeholder='Description'
                    autoFocus
                    value={this.state.description}
                    onChange={this.onDescriptionChange}
                    />

                    <input 
                    type='text'
                    placeholder='Amount'
                    value={this.state.amount}
                    onChange={this.onAmountChange}
                    />

                    <SingleDatePicker 
                    date = {this.state.createdAt}
                    onDateChange = {this.onDateChange}
                    focused={this.state.calenderFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                    />

                    <textarea
                    placeholder='Add a note for your expence (optinal)'
                    value={this.state.note}
                    onChange={this.onNoteChange}
                    >     
                    </textarea>

                    <button style={{cursor:'pointer'}}> Add Expence</button>
                </form>
            </div>
        )
    }
}



