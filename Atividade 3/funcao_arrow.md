# Função Arrow (Arrow Function) em JavaScript

A função arrow é uma forma concisa e simplificada de escrever funções em JavaScript. Ela é frequentemente usada para criar funções anônimas, especialmente em situações onde o contexto de `this` é importante. As funções arrow não possuem seu próprio `this`, o que significa que elas herdam o `this` do escopo pai.

**Exemplo:**

```javascript
// Função tradicional
function somar(a, b) {
  return a + b;
}

// Função arrow
const somarArrow = (a, b) => a + b;

console.log(somar(2, 3)); // Saída: 5
console.log(somarArrow(2, 3)); // Saída: 5
