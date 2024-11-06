---
title: "Element: свойство classList"
slug: Web/API/Element/classList
l10n:
  sourceCommit: 1b22d649b27f7b9359388cb57fc0075559e32584
---

{{APIRef("DOM")}}

## Описание

**`Element.classList`** — это доступное только для чтения свойство, которое содержит текущую коллекцию {{domxref("DOMTokenList")}} всех атрибутов `class` элемента.

Использование `classList` представляет более удобный способ, чем доступ к списку классов элемента в виде строки, разделенной пробелами, через {{domxref("element.className")}}.

## Значение

{{domxref("DOMTokenList")}} представляет содержимое атрибута `class` элемента. Если атрибут `class` не установлен или пуст, то будет возвращён пустой `DOMTokenList`, то есть `DOMTokenList` со свойством `length` равным `0`.

Хотя само свойство `classList` доступно только для чтения, можно изменять связанный с ним `DOMTokenList` с помощью методов {{domxref("DOMTokenList/add", "add()")}}, {{domxref("DOMTokenList/remove", "remove()")}}, {{domxref("DOMTokenList/replace", "replace()")}} и {{domxref("DOMTokenList/toggle", "toggle()")}}.

Для проверки, содержит ли элемент какой-либо класс можно использовать метод {{domxref("DOMTokenList/contains", "classList.contains()")}}.

## Примеры

```js
const div = document.createElement("div");
div.className = "foo";

// Начальное состояние: <div class="foo"></div>
console.log(div.outerHTML);

// Используем classList API для удаления и добавления классов
div.classList.remove("foo");
div.classList.add("anotherclass");

// <div class="anotherclass"></div>
console.log(div.outerHTML);

// Если класс "visible" присутствует в списке классов, то он будет удалён, а иначе наоборот добавлен
div.classList.toggle("visible");

// Добавление/удаление класса "visible" в зависимости от условия, передаваемого вторым аргументом
div.classList.toggle("visible", i < 10);

// false
console.log(div.classList.contains("foo"));

// Добавление или удаление нескольких классов сразу
div.classList.add("foo", "bar", "baz");
div.classList.remove("foo", "bar", "baz");

// Добавление или удаление нескольких классов с использованием spread-синтаксиса
const cls = ["foo", "bar"];
div.classList.add(...cls);
div.classList.remove(...cls);

// Замена класса "foo" классом "bar"
div.classList.replace("foo", "bar");
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{domxref("element.className")}}
- {{domxref("DOMTokenList")}}
- [`classList.js`](https://github.com/eligrey/classList.js) (кросс-браузерный полифил, реализующий функциональность `element.classList`)
