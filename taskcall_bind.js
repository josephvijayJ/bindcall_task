// let name = {
//     firstname :'Joseph',
//     lastname : 'Vijay',
//     printFullname : function(){
//     console.log(this.firstname + ' ' + this.lastname);
//     }
// }

// name.printFullname();

//The above method is a simple object of function but when we use the call method 
//we can borrow the function from the others

//  let us consider another object having some properties
// let name2 = {
//     firstname :'Virat',
//     lastname : 'Kohli',
// }


// name.printFullname.call(name2);
// Each and every method in javascript has access to this special function called call.
// In that the call first argumennt would be the reference.in our case this will be pointing the name2 object.
// In general case we dont keep our methods inside the object,other wise we just pick them and keep it somewhere out.

// let name3 = {
//     firstname :'John',
//     lastname : 'Snow',    
// }

// let printFullname =  function(){
//     console.log(this.firstname + ' ' + this.lastname);
//     };

    // printFullname.call(name3);

    // if we had more parameters
    // The first parameter always be the reference to the this variable.
    // The rest of the arguments can be the arguments to the function
    // let name4 = {
    //     firstname :'Christiano',
    //     lastname : 'Ronaldo',    
    // }

    // let printFullname =  function(hometown){
    //     console.log(`${this.firstname} ${this.lastname} home town in ${hometown}`);
    //     };
    
    //     printFullname.call(name4,'Delhi');

        //APPLY METHOD

        //Instead of passing the arguments Individually ,in apply method we can pass them in Array list thats it.

        // printFullname.call(name4,['Delhi','Kolkata',9]); ==== > Apply Method


        /*The bind method looks excatly same as the Call method buth the only 
        difference is Instead of direct calling it will returns the  copy of that method*/
         
        //It will return a method which can be called later



        let name4 = {
            firstname :'Christiano',
            lastname : 'Ronaldo',    
        }
    
        let printFullname =  function(hometown){
            console.log(`${this.firstname} ${this.lastname} home town in ${hometown}`);
            };
        
           let printMyname = printFullname.bind(name4,'Delhi');
           console.log(printMyname);
           printMyname();

        // the difference between call and bind is the bind method can give a copy and it can be invoked later.