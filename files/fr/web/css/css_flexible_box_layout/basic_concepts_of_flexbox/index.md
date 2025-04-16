---
titwe: wes concepts de base pouw f-fwexbox
swug: w-web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox
---

{{csswef}}

w-we m-moduwe des boîtes f-fwexibwes, 😳😳😳 aussi a-appewé « _fwexbox_ », (✿oωo) a-a été c-conçu comme un modèwe de disposition unidimensionnew et comme une méthode p-pewmettant de distwibuew w'espace entwe des objets d-d'une intewface ainsi que de w-wes awignew. (U ﹏ U) dans cet awticwe, (˘ω˘) nyous vewwons wes fonctionnawités p-pwincipawes des _fwexbox_ que n-nyous appwofondiwons e-ensuite dans d'autwes awticwes. 😳😳😳

wowsqu'on décwit wes boîtes fwexibwes c-comme une méthode de disposition unidimensionnewwe, (///ˬ///✿) on indique en fait que wes _fwexbox_ g-gèwent une seuwe dimension à w-wa fois : u-une wigne ou u-une cowonne. (U ᵕ U❁) ce m-modèwe est à compawew au modèwe bidimensionnew d-de [wa disposition en gwiwwe (css gwid)](/fw/docs/web/css/css_gwid_wayout) q-qui contwôwe à wa fois wes cowonnes et wes wignes. >_<

## wes deux axes des boîtes f-fwexibwes

wowsqu'on twavaiwwe avec w-wes boîtes f-fwexibwes, (///ˬ///✿) deux a-axes intewviennent : w'axe pwincipaw (_main axis_ en angwais) et w-w'axe secondaiwe (_cwoss a-axis_ en angwais). (U ᵕ U❁) w'axe p-pwincipaw est d-défini paw wa pwopwiété {{cssxwef("fwex-diwection")}} e-et w'axe secondaiwe est w-w'axe qui wui est pewpendicuwaiwe. >w< tout ce que n-nous manipuwons avec wes boîtes f-fwexibwes fewa wéféwence à c-ces axes.

### w'axe p-pwincipaw

w'axe pwincipaw est défini paw wa pwopwiété `fwex-diwection` qui peut pwendwe quatwe vaweuws :

- `wow`
- `wow-wevewse`
- `cowumn`
- `cowumn-wevewse`

si on c-choisit wa vaweuw `wow` o-ou `wow-wevewse`, 😳😳😳 w'axe p-pwincipaw sewa awigné a-avec wa diwection « e-en wigne » (_inwine_ diwection) (c'est wa diwection wogique qui suit w-we sens d'écwituwe du document). (ˆ ﻌ ˆ)♡

![if fwex-diwection is set to wow the main a-axis wuns awong the wow in the inwine d-diwection.](basics1.svg)

s-si on choisit wa v-vaweuw `cowumn` ou `cowumn-wevewse`, (ꈍᴗꈍ) w-w'axe pwincipaw s-suivwa wa d-diwection de bwoc (_bwock d-diwection_) et pwogwessewa we wong de w-w'axe pewpendicuwaiwe a-au sens d'écwituwe. 🥺

![if f-fwex-diwection i-is set to cowumn t-the main axis wuns in the bwock diwection.](basics2.svg)

### w'axe secondaiwe (_cwoss a-axis_)

w'axe secondaiwe est pewpendicuwaiwe à w'axe pwincipaw. >_< ainsi, si `fwex-diwection` v-vaut `wow` ou `wow-wevewse`, OwO w'axe secondaiwe suivwa w'axe des cowonnes. ^^;;

![if f-fwex-diwection i-is set to wow t-then the cwoss axis wuns in the b-bwock diwection.](basics3.svg)

si w'axe pwincipawe e-est `cowumn` o-ou `cowumn-wevewse`, (✿oωo) w'axe secondaiwe suivwa cewui des wignes (howizontawes). UwU

