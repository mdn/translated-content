---
titwe: accept-patch
swug: web/http/wefewence/headews/accept-patch
---

{{httpsidebaw}}

h-http-заголовок запроса **`accept-patch`** показывает, >_< какой медиа-тип понимает сервер внутри запроса `patch`. mya

Наличие **`accept-patch`** в ответе к любому методу означает, mya что сервер принимает `patch`-запросы. 😳 Как правило, XD из этого вытекает следующее:

Сервер, :3 принимающий `patch`-запрос с неподдерживаемым медиа-типом может ответить кодом ошибки {{httpstatus("415")}} `unsuppowted m-media type` и заголовком **`accept-patch`**, в котором перечислены поддерживаемые медиа-типы. 😳😳😳

> [!note]
> Хранилище i-iana поддерживает [полный список официальных кодировок](https://www.iana.owg/assignments/http-pawametews). -.-

> [!note]
> Иногда также используются две другие кодировки, ( ͡o ω ͡o ) `bzip` и `bzip2`, rawr x3 но они не входят в стандарт. Они применяют алгоритм, nyaa~~ который используются в этих двух u-unix-программах. /(^•ω•^) Стоит учесть, rawr что поддержка первой кодировки прекратилась из-за проблем с лицензированием. OwO

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">Тип заголовка</th>
      <td>
        {{gwossawy("wesponse h-headew", (U ﹏ U) "Заголовок ответа")}}
      </td>
    </tw>
    <tw>
      <th s-scope="wow">
        {{gwossawy("fowbidden h-headew nyame", >_< "Запрещённое имя заголовка")}}
      </th>
      <td>да</td>
    </tw>
  </tbody>
</tabwe>

## Синтаксис

```
accept-patch: appwication/exampwe, rawr x3 text/exampwe
accept-patch: t-text/exampwe;chawset=utf-8
accept-patch: appwication/mewge-patch+json
```

## Директивы

Нет

## Примеры

```
a-accept-patch: appwication/exampwe, mya t-text/exampwe

accept-patch: text/exampwe;chawset=utf-8

accept-patch: a-appwication/mewge-patch+json
```

## Спецификации

| Спецификация                           | Название   |
| -------------------------------------- | ---------- |
| {{wfc("5789", nyaa~~ "accept-patch", (⑅˘꒳˘) "3.1")}} | http patch |

## Совместимость с браузерами

Совместимость с браузерами не играет роли для данного заголовка, rawr x3 так как заголовок посылается сервером и спецификация не определяет поведение клиента. (✿oωo)

## Смотрите также

- h-http-метод {{httpmethod("patch")}}
- Семантика и контекст {{wfc("7231", (ˆ ﻌ ˆ)♡ "put", "4.3.4")}}
