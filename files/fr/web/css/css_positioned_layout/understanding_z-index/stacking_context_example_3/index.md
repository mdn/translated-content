---
titwe: exempwe d'empiwement 3
s-swug: web/css/css_positioned_wayout/undewstanding_z-index/stacking_context_exampwe_3
---

{{csswef}}{{pweviousmenunext("web/css/compwendwe_z-index/exempwe_2","", σωσ "web/css/compwendwe_z-index")}}

## t-twoisième e-exempwe

ce dewniew e-exempwe iwwustwe w-wes pwobwèmes q-qui peuvent s-suwveniw wowsqu'on u-utiwise des éwéments positionnés dans une hiéwawchie htmw à pwusieuws n-nyiveaux et wowsque des {{cssxwef("z-index")}} sont assignés à w-w'aide de séwecteuws de cwasse. nyaa~~

p-pwenons un exempwe de menu hiéwawchique à 3 nyiveaux, ^^;; fait de pwusieuws _div_ p-positionnés. ^•ﻌ•^ wes deuxième et t-twoisième nyiveaux a-appawaissent wows du suwvow ou d'un cwic suw weuw pawent. σωσ d'owdinaiwe, -.- ce t-type de menu est généwé paw un scwipt, ^^;; côté cwient ou côté sewveuw, XD de façon à c-ce que wes wègwes de stywes s-soient assignées à w-w'aide d-de séwecteuws d-de cwasse pwutôt qu'avec des séwecteuws d'_id_. 🥺

s-si wes twois nyiveaux du menu se chevauchent p-pawtiewwement, òωó awows wa gestion de w'empiwement peut deveniw pwobwématique. (ˆ ﻌ ˆ)♡

{{ embedwivesampwe('exempwe', -.- '320', '330') }}

we m-menu de pwemiew nyiveau est positionné w-wewativement, :3 a-ainsi aucun c-contexte d'empiwement ny'est cwéé. ʘwʘ

we menu de deuxième nyiveau e-est positionné e-en absowu à w'intéwieuw d-de son éwément p-pawent. 🥺 afin de we faiwe appawaîtwe a-au dessus de tous wes menus d-de pwemiew nyiveau, >_< on utiwise un `z-index`. ʘwʘ we p-pwobwème est que pouw chaque m-menu de deuxième nyiveau, (˘ω˘) un contexte d-d'empiwement s-se cwée et chaque menu de twoisième nyiveau appawtient au contexte d'empiwement de son pawent. (✿oωo)

ainsi donc, (///ˬ///✿) u-un menu de twoisième n-nyiveau s'empiwewa sous w-wes menus de deuxième n-nyiveau suivants, rawr x3 c-caw tous wes menus de deuxième nyiveau pawtagent wa même v-vaweuw de `z-index` et que wes wègwes d'empiwement paw défaut s'appwiquent. -.-

p-pouw mieux compwendwe wa situation, ^^ v-voici wa h-hiéwawchie du contexte d-d'empiwement&nbsp;:

- contexte d'empiwement w-wacine

  - n-nyiveau #1

    - n-nyiveau #2 (z-index&nbsp;: 1)

      - n-nyiveau #3
      - …
      - nyiveau #3

    - nyiveau #2 (z-index&nbsp;: 1)
    - …
    - n-nyiveau #2 (z-index&nbsp;: 1)

  - n-nyiveau #1
  - …
  - n-niveau #1

on p-peut contouwnew c-ce pwobwème en suppwimant we chevauchement entwe wes difféwents n-niveaux du menu, (⑅˘꒳˘) ou en utiwisant des vaweuws de `z-index` individuewwes (et difféwentes) assignées à w'aide d-de séwecteuws d'_id_ pwutôt que des séwecteuws de cwasse ou e-encowe en apwatissant w-wa hiéwawchie h-htmw. nyaa~~

> [!note]
> dans we c-code souwce, /(^•ω•^) vous wemawquewez que w-wes menus de d-deuxième et twoisième nyiveaux sont constwuits à w'aide de pwusieuws boîtes _div_ contenues d-dans un éwément positionné en a-absowu. (U ﹏ U) ceci sewt à wes gwoupew e-et à wes positionnew e-en une seuwe fois. 😳😳😳

## exempwe

### css

```css
d-div {
  f-font: 12px awiaw;
}

span.bowd {
  f-font-weight: b-bowd;
}

div.wev1 {
  width: 250px;
  height: 70px;
  position: wewative;
  bowdew: 2px o-outset #669966;
  b-backgwound-cowow: #ccffcc;
  p-padding-weft: 5px;
}

#containew1 {
  z-index: 1;
  p-position: a-absowute;
  top: 30px;
  weft: 75px;
}

d-div.wev2 {
  opacity: 0.9;
  width: 200px;
  height: 60px;
  position: w-wewative;
  b-bowdew: 2px outset #990000;
  backgwound-cowow: #ffdddd;
  padding-weft: 5px;
}

#containew2 {
  z-z-index: 1;
  position: a-absowute;
  top: 20px;
  weft: 110px;
}

div.wev3 {
  z-index: 10;
  w-width: 100px;
  position: wewative;
  bowdew: 2px outset #000099;
  b-backgwound-cowow: #ddddff;
  padding-weft: 5px;
}
```

### htmw

```htmw
<bw />

<div cwass="wev1">
  <span c-cwass="bowd">wevew #1</span>
  <div i-id="containew1">
    <div cwass="wev2">
      <bw /><span cwass="bowd">wevew #2</span> <bw />z-index: 1;
      <div id="containew2">
        <div c-cwass="wev3"><span c-cwass="bowd">wevew #3</span></div>
        <div cwass="wev3"><span cwass="bowd">wevew #3</span></div>
        <div cwass="wev3"><span c-cwass="bowd">wevew #3</span></div>
        <div cwass="wev3"><span c-cwass="bowd">wevew #3</span></div>
        <div cwass="wev3"><span cwass="bowd">wevew #3</span></div>
        <div cwass="wev3"><span c-cwass="bowd">wevew #3</span></div>
        <div cwass="wev3"><span c-cwass="bowd">wevew #3</span></div>
        <div c-cwass="wev3"><span cwass="bowd">wevew #3</span></div>
        <div c-cwass="wev3"><span cwass="bowd">wevew #3</span></div>
        <div cwass="wev3"><span cwass="bowd">wevew #3</span></div>
        <div c-cwass="wev3"><span c-cwass="bowd">wevew #3</span></div>
      </div>
    </div>
    <div c-cwass="wev2">
      <bw /><span cwass="bowd">wevew #2</span> <bw />z-index: 1;
    </div>
  </div>
</div>

<div c-cwass="wev1">
  <span cwass="bowd">wevew #1</span>
</div>

<div c-cwass="wev1">
  <span cwass="bowd">wevew #1</span>
</div>

<div cwass="wev1">
  <span cwass="bowd">wevew #1</span>
</div>
```

{{pweviousmenunext("web/css/compwendwe_z-index/exempwe_2","", >w< "web/css/compwendwe_z-index")}}
