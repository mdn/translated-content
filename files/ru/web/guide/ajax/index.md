---
title: AJAX
slug: Web/Guide/AJAX
---

<section id="Quick_links">
  {{ListSubpagesForSidebar("/ru/docs/Web/Guide")}}
</section>

**AJAX** (англ. _Asynchronous JavaScript and XML_ — асинхронный JavaScript и XML) — это не технология сама по себе, а термин, который описывает подход к совместному использованию существующих технологий, включая [HTML](/ru/docs/Web/HTML) или [XHTML](/ru/docs/Glossary/XHTML), [CSS](/ru/docs/Web/CSS), [JavaScript](/ru/docs/Web/JavaScript), [DOM](/ru/docs/Web/API/Document_Object_Model), [XML](/ru/docs/Web/XML), [XSLT](/ru/docs/Web/XSLT) и {{domxref("XMLHttpRequest")}}. Используя подход AJAX, веб-приложения могут быстро и постепенно обновлять пользовательский интерфейс без перезагрузки всей страницы. Это делает приложение более быстрым и отзывчивым к действиям пользователя. Наиболее привлекательной характеристикой AJAX является его «асинхронный» характер, что означает, что он может взаимодействовать с сервером, обмениваться данными и обновлять страницу без необходимости её перезагрузки.

Хотя буква «X» в AJAX означает XML, предпочтительнее использовать {{glossary("JSON")}}, поскольку он «легковеснее» и написан на JavaScript. И JSON, и XML используются для передачи информации в модели AJAX.

## Примеры

В этом разделе приведены несколько простых практических примеров, которые помогут вам начать работу.

## Шаг 1. Отправка HTTP запроса

Для того, чтобы послать HTTP запрос на сервер используя JavaScript, вам необходим экземпляр класса, который позволит это сделать. Такой класс впервые был введён в Internet Explorer как объект ActiveX, называемый `XMLHTTP`. Позже в Mozilla, Safari и другие браузеры был введён класс `XMLHttpRequest`, который поддерживал методы и свойства изначального объекта ActiveX от Microsoft.

В результате, чтобы создать кросс-браузерный объект требуемого класса, вы можете сделать следующее:

```js
var httpRequest;

if (window.XMLHttpRequest) {
  // Mozilla, Safari, ...
  httpRequest = new XMLHttpRequest();
} else if (window.ActiveXObject) {
  // IE
  httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
}
```

(В целях наглядности, код выше является немного упрощённым. Более жизненный пример будет рассмотрен в шаге 3 этой статьи)

Некоторые версии некоторых броузеров Mozilla не будут корректно работать, если ответ сервера не содержит заголовка XML `mime-type`. Чтобы решить эту проблему, вы можете использовать вызовы дополнительных методов для переопределения заголовка полученного от сервера, если он отличен от `text/xml`.

```js
httpRequest = new XMLHttpRequest();
httpRequest.overrideMimeType("text/xml");
```

Далее вам необходимо решить, что вы будете делать после получения ответа сервера. На этом этапе вам необходимо указать объекту, какая JavaScript функция будет обрабатывать ответ. Это делается путём присваивания свойству `onreadystatechange` имени JavaScript функции, которую вы собираетесь использовать:

```js
httpRequest.onreadystatechange = nameOfTheFunction;
```

Заметьте, что после названия функции нет скобок и не указано параметров, потому что вы просто присваиваете ссылку на функцию, а не вызываете её. К тому же, вместо указания имени функции, вы можете использовать возможность JavaScript объявлять функции на лету (так называемые «анонимные функции») и указывать действия, которые тотчас же будут обрабатывать ответ:

```js
httpRequest.onreadystatechange = function () {
  // какой-нибудь код
};
```

Далее, после того как вы объявили что будет происходить после получения ответа, вам необходимо сделать запрос. Вы должны вызвать методы класса `open()` и `send()`:

```js
httpRequest.open("GET", "http://www.example.org/some.file", true);
httpRequest.send(null);
```

- Первый параметр вызова функции `open()` — метод HTTP запроса (GET, POST, HEAD или любой другой метод, который вы хотите использовать). Используйте методы в соответствии с HTTP стандартами, иначе некоторые браузеры (такие как Firefox) могут не обработать запрос. Информация о допустимых HTTP запросах доступна по адресу [спецификации W3C](https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html)
- Второй параметр — URL запрашиваемой страницы. Из соображений безопасности возможность запрашивать страницы сторонних доменов недоступна. Убедитесь, что вы используете одинаковое доменное имя на всех страницах, иначе вы получите ошибку 'доступ запрещён' при вызове функции `open()`. Типичной ошибкой при доступе к сайту через `site.ru` является отправка запроса на `www.site.ru`.
- Третий параметр указывает, является ли запрос асинхронным. Если он `TRUE`, то выполнение JavaScript продолжится во время ожидания ответа сервера. В этом и заключается асинхронность технологии.

