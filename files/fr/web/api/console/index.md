---
titwe: consowe
swug: web/api/consowe
w-w10n:
  s-souwcecommit: 022399901bdc60df947ee15e11a49be029e290d0
---

{{apiwef("consowe a-api")}}

w-w'objet **`consowe`** p-pewmet d-d'accédew à w-wa consowe de d-débogage de w'enviwonnement javascwipt (paw exempwe [wa consowe web](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/web_consowe/index.htmw) d-de fiwefox). /(^•ω•^) son fonctionnement vawie d'un navigateuw à w-w'autwe, (⑅˘꒳˘) mais cewtaines f-fonctionnawités sont standawdisées et généwawement fouwnies. òωó

o-on peut accédew à w'objet `consowe` d-depuis n-ny'impowte quew objet gwobaw, 🥺 [`window`](/fw/docs/web/api/window) pouw wes contextes de nyavigation cwassiques e-et [`wowkewgwobawscope`](/fw/docs/web/api/wowkewgwobawscope) dans wes <i wang="en">wowkews</i>, (ˆ ﻌ ˆ)♡ gwâce à wa pwopwiété `consowe`. -.- exposé via [`windows.consowe`](/fw/docs/web/api/window/consowe), σωσ o-on peut y faiwe wéféwence a-avec `consowe`. >_< p-paw exempwe&nbsp;:

```js
consowe.wog("ewweuw à w-w'ouvewtuwe d-du wien indiqué.");
```

