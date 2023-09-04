---
title: RegExp.prototype.sticky
slug: Web/JavaScript/Reference/Global_Objects/RegExp/sticky
---

{{JSRef}}

A propriedade **`sticky`** indica se a busca é "pegajosa" (percorre a string somente a partir do índice indicado pela propriedade {{jsxref("RegExp.lastIndex", "lastIndex")}} desta expressão regular). A propriedade `sticky` em um objeto de expressão regular é somente para leitura.

{{EmbedInteractiveExample("pages/js/regexp-prototype-sticky.html")}}{{js_property_attributes(0, 0, 1)}}

## Descrição

O valor de `sticky` é do tipo {{jsxref("Boolean")}} e será _true_ quando a flag "`y`" for utilizada; senão, será _false_. A flag "`y`" indica que as correspondências ocorrerão apenas a partir do indice indicado pela propriedade {{jsxref("RegExp.lastIndex", "lastIndex")}} desta expressão regular na string alvo (e não buscará correspondência em nenhum índice anterior). Uma expressão regular definida como `sticky` e `global` ignora a flag `global`.

Você não pode alterar essa propriedade diretamente. Ela é somente para leitura.

## Exemplos

### Uilizando uma expressão regular com a flag _sticky_

```js
var str = "#foo#";
var regex = /foo/y;

regex.lastIndex = 1;
regex.test(str); // true
regex.lastIndex = 5;
regex.test(str); // false (lastIndex é levado em conta com a flag sticky)
regex.lastIndex; // 0 (reinicia quando não ocorre correspondência)
```

### Flag sticky ancorada

Por diversas versões, a engine SpiderMonkey do Firefox apresentou um [bug](https://bugzilla.mozilla.org/show_bug.cgi?id=773687) na asserção de `^` com a flag _sticky_ que fazia expressões iniciando com `^` e usando a flag _sticky_ encontrarem correspondências onde não deveriam. O bug foi introduzido algum tempo após o Firefox 3.6 (que possuía a flag sticky mas não apresentava o bug) e corrigido em 2015. Talvez por este motivo, a especificação ES2015 [destaca especificamente](http://www.ecma-international.org/ecma-262/7.0/index.html#sec-assertion) que:

> Quando a flag `y` for usada em um padrão, ^ indica que a correspondência ocorrerá apenas no início da entrada, ou (se `multiline` for `true`) no início de uma linha.

Exemplos de comportamento esperado:

```js
var regex = /^foo/y;
regex.lastIndex = 2;
regex.test("..foo"); // false - índice 2 não é o início da string

var regex2 = /^foo/my;
regex2.lastIndex = 2;
regex2.test("..foo"); // false - índice 2 não é o início da string nem da linha
regex2.lastIndex = 2;
regex2.test(".\nfoo"); // true - índice 2 é o início da linha
```

## Especificações

| Especificação                                                                          | Estado               | Comentário         |
| -------------------------------------------------------------------------------------- | -------------------- | ------------------ |
| {{SpecName('ES2015', '#sec-get-regexp.prototype.sticky', 'RegExp.prototype.sticky')}}  | {{Spec2('ES2015')}}  | Definição inicial. |
| {{SpecName('ESDraft', '#sec-get-regexp.prototype.sticky', 'RegExp.prototype.sticky')}} | {{Spec2('ESDraft')}} |                    |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.RegExp.sticky")}}

## Veja também

- {{jsxref("RegExp.lastIndex")}}
- {{jsxref("RegExp.prototype.global")}}
- {{jsxref("RegExp.prototype.ignoreCase")}}
- {{jsxref("RegExp.prototype.multiline")}}
- {{jsxref("RegExp.prototype.source")}}
