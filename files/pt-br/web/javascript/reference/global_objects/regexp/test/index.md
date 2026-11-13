---
title: RegExp.prototype.test()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/test
---

{{JSRef}}O método **test()** executa uma busca por uma correspondência entre uma expressão regular e uma string. Retorna `true` ou `false`.

## Sintaxe

```
regexObj.test(str)
```

### Parâmetros

- `str`
  - : A string que confrontará a expressão regular. Todos os valores são convertidos em strings, portanto, omiti-lo ou passar undefined faz com que test() procure a string "undefined".

### Retorno

Boolean.

`true` se a string `str` corresponde com o que está descrito na expressão regular.

Caso contrário, retorna `false`.

## Descrição

Use test() sempre que você quiser saber se um padrão está dentro de uma string( similar ao método {{jsxref("String.prototype.search()")}}); Para mais informações (porém com execução mais lenta) use o método {{jsxref("RegExp.prototype.exec()", "exec()")}} (similar ao método {{jsxref("String.prototype.match()")}}). Assim como {{jsxref("RegExp.prototype.exec()", "exec()")}} (ou em combinação com ele), test() quando chamado várias vezes dentro da mesma instância de expressão regular irá avançar seu ponteiro para a correspondência anterior.

## Exemplos

### Usando `test()`

Exemplo simples que verifica se `"hello"` está presente no início de uma string, retornando um booleano como resultado.

```
const str = 'hello world!';
const result = /^hello/.test(str);

console.log(result); // true
```

O exemplo a seguir mostra uma mensagem dependendo do sucesso do teste.

```js
function testinput(re, str) {
  var midstring;
  if (re.test(str)) {
    midstring = " Contém ";
  } else {
    midstring = " não contém ";
  }
  console.log(str + midstring + re.source);
}
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Gecko-specific notes

A priori no Grecko 8.0, `test()` foi implementado incorretamente; quando chamado sem parâmetros, ele encontrária uma correspondência com o valor de entrada anterior (`RegExp.input` property) no lugar de uma correspondência com `"undefined"`. Isso está conrrigido; agora `/undefined/.test()` resultará em `true`, no lugar de um erro.

## See also

- [Regular Expressions](/pt-BR/docs/Web/JavaScript/Guide/Regular_expressions) chapter in the [JavaScript Guide](/pt-BR/docs/Web/JavaScript/Guide)
- {{jsxref("RegExp")}}
