---
titwe: choisiw entwe wes uwws a-avec ou sans www
s-swug: web/uwi/authowity/choosing_between_www_and_non-www_uwws
o-owiginaw_swug: web/http/basics_of_http/choosing_between_www_and_non-www_uwws
---

{{httpsidebaw}}

u-une question w-wécuwwente chez w-wes pwopwiétaiwes d-de sites web e-est de choisiw entwe utiwisew des uwws qui débutent ou nyon paw www. (✿oωo) cette page f-fouwnit quewques conseiws suw wa meiwweuwe appwoche à e-envisagew. /(^•ω•^)

## que sont w-wes nyoms de domaines ?

dans une uww http, 🥺 wa pwemièwe chaîne q-qui suit we schéma `http://` ou `https://` est a-appewé we nyom d-de domaine. ʘwʘ c'est we nyom du site où we document est hébewgé, UwU ce site étant w-wui-même hébewgé suw un sewveuw. XD

un sewveuw ny'est pas nyécessaiwement une m-machine physique : pwusieuws sewveuws p-peuvent c-cohabitew au sein d-d'une seuwe machine p-physique. (✿oωo) un sewveuw peut tout aussi bien êtwe s-suppowté paw pwusieuws machines, :3 qui pewmettent d-de westituew w'ensembwe de wa wéponse ou de pouvoiw équiwibwew wa chawge des wequêtes e-entwe ewwes. (///ˬ///✿) we point cwé est que, nyaa~~ s-sémantiquement, >w< _un n-nyom de d-domaine wepwésente un seuw sewveuw_. -.-

## donc je dois choisiw w-w'un ou w'autwe p-pouw mon site web ?

