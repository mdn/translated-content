---
title: continue
slug: Web/JavaScript/Reference/Statements/continue
---

{{jsSidebar("Statements")}}

A palavra chave **continue** termina a atual iteração do laço em que ele se encontra ou de um laço rotulado, e continua a execução deste laço com a próxima iteração.

## Syntax

```
continue [rótulo];
```

- `rótulo`
  - : Identificador associado ao laço.

## Descrição

Diferentemente do {{jsxref("Statements/break", "break")}}, o `continue` não termina a execução do laço completamente, em vez disso ele:

- Volta à condição, em um laço do tipo {{jsxref("Statements/while", "while")}}.
- Volta à expressão, atualizando-a, em um laço do tipo {{jsxref("Statements/for", "for")}}.

O `continue` pode incluir, opcionalmente, um rótulo que premite ao programa pular para a próxima iteração de um laço rotulado em vez de pular o loop em que ele se encontra. Neste caso, o `continue` necessita estar dentro deste laço rotulado.

## Exemplos

### Usando `continue` com `while`

O exemplo abaixo mostra um laço {{jsxref("Statements/while", "while")}} que tem um `continue` que será executado quando o valor de `i` for 3. Assim, `n` terá os valores 1, 3, 7, e 12.

```js
var i = 0;
var n = 0;

while (i < 5) {
  i++;

  if (i === 3) {
    continue;
  }

  n += i;
}
```

### Usando o `continue` com um rótulo

No exemplo abaixo, um laço rotulado como `checkiandj` contém o laço rotulado `checkj`. Se o `continue` for alcançado, o programa continua a execução voltando ao topo do rótulo `checkj`. Cada vez que o `continue` for alcançado, `checkj` reiterará até sua condição for falsa. Quando retornar `false`, o restante de `checkiandj` será executado.

Se o `continue` tivesse o rótulo `checkiandj`, o programa iria continuar retornando a execução ao label `checkiandj`.

Veja também {{jsxref("Statements/label", "label")}}.

```js
var i = 0;
var j = 8;

checkiandj: while (i < 4) {
  console.log("i: " + i);
  i += 1;

  checkj: while (j > 4) {
    console.log("j: " + j);
    j -= 1;

    if (j % 2 == 0) continue checkj;
    console.log(j + " is odd.");
  }
  console.log("i = " + i);
  console.log("j = " + j);
}
```

Output:

```js
"i: 0";

// start checkj
"j: 8";
"7 is odd.";
"j: 7";
"j: 6";
"5 is odd.";
"j: 5";
// end checkj

"i = 1";
"j = 4";

"i: 1";
"i = 2";
"j = 4";

"i: 2";
"i = 3";
"j = 4";

"i: 3";
"i = 4";
"j = 4";
```

## Especificações

| Especificação                                                            | Status               | Comentários                           |
| ------------------------------------------------------------------------ | -------------------- | ------------------------------------- |
| {{SpecName('ES1')}}                                                      | {{Spec2('ES1')}}     | Definição inicial. Versão sem rótulo. |
| {{SpecName('ES3')}}                                                      | {{Spec2('ES3')}}     | Versão rotulada adicionada.           |
| {{SpecName('ES5.1', '#sec-12.7', 'Continue statement')}}                 | {{Spec2('ES5.1')}}   |                                       |
| {{SpecName('ES6', '#sec-continue-statement', 'Continue statement')}}     | {{Spec2('ES6')}}     |                                       |
| {{SpecName('ESDraft', '#sec-continue-statement', 'Continue statement')}} | {{Spec2('ESDraft')}} |                                       |

## Compatibilidade com navegadores

{{Compat("javascript.statements.continue")}}

## Veja também

- {{jsxref("Statements/break", "break")}}
- {{jsxref("Statements/label", "label")}}
