---
title: Content-Disposition
slug: Web/HTTP/Headers/Content-Disposition
---

{{HTTPSidebar}}В обычном HTTP-ответе заголовок **`Content-Disposition`** является индикатором того, что ожидаемый контент ответа будет отображаться в браузере, как веб-страница или часть веб-страницы, или же как вложение, которое затем может быть скачано и сохранено локально.

В случае, если тело HTTP-запроса типа `multipart/form-data`, то общий заголовок **`Content-Disposition`** используется для каждой из составных частей multipart тела для указания дополнительных сведений по полю, к которому применён заголовок. Каждая часть отделена с помощью _границы (boundary)_, определённой в заголовке {{HTTPHeader("Content-Type")}}. `Content-Disposition,` используемый непосредственно для всего тела HTTP-запроса, ни на что не влияет.

Заголовок `Content-Disposition` определён для более широкого контекста MIME-сообщений для e-mail, поэтому для HTTP-форм и {{HTTPMethod("POST")}}-запросов используются только несколько допустимых параметров. В контексте HTTP можно использовать только значение `form-data`, а также опциональные директивы `name` и `filename`.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Тип заголовка</th>
      <td>
        {{Glossary("Response header", "Заголовок ответа")}}
        (для тела ответа простого типа)<br />{{Glossary("General header", "Основной заголовок")}}
        (для каждой части составного тела)
      </td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("Forbidden header name", "Запрещённое имя заголовка")}}
      </th>
      <td>нет</td>
    </tr>
  </tbody>
</table>

## Синтаксис

### Как заголовок ответа с обычным телом

Первым параметром в контексте HTTP должен быть или `inline` (это значение по умолчанию, указывающее, что контент должен быть отображён внутри веб-страницы или как веб-страница) или `attachment` (указывает на скачиваемый контент; большинство браузеров отображают диалог "Сохранить как" с заранее заполненным именем файла из параметра `filename`, если он задан).

```
Content-Disposition: inline
Content-Disposition: attachment
Content-Disposition: attachment; filename="filename.jpg"
```

### Как заголовок в составном теле

Первым параметром в контексте HTTP всегда является `form-data`; дополнительные параметры регистронезависимые и могут иметь аргументы, значения которых следуют после знака `'='` и берутся в кавычки. Несколько параметров разделяются через точку с запятой (`';'`).

```
Content-Disposition: form-data
Content-Disposition: form-data; name="fieldName"
Content-Disposition: form-data; name="fieldName"; filename="filename.jpg"
```

### Директивы

- `name`
  - : За параметром следует строка с именем HTML-поля на форме, к которому относится данная часть составного тела. При работе с несколькими файлами в том же самом поле (например, атрибуты [`multiple`](/ru/docs/Web/HTML/Element/input#multiple) элемента `{{HTMLElement("input","&lt;input type=file&gt;")}}`), могут быть несколько частей с одинаковым именем.
    Если `name` имеет значение `'_charset_'`, указывающее, что данная часть не является HTML-полем, то она содержит кодировку по умолчанию для всех частей, в которых явно кодировка не указана.
- `filename`
  - : За параметром указана строка с оригинальным именем передаваемого файла. Это имя опционально и не может слепо использоваться приложением: информация о пути должна быть очищена и должно быть сделано преобразование к файловой системе сервера. Этот параметр предоставляет в основном справочную информацию. Когда используется в комбинации с `Content-Disposition: attachment`, это значение будет использовано как имя файла по умолчанию для диалога "Сохранить как".
- filename\*
  - : Оба параметра "filename" и "filename\*" отличаются только тем, что "filename\*" использует кодирование, определённое в [RFC 5987](https://tools.ietf.org/html/rfc5987). Когда присутствуют оба параметра "filename" и "filename\*" в одном поле заголовке, то преимущество имеет "filename\*" над "filename", но только в случае когда оба значения корректны.

## Примеры

Ответ, вызывающий диалог "Сохранить как":

```
200 OK
Content-Type: text/html; charset=utf-8
Content-Disposition: attachment; filename="cool.html"
Content-Length: 22

<HTML>Save me!</HTML>
```

Простой HTML-файл будет сохранён как обычное сохранение с диалогом "Сохранить как" вместо отображения контента файла в браузере. Большинство браузеров предложат его сохранить под именем `cool.html` (это поведение по умолчанию).

Пример HTML-формы, переданной через POST с использованием формата `multipart/form-data`, который использует заголовок `Content-Disposition`:

```
POST /test.html HTTP/1.1
Host: example.org
Content-Type: multipart/form-data;boundary="boundary"

--boundary
Content-Disposition: form-data; name="field1"

value1
--boundary
Content-Disposition: form-data; name="field2"; filename="example.txt"

value2
--boundary--
```

## Спецификации

| Спецификация    | Название                                                                                          |
| --------------- | ------------------------------------------------------------------------------------------------- |
| {{RFC("7578")}} | Returning Values from Forms: multipart/form-data                                                  |
| {{RFC("6266")}} | Use of the Content-Disposition Header Field in the Hypertext Transfer Protocol (HTTP)             |
| {{RFC("2183")}} | Communicating Presentation Information in Internet Messages: The Content-Disposition Header Field |

## Совместимость с браузерами

{{Compat}}

## Замечания по совместимости

- Firefox 5 обрабатывает `Content-Disposition заголовка` HTTP-ответа response более эффективно, если присутствуют оба параметра `filename` и `filename*`; он просматривает сначала все предоставленные имена `filename*`, даже есть вначале идут `filename`. Ранее использовалось первое найденное имя. See {{bug(588781)}}.

## Смотрите также

- [HTML-формы](/ru/docs/Web/Guide/HTML/Forms)
- {{HTTPHeader("Content-Type")}} определяет границу для частей составного тела.
- Интерфейс {{domxref("FormData")}} используется для обработки данных форм для использования в API {{domxref("XMLHttpRequest")}}.