Параметром метода `send()` могут быть любые данные, которые вы хотите послать на сервер. Данные должны быть сформированы в строку запроса:

```
name=value&anothername=othervalue&so=on
```

Заметьте, что если вы хотите отправить данные методом `POST`, вы должны изменить MIME-тип запроса с помощью следующей строки:

```
httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
```

Иначе сервер проигнорирует данные отправленные методом POST.

## Шаг 2. Обработка ответа сервера

Отправляя запрос, вы указали имя функции JavaScript, обрабатывающей ответ.

Давайте посмотрим, что эта функция должна делать. Во-первых, функция должна проверять статус запроса. Если значение переменной статуса 4, то это означает, что ответ от сервера получен и его можно обрабатывать.

```js
if (httpRequest.readyState == 4) {
  // все в порядке, ответ получен
} else {
  // все ещё не готово
}
```

Полный список значений кодов `readyState`:

- 0 (uninitialized)
- 1 (loading)
- 2 (loaded)
- 3 (interactive)
- 4 (complete)

([Источник](http://msdn.microsoft.com/workshop/author/dhtml/reference/properties/readystate_1.asp))

Следующее, что нужно проверить — это статус HTTP-ответа. Все возможные коды можно посмотреть на [сайте W3C](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html). Для наших целей нам интересен только код ответа `200 OK`.

```js
if (httpRequest.status == 200) {
  // великолепно!
} else {
  // с запросом возникли проблемы,
  // например, ответ может быть 404 (Не найдено)
  // или 500 (Внутренняя ошибка сервера)
}
```

Теперь, после проверки состояния запроса и статуса HTTP-ответа, вы можете делать с данными, полученными от сервера, всё что угодно. Есть два способа получить доступ к данным:

- `httpRequest.responseText` – возвращает ответ сервера в виде строки текста.
- `httpRequest.responseXML` – возвращает ответ сервера в виде объекта `XMLDocument`, который вы можете обходить используя функции JavaScript DOM

## Шаг 3. Простой пример

Давайте соберём все вместе и сделаем простой пример HTTP-запроса. Наш JavaScript запросит HTML документ `test.html`, который содержит текст "I'm a test." и выведет содержимое файла в диалоговом окне.

```html
<script type="text/javascript" language="javascript">
  function makeRequest(url) {
    var httpRequest = false;

    if (window.XMLHttpRequest) {
      // Mozilla, Safari, ...
      httpRequest = new XMLHttpRequest();
      if (httpRequest.overrideMimeType) {
        httpRequest.overrideMimeType("text/xml");
        // Читайте ниже об этой строке
      }
    } else if (window.ActiveXObject) {
      // IE
      try {
        httpRequest = new ActiveXObject("Msxml2.XMLHTTP");
      } catch (e) {
        try {
          httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (e) {}
      }
    }

    if (!httpRequest) {
      alert("Не вышло :( Невозможно создать экземпляр класса XMLHTTP ");
      return false;
    }
    httpRequest.onreadystatechange = function () {
      alertContents(httpRequest);
    };
    httpRequest.open("GET", url, true);
    httpRequest.send(null);
  }

  function alertContents(httpRequest) {
    if (httpRequest.readyState == 4) {
      if (httpRequest.status == 200) {
        alert(httpRequest.responseText);
      } else {
        alert("С запросом возникла проблема.");
      }
    }
  }
</script>

<span
  style="cursor: pointer; text-decoration: underline"
  onclick="makeRequest('test.html')">
  Сделать запрос
</span>
```

В этом примере:

- Пользователь нажимает на ссылку "Сделать запрос" в броузере;
- Это вызывает функцию `makeRequest()` с параметром `test.html` — именем HTML файла;
- Посылается запрос, после чего (`onreadystatechange`) выполнение передаётся `alertContents()`;
- `alertContents()` проверяет получен ли ответ и все ли с ним в порядке, после чего содержимое файла `test.html` выводится в диалоговом окне.

**Замечание**: Строка `httpRequest.overrideMimeType('text/xml');` вызовет ошибки в консоли JavaScript в Firefox 1.5 или более позднем, как описано в <https://bugzilla.mozilla.org/show_bug.cgi?id=311724>, если страница вызванная с помощью XMLHttpRequest не является правильным XML (например, если это обычный текст). На самом деле это корректное поведение.

**Замечание 2**: Если вы посылаете запрос не на статический XML-файл, а на серверный скрипт, возвращающий XML, то нужно установить некоторые заголовки ответа, если вы планируете сделать вашу страницу работоспособной в Internet Explorer помимо Mozilla. Если вы не установите заголовок `Content-Type: application/xml`, IE будет сообщать об ошибке JavaScript, 'Object Expected', после строки, где вы пытаетесь получить доступ к XML элементу. Если вы не установите заголовок `Cache-Control: no-cache` броузер будет кешировать ответ и никогда не будет повторно отправлять запрос, что сделает отладку весьма «забавной».

**Замечание 3**: Если переменная `httpRequest` используется глобально, то конкурирующие функции, вызывающие `makeRequest()` могут конкурировать друг с другом, вызывая состязания. Объявление переменной `httpRequest` локально в функции и передача её в `alertContent()` предотвращает состязания.

**Замечание 4**: При привязывании колбэк-функции к `onreadystatechange` нельзя указать аргументы. По этой причине не работает следующий код:

```js
httpRequest.onreadystatechange = alertContents(httpRequest); // (не работает)
```

Таким образом, для успешной регистрации функции, вы должны передать ей аргументы косвенно через анонимную функцию или используя `httpRequest` как глобальную переменную. Вот пример:

```js
httpRequest.onreadystatechange = function () {
  alertContents(httpRequest);
};
httpRequest.onreadystatechange = alertContents;
```

Первый способ позволяет делать несколько запросов одновременно, а второй используется, когда переменная `httpRequest` является глобальной.

**Замечание 5**: В случае ошибки взаимодействия (например, если сервер упал), при попытке доступа к переменной .status метода onreadystatechange будет сгенерировано исключение. Убедитесь, что if...then заключено в try...catch. (См. <https://bugzilla.mozilla.org/show_bug.cgi?id=238559>).

```js
function alertContents(httpRequest) {
  try {
    if (httpRequest.readyState == 4) {
      if (httpRequest.status == 200) {
        alert(httpRequest.responseText);
      } else {
        alert("С запросом возникла проблема.");
      }
    }
  } catch (e) {
    alert("Произошло исключение: " + e.description);
  }
}
```

## Шаг 4. Работа с XML-ответом

В предыдущем примере, после того как был получен ответ на HTTP-запрос мы использовали `responseText` запрашиваемого объекта, который содержал данные файла `test.html`. Теперь давайте попробуем использовать свойство `responseXML`.

Прежде всего, давайте создадим правильный XML документ, который мы будем запрашивать. Документ (`test.xml`) содержит следующее:

```xml
<?xml version="1.0" ?>
<root>
    I'm a test.
</root>
```

В скрипте нам всего лишь необходимо заменить строку запроса на:

```html
onclick="makeRequest('test.xml')"
```

Далее в `alertContents()` нам нужно заменить строку `alert(httpRequest.responseText);` на:

```js
var xmldoc = httpRequest.responseXML;
var root_node = xmldoc.getElementsByTagName("root").item(0);
alert(root_node.firstChild.data);
```

Этот код берёт объект `XMLDocument`, возвращаемый `responseXML` и использует методы DOM для доступа к данным, содержащимся в документе XML.

## Связанные технологии

Хотя AJAX по-прежнему полезен, начиная с 2005 года были разработаны другие API, обеспечивающие аналогичные функции: [Fetch API](/ru/docs/Web/API/Fetch_API) и [отправляемые сервером события](/ru/docs/Web/API/Server-sent_events).

## Смотрите также

- [Использование `XMLHttpRequest` API](/ru/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
- [History navigation example](/ru/docs/Web/API/History_API/Example)
- [Отправка и получение бинарных данных](/ru/docs/Web/API/XMLHttpRequest_API/Sending_and_Receiving_Binary_Data)
- [XML](/ru/docs/Web/XML)
- [Прямая и обратная обработка XML](/ru/docs/Web/Guide/Parsing_and_serializing_XML)
- [XPath](/ru/docs/Web/XPath)
- {{domxref("FileReader")}} API
- [HTML in XMLHttpRequest](/ru/docs/Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest)
- [XMLHttpRequest Specification](https://xhr.spec.whatwg.org/)
