---
title: HTMLCollection
slug: Web/API/HTMLCollection
---

{{APIRef("HTML DOM")}}

A interface **`HTMLCollection`** representa uma coleção genérica (objeto array) de elementos (na ordem em que aparecem no documento) e oferece métodos e propriedades para selecioná-los da lista.

> [!NOTE]
> Esta interface é chamada `HTMLCollection` por razões históricas (antes do DOM4, coleções implementadas por esta interface somente podiam ter elementos HTML).

Uma coleção `HTMLCollection` de um HTML DOM está linkada com o documento; ela será automaticamente atualizada quando o documento for modificado.

## Propriedades

- {{domxref("HTMLCollection.length")}} {{readonlyInline}}
  - : Retorna o número de itens da coleção.

## Métodos

- {{domxref("HTMLCollection.item()")}}
  - : Retorna um nó especificado por `index` da lista. o primeiro index da lista é 0. Retorna `null` se `index` não existir na lista.
- {{domxref("HTMLCollection.namedItem()")}}
  - : Retorna o nó especificado pelo ID ou, caso não tenha ID, o item cuja propriedade `name` seja igual à pesquisa. Pesquisa por `name` só é feita em último caso, somente em HTML, e somente se os elementos referenciados suportarem o atributo `name`. Retorna `null` se nenhum nó corresponder ao nome pesquisado.

## Uso no JavaScript

`HTMLCollection` expõe seus membros diretamente como propriedades, tanto por nome quanto por índice. IDs HTML podem conter : e . como caracteres válidos, o que fará necessária a utilização de colchetes para acessar as propriedades. Atualmente HTMLCollection não reconhece IDs puramente numéricos, o que pode causar conflitos com acesso em formato array, apesar do HTML5 os permitir.

Por exemplo, assumindo que há um elemento `<form>` no documento e seu `id` é `"myForm"`:

```js
var elem1, elem2;

// document.forms é um HTMLCollection

elem1 = document.forms[0];
elem2 = document.forms.item(0);

alert(elem1 === elem2); // exibe: "true"

elem1 = document.forms.myForm;
elem2 = document.forms.namedItem("myForm");

alert(elem1 === elem2); // exibe: "true"

elem1 = document.forms["named.item.with.periods"];
```

## Compatibilidade com navegadores

Diferentes browsers se comportam de maneira diferente quando um os mais elementos são pesquisados pela string utilizada como índice (ou o argumento namedItem). Firefox 8 se comporta como especificado no DOM 2 e no DOM 4, retornando o primeiro elemento encontrado. WebKit browsers e o Internet Explorer, neste caso, retornam outro HTMLCollection e o Opera retorna um {{domxref("NodeList")}} com todos os elementos encontrados.

## Especificações

- [DOM Level 2 HTML, Section 1.4, Miscellaneous Object Definitions](https://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-75708506)
- [DOM4: HTMLCollection](https://www.w3.org/TR/domcore/#interface-htmlcollection)

## Veja também

- {{domxref("NodeList")}}
- {{domxref("HTMLFormControlsCollection")}}, {{domxref("HTMLOptionsCollection")}}
