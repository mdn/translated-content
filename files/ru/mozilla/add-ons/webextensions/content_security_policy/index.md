---
title: Политика защиты содержимого
slug: Mozilla/Add-ons/WebExtensions/Content_Security_Policy
---

{{AddonSidebar}}

Политика защиты содержимого (англ. Content Security Policy) автоматически применяется ко всем расширениям, разработанным с использованием WebExtension API. Она ограничивает источники, из которых расширение может загружать [\<script>](/ru/docs/Web/HTML/Element/script) и [\<object>](/ru/docs/Web/HTML/Element/object) ресурсы, и препятствует потенциально опасным практикам, например использованию [`eval()`](/ru/docs/Web/JavaScript/Reference/Global_Objects/eval).

Статья в краткой форме объясняет значимость этой политики, каковы её изначальные правила, как они влияют на расширение, и как расширение может изменять эти правила.

[Политика защиты содержимого](/ru/docs/Web/HTTP/CSP) - это механизм, помогающий веб-сайтам предотвращать выполнение умышленно вредного кода. Веб-сайт устанавливает политику защиты, используя HTTP заголовок, посылаемый с сервера. Главным образом эта политика участвует в устанавливании допустимых источников для загрузки различного вида контента, к примеру, скриптов или встроенных плагинов. Например, веб-сайт может использовать политику защиты для инструктирования браузера, чтобы тот выполнял скрипты, загруженные только с самого сайта, а не из каких-либо других источников. Политика защиты содержимого так же может запретить браузеру использовать потенциально опасные практики, например использование [eval()](/ru/docs/Web/JavaScript/Reference/Global_Objects/eval).

Так же как веб-сайты, расширения могут загружать контент из различных источников. Например, всплывающее окно расширения определяется HTML документом, и может подключать JavaScript и CSS файлы из различных источников, точно так же, как и нормальная веб-страница:

```html
<!doctype html>

<html>
  <head>
    <meta charset="utf-8" />
  </head>

  <body>
    <!-- Некоторый HTML контент -->

    <!--
      Подключение сторонней библиотеки.
      Смотрите также https://developer.mozilla.org/ru/docs/Web/Security/Subresource_Integrity.
    -->
    <script>
      src="https://code.jquery.com/jquery-2.2.4.js"
      integrity="sha256-iT6Q9iMJYuQiMWNd9lDyBUStIq/8PuOW33aOqmvFpqI="
      crossorigin="anonymous">
    </script>

    <!-- Include my popup's own script-->
    <script src="popup.js"></script>
  </body>
</html>
```

В сравнении с веб-сайтами, расширения имеют доступ к дополнительному привилегированному API, так что вероятность получения к нему доступа сторонним кодом - это очень большой риск. По этой причине:

- довольно строгая политика по защите содержимого применяются изначально. Смотрите [изначальные правила по защите содержимого](/ru/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#%D0%98%D0%B7%D0%BD%D0%B0%D1%87%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5_%D0%BF%D1%80%D0%B0%D0%B2%D0%B8%D0%BB%D0%B0_%D0%BF%D0%BE_%D0%B7%D0%B0%D1%89%D0%B8%D1%82%D0%B5_%D1%81%D0%BE%D0%B4%D0%B5%D1%80%D0%B6%D0%B8%D0%BC%D0%BE%D0%B3%D0%BE).
- авторы расширений могут изменять изначальную политику, используя `content_security_policy` ключ в manifest.json, но даже в этом случае существуют ограничения на возможные разрешения. Для дополнительной информации смотрите [`content_security_policy`](/ru/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy).

## Изначальные правила по защите содержимого

Следующие правила по защите содержимого являются изначальными:

```
"script-src 'self'; object-src 'self';"
```

Они применяются к любому расширению, которое самостоятельно не указывает свою политику защиты, используя [`content_security_policy`](/ru/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy) ключ в manifest.json. Это имеет следующие последствия:

- [Вы можете загружать только локальные к расширению \<script> и \<object> ресурсы.](/ru/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#%D0%A0%D0%B0%D1%81%D0%BF%D0%BE%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5_script_%D0%B8_object_%D1%80%D0%B5%D1%81%D1%83%D1%80%D1%81%D0%BE%D0%B2)
- [Расширению не разрешено выполнять код, представленный в виде JavaScript строк.](</ru/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#eval()_%D0%B8_%D1%82%D0%BE%D0%B2%D0%B0%D1%80%D0%B8%D1%89%D0%B8>)
- [Встраиваемый (inline) JavaScript-код не будет выполняться.](</ru/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#%D0%92%D1%81%D1%82%D1%80%D0%B0%D0%B8%D0%B2%D0%B0%D0%B5%D0%BC%D1%8B%D0%B9_(inline)_JavaScript>)

### Расположение script и object ресурсов

Используя изначальную политику защиты содержимого, вы можете загружать только локальные к расширению [\<script>](/ru/docs/Web/HTML/Element/script) и [\<object>](/ru/docs/Web/HTML/Element/object) ресурсы. Например, рассмотрите эту строку из документа расширения:

```html
<script src="https://code.jquery.com/jquery-2.2.4.js"></script>
```

Она не будет загружать запрашиваемый ресурс, и вы не сможете найти ни один ожидаемый от ресурса объект. К этой ситуации существует два решения:

- Скачать этот ресурс, упаковать его в ваше расширение и ссылаться к нему локально.
- Использовать ключ [`content_security_policy`](/ru/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy) в manifest.json, чтобы позволить загрузку контента из вышеупомянутого источника..

### eval() и товарищи

Изначальная политика защиты содержимого не позволяет выполнять код из JavaScript строк. Это означает, что следующие примеры кода изначально запрещены:

```js
eval("console.log('some output');");
```

```js
window.setTimeout("alert('Hello World!');", 500);
```

```js
var f = new Function("console.log('foo');");
```

### Встраиваемый (inline) JavaScript

Изначальная политика защиты содержимого не позволяет выполнять JavaScript-код, встраиваемый в HTML теги. Это запрещает как выполнение JavaScript-кода вложенного прямо в `<script>` тег, так и выполнение вписанных в атрибут обработчиков событий, означая, что следующий код так же не будет работать:

```html
<script>
  console.log("foo");
</script>
```

```html
<div onclick="console.log('click')">Click me!</div>
```

Вместо того, чтобы использовать код `<body onload="main()">` для запуска вашего скрипта после загрузки страницы, поставьте обработчики событий на [DOMContentLoaded](/ru/docs/Web/Events/DOMContentLoaded) или [load](/ru/docs/Web/Events/load).
