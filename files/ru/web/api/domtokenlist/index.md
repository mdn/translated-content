---
title: DOMTokenList
slug: Web/API/DOMTokenList
---

{{APIRef("DOM")}}

**DOMTokenList** интерфейс представляет собой набор разделённых пробелами токенов. Такой набор возвращается от {{domxref("Element.classList")}}, {{domxref("HTMLLinkElement.relList")}}, {{domxref("HTMLAnchorElement.relList")}}, {{domxref("HTMLAreaElement.relList")}}, {{domxref("HTMLIframeElement.sandbox")}}, или {{domxref("HTMLOutputElement.htmlFor")}}. Он в начале индексируется 0 как в объектах JavaScript. DOMTokenList всегда чувствителен к регистру.

## Свойства

- {{domxref("DOMTokenList.length")}} {{ReadOnlyInline}}
  - : - целое число, которое представляет собой число объектов хранящееся в объекте
- {{domxref("DOMTokenList.value")}}
  - : Список значений {{domxref("DOMString")}}.

## Методы

- {{domxref("DOMTokenList.item()")}}
  - : Возвращает элемент из списка по индексу (возвращает `undefined` если число больше или равно длине списка).
- {{domxref("DOMTokenList.contains()")}}
  - : Возвращает `true` если список содержит отданный _токен_, иначе `false`.
- {{domxref("DOMTokenList.add()")}}
  - : Добавляет отданный _токен_ в список.
- {{domxref("DOMTokenList.remove()")}}
  - : Удаляет указанный _токен_ из списка.
- {{domxref("DOMTokenList.replace()")}}
  - : Заменяет существующий _токен_ новым.
- {{domxref("DOMTokenList.supports()")}}
  - : Возвращает `true` если отданный _токен_ поддерживается токенами в связанном атрибуте
- {{domxref("DOMTokenList.toggle()")}}
  - : `Удаляет отданный токен из списка и возвращает false`. Если _токена_ не существует, то он добавляется и функция возвращает `true`.
- {{domxref("DOMTokenList.entries()")}}
  - : Возвращает {{jsxref("Iteration_protocols","iterator")}} позволяя пройтись по всем парам ключ/значение хранящимся в объекте.
- {{domxref("DOMTokenList.forEach()")}}
  - : Выполняет предусмотренную функцию к каждому элементу `DOMTokenList`.
- {{domxref("DOMTokenList.keys()")}}
  - : Возвращает {{jsxref("Iteration_protocols", "iterator")}} позволяя пройтись по всем ключам всех пар ключ/значение, хранящихся в объекте.
- {{domxref("DOMTokenList.values()")}}
  - : Возвращает {{jsxref("Iteration_protocols", "iterator")}} позволяя пройтись по всем значениям пар ключ/значение, хранящихся в объектах.

## Примеры

В следующем простом примере мы извлекаем список классов установленных в элементе {{htmlelement("p")}} как `DOMTokenList` используя {{domxref("Element.classList")}}, добавляем класс используя {{domxref("DOMTokenList.add()")}}, затем обновляем {{domxref("Node.textContent")}} в элементе `<p>` чтобы уравнять с `DOMTokenList`.

Сперва HTML:

```html
<p class="a b c"></p>
```

Теперь JavaScript:

```js
var para = document.querySelector("p");
var classes = para.classList;
para.classList.add("d");
para.textContent = 'paragraph classList is "' + classes + '"';
```

Результат выглядит так:

{{ EmbedLiveSample('Примеры', '100%', 60) }}

## Обрезка пробелов и удаление дубликатов

Метод, который модифицирует `DOMTokenList` (как {{domxref("DOMTokenList.add()")}}) автоматически обрезает все излишки {{Glossary("Whitespace")}} и удаляет значения дубликатов из списка. Пример:

```html
<span class="    d   d e f"></span>
```

```js
var span = document.querySelector("span");
var classes = span.classList;
span.classList.add("x");
span.textContent = 'span classList is "' + classes + '"';
```

Результат выглядит так:

{{ EmbedLiveSample('Обрезка_пробелов_и_удаление_дубликатов', '100%', 60) }}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{domxref("DOMSettableTokenList")}} (объект который расширяет `DOMTokenList` с установленным _.value_ параметром)
