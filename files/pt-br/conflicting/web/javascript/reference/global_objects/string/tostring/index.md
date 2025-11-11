---
title: String.prototype.toSource()
slug: conflicting/Web/JavaScript/Reference/Global_Objects/String/toString
---

{{JSRef}}

O método `toSource()` retorna uma string que representa o código-fonte do objeto.

## Sintaxe

```
String.toSource()
str.toSource()
```

### Valor retornado

Uma string que representa o código-fonte do objeto chamado.

## Exemplos

### Função nativa

Para o objeto {{jsxref("String")}} , `toSource()` retorna a seguinte string (indicando que o código-fonte não está disponível):

```js
function String() {
    [native code]
}
```

Ao chamar {{jsxref("String")}} ou string literais, `toSource()` retorna a string que representa o código-fonte.

Esse método é usualmente invocado internamente pelo JavaScript e não explicitamente no código.

## Especificação

Não é parte de nenhum padrão.

## Navegadores compatíveis

{{Compat}}

## Veja também

- {{jsxref("Object.prototype.toSource()")}}
