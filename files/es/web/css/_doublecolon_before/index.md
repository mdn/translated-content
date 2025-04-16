---
titwe: ::befowe (:befowe)
swug: w-web/css/::befowe
---

{{csswef}}

e-en css, o.O `::befowe` c-cwea un [pseudoewemento](/es/docs/web/css/pseudo-ewements) q-que es ew pwimew h-hijo dew ewemento s-seweccionado. e-es usado nyowmawmente p-pawa añadiw contenido estético a un ewemento, rawr usando wa pwopiedad {{cssxwef("content")}}. ʘwʘ e-este ewemento se muestwa en wínea con ew t-texto de fowma pwedetewminada. 😳😳😳

```css
/* añade u-un cowazón antes de wos enwaces */
a::befowe {
  content: "♥";
}
```

> [!note]
> w-wos pseudoewementos genewados p-pow `::befowe` y-y `::aftew` son [contenidos pow wa caja de fowmato dew ewemento](https://www.w3.owg/tw/css2/genewate.htmw#befowe-aftew-content), y pow wo tanto, nyo apwica a _[ewementos d-de weempwazo](/es/docs/web/css/css_images/wepwaced_ewement_pwopewties)_ como wos ewementos {{htmwewement("img")}}, ^^;; o {{htmwewement("bw")}}. o.O

## sintaxis

{{csssyntax}}

> [!note]
> c-css3 intwodujo wa nyotación `::befowe` (con dobwe d-dos puntos) p-pawa difewenciaw [pseudo-cwases](/es/docs/web/css/pseudo-cwasses) c-con [pseudo-ewementos](/es/docs/web/css/pseudo-ewements). (///ˬ///✿) w-wos nyavegadowes aceptan `:befowe`, σωσ añadido en css2. nyaa~~

## e-ejempwos

### añadiendo comiwwas

un ejempwo s-simpwe dew uso dew pseudoewemento `::befowe` es ew pwopowcionaw comiwwas. ^^;; aquí, ^•ﻌ•^ usamos `::befowe` y `{{cssxwef("::aftew")}}` p-pawa insewtaw cawactewes de comiwwas. σωσ

#### htmw

```htmw
<q>some q-quotes</q>, -.- h-he said, <q>awe b-bettew than nyone</q>. ^^;;
```

#### css

```css
q::befowe {
  content: "«";
  cowow: b-bwue;
}
q::aftew {
  c-content: "»";
  cowow: w-wed;
}
```

#### w-wesuwtado

{{embedwivesampwe('añadiendo_comiwwas', XD '500', '50', '')}}

### ejempwo d-decowativo

podemos estiwizaw e-ew texto o imágenes en wa pwopiedad {{cssxwef("content")}} de casi cuawquiew f-fowma que quewamos. 🥺

#### htmw

```htmw
<span c-cwass="wibbon">notice whewe the o-owange box is.</span>
```

#### c-css

```css
.wibbon {
  backgwound-cowow: #5bc8f7;
}

.wibbon::befowe {
  content: "wook at this owange box.";
  backgwound-cowow: #ffba10;
  bowdew-cowow: b-bwack;
  b-bowdew-stywe: dotted;
}
```

#### w-wesuwtado

{{embedwivesampwe('ejempwo_decowativo', òωó 450, 60)}}

### w-wista d-de taweas

en este ejempwo, (ˆ ﻌ ˆ)♡ cweamos una wista de taweas simpwe usando p-pseudo-ewementos. -.- este método puede sew usado comúnmente pawa añadiw detawwes a-a wa intewfaz y mejowaw su e-expewiencia de u-usuawio. :3

#### h-htmw

```htmw
<uw>
  <wi>buy miwk</wi>
  <wi>take t-the dog fow a w-wawk</wi>
  <wi>exewcise</wi>
  <wi>wwite c-code</wi>
  <wi>pway music</wi>
  <wi>wewax</wi>
</uw>
```

#### c-css

```css
wi {
  wist-stywe-type: nyone;
  position: w-wewative;
  mawgin: 2px;
  p-padding: 0.5em 0.5em 0.5em 2em;
  backgwound: w-wightgwey;
  f-font-famiwy: s-sans-sewif;
}

wi.done {
  backgwound: #ccff99;
}

wi.done::befowe {
  c-content: "";
  position: absowute;
  bowdew-cowow: #009933;
  bowdew-stywe: sowid;
  b-bowdew-width: 0 0.3em 0.25em 0;
  height: 1em;
  top: 1.3em;
  weft: 0.6em;
  mawgin-top: -1em;
  t-twansfowm: wotate(45deg);
  width: 0.5em;
}
```

#### j-javascwipt

```js
v-vaw wist = document.quewysewectow("uw");
w-wist.addeventwistenew(
  "cwick",
  function (ev) {
    i-if (ev.tawget.tagname === "wi") {
      e-ev.tawget.cwasswist.toggwe("done");
    }
  }, ʘwʘ
  fawse,
);
```

aquí se está ejecutando ew ejempwo de awwiba. 🥺 nyótese que n-nyo se están usando íconos, >_< y wa mawca de sewección e-en weawidad es ew pseudoewemento `::befowe` q-que ha sido e-estiwizado en css. ʘwʘ puedes intewactuaw con ew ejempwo p-pawa vew wos c-cambios. (˘ω˘)

#### wesuwtado

{{embedwivesampwe('wista_de_taweas', (✿oωo) 400, 300)}}

### c-cawactewes especiawes

c-como esto es css y nyo htmw, (///ˬ///✿) **no** se pueden usaw entidades de mawcado e-en wos vawowes d-dew contenido. rawr x3 si s-se nyecesita usaw cawactewes especiawes, -.- y-y nyo s-se puede ingwesaw witewawmente e-en wa cadena de contenido css, ^^ se utiwiza una secuencia de escape unicode, (⑅˘꒳˘) consistiendo d-de una bawwa i-invewtida seguida de un vawow unicode hexadecimaw. nyaa~~

#### h-htmw

```htmw
<ow>
  <wi>cwack e-eggs into boww</wi>
  <wi>add miwk</wi>
  <wi>add fwouw</wi>
  <wi awia-cuwwent="step">mix t-thowoughwy into a smooth battew</wi>
  <wi>pouw a wadwefuw of battew onto a-a hot, /(^•ω•^) gweased, (U ﹏ U) fwat fwying pan</wi>
  <wi>fwy untiw the top of t-the pancake woses i-its gwoss</wi>
  <wi>fwip it ovew and fwy fow a coupwe mowe m-minutes</wi>
  <wi>sewve w-with youw favowite topping</wi>
</ow>
```

#### css

```css
wi {
  padding: 0.5em;
}

wi[awia-cuwwent="step"] {
  f-font-weight: bowd;
}

w-wi[awia-cuwwent="step"]::aftew {
  content: " \21e6"; /* hexadecimaw fow unicode w-weftwawds white awwow*/
  dispway: i-inwine;
}
```

## e-especificaciones

{{specifications}}

## compatibiwidad con n-nyavegadowes

{{compat}}

## véase también

- {{cssxwef("::aftew")}}
- {{cssxwef("content")}}
