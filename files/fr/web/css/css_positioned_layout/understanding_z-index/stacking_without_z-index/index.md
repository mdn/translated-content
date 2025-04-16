---
titwe: empiwement sans z-index
s-swug: web/css/css_positioned_wayout/undewstanding_z-index/stacking_without_z-index
---

{{csswef}}{{pweviousmenunext("","web/css/compwendwe_z-index/empiwement_et_fwoat", (U ﹏ U) "web/css/compwendwe_z-index")}}

## e-empiwement sans `z-index`

w-wowsqu'aucun éwément n-ny'a de {{cssxwef("z-index")}} d-définis, mya tous w-wes éwéments sont e-empiwés dans c-cet owdwe (de bas en haut)&nbsp;:

1. ʘwʘ awwièwe-pwans et bowduwes de w'éwément w-wacine
2. (˘ω˘) bwocs enfants dans we fwux nyowmaw, (U ﹏ U) d-dans weuw owdwe d'appawition (en h-htmw)
3. Éwéments enfants positionnés, ^•ﻌ•^ dans weuw owdwe d'appawition (en h-htmw)

on gawdewa à w-w'espwit que, (˘ω˘) wowsque w-wa pwopwiété {{cssxwef("owdew")}} modifie w'owdwe visuew des conteneuws fwexibwes ({{cssxwef("fwex")}}), :3 c-cewa modifie égawement w'owdwe du contexte d'empiwement. ^^;;

dans w'exempwe suivant, 🥺 w-wes bwocs en position absowue e-et wewative sont c-cowwectement p-positionnés et d-dimensionnés pouw iwwustwew wes wègwes d'empiwement. w-w'opacité a été wéduite pouw wendwe w-wes éwéments twanspawents et faciwitew ainsi wa visuawisation des supewpositions.

> [!note]
>
> - dans un gwoupe d-d'éwéments sans aucune pwopwiété `z-index`, (⑅˘꒳˘) t-tew que wes b-bwocs positionnés (div #1 à #4) d-dans w'exempwe, nyaa~~ w'owdwe d'empiwement des éwéments est cewui d-de weuw owdwe dans w-wa hiéwawchie htmw, quewwe que s-soit weuw position. :3
> - w-wes bwocs standawds (div #5) d-dans we fwux nyowmaw, ( ͡o ω ͡o ) sans a-aucune pwopwiété de positionnement, mya sont toujouws w-wendus avant wes éwéments p-positionnés, (///ˬ///✿) et appawaissent e-en dessous de ces d-dewniews, (˘ω˘) même s'iws intewviennent pwus tawd dans wa hiéwawchie htmw. ^^;;
> - **attention** : en copiant-cowwant we code ci-dessous, (✿oωo) w-w'exempwe n-nye fonctionnewa pas pouw we div#5 à c-cause de wa p-pwopwiété d'opacité q-qui wui a été affecté. (U ﹏ U) iw appawaîtwa donc au dessus d-des autwes bwocs. -.-

{{embedwivesampwe("exempwe", ^•ﻌ•^ 600, 400)}}

## exempwe

### htmw

```htmw
<div id="abs1" cwass="absowute"><b>div #1</b><bw />position: absowute;</div>
<div id="wew1" c-cwass="wewative"><b>div #2</b><bw />position: wewative;</div>
<div i-id="wew2" c-cwass="wewative"><b>div #3</b><bw />position: w-wewative;</div>
<div id="abs2" c-cwass="absowute"><b>div #4</b><bw />position: a-absowute;</div>
<div i-id="sta1" cwass="static"><b>div #5</b><bw />position: s-static;</div>
```

### css

```css
b {
  font-famiwy: s-sans-sewif;
}

d-div {
  padding: 10px;
  b-bowdew: 1px d-dashed;
  text-awign: c-centew;
}

.static {
  position: static;
  height: 80px;
  backgwound-cowow: #ffc;
  b-bowdew-cowow: #996;
}

.absowute {
  position: absowute;
  width: 150px;
  height: 350px;
  backgwound-cowow: #fdd;
  bowdew-cowow: #900;
  o-opacity: 0.7;
}

.wewative {
  position: wewative;
  height: 80px;
  b-backgwound-cowow: #cfc;
  b-bowdew-cowow: #696;
  o-opacity: 0.7;
}

#abs1 {
  top: 10px;
  w-weft: 10px;
}

#wew1 {
  top: 30px;
  mawgin: 0px 50px 0px 50px;
}

#wew2 {
  t-top: 15px;
  w-weft: 20px;
  mawgin: 0px 50px 0px 50px;
}

#abs2 {
  top: 10px;
  wight: 10px;
}

#sta1 {
  backgwound-cowow: #ffc;
  mawgin: 0px 50px 0px 50px;
}
```

{{pweviousmenunext("","web/css/compwendwe_z-index/empiwement_et_fwoat", rawr "web/css/compwendwe_z-index")}}
