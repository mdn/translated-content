---
title: 308 Permanent Redirect
slug: Web/HTTP/Status/308
---

{{HTTPSidebar}}

Код ответа на статус перенаправления "HTTP **`308 Permanent Redirect"`** указывает, что запрошенный ресурс был окончательно перемещён в URL-адрес, указанный в {{HTTPHeader("Location")}}. Браузер перенаправляется на эту страницу, а поисковые системы обновляют свои ссылки на ресурс (в SEO-speak говорится, что link-juice отправляется на новый URL-адрес).

Метод запроса и тело не будут изменены, тогда как {{HTTPStatus("301")}} иногда может быть неправильно заменён на {{HTTPHeader("GET")}} метод.

> **Примечание:** Некоторые веб-приложения могут использовать **308 Permanent Redirect** нестандартным образом и для других целей. Например, Google Drive использует ответ **308 Resume Incomplete**, чтобы указать клиенту, когда неполная загрузка застопорилась.[\[1\]](https://developers.google.com/drive/v3/web/manage-uploads#resumable)

## Статус

```
308 Permanent Redirect
```

## Характеристики

| Спецификации                                    | Название                                                             |
| ----------------------------------------------- | -------------------------------------------------------------------- |
| {{RFC("7538", "308 Permanent Redirect" , "3")}} | The Hypertext Transfer Protocol Status Code 308 (Permanent Redirect) |

## Совместимость с браузером

{{Compat}}

## Смотрите также

- {{HTTPStatus("301")}} `Moved Permanently`
- {{HTTPStatus("302")}} `Found`, the temporary redirect
