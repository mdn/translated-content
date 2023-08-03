---
title: Locating DOM elements using selectors
slug: Web/API/Document_object_model/Locating_DOM_elements_using_selectors
---

Selectors API предоставляет методы, с помощью которых можно быстро и просто получить доступ к узлам [`Element`](/ru/docs/DOM/element) из DOM путём сопоставления с набором селекторов. Это намного быстрее, чем прошлые техники, где надо было, например, использовать цикл в JS-коде, чтобы найти конкретные элементы.

## Интерфейс NodeSelector (The NodeSelector interface)

Эта спецификация добавляет два новых метода к любым объектам, реализующим интерфейс [`Document`](/ru/docs/DOM/document), [`DocumentFragment`](/ru/docs/DOM/DocumentFragment), или [`Element`](/ru/docs/DOM/element):

- `querySelector`
  - : Возвращает первый совпадающий узел [`Element`](/ru/docs/DOM/element) внутри поддерева. Если совпадающих узлов нет, будет возвращён `null`.
- `querySelectorAll`
  - : Возвращает [`NodeList`](/ru/docs/DOM/NodeList), содержащий все подходящие узлы `Element` внутри поддерева узлов. Или возвращает пустой `NodeList`, если совпадений не найдено.

> **Примечание:** [`NodeList`](/ru/docs/DOM/NodeList), возвращаемый методом `querySelectorAll()`, не настоящий. Этот список отличается от других методов поиска DOM, которые возвращают настоящие (живые) узлы.

Вы можете найти примеры и детали, прочитав документацию для методов [`querySelector()`](/ru/docs/DOM/Element.querySelector) и [`querySelectorAll()`](/ru/docs/DOM/Element.querySelectorAll), а также в статье [Code snippets for querySelector](/ru/docs/Code_snippets/QuerySelector).

## Selectors

Селекторные методы принимают один или больше селекторов, разделённых запятыми, чтобы определить, какие элементы должны быть возвращены. Например, чтобы все параграфы в документе, которые имеют классы `warning` или `note`, можно сделать следующее:

```
var special = document.querySelectorAll( "p.warning, p.note" );
```

Также можно искать по ID. Например:

```
var el = document.querySelector( "#main, #basic, #exclamation" );
```

После выполнения кода выше, `el` будет содержать первый элемент в документе, чей ID `main, basic` или `exclamation`

Вы можете использовать любые CSS-селекторы в методах `querySelector(), querySelectorAll()`

## See also

- [Selectors API](http://www.w3.org/TR/selectors-api/)
- [`element.querySelector`](/ru/docs/DOM/Element.querySelector)
- [`element.querySelectorAll`](/ru/docs/DOM/Element.querySelectorAll)
- [`document.querySelector`](/ru/docs/DOM/Document.querySelector)
- [`document.querySelectorAll`](/ru/docs/DOM/Document.querySelectorAll)
- [Code snippets for querySelector](/ru/docs/Code_snippets/QuerySelector)
