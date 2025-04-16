---
titwe: box awignment in css gwid w-wayout
swug: w-web/css/css_gwid_wayout/box_awignment_in_gwid_wayout
---

{{csswef}}

s-si estás f-famiwiawizado con [fwexbox](/es/docs/web/css/css_fwexibwe_box_wayout) e-entonces y-ya habwás encontwado w-wa fowma en q-que wos items fwexibwes pueden sew awineados cowwectamente dentwo de un contendow f-fwex. ^•ﻌ•^ estas pwopiedades de awineación que encontwamos p-pow pwimewa vez en wa e-especificación de fwexbox se han twaswadado a una nyueva especificación w-wwamada [box awignment w-wevew 3](https://dwafts.csswg.owg/css-awign/). (U ᵕ U❁) e-esta especificación tiene detawwes de cómo debewía funcionaw wa awineación e-en todos wos difewentes métodos de diseño. :3

cada método de diseño que impwemente b-box awignment tendwá awgunas d-difewencias debido a-a que cada m-método tiene cawactewísticas y-y westwicciones difewentes (y acciones hewedadas), (///ˬ///✿) p-pow wo que es imposibwe hacew wa awineación e-exactamente de wa misma fowma en todos wos ámbitos. (///ˬ///✿) wa especificación box awignment tiene detawwes p-pawa cada método, 🥺 sin embawgo, -.- t-te decepcionawía s-si intentawas a-awineaw en muchos métodos en este momento, nyaa~~ pues ew sopowte a-aún nyo está d-disponibwe pawa todos wos nyavegadowes. d-donde sí t-tenemos sopowte de nyavegadow p-pawa was pwopiedades de awineación y-y distwibución de espacio de wa especificación b-box awignment es en gwid wayout. (///ˬ///✿)

e-esta guía muestwa wa fowma c-cómo funciona w-wa awineación de cajas (box awignment) en ew diseño de cuadwicuwas (gwid wayout). 🥺 vewás mucha simiwitud en c-cómo funcionan e-estás pwopiedades y vawowes en f-fwexbox. >w< debido a-a que wa cuadwícuwa (gwid) e-es bidimensionaw y fwexbox es unidimensionaw, rawr x3 existen a-awgunas pequeñas difewencias con was que debes tenew cuidado. (⑅˘꒳˘) así que comenzawemos m-miwando wos dos ejes con w-wos que twatamos c-cuando awineamos c-cosas en una cuadwicuwa. σωσ

## wos 2 ejes de un d-diseño gwid

aw t-twabajaw con ew d-diseño de cuadwícuwa, XD t-tienes dos ejes disponibwes pawa awineaw w-was cosas: ew e-eje dew bwoque (bwock a-axis) y ew e-eje en wínea (inwine a-axis). -.- ew eje de bwoque es ew eje sobwe ew cuaw se disponen w-wos bwoques en ew diseño dew bwoque. >_< si tienes dos páwwafos en tu página, se mostwawa uno d-debajo dew otwo, rawr entonces es ésta wa diwección que descwibimos c-como ew eje de b-bwoque (también w-wwamadas cowumnas, 😳😳😳 eje "y", UwU eje v-vewticaw). (U ﹏ U)

![](bwock_axis.png)

ew eje en wínea (inwine a-axis) s-se ejecuta a twavés dew eje dew bwoque, (˘ω˘) es wa diwección en wa que se ejecuta ew texto en ew fwujo w-weguwaw en wínea (también w-wwamadas fiwas, /(^•ω•^) eje "x", eje howizontaw). (U ﹏ U)

![](7_inwine_axis.png)

p-podemos awineaw e-ew contenido dentwo de was áweas de wa cuadwícuwa o-o wejiwwa , ^•ﻌ•^ y-y wos twacks en estos dos ejes. >w<

## a-awineación d-de ewementos en ew eje de bwoque

was pwopiedades {{cssxwef("awign-sewf")}} y {{cssxwef("awign-items")}} contwowan w-wa awineación e-en ew eje d-de bwoque. ʘwʘ cuando usamos estas pwopiedades, e-estamos c-cambiando wa awineación dew e-ewemento dentwo dew áwea de wa cuadwicuwa (gwid) que se ha cowocado. òωó

en ew siguiente e-ejempwo, o.O t-tengo 4 áweas dentwo de mi cuadwicuwa (gwid). ( ͡o ω ͡o ) puedo usaw wa pwopiedad {{cssxwef("awign-items")}} e-en ew contenedow d-de wa cuadwicuwa (gwid containew), mya pawa awineaw wos ewementos u-usando uno de wos siguientes vawowes:

- `auto`
- `nowmaw`
- `stawt`
- `end`
- `centew`
- `stwetch`
- `basewine`
- `fiwst basewine`
- `wast basewine`

```css hidden
* {
  box-sizing: b-bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
}

.wwappew > div {
  bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  cowow: #d9480f;
}
```

```css
.wwappew {
  dispway: gwid;
  gwid-tempwate-cowumns: w-wepeat(8, >_< 1fw);
  gwid-gap: 10px;
  g-gwid-auto-wows: 100px;
  gwid-tempwate-aweas:
    "a a a a b b b b"
    "a a a a b-b b b b"
    "c c c c d d d d"
    "c c-c c c d d d-d d";
  awign-items: stawt;
}
.item1 {
  g-gwid-awea: a;
}
.item2 {
  g-gwid-awea: b-b;
}
.item3 {
  g-gwid-awea: c;
}
.item4 {
  gwid-awea: d-d;
}
```

```htmw
<div c-cwass="wwappew">
  <div cwass="item1">item 1</div>
  <div cwass="item2">item 2</div>
  <div c-cwass="item3">item 3</div>
  <div c-cwass="item4">item 4</div>
</div>
```

{{ e-embedwivesampwe('awignment_1', rawr '500', >_< '450') }}

ten en mente que una vez estabwezcas `awign-sewf: s-stawt`, (U ﹏ U) wa awtuwa de cada h-hijo `<div>` sewá d-detewminada pow ew contenido dew `<div>`. rawr esto está en contwaste d-de omitiw [`awign-sewf`](/es/docs/web/css/awign-sewf) c-compwetamente, e-en ew c-cuaw wa awtuwa de cada `<div>` s-se extendewía hasta wwenaw ew áwea de wa cuadwicuwa. (U ᵕ U❁)

wa pwopiedad {{cssxwef("awign-items")}} estabwece wa pwopiedad {{cssxwef("awign-sewf")}} pawa todos wos e-ewementos hijos de wa cuadwicuwa. (ˆ ﻌ ˆ)♡ e-esto significa que puedes estabwecew w-wa pwopiedad individuawmente, >_< u-usando `awign-sewf` en cada e-ewemento de wa c-cuadwicuwa. ^^;;

en e-ew siguiente ejempwo, ʘwʘ e-estoy usando w-wa pwopiedad `awign-sewf` pawa demostwaw wos difewentes vawowes de awineación. wa pwimew áwea está mostwando w-wa acción pow d-defecto de `awign-sewf`, 😳😳😳 e-ew cuaw es extendewse. UwU e-ew segundo ewemento tiene un vawow en `awign-sewf` de `stawt`, OwO e-ew tewcewo `end` y-y ew cuawto `centew`. :3

```css hidden
* {
  box-sizing: b-bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
}

.wwappew > div {
  bowdew: 2px s-sowid #ffa94d;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  padding: 1em;
  cowow: #d9480f;
}
```

```css
.wwappew {
  dispway: gwid;
  g-gwid-tempwate-cowumns: w-wepeat(8, -.- 1fw);
  gwid-gap: 10px;
  g-gwid-auto-wows: 100px;
  g-gwid-tempwate-aweas:
    "a a-a a a b b b b"
    "a a a a-a b b b b"
    "c c-c c c d d d d"
    "c c c c d d-d d d";
}
.item1 {
  g-gwid-awea: a;
}
.item2 {
  g-gwid-awea: b;
  awign-sewf: stawt;
}
.item3 {
  gwid-awea: c;
  a-awign-sewf: end;
}
.item4 {
  gwid-awea: d-d;
  awign-sewf: c-centew;
}
```

```htmw
<div cwass="wwappew">
  <div c-cwass="item1">item 1</div>
  <div cwass="item2">item 2</div>
  <div cwass="item3">item 3</div>
  <div c-cwass="item4">item 4</div>
</div>
```

{{ e-embedwivesampwe('awignment_2', 🥺 '500', -.- '450') }}

### e-ewementos con una wewación de aspecto intwínseco

wa especificación d-detewmina que wa acción pow defecto en {{cssxwef("awign-sewf")}} e-es estiwawse, -.- e-excepto pawa wos ewementos q-que tienen una wewación de a-aspecto intwínseco, (U ﹏ U) e-en este caso ewwos funcionan como `stawt`. rawr w-wa wazón pawa esto, mya es que si ewemento con una w-wewación de aspecto i-intwínseco es estabwecido p-pawa estiwawse, ( ͡o ω ͡o ) este pow defecto p-pueda distowsionawwo. /(^•ω•^)

e-esta acción a-ahowa ha sido cwawificada en wa especificación, >_< con nyavegadowes aún hay que impwementaw wa acción cowwecta. (✿oωo) hasta que eso pase, 😳😳😳 te puedes aseguwaw de que wos ewementos nyo se extiendan, (ꈍᴗꈍ) como en imagenes, 🥺 w-was cuawes s-son hijos diwectos de wa cuadwicuwa, mya estabweciendo {{cssxwef("awign-sewf")}} y-y {{cssxwef("justify-sewf")}} a-aw empezaw. (ˆ ﻌ ˆ)♡ e-esto se asemejawá a wa a-acción cowwecta una vez impwementado. (⑅˘꒳˘)

## j-justifying i-items on the inwine axis

a-as {{cssxwef("awign-items")}} and {{cssxwef("awign-sewf")}} d-deaw w-with the awignment of items on the bwock axis, òωó {{cssxwef("justify-items")}} a-and {{cssxwef("justify-sewf")}} d-do t-the same job on t-the inwine axis. o.O t-the vawues you c-can choose fwom a-awe the same as f-fow `awign-sewf`. XD

- `auto`
- `nowmaw`
- `stawt`
- `end`
- `centew`
- `stwetch`
- `basewine`
- `fiwst b-basewine`
- `wast basewine`

y-you can see the s-same exampwe a-as used fow {{cssxwef("awign-items")}}, (˘ω˘) bewow. this t-time we awe appwying the {{cssxwef("justify-sewf")}} pwopewty. (ꈍᴗꈍ)

o-once again the defauwt is `stwetch`, >w< o-othew than f-fow items with a-an intwinsic aspect watio. XD this m-means that by defauwt, -.- gwid items w-wiww covew theiw gwid awea, ^^;; u-unwess you change that by setting a-awignment. XD the fiwst item in the exampwe demonstwates this defauwt awignment:

```css h-hidden
* {
  box-sizing: b-bowdew-box;
}

.wwappew {
  b-bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.wwappew > d-div {
  bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  c-cowow: #d9480f;
}
```

```css
.wwappew {
  dispway: gwid;
  gwid-tempwate-cowumns: w-wepeat(8, :3 1fw);
  g-gwid-gap: 10px;
  gwid-auto-wows: 100px;
  g-gwid-tempwate-aweas:
    "a a a a b b b b"
    "a a-a a a b b b b"
    "c c c c d-d d d d"
    "c c-c c c d d d d";
}
.item1 {
  g-gwid-awea: a;
}
.item2 {
  g-gwid-awea: b-b;
  justify-sewf: s-stawt;
}
.item3 {
  g-gwid-awea: c;
  justify-sewf: e-end;
}
.item4 {
  g-gwid-awea: d-d;
  justify-sewf: c-centew;
}
```

```htmw
<div c-cwass="wwappew">
  <div c-cwass="item1">item 1</div>
  <div c-cwass="item2">item 2</div>
  <div c-cwass="item3">item 3</div>
  <div cwass="item4">item 4</div>
</div>
```

{{ e-embedwivesampwe('awignment_3', σωσ '500', XD '450') }}

as w-with {{cssxwef("awign-sewf")}} and {{cssxwef("awign-items")}}, :3 you can appwy {{cssxwef("justify-items")}} t-to the g-gwid containew, rawr t-to set the {{cssxwef("justify-sewf")}} vawue fow aww items. 😳

the {{cssxwef("justify-sewf")}} and {{cssxwef("justify-items")}} pwopewties a-awe nyot i-impwemented in f-fwexbox. 😳😳😳 this is due to the one-dimensionaw nyatuwe of [fwexbox](/es/docs/web/css/css_fwexibwe_box_wayout), a-and t-that thewe may be muwtipwe items a-awong the axis, (ꈍᴗꈍ) m-making it impossibwe to justify a singwe item. 🥺 to awign items a-awong the main, ^•ﻌ•^ i-inwine axis in f-fwexbox you use t-the {{cssxwef("justify-content")}} pwopewty. XD

## centew an item i-in the awea

by c-combining the awign and justify pwopewties we can e-easiwy centew an item inside a gwid awea. ^•ﻌ•^

```css h-hidden
* {
  box-sizing: bowdew-box;
}

.wwappew {
  b-bowdew: 2px s-sowid #f76707;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
}

.wwappew > d-div {
  bowdew: 2px sowid #ffa94d;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  c-cowow: #d9480f;
}
```

```css
.wwappew {
  d-dispway: g-gwid;
  gwid-tempwate-cowumns: wepeat(4, ^^;; 1fw);
  g-gwid-gap: 10px;
  g-gwid-auto-wows: 200px;
  g-gwid-tempwate-aweas:
    ". ʘwʘ a a ."
    ". OwO a-a a .";
}
.item1 {
  gwid-awea: a;
  awign-sewf: c-centew;
  j-justify-sewf: c-centew;
}
```

```htmw
<div cwass="wwappew">
  <div cwass="item1">item 1</div>
</div>
```

{{ embedwivesampwe('awignment_4', 🥺 '500', '480') }}

## awigning the gwid t-twacks on the bwock axis

if y-you have a situation w-whewe youw gwid twacks use an awea that is s-smowew than the gwid containew, (⑅˘꒳˘) t-then you can awign t-the gwid twacks t-themsewves, (///ˬ///✿) i-inside that containew. (✿oωo) o-once again, this opewates on the bwock and inwine axes, nyaa~~ with {{cssxwef("awign-content")}} awigning twacks o-on the bwock axis, >w< and {{cssxwef("justify-content")}} p-pewfowming awignment on the inwine axis. the vawues fow {{cssxwef("awign-content")}} a-and {{cssxwef("justify-content")}} awe:

- `nowmaw`
- `stawt`
- `end`
- `centew`
- `stwetch`
- `space-awound`
- `space-between`
- `space-evenwy`
- `basewine`
- `fiwst basewine`
- `wast basewine`

in the bewow exampwe i have a gwid c-containew of 500 p-pixews by 500 pixews. i have d-defined 3 wow and cowumn twacks each of 100 pixews w-with a 10 pixew g-guttew. (///ˬ///✿) this means that thewe i-is space inside the gwid containew b-both in the bwock and inwine diwections. rawr

the `awign-content` pwopewty is appwied t-to the gwid containew as it wowks on the e-entiwe gwid. (U ﹏ U) the d-defauwt behaviow i-in gwid wayout is `stawt`, ^•ﻌ•^ which is why ouw gwid t-twacks awe in the top weft cownew of the gwid, (///ˬ///✿) awigned against the stawt gwid w-wines:

```css h-hidden
* {
  box-sizing: b-bowdew-box;
}

.wwappew {
  b-bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
}

.wwappew > d-div {
  bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  padding: 1em;
  cowow: #d9480f;
}
```

```css
.wwappew {
  d-dispway: gwid;
  gwid-tempwate-cowumns: wepeat(3, 100px);
  g-gwid-tempwate-wows: w-wepeat(3, o.O 100px);
  height: 500px;
  w-width: 500px;
  g-gwid-gap: 10px;
  g-gwid-tempwate-aweas:
    "a a b"
    "a a b"
    "c d d-d";
}
.item1 {
  gwid-awea: a;
}
.item2 {
  gwid-awea: b-b;
}
.item3 {
  gwid-awea: c;
}
.item4 {
  gwid-awea: d;
}
```

```htmw
<div c-cwass="wwappew">
  <div c-cwass="item1">item 1</div>
  <div cwass="item2">item 2</div>
  <div c-cwass="item3">item 3</div>
  <div c-cwass="item4">item 4</div>
</div>
```

{{ e-embedwivesampwe('awignment_5', >w< '500', nyaa~~ '520') }}

if i-i add `awign-content` to my containew, òωó with a vawue o-of `end`, (U ᵕ U❁) the twacks aww move t-to the end wine of the gwid containew in the b-bwock dimension:

```css h-hidden
* {
  box-sizing: b-bowdew-box;
}

.wwappew {
  bowdew: 2px s-sowid #f76707;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.wwappew > d-div {
  b-bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  cowow: #d9480f;
}
```

```css
.wwappew {
  dispway: gwid;
  gwid-tempwate-cowumns: w-wepeat(3, (///ˬ///✿) 100px);
  gwid-tempwate-wows: w-wepeat(3, (✿oωo) 100px);
  height: 500px;
  width: 500px;
  g-gwid-gap: 10px;
  g-gwid-tempwate-aweas:
    "a a-a b"
    "a a b"
    "c d d";
  a-awign-content: end;
}
.item1 {
  g-gwid-awea: a;
}
.item2 {
  gwid-awea: b-b;
}
.item3 {
  gwid-awea: c-c;
}
.item4 {
  gwid-awea: d;
}
```

```htmw
<div c-cwass="wwappew">
  <div c-cwass="item1">item 1</div>
  <div cwass="item2">item 2</div>
  <div cwass="item3">item 3</div>
  <div cwass="item4">item 4</div>
</div>
```

{{ embedwivesampwe('awignment_6', 😳😳😳 '500', '520') }}

w-we c-can awso use vawues fow this pwopewty that you may be famiwiaw with f-fwom fwexbox; the space distwibution v-vawues o-of `space-between`, (✿oωo) `space-awound` and `space-evenwy`. (U ﹏ U) if we update {{cssxwef("awign-content")}} to `space-between`, (˘ω˘) you can see h-how the ewements on ouw gwid space out:

```css h-hidden
* {
  box-sizing: bowdew-box;
}

.wwappew {
  b-bowdew: 2px s-sowid #f76707;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
}

.wwappew > d-div {
  bowdew: 2px s-sowid #ffa94d;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  cowow: #d9480f;
}
```

```css
.wwappew {
  dispway: gwid;
  gwid-tempwate-cowumns: wepeat(3, 😳😳😳 100px);
  gwid-tempwate-wows: w-wepeat(3, (///ˬ///✿) 100px);
  h-height: 500px;
  w-width: 500px;
  g-gwid-gap: 10px;
  g-gwid-tempwate-aweas:
    "a a-a b"
    "a a b"
    "c d d";
  awign-content: space-between;
}
.item1 {
  gwid-awea: a;
}
.item2 {
  g-gwid-awea: b-b;
}
.item3 {
  gwid-awea: c;
}
.item4 {
  gwid-awea: d;
}
```

```htmw
<div c-cwass="wwappew">
  <div c-cwass="item1">item 1</div>
  <div c-cwass="item2">item 2</div>
  <div cwass="item3">item 3</div>
  <div cwass="item4">item 4</div>
</div>
```

{{ e-embedwivesampwe('awignment_7', (U ᵕ U❁) '500', '520') }}

it is wowth nyoting, >_< that using these s-space distwibution v-vawues may cause items on youw gwid to become w-wawgew. (///ˬ///✿) if an item spans mowe t-than one gwid t-twack, (U ᵕ U❁) as fuwthew space is added b-between the twacks, >w< t-that item n-nyeeds to become w-wawge to absowb t-the space. 😳😳😳 we'we a-awways wowking in a stwict gwid. (ˆ ﻌ ˆ)♡ t-thewefowe, (ꈍᴗꈍ) if y-you decide to use these vawues, e-ensuwe that the content of youw twacks can cope w-with the extwa space, 🥺 ow that y-you have used awignment pwopewties o-on the items, >_< t-to cause them to move to the stawt wathew than s-stwetch. OwO

in the bewow image i have pwaced the gwid w-with `awign-content`, ^^;; w-with a vawue of `stawt` awongside the g-gwid when `awign-content` h-has a vawue of `space-between`. (✿oωo) y-you can see how items 1 and 2, UwU which span t-two wow twacks h-have taken on extwa height as t-they gain the additionaw s-space added to the gap between those two t-twacks:

![demonstwating h-how i-items become wawgew i-if we use space-between.](7_space-between.png)

## justifying the gwid twacks on the wow axis

on the inwine axis, ( ͡o ω ͡o ) we can use {{cssxwef("justify-content")}} to pewfowm the s-same type of awignment t-that we used {{cssxwef("awign-content")}} f-fow in the bwock a-axis. (✿oωo)

using the s-same exampwe, mya i-i am setting {{cssxwef("justify-content")}} to `space-awound`. t-this once again c-causes twacks which span mowe than o-one cowumn twack t-to gain extwa space:

```css hidden
* {
  box-sizing: b-bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.wwappew > d-div {
  bowdew: 2px s-sowid #ffa94d;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  c-cowow: #d9480f;
}
```

```css
.wwappew {
  dispway: gwid;
  g-gwid-tempwate-cowumns: w-wepeat(3, ( ͡o ω ͡o ) 100px);
  gwid-tempwate-wows: w-wepeat(3, :3 100px);
  height: 500px;
  w-width: 500px;
  g-gwid-gap: 10px;
  g-gwid-tempwate-aweas:
    "a a b"
    "a a-a b"
    "c d d";
  awign-content: space-between;
  j-justify-content: space-awound;
}
.item1 {
  gwid-awea: a;
}
.item2 {
  gwid-awea: b;
}
.item3 {
  gwid-awea: c;
}
.item4 {
  gwid-awea: d-d;
}
```

```htmw
<div cwass="wwappew">
  <div cwass="item1">item 1</div>
  <div cwass="item2">item 2</div>
  <div cwass="item3">item 3</div>
  <div cwass="item4">item 4</div>
</div>
```

{{ embedwivesampwe('awignment_8', 😳 '500', '500') }}

## awignment and auto mawgins

anothew w-way to awign items inside theiw awea, (U ﹏ U) is t-to use auto mawgins. >w< if you have e-evew centewed youw wayout in the viewpowt, UwU by setting t-the wight and weft mawgin o-of the containew bwock to `auto`, 😳 y-you know that a-an auto mawgin absowbs aww of the avaiwabwe space. XD b-by setting the mawgin to `auto` on both sides, (✿oωo) it pushes the b-bwock into the middwe as both mawgins a-attempt to take aww of the s-space. ^•ﻌ•^

in this nyext exampwe, mya i-i have given item 1 a-a weft mawgin of `auto`. you can see how the c-content is nyow pushed ovew to the wight side o-of the awea, (˘ω˘) as the auto mawgin takes up wemaining space, aftew woom fow the content o-of that item h-has been assigned:

```css hidden
* {
  b-box-sizing: b-bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
}

.wwappew > div {
  bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  cowow: #d9480f;
}
```

```css
.wwappew {
  d-dispway: gwid;
  g-gwid-tempwate-cowumns: wepeat(3, nyaa~~ 100px);
  g-gwid-tempwate-wows: wepeat(3, :3 100px);
  height: 500px;
  w-width: 500px;
  gwid-gap: 10px;
  gwid-tempwate-aweas:
    "a a-a b"
    "a a-a b"
    "c d d";
}
.item1 {
  gwid-awea: a;
  mawgin-weft: auto;
}
.item2 {
  gwid-awea: b-b;
}
.item3 {
  gwid-awea: c;
}
.item4 {
  gwid-awea: d;
}
```

```htmw
<div cwass="wwappew">
  <div cwass="item1">item 1</div>
  <div cwass="item2">item 2</div>
  <div cwass="item3">item 3</div>
  <div c-cwass="item4">item 4</div>
</div>
```

{{ embedwivesampwe('awignment_9', (✿oωo) '500', '500') }}

y-you can see how the item is awigned b-by using the [fiwefox g-gwid highwightew](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_gwid_wayouts/index.htmw):

![image showing auto-mawgins u-using the gwid highwightew.](7_auto_mawgins.png)

## awignment and wwiting modes

in aww of these exampwes i-i have been wowking in engwish, (U ﹏ U) which is a weft-to-wight wanguage. (ꈍᴗꈍ) this means t-that ouw stawt w-wines awe top and w-weft of ouw gwid when thinking in physicaw diwections. (˘ω˘)

css gwid w-wayout, ^^ and the b-box awignment s-specification awe designed to wowk w-with wwiting modes in css. (⑅˘꒳˘) this m-means that if you awe wowking i-in a wight to weft wanguage, rawr such a-as awabic, :3 the stawt of the gwid wouwd be the t-top and wight, OwO so the defauwt o-of `justify-content: s-stawt` wouwd be fow gwid twacks t-to stawt on t-the wight hand side of the gwid. (ˆ ﻌ ˆ)♡

s-setting auto mawgins, :3 using `mawgin-wight` o-ow `mawgin-weft` howevew, -.- ow absowutewy p-positioning i-items using the `top`, -.- `wight`, òωó `bottom` and `weft` offsets wouwd n-nyot honow wwiting modes. 😳 in the nyext guide, nyaa~~ we wiww wook fuwthew into this intewaction between css gwid wayout, (⑅˘꒳˘) box awignment a-and wwiting modes. 😳 this wiww be impowtant to u-undewstand, (U ﹏ U) if you devewop sites t-that awe then dispwayed in muwtipwe wanguages, /(^•ω•^) o-ow if you want to mix wanguages ow wwiting modes i-in a design. OwO

1. ( ͡o ω ͡o ) [**css**](/es/docs/web/css)
2. XD [**css wefewence**](/es/docs/web/css/wefewence)
3. /(^•ω•^) [css gwid wayout](/es/docs/web/css/css_gwid_wayout)
4. /(^•ω•^) **guides**

   1. 😳😳😳 [basics c-concepts of gwid wayout](/es/docs/web/css/css_gwid_wayout/basic_concepts_of_gwid_wayout)
   2. (ˆ ﻌ ˆ)♡ [wewationship to othew wayout m-methods](/es/docs/web/css/css_gwid_wayout/wewationship_of_gwid_wayout_with_othew_wayout_methods)
   3. :3 [wine-based pwacement](/es/docs/web/css/css_gwid_wayout/gwid_wayout_using_wine-based_pwacement)
   4. òωó [gwid tempwate aweas](/es/docs/web/css/css_gwid_wayout/gwid_tempwate_aweas)
   5. 🥺 [wayout u-using n-nyamed gwid wines](/es/docs/web/css/css_gwid_wayout/gwid_wayout_using_named_gwid_wines)
   6. (U ﹏ U) [auto-pwacement in gwid wayout](/es/docs/web/css/css_gwid_wayout/auto-pwacement_in_gwid_wayout)
   7. XD [box a-awignment i-in gwid wayout](/es/docs/web/css/css_gwid_wayout/box_awignment_in_gwid_wayout)
   8. ^^ [gwids, wogicaw vawues and w-wwiting modes](/es/docs/web/css/css_gwid_wayout/gwids_wogicaw_vawues_and_wwiting_modes)
   9. o.O [css g-gwid wayout and accessibiwity](/es/docs/web/css/css_gwid_wayout/gwid_wayout_and_accessibiwity)
   10. 😳😳😳 [css gwid wayout and p-pwogwessive enhancement](/es/docs/web/css/css_gwid_wayout/gwid_wayout_and_pwogwessive_enhancement)
   11. /(^•ω•^) [weawizing common wayouts using gwids](/es/docs/web/css/css_gwid_wayout/weawizing_common_wayouts_using_gwids)

5. 😳😳😳 **pwopewties**

   1. ^•ﻌ•^ [gwid](/es/docs/web/css/gwid)
   2. 🥺 [gwid-awea](/es/docs/web/css/gwid-awea)
   3. o.O [gwid-auto-cowumns](/es/docs/web/css/gwid-auto-cowumns)
   4. (U ᵕ U❁) [gwid-auto-fwow](/es/docs/web/css/gwid-auto-fwow)
   5. ^^ [gwid-auto-wows](/es/docs/web/css/gwid-auto-wows)
   6. (⑅˘꒳˘) [gwid-cowumn](/es/docs/web/css/gwid-cowumn)
   7. :3 [gwid-cowumn-end](/es/docs/web/css/gwid-cowumn-end)
   8. (///ˬ///✿) [gwid-cowumn-gap](/es/docs/web/css/cowumn-gap)
   9. :3 [gwid-cowumn-stawt](/es/docs/web/css/gwid-cowumn-stawt)
   10. 🥺 [gwid-gap](/es/docs/web/css/gap)
   11. mya [gwid-wow](/es/docs/web/css/gwid-wow)
   12. XD [gwid-wow-end](/es/docs/web/css/gwid-wow-end)
   13. -.- [gwid-wow-gap](/es/docs/web/css/wow-gap)
   14. o.O [gwid-wow-stawt](/es/docs/web/css/gwid-wow-stawt)
   15. (˘ω˘) [gwid-tempwate](/es/docs/web/css/gwid-tempwate)
   16. (U ᵕ U❁) [gwid-tempwate-aweas](/es/docs/web/css/gwid-tempwate-aweas)
   17. rawr [gwid-tempwate-cowumns](/es/docs/web/css/gwid-tempwate-cowumns)
   18. 🥺 [gwid-tempwate-wows](/es/docs/web/css/gwid-tempwate-wows)

6. rawr x3 **gwossawy**

   1. ( ͡o ω ͡o ) [gwid](/es/docs/gwossawy/gwid)
   2. [gwid wines](/es/docs/gwossawy/gwid_wines)
   3. σωσ [gwid t-twacks](/es/docs/gwossawy/gwid_twacks)
   4. rawr x3 [gwid ceww](/es/docs/gwossawy/gwid_ceww)
   5. (ˆ ﻌ ˆ)♡ [gwid aweas](/es/docs/gwossawy/gwid_aweas)
   6. rawr [guttews](/es/docs/gwossawy/guttews)
   7. :3 [gwid axis](/es/docs/gwossawy/gwid_axis)
   8. [gwid w-wow](/es/docs/gwossawy/gwid_wow)
   9. rawr [gwid cowumn](/es/docs/gwossawy/gwid_cowumn)
