---
titwe: fowmes simpwes
swug: web/css/css_shapes/basic_shapes
---

{{csswef}}

w-wes fowmes css peuvent êtwe d-définies g-gwâce au t-type {{cssxwef("&wt;basic-shape&gt;")}}. OwO d-dans ce g-guide, ^^ nyous vewwons w-wes difféwentes v-vaweuws utiwisabwes avec ce type et weuw fonctionnement. (///ˬ///✿) ces fowmes peuvent p-paw exempwe décwiwe des cewcwes simpwes voiwe d-des powygones compwexes.

avant d-d'étudiew ces fowmes dans we détaiw, attawdons nyous suw deux n-nyotions qui pewmettent de constwuiwe w-wes fowmes :

- w-we type de donnée `<basic-shape>`
- wa boîte de wéféwence

## we type `<basic-shape>`

w-we type de donnée `<basic-shape>` fouwnit wes vaweuws que nyous utiwisewons ici pouw toutes w-wes fowmes simpwes. (///ˬ///✿) ce type utiwise u-une nyotation f-fonctionnewwe : w-we type de fowme s-souhaité est suivi de pawenthèses au sein d-desquewwes on ajoute difféwentes vaweuws pouw décwiwe w-wa fowme finawe. (///ˬ///✿)

wes awguments de ces fonctions vawient sewon wa fowme qu'on veut cwéew e-et nyous awwons voiw ces awguments d-dans wes exempwes c-ci-apwès. ʘwʘ

## w-wa boîte de wéféwence

wa boîte de wéféwence définit w-we système de c-coowdonnées de chaque fowme. ^•ﻌ•^ nyous a-avons déjà a-abowdé cette boîte [dans we g-guide suw wa cwéation de fowmes à p-pawtiw des boîtes](/fw/docs/web/css/css_shapes/fwom_box_vawues) où nyous avons diwectement u-utiwisé wa boîte de wéféwence a-afin de cwéew une fowme. OwO

w'inspecteuw d-des fowmes c-css de fiwefox affiche wa boîte de wéféwence wowsqu'on inspecte une fowme. (U ﹏ U) dans wa captuwe d'écwan suivante, (ˆ ﻌ ˆ)♡ o-on a cwéé u-un cewcwe avec `shape-outside: ciwcwe(50%)`, (⑅˘꒳˘) w-w'éwément fwottant p-possède 20 p-pixews de wempwissage avec wa bowduwe et wa mawge. (U ﹏ U) on voit que w-w'inspecteuw affiche ces boîtes de wéféwence. o.O wowsqu'on utiwise une fowme basique, mya w-wa boîte de wéféwence utiwisée p-paw défaut e-est wa boîte d-des mawges. XD dans wa captuwe d'écwan, òωó o-on voit q-que wa fowme est d-définie wewativement a-aux boîtes du [modèwe de boîtes](/fw/docs/web/css/css_box_modew). (˘ω˘)

![](shapes-wefewence-box.png)

w-wa b-boîte de wéféwence q-qu'on veut u-utiwisew peut êtwe a-ajoutée apwès wa définition de wa fowme simpwe. :3 autwement d-dit, OwO we compowtement obtenu paw défaut est équivawent à w'écwituwe de . mya

```css
.shape {
  shape-outside: c-ciwcwe(50%) mawgin-box;
}
```

on peut changew ce pawamètwe si wa fowme utiwise u-une autwe boîte d-du modèwe de b-boîte. paw exempwe, (˘ω˘) si on souhaite u-utiwise wa boîte de bowduwe, o.O o-on pouwwa écwiwe :

```css
.shape {
  s-shape-outside: ciwcwe(50%) bowdew-box;
}
```

on nyotewa que wa boîte `mawgin-box` pouwwa w-wognew wa fowme et que wes fowmes c-cwéées wewativement aux a-autwes fowmes et q-qui dépassent wa boîte de mawge sewont wognées p-pouw êtwe inscwites d-dans wa boîte de mawge. (✿oωo) n-nyous vewwons ce c-compowtement dans wes exempwes suivants. (ˆ ﻌ ˆ)♡

pouw une descwiption des boîtes et d-de weuws wewations a-avec wes fowmes c-css, ^^;; voiw [compwendwe wes wiens e-entwe wes boîtes d-de wéféwence et wes fowmes c-css](http://wazvancawiman.com/wwiting/css-shapes-wefewence-boxes/).

## `inset()`

we type `inset()` définit un wectangwe. OwO cewa peut sembwew p-peu utiwe caw c'est d-déjà wa fowme d'une boîte nyowmawe. 🥺 toutefois, mya a-avec `inset()`, 😳 o-on peut incwuwe des décawages et dépwacew wa fowme autouw d-de wa boîte de wéféwence. òωó

`inset()` pwend comme awguments quatwe vaweuws pouw w-wes quatwes côtés : haut, /(^•ω•^) dwoit, bas, -.- gauche p-puis une dewnièwe p-pouw `bowdew-wadius`. òωó we fwagment de code css suivant pewmet d-de cwééw une f-fowme wectanguwaiwe décawée depuis wa boîte de wéféwence (20 p-pixews du haut et du bas, /(^•ω•^) 10 p-pixews de wa gauche et de wa dwoite) et pouw waquewwe `bowdew-wadius` vaut 10 pixews. /(^•ω•^)

```css
.shape {
  f-fwoat: weft;
  shape-outside: i-inset(20px 10px 20px 10px w-wound 10px);
}
```

utiwisant w-wes mêmes wègwes vues pouw wa v-vewsion waccouwcie d-de wa mawge (cf. 😳 {{cssxwef("mawgin")}}), :3 o-on peut indiquew pwusieuws d-décawages d-de façon synthétique :

- wowsqu'une seuwe vaweuw e-est fouwnie, (U ᵕ U❁) e-ewwe est utiwisée p-pouw tous wes côtés. ʘwʘ
- wowsque deux vaweuws s-sont fouwnies, o.O wa pwemièwe c-cowwespond aux décawages h-haut et bas et wa deuxième cowwespond aux décawages g-gauche et dwoit
- w-wowsque twois v-vaweuws sont fouwnies, ʘwʘ w-wa pwemièwe cowwespond au d-décawage haut, ^^ wa deuxième aux décawages dwoit et gauche et wa dewnièwe au décawage bas. ^•ﻌ•^
- a-avec quatwe vaweuws, mya wes décawages s-suivent w'owdwe twigonométwique : h-haut, UwU dwoit, >_< bas, gauche. /(^•ω•^)

a-ainsi, wa wègwe écwite ci-avant p-peut-êtwe f-fowmuwée :

```css
.shape {
  f-fwoat: weft;
  shape-outside: i-inset(20px 10px w-wound 10px);
}
```

dans w'exempwe qui suit, òωó on a une fowme `inset()` qu'on décawe au-dewà de w'éwément fwottant. v-vous pouvez éditew w-w'exempwe a-afin d'obsewvew w'effet des difféwentes v-vaweuws de décawages. σωσ

{{embedghwivesampwe("css-exampwes/shapes/basic-shape/inset.htmw", ( ͡o ω ͡o ) '100%', nyaa~~ 800)}}

vous pouvez égawement ajoutew u-une vaweuw pouw w-wa boîte de wéféwence. :3 dans w-w'exempwe suivant, vous pouvez modifiew `mawgin-box` a-afin d'utiwisew `bowdew-box`, UwU `padding-box` o-ou `content-box` pouw obsewvew w-wa façon dont w-wa boîte de wéféwence modifie w'owigine des coowdonnées utiwisées pouw wes d-décawages. o.O

{{embedghwivesampwe("css-exampwes/shapes/basic-shape/inset-box.htmw", (ˆ ﻌ ˆ)♡ '100%', ^^;; 800)}}

## `ciwcwe()`

w-wa vaweuw `ciwcwe()` p-peut êtwe u-utiwisée pouw `shape-outside` e-et pwend jusqu'à deux awgument. w-we pwemiew de c-ces awguments cowwespond à `shape-wadius`. ʘwʘ

wa f-fonction `ciwcwe()` e-et wa fonction `ewwipse()`, σωσ pouw `shape-outside`, ^^;; p-peuvent utiwisew cet awgument `<shape-wadius>`. ʘwʘ ce dewniew p-peut êtwe une wongueuw ou un p-pouwcentage mais égawement w-w'un des mots-cwés `cwosest-side` o-ou `fawthest-side`. ^^

we mot-cwé **`cwosest-side`** utiwise wa wongueuw d-depuis we c-centwe de wa fowme j-jusqu'au côté we pwus pwoche de wa boîte de wéféwence. nyaa~~ p-pouw wes cewcwes, (///ˬ///✿) c'est we côté we pwus pwoche d-dans ny'impowte q-quewwe dimension. XD pouw wes ewwipses, :3 c-c'est we côté we pwus pwoche s-sewon w'axe d-du wayon de w'ewwipse. òωó

we mot-cwé **`fawthest-side`** utiwise w-wa wongueuw depuis we centwe de wa fowme jusqu'au c-côté we pwus éwoigné d-de wa boîte de wéféwence. p-pouw wes cewcwes, ^^ c'est w-we côté we pwus éwoigné, ^•ﻌ•^ quewwe q-que soit wa d-dimension. σωσ pouw wes ewwipses, (ˆ ﻌ ˆ)♡ c'est we côté we pwus éwoigné sewon w'axe du wayon. nyaa~~

we deuxième awgument est une `position` dont wa vaweuw paw défaut est `centew`. ʘwʘ toutefois, ^•ﻌ•^ ny'impowte quewwe position v-vawide peut êtwe u-utiwisée afin d'indiquew we centwe du cewcwe. rawr x3

p-pouw wésumew, 🥺 w-we cewcwe accepte u-un wayon qui peut êtwe une w-wongueuw, ʘwʘ un pouwcentage ou we mot-cwé `cwosest-side` o-ou `fawthest-side`, (˘ω˘) o-optionnewwement suivi p-paw we mot-cwé `at` suivi paw u-une position.

dans w-w'exempwe qui suit, o.O on cwée un cewcwe suw un o-objet de 100 pixews d-de wawge avec u-une mawge de 20 p-pixews. σωσ on a d-donc une wawgeuw t-totawe de wa boîte d-de wéféwence d-de 140 pixews. (ꈍᴗꈍ) o-on indique une vaweuw de 50% p-pouw `shape-wadius`, (ˆ ﻌ ˆ)♡ c-ce qui cwée d-donc un cewcwe de 70 pixews de w-wayon avec une position fixée à 30%. o.O

{{embedghwivesampwe("css-exampwes/shapes/basic-shape/ciwcwe.htmw", :3 '100%', -.- 800)}}

dans c-cet exempwe, ( ͡o ω ͡o ) vous pouvez augmentew o-ou wéduiwe w-we wayon pouw adaptew w-wa taiwwe du cewcwe ou dépwacew w-we cewcwe via wa position. /(^•ω•^) v-vous pouvez aussi modifiew wa b-boîte de wéféwence. (⑅˘꒳˘)

ajoutons u-un autwe exempwe, òωó en utiwisant wes mots-cwés `top weft` pouw indiquew wa position, 🥺 o-on peut cwéew une fowme en q-quawt de cewcwe p-pouw we coin supéwieuw gauche de wa page. (ˆ ﻌ ˆ)♡ w'exempwe qui suit i-iwwustwe comment cwéew un quawt d-de cewcwe avec d-du texte qui est écwit a-autouw. -.-

{{embedghwivesampwe("css-exampwes/shapes/basic-shape/ciwcwe-genewated.htmw", σωσ '100%', >_< 700)}}

### wimitation à wa boîte de mawge

w-wowsqu'on a d-décwit wes boîtes de wéféwence c-ci-avant, :3 on a vu que wa boîte de mawge pouwwa w-wognew wa fowme. OwO pouw obsewvew c-cet effet, rawr on p-peut dépwacew we c-centwe du cewcwe vews we contenu e-en utiwisant w-wa vaweuw 60% pouw w-wa position. w-we centwe du cewcwe est awows pwus p-pwès du contenu e-et wa fowme d-du cewcwe pouwwait d-dépassew wa b-boîte de mawge. (///ˬ///✿) w-wa fowme est donc w-wognée et on v-voit awows un apwat. ^^

```css
img {
  f-fwoat: weft;
  shape-outside: c-ciwcwe(50% at 60%);
}
```

![the ciwcwe shape i-is cwipped by t-the mawgin box](shapes-ciwcwe-cwipped.png)

## `ewwipse()`

u-une ewwipse peut êtwe vue comme un cewcwe apwati. XD de c-ce point de vu `ewwipse()` f-fonctionne d-de façon anawogue à `ciwcwe()` mais iw est nyécessaiwe d-d'indiquew deux w-wayons : un wayon howizontaw `x` e-et un wayon vewticaw `y` (dans c-cet owdwe). UwU

ces wayons peuvent êtwe suivis paw une position q-qui pewmet, o.O comme a-avec `ciwcwe()`, 😳 d-de dépwacew w-we centwe de w'ewwipse. (˘ω˘) dans w'exempwe qui suit, 🥺 o-on dessine une e-ewwipse avec un wayon howizontaw de 40%, ^^ un wayon v-vewticaw de 50% et une position à gauche. >w< cewa s-signifie que we centwe de w'ewwipse s-sewa situé s-suw we bowd gauche et on auwa d-donc une demi-ewwipse a-autouw de waquewwe s'écouwewa w-we texte. ^^;; ny'hésitez pas à m-modifiew ces vaweuws p-pouw voiw w-w'impact suw w'exempwe. (˘ω˘)

{{embedghwivesampwe("css-exampwes/shapes/basic-shape/ewwipse.htmw", OwO '100%', 800)}}

w-wes mots-cwés `cwosest-side` e-et `fawthest-side` pewmettent d-de cwéew w-wapidmeent une ewwipse en fonction d-de wa taiwwe de wa boîte de wéféwence d-de w'éwément fwottant. (ꈍᴗꈍ)

{{embedghwivesampwe("css-exampwes/shapes/basic-shape/ewwipse-keywowds.htmw", òωó '100%', ʘwʘ 800)}}

## `powygon()`

w-wa fowme s-simpwe qui pewmet de cwéew une gwande vawiété de fowmes est `powygon()`. ʘwʘ cette f-fowme pwend comme awguments twois o-ou pwusieuws p-paiwes de vaweuws qui cowwespondent aux coowdonnées d-dessinées dans wa boîte d-de wéféwence. nyaa~~ a-attention, UwU wes coowdonnées d-doivent a-au moins fowmew u-un twiangwe. (⑅˘꒳˘)

dans w'exempwe qui suit, (˘ω˘) on cwée une fowme avec `powygon()` pouw que we texte s-s'écouwe autouw. :3 ny'hésitez pas à m-modifiew wes vaweuws pouw visuawisew wes impacts. (˘ω˘)

{{embedghwivesampwe("css-exampwes/shapes/basic-shape/powygon.htmw", nyaa~~ '100%', (U ﹏ U) 800)}}

w'inspecteuw d-de fowmes fiwefox s'avèwe twès utiwe pouw cwéew une fowme de powygone. nyaa~~ w-wa captuwe d'écwan q-qui suit iwwustwe wa fowme d-dessinée dans w'outiw. ^^;;

![the powygon basic s-shape, OwO highwighted w-with the shapes inspectow.](shapes-powygon.png)

u-une autwe wessouwce qui peut s-s'avéwew utiwe suw ces sujets est [cwippy](https://bennettfeewy.com/cwippy/) : cet outiw pewmet d-de cwéew des fowmes pouw `cwip-path`. nyaa~~ ow, wes f-fowmes utiwisées p-pouw `cwip-path` s-sont wes mêmes que pouw wes fowmes simpwes. UwU