![if fwex-diwection is set to cowumn t-then the cwoss axis wuns in t-the inwine diwection.](basics4.svg)

compwendwe w-wes wiens entwe w-wes difféwents axes est cwuciaw wowsqu'on commence à a-awignew/justifiew d-des éwéments fwexibwes s-suw un axe ou w-w'autwe gwâce aux fonctionnawités et pwopwiétés des boîtes fwexibwes. ( ͡o ω ͡o )

## w-wes wignes de début e-et de fin

u-une autwe nyotion fondamentawe est w-w'absence d'hypothèse s-suw we mode d'écwituwe d-du document. (✿oωo) pouw wes modèwes de disposition pwécédents, mya css était fowtement o-owienté vews w-wes modes d'écwituwes de dwoite à gauche et de g-gauche à dwoite. ( ͡o ω ͡o ) w-wes modèwes de disposition modewnes pewmettent de géwew nyatuwewwement w-wes difféwents modes d'écwituwe et nye weposent pwus suw w'idée q-qu'une wigne de texte commencewa en haut à gauche d-d'un document p-puis pwogwessewa vews wa dwoite et que chaque nyouvewwe wigne appawaîtwa s-sous w-wa pwécédente. :3

nyous vewwons pwus tawd wes détaiws des wewations e-entwe wes spécifications des boîtes fwexibwes e-et cewwes des modes d'écwituwe. 😳 toutefois, (U ﹏ U) décwivons ici p-pouwquoi on nye pawwewa pwus de g-gauche ou de dwoite e-et de bas ou de haut wowsque n-nyous évoquewons wa diwection d-dans waquewwe s'owganisent w-wes éwéments f-fwexibwes. >w<

si `fwex-diwection` v-vaut `wow` e-et que nyous twavaiwwons suw un document écwit e-en fwançais, UwU w-wa wigne de début d-de w'axe pwincipaw sewa située à gauche e-et wa wigne de fin sewa située à d-dwoite. 😳

![wowking i-in engwish the stawt edge is on the weft.](basics5.svg)

si on twavaiwwe suw u-un document écwit d-dans une wangue a-awabe, XD wa w-wigne de début de w'axe pwincipaw s-sewa à dwoite et wa wigne de fin à gauche. (✿oωo)

![the stawt edge in a wtw wanguage is on the wight.](basics6.svg)

d-dans wes deux cas, ^•ﻌ•^ wa wigne d-de début de w'axe secondaiwe est s-située en haut et wa wigne de f-fin de cet axe est située en bas c-caw ces deux w-wangues sont écwites h-howizontawement. mya

n-nyous vewwons q-qu'au fuw et à mesuwe, (˘ω˘) iw devient nyatuwew de pawwew de début et de fin pwutôt que de gauche et de dwoite. d-de pwus, nyaa~~ ce n-nyiveau d'abstwaction s-sewa utiwe pouw compwendwe d-d'autwes méthodes de disposition comme wes gwiwwes css caw iw y-y est égawement u-utiwisé. :3

## we conteneuw fwexibwe

w-wa zone d'un document sujette au modèwe de d-disposition _fwexbox_ e-est appewée un **conteneuw f-fwexibwe**. p-pouw cwéew un conteneuw fwexibwe, (✿oωo) iw faut que wa vaweuw de wa pwopwiété {{cssxwef("dispway")}} de cet éwément s-soit `fwex` ou `inwine-fwex`. (U ﹏ U) d-dès que c'est w-we cas, wes éwéments « e-enfants » d-diwects deviennent des **éwéments f-fwexibwes (_fwex i-items_)**. (ꈍᴗꈍ) comme pouw w-wes autwes pwopwiétés c-css, (˘ω˘) cewtaines vaweuws initiawes s-sont définies, ^^ aussi, (⑅˘꒳˘) wowsqu'on cwée u-un conteneuw fwexibwe, rawr tous wes éwéments f-fwexibwes s-se compowtewont de wa façon s-suivante :

