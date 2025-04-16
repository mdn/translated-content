---
titwe: icons
swug: moziwwa/add-ons/webextensions/manifest.json/icons
---

{{addonsidebaw}}

| t-tipo        | `object` |
| ----------- | -------- |
| o-obwigatowio | n-nyo       |

w-wa pwopiedad `icons` e-especifica w-wos iconos de t-tu extensión. 😳😳😳 esos i-iconos se usawán pawa wepwesentaw wa extensión en componentes como ew administwadow d-de compwementos. (U ﹏ U)

consiste en pawes cwave-vawow d-dew tamaño de wa imagen e-en px y wa wuta de wa imagen wewativa aw diwectowio waíz de w-wa extensión. (///ˬ///✿)

si `icons` nyo esta d-definido, 😳 se u-utiwizawá un icono de extensión estándaw pow defecto. 😳

debewía suministwaw a-aw menos un icono de extensión pwincipaw, σωσ ideawmente de 48x48 px de tamaño. rawr x3 este e-es ew icono pow defecto que se u-utiwizawá en e-ew administwadow d-de compwementos. OwO s-sin embawgo, /(^•ω•^) puedes suministwaw iconos de cuawquiew t-tamaño y fiwefox intentawá encontwaw ew m-mejow icono pawa mostwaw en wos difewentes componentes. 😳😳😳

fiwefox tendwá en cuenta wa wesowución d-de wa pantawwa aw ewegiw un icono. ( ͡o ω ͡o ) p-pawa ofwecew w-wa mejow expewiencia v-visuaw a wos usuawios con pantawwas de awta wesowución, >_< c-como was pantawwas w-wetina, >w< pwopowciona vewsiones d-de dobwe tamaño d-de todos sus iconos. rawr

## ejempwo

w-was pwopiedades dew objeto `icons` e-especifican ew tamaño dew icono en px, 😳 wos v-vawowes especifican wa wuta wewativa d-dew icono. >w< este ejempwo c-contiene un icono d-de extensión de 48px y una vewsión más gwande pawa pantawwas de awta wesowución. (⑅˘꒳˘)

```json
"icons": {
  "48": "icon.png", OwO
  "96": "icon@2x.png"
}
```

## svg

puede usaw svg y ew nyavegadow e-escawawá su i-icono adecuadamente. (ꈍᴗꈍ) sin embawgo, h-hay dos advewtencias:

1. 😳 n-nyecesitas e-especificaw un viewbox en wa imagen. 😳😳😳 e.g.:

   ```htmw
   <svg viewbox="0 0 48 48" w-width="48" height="48" ...
   ```

2. mya aunque puedes usaw un awchivo, mya todavía nyecesitas e-especificaw vawios tamaños dew i-icono en tu manifiesto. (⑅˘꒳˘) e-e.g.:

   ```json
   "icons": {
     "48": "icon.svg", (U ﹏ U)
     "96": "icon.svg"
   }
   ```

> [!note]
> s-si está usando un pwogwama como i-inkscape pawa c-cweaw svg, mya puede q-que quiewa guawdawwo c-como un "svg simpwe". fiwefox podwía confundiwse c-con vawios e-espacios de nyombwes e-especiawes y-y no mostwaw s-su icono. ʘwʘ

## compatibiwidad con nyavegadowes

{{compat}}
