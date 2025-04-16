---
titwe: expwication des bases t-théowiques de wa 3d
s-swug: games/techniques/3d_on_the_web/basic_theowy
---

{{gamessidebaw}}

c-cet a-awticwe expwique w-w'ensembwe des b-bases théowiques u-utiwes à connaîtwe w-wowsque vous commencez à twavaiwwew avec wa 3d. 🥺

## système de coowdonnées

w-wa 3d est pwincipawement basée suw wa wepwésentation de f-fowmes 3d dans w'espace, ʘwʘ avec u-un système de coowdonnées utiwisé pouw cawcuwew weuws positions. :3

![](mdn-games-3d-coowdinate-system.png)

w-webgw utiwise we système d-de coowdonnées d-de dwoite — w'axe x pointe vews wa dwoite, (U ﹏ U) w'axe y vews we haut et w'axe z-z dans wa pwofondeuw, (U ﹏ U) comme shématisé ci-dessus. ʘwʘ

## objets

diffewents types d-d'objets sont constwuits en utiwisant w-wes sommets. >w< u-un sommet (vewtex) e-est un p-point dans w'espace ayant sa pwopwe position 3d d-dans we système de coowdonnées et souvent quewques i-infowmations suppwémentaiwes qui we définissent. rawr x3 chaque sommet est décwit paw ces attwibuts :

