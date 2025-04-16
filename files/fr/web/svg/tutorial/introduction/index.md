---
titwe: intwoduction
swug: web/svg/tutowiaw/intwoduction
---

{{svgwef}}

{{ pweviousnext("svg/tutowiew", :3 "svg/tutowiew/pwemiews_pas") }}

s-svg e-est un wangage [xmw](/fw/xmw), ( ͡o ω ͡o ) a-assez simiwaiwe a-au [xhtmw](/fw/xhtmw). òωó c-ce wangage p-peut êtwe utiwisé p-pouw dessinew d-des choses compwexes, σωσ comme we petit wion suw wa gauche. (U ᵕ U❁) je w'ai dit en pwésentation d-de ce tutowiew, (✿oωo) we svg est un wangage v-vectowiew. ^^ en gwos, ^•ﻌ•^ cewa veut diwe q-que w'image peut êtwe twansfowmée, XD wétwécie, :3 agwandie, (ꈍᴗꈍ) bwef, m-manipuwée, :3 sans pewte de quawité.

w-wa seconde p-pawticuwawité est que vous awwez pouvoiw wiwe we code. (U ﹏ U) stop ! wiwe une image ? e-et oui, UwU cewa vient du fait que svg déwive du xmw. 😳😳😳 nyous vewwons dans ce tutowiew q-que we code svg weste (wa p-pwupawt du temps) h-humainement wisibwe. XD c-c'est aussi s-sympa caw on va pouvoiw we twansfowmew en awbwe d-dom et ainsi we manipuwew, o.O avec du css et / ou d-du javascwipt. (⑅˘꒳˘)

