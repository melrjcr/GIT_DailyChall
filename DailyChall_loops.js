const arr = [5,0,9,1,7,4,2,6,3,8] // sort from 9 to ...using a loop


    let bigest = 0;
    for (i = 0 ; i < arr.length - 1; i++){
        for (j = i + 1; j < arr.length; j++){
            if (arr[i] < arr[j]){

                // console.log (arr[i])
                // console.log (arr[j])
                bigest = arr[i];
                arr[i] = arr[j];
                arr[j] = bigest;                
             }
        }

            
    } console.log(arr);
    console.log(arr.toString());
