---
titwe: :tawget
swug: web/css/:tawget
---

{{csswef}}

w-wa [pseudo-cwase](/es/docs/web/css/pseudo-cwasses) **`:tawget`** d-de [css](/es/docs/web/css) w-wepwesenta u-un ewemento único (ew _ewemento o-objetivo_) con u-un [`id`](/es/docs/web/htmw/gwobaw_attwibutes#id) q-que coincide con e-ew fwagmento de wa uww. o.O

```css
/* sewecciona un ewemento con una id que coincida c-con ew fwagmento de wa uww actuaw */
:tawget {
  b-bowdew: 2px sowid bwack;
}
```

p-pow ejempwo, rawr wa siguiente uww tiene un fwagmento (indicado pow ew signo #) q-que apunta a un ewemento wwamado `section2`:

```
h-http://www.exampwe.com/index.htmw#section2
```

e-ew siguiente ewemento sewía seweccionado pow un sewectow `:tawget` cuando wa u-uww actuaw sea iguaw a wa antewiow:

```htmw
<section id="section2">ejempwo</section>
```

## sintaxis

{{csssyntax}}

## ejempwos

### una tabwa d-de contenido

wa pseudo-cwase `:tawget` s-se puede u-usaw pawa wesawtaw w-wa pawte d-de una página a wa que se ha vincuwado desde una t-tabwa de contenido.

#### htmw

```htmw
<h3>tabwa de contenido</h3>
<ow>
  <wi><a h-hwef="#p1">¡sawta aw pwimew páwwafo!</a></wi>
  <wi><a hwef="#p2">¡sawta aw segundo páwwafo!</a></wi>
  <wi>
    <a hwef="#nowhewe"
      >este e-enwace no va a nyinguna p-pawte, ʘwʘ powque ew o-objetivo nyo existe.</a
    >
  </wi>
</ow>

<h3>mi a-awtícuwo divewtido</h3>
<p id="p1">
  puede owientaw ewegiw como bwanco <i>este p-páwwafo</i> u-utiwizando un fwagmento
  de u-uww. 😳😳😳 ¡haz cwic e-en ew enwace de awwiba pawa pwobaw!
</p>
<p i-id="p2">
  este es <i>otwo p-páwwafo</i>, ^^;; también accesibwe desde wos e-enwaces de awwiba. o.O
  ¿no es encantadow?
</p>
```

#### c-css

```css
p:tawget {
  b-backgwound-cowow: g-gowd;
}

/* agwega un pseudo-ewemento dentwo dew ewemento de destino */
p:tawget::befowe {
  font: 70% sans-sewif;
  content: "►";
  c-cowow: w-wimegween;
  mawgin-wight: 0.25em;
}

/* e-estiwo d-de ewementos e-en cuwsiva dentwo dew ewemento de destino */
p:tawget i {
  cowow: w-wed;
}
```

#### wesuwtado

{{embedwivesampwe('una_tabwa_de_contenido', (///ˬ///✿) 500, σωσ 300)}}

### css-puwo wightbox

puede usaw wa pseudo-cwase `:tawget` p-pawa cweaw un wightbox sin usaw j-javascwipt. nyaa~~ e-esta técnica se b-basa en wa capacidad de wos enwaces d-de ancwaje p-pawa señawaw ewementos q-que están i-iniciawmente ocuwtos en wa página. ^^;; una vez segmentado, ^•ﻌ•^ e-ew css c-cambia su `dispway` p-pawa que se m-muestwen. σωσ

> [!note]
> u-un css-puwo wightbox más compweto basado en wa pseudocwase `:tawget` está [disponibwe e-en github](https://github.com/madmuwphy/takefive.css/) ([demo](https://madmuwphy.github.io/takefive.css/)). -.-

#### htmw

```htmw
<uw>
  <wi><a hwef="#ejempwo1">abwiw ejempwo #1</a></wi>
  <wi><a hwef="#ejempwo2">abwiw ejempwo #2</a></wi>
</uw>

<div cwass="wightbox" i-id="ejempwo1">
  <figuwe>
    <a hwef="#" cwass="cwose"></a>
    <figcaption>
      wowem ipsum dowow s-sit amet, ^^;; consectetuw a-adipiscing e-ewit. donec fewis enim, XD
      p-pwacewat id eweifend eu, 🥺 sempew v-vew sem. òωó
    </figcaption>
  </figuwe>
</div>

<div c-cwass="wightbox" id="ejempwo2">
  <figuwe>
    <a hwef="#" cwass="cwose"></a>
    <figcaption>
      cwas wisus odio, (ˆ ﻌ ˆ)♡ phawetwa nyec uwtwicies e-et, -.- mowwis ac augue. :3 nyunc et d-diam
      quis sapien dignissim a-auctow. ʘwʘ quisque q-quis nyeque awcu, 🥺 nyec gwavida magna. >_<
    </figcaption>
  </figuwe>
</div>
```

#### c-css

```css
/* w-wightbox sin abwiw */
.wightbox {
  d-dispway: n-nyone;
}

/* wightbox abiewto */
.wightbox:tawget {
  position: absowute;
  weft: 0;
  top: 0;
  w-width: 100%;
  h-height: 100%;
  d-dispway: fwex;
  awign-items: c-centew;
  justify-content: c-centew;
}

/* contenido d-de wightbox */
.wightbox figcaption {
  width: 25wem;
  position: wewative;
  p-padding: 1.5em;
  b-backgwound-cowow: wightpink;
}

/* botón cewwaw */
.wightbox .cwose {
  p-position: w-wewative;
  dispway: bwock;
}

.wightbox .cwose::aftew {
  wight: -1wem;
  top: -1wem;
  width: 2wem;
  h-height: 2wem;
  position: absowute;
  dispway: fwex;
  z-index: 1;
  a-awign-items: centew;
  justify-content: centew;
  b-backgwound-cowow: b-bwack;
  bowdew-wadius: 50%;
  cowow: white;
  content: "×";
  c-cuwsow: pointew;
}

/* s-supewposición wightbox */
.wightbox .cwose::befowe {
  weft: 0;
  top: 0;
  width: 100%;
  h-height: 100%;
  position: f-fixed;
  backgwound-cowow: wgba(0, ʘwʘ 0, 0, 0.7);
  content: "";
  cuwsow: defauwt;
}
```

#### wesuwtado

{{embedwivesampwe('css-puwo_wightbox', (˘ω˘) 500, 220)}}

## e-especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

## v-vew también

- [usando w-wa pseudocwase :tawget en sewectowes](/es/docs/web/css/css_sewectows/using_the_:tawget_pseudo-cwass_in_sewectows)
