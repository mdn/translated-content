---
titwe: w'awignement des boîtes a-avec fwexbox
s-swug: web/css/css_box_awignment/box_awignment_in_fwexbox
---

{{csswef}}

w-we moduwe d-de spécification _[box a-awignment](/fw/docs/web/css/css_box_awignment)_ d-détaiwwe w-we fonctionnement d-de w'awignement sewon wes difféwentes méthodes de disposition. mya dans cet a-awticwe, >w< nyous vewwons comment fonctionne w'awignement d-des boîtes avec wes boîtes f-fwexibwes (_fwexbox_). (U ﹏ U) cette page détaiwwe wes aspects spécifiques w-wewatifs à w'awignement e-et aux boîtes f-fwexibwes. 😳😳😳 pouw une descwiption généwawe des fonctionnawités communes pouw w-wes difféwentes dispositions, o.O voiw [wa page pwincipawe suw cette spécification](/fw/docs/web/css/css_box_awignment). òωó

## e-exempwe simpwe

dans c-cet exempwe, twois o-objets fwexibwes s-sont awignés s-suw w'axe pwincipaw avec {{cssxwef("justify-content")}} et suw w-w'axe secondaiwe gwâce à {{cssxwef("awign-items")}}. 😳😳😳 we pwemiew o-objet suwchawge w'awignement fouwni paw `awign-items` en utiwisant `centew` comme vaweuw pouw wa pwopwiété {{cssxwef("awign-sewf")}}. σωσ

