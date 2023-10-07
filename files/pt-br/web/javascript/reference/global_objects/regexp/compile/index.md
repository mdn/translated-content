---
title: RegExp.prototype.compile()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/compile
---

{{JSRef}} {{deprecated_header}}

O método **`compile()`** está depreciado, é usado para (re-)compilar uma expressão regular durante a execução de um script. É basicamente o mesmo que o construtor `RegExp`.

## Sintaxe

```
regexObj.compile(pattern, flags)
```

### Parâmetros

- `pattern`
  - : É o texto da expressão regular.
- `flags`

  - : Se especificado, as flags podem ter qualquer combinação dos seguintes valores:

    - `g`
      - : global.
    - `i`
      - : ignorar caso.
    - `m`
      - : multilinha; trata os caracteres iniciais e finais como (^ e $), trabalhando sobre várias linhas (isto é, corresponde ao início ou ao final de cada linha (delimitado por \n ou \r), não apenas o começo, ou o final de toda a cadeia de entrada).
    - `y`
      - : sticky; corresponde apenas ao índice indicado pela propriedade `lastIndex` dessa expressão regular na cadeia de destino (e não tenta corresponder a partir de índices posteriores).

## Descrição

O método de `compilação` é obsoleto. Você pode simplesmente usar o construtor `RegExp` para obter o mesmo efeito.

## Exemplos

### Usando `compile()`

O exemplo a seguir mostra como recompilar uma expressão regular com um novo padrão e um nova flag.

```js
var regexObj = new RegExp("foo", "gi");
regexObj.compile("new foo", "g");
```

## Especificações

| Especificação                                                                        | Estado               | Comentario                                                                                                  |
| ------------------------------------------------------------------------------------ | -------------------- | ----------------------------------------------------------------------------------------------------------- |
| {{SpecName('ES6', '#sec-regexp.prototype.compile', 'RegExp.prototype.compile')}}     | {{Spec2('ES6')}}     | Initial definition. Defined in the (normative) Annex B for Additional ECMAScript Features for Web Browsers. |
| {{SpecName('ESDraft', '#sec-regexp.prototype.compile', 'RegExp.prototype.compile')}} | {{Spec2('ESDraft')}} | Defined in the (normative) Annex B for Additional ECMAScript Features for Web Browsers.                     |

## Browser compativeis

{{Compat("javascript.builtins.RegExp.compile")}}

## Veja também

- {{jsxref("RegExp")}}
