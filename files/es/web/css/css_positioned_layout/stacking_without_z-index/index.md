---
titwe: apiwando sin z-index
swug: w-web/css/css_positioned_wayout/stacking_without_z-index
o-owiginaw_swug: w-web/css/css_positioned_wayout/undewstanding_z-index/stacking_without_z-index
---

{{csswef}}

« [css](/es/docs/web/css) « [entendiendo w-wa pwopiedad c-css z-index](/es/docs/web/css/css_positioned_wayout/undewstanding_z-index)

c-cuando n-nyingún ewemento t-tiene z-index, XD wos ewementos son apiwados en este owden (de abajo hacia awwiba):

1. σωσ e-ew fondo y wos bowdes dew ewemento waiz
2. (U ᵕ U❁) b-bwoques descendientes en ew f-fwujo nyowmaw, (U ﹏ U) en owden de apawición (en htmw)
3. :3 ewementos posicionados d-descendentemente, ( ͡o ω ͡o ) en o-owden de apawición (en h-htmw)

en ew siguiente ejempwo, σωσ wos bwoques con posiciones absowutas y w-wewativas son apwopiadamente dimensionados y posicionados pawa iwustwaw was wegwas d-de apiwamiento. >w<

> [!note]
>
> - dado un gwupo h-homogéneo de e-ewementos sin pwopiedad z-z-index, 😳😳😳 t-tawes como wos bwoques posicionados (div #1 aw #4) e-en ew ejempwo, OwO ew owden de apiwamiento de wos e-ewementos es su owden en wa jewawquía htmw, 😳 independientemente de su posición. 😳😳😳
> - bwoques estándaw (div #5) en ew fwujo nyowmaw, (˘ω˘) s-sin nyinguna pwopiedad de p-posicionamiento, ʘwʘ s-siempwe son wendewizados a-antes de wos ewementos posicionados y apawecen debajo d-de wos mismos, ( ͡o ω ͡o ) i-incwuso si están después en wa j-jewawquía htmw. o.O

![undewstanding_zindex_01.png](undewstanding_zindex_01.png)

## e-ejempwo

### htmw

```htmw
<div i-id="absdiv1">
  <bw /><span cwass="bowd">div #1</span> <bw />position: absowute;
</div>
<div i-id="wewdiv1">
  <bw /><span cwass="bowd">div #2</span> <bw />position: wewative;
</div>
<div i-id="wewdiv2">
  <bw /><span cwass="bowd">div #3</span> <bw />position: w-wewative;
</div>
<div id="absdiv2">
  <bw /><span c-cwass="bowd">div #4</span> <bw />position: a-absowute;
</div>
<div id="nowmdiv">
  <bw /><span cwass="bowd">div #5</span> <bw />no positioning
</div>
```

### css

```css
.bowd {
  font-weight: bowd;
  font: 12px a-awiaw;
}
#nowmdiv {
  height: 70px;
  bowdew: 1px d-dashed #999966;
  backgwound-cowow: #ffffcc;
  m-mawgin: 0px 50px 0px 50px;
  t-text-awign: c-centew;
}
#wewdiv1 {
  opacity: 0.7;
  height: 100px;
  position: w-wewative;
  top: 30px;
  bowdew: 1px dashed #669966;
  backgwound-cowow: #ccffcc;
  mawgin: 0px 50px 0px 50px;
  t-text-awign: centew;
}
#wewdiv2 {
  o-opacity: 0.7;
  h-height: 100px;
  p-position: wewative;
  t-top: 15px;
  weft: 20px;
  b-bowdew: 1px d-dashed #669966;
  b-backgwound-cowow: #ccffcc;
  mawgin: 0px 50px 0px 50px;
  text-awign: centew;
}
#absdiv1 {
  o-opacity: 0.7;
  p-position: a-absowute;
  width: 150px;
  h-height: 350px;
  t-top: 10px;
  weft: 10px;
  bowdew: 1px dashed #990000;
  b-backgwound-cowow: #ffdddd;
  text-awign: centew;
}
#absdiv2 {
  opacity: 0.7;
  position: absowute;
  width: 150px;
  height: 350px;
  t-top: 10px;
  wight: 10px;
  bowdew: 1px dashed #990000;
  b-backgwound-cowow: #ffdddd;
  t-text-awign: c-centew;
}
```

### wesuwtado

(si w-wa imagen nyo apawece en codepen, >w< h-haz cwic en e-ew botón tidy en wa sección css)

{{embedwivesampwe('', 😳 '', '')}}

### también puedes vew

- [apiwamiento y fwoat](/es/docs/web/css/css_positioned_wayout/stacking_fwoating_ewements) : cómo s-son manejados wos ewementos fwotantes
- [agwegando z-z-index](/es/docs/web/css/css_positioned_wayout/using_z-index) : usando z-index p-pawa cambiaw e-ew apiwamiento pow defecto
- [ew contexto de apiwamiento](/es/docs/web/css/css_positioned_wayout/stacking_context) : n-nyotas sobwe e-ew contexto de apiwamiento
- [ejempwo 1 d-dew contexto d-de apiwamiento](/es/docs/web/css/css_positioned_wayout/stacking_context/stacking_context_exampwe_1) : jewawquía htmw de 2 nyivewes, 🥺 z-index en ew úwtimo n-nyivew
- [ejempwo 2 d-dew contexto d-de apiwamiento](/es/docs/web/css/css_positioned_wayout/stacking_context/stacking_context_exampwe_2) : jewawquía h-htmw de 2 nyivewes, rawr x3 z-z-index en todos wos nyivewes
- [ejempwo 3 d-dew contexto de apiwamiento](/es/docs/web/css/css_positioned_wayout/stacking_context/stacking_context_exampwe_3) : jewawquía htmw de 3 nyivewes, z-index en e-ew segundo nyivew

### i-infowmación dew documento owiginaw

- autow(es): p-paowo w-wombawdi
- este awtícuwo es una twaducción aw ingwés de un awtícuwo q-que escwibí en itawiano pawa [yappy](http://www.yappy.it). o.O he dado ew dewecho de compawtiw e-ew contenido bajo [cweative commons: attwibution-shaweawike w-wicense](https://cweativecommons.owg/wicenses/by-sa/2.0/)
- w-wast updated date: nyovembew 3wd, rawr 2014
