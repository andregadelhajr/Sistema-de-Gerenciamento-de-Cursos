// Defina a matriz A
var matrizA = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  // Função para calcular a transposta de uma matriz
  function transposta(matriz) {
    var linhas = matriz.length;
    var colunas = matriz[0].length;
    var matrizTransposta = [];
  
    for (var i = 0; i < colunas; i++) {
      matrizTransposta[i] = [];
      for (var j = 0; j < linhas; j++) {
        matrizTransposta[i][j] = matriz[j][i];
      }
    }
  
    return matrizTransposta;
  }
  
  // Imprima a matriz A e sua transposta
  console.log("Matriz A:");
  for (var i = 0; i < matrizA.length; i++) {
    console.log(matrizA[i]);
  }
  
  var matrizTranspostaA = transposta(matrizA);
  
  console.log("Matriz Transposta de A:");
  for (var i = 0; i < matrizTranspostaA.length; i++) {
    console.log(matrizTranspostaA[i]);
  }
  