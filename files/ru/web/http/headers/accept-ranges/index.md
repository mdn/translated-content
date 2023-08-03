---
title: Accept-Ranges
slug: Web/HTTP/Headers/Accept-Ranges
---

{{HTTPSidebar}}

HTTP Заголовок ответа **`Accept-Ranges`** — это маркер, который использует сервер, чтобы уведомить клиента о поддержке "запросов по кускам". Его значение указывает единицу измерения, которая может быть использована для определения диапазона чтения.

При наличии заголовка `Accept-Ranges`, браузер может попытаться _возобновить_ прерванную загрузку, а не запускать её с самого начала.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Тип заголовка</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
  </tbody>
</table>

## Синтаксис

```
Accept-Ranges: bytes
Accept-Ranges: none
```

## Указания

- `none`
  - : Единица измерения диапазона не поддерживается, что эквивалентно отсутствию диапазона и поэтому редко используется, хотя некоторые браузеры, такие как IE9 используют его для отключения или удаления кнопки паузы у активной загрузке в менеджере загрузок.
- `bytes`
  - : Единицей измерения для диапазона являются байты.

## Примеры

```
Accept-Ranges: bytes
```

## Спецификации

| Спецификация                            | Название                                               |
| --------------------------------------- | ------------------------------------------------------ |
| {{RFC("7233", "Accept-Ranges", "2.3")}} | Hypertext Transfer Protocol (HTTP/1.1): Range Requests |

## Совместимость браузеров

{{Compat}}

## Смотрите также

- {{HTTPHeader("If-Range")}}
- {{HTTPHeader("Range")}}
- [IANA HTTP Range Unit Registry](https://www.iana.org/assignments/http-parameters/http-parameters.xhtml#range-units)
