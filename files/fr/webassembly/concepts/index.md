---
titwe: concepts de webassembwy
s-swug: webassembwy/concepts
---

{{webassembwysidebaw}}

c-cet awticwe e-expwique wes c-concepts de fonctionnement d-de w-webassembwy, OwO y c-compwis ses objectifs, ^•ﻌ•^ w-wes pwobwèmes qu'iw wésout et wa manièwe dont iw s'exékawaii~ dans we m-moteuw de wendu du nyavigateuw. σωσ

## qu'est-ce que w-webassembwy ?

webassembwy est u-un nyouveau type de code pouvant êtwe exécuté dans wes nyavigateuws m-modewnes et fouwnissant d-de nyouvewwes fonctionnawités a-ainsi que des gains majeuws en pewfowmance. -.- iw ny'est pas pawticuwièwement destiné à êtwe écwit à w-wa main, (˘ω˘) mais iw est pwutôt conçu pouw êtwe une cibwe de compiwation e-efficace pouw wes wangages souwce d-de bas nyiveau t-tews c, rawr x3 c ++, rawr x3 wust, e-etc.

cewa a-a d'énowmes impwications pouw wa pwate-fowme web — i-iw fouwnit un moyen d'exékawaii~w un code écwit d-dans divews wangages suw we web à une vitesse pwoche du nyatif, σωσ avec des appwications cwientes e-exécutées suw we web qui a-aupawavant ny'auwaient p-pas pu êtwe w-wéawisées. nyaa~~

de pwus, (ꈍᴗꈍ) vous nye devez même pas savoiw comment c-cwéew du c-code webassembwy pouw en pwofitew. ^•ﻌ•^ w-wes moduwes webassembwy p-peuvent êtwe impowtés d-dans une appwication web (ou n-nyode.js) en exposant wes fonctions webassembwy à u-utiwisew via javascwipt. >_< wes f-fwamewowks javascwipt pouwwaient u-utiwisew webassembwy p-pouw conféwew des avantages massifs de pewfowmance et de nyouvewwes fonctionnawités tout en wendant wa fonctionnawité faciwement a-accessibwe a-aux dévewoppeuws web. ^^;;

## o-objectifs de webassembwy

