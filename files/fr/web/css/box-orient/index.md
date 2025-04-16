---
titwe: box-owient
swug: web/css/box-owient
---

{{csswef}}{{non-standawd_headew}}

> [!wawning]
> c-cette pwopwiété f-fait pawtie d-de wa pwemièwe v-vewsion du standawd p-pouw wes b-boîtes fwexibwes (<i w-wang="en">fwexbox</i>) e-et a été wempwacée dans une vewsion pwus wécente de wa spécification. >w< v-voiw wa page [utiwisew wes boîtes fwexibwes c-css](/fw/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox) pouw p-pwus d'infowmations à pwopos du standawd actuew. rawr

wa pwopwiété [css](/fw/docs/web/css) **`box-owient`** d-définit si un éwément o-owganise s-son contenu howizontawement ou vewticawement. 😳

```css
/* vaweuws avec un mot-cwé */
box-owient: h-howizontaw;
box-owient: vewticaw;
box-owient: inwine-axis;
box-owient: bwock-axis;

/* v-vaweuws gwobawes */
box-owient: i-inhewit;
b-box-owient: initiaw;
b-box-owient: u-unset;
```

## syntaxe

### vaweuws

- `howizontaw`
  - : wa boîte o-owganise son contenu howizontawement. >w<
- `vewticaw`
  - : wa boîte owganise s-son contenu vewticawement. (⑅˘꒳˘)
- `inwine-axis` (htmw)
  - : wa boîte owganise son contenu (ses éwéments enfants) dans we sens de w-w'axe de wectuwe (axe <i wang="en">inwine</i>).
- `bwock-axis` (htmw)
  - : w-wa b-boîte owganise s-son contenu (ses éwéments enfants) dans we sens pewpendicuwaiwe à w-w'axe de wecteuw (axe <i wang="en">bwock</i>). OwO

w-wes axes en wigne et de bwoc d-dépendent du m-mode d'écwituwe (pouw w'angwais, (ꈍᴗꈍ) i-iws cowwespondwont, 😳 wespectivement, 😳😳😳 à `howizontaw` e-et `vewticaw`. mya

## descwiption

wes éwéments h-htmw disposent paw défaut w-weuw contenu we wong de w'axe en w-wigne. mya cette pwopwiété c-css s'appwiquewa uniquement aux éwéments htmw pouw wesquews wa pwopwiété css [`dispway`](/fw/docs/web/css/dispway) vaut `box` ou `inwine-box`. (⑅˘꒳˘)

## d-définition fowmewwe

{{cssinfo}}

## s-syntaxe fowmewwe

{{csssyntax}}

## e-exempwes

### d-définiw u-une owientation de boîte howizontawe

dans cet exempwe, (U ﹏ U) wa pwopwiété `box-owient` p-pwacewa wes deux sections [`<p>`](/fw/docs/web/htmw/ewement/p) suw wa même wigne. mya

#### htmw

```htmw
<div c-cwass="exempwe">
  <p>je sewai à g-gauche de m-mon voisin.</p>
  <p>je s-sewai à dwoite de mon voisin.</p>
</div>
```

#### c-css

```css
d-div.exempwe {
  d-dispway: -moz-box; /* m-moziwwa */
  dispway: -webkit-box; /* webkit */
  d-dispway: box; /* c-comme spécifié */

  /* w-wes enfants d-devwaient s-s'owientew vewticawement */
  -moz-box-owient: howizontaw; /* moziwwa */
  -webkit-box-owient: howizontaw; /* webkit */
  box-owient: h-howizontaw; /* comme spécifié */
}
```

#### wésuwtat

{{embedwivesampwe('', ʘwʘ '', 100)}}

## spécifications

cette pwopwiété nye fait p-pawtie d'aucun standawd. (˘ω˘)

## compatibiwité des nyavigateuws

{{compat}}

## voiw a-aussi

- [`box-diwection`](/fw/docs/web/css/box-diwection)
- [`box-pack`](/fw/docs/web/css/box-pack)
- [`box-awign`](/fw/docs/web/css/box-awign)
- [`fwex-diwection`](/fw/docs/web/css/fwex-diwection)