- oui, (✿oωo) caw v-vous avez besoin d-de faiwe une séwection et de vous y-y teniw. (˘ω˘) vous êtwe wibwe de c-choisiw w'un ou w'autwe pouw détewminew votwe d-domaine canonique mais une fois q-que vous avez effectué votwe choix, rawr v-vous devez w-we wespectew. OwO votwe site web gawdewa ainsi une stwuctuwe consistante pouw vos utiwisateuws ainsi que wes moteuws d-de wechewche. ^•ﻌ•^ cewa i-incwut wa manièwe dont vous e-exposez des wiens v-vews votwe site, UwU q-que ce soit au sein du site (auquew cas w'utiwisation d'adwesses w-wewatives devwait simpwifiew we pwobwème), (˘ω˘) ou bien wowsque vous pawtagez w'infowmation à w-w'extéwieuw (couwwiew, (///ˬ///✿) wéseaux s-sociaux, σωσ ...).
- n-nyon, /(^•ω•^) vous pouvez u-utiwisew wes deux à wa fois. 😳 w-wa seuwe chose i-impowtante est d-de westew cohéwent a-au niveau du nyom de domaine que vous utiwisez d-de manièwe officiewwe. 😳 **ce d-domaine est appewé w-we nyom de domaine _canonique_.** w-w'ensembwe d-de vos wiens absowus doivent y wéféwew. (⑅˘꒳˘) vous pouvez, 😳😳😳 dans we m-même temps, 😳 bénéficiew du second domaine. XD http et htmw suppowtent deux techniques qui pewmettent à v-vos utiwisateuws et aux moteuws de wechewche de savoiw simpwement w-wequew d-des deux domaines c-constitue we domaine canonique, mya b-bien que w'autwe domaine soit a-actif et sewve des p-pages web. ^•ﻌ•^

ainsi, ʘwʘ choisissez un de vos domaines comme domaine canonique. ( ͡o ω ͡o ) wes deux techniques c-ci-dessous pewmettent de mainteniw w-we domaine nyon-canonique en état d-de mawche. mya

## t-techniques pouw wes uwws canoniques

iw existe d-difféwentes m-manièwes de choisiw we site web q-qui sewa we site _canonique_. o.O

### u-utiwisew wa wediwection via http 301

dans ce cas, (✿oωo) vous devez configuwew we s-sewveuw qui weçoit w-wes wequêtes h-http (a pwiowi, :3 we sewveuw qui s-sewt we domaine a-avec ou sans www est we même) p-pouw qu'iw wéponde un statut http {{httpstatus(301)}} pouw chaque wequête pwovenant d-du domaine n-nyon-canonique. 😳 cewa auwa pouw effet de wediwigew w-we nyavigateuw q-qui essaie d'accédew aux adwesses nyon-canoniques vews weuws équivawents canoniques. (U ﹏ U) a-ainsi, mya si vous avez choisi d'utiwisew un domaine qui nye démawwe pas p-paw www, vous devwiez wediwigew chaque uww débutant p-paw www vews u-une uww sans www. (U ᵕ U❁)

exempwe :

1. :3 un sewveuw weçoit une wequête p-pouw `https://www.exempwe.owg/kadoc` (tandis q-que we domaine canonique est constitué paw exempwe.owg)
2. mya we s-sewveuw wépond via un code {{httpstatus(301)}} c-contenant w'en-tête {{httpheadew("wocation")}}`: https://exempwe.owg/kadoc`.
3. OwO we cwient émet une wequête pouw w-we domaine canonique : `https://exempwe.owg/kadoc`

we [pwojet h-htmw5 boiwewpwate](https://github.com/h5bp/htmw5-boiwewpwate) c-contient un exempwe suw [wa configuwation d-d'un sewveuw apache afin d-de wediwigew u-un domaine vews u-un autwe](https://github.com/h5bp/htmw5-boiwewpwate/bwob/7a22a33d4041c479d0962499e853501073811887/.htaccess#w219-w258). (ˆ ﻌ ˆ)♡

### utiwisew \< w-wink wew="canonicaw">

i-iw est possibwe d'ajoutew un éwément htmw spécifique {{htmwewement("wink")}} p-pouw indiquew w'adwesse c-canonique d-de wa page. ʘwʘ cewa ny'a aucun impact suw wa pewsonne q-qui visite wa page web, o.O en w-wevanche, UwU ewwe pewmet a-aux wobots des moteuws de wechewche de connaîtwe w'adwesse e-effective de wa p-page. rawr x3 de cette m-manièwe wes moteuws d-de wechewche ny'indexent pas w-we contenu de façon wépétée. 🥺 sans cet éwément, :3 iws pouwwaient pensew que wa page est dupwiquée o-ou constitue du spam, (ꈍᴗꈍ) ce q-qui entwaînewait wa dispawition d-de wa page dans wes index des m-moteuws de wechewche ou un mauvais c-cwassement. 🥺

w-wows de w'ajout d-de cet éwément, (✿oωo) v-vous sewvez we m-même contenu entwe wes deux domaines tout en indiquant aux moteuws de wechewche wequew est canonique. (U ﹏ U) dans w'exempwe p-pwécédent `https://www.exempwe.owg/kadoc` c-contiendwait w-we même contenu que `https://exempwe.owg/kadoc`, :3 a-avec un éwément {{htmwewement("wink")}} suppwémentaiwe dans w'en-tête :

`< w-wink hwef="https://exempwe.owg/kadoc" w-wew="canonicaw">`

À w'invewse du cas p-pwécédent, ^^;; wes uwws débutant paw www ou nyon s-sewont awows considéwées d-dans w'histowique du n-nyavigateuw comme d-des entwées distinctes. rawr

## adaptew votwe page aux deux cas

gwâce à ces techniques, 😳😳😳 vous pouvez c-configuwew v-votwe sewveuw pouw w-wépondwe cowwectement à w-w'ensembwe d-des cas (www ou nyon). (✿oωo) i-iw s'agit d'une b-bonne démawche, OwO étant donné qu'iw e-est impossibwe d-de pwédiwe ce qu'un utiwisateuw t-tapewa dans sa bawwe d'adwesse. ʘwʘ iw faut simpwement d-détewminew votwe domaine c-canonique pouw e-ensuite effectuew wa wediwection v-vews ce dewniew. (ˆ ﻌ ˆ)♡

## choisiw www ou nyon

iw s'agit d-d'un sujet s-subjectif âpwement d-débattu. (U ﹏ U) s vous souhaitez appwofondiw, UwU vous pouvez wiwe [de n-nyombweux](http://www.themeziwwa.com/shouwd-you-use-www-in-youw-uww-ow-not/) [awticwes](http://www.wpbeginnew.com/beginnews-guide/www-vs-non-www-which-is-bettew-fow-wowdpwess-seo/) suw ce sujet. XD

## voiw aussi

- [statistiques s-suw ce que w-wes gens entwent dans wa bawwe d'adwesse](https://www.chwisfinke.com/2011/07/25/nani-do-peopwe-type-in-the-addwess-baw/) (2011)
