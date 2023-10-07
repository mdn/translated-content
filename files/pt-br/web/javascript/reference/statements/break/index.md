---
title: break
slug: Web/JavaScript/Reference/Statements/break
---

{{jsSidebar("Statements")}}

## Sumário

O comando **break** encerra o loop atual, {{jsxref("Statements/switch", "switch")}}, ou o loop que foi informado no {{jsxref("Statements/label", "label")}} e transfere o controle da execução do programa para o comando seguinte.

## Síntaxe

```
break [label];
```

- `label`
  - : Opcional. Identificador associado ao label de um comando. Se a estrutura não for um loop ou {{jsxref("Statements/switch", "switch")}}, ele será um pré-requisito.

## Descrição

O comando `break` inclui um label opcional que permite ao programa encerrar a execução da estrutura que possui o nome informado na label. O comando `break` deve estar dentro dessa estrutura informada no label. A estrutura que possui o nome informada na label pode ser qualquer comando {{jsxref("Statements/block", "block")}}; não é necessário que seja precedida por um loop.

## Exemplos

A função a seguir possui um comando `break` que encerra o loop {{jsxref("Statements/while", "while")}} quando a variável i vale 3, e então retorna o valor 3 \* `x`.

```js
function testaBreak(x) {
  var i = 0;

  while (i < 6) {
    if (i == 3) {
      break;
    }
    i += 1;
  }
  return i * x;
}
```

O código a seguir possui o comando break dentro de uma estrutura nomeada. O comando `break` deverá estar dentro da estrutura na qual o label se refere. Veja que `inner_block` está dentro de `outer_block`.

```js
bloco_externo: {
  bloco_interno: {
    console.log("1");
    break bloco_externo; // encerra bloco_interno e bloco_externok
    console.log(":-("); // não é executado
  }

  console.log("2"); // não é executado
}
```

O código a seguir também utiliza o comando break com blocos nomeados mas gera um erro de sintaxe pois o comando break está dentro do bloco_1 mas faz uma referência ao bloco_2. Um comando break sempre deverá estar dentro da estrutura nomeada na qual fizer referência.

```js
bloco_1:{
  console.log ('1');
  break bloco_2;            // SyntaxError: label not found
}

bloco_2:{
  console.log ('2');
}
```

## Especificações

| Especificação                                                  | Status             | Comentário                                    |
| -------------------------------------------------------------- | ------------------ | --------------------------------------------- |
| ECMAScript 1st Edition                                         | Standard           | Definição inicial. Versão sem o uso do label. |
| ECMAScript 3rd Edition                                         | Standard           | Versão com label adicionada.                  |
| {{SpecName('ES5.1', '#sec-12.8', 'Break statement')}}          | {{Spec2('ES5.1')}} |                                               |
| {{SpecName('ES6', '#sec-break-statement', 'Break statement')}} | {{Spec2('ES6')}}   |                                               |

## Compatibilidade com navegadores

{{Compat("javascript.statements.break")}}

## Veja também

- {{jsxref("Statements/continue", "continue")}}
- {{jsxref("Statements/label", "label")}}
- {{jsxref("Statements/switch", "switch")}}
