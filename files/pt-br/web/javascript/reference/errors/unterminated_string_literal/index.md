---
title: "SyntaxError: unterminated string literal"
slug: Web/JavaScript/Reference/Errors/Unterminated_string_literal
---

{{jsSidebar("Errors")}}

## Mensagem

```
SyntaxError: unterminated string literal
```

## Tipo de Erro

{{jsxref("SyntaxError")}}

## O que deu errado?

Há uma {{jsxref("String")}} não finalizada em algum lugar do código. String literais devem se fechadas com aspas simples (`'`) ou duplas (`"`) . O JavaScript não faz distinção entre strings com aspas simples ou aspas duplas. [As sequências de escape](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String#Escape_notation) trabalham com strings criadas tanto com aspas simples, quanto com aspas duplas. Para consertar este erro, verifique se:

- você abriu e fechou sua string literal com aspas (simples ou duplas),
- você escapou sua string literal corretamente,
- sua string funciona corretamente em várias linhas, se houver.

## Exemplos

### Múltiplas linhas

Você não pode dividir sua string em múltiplas linhas em Javascript:

```js example-bad
var longString = "This is a very long string which needs
                  to wrap across multiple lines because
                  otherwise my code is unreadable.";
// SyntaxError: unterminated string literal
```

Ao invés disso, você deve utilizar o operador [+ operator](/pt-BR/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Addition), uma barra invertida(\\), ou [modelos literais](/pt-BR/docs/Web/JavaScript/Reference/Template_literals). Uma forma de uso do operador `+`, seria assim:

```js example-good
var longString =
  "This is a very long string which needs " +
  "to wrap across multiple lines because " +
  "otherwise my code is unreadable.";
```

Ou você pode usar uma barra invertida ("\\") ao final de cada linha para indicar que a string continuará na próxima linha. Certifique-se de que não há espaço ou qualquer outro caractere após a barra invertida (excento quando for uma quebra de linha), ou como indentação; caso contrário, não funcionará. Esta forma ficaria assim:

```js example-good
var longString =
  "This is a very long string which needs \
to wrap across multiple lines because \
otherwise my code is unreadable.";
```

Uma outra possibilidade é usar um [modelo literal](/pt-BR/docs/Web/JavaScript/Reference/Template_literals), que é suportado pelos ambientes ECMAScript 2015:

```js example-good
var longString = `This is a very long string which needs
                  to wrap across multiple lines because
                  otherwise my code is unreadable.`;
```

## Veja também

- {{jsxref("String")}}
- [Modelos literais](/pt-BR/docs/Web/JavaScript/Reference/Template_literals)
