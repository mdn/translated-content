---
title: label (Etiqueta)
slug: Web/JavaScript/Reference/Statements/label
---

{{jsSidebar("Statements")}}

Provém uma declaração com um indentificador o qual pode ser referido posteriormente utilizando-se os comandos _break_ ou _continue_.

Por exemplo, você pode usar um _label_ para identificar um laço e então com um comando de _break_ ou _continue_ indicar se este deve ser interrompido ou então continuar sua execução.

## Sintaxe

```
label :
   declaração
```

### Parâmetros

- `label`
  - : Qualquer idenfiticador JavaScript válido que não é uma palavra reservada.
- `declaração`
  - : Uma declaração qualquer. _break_ pode ser utilizado com qualquer declaração entiquetada (com _label_) , assim como o _continue_ também pode.

> **Aviso:** ### Evite usar labelsLabels não são comunmente utilizados em JavaScript já que estes fazem com que programas fiquei mais difíceis de ler e entender. Sempre que possível evite utilizar labels e, dependendo dos casos, prefira [chamar funções](/pt-BR/docs/JavaScript/Reference/Statements/function) ou [lançar um erro](/pt-BR/docs/JavaScript/Reference/Statements/throw).

## Exemplos

### `Exemplo com continue`

```js
var i, j;

loop1: for (i = 0; i < 3; i++) {
  //O primeiro 'for' é etiquetado com "loop1"
  loop2: for (j = 0; j < 3; j++) {
    //O segundo é etiquetado com "loop2"
    if (i == 1 && j == 1) {
      continue loop1;
    } else {
      console.log("i = " + i + ", j = " + j);
    }
  }
}

// Sua saída é:
//   "i = 0, j = 0"
//   "i = 0, j = 1"
//   "i = 0, j = 2"
//   "i = 1, j = 0"
//   "i = 2, j = 0"
//   "i = 2, j = 1"
//   "i = 2, j = 2"
// Note como pula-se "i = 1, j = 1" e "i = 1, j = 2"
```

### Exemplo 2 `(continue)`

Dado uma lista de itens e outra de testes, este exemplo conta o número de ítens que passam em todos os testes.

```js
var itemsPassed = 0;
var i, j;

top: for (i = 0; i < items.length; i++) {
  for (j = 0; j < tests.length; j++) if (!tests[j].pass(items[i])) continue top;
  itemsPassed++;
}
```

### Exemplo 3 `(break)`

Dado uma lista de ítens e uma lista de testes, neste exemplo determina-se se todos os ítens passam em todos os testes.

```js
var allPass = true;
var i, j;

top: for (i = 0; items.length; i++)
  for (j = 0; j < tests.length; i++)
    if (!tests[j].pass(items[i])) {
      allPass = false;
      break top;
    }
```

## Veja também

- [break](/pt-BR/docs/JavaScript/Reference/Statements/break)
- [continue](/pt-BR/docs/JavaScript/Reference/Statements/continue)
