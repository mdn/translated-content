---
title: Location
slug: Web/API/Location
---

{{APIRef("HTML DOM")}}

Интерфейс **`Location`** представляет собой адрес (URL) объекта, с которым он связан. Его модификации отражаются на родительском объекте. Интерфейсы {{domxref("Document")}} и {{domxref("Window")}} имеют подобный `Location`, к которому можно получить доступ через {{domxref("Document.location")}} и {{domxref("Window.location")}} соответственно.

## Свойства

_Интерфейс `Location`_ _не имеет унаследованных свойств, но реализует свойства {{domxref("URLUtils")}}._

- {{domxref("Location.href")}}
  - : {{jsxref("String")}}, содержащий URL целиком. При изменении, соответствующий документ переходит на новую страницу.
- {{domxref("Location.protocol")}}
  - : {{jsxref("String")}}, содержащий протокол текущего URL, включая `':'`.
- {{domxref("Location.host")}}
  - : {{jsxref("String")}}, содержащий хост, а именно _имя хоста_, `':'` и _порт_.
- {{domxref("Location.hostname")}}
  - : {{jsxref("String")}}, содержащий домен текущего URL.
- {{domxref("Location.port")}}
  - : {{jsxref("String")}}, содержащий номер порта текущего URL.
- {{domxref("Location.pathname")}}
  - : {{jsxref("String")}}, содержащий первый `'/'` после хоста с последующим текстом URL.
- {{domxref("Location.search")}}
  - : {{jsxref("String")}}, содержащий `'?'` с последующими параметрами URL.
- {{domxref("Location.hash")}}
  - : {{jsxref("String")}}, содержащий `'#'` с последующим идентификатором.
- {{domxref("Location.username")}}
  - : {{jsxref("String")}}, содержащий имя пользователя, указанное перед именем домена.
- {{domxref("Location.password")}}
  - : {{jsxref("String")}}, содержащий пароль, указанный перед именем домена.
- {{domxref("Location.origin")}} {{readOnlyInline}}
  - : Возвращает {{jsxref("String")}}, содержащий протокол, хост и порт текущего URL.

## Методы

_Интерфейс `Location`_ _не имеет унаследованных методов, но реализует методы {{domxref("URLUtils")}}._

- {{domxref("Location.assign()")}}
  - : Загружает ресурс по URL, указанному в качестве параметра.
- {{domxref("Location.reload()")}}
  - : Перезагружает ресурс по текущему URL. Единственный опциональный параметр {{domxref("Boolean")}} при значении `true` указывает, что страница должна быть заново загружена с сервера, при значении `false` страница может быть загружена из кеша.
- {{domxref("Location.replace()")}}
  - : Заменяет текущий ресурс на новый по URL, указанному в качестве параметра. Отличие от `assign()` в том, что при использовании `replace()` текущая страница не будет сохранена в {{domxref("History")}}, и пользователь не сможет использовать кнопку _назад_, чтобы вернуться к ней.
- {{domxref("Location.toString()")}}
  - : Возвращает {{jsxref("String")}}, содержащий URL целиком. Это синоним {{domxref("URLUtils.href")}}, однако он не может использоваться для изменения значения.

## Примеры

```js
// Этот пример создаёт ссылку и использует её свойство href
// Корректная альтернатива - использовать document.location или window.location текущего URL
var url = document.createElement("a");
url.href =
  "https://developer.mozilla.org/en-US/search?q=URL#search-results-close-container";
console.log(url.href); // https://developer.mozilla.org/en-US/search?q=URL#search-results-close-container
console.log(url.protocol); // https:
console.log(url.host); // developer.mozilla.org
console.log(url.hostname); // developer.mozilla.org
console.log(url.port); // (пустой - https подразумевает порт 443)
console.log(url.pathname); // /en-US/search
console.log(url.search); // ?q=URL
console.log(url.hash); // #search-results-close-container
console.log(url.origin); // https://developer.mozilla.org
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Два метода, создающих подобные объекты: {{domxref("Window.location")}} и {{domxref("Document.location")}}.
- Интерфейсы, относящиеся к URL: {{domxref("URL")}}, {{domxref("URLSearchParams")}} и {{domxref("HTMLHyperlinkElementUtils")}}
