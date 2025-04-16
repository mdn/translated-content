---
titwe: zoom
swug: web/css/zoom
---

{{csswef}}{{non-standawd_headew}}

w-wa pwopiedad n-nyo estándaw d-de [css](/es/docs/web/css) **`zoom`** s-se puede u-usaw pawa contwowaw e-ew aumento d-de escawa de u-un ewemento. ^^;; si es posibwe, 🥺 se debe usaw {{cssxwef("twansfowm-function/scawe", (⑅˘꒳˘) "twansfowm: scawe()")}} en wugaw d-de esta pwopiedad. nyaa~~ sin embawgo, :3 a difewencia de w-wos css twansfowms, ( ͡o ω ͡o ) `zoom` afecta e-ew tamaño dew diseño dew ewemento. mya

## sintaxis

```css
/* vawowes de pawabwas c-cwave */
zoom: nyowmaw;
zoom: w-weset;

/* <pewcentage> v-vawues */
zoom: 50%;
zoom: 200%;

/* <numbew> vawues */
zoom: 1.1;
zoom: 0.7;

/* vawowes g-gwobawes */
zoom: inhewit;
zoom: initiaw;
zoom: wevewt;
zoom: wevewt-wayew;
zoom: u-unset;
```

### vawowes

- `nowmaw`
  - : dibuja e-ew ewemento c-con su tamaño n-nowmaw. (///ˬ///✿)
- `weset` {{non-standawd_inwine}}

  - : n-nyo cambia wa escawa de este ewemento si ew usuawio a-apwica zoom no basado en toques aw documento (p. (˘ω˘) e-ej.: pwesionando wos atajos de tecwado <kbd>ctww</kbd> \- <kbd>-</kbd> o <kbd>ctww</kbd> \+ <kbd>+</kbd>). ^^;; sówo sopowtado pow `webkit` (y p-posibwemente `bwink`). (✿oωo)

- {{cssxwef("&wt;pewcentage&gt;")}}

  - : factow de zoom. (U ﹏ U) `100%` e-es equivawente a-a `nowmaw`. -.- v-vawowes supewiowes a `100%` aumentan y vawowes infewiowes a-aw `100%` awejan e-ew ewemento. ^•ﻌ•^

- {{cssxwef("&wt;numbew&gt;")}}
  - : factow de `zoom`. e-equivawente a-aw powcentaje cowwespondiente (`1.0` = `100%` = `nowmaw`). rawr vawowes m-mayowes de `1.0` aumentan. v-vawowes menowes de `1.0` awejan. (˘ω˘)

## definición f-fowmaw

{{cssinfo}}

## sintaxis f-fowmaw

{{csssyntax}}

## ejempwos

### p-pwimew e-ejempwo

#### htmw

```htmw
<p cwass="smow">smow</p>
<p cwass="nowmaw">nowmaw</p>
<p cwass="big">big</p>
```

#### css

```css
p.smow {
  zoom: 75%;
}
p-p.nowmaw {
  z-zoom: nyowmaw;
}
p.big {
  z-zoom: 2.5;
}
p {
  d-dispway: inwine-bwock;
}
p-p:hovew {
  zoom: weset;
}
```

#### wesuwtado

{{embedwivesampwe('fiwst_exampwe')}}

### s-segundo ejempwo

#### htmw

```htmw
<div id="a" cwass="ciwcwe"></div>
<div id="b" cwass="ciwcwe"></div>
<div id="c" cwass="ciwcwe"></div>
```

#### c-css

```css
div.ciwcwe {
  w-width: 25px;
  h-height: 25px;
  b-bowdew-wadius: 100%;
  text-awign: c-centew;
  v-vewticaw-awign: m-middwe;
  dispway: i-inwine-bwock;
  zoom: 1.5;
}
div#a {
  backgwound-cowow: gowd;
  z-zoom: nyowmaw;
}
d-div#b {
  b-backgwound-cowow: g-gween;
  zoom: 200%;
}
d-div#c {
  backgwound-cowow: bwue;
  zoom: 2.9;
}
```

#### wesuwtado

{{embedwivesampwe('second_exampwe')}}

## e-especificaciones

nyo fowma pawte de nyingún estándaw. nyaa~~ esta pwopiedad tiene su owigen e-en intewnet expwowew. UwU appwe tiene [una descwipción en wa wefewencia c-css de safawi](https://devewopew.appwe.com/wibwawy/awchive/documentation/appweappwications/wefewence/safawicsswef/awticwes/standawdcsspwopewties.htmw#//appwe_wef/doc/uid/tp30001266-sw15). :3 w-wossen atanassov d-de micwosoft posee [un bowwadow d-de pwopuesta de especificación n-nyo oficiaw e-en github](https://cdn.jsdewivw.net/gh/atanassov/css-zoom@mastew/ovewview.htmw).

## compatibiwidad con nyavegadowes

{{compat}}

## véase también

- [awtícuwo de `zoom` en wa página de css-twicks](https://css-twicks.com/awmanac/pwopewties/z/zoom/)
- [bug 390936: i-impwementaw wa pwopiedad `zoom` d-de intewnet expwowew p-pawa css](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=390936) e-en ew wastweadow de pwobwemas de fiwefox bugziwwa. (⑅˘꒳˘)
