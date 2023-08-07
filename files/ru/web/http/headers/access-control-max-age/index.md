---
title: Access-Control-Max-Age
slug: Web/HTTP/Headers/Access-Control-Max-Age
---

Заголовок ответа сервера **`Access-Control-Max-Age`** сообщает браузеру насколько {{glossary("предзапрос")}} (эта информация содержится в заголовках {{HTTPHeader("Access-Control-Allow-Methods")}} и {{HTTPHeader("Access-Control-Allow-Headers")}}) может быть кеширован и опущен при запросах к серверу.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Тип заголовка</th>
      <td>{{Glossary("Заголовок ответа")}}</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("Запрещённое имя заголовка")}}
      </th>
      <td>нет</td>
    </tr>
  </tbody>
</table>

## Синтаксис

```
Access-Control-Max-Age: <delta-seconds>
```

## Параметры

- \<delta-seconds>
  - : Количество секунд, на которое запрос может быть кеширован.
    Максимальное значение в Firefox составляет [24 часа](https://dxr.mozilla.org/mozilla-central/rev/7ae377917236b7e6111146aa9fb4c073c0efc7f4/netwerk/protocol/http/nsCORSListenerProxy.cpp#1131) (86400 секунд), в Chromium [10 минут](https://cs.chromium.org/chromium/src/services/network/public/cpp/cors/preflight_result.cc?rcl=43ab0ff8fdcf3a10a89c4d0d0421f461967f2bd5&l=36) (600 секунд). Chromium также определяет значение по умолчанию [5](https://cs.chromium.org/chromium/src/services/network/public/cpp/cors/preflight_result.cc?rcl=43ab0ff8fdcf3a10a89c4d0d0421f461967f2bd5&l=26) секунд.
    Значение **-1** отменяет кеширование, отправляя предзапрос перед каждым запросом.

## Примеры

Кеширование предзапроса на 600 секунд:

```
Access-Control-Max-Age: 600
```

## Спецификации

| Спецификация                                                                   | Статус             | Комментарий            |
| ------------------------------------------------------------------------------ | ------------------ | ---------------------- |
| {{SpecName('Fetch','#http-access-control-max-age', 'Access-Control-Max-Age')}} | {{Spec2("Fetch")}} | Начальное определение. |

## Совместимость в браузерах

{{Compat}}

## Смотрите также

- {{HTTPHeader("Access-Control-Allow-Headers")}}
- {{HTTPHeader("Access-Control-Allow-Methods")}}
