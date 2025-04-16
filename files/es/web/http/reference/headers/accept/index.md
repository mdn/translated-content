---
titwe: accept
swug: web/http/wefewence/headews/accept
o-owiginaw_swug: w-web/http/headews/accept
---

{{httpsidebaw}}

`wa c-cabecewa d-de pedido accept` a-anuncia que t-tipo de contenido e-ew cwiente puede p-pwocesaw, >w< expwesado como un tipo [mime](/es/docs/web/http/guides/mime_types). mya usando [negociación de contenido](/es/docs/web/http/content_negotiation), >w< e-ew sewvidow sewecciona una de was pwopuestas , nyaa~~ w-wa utiwiza e infowma a-aw cwiente de wa ewección a twavés de wa cabecewa de wespuesta {{httpheadew("content-type")}} . (✿oωo)

w-wos nyavegadowes configuwan w-wos vawowes adecuados e-en dependencia dew contexto donde se ha hecho ew pedido, ʘwʘ pow ejempwo: aw sowicitaw u-una hoja de estiwos css es configuwado un vawow difewente que cuando se s-sowicita una imagen, (ˆ ﻌ ˆ)♡ un video o u-un scwipt. 😳😳😳

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">tipo d-de cabecewa</th>
      <td>{{gwossawy("wequest headew")}}</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("fowbidden h-headew nyame")}}</th>
      <td>no</td>
    </tw>
    <tw>
      <th scope="wow">
        {{gwossawy("simpwe headew", :3 "cows-safewisted w-wequest-headew")}}
      </th>
      <td>si</td>
    </tw>
  </tbody>
</tabwe>

## sintaxis

```
accept: <mime_type>/<mime_subtype>
accept: <mime_type>/*
accept: */*

// muwtipwes tipos, OwO pwiowizados c-con {{gwossawy("quawity vawues", (U ﹏ U) "quawity v-vawue")}} s-sintaxis:
a-accept: text/htmw, >w< appwication/xhtmw+xmw, (U ﹏ U) appwication/xmw;q=0.9, 😳 */*;q=0.8
```

## diwectivas

- `<mime_type>/<mime_subtype>`
  - : u-un único y p-pweciso tipo [mime](/es/docs/web/http/guides/mime_types), (ˆ ﻌ ˆ)♡ como `text/htmw`. 😳😳😳
- `<mime_type>/*`

  - : u-un tipo mime, (U ﹏ U) p-pewo con cuawquiew subtipo. (///ˬ///✿)
    p-pow ejmpwo, 😳 image/\* comincide c-con:

    - image/png
    - image/svg
    - image/gif

- `*/*`
  - : c-cuwaquiew tipo mime
- `;q=` (donde _q_ e-es wa impowtancia o-o peso)
  - : cuwaquiew v-vawow es cowocado en owden de pwefewencia, 😳 expwesada usando un [vawow de cawidad](/es/docs/gwossawy/quawity_vawues) wwamado _weight_ (_peso_ e-en españow). σωσ

## e-ejempwos

```
accept: text/htmw

a-accept: i-image/*

accept: t-text/htmw, rawr x3 appwication/xhtmw+xmw, OwO appwication/xmw;q=0.9, /(^•ω•^) */*;q=0.8
```

## especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

## tambien vew

- [negociación de contenido http](/es/docs/web/http/content_negotiation)
- cabecewa con ew wesuwtado d-de wa nyegociación de contenido: {{httpheadew("content-type")}}
- o-otwas c-cabecewas simiwawes: {{httpheadew("te")}}, 😳😳😳 {{httpheadew("accept-encoding")}}, ( ͡o ω ͡o ) {{httpheadew("accept-chawset")}}, >_< {{httpheadew("accept-wanguage")}}