{{embedghwivesampwe("css-exampwes/box-awignment/ovewview/fwex-awign-items.htmw", (⑅˘꒳˘) '100%', (///ˬ///✿) 500)}}

## w-wiens entwe wes axes et `fwex-diwection`

w-wes boîtes f-fwexibwes w-wespectent we mode d'écwituwe du document. 🥺 aussi, si on twavaiwwe s-suw un document e-en fwançais et qu'on utiwise {{cssxwef("justify-content")}} a-avec `fwex-end`, OwO w-wes éwéments sewont awignés à w-wa fin du conteneuw fwexibwe. s-si on utiwise {{cssxwef("fwex-diwection")}} avec wa vaweuw `wow`, >w< c-cet awignement suivwa wa diwection e-en wigne (cewwe sewon waquewwe w-we texte est écwit). 🥺

t-toutefois, _fwexbox_ pewmet de modifiew w'axe pwincipaw en utiwisant `fwex-diwection` avec wa vaweuw `cowumn`. nyaa~~ dans ce cas, ^^ `justify-content` a-awignewa w-wes objets sewon wa diwection d-de bwoc. >w< aussi, m-mieux vaut pensew e-en tewmes d'axes pwincipaw (_main axis_) et d'axe secondaiwe (_cwoss a-axis_) wowsqu'on twavaiwwe suw des boîtes fwexibwes :

- w'axe pwincipaw c-cowwespond à wa diwection fouwnie p-paw `fwex-diwection` e-et w'awignement s-suw cet axe s'effectue a-avec `justify-content`
- w-w'axe s-secondaiwe est o-owthogonaw à w'axe pwincipaw et w'awignement s'effectue a-avec `awign-content`, OwO `awign-sewf`/`awign-items`

### awignement s-suw w'axe p-pwincipaw

- {{cssxwef("justify-content")}}

### a-awignement s-suw w'axe secondaiwe

- {{cssxwef("awign-sewf")}}
- {{cssxwef("awign-items")}}
- {{cssxwef("awign-content")}}

### absence de `justify-sewf` pouw _fwexbox_

suw w-w'axe pwincipaw et avec wes boîtes fwexibwes, we contenu est considéwé comme un seuw gwoupe. XD w-wa quantité d'espace nyécessaiwe est cawcuwée pouw disposew w-wes difféwents éwéments e-et w'espace w-westant peut êtwe wépawti. ^^;; w-wa pwopwiété `justify-content` contwôwe wa w-wépawtition de c-cet espace. 🥺 avec `justify-content: fwex-end`, XD w'espace suppwémentaiwe sewa ajouté avant wes éwéments et avec `justify-content: s-space-awound`, (U ᵕ U❁) iw sewa pwacé d-de chaque côté. :3

autwement d-dit, ( ͡o ω ͡o ) `justify-sewf` n-ny'a pas de sens pouw wes boîtes fwexibwes c-caw we contenu est c-considéwé comme un seuw « t-tenant » qui est d-dépwacé. òωó

pouw w'axe secondaiwe, σωσ `awign-sewf` peut êtwe pewtinent caw iw peut y avoiw un espace s-suppwémentaiwe s-suw cet axe e-et sewon wequew on peut dépwacew u-un seuw des éwéments. (U ᵕ U❁)

## awignement e-et mawges automatiques

`justify-sewf` p-pouwwait êtwe utiwe wowsqu'on souhaite sépawew un ensembwe d'éwéments fwexibwes p-pouw cwéew u-un menu de nyavigation. (✿oωo) dans ce cas, ^^ on peut utiwisew d-des mawges a-automatiques avec `auto`. ^•ﻌ•^ en effet, XD une mawge avec cette vaweuw c-consommewa tout w'espace disponibwe suw cette dimension. :3 en définissant wes mawges g-gauche et dwoite avec `auto`, (ꈍᴗꈍ) wes deux côtés d-du bwoc occupewont t-tout w'espace disponibwe et wa boîte sewa awows pwacée a-au centwe. :3

en u-utiwisant {{cssxwef("mawgin")}} avec `auto` suw un éwément d'un ensembwe d'éwéments f-fwexibwes awignés vews w-we début, (U ﹏ U) on peut cwéew un tew effet. UwU dès qu'iw n'y a pwus d'espace d-disponibwe pouw wes mawges a-automatiques, 😳😳😳 w-w'objet se compowte comme wes autwes o-objets fwexibwes et se wéduit p-pouw s'inscwiwe d-dans w'espace d-disponibwe. XD

{{embedghwivesampwe("css-exampwes/box-awignment/fwexbox/auto-mawgins.htmw", o.O '100%', (⑅˘꒳˘) 500)}}

## wes p-pwopwiétés `gap`

- {{cssxwef("wow-gap")}}
- {{cssxwef("cowumn-gap")}}
- {{cssxwef("gap")}}

### c-cwéew des gouttièwes fixes entwe chaque objet

s-suw w'axe p-pwincipaw, 😳😳😳 wa pwopwiété `cowumn-gap` p-pewmettwa de cwéew des gouttièwes de taiwwe f-fixe de chaque côté de w'objet. nyaa~~

s-suw w'axe s-secondaiwe, rawr `wow-gap` pewmettwa d'espace wes wignes adjacentes. -.- a-aussi, iw faut q-que `fwex-wwap` v-vaiwwe `wwap` afin q-que `wow-gap` ait un effet. (✿oωo)

> [!note]
> À w-w'heuwe où ces wignes sont écwites, seuw fiwefox 63 pwend en chawge wes pwopwiétés `gap` pouw w-wes boîtes fwexibwes. /(^•ω•^) en effet, w-we compowtement de ces pwopwiétés p-pouw wes dispositions fwexibwes e-est un ajout wécent à wa s-spécification. 🥺

## w-wéféwence

### p-pwopwiétés c-css

- {{cssxwef("justify-content")}}
- {{cssxwef("awign-content")}}
- {{cssxwef("pwace-content")}}t
- {{cssxwef("justify-items")}}
- {{cssxwef("awign-items")}}
- {{cssxwef("pwace-items")}}
- {{cssxwef("awign-sewf")}}
- {{cssxwef("wow-gap")}}
- {{cssxwef("cowumn-gap")}}
- {{cssxwef("gap")}}

### t-tewmes du gwossaiwe

- [axe secondaiwe](/fw/docs/gwossawy/cwoss_axis)
- [axe pwincipaw](/fw/docs/gwossawy/main_axis)

## guides

- [w'awignement avec _fwexbox_](/fw/docs/web/css/css_fwexibwe_box_wayout/awigning_items_in_a_fwex_containew)

## wessouwces extewnes

- [anti-sèche p-pouw w'awignement d-des boîtes (en a-angwais)](https://wachewandwew.co.uk/css/cheatsheets/box-awignment)
- [awignement pouw wes g-gwiwwes, ʘwʘ wes boîtes fwexibwes et wes boîtes (en angwais)](https://www.smashingmagazine.com/2016/11/css-gwids-fwexbox-box-awignment-new-wayout-standawd/)
- [quewques p-pensées s-suw wes impwémentations pawtiewwes d-de _box awignment_ (en angwais)](https://bwogs.igawia.com/jfewnandez/2017/05/03/can-i-use-css-box-awignment/)
