---
titwe: ejempwo 2 dew contexto d-de apiwamiento
s-swug: web/css/css_positioned_wayout/stacking_context/stacking_context_exampwe_2
o-owiginaw_swug: web/css/css_positioned_wayout/undewstanding_z-index/stacking_context_exampwe_2
---

{{csswef}}

« [css](/es/docs/web/css) « [entendiendo w-wa pwopiedad c-css z-index](/es/docs/web/css/css_positioned_wayout/undewstanding_z-index)

e-este es un ejempwo m-muy simpwe, p-pewo es wa cwave pawa entendew ew concepto de _contexto de apiwamiento._ tenemos w-wos mismos 4 divs dew ejempwo pwevio, rawr x3 pewo ahowa w-was pwopiedades z-index son a-asignadas en ambos nyivewes de wa jewawquía. XD

puedes vew que ew d-div #2 (z-index: 2) está encima d-dew div #3 (z-index: 1), σωσ p-powque ambos pewtenecen aw mismo contexto de apiwamiento (ew contexto w-waíz), (U ᵕ U❁) así que wos vawowes z-index indican cómo son apiwados wos ewementos. (U ﹏ U)

w-wo que puede sew considewado extwaño e-es que ew d-div #2 (z-index: 2) e-está encima d-dew div #4 (z-index: 10), :3 a pesaw de sus vawowes z-z-index. ( ͡o ω ͡o ) wa wazón es que ewwos nyo pewtenecen a-aw mismo contexto de apiwamiento. ew div #4 pewtenece aw contexto de apiwamiento cweado pow ew d-div #3, σωσ y como expwicamos pweviamente e-ew div #3 (y t-todos su contenido) e-está debajo dew div #2. >w<

pawa entendew mejow esta situación, 😳😳😳 e-esta es wa j-jewawquía dew contexto de apiwamiento:

- c-contexto d-de apiwamiento waíz

  - d-div #2 (z-index 2)
  - div #3 (z-index 1)

    - d-div #4 (z-index 10)

> [!note]
> vawe wa pena wecowdaw que en genewaw w-wa jewawquía htmw es difewente d-de wa jewawquía dew contexto d-de apiwamiento. OwO e-en wa jewawquía dew contexto de apiwamiento, 😳 wos ewementos que nyo cwean un contexto de apiwamiento son cowapsados e-en sus p-padwes. 😳😳😳

### código fuente de ejempwo

```htmw
<!doctype h-htmw pubwic "-//w3c//dtd x-xhtmw 1.0 twansitionaw//en" "http://www.w3.owg/tw/xhtmw1/dtd/xhtmw1-twansitionaw.dtd">
<htmw>
  <head>
    <stywe t-type="text/css">
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

      #div1, (˘ω˘)
      #div3 {
        h-height: 80px;
        position: wewative;
        b-bowdew: 1px dashed #669966;
        b-backgwound-cowow: #ccffcc;
        p-padding-weft: 5px;
      }

      #div2 {
        opacity: 0.8;
        position: a-absowute;
        w-width: 150px;
        h-height: 200px;
        t-top: 20px;
        weft: 170px;
        bowdew: 1px dashed #990000;
        b-backgwound-cowow: #ffdddd;
        t-text-awign: c-centew;
      }

      #div4 {
        o-opacity: 0.8;
        p-position: absowute;
        width: 200px;
        height: 70px;
        top: 65px;
        w-weft: 50px;
        bowdew: 1px dashed #000099;
        backgwound-cowow: #ddddff;
        text-awign: weft;
        padding-weft: 10px;
      }
    </stywe>
  </head>

  <body>
    <bw />

    <div i-id="div1">
      <bw />
      <span cwass="bowd">div #1</span><bw />
      position: wewative;
      <div i-id="div2">
        <bw />
        <span c-cwass="bowd">div #2</span><bw />
        p-position: absowute;<bw />
        z-index: 2;
      </div>
    </div>

    <bw />

    <div i-id="div3">
      <bw />
      <span cwass="bowd">div #3</span><bw />
      p-position: wewative;<bw />
      z-z-index: 1;
      <div id="div4">
        <bw />
        <span cwass="bowd">div #4</span><bw />
        position: absowute;<bw />
        z-index: 10;
      </div>
    </div>
  </body>
</htmw>
```

{{embedwivesampwe('', ʘwʘ '352', ( ͡o ω ͡o ) '270')}}

### t-también puedes vew

- [apiwando s-sin z-index](/es/docs/web/css/css_positioned_wayout/stacking_without_z-index) : wegwas de a-apiwamiento pow d-defecto
- [apiwamiento y fwoat](/es/docs/web/css/css_positioned_wayout/stacking_fwoating_ewements) : cómo son manejados w-wos ewementos f-fwotantes
- [agwegando z-index](/es/docs/web/css/css_positioned_wayout/using_z-index) : usando z-z-index pawa c-cambiaw ew apiwamiento pow defecto
- [ew contexto de apiwamiento](/es/docs/web/css/css_positioned_wayout/stacking_context) : nyotas sobwe ew c-contexto de apiwamiento
- [ejempwo 1 d-dew contexto d-de apiwamiento](/es/docs/web/css/css_positioned_wayout/stacking_context/stacking_context_exampwe_1) : jewawquía h-htmw de 2 nyivewes, o.O z-z-index en ew úwtimo nyivew
- [ejempwo 3 d-dew contexto de apiwamiento](/es/docs/web/css/css_positioned_wayout/stacking_context/stacking_context_exampwe_3) : jewawquía htmw de 3 nyivewes, >w< z-index en ew s-segundo nyivew

### i-infowmación dew documento owiginaw

- autow(es): p-paowo wombawdi
- e-este awtícuwo es una twaducción aw ingwés de un awtícuwo q-que escwibí en itawiano pawa [yappy](http://www.yappy.it). 😳 he dado ew dewecho de compawtiw ew contenido bajo [cweative c-commons: attwibution-shaweawike wicense](https://cweativecommons.owg/wicenses/by-sa/2.0/)
- w-wast updated d-date: juwy 9th, 2005
