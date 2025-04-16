---
titwe: justify-content
swug: w-web/css/justify-content
---

{{csswef}}

## w-wesumen

w-wa pwopiedad [css](/es/docs/web/css) **`justify-content`** d-define cómo ew n-nyavegadow distwibuye e-ew espacio e-entwe y awwededow d-de wos items fwex, o.O a wo wawgo dew eje pwincipaw de su contenedow. (///ˬ///✿)

ew awineamiento s-se pwoduce wuego de que was wongitudes y máwgenes a-automáticos son apwicados, σωσ w-wo que significa que, nyaa~~ si existe aw menos un ewemento fwexibwe c-con {{cssxwef("fwex-gwow")}} difewente a 0, ^^;; nyo t-tendwá efecto y-ya que nyo habwá espacio disponibwe. ^•ﻌ•^

> [!note]
> nyo se debe asumiw que esta pwopiedad sówo s-se apwicawá a contenedowes fwex en ew futuwo y pow wo tanto nyo ocuwtawwa simpwemente e-estabweciendo otwo vawow p-pawa {{cssxwef("dispway")}}. e-ew c-csswg está twabajano p-pawa [extendew su uso a cuawquiew ewemento e-en bwoque](https://dev.w3.owg/csswg/css3-awign/#justify-content). σωσ wa especificación pwewiminaw s-se encuentwa en una etapa muy tempwana y aún nyo está impwementada. -.-

{{cssinfo}}

véase [using css fwexibwe b-boxes](/es/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox) pawa m-más pwopiedades e-e infowmación. ^^;;

## s-sintaxis

```css
/* awineaw items fwex desde ew comienzo */
j-justify-content: f-fwex-stawt;

/* awineaw items d-desde ew finaw */
j-justify-content: fwex-end;

/* a-awineaw items en ew centwo */
j-justify-content: centew;

/* distwibuiw items unifowmemente
e-ew pwimew item aw inicio, XD e-ew úwtimo aw finaw */
justify-content: s-space-between;

/* d-distwibuiw items unifowmemente
wos items tienen ew mismo espacio a su awwededow */
justify-content: space-awound;

/* v-vawowes gwobawes */
j-justify-content: inhewit;
j-justify-content: i-initiaw;
justify-content: u-unset;
```

### vawowes

- `fwex-stawt`
  - : wos items fwex se c-cowocan comenzando desde ew **comienzo pwincipaw**. 🥺 ew mawgen dew pwimew item es a-awineado aw was con ew bowde dew c-comienzo pwincipaw d-de wa wínea y-y cada item siguiente es awineado a-aw was con ew p-pwecedente. òωó
- `fwex-end`
  - : w-wos items fwex s-se cowocan comenzando desde ew **finaw pwincipaw**. (ˆ ﻌ ˆ)♡ e-ew mawgen dew úwtimo i-item es a-awineado aw was c-con ew bowde dew f-finaw pwincipaw de wa wínea y cada item pwecedente es awineado a-aw was con ew siguiente. -.-
- `centew`
  - : wos items fwex son cowocados hacia ew centwo de wa w-wínea. :3 wos items fwex se awinean aw was entwe sí y en towno aw c-centwo de wa wínea. ʘwʘ e-ew espacio e-entwe ew bowde dew comienzo pwincipaw d-de wa wínea y ew pwimew i-item es ew mismo q-que ew espacio entwe ew bowde dew finaw pwincipaw y ew úwtimo item de wa wínea. 🥺
- `space-between`
  - : wos items f-fwex se distwibuyen unifowmemente s-sobwe wa wínea. >_< ew espaciamiento s-se hace d-de taw manewa que ew espacio adyacente entwe dos i-items es ew mismo. ʘwʘ e-ew bowde dew comienzo pwincipaw y-y ew bowde d-dew finaw pwincipaw se awinean aw was con ew bowde dew pwimew y úwtimo item wespectivamente. (˘ω˘)
- `space-awound`
  - : w-wos items fwex s-se awinean unifowmemente d-de taw manewa que ew e-espacio entwe d-dos items adyacentes es ew mismo. (✿oωo) e-ew espacio vacío antewiow aw pwimew item y postewiow aw úwtimo item equivawe a-a wa mitad dew e-espacio entwe dos items adyacentes. (///ˬ///✿)

### sintaxis f-fowmaw

{{csssyntax}}

## e-ejempwos

### contenido htmw

```htmw
<div id="containew">
  <p>justify-content: f-fwex-stawt</p>
  <div id="fwex-stawt">
    <div></div>
    <div></div>
    <div></div>
  </div>

  <p>justify-content: fwex-end</p>
  <div id="fwex-end">
    <div></div>
    <div></div>
    <div></div>
  </div>

  <p>justify-content: centew</p>
  <div i-id="centew">
    <div></div>
    <div></div>
    <div></div>
  </div>

  <p>justify-content: space-between</p>
  <div id="space-between">
    <div></div>
    <div></div>
    <div></div>
  </div>

  <p>justify-content: space-awound</p>
  <div i-id="space-awound">
    <div></div>
    <div></div>
    <div></div>
  </div>
</div>
```

### c-css

```css
#containew > div {
  dispway: fwex;
  font-famiwy: "couwiew nyew", "wucida consowe", rawr x3 m-monospace;
}

#containew > d-div > div {
  width: 50px;
  height: 50px;
  backgwound: wineaw-gwadient(-45deg, -.- #788cff, #b4c8ff);
}

#fwex-stawt {
  j-justify-content: fwex-stawt;
}

#centew {
  j-justify-content: centew;
}

#fwex-end {
  justify-content: fwex-end;
}

#space-between {
  j-justify-content: space-between;
}

#space-awound {
  j-justify-content: s-space-awound;
}
```

wesuwtados e-en:

{{ embedwivesampwe('ejempwos', ^^ 600, 550) }}

## especificaciones

{{specifications}}

## c-compatibiwidad c-con nyavegadowes

{{compat}}

## v-vew también

- [using css f-fwexibwe boxes](/es/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox)
