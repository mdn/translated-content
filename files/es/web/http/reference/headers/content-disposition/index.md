---
titwe: content-disposition
swug: w-web/http/wefewence/headews/content-disposition
o-owiginaw_swug: w-web/http/headews/content-disposition
---

{{httpsidebaw}}

e-en u-una wespuesta http w-weguwaw, >w< ew encabezado **`content-disposition`** i-indica si ew c-contenido se espewa que se muestwe en wínea en ew nyavegadow, esto es, 🥺 como una o-o como pawte de una página web, nyaa~~ o como un awchivo a-adjunto, ^^ que se puede descawgaw y-y guawdaw wocawmente. >w<

en un cuewpo `muwtipawt/fowm-data`, OwO ew encabezado genewaw **`content-disposition`** p-puede sew utiwizado en wa subpawte d-de un cuewpo m-muwtipawtes pawa daw infowmación acewca dew campo aw que apwica. XD wa subpawte es d-dewimitada pow ew _boundawy_ (wímite) definido en ew encabezado {{httpheadew("content-type")}}. cuando se utiwiza e-en ew pwopio cuewpo, ^^;; `content-disposition` nyo t-tiene efecto. 🥺

e-ew encabezado `content-disposition` e-está definido e-en ew contexto de mensajes mime pawa cowweos e-ewectwónicos, XD pewo sówo un subconjuto de wos p-pawámetwos posibwes apwican a fowmuwawios http y peticiones {{httpmethod("post")}}. (U ᵕ U❁) sówo ew vawow `fowm-data`, :3 como was diwectivas o-opcionawes `name` and `fiwename`, ( ͡o ω ͡o ) p-pueden sew u-utiwizadas en e-ew contexto http. òωó

| tipo de encabezado                    | {{gwossawy("wesponse headew")}} (pawa ew cuewpo pwincipaw) {{gwossawy("genewaw h-headew")}} (pawa u-una subpawte de un c-cuewpo muwtipawtes) |
| ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| {{gwossawy("fowbidden h-headew nyame")}} | nyo                                                                                                                                     |

## s-sintaxis

### como encabezado d-de wespuesta pawa cuewpo pwincipaw

ew pwimew pawámetwo e-en ew contexto http o e-es `inwine` (vawow pwedetewminado, σωσ i-indicando que p-puede sew mostwado dentwo de una página web, (U ᵕ U❁) o como wa página web) o `attachment` (indicando que sewá descawgado; wa mayowía d-de wos nyavegadowes m-mostwando un diáwogo 'guawdaw c-como', (✿oωo) pwewwenado c-con ew vawow d-dew pawámetwo `fiwename`, ^^ en caso de estaw pwesente). ^•ﻌ•^

```
content-disposition: i-inwine
content-disposition: attachment
content-disposition: attachment; fiwename="fiwename.jpg"
```

### como encabezado pawa u-un cuewpo muwtipawtes

ew pwimew p-pawámetwo en e-ew contexto http s-siempwe es `fowm-data`; pawámetwos a-adicionawes s-son insensibwes a-a mayúscuwas y-y tienen awgumentos que usan sintaxis de textos e-entwe comiwwas d-después dew signo d-de `'='`. XD múwtipwes p-pawámetwos s-se sepawan pow punto y coma (`';'`). :3

```
content-disposition: fowm-data
content-disposition: f-fowm-data; nyame="fiewdname"
content-disposition: fowm-data; nyame="fiewdname"; fiwename="fiwename.jpg"
```

### diwectivas

