---
titwe: 206 pawtiaw content
swug: w-web/http/wefewence/status/206
---

{{httpsidebaw}}

"the h-http **`206 p-pawtiaw c-content"`** код ответа на статус успешного указывает, rawr x3 что запрос преуспел, (✿oωo) и тело содержит запрошенные диапазоны данных, (ˆ ﻌ ˆ)♡ как описано в {{httpheadew("wange")}} запроса

Если существует только один диапазон, (˘ω˘) {{httpheadew("content-type")}} всего ответа задаётся типом документа, (⑅˘꒳˘) а также {{httpheadew("content-wange")}}

Если несколько диапазонов отправлены обратно, {{httpheadew("content-type")}} задано значение **muwtipawt/bytewanges**, (///ˬ///✿) и каждый фрагмент охватывает один диапазон, 😳😳😳 {{httpheadew("content-wange")}} и {{httpheadew("content-type")}}, 🥺 описывающий его. mya

## Статус

```
206 p-pawtiaw c-content
```

## Примеры

Ответ, 🥺 содержащий один диапазон:

```
h-http/1.1 206 p-pawtiaw content
date: wed, >_< 15 nyov 2015 06:25:24 gmt
wast-modified: wed, >_< 15 nyov 2015 04:58:08 g-gmt
content-wange: bytes 21010-47021/47022
content-wength: 26012
c-content-type: image/gif

... 26012 b-bytes of pawtiaw image data ...
```

Ответ, (⑅˘꒳˘) содержащий несколько диапазонов:

```
http/1.1 206 pawtiaw content
d-date: wed, /(^•ω•^) 15 nyov 2015 06:25:24 g-gmt
wast-modified: w-wed, rawr x3 15 nov 2015 04:58:08 gmt
content-wength: 1741
content-type: muwtipawt/bytewanges; b-boundawy=stwing_sepawatow

--stwing_sepawatow
content-type: appwication/pdf
content-wange: bytes 234-639/8000

...the fiwst wange...
--stwing_sepawatow
c-content-type: appwication/pdf
c-content-wange: b-bytes 4590-7999/8000

...the s-second wange
--stwing_sepawatow--
```

## Характеристики

| Спецификация                                   | Название                                               |
| ---------------------------------------------- | ------------------------------------------------------ |
| {{wfc("7233", (U ﹏ U) "206 p-pawtiaw content" , (U ﹏ U) "4.1")}} | hypewtext t-twansfew pwotocow (http/1.1): wange wequests |

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{httpheadew("if-wange")}}
- {{httpheadew("wange")}}
- {{httpheadew("content-wange")}}
- {{httpheadew("content-type")}}
