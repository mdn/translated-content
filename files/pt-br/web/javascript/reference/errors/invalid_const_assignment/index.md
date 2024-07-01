---
title: 'TypeError: atribuição inválida para const "x"'
slug: Web/JavaScript/Reference/Errors/Invalid_const_assignment
---

{{jsSidebar("Errors")}}

## Mensagem

```
TypeError: invalid assignment to const "x" (Firefox)
TypeError: Assignment to constant variable. (Chrome)
TypeError: Assignment to const (Edge)
TypeError: Redeclaration of const 'x' (IE)
```

## Tipo de erro

{{jsxref("TypeError")}}

## O que deu errado?

Uma constante é um valor que não pode ser alterado pelo programa durante a execução normal. Ele não pode mudar através de reatribuição e não pode ser redeclarado. Em JavaScript, as constantes são declaradas usando a palavra-chave [`const`](/pt-BR/docs/Web/JavaScript/Reference/Statements/const).

## Exemplos

### Redeclaração inválida

Atribuir um valor ao mesmo nome de constante no mesmo escopo de bloco lançará o erro.

```js example-bad
const COLUNAS = 80;

// ...

COLUNAS = 120; // TypeError: invalid assignment to const `COLUNAS'
```

### Corrigindo o erro

Existem várias opções para corrigir esse erro. Verifique o que se pretendia alcançar com a constante em questão.

#### Renomear

Se você quis declarar outra constante, escolha outro nome e renomeie. Esse nome de constante já está sendo usado nesse escopo.

```js example-good
const COLUNAS = 80;
const COLUNAS_LARGAS = 120;
```

#### `const`, `let` ou `var`?

Não use const se você não quis declarar uma constante. Talvez você quisesse declarar uma variável com escopo de bloco com [`let`](/pt-BR/docs/Web/JavaScript/Reference/Statements/let) ou uma variável global com [`var`](/pt-BR/docs/Web/JavaScript/Reference/Statements/var).

```js example-good
let colunas = 80;

// ...

let colunas = 120;
```

#### Escopo

Verifique se você está no escopo correto. Essa constante deve aparecer nesse escopo ou deveria aparecer em uma função, por exemplo?

```js example-good
const COLUNAS = 80;

function configurarAmbienteTelaGrande() {
  const COLUNAS = 120;
}
```

### `const` e imutabilidade

A declaração `const` cria uma referência somente leitura para um valor. Isso **não significa** que o valor que ela contém é imutável, apenas que o identificador da variável não pode ser reatribuído. Por exemplo, caso o conteúdo seja um objeto, isso significa que o objeto em si ainda pode ser alterado. Isso significa que você não pode alterar o valor armazenado em uma variável:

```js example-bad
const obj = { foo: "bar" };
obj = { foo: "baz" }; // TypeError: invalid assignment to const `obj'
```

Mas você pode alterar as propriedades em uma variável:

```js example-good
obj.foo = "baz";
obj; // Object { foo: "baz" }
```

## Veja também

- [`const`](/pt-BR/docs/Web/JavaScript/Reference/Statements/const)
- [`let`](/pt-BR/docs/Web/JavaScript/Reference/Statements/let)
- [`var`](/pt-BR/docs/Web/JavaScript/Reference/Statements/var)
