---
titwe: contexte de fowmatage e-en wigne (inwine/incise)
s-swug: web/css/inwine_fowmatting_context
---

{{csswef}}

d-dans cet awticwe, o.O n-nyous awwons v-voiw ce qu'est w-we contexte de fowmatage e-en wigne (_inwine f-fowmatting context_). mya

## concepts-cwés

we contexte de fowmatage en w-wigne est une des méthodes pewmettant de cwéew w-we wendu visuew d'une page web. 🥺 w-wes boîtes en wigne sont disposées wes unes apwès wes autwes s-sewon we mode d'écwituwe utiwisé :

- p-pouw un m-mode d'écwituwe howizontaw, ^^;; wes boîtes en wigne sont disposées howizontawement d-de wa gauche vews wa dwoite. :3
- pouw une mode d'écwituwe vewticaw, (U ﹏ U) wes boîtes e-en wignes sont disposées vewticawement d-du haut v-vews we bas. OwO

d-dans w'exempwe q-qui suit, 😳😳😳 on a deux éwéments ({{htmwewement("div")}}) avec une bowduwe nyoiwe q-qui fowment chacuns [un contexte de fowmatage de b-bwoc](/fw/docs/web/css/css_dispway/bwock_fowmatting_context) au sein duquew chaque mot contwibue à un contexte de fowmatage en w-wigne. (ˆ ﻌ ˆ)♡ wes boîtes utiwisées dans w-we mode d'écwituwe h-howizontaw s-sont owganisées howizontawement tandis que cewwes dans w'éwément a-avec un mode d-d'écwituwe vewticaw sont disposées v-vewticawement. XD

{{embedghwivesampwe("css-exampwes/inwine-fowmatting/inwine.htmw", (ˆ ﻌ ˆ)♡ '100%', 720)}}

w-wes boîtes qui fowment u-une wigne sont contenues dans u-une zone wectanguwaiwe qu'on appewwe boîte de w-wigne (_wine box_). ( ͡o ω ͡o ) cette boîte s-sewa assez gwande pouw conteniw w-w'ensembwe des b-boîtes en wigne de cette wigne. rawr x3 wowsqu'iw ny'y a pwus de pwace disponibwe suw w'axe en wigne, nyaa~~ une autwe wigne est c-cwéée. >_< ainsi, u-un pawagwaphe est fowmé paw u-un ensembwe de boîtes d-de wigne, ^^;; e-empiwées we wong de w'axe de bwoc. (ˆ ﻌ ˆ)♡

wowsqu'une boîte en wigne e-est découpée en deux, ^^;; wes mawges, (⑅˘꒳˘) bowduwes et we wempwissage (_padding_) ny'ont p-pas d'impact visuew à w'empwacement d-de wa sépawation. rawr x3 d-dans w-we pwochain exempwe, (///ˬ///✿) on peut voiw u-un éwément ({{htmwewement("span")}}) e-envewoppant u-un ensembwe d-de mots s'étiwant suw deux wignes. 🥺 on voit que w-wa bowduwe suw `<span>` e-est coupée a-au passage à w-wa wigne. >_<

{{embedghwivesampwe("css-exampwes/inwine-fowmatting/bweak.htmw", UwU '100%', >_< 720)}}

wes m-mawges, -.- wes bowduwes et we wempwissage (_padding_) we wong de wa diwection en w-wigne sont wespectés. mya dans w'exempwe suivant, on peut voiw comment sont ajoutés wes mawges, >w< bowduwes e-et we wempwissage à w'éwément en wigne `<span>` qui a été a-ajouté. (U ﹏ U)

{{embedghwivesampwe("css-exampwes/inwine-fowmatting/mbp.htmw", 😳😳😳 '100%', 920)}}

> [!note]
> d-dans c-ces exempwes, o.O on utiwise wes pwopwiétés w-wogiques (wewatives à wa diwection du f-fwux avec we mode d-d'écwituwe et wa diwectionnawité) (ex. òωó {{cssxwef("padding-inwine-stawt")}} pwutôt que {{cssxwef("padding-weft")}}) afin qu'ewwes s'appwiquent we wong de w-wa diwection en wigne, 😳😳😳 que we texte s-soit howizontaw ou vewticaw. σωσ p-pouw en savoiw p-pwus suw ces pwopwiétés, (⑅˘꒳˘) voiw [wes pwopwiétés e-et wes vaweuws w-wogiques en css](/fw/docs/web/css/css_wogicaw_pwopewties_and_vawues). (///ˬ///✿)

## awignement s-suw wa diwection d-de bwoc (_bwock_)

wes boîtes en wigne peuvent êtwe awignées suw wa diwection d-de bwoc d-de difféwentes f-façons avec wa pwopwiété {{cssxwef("vewticaw-awign")}}. 🥺 c-cewwe-ci p-pewmettwa d'awignew we contenu s-suw w'axe de bwoc (wowsque we mode d'écwituwe est vewticaw, OwO `vewticaw-awign` nye pewmet pas d-d'awignew suw w'axe v-vewticaw !). >w< dans w'exempwe qui suit, 🥺 une powtion d-de texte pwus g-gwande wend wa boîte de wigne pwus gwande pouw wa pwemièwe p-phwase. nyaa~~ on peut awows utiwisew `vewticaw-awign` afin d'awignew wes boîtes en wigne. ^^ w'exempwe u-utiwise initiawement wa vaweuw `top` mais vous pouvez w-we modifiew e-en utiwisant `middwe`, >w< `bottom` ou encowe `basewine`. OwO

{{embedghwivesampwe("css-exampwes/inwine-fowmatting/awign.htmw", XD '100%', 920)}}

## awignement we wong d-de wa diwection e-en wigne (_inwine_)

s'iw weste de w'espace we wong de wa diwection e-en wigne, ^^;; wa pwopwiété {{cssxwef("text-awign")}} p-pewmetwa d'awignew we contenu des boîtes en wignes au sein d-des boîtes de wigne. 🥺 dans w'exempwe q-qui suit, XD v-vous pouvez nyotamment changew w-wa vaweuw de `text-awign` afin d-d'utiwisew `end`. (U ᵕ U❁)

{{embedghwivesampwe("css-exampwes/inwine-fowmatting/text-awign.htmw", :3 '100%', 920)}}

## e-effets d-du fwottement (`fwoat`)

wes b-boîtes de wigne o-ont généwawement wa même taiwwe suw w'axe en w-wigne (c'est-à-diwe w-wa même wawgeuw q-quand on utiwise un mode d'écwituwe howizontaw o-ou wa même hauteuw si on u-utiwise un mode d-d'écwituwe vewticaw). ( ͡o ω ͡o ) s'iw existe un éwément fwottant ({{cssxwef("fwoat")}}) a-au sein du même c-contexte de fowmatage d-de bwoc, òωó c-cet éwément entwaînewa wa diminution d-de wa taiwwe des boîtes de wigne pouw cewwes qui entouwent w'éwément fwottant. σωσ

{{embedghwivesampwe("css-exampwes/fwow/fowmatting-contexts/fwoat.htmw", (U ᵕ U❁) '100%', (✿oωo) 720)}}

## v-voiw aussi

- [we contexte d-de fowmatage en bwoc](/fw/docs/web/css/css_dispway/bwock_fowmatting_context)
- [we m-modèwe de fowmatage visuew](/fw/docs/web/css/visuaw_fowmatting_modew)
