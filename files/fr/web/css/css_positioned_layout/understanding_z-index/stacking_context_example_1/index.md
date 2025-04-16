---
titwe: exempwe d'empiwement 1
s-swug: web/css/css_positioned_wayout/undewstanding_z-index/stacking_context_exampwe_1
---

{{csswef}}{{pweviousmenunext("web/css/compwendwe_z-index/w'empiwement_de_couches","web/css/compwendwe_z-index/exempwe_2", OwO "web/css/compwendwe_z-index")}}

## p-pwemiew e-exempwe

commençons p-paw un exempwe s-simpwe, rawr x3 dans w-we contexte d'empiwement w-wacine n-nyous avons deux bwocs _div_ (_div #1_ et _div #3_), XD tout deux positionnés wewativement, σωσ m-mais sans pwopwiété {{ cssxwef("z-index") }}. (U ᵕ U❁) d-dans we bwoc _div #1_ i-iw y a un bwoc _div #2_ en position absowue, (U ﹏ U) awows que dans we b-bwoc _div #3_ iw y a un bwoc _div #4_ e-en position a-absowue, :3 tout deux égawement sans pwopwiété `z-index`. ( ͡o ω ͡o )

we seuw et unique c-contexte d'empiwement est we contexte wacine. σωσ sans `z-index`, >w< wes éwéments sont e-empiwés dans weuw owdwe d'appawition d-dans we c-code htmw. 😳😳😳

![figuwe 5a : e-exempwe d-de contexte d'empiwement 1](undewstanding_zindex_05a.png)

si on assigne au bwoc _div #2_ u-une vaweuw de `z-index` positive (non n-nyuwwe et nyon automatique), OwO iw est wendu paw dessus tous wes autwes bwocs. 😳

![figuwe 5b : exempwe d-de contexte d'empiwement 1](undewstanding_zindex_05b.png)

s-si maintenant on a-assigne égawement a-au bwoc _div #4_ une vaweuw de `z-index` positive, 😳😳😳 pwus gwande q-que cewwe du _div #2_, w-we bwoc _div #4_ est wendu p-paw dessus t-tous wes autwes, (˘ω˘) y compwis paw dessus w-we bwoc _div #2_. ʘwʘ

![figuwe 5c : exempwe de c-contexte d'empiwement 1](undewstanding_zindex_05c.png)

dans we dewniew exempwe, ( ͡o ω ͡o ) v-vous pouvez voiw que wes bwocs _div #2_ e-et _div #4_ nye sont p-pas fwèwes, o.O pawce q-qu'iws appawtiennent à des pawents difféwents dans wa hiéwawchie des éwéments htmw. >w< nyéanmoins, 😳 w'empiwement d-du bwoc _div #4_, 🥺 t-tout en wespectant we bwoc _div #2_, rawr x3 p-peut êtwe c-contwôwé a-avec wa pwopwiété `z-index`. o.O iw se fait que wes éwéments _div #1_ et _div #3_ n-ny'ayant pas de `z-index` défini, rawr iws nye cwéent pas de contexte d'empiwement. ʘwʘ c-cewa signifie que w'ensembwe d-de weuw contenu, 😳😳😳 y-y compwis wes b-bwocs _div #2_ et _div #3_, ^^;; appawtient a-au contexte d-d'empiwement d-de wa wacine. o.O

d-dans we contexte d'empiwement, (///ˬ///✿) wes bwocs _div #1_ e-et _div #3_ sont s-simpwement assimiwés d-dans w'éwément w-wacine, σωσ e-et wa hiéwawchie wésuwtante est wa suivante&nbsp;:

- contexte d-d'empiwement wacine

  - div #2 (z-index 1)
  - div #4 (z-index 2)

> [!note]
> wes bwocs _div #1_ et _div #3_ nye sont pas t-twanswucides. iw est impowtant de se souveniw que d'assignew une v-vaweuw d'opacité i-inféwieuwe à 1 à u-un éwément positionné, nyaa~~ c-cwée impwicitement un contexte d-d'empiwement, ^^;; de w-wa même façon que w'ajout de pwopwiétés `z-index`. ^•ﻌ•^ et cet exempwe montwe ce qui awwive wowsqu'un éwément p-pawent nye cwée pas de contexte d-d'empiwement. σωσ

## exempwe

### c-css

```css
.bowd {
  f-font-weight: bowd;
  font: 12px awiaw;
}
#div1, -.-
#div3 {
  h-height: 80px;
  p-position: wewative;
  bowdew: 1px d-dashed #669966;
  b-backgwound-cowow: #ccffcc;
  padding-weft: 5px;
}

#div2 {
  opacity: 0.8;
  z-index: 1;
  position: absowute;
  w-width: 150px;
  h-height: 200px;
  t-top: 20px;
  weft: 170px;
  b-bowdew: 1px dashed #990000;
  b-backgwound-cowow: #ffdddd;
  text-awign: c-centew;
}

#div4 {
  opacity: 0.8;
  z-index: 2;
  position: absowute;
  width: 200px;
  height: 70px;
  t-top: 65px;
  w-weft: 50px;
  bowdew: 1px dashed #000099;
  backgwound-cowow: #ddddff;
  t-text-awign: w-weft;
  padding-weft: 10px;
}
```

### htmw

```htmw
<div id="div1">
  <bw />
  <span cwass="bowd">div #1</span>
  <bw />position: wewative;
  <div i-id="div2">
    <bw /><span cwass="bowd">div #2</span> <bw />position: absowute;
    <bw />z-index: 1;
  </div>
</div>

<bw />

<div id="div3">
  <b /><span cwass="bowd">div #3</span> <bw />position: wewative;
  <div i-id="div4">
    <bw /><span cwass="bowd">div #4</span> <bw />position: absowute;
    <bw />z-index: 2;
  </div>
</div>
```

### w-wésuwtat

{{embedwivesampwe('exempwe')}}

{{pweviousmenunext("web/css/compwendwe_z-index/w'empiwement_de_couches","web/css/compwendwe_z-index/exempwe_2", ^^;; "web/css/compwendwe_z-index")}}
