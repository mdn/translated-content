---
title: let
slug: Web/JavaScript/Reference/Statements/let
---

{{jsSidebar("Statements")}}

Declara uma variável local no escopo do bloco atual, opcionalmente iniciando-a com um valor.

## Sintaxe

Definição `let`:

```
let var1 [= value1] [, var2 [= value2]] [, ..., varN [= valueN]];
```

Expressão `let`:

```
let (var1 [= value1] [, var2 [= value2]] [, ..., varN [= valueN]]) expression;
```

Instrução `let`:

```
let (var1 [= value1] [, var2 [= value2]] [, ..., varN [= valueN]]) statement;
```

### Parâmetros

| Parameter                       | Description                                                                                      |
| ------------------------------- | ------------------------------------------------------------------------------------------------ |
| `var1`, `var2`, …, `varN`       | Nome da variável. Pode ser qualquer identificador válido.                                        |
| `value1`, `value2`, …, `valueN` | Valor inicial da variável. Pode ser qualquer expressão válida.                                   |
| `expression`                    | Qualquer [expressão](/pt-BR/docs/JavaScript/Guide/Expressions_and_Operators#Expressions) válida. |
| `statement`                     | Qualquer [instrução](/pt-BR/docs/JavaScript/Reference/Statements) válida.                        |

## Descrição

`let` permite que você declare variáveis limitando seu escopo no bloco, instrução, ou em uma expressão na qual ela é usada. Isso é inverso da keyword [`var`](/pt-BR/docs/JavaScript/Reference/Statements/var), que define uma variável globalmente ou no escopo inteiro de uma função, independentemente do escopo de bloco.

> **Nota:** **Nota do tradutor:** o trecho acima: "independentemente do escopo de bloco", na verdade, significa dizer que variáveis declaradas dentro de blocos internos da função, por exemplo, são vinculadas no escopo da função, não no bloco no qual elas são declaradas. Se isso parece confuso - e realmente é -, apenas entenda que, ao contrário do que se poderia supor, em Javascript blocos não possuem escopo como em outras linguagens, somente funções têm! Isso quer dizer que mesmo uma váriavel definida com a keyword `var` dentro de um bloco de instrução `if`, será visível no resto inteiro da função.

## Escopo de bloco

Variáveis declaradas com `let` são "içadas" para começo do bloco em que elas são definidas (isso é conhecido também pelo termo, hoisting).

Redeclaração de uma mesma variável num mesmo escopo de bloco causa um [`TypeError`](/pt-BR/docs/JavaScript/Reference/Global_Objects/TypeError).

```js
if (x) {
  let foo;
  let foo; // Emite um TypeError.
}
```

No entanto, corpos de funções não possuem essa limitação!

```js
function do_something() {
  let foo;
  let foo; // Isso funciona.
}
```

> **Aviso:** **Atenção:** Os rascunhos do ECMAScript 6 (desde abril de 2012) tornam este comportamento ilegal. Isso significa, provavelmente, que as futuras versões do JavaScript levantarão um [`TypeError`](/pt-BR/docs/JavaScript/Reference/Global_Objects/TypeError). Então, se você faz isso, deveria evitar essa prática!

Você pode encontrar erros em instruções [`switch`](/pt-BR/docs/JavaScript/Reference/Statements/switch) porque existe apenas um bloco subjacente.

```js
switch (x) {
  case 0:
    let foo;
    break;

  case 1:
    let foo; // TypeError para a redeclaração.
    break;
}
```

## Exemplos

Uma _expressão let_ limita o escopo de uma variável declarada somente para aquela expressão.

```js
var a = 5;
let(a = 6) alert(a); // 6
alert(a); // 5
```

Usada dentro de um bloco, _let_ limita os escopo das variáveis para aquele bloco. Observe a diferença entre _var_ em que o escopo é definido dentro da função onde é declarada

```js
var a = 5;
var b = 10;

if (a === 5) {
  let a = 4; // O escopo é dentro do bloco if
  var b = 1; // O escopo é dentro da função

  console.log(a); // 4
  console.log(b); // 1
}

console.log(a); // 5
console.log(b); // 1
```

É possível usar a keyword _let_ para vincular variáveis localmente no escopo de loops em vez de usar uma variável global (definida usando _var_) para isso.

```js
for (let i = 0; i < 10; i++) {
  alert(i); // 1, 2, 3, 4 ... 9
}

alert(i); // i não está definida
```

## Veja também

- [`var`](/pt-BR/docs/JavaScript/Reference/Statements/var)
- [`const`](/pt-BR/docs/JavaScript/Reference/Statements/const)
- [Novidades do JavaScript 1.7](</pt-BR/docs/JavaScript/New_in_JavaScript/1.7#Block_scope_with_let_(Merge_into_let_Statement)> "JavaScript/New in JavaScript/1.7#Block scope with let (Merge into let Statement)")
