---
title: URL
slug: Web/API/URL
tags:
  - API
  - URL API
  - URL
  - URI
  - Address
  - Hostname
  - Domain
  - Адрес
  - Домен
translation_of: Web/API/URL
---
{{ApiRef("URL API")}}

Интерфейс **`URL`** используется для разбора, создания, нормализации и кодирования {{glossary("URL", "URL-адресов")}}. Он предоставляет свойства, которые позволяют легко читать и изменять части URL-адреса.

Для создания объекта `URL` нужно вызвать конструктор, передав ему строку с абсолютным или относительным URL-адресом в качестве аргумента. В случае с относительным адресом в конструктор также нужно передать базовый адрес вторым аргументом. После этого вы получите доступ к частям URL-адреса для их чтения или модификации.

В случае, когда браузер не поддерживает {{domxref("URL.URL", "URL()")}} конструктор, вы можете получить доступ к объекту URL через {{domxref("URL")}} свойство интерфейса {{domxref("Window")}}. Проверьте, не нуждается ли какой-либо из ваших целевых браузеров в этом префиксе.

{{AvailableInWorkers}}

## Конструктор

- {{domxref("URL.URL", "new URL()")}}
  - : Создаёт и возвращает объект URL из указанного абсолютного адреса или пути и базового адреса.

## Свойства

- {{domxref("URL.hash", "hash")}}
  - : Строка типа {{domxref("USVString")}}. Содержит идентификатор фрагмента и символ `'#'` в начале строки.
- {{domxref("URL.host", "host")}}
  - : Строка типа {{domxref("USVString")}}. Содержит доменное имя (_hostname_) за которым следует (если был указан порт) символ `':'` и номер порта.
- {{domxref("URL.hostname", "hostname")}}
  - : Строка типа {{domxref("USVString")}}. Содержит доменное имя.
- {{domxref("URL.href", "href")}}
  - : Строка типа {{domxref("USVString")}}. Содержит полный URL-адрес.
- {{domxref("URL.origin", "origin")}} {{readonlyInline}}
  - : Строка типа {{domxref("USVString")}}. Содержит схему (протокол), доменное имя и номера порта.
- {{domxref("URL.password", "password")}}
  - : Строка типа {{domxref("USVString")}}. Содержит пароль, указанный перед доменным именем.
- {{domxref("URL.pathname", "pathname")}}
  - : Строка типа {{domxref("USVString")}}. Содержит относительный пусть и символ `'/'` в начале строки. Параметры запроса и идентификатор фрагмента не входят в эту строку.
- {{domxref("URL.port", "port")}}
  - : Строка типа {{domxref("USVString")}}. Содержит номер порта.
- {{domxref("URL.protocol", "protocol")}}
  - : Строка типа {{domxref("USVString")}}. Содержит название протокола и символ `':'` на конце.
- {{domxref("URL.search", "search")}}
  - : Строка типа {{domxref("USVString")}}. Содержит параметры запроса. Включает в себя все параметры, которые были указаны и начинается с символа `'?'`.
- {{domxref("URL.searchParams", "searchParams")}} {{readonlyInline}}
  - : Объект {{domxref("URLSearchParams")}}. Позволяет получить доступ к каждому параметру запроса по отдельности.
- {{domxref("URL.username","username")}}
  - : Строка типа {{domxref("USVString")}}. Содержит имя пользователя указанное перед именем домена.

## Методы

- {{domxref("URL.toString", "toString()")}}
  - : Возвращает строку типа {{domxref("USVString")}}, содержащую полный URL-адрес. Возвращаемое значение аналогично значению свойства {{domxref("URL.href")}}. Разница лишь в том, что при помощи этого метода нельзя изменить значение URL-адреса.
- {{domxref("URL.toJSON", "toJSON()")}}
  - : Возвращает строку типа {{domxref("USVString")}}, содержащую полный URL-адрес. Возвращаемое значение аналогично значению свойства {{domxref("URL.href")}}.

## Статические методы

- {{domxref("URL.createObjectURL", "createObjectURL()")}}
  - : Возвращает строку типа {{domxref("DOMString")}}, содержащую уникальный URL-адрес `Blob` объекта. Этот адрес предоставляет из себя строку с `blob:` в качестве схемы, за которой идёт строка однозначно идентифицирующая `Blob` объект в браузере.
- {{domxref("URL.revokeObjectURL", "revokeObjectURL()")}}
  - : Отменяет URL созданный при помощи {{domxref("URL.createObjectURL()")}}.

## Примечания по использованию

Конструктор принимает один обязательный параметр — `url` и один необязательный параметр — `base`, который будет использован в качестве «основы», если параметр `url` это относительный URL-адрес:

```js
const url = new URL('../cats', 'http://www.example.com/dogs');
console.log(url.hostname); // "www.example.com"
console.log(url.pathname); // "/cats"</pre>
```

Вы можете задавать значения свойствам объекта URL, чтобы изменять URL-адрес:

```js
url.hash = 'tabby';
console.log(url.href); // "http://www.example.com/cats#tabby"
```

URL-адреса кодируются согласно стандарту {{RFC(3986)}}. Например:

```js
url.pathname = 'démonstration.html';
console.log(url.href); // "http://www.example.com/d%C3%A9monstration.html"
```

Интерфейс {{domxref("URLSearchParams")}} можно использовать для работы с параметрами запроса.

Например, следующим образом можно получить параметры запроса URL-адреса текущей веб-страницы:

```js
// https://some.site/?id=123
const parsedUrl = new URL(window.location.href);
console.log(parsedUrl.searchParams.get("id")); // "123"
```

Метод {{domxref("URL.toString", "toString()")}} лишь возвращает значение свойства {{domxref("URL.href", "href")}}. Благодаря этому, конструктор `URL` можно использовать для нормализации и кодирования URL-адреса.

```js
const response = await fetch(new URL('http://www.example.com/démonstration.html'));
```

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- Полифил для `URL` доступен в [core-js](https://github.com/zloirock/core-js#url-and-urlsearchparams)
- [URL API](/en-US/docs/Web/API/URL_API)
- [Что такое URL-адрес?](/en-US/docs/Learn/Common_questions/What_is_a_URL)
- Свойство для получения объекта `URL`: {{domxref("URL")}}.
- {{domxref("URLSearchParams")}}.
