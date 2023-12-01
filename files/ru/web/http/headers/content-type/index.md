---
title: Content-Type
slug: Web/HTTP/Headers/Content-Type
---

{{HTTPSidebar}}

Заголовок-сущность **`Content-Type`** используется для того, чтобы определить {{Glossary("MIME type","MIME тип")}} ресурса.

В ответах сервера заголовок `Content-Type` сообщает клиенту, какой будет тип передаваемого контента. В некоторых случаях браузеры пытаются сами определить MIME тип передаваемого контента, но их реакция может быть неадекватной. Чтобы предотвратить такие ситуации, вы можете установить в заголовке {{HTTPHeader("X-Content-Type-Options")}} значение `nosniff`.

В запросах (таких, как {{HTTPMethod("POST")}} или {{HTTPMethod("PUT")}}), клиент сообщает серверу тип отправляемых данных.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Тип заголовка</th>
      <td>{{Glossary("Entity header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>нет</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("Simple response header", "CORS-safelisted response-header")}}
      </th>
      <td>да</td>
    </tr>
  </tbody>
</table>

## Синтаксис

```
Content-Type: text/html; charset=utf-8
Content-Type: multipart/form-data; boundary=something
```

## Директивы

- `media-type`
  - : [MIME тип](/ru/docs/Web/HTTP/Basics_of_HTTP/MIME_types) ресурса или данных.
- charset
  - : Используемая кодировка.
- boundary
  - : Директива `boundary` обязательна для составных сущностей. Она содержит от 1 до 70 символов (не должна заканчиваться пробелом), которые без искажений пройдут через шлюзы email и служит для корректной инкапсуляции всех частей составной сущности.

## Примеры

### `Content-Type` в HTML формах

В {{HTTPMethod("POST")}} запросе, сгенерированном в результате отправки HTML формы, `Content-Type` запроса определяется в атрибуте `enctype` тега {{HTMLElement("form")}}.

```html
<form action="/" method="post" enctype="multipart/form-data">
  <input type="text" name="description" value="some text" />
  <input type="file" name="myFile" />
  <button type="submit">Submit</button>
</form>
```

Запрос в этом случае может выглядеть так (менее интересные заголовки опущены):

```
POST /foo HTTP/1.1
Content-Length: 68137
Content-Type: multipart/form-data; boundary=---------------------------974767299852498929531610575

-----------------------------974767299852498929531610575
Content-Disposition: form-data; name="description"

some text
-----------------------------974767299852498929531610575
Content-Disposition: form-data; name="myFile"; filename="foo.txt"
Content-Type: text/plain

(content of the uploaded file foo.txt)
-----------------------------974767299852498929531610575--
```

## Спецификации

| Спецификация                                        | Заголовок                                                     |
| --------------------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7233", "Content-Type in multipart", "4.1")}} | Hypertext Transfer Protocol (HTTP/1.1): Range Requests        |
| {{RFC("7231", "Content-Type", "3.1.1.5")}}          | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{HTTPHeader("Accept")}} and {{HTTPHeader("Accept-Charset")}}
- {{HTTPHeader("Content-Disposition")}}
- {{HTTPStatus("206")}} Partial Content
- {{HTTPHeader("X-Content-Type-Options")}}
