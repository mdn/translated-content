---
title: CONNECT
slug: Web/HTTP/Methods/CONNECT
---

{{HTTPSidebar}}

**HTTP `CONNECT` method** запускает двустороннюю связь с запрошенным ресурсом. Метод можно использовать для открытия туннеля.

К примеру, метод CONNECT может использоваться для доступа к сайту, который использует {{Glossary("SSL")}} ({{Glossary("HTTPS")}}). Клиент запрашивает HTTP-прокси-сервер для туннелирования TCP-соединения с желаемым назначением. Затем сервер переходит к подключению от имени клиента. После того, как соединение установлено сервером, прокси-сервер продолжает проксировать поток TCP к клиенту и от него.

`CONNECT` is a hop-by-hop method.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Запрос имеет тело</th>
      <td>Нет</td>
    </tr>
    <tr>
      <th scope="row">Успешный ответ имеет тело</th>
      <td>Да</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Безопасный")}}</th>
      <td>Нет</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("Идемпотентный")}}
      </th>
      <td>Нет</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Кешируемый")}}</th>
      <td>Нет</td>
    </tr>
    <tr>
      <th scope="row">
        Допускается в <a href="/ru/docs/Web/Guide/HTML/Forms">HTML формах</a>
      </th>
      <td>Нет</td>
    </tr>
  </tbody>
</table>

## Синтаксис

```
CONNECT www.example.com:443 HTTP/1.1
```

## Пример

Некоторые прокси сервера могут запросить авторизацию для создания туннеля. Смотрите также {{HTTPHeader("Proxy-Authorization")}}.

```http
CONNECT server.example.com:80 HTTP/1.1
Host: server.example.com:80
Proxy-Authorization: basic aGVsbG86d29ybGQ=
```

## Спецификация

{{Specifications}}

## Совместимость с браузером

{{Compat}}

## Смотрите также

- {{Glossary("Proxy server")}}
- {{HTTPHeader("Proxy-Authorization")}}
