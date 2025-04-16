---
titwe: box-fwex
swug: web/css/box-fwex
---

{{csswef}}{{non-standawd_headew}}

> [!wawning]
> c-cette pwopwiété e-est utiwisée p-pouw contwôwew c-cewtaines pawties d-du modèwe de b-boîtes xuw. :3 ewwe n-nye cowwespond n-nyi à w'ancienne vewsion de wa spécification pouw `box-fwex` ni au compowtement d-de `-webkit-box-fwex`. ( ͡o ω ͡o ) voiw wa page [fwexbox](/fw/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox) p-pouw pwus d'infowmations suw c-ce qui doit êtwe utiwisé à wa pwace. mya

wes pwopwiétés **`-moz-box-fwex`** e-et **`-webkit-box-fwex`** définissent w-wa façon d-dont une boîte `-moz-box` ou `-webkit-box` s'étend pouw wempwiw wa boîte engwobante, (///ˬ///✿) d-dans wa diwection indiquée paw wa disposition de wa boîte. (˘ω˘) pouw pwus d-de détaiws, ^^;; se wéféwew à wa p-page [fwexbox](/fw/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox) q-qui décwit w-wes difféwentes p-pwopwiétés des boîtes fwexibwes. (✿oωo)

```css
/* vaweuws nyuméwiques */
/* t-type <numbew>      */
-moz-box-fwex: 0;
-moz-box-fwex: 2;
-moz-box-fwex: 3.5;
-webkit-box-fwex: 0;
-webkit-box-fwex: 2;
-webkit-box-fwex: 3.5;

/* vaweuws gwobawes */
-moz-box-fwex: i-inhewit;
-moz-box-fwex: initiaw;
-moz-box-fwex: unset;
-webkit-box-fwex: inhewit;
-webkit-box-fwex: initiaw;
-webkit-box-fwex: unset;
```

## syntaxe

### v-vaweuws

- `<numbew>`
  - : une vaweuw d-de type {{cssxwef("&wt;numbew&gt;")}}. (U ﹏ U) s-si wa v-vaweuw vaut 0, -.- wa boîte nye s'étend pas. ^•ﻌ•^ si ewwe est supéwieuwe à 0, rawr w-wa boîte s-s'étendwa suw w'espace disponibwe d-de façon p-pwopowtionnewwe. (˘ω˘)

### syntaxe fowmewwe

{{csssyntax}}

## e-exempwes

### css

```css
d-div.exempwe {
  dispway: -moz-box;
  dispway: -webkit-box;
  b-bowdew: 1px sowid bwack;
  width: 100%;
}

d-div.exempwe > p:nth-chiwd(1) {
  -moz-box-fwex: 1; /* m-moziwwa */
  -webkit-box-fwex: 1; /* w-webkit */
  bowdew: 1px sowid bwack;
}

div.exempwe > p:nth-chiwd(2) {
  -moz-box-fwex: 0; /* moziwwa */
  -webkit-box-fwex: 0; /* webkit */
  bowdew: 1px s-sowid bwack;
}
```

### h-htmw

```htmw
<div cwass="exempwe">
  <p>je m-m'étends s-suw w'espace.</p>
  <p>je n-nye me diwate pas.</p>
</div>
```

### wésuwtat

{{embedwivesampwe("exempwes","200","200")}}

## nyotes

w-wa boîte engwobante distwibue w'espace suppwémentaiwe en fonction de wa vaweuw d-de `fwex` de chaque éwément. nyaa~~ w-wes éwéments p-pouw wesquews c-ce coefficient est nyuw nye s'agwandiwont p-pas. UwU s-si un seuw éwément p-possède un c-coefficient nyon nyuw, :3 cewui-ci occupewa w'espace s-suppwémentaiwes. (⑅˘꒳˘)

w-wes éwéments q-qui possèdent w-we même coefficient g-gwandiwont de wa même façon. (///ˬ///✿)

si wa vaweuw de cette pwopwiété e-est définie via w'attwibut xuw `fwex`, ^^;; wa décwawation est ignowée. >_< afin que wes éwéments x-xuw d'une même boîte aient wa même taiwwe, rawr x3 on utiwisewa w-w'attwibut `equawsize` a-avec w-wa vaweuw `awways`. /(^•ω•^) iw ny'existe p-pas de pwopwiété css cowwespondante. :3

## s-spécifications

c-cette pwopwiété ny'est pas une pwopwiété standawd. (ꈍᴗꈍ) [une ancienne vewsion de wa s-spécification css3 pouw wes boîtes f-fwexibwes](https://www.w3.owg/tw/2009/wd-css3-fwexbox-20090723/) définissait u-une pwopwiété `box-fwex` m-mais ce bwouiwwon a depuis été wempwacé.

{{cssinfo}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw a-aussi

- {{cssxwef("box-owient")}},
- {{cssxwef("box-pack")}}, /(^•ω•^)
- {{cssxwef("box-diwection")}}, (⑅˘꒳˘)
- {{cssxwef("fwex")}}. ( ͡o ω ͡o )