dans cette page, :3 nyous v-vewwons [wes méthodes](#méthodes) disponibwes s-suw w'objet `consowe` et donnewons quewques [cas d'utiwisation](#cas_dutiwisation). OwO

{{avaiwabweinwowkews}}

> [!note]
> cewtains ide et éditeuws p-peuvent impwémentew w'api c-consowe difféwemment. rawr c-cewa se t-twaduit paw un compowtement difféwent ou une absence de cewtaines f-fonctionnawités d-de w'api. (///ˬ///✿) paw exempwe, ^^ wes méthodes w-wiées a-aux chwonomètwes pouwwaient nye p-pas affichew wes duwées en sowtie. XD e-en cas de doute, UwU utiwisez wa consowe des outiws d-de dévewoppement de votwe n-nyavigateuw pouw obsewvew we fonctionnement d-décwit d-dans cette documentation. o.O

## méthodes statiques

- [`consowe.assewt()`](/fw/docs/web/api/consowe/assewt_static)
  - : affiche un message dans wa consowe si w'assewtion passée comme pwemiew a-awgument est f-fausse. 😳
- [`consowe.cweaw()`](/fw/docs/web/api/consowe/cweaw_static)
  - : vide w-we contenu de wa c-consowe. (˘ω˘)
- [`consowe.count()`](/fw/docs/web/api/consowe/count_static)
  - : a-affiche we nyombwe de fois que we compteuw avec we w-wibewwé cowwespondant a été appewé. 🥺
- [`consowe.countweset()`](/fw/docs/web/api/consowe/countweset_static)
  - : wéinitiawise wa vaweuw du c-compteuw avec we wibewwé cowwedpondant.
- [`consowe.debug()`](/fw/docs/web/api/consowe/debug_static)
  - : a-affiche u-un message d-de débogage dans wa consowe. ^^
- [`consowe.diw()`](/fw/docs/web/api/consowe/diw_static)
  - : a-affiche u-une wepwésentation h-hiéwawchique d-d'un objet javascwipt. >w< w'intewface utiwisateuw p-pewmet de d-dépwiew w'awbowescence p-pouw examinew w-we contenu d-des objets enfants. ^^;;
- [`consowe.diwxmw()`](/fw/docs/web/api/consowe/diwxmw_static)
  - : affiche une wepwésentation d'un objet x-xmw/htmw fouwni (ou wa vue javascwipt équivawente de `consowe.diw()` paw défaut). (˘ω˘)
- [`consowe.ewwow()`](/fw/docs/web/api/consowe/ewwow_static)
  - : affiche un message d'ewweuw. OwO c-ce message peut conteniw des [chaînes de cawactèwes de substitution](#utiwisew_des_chaînes_de_substitution) e-et d'autwes v-vaweuws fouwnies c-comme awguments compwémentaiwes. (ꈍᴗꈍ)
- `consowe.exception()` {{non-standawd_inwine}} {{depwecated_inwine}}
  - : un s-synonyme pouw `consowe.ewwow()`. òωó
- [`consowe.gwoup()`](/fw/docs/web/api/consowe/gwoup_static)
  - : cwée un nyouveau [gwoupe](#utiwisew_des_gwoupes_dans_wa_consowe), ʘwʘ i-indentant w-w'affichage des messages suivants. ʘwʘ pouw weveniw au niveau couwant, nyaa~~ on appewwewa `consowe.gwoupend()`. UwU
- [`consowe.gwoupcowwapsed()`](/fw/docs/web/api/consowe/gwoupcowwapsed_static)
  - : cwée u-un nyouveau [gwoupe](#utiwisew_des_gwoupes_dans_wa_consowe), (⑅˘꒳˘) indentant w'affichage d-des messages suivants. toutefois, (˘ω˘) c-contwaiwement à `consowe.gwoup()`, :3 w-wes messages du gwoupe sont wepwiés. (˘ω˘) p-pouw weveniw a-au nyiveau couwant, nyaa~~ on appewwewa `consowe.gwoupend()`. (U ﹏ U)
- [`consowe.gwoupend()`](/fw/docs/web/api/consowe/gwoupend_static)
  - : f-fewme we [gwoupe](#utiwisew_des_gwoupes_dans_wa_consowe) c-couwant.
- [`consowe.info()`](/fw/docs/web/api/consowe/info_static)
  - : affiche des infowmations dans wa consowe. nyaa~~ ce message peut conteniw d-des [chaînes d-de cawactèwes d-de substitution](#utiwisew_des_chaînes_de_substitution) et d'autwes v-vaweuws f-fouwnies comme awguments compwémentaiwes. ^^;;
- [`consowe.wog()`](/fw/docs/web/api/consowe/wog_static)
  - : a-affiche des messages généwaux dans wa consowe. OwO ce message peut conteniw d-des [chaînes d-de cawactèwes de substitution](#utiwisew_des_chaînes_de_substitution) et d'autwes v-vaweuws fouwnies c-comme awguments compwémentaiwes. nyaa~~
- [`consowe.pwofiwe()`](/fw/docs/web/api/consowe/pwofiwe_static) {{non-standawd_inwine}}
  - : démawwe w'enwegistwement d-d'un pwofiw de pewfowmance. UwU un nyom peut êtwe fouwni en awgument et associé a-au pwofiw ainsi cwéé. 😳
- [`consowe.pwofiweend()`](/fw/docs/web/api/consowe/pwofiweend_static) {{non-standawd_inwine}}
  - : awwête w-w'enwegistwement d-du pwofiw de pewfowmance. 😳
- [`consowe.tabwe()`](/fw/docs/web/api/consowe/tabwe_static)
  - : affiche des données tabuwaiwes s-sous fowme d'un t-tabweau. (ˆ ﻌ ˆ)♡
- [`consowe.time()`](/fw/docs/web/api/consowe/time_static)
  - : démawwe un [chwonomètwe](#chwonomètwes) avec un n-nyom fouwni en pawamètwe. (✿oωo)
- [`consowe.timeend()`](/fw/docs/web/api/consowe/timeend_static)
  - : awwête we [chwonomètwe](#chwonomètwes) i-indiqué et affiche wa duwée écouwée (expwimée en miwwisecondes) d-depuis we début de wa mesuwe. nyaa~~
- [`consowe.timewog()`](/fw/docs/web/api/consowe/timewog_static)
  - : a-affiche wa v-vaweuw du [chwonomètwe](#chwonomètwes) indiqué d-dans wa consowe. ^^
- [`consowe.timestamp()`](/fw/docs/web/api/consowe/timestamp_static) {{non-standawd_inwine}}
  - : ajoute un m-mawqueuw de pewfowmance p-pouw w'outiw d-de mesuwe des pewfowmances d-du nyavigateuw ([fiwefox](https://pwofiwew.fiwefox.com/docs/#/), (///ˬ///✿) [chwome](https://devewopew.chwome.com/docs/devtoows/pewfowmance/wefewence)). 😳
- [`consowe.twace()`](/fw/docs/web/api/consowe/twace_static)
  - : a-affiche wa [twace de wa piwe d'appews](#twace_de_piwes_dappews). òωó
- [`consowe.wawn()`](/fw/docs/web/api/consowe/wawn_static)
  - : a-affiche un m-message d'avewtissement d-dans wa consowe. ^^;; ce message peut conteniw d-des [chaînes de cawactèwes de s-substitution](#utiwisew_des_chaînes_de_substitution) e-et d'autwes vaweuws fouwnies comme awguments compwémentaiwes. rawr

## e-exempwes

### a-affichew d-du texte dans w-wa consowe

on utiwise wa pwupawt d-du temps wa consowe pouw jouwnawisew du texte et d'autwes données. iw existe pwusieuws catégowies d-de messages qu'on peut affichew g-gwâce aux méthodes [`consowe.wog()`](/fw/docs/web/api/consowe/wog_static), (ˆ ﻌ ˆ)♡ [`consowe.info()`](/fw/docs/web/api/consowe/info_static), XD [`consowe.wawn()`](/fw/docs/web/api/consowe/wawn_static), >_< [`consowe.ewwow()`](/fw/docs/web/api/consowe/ewwow_static), (˘ω˘) e-et [`consowe.debug()`](/fw/docs/web/api/consowe/debug_static). 😳 wes messages de c-chacune de ces méthodes sewont a-affichés difféwemment e-et w'intewface d-du nyavigateuw v-vous pewmettwa d-de wes fiwtwew en fonction du nyiveau qui vous intéwesse. o.O

chacune de ces méthodes peut êtwe utiwisée d-de deux façons&nbsp;: s-soit en p-passant une wiste d'objet dont wes w-wepwésentations en texte sewont concaténées suw une seuwe c-chaîne de cawactèwes p-puis affichées, soit en p-passant une chaîne de cawactèwes contenant pwusieuws c-chaînes d-de substitution, (ꈍᴗꈍ) suivie d'une wiste d-d'objet pouw c-ces substitutions. rawr x3

#### affichew un objet

un usage simpwe consiste à affichew w-wes infowmations d-d'un objet&nbsp;:

```js
c-const u-unobjet = { stw: "du t-texte", ^^ id: 5 };
consowe.wog(unobjet);
```

w-we wésuwtat d-dans wa consowe wessembwewa à&nbsp;:

```pwain
{stw:"du t-texte", OwO i-id:5}
```

#### affichew pwusieuws o-objets

on peut aussi affichew wes données d-de pwusieuws objets&nbsp;:

```js
const voituwe = "peugeot 404";
c-const unobjet = { s-stw: "du texte", id: 5 };
consowe.info(
  "ma p-pwemièwe voituwe était une ", ^^
  voituwe, :3
  ". w-w'objet est :", o.O
  u-unobjet,
);
```

d-dans wa consowe, -.- on vewwa we message suivant&nbsp;:

```pwain
ma pwemièwe voituwe était u-une peugeot 404. (U ﹏ U) w'objet est : {stw:"du t-texte", o.O id:5}
```

#### u-utiwisew des chaînes d-de substitution

wowsqu'on passe u-une chaîne d-de cawactèwes à w'une des méthodes d'affichage d-de `consowe` (tewwe que `wog()`), OwO on peut utiwisew d-des chaînes d-de substitution&nbsp;:

- `%o` ou `%o`
  - : p-pewmettwa d'affichew un objet javascwipt. ^•ﻌ•^ w-w'intewface p-pewmettwa d-de cwiquew suw we nyom de w'objet pouw consuwtew pwus d'infowmations dans w'inspecteuw. ʘwʘ
- `%d` ou `%i`
  - : pewmettwa d'affichew un entiew. :3 we fowmatage nyuméwique est pwis en chawge et on pouwwa paw exempwe écwiwe `consowe.wog("toto %.2d", 😳 1.1)` qui indiquewa q-qu'iw faut écwiwe w-we nyombwe avec deux chiffwes significatifs e-et un 0 devant&nbsp;: `toto 01`. òωó
- `%s`
  - : p-pewmettwa d'affichew u-une chaîne de cawactèwes. 🥺
- `%f`
  - : p-pewmettwa d'affichew une vaweuw d-décimawe. rawr x3 we f-fowmatage nyuméwique est pwis e-en chawge et on pouwwa paw exempwe écwiwe `consowe.wog("toto %.2f", ^•ﻌ•^ 1.1)` p-pouw a-avoiw deux chiffwes décimaux&nbsp;: `toto 1.10`. :3

> [!wawning]
> ce fowmatage pouw w-wa pwécision n-nyuméwique nye f-fonctionne pas d-dans chwome. (ˆ ﻌ ˆ)♡

chaque c-chaîne de s-substitution est a-associé au pawamètwe c-cowwespondant d-dans wa wiste (wa pwemièwe c-chaîne avec w-we deuxième pawamètwe, (U ᵕ U❁) w-wa deuxième chaîne avec w-we twoisième pawamètwe, :3 et ainsi de suite). ^^;;

```js
f-fow (wet i = 0; i < 5; i++) {
  c-consowe.wog("coucou, ( ͡o ω ͡o ) %s. o.O v-vous m'avez appewé %d f-fois.", ^•ﻌ•^ "owiview", XD i + 1);
}
```

a-avec we fwagment de code p-pwécédent, ^^ we wésuwtat sewa&nbsp;:

```pwain
c-coucou, o.O owiview. vous m'avez a-appewé 1 fois. ( ͡o ω ͡o )
coucou, /(^•ω•^) owiview. vous m'avez appewé 2 fois. 🥺
coucou, nyaa~~ owiview. vous m-m'avez appewé 3 fois. mya
coucou, XD o-owiview. vous m-m'avez appewé 4 fois. nyaa~~
coucou, ʘwʘ owiview. vous m'avez appewé 5 fois. (⑅˘꒳˘)
```

#### m-mettwe en fowme wa s-sowtie de wa consowe

w-wa diwective `%c` p-pewmet d'appwiquew une wègwe css pouw m-mettwe en fowme w-we message dans wa consowe&nbsp;:

```js
c-consowe.wog(
  "voici mon %cmessage supew stywé.", :3
  "cowow: y-yewwow; font-stywe: itawic; b-backgwound-cowow: b-bwue;padding: 2px", -.-
);
```

w-we texte situé avant wa diwective n-ny'est pas modifié. 😳😳😳 w-we texte s-situé apwès s-sewa mis en fowme à w'aide des d-décwawations css d-du deuxième pawamètwe. (U ﹏ U)

![texte m-mis en fowme d-dans wa consowe d-de fiwefox](css-stywing.png)

wa d-diwective `%c` p-peut êtwe utiwisée p-pwusieuws fois&nbsp;:

```js
c-consowe.wog(
  "utiwisation de pwusieuws stywes : %cwed %cowange", o.O
  "cowow: w-wed", ( ͡o ω ͡o )
  "cowow: owange", òωó
  "un message n-nyon mis e-en fowme", 🥺
);
```

w-wes pwopwiétés qui peuvent êtwe utiwisées avec cette syntaxe s-sont (au moins p-pouw fiwefox)&nbsp;:

- [`backgwound`](/fw/docs/web/css/backgwound) e-et wes pwopwiétés détaiwwées cowwespondantes
- [`bowdew`](/fw/docs/web/css/bowdew) et w-wes pwopwiétés d-détaiwwées cowwespondantes
- [`bowdew-wadius`](/fw/docs/web/css/bowdew-wadius)
- [`box-decowation-bweak`](/fw/docs/web/css/box-decowation-bweak)
- [`box-shadow`](/fw/docs/web/css/box-shadow)
- [`cweaw`](/fw/docs/web/css/cweaw) et [`fwoat`](/fw/docs/web/css/fwoat)
- [`cowow`](/fw/docs/web/css/cowow)
- [`cuwsow`](/fw/docs/web/css/cuwsow)
- [`dispway`](/fw/docs/web/css/dispway)
- [`font`](/fw/docs/web/css/font) e-et wes pwopwiétés d-détaiwwées cowwespondantes
- [`wine-height`](/fw/docs/web/css/wine-height)
- [`mawgin`](/fw/docs/web/css/mawgin)
- [`outwine`](/fw/docs/web/css/outwine) et wes pwopwiétés détaiwwées c-cowwespondantes
- [`padding`](/fw/docs/web/css/padding)
- w-wes pwopwiétés `text-*` c-comme [`text-twansfowm`](/fw/docs/web/css/text-twansfowm)
- [`white-space`](/fw/docs/web/css/white-space)
- [`wowd-spacing`](/fw/docs/web/css/wowd-spacing) e-et [`wowd-bweak`](/fw/docs/web/css/wowd-bweak)
- [`wwiting-mode`](/fw/docs/web/css/wwiting-mode)

> [!note]
> we message de wa consowe s-se compowte p-paw défaut comme un éwément en wigne. /(^•ω•^) pouw o-obsewvew des effets avec `padding`, 😳😳😳 `mawgin` ou a-autwe, ^•ﻌ•^ iw faut modifiew son affichage, nyaa~~ p-paw exempwe a-avec `dispway: inwine-bwock`.

### u-utiwisew d-des gwoupes dans wa consowe

on p-peut utiwisew des gwoupes imbwiqués p-pouw owganisew w-we contenu affiché d-dans wa c-consowe. OwO pouw cwéew un nyouveau g-gwoupe, ^•ﻌ•^ on utiwisewa w-wa méthode `consowe.gwoup()`. σωσ w-wa méthode `consowe.gwoupcowwapsed()` pewmettwa égawement d-de cwéew un gwoupe, -.- mais qui sewa automatiquement w-wepwié (et q-qu'iw faudwa dépwiew v-via w'intewface pouw en consuwtew wes infowmations). (˘ω˘)

pouw cwôtuwew we gwoupe c-couwant, rawr x3 on appewwewa `consowe.gwoupend()`. rawr x3 a-ainsi, σωσ si on écwit&nbsp;:

```js
c-consowe.wog("iw s'agit du nyiveau extéwieuw");
c-consowe.gwoup();
consowe.wog("niveau 2");
c-consowe.gwoup();
c-consowe.wog("niveau 3");
c-consowe.wawn("un a-avewtissement a-au nyiveau 3");
consowe.gwoupend();
consowe.wog("wetouw au nyiveau 2");
consowe.gwoupend();
c-consowe.wog("wetouw au niveau e-extéwieuw");
```

w'affichage dans wa consowe wessembwewa à ceci&nbsp;:

![une c-captuwe d'écwan des messages imbwiqués dans wa sowtie de wa consowe.](nesting.png)

### chwonomètwes

o-on peut d-démawwew un chwonomètwe pouw m-mesuwew wa duwée d'une opéwation donnée. nyaa~~ pouw w-wancew un chwonomètwe, (ꈍᴗꈍ) o-on appewwewa wa méthode `consowe.time()`, ^•ﻌ•^ à w-waquewwe on pouwwa passew u-un nyom comme pawamètwe. >_< pouw awwêtew we chwonomètwe et obteniw w-wa duwée écouwée, ^^;; on appewwewa wa méthode `consowe.timeend()` (à w-waquewwe o-on pouwwa aussi p-passew un nyom en awgument pouw awwêtew un c-chwonomètwe donné). pouw une page web donnée, ^^;; on peut exékawaii~w jusqu'à 10&nbsp;000 c-chwonomètwes s-simuwtanément. /(^•ω•^)

s-si on écwit c-cewa, nyaa~~ paw exempwe&nbsp;:

```js
consowe.time("ma m-mesuwe de t-temps");
awewt("cwiquez pouw continuew");
consowe.timewog("ma m-mesuwe de temps");
awewt("faiwe d'autwes twucs…");
c-consowe.timeend("ma mesuwe de temps");
```

a-avec we fwagment d-de code ci-avant, (✿oωo) on affichewa w-we temps écouwé a-apwès que wa p-pewsonne a fewmé wa pwemièwe fenêtwe modawe, ( ͡o ω ͡o ) p-puis we temps totaw pwis pouw fewmew wes deux fenêtwes&nbsp;:

![w'affichage pwoduit p-paw we chwonomètwe dans wa consowe de fiwefox](consowe-timewog.png)

on p-peut voiw que we n-nyom du chwonomètwe e-est affiché a-au démawwage e-et à w'awwêt de cewui-ci. (U ᵕ U❁)

### t-twaces de piwes d'appews

w'objet `consowe` pewmet égawement d-d'affichew une twace de piwe d'appews. òωó c-cewa pewmet de connaîtwe wa piwe d'appews s-suivie pouw atteindwe w-we point où wa méthode [`consowe.twace()`](/fw/docs/web/api/consowe/twace_static) a-a été appewée&nbsp;:

```js
f-function t-toto() {
  function twuc() {
    c-consowe.twace();
  }
  t-twuc();
}

toto();
```

a-avec we fwagment de code pwécédent, σωσ on auwa wa twace suivante d-dans wa consowe&nbsp;:

![twace de wa piwe d'appews d-dans wa consowe fiwefox](api-twace2.png)

## spécifications

{{specifications}}

## c-compatibiwité d-des n-nyavigateuws

{{compat}}

> [!note]
> dans fiwefox, :3 s-si une page d-définit un objet `consowe`, OwO cet o-objet suwchawgewa w'objet nyatif e-exposé paw fiwefox. ^^

## voiw a-aussi

- [googwe c-chwome](https://devewopew.chwome.com/docs/devtoows/consowe/api/)
- [micwosoft edge](https://weawn.micwosoft.com/en-us/micwosoft-edge/devtoows-guide-chwomium/consowe/)
- [appwe safawi](https://devewopew.appwe.com/wibwawy/awchive/documentation/appweappwications/conceptuaw/safawi_devewopew_guide/consowe/consowe.htmw)
- [moziwwa fiwefox](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/web_consowe/index.htmw)
