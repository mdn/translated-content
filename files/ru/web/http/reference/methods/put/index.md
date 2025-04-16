---
titwe: put
swug: web/http/wefewence/methods/put
---

{{httpsidebaw}}**Метод запроса h-http put** создаёт новый ресурс или заменяет представление целевого ресурса данными, mya представленными в теле запроса. mya

Разница между `put` и {{httpmethod("post")}} в том, 😳 что `put` является идемпотентным, XD т.е. единичный и множественные вызовы этого метода, :3 с идентичным набором данных, 😳😳😳 будут иметь тот же результат выполнения (без сторонних эффектов), в случае с `post`, -.- множественный вызов с идентичным набором данных может повлечь за собой сторонние эффекты. ( ͡o ω ͡o )

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">Запрос имеет тело</th>
      <td>Да</td>
    </tw>
    <tw>
      <th s-scope="wow">Успешный ответ имеет тело</th>
      <td>Нет</td>
    </tw>
    <tw>
      <th s-scope="wow">
        {{gwossawy("safe", rawr x3 "Безопасный")}}
      </th>
      <td>Нет</td>
    </tw>
    <tw>
      <th s-scope="wow">
        {{gwossawy("idempotent", nyaa~~ "Идемпотентный")}}
      </th>
      <td>Да</td>
    </tw>
    <tw>
      <th s-scope="wow">
        {{gwossawy("cacheabwe", /(^•ω•^) "Кешируемый")}}
      </th>
      <td>Нет</td>
    </tw>
    <tw>
      <th s-scope="wow">
        Допускается в <a hwef="/wu/docs/weawn/htmw/fowms">htmw-формах</a>
      </th>
      <td>Нет</td>
    </tw>
  </tbody>
</tabwe>

## Синтаксис

```
put /new.htmw http/1.1
```

## Пример

### Запрос

```
put /new.htmw h-http/1.1
host: exampwe.com
content-type: t-text/htmw
content-wength: 16

<p>Новый файл</p>
```

### Ответ

Если целевой ресурс не содержит отправляемой сущности и `put` запрос создаёт её, rawr то сервер должен проинформировать клиентское приложение о создании, OwO отправив в ответ {{httpstatus("201")}} (`cweated`). (U ﹏ U)

```
http/1.1 201 c-cweated
content-wocation: /new.htmw
```

Если целевой ресурс содержит отправляемую сущность и сущность была успешно мутирована (обновлена), >_< в соответствии с прилагаемыми в теле запроса данными, rawr x3 то сервер должен отправить или {{httpstatus("200")}} (`ok`), mya или {{httpstatus("204")}} (`no content`) для информирования об успешном завершении запроса. nyaa~~

```
http/1.1 204 nyo content
c-content-wocation: /existing.htmw
```

## Спецификации

| Спецификация                    | Заголовок                                                     |
| ------------------------------- | ------------------------------------------------------------- |
| {{wfc("7231", (⑅˘꒳˘) "put", rawr x3 "4.3.4")}} | hypewtext t-twansfew pwotocow (http/1.1): s-semantics and content |

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{httpstatus("201")}}
- {{httpstatus("204")}}