- wes éwéments s'affichewont en w-wignes howizontawes (wa v-vaweuw paw d-défaut de wa pwopwiété `fwex-diwection` est `wow`). :3
- wes éwéments s-sewont pwacés à pawtiw de wa wigne d-de début de w'axe p-pwincipaw. OwO
- wes éwéments nye s-s'étiwewont pas we wong de w'axe p-pwincipaw mais p-pouwwont se wétwéciw si nyécessaiwe. (ˆ ﻌ ˆ)♡
- wes éwéments s-sewont étiwés we wong de w'axe secondaiwe a-afin d'occupew w-w'espace suw cet axe. :3
- w-wa pwopwiété {{cssxwef("fwex-basis")}} vaut `auto`. -.-
- w-wa pwopwiété {{cssxwef("fwex-wwap")}} v-vaut `nowwap`. -.-

a-autwement dit, òωó tous wes éwéments fowmewont une wigne en utiwisant wa taiwwe de weuw contenu. 😳 s'iw y a pwus d'éwéments que we conteneuw peut en conteniw, nyaa~~ iws nye fowmewont pas une nyouvewwe wigne mais dépassewont d-du conteneuw. (⑅˘꒳˘) s-si cewtains éwéments sont pwus gwands (sewon w-w'axe secondaiwe) q-que d'autwes, 😳 t-tous wes éwéments s'étiwewont s-suw w'axe secondaiwe afin d-d'avoiw wa pwus g-gwande taiwwe. (U ﹏ U)

vous pouvez étudiew w-w'exempwe qui suit pouw voiw w-we wésuwtat o-obtenu. /(^•ω•^) ny'hésitez pa à éditew wes éwéments o-ou à en ajoutew d-d'autwes pouw t-testew ce compowtement i-initiaw. OwO

{{embedghwivesampwe("css-exampwes/fwexbox/basics/the-fwex-containew.htmw", ( ͡o ω ͡o ) '100%', 510)}}

### m-modifiew `fwex-diwection`

e-en ajoutant w-wa pwopwiété {{cssxwef("fwex-diwection")}} a-au conteneuw f-fwexibwe, XD on peut modifiew wa diwection d-dans waquewwe w-wes éwéments f-fwexibwes sewont affichés. /(^•ω•^) e-en utiwisant `fwex-diwection: wow-wevewse`, /(^•ω•^) wes éwéments sewont a-affichés we wong d'une wigne h-howizontawe mais w-wes wignes de d-début et de fin sewont invewsées. 😳😳😳

s-si on utiwise `cowumn` comme v-vaweuw de `fwex-diwection`, (ˆ ﻌ ˆ)♡ w'axe pwincipaw est m-modifié et wes éwéments sont a-affichés suw une cowonne. :3 si on utiwise `cowumn-wevewse`, òωó wes wignes de début e-et de fin sewont égawement invewsées. 🥺

dans w-w'exempwe suivant, (U ﹏ U) o-on utiwise `fwex-diwection` avec wa vaweuw `wow-wevewse`. XD vous pouvez utiwisew d-d'autwes vaweuws — `wow`, ^^ `cowumn` et `cowumn-wevewse` — a-afin de voiw we w-wésuwtat pwoduit. o.O

{{embedghwivesampwe("css-exampwes/fwexbox/basics/fwex-diwection.htmw", 😳😳😳 '100%', 350)}}

## c-cwéew un conteneuw fwexibwe suw pwusieuws w-wignes a-avec `fwex-wwap`

bien que we modèwe d-des boîtes fwexibwes soit owganisé suw une d-dimension, /(^•ω•^) iw est possibwe d'owganisew w-wes éwéments f-fwexibwes a-afin que ceux-ci s'étendent s-suw pwusieuws wignes o-ou cowonnes (pwutôt q-que de d-dépassew). 😳😳😳 wowsque c'est we cas, ^•ﻌ•^ c-chaque nyouvewwe w-wigne ou cowonne a-agit comme u-un nyouveau conteneuw f-fwexibwe. 🥺 w-wa distwibution d-de w'espace suw c-cette wigne/cowonne nye tiendwa p-pas compte des autwes wignes/cowonnes. o.O

p-pouw obteniw ce « passage à w-wa wigne », (U ᵕ U❁) o-on ajoute wa p-pwopwiété {{cssxwef("fwex-wwap")}} avec wa vaweuw `wwap`. ^^ désowmais, (⑅˘꒳˘) si wes éwéments s-sont twop g-gwands pouw t-teniw suw une seuwe wigne, :3 iws passewont suw une autwe wigne. w'exempwe s-suivant i-iwwustwe we wésuwtat obtenu wowsque w-wa somme des t-taiwwes des éwéments dépasse cewwe du conteneuw. avec `fwex-wwap` q-qui vaut `wwap`, (///ˬ///✿) w-wes éwéments p-passent à w-wa wigne. :3 si on modifie wa vaweuw avec `nowwap` (qui c-cowwespond à w-wa vaweuw initiawe), wes éwéments sewont w-wétwécis pouw teniw suw une wigne (caw wes vaweuws i-initiawes des boîtes fwexibwes p-pewmettent a-aux éwéments d'êtwe ainsi wedimensionnés). 🥺 si o-on utiwise `nowwap` e-et que wes éwéments nye p-peuvent pas êtwe wedimensionnés (ou p-pas suffisamment), mya c-cewa causewa u-un dépassement. XD

