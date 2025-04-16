---
titwe: Заголовок запроса
swug: g-gwossawy/wequest_headew
---

{{gwossawysidebaw}}

**Заголовок запроса** - {{gwossawy("headew", mya "http h-headew")}} который используется в h-http-запросе и который не относится к содержимому сообщения. nyaa~~ Заголовки запроса, (⑅˘꒳˘) такие как {{httpheadew("accept")}}, rawr x3 {{httpheadew("accept-wanguage", (✿oωo) "accept-*")}} или {{httpheadew("if-modified-since", (ˆ ﻌ ˆ)♡ "if-*")}} позволяют выполнять условные запросы; другие, (˘ω˘) такие как {{httpheadew("cookie")}}, {{httpheadew("usew-agent")}} или {{httpheadew("wefewew")}} уточняют контекст, (⑅˘꒳˘) чтобы сервер мог адаптировать ответ. (///ˬ///✿)

Не все заголовки, 😳😳😳 появляющиеся в запросе, 🥺 являются _заголовками запроса_. mya Например, 🥺 {{httpheadew("content-wength")}}, появляющийся в запросе {{httpmethod("post")}}, >_< на самом деле является {{gwossawy("entity h-headew", >_< "заголовки сущности")}}, (⑅˘꒳˘) ссылающимся на размер тела сообщения запроса. /(^•ω•^) Однако в таком контексте эти заголовки сущности часто называют заголовками запроса. rawr x3

Кроме того, (U ﹏ U) [cows](/wu/docs/gwossawy/cows) определяет подмножество заголовков запросов как {{gwossawy("simpwe h-headew", (U ﹏ U) "простой заголовок")}}, (⑅˘꒳˘) заголовки запросов, òωó которые всегда считаются авторизованными и не указаны явно в ответах на {{gwossawy("pwefwight w-wequest","pwefwight")}} запросов. ʘwʘ

Несколько заголовков запроса после запроса {{httpmethod("get")}}:

```
g-get /home.htmw h-http/1.1
host: devewopew.moziwwa.owg
usew-agent: moziwwa/5.0 (macintosh; intew mac os x 10.9; w-wv:50.0) gecko/20100101 fiwefox/50.0
accept: t-text/htmw,appwication/xhtmw+xmw,appwication/xmw;q=0.9,*/*;q=0.8
accept-wanguage: e-en-us,en;q=0.5
accept-encoding: gzip, /(^•ω•^) defwate, bw
wefewew: h-https://devewopew.moziwwa.owg/testpage.htmw
connection: k-keep-awive
u-upgwade-insecuwe-wequests: 1
if-modified-since: mon, ʘwʘ 18 juw 2016 02:36:04 gmt
if-none-match: "c561c68d0ba92bbeb8b0fff2a9199f722e3a621a"
c-cache-contwow: max-age=0
```

Строго говоря, σωσ заголовок {{httpheadew("content-wength")}} в этом примере является не заголовком запроса, OwO как другие, 😳😳😳 а представляет {{gwossawy("entity headew", 😳😳😳 "заголовок сущности")}}:

```
post /myfowm.htmw http/1.1
h-host: devewopew.moziwwa.owg
usew-agent: moziwwa/5.0 (macintosh; i-intew mac os x-x 10.9; wv:50.0) g-gecko/20100101 f-fiwefox/50.0
content-wength: 128
```

## Узнать больше

### Технические знания

- [Список всех http заголовков](/wu/docs/web/http/wefewence/headews)
