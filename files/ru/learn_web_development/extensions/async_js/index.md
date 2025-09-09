---
title: Асинхронный JavaScript
slug: Learn_web_development/Extensions/Async_JS
---

{{LearnSidebar}}

В этом модуле мы рассмотрим {{Glossary("asynchronous")}} {{Glossary("JavaScript")}}, почему это важно, и как это поможет эффективно справляться с потенциальной блокировкой операций, таких как получение ресурсов с сервера или запись в файл.

## Необходимые знания

Асинхронный JavaScript довольно сложная тема, и мы советуем пройти [Первые шаги в JavaScript](/ru/docs/conflicting/Learn_web_development/Core/Scripting) и [Блоки в JavaScript](/ru/docs/Learn_web_development/Core/Scripting) прежде чем начать эту тему.

> [!NOTE]
> Если вы работаете за компьютером/планшетом/другим устройством где у вас нет возможности создавать собственные файлы, вы можете попробовать(почти все) примеры кода в одном из веб-приложений, таких, как [JSBin](https://jsbin.com/) или [Glitch](https://glitch.com).

## Руководства

- [Введение в асинхронный JavaScript](/ru/docs/Learn_web_development/Extensions/Async_JS/Introducing)
  - : В этой статье мы кратко расскажем о различиях между синхронным и асинхронным программированием, проблемах, связанных с синхронным JavaScript-ом, и взглянем на различные техники асинхронного программирования, с которыми вы столкнётесь. Покажем как эти техники помогают решать проблемы синхронного JavaScript.
- [Обработка асинхронных операций с помощью Промисов](/ru/docs/Learn_web_development/Extensions/Async_JS/Promises)
  - : Расскажем о промисах и том, как использовать API на их основе, а также объясним как работает функция с <code>async</code> и оператор <code>await</code>.
- [Реализация API на основе Промисов](/ru/docs/Learn/JavaScript/Asynchronous/Implementing_a_promise-based_API)
  - : Статья о том, как реализовать собственный API на основе промисов.
- [Введение в воркеры](/ru/docs/Learn/JavaScript/Asynchronous/Introducing_workers)
  - : Воркеры позволяют запускать код в отдельном потоке и не блокировать основной поток, чтобы код в нём оставался отзывчивым. В статье мы перепишем «тяжелую» синхронную функцию с использованием воркера.

## Смотрите также

- [Асинхронное программирование](https://eloquentjavascript.net/11_async.html) из фантастической онлайн книги Марина Хавербеке, [Выразительный JavaScript](https://karmazzin.gitbooks.io/eloquentjavascript_ru/).