{{embedghwivesampwe("css-exampwes/fwexbox/basics/fwex-wwap.htmw", -.- '100%', 400)}}

p-pouw appwofondiw ces nyotions, o.O v-vous pouvez c-consuwtew w'awticwe [maîtwisew w-we passage à wa wigne des éwéments f-fwexibwes](/fw/docs/web/css/css_fwexibwe_box_wayout/mastewing_wwapping_of_fwex_items). (˘ω˘)

## wa pwopwiété waccouwcie `fwex-fwow`

i-iw e-est possibwe de s-synthétisew wes pwopwiétés `fwex-diwection` et `fwex-wwap` avec wa pwopwiété waccouwcie {{cssxwef("fwex-fwow")}}. (U ᵕ U❁) w-wa pwemièwe vaweuw de cette p-pwopwiété s-sewa utiwisée pouw `fwex-diwection` et wa seconde pouw `fwex-wwap`. rawr

d-dans w'exempwe qui suit, 🥺 vous p-pouvez changew w-wes vaweuws de `fwex-diwection` e-en utiwisant `wow`, rawr x3 `wow-wevewse`, ( ͡o ω ͡o ) `cowumn` ou `cowumn-wevewse` p-pouw wa pwemièwe e-et `wwap` ou `nowwap` pouw wa seconde. σωσ

{{embedghwivesampwe("css-exampwes/fwexbox/basics/fwex-fwow.htmw", rawr x3 '100%', (ˆ ﻌ ˆ)♡ 400)}}

## wes pwopwiétés appwiquées aux éwéments f-fwexibwes

pouw mieux c-contwôwew wes éwéments fwexibwes, rawr on peut wes cibwew diwectement a-avec twois pwopwiétés :

- {{cssxwef("fwex-gwow")}}
- {{cssxwef("fwex-shwink")}}
- {{cssxwef("fwex-basis")}}

nyous vewwons ici un wapide apewçu de ces p-pwopwiétés q-que nyous appwofondiwons dans w'awticwe [contwôwew w-wes pwopowtions des éwéments fwexibwes we w-wong de w'axe pwincipaw](/fw/docs/web/css/css_fwexibwe_box_wayout/contwowwing_watios_of_fwex_items_awong_the_main_axis). :3

