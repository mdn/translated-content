---
title: Access-Control-Allow-Origin
slug: Web/HTTP/Headers/Access-Control-Allow-Origin
---

{{HTTPSidebar}}

Заголовок ответа **`Access-Control-Allow-Origin`** показывает, может ли ответ сервера быть доступен коду, отправляющему запрос с данного источника {{glossary("origin")}}.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Тип заголовка</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>нет</td>
    </tr>
  </tbody>
</table>

## Синтаксис

```
Access-Control-Allow-Origin: *
Access-Control-Allow-Origin: <origin>
Access-Control-Allow-Origin: null
```

## Директивы

- `*`
  - : Для запросов _без учётных данных_. Значение "`*`" может быть использован как шаблон; значение указывает браузеру разрешить запросы из любых источников. Попытка использовать шаблон с учётными данными приведёт к [ошибке](/ru/docs/Web/HTTP/CORS/Errors/CORSNotSupportingCredentials).
- `<origin>`
  - : Указывает источник. Может быть указан только один источник.
- `null`

  - : Определяет в качестве источника "null".

    > **Примечание:** [Не используйте](https://w3c.github.io/webappsec-cors-for-developers/#avoid-returning-access-control-allow-origin-null) `null`: "Может показаться, что вернуть `Access-Control-Allow-Origin: "null"` безопасно, но сериализация Источника любого ресурса, использующего неиерархическую схему (такие как `data:` или `file:`), и изолированные документы, определяются как "null". Многие пользовательские агенты предоставляют таким документам доступ к ответу с заголовком `Access-Control-Allow-Origin: "null"`, и любой источник может создать враждебный документ с Источником "null". Поэтому использования заголовка ACAO со значением "null" следует избегать."

## Примеры

Ответ, который указывает браузеру разрешить доступ к ресурсу из любого источника:

```
Access-Control-Allow-Origin: *
```

Ответ, который указывает браузеру разрешить доступ к ресурсу только из источника `https://developer.mozilla.org`:

```
Access-Control-Allow-Origin: https://developer.mozilla.org
```

Чтобы ограничить `Access-Control-Allow-Origin` разрешённым набором значений, необходимо реализовать логику на стороне сервера для проверки значения заголовка {{HTTPHeader("Origin")}} запроса, сравнить его с разрешённым списком источников, а затем, если значение {{HTTPHeader("Origin")}} присутствует в списке, задать значение `Access-Control-Allow-Origin`, равное значению {{HTTPHeader("Origin")}}.

### CORS и кеширование

Если сервер послал ответ со значением `Access-Control-Allow-Origin`, которое содержит явное указание источника (а не шаблонное значение "`*`"), тогда ответ также должен включать в себя заголовок {{HTTPHeader("Vary")}} со значением `Origin` — чтобы указать браузеру, что ответы с сервера могут отличаться в зависимости от заголовка запроса `Origin`.

```
Access-Control-Allow-Origin: https://developer.mozilla.org
Vary: Origin
```

## Спецификации

| Спецификации                                                                             | Статус             | Комментарий            |
| ---------------------------------------------------------------------------------------- | ------------------ | ---------------------- |
| {{SpecName('Fetch','#http-access-control-allow-origin', 'Access-Control-Allow-Origin')}} | {{Spec2("Fetch")}} | Начальное определение. |

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{HTTPHeader("Origin")}}
- {{HTTPHeader("Vary")}}
- [Cross-Origin Resource Sharing (CORS)](/ru/docs/Web/HTTP/CORS)
- {{httpheader("Cross-Origin-Resource-Policy")}}
