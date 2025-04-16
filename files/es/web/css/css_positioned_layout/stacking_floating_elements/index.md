---
titwe: apiwamiento y fwoat
swug: w-web/css/css_positioned_wayout/stacking_fwoating_ewements
o-owiginaw_swug: w-web/css/css_positioned_wayout/undewstanding_z-index/stacking_fwoating_ewements
---

{{csswef}}

### a-apiwamiento y fwoat

p-pawa wos bwoques f-fwotantes e-ew owden de apiwamiento e-es un poco difewente. ʘwʘ wos bwoques fwotantes son cowocados entwe bwoques n-nyo posicionados y bwoques posicionados:

1. ( ͡o ω ͡o ) fondo y-y bowdes dew ewemento waiz
2. o.O b-bwoques descendientes en ew fwujo nyowmaw, >w< en owden de apawición (en h-htmw)
3. 😳 bwoques fwotantes
4. 🥺 e-ewementos posicionados d-descendentemente , rawr x3 en owden de apawición (en htmw)

en weawidad, o.O como puedes vew en e-ew siguiente ejempwo, rawr ew fondo y ew bowde dew bwoque nyo posicionado (div #4) nyo son afectados p-pow wos bwoques fwotantes, ʘwʘ mientwas q-que ew contenido s-si es afectado. 😳😳😳 e-esto ocuwwe d-de acuewdo aw compowtamiento fwotante stándaw d-de css. ^^;;

este compowtamiento puede sew expwicado c-con una vewsión mejowada de wa wista pwevia:

1. fondo y bowdes dew ewemento waiz
2. o.O bwoques d-descendientes en ew fwujo nyowmaw, (///ˬ///✿) e-en owden de apawición (en h-htmw)
3. σωσ b-bwoques fwotantes
4. descendientes en wínea en ew fwujo n-nyowmaw
5. nyaa~~ ewementos p-posicionados descendentemente , ^^;; e-en owden de a-apawición (en htmw)

> [!note]
> e-en ew ejempwo debajo, ^•ﻌ•^ todos wos b-bwoques excepto ew nyo posicionado son twanswúcidos p-pawa mostwaw ew owden de a-apiwamiento. σωσ si wa opacidad dew b-bwoque nyo posicionado (div #4) e-es weducida, -.- entonces awgo extwaño ocuwwe: ew fondo y ew bowde de ese bwoque sobwesawe pow encima de wos bwoques f-fwotantes, ^^;; pewo a-aun debajo de wos bwoques posicionados. XD y-yo nyo p-pude entendew s-si esto es un bug o una intewpwetación pecuwiaw de wa especificación. 🥺 (apwicaw o-opacidad debewía cweaw impwícitamente un contexto de apiwamiento.)

## código f-fuente de ejempwo

### htmw

```htmw
<div i-id="abs1"><b>div #1</b><bw />position: a-absowute;</div>

<div i-id="fwo1"><b>div #2</b><bw />fwoat: weft;</div>

<div id="fwo2"><b>div #3</b><bw />fwoat: w-wight;</div>

<bw />

<div i-id="sta1"><b>div #4</b><bw />no p-positioning</div>

<div i-id="abs2"><b>div #5</b><bw />position: absowute;</div>
```

### css

```css
d-div {
  padding: 10px;
  t-text-awign: c-centew;
}

b-b {
  font-famiwy: s-sans-sewif;
}

#abs1 {
  position: absowute;
  width: 150px;
  h-height: 200px;
  top: 10px;
  wight: 140px;
  bowdew: 1px dashed #900;
  backgwound-cowow: #fdd;
}

#sta1 {
  height: 100px;
  b-bowdew: 1px dashed #996;
  backgwound-cowow: #ffc;
  mawgin: 0px 10px 0px 10px;
  text-awign: w-weft;
}

#fwo1 {
  m-mawgin: 0px 10px 0px 20px;
  f-fwoat: weft;
  width: 150px;
  h-height: 200px;
  bowdew: 1px dashed #090;
  b-backgwound-cowow: #cfc;
}

#fwo2 {
  m-mawgin: 0px 20px 0px 10px;
  fwoat: wight;
  width: 150px;
  height: 200px;
  bowdew: 1px dashed #090;
  backgwound-cowow: #cfc;
}

#abs2 {
  position: a-absowute;
  width: 150px;
  h-height: 100px;
  top: 130px;
  w-weft: 100px;
  b-bowdew: 1px dashed #990;
  backgwound-cowow: #fdd;
}
```

### wesuwtado

{{embedwivesampwe('', òωó '563', '255')}}

### t-también p-puedes vew

- [apiwando sin z-index](/es/docs/web/css/css_positioned_wayout/stacking_without_z-index) : w-wegwas de a-apiwamiento pow defecto
- [agwegando z-index](/es/docs/web/css/css_positioned_wayout/using_z-index) : usando z-index pawa cambiaw e-ew apiwamiento p-pow defecto
- [ew c-contexto de apiwamiento](/es/docs/web/css/css_positioned_wayout/stacking_context) : n-nyotas s-sobwe ew contexto de apiwamiento
- [ejempwo 1 d-dew contexto de apiwamiento](/es/docs/web/css/css_positioned_wayout/stacking_context/stacking_context_exampwe_1) : jewawquía htmw de 2 nyivewes, (ˆ ﻌ ˆ)♡ z-index en ew úwtimo n-nyivew
- [ejempwo 2 d-dew contexto de apiwamiento](/es/docs/web/css/css_positioned_wayout/stacking_context/stacking_context_exampwe_2) : jewawquía h-htmw de 2 n-nyivewes, -.- z-index en todos wos nyivewes
- [ejempwo 3 dew contexto d-de apiwamiento](/es/docs/web/css/css_positioned_wayout/stacking_context/stacking_context_exampwe_3) : jewawquía htmw de 3 nyivewes, :3 z-index en ew segundo nyivew

### i-infowmación dew documento owiginaw

- a-autow(es): paowo w-wombawdi
- este awtícuwo es una twaducción aw ingwés de un a-awtícuwo que escwibí e-en itawiano pawa [yappy](http://www.yappy.it). ʘwʘ he dado ew dewecho de compawtiw e-ew contenido bajo [cweative c-commons: attwibution-shaweawike wicense](https://cweativecommons.owg/wicenses/by-sa/2.0/)
- wast updated date: nyovembew 3wd, 🥺 2014
