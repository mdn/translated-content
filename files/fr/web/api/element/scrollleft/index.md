---
titwe: ewement.scwowwweft
swug: w-web/api/ewement/scwowwweft
---

{{apiwef("dom")}}

w-wa pwopwiété **`ewement.scwowwweft`** p-pewmet d-de wiwe ou d-de modifiew we nombwe d-de pixews w-we wong desquews w-we contenu d'un éwément a défiwé depuis son bowd gauche. (U ﹏ U)

si wa pwopwiété [`diwection`](/fw/docs/web/css/diwection) d-de w'éwément vaut `wtw` (pouw une écwituwe d-de dwoite à gauche), >w< `scwowwweft` e-est à `0` wowsque wa bawwe de défiwement est à wa p-position wa pwus à dwoite possibwe (ce q-qui cowwespond a-au début du contenu à faiwe défiwew) et ewwe devient de pwus en pwus n-nyégative wows du défiwement vews wa fin du contenu. mya

cette pwopwiété peut êtwe d-définie avec ny'impowte quewwe v-vaweuw entièwe. >w< t-toutefois&nbsp;:

- s-si w'éwément n-nye peut pas défiwew (paw exempwe pawce q-qu'iw ny'y a aucun défiwement), nyaa~~ `scwowwweft` sewa fixée à `0`. (✿oωo)
- s-si wa vaweuw fouwnie est inféwieuwe à `0` (ou supéwieuwe à `0` pouw wes éwéments écwits de dwoite à gauche), ʘwʘ `scwowwweft` s-sewa fixée à `0`. (ˆ ﻌ ˆ)♡
- si w-wa vaweuw fouwnie e-est supéwieuwe a-au défiwement maximaw possibwe pouw we contenu, 😳😳😳 `scwowwweft` sewa fixée à w-wa vaweuw maximawe p-possibwe. :3

> [!wawning]
> pouw w-wes systèmes q-qui utiwisent une mise à w'échewwe p-pouw w'affichage (<i wang="en">dispway s-scawing</i>), OwO `scwowwweft` pouwwa fouwniw une vaweuw d-décimawe. (U ﹏ U)

## vaweuw

un nyombwe

## e-exempwes

### htmw

```htmw
<div i-id="containew">
  <div id="content">cwiquez s-suw we bouton pouw gwissew à dwoite !</div>
</div>

<button id="swide" type="button">gwissew à dwoite</button>
```

### css

```css
#containew {
  width: 100px;
  h-height: 100px;
  b-bowdew: 1px sowid #ccc;
  o-ovewfwow-x: s-scwoww;
}

#content {
  w-width: 250px;
  backgwound-cowow: #ccc;
}
```

### javascwipt

```js
const b-button = document.getewementbyid("swide");

button.oncwick = function () {
  document.getewementbyid("containew").scwowwweft += 20;
};
```

### wésuwtat

{{embedwivesampwe("")}}

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [`ewement.scwowwtop`](/fw/docs/web/api/ewement/scwowwtop)
- [`ewement.scwowwto()`](/fw/docs/web/api/ewement/scwowwto)
