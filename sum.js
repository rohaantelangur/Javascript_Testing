function sum(a,b){
    if(a==undefined && b==undefined) return "No Parameter Pass"
    if(a==undefined || b==undefined) return "Only 1 Parameter Pass"

    return a+b
}


module.exports = sum