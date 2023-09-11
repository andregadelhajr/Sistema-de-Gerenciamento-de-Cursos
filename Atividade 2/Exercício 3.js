// Defina as matrizes A e B
var matrizA = [
    [1, 2],
    [3, 4]
  ];
  
  var matrizB = [
    [5, 6],
    [7, 8]
  ];
  
  // Verifique se é possível calcular a multiplicação
  var linhasA = matrizA.length;
  var colunasA = matrizA[0].length;
  var linhasB = matrizB.length;
  var colunasB = matrizB[0].length;
  
  if (colunasA !== linhasB) {
    console.log("Não é possível calcular a multiplicação das matrizes.");
  } else {
    // Crie uma matriz C para armazenar o resultado da multiplicação
    var matrizC = [];
  
    // Inicialize a matriz C com zeros
    for (var i = 0; i < linhasA; i++) {
      matrizC[i] = [];
      for (var j = 0; j < colunasB; j++) {
        matrizC[i][j] = 0;
      }
    }
  
    // Realize a multiplicação
    for (var i = 0; i < linhasA; i++) {
      for (var j = 0; j < colunasB; j++) {
        for (var k = 0; k < colunasA; k++) {
          matrizC[i][j] += matrizA[i][k] * matrizB[k][j];
        }
      }
    }
  
    // Imprima a matriz resultante C
    console.log("Matriz Resultante C:");
    for (var i = 0; i < linhasA; i++) {
      console.log(matrizC[i]);
    }
  }
  