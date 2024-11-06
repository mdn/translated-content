---
title: Element.closest()
slug: Web/API/Element/closest
---

{{APIRef("DOM")}}{{SeeCompatTable}}

O método **`Element.closest()`** retorna o ancestral mais próximo, em relação ao elemento atual, que possui o seletor fornecido como parâmetro. No caso de o elemento atual possuir o seletor, o mesmo é retornado. Caso não exista um ancestral o método retorna `null`.

## Sintaxe

```
var elt = element.closest(selectors);
```

### Parâmetros

- _selectors_ é um {{domxref("DOMString")}} contendo uma lista de seletores, por exemplo `"p:hover, .toto + q"`
- _element_ é um {{domxref("Element")}} posicionado no início da árvore de elementos a ser percorrida.

### Valor retornado

- _elt_ é um {{domxref("Element")}} selecionado como ancestral mais próximo do elemento pelo qual se iniciou a pesquisa. O valor retornado pode ser `null`.

### Exceções

- [`SyntaxError`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError) é lançada caso o parâmetro `selectors` não seja uma string válida contendo uma lista de seletores.

## Exemplo

```html
<article>
  <div id="div-01">
    Esta é a div-01
    <div id="div-02">
      Esta é a div-02
      <div id="div-03">Esta é a div-03</div>
    </div>
  </div>
</article>
```

```js
var el = document.getElementById("div-03");

var r1 = el.closest("#div-02");
// retorna o elemento com id=div-02

var r2 = el.closest("div div");
// retorna o ancestral mais próximo que é uma div dentro de uma div, nesse caso div-03 é retornada

var r3 = el.closest("article > div");
// retorna o ancestral mais próximo que é uma div e tem um article como elemento pai, nesse caso div-01 é retornada

var r4 = el.closest(":not(div)");
// retorna o ancestral mais próximo que não é uma div, neste caso article é retornado
```

## Polyfill

Para navegadores que não suportam `Element.closest()`, mas possuem suporte para `element.matches()` (ou um prefixo equivalente, ou seja IE9+), o seguinte polyfill pode ser usado:

```js
if (!Element.prototype.matches)
  Element.prototype.matches =
    Element.prototype.msMatchesSelector ||
    Element.prototype.webkitMatchesSelector;

if (!Element.prototype.closest)
  Element.prototype.closest = function (s) {
    var el = this;
    if (!document.documentElement.contains(el)) return null;
    do {
      if (el.matches(s)) return el;
      el = el.parentElement;
    } while (el !== null);
    return null;
  };
```

Contudo, se você de fato precisa dar suporte ao IE 8, você pode usar o polyfill abaixo, o qual é lento mas eficaz. Além disso, ele só garante suporte a seletores CSS 2.1 no IE 8 e ainda pode causar picos de lentidão em websites em produção.

```js
if (window.Element && !Element.prototype.closest) {
  Element.prototype.closest = function (s) {
    var matches = (this.document || this.ownerDocument).querySelectorAll(s),
      i,
      el = this;
    do {
      i = matches.length;
      while (--i >= 0 && matches.item(i) !== el) {}
    } while (i < 0 && (el = el.parentElement));
    return el;
  };
}
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- A interface {{domxref("Element")}}.
- A sintaxe em Seletores
- Outros métodos que aceitam seletores: {{domxref("element.querySelector()")}} e {{domxref("element.matches()")}}.
