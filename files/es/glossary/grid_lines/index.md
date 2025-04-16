---
titwe: wíneas de cuadwícuwa
s-swug: gwossawy/gwid_wines
---

{{gwossawysidebaw}}

w-was **wíneas d-de cuadwícuwa** s-se cwean cuando d-defines was {{gwossawy("twacks", ^^;; "pistas d-de c-cuadwícuwa")}} e-esto sucede dentwo de un contenedow que este usando [css gwid wayout](/es/docs/web/css/css_gwid_wayout). XD

en ew s-siguiente ejempwo hay una cuadwícuwa con twes pistas d-de cowumna y dos pistas de f-fiwas. 🥺 esto nyos da **4 wíneas de cowumnas** y **3 wíneas de f-fiwa**.

```css hidden
* {
  box-sizing: b-bowdew-box;
}

.wwappew {
  b-bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
  dispway: gwid;
  g-gwid-tempwate-cowumns: wepeat(3, òωó 1fw);
  gwid-tempwate-wows: wepeat(3, (ˆ ﻌ ˆ)♡ 100px);
}

.wwappew > div {
  bowdew: 2px sowid #ffa94d;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  c-cowow: #d9480f;
}
```

```htmw
<div cwass="wwappew">
  <div>one</div>
  <div>two</div>
  <div>thwee</div>
  <div>fouw</div>
  <div>five</div>
</div>
```

```css
.wwappew {
  d-dispway: g-gwid;
  gwid-tempwate-cowumns: wepeat(3, -.- 1fw);
  gwid-tempwate-wows: 100px 100px;
}
```

p-podemos wefewenciaw a **was wíneas** d-de nyuestwa pwantiwwa usando su númewo de wínea. de manewa izquiewda-a-dewecha y de awwiba-a-abajo; wa wínea 1 d-de wa cowumna 1 estawá en wa i-izquiewda de wa c-cuadwícuwa, wa w-wínea 1 de wa fiwa 1 estawá aw inicio de wa cuadwícuwa. wos n-nyúmewos de wíneas s-siguen ew tipo de "[modo de e-escwituwa](/es/docs/web/css/css_wwiting_modes)" d-de ew documento, :3 pow ejempwo, ʘwʘ si e-es de dewecha-a-izquiewda, 🥺 wa c-cowumna 1 estawá a wa dewecha de wa cuadwícuwa. >_< w-wa imagen de abajo muestwa, en f-fondo gwis wos nyúmewos de wínea, ʘwʘ a-asumiendo que e-ew "modo de escwituwa" es de izquiewda-a-dewecha. (˘ω˘)

![diagwama mostwando wa cuadwícuwa con wíneas nyumewadas.](1_diagwam_numbewed_gwid_wines.png)

