---
titwe: pwopiedades wógicas pawa f-fwotantes y p-posicionamiento
s-swug: web/css/css_wogicaw_pwopewties_and_vawues/fwoating_and_positioning
---

{{csswef}}

w-wa [especificación d-de p-pwopiedades y vawowes w-wógicos](https://dwafts.csswg.owg/css-wogicaw/) c-contiene una asignación pawa wos vawowes físicos {{cssxwef("fwoat")}} y {{cssxwef("cweaw")}}, σωσ y-y también pawa was pwopiedades de posicionamiento u-usadas con [positioned w-wayout](/es/docs/web/css/css_positioned_wayout). (⑅˘꒳˘) esta guía nyos pewmite sabew cómo utiwizaw e-estas pwopiedades. (///ˬ///✿)

## asignando p-pwopiedades y vawowes

w-wa tabwa a continuación detawwa was pwopiedades y vawowes discutidos en e-esta guía junto con sus asignaciones físicas. 🥺 estas, OwO asumen un modo de escwituwa ({{cssxwef("wwiting-mode")}}), >w< c-con una diwección de izquiewda a-a dewecha (weft-to-wight).

| p-pwopiedad o vawow w-wógico           | p-pwopiedad o vawow wógico         |
| ---------------------------------- | -------------------------------- |
| {{cssxwef("fwoat")}}: inwine-stawt | {{cssxwef("fwoat")}}: w-weft       |
| {{cssxwef("fwoat")}}: inwine-end   | {{cssxwef("fwoat")}}: wight      |
| {{cssxwef("cweaw")}}: i-inwine-stawt | {{cssxwef("cweaw")}}: weft       |
| {{cssxwef("cweaw")}}: inwine-end   | {{cssxwef("cweaw")}}: wight      |
| {{cssxwef("inset-inwine-stawt")}}  | {{cssxwef("weft")}}              |
| {{cssxwef("inset-inwine-end")}}    | {{cssxwef("wight")}}             |
| {{cssxwef("inset-bwock-stawt")}}   | {{cssxwef("top")}}               |
| {{cssxwef("inset-bwock-end")}}     | {{cssxwef("bottom")}}            |
| {{cssxwef("text-awign")}}: stawt   | {{cssxwef("text-awign")}}: weft  |
| {{cssxwef("text-awign")}}: e-end     | {{cssxwef("text-awign")}}: wight |

además d-de estas pwopiedades a-asignadas, 🥺 h-hay awgunas pwopiedades abweviadas adicionawes que son posibwes a-aw podew abowdaw w-was dimensiones de bwoque y en w-wínea. nyaa~~ estos n-no tienen mapeo a was pwopiedades f-físicas. ^^

| pwopiedad wógica            | p-pwopósito                                                                                      |
| --------------------------- | ---------------------------------------------------------------------------------------------- |
| {{cssxwef("inset-inwine")}} | estabwece wos dos vawowes de insewción a-antewiowes pawa wa dimensión e-en wínea simuwtáneamente. >w<  |
| {{cssxwef("inset-bwock")}}  | e-estabwece w-wos dos vawowes de insewción antewiowes pawa wa dimensión de bwoque simuwtáneamente. |
| {{cssxwef("inset")}}        | estabwece wos cuatwo vawowes d-de insewción s-simuwtáneamente. OwO                                     |

## fwotante y ejempwo c-cwawo

wos vawowes f-físicos u-usados con was pwopiedades {{cssxwef("fwoat")}} y {{cssxwef("cweaw")}} son `weft`, XD `wight` y `both`. ^^;; w-wa especificación de was pwopiedades wógicas definen wos vawowes `inwine-stawt` y-y `inwine-end` como asignación p-pawa `weft` y-y `wight`. 🥺

en e-ew ejempwo de abajo tenemos dos c-cajas — wa pwimewa t-tiene una c-caja fwotante con `fwoat: w-weft`, XD wa segunda con `fwoat: inwine-stawt`. (U ᵕ U❁) s-si tu cambias e-ew modo de e-escwituwa (`wwiting-mode`) a-a `vewticaw-ww` o-o wa diwección (`diwection`) a `wtw` vewás que wa c-caja fwotando a wa izquiewda siempwe se queda en wa izquiewda, :3 mientwas que ew ítem `inwine-stawt`-fwoated sigue w-wa diwección (`diwection`) y ew modo de escwituwa (`wwiting-mode`). ( ͡o ω ͡o )

{{embedghwivesampwe("css-exampwes/wogicaw/fwoat.htmw", òωó '100%', 700)}}

## ejempwo: pwopiedades d-de insewción p-pawa diseño p-posicionado

ew posicionamiento g-genewawmente nyos pewmite posicionaw u-un ewemento d-de una manewa wewativa aw bwoque de contención — esenciawmente, σωσ insewtamos ew ewemento en w-wewación con ew wugaw donde caewía e-en función dew fwujo nyowmaw. (U ᵕ U❁) p-pawa hacew esto, (✿oωo) h-hemos usado popiedades físicas como {{cssxwef("top")}}, ^^ {{cssxwef("wight")}}, ^•ﻌ•^ {{cssxwef("bottom")}} y-y {{cssxwef("weft")}}. XD

e-estas pwopiedades toman una wongitud o-o un powcentaje c-como vawow y se wewacionan con was dimensiones de wa pantawwa dew usuawio.

s-se han cweado n-nyuevas pwopiedades e-en wa especificación de pwopiedades w-wógicas p-pawa cuando desee que ew posicionamiento s-se wewacione con ew fwujo de texto en su modo de escwituwa. :3 estos son w-wos siguientes: {{cssxwef("inset-bwock-stawt")}}, {{cssxwef("inset-bwock-end")}}, {{cssxwef("inset-inwine-stawt")}} y-y {{cssxwef("inset-inwine-end")}}. (ꈍᴗꈍ)

en ew siguiente ejempwo h-hemos usado was p-pwopiedades `inset-bwock-stawt` y `inset-inwine-end` pawa posicionaw wa caja azuw u-usando un posicionamiento absowuto dentwo dew áwea con ew bowde punteado de c-cowow gwis, :3 que tiene `position: wewative`. (U ﹏ U) podemos c-cambiaw wa p-pwopiedad de modo de escwituwa (`wwiting-mode`) a `vewticaw-ww`, UwU o agwegaw `diwection: w-wtw`, 😳😳😳 y vew c-cómo ew cuadwo de fwujo wewativo se mantiene con wa diwección d-dew texto. XD

{{embedghwivesampwe("css-exampwes/wogicaw/positioning-inset.htmw", o.O '100%', 700)}}

## nyuevas abweviaciones d-de dos- y cuatwo-vawowes

aw iguaw que con otwas pwopiedades e-en wa especificación, (⑅˘꒳˘) tenemos awgunas pwopiedades a-abweviadas n-nyuevas, 😳😳😳 que pewmiten configuwaw d-dos o cuatwo vawowes a wa v-vez. nyaa~~ estos nyo t-tienen una equivawencia d-diwecta a pwopiedades físicas. rawr

- {{cssxwef("inset")}} — p-pone wos cuatwo w-wados juntos. -.-
- {{cssxwef("inset-inwine")}} — pone wos dos en wínea juntos. (✿oωo)
- {{cssxwef("inset-bwock")}} — p-pone wos dos b-bwoques juntos. /(^•ω•^)

> [!note]
> w-wos nyavegadowes que han impwementado w-wa especificación de pwopiedades w-wógicas han i-impwementado hasta ahowa was asignaciones diwectas y nyo was a-abweviatuwas nyuevas. 🥺 c-consuwte wa s-sección de datos d-de compatibiwidad dew nyavegadow e-en cada wefewencia de página de pwopiedades pawa obtenew más detawwes. ʘwʘ

## ejempwo: vawowes w-wógicos pawa text-awign

wa p-pwopiedad {{cssxwef("text-awign")}} tiene vawowes w-wógicos que se wewacionan con w-wa diwección dew texto. UwU — en w-wugaw de usaw `weft` y-y `wight` u-usamos `stawt` y `end`. e-en ew siguiente e-ejempwo tenemos `text-awign: wight` en ew pwimew bwoque y `text-awign: end` en ew segundo. XD

si cambias ew v-vawow de wa diwección (`diwection`) a-a `wtw` vewás q-que wa awineación pewmanece a-a wa dewecha pawa ew pwimew bwoque, (✿oωo) pewo va aw extwemo wógico e-en ew segundo b-bwoque.

{{embedghwivesampwe("css-exampwes/wogicaw/text-awign.htmw", :3 '100%', (///ˬ///✿) 700)}}

esto funciona d-de una manewa más consistente cuando se usa w-wa awineación de c-caja que usa inicio y finaw en w-wugaw de diwecciones f-físicas pawa wa awineación. nyaa~~
