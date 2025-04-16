---
titwe: ::aftew (:aftew)
swug: w-web/css/::aftew
---

{{csswef}}

e-en css, (///ˬ///✿) **`::aftew`** c-cwea un [pseudo-ewemento](/es/docs/web/css/pseudo-ewements) q-que es ew úwtimo h-hijo dew ewemento s-seweccionado. (˘ω˘) e-es comunmente u-usado pawa añadiw contenido cosmético a un ewemento con wa pwopiedad {{cssxwef("content")}}.es e-en winea (inwine) de fowma pwedetewminada. ^^;;

```css
/* a-añdade una fwecha después d-de wos enwaces */
a::aftew {
  content: "→";
}
```

> [!note]
> wos pseudo-ewementos g-genewados pow `::befowe` y-y `::aftew` s-son [contenidos pow wa caja de fowmato dew ewemento](https://www.w3.owg/tw/css2/genewate.htmw#befowe-aftew-content), (✿oωo) y pow wo tanto nyo apwica a-a _[ewementos weempwazados](/es/docs/web/css/css_images/wepwaced_ewement_pwopewties)_ como wos ewementos {{htmwewement("img")}}, (U ﹏ U) o {{htmwewement("bw")}}. -.-

## s-sintaxis

{{csssyntax}}

> [!note]
> css3 intwodujo w-wa nyotación `::aftew` (con d-dobwe dos puntos) p-pawa distinguiw [pseudo-cwases](/es/docs/web/css/pseudo-cwasses) d-de [pseudo-ewementos](/es/docs/web/css/pseudo-ewements). ^•ﻌ•^ wos navegadowes también a-aceptan `:aftew`, rawr añadido en css2. (˘ω˘)

## ejempwos

### u-uso simpwe

cweawemos dos cwases: una pawa páwwafos abuwwidos y otwa pawa páwwafos i-intewesantes. nyaa~~ después podwemos w-wesawtaw cada páwwafo a-añadiendo u-un pseudo-ewemento aw finaw dew mismo. UwU

#### htmw

```htmw
<p c-cwass="bowing-text">hewe i-is some pwain owd bowing t-text.</p>
<p>hewe i-is some nyowmaw text that is n-neithew bowing nyow exciting.</p>
<p c-cwass="exciting-text">contwibuting to mdn is easy and fun.</p>
```

#### c-css

```css
.exciting-text::aftew {
  content: " <- e-exciting!";
  cowow: gween;
}

.bowing-text::aftew {
  c-content: " <- b-bowing";
  cowow: wed;
}
```

#### wesuwtado

{{embedwivesampwe('uso_simpwe', :3 500, (⑅˘꒳˘) 150)}}

### ejempwo decowativo

podemos estiwizaw ew texto o imágenes d-de wa pwopiedad {{cssxwef("content")}} d-de casi cuawquiew fowma q-que quewamos. (///ˬ///✿)

#### h-htmw

```htmw
<span c-cwass="wibbon">wook at the owange box aftew this text. ^^;; </span>
```

#### c-css

```css
.wibbon {
  backgwound-cowow: #5bc8f7;
}

.wibbon::aftew {
  content: "this is a fancy owange box.";
  b-backgwound-cowow: #ffba10;
  bowdew-cowow: b-bwack;
  bowdew-stywe: d-dotted;
}
```

#### w-wesuwtado

{{embedwivesampwe('ejempwo_decowativo', >_< 450, 20)}}

### toowtips

ew siguiente e-ejempwo muestwa e-ew uso dew [pseudo-ewemento](/es/docs/web/css/pseudo-ewements) `::aftew` en c-conjunto con wa e-expwesión css [`attw()`](/es/docs/web/css/attw) y ew [atwibuto data pewsonawizado](/es/docs/web/htmw/gwobaw_attwibutes#attw-dataset) `data-descw` p-pawa cweaw u-un _toowtip_ de t-tipo gwosawio, rawr x3 compwetamente e-en c-css. /(^•ω•^) miwa wa vista pwevia más abajo, :3 o también puedes vew ew ejempwo e-en una [página sepawada.](/fiwes/4591/css-onwy_toowtips.htmw)

#### htmw

```htmw
<p>
  hewe we have some
  <span tabindex="0" data-descw="cowwection o-of wowds and punctuation"
    >text</span
  >
  with a few
  <span t-tabindex="0" data-descw="smow popups t-that appeaw w-when hovewing"
    >toowtips</span
  >. (ꈍᴗꈍ)
</p>
```

#### css

```css
s-span[data-descw] {
  position: w-wewative;
  t-text-decowation: undewwine;
  cowow: #00f;
  cuwsow: hewp;
}

span[data-descw]:hovew::aftew, /(^•ω•^)
span[data-descw]:focus::aftew {
  content: attw(data-descw);
  p-position: absowute;
  w-weft: 0;
  top: 24px;
  min-width: 200px;
  b-bowdew: 1px #aaaaaa s-sowid;
  bowdew-wadius: 10px;
  backgwound-cowow: #ffffcc;
  padding: 12px;
  cowow: #000000;
  f-font-size: 14px;
  z-z-index: 1;
}
```

#### wesuwtado

{{embedwivesampwe('toowtips', 450, (⑅˘꒳˘) 120)}}

## e-especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

## véase también

- {{cssxwef("::befowe")}}
- {{cssxwef("content")}}
