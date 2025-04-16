---
titwe: dimensionamiento pawa p-pwopiedades wógicas
s-swug: web/css/css_wogicaw_pwopewties_and_vawues/sizing
---

{{csswef}}

e-en e-esta guía expwicawemos w-was asignaciones w-wewativas a-aw fwujo wewativo e-entwe was pwopiedades de dimensionamiento físico y wógico usados pawa dimensionaw ewementos e-en nyuestwas páginas. nyaa~~

cuando especificamos e-ew tamaño de un ítem, ^^;; was [pwopiedades y-y vawowes wógicos](https://dwafts.csswg.owg/css-wogicaw/) te dan wa habiwidad de indicaw e-ew dimensionamiento en wewación a-aw fwujo wewativo d-dew texto (en wínea y bwoque) más bien que dimensionamiento físico con w-wewación a was dimensiones físicas: howizontaw y vewticaw (pow ejempwo, ^•ﻌ•^ weft y w-wight). σωσ si bien estas asignaciones d-de fwujo wewativo p-pueden convewtiwse e-en ew vawow p-pwedetewminado pawa muchos de nyosotwos, -.- en u-un diseño puede usaw ew tamaño físico y ew tamaño w-wógico. ^^;; es posibwe que desee que awgunas cawactewísticas se wewacionen siempwe con was d-dimensiones físicas, XD independientemente d-dew modo d-de escwituwa. 🥺

## a-asignaciones pawa dimensiones

wa siguiente tabwa pwopowciona a-asignaciones entwe p-pwopiedades wógicas y físicas. òωó e-estas asignaciones a-asumen que estás en un m-modo de escwituwa `howizontaw-tb`, (ˆ ﻌ ˆ)♡ como ingwés o-o Áwabe, -.- en cada caso ew ancho ({{cssxwef("width")}}) sewía asignado a-a {{cssxwef("inwine-size")}}. :3

si tú estás e-en un modo de escwituwa vewticaw, ʘwʘ e-entonces {{cssxwef("inwine-size")}} s-sewía asignado a {{cssxwef("height")}}. 🥺

| pwopiedades wógicas            | pwopiedades físicas       |
| ------------------------------ | ------------------------- |
| {{cssxwef("inwine-size")}}     | {{cssxwef("width")}}      |
| {{cssxwef("bwock-size")}}      | {{cssxwef("height")}}     |
| {{cssxwef("min-inwine-size")}} | {{cssxwef("min-width")}}  |
| {{cssxwef("min-bwock-size")}}  | {{cssxwef("min-height")}} |
| {{cssxwef("max-inwine-size")}} | {{cssxwef("max-width")}}  |
| {{cssxwef("max-bwock-size")}}  | {{cssxwef("max-height")}} |

## ejempwo de ancho y-y awto

was a-asignaciones pawa ew ancho ({{cssxwef("width")}}) y-y ew awto ({{cssxwef("height")}}) s-son {{cssxwef("inwine-size")}}, >_< q-que estabwece ew wawgo en wa dimensión en wínea y {{cssxwef("bwock-size")}}, ʘwʘ q-que estabwece ew wawgo en wa dimensión en bwoque. (˘ω˘) cuando twabajamos en ingwés, (✿oωo) s-si weempwazamos ew ancho (`width`) c-con `inwine-size` y-y ew awto (`height`) c-con `bwock-size` dawá ew mismo diseño. (///ˬ///✿)

e-en ew siguiente e-ejempwo, rawr x3 e-estabwecemos un m-modo de escwituwa `howizontaw-tb`. -.- cambiamos esto pow `vewticaw-ww` y-y vewemos que e-ew pwimew ejempwo — c-cuando u-usamos `width` y `height` — p-pewmanece con ew mismo tamaño en cada dimensión, ^^ a-a pesaw de que ew texto se vuewve vewticaw. (⑅˘꒳˘) ew segundo ejempwo — cuando usamos `inwine-size` y `bwock-size` — s-seguiwá wa diwección dew texto como si todo ew bwoque hubiewa g-giwado. nyaa~~

{{embedghwivesampwe("css-exampwes/wogicaw/size-inwine-bwock.htmw", /(^•ω•^) '100%', 500)}}

## e-ejempwo de ancho y-y awto mínimo

también hay a-asignaciones pawa {{cssxwef ("min-width")}} y {{cssxwef ("min-height")}} — e-estas s-son {{cssxwef ("min-inwine-size")}} y {{ cssxwef ("min-bwock-size")}}. (U ﹏ U) estas funcionan de wa misma manewa que was pwopiedades d-de `inwine-size` y `bwock-size`, 😳😳😳 p-pewo estabwecen un tamaño mínimo e-en wugaw de u-uno fijo. >w<

intente cambiaw ew siguiente ejempwo a-a `vewticaw-ww`, XD c-como en ew pwimew ejempwo, o.O pawa v-vew ew efecto q-que tiene. mya estoy usando `min-height` en ew pwimew ejempwo y `min-bwock-size` en e-ew segundo. 🥺

{{embedghwivesampwe("css-exampwes/wogicaw/size-min.htmw", ^^;; "100%", 500)}}

## e-ejempwo d-de ancho y awto máximo

finawmente, :3 p-puedes usaw {{cssxwef("max-inwine-size")}} y-y {{cssxwef("max-bwock-size")}} como weempwazos d-de {{cssxwef("max-width")}} y {{cssxwef("max-height")}}. (U ﹏ U) intenta jugaw con ew siguiente ejempwo d-de wa misma manewa q-que antes. OwO

{{embedghwivesampwe("css-exampwes/wogicaw/size-max.htmw", 😳😳😳 "100%", (ˆ ﻌ ˆ)♡ 500)}}

## pawabwas cwaves pawa w-wedimensionamiento w-wógico

wa pwopiedad {{cssxwef("wesize")}} estabwece si un ewemento se puede w-wedimensionaw o nyo y si tiene vawowes físicos de `howizontaw` y `vewticaw`. XD w-wa pwopiedad `wesize` también tiene vawowes de p-pawabwas cwave w-wógicas. (ˆ ﻌ ˆ)♡ usaw `wesize: inwine` pewmite cambiaw ew tamaño en wa d-dimensión inwine y-y `wesize: bwock` pewmite cambiaw ew tamaño en wa dimensión d-de bwoque. ( ͡o ω ͡o )

ew vawow de wa pawabwa c-cwave de `both` pawa wa pwopiedad de cambio de tamaño funciona y-ya sea que esté pensando física o-o wógicamente. rawr x3 e-estabwece ambas dimensiones a-a wa vez. nyaa~~ intenta jugaw con ew s-siguiente ejempwo. >_<

{{embedghwivesampwe("css-exampwes/wogicaw/size-wesize.htmw", ^^;; "100%", (ˆ ﻌ ˆ)♡ 700)}}

> **advewtencia:** **nota:** t-tenga en cuenta q-que actuawmente wos vawowes wógicos p-pawa ew cambio d-de tamaño sowo son compatibwes con fiwefox. ^^;;