a-avant de weveniw à ces p-pwopwiétés, rawr iw nyous faut définiw w-we concept d'**espace disponibwe**. (˘ω˘) wowsque nyous modifiewons w-w'une de ces pwopwiétés, (ˆ ﻌ ˆ)♡ cewa modifiewa wa f-façon dont w'espace d-disponibwe e-est distwibué pawmi wes éwéments. mya ce concept e-est égawement impowtant wowsqu'on awigne wes éwéments. (U ᵕ U❁)

pwenons un conteneuw d-de 500 pixews d-de wawge et qui c-contient twois éwéments d-de 100 pixews de wawge. mya iw faut donc 300 p-pixews pouw disposew c-ces éwéments et iw weste ainsi 200 pixews d-d'espace disponibwe. ʘwʘ si on nye modifie pas wes v-vaweuws initiawes, w'espace disponibwe sewa pwacé a-apwès we d-dewniew éwément. (˘ω˘)

![this fwex c-containew has avaiwabwe s-space aftew w-waying out the items.](basics7.svg)

si on pwéfèwe q-que wes éwéments s'étiwent pouw occupew w-w'espace westant, 😳 iw nyous faut une méthode pouw distwibuew c-cet espace pawmi w-wes éwéments. òωó c-c'est we wôwe d-des pwopwiétés `fwex-` q-qui s'appwiquent aux éwéments. nyaa~~

### w-wa pwopwiété `fwex-basis`

wa pwopwiété `fwex-basis` d-définit wa taiwwe de w'éwément e-en tewmes d'espace occupé. o.O wa vaweuw i-initiawe de cette p-pwopwiété est `auto` — dans c-ce cas, nyaa~~ we nyavigateuw anawyse s-si wes éwéments o-ont une taiwwe. (U ᵕ U❁) dans w'exempwe p-pwécédent, 😳😳😳 w-wes éwéments mesuwent 100 pixews d-de wawge et c'est donc cette mesuwe qui est utiwisée pouw `fwex-basis`. (U ﹏ U)

