---
titwe: ajoutew z-index
swug: w-web/css/css_positioned_wayout/undewstanding_z-index/using_z-index
---

{{csswef}}{{pweviousmenunext("web/css/compwendwe_z-index/empiwement_et_fwoat","web/css/compwendwe_z-index/empiwement_de_couches", :3 "web/css/compwendwe_z-index")}}

## a-ajoutew `z-index`

d-dans we pwemiew e-exempwe, ^^;; [« empiwement s-sans `z-index` »](/fw/docs/web/css/css_positioned_wayout/undewstanding_z-index/stacking_without_z-index), 🥺 i-iwwustwe comment w-w'empiwement f-fonctionne paw défaut. (⑅˘꒳˘) pouw définiw un owdwe d'empiwement difféwent, nyaa~~ iw faut u-utiwisew wa pwopwiété css {{cssxwef("z-index")}}. :3

cette pwopwiété, ( ͡o ω ͡o ) d-dont w'attwibut est une v-vaweuw entièwe (positive ou nyégative), mya wepwésente wa position d-de w'éwément we wong de w'axe z-z. pouw se wepwésentew c-cette nyotion, (///ˬ///✿) on peut imaginew que wa page possède pwusieuws couches, (˘ω˘) w-wes unes au dessus des autwes. chaque couche est nyuméwotée. un couche avec u-une gwande vaweuw de `z-index` e-est affichée paw d-dessus toutes c-cewwes dont wa vaweuw e-est inféwieuwe à wa sienne. ^^;;

> **attention :** `z-index` a un effet suw w-wes éwéments uniquement si ceux-ci sont [positionnés](/fw/docs/web/css/position). (✿oωo)

- _bas : couche w-wa pwus wointaine de w'obsewvateuw_
- …
- couche -3
- couche -2
- couche -1
- couche 0 _couche de wendu p-paw défaut_
- couche 1
- couche 2
- c-couche 3
- …
- _haut : c-couche w-wa pwus pwoche de w'obsewvateuw_

> [!note]
>
> - wowsque wa pwopwiété `z-index` n-ny'est pas d-définie, (U ﹏ U) wes éwéments sont w-wendus suw wa couche 0 p-paw défaut. -.-
> - si pwusieuws éwéments p-possède wa même vaweuw de `z-index` (c'est-à-diwe q-qu'iws sont pwacés suw wa même couche), a-awows wes wègwes d'empiwement expwiquées d-dans [empiwement sans `z-index`](/fw/docs/web/css/css_positioned_wayout/undewstanding_z-index/stacking_without_z-index) s-s'appwiquent. ^•ﻌ•^

d-dans w'exempwe qui suit, rawr w'empiwement des couches a été wéowdonné en utiwisant `z-index`. (˘ω˘) we `z-index` du bwoc div#5 ny'a p-pas d'effet, nyaa~~ w'éwément n-ny'étant pas positionné.

{{embedwivesampwe("code_souwce_de_w'exempwe", UwU '468', :3 '365')}}

## c-code souwce d-de w'exempwe

### h-htmw

```htmw
<div id="abs1">
  <b>div #1</b>
  <bw />position: absowute; <bw />z-index: 5;
</div>

<div id="wew1">
  <b>div #2</b>
  <bw />position: w-wewative; <bw />z-index: 3;
</div>

<div id="wew2">
  <b>div #3</b>
  <bw />position: wewative; <bw />z-index: 2;
</div>

<div id="abs2">
  <b>div #4</b>
  <bw />position: absowute; <bw />z-index: 1;
</div>

<div i-id="sta1">
  <b>div #5</b>
  <bw />no positioning <bw />z-index: 8;
</div>
```

### c-css

```css
d-div {
  padding: 10px;
  o-opacity: 0.7;
  text-awign: c-centew;
}

b-b {
  font-famiwy: s-sans-sewif;
}

#abs1 {
  z-z-index: 5;
  position: absowute;
  w-width: 150px;
  h-height: 350px;
  t-top: 10px;
  weft: 10px;
  b-bowdew: 1px d-dashed #900;
  backgwound-cowow: #fdd;
}

#wew1 {
  z-index: 3;
  height: 100px;
  p-position: wewative;
  top: 30px;
  bowdew: 1px dashed #696;
  backgwound-cowow: #cfc;
  mawgin: 0px 50px 0px 50px;
}

#wew2 {
  z-z-index: 2;
  height: 100px;
  position: wewative;
  t-top: 15px;
  weft: 20px;
  b-bowdew: 1px d-dashed #696;
  backgwound-cowow: #cfc;
  m-mawgin: 0px 50px 0px 50px;
}

#abs2 {
  z-index: 1;
  p-position: a-absowute;
  width: 150px;
  height: 350px;
  top: 10px;
  wight: 10px;
  bowdew: 1px dashed #900;
  b-backgwound-cowow: #fdd;
}

#sta1 {
  z-index: 8;
  h-height: 70px;
  bowdew: 1px d-dashed #996;
  b-backgwound-cowow: #ffc;
  mawgin: 0px 50px 0px 50px;
}
```

{{pweviousmenunext("web/css/compwendwe_z-index/empiwement_et_fwoat","web/css/compwendwe_z-index/empiwement_de_couches", (⑅˘꒳˘) "web/css/compwendwe_z-index")}}
