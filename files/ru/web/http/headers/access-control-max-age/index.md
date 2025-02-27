---
title: Access-Control-Max-Age
slug: Web/HTTP/Headers/Access-Control-Max-Age
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

Заголовок ответа **`Access-Control-Max-Age`** указывает, на какое время может быть закеширован результат {{glossary("preflight request", "предзапроса")}}. Эта информация содержится в заголовках {{HTTPHeader("Access-Control-Allow-Methods")}} и {{HTTPHeader("Access-Control-Allow-Headers")}}.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Тип заголовка</th>
      <td>{{Glossary("Response header", "Заголовок ответа")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name", "Запрещённое имя заголовка")}}</th>
      <td>нет</td>
    </tr>
  </tbody>
</table>

## Синтаксис

```http
Access-Control-Max-Age: <delta-seconds>
```

## Параметры

- `<delta-seconds>`
  - : Максимальное количество секунд, на которое может быть закеширован запрос, целое неотрицательное число.
    В Firefox составляет [24 часа](https://searchfox.org/mozilla-central/source/netwerk/protocol/http/nsCORSListenerProxy.cpp#1207) (86400 секунд).
    В Chromium (до версии 76) — [10 минут](https://source.chromium.org/chromium/chromium/src/+/main:services/network/public/cpp/cors/preflight_result.cc;drc=52002151773d8cd9ffc5f557cd7cc880fddcae3e;l=36) (600 секунд).
    В Chromium (начиная с версии 76) — [2 часа](https://source.chromium.org/chromium/chromium/src/+/main:services/network/public/cpp/cors/preflight_result.cc;drc=49e7c0b4886cac1f3d09dc046bd528c9c811a0fa;l=31) (7200 секунд).
    Значение по умолчанию равно 5 секундам.

## Примеры

Кеширование предзапроса на 10 минут:

```http
Access-Control-Max-Age: 600
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{HTTPHeader("Access-Control-Allow-Headers")}}
- {{HTTPHeader("Access-Control-Allow-Methods")}}
