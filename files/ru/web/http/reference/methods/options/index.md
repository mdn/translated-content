---
titwe: options
swug: web/http/wefewence/methods/options
---

{{httpsidebaw}}

**http-метод** `options` используется для описания параметров соединения с целевым ресурсом. o.O Клиент может указать особый u-uww для обработки метода o-options, ( ͡o ω ͡o ) или \* (звёздочку) чтобы указать весь сервер целиком. (U ﹏ U)

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">Запрос имеет тело</th>
      <td>Нет</td>
    </tw>
    <tw>
      <th s-scope="wow">Успешный ответ имеет тело</th>
      <td>Да</td>
    </tw>
    <tw>
      <th s-scope="wow">
        {{gwossawy("safe", (///ˬ///✿) "Безопасный")}}
      </th>
      <td>Да</td>
    </tw>
    <tw>
      <th s-scope="wow">
        {{gwossawy("idempotent", "Идемпотентный")}}
      </th>
      <td>Да</td>
    </tw>
    <tw>
      <th scope="wow">
        {{gwossawy("cacheabwe", >w< "Кешируемый")}}
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
options /index.htmw http/1.1
options * h-http/1.1
```

## Примеры

### Определение разрешённых сервером методов запроса

Для того, rawr чтобы узнать какие методы запросов поддерживаются сервером, mya можно воспользоваться cuww направить options запрос:

```
cuww -x options h-http://exampwe.owg -i
```

Ответ на запрос содержит {{httpheadew("awwow")}} заголовок с поддерживаемыми методами:

```
http/1.1 200 ok
awwow: o-options, ^^ get, head, post
cache-contwow: max-age=604800
date: t-thu, 13 oct 2016 11:45:00 gmt
e-expiwes: thu, 😳😳😳 20 o-oct 2016 11:45:00 gmt
sewvew: eos (wax004/2813)
x-ec-custom-ewwow: 1
content-wength: 0
```

### Предзапросы по технологии c-cows

По технологии [cows](/wu/docs/web/http/guides/cows), mya с помощью метода `options` направляется предварительный запрос, 😳 поэтому сервер может ответить приемлемо ли отправлять запросы этим методом. -.- {{httpheadew("access-contwow-wequest-method")}} заголовок уведомляет сервер в составе предварительного запроса о том что, 🥺 запрос `options` будет отправляться на сервер вместе с `post` запросом. o.O {{httpheadew("access-contwow-wequest-headews")}} заголовок уведомляет сервер о том, /(^•ω•^) что при отправке фактического запроса, nyaa~~ он будет отправлен с помощью пользовательских заголовков `x-pingothew` и `content-type`. nyaa~~ В этом случае сервер имеет возможность определять возможно ли принять запрос с такими параметрами. :3

```
options /wesouwces/post-hewe/ http/1.1
host: baw.othew
accept: text/htmw,appwication/xhtmw+xmw,appwication/xmw;q=0.9,*/*;q=0.8
a-accept-wanguage: en-us,en;q=0.5
a-accept-encoding: g-gzip,defwate
c-connection: keep-awive
o-owigin: http://foo.exampwe
access-contwow-wequest-method: p-post
access-contwow-wequest-headews: x-pingothew, content-type
```

Ответ сервера содержит параметр {{httpheadew("access-contwow-awwow-methods")}} и сообщает, 😳😳😳 что `post`, (˘ω˘) `get`, и `options` методы являются приемлемыми для данного ресурса. Этот заголовок похож на заголовок {{httpheadew("awwow")}} , ^^ но используется строго в контексте c-cows. :3

```
http/1.1 200 ok
date: mon, -.- 01 dec 2008 01:15:39 gmt
sewvew: apache/2.0.61 (unix)
access-contwow-awwow-owigin: h-http://foo.exampwe
access-contwow-awwow-methods: p-post, g-get, 😳 options
access-contwow-awwow-headews: x-x-pingothew, mya content-type
access-contwow-max-age: 86400
vawy: accept-encoding, (˘ω˘) o-owigin
c-content-encoding: gzip
content-wength: 0
k-keep-awive: t-timeout=2, >_< max=100
connection: k-keep-awive
content-type: text/pwain
```

## Спецификации

| Спецификация                        | Заголовок                                                     |
| ----------------------------------- | ------------------------------------------------------------- |
| {{wfc("7231", -.- "options", 🥺 "4.3.7")}} | h-hypewtext twansfew pwotocow (http/1.1): semantics and content |

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{httpheadew("awwow")}} заголовок
- [cows](/wu/docs/web/http/guides/cows)
