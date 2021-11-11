function trueNum(arr){
    let result=0
    arr.map(item=>{
        if(item===true) result++
        }
    )
    return result
}

let arr=[true,false,true,12,1,0,null,true,'ad']
console.log(trueNum(arr))