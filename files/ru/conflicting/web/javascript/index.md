---
title: О JavaScript
slug: conflicting/Web/JavaScript
original_slug: Web/JavaScript/About_JavaScript
---

{{JsSidebar()}}

## Что такое JavaScript?

**JavaScript**® (часто сокращают до **JS**) — это лёгкий, интерпретируемый, объектно-ориентированный язык с [функциями первого класса](https://en.wikipedia.org/wiki/First-class_functions), самый известный скриптовый язык для веб-страниц, но также [используется во многих не браузерных окружениях](https://en.wikipedia.org/wiki/JavaScript#Uses_outside_web_pages). [Прототипно-ориентированный](<https://en.wikipedia.org/wiki/Prototype-based_programming>) мультипарадигменный язык сценариев, который поддерживает динамический, объектно-ориентированный, императивный и функциональный стили программирования.

JavaScript запускается на стороне клиента Интернета, который может использоваться для создания/программирования того, как веб-страницы будут вести себя при наступлении каких-либо событий. JavaScript легко изучить, а также это мощный скриптовый язык, широко используемый для контролирования поведения веб-страниц.

Вопреки распространённому мнению, **JavaScript _не_ является "интерпретируемым Java"**. В двух словах, JavaScript — это динамический скриптовый язык, поддерживающий [прототипное](/ru/docs/Web/JavaScript/Guide/Details_of_the_Object_Model#Class-Based_vs._Prototype-Based_Languages) создание объектов. Базовый синтаксис намеренно похож на Java и C++, чтобы уменьшить число новых концепций, необходимых для изучения языка. Такие языковые конструкции, как `if`, `for`, `while`, `switch`, `try ... catch` похожи на конструкции этих языков.

JavaScript может функционировать и как [процедурный](https://ru.wikipedia.org/wiki/Процедурное_программирование), и как [объектно-ориентированный](/ru/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript) язык. Объекты можно создавать программно во время выполнения, путём присоединения методов и свойств или пустых объектов **во время выполнения**, в отличие от синтаксических определений классов в компилируемых языках, таких как С++ или Java. После того, как объект был создан, он может быть использован в качестве плана (или прототипа) для создания похожих объектов.

Динамические возможности JavaScript включают: создание объектов во время выполнения, переменное число параметров, динамическое создание скриптов (с помощью [`eval`](/ru/docs/Web/JavaScript/Reference/Global_Objects/eval)), перебор объектов (с помощью `for ... in`), восстановление исходного кода (программы на JavaScript могут декомпилировать тела функций обратно в исходный код).

Для более глубокого погружения в программирование на JavaScript, используйте ссылки ниже в разделе [Ресурсы по JavaScript](/ru/docs/Web/JavaScript/%D0%9E_JavaScript#Ресурсы_по_JavaScript).

## Какие реализации JavaScript доступны?

Mozilla предоставляет две реализации JavaScript. **Самая** первая реализация JavaScript была создана Бренданом Эйхом (Brendan Eich) в компании Netscape, и с тех пор обновляется, чтобы соответствовать ECMA-262 Edition 5 и более поздним версиям. Этот движок называется [SpiderMonkey](/ru/docs/SpiderMonkey) и реализован на языке C/C++. Движок [Rhino](/ru/docs/Rhino) создан Норрисом Бойдом (Norris Boyd) и реализован на языке Java. Как и SpiderMonkey, Rhino соответствует ECMA-262 Edition 5.

Несколько оптимизаций, таких как TraceMonkey (Firefox 3.5), JägerMonkey (Firefox 4) и IonMonkey, добавили в SpiderMonkey со временем. Работа всегда продолжается, чтобы улучшить производительность выполнения JavaScript.

Кроме вышеприведённых существуют и другие популярные реализации:

- [V8](https://code.google.com/p/v8/) от Google, используемый в браузерах Google Chrome и последних версиях Opera. Также используется в [Node.js](http://nodejs.org/).
- [JavaScriptCore](http://www.webkit.org/projects/javascript/index.html) (SquirrelFish/Nitro), используемый в WebKit браузерах, например, в Apple Safari.
- [Carakan](https://dev.opera.com/blog/carakan/) используется в старых версиях Opera.
- [Chakra](http://en.wikipedia.org/wiki/Chakra_%28JScript_engine%29) используется в Internet Explorer (язык, который реализует данный движок, называется JScript, чтобы избежать проблем с авторскими правами).

Каждый движок mozilla.org предоставляет публичный API, который могут использовать разработчики приложений для интеграции JavaScript в своё ПО. Однако, наиболее распространённой средой для JavaScript являются веб-браузеры. Веб-браузеры обычно используют публичный API для создания **объектов среды**, отражающих [DOM](http://www.w3.org/DOM/) в JavaScript.

JavaScript также применяется как скриптовый язык на стороне сервера. JavaScript сервер предоставляет объекты среды, представляющие объекты HTTP запросов и ответов, которые могут быть использованы программой на JavaScript для динамической генерации веб-страниц. Популярным примером является [Node.js](http://nodejs.org/).

## Ресурсы по JavaScript

- [SpiderMonkey](/ru/docs/SpiderMonkey)
  - : SpiderMonkey — это интерпретатор языка JavaScript, написанный на языке C. Информация, относящаяся к реализации движка JavaScript Mozilla на C/C++ (aka SpiderMonkey), включая, как вставлять его в приложения.
- [Rhino](/ru/docs/Rhino)
  - : Информация, относящаяся к реализации JavaScript, написанной на Java (aka Rhino).
- [Ресурсы по языку](/ru/docs/Web/JavaScript/Language_Resources)
  - : Ссылки на опубликованные стандарты по JavaScript.
- [Повторное введение в JavaScript](/ru/docs/Web/JavaScript/A_re-introduction_to_JavaScript)
  - : [Руководство](/ru/docs/Web/JavaScript/Guide) и [справочник](/ru/docs/Web/JavaScript/Reference) по JavaScript.

JavaScript® - торговая марка или зарегистрированная торговая марка Oracle в США и других странах.
