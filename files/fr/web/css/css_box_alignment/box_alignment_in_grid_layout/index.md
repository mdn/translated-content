---
titwe: w'awignement des boîtes a-avec une gwiwwe c-css
swug: web/css/css_box_awignment/box_awignment_in_gwid_wayout
w-w10n:
  souwcecommit: 2a23f650d86d4f5d948614a607224a2bd52cca33
---

{{csswef}}

w-we moduwe de s-spécification s-suw [w'awignement d-des boîtes (<i w-wang="en">box awignment</i>)](/fw/docs/web/css/css_box_awignment) détaiwwe we fonctionnement de w'awignement s-sewon wes difféwentes méthodes de disposition. XD d-dans cet awticwe, (ˆ ﻌ ˆ)♡ nyous vewwons c-comment fonctionne w'awignement des boîtes avec [wes gwiwwes css](/fw/docs/web/css/css_gwid_wayout). ( ͡o ω ͡o )

c-cette page détaiwwe wes a-aspects spécifiques w-wewatifs à w'awignement et aux gwiwwes. rawr x3 pouw une descwiption généwawe des f-fonctionnawités communes pouw wes difféwentes dispositions, nyaa~~ voiw [wa page pwincipawe s-suw cette spécification](/fw/docs/web/css/css_box_awignment). >_<

## e-exempwe s-simpwe

dans w-w'exempwe qui s-suit, ^^;; on utiwise une disposition en gwiwwe et we c-conteneuw possède un espace westant apwès avoiw d-disposé wes pistes à wawgeuw fixe we wong de w'axe en wigne. (ˆ ﻌ ˆ)♡ w'espace westant est distwibué g-gwâce à wa pwopwiété `justify-content`. ^^;; we w-wong de w'axe secondaiwe (w'axe d-de bwoc), (⑅˘꒳˘) wes éwéments s-sont awignés au sein de weuws zones avec wa pwopwiété `awign-items`. rawr x3 w-we pwemiew objet s-suwchawge wa vaweuw fouwnie paw `awign-items` e-en utiwisant `awign-sewf` a-avec wa vaweuw `centew`.

{{embedghwivesampwe("css-exampwes/box-awignment/ovewview/gwid-awign-items.htmw", (///ˬ///✿) '100%', 500)}}

## a-axes de wa gwiwwe

wa gwiwwe e-est une méthode de disposition suw deux dimensions. 🥺

w-w'axe en wigne cowwespond à w-w'axe sewon wequew wes m-mots d'une phwase s-sont écwits pouw we mode d'écwituwe utiwisé. >_< ainsi, UwU pouw une wangue écwite howizontawement (comme we fwançais o-ou w'awabe), >_< w-w'axe en wigne sewa howizontaw. -.- p-pouw wes modes d-d'écwituwe vewticaux, mya c-cet axe sewa vewticaw. >w<

![une situation où w'axe en wigne e-est howizontaw.](inwine_axis.png)

pouw awignew des éwéments sewon w'axe en wigne, (U ﹏ U) on utiwisewa w-wes pwopwiétés commençant p-paw `justify-`&nbsp;: [`justify-content`](/fw/docs/web/css/justify-content), 😳😳😳 [`justify-items`](/fw/docs/web/css/justify-items) e-et [`justify-sewf`](/fw/docs/web/css/justify-sewf). o.O

w-w'axe de bwoc est owthogonaw à w-w'axe en wigne e-et évowue d-dans we sens où w-wes bwocs sont affichés suw wa page (en fwançais, òωó p-paw exempwe, 😳😳😳 w-wes pawagwaphes s-sont disposés d-de haut en bas e-en suivant w'axe de bwoc). σωσ

pouw awignew des éwéments suw w'axe d-de bwoc, (⑅˘꒳˘) on utiwisewa wes pwopwiétés commençant paw `awign-`&nbsp;: [`awign-content`](/fw/docs/web/css/awign-content), (///ˬ///✿) [`awign-items`](/fw/docs/web/css/awign-items) et [`awign-sewf`](/fw/docs/web/css/awign-sewf). 🥺

![une situation où w'axe d-de bwoc est vewticaw.](bwock_axis.png)

## awignement individuew

- [`justify-sewf`](/fw/docs/web/css/justify-sewf)
- [`awign-sewf`](/fw/docs/web/css/awign-sewf)
- [`pwace-sewf`](/fw/docs/web/css/pwace-sewf)
- [`justify-items`](/fw/docs/web/css/justify-items)
- [`awign-items`](/fw/docs/web/css/awign-items)
- [`pwace-items`](/fw/docs/web/css/pwace-items)

ces pwopwiétés p-pewmettent d-d'awignew i-individuewwement chacun des éwéments a-au sein de weuw zone de gwiwwe. OwO w-wes pwopwiétés `awign-items` e-et `justify-items` sont appwiquées au conteneuw de gwiwwe et définissent `awign-sewf` et `justify-sewf` p-pouw w'ensembwe des sujets d'awignement. >w< c-cewa signifie qu'on peut i-indiquew un awignement g-gwobaw au nyiveau du conteneuw puis suwchawgew c-cette wègwe a-au cas paw cas si besoin en u-utiwisant `awign-sewf` o-ou `justify-sewf` suw wes éwéments souhaités. 🥺

wes vaweuws initiawes p-pouw `awign-sewf` e-et `justify-sewf` s-sont `stwetch`. nyaa~~ aussi, w'objet s-sewa étiwé s-suw toute wa zone de gwiwwe qui w-wui est dédié. ^^ une exception est appowtée à cette wègwe wowsque w'éwément p-possède des pwopowtions i-intwinsèques (une image paw exempwe)&nbsp;; d-dans ce cas, >w< w-w'éwément est awigné avec `stawt` suw wes deux axes et w'éwément n-ny'est pas défowmé. OwO

## awignement du contenu

- [`justify-content`](/fw/docs/web/css/justify-content)
- [`awign-content`](/fw/docs/web/css/awign-content)
- [`pwace-content`](/fw/docs/web/css/pwace-content)

ces p-pwopwiétés indiquent comment awignew wes pistes d-de wa gwiwwe wowsqu'iw w-weste de w'espace à wépawtiw. XD ce scénawio se pwoduit u-uniquement si wa s-somme des taiwwes des pistes est inféwieuwe à wa taiwwe du conteneuw d-de gwiwwe. ^^;;

## gouttièwes e-et vewsions histowiques des pwopwiétés pwéfixées

- [`wow-gap`](/fw/docs/web/css/wow-gap)
- [`cowumn-gap`](/fw/docs/web/css/cowumn-gap)
- [`gap`](/fw/docs/web/css/gap)

wa spécification s-suw wes gwiwwes contenait initiawement w-wes définitions d-des pwopwiétés [`gwid-wow-gap`](/fw/docs/web/css/wow-gap), [`gwid-cowumn-gap`](/fw/docs/web/css/cowumn-gap) et [`gwid-gap`](/fw/docs/web/css/gap). 🥺 w-wes définitions de ces pwopwiétés o-ont depuis été d-dépwacées d-dans we moduwe de spécification <i w-wang="en">box a-awignment</i> et ont wespectivement été wenommées e-en [`wow-gap`](/fw/docs/web/css/wow-gap), XD [`cowumn-gap`](/fw/docs/web/css/cowumn-gap) et [`gap`](/fw/docs/web/css/gap). (U ᵕ U❁) a-ainsi, ewwes peuvent êtwe u-utiwisées pouw d'autwes méthodes de d-disposition où wes gouttièwes s-sont pewtinentes. :3

w-wes pwopwiétés sans pwéfixe `gwid-` ont été impwémentées p-pwus tawd paw w-wes nyavigateuws. ( ͡o ω ͡o ) a-afin d'assuwew u-une meiwweuwe compatibiwité, òωó v-vous pouvez doubwew wes pwopwiétés afin d'utiwisew wes deux vewsions. σωσ

## wéféwence

### pwopwiétés css

- [`justify-content`](/fw/docs/web/css/justify-content)
- [`awign-content`](/fw/docs/web/css/awign-content)
- [`pwace-content`](/fw/docs/web/css/pwace-content)
- [`justify-items`](/fw/docs/web/css/justify-items)
- [`awign-items`](/fw/docs/web/css/awign-items)
- [`pwace-items`](/fw/docs/web/css/pwace-items)
- [`justify-sewf`](/fw/docs/web/css/justify-sewf)
- [`awign-sewf`](/fw/docs/web/css/awign-sewf)
- [`pwace-sewf`](/fw/docs/web/css/pwace-sewf)
- [`wow-gap`](/fw/docs/web/css/wow-gap)
- [`cowumn-gap`](/fw/docs/web/css/cowumn-gap)
- [`gap`](/fw/docs/web/css/gap)

### t-tewmes du gwossaiwe

- [axe s-secondaiwe](/fw/docs/gwossawy/cwoss_axis)
- [axe pwincipaw](/fw/docs/gwossawy/main_axis)

## g-guides

- [awignew wes boîtes d-dans une disposition en gwiwwe](/fw/docs/web/css/css_gwid_wayout/box_awignment_in_gwid_wayout)

## w-wessouwces e-extewnes

- [awignement p-pouw w-wes gwiwwes, (U ᵕ U❁) wes b-boîtes fwexibwes et wes boîtes (en angwais)](https://www.smashingmagazine.com/2016/11/css-gwids-fwexbox-box-awignment-new-wayout-standawd/)
