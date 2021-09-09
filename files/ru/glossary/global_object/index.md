---
title: Global object
slug: Glossary/Global_object
translation_of: Glossary/Global_object
original_slug: Глоссарий/Global_object
---
Глобальный объект - это {{glossary("object")}}, который всегда существует в {{glossary("global scope")}}.

В JavaScript всегда определён глобальный объект. В веб-браузере, когда скрипты создают глобальные переменные, они создаются как свойства глобального объекта. (В {{Glossary("Node.js")}} это не так.) {{Glossary("Interface")}} глобального объекта зависит от контекста, в котором выполняется скрипт.К примеру:

- В веб-браузере любой код, который не запускается скриптом явно как фоновую задачу, имеет {{domxref("Window")}} в качестве своего глобального объекта. Это покрывает большую часть JavaScript-кода в сети.
- Код, работающий в {{domxref("Worker")}} имеет {{domxref("WorkerGlobalScope")}} объект в качестве своего глобального объекта.
- Скрипты, работающие в {{Glossary("Node.js")}} имеют объект, который называется [`global`](https://nodejs.org/api/globals.html#globals_global) в качестве своего глобального объекта.

## Объект `window` в Браузере

Объект `window` - Глобальный Объект в браузере. Доступ к любым Глобальным Переменным или функциям может быть получен как к _свойствам_ объекта `window`.

### Получение доступа к Глобальным Переменным

```js
var foo = "foobar";
foo === window.foo; // Возвращает: true
```

После определения Глобальной Переменной `foo`, мы можем получить доступ к его значению прямо с объекта `window`, использую имя переменной `foo` в качестве имени свойства Глобального Объекта ` window``.foo `.

#### Объяснение:

Глобальная Переменная `foo` была сохранена в объекте `window`, подобно следующему примеру:

```js
foo: "foobar"
```

### Получение доступа к Глобальным Функциям

```js
function greeting() {
   console.log("Hi!");
}

window.greeting(); // Тоже самое что и обычный вызов: greeting();
```

Пример выше показывает как Глобальные Функции хранятся в качестве свойств объекта `window`. Мы создали Глобальную Функцию ` greeting и вызвали её с помощью объекта ``window `.

#### Объяснение:

Глобальная функция `greeting` была сохранена в объекте `window`, подобно следующему примеру:

```js
greeting: function greeting() {
   console.log("Hi!");
}
```

<section id="Quick_links"><ul><li><a href="/en-US/docs/Glossary">MDN Web Docs Glossary</a><ul><li>{{glossary("global scope")}}</li><li>{{glossary("object")}}</li></ul></li><li>{{domxref("Window")}}</li><li>{{domxref("WorkerGlobalScope")}}</li><li><code><a href="https://nodejs.org/api/globals.html#globals_global">global</a></code></li></ul></section>
