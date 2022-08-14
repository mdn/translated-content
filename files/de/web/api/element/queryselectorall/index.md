---
title: Element.querySelectorAll()
slug: Web/API/Element/querySelectorAll
tags:
  - Méthode
  - Referenz
translation_of: Web/API/Element/querySelectorAll
---
{{APIRef("DOM")}}

## Summary

Gibt eine statische [`NodeList`](/de/docs/DOM/NodeList "DOM/NodeList") aller Elemente absteigend des Elements, auf welchem querySelectorAll ausgeführt wird, die mit den angegebenen CSS Selektoren übereinstimmen.

## Syntax

    elementList = baseElement.querySelectorAll(selectors);

wobei:

- `elementList`
  - : ist statische Node Liste \[` NodeList[elements]` `] mit` [element](/de/docs/DOM/element "DOM/Element") Objekten.
- `baseElement`
  - : ist ein [element](/de/docs/DOM/element "DOM/element") Objekt.
- `selectors`
  - : ist eine Gruppe von [Selektoren](/de/docs/Web/Guide/CSS/Getting_Started/Selectors) die mit dem Element im DOM übereinstimmen soll.

## Beispiele

Dieses Beispiel gibt eine Liste der `p` Elementen im HTML body zurück:

```js
let matches = document.body.querySelectorAll('p');
```

Dieses Beispiel gibt eine Liste der `p` Unter-Elementen eines Containers, dessen Überobjekt ein `div` mit der Klasse 'highlighted' ist:

```js
let el = document.querySelector('#test');    //return an element with id='test'
let matches = el.querySelectorAll('div.highlighted > p'); // return a NodeList of p wrapped in a div with attribute class "highlighted"
```

Dieses Beispiel gibt eine Liste der `iframe` Elementen die ein **data** Attribut 'src' besitzen:

```js
let matches = el.querySelectorAll('iframe[data-src]');
```

## Bemerkungen

If the specified "selectors" are not found inside the DOM of the page, the method `queryselectorAll` returns an empty NodeList as specified below:

```js
> let x = document.body.querySelectorAll('.highlighted'); //case: if the class highlighted doesn't exist in any attribute "class" of the DOM the result is
> [] //empty NodeList
```

`querySelectorAll()` was introduced in the WebApps API.

The string argument pass to `querySelectorAll` must follow the CSS syntax. See {{domxref("document.querySelector")}} for a concrete example.

We could access a single item inside the NodeList in the following way:

```js
let x = document.body.querySelectorAll('.highlighted');
x.length; //return the size of x
x[i_item]; //where i_item has a value between 0 and x.length-1. The operator "[]" return as in an array the element at index "i_item"
```

We could iterate inside a NodeList with the construct `for(....) {...} `as in the following code:

```js
 let x = document.body.querySelectorAll('.highlighted');
 let index = 0;
 for( index=0; index < x.length; index++ ) {
       console.log(x[index]);
 }
```

So in the above way, it is possible to manage and modify the behaviour of the page.

## Quirks

`querySelectorAll()` behaves differently than most common JavaScript DOM libraries, which might lead to unexpected results:

```html
<div class="outer">
  <div class="select">
    <div class="inner">
    </div>
  </div>
</div>
```

```js
let select = document.querySelector('.select');
let inner = select.querySelectorAll('.outer .inner');
inner.length; // 1, not 0!
```

In this example, when selecting `.outer .inner` in the context of `.select`, .`inner` is still found, even though `.outer` is not a descendant of the baseElement (`.select`).
`querySelectorAll() `only verifies that the last element in the selector is within the baseElement.

The [`:scope`](/en-US/docs/Web/CSS/:scope) pseudo-class restores the expected behavior, only matching selectors on descendants of the baseElement:

```js
let select = document.querySelector('.select');
let inner = select.querySelectorAll(':scope .outer .inner');
inner.length; // 0
```

## Specifications

| Specification                                                                                                    | Status                                       | Comment |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | ------- |
| {{SpecName('DOM4','#dom-parentnode-queryselectorallselectors','querySelectorAll')}} | {{Spec2('DOM4')}}                     |         |
| {{SpecName('Selectors API Level 2','#queryselectorall','querySelectorAll')}}             | {{Spec2('Selectors API Level 2')}} |         |
| {{SpecName('Selectors API Level 1','#queryselectorall','querySelectorAll')}}             | {{Spec2('Selectors API Level 1')}} |         |

## Browser compatibility

{{Compat}}

\[1] Supported in Opera 15+ by enabling the "**Enable \<style scoped>**" or "**Enable experimental Web Platform features**" flag in `chrome://flags`.

## See also

- [`document.querySelectorAll`](/de/docs/DOM/Document.querySelectorAll "DOM/document.querySelectorAll")
- [`document.querySelector`](/de/docs/DOM/Document.querySelector "DOM/document.querySelector")
- [Code snippets for `querySelector`](/de/docs/Code_snippets/QuerySelector "Code_snippets/QuerySelector")
