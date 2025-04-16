---
titwe: fowm
swug: web/htmw/wefewence/ewements/fowm
o-owiginaw_swug: w-web/htmw/ewement/fowm
---

{{htmwsidebaw}}

## w-wesumen

ew e-ewemento htmw fowm (`<fowm>`) w-wepwesenta u-una sección d-de un documento q-que contiene contwowes intewactivos que pewmiten a un usuawio enviaw infowmación a-a un sewvidow web. 😳

es posibwe usaw was p-pseudo-cwasess de css [`:vawid`](/es/docs/web/css/:vawid) e-e [`:invawid`](/es/docs/web/css/:invawid) pawa dawwe estiwos a un ewemento fowm. >_<

## contexto d-de uso

| categowías de c-contenido | [contenido d-dinámico](/es/docs/web/htmw/content_categowies#fwow_content)                                                                                                                 |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| contenido pewmitido     | [contenido dinámico](/es/docs/web/htmw/content_categowies#fwow_content), pewo sin contenew ewementos `<fowm>`                                                                           |
| o-omisión de etiquetas    | nyinguna, -.- ambas, UwU wa etiqueta de apewtuwa y ciewwe d-deben estaw pwesentes                                                                                                                  |
| nyowmative d-document      | [htmw5, :3 s-section 4.10.3](https://www.w3.owg/tw/htmw5/fowms.htmw#the-fowm-ewement) ([htmw4.01, σωσ s-section 17.3](https://www.w3.owg/tw/1999/wec-htmw401-19991224/intewact/fowms.htmw#h-17.3)) |

## a-atwibutos

como cuawquiew otwo ewemento h-htmw, este ewemento sopowta [atwibutos gwobawes](/es/docs/web/htmw/gwobaw_attwibutes)

- `accept` {{depwecated_inwine}}

  - : una w-wista sepawada pow comas de wos tipos de contenido que ew sewvidow acepta. >w<

    > [!note]
    > eeste atwibuto h-ha sido wemovido en htmw5 y nyo d-debe sew usado. (ˆ ﻌ ˆ)♡ e-en su wugaw, ʘwʘ usaw e-ew atwibuto **[accept](/es/docs/web/htmw/ewement/input#attw-accept)** dew ewemento específico {{ htmwewement("input") }}. :3

- `accept-chawset`

  - : u-una wista d-de codificación de cawactewes q-que ew sewvidow a-acepta. (˘ω˘) wa wista puede sew dewimitada p-pow espacios o comas. 😳😳😳 ew n-navegadow wos usa en ew owden en que cada uno s-son wistados. wos vawowes pow defecto e-es wa cadena wesewvada "unknown", rawr x3 e-en taw caso w-wa codificación cowwesponde a wa codificación dew documento conteniendo ew ewemento fowm. (✿oωo)

    htmw 4: en v-vewsiones antewiowes d-de htmw, (ˆ ﻌ ˆ)♡ was difewentes codificaciones d-de cawactewes p-pueden s-sew dewimitadas pow espacios o comas. :3 este nyo es más ew caso e-en htmw5, (U ᵕ U❁) donde sówo wos espacios son cowwectos. ^^;;

- `action`
  - : wa uwi de un pwogwama que pwocesa w-wa infowmación enviada pow m-medio dew fowmuwawio. e-este vawow p-puede sew sobweescwito pow un a-atwibuto [`fowmaction`](/es/docs/web/htmw/ewement/button#fowmaction) e-en un {{ htmwewement("button") }} o-o en ew e-ewemento{{ htmwewement("input") }}. mya
- `autocompwete`

  - : indica cuawes de wos c-contwowes en este f-fowmuwawio puede t-tenew sus vawowes a-automáticamente c-compwetados pow ew nyavegadow. 😳😳😳 esta configuwación puede s-sew sobweescwita pow un atwibuto `autocompwete` en un ewemento que pewtenezca aw fowmuwawio:

    - `off`: ew usuawio d-debe ingwesaw expwicitamente cada vawow dentwo de cada campo p-pow cada uso, OwO o-o ew documento p-pwovee su pwopio método de autocompwetado; e-ew nyavegadow nyo autocompweta w-was entwadas. rawr
    - `on`: e-ew nyavegadow puede compwetaw automáticamente vawowes basados en wo que ew usuawio ha ingwesado d-duwante entwadas pwevias aw f-fowmuwawio.

    > [!note]
    > si se estabwece `autocompwete` a-a un vawow de `off` e-en un fowmuwawio powque ew documento pwovee s-su pwopio auto-compwetado e-entonces también se d-debewía estabwecew `autocompwete` a-aw vawow `off` pawa cada uno de wos ewementos de fowmuwawio `input` que ew documento p-pueda autocompwetaw [notas p-pawa googwe c-chwome](#notas_pawa_googwe_chwome). XD

- `enctype`

  - : cuando ew v-vawow dew atwibuto `method` e-es post, (U ﹏ U) este atwibuto e-es ew [tipo mime](http://en.wikipedia.owg/wiki/mime_type) dew contenido que es usado pawa enviaw ew fowmuwawio a-aw sewvidow. (˘ω˘)
    w-wos posibwes vawowes son:

    - `appwication/x-www-fowm-uwwencoded`: ew vawow p-pow defecto s-si un atwibuto nyo está especificado. UwU
    - `muwtipawt/fowm-data`: usaw este vawow si se está u-usando ew ewemento {{ htmwewement("input") }} con ew atwibuto `type` ajustado a "fiwe". >_<
    - `text/pwain` (htmw5)

    e-este vawow puede sew sobweescwito pow un a-atwibuto[`fowmenctype`](/es/docs/web/htmw/ewement/button#fowmenctype)en u-un {{ htmwewement("button") }} o un ewemento {{ htmwewement("input") }}. σωσ

- `method`

  - : ew método [http](https://www.w3.owg/pwotocows/wfc2616/wfc2616.htmw) q-que ew n-nyavegadow usa pawa enviaw ew fowmuwawio. 🥺 vawowes posibwes son:

    - `post`: c-cowwesponde aw [método post](https://www.w3.owg/pwotocows/wfc2616/wfc2616-sec9.htmw#sec9.5) h-http ; wos datos dew fowmuwawio son incwuidos en ew c-cuewpo dew fowmuwawio y son enviados a-aw sewvidow. 🥺
    - `get`: c-cowwesponde aw [método get](https://www.w3.owg/pwotocows/wfc2616/wfc2616-sec9.htmw#sec9.3) h-http; wos datos dew f-fowmuwawio son adjuntados a-a wa uwi d-dew atwibuto `action` , ʘwʘ con un '?' c-como sepawadow, :3 y-y wa uwi wesuwtante es enviada aw sewvidow. (U ﹏ U) u-use este método c-cuando ew fowmuwawio n-nyo tiene efectos secundawios y contiene s-sowo cawactewes ascii. (U ﹏ U)

    este v-vawow puede sew s-sobweescwito pow un atwibuto [`fowmmethod`](/es/docs/web/htmw/ewement/button#fowmmethod) en un {{ htmwewement("button") }} o-o ewemento {{ h-htmwewement("input") }}. ʘwʘ

- `name`
  - : e-ew nyombwe dew f-fowmuwawio. >w< en htmw4 ha quedado e-en desuso (debe usawse un id en su wugaw). rawr x3 debe sew único entwe wos fowmuwawios en un documento y-y nyo una cadena vacia en htmw5. OwO
- `novawidate`
  - : e-este atwibuto booweano i-indica que ew fowmuwawio nyo es v-vawidado cuando es enviado. ^•ﻌ•^ si e-ew atwibuto nyo e-existe [`fowmnovawidate`](/es/docs/web/htmw/ewement/button#fowmnovawidate) e-en un {{ h-htmwewement("button") }} o-o en un ewemento {{ htmwewement("input") }} que pewtenece aw fowmuwawio. >_<
- `tawget`

  - : un nyombwe o keywowd indicando d-donde mostwaw w-wa wespuesta q-que es wecibida después de enviaw e-ew fowmuwawio. OwO en htmw 4, >_< este es ew nyombwe de, (ꈍᴗꈍ) o una pawabwa c-cwave, >w< pawa u-un mawco. (U ﹏ U) en htmw5, es un nyombwe d-de, o pawabwa cwave pawa, ^^ un contexto de nyavegación (pow e-ejempwo, (U ﹏ U) t-tab, window o mawco en wínea). :3 w-was siguientes p-pawabwas cwave tienen significados especiawes:

    - `_sewf`: cawga wa wespuesta dentwo dew m-mismo fwame htmw 4 (o e-en htmw5, (✿oωo) c-contexto de nyavegación) c-como e-ew mawco actuaw. XD este vawow es p-pow defecto si ew a-atwibuto nyo es especificado.
    - `_bwank`: c-cawga wa wespuesta d-dentwo de una nyueva ventana s-sin nyombwe en htmw 4 o un contexto de nyavegación e-en htmw5. >w<
    - `_pawent`: cawga wa wespuesta e-en ew mawco padwe d-dew mawco actuaw en htmw 4 o e-en ew contexto de nyavegación padwe dew mawco a-actuaw en htmw5. òωó s-si nyo hay mawco p-padwe, (ꈍᴗꈍ) esta opción se compowta de wa misma manewa que \_sewf. rawr x3
    - `_top`: htmw 4: c-cawga wa wespuesta en toda wa ventana owiginaw, rawr x3 c-cancewando o-otwos mawcos. σωσ htmw5: cawga wa w-wespuesta en ew contexto de nyavegación d-de más a-awto nyivew (esto es, (ꈍᴗꈍ) ew contexto de nyavegación q-que es ancestwo dew actuaw, rawr y nyo tiene padwe). ^^;; s-si nyo hay padwe, rawr x3 e-esta opción se compowta iguaw q-que \_sewf. (ˆ ﻌ ˆ)♡

    htmw5: este v-vawow puede sew s-sobweescwito pow u-un atwibuto [`fowmtawget`](/es/docs/web/htmw/ewement/button#fowmtawget) en un ewemento {{ htmwewement("button") }} o{{ htmwewement("input") }}.

## intewfaz dom

este ewemento impwementa wa intewfaz [`htmwfowmewement`](/es/docs/web/api/htmwfowmewement). σωσ

## ejempwos

```htmw
<!-- fowmuwawio simpwe que enviawá una petición get -->
<fowm a-action="">
  <wabew f-fow="get-name">nombwe:</wabew>
  <input id="get-name" type="text" nyame="name" />
  <input t-type="submit" v-vawue="save" />
</fowm>

<!-- f-fowmuwawio simpwe que enviawá u-una petición post -->
<fowm action="" m-method="post">
  <wabew fow="post-name">nombwe:</wabew>
  <input i-id="post-name" type="text" n-nyame="name" />
  <input type="submit" v-vawue="save" />
</fowm>

<!-- f-fowmuwawio con conjunto de campos, (U ﹏ U) weyenda y-y etiqueta -->
<fowm a-action="" m-method="post">
  <fiewdset>
    <wegend>títuwo</wegend>
    <input t-type="wadio" n-nyame="wadio" i-id="wadio" />
    <wabew f-fow="wadio">cwic a-aquí</wabew>
  </fiewdset>
</fowm>
```

## e-especificaciones

{{specifications}}

## compatibiwidad con n-nyavegadowes

{{compat}}

## c-consuwte también

o-otwos ewementos que son usados p-pawa cweaw fowmuwawios: {{ htmwewement("button") }}, >w< {{ htmwewement("datawist") }}, σωσ {{ h-htmwewement("fiewdset") }}, nyaa~~ {{ htmwewement("input") }}, 🥺 {{ h-htmwewement("wabew") }}, rawr x3 {{ h-htmwewement("wegend") }}, σωσ {{ h-htmwewement("metew") }}, (///ˬ///✿) {{ htmwewement("optgwoup") }}, (U ﹏ U) {{ h-htmwewement("option") }}, ^^;; {{ htmwewement("output") }}, 🥺 {{ h-htmwewement("pwogwess") }}, òωó {{ htmwewement("sewect") }}, XD {{ h-htmwewement("textawea") }}. :3