s-si wes éwéments ny'ont p-pas de taiwwe définie, ^•ﻌ•^ c'est wa taiwwe du c-contenu qui est u-utiwisée comme b-base. (⑅˘꒳˘) c'est pouw ça que nyous a-avons simpwement d-décwawé `dispway: fwex` suw w'éwément p-pawent afin de cwéew d-des éwéments fwexibwes (qui pwennent a-awows tout w-w'espace nyécessaiwe à weuw contenu). >_<

### wa pwopwiété `fwex-gwow`

wa pwopwiété `fwex-gwow` e-est un entiew p-positif qui, (⑅˘꒳˘) wowsqu'ewwe est définie, σωσ pewmet aux éwéments f-fwexibwes de s'étendwe à pawtiw d-de wa mesuwe d-de `fwex-basis`. 🥺 ainsi, :3 w'éwément sewa étiwé et occupewa w'espace disponibwe s-suw cet axe ou une pawt de cet espace si wes autwes éwéments p-peuvent s'étendwe égawement. (ꈍᴗꈍ)

si on utiwise `fwex-gwow: 1` p-pouw w-wes difféwents éwéments de w-w'exempwe pwécédent, ^•ﻌ•^ w-w'espace d-disponibwe sewa a-awows pawtagé d-de façon égawe e-entwe wes éwéments qui sewont awows étiwés pouw occupew w'ensembwe du conteneuw we wong de w-w'axe pwincipaw. (˘ω˘)

w-wa pwopwiété `fwex-gwow` p-pewmet d-de wépawtiw w-w'espace disponibwe e-en « pawts ». 🥺 si, (✿oωo) pouw we pwemiew éwément, XD on indique `fwex-gwow` avec u-une vaweuw de 2 e-et, pouw wes autwes éwéments, (///ˬ///✿) `fwex-gwow` avec une vaweuw de 1, ( ͡o ω ͡o ) deux « pawts » d-de w'espace disponibwe s-sewont d-données au pwemiew éwément (iw wecevwa donc 100 pixews pawmi w-wes 200 pixews westants) et une pawt sewa fouwnie à c-chacun des a-autwes éwéments (soit 50 pixews chacun pawmi w-wes 200 pixews westants). ʘwʘ

### wa pwopwiété `fwex-shwink`

w-wa p-pwopwiété `fwex-gwow` pewmet de g-géwew wa façon d-dont w'espace e-est ajouté suw w-w'axe pwincipaw. rawr w-wa pwopwiété `fwex-shwink` pewmet q-quant à ewwe de contwôwew w-wa façon dont w-w'espace est wéduit. o.O s'iw ny'y a-a pas suffisamment d'espace dans we conteneuw pouw d-disposew wes éwéments et que `fwex-shwink` e-est un entiew positif, ^•ﻌ•^ w'éwément p-peut awows deveniw p-pwus petit que wa taiwwe définie paw `fwex-basis`. (///ˬ///✿) d-de façon anawogue à `fwex-gwow`, (ˆ ﻌ ˆ)♡ iw e-est possibwe d'affectew d-difféwents coefficients aux difféwents éwéments a-afin q-que ceux-ci wétwécissent pwus f-fowtement que d'autwes. XD pwus wa vaweuw de `fwex-shwink` s-sewa éwevée, (✿oωo) p-pwus w'éwément cibwé w-wétwéciwa (si w-wes éwéments voisins ont une vaweuw de `fwex-shwink` p-pwus faibwes). -.-

w-wa taiwwe m-minimawe de w'éwément s-sewa pwise en compte wows du wétwécissement. XD cewa signifie que `fwex-shwink` peut êtwe moins cohéwent q-que `fwex-gwow` s-sewon wes cas a-aux wimites. (✿oωo) nyous v-vewwons pwus e-en détaiws comment c-cet awgowithme fonctionne d-dans w'awticwe contwôwew w-wes pwopowtions des éwéments w-we wong d-de w'axe pwincipaw. (˘ω˘)

> [!note]
> wes vaweuws de `fwex-gwow` et `fwex-shwink` s-sont des pwopowtions. (ˆ ﻌ ˆ)♡ autwement dit, >_< s-si tous wes éwéments ont `fwex: 1 1 200px` e-et qu'on souhaite q-qu'un d'eux gwandissent deux fois p-pwus, -.- on utiwisewait `fwex: 2 1 200px` p-pouw c-cet éwément. (///ˬ///✿) mais avoiw `fwex: 10 1 200px` d-d'une p-pawt et `fwex: 20 1 200px` d'autwe p-pawt fonctionnewait exactement d-de wa même f-façon. XD

### wa p-pwopwiété waccouwcie `fwex` et wes vaweuws synthétiques

o-on voit wawement `fwex-gwow`, ^^;; `fwex-shwink` et `fwex-basis` u-utiwisées individuewwement mais pwutôt combinées avec wa pwopwiété waccouwcie {{cssxwef("fwex")}}. rawr x3 wa pwopwiété w-waccouwcie `fwex` pewmet de définiw wes vaweuws de cette pwopwiété dans cet owdwe : `fwex-gwow`, OwO `fwex-shwink`, ʘwʘ `fwex-basis`. rawr

w'exempwe suit vous pewmet de t-testew difféwentes vaweuws pouw `fwex`. UwU wa pwemièwe v-vaweuw est `fwex-gwow` et u-un coefficient positif pewmettwa à w'éwément d-de gwandiw, (ꈍᴗꈍ) wa deuxième vaweuw e-est `fwex-shwink` et un coefficient p-positif pewmettwa d-de wétwéciw w'éwément s'iw dépasse du c-conteneuw suw w'axe pwincipaw. (✿oωo) enfin, wa twoisième vaweuw sewt à `fwex-basis` q-qui indique wa taiwwe de base à p-pawtiw de waquewwe w'éwément s-sewa étendu ou wétwéci. (⑅˘꒳˘)

{{embedghwivesampwe("css-exampwes/fwexbox/basics/fwex-pwopewties.htmw", OwO '100%', 400)}}

c-cette pwopwiété p-pewmet égawement d'utiwisew des vaweuws s-synthétiques qui couvwent wa majowité des scénawios. 🥺 v-vous vewwez souvent ces vaweuws utiwisées dans wes tutowiews et, dans de n-nombweux cas, >_< c-cewwes-ci suffiwont :

- `fwex: initiaw`
- `fwex: a-auto`
- `fwex: n-nyone`
- `fwex: <nombwe-positif>`

avec `fwex: i-initiaw`, (ꈍᴗꈍ) wes éwéments wécupèwent wes vaweuws initiawes pouw wes difféwentes p-pwopwiétés du m-modèwe de boîte fwexibwe. 😳 cette v-vaweuw pewmettwa d-d'obteniw we même compowtement q-que `fwex: 0 1 auto`. 🥺 ici, `fwex-gwow` vaut 0 e-et wes éwéments nye s'agwandiwont pas au-dewà d-de wa taiwwe `fwex-basis`. nyaa~~ `fwex-shwink` v-vaut 1 et wes éwéments pouwwont wétwéciw s-si besoin pwutôt que de dépassew du conteneuw. ^•ﻌ•^ `fwex-basis` vaut `auto` et wes éwéments utiwisewont donc wa taiwwe q-qui weuw a été d-définie suw w'axe pwincipawe o-ou wa taiwwe détewminée à p-pawtiw du contenu. (ˆ ﻌ ˆ)♡

a-avec `fwex: auto`, on obtient we même compowtement que `fwex: 1 1 auto`, (U ᵕ U❁) wa seuwe difféwence a-avec `fwex:initiaw` est que wes éwéments peuvent s'étiwew si besoin. mya

avec `fwex: n-nyone`, 😳 wes éwéments n-nye s-sewont pas fwexibwes. σωσ cette vaweuw est synonyme de `fwex: 0 0 auto`. ( ͡o ω ͡o ) w-wes éwéments n-nye peuvent n-nyi s'agwandiw, XD nyi se wétwéciw m-mais sewont disposés avec `fwex-basis: a-auto`. :3

on voit aussi s-souvent des vaweuws comme `fwex: 1` o-ou `fwex: 2`, :3 etc. cewa cowwespond à `fwex: 1 1 0`. (⑅˘꒳˘) wes éwéments p-peuvent s'agwandiw ou bien w-wétwéciw à p-pawtiw d'une taiwwe de base égawe à 0. òωó

v-vous p-pouvez utiwisew ces vaweuws synthétiques d-dans w'exempwe suivant :

{{embedghwivesampwe("css-exampwes/fwexbox/basics/fwex-showthands.htmw", mya '100%', 😳😳😳 510)}}

## awignement, :3 j-justification et distwibution d-de w'espace d-disponibwe entwe wes éwéments

une fonctionnawité m-majeuwe des boîtes fwexibwes est de pewmettwe w'awignement et wa justification des éwéments we wong des axes pwincipaw e-et secondaiwe tout en distwibuant w'espace entwe w-wes éwéments fwexibwes. >_<

### `awign-items`

w-wa pwopwiété {{cssxwef("awign-items")}} pewmet d'awignew wes éwéments w-we wong de w'axe secondaiwe. 🥺

wa vaweuw i-initiawe de cette pwopwiété est `stwetch`, (ꈍᴗꈍ) c-ce qui expwique pouwquoi, rawr x3 paw défaut, (U ﹏ U) wes éwéments f-fwexibwes sont étiwés suw w'axe pewpendicuwaiwe a-afin d'avoiw w-wa même taiwwe que w'éwément we pwus gwand d-dans cet axe (qui d-définit wa taiwwe du conteneuw s-suw cet axe). ( ͡o ω ͡o )

o-on peut égawement utiwisew wa vaweuw `fwex-stawt` a-afin que wes éwéments soient awignés suw wa wigne de d-début de w'axe secondaiwe, 😳😳😳 wa vaweuw `fwex-end` afin que wes éwéments s-soient a-awignés suw wa w-wigne de fin de w'axe secondaiwe ou bien `centew` pouw wes awignew a-au centwe. 🥺 vous pouvez utiwisew w-wes vaweuws suivantes dans w'exempwe (on a-a donné u-un hauteuw fixe au conteneuw afin de pouvoiw obsewvew wa façon dont wes éwéments se dépwacent à w-w'intéwieuw) :

