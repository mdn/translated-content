---
title: JavaScript
slug: Web/JavaScript
---

{{JsSidebar()}}

**JavaScript** (**JS**) — это легковесный интерпретируемый (или [JIT-компилируемый](https://ru.wikipedia.org/wiki/JIT-компиляция)) язык программирования с {{Glossary("First-class_Function", "функциями первого класса")}}. Наиболее широкое применение находит как язык сценариев веб-страниц, но также [используется и в других программных продуктах](http://en.wikipedia.org/wiki/JavaScript#Uses_outside_web_pages), например, {{Glossary("Node.js")}} или [Apache CouchDB](https://couchdb.apache.org). JavaScript это {{Glossary("Prototype-based_programming", "прототипно-ориентированный")}}, мультипарадигменный язык с динамической типизацией, который поддерживает объектно-ориентированный, императивный и декларативный (например, функциональное программирование) стили программирования. Подробнее [о JavaScript](/ru/docs/Web/JavaScript/%D0%9E_JavaScript).

Эта часть сайта посвящена самому языку JavaScript, и она не затрагивает тонкостей, связанных с веб-страницами или окружением, в котором исполняется JavaScript. Информация об {{Glossary("API")}}, относящихся к веб-страницам, находится в разделах, посвящённых [Веб-API](/ru/docs/Web/API) и [DOM](/ru/docs/Web/API/Document_Object_Model).

Стандартом языка JavaScript является [ECMAScript](/ru/docs/Web/JavaScript/Reference/JavaScript_technologies_overview). По состоянию на 2012 год, все современные браузеры полностью поддерживают ECMAScript 5.1. Старые версии браузеров поддерживают по крайней мере - ECMAScript 3. 17 июня 2015 года состоялся выпуск шестой версии ECMAScript. Эта версия официально называется ECMAScript 2015, которую чаще всего называют ECMAScript 2015 или просто ES2015. С недавнего времени стандарты ECMAScript выпускаются ежегодно. Эта документация относится к последней версии черновика, которой является [ECMAScript 2018](http://tc39.github.io/ecma262/).

Не следует путать JavaScript c [языком программирования Java](https://ru.wikipedia.org/wiki/Java). И "Java", и "JavaScript" являются торговыми марками или зарегистрированными торговыми марками Oracle в США и других странах. Однако, у обоих языков различный синтаксис, семантика и применение.

## Учебные материалы

Научитесь программировать на JavaScript вместе с нашим руководством.

### Для абсолютных новичков

Загляните в наш [Учебный План,](/ru/docs/Learn/JavaScript) если вам хочется изучить JavaScript, но у вас нет опыта в JavaScript или программировании. Доступные разделы:

- [Первые шаги в JavaScript](/ru/docs/Web/JavaScript/Guide)
  - : Отвечаем на такие вопросы, как "что такое JavaScript?", "как он выглядит?", "и что он может делать?", а также обсуждаем основные возможности JavaScript, такие, как переменные, строки, числа и массивы.
- [Структурные элементы JavaScript](/ru/docs/Learn_web_development/Core/Scripting)
  - : Продолжаем наше изучение главных возможностей JavaScript, обращаем наше внимание на самые часто встречающиеся блоки кода, такие, как условные выражения, циклы, функции и события.
- [Введение в объекты JavaScript](/ru/docs/Learn/JavaScript/%D0%9E%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D1%8B)
  - : Объектно-ориентированная природа JavaScript важна для понимания, если вы хотите углубить знание языка и писать более эффективный код. Поэтому мы подготовили модуль, который поможет вам в этом.

- [Асинхронный JavaScript](/ru/docs/Learn_web_development/Extensions/Async_JS)
  - : Обсуждение асинхронного JavaScript: почему это так важно, как эта возможность языка может использована для обработки потенциальных блокирующих операций, как, например получение данных с сервера.
- [Клиентские (браузерные) веб-API](/ru/docs/Learn_web_development/Extensions/Client-side_APIs)
  - : Когда вы пишите клиент веб-сайтов или приложений на JavaScript, вы не далеко уйдёте без использования API – интерфейсов для взаимодействия с браузером и операционной системой, на которой запущен сайт, или даже для операций с данными, полученными от других веб-сайтов и сервисов. В этом цикле статей мы разбираемся, что такое API и как использовать некоторые самые распространённые API, которые вам встретятся при разработке.

### Руководство по JavaScript

- [Руководство по JavaScript](/ru/docs/Web/JavaScript/Guide)
  - : Более подробное руководство по языку программирования JavaScript, нацеленное на тех, кто уже имеет опыт программирования на JavaScript или на любом другом языке.

### Средний уровень

- [Понимание JavaScript-фреймворков для фронтенда](/ru/docs/Learn_web_development/Core/Frameworks_libraries)
  - : JavaScript-ффреймворки являются неотъемлемой частью современной веб-разработки,предоставляя разработчикам проверенные и протестированныеинструменты для создания масштабируемых и интерактивных веб-приложений. Многиесовременные компании используют фреймворки для своих решений, поэтому многие задачи связанные с разработкой клиентской части веб-приложений теперь требуют опыта работы с ними.
- [Повторное введение в JavaScript](/ru/docs/Web/JavaScript/Guide/Language_overview)
  - : Обзор для тех, кто _думает_, что знает JavaScript.
- [Структуры данных JavaScript](/ru/docs/Web/JavaScript/Guide/Data_structures)
  - : Обзор существующих структур данных в JavaScript.
- [Операторы сравнения и тождественности](/ru/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness)
  - : JavaScript предоставляет три различных оператора сравнения значений: строгое равенство `===`, с приведением типов `==` и метод {{jsxref("Global_Objects/Object/is", "Object.is()")}}.
- [Замыкания](/ru/docs/Web/JavaScript/Guide/Closures)
  - : Замыкания это сочетание функции и лексического окружения в котором она была определена.

### Продвинутый уровень

- [Наследование и цепочка прототипов](/ru/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)
  - : Статья разъясняет бытующие заблуждения и недооцененность наследования, основанного на прототипах.
- [Строгий режим — "use strict"](/ru/docs/Web/JavaScript/Reference/Strict_mode)
  - : Строгий режим говорит о том, что вы не можете использовать какую-либо переменную до её объявления. Это ограниченный вариант ECMAScript 5, для более быстрой производительности и простой отладки.
- [Типизированные массивы](/ru/docs/Web/JavaScript/Guide/Typed_arrays)
  - : Типизированные массивы предоставляют механизм для работы с необработанными двоичными данными в JavaScript.
- [Управление памятью](/ru/docs/Web/JavaScript/Guide/Memory_management)
  - : Жизненный цикл памяти и сборка мусора в JavaScript.
- [Модель параллелизма (мультипоточности) и цикл событий](/ru/docs/Web/JavaScript/Reference/Execution_model)
  - : В JavaScript есть модель параллелизма, основанная на "цикле событий".
- [Введение в использование XPath в JavaScript](/ru/docs/Web/XPath/Introduction_to_using_XPath_in_JavaScript)
  - : Этот документ описывает интерфейс для использования [XPath](/ru/docs/Web/XPath) в JavaScript напрямую, внутри расширений и на веб-сайтах.

## Справочник

Подробный [справочник](/ru/docs/Web/JavaScript/Reference) по JavaScript.

- [Стандартные встроенные объекты](/ru/docs/Web/JavaScript/Reference/Global_Objects)
  - : Узнайте о стандартных встроенных объектах {{jsxref("Array")}}, {{jsxref("Boolean")}}, {{jsxref("Date")}}, {{jsxref("Error")}}, {{jsxref("Function")}}, {{jsxref("JSON")}}, {{jsxref("Math")}}, {{jsxref("Number")}}, {{jsxref("Object")}}, {{jsxref("RegExp")}}, {{jsxref("String")}}, {{jsxref("Map")}}, {{jsxref("Set")}}, {{jsxref("WeakMap")}} , {{jsxref("WeakSet")}} и других.
- [Выражения и операторы](/ru/docs/Web/JavaScript/Reference/Operators)
  - : Узнайте о поведении таких операторов в JavaScript, как {{jsxref("Operators/instanceof", "instanceof")}}, {{jsxref("Operators/typeof", "typeof")}}, {{jsxref("Operators/new", "new")}}, {{jsxref("Operators/this", "this")}}, [приоритете операторов](/ru/docs/Web/JavaScript/Reference/Operators/Operator_precedence) и многом другом.
- [Инструкции и объявления](/ru/docs/Web/JavaScript/Reference/Statements)
  - : Узнайте о {{jsxref("Statements/do...while", "do-while")}}, {{jsxref("Statements/for...in", "for-in")}}, {{jsxref("Statements/for...of", "for-of")}}, {{jsxref("Statements/try...catch", "try-catch")}}, {{jsxref("Statements/let", "let")}}, {{jsxref("Statements/var", "var")}}, {{jsxref("Statements/const", "const")}}, {{jsxref("Statements/if...else", "if-else")}}, {{jsxref("Statements/switch", "switch")}} и многих других выражениях и ключевых словах в JavaScript.
- [Функции](/ru/docs/Web/JavaScript/Reference/Functions)
  - : Узнайте, как работать с функциями в JavaScript, чтобы разрабатывать свои приложения.

## Инструменты и дополнительные ресурсы

Полезные инструменты для написания и отладки вашего **JavaScript** кода.

- [Инструменты разработчика Firefox](https://firefox-source-docs.mozilla.org/devtools-user/index.html)
  - : [Простой редактор JavaScript](/ru/docs/Tools/Черновик), [Веб-консоль](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html), [JavaScript Профайлер](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html), [Отладчик](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html) и другие.
- [JavaScript шеллы](/ru/docs/Web/JavaScript/JavaScript_шеллы)
  - : JavaScript шеллы позволяют быстро проверять фрагменты JavaScript-кода.
- [TogetherJS](https://togetherjs.com/)
  - : Объединение усилий стало проще. Добавляя TogetherJS на вашу веб-страницу, ваши пользователи могут помочь другу-другу в реальном времени!
- [Stack Overflow](https://stackoverflow.com/questions/tagged/javascript)
  - : Вопросы по JavaScript на Stack Overflow.
- [Версии JavaScript и информация о релизах](/ru/docs/Web/JavaScript/New_in_JavaScript)
  - : Просмотрите историю возможностей JavaScript и их статус.
- [JSFiddle](https://jsfiddle.net/)
  - : Редактируйте JavaScript, CSS, HTML и получайте живые результаты. Используйте экспериментальные ресурсы и взаимодействуйте с вашей командой онлайн.

<!---->

- [Plunker](https://plnkr.co/)
  - : Plunker - это онлайн-сообщество для создания, обмена и совместной работы над идеями, касающимися веб-разработки. Редактируйте ваши JavaScript, CSS, HTML файлы, смотрите результат их выполнения и организуйте их в файловую структуру.
- [JSBin](https://jsbin.com/)
  - : JS Bin это инструмент с открытым исходным кодом для отладки и совместной разработки.
- [Codepen](https://codepen.io/)
  - : Codepen ещё одна платформа для совместной веб-разработки, дающие результат в реальном-времени.
- [StackBlitz](https://stackblitz.com/)
  - : StackBlitz - это "песочница"/инструмент отладки, где вы можете размещать полновесные приложения написанные на React, Angular, т др.
