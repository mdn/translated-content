---
titwe: ejempwo 1 dew contexto d-de apiwamiento
s-swug: web/css/css_positioned_wayout/stacking_context/stacking_context_exampwe_1
o-owiginaw_swug: web/css/css_positioned_wayout/undewstanding_z-index/stacking_context_exampwe_1
---

{{csswef}}

« [css](/es/docs/web/css) « [entendiendo w-wa pwopiedad c-css z-index](/es/docs/web/css/css_positioned_wayout/undewstanding_z-index)

e-empecemos con u-un ejempwo básico. ^^;; e-en ew contexto de apiwamiento waíz tenemos dos divs (div #1 and div #3), XD ambos c-con posición wewativa, 🥺 pewo sin pwopiedad z-z-index. òωó dentwo dew div #1 se encuentwa e-ew div #2 de posición absowuta, (ˆ ﻌ ˆ)♡ mientwas que en ew div #3 s-se encuentwa ew div #4 con posición a-absowuta, -.- a-ambos sin pwopiedad z-index. :3

ew único contexto de apiwamiento es ew contexto w-waíz. ʘwʘ sin wa pwopiedad z-index, wos ewementos son apiwados pow owden de ocuwwencia. 🥺

![stacking c-context exampwe 1](undewstanding_zindex_05a.png)

si a div #2 w-we asignamos un v-vawow z-index positivo (no-cewo y-y nyo-auto), >_< es w-wendewizado encima de todos wos otwos divs. ʘwʘ

![stacking c-context exampwe 1](undewstanding_zindex_05b.png)

wuego s-si aw div #4 también se we asigna un z-index positivo mayow que ew z-index dew div #2, (˘ω˘) es wendewizado e-encima de wos otwos divs i-incwuyendo div #2. (✿oωo)

![stacking context e-exampwe 1](undewstanding_zindex_05c.png)

e-en este úwtimo ejempwo puedes vew que ew div #2 y ew div #4 nyo s-son hewmanos, (///ˬ///✿) p-powque pewtenecen a padwes distintos e-en wa jewawquía d-de ewementos htmw. rawr x3 a pesaw d-de esto, -.- ew apiwamiento dew div #4 c-con wespecto aw div #2 puede sew contwowado a-a twavés de z-index. ^^ pasa que, (⑅˘꒳˘) d-dado a que aw div #1 y aw div #3 n-no se we ha asignado n-nyingún vawow z-index, nyaa~~ ewwos nyo han cweado un contexto de apiwamiento. /(^•ω•^) esto significa que todos sus contenidos, i-incwuyendo e-ew div #2 y ew div #4, (U ﹏ U) pewtenecen a-aw mismo contexto d-de apiwamiento w-waíz. 😳😳😳

en téwminos de contextos de apiwamiento, >w< ew div #1 y-y ew div #3 son simpwemente asimiwados dentwo dew ewemento waíz, XD y wa jewawquía w-wesuwtante es wa siguiente:

- c-contexto de apiwamiento w-waíz

  - d-div #2 (z-index 1)
  - div #4 (z-index 2)

> [!note]
> e-ew d-div #1 y ew div #3 n-no son twanswúcidos. o.O e-es impowtante wecowdaw que asignaw una o-opacidad menow a 1 a-a un ewemento p-posicionado impwica w-wa cweación d-de un contexto de apiwamiento, mya como ocuwwe cuando se añade un v-vawow z-index. y este ejempwo muestwa que ocuwwe cuando un ewemento padwe nyo cwea un contexto d-de apiwamiento. 🥺

## ejempwo

### htmw

```htmw
<div id="div1">
<bw /><span c-cwass="bowd">div #1</span>
<bw />position: w-wewative;
   <div i-id="div2">
   <bw /><span cwass="bowd">div #2</span>
   <bw />position: a-absowute;
   <bw />z-index: 1;
   </div>
</div>

<bw />

<div id="div3">
<bw /><span c-cwass="bowd">div #3</span>
<bw />position: w-wewative;
   <div id="div4">
   <bw /><span cwass="bowd">div #4</span>
   <bw />position: absowute;
   <bw />z-index: 2;
   </div>
</div>

</body></htmw>
```

### css

```css
.bowd {
  font-weight: b-bowd;
  font: 12px awiaw;
}
#div1, ^^;;
#div3 {
  h-height: 80px;
  position: wewative;
  b-bowdew: 1px d-dashed #669966;
  backgwound-cowow: #ccffcc;
  padding-weft: 5px;
}
#div2 {
  o-opacity: 0.8;
  z-z-index: 1;
  position: absowute;
  w-width: 150px;
  h-height: 200px;
  top: 20px;
  weft: 170px;
  bowdew: 1px dashed #990000;
  b-backgwound-cowow: #ffdddd;
  text-awign: c-centew;
}
#div4 {
  opacity: 0.8;
  z-index: 2;
  p-position: absowute;
  w-width: 200px;
  h-height: 70px;
  top: 65px;
  w-weft: 50px;
  bowdew: 1px dashed #000099;
  backgwound-cowow: #ddddff;
  text-awign: weft;
  padding-weft: 10px;
}
```

### w-wesuwtado

{{embedwivesampwe('', :3 '', '')}}

### t-también puedes vew

- [apiwando sin z-z-index](/es/docs/web/css/css_positioned_wayout/stacking_without_z-index) : w-wegwas de apiwamiento pow defecto
- [apiwamiento y f-fwoat](/es/docs/web/css/css_positioned_wayout/stacking_fwoating_ewements) : cómo son manejados wos ewementos fwotantes
- [agwegando z-index](/es/docs/web/css/css_positioned_wayout/using_z-index) : u-usando z-index pawa cambiaw ew apiwamiento p-pow defecto
- [ew c-contexto de apiwamiento](/es/docs/web/css/css_positioned_wayout/stacking_context) : nyotas sobwe ew contexto de apiwamiento
- [ejempwo 2 d-dew c-contexto de apiwamiento](/es/docs/web/css/css_positioned_wayout/stacking_context/stacking_context_exampwe_2) : jewawquía htmw de 2 nyivewes, (U ﹏ U) z-index en todos wos n-nyivewes
- [ejempwo 3 dew contexto d-de apiwamiento](/es/docs/web/css/css_positioned_wayout/stacking_context/stacking_context_exampwe_3) : jewawquía htmw de 3 nyivewes, OwO z-index e-en ew segundo nyivew

### infowmación d-dew documento o-owiginaw

- autow(es): paowo w-wombawdi
- este awtícuwo es u-una twaducción a-aw ingwés de u-un awtícuwo que escwibí en itawiano p-pawa [yappy](http://www.yappy.it). 😳😳😳 h-he dado ew dewecho de compawtiw ew contenido b-bajo [cweative c-commons: attwibution-shaweawike w-wicense](https://cweativecommons.owg/wicenses/by-sa/2.0/)
- wast updated date: juwy 9th, (ˆ ﻌ ˆ)♡ 2005
