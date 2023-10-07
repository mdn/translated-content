---
title: XMLHttpRequest.send()
slug: Web/API/XMLHttpRequest/send
---

{{APIRef('XMLHttpRequest')}}

Метод **`XMLHttpRequest.send()`** отправляет запрос. Если запрос асинхронный (каким он является по умолчанию), то возврат из данного метода происходит сразу после отправления запроса. Если запрос синхронный, то метод возвращает управление только после получения ответа. Метод `send()` принимает необязательные аргументы в тело запросов. Если метод запроса `GET` или `HEAD`, то аргументы игнорируются и тело запроса устанавливается в null.

Если заголовок {{HTTPHeader("Accept")}} не был задан с помощью {{domxref("XMLHttpRequest.setRequestHeader", "setRequestHeader()")}}, будет отправлено значение `Accept` по умолчанию `*/*`.

## Синтаксис

```
XMLHttpRequest.send(body)
```

### Параметры

- _body_ {{optional_inline}}

  - : Данные из параметра body оправляются в запросе через XHR. Это могут быть:

    - {{domxref("Document")}}, и в этом случае данные будут сериализованы перед отправкой.
    - `BodyInit`, которые, согласно спецификации [Fetch](https://fetch.spec.whatwg.org/#bodyinit) могут быть: {{domxref("Blob")}}, {{domxref("BufferSource")}}, {{domxref("FormData")}}, {{domxref("URLSearchParams")}}, {{domxref("ReadableStream")}}, или объектом {{domxref("USVString")}}.

Лучший способ передать двоичные данные (например при загрузке файлов) - это использование [ArrayBufferView](/ru/docs/Web/API/ArrayBufferView) или [Blobs](/ru/docs/Web/API/Blob) в сочетании с методом`send()`.

Если никакого значения не определено в качестве _body_, то будет использовано значение по умолчанию: `null`.

### Возвращаемое значение

`undefined`.

### Исключения

| Исключение          | Описание                                                    |
| ------------------- | ----------------------------------------------------------- |
| `InvalidStateError` | `send()` уже был вызван для запроса, и/или запрос завершён. |
| `NetworkError`      | Тип запрошенного ресурса - Blob, но метод запроса не `GET`. |

## Пример: GET

```
var xhr = new XMLHttpRequest();
xhr.open('GET', '/server', true);

xhr.onload = function () {
  // Запрос завершён. Здесь можно обрабатывать результат.
};

xhr.send(null);
// xhr.send('string');
// xhr.send(new Blob());
// xhr.send(new Int8Array());
// xhr.send({ form: 'data' });
// xhr.send(document);
```

## Пример: POST

```
var xhr = new XMLHttpRequest();
xhr.open("POST", '/server', true);

//Передаёт правильный заголовок в запросе
xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

xhr.onreadystatechange = function() {//Вызывает функцию при смене состояния.
    if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
        // Запрос завершён. Здесь можно обрабатывать результат.
    }
}
xhr.send("foo=bar&lorem=ipsum");
// xhr.send('string');
// xhr.send(new Blob());
// xhr.send(new Int8Array());
// xhr.send({ form: 'data' });
// xhr.send(document);
```

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- [Использование XMLHttpRequest](/ru/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)
- [HTML in XMLHttpRequest](/ru/docs/Web/API/XMLHttpRequest/HTML_in_XMLHttpRequest)
