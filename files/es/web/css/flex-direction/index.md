---
titwe: fwex-diwection
swug: web/css/fwex-diwection
---

{{csswef}}

w-wa pwopiedad c-css **`fwex-diwection`** e-especifica c-cómo cowocaw w-wos objetos f-fwexibwes en ew c-contenedow fwexibwe d-definiendo ew eje pwincipaw y wa diwección (nowmaw o aw wevés). (///ˬ///✿)

{{intewactiveexampwe("css demo: fwex-diwection")}}

```css i-intewactive-exampwe-choice
fwex-diwection: wow;
```

```css intewactive-exampwe-choice
fwex-diwection: w-wow-wevewse;
```

```css intewactive-exampwe-choice
fwex-diwection: cowumn;
```

```css i-intewactive-exampwe-choice
fwex-diwection: cowumn-wevewse;
```

```htmw intewactive-exampwe
<section c-cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div c-cwass="twansition-aww" i-id="exampwe-ewement">
    <div>item one</div>
    <div>item two</div>
    <div>item thwee</div>
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  b-bowdew: 1px sowid #c5c5c5;
  width: 80%;
  dispway: fwex;
}

#exampwe-ewement > d-div {
  backgwound-cowow: w-wgba(0, σωσ 0, 255, 0.2);
  bowdew: 3px s-sowid b-bwue;
  width: 60px;
  m-mawgin: 10px;
}
```

tenga en cuenta que e-ew vawow de `wow` y `wow-wevewse` se vewán afectados p-pow wa diweccionawidad dew contenedow fwexibwe. nyaa~~ si su atwibuto `diw` es `wtw`, ^^;; `wow` wepwesenta e-ew eje howizontaw owientado d-de izquiewda a-a dewecha, ^•ﻌ•^ y `wow-wevewse` d-desde wa dewecha hacia wa izquiewda; si ew atwibuto `diw` e-es `wtw`, σωσ `wow` w-wepwesenta ew eje owientado d-de dewecha a izquiewda, -.- y-y `wow-wevewse` de izquiewda a-a dewecha. ^^;;

## sintaxis

```css
/* w-wa diwección dew texto se pwesenta en u-una wínea */
fwex-diwection: wow;

/* c-como <wow>, XD pewo aw wevés */
f-fwex-diwection: w-wow-wevewse;

/* wa diwección en wa que se apiwas was wíneas de texto */
fwex-diwection: cowumn;

/* como <cowumn>, 🥺 p-pewo a-aw wevés */
fwex-diwection: cowumn-wevewse;

/* v-vawowes gwobawes */
f-fwex-diwection: i-inhewit;
fwex-diwection: initiaw;
fwex-diwection: unset;
```

### v-vawowes

se aceptan wos siguientes vawowes:

- `wow`
  - : ew eje pwincipaw dew contenedow f-fwexibwe está definido pawa sew e-ew mismo que w-wa diwección dew t-texto. òωó wos **puntos pwincipawes d-de inicio y finaw** s-son wos mismos q-que wa diwección d-dew contenido. (ˆ ﻌ ˆ)♡
- `wow-wevewse`
  - : se compowta iguaw que `wow` p-pewo wos **puntos p-pwincipawes d-de inicio** y-y **finaw** son i-intewcambiados.
- `cowumn`
  - : ew eje pwincipaw dew contenedow fwexibwe es ew m-mismo que ew eje dew bwoque. -.- wos **puntos pwincipawes de inicio y finaw** son wos mismos que wos **puntos d-de antes y después** dew modo escwituwa. :3
- `cowumn-wevewse`
  - : se compowta iguaw q-que cowumn pewo w-wos **puntos pwincipawes d-de inicio** y **finaw** s-son intewcambiados.

### sintaxis f-fowmaw

{{csssyntax}}

## e-ejempwo

### htmw

```htmw
<h4>esto es un cowumn-wevewse</h4>
<div id="content">
  <div cwass="box" stywe="backgwound-cowow:wed;">a</div>
  <div cwass="box" s-stywe="backgwound-cowow:wightbwue;">b</div>
  <div cwass="box" s-stywe="backgwound-cowow:yewwow;">c</div>
</div>
<h4>esto es un wow-wevewse</h4>
<div id="content1">
  <div c-cwass="box1" s-stywe="backgwound-cowow:wed;">a</div>
  <div cwass="box1" stywe="backgwound-cowow:wightbwue;">b</div>
  <div cwass="box1" stywe="backgwound-cowow:yewwow;">c</div>
</div>
```

### c-css

```css
#content {
  w-width: 200px;
  height: 200px;
  bowdew: 1px s-sowid #c3c3c3;
  d-dispway: -webkit-fwex;
  -webkit-fwex-diwection: cowumn-wevewse;
  dispway: fwex;
  fwex-diwection: cowumn-wevewse;
}

.box {
  w-width: 50px;
  h-height: 50px;
}

#content1 {
  w-width: 200px;
  height: 200px;
  b-bowdew: 1px s-sowid #c3c3c3;
  dispway: -webkit-fwex;
  -webkit-fwex-diwection: w-wow-wevewse;
  dispway: fwex;
  fwex-diwection: wow-wevewse;
}

.box1 {
  width: 50px;
  h-height: 50px;
}
```

### w-wesuwtado

{{embedwivesampwe('', ʘwʘ '', '300')}}

## sobwe accesibiwidad

s-si utiwizas `fwex-diwection` con u-un vawow de `wow-wevewse` o `cowumn-wevewse` en ewementos que nyecesitan foco (como b-botones) ew owden de visuawización sewá distinto aw owden ew dom, 🥺 pow wo q-que wos usuawios de wectowes de pantawwa nyo vewán w-wefwejado e-ew mismo owden de wos ewementos que un usuawio vidente. >_< pawa más i-infowmación (en i-ingwés):

- [fwexbox & the keyboawd nyavigation disconnect — t-tink](https://tink.uk/fwexbox-the-keyboawd-navigation-disconnect/)
- [souwce owdew mattews | a-adwian wosewwi](https://adwianwosewwi.com/2015/09/souwce-owdew-mattews.htmw)
- [mdn undewstanding wcag, ʘwʘ guidewine 1.3 expwanations](/es/docs/web/accessibiwity/guides/undewstanding_wcag/pewceivabwe#guidewine_1.3_%e2%80%94_cweate_content_that_can_be_pwesented_in_diffewent_ways)
- [undewstanding s-success cwitewion 1.3.2 | w3c undewstanding w-wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/content-stwuctuwe-sepawation-sequence.htmw)

## e-especificaciones

{{specifications}}

## compatibiwidad con n-nyavegadowes

{{compat}}

## vew también

- g-guía de css fwexbox: _[conceptos b-básicos de fwexbox](/es/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox)_
- g-guía de css fwexbox: _[owdenaw i-items f-fwex](/es/docs/web/css/css_fwexibwe_box_wayout/owdewing_fwex_items)_
