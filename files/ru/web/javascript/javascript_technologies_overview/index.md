---
title: Обзор JavaScript
slug: Web/JavaScript/JavaScript_technologies_overview
---

{{JsSidebar("Introductory")}}

## Введение

Если HTML определяет структуру и контент веб-страницы, а CSS задаёт формат и внешний вид, то JavaScript добавляет интерактивность и создаёт богатые веб-приложения.

Однако, под общим термином "JavaScript", в контексте веб-браузера, понимаются несколько очень разных вещей. Одна из них - это базовый язык программирования (ECMAScript), а другая - коллекция Web APIs, включая DOM (Объектно-ориентированная модель документа).

## JavaScript, базовый язык программирования (ECMAScript)

Базовый язык JavaScript стандартизирован комитетом ECMA TC-39 как язык программирования под названием [ECMAScript](/ru/docs/Web/JavaScript/JavaScript_technologies_overview).

Базовый язык также используется в не-браузерном окружении, например, в [node.js](https://nodejs.org/).

### Что попадает под понятие ECMAScript?

Кроме прочего, [ECMAScript](/ru/docs/Web/JavaScript/JavaScript_technologies_overview) определяет:

- Синтаксис языка (правила парсинга, ключевые слова, порядок выполнения, инициализацию объекта литерала...)
- Механизм обработки ошибок (исключения, try/catch оператор,возможность создавать новые типы ошибок)
- Типы данных (логические, числа, строки, функции, объекты...)
- Глобальный объект. В браузерах глобальным объектом является `window`, но ECMAscript определяет только те APIs, которые не являются специфическими для браузера, как `parseInt`, `parseFloat`, `decodeURI`, `encodeURI`...
- Механизм прототипного наследования
- Встроенные объекты и функции (JSON, Math, Array.prototype методы, методы самоанализа объекта...)
- Строгий режим

### API по интернационализации

[Спецификация ECMAScript для API по интернационализации](https://ecma-international.org/ecma-402/1.0/) - дополнение к языковой спецификации ECMAScript, также стандартизированной Ecma TC39. API по интернационализации обеспечивает сопоставление (строковое сравнение), форматирование чисел, дат и времени для приложений на JavaScript, позволяя выбирать язык и проектировать функциональность в зависимости от нужд. Начальный стандарт был одобрен в декабре 2012; статус реализации в браузерах ведётся в документации [`Intl` object](/ru/docs/Web/JavaScript/Reference/Global_Objects/Intl). Спецификация по интернационализации сейчас также утверждается на ежегодной основе, и браузеры постоянно улучшают её реализацию.

## DOM APIs

### WebIDL

[Спецификация WebIDL](https://dev.w3.org/2006/webapi/WebIDL/) является связующим звеном между технологиями DOM и ECMAScript.

### Ядро DOM

Объектно-ориентированная модель документа (DOM) это кросс-платформенное, **языково-независимое соглашение** по представлению объектов и взаимодействию с ними в документах HTML, XHTML и XML. Объект в **DOM-дереве** может быть адресован и обработан с помощью своих методов. Ядро Объектно-ориентированной модели документа стандартизируется W3C и определяет языково-независимые интерфейсы, абстрагирующие HTML и XML документы как объекты, и механизмы для управления этой абстракцией. Кроме прочих вещей, опряденных в DOM, можно также найти:

- Структуру документа, древовидную модель, и архитектуру событий DOM в [ядре DOM](https://dvcs.w3.org/hg/domcore/raw-file/tip/Overview.html): `Node`, `Element`, `DocumentFragment`, `Document`, `DOMImplementation`, `Event`, `EventTarget`, …
- Менее строгое определение архитектуры событий DOM, также как и определённые [события DOM](https://dev.w3.org/2006/webapi/DOM-Level-3-Events/html/DOM3-Events.html).
- Другие вещи, такие как [DOM Traversal](https://www.w3.org/TR/DOM-Level-2-Traversal-Range/traversal.html) и [DOM Range](https://html5.org/specs/dom-range.html).

С точки зрения ECMAScript, объекты определённые в спецификации DOM называются объектами среды исполнения ("host objects").

### HTML DOM

[HTML](https://www.whatwg.org/html), это язык разметки Web, который определён в терминах DOM/ is specified in terms of the DOM. Layered above the abstract concepts defined in DOM Core, HTML also defines the _meaning_ of elements. The HTML DOM includes such things as the `className` property on HTML elements, or APIs such as {{ domxref("document.body") }}.

The HTML specification also defines restrictions on documents; for example, it requires all children of a `ul` element, which represents an unordered list, to be `li` elements, as those represent list items. In general, it also forbids using elements and attributes that aren't defined in a standard.

## Другие API, заслуживающие внимания

- Функции setTimeout и setInterval впервые были определены в интерфейсе [Window](https://www.whatwg.org/html/#window) в стандарте HTML.
- [XMLHttpRequest](https://dev.w3.org/2006/webapi/XMLHttpRequest-2/) позволяет отправлять асинхронные HTTP запросы.
- Объектная модель [CSS](https://dev.w3.org/csswg/cssom/) абстрагировать CSS-правила как объекты
- [WebWorkers](https://www.whatwg.org/specs/web-workers/current-work/) обеспечивает выполнение параллельных вычислений.
- [WebSockets](https://www.whatwg.org/C/#network) обеспечивает низкоуровневое двунаправленное соединение.
- [Canvas 2D Context](https://www.whatwg.org/html/#2dcontext) это API для рисования с помощью элемента {{htmlelement("canvas")}}..
