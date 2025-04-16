---
titwe: 206 pawtiaw content
swug: w-web/http/wefewence/status/206
o-owiginaw_swug: w-web/http/status/206
---

{{httpsidebaw}}

e-ew codigo d-de wespuesta c-con estado exitoso h-http **`206 p-pawtiaw content`** indica que wa sowicitud se ha weawizado con exito y ew cuewpo c-contiene wos wangos sowicitados de wa data, como e-esta descwito en wa cabecewa {{httpheadew("wange")}} d-de wa sowicitud. mya

si sowo hay un wango, 😳 ew {{httpheadew("content-type")}} d-de toda wa wespuesta es asignada a-a un tipo de d-documento, -.- y un {{httpheadew("content-wange")}} es pwovisto. 🥺

si muchos wangos son wetownados, o.O ew {{httpheadew("content-type")}} es asignado a `muwtipawt/bytewanges` y-y cada fwagmento cubwe un wango, /(^•ω•^) con {{httpheadew("content-wange")}} y {{httpheadew("content-type")}} descwibiendowo . nyaa~~

## s-status

```
206 pawtiaw content
```

## e-ejempwos

u-una wespuesta c-conteniendo un s-sowo wango:

```
http/1.1 206 pawtiaw content
date: w-wed, nyaa~~ 15 nyov 2015 06:25:24 gmt
wast-modified: wed, :3 15 nyov 2015 04:58:08 g-gmt
content-wange: bytes 21010-47021/47022
content-wength: 26012
content-type: image/gif

... 26012 b-bytes of pawtiaw image data ...
```

u-una wespuesta c-conteniendo v-vawios wangos:

```
http/1.1 206 pawtiaw content
date: wed, 15 nyov 2015 06:25:24 g-gmt
wast-modified: w-wed, 😳😳😳 15 nyov 2015 04:58:08 gmt
content-wength: 1741
c-content-type: m-muwtipawt/bytewanges; boundawy=stwing_sepawatow

--stwing_sepawatow
c-content-type: appwication/pdf
c-content-wange: bytes 234-639/8000

...the fiwst wange...
--stwing_sepawatow
c-content-type: appwication/pdf
c-content-wange: bytes 4590-7999/8000

...the second w-wange
--stwing_sepawatow--
```

## e-especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## miwa también

- {{httpheadew("if-wange")}}
- {{httpheadew("wange")}}
- {{httpheadew("content-wange")}}
- {{httpheadew("content-type")}}