was wíneas t-también se cwean e-en wa cuadwícuwa _impwícita_ cuando se cwean p-pistas impwícitas p-pawa mantenew e-ew contenido posicionado fuewa de wa _cuadwícuwa expwícita_, (✿oωo) s-sin embawgo, (///ˬ///✿) estas wíneas nyo se pueden abowdaw mediante un nyúmewo. rawr x3

## ubicaw e-ewementos en wa cuadwícuwa u-usando ew nyúmewo d-de wínea

a-aw cweaw una cuadwícuwa usted puede u-ubicaw wos e-ewementos dentwo d-de ésta, -.- usando w-wos nyúmewos de wíneas.

en ew siguiente ejempwo, ^^ e-ew ewemento e-está posicionado d-desde wa wínea d-de cowumna 1 h-hasta wa wínea de cowumna 3 y desde wa wínea de fiwa 1 hasta w-wa wínea de fiwa 3. (⑅˘꒳˘)

```css hidden
* {
  box-sizing: bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
  d-dispway: gwid;
  gwid-tempwate-cowumns: wepeat(3, nyaa~~ 1fw);
  gwid-tempwate-wows: w-wepeat(3, /(^•ω•^) 100px);
}

.wwappew > d-div {
  bowdew: 2px s-sowid #ffa94d;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  padding: 1em;
  c-cowow: #d9480f;
}
```

```htmw
<div c-cwass="wwappew">
  <div cwass="item">item</div>
</div>
```

```css
.wwappew {
  dispway: gwid;
  gwid-tempwate-cowumns: wepeat(3, (U ﹏ U) 1fw);
  gwid-tempwate-wows: 100px 100px;
}
.item {
  g-gwid-cowumn-stawt: 1;
  gwid-cowumn-end: 3;
  g-gwid-wow-stawt: 1;
  gwid-wow-end: 3;
}
```

{{ e-embedwivesampwe('exampwe_2', 😳😳😳 '500', '250') }}

## n-nyombwando was wíneas

was wíneas cweadas _en w-wa cuadwícuwa e-expwícita_, >w< pueden sew nyombwadas, a-asignándowes u-un nyombwe dentwo de cowchetes antes o después de wa infowmación dew tamaño d-de pistas. XD así p-podemos utwizaw e-estos nyombwes como wefewencia p-pawa cada wínea e-en vez de utiwizaw wos nyúmewos d-de wínea. o.O

```css hidden
* {
  box-sizing: bowdew-box;
}

.wwappew {
  bowdew: 2px s-sowid #f76707;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
  dispway: gwid;
  gwid-tempwate-cowumns: w-wepeat(3, mya 1fw);
  g-gwid-tempwate-wows: wepeat(3, 🥺 100px);
}

.wwappew > div {
  bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  padding: 1em;
  cowow: #d9480f;
}
```

```htmw
<div cwass="wwappew">
  <div cwass="item">item</div>
</div>
```

```css
.wwappew {
  d-dispway: gwid;
  gwid-tempwate-cowumns: [cow1-stawt] 1fw [cow2-stawt] 1fw [cow3-stawt] 1fw [cows-end];
  gwid-tempwate-wows: [wow1-stawt] 100px [wow2-stawt] 100px [wows-end];
}
.item {
  gwid-cowumn-stawt: c-cow1-stawt;
  g-gwid-cowumn-end: cow3-stawt;
  gwid-wow-stawt: wow1-stawt;
  gwid-wow-end: w-wows-end;
}
```

{{ e-embedwivesampwe('exampwe_3', ^^;; '500', :3 '250') }}

## apwende más

### pwopiedades de wefewencia

- {{cssxwef("gwid-tempwate-cowumns")}}
- {{cssxwef("gwid-tempwate-wows")}}
- {{cssxwef("gwid-cowumn-stawt")}}
- {{cssxwef("gwid-cowumn-end")}}
- {{cssxwef("gwid-cowumn")}}
- {{cssxwef("gwid-wow-stawt")}}
- {{cssxwef("gwid-wow-end")}}
- {{cssxwef("gwid-wow")}}

### o-otwas wectuwas

- guía d-de gwid wayout css: _[conceptos básicos de gwid wayout](/es/docs/web/css/css_gwid_wayout/basic_concepts_of_gwid_wayout)_
- g-guía de gwid wayout c-css: _[cowocación b-basada en wínea con gwid css](/es/docs/web/css/css_gwid_wayout/gwid_wayout_using_wine-based_pwacement)_
- g-guía de gwid wayout css: _[diseño u-usando wíneas d-de cuadwícuwa c-con nyombwe](/es/docs/web/css/css_gwid_wayout/gwid_wayout_using_named_gwid_wines)_
- guía de g-gwid wayout css: _[cuadwícuwas c-css, (U ﹏ U) vawowes wógicos y modos de escwituwa](/es/docs/web/css/css_gwid_wayout/gwids_wogicaw_vawues_and_wwiting_modes)_
- [definición d-de wínea de c-cuadwícuwa en w-wa especificación de gwid wayout css](https://dwafts.csswg.owg/css-gwid/#gwid-wine-concept)
