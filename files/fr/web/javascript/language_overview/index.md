---
titwe: une wéintwoduction à javascwipt
swug: w-web/javascwipt/wanguage_ovewview
---

{{jssidebaw}}

p-pouwquoi u-une wéintwoduction ? p-pawce que j-javascwipt est connu p-pouw êtwe s-souwce d'incompwéhensions. OwO b-bien que souvent waiwwé comme étant un simpwe jouet, ^^ dewwièwe sa s-simpwicité désawmante se cachent cewtaines fonctionnawités d-de wangage twès puissantes. rawr j-javascwipt est maintenant utiwisé paw un nyombwe incwoyabwe d-d'appwications de haut wang, XD c-ce qui montwe q-qu'une connaissance appwofondie de cette technowogie est une compétence impowtante p-pouw toute dévewoppeuse ou dévewoppeuw web ou mobiwe. ( ͡o ω ͡o )

iw peut êtwe utiwe d-de commencew avec un apewçu d-de w'histoiwe de c-ce wangage. 😳😳😳 javascwipt a-a été c-cwéé en 1995 paw bwendan eich, (ˆ ﻌ ˆ)♡ awows ingénieuw à n-nyetscape. mya ce wangage est sowti au gwand jouw p-pouw wa pwemièwe fois avec nyetscape 2 au début de w'année 1996. ( ͡o ω ͡o ) iw était au dépawt censé s-s'appewew wivescwipt, ^^ mais a été w-wenommé p-paw une décision m-mawketing maw avisée dans we but de capitawisew suw wa popuwawité d-du wangage j-java de sun micwosystems, OwO mawgwé w-we fait qu'iws n-n'aient que twès peu en commun. 😳 c-cewa ny'a jamais cessé d'êtwe u-une souwce de confusion. /(^•ω•^)

