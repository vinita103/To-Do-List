 
    // When the button is clicked:
    // The text from the input box is used to add a list item to the bottom of the list  
      
      let ListArray = ['Cooking', 'Cleaning', 'Reading','Walk']; 
          let ulTag = document.getElementById('toDoList');
    
function additems(){
    for (let i = 0; i < ListArray.length; i++) {
        let newLi = document. createElement("li");
        newLi.setAttribute("id", "item"+i);
        newLi.setAttribute("onclick", "addStripeAndRemove("+i+",item"+i+")");

        newLi. appendChild(document.createTextNode(ListArray[i]));
        ulTag. appendChild(newLi);
    }
}

   additems();

//    Show a button to add a to-do. When the button is clicked:
// The text from the input box is used to add a list item to the bottom of the list
// The text from the input box is cleared out.
  
    function getInputvalue(){
    
    document.getElementById('toDoList').innerHTML = '';  
    
    let valueOftextbox = document.getElementById('toDoListValue').value; 
    console.log('toDoListValue  ',valueOftextbox); 

    ListArray.push(valueOftextbox); 
    console.log(ListArray);
         
    for( let i = 0; i < ListArray.length ; i++){ 
        var newLiTag = document.createElement('li'); 
        newLiTag.setAttribute("id", "item"+i); 
        newLiTag.setAttribute("onclick", "addStripeAndRemove("+i+")"); 
        newLiTag.appendChild(document.createTextNode(ListArray[i])); 
        ulTag.appendChild(newLiTag); 
    }

    document.getElementById('toDoListValue').value = ''; 
}

// When a list item is clicked, cross it out, then remove it after 1 second.

function addStripeAndRemove(i){ 
  
    let selectedLiElement = document.getElementById('item'+i); 
    // console.log(selectedLiElement);
    selectedLiElement.classList.add('stripe'); 


    setTimeout(function() { 
        console.log('before item deletion',ListArray);
        ListArray.splice(i,1);
        console.log('After item deletion',ListArray);

        
        document.getElementById('toDoList').innerHTML = ''; 
        var ulTag = document.getElementById('toDoList'); 
        
        for( let i = 0; i < ListArray.length ; i++){ 
            var newLiTag = document.createElement('li'); 
            newLiTag.setAttribute("id", "item"+i); 
            newLiTag.setAttribute("onclick", "addStripeAndRemove("+i+")"); 
            newLiTag.appendChild(document.createTextNode(ListArray[i])); 
            ulTag.appendChild(newLiTag); 
        }
    }, 1000); 

}