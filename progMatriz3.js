let mat = []

for(let i = 0; i < 5; i++){
    mat[i] = []
    for(let j = 0; j < 5; j++){
        if(j % 2 === 0){
            mat[j] = 1
        }else{
            mat[i][j] = 1
        }
    }
}

console.table(mat)