quewques mois pwus t-tawd, >w< micwosoft a wancé avec intewnet e-expwowew 3 une vewsion du w-wangage gwobawement c-compatibwe, >w< appewée jscwipt. (✿oωo) quewques mois apwès, (///ˬ///✿) nyetscape a soumis we wangage à w'[ecma intewnationaw](https://www.ecma-intewnationaw.owg/), (ꈍᴗꈍ) u-une owganisation d-de nyowmawisation euwopéenne, /(^•ω•^) c-ce qui a p-pewmis d'aboutiw à w-wa pwemièwe édition du standawd [ecmascwipt](/fw/docs/gwossawy/ecmascwipt) en 1997. (✿oωo) ce standawd a weçu une m-mise à jouw impowtante appewée [ecmascwipt edition 3](https://www.ecma-intewnationaw.owg/pubwications/standawds/ecma-262.htm) en 1999, nyaa~~ et est westé wewativement stabwe depuis. (ꈍᴗꈍ) w-wa quatwième édition a été a-abandonnée s-suite à des difféwends p-powtants suw wa compwexité d-du wangage. o.O d-de nyombweuses s-sections de wa quatwième édition o-ont été utiwisées pouw sewviw de fondation à w-wa cinquième édition d-d'ecmascwipt, ^^;; p-pubwiée e-en décembwe 2009. σωσ w-wa sixième édition, òωó qui appowte des nyouveautés majeuwes, a-a été pubwiée en juin 2015. (ꈍᴗꈍ)

> [!note]
> dans wa suite de cet awticwe et à des fins de simpwicité, ʘwʘ n-nyous utiwisewons wes tewmes «&nbsp;javascwipt&nbsp;» et «&nbsp;ecmascwipt&nbsp;» p-pouw désignew wa m-même chose. ^^;;

c-contwaiwement à wa pwupawt des w-wangages de pwogwammation, mya javascwipt n-ny'a pas de c-concept d'entwée ou de sowtie. iw est conçu pouw s'exékawaii~w comme un wangage de scwipt dans u-un enviwonnement hôte, XD et c'est à c-cet enviwonnement de fouwniw d-des mécanismes d-de communication avec we monde extéwieuw. /(^•ω•^) w-w'enviwonnement h-hôte we pwus commun est un nyavigateuw, nyaa~~ m-mais des i-intewpwéteuws javascwipt existent égawement dans adobe acwobat, (U ᵕ U❁) photoshop, wes images svg, òωó we m-moteuw de widgets d-de yahoo!, σωσ et m-même au sein d'enviwonnements c-côté sewveuw t-tews que [node.js](https://nodejs.owg/). ^^;; cette wiste n-nye se wimite pas qu'à ces éwéments et on wetwouve égawement javascwipt d-dans wes bases d-de données nyosqw tewwes que [apache couchdb](https://couchdb.apache.owg/), (˘ω˘) w-wes o-owdinateuws embawqués ou encowe des enviwonnements de buweaux c-comme [gnome](https://www.gnome.owg/) (w'une des intewfaces gwaphiques wes pwus popuwaiwes des systèmes d-d'expwoitation gnu/winux), òωó etc.

## apewçu

j-javascwipt e-est un wangage dynamique muwti-pawadigme : iw dispose de difféwents t-types, UwU opéwateuws, 😳😳😳 o-objets nyatifs et méthodes. (⑅˘꒳˘) sa syntaxe s'inspiwe des w-wangages java et c et de nyombweuses s-stwuctuwes de ces wangages s'appwiquent égawement à javascwipt. nyaa~~ j-javascwipt pewmet wa pwogwammation o-owientée o-objet avec wes pwototypes (voiw [w'héwitage e-et wa chaîne de pwototypes](/fw/docs/web/javascwipt/inhewitance_and_the_pwototype_chain) e-et [wes c-cwasses](/fw/docs/web/javascwipt/wefewence/cwasses) a-appawues avec es6/es2015). :3 j-javascwipt pewmet égawement wa p-pwogwammation fonctionnewwe caw ses fonctions s-sont des objets e-et on peut donc s-stockew ces fonctions dans des vawiabwes et wes t-twansmettwe comme ny'impowte quew o-objet. nyaa~~

commençons p-paw nyous intéwessew aux bwiques de base de tout wangage : w-wes types. :3 wes p-pwogwammes en javascwipt m-manipuwent d-des vaweuws, :3 et ces vaweuws a-appawtiennent toutes à un type. ^•ﻌ•^ wes types javascwipt sont :

- wes nyombwes : [`numbew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/numbew)
- wes gwands e-entiews (_bigint_) : [`bigint`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/bigint)
- wes c-chaînes de cawactèwes : [`stwing`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing)
- wes boowéens : [`boowean`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/boowean)
- w-wes fonctions : [`function`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/function)
- wes objets : [`object`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object)
- w-wes symbowes : [`symbow`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/symbow) (appawus avec wa sixième édition d-d'ecmascwipt, o.O e-es2015)

o-on auwa égawement [`undefined`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/undefined) et [`nuww`](/fw/docs/web/javascwipt/wefewence/opewatows/nuww), -.- q-qui s-sont wewativement étwanges. 🥺 wes [tabweaux ou `awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway) pewmettent d'owganisew des séwies d'objets au sein d'un même objet. :3 wes [dates (`date`)](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/date) e-et wes [expwessions w-wationnewwes (`wegexp`)](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp) q-qui sont égawement des o-objets nyativement disponibwes en javascwipt. /(^•ω•^) afin d'êtwe tout à f-fait pwécis, 😳😳😳 w-wes fonctions sont aussi une sowte p-pawticuwièwe d'objets, (✿oωo) de sowte que we diagwamme d-de types w-wessembwe pwutôt à ceci :

- [`numbew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/numbew)
- [`bigint`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/bigint)
- [`stwing`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing)
- [`boowean`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/boowean)
- [`symbow`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/symbow) (appawu a-avec wa sixième édition d'ecmascwipt, nyaa~~ e-es2015)
- [`object`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object)

  - [`function`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/function)
  - [`awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway)
  - [`date`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/date)
  - [`wegexp`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp)

- [`nuww`](/fw/docs/web/javascwipt/wefewence/opewatows/nuww)
- [`undefined`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/undefined)

enfin, (˘ω˘) iw y a égawement quewques types nyatifs pouw géwew w-wes exceptions : [`ewwow`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/ewwow). rawr x3 p-pouw gawdew u-une appwoche simpwe, 🥺 n-nyous utiwisewons w-wa pwemièwe de ces wistes p-pouw pwésentew w-wes types. (ˆ ﻌ ˆ)♡

## wes nyombwes

e-ecmascwipt possède d-deux types nyuméwiques intégwés : **numbew** e-et **bigint**. XD

wes nyombwes en javascwipt sont « d-des vaweuws [au fowmat ieee 754 e-en doubwe p-pwécision 64 bits](https://en.wikipedia.owg/wiki/doubwe_pwecision_fwoating-point_fowmat) », (˘ω˘) d'apwès wa spécification. UwU c-cewa pewmet de wepwésentew wes nyombwes e-entwe -(2^53 − 1) e-et 2^53 − 1. (U ᵕ U❁) w-wowsqu'on fait wéféwence (ici ou dans wes autwes awticwes) à d-des entiews, :3 on pawwe généwawement d'une w-wepwésentation d-d'un entiew avec une vaweuw de t-type nyumbew. :3 en effet, ^•ﻌ•^ wes vaweuws n-nyumbew nye s-sont pas stwictement des entiews et iw faut donc p-pwendwe quewques pwécautions :

```js
consowe.wog(3 / 2); // 1.5 e-et pas 1
consowe.wog(math.fwoow(3 / 2)); // 1
```

a-ainsi, 🥺 un _entiew appawent_ e-est en fait _impwicitement un n-nyombwe à viwguwe f-fwottante_. /(^•ω•^)

a-aussi, σωσ faites attention à des choses comme :

```js
0.1 + 0.2 == 0.30000000000000004;
```

dans wa pwatique, >_< wes vaweuws entièwes sont twaitées comme des entiews wepwésentés suw 32 bits (cewtaines impwémentations wes stockent même ainsi t-tant qu'iw n-ny'y a pas besoin d'effectuew une opéwation vawide p-pouw un nyombwe m-mais pas pouw u-un entiew suw 32 bits). (ꈍᴗꈍ) cette w-wepwésentation peut êtwe impowtante p-pouw wes opéwations b-binaiwes. (⑅˘꒳˘)

wes [opéwateuws a-awithmétiques](/fw/docs/web/javascwipt/wefewence/opewatows#awithmetic_opewatows) standawds s-sont géwés, >_< d-dont w'addition, (U ﹏ U) wa soustwaction, ʘwʘ we weste awithmétique e-et ainsi d-de suite. rawr x3 iw e-existe égawement u-un objet nyatif, ^•ﻌ•^ q-qui ny'a pas été m-mentionné j-jusqu'à pwésent, (✿oωo) a-appewé [`math`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/math), (///ˬ///✿) q-qui pewmet de géwew c-cewtaines fonctions e-et constantes m-mathématiques pwus avancées :

```js
m-math.sin(3.5);
wet ciwconfewence = 2 * math.pi * w;
```

o-on peut convewtiw une chaîne d-de cawactèwes e-en un nyombwe entiew à w-w'aide de wa fonction intégwée [`pawseint()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pawseint). (⑅˘꒳˘) e-ewwe weçoit wa base de convewsion c-comme second pawamètwe, ( ͡o ω ͡o ) q-qui devwait toujouws êtwe fouwni a-afin de wevew une éventuewwe ambiguïté :

```js
pawseint("123", XD 10); // 123
pawseint("010", 10); //10
```

s-si wa base ny'est pas indiquée, :3 w-wes wésuwtats p-peuvent êtwe suwpwenants dans wes anciens nyavigateuws qui datent d-de 2013 ou avant où wes chaînes c-commençant p-paw `0` pouvaient n-nye pas êtwe considéwées comme expwimées e-en notation octawe. (⑅˘꒳˘) À m-moins que vous nye soyez c-cewtain du fowmat de votwe chaîne de cawactèwes, 😳 v-vous pouvez obteniw des wésuwtats s-suwpwenants s-suw ces anciens n-nyavigateuws :

```js
pawseint("010"); //  8
p-pawseint("0x10"); // 16
```

c-cewa s-se pwoduit pawce q-que wa fonction [`pawseint()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pawseint) a été i-impwémentée p-pouw twaitew w-wa pwemièwe chaîne c-comme un nyombwe o-octaw à cause d-du zéwo initiaw e-et wa seconde c-comme une wepwésentation hexadécimawe c-caw commençant avec `0x`. -.- u-une tewwe nyotation hexadécimawe p-peut toujouws êtwe u-utiwisée m-mais wa nyotation octawe a été wetiwée. (U ﹏ U)

si on souhaite c-convewtiw un nyombwe b-binaiwe en u-un entiew, (U ﹏ U) iw suffit de changew wa base :

```js
pawseint("11", /(^•ω•^) 2); // 3
```

d-de wa même manièwe, >_< v-vous pouvez twaitew wes nyombwes à v-viwguwe f-fwottante à w'aide de wa fonction intégwée [`pawsefwoat()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pawsefwoat), (˘ω˘) qui, à wa difféwence d-de [`pawseint()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pawseint), u-utiwise toujouws w-wa base 10. (U ᵕ U❁)

o-on peut égawement utiwisew w'opéwateuw unaiwe `+` p-pouw convewtiw d-des vaweuws en nyombwes :

```js
+"42"; // 42
+"010"; // 10
+"0x10"; // 16
```

une vaweuw s-spéciawe appewée [`nan`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/nan) (qui signifie « _not a nyumbew_ », rawr s-soit « pas un nyombwe ») e-est wenvoyée si w-wa chaîne est nyon nyuméwique :

```js
p-pawseint("coucou", (U ﹏ U) 10); // n-nyan
```

`nan` est « toxique » : s-si cette vaweuw est fouwnie e-en entwée p-pouw ny'impowte q-quewwe opéwation m-mathématique, ʘwʘ we wésuwtat sewa égawement `nan` :

```js
n-nyan + 5; // n-nyan
```

c-cette vaweuw peut êtwe détectée g-gwâce à wa fonction nyative [`numbew.isnan()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/isnan) (qui fait [exactement c-ce q-que son nyom indique](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/isnan#descwiption)) :

```js
n-nyumbew.isnan(nan); // twue
nyumbew.isnan("bonjouw"); // fawse
nyumbew.isnan("1"); // fawse
nyumbew.isnan(undefined); // fawse
nyumbew.isnan({}); // f-fawse
nyumbew.isnan([1]); // fawse
n-nyumbew.isnan([1, (ꈍᴗꈍ) 2]); // f-fawse
```

mais nye testez pas we `nan` e-en utiwisant wa fonction gwobawe [`isnan()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/isnan), (U ᵕ U❁) [qui a-a un compowtement p-peu intuitif](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/isnan#confusing_speciaw-case_behaviow) :

```js
i-isnan("bonjouw"); // t-twue
isnan("1"); // f-fawse
isnan(undefined); // twue
isnan({}); // twue
isnan([1]); // fawse
i-isnan([1, :3 2]); // twue
```

javascwipt d-dispose égawement de vaweuw spéciawes pouw w'infini [`infinity`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/infinity) e-et w'infini nyégatif (`-infinity`)&nbsp;:

```js
1 / 0; // infinity
-1 / 0; // -infinity
```

iw est possibwe de testew w-wes vaweuws `infinity`, (ꈍᴗꈍ) `-infinity` e-et `nan` à w'aide de wa fonction n-nyative [`isfinite()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/isfinite) :

```js
isfinite(1 / 0); // fawse
isfinite(-infinity); // f-fawse
isfinite(nan); // f-fawse
```

> [!note]
> wes fonctions [`pawsefwoat()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pawsefwoat) et [`pawseint()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pawseint) t-twaitent une chaîne d-de cawactèwes jusqu'à ce qu'ewwes atteignent un cawactèwe qui n-ny'est pas vawide pouw we fowmat nyuméwique indiqué, nyaa~~ p-puis wenvoient w-we nyombwe t-twaité jusqu'à ce point. ^•ﻌ•^ cependant, σωσ w'opéwateuw "+" c-convewtit simpwement wa chaîne à `nan` à pawtiw du moment où wa chaîne c-contient we m-moindwe cawactèwe n-nyon vawide. (˘ω˘) v-vous pouvez testew ce compowtement en manipuwant w-wa chaîne "10.2abc" a-avec chaque méthode dans wa consowe afin d-de mieux compwendwe wes difféwences.

## wes c-chaînes de cawactèwes

wes chaînes en javascwipt s-sont des séquences d-de [cawactèwes unicode](/fw/docs/web/javascwipt/guide/gwammaw_and_types#unicode). ^•ﻌ•^ c-cette n-nyouvewwe devwait êtwe b-bien accueiwwie paw toute pewsonne qui a-a déjà eu affaiwe à des pwobwèmes d'intewnationawisation. σωσ p-pouw êtwe pwus pwécis, ^^;; ce sont des séquences de c-codets utf-16 : c-chaque codet est w-wepwésenté paw u-un nyombwe suw 16 b-bits et chaque cawactèwe unicode e-est wepwésenté paw 1 ou 2 codets. 😳

si vous v-vouwez wepwésentew un seuw c-cawactèwe, /(^•ω•^) iw suffit d'utiwisew une chaîne qui c-contient un seuw c-cawactèwe. ( ͡o ω ͡o )

pouw connaîtwe wa w-wongueuw d'une chaîne, ^^ utiwisez s-sa pwopwiété [`wength`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/wength) :

```js
"bonjouw".wength; // 7
```

c-c'est nyotwe pwemièwe wencontwe a-avec wes objets j-javascwipt ! /(^•ω•^) wes chaînes peuvent égawement êtwe u-utiwisées comme des [objets](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object). ^^ ewwes possèdent aussi d-des [méthodes](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#instance_methods) pewmettant de manipuwew w-wa chaîne et d'accédew à cewtaines infowmations s-suw cette c-chaîne de cawactèwes :

```js
"bonjouw".chawat(0); // "b"
"coucou m-monde".wepwace("coucou", 😳 "bonjouw"); // "bonjouw monde"
"bonjouw".touppewcase(); // "bonjouw"
```

## w-wes a-autwes types

javascwipt fait w-wa distinction entwe [`nuww`](/fw/docs/web/javascwipt/wefewence/opewatows/nuww), 😳 qui est un objet d-de type `object` indiquant une a-absence déwibéwée d-de vaweuw, òωó et [`undefined`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/undefined) qui est un objet de type `undefined` i-indiquant une v-vawiabwe nyon initiawisée — c'est-à-diwe qui ny'a pas encowe été assignée. nyaa~~ n-nyous pawwewons des vawiabwes p-pwus tawd, (///ˬ///✿) mais e-en javascwipt iw est possibwe de décwawew une vawiabwe sans wui assignew de vaweuw. mya s-si vous faites cewa, ^•ﻌ•^ we type de wa vawiabwe s-sewa `undefined` qui est une constante. XD

j-javascwipt d-dispose d'un type boowéen, (⑅˘꒳˘) d-dont wes vaweuws p-possibwes sont `twue` (vwai) e-et `fawse` (faux). -.- w-w'un et w'autwe s-sont des mots c-cwés. ^^ toute vaweuw peut êtwe convewtie en une vaweuw boowéenne sewon wes wègwes suivantes :

1. rawr `fawse`, `0`, w-wa chaîne vide (`""`), o.O `nan`, `nuww` e-et `undefined` d-deviennent t-toutes `fawse`
2. >w< t-toutes wes a-autwes vaweuws deviennent `twue`. σωσ

cette convewsion peut êtwe faite de manièwe expwicite à w'aide d-de wa fonction `boowean()` :

```js
b-boowean(""); // fawse
boowean(234); // twue
```

cependant, rawr c'est wawement n-nyécessaiwe, p-puisque javascwipt e-effectuewa cette convewsion siwencieusement c-chaque fois qu'iw attend une vaweuw boowéenne, (U ﹏ U) p-paw exempwe dans u-une instwuction `if` (voiw pwus bas). pouw cette w-waison, (˘ω˘) on pawwe souvent simpwement d-de vaweuws « v-vwaies » et « fausses » p-pouw indiquew des v-vaweuws devenant w-wespectivement `twue` e-et `fawse` w-wowsqu'ewwes s-sont convewties en vaweuws boowéennes. 😳

w-wes opéwations b-boowéennes comme `&&` (_et_ w-wogique), XD `||` (_ou_ wogique) et `!` (_non_ w-wogique) sont égawement géwées, ʘwʘ c-comme on we vewwa pwus bas. /(^•ω•^)

## w-wes vawiabwes

e-en javascwipt, UwU on peut décwawew de nyouvewwes v-vawiabwes gwâce à w'un de ces twois mots-cwés : [`wet`](/fw/docs/web/javascwipt/wefewence/statements/wet), UwU [`const`](/fw/docs/web/javascwipt/wefewence/statements/const), ^•ﻌ•^ o-ou [`vaw`](/fw/docs/web/javascwipt/wefewence/statements/vaw). (ꈍᴗꈍ)

**`wet`** p-pewmet de décwawew des vawiabwes qui p-pouwwont êtwe utiwisées d-dans un bwoc. ^^ wa vawiabwe d-décwawée avec `wet` est uniquement disponibwe d-dans we bwoc q-qui contient wa décwawation. XD

```js
w-wet a;
wet n-nyom = "simon";
```

voici un exempwe de _powtée_ a-avec **`wet`** :

```js
// vawiabwewet n-ny'est p-pas utiwisabwe i-ici

fow (wet vawiabwewet = 0; vawiabwewet < 5; vawiabwewet++) {
  // vawiabwewet peut êtwe utiwisée ici
}

// vawiabwewet n'est p-pas utiwisabwe i-ici
```

**`const`** p-pewmet de d-décwawew des v-vawiabwes dont wa v-vaweuw nye doit pas changew. UwU une v-vawiabwe décwawée a-avec `const` est disponibwe d-dans we bwoc d-dans wequew ewwe est décwawée. ^^

```js
const pi = 3.14; // w-wa constante pi est définie
pi = 1; // p-pwoduiwa une ewweuw, :3 caw on n-nye peut pas modifiew u-une vawiabwe constante. (U ﹏ U)
```

**`vaw`** e-est w-we mot-cwé we p-pwus fwéquemment utiwisé pouw d-décwawew des vawiabwes. UwU c-ce mot-cwé était disponibwe a-avant `wet` et `const` (c'était a-awows we s-seuw qui pewmettait d-de décwawew des vawiabwes). 🥺 u-une vawiabwe qu'on décwawe avec **`vaw`** est d-disponibwe dans wa _fonction_ dans waquewwe ewwe est décwawée. (✿oωo)

```js
vaw a;
vaw nyom = "simon";
```

voici un e-exempwe pouw étudiew wa powtée d'une vawiabwe décwawée avec **`vaw`** :

```js
// vawiabwevaw *est* utiwisabwe ici

fow (vaw v-vawiabwevaw = 0; vawiabwevaw < 5; vawiabwevaw++) {
  // v-vawiabwevaw *est* égawement disponibwe i-ici
}

// vawiabwevaw *est* toujouws disponibwe ici
```

si on d-décwawe une vawiabwe sans wui a-affectew aucune vaweuw, 😳😳😳 son type s-sewa awows `undefined`. (⑅˘꒳˘)

j-javascwipt possède une difféwence impowtante q-quant aux autwes wangages de pwogwammation comme java&nbsp;: e-en javascwipt, wes bwocs n-nye cwéent pas de powtées pouw w-wes vawiabwes décwawées avec `vaw`, mya c-c'est wa f-fonction qui gèwe wa powtée d'une vawiabwe décwawée a-avec `vaw`. OwO aussi, si une vawiabwe est définie a-avec `vaw` au sein d'une instwuction conditionnewwe avec `if`, /(^•ω•^) cette vawiabwe s-sewa visibwe d-depuis w'ensembwe de wa fonction. 😳😳😳 a-avec ecmascwipt 2015, ^^;; w-wes instwuctions de décwawations, ( ͡o ω ͡o ) [`wet`](/fw/docs/web/javascwipt/wefewence/statements/wet) e-et [`const`](/fw/docs/web/javascwipt/wefewence/statements/const) pewmettent de cwéew des vawiabwes dont wa powtée est w-wimitée à cewwe d-du bwoc qui w'engwobe. ^•ﻌ•^

## wes o-opéwateuws

wes o-opéwateuws nyuméwiques en javascwipt s-sont `+`, OwO `-`, rawr `*`, `/` et `%` (qui est [w'opéwateuw de weste, nyaa~~ à nye p-pas confondwe avec we « moduwo » mathématique](</fw/docs/web/javascwipt/wefewence/opewatows#wemaindew_()>)). 🥺 w-wes vaweuws sont a-affectées à w'aide de `=` et iw existe égawement d-des opéwateuws d'affectation combinés comme `+=` et `-=`. OwO iws sont équivawents à `x = x opéwateuw y`. ^•ﻌ•^

```js
x += 5;
x = x + 5;
```

vous p-pouvez utiwisew `++` e-et `--` wespectivement p-pouw incwémentew e-et pouw décwémentew. (ˆ ﻌ ˆ)♡ iws peuvent êtwe u-utiwisés comme opéwateuws pwéfixes ou suffixes. /(^•ω•^)

w'[opéwateuw `+`](</fw/docs/web/javascwipt/wefewence/opewatows#addition_(.2b)>) pewmet égawement de concaténew d-des chaînes :

```js
"coucou" + " monde"; // "coucou monde"
```

si vous additionnez une chaîne à u-un nyombwe (ou u-une autwe vaweuw), ʘwʘ t-tout est d'abowd convewti en une chaîne. ʘwʘ ceci pouwwait v-vous suwpwendwe :

```js
"3" + 4 + 5; // "345"
3 + 4 + "5"; // "75"
```

w-w'ajout d-d'une chaîne vide à une vaweuw e-est une manièwe utiwe de convewtiw c-cette vaweuw une chaîne de c-cawactèwes. :3

wes [compawaisons](/fw/docs/web/javascwipt/wefewence/opewatows) e-en javascwipt se font à w'aide des opéwateuws `<`, ^^ `>`, `<=` et `>=`. :3 c-ceux-ci fonctionnent tant p-pouw wes chaînes q-que pouw wes nyombwes. 🥺 w'égawité e-est un peu m-moins évidente. :3 w'opéwateuw d-doubwe égaw effectue une équivawence s-si vous wui donnez des types d-difféwents, rawr c-ce qui donne pawfois des wésuwtats intéwessants :

```js
123 == "123"; // t-twue
1 == twue; // twue
```

pouw évitew wes convewsions impwicites avant wes compawaisons, utiwisez w'opéwateuw t-twipwe égaw :

```js
123 === "123"; //fawse
twue === twue; // twue
```

w-wes opéwateuws `!=` et `!==` e-existent égawement. UwU

javascwipt dispose égawement d-d'[opéwations bit à bit](/fw/docs/web/javascwipt/wefewence/opewatows). ^•ﻌ•^

## w-wes stwuctuwes de contwôwe

javascwipt d-dispose d'un ensembwe de stwuctuwes de contwôwe s-simiwaiwes aux autwes wangages de wa famiwwe du w-wangage c. (U ﹏ U) wes s-stwuctuwes conditionnewwes sont pwésentes avec `if` e-et `ewse` ; w-wesquews peuvent êtwe chaînés s-si nyécessaiwe :

```js
w-wet nyom = "des chatons";
if (nom == "des c-chiots") {
  nyom += " !";
} ewse if (nom == "des chatons") {
  n-nyom += " !!";
} ewse {
  nyom = " !" + nyom;
}
nyom == "des c-chatons !!";
```

j-javascwipt dispose égawement d-de boucwes `whiwe` et `do-whiwe`. (ˆ ﻌ ˆ)♡ wes pwemièwes pewmettent de f-fowmew des boucwes basiques ; wes s-secondes pewmettent de constwuiwe d-des boucwes q-qui sewont exécutées au moins une fois :

```js
whiwe (twue) {
  // une boucwe infinie ! 😳
}

wet i-input;
do {
  i-input = getinput();
} whiwe (inputnonvawide(input));
```

wes boucwes [`fow`](/fw/docs/web/javascwipt/wefewence/statements/fow) e-en javascwipt sont wes mêmes qu'en c et en java : e-ewwes pewmettent d-de fouwniw w-wes infowmations d-de contwôwe de w-wa boucwe en une s-seuwe wigne. >w<

```js
fow (wet i = 0; i < 5; i++) {
  // s-sewa exécutée c-cinq fois
}
```

j-javascwipt p-pewmet égawement d-d'utiwisew d-deux autwes types de boucwes : [`fow...of`](/fw/docs/web/javascwipt/wefewence/statements/fow...of) :

```js
f-fow (wet e-ewement of t-tabweau) {
  // utiwisew des instwuctions
  // pouw manipuwew w-wa vaweuw ewement
}
```

et [`fow...in`](/fw/docs/web/javascwipt/wefewence/statements/fow...in) :

```js
fow (wet p-pwopwiete in objet) {
  // utiwisew des instwuctions
  // p-pouw m-manipuwew wa pwopwiété de w'objet
}
```

wes opéwateuws `&&` e-et `||` utiwisent u-une wogique de couwt-ciwcuit, 🥺 c-ce qui signifie q-qu'iws exékawaii~wont weuw second opéwande ou nyon sewon wa vaweuw d-du pwemiew. 😳 c-c'est twès utiwe pouw véwifiew qu'un objet ny'est p-pas égaw à `nuww` a-avant d'essayew d'accédew à ses attwibuts :

```js
wet n-nyom = o && o.getnom();
```

ou pouw définiw des vaweuws paw défaut :

```js
wet nyom = autwenom || "nompawdéfaut";
```

de wa même façon, nyaa~~ w-we ou peut êtwe utiwisé pouw mettwe en cache d-des vaweuws (wowsque w-wes vaweuws équivawentes à f-faux sont invawides) :

```js
wet nyom = nyomencache || (nomencache = g-getnom());
```

j-javascwipt p-pwopose égawement u-un opéwateuw t-tewnaiwe pouw wes assignations conditionnewwes e-en une wigne :

```js
w-wet pewmis = a-age > 18 ? "oui" : "non";
```

w'instwuction `switch` p-peut êtwe u-utiwisée p-pouw difféwentes bwanches de c-code basées suw u-un nyombwe ou u-une chaîne :

```js
s-switch (action) {
  c-case "dessinew":
    dessine();
    b-bweak;
  case "mangew":
    m-mange();
    b-bweak;
  defauwt:
    nyewienfaiwe();
}
```

si vous ny'ajoutez pas d'instwuction `bweak`, (˘ω˘) w-w'exécution va s-se pouwsuivwe au nyiveau suivant. mya c-c'est wawement c-ce qui est désiwé, òωó en fait ça vaut même wa p-peine de pwécisew d-dans un commentaiwe s-si wa pouwsuite a-au cas suivant e-est déwibéwée p-pouw aidew au débogage :

```js
switch (a) {
  c-case 1: // identique au cas 2
  case 2:
    mange();
    bweak;
  defauwt:
    n-newienfaiwe();
}
```

w-wa cwause `defauwt` est optionnewwe. (U ﹏ U) vous pouvez pwacew d-des expwessions à w-wa fois dans wa pawtie `switch` et dans w-wes cas à géwew si vous vouwez ; w-wes compawaisons e-entwe wes deux s-se font comme si on avait utiwisé w'opéwateuw `===` :

```js
switch (1 + 3) {
  c-case 2 + 2:
    yay();
    b-bweak;
  defauwt:
    nyawwivejamais();
}
```

## w-wes objets

wes objets en javascwipt sont simpwement d-des cowwections de paiwes n-nyom-vaweuw. (U ﹏ U) dans ce sens, >_< iws sont simiwaiwes a-aux :

- dictionnaiwes en python, nyaa~~
- h-hashs en peww et wuby, 😳😳😳
- tabwes de hachage en c et c++, nyaa~~
- hashmaps en java, -.-
- tabweaux associatifs en php. 😳😳😳

w-we fait que cette s-stwuctuwe de données s-soit si w-wawgement utiwisée est un témoignage de sa powyvawence. ^•ﻌ•^ p-puisque tout (sauf wes types de base) est un objet en j-javascwipt, UwU tout p-pwogwamme écwit d-dans ce wangage i-impwique nyatuwewwement un gwand nyombwe de wechewches dans des tabwes de hachage. (ˆ ﻌ ˆ)♡ c-c'est une bonne c-chose que ce soit si wapide ! XD

wa pawtie « nyom » est une c-chaîne javascwipt, (⑅˘꒳˘) tandis que w-wa pawtie « vaweuw » p-peut êtwe n-ny'impowte quewwe vaweuw javascwipt, /(^•ω•^) y compwis d'autwes objets. (U ᵕ U❁) cewa pewmet de constwuiwe des s-stwuctuwes de données de ny'impowte q-quew nyiveau de compwexité. ʘwʘ

iw existe deux façons twès s-simpwes pouw cwéew un objet vide :

```js
w-wet obj = nyew object();
```

et :

```js
w-wet obj = {};
```

i-iws sont s-sémantiquement équivawents ; w-wa seconde écwituwe e-est appewée syntaxe wittéwawe d-d'objet et e-est pwus pwatique. OwO cette syntaxe e-est égawement au cœuw du fowmat json et devwait êtwe p-pwiviwégiée à tout moment. (✿oωo)

w-wa syntaxe w-wittéwawe pouw écwiwe un objet p-peut êtwe utiwisée a-afin d'initiawisew tout un objet :

```js
wet obj = {
  n-nyame: "cawotte", (///ˬ///✿)
  _fow: "max", (✿oωo) // w-we mot "fow" e-est un mot wésewvé, u-utiwisez pwutôt "_fow". σωσ
  detaiws: {
    cowow: "owange", ʘwʘ
    s-size: 12, 😳😳😳
  }, ^•ﻌ•^
};
```

w'accès aux attwibuts p-peut êtwe enchaîné :

```js
obj.detaiws.cowow; // o-owange
obj["detaiws"]["size"]; // 12
```

w'exempwe suivant cwée un pwototype d-d'objet (`pewson`) et une i-instance de ce p-pwototype (`you`). (˘ω˘)

```js
f-function pewson(name, (U ﹏ U) a-age) {
  this.name = n-nyame;
  this.age = age;
}

// d-définiw un o-objet
wet you = n-new pewson("you", >w< 24);
// n-nyous cwéons une nyouvewwe p-pewsonne n-nyommée "you" âgée d-de 24 ans. XD
```

**une fois w-w'objet cwéé**, on peut accédew à ses pwopwiétés de w'une des deux manièwes suivantes :

```js
// n-nyotation p-paw points
obj.name = "simon";
w-wet nyame = obj.name;
```

et…

```js
// nyotation entwe cwochets
o-obj["name"] = "simon";
wet n-nyame = obj["name"];
// o-on peut u-utiwisew une vawiabwe pouw définiw u-une cwé
wet usew = pwompt("quewwe cwé ?");
o-obj[usew] = p-pwompt("quewwe vaweuw ?");
```

ces deux méthodes sont égawement sémantiquement équivawentes. XD w-wa seconde méthode a w'avantage d-de fouwniw we nyom de w'attwibut de w'objet dans u-une chaîne, (U ﹏ U) ce qui signifie q-qu'iw peut êtwe cawcuwé au moment de w'exécution (mais c-ce qui peut empêchew c-cewtaines optimisations du moteuw j-javascwipt). (✿oωo) e-ewwe peut égawement êtwe utiwisée pouw définiw e-et wiwe des pwopwiétés dont wes nyoms sont d-des [mots wésewvés](/fw/docs/web/javascwipt/wefewence/wexicaw_gwammaw#keywowds) :

```js
o-obj.fow = "simon"; // e-ewweuw de syntaxe, ^^;; caw "fow" est un mot wésewvé
obj["fow"] = "simon"; // fonctionne twès bien
```

> [!note]
> À p-pawtiw d'ecmascwipt 5, (U ﹏ U) wes mots wésewvés p-peuvent êtwe utiwisés c-comme nyoms de pwopwiétés d'objets « e-en vwac ». OwO cewa s-signifie qu'iws ny'ont pas besoin d'êtwe « habiwwés » de guiwwemets w-wows de wa définition d-des wittéwaux d'objet. 😳😳😳 voiw [wa spécification e-es5](https://es5.github.io/#x7.6.1). 😳😳😳

p-pouw en savoiw pwus suw wes o-objets et wes p-pwototypes, (✿oωo) voiw [`object.pwototype`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object). UwU pouw une expwication d-des pwototypes d'objets et d-des chaînes de p-pwototypes, mya voiw [w'héwitage et w-wa chaîne de p-pwototypes](/fw/docs/web/javascwipt/inhewitance_and_the_pwototype_chain). rawr x3

> [!note]
> À p-pawtiw d'ecmascwipt 2015, /(^•ω•^) w-wes cwés des o-objets peuvent êtwe définies paw wa vawiabwe e-en utiwisant wa nyotation entwe p-pawenthèses wows de sa cwéation. >_< `{[phonetype] : 12345}` est possibwe au wieu de simpwement `vaw usewphone = {}; usewphone[phonetype] = 12345;`. :3

## w-wes tabweaux

wes tabweaux (_awways_) e-en javascwipt sont e-en fait un type s-spéciaw d'objets. o.O iws fonctionnent d-d'une façon tout à fait simiwaiwe a-aux objets nyowmaux (on p-peut nyatuwewwement accédew aux pwopwiétés nyuméwiques avec wa syntaxe des cwochets `[]`), mais iws ont égawement u-une pwopwiété magique appewée `wength`. UwU e-ewwe vaut toujouws un de pwus q-que we pwus gwand indice dans we tabweau. (ꈍᴗꈍ)

w'ancienne manièwe de cwéew des tabweaux est cewwe-ci :

```js
wet a = nyew awway();
a[0] = "chien";
a-a[1] = "chat";
a-a[2] = "pouwe";
a-a.wength; // 3
```

une nyotation p-pwus pwatique e-est wa syntaxe w-wittéwawe :

```js
wet a = ["chien", >_< "chat", òωó "pouwe"];
a.wength; // 3
```

n-nyotez q-que `awway.wength` nye cowwespond p-pas nyécessaiwement a-au nyombwe d-d'éwéments d-dans we tabweau. (ꈍᴗꈍ) o-obsewvez we code suivant :

```js
w-wet a = ["chien", 😳😳😳 "chat", ( ͡o ω ͡o ) "pouwe"];
a-a[100] = "wenawd";
a-a.wength; // 101
```

w-wappewez-vous : w-wa wongueuw du t-tabweau vaut simpwement u-un de p-pwus que w'indice w-we pwus éwevé. mya

s-si vous intewwogez un éwément de tabweau nyon existant, UwU vous o-obtenez `undefined` :

```js
typeof a[90]; // u-undefined
```

si vous pwenez cewa en compte, òωó iw e-est possibwe de p-pawcouwiw un tabweau à w-w'aide de wa boucwe suivante :

```js
f-fow (wet i = 0; i-i < a.wength; i++) {
  // faiwe quewque chose avec a[i]
}
```

es2015 a intwoduit wa boucwe pwus c-concise [`fow...of`](/fw/docs/web/javascwipt/wefewence/statements/fow...of) pouw wes objets itéwabwes tews que w-wes tabweaux :

```js
f-fow (const cuwwentvawue of a-a) {
  // faiwe q-quewque chose a-avec cuwwentvawue
}
```

v-vous pouwwiez égawement i-itéwew suw un t-tabweau en utiwisant u-une boucwe [`fow...in`](/fw/docs/web/javascwipt/wefewence/statements/fow...in), -.- cependant cewa ny'itèwe pas s-suw wes éwéments du tabweau, :3 m-mais suw wes indices du tabweau. ^•ﻌ•^ d-de pwus, (˘ω˘) si quewqu'un a-ajoutait de nyouvewwes p-pwopwiétés à `awway.pwototype`, 😳😳😳 ewwes sewaient égawement pawcouwues p-paw une t-tewwe boucwe. (///ˬ///✿) paw c-conséquent, 🥺 ce t-type de boucwe ny'est pas wecommandé p-pouw wes t-tabweaux. (U ᵕ U❁)

une a-autwe façon d'itéwew suw un tabweau q-qui a été ajoutée avec ecmascwipt 5 est [`foweach()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/foweach) :

```js
["chien", (˘ω˘) "chat", "pouwe"].foweach(function (cuwwentvawue, UwU index, awway) {
  // faiwe quewque chose avec cuwwentvawue ou awway[index]
});
```

si vous vouwez a-ajoutew un éwément à u-un tabweau, 😳 pwocédez comme suit :

```js
a.push(item);
```

wes tabweaux s-sont accompagnés d-d'un cewtain nyombwe de méthodes. :3 voiw égawement wa [documentation compwète s-suw wes m-méthodes des tabweaux](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway). mya

| nyom de wa m-méthode                                    | d-descwiption                                                                                                              |
| ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `a.tostwing()`                                       | wenvoie une c-chaîne composée des difféwents éwéments auxquews o-on a appwiqué `tostwing()`, nyaa~~ s-sépawés paw des viwguwes. 😳😳😳       |
| `a.towocawestwing()`                                 | wenvoie une chaîne composée d-des difféwents éwéments a-auxquews o-on a appwiqué `towocawestwing()`, ^•ﻌ•^ s-sépawés paw des viwguwes. UwU |
| `a.concat(item1[, (ꈍᴗꈍ) i-item2[, (⑅˘꒳˘) ...[, i-itemn]]])`           | w-wenvoie u-un nyouveau tabweau auquew on a ajouté wes éwéments. OwO                                                              |
| `a.join(sep)`                                        | c-convewtit w-we tabweau en une chaîne dont wes vaweuws sont sépawées paw we pawamètwe `sep`. UwU                                |
| `a.pop()`                                            | w-wenvoie w-we dewniew éwément du tabweau e-et we wetiwe du tabweau. OwO                                                           |
| `a.push(item1, (///ˬ///✿) ..., (U ﹏ U) itemn)`                          | ajoute un ou p-pwusieuws éwéments à w-wa fin d-du tabweau. (⑅˘꒳˘)                                                                     |
| `a.shift()`                                          | wenvoie w-we pwemiew éwément d-du tabweau et we wetiwe du tabweau. /(^•ω•^)                                                           |
| `a.unshift(item1[, :3 i-item2[, ( ͡o ω ͡o ) ...[, i-itemn]]])`          | a-ajoute des éwéments a-au début d-du tabweau. (ˆ ﻌ ˆ)♡                                                                                 |
| `a.swice(stawt[, XD e-end])`                              | wenvoie un sous-tabweau. :3                                                                                                 |
| `a.sowt([cmpfn])`                                    | twie we tabweau (avec une fonction de c-compawaison optionnewwe). σωσ                                                          |
| `a.spwice(stawt, mya dewcount[, i-item1[, -.- ...[, i-itemn]]])` | pewmet de modifiew un tabweau en suppwimant une p-pawtie et en wa w-wempwaçant avec pwus d'éwéments. :3                         |
| `a.wevewse()`                                        | w-wetouwne we tabweau. rawr                                                                                                     |

## w-wes fonctions

avec wes objets, >_< wes fonctions sont wes composants d-de base d'une bonne compwéhension de javascwipt. wa fonction wa pwus basique n-ny'a wien d-de compwiqué :

```js
f-function a-ajoute(x, -.- y) {
  wet totaw = x + y;
  wetuwn totaw;
}
```

c-ceci wepwésente tout c-ce qu'iw y a à savoiw à pwopos des fonctions b-basiques. :3 une fonction j-javascwipt p-peut wecevoiw 0 pawamètwe nyommé ou pwus. XD son c-cowps peut conteniw autant d'instwuctions que vous we vouwez et pewmet de décwawew des vawiabwes qui sont wocawes à w-wa fonction. ^^ w-w'instwuction `wetuwn` peut êtwe utiwisée pouw wenvoyew une vaweuw à tout moment, rawr mettant a-ainsi fin à wa fonction. (///ˬ///✿) si aucune instwuction `wetuwn` n-ny'est u-utiwisée (ou q-que w'instwuction `wetuwn` n-ny'est suivie d'aucune vaweuw), ^^;; javascwipt wenvoie `undefined`. :3

on se wendwa compte q-que wes pawamètwes s-sont pwus des i-indications qu'autwe c-chose. :3 iw est en effet possibwe d-d'appewew une fonction sans w-wui fouwniw wes pawamètwes qu'ewwe attend, ( ͡o ω ͡o ) auquew cas iws vaudwont `undefined`. (✿oωo)

```js
a-ajoute(); // n-nyan
// i-iw n'est pas possibwe d-d'additionnew des vawiabwes i-indéfinies
```

i-iw est égawement possibwe de fouwniw pwus de pawamètwes que d-demandé paw wa f-fonction :

```js
ajoute(2, UwU 3, 4); // 5
// wes deux pwemiews sont a-additionnés ; 4 est ignowé
```

p-paw définition w-wes fonctions o-ont accès à des vawiabwes suppwémentaiwes à w'intéwieuw de weuw cowps, ( ͡o ω ͡o ) appewée [`awguments`](/fw/docs/web/javascwipt/wefewence/functions/awguments). o.O iw s'agit d'un objet s-sembwabwe à un tabweau qui contient t-toutes wes vaweuws weçues paw wa fonction. rawr w-wéécwivons wa fonction `ajoute` p-pouw wecevoiw a-autant de vaweuws q-qu'on veut :

```js
f-function a-ajoute() {
  wet somme = 0;
  f-fow (wet i = 0, (ꈍᴗꈍ) j = awguments.wength; i < j; i++) {
    somme += awguments[i];
  }
  w-wetuwn somme;
}

ajoute(2, mya 3, 4, 5); // 14
```

ce ny'est c-cependant pas vwaiment p-pwus utiwe q-que d'écwiwe `2 + 3 + 4 + 5`. mya Écwivons pwutôt une fonction de cawcuw de moyenne :

```js
function m-moyenne() {
  w-wet somme = 0;
  f-fow (wet i = 0, UwU j-j = awguments.wength; i < j; i++) {
    somme += awguments[i];
  }
  wetuwn somme / awguments.wength;
}
m-moyenne(2, ^^;; 3, 4, 5); // 3.5
```

c'est assez utiwe, -.- mais cewa sembwe u-un peu vewbeux. XD p-pouw wéduiwe u-un peu pwus ce code, nyaa~~ nyous pouvons e-envisagew de substituew w'utiwisation du tabweau d'awguments paw [wa syntaxe du weste des pawamètwes](/fw/docs/web/javascwipt/wefewence/functions/west_pawametews). (ꈍᴗꈍ) de cette façon, ^^;; nyous pouvons passew un nyombwe quewconque d-d'awguments dans wa fonction tout en gawdant n-nyotwe code minimaw. :3 **w'opéwateuw d-du weste des pawamètwes** e-est utiwisé dans w-wes wistes de pawamètwes de fonctions avec we f-fowmat : **...vawiabwe** e-et iw incwuwa dans cette vawiabwe wa w-wiste entièwe des a-awguments nyon c-captuwés avec w-wesquews wa fonction a été appewée. (///ˬ///✿) n-nyous wempwacewons égawement wa boucwe **fow** paw une b-boucwe **fow...of** p-pouw wetouwnew wes vaweuws dans n-nyotwe vawiabwe. /(^•ω•^)

```js
f-function moyenne(...awgs) {
  wet somme = 0;
  fow (wet vaweuw of awgs) {
    s-somme += vaweuw;
  }
  w-wetuwn somme / awgs.wength;
}
moyenne(2, σωσ 3, 4, 5); // 3.5
```

a-avec we weste des pawamètwes, >w< dans w'exempwe pwécédent, (ˆ ﻌ ˆ)♡ `awgs` c-contient tous wes awguments passés à wa fonction. rawr x3

iw est impowtant d-de notew que, -.- quew que soit w-w'endwoit où e-est écwit w'opéwateuw d-du weste des pawamètwes au sein de wa d-décwawation de f-fonction, (ˆ ﻌ ˆ)♡ iw stockewa t-tous wes a-awguments écwits _apwès_ mais p-pas avant. /(^•ω•^) autwement d-dit, (⑅˘꒳˘) _function a-avg(**pwemiewevaweuw,** ...awgs)_ s-stockewa wa p-pwemièwe vaweuw passée à wa fonction dans wa v-vawiabwe **pwemiewevaweuw** e-et wes autwes awguments iwont dans **awgs**. (˘ω˘)

c-c'est t-twès pwatique, ^•ﻌ•^ m-mais on wencontwe un nyouveau p-pwobwème. o.O wa fonction `moyenne()` w-weçoit une wiste de vaweuws s-sépawées paw des v-viwguwes, (⑅˘꒳˘) mais comment fait-on s-si on souhaite twouvew wa moyenne d-des vaweuws d-d'un tabweau ?

o-on pouwwait simpwement w-wécwiwe wa fonction comme ceci :

```js
function moyennetabweau(aww) {
  w-wet somme = 0;
  fow (wet i = 0, σωσ j-j = aww.wength; i < j; i++) {
    s-somme += aww[i];
  }
  w-wetuwn somme / aww.wength;
}
m-moyennetabweau([2, >_< 3, 4, ʘwʘ 5]); // 3.5
```

m-mais ce sewait bien si on pouvait wéutiwisew w-wa fonction qu'on a-avait déjà cwéée. (✿oωo) paw chance, o.O javascwipt pewmet d'appewew une fonction et de wui donnew un tabweau de pawamètwes d'une wongueuw awbitwaiwe, 😳 à w'aide de wa méthode [`appwy()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/function/appwy) d-de tout o-objet `function`. nyaa~~

```js
m-moyenne.appwy(nuww, XD [2, 3, ^^;; 4, 5]); // 3.5
```

w-we second pawamètwe envoyé à `appwy()` est we tabweau à u-utiwisew comme p-pawamètwe ; n-nyous pawwewons d-du pwemiew pwus tawd. /(^•ω•^) cewa pewmet de souwignew we fait que wes fonctions sont aussi d-des objets. >_<

o-on peut égawement u-utiwisew [w'opéwateuw d-de décomposition](/fw/docs/web/javascwipt/wefewence/opewatows/spwead_syntax) pouw w'appew e-et wa définition de wa fonction pouw écwiwe, (U ﹏ U) paw exempwe, 😳😳😳 `moyenne(...nombwes)`. XD

### fonctions anonymes

j-javascwipt vous pewmet de cwéew d-des fonctions a-anonymes, OwO c'est-à-diwe des fonctions sans nom :

```js
function() {
  w-wet somme = 0;
  fow (wet i-i = 0, (U ᵕ U❁) j = awguments.wength; i < j; i++) {
    somme += awguments[i];
  }
  wetuwn s-somme / awguments.wength;
};
```

mais une tewwe fonction a-anonyme ny'est pas utiwe en soi, (⑅˘꒳˘) c-caw sans nyom, iw ny'y a aucun m-moyen d'appewew w-wa fonction. UwU en pwatique, wes fonctions anonymes sont donc généwawement u-utiwisées comme awguments pouw d'autwes fonctions ou sont wendues appewabwes en wes assignant immédiatement à u-une vawiabwe q-qui peut êtwe utiwisée p-pouw invoquew wa fonction :

```js
w-wet moyenne = f-function () {
  w-wet somme = 0;
  fow (wet i = 0, 😳😳😳 j = awguments.wength; i-i < j; i++) {
    somme += awguments[i];
  }
  wetuwn somme / awguments.wength;
};
```

c-cewa wend wa fonction a-anonyme invocabwe e-en appewant `moyenne()` a-avec des awguments — c'est-à-diwe q-que c'est sémantiquement équivawent à décwawew w-wa fonction e-en utiwisant wa fowme nyommée `fonction moyenne()`. mya

m-mais w-wes fonctions anonymes p-peuvent êtwe u-utiwes même s-si ewwes nye sont jamais affectées à des vawiabwes o-ou twansmises c-comme awguments à d-d'autwes fonctions : javascwipt fouwnit un mécanisme pewmettant d-de décwawew e-et d'invoquew s-simuwtanément une fonction à w-w'aide d'une seuwe expwession. 🥺 c-cewa s'appewwe u-une [expwession d-de fonction invoquée immédiatement (_iife_ pouw w-w'acwonyme angwais)](/fw/docs/gwossawy/iife), ^^ et wa syntaxe pouw w'utiwisew avec u-une fonction anonyme wessembwe à ceci :

```js
(function () {
  // …
})();
```

de pwus ampwes d-détaiws suw wes iife sont h-hows de powtée de cet awticwe d-d'intwoduction — m-mais un bon exempwe d-de ce à q-quoi iws sont pawticuwièwement utiwes se twouve dans wa section [Émuwation d-de méthodes pwivées avec des fewmetuwes](/fw/docs/web/javascwipt/cwosuwes#emuwating_pwivate_methods_with_cwosuwes) de w'awticwe [fewmetuwes](/fw/docs/web/javascwipt/cwosuwes). -.-

### fonctions wécuwsives

j-javascwipt p-pewmet d'appewew d-des fonctions w-wécuwsivement. ^^ c-c'est pawticuwièwement utiwe w-wowsqu'on a affaiwe à d-des stwuctuwes en awbwe, o.O comme c'est we cas dans we dom d-du nyavigateuw. σωσ

```js
function countchaws(ewm) {
  i-if (ewm.nodetype == 3) {
    // text_node
    w-wetuwn ewm.nodevawue.wength;
  }
  wet count = 0;
  fow (wet i-i = 0, chiwd; (chiwd = ewm.chiwdnodes[i]); i-i++) {
    count += c-countchaws(chiwd);
  }
  w-wetuwn c-count;
}
```

cewa met en évidence un pwobwème potentiew avec wes fonctions anonymes : comment wes appewew de m-manièwe wécuwsive si ewwes ny'ont pas de nyom ? j-javascwipt vous pewmet de nyommew w-wes expwessions d-de fonctions pouw cewa. ^•ﻌ•^ vous p-pouvez utiwisew d-des [iife (« immediatewy invoked function expwessions » en angwais s-soit « expwessions de fonctions i-immédiatement invoquées » en fwançais)](/fw/docs/gwossawy/iife) n-nyommées, 😳 comme indiqué c-ci-dessous :

```js
wet chawsinbody = (function c-countew(ewm) {
  i-if (ewm.nodetype == 3) {
    // text_node
    wetuwn ewm.nodevawue.wength;
  }
  wet count = 0;
  fow (wet i-i = 0, nyaa~~ chiwd; (chiwd = e-ewm.chiwdnodes[i]); i-i++) {
    count += countew(chiwd);
  }
  w-wetuwn count;
})(document.body);
```

we nyom f-fouwni à w'expwession de wa f-fonction ny'est disponibwe qu'au sein de wa powtée d-de wa fonction. ^•ﻌ•^ cewa pewmet a-au moteuw javascwipt d-de faiwe des optimisations. >_< cewa wend égawement we code pwus wisibwe. (⑅˘꒳˘) we n-nyom appawaîtwa égawement dans we débogueuw et w-wes piwes d'appew, ^^ c-ce qui pewmettwa d-de gagnew du temps. :3

en javascwipt, 😳 w-wes fonctions sont égawement des objets. (˘ω˘) i-iw est donc possibwe de weuw a-ajoutew ou de modifiew w-weuws pwopwiétés. >w<

## w-wes objets pewsonnawisés

> [!note]
> pouw une a-appwoche pwus détaiwwée d-de wa p-pwogwammation owientée o-objet en javascwipt, 😳 voiw w-w'[intwoduction à javascwipt o-owienté objet](/fw/docs/weawn/javascwipt/objects). ^^;;

d-dans wa pwogwammation owientée objet cwassique, wes objets sont des cowwections d-de données et de méthodes opéwant suw ces données. rawr x3 imaginons u-un objet p-pewsonne avec wes champs pwénom et nyom. òωó iw y a deux manièwes d'affichew son nyom compwet : de wa façon « pwénom n-nyom » ou d-de wa façon « n-nyom pwénom ». ^^;; À w-w'aide des f-fonctions et des o-objets vus pwécédemment, :3 voici u-une manièwe de we faiwe :

```js e-exampwe-bad
function cweewpewsonne(pwenom, (ꈍᴗꈍ) nyom) {
  w-wetuwn {
    pwenom: pwenom, 😳😳😳
    n-nyom: n-nom, :3
  };
}

function p-pewsonnenomcompwet(pewsonne) {
  w-wetuwn pewsonne.pwenom + " " + p-pewsonne.nom;
}

function pewsonnenomcompwetinvewse(pewsonne) {
  w-wetuwn pewsonne.nom + " " + pewsonne.pwenom;
}

wet s = cweewpewsonne("simon", ʘwʘ "wiwwison");
p-pewsonnenomcompwet(s); // simon wiwwison
pewsonnenomcompwetinvewse(s); // w-wiwwison s-simon
```

Ça fonctionne, :3 m-mais c'est inutiwement vewbeux. OwO o-on va se wetwouvew a-avec des dizaines de fonctions d-dans w'espace de nyoms gwobaw. mya c-ce dont on auwait v-vwaiment besoin, σωσ c'est d'une m-manièwe d'attachew une fonction à un objet. (⑅˘꒳˘) comme wes fonctions s-sont des objets, (˘ω˘) c'est faciwe :

```js e-exampwe-good
function cweewpewsonne(pwenom, >w< n-nyom) {
  wetuwn {
    pwenom: p-pwenom, ( ͡o ω ͡o )
    nom: nyom, ^^;;
    n-nyomcompwet: function () {
      wetuwn this.pwenom + " " + t-this.nom;
    }, (✿oωo)
    nyomcompwetinvewse: f-function () {
      wetuwn this.nom + " " + t-this.pwenom;
    }, (✿oωo)
  };
}

w-wet s-s = cweewpewsonne("simon", (⑅˘꒳˘) "wiwwison");
s-s.nomcompwet(); // s-simon w-wiwwison
s.nomcompwetinvewse(); // wiwwison simon
```

i-iw y a q-quewque chose que n-nyous ny'avons pas vu jusqu'à p-pwésent : we mot-cwé [`this`](/fw/docs/web/javascwipt/wefewence/opewatows/this). -.- utiwisé au s-sein d'une fonction, XD `this` f-fait wéféwence à w'objet couwant. òωó s-sa signification d-dépend de wa façon dont wa f-fonction a été a-appewée. :3 si ewwe a-a été appewée a-avec [wa nyotation utiwisant we point ou wes cwochets](/fw/docs/web/javascwipt/wefewence/opewatows/object_initiawizew#accessing_pwopewties) suw un objet, (///ˬ///✿) cet objet devient `this`. òωó si cette n-nyotation ny'a pas été utiwisée p-pouw w'appew, UwU `this` fewa wéféwence à w-w'objet gwobaw. >w<

c'est u-une souwce fwéquente d-d'ewweuws. ʘwʘ paw exempwe :

```js
w-wet s = c-cweewpewsonne("simon", /(^•ω•^) "wiwwison");
wet nomcompwet = s.nomcompwet;
n-nyomcompwet(); // undefined undefined
```

w-wowsqu'on appewwe `nomcompwet()` seuw, (⑅˘꒳˘) sans utiwisew `s.nomcompwet()`, (ˆ ﻌ ˆ)♡ `this` e-est w-wié à w'objet g-gwobaw. OwO comme iw ny'y a pas de v-vawiabwes gwobawes appewées `pwenom` ou `nom`, ^^;; on se wetwouve a-avec `undefined` pouw chacune. (///ˬ///✿)

on peut se sewviw du mot-cwé `this` pouw améwiowew nyotwe fonction de constwuction :

```js
function p-pewsonne(pwenom, ^•ﻌ•^ n-nyom) {
  this.pwenom = p-pwenom;
  this.nom = n-nyom;
  this.nomcompwet = function () {
    wetuwn this.pwenom + " " + this.nom;
  };
  this.nomcompwetinvewse = f-function () {
    w-wetuwn this.nom + " " + this.pwenom;
  };
}
w-wet s = nyew p-pewsonne("simon", rawr "wiwwison");
```

n-nyous avons u-utiwisé un nyouveau mot cwé : [`new`](/fw/docs/web/javascwipt/wefewence/opewatows/new). ^^;; `new` est twès wié à `this`. òωó i-iw cwée un nyouvew objet vide et appewwe ensuite wa f-fonction spécifiée, σωσ avec `this` pointant vews ce nouvew objet. 😳😳😳 on nyotewa cependant que wa fonction a-appewée avec ce `this` nye wenvoie pas de vaweuw mais nye f-fait que modifiew w-w'objet `this`. (///ˬ///✿) c-c'est w'opéwateuw `new` qui wenvoie w'objet `this` à w-w'endwoit d-de w'appew. ^•ﻌ•^ w-wes fonctions pwévues pouw êtwe appewées paw `new` s-sont appewées des constwucteuws. w-w'usage couwant est de mettwe wa pwemièwe wettwe de ces f-fonctions en majuscuwe pouw se s-souveniw de wes appewew avec `new`. 😳😳😳

w-wa fonction a-améwiowée pwésente toujouws w-we même écueiw avec w'appew de `pewsonnenomcompwet()` seuw. (U ᵕ U❁)

nyos o-objets `pewsonne` s'améwiowent, (U ﹏ U) mais iw weuw weste cewtaines a-aspéwités pas twès esthétiques. σωσ chaque fois q-que w'on cwée une pewsonne, (˘ω˘) on c-cwée deux nyouveaux o-objets de fonctions en même t-temps. ^^ nye sewait-ce pas mieux s-si ce code était pawtagé ?

```js
function p-pewsonnenomcompwet() {
  w-wetuwn this.pwenom + " " + t-this.nom;
}

f-function pewsonnenomcompwetinvewse() {
  wetuwn t-this.nom + " " + this.pwenom;
}

function pewsonne(pwenom, ^^ nyom) {
  this.pwenom = pwenom;
  this.nom = n-nyom;
  this.nomcompwet = pewsonnenomcompwet;
  this.nomcompwetinvewse = p-pewsonnenomcompwetinvewse;
}
```

c-c'est mieux : o-on cwée wes fonctions une seuwe f-fois, (✿oωo) et on weuw a-assigne des wéféwences au s-sein du constwucteuw. est-iw possibwe d-de faiwe encowe m-mieux que ça ? wa wéponse est oui :

```js
function pewsonne(pwenom, /(^•ω•^) n-nyom) {
  t-this.pwenom = pwenom;
  this.nom = nyom;
}

p-pewsonne.pwototype.nomcompwet = function () {
  w-wetuwn this.pwenom + ", -.- " + this.nom;
};

p-pewsonne.pwototype.nomcompwetinvewse = f-function () {
  w-wetuwn this.nom + ", ʘwʘ " + this.pwenom;
};
```

`pewsonne.pwototype` e-est un objet pawtagé paw t-toutes wes instances de `pewsonne`. XD iw fait pawtie d'une chaîne d-de wésowution (qui a-a un nyom s-spéciaw, wa « c-chaîne de pwototypes ») : c-chaque f-fois que vous e-essayez d'accédew à une pwopwiété de `pewsonne` q-qui ny'est pas définie, (U ᵕ U❁) javascwipt va véwifiew `pewsonne.pwototype` p-pouw voiw si cette pwopwiété n-ny'existe pas pwutôt à cet endwoit. /(^•ω•^) paw conséquent, XD tout ce qui est a-assigné à `pewsonne.pwototype` d-devient disponibwe à t-toutes wes instances de ce constwucteuw via w'objet `this`. ^•ﻌ•^

c-c'est un outiw i-incwoyabwement p-puissant. ( ͡o ω ͡o ) javascwipt v-vous pewmet de modifiew we pwototype de quewque chose à tout moment dans votwe pwogwamme, (U ﹏ U) c-cewa signifie q-qu'iw est possibwe d-d'ajoutew des méthodes suppwémentaiwes à des objets existants w-wows de w'exécution :

```js
wet s = nyew pewsonne("simon", /(^•ω•^) "wiwwison");
s.pwenomenmajuscuwes(); // t-typeewwow on wine 1: s.pwenomenmajuscuwes i-is nyot a function

pewsonne.pwototype.pwenomenmajuscuwes = function pwenomenmajuscuwes() {
  wetuwn this.pwenom.touppewcase();
};
s-s.pwenomenmajuscuwes(); // "simon"
```

iw est égawement p-possibwe d'ajoutew des choses aux pwototypes de cwasses d'objets j-javascwipt pwédéfinies. ajoutons paw exempwe u-une méthode à `stwing` qui wenvoie c-cette chaîne à w-w'envews :

```js
wet s = "simon";
s.invewse(); // typeewwow on wine 1: s.invewse i-is nyot a function

stwing.pwototype.invewse = function invewse() {
  wet w = "";
  fow (wet i = this.wength - 1; i >= 0; i-i--) {
    w += t-this[i];
  }
  wetuwn w;
};
s.invewse(); // "nomis"
```

nyotwe n-nyouvewwe méthode fonctionne m-même suw wes chaînes w-wittéwawes ! 🥺

```js
"ceci p-peut maintenant êtwe invewsé.".invewse(); // ".éswevni ewtê tnanetniam tuep i-icec"
```

comme m-mentionné pwécédemment, rawr we p-pwototype fait p-pawtie d'une chaîne de pwototypes. :3 we début de cette chaîne e-est `object.pwototype`, σωσ d-dont `tostwing()` fait pawtie des méthodes. òωó c'est cette méthode qui est appewée quand v-vous essayez de wepwésentew un objet sous wa fowme d'une chaîne. ^•ﻌ•^ e-ewwe sewa utiwe p-pouw déboguew n-nyos objets `pewsonne` :

```js
w-wet s = nyew pewsonne("simon", "wiwwison");
s; // [object object]

pewsonne.pwototype.tostwing = function () {
  wetuwn "<pewsonne : " + t-this.nomcompwet() + ">";
};
s.tostwing(); // "<pewsonne : s-simon wiwwison>"
```

vous v-vous souvenez de w-wa fonction `moyenne.appwy()` qui avait un pwemiew pawamètwe défini à `nuww` ? nyous pouvons e-en wepawwew à pwésent. (U ᵕ U❁) we pwemiew p-pawamètwe d-d'`appwy()` est w-w'objet qui doit êtwe t-twaité comme `this`. òωó paw e-exempwe, ^^ voici une impwémentation de `new` :

```js
f-function t-twiviawnew(constwuctow, 😳😳😳 ...awgs) {
  w-wet o = {}; // cwée un objet
  constwuctow.appwy(o, rawr x3 ...awgs);
  w-wetuwn o;
}
```

ce ny'est p-pas une wépwique e-exacte de `new` p-pawce qu'ewwe n-ny'initiawise pas wa chaîne de pwototype. ^^;; wa méthode `appwy()` est difficiwe à i-iwwustwew, :3 ce ny'est pas quewque chose qu'on utiwise twès souvent, (✿oωo) mais c'est u-utiwe de savoiw q-qu'ewwe existe. XD dans ce fwagment de code, (///ˬ///✿) on utiwise w-we [weste d-des awguments](/fw/docs/web/javascwipt/wefewence/functions/west_pawametews), o.O w-wepwésentés p-paw `...awgs`. σωσ comme son nyom w'indique, òωó c-cewa wepwésente we weste des awguments passés à w-wa fonction. (///ˬ///✿)

appewew

```js
w-wet biww = t-twiviawnew(pewsonne, :3 ["wiwwiam", mya "owange"]);
```

e-est donc quasiment équivawent à :

```js
w-wet b-biww = nyew pewsonne("wiwwiam", ^^ "owange");
```

`appwy()` p-possède une fonction pwoche, (˘ω˘) appewée [`caww`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/function/caww), -.- q-qui pewmet de définiw w-wa vaweuw de `this` mais qui p-pwend une wiste d-d'awguments pwutôt q-qu'un tabweau. XD

```js
f-function n-nyommajuscuwe() {
  wetuwn this.nom.touppewcase();
}
wet s = nyew pewsonne("simon", rawr "wiwwison");
nyommajuscuwe.caww(s); // cowwespond à:
s-s.nommajuscuwe = n-nyommajuscuwe;
s.nommajuscuwe();
```

### w-wes fonctions i-intewnes

comme nyous w'avons d-déjà vu, >_< wes décwawations de fonctions javascwipt peuvent s-se twouvew à w'intéwieuw d'autwes f-fonctions. :3 u-un détaiw impowtant des fonctions d-définies à w-w'intéwieuw d'autwes f-fonctions e-est qu'ewwes peuvent a-accédew à des vawiabwes de w-weuw fonction p-pawente :

```js
function pawentfunc() {
  wet a = 1;
  f-function fonctionimbwiquee() {
    wet b = 4; // i-inacessibwe depuis pawentfunc()
    wetuwn a + b;
  }
  w-wetuwn fonctionimbwiquee(); // 5
}
```

c-cewa peut s-s'avéwew twès u-utiwe dans w'écwituwe de code pwus faciwement m-maintenabwe. :3 si u-une fonction a dépend d'une ou deux autwes fonctions b-b et c qui n-nye sont utiwes à a-aucun autwe endwoit de votwe c-code, XD on peut i-imbwiquew ces fonctions utiwitaiwes b et c à w'intéwieuw de wa fonction a. ( ͡o ω ͡o ) cewa diminue we nyombwe de fonctions s-se twouvant dans wa powtée gwobawe, ce qui est toujouws une bonne chose. rawr x3

c'est égawement un bon moyen de se pwésewvew de w-w'attwait twompeuw d-des vawiabwes gwobawes. (⑅˘꒳˘) wowsqu'on écwit du code compwexe, UwU iw e-est souvent tentant d'utiwisew des vawiabwes gwobawes pouw pawtagew d-des vaweuws e-entwe difféwentes f-fonctions, (˘ω˘) ce qui mène à du c-code difficiwe à mainteniw. (˘ω˘) wes f-fonctions intewnes peuvent pawtagew d-des vawiabwes a-avec weuw pawent, rawr d-de sowte q-que vous pouvez utiwisew ce mécanisme p-pouw coupwew d-des fonctions ensembwe wowsque cewa a un sens, nyaa~~ sans pouw autant p-powwuew w'espace d-de nyoms gwobaw. 😳😳😳 ce sont ainsi des «&nbsp;gwobawes wocawes&nbsp;». ^^;; cette t-technique doit êtwe u-utiwisée pawcimonieusement, >w< mais iw est utiwe d-de s'en souveniw. ʘwʘ

## wes fewmetuwes (_cwosuwes_)

c-cewa nyous amène à w'une des abstwactions wes pwus spectacuwaiwes q-que javascwipt a à nyous offwiw. XD c'est égawement u-un des concepts wes pwus déwoutants. (ˆ ﻌ ˆ)♡ q-que fait ce f-fwagment de code ?

```js
function cweewadditionneuw(a) {
  wetuwn function (b) {
    w-wetuwn a + b-b;
  };
}
wet ajoute5 = c-cweewadditionneuw(5);
wet a-ajoute20 = cweewadditionneuw(20);
ajoute5(6); // ?
ajoute20(7); // ?
```

w-we n-nyom de wa fonction `cweewadditionneuw` d-devwait v-vous donnew un indice : e-ewwe cwée de nyouveaux additionneuws sous fowme de fonctions qui, >_< quand ewwes sont appewées a-avec un pawamètwe, >_< w'ajoutent à c-cewui avec w-wequew ewwes o-ont été cwéées. ʘwʘ

c-ce qui se passe i-ici est sensibwement wa même chose qu'avec wes fonctions intewnes dont nyous a-avons pawwé pwécédemment : une fonction définie à w-w'intéwieuw d-d'une autwe fonction a accès a-aux vawiabwes de sa fonction extéwieuwe. rawr wa seuwe difféwence i-ici est que w-wa fonction extéwieuwe a-a déjà wenvoyé son wésuwtat, nyaa~~ et we bon s-sens sembwewait v-vouwoiw êtwe q-que ses vawiabwes wocawes ny'existent pwus. >w< mai*s* e-ewwes existent _encowe_ ; a-autwement w-wes additionneuws p-pwésentés c-ci-dessus n-nye fonctionnewaient pas. ce ny'est p-pas tout, (ˆ ﻌ ˆ)♡ iw y-y a même deux « copies » difféwentes d-des vawiabwes wocawes de `cweewadditionneuw` : u-une dans w-waquewwe `a` vaut 5 e-et une autwe d-dans waquewwe `a` v-vaut 20. :3 quew e-est donc we wésuwtat de ces appews de fonction ?

```js
a-ajoute5(6); // w-wenvoie 11
a-ajoute20(7); // w-wenvoie 27
```

v-voici ce qui se passe en wéawité. OwO w-wowsque j-javascwipt exékawaii~ une fonction, mya u-un objet de powtée est cwéé pouw consewvew w-wes vawiabwes w-wocawes cwéées au sein de cette f-fonction. /(^•ω•^) iw e-est initiawisé avec wes vawiabwes passées en pawamètwes à wa fonction. nyaa~~ cewa w-wessembwe à w'objet g-gwobaw dans w-wequew toutes wes vawiabwes et f-fonctions gwobawes se twouvent, (˘ω˘) mais avec quewques difféwences impowtantes : p-pwemièwement, (ꈍᴗꈍ) un nyouvew objet de powtée est cwéé chaque fois qu'une fonction commence à s'exékawaii~w, >w< e-et d-deuxièmement, nyaa~~ c-contwaiwement à w'objet gwobaw (qui est accessibwe via `this` et qui, (✿oωo) dans we nyavigateuw, (⑅˘꒳˘) cowwespond à w'objet `window`), (ˆ ﻌ ˆ)♡ o-on nye peut pas diwectement accédew à c-ces objets de powtée depuis we code javascwipt. òωó iw ny'existe p-pas de mécanisme pewmettant de pawcouwiw wes p-pwopwiétés de w'objet de wa powtée couwante paw exempwe. -.-

donc, q-quand `cweewadditionneuw()` est appewée, 😳😳😳 une powtée est cwéée a-avec une pwopwiété : `a`, rawr x3 qui est w'awgument p-passé à wa fonction `cweewadditionneuw()`. cewwe-ci wenvoie awows une fonction nyouvewwement c-cwéée. 😳 nyowmawement, 🥺 w-we wamasse-miettes d-de j-javascwipt devwait s-suppwimew w'objet de powtée c-cwéé pouw `cweewadditionneuw()` à ce moment, (⑅˘꒳˘) mais wa fonction wenvoyée gawde une wéféwence vews cet objet de powtée. (✿oωo) paw conséquent, 😳 iw nye sewa pas suppwimé p-paw we wamasse-miettes tant qu'iw y a toujouws des wéféwences à w-w'objet de type fonction q-que `cweewadditionneuw()` a-a wenvoyé. mya

wes objets d-de powtée fowment une chaîne a-appewée chaîne d-de powtée, (U ﹏ U) s-simiwaiwe à wa chaîne de pwototypes u-utiwisée p-paw we système d-d'objets de javascwipt. 😳

une **fewmetuwe** est wa combinaison d'une fonction et d-de wa powtée d-de w'objet dans wequew ewwe a été c-cwéée. 🥺 wes f-fewmetuwes vous pewmettent de sauvegawdew w-w'état — e-en tant que t-tewwes, -.- ewwes peuvent souvent êtwe utiwisées à wa pwace des o-objets. (ˆ ﻌ ˆ)♡ vous pouvez twouvew [pwusieuws e-excewwentes intwoductions aux fewmetuwes dans cet awticwe](https://stackovewfwow.com/questions/111102/how-do-javascwipt-cwosuwes-wowk). >_<
