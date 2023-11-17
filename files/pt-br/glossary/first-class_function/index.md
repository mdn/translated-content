---
title: Função First-class
slug: Glossary/First-class_Function
---

Entende-se que uma linguagem de programação tem **Função First-class** quando suas funções são tratadas como qualquer outra variável. Por exemplo, numa linguagem desse tipo, a função pode ser passada como argumento pra outras funções, ser retornada por outra função e pode ser atribuída como um valor à uma variável.

## Exemplo | Atribuir uma função à uma variável

### JavaScript

```js
const foo = function () {
  console.log("foobar");
};
// Chamar a função usando a variável
foo();
```

Nós atribuímos uma `Função Anônima` à uma `Variável`, então usamos a variável pra chamar a função adicionando parênteses `()` no fim.

> **Nota:** **Mesmo se sua função for nomeada,** você pode usar o nome da variável pra chamá-la. Nomeá-la será útil quando for debugar seu código. _Mas não afetará a maneira que à chamamos._

## Exemplo | Passar uma função como um Argumento

### JavaScript

```js
function sayHello() {
  return "Hello, ";
}
function greeting(helloMessage, name) {
  console.log(helloMessage() + name);
}
// Passar `sayHello` como um argumento pra função `greeting`
greeting(sayHello, "JavaScript!");
```

Nós estamos passando a função `sayHello()` como um argumento pra função `greeting()`, isso explica como estamos tratando a função como um `valor`.

> **Nota:** A função que passamos como um argumento pra outra função, chamou uma **[Função Callback](/pt-BR/docs/Glossary/Callback_function).** _`sayHello` é uma Função Callback._

## Exemplo | Retornar uma função

### JavaScript

```js
function sayHello() {
  return function () {
    console.log("Hello!");
  };
}
```

Neste exemplo; Precisamos retornar uma função de outra função - _Podemos retornar uma função porque tratamos função em JavaScript como um **`valor`**._

> **Nota:** Uma função que retorna uma função é chamada de **Higher-Order Function**

De volta ao nosso exemplo; Agora, precisamos chamar a função `sayHello` e a `Função anônima` retornada. Existem duas maneiras para fazermos isso:

### 1- Usando uma variável

```js
const sayHello = function () {
  return function () {
    console.log("Hello!");
  };
};
const myFunc = sayHello();
myFunc();
```

Dessa maneira, ela retorna a mensagem `Hello!`.

> **Nota:** Você tem que usar outra variável. Se você fosse chamar `sayHello` diretamente, ela retornaria a função em si **sem chamar a função retornada**.

### 2- Usando parênteses duplo

```js
function sayHello() {
  return function () {
    console.log("Hello!");
  };
}
sayHello()();
```

Estamos usando parênteses duplo `()()` pra chamar também a função retornada.

## Saiba mais

### Conhecimento geral

- [First-class functions](https://pt.wikipedia.org/wiki/Função_de_primeira_classe) na Wikipedia
