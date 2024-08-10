---
title: 308 Permanent Redirect
slug: Web/HTTP/Status/308
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

Код ответа HTTP **`308 Permanent Redirect"`** указывает, что запрошенный ресурс был окончательно перемещён на URL-адрес, указанный в заголовке {{HTTPHeader("Location")}}. Браузер перенаправляется на эту страницу, а поисковые системы обновляют свои ссылки на ресурс (говоря языком SEO, «link-juice льётся на новый URL-адрес»).

Метод запроса и тело не изменяются, в отличие от ответа {{HTTPStatus("301")}}, при котором иногда метод может быть неправильно изменён на {{HTTPMethod("GET")}}.

> [!NOTE]
> Некоторые веб-приложения могут использовать **308 Permanent Redirect** нестандартным образом и для других целей. Например, Google Drive использует ответ **308 Resume Incomplete**, чтобы указать клиенту, когда неполная загрузка остановилась (смотрите [Perform a resumable download](https://developers.google.com/drive/api/guides/manage-uploads) в документации Google Drive).

## Статус

```http
308 Permanent Redirect
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{HTTPStatus("301", "301 Moved Permanently")}} — эквивалент кода ответа 308, способный изменять используемый метод, если он не является {{HTTPMethod("GET")}}.
- {{HTTPStatus("302", "302 Found")}} — временное перенаправление.
