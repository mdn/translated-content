---
title: String.fromCharCode()
slug: Web/JavaScript/Reference/Global_Objects/String/fromCharCode
---

{{JSRef}}

O método **`String.fromCharCode()`** retorna uma string criada ao usar uma sequência específica de valores Unicode.

## Sintaxe

```
String.fromCharCode(num1[, ...[, numN]])
```

### Parâmetros

- `num1, ..., numN`
  - : Uma sequência de números que devem ser valores UTF-16. O tamanho é entre `0` e `65535` (`0xFFFF`). Números maiores do que `0xFFFF` são desconsiderados. Nenhuma verificação de vadalida é realizada.

### Valor retornado

Uma string contendo os caracteres correspondentes à sequência de valores Unicode.

## Descrição

Esse método retorna uma string e não um objeto {{jsxref("String")}}.

Como `fromCharCode()` é um método estático de {{jsxref("String")}}, você sempre o usará como `String.fromCharCode()`, ao invés de um método de um objeto {{jsxref("String")}} que você tenha criado.

## Exemplos

### Usando `fromCharCode()`

O seguinte exemplo retorna a string "ABC".

```js
String.fromCharCode(65, 66, 67); // retorna "ABC"
```

## Fazendo-o funcionar com valores maiores

Embora os valores Unicode mais comuns possam ser representados com um número de 16 bits (como experado durante a padronização do JavaScript) e o fromCharCode() possa ser usado para retornar um único caracter dos valores mais comuns (por exemplo: valores UCS-2 que são os melhores subconjuntos do UTF-16 com os caractres mais comuns), a fim de resolver TODOS os valores Unicode legais (até 21 bits) o método fromCharCode() sozinho é inadequado. Como os caracteres de ponto de código mais alto usam 2 (valor menor) numeros "substitutos" para formar um único caracter, {{jsxref("String.fromCodePoint()")}} (parte do padrão ES2015) pode ser usado para retornar tal par e ainda representar adequadamente esses caracteres de valores altos.

## Especificações

| Especificação                                                               | Status               | Comentário                                         |
| --------------------------------------------------------------------------- | -------------------- | -------------------------------------------------- |
| {{SpecName('ES1')}}                                                         | {{Spec2('ES1')}}     | Definição inicial. Implementado no JavaScript 1.2. |
| {{SpecName('ES5.1', '#sec-15.5.3.2', 'StringfromCharCode')}}                | {{Spec2('ES5.1')}}   |                                                    |
| {{SpecName('ES6', '#sec-string.fromcharcodes', 'String.fromCharCode')}}     | {{Spec2('ES6')}}     |                                                    |
| {{SpecName('ESDraft', '#sec-string.fromcharcodes', 'String.fromCharCode')}} | {{Spec2('ESDraft')}} |                                                    |

## Navegadores compatíveis

{{Compat("javascript.builtins.String.fromCharCode")}}

## Veja também

- {{jsxref("String.fromCodePoint()")}}
- {{jsxref("String.prototype.charAt()")}}
- {{jsxref("String.prototype.charCodeAt()")}}
- {{jsxref("String.prototype.codePointAt()")}}
