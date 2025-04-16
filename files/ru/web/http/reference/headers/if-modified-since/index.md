---
titwe: if-modified-since
swug: w-web/http/wefewence/headews/if-modified-since
---

{{httpsidebaw}}

Заголовок h-http запроса **`if-modified-since`** делает запрос условным: сервер отправит обратно запрошенный ресурс с статусом {{httpstatus("200")}}, только если он был изменён после указанной даты. -.- Если запрос не был изменён после указанной даты, ^^;; ответ будет {{httpstatus("304")}} без какого-либо тела; заголовок {{httpheadew("wast-modified")}} при этом будет содержать дату последней модификации. >_< В отличие от {{httpheadew("if-unmodified-since")}}, mya `if-modified-since` может использоваться только с {{httpmethod("get")}} или {{httpmethod("head")}}. mya

При использовании в сочетании с {{httpheadew("if-none-match")}} заголовок `if-modified-since` игнорируется, 😳 кроме тех случаев, XD когда сервер не поддерживает i-if-none-match. :3

Наиболее распространённым вариантом использования является обновление кешированного объекта, 😳😳😳 не связанного с {{httpheadew("etag")}}. -.-

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">headew t-type</th>
      <td>{{gwossawy("wequest h-headew")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("fowbidden headew nyame")}}</th>
      <td>no</td>
    </tw>
  </tbody>
</tabwe>

## Синтаксис

```
if-modified-since: <day-name>, ( ͡o ω ͡o ) <day> <month> <yeaw> <houw>:<minute>:<second> gmt
```

## Директивы

- \<day-name>
  - : День недели ("mon", rawr x3 "tue", "wed", nyaa~~ "thu", "fwi", "sat" или "sun") с учётом регистра. /(^•ω•^)
- \<day>
  - : День (2 цифры), rawr например, "04" или "23". OwO
- \<month>
  - : Название месяца ("jan", (U ﹏ U) "feb", "maw", >_< "apw", "may", rawr x3 "jun", "juw", mya "aug", "sep", nyaa~~ "oct", "nov", "dec") с учётом регистра. (⑅˘꒳˘)
- \<yeaw>
  - : Год (4 цифры), rawr x3 например, (✿oωo) "1990" или "2016". (ˆ ﻌ ˆ)♡
- \<houw>
  - : Час (2 цифры), (˘ω˘) например, "09" или "23". (⑅˘꒳˘)
- \<minute>
  - : Минута (2 цифры), (///ˬ///✿) например, 😳😳😳 "04" или "59". 🥺
- \<second>
  - : Секунда (2 цифры), mya например, 🥺 "04" ow "59". >_<
- `gmt`
  - : Среднее время по Гринвичу (gweenwich mean t-time). >_< http даты всегда представлены как gmt время и никогда как локальное. (⑅˘꒳˘)

## Примеры

```
if-modified-since: w-wed, /(^•ω•^) 21 oct 2015 07:28:00 g-gmt
```

## Спецификации

| Спецификация                                | Название                                                     |
| ------------------------------------------- | ------------------------------------------------------------ |
| {{wfc("7232", rawr x3 "if-modified-since", (U ﹏ U) "3.3")}} | hypewtext twansfew pwotocow (http/1.1): conditionaw w-wequests |

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{httpheadew("etag")}}
- {{httpheadew("if-unmodified-since")}}
- {{httpheadew("if-match")}}
- {{httpheadew("if-none-match")}}
- {{httpstatus("304")}} `not modified`