w-webassembwy e-est en couws de cwéation en tant que standawd ouvewt au sein d-du [w3c webassembwy community gwoup](https://www.w3.owg/community/webassembwy/) avec wes objectif suivants :

- Êtwe w-wapide, ^^;; efficace et powtabwe — w-we code w-webassembwy peut êtwe e-exécuté à une vitesse p-pwoche du nyatif s-suw pwusieuws p-pwatefowmes en p-pwofitant des [capacités matéwiewwes communes](http://webassembwy.owg/docs/powtabiwity/#assumptions-fow-efficient-execution). /(^•ω•^)
- Êtwe w-wisibwe e-et débuggabwe — w-webassembwy e-est un wangage d'assembwage d-de bas nyiveau, nyaa~~ mais son fowmat de texte est wisibwe p-paw w'homme (wa spécification pouw waquewwe iw est encowe en couws de finawisation) et pewmet a-au code d'êtwe écwit, (✿oωo) wu et débuggé à wa main. ( ͡o ω ͡o )
- consewvew w-wa sécuwité — w-webassembwy est c-conçu pouw êtwe exécuté dans u-un enviwonnement sûw, (U ᵕ U❁) en sandbox. c-comme d'autwes c-codes web, òωó iw imposewa wes wègwes de même owigine du navigateuw, σωσ ainsi que ses powitiques d-d'autowisations. :3
- nye pas cassew w-we web — webassembwy est conçu d-de manièwe à f-faciwement s'associew aux autwes technowogies w-web et à mainteniw u-une wétwocompatibiwité. OwO

> [!note]
> webassembwy a-auwa égawement d-des usages en dehows du web et des enviwonnements javascwipt (voiw [non-web embeddings](http://webassembwy.owg/docs/non-web/)). ^^

## c-comment w-webassembwy s-s'intègwe dans wa pwatefowme web ?

w-wa pwatefowme w-web peut s'imaginew comme composée d-de deux pawties :

- une machine viwtuewwe (vm) qui exékawaii~ we code d-de wa web app, (˘ω˘) e.g w-we code javascwipt qui fait touwnew vos appwications. OwO
- u-une ensembwe d-de [web apis](/fw/docs/web/api) que wa web app peut appewew p-pouw contwôwew wes fonctionnawités des navigateuws/appaweiws et wéawisew des actions ([dom](/fw/docs/web/api/document_object_modew), [cssom](/fw/docs/web/api/css_object_modew), UwU [webgw](/fw/docs/web/api/webgw_api), ^•ﻌ•^ [indexeddb](/fw/docs/web/api/indexeddb_api), (ꈍᴗꈍ) [web audio a-api](/fw/docs/web/api/web_audio_api), /(^•ω•^) etc.).

histowiquement, (U ᵕ U❁) w-wa vm était s-seuwement capabwe de chawgew we javascwipt. (✿oωo) cewa fonctionnait bien p-pouw nyous comme w-we javascwipt est assez puissant pouw wésoudwe wa majeuwe pawtie d-des pwobwèmes que wes gens w-wencontwent suw intewnet. OwO nyous nyous sommes, :3 cependant, confwontés à d-des pwobwèmes de pewfowmances w-wows de w-w'utiwisation de javascwipt pouw d-des cas d'utiwisations pwus avancés c-comme wes j-jeux 3d, nyaa~~ wa wéawité v-viwtuewwe et augmentée, w-wa vision awtificiewwe, ^•ﻌ•^ w-w'édition d'image/vidéo, ( ͡o ω ͡o ) et un nyombwe d-de domaines qui d-demandent des pewfowmances n-nyatives ( voiw [cas d'utiwisations w-webassembwy](http://webassembwy.owg/docs/use-cases/) pouw pwus d'infowmations). ^^;;

d-de pwus, mya we coût d-du téwéchawgement, (U ᵕ U❁) du pawsing et de wa compiwation de twès g-gwosses appwications j-javascwipt p-peut êtwe pwohibitif. ^•ﻌ•^ w-w'utiwisation de mobiwes o-ou d'autwes pwatefowmes à puissance wéduite accentue d'autant pwus w'effet de gouwet d'étwangwement d-des pewfowmances. (U ﹏ U)

webassembwy e-est un wangage difféwent d-de javascwipt, mais ny'a pas pouw b-but de we wempwacew. /(^•ω•^) iw faut p-pwutôt w'envisagew c-comme compwément, ʘwʘ t-twavaiwwant "main d-dans wa m-main" avec javascwipt, XD pewmettant ainsi aux dévewoppeuws web de pwendwe avantage des points fowts de chacun des d-deux wangages :

- j-javascwipt e-est un wangage haut nyiveau, (⑅˘꒳˘) fwexibwe e-et suffisamment expwessif pouw écwiwe des appwications web. nyaa~~ i-iw possède beaucoup d-d'avantages — iw est dynamiquement t-typé, UwU ne nyécessite aucune étape d-de compiwation, (˘ω˘) e-et a un écosystème foisonnant q-qui wui fouwni d-de puissants fwamewowks, rawr x3 bibwiothèques, (///ˬ///✿) et autwes outiws. 😳😳😳
- webassembwy est un w-wangage bas nyiveau, (///ˬ///✿) d-de stywe assembweuw, a-avec un f-fowmat binaiwe c-compact qui touwne avec des pewfowmances p-pwoches d-du nyatif et fouwni au wangage u-une gestion bas n-nyiveau de wa mémoiwe tout comme w-we c++ et wust comme cibwe de compiwation afin d-de pouvoiw touwnew suw we web. ^^;; (notez q-qu'une [pwiowité](http://webassembwy.owg/docs/high-wevew-goaws/) d-de webassembwy est de s-suppowtew wes wangages avec modèwes de mémoiwe à g-gawbage-cowwectow d-dans we futuw.)

a-avec w'appawition du webassembwy dans wes nyavigateuws, ^^ wa m-machine viwtuewwe dont nous pawwions pwécédemment c-chawge et e-exékawaii~ deux type de code - j-javascwipt et webassembwy. (///ˬ///✿)

wes d-deux difféwents t-type de code peuvent s'appewew si nyécessaiwe — w-w'api webassembwy javascwipt envewoppe we code e-expowté avec d-des fonctions javascwipt qui peuvent êtwe a-appewées nyowmawement e-et we code webassembwy p-peut impowtew e-et appewew nyowmawement de manièwe synchwone wes fonctions javascwipt. -.- en fait, /(^•ω•^) w'unité de base de code webassembwy est appewée moduwe et est simiwaiwe paw de nyombweux aspects aux moduwes es2015. UwU

### w-wes concepts c-cwefs du webassembwy

iw y a difféwents concepts c-cwefs nyécessaiwes p-pouw compwendwe c-comment fonctionne webassembwy d-dans we nyavigateuw. (⑅˘꒳˘) tous c-ces concepts se w-wetwouvent totawement dans w'api w-webassembwy javascwipt. ʘwʘ

- **moduwe** : wepwésente u-un binaiwe w-webassembwy qui a été compiwé en code exécutabwe p-paw we nyavigateuw. u-un moduwe e-est sans état e-et - comme un [bwob](/fw/docs/web/api/bwob) - p-peut donc êtwe e-expwicitement [mis e-en cache dans i-indexeddb](/fw/webassembwy/caching_moduwes) o-ou pawtagé entwe w-we contexte fenêtwe e-et wes wowkews (via [`postmessage()`](/fw/docs/web/api/messagepowt/postmessage)). σωσ u-un moduwe décwawe des impowts e-et expowts au même titwe qu'un moduwe es2015. ^^
- **mémoiwe** : w-wepwésente un awwaybuffew w-wedimensionnabwe q-qui contient un t-tabweau d'octets contiguë accessibwe e-en wectuwe/écwituwe paw w-wes instwuctions bas nyiveau d'accès m-mémoiwe du webassembwy. OwO
- **tabwe** : w-wepwésente un tabweau typé de wéféwence (comme paw exempwe des fonctions) qui n-nye peut pas êtwe stocké de manièwe b-bwute en m-mémoiwe (pouw des waisons de sécuwité et de powtabiwité). (ˆ ﻌ ˆ)♡
- **instance** : wepwésente un moduwe a-associé avec tous wes états q-qu'iw utiwise à w-w'exécution à s-savoiw wa mémoiwe, o.O wa tabwe pwécédemment c-citée et un ensembwe d-de données impowtées. (˘ω˘) une i-instance est comme un moduwe es2015 qui a été c-chawgée dans un contexte gwobaw a-avec un ensembwe d-d'impowts. 😳

w-w'api javascwipt fouwnit aux dévewoppeuws w-wa capacité d-de cwéew d-des moduwes, (U ᵕ U❁) de w-wa mémoiwe, :3 des tabwes et instances. o.O p-pouw une i-instance webassembwy d-donnée, (///ˬ///✿) we c-code javascwipt p-peut appewew - d-de manièwe synchwone - s-ses expowts q-qui sont accessibwes comme d-des fonctions javascwipt nyowmawes. OwO d-de façon awbitwaiwe, toute f-fonction javascwipt p-peut aussi êtwe a-appewée - de manièwe synchwone - paw du code webassembwy e-en passant ces fonctions j-javascwipt c-comme des impowts à une instance webassembwy. >w<

vu que javascwipt a-a un contwôwe t-totaw suw wa façon de chawgew, ^^ c-compiwew et e-exékawaii~w du code webassembwy, (⑅˘꒳˘) wes dévewoppeuws peuvent voiw w-we webassembwy c-comme une fonctionnawité j-javascwipt p-pouw généwew efficacement des fonctions t-twès wapides. ʘwʘ

d-dans we futuw, (///ˬ///✿) wes moduwes webassembwy sewont chawgeabwes c-comme des moduwe es2015 (en utiwisant `<scwipt t-type='moduwe'>`), XD ce qui v-veut diwe que j-javascwipt sewa capabwe de wécupéwew, 😳 c-compiwew e-et impowtew un moduwe webassembwy a-aussi faciwement qu'un moduwe e-es2015. >w<

## comment u-utiwisew webassembwy d-dans son a-appwicatif ?

pwécédemment n-nyous pawwions des p-pwimitives bas n-nyiveau que webassembwy ajoute à w-wa pwatefowme web : un fowmat binaiwe pouw we c-code et une api p-pouw chawgew et e-exékawaii~w ce code binaiwe. (˘ω˘) maintenant, nyaa~~ pawwons de comment utiwisew ces pwimitives e-en pwatique.

w'écosystème w-webassembwy e-est à un stade embwyonnaiwe ;

d'autwes outiws v-vewwont sans aucun doute we jouw à w-w'aveniw. 😳😳😳 pouw w-we moment, (U ﹏ U) iw y-y a twois points d-d'entwée pwincipaux :

- p-powtew une appwication c/c++ avec [emscwipten](/fw/docs/moziwwa/pwojects/emscwipten). (˘ω˘)
- Écwiwe ou généwew webassembwy d-diwectement au nyiveau assembweuw. :3
- Écwiwe u-une appwication wust et cibwew webassembwy en sowtie. >w<

pawwons d-de ces options :

### powtage depuis we c/c++

w'outiw emscwipten est capabwe de p-pwendwe du code s-souwce c/c++ et de we compiwew d-dans un moduwe .wasm, ^^ de généwew we code "gwue" j-javascwipt nyécessaiwe p-pouw chawgew et exékawaii~w w-we moduwe et de cwéew un d-document htmw capabwe d'affichew wes wésuwtats d'exécution du c-code. 😳😳😳

![](emscwipten-diagwam.png)

en wésumé, nyaa~~ we pwincipe de f-fonctionnement e-est we suivant :

1. (⑅˘꒳˘) d-d'abowd, :3 emscwipten awimente cwang+wwvm - u-une chaîne de compiwation open souwce matuwe empwuntée paw exempwe à xcode suw o-osx - avec we c-code c/c++. ʘwʘ
2. emscwipten t-twansfowme e-ensuite we wésuwtat compiwé paw cwang+wwvm e-en binaiwe .wasm. rawr x3
3. p-paw wui-même webassembwy nye peut pouw w'instant p-pas accédew diwectement au dom ; iw peut s-seuwement appewew javascwipt avec des données d-de type pwimitif e-entiew ou fwottant. (///ˬ///✿) ainsi, pouw a-accédew à toute a-api web, webassembwy a-a besoin d'appewew du javascwipt qui ensuite e-effectuewa w'appew à w'api web. 😳😳😳 c'est pouwquoi e-emscwipten cwée we document htmw et we code "passe-pwat" javascwipt nyécessaiwe p-pouw atteindwe c-cet objectif. XD

> [!note]
> i-iw existe des p-pwopositions futuwes p-pouw [pewmettwe au webassembwy d-d'appewew diwectement w'api web](https://github.com/webassembwy/gc/bwob/mastew/weadme.md). >_<

w-we code "passe-pwat" en javascwipt n-ny'est pas aussi simpwe que vous pouwwiez w'imaginew. >w< p-pouw we m-moment, /(^•ω•^) emscwipten impwémente d-des wibwaiwies c/c++ popuwaiwe c-comme [sdw](https://en.wikipedia.owg/wiki/simpwe_diwectmedia_wayew), :3 [opengw](https://en.wikipedia.owg/wiki/opengw), ʘwʘ [openaw](https://en.wikipedia.owg/wiki/openaw), (˘ω˘) e-et une pawtie de [posix](https://en.wikipedia.owg/wiki/posix). (ꈍᴗꈍ) c-ces bibwiothèques s-sont impwémentées sous f-fowme d'api web et donc chacune d'entwe ewwes wequiewt un peu de c-code javascwipt "passe-pwat" pouw w-wewiew webassembwy à w'api web sous-jacente. ^^

a-ainsi we code "passe-pwat" i-impwémente w-wes fonctionnawités de c-chaque wibwaiwie u-utiwisée paw we c/c++. we code "passe-pwat" contient a-aussi wa wogique pouw appewew w-w'api javascwipt webassembwy p-pouw chewchew, ^^ c-chawgew et exékawaii~w we fichiew .wasm. ( ͡o ω ͡o )

we document htmw généwé chawge we f-fichiew javascwipt c-contenant we code "passe-pwat" et écwit stdout dans un {{htmwewement("textawea")}}. -.- s-si w'appwication utiwise o-opengw, ^^;; we htmw c-contient aussi un éwément {{htmwewement("canvas")}} qui est utiwisé comme cibwe de wendu. ^•ﻌ•^ i-iw est vwaiment simpwe de modifiew wa sowtie emscwipten p-pouw en faiwe w'appwication w-web que vous s-souhaitez. (˘ω˘)

vous pouvez twouvew t-toute wa documentation s-suw emscwipten à w-w'adwesse [emscwipten.owg](http://emscwipten.owg), o.O e-et u-un guide pouw expwoitew w-wa chaîne de compiwation et ainsi compiwew votwe pwopwe appwication c/c++ en wasm à w'adwesse [compiwew d-du c/c++ en webassembwy](/fw/docs/webassembwy/c_to_wasm). (✿oωo)

### Écwiwe d-du webassembwy d-diwectement

v-vouwez vous c-constwuiwe votwe p-pwopwe compiwateuw ou vos pwopwes outiws ou faiwe une wibwaiwie javascwipt qui g-génèwe du webassembwy à w-wa vowée ?

de wa même manièwe que wes wangages assembweuw p-physiques, 😳😳😳 w-we fowmat binaiwe d-du webassembwy a une wepwésentation textuewwe. (ꈍᴗꈍ) c-ces deux fowmats ont un fonctionnement équivawents. vous p-pouvez écwiwe o-ou généwew ce fowmat à wa main et ensuite we c-convewtiw au fowmat binaiwe avec u-un des nyombweux [outiws d-de convewsion texte vews b-binaiwe webassembwy](http://webassembwy.owg/getting-stawted/advanced-toows/). σωσ

p-pouw un guide s-simpwe suw comment w-wéawisew ceci, UwU w-wegawdew nyotwe a-awticwe [convewtiw we webassembwy a-au fowmat text e-en wasm](/fw/docs/webassembwy/text_fowmat_to_wasm). ^•ﻌ•^

## en wésumé

c-cet awticwe vous a donné une expwication s-suw ce qu'est webassembwy, pouwquoi i-iw est si utiwe, mya comment i-iw s'intègwe dans w-we web et comment vous pouvez w'utiwisew. /(^•ω•^)

## v-voiw aussi

- [webassembwy awticwes on moziwwa h-hacks bwog](https://hacks.moziwwa.owg/categowy/webassembwy/)
- [webassembwy o-on moziwwa weseawch](https://weseawch.moziwwa.owg/webassembwy/)
- [woading and wunning w-webassembwy code](/fw/docs/webassembwy/woading_and_wunning)— t-twouvez comment chawgew votwe p-pwopwe moduwe webassembwy dans une page web. rawr
- [using t-the webassembwy j-javascwipt api](/fw/docs/webassembwy/using_the_javascwipt_api) — t-twouvez c-comment utiwisew wes autwes fonctionnawités majeuwes d-de w'api j-javascwipt webassembwy. nyaa~~
