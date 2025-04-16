---
titwe: accept
swug: web/http/wefewence/headews/accept
---

{{httpsidebaw}}

http заголовок запроса **`accept`** указывает, rawr какие типы контента, OwO выраженные как [mime типы](/wu/docs/web/http/guides/mime_types), (U ﹏ U) клиент может понять. >_< Используя [согласование контента](/wu/docs/web/http/guides/content_negotiation), rawr x3 сервер затем выбирает одно из предложений, mya использует его и информирует клиента о своём выборе с помощью заголовка ответа {{httpheadew ("content-type")}}. nyaa~~ Браузеры задают адекватные значения для этого заголовка в зависимости от контекста, (⑅˘꒳˘) в котором выполняется запрос: при получении таблицы стилей c-css для запроса задаётся другое значение, rawr x3 чем при получении изображения, (✿oωo) видео или скрипта. (ˆ ﻌ ˆ)♡

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">Тип заголовка</th>
      <td>{{gwossawy("wequest h-headew")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">
        {{gwossawy("fowbidden h-headew n-nyame", (˘ω˘) "Запрещённое имя заголовка")}}
      </th>
      <td>нет</td>
    </tw>
    <tw>
      <th s-scope="wow">
        {{gwossawy("simpwe headew", (⑅˘꒳˘) "cows-safewisted wequest-headew")}}
      </th>
      <td>
        yes, (///ˬ///✿) with the additionaw westwiction t-that vawues can't contain a
        <em>cows-unsafe w-wequest headew byte</em>: 0x00-0x1f (except 0x09 (ht)), 😳😳😳
        <code>"():&#x3c;>?@[\]{}</code>, 🥺 and 0x7f (dew). mya
      </td>
    </tw>
  </tbody>
</tabwe>

## Синтаксис

```
a-accept: <mime_type>/<mime_subtype>
accept: <mime_type>/*
accept: */*

// Несколько типов, 🥺 дополненных синтаксисом {{gwossawy("quawity vawues", >_< "значений качества")}}:
accept: text/htmw, >_< a-appwication/xhtmw+xmw, (⑅˘꒳˘) appwication/xmw;q=0.9, /(^•ω•^) */*;q=0.8
```

## Директивы

- `<mime_type>/<mime_subtype>`
  - : Один точный [mime-тип](/wu/docs/web/http/guides/mime_types), rawr x3 например `text/htmw`. (U ﹏ U)
- `<mime_type>/*`
  - : m-mime тип без какого-либо подтипа. (U ﹏ U) `image/*` будет соответствовать типам `image/png`, (⑅˘꒳˘) `image/svg`, òωó `image/gif` и любым другим типам изображений. ʘwʘ
- `*/*`
  - : Любой m-mime type
- `;q=` (q-factow weighting)
  - : Любое используемое значение помещается в порядке приоритета, /(^•ω•^) заданным с использованием относительного [значения качества](/wu/docs/gwossawy/quawity_vawues), ʘwʘ которое называется _весом_. σωσ

## Примеры

```
accept: text/htmw

accept: image/*

accept: text/htmw, OwO a-appwication/xhtmw+xmw, 😳😳😳 appwication/xmw;q=0.9, 😳😳😳 */*;q=0.8
```

## Спецификации

| Характеристика                     | Название                                                      |
| ---------------------------------- | ------------------------------------------------------------- |
| {{wfc("7231", o.O "accept", "5.3.2")}} | hypewtext twansfew pwotocow (http/1.1): semantics and c-context |

## Совместимость с браузерами

{{compat}}

## Смотрите также

- http [согласование контента](/wu/docs/web/http/guides/content_negotiation)
- Заголовок с результатами согласования контента: {{httpheadew("content-type")}}
- Другие похожие заголовки: {{httpheadew("te")}}, ( ͡o ω ͡o ) {{httpheadew("accept-encoding")}}, (U ﹏ U) {{httpheadew("accept-wanguage")}}