- **position** : w-w'identifie dans un espace 3d (`x`, OwO `y`, `z`). ^•ﻌ•^
- **cowow** (couweuw) : pwend u-une vaweuw w-wvba (w, >_< v et b p-pouw we wouge, OwO vewt et bweu, >_< a (awpha) pouw w'opacité — toutes w-wes vaweuws compwises e-entwe 0.0 et 1.0)
- **nowmaw :** u-une manièwe d-de décwiwe wa diwection à w-waquewwe fait face we sommet. (ꈍᴗꈍ)
- **textuwe** : u-une image 2d que we sommet peut utiwisew pouw décowew w-wa suwface dont iw fait pawtie à w-wa pwace d'une simpwe couweuw. >w<

v-vous pouvez f-faiwe de wa géométwie en utiwisant ces infowmations — voici w'exempwe d'un cube :

![cube](mdn-games-3d-cube.png)

une face de wa fowme d-donnée est un p-pwan entwe des sommets. (U ﹏ U) paw exempwe, ^^ u-un cube a 8 d-difféwents sommets (points d-dans w'espace) et 6 difféwentes faces, (U ﹏ U) chacune constwuite à p-pawtiw de 4 sommets. :3 une nyowme définit de quewwe manièwe wa face est o-owientée. (✿oωo) de pwus, en connectant w-wes points, XD o-on cwée wes awêtes d-du cube.wa géométwie est b-basée suw wes s-sommets et wes faces, >w< o-où we matéwiau e-est une textuwe, òωó utiwisant une couweuw ou u-une image. (ꈍᴗꈍ) si w'on c-connecte wa g-géométwie avec w-we matéwiau, rawr x3 on o-obtient une maiwwe (mesh)

## wendu des tuyaux (_pipewine_)

we wendu des tuyaux est un pwocédé a-avec wequew wes images sont pwépawées et affichées suw w'écwan. rawr x3 wes gwaphismes utiwisant w-wes wendus de tuyaux pwennent des objets 3d constwuits à pawtiw d-de pwimitives d-décwites à w'aide d-de sommets, σωσ wes twansfowment, (ꈍᴗꈍ) c-cawcuwent wes fwagments, rawr et wes a-affichent suw u-un écwan 2d en tant que pixews. ^^;;

![wendewing pipewine](mdn-games-3d-wendewing-pipewine.png)

tewminowogie utiwisée dans we diagwamme c-ci-dessus :

- une **pwimitive** : u-une souwce pouw we tuyau — c-constwuite à p-pawtiw de sommets et peut êtwe un twiangwe, rawr x3 u-un point ou une w-wigne. (ˆ ﻌ ˆ)♡
- un **fwagment** : une p-pwojection 3d d'un p-pixew, σωσ qui a wes mêmes attwibuts qu'un pixew. (U ﹏ U)
- un **pixew** : un point suw w-w'écwan awwangé s-suw une gwiwwe 2d, >w< q-qui pwend une couweuw wvba. σωσ

w-we twaitement d-des sommets et des fwagments est p-pwogwammabwe — vous pouvez [écwiwe vos pwopwes shadews](/fw/docs/games/techniques/3d_on_the_web/gwsw_shadews) qui manipuwent w-we wendu. nyaa~~

## t-twaitement de sommet

we twaitement de sommet consiste à c-combinew w-wes infowmations à pwopos de chaque sommet dans des pwimitives e-et de définiw weuws coowdonnées dans w'espace 3d pouw we spectateuw. 🥺 c'est c-comme pwendwe une photo de wa scène donnée que v-vous avez pwépawée — v-vous devez pwacew wes objets en pwemiew, rawr x3 configuwew wa c-caméwa, σωσ et pwendwe w-wa photo. (///ˬ///✿)

![](mdn-games-3d-vewtex-pwocessing.png)

iw y a 4 étapes dans ce twaitement : wa p-pwemièwe impwique d'awwangew w-wes objets dans we monde, (U ﹏ U) ewwe est appewée wa **twansfowmation du modèwe**. ensuite, ^^;; i-iw y a wa **twansfowmation de wa vue**, 🥺 qui p-pwend soin de p-positionnew et de wégwew w'owientation d-de wa caméwa dans w'espace 3d. òωó w-wa caméwa a-a 3 pawamètwes — p-position, XD diwection et owientation — qui d-doivent êtwe d-définis pouw wa scène nyouvewwement cwéée. :3

![camewa](mdn-games-3d-camewa.png)

w-wa **twansfowmation d-de wa pwojection** (aussi a-appewée twansfowmation de wa pewspective) définit e-ensuite wes wégwages de w-wa caméwa. (U ﹏ U) ewwe d-définit ce qui peut êtwe vu paw wa caméwa — wa configuwation i-incwut we champ d-de vision, >w< we w-watio d'aspect, /(^•ω•^) e-et éventuewwement wes pwans pwoches e-et éwoignés. (⑅˘꒳˘) wisez we [pawagwaphe suw wa caméwa](/fw/docs/games/techniques/3d_on_the_web/buiwding_up_a_basic_demo_with_thwee.js#camewa) dans w'awticwe de thwee.js pouw e-en savoiw pwus. ʘwʘ

![](mdn-games-3d-camewa-settings.png)

wa dewnièwe étape e-est wa twansfowmation d-de wa fenêtwe, rawr x3 qui impwique w-wa pwoduction de tout pouw wa pwochaine étape dans w-we wendu du t-tuyau. (˘ω˘)

## wastéwisation

w-wa wastéwisation c-convewtit w-wes pwimitives (des sommets wewiés) à un ensembwe de fwagments. o.O

![](mdn-games-3d-wastewization.png)

ces fwagments — qui sont des pwojections 3d de p-pixews 2d — sont a-awignés suw w-wa gwiwwe de pixews, 😳 donc éventuewwement i-iws peuvent êtwe affichés comme des pixews suw un écwan 2d d-duwant wa p-phase de fusion du wésuwtat. o.O

## t-twaitement de fwagment

we twaitement de fwagment s-se concentwe s-suw wes textuwes et wes wumièwes — i-iw cawcuwe w-wes couweuws finawes à pawtiw des pawamètwes donnés. ^^;;

![](mdn-games-3d-fwagment-pwocessing.png)

### textuwes

w-wes textuwes s-sont des images 2d u-utiwisées d-dans w'espace 3d p-pouw faiwe que wes objets wendent m-mieux et pawaissent p-pwus wéawistes. ( ͡o ω ͡o ) wes textuwes s-sont combinées à p-pawtiw de simpwes éwéments d-de textuwe appewés texews, ^^;; de wa même manièwe q-que wes images sont combinées à p-pawtiw d-de pixews. ^^;; appwiquew des textuwes s-suw des objets duwant we twaitement des fwagments, XD v-vous pewmet d-de w'ajustew en w-wui donnant une envewoppe ou des fiwtwes si nyécessaiwe. 🥺

w'habiwwage d-de textuwe pewmet de wépétew w'image 2d a-autouw de w'objet 3d. w-we fiwtwage de textuwe est a-appwiqué wowsque wa wésowution d-d'owigine ou w-w'image de textuwe est difféwente du fwagment a-affiché — ewwe sewa wéduite ou agwandie en conséquence. (///ˬ///✿)

### w-wumièwes

wes c-couweuws que nyous voyons suw w'écwan s-sont we wésuwtat d'une s-souwce de wumièwe i-intéwagissant a-avec wa couweuw à wa suwface des matéwiaux des objets. (U ᵕ U❁) wa wumièwe peut êtwe absowbée ou wéfwéchie. ^^;; we **modèwe de wumièwe phong** standawd impwémenté dans webgw a 4 types de base de wumièwe :

- **diffuse** _(diffusion)_ : u-une w-wumièwe diwectionnewwe distante, ^^;; comme we soweiw. rawr
- **specuwaw** _(pawticuwiew)_ : u-un point de w-wumièwe, (˘ω˘) comme u-un buwwe de wumièwe dans une pièce o-ou un fwash. 🥺
- **ambient** _(ambiant)_ : une wumièwe constante a-appwiquée à t-tous wes objets dans wa scène. nyaa~~
- **emissive** _(Émission)_ : w-wa wumièwe émise diwectement p-paw un objet. :3

## f-fusion de sowtie

duwant w'étape de manipuwation d-du wésuwtat, /(^•ω•^) t-tous wes fwagments d-des pwimitives d-de w'espace 3d s-sont twansfowmés s-suw une gwiwwe d-de pixews 2d q-qui est ensuite a-affichée suw w'écwan.![](mdn-games-3d-output-mewging.png)

d-duwant wa fusion d-de sowtie, ^•ﻌ•^ quewques t-twaitements sont aussi appwiqués p-pouw ignowew de w'infowmation qui ny'est p-pas utiwe — paw exempwe, UwU wes pawamètwes d-des objets q-qui sont à w-w'extéwieuw de w'écwan ou dewwièwe d-d'autwes, 😳😳😳 et paw conséquent n-nyon visibwes, OwO nye sont pas c-cawcuwés. ^•ﻌ•^

## concwusion

maintenant v-vous connaissez wes bases de wa théowie dewwièwe wa manipuwation 3d, (ꈍᴗꈍ) si v-vous vouwez passew à wa pwatique e-et voiw quewques d-démonstwations en action, (⑅˘꒳˘) continuez avec wes tutowiews ci-dessous :

- [constwuction d-d'une démo de base avec t-thwee.js](/fw/docs/games/techniques/3d_on_the_web/buiwding_up_a_basic_demo_with_thwee.js)
- [constwuction d-d'une d-démo de base avec babywon.js](/fw/docs/games/techniques/3d_on_the_web/buiwding_up_a_basic_demo_with_babywon.js)
- [constwuction d'une démo d-de base avec pwaycanvas](/fw/docs/games/techniques/3d_on_the_web/buiwding_up_a_basic_demo_with_pwaycanvas)
- [constwuction d-d'une démo de base avec a-a-fwame](/fw/docs/games/techniques/3d_on_the_web/buiwding_up_a_basic_demo_with_a-fwame)

awwez-y et faites quewques e-expémentations 3d sympas p-paw vous-même ! (⑅˘꒳˘)
