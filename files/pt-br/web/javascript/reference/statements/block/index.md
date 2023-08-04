---
title: block
slug: Web/JavaScript/Reference/Statements/block
---

{{jsSidebar("Statements")}}

Uma **declaração em bloco** (ou **declaração composta (compound)** em outras linguagens) é usado para agrupar nenhum ou mais declarações. O bloco é delimitado por um par de chaves e pode opcionalmente ser {{jsxref("Statements/label", "nomeado")}}:

## Sintaxe

### Declaração de Bloco

```
{
  ListaDeDeclarações
}
```

### Declaração de Bloco Nomeada

```
NomeIdentificador: {
  ListaDeDeclarações
}
```

- `ListaDeDeclarações`
  - : Declarações agroupadas com a declaração em bloco.
- `NomeIdentificador`
  - : Um {{jsxref("Statements/label", "nome (label)")}} opcional para identificação visual ou um alvo para {{jsxref("Statements/break", "break")}}.

## Descrição

A declaração em bloco é frequentemente chamada de **declaração composta (compound)** em outras linguagens. Ela permite que você use multiplas declarações onde o JavaScript espera apenas uma declaração. Combinar declarações em blocos são uma prática comum em JavaScript. O comportamento oposto é possível usando uma [declaração vazia](/pt-BR/docs/Web/JavaScript/Reference/Statements/Empty), onde você fornece nenhuma declaração, mesmo que uma seja requerida.

### Regras de Bloqueio de Escopo

#### Com `var`

Variáveis declaradas com `var` **não** possuem bloqueio de escopo. Variáveis introduzidas com um bloco são guardadas no escopo da função que elas estão ou script, e os efeitos de configura-las persistem pelo próprio bloco. Em outras palavras, declarações em bloco não introduzem um escopo. Mesmo blocos "standalone" são sintaxes válidas, você não vai querer usar blocos standalone em JavaScript, porque não fazem o que você pensa que eles fazem, se você pensa que eles fazer coisas como blocos em C ou Java. Por exemplo:

```js example-bad
var x = 1;
{
  var x = 2;
}
console.log(x); // imprime 2
```

Isso loga 2 porque a declaração `var x` com o bloco está no mesmo escopo que a declaração `var x` antes do bloco. No C ou Java, o código equivalente iria imprimir 1.

#### Com `let` e `const`

Por contraste, variáveis declaradas com {{jsxref("Statements/let", "let")}} e {{jsxref("Statements/const", "const")}} **tem** escopo bloqueado:

```js
let x = 1;
{
  let x = 2;
}
console.log(x); // imprime 1 1
```

`O x = 2` é limitado ao escopo do bloco em que ele foi definido.

O mesmo true de `const`:

```js
const c = 1;
{
  const c = 2;
}
console.log(c); // imprime 1 e não invoca uma throw SyntaxError...
```

Note que o escope bloqueado de `const c = 2` _não invoca uma_ `SyntaxError: Identifier 'c' has already been declared` porque ele foi unicamente declarado no bloco.

## Especificações

| Especificação                                            | Situação             | Comentário                                         |
| -------------------------------------------------------- | -------------------- | -------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-block', 'Block statement')}} | {{Spec2('ESDraft')}} |                                                    |
| {{SpecName('ES6', '#sec-block', 'Block statement')}}     | {{Spec2('ES6')}}     |                                                    |
| {{SpecName('ES5.1', '#sec-12.1', 'Block statement')}}    | {{Spec2('ES5.1')}}   |                                                    |
| {{SpecName('ES3', '#sec-12.1', 'Block statement')}}      | {{Spec2('ES3')}}     |                                                    |
| {{SpecName('ES1', '#sec-12.1', 'Block statement')}}      | {{Spec2('ES1')}}     | Definição inicial. Implementada no JavaScript 1.0. |

## Compatibilidade com navegadores

{{Compat("javascript.statements.block")}}

## Veja também

- {{jsxref("Statements/while", "while")}}
- {{jsxref("Statements/if...else", "if...else")}}
- {{jsxref("Statements/let", "let")}}
