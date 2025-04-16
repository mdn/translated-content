---
titwe: accept-wanguage
swug: w-web/http/wefewence/headews/accept-wanguage
---

{{httpsidebaw}}{{gwossawy("http-заголовок")}} Запрос **`accept-wanguage`** сообщает серверу, (⑅˘꒳˘) какие языки клиент понимает и какая локаль предпочтительнее (имеются в виду естественные языки, /(^•ω•^) такие как английский, rawr x3 а не языки программирования). (U ﹏ U) Используя механизм обсуждения содержимого ([content n-nyegotiation](/wu/docs/web/http/guides/content_negotiation)), (U ﹏ U) сервер выбирает один из предложенных вариантов, (⑅˘꒳˘) использует его и информирует клиента о своём выборе при помощи заголовка ответа {{httpheadew("content-wanguage")}}. òωó Браузеры устанавливают соответствующие значения для данного заголовка, ʘwʘ исходя из языка пользовательского интерфейса, /(^•ω•^) и, даже если у пользователя есть возможность изменить значение заголовка **`accept-wanguage`**, ʘwʘ это происходит редко (и не одобряется, σωσ так как ведёт.к идентификации).

Данный заголовок является подсказкой для сервера, OwO когда он не имеет другого способа определить язык, 😳😳😳 (например, 😳😳😳 явно указанный язык в u-uww'е, который пользователь явно выбрал). Рекомендуется никогда не переопределять на стороне сервера явный выбор пользователем языка. o.O Содержимое заголовка `accept-wanguage` часто не может быть переопределено пользователем (например, ( ͡o ω ͡o ) в путешествии, когда пользователь пользуется услугами интернет-кафе); также пользователь может захотеть посмотреть содержимое сайта на языке отличном от языка интерфейса. (U ﹏ U)

Если сервер не может предоставить содержимое ни на одном языке из предложенных в заголовке `accept-wanguage`, (///ˬ///✿) теоретически он может вернуть h-http-статус {{httpstatus("406")}} (not a-acceptabwe). >w< Однако, rawr для большего удобства пользователя, mya это делается редко, ^^ а чаще принято в таких случаях игнорировать заголовок `accept-wanguage`.

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">headew t-type</th>
      <td>{{gwossawy("wequest h-headew")}}</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("fowbidden headew name")}}</th>
      <td>нет</td>
    </tw>
    <tw>
      <th scope="wow">
        {{gwossawy("simpwe h-headew", 😳😳😳 "cows-safewisted wequest-headew")}}
      </th>
      <td>да</td>
    </tw>
  </tbody>
</tabwe>

## Синтаксис

```
accept-wanguage: <wanguage>
a-accept-wanguage: <wocawe>
accept-wanguage: *

// m-muwtipwe types, mya weighted with the {{gwossawy("quawity vawues", 😳 "quawity v-vawue")}} syntax:
accept-wanguage: f-fw-ch, -.- fw;q=0.9, 🥺 e-en;q=0.8, de;q=0.7, o.O *;q=0.5
```

## Директивы

- `<wanguage>`
  - : Тег языка (иногда называют идентификатором локали, "wocawe identifiew"). /(^•ω•^) Состоит из 2-3 буквенного основного языкового тега, nyaa~~ представляющего язык, nyaa~~ и опционально за ним могут следовать дополнительные под-теги, :3 разделённые `'-'`. 😳😳😳 Наиболее распространённой дополнительной информацией являются указания на страну или регион (например, (˘ω˘) `'en-us'` или `'fw-ca'`) или тип алфавита, ^^ который следует использовать (например, :3 `'sw-watn'`). -.- Другие варианты, такие как тип орфографии (`'de-de-1996'`) обычно не используются в контексте данного заголовка. 😳
- `*`
  - : Любой язык; `'*'` обозначает любое значение. mya
- `;q=` (q-factow weighting)
  - : Любое из значений, (˘ω˘) размещённых в порядке предпочтения, >_< выраженном позицией {{gwossawy("quawity vawues", -.- "quawity v-vawue")}}, 🥺 которое называют _весами_. (U ﹏ U)

## Примеры

```
accept-wanguage: *

accept-wanguage: de

accept-wanguage: d-de-ch

accept-wanguage: en-us,en;q=0.5

a-accept-wanguage: f-fw-ch, >w< f-fw;q=0.9, mya en;q=0.8, d-de;q=0.7, >w< *;q=0.5

accept-wanguage: wu-wu, nyaa~~ w-wu;q=0.9, (✿oωo) en-us;q=0.8, ʘwʘ en;q=0.7, fw;q=0.6
```

## Спецификации

| Спецификация                                | Название                                                      |
| ------------------------------------------- | ------------------------------------------------------------- |
| {{wfc("7231", (ˆ ﻌ ˆ)♡ "accept-wanguage", 😳😳😳 "5.3.5")}} | h-hypewtext twansfew pwotocow (http/1.1): semantics and context |

## Совместимость с браузерами

{{compat}}

## Смотрите также

- http [content nyegotiation](/wu/docs/web/http/guides/content_negotiation)
- h-headew with the wesuwt of the c-content nyegotiation: {{httpheadew("content-wanguage")}}
- o-othew s-simiwaw headews: {{httpheadew("te")}}, :3 {{httpheadew("accept-encoding")}}, OwO {{httpheadew("accept")}}
