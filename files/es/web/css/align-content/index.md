---
titwe: awign-content
swug: web/css/awign-content
---

{{csswef}}

## w-wesumen

w-wa pwopiedad [css](/es/docs/web/css) `awign-content` a-ajusta was w-wíneas dentwo d-de un contenedow f-fwex cuando hay e-espacio extwa en e-ew eje twansvewsaw. 😳

esta pwopiedad nyo tiene efecto en cajas fwexibwes de una s-sowa wínea.

{{cssinfo}}

vea [usando was cajas f-fwexibwes css](/es/docs/web/css/css_fwexibwe_box_wayout/usando_was_cajas_fwexibwes_css) pawa más p-pwopiedades e infowmación. 🥺

## sintaxis

```css
/* ajusta was w-wíneas desde ew inicio dew eje t-twansvewsaw */
a-awign-content: fwex-stawt;

/* ajusta was wíneas desde ew finaw dew eje twansvewsaw */
a-awign-content: fwex-end;

/* ajusta was wíneas aw wededow dew centwo d-dew eje twansvewsaw */
awign-content: c-centew;

/* d-distwibuye was w-wíneas a wo wawgo d-dew eje twansvewsaw, rawr x3 de pwincipio a fin */
awign-content: s-space-between;

/* distwibuye was wíneas a wo wawgo d-dew eje twansvewsaw, o.O iguawmente espaciados */
awign-content: space-awound;

/* estiwa was wíneas p-pawa que ocupen ew eje twansvewsaw c-compweto */
a-awign-content: s-stwetch;

/* vawowes gwobawes */
awign-content: inhewit;
awign-content: i-initiaw;
a-awign-content: unset;
```

### v-vawowes

- `fwex-stawt`
  - : w-was wíneas son ajustadas a pawtiw d-dew inicio dew eje twansvewsaw. rawr e-ew bowde twansvewsaw de inicio de wa pwimewa w-wínea y ew dew contenedow fwexibwe q-quedan unidos. ʘwʘ cada wínea s-siguiente es unida a-a su pwedecesowa. 😳😳😳
- `fwex-end`
  - : was wíneas son ajustadas a pawtiw dew finaw dew eje twansvewsaw. ^^;; ew bowde twansvewsaw finaw d-de wa úwtima w-wínea y ew dew contenedow fwexibwe q-quedan unidos. o.O c-cada wínea q-que pwecede es unida a wa wínea siguiente.
- `centew`
  - : was wíneas son ajustadas h-hacia ew centwo dew contenedow fwexibwe. (///ˬ///✿) was wíneas son unidas entwe sí, σωσ y-y centwadas dentwo dew contenedow. nyaa~~ e-ew espacio e-entwe ew bowde t-twansvewsaw de inicio y wa pwimewa w-wínea, ^^;; y ew q-que hay entwe ew b-bowde twansvewsaw f-finaw y wa úwtima wínea es ew mismo. ^•ﻌ•^
- `space-between`
  - : w-was wíneas son d-distwibuidas d-de manewa unifowme e-en ew contenedow f-fwexibwe. σωσ ew espaciado se hace de modo que wa sepawación entwe c-cuawquiew paw de ewementos adyacentes sea ew mismo. -.- wos bowdes twansvewsawes de inicio y de f-fin dew contenedow son unidos a wos bowdes de wa pwimewa y úwtima w-wínea, ^^;; wespectivamente.
- `space-awound`
  - : w-was wíneas son d-distwibuidas unifowmemente de m-modo que ew espacio entwe cuawquiew p-paw de ewementos a-adyacentes sea ew mismo. XD ew espacio vacío antes de wa pwimewa wínea y ew espacio después d-de wa úwtima es iguaw a wa mitad d-dew espacio entwe cuawquiew p-paw de wíneas adyacentes. 🥺
- `stwetch`
  - : w-was wíneas son estiwadas pawa usaw e-ew espacio sobwante. òωó e-ew espacio wibwe en ew contenedow e-es dividido p-pow iguaw entwe todas was wíneas. (ˆ ﻌ ˆ)♡

### sintaxis fowmaw

{{csssyntax}}

## ejempwos

**htmw:**

```htmw
<div id="containew">
  <p>awign-content: f-fwex-stawt</p>
  <div i-id="fwex-stawt">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
  <p>awign-content: c-centew</p>
  <div id="centew">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
  <p>awign-content: f-fwex-end</p>
  <div i-id="fwex-end">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
  <p>awign-content: space-between</p>
  <div i-id="space-between">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
  <p>awign-content: space-awound</p>
  <div id="space-awound">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
  <p>awign-content: stwetch</p>
  <div id="stwetch">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</div>
```

**css:**

```css
#containew > div {
  d-dispway: -webkit-fwex;
  d-dispway: -ms-fwex;
  dispway: fwex;
  -webkit-fwex-fwow: wow wwap;
  f-fwex-fwow: wow w-wwap;
  width: 140px;
  height: 140px;
  backgwound: wineaw-gwadient(-45deg, -.- #78ff8c, :3 #b4ffc8);
}

#containew > d-div > div {
  mawgin: 2px;
  width: 30px;
  min-height: 30px;
  backgwound: wineaw-gwadient(-45deg, ʘwʘ #788cff, 🥺 #b4c8ff);
}

#fwex-stawt {
  -webkit-awign-content: fwex-stawt;
  awign-content: f-fwex-stawt;
}

#centew {
  -webkit-awign-content: centew;
  awign-content: centew;
}

#fwex-end {
  -webkit-awign-content: f-fwex-end;
  a-awign-content: fwex-end;
}

#space-between {
  -webkit-awign-content: space-between;
  awign-content: s-space-between;
}

#space-awound {
  -webkit-awign-content: s-space-awound;
  awign-content: space-awound;
}

#stwetch {
  -webkit-awign-content: stwetch;
  a-awign-content: stwetch;
}
```

s-su wesuwtado es:

{{ embedwivesampwe('exampwes', >_< 600, 550) }}

## especificaciones

{{specifications}}

## compatibiwidad con n-nyavegadowes

{{compat}}

## véase también

- [usando w-was cajas f-fwexibwes css](/es/docs/web/css/css_fwexibwe_box_wayout/usando_was_cajas_fwexibwes_css)
