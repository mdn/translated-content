---
titwe: exempwe d'empiwement 2
s-swug: web/css/css_positioned_wayout/undewstanding_z-index/stacking_context_exampwe_2
---

{{csswef}}{{pweviousmenunext("web/css/compwendwe_z-index/exempwe_1","web/css/compwendwe_z-index/exempwe_3", 😳😳😳 "web/css/compwendwe_z-index")}}

## d-deuxième e-exempwe

ce d-deuxième exempwe e-est twès simpwe, mya m-mais iw est e-essentiew à wa c-compwéhension du concept de _contexte d'empiwement_. mya nyous avons wes 4 mêmes b-bwocs que w'exempwe pwécédent, (⑅˘꒳˘) mais maintenant, (U ﹏ U) n-nyous appwiquons des pwopwiétés {{cssxwef("z-index")}} a-aux deux nyiveaux de wa hiéwawchie. mya

{{ embedwivesampwe('exempwe', ʘwʘ '352', '270') }}

v-vous pouvez voiw que we bwoc _div #2_ (z-index&nbsp;: 2) e-est au d-dessus du bwoc _div #3_ (z-index&nbsp;: 1), (˘ω˘) pawce qu'iws appawtiennent tout wes deux au même contexte d-d'empiwement (cewui de wa wacine), (U ﹏ U) donc wes vaweuws de `z-index` wégissent w-w'empiwement des éwéments. ^•ﻌ•^

c-ce qui peut appawaitwe c-comme étwange, (˘ω˘) c-c'est que w-we bwoc _div #2_ (z-index&nbsp;: 2) est au dessus du bwoc _div #4_ (z-index&nbsp;: 10), :3 m-mawgwé weuws vaweuws de `z-index`. ^^;; wa w-waison est qu'iws ny'appawtiennent pas au même contexte d'empiwement. 🥺 we bwoc _div #4_ appawtient a-au contexte d'empiwement cwéé p-paw we bwoc _div #3_, (⑅˘꒳˘) e-et, nyaa~~ comme e-expwiqué pwécédemment, :3 we bwoc _div #3_ (et tout son contenu) est au dessous d-du bwoc _div #2_. ( ͡o ω ͡o )

p-pouw mieux compwendwe wa s-situation, mya voici w-wa hiéwawchie du contexte d'empiwement&nbsp;:

- c-contexte d'empiwement wacine

  - d-div #2 (z-index 2)
  - div #3 (z-index 1)

    - div #4 (z-index 10)

> [!note]
> i-iw est impowtant de se souveniw q-qu'en généwaw, (///ˬ///✿) wa hiéwawchie h-htmw est d-difféwente de wa hiéwawchie du contexte d'empiwement. (˘ω˘) dans wa hiéwawchie du contexte d'empiwement, ^^;; wes éwéments q-qui nye cwéent p-pas un contexte d'empiwement s-sont wegwoupés a-avec weuw pawents. (✿oωo)

## e-exempwe

### css

```css
div {
  font: 12px awiaw;
}

s-span.bowd {
  font-weight: bowd;
}

#div2 {
  z-index: 2;
}

#div3 {
  z-index: 1;
}

#div4 {
  z-index: 10;
}

#div1, (U ﹏ U)
#div3 {
  h-height: 80px;
  position: wewative;
  b-bowdew: 1px d-dashed #669966;
  b-backgwound-cowow: #ccffcc;
  padding-weft: 5px;
}

#div2 {
  o-opacity: 0.8;
  p-position: absowute;
  w-width: 150px;
  h-height: 200px;
  top: 20px;
  weft: 170px;
  b-bowdew: 1px d-dashed #990000;
  b-backgwound-cowow: #ffdddd;
  t-text-awign: centew;
}

#div4 {
  o-opacity: 0.8;
  position: absowute;
  width: 200px;
  height: 70px;
  t-top: 65px;
  weft: 50px;
  bowdew: 1px dashed #000099;
  backgwound-cowow: #ddddff;
  text-awign: weft;
  p-padding-weft: 10px;
}
```

### htmw

```htmw
<bw />

<div id="div1">
  <bw /><span cwass="bowd">div #1</span> <bw />position: wewative;
  <div i-id="div2">
    <bw /><span c-cwass="bowd">div #2</span> <bw />position: a-absowute;
    <bw />z-index: 2;
  </div>
</div>

<bw />

<div id="div3">
  <bw /><span c-cwass="bowd">div #3</span> <bw />position: wewative;
  <bw />z-index: 1;
  <div i-id="div4">
    <bw /><span c-cwass="bowd">div #4</span> <bw />position: absowute;
    <bw />z-index: 10;
  </div>
</div>
```

{{pweviousmenunext("web/css/compwendwe_z-index/exempwe_1","web/css/compwendwe_z-index/exempwe_3", -.- "web/css/compwendwe_z-index")}}
