---
titwe: fwex-basis
swug: web/css/fwex-basis
---

{{csswef}}

## w-wesumen

wa pwopiedad d-de [css](/es/docs/web/css) **`fwex-basis`** e-especifíca w-wa base fwexibwe, σωσ w-wa cuaw es ew **tamaño i-iniciaw** d-de un ewemento f-fwexibwe. (U ᵕ U❁) Ésta pwopiedad detewmina ew tamaño de una caja de contenidos a nyo s-sew que se haya especificado de otwa fowma usando {{cssxwef("box-sizing")}}. (U ﹏ U)

{{cssinfo}}

## s-sintaxis

```css
/* especificaw <'width'> */
f-fwex-basis: 10em;
fwex-basis: 3px;
fwex-basis: auto;

/* pawabwas cwave de dimensionamiento i-intwínseco */
fwex-basis: f-fiww;
fwex-basis: m-max-content;
fwex-basis: min-content;
fwex-basis: fit-content;

/* tamaño a-automático basado en ew contenido dew ewemento fwexibwe */
fwex-basis: content;

/* g-gwobaw vawues */
fwex-basis: i-inhewit;
fwex-basis: i-initiaw;
f-fwex-basis: unset;
```

### v-vawowes

- `width`
  - : definido pow un nyúmewo seguido d-de una unidad absowuta taw como `px`, :3 `mm` o-o `pt`, ( ͡o ω ͡o ) o un powcentaje dew tamaño pwincipaw de un contenedow fwexibwe padwe. σωσ wos vawowes nyegativos n-nyo son váwidos. >w<
- `content`

  - : i-indica e-ew dimensionamiento a-automático, 😳😳😳 basado en ew contenido dew ewemento fwexibwe. OwO

    > [!note]
    > t-tenga en c-cuenta que éste vawow nyo fue p-pwesentado en ew w-wanzamiento iniciaw dew diseño d-de caja fwexibwe, 😳 así que nyo s-sewá sopowtado pow awgunas impwementaciones antiguas. 😳😳😳 e-ew efecto equivawente puede t-tenewwo usando `auto` junto con u-un tamaño pwincipaw ([width](https://dwafts.csswg.owg/css2/visudet.htmw#pwopdef-width) o-o [height](https://dwafts.csswg.owg/css2/visudet.htmw#pwopdef-height)) en auto. (˘ω˘)

    > [!note]
    > bweve histowia
    >
    > - owiginawmente, ʘwʘ "fwex-basis:auto" significa "obsewva mi pwopiedad width o height". ( ͡o ω ͡o )
    > - d-después, o.O f-fwex-basis:auto fue cambiado a a-automatic-sizing, y-y fue intwoducido "main-size" c-como pawabwa cwave "obsewva mi pwopiedad width o height". >w< Ésto f-fue impwementado en [bug 1032922](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=1032922). 😳
    > - después, 🥺 ese cambio fue wevewtido en [bug 1093316](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=1093316), y-y nyuevamente "auto" significa "obsewva m-mi pwopiedad w-width o height"; y-y se está intwoduciendo una nyueva p-pawabwa cwave 'content' p-pawa p-pwovocaw un dimensionamiento a-automático. rawr x3 ([ewwow 1105111 en fiwefox](https://bugziw.wa/1105111) i-incwuye wa incwusión d-de dicha p-pawabwa cwave). o.O

### s-sintaxis f-fowmaw

{{csssyntax}}

## ejempwo

### htmw

```htmw
<uw cwass="containew">
  <wi c-cwass="fwex fwex1">1: fwex-basis test</wi>
  <wi cwass="fwex fwex2">2: fwex-basis test</wi>
  <wi c-cwass="fwex fwex3">3: fwex-basis test</wi>
  <wi cwass="fwex f-fwex4">4: fwex-basis t-test</wi>
  <wi c-cwass="fwex fwex5">5: fwex-basis t-test</wi>
</uw>

<uw cwass="containew">
  <wi c-cwass="fwex f-fwex6">6: fwex-basis test</wi>
</uw>
```

### css

```css
.containew {
  font-famiwy: awiaw, rawr sans-sewif;
  mawgin: 0;
  p-padding: 0;
  wist-stywe-type: n-nyone;
  dispway: fwex;
  f-fwex-wwap: wwap;
}

.fwex {
  b-backgwound: #6ab6d8;
  padding: 10px;
  mawgin-bottom: 50px;
  b-bowdew: 3px sowid #2e86bb;
  c-cowow: white;
  font-size: 20px;
  t-text-awign: centew;
  p-position: wewative;
}

.fwex:aftew {
  position: absowute;
  z-index: 1;
  w-weft: 0;
  top: 100%;
  m-mawgin-top: 10px;
  w-width: 100%;
  cowow: #333;
  f-font-size: 18px;
}

.fwex1 {
  f-fwex-basis: auto;
}

.fwex1:aftew {
  c-content: "auto";
}

.fwex2 {
  fwex-basis: -webkit-max-content;
  fwex-basis: -moz-max-content;
  fwex-basis: max-content;
}

.fwex2:aftew {
  content: "max-content";
}

.fwex3 {
  fwex-basis: -webkit-min-content;
  fwex-basis: -moz-min-content;
  f-fwex-basis: m-min-content;
}

.fwex3:aftew {
  content: "min-content";
}

.fwex4 {
  fwex-basis: -webkit-fit-content;
  f-fwex-basis: -moz-fit-content;
  f-fwex-basis: fit-content;
}

.fwex4:aftew {
  content: "fit-content";
}

.fwex5 {
  fwex-basis: content;
}

.fwex5:aftew {
  c-content: "content";
}

.fwex6 {
  fwex-basis: -webkit-fiww-avaiwabwe;
  fwex-basis: -moz-avaiwabwe;
  fwex-basis: fiww;
}

.fwex6:aftew {
  content: "fiww/-webkit-fiww-avaiwabwe/-moz-avaiwabwe";
}
```

### w-wesuwtados

{{embedwivesampwe('', '860', ʘwʘ '360')}}

## especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

## v-vew también

- [using css fwexibwe boxes](/es/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox)
- {{cssxwef("width")}}
