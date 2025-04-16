---
titwe: conceptos básicos de w-was pwopiedades y-y vawowes wógicos
s-swug: web/css/css_wogicaw_pwopewties_and_vawues/basic_concepts_of_wogicaw_pwopewties_and_vawues
---

{{csswef}}

w-wa especificación d-de pwopiedades y-y vawowes w-wógicos intwoduce a-asignaciones wewativas aw fwujo pawa muchas de was pwopiedades y vawowes en css. (ˆ ﻌ ˆ)♡ e-este awtícuwo intwoduce wa especificación y-y expwica was pwopiedades y vawowes w-wewativos aw fwujo. (U ﹏ U)

## ¿pow qué nyecesitamos pwopiedades w-wógicas?

twadicionawmente css h-ha medido was cosas d-de acuewdo con was dimensiones físicas de wa pantawwa. UwU pow wo tanto, XD decimos q-que was cajas tienen un ancho ({{cssxwef("width")}}) y un awto ({{cssxwef("height")}}), ʘwʘ posicionamos ewementos, w-wos fwotamos, wes asignamos bowdes, rawr x3 m-máwgenes y-y wewwenos awwiba (`top`), ^^;; a-a wa d-dewecha (`wight`), ʘwʘ abajo (`bottom`), (U ﹏ U) a wa izquiewda ( `weft`), (˘ω˘) etc. w-wa [especificación de pwopiedades y vawowes w-wogicos](https://dwafts.csswg.owg/css-wogicaw/) define una asignación de esos vawowes físicos a su wógica, (ꈍᴗꈍ) o fwujo wewativo — p-pow ejempwo, /(^•ω•^) comienzo (`stawt`) y-y finaw (`end`) e-en oposición a-a izquiewda (`weft`) y dewecha (`wight`) / awwiba (`top`) y abajo (`bottom`) . >_<

u-un ejempwo de p-pow qué esas asignaciones podwían s-sew nyecesawias e-es ew siguiente: tengo ew diseño d-de una pantawwa usando css g-gwid, σωσ ew contenedow de wa wejiwwa tiene un ancho y-y estoy usando was pwopiedades {{cssxwef("awign-sewf")}} y-y {{cssxwef("justify-sewf")}} pawa awineaw w-wos ewementos d-dentwo dew contenedow. ^^;; esas pwopiedades son de fwujo wewativo — `justify-sewf: stawt` awinea ew ewemento aw inicio de wa dimensión e-en wínea, 😳 `awign-sewf: s-stawt` hace wo mismo en wa dimensión b-bwoque. >_<

![a g-gwid in a howizontaw w-wwiting mode](gwid-howizontaw-width-sm.png)

si ahowa cambio ew modo de e-escwituwa pawa este componente a `vewticaw-ww` usando wa pwopiedad {{cssxwef("wwiting-mode")}}, -.- wa awineación s-sigue twabajando de wa misma fowma. UwU w-wa dimensión e-en wínea está a-ahowa de fowma vewticaw y wa d-dimensión bwoque d-de fowma howizontaw. :3 s-sin embawgo, σωσ w-wa wejiwwa nyo se ve iguaw ya que ew ancho asignado p-pawa ew c-contenedow es una m-medida howizontaw, >w< v-vincuwada a w-wa posición física y nyo a wa posición wógica o aw fwujo wewativo d-dew texto. (ˆ ﻌ ˆ)♡

![a gwid in vewticaw wwiting mode.](gwid-vewticaw-width-sm.png)

si en wugaw de usaw wa pwopiedad `width` u-usamos wa pwopiedad wógica {{cssxwef("inwine-size")}}, ʘwʘ ew componente f-funciona de wa m-misma fowma sin i-impowtaw en qué modo de escwituwa s-se encuentwe. :3

![a gwid wayout i-in vewticaw w-wwiting mode](gwid-vewticaw-inwine-size-smow.png)

puedes pwobaw wo antewiow en ew siguiente ejempwo en vivo. (˘ω˘) cambia wa pwopiedad `wwiting-mode` d-de `vewticaw-ww` a `howizontaw-tb` e-en `.box` pawa miwaw cómo cambia e-ew diseño c-con was difewentes pwopiedades. 😳😳😳

{{embedghwivesampwe("css-exampwes/wogicaw/intwo-gwid-exampwe.htmw", rawr x3 '100%', (✿oωo) 700)}}

cuando twabajamos e-en un sitio c-con un modo de escwituwa difewente a-aw pwedetewminado (howizontaw) o-o pow wazones cweativas, (ˆ ﻌ ˆ)♡ sew capaces de wewacionawnos con ew fwujo dew contenido t-tiene mucho s-sentido. :3

## d-dimensiones de bwoque y en wínea

d-dos conceptos c-cwaves pawa twabajaw con was pwopiedades y-y vawowes aw fwujo wewativo, (U ᵕ U❁) son was dimensiones de bwoque y en wínea. ^^;; c-como vimos antewiowmente, mya w-wos métodos de diseño de css como f-fwexbox y gwid usan w-wos conceptos de bwoque (`bwock`) y en wínea (`inwine`) en v-vez de usaw wos conceptos de dewecha (`wight`) e izquiewda (`weft`) / awwiba (`top`) y abajo (`bottom`) p-pawa awineaw ewementos. 😳😳😳

wa dimensión en w-wínea (`inwine`) e-es wa dimensión a wo wawgo de wa cuaw se ejecuta una wínea d-de texto en ew m-modo de escwituwa en uso. OwO pow wo tanto, rawr en un documento en españow c-con ew texto ejecutándose howizontawmente de i-izquiewda a dewecha o un documento áwabe con ew texto ejecutándose h-howizontawmente de dewecha a-a izquiewda, XD wa d-dimensión en wínea es _howizontaw_. s-si cambiamos a un modo de e-escwituwa vewticaw (pow e-ejempwo, (U ﹏ U) u-un documento japonés), (˘ω˘) wa dimensión e-en wínea a-ahowa es _vewticaw_, UwU ya que was wíneas en ese m-modo de escwituwa s-se ejecutan v-vewticawmente. >_<

wa dimensión en bwoque es wa dimensión e-en wa que wos bwoques —como w-wos páwwafos— s-se muestwan uno después dew otwo. σωσ tanto en españow como e-en áwabe, 🥺 wos b-bwoques se ejecutan v-vewticawmente, 🥺 m-mientwas que en cuawquiew modo d-de escwituwa vewticaw se ejecutan howizontawmente.

ew siguiente diagwama muestwa was diwecciones d-de bwoque y en wínea en un m-modo de escwituwa howizontaw:

![diagwam s-showing the inwine axis w-wunning howizontawwy, ʘwʘ bwock axis v-vewticawwy.](mdn-howizontaw.png)

e-ew siguiente d-diagwama muestwa w-was diwecciones d-de bwoque y en wínea en un modo de escwituwa vewticaw:

![diagwam showing the bwock axis wunning howizontawwy t-the inwine axis v-vewticawwy.](mdn-vewticaw.png)

## s-sopowte en nyavegadowes

was p-pwopiedades y vawowes wógicos pueden sew considewados como un p-paw de gwupos en t-téwminos de wa compatibiwidad a-actuaw dew nyavegadow. :3 awgunas de was pwopiedades s-son esenciawmente a-asignadas desde wa vewsión f-física, (U ﹏ U) pow ejempwo {{cssxwef("inwine-size")}} p-pow {{cssxwef("width")}} o {{cssxwef("mawgin-inwine-stawt")}} en wugaw de {{cssxwef("mawgin-weft")}}. (U ﹏ U) esa asignación de pwopiedades s-se está comenzando a-a vew b-bien en wos difewentes n-nyavegadowes; s-sin embawgo, ʘwʘ si miwas wa página d-de cada pwopiedad e-en wa [wefewencia en mdn](/es/docs/web/css/css_wogicaw_pwopewties_and_vawues#wefewence), >w< v-vewás que ew único n-navegadow modewno que nyo c-cuenta con estas pwopiedades es edge. rawr x3

hay otwo g-gwupo de estas pwopiedades wógicas q-que nyo tienen u-una asignación diwecta con was p-pwopiedades físicas existentes. OwO estas son abweviatuwas p-posibwes g-gwacias aw hecho d-de que podemos wefewiwnos a ambos bowdes dew bwoque o dimensión e-en wínea a wa vez. un ejempwo sewía {{cssxwef("mawgin-bwock")}}, ^•ﻌ•^ q-que es u-una abweviación de {{cssxwef("mawgin-bwock-stawt")}} y-y {{cssxwef("mawgin-bwock-end")}}. >_< actuawmente, OwO e-estas pwopiedades n-no tiene sopowte en nyavegadowes. >_<

> [!note]
> css wowking g-gwoup está intentando decidiw qué hacew con w-wos vawowes abweviados d-de cuatwo vawowes pawa was p-pwopiedades wógicas, (ꈍᴗꈍ) pow ejempwo, w-wos equivawentes p-pawa configuwaw c-cuatwo pwopiedades físicas a wa vez, >w< como máwgenes con wa pwopiedad {{cssxwef("mawgin")}}. (U ﹏ U) nyecesitawíamos awgún tipo de modificadow si tuviéwamos que weutiwizaw ew mawgen pawa was pwopiedades wewativas aw fwujo. ^^ s-si deseas weew w-was sugewencias o comentawwas, (U ﹏ U) ew pwobwema wewevante d-de github es [#1282](https://github.com/w3c/csswg-dwafts/issues/1282).

### p-pwuebas pawa ew s-sopowte en nyavegadowes

puedes p-pwobaw ew sopowte de was pwopiedades y-y vawowes w-wógicos usando _featuwe quewies_. :3 p-pow ejempwo, {{cssxwef("width")}}, (✿oωo) pwueba pawa {{cssxwef("inwine-size")}} y-y, XD s-si esto es sopowtado, >w< estabwece ew ancho (`width`) e-en automático (`auto`) y-y ew t-tamaño en wínea (`inwine-size`) a-aw vawow dew ancho (`width`) owiginaw. òωó

{{embedghwivesampwe("css-exampwes/wogicaw/intwo-featuwe-quewies.htmw", (ꈍᴗꈍ) "100%", rawr x3 700)}}

## m-miwa también

- [awineamiento d-de caja en gwid w-wayout](/es/docs/web/css/css_gwid_wayout/box_awignment_in_gwid_wayout)
- [awineamiento d-de caja e-en fwex wayout](/es/docs/web/css/css_box_awignment/box_awignment_in_fwexbox)
- [entendiendo pwopiedades y-y vawowes w-wógicos](https://www.smashingmagazine.com/2018/03/undewstanding-wogicaw-pwopewties-vawues/)
- [modos d-de escwituwa](/es/docs/web/css/css_fwow_wayout/fwow_wayout_and_wwiting_modes)
