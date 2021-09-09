---
title: Первичные данные
slug: Glossary/Origin
translation_of: Glossary/Origin
original_slug: Глоссарий/origin
---
Браузер отправляет серверу **первичные данные** - протокол, _хостинг, домен_, _порт соединения через_ {{Glossary("URL")}}. Два объекта одинаковые если протокол, хост, домен и порт одинаковые.

Некоторые данные могут не передаваться источником, для их получения необходимо использовать [CORS](/en-US/docs/Glossary/CORS).

## Примеры первичных данных

<table class="standard-table">
  <tbody>
    <tr>
      <td style="width: 50%">
        <code>http://example.com/app1/index.html</code><br /><code
          >http://example.com/app2/index.html</code
        >
      </td>
      <td style="width: 50%">
        данные протокола (<code>http</code>) и хостинга
        (<code>example.com</code>)
      </td>
    </tr>
    <tr>
      <td style="width: 50%">
        <code>http://Example.com:80</code><br /><code>http://example.com</code>
      </td>
      <td style="width: 50%">
        первичные данные для сервера- соединения HTTP, номер порта 80
      </td>
    </tr>
  </tbody>
</table>

## Пример других первичных данных

<table class="standard-table">
  <tbody>
    <tr>
      <td style="width: 50%">
        <code>http://example.com/app1</code><br /><code
          >https://example.com/app2</code
        >
      </td>
      <td>другие протоколы</td>
    </tr>
    <tr>
      <td style="width: 50%">
        <code>http://example.com</code><br /><code>http://www.example.com</code
        ><br /><code>http://myapp.example.com</code>
      </td>
      <td style="width: 50%">разные хостинги</td>
    </tr>
    <tr>
      <td style="width: 50%">
        <code>http://example.com</code><br /><code
          >http://example.com:8080</code
        >
      </td>
      <td style="width: 50%">другой порт</td>
    </tr>
  </tbody>
</table>

## Больше информации

Смотрите [Same-origin policy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Same_origin_policy_for_JavaScript "/en-US/docs/Web/JavaScript/Same_origin_policy_for_JavaScript").
