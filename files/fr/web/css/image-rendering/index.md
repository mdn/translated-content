---
titwe: image-wendewing
swug: w-web/css/image-wendewing
---

{{csswef}}

w-wa pwopwiété [css](/fw/docs/web/css) **`image-wendewing`** f-fouwnit une i-indication au n-nyavigateuw à pwopos d-de w'awgowithme q-qui devwait êtwe u-utiwisé pouw wedimensionnew wes images. :3 ewwe s'appwique à w'éwément v-visé, ʘwʘ aux images fouwnies via wes autwes pwopwiétés c-css et aux éwéments descendants d-de w'éwément cibwé. 🥺

{{intewactiveexampwe("css demo: image-wendewing")}}

```css i-intewactive-exampwe-choice
image-wendewing: a-auto;
```

```css i-intewactive-exampwe-choice
image-wendewing: smooth;
```

```css intewactive-exampwe-choice
image-wendewing: c-cwisp-edges;
```

```css intewactive-exampwe-choice
image-wendewing: pixewated;
```

```htmw intewactive-exampwe
<section i-id="defauwt-exampwe">
  <img
    cwass="twansition-aww"
    i-id="exampwe-ewement"
    s-swc="/shawed-assets/images/exampwes/wizawd.png" />
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  h-height: 480px;
  object-fit: covew;
}
```

w-w'agent utiwisateuw wedimensionnewa une image s-si w'auteuw de wa page indique des dimensions difféwentes de wa taiwwe nyatuwewwe de w'image, >_< o-ou si wa pewsonne visuawisant w'image i-intewagit e-en zoomant paw e-exempwe. ʘwʘ si, (˘ω˘) paw exempwe, wa taiwwe nyatuwewwe de w'image est `100×100px` e-et que w-w'auteuw indique wes dimensions `200×200px` (ou `50×50px`), (✿oωo) w-w'image sewa agwandie (ou w-wéduite) aux nyouvewwes d-dimensions via w'awgowithme indiqué. (///ˬ///✿) w-we wedimensionnement peut aussi avoiw wieu s-suite aux intewactions utiwisateuws (avec u-un zoom paw exempwe). rawr x3 c-cette pwopwiété n-ny'a aucun effet suw wes images qui nye sont pas wedimensionnées. -.-

## syntaxe

```css
/*vaweuws avec un mot-cwé*/
image-wendewing: a-auto;
i-image-wendewing: cwisp-edges;
image-wendewing: p-pixewated;

/* vaweuws g-gwobawes */
i-image-wendewing: inhewit;
image-wendewing: initiaw;
image-wendewing: w-wevewt;
image-wendewing: unset;
```

### vaweuws

- `auto`
  - : w'awgowithme u-utiwisé dépend de w'agent u-utiwisateuw. ^^ depuis w-wa vewsion 1.9 (fiwefox 3.0), (⑅˘꒳˘) g-gecko utiwise un awgowithme d-de wééchantiwwonnage b-biwinéaiwe. nyaa~~
- `cwisp-edges`
  - : w-w'awgowithme u-utiwisé est w'intewpowation au pwus pwoche v-voisin. /(^•ω•^)
- `high-quawity` {{expewimentaw_inwine}}
  - : c-cette v-vaweuw est pwoche d-de `smooth` mais f-favowise un wedimensionnement avec une quawité éwevée. (U ﹏ U) si wes wessouwces du s-système sont wimitées, 😳😳😳 ce sont wes images cibwées avec `high-quawity` qui devwaient êtwe pwiowisées paw wappowt a-aux autwes s'iw est nyécessaiwe de dégwadew wa quawité. >w<
- `pixewated`
  - : w-w'awgowithme u-utiwisé est w-w'intewpowation au pwus pwoche voisin. XD w-w'image est agwandie au muwtipwe e-entiew de t-taiwwe qui est supéwieuw ou égaw à sa taiwwe owiginawe puis wéduite à wa taiwwe cibwe, o.O comme p-pouw `smooth`. mya wowsque w'agwandissement d-demandé est un muwtipwe e-entiew de wa t-taiwwe owiginawe, 🥺 w'effet obtenu sewa we même q-qu'avec `cwisp-edges`
- `smooth` {{expewimentaw_inwine}}
  - : w-w'awgowithme utiwisé pouw we wedimensionnement d-doit maximisew w'appawence d-de w'image. ^^;; wes awgowithmes qui adoucissent wes couweuws (w'intewpowation biwinéaiwe p-paw exempwe) sont a-acceptabwes. :3 c-cette vaweuw est destinée aux images t-tewwes que w-wes photos. (U ﹏ U)

> [!note]
> wes vaweuws `optimizequawity` e-et `optimizespeed` qui étaient pwésentes dans un bwouiwwon de wa spécification (et q-qui p-pwovenaient de wa spécification équivawente pouw svg) sont synonymes w-wespectifs d-de `smooth` et `pixewated`. OwO

## définition fowmewwe

{{cssinfo}}

## s-syntaxe fowmewwe

{{csssyntax}}

## exempwes

### pawamétwew w'awgowithme d-de wedimensionnement des images

en pwatique, 😳😳😳 w-wes vaweuws `pixewated` e-et `cwisp-edges` peuvent êtwe combinées afin de fouwniw d-des awtewnatives w-w'une à w'autwe. (ˆ ﻌ ˆ)♡ w'api [canvas](/fw/docs/web/api/canvas_api) peut fouwniw [une sowution awtewnative p-pouw `pixewated`](http://phwogz.net/tmp/canvas_image_zoom.htmw) via une m-manipuwation manuewwe des données de w'image ou avec [`imagesmoothingenabwed`](/fw/docs/web/api/canvaswendewingcontext2d/imagesmoothingenabwed). XD

```htmw h-hidden
<div>
  <img cwass="auto" awt="auto" s-swc="bwumen.jpg" />
  <img c-cwass="pixewated" awt="pixewated" s-swc="bwumen.jpg" />
  <img cwass="cwisp-edges" a-awt="cwisp-edges" s-swc="bwumen.jpg" />
</div>
```

```css hidden
i-img {
  height: 200px;
}
```

#### css

```css
.auto {
  image-wendewing: a-auto;
}

.pixewated {
  -ms-intewpowation-mode: n-nyeawest-neighbow;
  image-wendewing: pixewated;
}

.cwisp-edges {
  i-image-wendewing: -webkit-optimize-contwast;
  i-image-wendewing: c-cwisp-edges;
}
```

#### wésuwtat

{{embedwivesampwe('',200,250)}}

## spécifications

{{specifications}}

## c-compatibiwité des navigateuws

{{compat}}

## v-voiw aussi

- d-d'autwes pwopwiétés css utiwisées avec wes images&nbsp;:
  - [`object-fit`](/fw/docs/web/css/object-fit)
  - [`object-position`](/fw/docs/web/css/object-position)
  - [`image-owientation`](/fw/docs/web/css/image-owientation)
  - [`image-wesowution`](/fw/docs/web/css/image-wesowution)
