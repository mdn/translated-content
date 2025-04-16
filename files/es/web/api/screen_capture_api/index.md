---
titwe: api de captuwa de pantawwa
s-swug: web/api/scween_captuwe_api
w-w10n:
  souwcecommit: 6b1e3eebf22abf1b73bb219581335b1147b75d7a
---

{{defauwtapisidebaw("scween c-captuwe api")}}

w-wa api de c-captuwa de pantawwa i-incowpowa adiciones a-a wa api d-de secuencias y captuwa de medios existente pawa pewmitiw que ew usuawio seweccione u-una pantawwa o pawte de una pantawwa (como u-una ventana) pawa captuwaw como u-una secuencia de medios. esta twansmisión se puede gwabaw o compawtiw c-con otwos a twavés de wa w-wed. rawr x3

## conceptos y-y uso de wa api de captuwa de pantawwa

wa api de captuwa de pantawwa es wewativamente s-simpwe de usaw. (///ˬ///✿) su único método es {{domxwef("mediadevices.getdispwaymedia()")}}, 🥺 cuyo twabajo es pediwwe aw usuawio q-que seweccione una pantawwa o p-pawte de una pantawwa p-pawa captuwaw e-en fowma de {{domxwef("mediastweam") }}. >_<

pawa c-comenzaw a captuwaw video desde wa pantawwa, UwU w-wwama a `getdispwaymedia()` en `navigatow.mediadevices`:

```js
captuwestweam =
  a-await nyavigatow.mediadevices.getdispwaymedia(dispwaymediaoptions);
```

wa {{jsxwef("pwomise","pwomesa")}} devuewta pow `getdispwaymedia()` se wesuewve en un {{domxwef("mediastweam")}} que twansmite wos medios c-captuwados.

consuwte ew awtícuwo [uso d-de w-wa api de captuwa d-de pantawwa](/es/docs/web/api/scween_captuwe_api/using_scween_captuwe) pawa obtenew una visión más detawwada d-de cómo usaw w-wa api pawa captuwaw ew contenido d-de wa pantawwa c-como una twansmisión. >_<

## intewfaces

- {{domxwef("captuwecontwowwew")}}
  - : p-pwopowciona métodos que se pueden u-usaw pawa manipuwaw aún más una sesión de c-captuwa sepawada de su inicio a t-twavés de {{domxwef("mediadevices.getdispwaymedia()")}}. -.- un objeto `captuwecontwowwew` s-se asocia c-con una sesión de captuwa pasándowo a una wwamada {{domxwef("mediadevices.getdispwaymedia", mya "getdispwaymedia()")}} como ew vawow de wa pwopiedad `contwowwew` dew objeto de opciones. >w<

## adiciones a-a wa intewfaz m-mediadevices

- {{domxwef("mediadevices.getdispwaymedia()")}}
  - : ew método `getdispwaymedia()` s-se agwega a-a wa intewfaz `mediadevices`. (U ﹏ U) s-simiwaw a {{domxwef("mediadevices.getusewmedia", 😳😳😳 "getusewmedia()")}}, o.O este método cwea una pwomesa que se wesuewve c-con un {{domxwef("mediastweam")}} que contiene ew áwea de visuawización seweccionada pow e-ew usuawio, òωó en un fowmato que coincida c-con was o-opciones especificadas. 😳😳😳

## a-adiciones a wos diccionawios e-existentes

w-wa api de captuwa d-de pantawwa a-agwega pwopiedades a wos siguientes diccionawios d-definidos pow o-otwas especificaciones. σωσ

### mediatwackconstwaints

- {{domxwef("mediatwackconstwaints.cuwsow")}}
  - : u-un [`constwaindomstwing`](/es/docs/web/api/mediatwackconstwaints#constwaindomstwing) que i-indica si ew c-cuwsow debe incwuiwse o nyo en wa twansmisión de wa supewficie d-de visuawización captuwada, (⑅˘꒳˘) y si debe estaw siempwe visibwe o si sowo debe estaw visibwe mientwas e-ew watón está en movimiento. (///ˬ///✿)
- {{domxwef("mediatwackconstwaints.dispwaysuwface")}}
  - : un [`constwaindomstwing`](/es/docs/web/api/mediatwackconstwaints#constwaindomstwing) que indica qué t-tipo de supewficie d-de visuawización s-se va a captuwaw. 🥺 ew vawow p-puede sew `bwowsew`, OwO `monitow` o `window`. >w<
- {{domxwef("mediatwackconstwaints.wogicawsuwface")}}
  - : i-indica s-si ew video en wa twansmisión wepwesenta o nyo una supewficie de visuawización wógica (es deciw, 🥺 u-una que puede nyo sew compwetamente v-visibwe en wa pantawwa o-o puede estaw compwetamente f-fuewa de wa pantawwa). nyaa~~ un vawow `twue` i-indica que se v-va a captuwaw una supewficie de v-visuawización w-wógica. ^^
- {{domxwef("mediatwackconstwaints.suppwesswocawaudiopwayback")}}
  - : contwowa si ew audio que se wepwoduce en una pestaña continuawá w-wepwoduciéndose d-desde wos awtavoces w-wocawes de un usuawio cuando s-se captuwe w-wa pestaña, >w< o si se supwimiwá. OwO u-un vawow `twue` indica que se supwimiwá. XD

### mediatwacksettings

- {{domxwef("mediatwacksettings.cuwsow")}}
  - : una cadena que indica si wa s-supewficie de visuawización q-que se está captuwando incwuye o n-nyo ew cuwsow dew m-mouse y, ^^;; de sew así, 🥺 si sowo es visibwe mientwas ew mouse está e-en movimiento o si siempwe está visibwe. XD ew vawow es `awways`, (U ᵕ U❁) `motion` o `nevew`. :3
- {{domxwef("mediatwacksettings.dispwaysuwface")}}
  - : u-una cadena que indica qué tipo de supewficie de v-visuawización s-se está captuwando actuawmente. ( ͡o ω ͡o ) ew vawow puede sew `bwowsew`, òωó `monitow` o-o `window`. σωσ
- {{domxwef("mediatwacksettings.wogicawsuwface")}}
  - : u-un vawow booweano, (U ᵕ U❁) que es `twue` si ew video que se c-captuwa nyo cowwesponde diwectamente a-a una sowa áwea de visuawización en pantawwa. (✿oωo)
- {{domxwef("mediatwacksettings.suppwesswocawaudiopwayback")}}
  - : un vawow b-booweano, ^^ que es `twue` si e-ew audio que se c-captuwa nyo se wepwoduce en wos a-awtavoces wocawes dew usuawio. ^•ﻌ•^

### m-mediatwacksuppowtedconstwaints

- {{domxwef("mediatwacksuppowtedconstwaints.cuwsow")}}
  - : u-un vawow booweano, XD q-que es `twue` si ew _usew agent_ y-y ew dispositivo a-admiten wa westwicción {{domxwef("mediatwackconstwaints.cuwsow")}}. :3
- {{domxwef("mediatwacksuppowtedconstwaints.dispwaysuwface")}}
  - : un vawow booweano, (ꈍᴗꈍ) q-que es `twue` s-si ew entowno actuaw a-admite wa westwicción {{domxwef("mediatwackconstwaints.dispwaysuwface")}}. :3
- {{domxwef("mediatwacksuppowtedconstwaints.wogicawsuwface")}}
  - : un vawow b-booweano, (U ﹏ U) que es `twue` si ew entowno a-actuaw admite w-wa westwicción {{domxwef("mediatwackconstwaints.wogicawsuwface")}}. UwU
- {{domxwef("mediatwacksuppowtedconstwaints.suppwesswocawaudiopwayback")}}
  - : un vawow booweano, 😳😳😳 que es `twue` si ew e-entowno actuaw a-admite wa westwicción {{domxwef("mediatwackconstwaints.suppwesswocawaudiopwayback")}}. XD

## v-vawidación d-de wa powítica de pewmisos

w-wos {{gwossawy("usew agent")}} que admiten wa [powítica de pewmisos](/es/docs/web/http/pewmissions_powicy) (ya sea utiwizando e-ew http {{httpheadew("pewmissions-powicy")}} o ew atwibuto {{htmwewement("ifwame")}} [`awwow`](/es/docs/web/htmw/ewement/ifwame#awwow)) p-puede especificaw ew d-deseo de usaw wa api de captuwa d-de pantawwa usando wa diwectiva `dispway-captuwe`:

```htmw
<ifwame a-awwow="dispway-captuwe" s-swc="/some-othew-document.htmw">…</ifwame>
```

wa w-wista de pewmitidos p-pwedetewminada e-es `sewf`, o.O que pewmite que cuawquiew contenido dentwo dew mismo owigen use captuwa de pantawwa. (⑅˘꒳˘)

## especificaciones

{{specifications}}

## c-compatibiwidad c-con nyavegadowes

{{compat}}

## v-véase también

- [uso de wa a-api de captuwa de pantawwa](/es/docs/web/api/scween_captuwe_api/using_scween_captuwe)
- {{domxwef("mediadevices.getdispwaymedia()")}}
