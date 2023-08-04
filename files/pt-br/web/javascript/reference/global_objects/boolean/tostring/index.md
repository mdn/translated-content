---
title: Boolean.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Boolean/toString
---

{{JSRef}}

O método **`toString()`** retorna uma string representando o objeto Boolean específico.

## Sintaxe

```
bool.toString()
```

### Valor retornado

Uma string representando o objeto {{jsxref("Boolean")}} específico.

## Descrição

O objeto {{jsxref("Boolean")}} sobrepõe o método `toString` do objeto {{jsxref("Object")}}; ele não herda {{jsxref("Object.prototype.toString()")}}. Para objetos Boolean, o método `toString` retorna uma representação do objeto como string.

O JavaScript chama o método `toString` automaticamente quando uma {{jsxref("Boolean")}} deve ser representado como texto ou quando uma {{jsxref("Boolean")}} é referenciada como uma concatenação de string.

Para objetos e valores {{jsxref("Boolean")}}, o método nativo `toString` retorna a string "`true`" ou "`false`", dependendo do valor do objeto boleano.

## Exemplos

### Usando `toString`

No código a seguir, `flag.toString()` retorna "`true`":

```js
var flag = new Boolean(true);
var myVar = flag.toString();
```

## Especificações

| Especificação                                                                            | Status               | Comentário         |
| ---------------------------------------------------------------------------------------- | -------------------- | ------------------ |
| {{SpecName('ES1')}}                                                                      | {{Spec2('ES1')}}     | Definição inicial. |
| {{SpecName('ES5.1', '#sec-15.6.4.2', 'Boolean.prototype.toString')}}                     | {{Spec2('ES5.1')}}   |                    |
| {{SpecName('ES6', '#sec-boolean.prototype.tostring', 'Boolean.prototype.toString')}}     | {{Spec2('ES6')}}     |                    |
| {{SpecName('ESDraft', '#sec-boolean.prototype.tostring', 'Boolean.prototype.toString')}} | {{Spec2('ESDraft')}} |                    |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Boolean.toString")}}

## Veja também

- {{jsxref("Object.prototype.toString()")}}
