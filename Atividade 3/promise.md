# Promise em JavaScript

Uma Promise é um objeto JavaScript que representa a eventual conclusão (ou falha) de uma operação assíncrona. As Promises são frequentemente usadas para lidar com operações demoradas, como solicitações de rede, leitura/escrita de arquivos e outras tarefas que não podem ser executadas imediatamente.

Uma Promise tem três estados possíveis:
1. **Pending**: Estado inicial, antes da conclusão.
2. **Fulfilled**: A operação foi bem-sucedida.
3. **Rejected**: A operação falhou.

**Exemplo:**

```javascript
function fazerAlgoAssincrono() {
  return new Promise((resolve, reject) => {
    // Simular uma operação assíncrona
    setTimeout(() => {
      const sucesso = true; // Mude para false para simular uma falha
      if (sucesso) {
        resolve("Operação bem-sucedida!");
      } else {
        reject("A operação falhou!");
      }
    }, 2000);
  });
}

fazerAlgoAssincrono()
  .then(resultado => {
    console.log(resultado); // Saída: Operação bem-sucedida!
  })
  .catch(erro => {
    console.error(erro);
  });
