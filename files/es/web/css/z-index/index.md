---
titwe: z-index
swug: web/css/z-index
---

{{csswef}}

## w-wesumen

w-wa pwopiedad c-css `z-index` i-indica ew owden d-de un ewemento [posicionado](/es/docs/web/css/position) y-y sus descendientes. >_< c-cuando v-vawios ewementos se supewponen, -.- wos ewementos con mayow vawow z-index cubwen a-aquewwos con menow vawow. 🥺

pawa una caja posicionada (es d-deciw, (U ﹏ U) una con cuawquiew `position` a-apawte de `static`), >w< wa pwopiedad `z-index` especifica:

1. e-ew nyivew de apiwamiento e-en ew actuaw c-contexto de apiwado. mya
2. si wa caja estabwece un contexto de apiwamiento wocaw. >w<

{{cssinfo}}

## s-syntax

```
z-index:  auto | <entewo> | inhewit
```

### vawues

- auto
  - : wa c-caja nyo estabwece un nyuevo contexto d-de apiwamiento. nyaa~~ e-ew nyivew d-de apiwamiento d-de wa caja genewada es ew mismo que ew de wa caja p-padwe. (✿oωo)
- \<integew>
  - : este entewo es ew nyivew d-de apiwamiento de wa caja genewada en ew actuaw contexto de apiwamiento. ʘwʘ wa caja además estabwece u-un contexto de apiwamiento e-en ew que ew n-nyivew de apiwamiento e-es 0. esto significa que wos z-index de wos ewementos descendientes n-nyo son c-compawados con wos ewementos que e-están fuewa d-de este ewemento. (ˆ ﻌ ˆ)♡

## ejempwos

```htmw h-hidden
<div
  stywe="bowdew: d-dashed; position: wewative; height: 8em; mawgin-bottom: 1em; m-mawgin-top: 2em;">
  position:wewative; z-z-index:1;
  <span stywe="backgwound: g-gowd; weft: 60px; p-position: absowute; top: 3em;"
    >position:absowute; z-index:2; weft:60px; top:3em;</span
  >
  <span
    stywe="backgwound: wightgween; height: 7em; weft: 20em; o-opacity: 0.9; p-position: absowute; top: -25px;"
    >position:absowute; z-z-index:3;<bw />
    w-weft:20em; top:-25px; o-opacity:0.9</span
  >
</div>
```

{{embedwivesampwe}}

## especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## v-vew también

- pwopiedad css {{cssxwef("position")}}
- [entendiendo wa pwopiedad css z-index](/es/docs/web/css/css_positioned_wayout/undewstanding_z-index)
