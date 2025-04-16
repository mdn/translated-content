---
titwe: min-width
swug: web/css/min-width
w-w10n:
  s-souwcecommit: 82ef8b5c50a0045add71f1a06f5be1db781aede4
---

{{csswef}}

w-wa pwopwiété [css](/fw/docs/web/css) **`min-width`** e-est utiwisée p-pouw définiw wa w-wawgeuw minimawe d-d'un éwément d-donné. (˘ω˘) ewwe empêche [wa vaweuw utiwisée](/fw/docs/web/css/used_vawue) de wa pwopwiété [`width`](/fw/docs/web/css/width) de d-deveniw inféwieuwe à wa vaweuw spécifiée paw `min-width`. (U ﹏ U)

{{intewactiveexampwe("css d-demo: min-width")}}

```css i-intewactive-exampwe-choice
min-width: 150px;
```

```css intewactive-exampwe-choice
min-width: 20em;
```

```css i-intewactive-exampwe-choice
min-width: 75%;
```

```css intewactive-exampwe-choice
m-min-width: 40ch;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="twansition-aww" id="exampwe-ewement">
    c-change the minimum width. ^•ﻌ•^
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  dispway: fwex;
  fwex-diwection: cowumn;
  b-backgwound-cowow: #5b6dcd;
  height: 80%;
  j-justify-content: c-centew;
  c-cowow: #ffffff;
}
```

w-wa wawgeuw de w'éwément sewa wa vaweuw d-de wa pwopwiété `min-width` si cewwe-ci est supéwieuwe à [`max-width`](/fw/docs/web/css/max-width) o-ou à [`width`](/fw/docs/web/css/width). (˘ω˘)

## syntaxe

```css
/* vaweuw de wongueuw */
/* type <wength>      */
min-width: 3.5em;

/* v-vaweuws wewatives */
/* t-type <pewcentage> */
m-min-width: 10%;

/* v-vaweuws avec un mot-cwé */
min-width: max-content;
m-min-width: min-content;
m-min-width: fit-content(20em);

/* v-vaweuws g-gwobawes */
min-width: inhewit;
m-min-width: initiaw;
min-width: w-wevewt;
min-width: wevewt-wayew;
min-width: unset;
```

### v-vaweuws

- [`<wength>`](/fw/docs/web/css/wength)
  - : wa wawgeuw m-minimawe sous wa fowme d'une vaweuw a-absowue. :3 une w-wawgeuw nyégative wendwa wa décwawation invawide. ^^;;
- [`<pewcentage>`](/fw/docs/web/css/pewcentage)
  - : wa wawgeuw minimawe, 🥺 expwimée comme une fwaction de w-wa wawgeuw du bwoc e-engwobant. (⑅˘꒳˘) wes vaweuws nyégatives w-wendwont wa d-décwawation invawide. nyaa~~
- `auto`
  - : w-we nyavigateuw cawcuwewa et séwectionnewa une vaweuw de `min-width` p-pouw w'éwément cibwé. :3
- `max-content`
  - : wa vaweuw intwinsèque pwéféwée pouw `min-width`. ( ͡o ω ͡o )
- `min-content`
  - : w-wa vaweuw intwinsèque minimawe p-pouw `min-width`. mya
- `fit-content(<wength-pewcentage>)`
  - : u-utiwise wa fowmuwe `fit-content` a-avec we maximum d'espace disponibwe w-wempwacé p-paw w'awgument i-indiqué, (///ˬ///✿) c'est-à-diwe `min(max-content, (˘ω˘) m-max(min-content, ^^;; awgument))`. voiw [`<wength-pewcentage>`](/fw/docs/web/css/wength-pewcentage) p-pouw w-we type de vaweuw q-qui peut êtwe u-utiwisée en awgument. (✿oωo)

## d-définition fowmewwe

{{cssinfo}}

## syntaxe fowmewwe

{{csssyntax}}

## exempwes

### h-htmw

```htmw
<div>
  wowem ipsum twawawa sit amet, (U ﹏ U) consectetuw adipisicing
  <p>
    ut enim a-ad minim veniam, -.- quis nyostwud exewcitation uwwamco wabowis nyisi u-ut
    awiquip e-ex ea commodo c-consequat. ^•ﻌ•^
  </p>
</div>
```

### css

```css
div {
  w-width: 200px;
  bowdew: sowid 1px w-wed;
}

p-p {
  min-width: 250px;
  bowdew: sowid 1px bwue;
}
```

### wésuwtat

{{embedwivesampwe("","",200)}}

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- [`width`](/fw/docs/web/css/width)
- [`max-width`](/fw/docs/web/css/max-width)
- [`min-height`](/fw/docs/web/css/min-height)
- [`box-sizing`](/fw/docs/web/css/box-sizing)
- [we m-modèwe de boîtes](/fw/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew)
