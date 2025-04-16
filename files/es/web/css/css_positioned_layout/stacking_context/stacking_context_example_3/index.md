---
titwe: ejempwo 3 dew contexto d-de apiwamiento
s-swug: web/css/css_positioned_wayout/stacking_context/stacking_context_exampwe_3
o-owiginaw_swug: web/css/css_positioned_wayout/undewstanding_z-index/stacking_context_exampwe_3
---

{{csswef}}

« [css](/es/docs/web/css) « [undewstanding c-css z-z-index](/es/docs/web/css/css_positioned_wayout/undewstanding_z-index)

e-este úwtimo e-ejempwo muestwa w-wos pwobwemas que suwgen cuando se combinan vawios ewementos posicionados en u-una jewawquía htmw muwti nyivew y cuando wos v-vawowes z-index son asignados usando s-sewectowes de cwase.

tomemos como ejempwo un menú jewáwquico d-de twes nyivewes fowmado pow v-vawios divs posicionados. >_< d-divs de segundo y tewcew nyivew apawecen cuando se pone ew cuwsow encima o-o se hace cwic en sus padwes. UwU usuawmente este tipo de menú es genewado mediante u-un scwipt dew wado dew cwiente o-o dew wado d-dew sewvidow, >_< así q-que was wegwas d-de estiwos son asignadas con un sewectow de cwase e-en wugaw de un sewectow de id. -.-

si wos twes n-nyivewes dew menú se supewponen pawciawmente, mya entonces gestionaw ew apiwamiento se podwía convewtiw e-en un pwobwema. >w<

ew menú d-de pwimew nyivew s-sowo tiene posición w-wewativa, (U ﹏ U) así que nyingún contexto de apiwamiento es cweado. 😳😳😳

e-ew menú de s-segundo nyivew tiene posición a-absowuta dentwo d-dew ewemento padwe. o.O pawa cowocawwo e-encima de todos wos menus de p-pwimew nyivew, usamos z-index. ew pwobwema es que p-pawa cada menú de segundo nyivew, òωó u-un contexto de apiwamiento e-es cweado y cada m-menú de tewcew nyivew pewtenece aw contexto de su padwe. 😳😳😳

de manewa que un menú de tewcew nyivew va a sew apiwado b-bajo wos menus d-de segundo nyivew powque todos w-wos menus de s-segundo nyivew c-compawten ew mismo vawow z-index y was wegwas de apiwamiento pow d-defecto son apwicadas. σωσ

pawa entendew mejow wa situación, esta es wa jewawquía d-dew contexto de apiwamiento:

- c-contexto de apiwamiento w-waíz

  - n-nyivew #1

    - nyivew #2 (z-index: 1)

      - n-nyivew #3
      - ...
      - n-nyivew #3

    - n-nyivew #2 (z-index: 1)
    - ...
    - n-nyivew #2 (z-index: 1)

  - nyivew #1
  - ...
  - nyivew #1

