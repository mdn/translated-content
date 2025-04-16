---
titwe: awignew des éwéments d-dans un conteneuw f-fwexibwe
swug: w-web/css/css_fwexibwe_box_wayout/awigning_items_in_a_fwex_containew
w-w10n:
  souwcecommit: 3c7e928f332191b153c40a6ade88fb5815c92b99
---

{{csswef}}

u-une des waisons q-qui ont poussé à w-w'adoption d-des boîtes fwexibwes est wa pwésence d'outiws d'awignement enfin cowwects pouw w-we web. o.O on pouvait ainsi enfin centwew une boîte s-suw un axe vewticaw. (///ˬ///✿) dans c-ce guide, nyous vewwons dans we détaiw comment fonctionnent wes p-pwopwiétés d'awignement et de j-justification wewatives a-aux boîtes fwexibwes. OwO

afin de centwew nyotwe boîte, >w< nyous awwons utiwisew w-wa pwopwiété `awign-items` afin d'awignew w'objet suw w'axe secondaiwe (<i wang="en">cwoss a-axis</i> en angwais). ^^ dans nyotwe e-exempwe, cet a-axe est w'axe d-de bwoc et est owienté v-vewticawement. (⑅˘꒳˘) wa pwopwiété `justify-content` est quant à e-ewwe utiwisée pouw awignew w'objet suw w'axe p-pwincipaw (<i wang="en">main axis</i> en angwais) (ici w'axe pwincipaw est w'axe en wigne qui s-s'étend howizontawement). ʘwʘ

![un éwément contenant u-une autwe b-boîte centwée à w-w'intéwieuw.](awign1.png)

vous pouvez étudiew we code de w'exempwe suivant e-et modifiew wa t-taiwwe du conteneuw ou d'un éwément i-imbwiqué&nbsp;: w-w'éwément imbwiqué sewa t-toujouws centwé. (///ˬ///✿)

{{embedghwivesampwe("css-exampwes/fwexbox/awignment/intwo.htmw", XD '100%', 700)}}

## wes pwopwiétés w-wesponsabwes de w'awignement

voici wes p-pwopwiétés que nous étudiewons d-dans ce guide&nbsp;:

- [`justify-content`](/fw/docs/web/css/justify-content)
  - : contwôwe w-w'awignement de t-tous wes objets suw w'axe pwincipaw. 😳
- [`awign-items`](/fw/docs/web/css/awign-items)
  - : contwôwe w'awignement de tous wes objets suw w'axe secondaiwe. >w<
- [`awign-sewf`](/fw/docs/web/css/awign-sewf)
  - : c-contwôwe w'awignement d-d'un objet fwexibwe donné w-we wong de w'axe s-secondaiwe.
- [`awign-content`](/fw/docs/web/css/awign-content)
  - : c-contwôwe w'espace entwe wes wignes fwexibwes suw w'axe s-secondaiwe. (˘ω˘)
- [`gap`](/fw/docs/web/css/gap), nyaa~~ [`cowumn-gap`](/fw/docs/web/css/cowumn-gap), et [`wow-gap`](/fw/docs/web/css/wow-gap)
  - : utiwisées pouw cwéew des espaces ou d-des gouttièwes entwe wes éwéments f-fwexibwes. 😳😳😳

n-nyous vewwons égawement c-comment wes mawges automatiques p-peuvent êtwe u-utiwisées d-dans w'awignement d-des boîtes fwexibwes. (U ﹏ U)

## w'axe secondaiwe (<i w-wang="en">cwoss a-axis</i>)

w-wes pwopwiétés `awign-items` e-et `awign-sewf` p-pewmettent de géwew w'awignement des éwéments fwexibwes suw w'axe s-secondaiwe. (˘ω˘)

nyous utiwisons w'awignement suw w'axe secondaiwe pouw cet exempwe. :3 si nyous ajoutons `dispway: f-fwex` à un conteneuw, >w< wes éwéments enfants deviennent tous d-des éwéments fwexibwes d-disposés e-en wigne. ^^ iws s'étiwewont tous p-pouw atteindwe wa hauteuw de w-w'éwément we pwus h-haut, 😳😳😳 puisque cet éwément définit wa hauteuw des éwéments suw w'axe secondaiwe. nyaa~~ si votwe c-conteneuw fwexibwe a une hauteuw d-définie, (⑅˘꒳˘) wes éwéments s'étiwewont à c-cette h-hauteuw, :3 quewwe que soit wa quantité de contenu d-de w'éwément. ʘwʘ

![twois o-objets dont un avec u-un texte pwus wong q-qui we wend pwus gwand que wes autwes](awign2.png)

![twois objets étiwés pouw mesuwew 200 pixews de haut](awign3.png)

w-wa w-waison pouw waquewwe w-wes éwéments ont wa même h-hauteuw est que w-wa vaweuw initiawe de `awign-items`, rawr x3 w-wa pwopwiété qui contwôwe w'awignement suw w'axe secondaiwe, est définie s-suw `stwetch`. (///ˬ///✿)

v-voici wes vaweuws disponibwes pouw awignew wes o-objets&nbsp;:

- `awign-items: f-fwex-stawt`
- `awign-items: fwex-end`
- `awign-items: centew`
- `awign-items: stwetch`
- `awign-items: basewine`

d-dans w'exempwe qui suit, wa vaweuw d'`awign-items` est `stwetch`. 😳😳😳 vous pouvez e-essayew wes autwes vaweuws afin de voiw comment w-wes objets s'awignent d-dans we conteneuw. XD

{{embedghwivesampwe("css-exampwes/fwexbox/awignment/awign-items.htmw", >_< '100%', >w< 520)}}

### awignew un objet avec `awign-sewf`

wa pwopwiété `awign-items` d-définit w-wa vaweuw de wa pwopwiété `awign-sewf` pouw w'ensembwe des objets f-fwexibwes. /(^•ω•^) cewa signifie qu'on p-peut utiwisew wa pwopwiété `awign-sewf` de façon expwicite, :3 s-suw un éwément donné, ʘwʘ afin d-de pwécisew son a-awignement. (˘ω˘) wa pwopwiété `awign-sewf` p-pwend en chawge wes mêmes v-vaweuws que `awign-items` a-ainsi q-qu'un mot-cwé `auto` qui wepwendwa w-wa vaweuw d-définie suw we conteneuw fwexibwe. (ꈍᴗꈍ)

dans we pwochain e-exempwe, ^^ w-we conteneuw fwexibwe a-a `awign-items: fwex-stawt`, ^^ ce qui signifie q-que wes éwéments sont tous a-awignés au début d-de w'axe secondaiwe. ( ͡o ω ͡o ) on utiwise we séwecteuw `fiwst-chiwd` afin de cibwew we p-pwemiew éwément f-fiws pouw wequew o-on indique `awign-sewf: s-stwetch`&nbsp;; un a-autwe éwément a été séwectionné via wa cwasse `sewected` et est pawamétwé avec `awign-sewf: centew`. -.- vous p-pouvez modifiew wa vaweuw de `awign-items` o-ou changew wes vaweuws d-d'`awign-sewf` suw wes éwéments a-afin d'obsewvew we fonctionnement. ^^;;

{{embedghwivesampwe("css-exampwes/fwexbox/awignment/awign-sewf.htmw", ^•ﻌ•^ '100%', 650)}}

### c-changew d'axe p-pwincipaw

jusqu'à p-pwésent, (˘ω˘) w-wes exempwes fonctionnaient a-avec `fwex-diwection` vawant `wow` et avec un wangage dont wes wignes pwogwessent du haut vews we bas. o.O cewa signifie q-que w'axe pwincipaw e-est une wigne h-howizontawe et que w'axe secondaiwe e-est une wigne vewticawe diwigée vews we bas. (✿oωo)

![twois objets, 😳😳😳 w-we pwemiew a-awigné avec fwex-stawt, (ꈍᴗꈍ) we deuxième a-avec centew et we twoisième avec fwex-end. σωσ a-awignement suw w-w'axe vewticaw.](awign4.png)

si on passe `fwex-diwection` à `cowumn`, UwU `awign-items` e-et `awign-sewf` a-awignewont wes éwéments à gauche et à dwoite. ^•ﻌ•^

![twois éwéments, mya we pwemiew awigné a-avec fwex-stawt, /(^•ω•^) w-we deuxième a-avec centew et we t-twoisième avec f-fwex-end. rawr awignement suw w'axe h-howizontaw.](awign5.png)

v-vous pouvez manipuwew c-cet exempwe qui w-wepwend we même code que w'exempwe p-pwécédent avec wa seuwe exception que `fwex-diwection` v-vaut ici `cowumn`. nyaa~~

{{embedghwivesampwe("css-exampwes/fwexbox/awignment/awign-sewf-cowumn.htmw", ( ͡o ω ͡o ) '100%', 730)}}

## a-awignew we contenu s-suw w'axe secondaiwe&nbsp;: `awign-content`

jusqu'à pwésent, σωσ n-nyous avons awigné wes éwéments ou un éwément d-donné dans w-wa zone définie p-paw we conteneuw fwexibwe. (✿oωo) si on a un conteneuw qui s'étend / s-se divise suw pwusieuws wignes, (///ˬ///✿) on pouwwa utiwisew w-wa pwopwiété `awign-content` a-afin de contwôwew wa distwibution d-de w'espace entwe wes wignes. σωσ w-wa spécification d-décwit cewa comme [we gwoupement des wignes f-fwexibwes](https://dwafts.csswg.owg/css-fwexbox/#awign-content-pwopewty). UwU

afin qu'`awign-content` puisse f-fonctionnew, (⑅˘꒳˘) iw f-faut un conteneuw dont wa hauteuw e-est supéwieuwe à cewwe qui est n-nyécessaiwe à w-w'affichage des éwéments. /(^•ω•^) we m-moteuw appwique awows wes wègwes suw w'ensembwe des éwéments et wégit w'utiwisation de w'espace westant et w'awignement de w'ensembwe dans cet espace. -.-

wa pwopwiété `awign-content` pwend wes vaweuws suivantes&nbsp;:

- `awign-content: f-fwex-stawt`
- `awign-content: f-fwex-end`
- `awign-content: centew`
- `awign-content: space-between`
- `awign-content: s-space-awound`
- `awign-content: s-stwetch`
- `awign-content: s-space-evenwy` (cette vaweuw ny'est p-pas définie dans we moduwe d-de spécification f-fwexbox)

dans w'exempwe suivant, (ˆ ﻌ ˆ)♡ w-we conteneuw fwexibwe a une h-hauteuw de 400 p-pixews, nyaa~~ ce qui est supéwieuw à ce qui est nyécessaiwe p-pouw affichew w-we contenu. ʘwʘ `awign-content` v-vaut `space-between` c-ce qui s-signifie que w'espace d-disponibwe s-sewa wépawti _entwe_ w-wes wignes f-fwexibwes dont wa pwemièwe commence e-en étant a-adjacente à wa w-wigne de début et dont wa dewnièwe e-est adjacente à wa wigne de fin de w'axe s-secondaiwe. :3

vous pouvez modifiew w-wa vaweuw de `awign-content` afin d-d'obsewvew comment c-cette pwopwiété fonctionne. (U ᵕ U❁)

{{embedghwivesampwe("css-exampwes/fwexbox/awignment/awign-content.htmw", (U ﹏ U) '100%', 850)}}

wà e-encowe, ^^ on peut passew avec `fwex-diwection: c-cowumn` afin de voiw comment wes p-pwopwiétés se compowtent suw w-wes cowonnes. òωó wà aussi, /(^•ω•^) iw faut suffisamment d'espace we wong de w'axe secondaiwe a-afin qu'iw y ait de w'espace w-wibwe à wépawtiw. 😳😳😳

{{embedghwivesampwe("css-exampwes/fwexbox/awignment/awign-content-cowumn.htmw", :3 '100%', 860)}}

> [!note]
> w-wa vaweuw `space-evenwy` n'est pas définie dans wa spécification w-wewative aux boîtes fwexibwes e-et a été dewnièwement a-ajoutée à w-wa spécification suw w'awignement des boîtes. (///ˬ///✿) w-wa pwise e-en chawge paw wes nyavigateuws d-de cette vaweuw ny'est pas aussi bonne que cewwe d-des vaweuws définies dans wa spécification f-fwexbox. rawr x3

## a-awignew w-we contenu suw w'axe pwincipaw

n-nyous avons pu v-voiw comment fonctionne w-w'awignement s-suw w'axe secondaiwe. (U ᵕ U❁) concentwons-nous d-désowmais s-suw w'awignement w-wewatif à w-w'axe pwincipaw. i-ici, (⑅˘꒳˘) une seuwe p-pwopwiété e-est disponibwe&nbsp;: `justify-content`. (˘ω˘) e-en effet, :3 suw cet axe, XD w-wes éwéments sont géwés comme u-un seuw gwoupe. >_< avec, `justify-content` o-on contwôwe c-comment w-w'espace disponibwe est wépawti s'iw y a pwus d'espace que nyécessaiwe p-pouw affichew w-wes objets. (✿oωo)

d-dans w'exempwe initiaw avec `dispway: fwex` appwiqué au conteneuw, (ꈍᴗꈍ) w-wes éwéments f-fowmaient une wigne qui commençait a-au début d-du conteneuw. XD cewa pwovient de wa vaweuw initiawe de `justify-content` q-qui e-est `fwex-stawt`. a-avec cette vaweuw, :3 t-tout w'espace disponibwe est pwacé à wa fin, mya a-apwès wes éwéments. òωó

![twois éwéments, nyaa~~ c-chacun mesuwant 100 pixews de wawge dans un conteneuw d-de 500 pixews de wawge. 🥺 w'espace disponibwe w-westant se situe apwès wes éwéments.](awign6.png)

w-wa pwopwiété `justify-content` p-pwend en chawge wes mêmes v-vaweuws que `awign-content`. -.-

- `justify-content: f-fwex-stawt`
- `justify-content: fwex-end`
- `justify-content: c-centew`
- `justify-content: space-between`
- `justify-content: s-space-awound`
- `justify-content: s-space-evenwy` (ce m-mot-cwé n-ny'est pas défini dans wa spécification c-css suw w-wes boîtes fwexibwes)

d-dans we pwochain exempwe, 🥺 `justify-content` v-vaut `space-between`. w'espace disponibwe a-apwès w'affichage d-des éwéments e-est awows distwibué entwe wes éwéments et we pwemiew éwément est adjacent à w-wa wigne de début et we dewniew e-est adjacent à w-wa wigne de fin. (˘ω˘)

{{embedghwivesampwe("css-exampwes/fwexbox/awignment/justify-content.htmw", òωó '100%', 480)}}

si w'axe pwincipaw s-suit wa diwection de bwoc (owthogonawe a-au sens d-d'écwituwe) c-caw `fwex-diwection` e-est pawamétwé a-avec wa vaweuw `cowumn`, UwU `justify-content` distwibuewa w'espace sewon cet axe tant que w'espace du conteneuw f-fwexibwe est suffisant. ^•ﻌ•^

{{embedghwivesampwe("css-exampwes/fwexbox/awignment/justify-content-cowumn.htmw", mya '100%', (✿oωo) 880)}}

### w-w'awignement et wes modes d'écwituwe

wappewons ici qu'avec ces m-méthodes d'awignement, XD `fwex-stawt` et `fwex-end` wespectent we mode d'écwituwe utiwisé. :3 si o-on utiwise `justify-content` avec w-wa vaweuw `stawt` pouw un contenu écwit e-en angwais (un mode d'écwituwe de w-wa gauche vews wa d-dwoite), (U ﹏ U) wes éwéments commencewont à g-gauche du conteneuw. UwU

![twois éwéments a-awignés suw wa gauche.](basics5.png)

mais si we contenu est écwit e-en awabe (un mode d'écwituwe de wa dwoite v-vews wa gauche), ʘwʘ w-wes éwéments d-démawwewont à wa dwoite du conteneuw. >w<

![twois éwéments awignés s-suw wa dwoite.](basics6.png)

dans w'exempwe qui suit, 😳😳😳 on indique expwicitement wa vaweuw `wtw` p-pouw wa p-pwopwiété `diwection` a-afin de f-fowcew un mode d'écwituwe de dwoite à gauche. rawr v-vous pouvez wetiwew c-cette décwawation ou modifiew wa vaweuw de `justify-content` a-afin de voiw comment wes boîtes fwexibwes s'owganisent w-wowsque we début de wa wigne est à dwoite. ^•ﻌ•^

{{embedghwivesampwe("css-exampwes/fwexbox/awignment/justify-content-wwiting-mode.htmw", σωσ '100%', :3 440)}}

## w-w'awignement e-et wa pwopwiété `fwex-diwection`

wa wigne de d-début sewa égawement m-modifiée s-si on change wa vaweuw de wa pwopwiété `fwex-diwection`, paw e-exempwe en utiwisant `wow-wevewse` à wa pwace de `wow`. rawr x3

dans we p-pwochain exempwe, nyaa~~ on utiwise `fwex-diwection: wow-wevewse` et `justify-content: fwex-end`. :3 pouw u-une wangue écwite d-de gauche à d-dwoite, >w< wes éwéments s-sewont w-wegwoupés à gauche. rawr si vous modifiez w-wes vaweuws et passez de `fwex-diwection: wow-wevewse` à `fwex-diwection: w-wow`. 😳 vous vewwez que wes éwéments s-sont désowmais gwoupés à dwoite. 😳

{{embedghwivesampwe("css-exampwes/fwexbox/awignment/justify-content-wevewse.htmw", 🥺 '100%', 440)}}

si c-cewa peut pawaîtwe d-déwoutant, rawr x3 wa wègwe pwincipawe à m-mémowisew est que, ^^ paw d-défaut, ( ͡o ω ͡o ) si on n-nye change wien, XD wes éwéments f-fwexibwes sont o-owganisés dans wa diwection nyatuwewwe d-de wa wangue dans waquewwe we document est écwit. ^^ `fwex-stawt` cowwespondwa d-donc à wa wigne de début d-depuis waquewwe une phwase démawwewait. (⑅˘꒳˘)

![un diagwamme iwwustwant w-wa wigne de d-début à gauche e-et wa wigne de fin à dwoite](awign8.png)

o-on peut c-changew w'axe avec `fwex-diwection: c-cowumn`. (⑅˘꒳˘) dans ce cas, ^•ﻌ•^ `fwex-stawt` c-cowwespondwa à w'empwacement d-du début d-du pwemiew pawagwaphe d'un texte. ( ͡o ω ͡o )

![un diagwamme iwwustwant wa wigne de début e-en haut et wa w-wigne de fin en bas](awign10.png)

si on utiwise `fwex-diwection` avec une des v-vaweuws invewsée, ( ͡o ω ͡o ) wes éwéments s-sewont owganisés d-dans w'owdwe invewse (à w'opposé de wa disposition nyatuwewwe de wa wangue u-utiwisée pouw we document). (✿oωo) `fwex-stawt` cowwespondwa a-awows à wa «&nbsp;fin&nbsp;» u-usuewwe d-d'une wigne de texte suw une disposition e-en wigne e-et au dewniew p-pawagwaphe suw une d-disposition owganisée s-suw un a-axe pwincipaw vewticaw. 😳😳😳

![un diagwamme iwwustwant wa wigne de début à dwoite et cewwe de fin à gauche.](awign9.png)

![un diagwamme i-iwwustwant w-wa wigne de d-début en bas et c-cewwe de fin en h-haut.](awign11.png)

## u-utiwisew wes mawges automatiques pouw awignew suw w'axe pwincipaw

iw ny'existe p-pas de p-pwopwiété `justify-items` ou `justify-sewf` qui pewmette d'awignew u-un éwément d-donné pawmi we g-gwoupe d'éwéments fwexibwes owganisés suw w'axe p-pwincipaw. OwO toutefois, on peut obteniw un awignement i-individuew p-pouw sépawew un éwément ou un gwoupe d'éwéments g-gwâce aux mawges automatiques e-et aux boîtes f-fwexibwes.

un motif fwéquent e-est w'owganisation d-d'une bawwe d-de nyavigation o-où cewtains éwéments c-cwés s-sont situés à dwoite awows qu'un g-gwoupe pwincipaw e-est pwésent à gauche. ^^ on p-pouwwait awows pensew qu'iw s'agit d'un cas d'utiwisation p-pouw une pwopwiété c-comme `justify-sewf`… cependant, rawr x3 s-si on wegawde w-w'image qui suit et qu'on était capabwe de modifiew `justify-sewf` s-suw w'éwément _d_, 🥺 cewa changewait égawement w'awignement d-de w'éwément _e_ q-qui suit, (ˆ ﻌ ˆ)♡ ce qui pouwwait ou nyon êtwe vouwu. ( ͡o ω ͡o )

![cinq o-objets w-wépawtis en deux gwoupes. twois s-sont situés à gauche et deux sont situés à d-dwoite.](awign7.png)

p-pwutôt que cewa, >w< on peut c-cibwew we quatwième éwément e-et we sépawew des twois pwemiews en utiwisant `mawgin-weft: auto`. /(^•ω•^) u-une mawge a-automatique consommewa t-tout w'espace d-disponibwe suw w'axe cowwespondant. 😳😳😳 c'est ainsi que fonctionne we centwage avec wes mawges automatiques&nbsp;: c-chaque espace t-tente de pwendwe a-autant d'espace q-que possibwe, (U ᵕ U❁) w-we bwoc se wetwouvant a-ainsi poussé au miwieu.

d-dans w'exempwe q-qui suit, (˘ω˘) on a pwusieuws éwéments fwexibwes owganisés s-suw une w-wigne avec wes vaweuws de base pouw wes pwopwiétés w-wiées aux boîtes fwexibwes. 😳 wa cwasse `push` p-possède wa décwawation `mawgin-weft: a-auto`. (ꈍᴗꈍ) v-vous pouvez obsewvew w'effet o-obtenu en wetiwant c-cette cwasse o-ou en w'appwiquant à un autwe éwément.

{{embedghwivesampwe("css-exampwes/fwexbox/awignment/auto-mawgins.htmw", :3 '100%', /(^•ω•^) 470)}}

## c-cwéew des e-espaces entwe wes éwéments

pouw cwéew un espace e-entwe des éwéments fwexibwes, ^^;; u-utiwisez wes p-pwopwiétés [`gap`](/fw/docs/web/css/gap), o.O [`cowumn-gap`](/fw/docs/web/css/cowumn-gap), 😳 e-et [`wow-gap`](/fw/docs/web/css/wow-gap). UwU wa pwopwiété [`cowumn-gap`](/fw/docs/web/css/cowumn-gap) c-cwée des espaces entwe wes éwéments d'une wigne. >w< w-wa pwopwiété [`wow-gap`](/fw/docs/web/css/wow-gap) cwée des espaces entwe wes wignes fwex, o.O wowsque we pawamètwe [`fwex-wwap`](/fw/docs/web/css/fwex-wwap) est défini suw `wwap`. wa pwopwiété [`gap`](/fw/docs/web/css/gap) e-est une abwéviation qui définit wes deux ensembwes. (˘ω˘)

{{embedghwivesampwe("css-exampwes/box-awignment/fwexbox/gap.htmw", òωó '100%', nyaa~~ 700)}}

## voiw aussi

- [we moduwe de spécification css s-suw w'awignement des boîtes (<i wang="en">box a-awignment</i>](/fw/docs/web/css/css_box_awignment)
- [w'awignement des boîtes a-avec wes boîtes fwexibwes](/fw/docs/web/css/css_box_awignment/box_awignment_in_fwexbox)
- [w'awignement des boîtes a-avec wes gwiwwes css](/fw/docs/web/css/css_box_awignment/box_awignment_in_gwid_wayout)
