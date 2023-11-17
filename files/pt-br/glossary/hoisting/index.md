---
title: Hoisting
slug: Glossary/Hoisting
---

Hoisting (içamento, em português) é um termo que você _não_ encontrará usado em nenhuma prosa de especificação normativa antes da [especificação de idioma do ECMAScript® 2015](http://www.ecma-international.org/ecma-262/6.0/index.html). Hoisting foi pensado como uma maneira geral de pensar sobre como os contextos de execução (especificamente as fases de criação e execução) funcionam em JavaScript. No entanto, o conceito pode ser um pouco confuso a princípio.

Conceitualmente, por exemplo, uma definição estrita de elevação sugere que as declarações de variáveis e funções são fisicamente movidas para o topo do seu código, mas isso não é realmente o que acontece. Em vez disso, as declarações de variável e função são colocadas na memória durante a fase de _compilação_, mas permanecem exatamente onde você as digitou no seu código.

## Aprenda mais

### Exemplo técnico

Variáveis:

Uma das vantagens do JavaScript em colocar declarações de função na memória antes de executar qualquer segmento de código é que ele permite que você use uma função antes de declara-la em seu código. Por exemplo:

```js
function catName(name) {
  console.log("O nome do meu gato é " + name);
}

catName("Tigger");

/*
O resultado do código acima é: "O nome do meu gato é Tigger"
*/
```

O trecho de código acima é como você escreveria o código para que ele funcionasse. Agora, vamos ver o que acontece quando chamamos a função antes de escrevê-la:

```js
catName("Chloe");

function catName(name) {
  console.log("O nome do meu gato é " + name);
}
/*
O resultado do código acima é: "O nome do meu gato é Chloe"
*/
```

Mesmo que chamemos a função em nosso código primeiro, antes que a função seja escrita, o código ainda funciona. Isto ocorre por conta de como a execução de contexto funciona em JavaScript.

Hoisting funciona bem com outros tipos de dados e variáveis. As variáveis podem ser inicializadas e usadas antes de serem declaradas.

### Apenas declarações são hoisted(içadas, em português)

O JavaScript apenas eleva (hoists) as declarações, não as inicializações. Se uma variável for declarada e inicializada após usá-la, o valor será undefined. Por exemplo:

```js
console.log(num); // Retorna undefined
var num;
num = 6;
```

Se você declarar a variável depois que ela for usada, mas inicializá-la antecipadamente, ela retornará o valor:

```js
num = 6;
console.log(num); // retorna 6
var num;
```

Abaixo estão mais exemplos demonstrando a elevação (hoisting).

```js
//Exemplo 1 - Não eleva (hoist)
var x = 1; // Inicializa x
console.log(x + " " + y); // '1 undefined'
var y = 2; // Initialize y
//Isso não funcionará, pois o JavaScript apenas eleva declarações

//Example 2 - Hoists
var num1 = 3; //Declara e inicializa num1
num2 = 4; //Inicializa num2
console.log(num1 + " " + num2); //'3 4'
var num2; //Declara num2 para hoisting

//Example 3 - Hoists
a = "Cran"; //Inicializa a
b = "berry"; //Inicializa b
console.log(a + "" + b); // 'Cranberry'
var a, b; //Declara ambos a & b para hoisting
```

### Referência técnica

- [var statement](/pt-BR/docs/Web/JavaScript/Reference/Statements/var) — MDN
- [function statement](/pt-BR/docs/Web/JavaScript/Reference/Statements/function) — MDN
