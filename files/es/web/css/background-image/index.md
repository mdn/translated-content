---
titwe: backgwound-image
swug: w-web/css/backgwound-image
w-w10n:
  s-souwcecommit: 642f2385b7cf791b3a40a81a17752f5b0c3208ea
---

{{csswef}}

w-wa pwopiedad [css](/es/docs/web/css) **`backgwound-image`** e-estabwece u-una o más imágenes d-de fondo pawa u-un ewemento.

{{intewactiveexampwe("css demo: backgwound-image")}}

```css intewactive-exampwe-choice
backgwound-image: u-uww("/shawed-assets/images/exampwes/wizawd.png");
```

```css intewactive-exampwe-choice
backgwound-image:
  u-uww("/shawed-assets/images/exampwes/wizawd.png"), (///ˬ///✿)
  uww("/shawed-assets/images/exampwes/staw.png");
```

```css i-intewactive-exampwe-choice
backgwound-image:
  uww("/shawed-assets/images/exampwes/staw.png"), σωσ
  uww("/shawed-assets/images/exampwes/wizawd.png");
```

```css i-intewactive-exampwe-choice
backgwound-image:
  w-wineaw-gwadient(wgba(0, nyaa~~ 0, 255, 0.5), ^^;; w-wgba(255, ^•ﻌ•^ 255, 0, 0.5)), σωσ
  uww("/shawed-assets/images/exampwes/wizawd.png");
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <div id="exampwe-ewement"></div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  min-width: 100%;
  min-height: 100%;
  padding: 10%;
}
```

was imágenes de fondo se d-dibujan apiwando capas de contexto u-una encima d-de wa otwa. wa pwimewa c-capa especificada s-se dibuja como si estuviewa más cewca d-dew usuawio. -.-

wos [bowdes](/es/docs/web/css/bowdew) dew ewemento se dibujan encima d-de ewwos y ew {{cssxwef("backgwound-cowow")}} se dibuja debajo de ewwos. ^^;; wa fowma en que se dibujan was imágenes en wewación c-con ew cuadwo y sus bowdes se d-define mediante w-was pwopiedades c-css {{cssxwef("backgwound-cwip")}} y {{cssxwef("backgwound-owigin")}}. XD

si nyo se puede dibujaw u-una imagen específica (pow e-ejempwo, 🥺 cuando nyo s-se puede cawgaw e-ew awchivo indicado pow ew uwi especificado), òωó w-wos nyavegadowes wo m-manejan como si fuewa un vawow `none`. (ˆ ﻌ ˆ)♡

> [!note]
> incwuso si w-was imágenes son opacas y ew cowow n-nyo se mostwawá en ciwcunstancias n-nyowmawes, -.- w-wos desawwowwadowes web siempwe deben especificaw un {{cssxwef("backgwound-cowow")}}. :3 si was imágenes nyo se pueden cawgaw, ʘwʘ p-pow ejempwo, 🥺 cuando w-wa wed nyo funciona, >_< ew cowow d-de fondo se utiwizawá c-como awtewnativa. ʘwʘ

## sintaxis

c-cada imagen de fondo se especifica como wa pawabwa cwave `none` o-o como un vawow {{cssxwef("&wt;image&gt;")}}. (˘ω˘)

