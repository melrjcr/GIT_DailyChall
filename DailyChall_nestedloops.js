let string = prompt('whats your phrase?')
var array = string.split(' ')
console.log(array);

var longest= 0;
var word = '';
var line = '';  
var space = '';
var margen = ''

function sign(arr) {
    
    for (i = 0; i < arr.length; i++){
        
        for (j = i + 1; j < arr.length; j++){
            if(arr[i].length > arr[j].length){
                var longest = arr[i].length ;
                    word = arr[i] ;
            } 
        }  
    } 
    // console.log(word) 
    // console.log (longest)
    
    for (i=0; i < longest + 8; i++) {
        line += "*"
    }
    console.log(line)
    

    for (i = 0; i < arr.length; i++){
        var space = longest- arr[i].length;
        console.log (space)
        for (j = 0 ; j < space; j++){
            margen = "-";
        } 
        console.log('* '+ arr[i] + margen + ' *')   
    } 
     console.log(line) 

      
}
sign(array)

