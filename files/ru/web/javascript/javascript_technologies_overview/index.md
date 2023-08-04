---
title: Обзор JavaScript
slug: Web/JavaScript/JavaScript_technologies_overview
---

{{JsSidebar("Introductory")}}

## Введение

Если HTML определяет структуру и контент веб-страницы, а CSS задаёт формат и внешний вид, то JavaScript добавляет интерактивность и создаёт богатые веб-приложения.

Однако, под общим термином "JavaScript", в контексте веб-браузера, понимаются несколько очень разных вещей. Одна из них - это базовый язык программирования (ECMAScript), а другая - коллекция Web APIs, включая DOM (Объектно-ориентированная модель документа).

## JavaScript, базовый язык программирования (ECMAScript)

Базовый язык JavaScript стандартизирован комитетом ECMA TC-39 как язык программирования под названием [ECMAScript](/ru/docs/JavaScript/Language_Resources).

Базовый язык также используется в не-браузерном окружении, например, в [node.js](http://nodejs.org/).

### Что попадает под понятие ECMAScript?

Кроме прочего, [ECMAScript](/ru/docs/JavaScript/Language_Resources) определяет:

- Синтаксис языка (правила парсинга, ключевые слова, порядок выполнения, инициализацию объекта литерала...)
- Механизм обработки ошибок (исключения, try/catch оператор,возможность создавать новые типы ошибок)
- Типы данных (логические, числа, строки, функции, объекты...)
- Глобальный объект. В браузерах глобальным объектом является `window`, но ECMAscript определяет только те APIs, которые не являются специфическими для браузера, как `parseInt`, `parseFloat`, `decodeURI`, `encodeURI`...
- Механизм прототипного наследования
- Встроенные объекты и функции (JSON, Math, Array.prototype методы, методы самоанализа объекта...)
- Строгий режим

### Браузерная поддержка

На октябрь 2016, текущие версии основы веб-браузеров включали [ECMAScript 5.1](/ru/docs/Web/JavaScript/New_in_JavaScript/ECMAScript_5_support_in_Mozilla) и [ECMAScript 2015](/ru/docs/Web/JavaScript/New_in_JavaScript/ECMAScript_2015_support_in_Mozilla), но более старые версии (все ещё находящиеся в использовании) реализуют только ECMAScript 5.

### Будущее

Главное 6-ое издание ECMAscript было официально одобрено и опубликовано как стандарт 17 июня 2015 года на собрании ECMA General Assembly. С тех пор выпуски ECMAscript публикуются на ежегодной основе.

### API по интернационализации

[Спецификация ECMAScript для API по интернационализации](http://ecma-international.org/ecma-402/1.0/) - дополнение к языковой спецификации ECMAScript, также стандартизированной Ecma TC39. API по интернационализации обеспечивает сопоставление (строковое сравнение), форматирование чисел, дат и времени для приложений на JavaScript, позволяя выбирать язык и проектировать функциональность в зависимости от нужд. Начальный стандарт был одобрен в декабре 2012; статус реализации в браузерах ведётся в документации [`Intl` object](/ru/docs/JavaScript/Reference/Global_Objects/Intl). Спецификация по интернационализации сейчас также утверждается на ежегодной основе, и браузеры постоянно улучшают её реализацию.

## DOM APIs

### WebIDL

[Спецификация WebIDL](http://dev.w3.org/2006/webapi/WebIDL/) является связующим звеном между технологиями DOM и ECMAScript.

### Ядро DOM

Объектно-ориентированная модель документа (DOM) это кросс-платформенное, **языково-независимое соглашение** по представлению объектов и взаимодействию с ними в документах HTML, XHTML и XML. Объект в **DOM-дереве** может быть адресован и обработан с помощью своих методов. Ядро Объектно-ориентированной модели документа стандартизируется W3C и определяет языково-независимые интерфейсы, абстрагирующие HTML и XML документы как объекты, и механизмы для управления этой абстракцией. Кроме прочих вещей, опряденных в DOM, можно также найти:

- Структуру документа, древовидную модель, и архитектуру событий DOM в [ядре DOM](http://dvcs.w3.org/hg/domcore/raw-file/tip/Overview.html): `Node`, `Element`, `DocumentFragment`, `Document`, `DOMImplementation`, `Event`, `EventTarget`, …
- Менее строгое определение архитектуры событий DOM, также как и определённые [события DOM](http://dev.w3.org/2006/webapi/DOM-Level-3-Events/html/DOM3-Events.html).
- Другие вещи, такие как [DOM Traversal](http://www.w3.org/TR/DOM-Level-2-Traversal-Range/traversal.html) и [DOM Range](http://html5.org/specs/dom-range.html).

С точки зрения ECMAScript, объекты определённые в спецификации DOM называются объектами среды исполнения ("host objects").

### HTML DOM

[HTML](http://www.whatwg.org/html), это язык разметки Web, который определён в терминах DOM/ is specified in terms of the DOM. Layered above the abstract concepts defined in DOM Core, HTML also defines the _meaning_ of elements. The HTML DOM includes such things as the `className` property on HTML elements, or APIs such as {{ domxref("document.body") }}.

The HTML specification also defines restrictions on documents; for example, it requires all children of a `ul` element, which represents an unordered list, to be `li` elements, as those represent list items. In general, it also forbids using elements and attributes that aren't defined in a standard.

## Другие API, заслуживающие внимания

- Функции setTimeout и setInterval впервые были определены в интерфейсе [Window](http://www.whatwg.org/html/#window) в стандарте HTML.
- [XMLHttpRequest](http://dev.w3.org/2006/webapi/XMLHttpRequest-2/) позволяет отправлять асинхронные HTTP запросы.
- Объектная модель [CSS](http://dev.w3.org/csswg/cssom/) абстрагировать CSS-правила как объекты
- [WebWorkers](http://www.whatwg.org/specs/web-workers/current-work/) обеспечивает выполнение параллельных вычислений.
- [WebSockets](http://www.whatwg.org/C/#network) обеспечивает низкоуровневое двунаправленное соединение.
- [Canvas 2D Context](http://www.whatwg.org/html/#2dcontext) это API для рисования с помощью элемента {{htmlelement("canvas")}}..

## Поддержка браузерами

Каждый разработчик сталкивавшийся с DOM понимает как там все [безнадёжно](http://ejohn.org/blog/the-dom-is-a-mess/). Реализация той иной функциональности может отличаться, а следовательно и поведение. Главной причиной этого послужило то, что само описание спецификации DOM, было недостаточно ясным и подробным для разработчиков браузеров. Кроме того разные производители браузеров добавили несовместимые функциональности в своих браузеры или функциональности перекрывающие друг друга (например модель событий в IE). В данный момент консорциум W3C и частично WHATWG пытаются описать детально поведение тех или иных функций, чтобы улучшить совместимость между браузерами. Следуя этой тенденции, можно надеяться что браузеры улучшат свои реализации основываясь на этих спецификациях.

Наиболее общий, но возможно не самый надёжный способ улучшить кроссбраузерную совместимость это воспользоваться библиотеками JavaScript. Эти библиотеки абстрагируют вас от особенностей реализации DOM в том или ином браузере, и гарантируют, что их API работает одинаково в разных браузерах. Наиболее распространённые из них это [jQuery](http://jquery.com/) и [prototype](http://www.prototypejs.org/).
