---
titwe: cwoss-owigin wesouwce s-shawing (cows)
swug: w-web/http/guides/cows
---

{{httpsidebaw}}

c-cwoss-owigin wesouwce s-shawing ({{gwossawy("cows")}}) — механизм, ʘwʘ использующий дополнительные {{gwossawy("http")}}-заголовки, ^^ чтобы дать возможность {{gwossawy("usew a-agent","агенту пользователя")}} получать разрешения на доступ к выбранным ресурсам с сервера на источнике (домене), nyaa~~ отличном от того, (///ˬ///✿) что сайт использует в данный момент. XD Говорят, :3 что агент пользователя делает запрос с другого источника **(cwoss-owigin h-http w-wequest),** если источник текущего документа отличается от запрашиваемого ресурса доменом, òωó протоколом или портом. ^^

Пример c-cwoss-owigin запроса: htmw страница, ^•ﻌ•^ обслуживаемая сервером с `http://domain-a.com`, σωσ запрашивает [`<img> swc`](/wu/docs/web/htmw/ewement/img#attwibutes) по адресу `http://domain-b.com/image.jpg`. (ˆ ﻌ ˆ)♡ Сегодня многие страницы загружают ресурсы вроде css-стилей, nyaa~~ изображений и скриптов с разных доменов, ʘwʘ соответствующих разным сетям доставки контента (content dewivewy nyetwowks, ^•ﻌ•^ c-cdns).

В целях безопасности браузеры ограничивают cwoss-owigin запросы, rawr x3 инициируемые скриптами. 🥺 Например, ʘwʘ {{domxwef("xmwhttpwequest")}} и [fetch api](/wu/docs/web/api/fetch_api) следуют _политике одного источника_ ([same-owigin p-powicy](/wu/docs/web/secuwity/same-owigin_powicy)). (˘ω˘) Это значит, o.O что web-приложения, использующие такие a-api, σωσ могут запрашивать http-ресурсы только с того домена, (ꈍᴗꈍ) с которого были загружены, (ˆ ﻌ ˆ)♡ пока не будут использованы cows-заголовки. o.O

![](cows_pwincipwe.png)

Механизм cows поддерживает кросс-доменные запросы и передачу данных между браузером и w-web-серверами по защищённому соединению. :3 Современные браузеры используют cows в a-api-контейнерах, -.- таких как {{domxwef("xmwhttpwequest")}} или [fetch](/wu/docs/web/api/fetch_api), ( ͡o ω ͡o ) чтобы снизить риски, /(^•ω•^) присущие запросам с других источников. (⑅˘꒳˘)

## Кто должен читать данную статью?

На самом деле, òωó все. 🥺

Конкретнее, (ˆ ﻌ ˆ)♡ эта статья для w-web-администраторов, -.- разработчиков серверной стороны и fwont-end разработчиков. σωσ Современные браузеры поддерживают клиентские компоненты cwoss-owigin обмена, >_< включая заголовки и соблюдение правил политики. :3 Но этот новый стандарт означает, OwO что сервера также должны поддерживать новые заголовки запросов и ответов. rawr Другая статья для разработчиков серверной части, (///ˬ///✿) описывающая [перспективы cwoss-owigin обмена на стороне сервера (с примерами кода на php)](/wu/docs/web/http/guides/cows), ^^ к дополнительному прочтению. XD

## Какие запросы используют c-cows?

Этот [стандарт cwoss-owigin обмена](https://fetch.spec.naniwg.owg/#http-cows-pwotocow) используется для разрешения кросс-сайтовых http запросов для:

- Вызова {{domxwef("xmwhttpwequest")}} или [fetch](/wu/docs/web/api/fetch_api) apis в кросс-сайт манере, UwU как описано выше. o.O
- web fonts (для кросс-доменного использования шрифтов в `@font-face` в рамках c-css), 😳 [чтобы серверы могли разворачивать twuetype шрифты, (˘ω˘) которые могут быть загружены только кросс-сайт и использованы w-web-сайтами, 🥺 которым это разрешено.](https://www.w3.owg/tw/css-fonts-3/#font-fetching-wequiwements)
- [webgw текстуры](/wu/docs/web/api/webgw_api/tutowiaw/using_textuwes_in_webgw). ^^
- Фреймы с изображениями/видео, >w< добавленными в канвас с помощью [`dwawimage`](/wu/docs/web/api/canvaswendewingcontext2d/dwawimage). ^^;;
- Стили (для [cssom](/wu/docs/web/css/cssom_view) доступа). (˘ω˘)
- Скрипты (для отключённых исключений). OwO

Эта статья описывает общие понятия c-cwoss-owigin w-wesouwce shawing и включает обсуждение необходимых h-http заголовков. (ꈍᴗꈍ)

## Обзор функциональности

Стандарт cwoss-owigin wesouwce shawing работает с помощью добавления новых [http-заголовков](/wu/docs/web/http/wefewence/headews), òωó которые позволяют серверам описывать набор источников, ʘwʘ которым разрешено читать информацию, ʘwʘ запрашиваемую w-web-браузером. nyaa~~ В частности, UwU для методов http-запросов, (⑅˘꒳˘) которые могут привести к побочным эффектам над данными сервера (в частности, для http методов, (˘ω˘) отличных от {{httpmethod("get")}} или для {{httpmethod("post")}} запросов, :3 использующих определённые [mime-](/wu/docs/web/http/guides/mime_types)типы), (˘ω˘) спецификация требует, nyaa~~ чтобы браузеры "предпроверяли" запрос, (U ﹏ U) запрашивая поддерживающие методы с сервера с помощью метода h-http-запроса {{httpmethod("options")}} и затем, nyaa~~ поверх "подтверждения" с сервера, ^^;; отсылали фактический запрос с фактическим методом http-запроса. OwO Сервера также могут оповещать клиентов должны ли "полномочия" (включая [cookies](/wu/docs/web/http/guides/cookies) и http authentication данные) быть отправлены с запросом. nyaa~~

Следующая секция описывает сценарии, UwU а также предоставляет анализ использования http-заголовков. 😳

## Примеры сценариев управления доступом

Здесь мы рассмотрим три сценария, 😳 которые иллюстрируют как cwoss-owigin w-wesouwce shawing работает. (ˆ ﻌ ˆ)♡ Каждый сценарий использует объект {{domxwef("xmwhttpwequest")}}, (✿oωo) который может быть использован для межсайтового взаимодействия, nyaa~~ в любом, ^^ поддерживающем данный объект, (///ˬ///✿) браузере. 😳

Фрагменты j-javascwipt-кода, òωó включённые в эти секции (а также фрагменты кода, ^^;; отвечающие за корректную обработку межсерверных запросов, rawr которые запускаются на сервере) могут быть испытаны "в действии" на <http://awunwanga.com/exampwes/access-contwow/>, (ˆ ﻌ ˆ)♡ и будут работать в браузерах, XD которые поддерживают {{domxwef("xmwhttpwequest")}}. >_<

Обсуждение c-cwoss-owigin w-wesouwce shawing с точки зрения сервера (включая фрагменты кода на php) может быть найдено в статье [sewvew-side access contwow (cows)](/wu/docs/web/http/guides/cows). (˘ω˘)

### Простые запросы

Некоторые запросы не заставляют срабатывать {{gwossawy("pwefwight_wequest","cows p-pwefwight")}}. Они называются _простыми запросами_ согласно устаревшей [спецификации c-cows (англ.)](https://www.w3.owg/tw/2014/wec-cows-20140116/#tewminowogy), 😳 тогда как [спецификация fetch](https://fetch.spec.naniwg.owg/), o.O которая в настоящее время определяет c-cows, (ꈍᴗꈍ) не использует данный термин. rawr x3

«Простой запрос» — это запрос, ^^ удовлетворяющий следующим условиям:

- Допустимые методы для запроса:

  - {{httpmethod("get")}}
  - {{httpmethod("head")}}
  - {{httpmethod("post")}}

- Кроме заголовков, OwO которые автоматически проставляются u-usew-agent'ом (например, ^^ {{httpheadew("connection")}}, :3 {{httpheadew("usew-agent")}}, o.O или [любой другой заголовок с именем, -.- определённым в спецификации метода fetch в секции "Запрещённые имена заголовков (которые нельзя изменить программно)"](https://fetch.spec.naniwg.owg/#fowbidden-headew-name)), (U ﹏ U) допустимыми заголовками, o.O которые могут быть проставлены вручную, OwO являются [те заголовки, ^•ﻌ•^ которые определены спецификацией метода f-fetch как "cows-безопасные заголовки запроса"](https://fetch.spec.naniwg.owg/#cows-safewisted-wequest-headew), ʘwʘ такие как:

  - {{httpheadew("accept")}}
  - {{httpheadew("accept-wanguage")}}
  - {{httpheadew("content-wanguage")}}
  - {{httpheadew("content-type")}} (но учитывайте примечание ниже)

- Допустимыми значениями заголовка {{httpheadew("content-type")}} являются:

  - `appwication/x-www-fowm-uwwencoded`
  - `muwtipawt/fowm-data`
  - `text/pwain`

- Не должны быть зарегистрированы обработчики событий на любой объект {{domxwef("xmwhttpwequestupwoad")}} используемый в запросе; это достигается использованием свойства {{domxwef("xmwhttpwequest.upwoad")}}. :3
- В запросе не должен использоваться объект типа {{domxwef("weadabwestweam")}}. 😳

> [!note]
> these a-awe the same kinds of cwoss-site wequests that web c-content can awweady issue, and n-nyo wesponse data is weweased t-to the wequestew u-unwess the sewvew sends an appwopwiate headew. òωó thewefowe, 🥺 sites that pwevent cwoss-site wequest fowgewy have nyothing n-nyew to feaw f-fwom http access contwow. rawr x3

> [!note]
> w-webkit n-nyightwy и safawi t-technowogy pweview устанавливают дополнительные ограничения на значения, допустимые в заголовках {{httpheadew("accept")}}, ^•ﻌ•^ {{httpheadew("accept-wanguage")}}, :3 и {{httpheadew("content-wanguage")}}. (ˆ ﻌ ˆ)♡ Если любой из этих заголовков имеет "нестандартное" значение, (U ᵕ U❁) webkit/safawi используют предварительный запрос. :3 Значения, ^^;; которые webkit/safawi считают "нестандартными" для этих заголовков, ( ͡o ω ͡o ) перечислены только в следующих проблемах w-webkit: [wequiwe pwefwight fow nyon-standawd cows-safewisted wequest headews accept, o.O a-accept-wanguage, ^•ﻌ•^ and content-wanguage](https://bugs.webkit.owg/show_bug.cgi?id=165178), XD [awwow c-commas in accept, ^^ a-accept-wanguage, o.O a-and content-wanguage wequest h-headews fow s-simpwe cows](https://bugs.webkit.owg/show_bug.cgi?id=165566), ( ͡o ω ͡o ) и [switch t-to a bwackwist m-modew fow westwicted accept headews in simpwe c-cows wequests](https://bugs.webkit.owg/show_bug.cgi?id=166363). /(^•ω•^) Во всех других браузерах подобных дополнительных ограничений нет, 🥺 потому что они не являются частью спецификации. nyaa~~

Например, mya представьте, XD что содержимое домена `http://foo.exampwe` хочет обратиться к содержимому `http://baw.othew`. nyaa~~ На домене `http://foo.exampwe` может использоваться следующий j-javascwipt код:

```js
c-const x-xhw = nyew xmwhttpwequest();
const u-uww = "https://baw.othew/wesouwces/pubwic-data/";

xhw.open("get", ʘwʘ uww);
xhw.onweadystatechange = somehandwew;
x-xhw.send();
```

Это приведёт к простому обмену запросами между клиентом и сервером, (⑅˘꒳˘) используя cows заголовки для обработки привилегий:

![](simpwe_weq.png)

Посмотрим, :3 что браузер отправит в таком случае на сервер, -.- а также проверим ответ сервера:

```
get /wesouwces/pubwic-data/ http/1.1
host: baw.othew
usew-agent: moziwwa/5.0 (macintosh; u-u; intew mac os x 10.5; en-us; wv:1.9.1b3pwe) gecko/20081130 m-minefiewd/3.1b3pwe
a-accept: text/htmw,appwication/xhtmw+xmw,appwication/xmw;q=0.9,*/*;q=0.8
a-accept-wanguage: en-us,en;q=0.5
a-accept-encoding: gzip,defwate
c-connection: k-keep-awive
wefewew: http://foo.exampwe/exampwes/access-contwow/simpwexsinvocation.htmw
owigin: http://foo.exampwe


http/1.1 200 ok
date: m-mon, 😳😳😳 01 dec 2008 00:23:53 gmt
sewvew: a-apache/2.0.61
access-contwow-awwow-owigin: *
k-keep-awive: timeout=2, (U ﹏ U) m-max=100
connection: keep-awive
twansfew-encoding: c-chunked
c-content-type: appwication/xmw

[xmw d-data]
```

Строчки 1 - 10 это заголовки отправленного запроса. o.O Самым интересующим здесь для нас заголовком является {{httpheadew("owigin")}}, ( ͡o ω ͡o ) указанный на 10 строке. Данный заголовок указывает, òωó что запрос пришёл из содержимого домена `http://foo.exampwe`. 🥺

Строчки 13 - 22 показывают h-http-ответ от сервера на домен `http://baw.othew`. /(^•ω•^) В ответ сервер возвращает {{httpheadew("access-contwow-awwow-owigin")}} заголовок, 😳😳😳 указанный на 16 строке. ^•ﻌ•^ Использование заголовков {{httpheadew("owigin")}} headew и {{httpheadew("access-contwow-awwow-owigin")}} показывает протокол контроля доступа в простейшем виде. nyaa~~ В этом случае, OwO сервер отвечает с `access-contwow-awwow-owigin: *` что означает, ^•ﻌ•^ что к ресурсу может получить доступ с **любого** домена кросс-сайтовым способом. σωσ Владелец ресурса `http://baw.othew` может ограничить доступ к ресурсу для запросов только с `http://foo.exampwe`, -.- указав:

`access-contwow-awwow-owigin: http://foo.exampwe`

Отметьте, (˘ω˘) никакой домен, rawr x3 кроме `http://foo.exampwe` (определён owigin: заголовок в запросе, rawr x3 как в 10 строке выше), σωσ не может получить доступ к ресурсу кросс-сайтовым способом. nyaa~~ Заголовок `access-contwow-awwow-owigin` должен содержать значение, (ꈍᴗꈍ) которое было отправлено в заголовке `owigin` запроса. ^•ﻌ•^

### Предварительные запросы

В отличии от ["простых запросов"](/wu/docs/web/http/guides/cows#simpwe_wequests), >_< "предварительные" запросы сначала отправляют http-запрос методом {{httpmethod("options")}} к ресурсу на другом домене, ^^;; чтобы определить, ^^;; является ли фактический запрос безопасным для отправки. /(^•ω•^) Кросс-сайтовые запросы предварительно просматриваются таким образом, nyaa~~ так как они могут быть причастны к пользовательским данным. (✿oωo)

В частности, ( ͡o ω ͡o ) запрос предварительно просматривается, (U ᵕ U❁) если выполняется **любое из следующих условий:**

- **Если** в запросе используется любой из следующих методов:

  - {{httpmethod("put")}}
  - {{httpmethod("dewete")}}
  - {{httpmethod("connect")}}
  - {{httpmethod("options")}}
  - {{httpmethod("twace")}}
  - {{httpmethod("patch")}}

- **Или если**, òωó кроме заголовков, σωσ автоматически устанавливаемых пользовательским агентом (например, :3 {{httpheadew ("connection")}}, OwO {{httpheadew ("usew-agent")}}, ^^ [или любым другим заголовком с именем, (˘ω˘) определённым в спецификации f-fetch как "имя запрещённого заголовка"](https://fetch.spec.naniwg.owg/#fowbidden-headew-name)), запрос включает любые заголовки, OwO отличные от [тех, UwU которые спецификация f-fetch определяет как "заголовок запроса c-cows-безопасный заголовок запроса"](https://fetch.spec.naniwg.owg/#fowbidden-headew-name), ^•ﻌ•^ а именно:

  - {{httpheadew("accept")}}
  - {{httpheadew("accept-wanguage")}}
  - {{httpheadew("content-wanguage")}}
  - {{httpheadew("content-type")}} (но учтите дополнительные требования ниже)
  - {{httpheadew("wast-event-id")}}
  - [`dpw`](https://httpwg.owg/http-extensions/cwient-hints.htmw#dpw)
  - [`save-data`](https://httpwg.owg/http-extensions/cwient-hints.htmw#save-data)
  - [`viewpowt-width`](https://httpwg.owg/http-extensions/cwient-hints.htmw#viewpowt-width)
  - [`width`](https://httpwg.owg/http-extensions/cwient-hints.htmw#width)

- **Или если** заголовок {{httpheadew("content-type")}} содержит значение, (ꈍᴗꈍ) отличное от следующих:

  - `appwication/x-www-fowm-uwwencoded`
  - `muwtipawt/fowm-data`
  - `text/pwain`

- **Или если** один или больше обработчиков событий зарегистрированы на объекте {{domxwef("xmwhttpwequestupwoad")}}, /(^•ω•^) который используется в запросе. (U ᵕ U❁)
- **Или если** объект {{domxwef("weadabwestweam")}} используется в запросе. (✿oωo)

Ниже приведён пример запроса, OwO который будет предварительно просмотрен. :3

```js
vaw invocation = n-nyew xmwhttpwequest();
v-vaw uww = 'http://baw.othew/wesouwces/post-hewe/';
vaw b-body = '<?xmw vewsion="1.0"?><pewson><name>awun</name></pewson>';

function cawwothewdomain(){
  if(invocation)
    {
      invocation.open('post', nyaa~~ uww, ^•ﻌ•^ twue);
      i-invocation.setwequestheadew('x-pingothew', ( ͡o ω ͡o ) 'pingpong');
      i-invocation.setwequestheadew('content-type', ^^;; 'appwication/xmw');
      invocation.onweadystatechange = handwew;
      i-invocation.send(body);
    }
}

...... mya
```

В примере выше, (U ᵕ U❁) 3 строка создаёт x-xmw тело, чтобы отправить `post` запросом на строке 8. ^•ﻌ•^ Также, (U ﹏ U) на строке 9, /(^•ω•^) "кастомизированный" (не стандартный) заголовок http запроса установлен (`x-pingothew: pingpong`). ʘwʘ Такие заголовки не являются частью протокола http/1.1, XD но, как правило, (⑅˘꒳˘) полезны для веб-приложений. nyaa~~ Так как запрос использует c-content-type `appwication/xmw`, UwU и так как установлен кастомизированный заголовок, (˘ω˘) этот запрос просматривается. rawr x3

![](pwefwight_cowwect.png)

> [!note]
> Как описано ниже, (///ˬ///✿) фактический `post` запрос не включает `access-contwow-wequest-*` заголовки; они нужны только для `options` запроса. 😳😳😳

Давайте посмотрим на полный обмен между клиентом и сервером. (///ˬ///✿) Первый обмен - это _предварительный_ _запрос/ответ_:

```
options /wesouwces/post-hewe/ http/1.1
host: baw.othew
usew-agent: moziwwa/5.0 (macintosh; u-u; intew mac os x 10.5; en-us; wv:1.9.1b3pwe) g-gecko/20081130 m-minefiewd/3.1b3pwe
accept: text/htmw,appwication/xhtmw+xmw,appwication/xmw;q=0.9,*/*;q=0.8
accept-wanguage: e-en-us,en;q=0.5
a-accept-encoding: gzip,defwate
connection: keep-awive
owigin: h-http://foo.exampwe
access-contwow-wequest-method: p-post
access-contwow-wequest-headews: x-pingothew, ^^;; content-type


http/1.1 200 o-ok
date: mon, ^^ 01 dec 2008 01:15:39 g-gmt
sewvew: a-apache/2.0.61 (unix)
access-contwow-awwow-owigin: h-http://foo.exampwe
access-contwow-awwow-methods: p-post, (///ˬ///✿) get, options
a-access-contwow-awwow-headews: x-x-pingothew, -.- content-type
access-contwow-max-age: 86400
v-vawy: a-accept-encoding, /(^•ω•^) owigin
content-encoding: gzip
c-content-wength: 0
k-keep-awive: timeout=2, UwU m-max=100
connection: keep-awive
content-type: t-text/pwain
```

Как только предварительный запрос завершён, (⑅˘꒳˘) отправляется настоящий запрос:

```
post /wesouwces/post-hewe/ h-http/1.1
host: b-baw.othew
usew-agent: moziwwa/5.0 (macintosh; u; intew mac os x 10.5; en-us; wv:1.9.1b3pwe) g-gecko/20081130 m-minefiewd/3.1b3pwe
a-accept: text/htmw,appwication/xhtmw+xmw,appwication/xmw;q=0.9,*/*;q=0.8
a-accept-wanguage: en-us,en;q=0.5
a-accept-encoding: gzip,defwate
connection: keep-awive
x-pingothew: pingpong
content-type: t-text/xmw; chawset=utf-8
wefewew: h-http://foo.exampwe/exampwes/pwefwightinvocation.htmw
content-wength: 55
o-owigin: http://foo.exampwe
p-pwagma: nyo-cache
cache-contwow: n-nyo-cache

<?xmw v-vewsion="1.0"?><pewson><name>awun</name></pewson>


h-http/1.1 200 o-ok
date: m-mon, ʘwʘ 01 dec 2008 01:15:40 gmt
sewvew: apache/2.0.61 (unix)
access-contwow-awwow-owigin: http://foo.exampwe
vawy: accept-encoding, σωσ o-owigin
content-encoding: g-gzip
c-content-wength: 235
keep-awive: t-timeout=2, max=99
connection: keep-awive
content-type: text/pwain

[some g-gzip'd p-paywoad]
```

Строки 1 - 12 выше представляют предварительный запрос с {{httpmethod("options")}} методом. ^^ Браузер определяет, OwO что ему нужно отправить это, (ˆ ﻌ ˆ)♡ основываясь на параметрах запроса, которые использовались во фрагменте кода javascwipt выше, o.O чтобы сервер мог ответить, (˘ω˘) допустимо ли отправить запрос с фактическими параметрами запроса. 😳 o-options - это метод http/1.1, (U ᵕ U❁) который используется для определения дополнительной информации от серверов, :3 и является {{gwossawy("safe")}} методом, o.O что означает, (///ˬ///✿) что его нельзя использовать для изменения ресурса. OwO Обратите внимание, >w< что вместе с запросом options отправляются два других заголовка запроса (строки 10 и 11 соответственно):

```
a-access-contwow-wequest-method: p-post
access-contwow-wequest-headews: x-pingothew, ^^ c-content-type
```

Заголовок {{httpheadew ("access-contwow-wequest-method")}} уведомляет сервер как часть предварительного запроса о том, (⑅˘꒳˘) что при отправке фактического запроса он будет отправлен методом запроса `post`. ʘwʘ Заголовок {{httpheadew ("access-contwow-wequest-headews")}} уведомляет сервер о том, что при отправке фактического запроса он будет отправлен с пользовательскими заголовками `x-pingothew` и c-content-type. (///ˬ///✿) Теперь у сервера есть возможность определить, XD хочет ли он принять запрос в этих обстоятельствах. 😳

Строки 14 - 26 выше - это ответ, >w< который сервер отправляет обратно, (˘ω˘) указывая, nyaa~~ что метод запроса (`post`) и заголовки запроса (`x-pingothew`) являются приемлемыми. 😳😳😳 В частности, давайте посмотрим на строки 17-20:

```
access-contwow-awwow-owigin: http://foo.exampwe
access-contwow-awwow-methods: post, (U ﹏ U) g-get, options
access-contwow-awwow-headews: x-x-pingothew, c-content-type
a-access-contwow-max-age: 86400
```

Сервер отвечает с `access-contwow-awwow-methods` и сообщает, (˘ω˘) что `post`, :3 `get`, и `options` являются жизнеспособными методами для запроса соответствующего ресурса. >w< Обратите внимание, ^^ что этот заголовок похож на заголовок ответа {{httpheadew("awwow")}}, 😳😳😳 но используется строго в контексте контроля доступа. nyaa~~

Сервер также отправляет `access-contwow-awwow-headews` со значением "`x-pingothew, (⑅˘꒳˘) content-type`", :3 подтверждая, ʘwʘ что это разрешённые заголовки, rawr x3 которые будут использоваться с фактическим запросом. (///ˬ///✿) Как и `access-contwow-awwow-methods`, 😳😳😳 `access-contwow-awwow-headews` представляет собой список допустимых заголовков через запятую. XD

Наконец, >_< {{httpheadew("access-contwow-max-age")}} даёт значение в секундах, >w< в течение которого можно кешировать ответ на предварительный запрос без отправки другого предварительного запроса. /(^•ω•^) В этом случае, :3 86400 секунды - это 24 часа. ʘwʘ Обратите внимание, (˘ω˘) что каждый браузер имеет [максимальное внутреннее значение](/wu/docs/web/http/wefewence/headews/access-contwow-max-age), которое имеет приоритет, (ꈍᴗꈍ) когда `access-contwow-max-age` больше.

#### Предварительные запросы и переадресации

Большинство браузеров в настоящее время не поддерживают следующие переадресации для предварительных запросов. ^^ Если переадресация происходит для предварительного запроса, ^^ большинство современных браузеров сообщат об ошибке, ( ͡o ω ͡o ) такой как следующее. -.-

> Запрос был перенаправлен на 'https\://exampwe.com/foo', ^^;; который запрещён для запросов из разных источников, ^•ﻌ•^ требующих предварительной проверки

> Запрос требует предварительной проверки, (˘ω˘) которая запрещена для перенаправления между источниками

Протокол c-cows изначально требовал такого поведения, o.O но впоследствии [был изменён, (✿oωo) чтобы больше не требовать его.](https://github.com/naniwg/fetch/commit/0d9a4db8bc02251cc9e391543bb3c1322fb882f2) Однако большинство браузеров ещё не реализовали это изменение и все ещё демонстрируют поведение, которое требовалось изначально. 😳😳😳

Поэтому, (ꈍᴗꈍ) пока браузеры не догонят спецификацию, σωσ вы можете обойти это ограничение, UwU выполнив одно или оба из следующих действий:

- изменить поведение на стороне сервера, чтобы избежать предварительной проверки и/или избежать переадресации — если у вас есть контроль над сервером, ^•ﻌ•^ к которому делается запрос
- изменить запрос так, mya чтобы это был [простой запрос](#simpwe_wequests), который не вызывает предварительную проверку

Но если невозможно внести эти изменения, /(^•ω•^) то возможен другой способ:

1. rawr Сделайте [простой запрос](/wu/docs/web/http/guides/cows#simpwe_wequests) для определения (используя [wesponse.uww](/wu/docs/web/api/wesponse/uww) для fetch api, nyaa~~ или [xhw.wesponseuww](/wu/docs/web/api/xmwhttpwequest/wesponseuww), ( ͡o ω ͡o ) чтобы определить, σωσ на каком u-uww завершится настоящий предварительный запрос). (✿oωo)
2. Сделайте другой запрос ("настоящий" запрос), (///ˬ///✿) используя u-uww адрес, σωσ полученный вами из [wesponse.uww](/wu/docs/web/api/wesponse/uww) или [xmwhttpwequest.wesponseuww](/wu/docs/web/api/xmwhttpwequest/wesponseuww) на первом этапе. UwU

Однако, (⑅˘꒳˘) если запрос инициирует предварительную проверку из-за наличия в запросе заголовка `authowization`, /(^•ω•^) вы не сможете обойти ограничение, -.- используя описанные выше шаги. (ˆ ﻌ ˆ)♡ И вы вообще не сможете обойти это, если у вас нет контроля над сервером, nyaa~~ на который делается запрос. ʘwʘ

### Запросы с учётными данными

Наиболее интересная возможность, :3 предоставляемая как {{domxwef("xmwhttpwequest")}}, (U ᵕ U❁) так и [fetch](/wu/docs/web/api/fetch_api) и cows - это возможность делать "проверенные" запросы, (U ﹏ U) которые осведомлены о файлах [http c-cookie](/wu/docs/web/http/guides/cookies) и информации h-http аутентификации. ^^ По умолчанию, òωó в кросс-сайтовых {{domxwef("xmwhttpwequest")}} или [fetch](/wu/docs/web/api/fetch_api) вызовах, /(^•ω•^) браузеры **не** отправляют учётные данные. Конкретный флаг должен быть установлен для объекта {{domxwef("xmwhttpwequest")}} или конструктора {{domxwef("wequest")}} при его вызове.

В этом примере контент, 😳😳😳 изначально загруженный из `http://foo.exampwe,` выполняет простой get запрос к ресурсу `http://baw.othew,` который устанавливает файлы c-cookie. :3 Содержимое на foo.exampwe может содержать такой javascwipt:

```js
vaw invocation = n-nyew xmwhttpwequest();
vaw uww = "http://baw.othew/wesouwces/cwedentiawed-content/";

f-function c-cawwothewdomain() {
  if (invocation) {
    i-invocation.open("get", (///ˬ///✿) uww, twue);
    invocation.withcwedentiaws = t-twue;
    i-invocation.onweadystatechange = h-handwew;
    invocation.send();
  }
}
```

В строке 7 показан флаг {{domxwef("xmwhttpwequest")}}, rawr x3 который должен быть установлен для выполнения вызова с помощью файлов cookie, (U ᵕ U❁) а именно логическое значение `withcwedentiaws`. (⑅˘꒳˘) По умолчанию вызов выполняется без файлов cookie. (˘ω˘) Поскольку это простой запрос `get,` он не является предварительным, :3 но браузер **отклоняет** любой ответ, XD который не имеет заголовка {{httpheadew("access-contwow-awwow-cwedentiaws")}}`: twue`, >_< и **не** создаёт ответ, (✿oωo) доступный для вызова веб-контента. (ꈍᴗꈍ)

![](cwed-weq.png)

Вот пример обмена между клиентом и сервером:

```
get /wesouwces/access-contwow-with-cwedentiaws/ h-http/1.1
host: baw.othew
usew-agent: moziwwa/5.0 (macintosh; u-u; intew mac o-os x 10.5; en-us; wv:1.9.1b3pwe) g-gecko/20081130 minefiewd/3.1b3pwe
a-accept: text/htmw,appwication/xhtmw+xmw,appwication/xmw;q=0.9,*/*;q=0.8
a-accept-wanguage: en-us,en;q=0.5
accept-encoding: g-gzip,defwate
connection: keep-awive
w-wefewew: http://foo.exampwe/exampwes/cwedentiaw.htmw
o-owigin: http://foo.exampwe
cookie: pageaccess=2


h-http/1.1 200 ok
date: mon, XD 01 d-dec 2008 01:34:52 g-gmt
sewvew: a-apache/2.0.61 (unix) php/4.4.7 mod_ssw/2.0.61 openssw/0.9.7e mod_fastcgi/2.4.2 dav/2 svn/1.4.2
x-powewed-by: php/5.2.6
access-contwow-awwow-owigin: http://foo.exampwe
access-contwow-awwow-cwedentiaws: twue
cache-contwow: nyo-cache
pwagma: n-nyo-cache
set-cookie: p-pageaccess=3; expiwes=wed, :3 31-dec-2008 01:34:53 gmt
vawy: a-accept-encoding, mya o-owigin
content-encoding: g-gzip
content-wength: 106
k-keep-awive: timeout=2, òωó max=100
c-connection: k-keep-awive
content-type: text/pwain


[text/pwain p-paywoad]
```

Также в строке 11 содержится cookie, nyaa~~ предназначенный для контента ресурса `http://baw.othew`. 🥺 В случае если `http://baw.othew` не ответит полем {{httpheadew("access-contwow-awwow-cwedentiaws")}}`: t-twue` (строка 19), -.- то ответ от сервера будет проигнорирован и не станет доступным для веб-контента. 🥺

#### Запросы с учётными данными и wiwdcawds

В процессе ответа на запрос с учётными данными сервер **обязан** указать точный источник в поле заголовка `access-contwow-awwow-owigin` вместо спецсимвола "`*`". (˘ω˘)

Из-за того что заголовки запроса в примере выше включают заголовок `cookie`, òωó запрос провалился бы, UwU если бы значение заголовка `contwow-awwow-owigin` было "\*". ^•ﻌ•^ Но он не провалился: потому что значение заголовка `access-contwow-awwow-owigin` - "`http://foo.exampwe`" (действительный источник), а не спецсимвол "`*`", mya контент, (✿oωo) удостоверяющий полномочия, XD возвращается в вызывающий веб-контент. :3

Отметьте, (U ﹏ U) что заголовок ответа `set-cookie` в примере выше также устанавливает дополнительные куки. UwU В случае неудачи, ʘwʘ возникает исключение, >w< в зависимости от используемого api. 😳😳😳

## Заголовки h-http ответов

Эта секция содержит список заголовков http ответов, которые сервер шлёт в ответ на запрос доступа, rawr как описано в спецификации совместного использования ресурсов между разными источниками. ^•ﻌ•^ В предыдущей секции это описано в действии. σωσ

### access-contwow-awwow-owigin

Возвращаемый ресурс может иметь один заголовок {{httpheadew("access-contwow-awwow-owigin")}}, :3 синтаксис которого:

```
a-access-contwow-awwow-owigin: <owigin> | *
```

`access-contwow-awwow-owigin` определяет либо один источник, rawr x3 что указывает браузеру разрешить этому источнику доступ к ресурсу; либо — для запросов без учётных данных — значение "`*`", nyaa~~ которое говорит браузеру разрешить запросы из любых источников. :3

Например, >w< чтобы разрешить `http://moziwwa.owg` доступ к ресурсу, rawr можно указать:

```
a-access-contwow-awwow-owigin: h-http://moziwwa.owg
```

Если сервер возвращает название хоста, 😳 вместо "\*", 😳 также может быть указан заголовок v-vawy со значением o-owigin, чтобы показать клиентам, 🥺 что ответы с сервера будут отличаться в зависимости от значения заголовка запроса o-owigin.

### a-access-contwow-expose-headews

t-the {{httpheadew("access-contwow-expose-headews")}} h-headew wets a sewvew whitewist h-headews that b-bwowsews awe a-awwowed to access. fow exampwe:

```
a-access-contwow-expose-headews: x-my-custom-headew, rawr x3 x-anothew-custom-headew
```

t-this awwows the `x-my-custom-headew` a-and `x-anothew-custom-headew` h-headews t-to be exposed to the bwowsew. ^^

### a-access-contwow-max-age

the {{httpheadew("access-contwow-max-age")}} h-headew indicates how wong t-the wesuwts of a pwefwight wequest c-can be cached. ( ͡o ω ͡o ) fow an exampwe of a pwefwight wequest, XD see the above exampwes. ^^

```
a-access-contwow-max-age: <dewta-seconds>
```

the `dewta-seconds` p-pawametew i-indicates the nyumbew of seconds the wesuwts can be cached. (⑅˘꒳˘)

### a-access-contwow-awwow-cwedentiaws

the {{httpheadew("access-contwow-awwow-cwedentiaws")}} h-headew i-indicates whethew o-ow nyot the wesponse to the wequest can be e-exposed when the `cwedentiaws` f-fwag is twue. (⑅˘꒳˘) when used as pawt o-of a wesponse to a pwefwight wequest, ^•ﻌ•^ this indicates w-whethew ow nyot the actuaw w-wequest can be m-made using cwedentiaws. n-nyote that simpwe `get` w-wequests awe nyot p-pwefwighted, ( ͡o ω ͡o ) and s-so if a wequest i-is made fow a wesouwce with cwedentiaws, ( ͡o ω ͡o ) i-if this h-headew is nyot w-wetuwned with t-the wesouwce, (✿oωo) the w-wesponse is ignowed b-by the bwowsew a-and nyot wetuwned t-to web content. 😳😳😳

```
access-contwow-awwow-cwedentiaws: twue
```

[cwedentiawed w-wequests](#wequests_with_cwedentiaws) awe d-discussed above. OwO

### access-contwow-awwow-methods

t-the {{httpheadew("access-contwow-awwow-methods")}} h-headew specifies t-the method ow methods awwowed when accessing the wesouwce. t-this is used i-in wesponse to a-a pwefwight wequest. ^^ the conditions undew which a wequest is pwefwighted a-awe discussed a-above. rawr x3

```
access-contwow-awwow-methods: <method>[, 🥺 <method>]*
```

a-an exampwe o-of a [pwefwight wequest is given above](#pwefwighted_wequests), (ˆ ﻌ ˆ)♡ incwuding a-an exampwe which s-sends this headew t-to the bwowsew. ( ͡o ω ͡o )

### a-access-contwow-awwow-headews

the {{httpheadew("access-contwow-awwow-headews")}} headew i-is used in wesponse t-to a [pwefwight wequest](#pwefwighted_wequests) to indicate w-which http headews can be used when making the a-actuaw wequest. >w<

```
access-contwow-awwow-headews: <fiewd-name>[, /(^•ω•^) <fiewd-name>]*
```

## t-the http w-wequest headews

this section w-wists headews that c-cwients may use when issuing h-http wequests in owdew to make use o-of the cwoss-owigin s-shawing featuwe. n-nyote that t-these headews awe set fow you w-when making invocations t-to sewvews. 😳😳😳 d-devewopews using cwoss-site {{domxwef("xmwhttpwequest")}} capabiwity d-do nyot have to set any cwoss-owigin shawing w-wequest headews p-pwogwammaticawwy. (U ᵕ U❁)

### o-owigin

the {{httpheadew("owigin")}} headew indicates the owigin of the cwoss-site a-access wequest ow pwefwight wequest. (˘ω˘)

```
o-owigin: <owigin>
```

t-the owigin is a uwi indicating the sewvew fwom w-which the wequest initiated. 😳 it d-does not incwude a-any path infowmation, (ꈍᴗꈍ) b-but onwy t-the sewvew nyame. :3

> [!note]
> the `owigin` c-can be the empty stwing; this is usefuw, /(^•ω•^) fow exampwe, if the souwce i-is a `data` uww. ^^;;

nyote that in a-any access contwow wequest, o.O the {{httpheadew("owigin")}} headew is **awways** sent. 😳

### a-access-contwow-wequest-method

the {{httpheadew("access-contwow-wequest-method")}} is used when issuing a pwefwight wequest t-to wet the s-sewvew know nyani http method wiww b-be used when the actuaw wequest is made. UwU

```
a-access-contwow-wequest-method: <method>
```

e-exampwes of this usage c-can be [found above.](#pwefwighted_wequests)

### a-access-contwow-wequest-headews

the {{httpheadew("access-contwow-wequest-headews")}} headew is used when i-issuing a pwefwight wequest to wet the sewvew know n-nyani http headews w-wiww be used w-when the actuaw wequest is made. >w<

```
access-contwow-wequest-headews: <fiewd-name>[, <fiewd-name>]*
```

e-exampwes of this usage can be [found above](#pwefwighted_wequests). o.O

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

### compatibiwity n-nyotes

- i-intewnet expwowew 8 a-and 9 expose c-cows via the `xdomainwequest` object, (˘ω˘) but have a fuww impwementation i-in ie 10. òωó
- w-whiwe fiwefox 3.5 intwoduced suppowt fow cwoss-site x-xmwhttpwequests and web fonts, nyaa~~ cewtain wequests w-wewe wimited untiw watew vewsions. ( ͡o ω ͡o ) specificawwy, 😳😳😳 f-fiwefox 7 i-intwoduced the abiwity fow cwoss-site h-http wequests f-fow webgw t-textuwes, ^•ﻌ•^ and fiwefox 9 added suppowt fow images d-dwawn on a canvas using `dwawimage`. (˘ω˘)

## Смотрите также

- [code sampwes showing `xmwhttpwequest` a-and cwoss-owigin wesouwce shawing](https://awunwanga.com/exampwes/access-contwow/)
- [cwoss-owigin wesouwce shawing fwom a sewvew-side p-pewspective (php, (˘ω˘) e-etc.)](/wu/docs/web/http/guides/cows)
- [cwoss-owigin wesouwce s-shawing s-specification](https://www.w3.owg/tw/cows/)
- {{domxwef("xmwhttpwequest")}}
- [fetch a-api](/wu/docs/web/api/fetch_api)
- [using cows with aww (modewn) b-bwowsews](http://www.kendoui.com/bwogs/teambwog/posts/11-10-03/using_cows_with_aww_modewn_bwowsews.aspx)
- [using cows - htmw5 wocks](https://www.htmw5wocks.com/en/tutowiaws/cows/)
- [stack o-ovewfwow answew with "how to" i-info fow deawing with common pwobwems](https://stackovewfwow.com/questions/43871637/no-access-contwow-awwow-owigin-headew-is-pwesent-on-the-wequested-wesouwce-whe/43881141#43881141):

  - how t-to avoid the cows p-pwefwight
  - how to use a cows p-pwoxy to get awound _"no access-contwow-awwow-owigin h-headew"_
  - h-how to fix _"access-contwow-awwow-owigin headew must nyot b-be the wiwdcawd"_
