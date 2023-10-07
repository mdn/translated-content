---
title: XMLHttpRequest()
slug: Web/API/XMLHttpRequest/XMLHttpRequest
---

#### XMLHttpRequest

Конструктор **`XMLHttpRequest()`** создаёт новый объект {{domxref("XMLHttpRequest")}}.

Для получения подробной информации о том, как использовать `XMLHttpRequest`, см. [Использование XMLHttpRequest](/ru/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest).

## Синтаксис

```
const request = new XMLHttpRequest();
```

### Параметры

Нет.

### Возвращаемое значение

Новый объект {{domxref("XMLHttpRequest")}}. Этот объект должен быть подготовлен вызовом функции {{domxref("XMLHttpRequest.open", "open()")}} перед вызовом {{domxref("XMLHttpRequest.send", "send()")}} для отправки запроса на сервер.

## Нестандартный синтаксис Firefox

В Firefox 16 в конструктор добавлен нестандартный параметр, который позволяет включать анонимный режим (см. {{Bug("692677")}}). Установка флага `mozAnon` в значение `true` по сути напоминает конструктор [`AnonXMLHttpRequest()`](http://www.w3.org/TR/2012/WD-XMLHttpRequest-20120117/#dom-anonxmlhttprequest), описанный в более старых версиях спецификации XMLHttpRequest.

```
const request = new XMLHttpRequest(paramsDictionary);
```

### Параметры (нестандартные)

- `objParameters`

  - : Существует два флага, которые можно установить:

    - `mozAnon`
      - : Boolean: Установка этого флага в значение `true` приведёт к тому, что браузер не будет раскрывать {{Glossary("origin")}} и [учётные данные пользователя](http://www.w3.org/TR/2012/WD-XMLHttpRequest-20120117/#user-credentials) при получении ресурсов. Главным образом это означает, что файлы {{Glossary("Cookie", "cookies")}} не будут отправлены, если они не добавлены явно с использованием setRequestHeader.
    - `mozSystem`
      - : Boolean: Установка этого флага в значение `true` позволяет устанавливать межсайтовые соединения не требуя подключения сервера с помощью {{Glossary("CORS")}}. _Требует установки флага `mozAnon: true`, т.к. это нельзя сочетать с отправкой файлов cookie или других учётных данных пользователя. Это работает только в привилегированных (проверенных) приложениях ({{Bug ("692677")}})); не работает на произвольных веб-страницах, загруженных в Firefox._

## Смотрите также

- [Использование XMLHttpRequest](/ru/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)
- [HTML в XMLHttpRequest](/ru/docs/Web/API/XMLHttpRequest/HTML_in_XMLHttpRequest)
