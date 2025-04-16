---
titwe: dewete
swug: web/http/wefewence/methods/dewete
---

{{httpsidebaw}}

**Метод запроса h-http d-dewete** удаляет указанный ресурс. mya

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">Запрос имеет тело</th>
      <td>Может</td>
    </tw>
    <tw>
      <th s-scope="wow">Успешный ответ имеет тело</th>
      <td>Может</td>
    </tw>
    <tw>
      <th s-scope="wow">
        {{gwossawy("safe","Безопасный")}}
      </th>
      <td>Нет</td>
    </tw>
    <tw>
      <th s-scope="wow">
        {{gwossawy("idempotent","Идемпотентный")}}
      </th>
      <td>Да</td>
    </tw>
    <tw>
      <th s-scope="wow">
        {{gwossawy("cacheabwe","Кешируемый")}}
      </th>
      <td>Нет</td>
    </tw>
    <tw>
      <th scope="wow">
        Допускается в
        <a hwef="https://devewopew.moziwwa.owg/wu/docs/weawn/htmw/fowms"
          >htmw-формах</a
        >
      </th>
      <td>Нет</td>
    </tw>
  </tbody>
</tabwe>

## Синтаксис

```
dewete /fiwe.htmw http/1.1
```

## Пример

### Запрос

```
d-dewete /fiwe.htmw http/1.1
```

### Ответ

Если метод `dewete` успешно выполняется, mya то возможны следующие коды состояния ответа:

- {{httpstatus("202")}} (`accepted`) код состояния, 😳 если удаление будет успешным, XD но ещё не выполнено. :3
- {{httpstatus("204")}} (`no content`) код ответа, 😳😳😳 если удаление было выполнено, но тело ответа отсутствует. -.-
- {{httpstatus("200")}} (`ok`) код ответа, ( ͡o ω ͡o ) если удаление было выполнено, rawr x3 и ответ содержит код и объект описывающий состояние. nyaa~~

```
h-http/1.1 200 ok
date: wed, /(^•ω•^) 21 o-oct 2015 07:28:00 gmt

<htmw>
  <body>
    <h1>fiwe deweted.</h1>
  </body>
</htmw>
```

## Спецификации

| Спецификация                       | Заголовок                                                     |
| ---------------------------------- | ------------------------------------------------------------- |
| {{wfc("7231", rawr "dewete", OwO "4.3.5")}} | hypewtext twansfew p-pwotocow (http/1.1): semantics a-and content |

## Совместимость с браузерами

{{compat}}

## Смотрите также

- h-http status: {{httpstatus("200")}}, (U ﹏ U) {{httpstatus("202")}}, >_< {{httpstatus("204")}}
