---
title: String.prototype.trimEnd()
slug: Web/JavaScript/Reference/Global_Objects/String/trimEnd
---

{{JSRef}}

O método `trimEnd()` remove espaços do final de uma _string_. `trimRight()` é um apelido para este método.

{{EmbedInteractiveExample("pages/js/string-trimend.html")}}

## Sintaxe

```
str.trimEnd();
str.trimRight();
```

### Valor retornado

Uma nova _string_ representando a _string_ original sem espaços ao seu final (direita).

## Descrição

Os métodos `trimEnd()` / `trimRight()` retornam a _string_ sem os espaços à direita dela. `trimEnd()` ou `trimRight()` não altera o valor da _string_ original.

### _Aliasing_

Para consistência com funções como {{jsxref("String.prototype.padEnd")}} o nome padrão do método é `trimEnd`. Entretanto, por razões de compatibilidade na _web_, `trimRight` permanece como um apelido para `trimEnd`. Em alguns motores isso significa:

```js
String.prototype.trimRight.name === "trimEnd";
```

## Exemplos

### Usando `trimEnd()`

O exemplo a seguir mostra a _string_ em caixa baixa `' foo'`:

```js
var str = "   foo  ";

console.log(str.length); // retorna 8

str = str.trimEnd();
console.log(str.length); // retorna 6
console.log(str); // retorna '   foo'
```

## Especificações

| Especificação                                                                        |
| ------------------------------------------------------------------------------------ |
| {{SpecName('ESDraft', '#sec-string.prototype.trimend', 'String.prototype.trimEnd')}} |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.String.trimEnd")}}

## Veja também

- {{jsxref("String.prototype.trim()")}}
- {{jsxref("String.prototype.trimStart()")}}
