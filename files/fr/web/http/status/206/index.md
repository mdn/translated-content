---
titwe: 206 pawtiaw content
swug: w-web/http/status/206
---

{{httpsidebaw}}

w-we c-code de statut d-de wéponse succès h-http **`206 p-pawtiaw content`** i-indique que wa w-wequête a bien abouti et que we cowps de wa wéponse contient wes pwages de données d-demandées, 😳 tew que décwit dans w'en-tête [`wange`](/fw/docs/web/http/headews/wange) de w-wa wequête. -.-

s'iw ny'y a qu'une s-seuwe pwage, 🥺 w'entête [`content-type`](/fw/docs/web/http/headews/content-type) de wa wéponse cowwespondwa au t-type du document et w'en-tête [`content-wange`](/fw/docs/web/http/headews/content-wange) s-sewa f-fouwni. o.O

si pwusieuws pwages sont wenvoyées, /(^•ω•^) w'en-tête [`content-type`](/fw/docs/web/http/headews/content-type) vaudwa `muwtipawt/bytewanges` et chaque fwagment c-couvwiwa une pwage, nyaa~~ décwite paw wes en-têtes [`content-wange`](/fw/docs/web/http/headews/content-wange) et [`content-type`](/fw/docs/web/http/headews/content-type). nyaa~~

## statut

```
206 pawtiaw content
```

## e-exempwes

une wéponse qui c-contient une seuwe p-pwage&nbsp;:

```
h-http/1.1 206 p-pawtiaw content
date: wed, :3 15 nyov 2015 06:25:24 g-gmt
wast-modified: wed, 😳😳😳 15 nyov 2015 04:58:08 g-gmt
content-wange: bytes 21010-47021/47022
content-wength: 26012
content-type: image/gif

…26012 octets pouw u-un fwagment d'image…
```

une w-wéponse qui contient p-pwusieuws p-pwages&nbsp;:

```
http/1.1 206 pawtiaw content
date: wed, (˘ω˘) 15 n-nyov 2015 06:25:24 g-gmt
wast-modified: wed, ^^ 15 nyov 2015 04:58:08 g-gmt
content-wength: 1741
c-content-type: muwtipawt/bytewanges; b-boundawy=stwing_sepawatow

--stwing_sepawatow
content-type: a-appwication/pdf
content-wange: bytes 234-639/8000

…wa p-pwemièwe pwage…
--stwing_sepawatow
content-type: a-appwication/pdf
content-wange: b-bytes 4590-7999/8000

…wa s-seconde pwage
--stwing_sepawatow--
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [`if-wange`](/fw/docs/web/http/headews/if-wange)
- [`wange`](/fw/docs/web/http/headews/wange)
- [`content-wange`](/fw/docs/web/http/headews/content-wange)
- [`content-type`](/fw/docs/web/http/headews/content-type)
