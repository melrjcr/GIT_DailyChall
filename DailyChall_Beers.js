
initial_count = prompt('How many beers we got on the wall?'); 
var Beer_off = 1
const content = [' bottles of beer', ' bottles of beer on the wall', 'Take ', ' down,', ' pass it around' ,' pass them around' ]


function counting_bottles(params) {
    console.log (params + content[1]);
    console.log (params +content[0]);
    if (Beer_off ==1){
        console.log ( content[2] + Beer_off + content[3]+ content[4])   
    } 
    else {
        console.log ( content[2] + Beer_off + content[3]+content[5])
    }
    initial_count = (params - Beer_off) 
    console.log ((initial_count)+ content[1]);   
}
do { 
    counting_bottles(initial_count);
    Beer_off++;      

    if ( initial_count < Beer_off ) {
        console.log ('ohy! these are mine, yala yala');
        initial_count === 0
    } 
 }while (initial_count != 0 && initial_count > 0);
