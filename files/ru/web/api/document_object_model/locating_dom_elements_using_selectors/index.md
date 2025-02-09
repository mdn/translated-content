---
title: Locating DOM elements using selectors
slug: Web/API/Document_Object_Model/Locating_DOM_elements_using_selectors
---

{{DefaultAPISidebar("DOM")}}

Selectors API предоставляет методы, с помощью которых можно быстро и просто получить доступ к узлам [`Element`](/ru/docs/Web/API/Element) из DOM путём сопоставления с набором селекторов. Это намного быстрее, чем прошлые техники, где надо было, например, использовать цикл в JS-коде, чтобы найти конкретные элементы.

## Интерфейс NodeSelector (The NodeSelector interface)

Эта спецификация добавляет два новых метода к любым объектам, реализующим интерфейс [`Document`](/ru/docs/Web/API/Document), [`DocumentFragment`](/ru/docs/Web/API/DocumentFragment), или [`Element`](/ru/docs/Web/API/Element):

- `querySelector`
  - : Возвращает первый совпадающий узел [`Element`](/ru/docs/Web/API/Element) внутри поддерева. Если совпадающих узлов нет, будет возвращён `null`.
- `querySelectorAll`
  - : Возвращает [`NodeList`](/ru/docs/Web/API/NodeList), содержащий все подходящие узлы `Element` внутри поддерева узлов. Или возвращает пустой `NodeList`, если совпадений не найдено.

> **Примечание:** [`NodeList`](/ru/docs/Web/API/NodeList), возвращаемый методом `querySelectorAll()`, не настоящий. Этот список отличается от других методов поиска DOM, которые возвращают настоящие (живые) узлы.

Вы можете найти примеры и детали, прочитав документацию для методов [`querySelector()`](/ru/docs/Web/API/Element/querySelector) и [`querySelectorAll()`](/ru/docs/Web/API/Element/querySelectorAll), а также в статье [Code snippets for querySelector](/ru/docs/Code_snippets/QuerySelector).

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

## Смотрите также

- [Selectors API](https://www.w3.org/TR/selectors-api/)
- [`element.querySelector`](/ru/docs/Web/API/Element/querySelector)
- [`element.querySelectorAll`](/ru/docs/Web/API/Element/querySelectorAll)
- [`document.querySelector`](/ru/docs/Web/API/Document/querySelector)
- [`document.querySelectorAll`](/ru/docs/Web/API/Document/querySelectorAll)
- [Code snippets for querySelector](/ru/docs/Code_snippets/QuerySelector)