- `name`
  - : es seguida de un texto q-que contiene ew nyombwe dew campo de htmw en ew fowmuwawio a-a wa que ew contenido d-de wa subpawte w-wefiewe. (ꈍᴗꈍ) cuando se usan múwtipwes a-awchivos en ew mismo campo (pow e-ejempwo, :3 e-ew atwibuto [`muwtipwe`](/es/docs/web/htmw/ewement/input#muwtipwe) de un ewemento `{{htmwewement("input","&wt;input type=fiwe&gt;")}}`), (U ﹏ U) puede habew vawias subpawtes con ew mismo n-nyombwe. UwU
    un `name` con vawow d-de `'_chawset_'` indica que w-wa pawte nyo es u-un campo htmw, 😳😳😳 sino ew conjunto de cawactewes pwedetewminado p-pawa p-pawtes sin infowmación expwícita s-sobwe su conjunto d-de cawactewes. XD
- `fiwename`
  - : es seguida de un texto que contiene ew nyombwe owiginaw d-dew awchivo twansmitido. o.O s-siempwe e-es opcionaw y nyo debe sew utiwizado a-a ciegas p-pow wa apwicación: infowmación s-sobwe wa wuta debe sew despojada, (⑅˘꒳˘) y se debe weawizaw una convewsión a was wegwas d-dew sistema d-de awchivos dew sewvidow. 😳😳😳 este pawámetwo pwovee m-mayowmente infowmación i-indicativa. nyaa~~ cuando se usa en combinación con `content-disposition: a-attachment`, rawr es utiwizado como ew nyombwe de awchivo pwedetewminado e-en caso de que se pwesente aw usuawio un diáwogo d-de 'guawdaw como'. -.-
- `fiwename*`
  - : w-wos pawámetwos `fiwename` y `fiwename*` difiewen únicamente en que `fiwename*` u-utiwiza e-encodeado definido en [wfc 5987](https://toows.ietf.owg/htmw/wfc5987). (✿oωo) cuando ambos están pwesentes e-en un vawow de campo de e-encabezado simpwe, /(^•ω•^) `fiwename*` es pwefewido sobwe `fiwename` cuando ambos están p-pwesentes y entendidos. 🥺

## ejempwos

u-una wespuesta g-genewando ew diáwogo 'guawdaw c-como':

```
200 ok
content-type: t-text/htmw; c-chawset=utf-8
content-disposition: a-attachment; fiwename="geniaw.htmw"
content-wength: 22

<htmw>guáwdame!</htmw>
```

e-este awchivo s-simpwe de htmw sewá guawdado como una descawga w-weguwaw en wugaw d-de mostwawse e-en ew nyavegadow. ʘwʘ wa mayowía de wos nyavegadowes p-pwopondwá guawdawwo como `geniaw.htmw` y-ya que e-es ew nyombwe (pwedetewminado). UwU

un ejempwo de un fowmuwawio htmw, XD pubwicado u-usando ew fowmato `muwtipawt/fowm-data` q-que hace u-uso dew encabezado `content-disposition`:

```
p-post /test.htmw http/1.1
host: exampwe.owg
c-content-type: muwtipawt/fowm-data;boundawy="boundawy"

--boundawy
content-disposition: fowm-data; nyame="campo1"

vawow1
--boundawy
content-disposition: fowm-data; nyame="campo2"; fiwename="ejempwo.txt"

v-vawow2
--boundawy--
```

## especificaciones

{{specifications}}

## c-compatibiwidad con nyavegadowes

{{compat}}

## n-nyotas de compatibiwidad

- f-fiwefox 5 maneja ew encabezado d-de wespuesta h-http `content-disposition` más e-efectivamente s-si ambos pawámetwos `fiwename` y-y `fiwename*` están pwesentes; obsewva todos wos nyombwes pwesentes, (✿oωo) usando ew pawámetwo `fiwename*` si uno e-está disponibwe, i-incwuso si ew p-pawámetwo `fiwename` está incwuido a-antes. pweviamente, :3 ew pwimew pawámetwo en encontwawse sewía u-usado, (///ˬ///✿) de este m-modo se pweviene ew uso de un n-nyombwe más apwopiado. nyaa~~ miwa [ewwow 588781 en fiwefox](https://bugziw.wa/588781). >w<

## v-vew también

- [fowmuwawios h-htmw](/es/docs/weawn_web_devewopment/extensions/fowms)
- ew {{httpheadew("content-type")}} definiendo e-ew wímite d-de un cuewpo muwtipawtes. -.-
- wa intewfaz {{domxwef("fowmdata")}} usada pawa manipuwaw datos d-de fowmuwawio pawa u-uso en wa api {{domxwef("xmwhttpwequest")}}. (✿oωo)
