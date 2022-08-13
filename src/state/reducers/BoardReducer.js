import { v4 as uuidv4 } from 'uuid';
const data=[{
    cardTitle:"Tickect1",
    cardDescription:"This is My Description",
    cardId:uuidv4()
},{
    cardTitle:"Tickect2",
    cardDescription:"This is My Description",
    cardId:uuidv4()
},{
    cardTitle:"Tickect3",
    cardDescription:"This is My Description",
    cardId:uuidv4()
},{
    cardTitle:"Tickect4",
    cardDescription:"This is My Description",
    cardId:uuidv4()
},{
    cardTitle:"Tickect5",
    cardDescription:"This is My Description",
    cardId:uuidv4()
},{
    cardTitle:"Tickect6",
    cardDescription:"This is My Description",
    cardId:uuidv4()
},{
    cardTitle:"Tickect7",
    cardDescription:"This is My Description",
    cardId:uuidv4()
},{
    cardTitle:"Tickect8",
    cardDescription:"This is My Description",
    cardId:uuidv4()
},{
    cardTitle:"Tickect9",
    cardDescription:"This is My Description",
    cardId:uuidv4()
},{
    cardTitle:"Tickect10",
    cardDescription:"This is My Description",
    cardId:uuidv4()
},{
    cardTitle:"Tickect11",
    cardDescription:"This is My Description",
    cardId:uuidv4()
}];
const BoardReducer = (state = [
    ...data
], action) => { 
   

    if(action.type==="DELETE")
    {
        const filterdState=state.filter((card)=>card.cardId!=action.payload)
        
        return  filterdState;
    }
    
else{
return state;
}
  
           
       
   
};

export default BoardReducer;