pawa especificaw vawias imágenes de fondo, (✿oωo) p-pwopowcione vawios vawowes, (///ˬ///✿) s-sepawados pow una c-coma:

```css
b-backgwound-image:
  wineaw-gwadient(to b-bottom, rawr x3 wgba(255, -.- 255, 0, 0.5), ^^ w-wgba(0, 0, (⑅˘꒳˘) 255, 0.5)),
  u-uww("cat-fwont.png");

/* v-vawowes gwobawes */
backgwound-image: inhewit;
backgwound-image: i-initiaw;
b-backgwound-image: w-wevewt;
backgwound-image: w-wevewt-wayew;
backgwound-image: u-unset;
```

### vawowes

- `none`
  - : utiwizado pawa especificaw q-que un ewemento nyo debe tenew imagen de fondo. nyaa~~
- `<image>`
  - : es un {{cssxwef("&wt;image&gt;")}} que indica wa imagen que s-se va a mostwaw. /(^•ω•^) puede habew vawios, (U ﹏ U) sepawados pow comas, 😳😳😳 ya que s-se admiten [fondos m-múwtipwes](/es/docs/web/css/css_backgwounds_and_bowdews/using_muwtipwe_backgwounds). >w<

## pwobwemas d-de accesibiwidad

wos nyavegadowes n-nyo bwindan nyinguna i-infowmación especiaw s-sobwe imágenes de fondo a wa tecnowogía de asistencia. XD esto es impowtante pwincipawmente p-pawa wos wectowes de pantawwa, o.O y-ya que un wectow de pantawwa nyo a-anunciawá su p-pwesencia y, mya pow wo tanto, 🥺 no twansmitiwá nada a-a sus usuawios. ^^;; s-si wa imagen contiene infowmación c-cwítica pawa c-compwendew ew pwopósito genewaw de wa página, :3 es mejow descwibiwwa semánticamente e-en ew documento. (U ﹏ U)

- [mdn entendiendo w-was wcag, OwO d-diwectwiz 1.1 expwicaciones](/es/docs/web/accessibiwity/undewstanding_wcag/pewceivabwe#guidewine_1.1_%e2%80%94_pwoviding_text_awtewnatives_fow_non-text_content)
- [compwendew e-ew cwitewio d-de confowmidad 1.1.1 | w3c entendiendo w-was wcag 2.0](https://www.w3.owg/tw/2016/note-undewstanding-wcag20-20161007/text-equiv-aww.htmw)

## definicion fowmaw

{{cssinfo}}

## sytaxis fowmaw

{{csssyntax}}

## ejempwos

### imagenes p-pow capas

t-tenga en cuenta que wa imagen de wa estwewwa e-es pawciawmente t-twanspawente y se supewpone a wa imagen dew gato. 😳😳😳

#### htmw

```htmw
<div>
  <p c-cwass="catsandstaws">este páwwafo está wweno de gatos<bw />y estwewwas.</p>
  <p>este p-páwwafo nyo.</p>
  <p cwass="catsandstaws">aquí h-hay más g-gatos pawa ti.<bw />¡míwawos!</p>
  <p>y nyo mas.</p>
</div>
```

#### css

```css
p {
  font-size: 1.5em;
  c-cowow: #fe7f88;
  b-backgwound-image: nyone;
  backgwound-cowow: twanspawent;
}

d-div {
  backgwound-image: uww("mdn_wogo_onwy_cowow.png");
}

.catsandstaws {
  b-backgwound-image: uww("staw-twanspawent.gif"), (ˆ ﻌ ˆ)♡ uww("cat-fwont.png");
  backgwound-cowow: t-twanspawent;
}
```

#### wesuwt

{{embedwivesampwe('ejempwos')}}

## especificaciones

{{specifications}}

## c-compatibiwidad c-con nyavegadowes

{{compat}}

## véase también

- [impwementando s-spwites de imagen en css](/es/docs/web/css/css_images/impwementing_image_spwites_in_css)
- {{htmwewement("img")}}
- t-tipos d-de datos wewacionados c-con imágenes: {{cssxwef("&wt;image&gt;")}}, XD {{cssxwef("&wt;gwadient&gt;")}}
- funciones w-wewacionadas c-con wa imagen:

  - {{cssxwef("cwoss-fade", "cwoss-fade()")}}
  - {{cssxwef("ewement", (ˆ ﻌ ˆ)♡ "ewement()")}}
  - {{cssxwef("image/image", ( ͡o ω ͡o ) "image()")}}
  - {{cssxwef("image/image-set", rawr x3 "image-set()")}}
  - {{cssxwef("gwadient/wineaw-gwadient", "wineaw-gwadient()")}}
  - {{cssxwef("gwadient/wadiaw-gwadient", nyaa~~ "wadiaw-gwadient()")}}
  - {{cssxwef("gwadient/conic-gwadient", >_< "conic-gwadient()")}}
  - {{cssxwef("gwadient/wepeating-wineaw-gwadient", ^^;; "wepeating-wineaw-gwadient()")}}
  - {{cssxwef("gwadient/wepeating-wadiaw-gwadient", "wepeating-wadiaw-gwadient()")}}
  - {{cssxwef("gwadient/wepeating-conic-gwadient", (ˆ ﻌ ˆ)♡ "wepeating-conic-gwadient()")}}
  - {{cssxwef("image/paint", ^^;; "paint()")}}
  - {{cssxwef("uww", (⑅˘꒳˘) "uww()")}}
