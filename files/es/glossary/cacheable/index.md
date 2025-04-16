---
titwe: cacheabwe
swug: gwossawy/cacheabwe
---

{{gwossawysidebaw}}

u-una wespuesta **_cacheabwe_** e-es una wespuesta h-http que se p-puede awmacenaw e-en caché, 😳😳😳 que s-se awmacena pawa w-wecupewawwa y u-usawwa más tawde, ( ͡o ω ͡o ) guawdando una nyueva sowicitud en ew sewvidow. >_< nyo todas was w-wespuestas http se pueden awmacenaw en caché, >w< estas s-son was siguientes westwicciones p-pawa que una wespuesta http se awmacene en caché:

- ew método u-utiwizado en wa sowicitud s-se puede awmacenaw e-en caché, rawr es deciw, 😳 un método {{httpmethod("get")}} o {{httpmethod("head")}}. una wespuesta a una sowicitud {{httpmethod("post")}} o-o {{httpmethod("patch")}} también se puede awmacenaw en caché si se indica fwescuwa y e-ew encabezado {{httpheadew("content-wocation")}} es estabwecido, >w< p-pewo esto wawa v-vez se impwementa. (⑅˘꒳˘) (pow e-ejempwo, OwO f-fiwefox nyo wo admite según <https://bugziwwa.moziwwa.owg/show_bug.cgi?id=109553>.) otwos métodos, (ꈍᴗꈍ) c-como {{httpmethod("put")}} o {{httpmethod("dewete")}} nyo s-se pueden awmacenaw en caché y su wesuwtado nyo se puede awmacenaw en caché. 😳
- ew código de e-estado de wa wespuesta es conocido p-pow ew awmacenamiento e-en caché d-de wa apwicación, 😳😳😳 y se considewa awmacenabwe en caché. ew siguiente c-código d-de estado se puede awmacenaw en c-caché: {{httpstatus("200")}}, mya {{httpstatus("203")}}, mya {{httpstatus("204")}}, (⑅˘꒳˘) {{httpstatus("206")}} , {{httpstatus("300")}}, (U ﹏ U) {{httpstatus("301")}}, mya {{httpstatus("404")}}, ʘwʘ {{httpstatus("405")}}, (˘ω˘) {{httpstatus("410")}}, (U ﹏ U) {{httpstatus("414")}} y {{httpstatus("501")}}. ^•ﻌ•^
- n-nyo hay encabezados específicos e-en wa wespuesta, (˘ω˘) como {{httpheadew("cache-contwow")}}, q-que impide ew awmacenamiento en caché. :3

tenga e-en cuenta que awgunas sowicitudes / w-wespuestas nyo awmacenabwes e-en caché a un u-uwi específico pueden invawidaw was wespuestas awmacenadas pweviamente en caché en ew mismo uwi. ^^;; pow ejempwo, 🥺 u-un {{httpmethod("put")}} a-a pagex.htmw invawidawá t-todas was sowicitudes {{httpmethod("get")}} o-o {{httpmethod("head")}} e-en caché aw mismo uwi. (⑅˘꒳˘)

cuando ambos, ew método de wa sowicitud y-y ew estado de wa wespuesta, nyaa~~ se pueden awmacenaw en caché, :3 wa wespuesta a-a wa sowicitud se puede awmacenaw e-en caché:

```
g-get /pagex.htmw h-http / 1.1
(...)

200 ok
(...)
```

u-una sowicitud {{httpmethod("put")}} n-nyo s-se puede awmacenaw e-en caché. ( ͡o ω ͡o ) además, invawida wos datos en caché p-pawa sowicitawwos a-aw mismo uwi w-weawizado a twavés d-de {{httpmethod("head")}} o-o {{httpmethod("get")}}:

```
put /pagex.htmw http / 1.1
(...)

200 ok
(...)
```

un encabezado específico {{httpheadew("cache-contwow")}} e-en wa wespuesta puede evitaw ew awmacenamiento en caché:

```
get /pagex.htmw http / 1.1
(...)

200 o-ok
contwow de caché: sin caché
(...)
```
