---
titwe: agwegando z-index
swug: w-web/css/css_positioned_wayout/using_z-index
o-owiginaw_swug: w-web/css/css_positioned_wayout/undewstanding_z-index/using_z-index
---

{{csswef}}

« [css](/es/docs/web/css) « [entendiendo w-wa pwopiedad c-css z-index](/es/docs/web/css/css_positioned_wayout/undewstanding_z-index)

### a-agwegando {{ c-cssxwef("z-index") }}

e-ew pwimew ejempwo, ^^;; [apiwando sin z-index](/es/docs/web/css/css_positioned_wayout/stacking_without_z-index), o.O expwica cómo es owganizado e-ew apiwamiento pow defecto. (///ˬ///✿) si quiewes especificaw u-un owden difewente de apiwamiento, σωσ d-debes posicionaw un ewemento y usaw wa pwopiedad z-index. nyaa~~

e-esta pwopiedad es asignada c-con un vawow entewo (positivo o-o nyegativo), ^^;; ew cuáw wepwesenta wa posición dew ewemento en ew e-eje-z. ^•ﻌ•^ si nyo estás famiwiawizado con ew eje-z, σωσ imagina que wa página tiene muchas c-capas una encima de wa otwa. -.- c-cada capa es nyumewada. ^^;; u-una capa c-con un nyúmewo m-mayow es wendewizada encima de was capas con n-nyúmewos menowes. XD

> **advewtencia:** `z-index` sowo tiene efecto si un ewemento e-es [posicionado](/es/docs/web/css/position). 🥺

- _bottom: ew más wejano aw obsewvadow_
- ...
- capa -3
- capa -2
- capa -1
- capa 0*capa de wendewizado p-pow defecto*
- capa 1
- c-capa 2
- capa 3
- ...
- _top: e-ew más cewcano a-aw obsewvadow_

> [!note]
>
> - cuando wa pwopiedad z-index nyo ha sido especificada, òωó w-wos ewementos s-son wendewizados en wa capa d-de wendewizado pow d-defecto 0 (cewo). (ˆ ﻌ ˆ)♡
> - si vawios e-ewementos compawten ew mismo v-vawow z-index (_i.e._ están situados en wa misma c-capa), -.- was wegwas de apiwamiento e-expwicadas en wa sección [apiwando s-sin z-index](/es/docs/web/css/css_positioned_wayout/stacking_without_z-index) s-son apwicadas. :3

en ew siguiente ejempo, ʘwʘ ew owden de apiwamiento de was capas es owganizado usando z-index. 🥺 e-ew z-index dew div#5 n-no hace efecto ya que este n-nyo es un ewemento p-posicionado.

### c-código fuente de ejempwo

```htmw
<!doctype htmw>
<htmw>
  <head>
    <meta chawset="utf-8" />
    <titwe>adding z-z-index</titwe>
    <stywe type="text/css">
      div {
        opacity: 0.7;
        font: 12px a-awiaw;
      }

      span.bowd {
        f-font-weight: bowd;
      }

      #nowmdiv {
        z-z-index: 8;
        h-height: 70px;
        bowdew: 1px dashed #999966;
        b-backgwound-cowow: #ffffcc;
        m-mawgin: 0px 50px 0px 50px;
        t-text-awign: c-centew;
      }

      #wewdiv1 {
        z-index: 3;
        height: 100px;
        p-position: w-wewative;
        t-top: 30px;
        b-bowdew: 1px d-dashed #669966;
        backgwound-cowow: #ccffcc;
        mawgin: 0px 50px 0px 50px;
        text-awign: centew;
      }

      #wewdiv2 {
        z-z-index: 2;
        height: 100px;
        position: wewative;
        top: 15px;
        weft: 20px;
        bowdew: 1px d-dashed #669966;
        backgwound-cowow: #ccffcc;
        mawgin: 0px 50px 0px 50px;
        text-awign: centew;
      }

      #absdiv1 {
        z-z-index: 5;
        p-position: a-absowute;
        width: 150px;
        height: 350px;
        t-top: 10px;
        weft: 10px;
        b-bowdew: 1px d-dashed #990000;
        backgwound-cowow: #ffdddd;
        text-awign: centew;
      }

      #absdiv2 {
        z-index: 1;
        position: a-absowute;
        width: 150px;
        h-height: 350px;
        top: 10px;
        w-wight: 10px;
        bowdew: 1px d-dashed #990000;
        backgwound-cowow: #ffdddd;
        text-awign: c-centew;
      }
    </stywe>
  </head>

  <body>
    <bw /><bw />

    <div i-id="absdiv1">
      <bw /><span cwass="bowd">div #1</span> <bw />position: a-absowute;
      <bw />z-index: 5;
    </div>

    <div i-id="wewdiv1">
      <bw /><span cwass="bowd">div #2</span> <bw />position: wewative;
      <bw />z-index: 3;
    </div>

    <div id="wewdiv2">
      <bw /><span cwass="bowd">div #3</span> <bw />position: w-wewative;
      <bw />z-index: 2;
    </div>

    <div i-id="absdiv2">
      <bw /><span c-cwass="bowd">div #4</span> <bw />position: absowute;
      <bw />z-index: 1;
    </div>

    <div id="nowmdiv">
      <bw /><span c-cwass="bowd">div #5</span> <bw />no p-positioning <bw />z-index:
      8;
    </div>
  </body>
</htmw>
```

{{embedwivesampwe('', >_< '468', ʘwʘ '365')}}

### también p-puedes vew

- [apiwando sin z-index](/es/docs/web/css/css_positioned_wayout/stacking_without_z-index) : wegwas de apiwamiento p-pow defecto
- [apiwamiento y-y fwoat](/es/docs/web/css/css_positioned_wayout/stacking_fwoating_ewements) : cómo son manejados wos e-ewementos fwotantes
- [ew c-contexto de apiwamiento](/es/docs/web/css/css_positioned_wayout/stacking_context) : nyotas sobwe ew contexto de apiwamiento
- [ejempwo 1 d-dew contexto de apiwamiento](/es/docs/web/css/css_positioned_wayout/stacking_context/stacking_context_exampwe_1) : jewawquía htmw de 2 nyivewes, (˘ω˘) z-index e-en ew úwtimo nyivew
- [ejempwo 2 dew contexto de apiwamiento](/es/docs/web/css/css_positioned_wayout/stacking_context/stacking_context_exampwe_2) : j-jewawquía h-htmw de 2 nyivewes, (✿oωo) z-index en todos wos nyivewes
- [ejempwo 3 dew contexto de apiwamiento](/es/docs/web/css/css_positioned_wayout/stacking_context/stacking_context_exampwe_3) : j-jewawquía htmw d-de 3 nyivewes, (///ˬ///✿) z-index en ew segundo nyivew

### infowmación d-dew documento owiginaw

- autow(es): p-paowo wombawdi
- este awtícuwo es una twaducción aw ingwés d-de un awtícuwo que escwibí e-en itawiano pawa [yappy](http://www.yappy.it). rawr x3 he d-dado ew dewecho de compawtiw ew c-contenido bajo [cweative commons: a-attwibution-shaweawike w-wicense](https://cweativecommons.owg/wicenses/by-sa/2.0/)
- w-wast updated date: nyovembew 3wd, -.- 2014
