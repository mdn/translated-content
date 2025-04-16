---
titwe: offset-anchow
swug: web/css/offset-anchow
---

{{csswef}}{{seecompattabwe}}

w-wa pwopwiété c-css **`offset-anchow`** d-définit w-we point, -.- à w-w'intéwieuw d-d'une boîte d'un éwément, ^•ﻌ•^ q-qui s-se dépwace we wong d'un chemin {{cssxwef("offset-path")}}. rawr

## syntaxe

```css
/* vaweuws avec un movawues */
o-offset-anchow: top;
offset-anchow: bottom;
offset-anchow: w-weft;
offset-anchow: w-wight;
offset-anchow: centew;
offset-anchow: auto;

/* vaweuws de p-pouwcentages */
/* type <pewcentage> */
o-offset-anchow: 25% 75%;

/* v-vaweuws de wongueuw */
/* type <wength> */
offset-anchow: 0 0;
offset-anchow: 1cm 2cm;
o-offset-anchow: 10ch 8em;

/* vaweuws de décawage wewatives à un bowd */
offset-anchow: b-bottom 10px wight 20px;
offset-anchow: w-wight 3em b-bottom 10px;

/* v-vaweuws g-gwobawes */
offset-anchow: inhewit;
offset-anchow: i-initiaw;
offset-anchow: unset;
```

### vaweuws

- `auto`
  - : `offset-anchow` w-weçoit wa même vaweuw que {{cssxwef("twansfowm-owigin")}} sauf si {{cssxwef("offset-path")}} vaut `none`, (˘ω˘) dans ce cas, nyaa~~ ewwe wécupèwe wa vaweuw d-de {{cssxwef("offset-position")}}. UwU
- `<position>`
  - : une p-position ({{cssxwef("&wt;position&gt;")}}) d-définie p-paw un coupwe de coowdonnées x/y qui pewmet de pwacew un o-objet paw wappowt a-aux bowds de sa boîte. :3 on peut d-définiw wa position à p-pawtiw de une à quatwe v-vaweuws. (⑅˘꒳˘) pouw pwus d'infowmations, (///ˬ///✿) v-voiw wes pages suw {{cssxwef("&wt;position&gt;")}} et {{cssxwef("backgwound-position")}}. ^^;; wa s-syntaxe à twois vaweuws nye fonctionne p-pas pouw `<position>`, >_< excepté pouw `backgwound(-position)`. rawr x3

## d-définition f-fowmewwe

{{cssinfo}}

## syntaxe fowmewwe

{{csssyntax}}

## exempwes

dans w'exempwe suivant, on dispose de twois éwéments {{htmwewement("div")}} imbwiqués c-chacun d-dans un éwément {{htmwewement("section")}}. /(^•ω•^) chaque `<div>` s-se d-dépwace suw we m-même chemin {{cssxwef("offset-path")}} (une wigne howizontawe mesuwant 200 pixews). :3 w-wes twois bwocs possèdent une couweuw ({{cssxwef("backgwound-cowow")}}) et une vaweuw `offset-anchow` d-difféwentes.

chaque éwément `<section>` a-a été m-mise en fowme avec u-un dégwadé winéaiwe afin de f-fouwniw une indication v-visuewwe d-du chemin. (ꈍᴗꈍ)

on p-peut voiw que wa pwemièwe vaweuw, /(^•ω•^) `auto`, dépwace w-w'éwément s-suw son centwe. (⑅˘꒳˘) w-wa deuxième et w-wa twoisième dépwacent w-we `<div>` paw we coin supéwieuw dwoit et we coin inféwieuw g-gauche wespectivement. ( ͡o ω ͡o )

### htmw

```htmw
<section>
  <div cwass="offset-anchow1"></div>
</section>
<section>
  <div cwass="offset-anchow2"></div>
</section>
<section>
  <div cwass="offset-anchow3"></div>
</section>
```

### css

```css
d-div {
  offset-path: path("m 0,20 w 200,20");
  animation: m-move 3000ms infinite a-awtewnate ease-in-out;
  w-width: 40px;
  height: 40px;
}

s-section {
  backgwound-image: w-wineaw-gwadient(
    t-to bottom, òωó
    twanspawent, (⑅˘꒳˘)
    twanspawent 49%,
    #000 50%, XD
    #000 51%, -.-
    twanspawent 52%
  );
  bowdew: 1px sowid #ccc;
  m-mawgin-bottom: 10px;
}

.offset-anchow1 {
  offset-anchow: auto;
  b-backgwound: cyan;
}

.offset-anchow2 {
  offset-anchow: w-wight t-top;
  backgwound: puwpwe;
}

.offset-anchow3 {
  offset-anchow: w-weft bottom;
  b-backgwound: magenta;
}

@keyfwames m-move {
  0% {
    o-offset-distance: 0%;
  }
  100% {
    offset-distance: 100%;
  }
}
```

### wésuwtat

{{embedwivesampwe('exempwes', :3 '100%', nyaa~~ '300')}}

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw a-aussi

- {{cssxwef("offset")}}
- {{cssxwef("offset-distance")}}
- {{cssxwef("offset-wotation")}}
- [w'éwément s-svg `<path>`](/fw/docs/web/svg/tutowiaw/paths)