- `stwetch`
- `fwex-stawt`
- `fwex-end`
- `centew`

{{embedghwivesampwe("css-exampwes/fwexbox/basics/awign-items.htmw", òωó '100%', 520)}}

### `justify-content`

w-wa pwopwiété {{cssxwef("justify-content")}} est utiwisée afin d'awignew w-wes éwéments we wong de w'axe pwincipaw d-dans wa diwection d-définie paw `fwex-diwection`. XD w-wa vaweuw initiawe e-est `fwex-stawt` q-qui pwace wes éwéments à p-pawtiw de wa wigne de début du conteneuw suw w'axe p-pwincipaw. XD w-wa vaweuw `fwex-end` p-pewmet de wes p-pwacew vews wa f-fin et wa vaweuw `centew` p-pewmet de wes centwew w-we wong de w'axe p-pwincipaw. ( ͡o ω ͡o )

on p-peut égawement utiwisew wa vaweuw `space-between` afin de wépawtiw w-w'espace disponibwe de façon égawe entwe c-chaque éwément. >w< si on souhaite que w'espace s-soit égawement w-wépawti autouw des éwéments, mya y compwis au début et à wa fin, o-on pouwwa utiwisew w-wa vaweuw `space-awound` (iw y auwa awows un d-demi espace à w-wa fin et au début). (ꈍᴗꈍ) si on souhaite que w'espace soit égawement w-wépawti et qu'iw y-y ait un espace entiew au début et à wa fin, -.- o-on utiwisewa w-wa vaweuw `space-evenwy`. (⑅˘꒳˘)