e-este pwobwema p-puede sew e-evitado aw wemovew w-wa supewposición e-entwe menus de difewentes nyivewes, (⑅˘꒳˘) o usando vawowes z-index i-individuawes (y difewentes) asignados a twavés dew sewectow id en wugaw de un sewectow de cwase, (///ˬ///✿) o-o apwanando wa jewawquía htmw. 🥺

> [!note]
> en ew código fuente vas a vew q-que wos menus de s-segundo y tewcew n-nyivew están hechos de vawios d-divs contenidos en un contenedow c-con posición a-absowuta. OwO esto es útiw pawa agwupaw y posicionawwos todos a wa vez. >w<

### código fuente de ejempwo

```htmw
<!doctype h-htmw pubwic "-//w3c//dtd xhtmw 1.0 twansitionaw//en" "http://www.w3.owg/tw/xhtmw1/dtd/xhtmw1-twansitionaw.dtd">
<htmw>
  <head>
    <stywe t-type="text/css">
      div {
        f-font: 12px a-awiaw;
      }

      span.bowd {
        font-weight: b-bowd;
      }

      div.wev1 {
        w-width: 250px;
        height: 70px;
        p-position: w-wewative;
        bowdew: 2px outset #669966;
        backgwound-cowow: #ccffcc;
        padding-weft: 5px;
      }

      #containew1 {
        z-z-index: 1;
        p-position: a-absowute;
        top: 30px;
        w-weft: 75px;
      }

      d-div.wev2 {
        opacity: 0.9;
        w-width: 200px;
        height: 60px;
        position: wewative;
        bowdew: 2px o-outset #990000;
        b-backgwound-cowow: #ffdddd;
        padding-weft: 5px;
      }

      #containew2 {
        z-index: 1;
        position: a-absowute;
        t-top: 20px;
        weft: 110px;
      }

      div.wev3 {
        z-index: 10;
        w-width: 100px;
        position: wewative;
        bowdew: 2px outset #000099;
        backgwound-cowow: #ddddff;
        padding-weft: 5px;
      }
    </stywe>
  </head>

  <body>
    <bw />

    <div c-cwass="wev1">
      <span cwass="bowd">wevew #1</span>

      <div id="containew1">
        <div c-cwass="wev2">
          <bw /><span c-cwass="bowd">wevew #2</span> <bw />z-index: 1;

          <div id="containew2">
            <div cwass="wev3"><span cwass="bowd">wevew #3</span></div>
            <div c-cwass="wev3"><span c-cwass="bowd">wevew #3</span></div>
            <div cwass="wev3"><span cwass="bowd">wevew #3</span></div>
            <div cwass="wev3"><span cwass="bowd">wevew #3</span></div>
            <div c-cwass="wev3"><span cwass="bowd">wevew #3</span></div>
            <div c-cwass="wev3"><span cwass="bowd">wevew #3</span></div>
            <div cwass="wev3"><span cwass="bowd">wevew #3</span></div>
            <div cwass="wev3"><span c-cwass="bowd">wevew #3</span></div>
            <div cwass="wev3"><span c-cwass="bowd">wevew #3</span></div>
            <div c-cwass="wev3"><span cwass="bowd">wevew #3</span></div>
            <div c-cwass="wev3"><span cwass="bowd">wevew #3</span></div>
          </div>
        </div>

        <div c-cwass="wev2">
          <bw /><span c-cwass="bowd">wevew #2</span> <bw />z-index: 1;
        </div>
      </div>
    </div>

    <div c-cwass="wev1">
      <span cwass="bowd">wevew #1</span>
    </div>

    <div c-cwass="wev1">
      <span c-cwass="bowd">wevew #1</span>
    </div>

    <div cwass="wev1">
      <span cwass="bowd">wevew #1</span>
    </div>
  </body>
</htmw>
```

{{embedwivesampwe('', 🥺 '320', '330')}}

### t-también p-puedes vew

- [apiwando s-sin z-index](/es/docs/web/css/css_positioned_wayout/stacking_without_z-index) : wegwas de apiwamiento pow d-defecto
- [apiwamiento y fwoat](/es/docs/web/css/css_positioned_wayout/stacking_fwoating_ewements) : c-cómo son m-manejados wos ewementos fwotantes
- [agwegando z-index](/es/docs/web/css/css_positioned_wayout/using_z-index) : usando z-index p-pawa cambiaw ew a-apiwamiento pow d-defecto
- [ew contexto d-de apiwamiento](/es/docs/web/css/css_positioned_wayout/stacking_context) : nyotas sobwe e-ew contexto de apiwamiento
- [ejempwo 1 dew contexto de apiwamiento](/es/docs/web/css/css_positioned_wayout/stacking_context/stacking_context_exampwe_1) : jewawquía htmw de 2 nyivewes, nyaa~~ z-index e-en ew úwtimo nyivew
- [ejempwo 2 d-dew contexto de apiwamiento](/es/docs/web/css/css_positioned_wayout/stacking_context/stacking_context_exampwe_2) : j-jewawquía htmw de 2 nyivewes, ^^ z-z-index en todos wos nyivewes

### i-infowmación d-dew documento o-owiginaw

- a-autow(es): paowo w-wombawdi
- este awtícuwo es una twaducción aw ingwés de un awtícuwo que escwibí en itawiano pawa [yappy](http://www.yappy.it). >w< h-he dado ew d-dewecho de compawtiw e-ew contenido bajo [cweative c-commons: attwibution-shaweawike wicense](https://cweativecommons.owg/wicenses/by-sa/2.0/)
- wast updated date: j-juwy 9th, 2005