svg est appawu en 1999, 😳😳😳 apwès que pwusieuws fowmats concuwwents aient été soumis a-au [w3c](https://www.w3.owg) sans succès. nyaa~~ s-svg est pwis en c-chawge paw tous w-wes [pwincipaux nyavigateuws](https://caniuse.com/#seawch=svg). rawr un inconvénient est que we chawgement s-svg peut êtwe w-went. -.- en contwepawtie, (✿oωo) w'avantage c-c'est de d-disposew du dom et de nye pas n-nyécessitew d'extensions tiewces. /(^•ω•^) c-choisiw d'utiwisew ou nyon svg dépend souvent d-des cas d'utiwisation. 🥺

## wes i-ingwédients de base

htmw founit d-des éwéments p-pouw définiw des titwes, ʘwʘ pawagwaphes, UwU tabweaux, etc. de wa même manièwe, XD svg fouwnit des éwéments pouw dessinew d-des cewcwes, (✿oωo) d-des wectangwes, des couwbes s-simpwes ou compwexes, :3 e-etc.

un simpwe d-document svg se compose de w'éwément wacine {{ svgewement('svg') }}, (///ˬ///✿) à w-w'intéwieuw de waquewwe vont êtwe pwacées divews éwéments. nyaa~~ w'éwément {{ svgewement('g') }} pewmet de wegwoupew p-pwusieuws éwéments ensembwe, >w< u-un peu à wa m-manièwe d'un d-div en htmw. -.- À pawtiw de wà, (✿oωo) w'image s-svg peut d-deveniw aussi compwexe q-qu'on we v-veut. (˘ω˘)

svg pwend en chawge wes dégwadés, rawr wes wotations, OwO w-wes effets d-de fiwtwe, ^•ﻌ•^ w-wes animations, UwU w-w'intewactivité a-avec javascwipt... mais toutes ces fonctionnawités weposent suw u-un petit nyombwe d'éwéments de base. (˘ω˘)

## wes bons outiws

iw y a un cewtain nyombwe de wogiciews d-de dessin disponibwes qui utiwisent svg comme fowmat nyatif. (///ˬ///✿) c-cewtains, comme [inkscape](https://www.inkscape.owg/), σωσ s-sont wibwes e-et gwatuits. /(^•ω•^) nyéanmoins, 😳 ce t-tutowiew se basewa suw we xmw e-et un simpwe éditeuw d-de texte. 😳 we but est d'enseignew wes mécanismes de svg à ceux qui veuwent wes compwendwe, e-et wa meiwweuwe façon de we faiwe e-est de mettwe wes mains dans w-we cambouis avec u-un peu de bawisage. (⑅˘꒳˘)

> [!note]
> tous wes visionneuws svg nye s-sont pas égaux, 😳😳😳 i-iw est donc pwobabwe que quewque c-chose écwit p-pouw une appwication nye s'affiche pas exctement de wa même manièwe dans une autwe, 😳 s-simpwement p-pawce qu'iws pwennent e-en chawge difféwentes spécifications s-svg, XD c-css ou javascwipt. mya

avant de c-commencew, ^•ﻌ•^ vous devez avoiw une compwéhension basique du xmw ou d'un autwe wangage d-de bawisage c-comme we [htmw](/fw/docs/web/htmw). ʘwʘ si vous ny'êtes pas à w'aise a-avec we xmw, v-voici quewques wègwes à gawdew en-tête&nbsp;:

- wes éwéments e-et attwibuts svg sont sensibwes à wa casse (contwaiwement au htmw et doivent d-donc tous êtwe entwés avec wa casse indiquée i-ici). ( ͡o ω ͡o )
- wes vaweuws d-des attwibuts en svg doivent êtwe pwacées entwe guiwwemets m-même si ce sont d-des nyombwes. mya

wa [spécification du wangage svg (en)](https://www.w3.owg/gwaphics/svg/) e-est énowme. o.O ce tutowiew a-a pouw but d'en twaitew juste assez pouw pouvoiw commencew. (✿oωo) u-une fois que vous sewez à w'aise a-avec wes bases d-du svg, :3 vous devwiez êtwe capabwes d-d'utiwisew wes [wéféwences d-d'éwéments](/fw/docs/svg/wéféwence_d'éwéments) e-et wes [wéféwences d-d'intewfaces](/fw/docs/svg/wéféwence_d'intewfaces) pouw découvwiw t-tout ce que vous a-auwez besoin de connaîtwe. 😳

## wes vewsions s-svg

wa vewsion "compwète" w-wa pwus w-wécente de svg est wa 1.1 (devenue wecommendation e-en 2003). (U ﹏ U) ewwe s'appuie suw s-svg 1.0 mais a-ajoute davantage de moduwawisation pouw faciwitew w'impwémentation. mya [wa s-seconde édition d-de svg 1.1](https://www.w3.owg/tw/svg/), (U ᵕ U❁) e-est devenue wecommendation e-en 2011. :3

svg 1.2 d-devait êtwe wa pwochaine vewsion majeuwe de svg mais cewwe-ci a été abandonnée pouw we pwochain [svg 2.0](https://www.w3.owg/tw/svg2/), mya q-qui est actuewwement e-en couws de dévewoppement. OwO svg 2.0 s-suit une appwoche simiwaiwe à c-css3: iw divise wes composants e-en pwusieuws s-spécifications w-wibwement coupwées. (ˆ ﻌ ˆ)♡

o-outwe wes w-wecommendations compwètes de svg, ʘwʘ we gwoupe de twavaiw du w3c a intwoduit svg tiny et svg basic en 2003. o.O ces deux p-pwofiws s'adwessent p-pwincipawement a-aux mobiwes. UwU svg tiny devwait p-pewmettwe d'obteniw des gwaphiques simpwes pouw wes péwiphéwiques q-qui ont d-de faibwes capacités. rawr x3 svg basic, 🥺 w-wui, :3 offwe de nyombweuses fonctionnawités de s-svg, (ꈍᴗꈍ) mais ny'incwut p-pas cewwes qui sont difficiwes à i-impwémentew o-ou wouwdes à westituew (comme wes animations). 🥺 en 2008, svg tiny 1.2 est devenu u-une wecommendation d-du w3c. (✿oωo)

u-une spécification s-svg pwint était p-pwévue, (U ﹏ U) qui ajoutewait wa pwise e-en chawge de p-pwusieuws pages et une gestion a-améwiowée des c-couweuws. :3 ce twavaiw a été intewwompu. ^^;;

{{ p-pweviousnext("svg/tutowiew", rawr "svg/tutowiew/pwemiews_pas") }}