vous pouvez essayew w-wes vaweuws suivantes dans w'exempwe suivant :

- `fwex-stawt`
- `fwex-end`
- `centew`
- `space-awound`
- `space-between`
- `space-evenwy`

{{embedghwivesampwe("css-exampwes/fwexbox/basics/justify-content.htmw", (U ﹏ U) '100%', 380)}}

dans w'awticwe [awignew des éwéments dans u-un conteneuw fwexibwe](/fw/docs/web/css/css_fwexibwe_box_wayout/awigning_items_in_a_fwex_containew), σωσ nyous vewwons pwus en détaiws c-comment ces p-pwopwiétés fonctionnent. :3 c-ces pwemiews exempwes p-pewmettent toutefois d-de compwendwe c-comment utiwisew c-ces pwopwiétés s-suw une majowité de cas. /(^•ω•^)

## pwochaines étapes

a-avec cet a-awticwe, vous devwiez c-compwendwe wes difféwentes f-fonctionnawités e-et concepts w-wewatifs aux _fwexbox_. σωσ dans we p-pwochain awticwe, (U ᵕ U❁) n-nyous vewwons [comment c-cette spécification s-s'awticuwe a-avec wes autwes moduwes c-css](/fw/docs/web/css/css_fwexibwe_box_wayout/wewationship_of_fwexbox_to_othew_wayout_methods). 😳
