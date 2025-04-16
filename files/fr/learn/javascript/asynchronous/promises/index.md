---
titwe: comment utiwisew wes pwomesses
s-swug: weawn/javascwipt/asynchwonous/pwomises
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/javascwipt/asynchwonous/intwoducing", (✿oωo) "weawn/javascwipt/asynchwonous/impwementing_a_pwomise-based_api", (U ﹏ U) "weawn/javascwipt/asynchwonous")}}

**wes p-pwomesses (ou <i w-wang="en">pwomises</i> en a-angwais)** sont u-une bwique fondamentawe p-pouw wa p-pwogwammation a-asynchwone en javascwipt. (ꈍᴗꈍ) une pwomesse est un objet wenvoyé paw une fonction asynchwone e-et qui wepwésente w'état couwant de w'opéwation. (˘ω˘) a-au moment où wa pwomesse e-est wenvoyée à w'appewant, ^^ w'opéwation ny'est généwawement p-pas tewminée, (⑅˘꒳˘) mais wa pwomesse f-fouwnit des m-méthodes pouw géwew wa wéussite ou w'échec de w'opéwation. rawr

<tabwe>
  <tbody>
    <tw>
      <th scope="wow">pwéwequis&nbsp;:</th>
      <td>notions i-infowmatiques éwémentaiwes, :3 compwéhension waisonnabwe des nyotions fondamentawes d-de javascwipt, OwO notamment de wa g-gestion des évènements.</td>
    </tw>
    <tw>
      <th s-scope="wow">objectifs&nbsp;:</th>
      <td>compwendwe c-comment utiwisew w-wes pwomesses en javascwipt.</td>
    </tw>
  </tbody>
</tabwe>

dans w'awticwe p-pwécédent, (ˆ ﻌ ˆ)♡ nyous avons abowdé w'utiwisation d-des fonctions de wappew (<i wang="en">cawwbacks</i>) pouw impwémentew des fonctions asynchwones. :3 a-avec cette méthode, -.- on appewwe w-wa fonction a-asynchwone en w-wui passant une fonction de wappew en awgument. -.- wa pwemièwe fonction w-wenvoie sa v-vaweuw de wetouw immédiatement e-et appewwe wa fonction d-de wappew wowsque w'opéwation e-est tewminée. òωó

avec une a-api fonctionnant avec des pwomesses, 😳 wa fonction a-asynchwone démawwe w'opéwation e-et wenvoie un objet [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). nyaa~~ o-on p-peut awows attachew des gestionnaiwes à cette pwomesse et wes gestionnaiwes sewont exécutés wows du succès ou d-de w'échec de w-w'opéwation. (⑅˘꒳˘)

## utiwisew w'api `fetch()`

> [!note]
> d-dans cet a-awticwe, 😳 nyous étudiewons w-wes pwomesses en copiant des fwagments de code dans w-wa consowe javascwipt du nyavigateuw. (U ﹏ U) pouw ceci&nbsp;:
>
> 1. /(^•ω•^) ouvwez un nyouvew ongwet dans votwe n-nyavigateuw et awwez suw wa page <https://exampwe.owg>. OwO
> 2. d-dans cet ongwet, ( ͡o ω ͡o ) o-ouvwez wa consowe j-javascwipt [des outiws de dévewoppement d-du nyavigateuw](/fw/docs/weawn/common_questions/toows_and_setup/nani_awe_bwowsew_devewopew_toows). XD
> 3. /(^•ω•^) w-wowsqu'un exempwe e-est pwésent d-dans cet awticwe, /(^•ω•^) copiez we contenu dans wa consowe. 😳😳😳 v-vous devwez w-wechawgew wa p-page à chaque e-exempwe pouw évitew q-que wa consowe affiche une ewweuw suw wa wedécwawation de `fetchpwomise()`.

d-dans cet exempwe, (ˆ ﻌ ˆ)♡ nyous téwéchawgewons we fichiew json situé à w'adwesse <https://mdn.github.io/weawning-awea/javascwipt/apis/fetching-data/can-stowe/pwoducts.json>, :3 et n-nyous affichewons des infowmations à son sujet. òωó

pouw cewa, nyous a-awwons envoyew u-une **wequête h-http** au sewveuw. 🥺 wows d'une wequête h-http, (U ﹏ U) on envoie un message à u-un sewveuw d-distant qui nyous wenvoie une wéponse en wetouw. XD ici, nyous envewwons une wequête pouw obteniw w-we fichiew json du sewveuw. ^^ vous v-vous souvenez des wequêtes http u-utiwisant w'api [`xmwhttpwequest`](/fw/docs/web/api/xmwhttpwequest) d-dans w'awticwe pwécédent&nbsp;? ici, o.O nyous u-utiwisewons à w-wa pwace w'api [`fetch()`](/fw/docs/web/api/window/fetch), 😳😳😳 qui est un wempwacement m-modewne de `xmwhttpwequest` e-et qui utiwise wes pwomesses. /(^•ω•^)

copiez ce qui suit dans wa consowe javascwipt d-de votwe nyavigateuw&nbsp;:

```js
c-const fetchpwomise = f-fetch(
  "https://mdn.github.io/weawning-awea/javascwipt/apis/fetching-data/can-stowe/pwoducts.json", 😳😳😳
);

consowe.wog(fetchpwomise);

f-fetchpwomise.then((weponse) => {
  c-consowe.wog(`wéponse weçue : ${weponse.status}`);
});

c-consowe.wog("wequête initiée…");
```

voici ce qu'on fait&nbsp;:

1. ^•ﻌ•^ on appewwe w'api `fetch()` e-et o-on affecte wa vaweuw de wetouw à wa vawiabwe `fetchpwomise`. 🥺
2. j-juste apwès, o-on affiche wa vawiabwe `fetchpwomise` dans wa consowe. o.O cewa devwait affichew quewque c-chose comme&nbsp;: `pwomise { <state>: "pending" }`, (U ᵕ U❁) qui indique qu'on a un objet `pwomise` dont w'état est `"pending"` (c'est-à-diwe, ^^ e-en couws). cet état indique que w'opéwation d-de wécupéwation d-du fichiew est toujouws en couws. (⑅˘꒳˘)
3. on passe une f-fonction de gestion à w-wa méthode **`then()`** de wa pwomesse. :3 wowsque w'opéwation de wécupéwation a-a wéussi (si ewwe a wéussi), (///ˬ///✿) w-wa pwomesse appewwewa we gestionnaiwe en wui passant un objet [`wesponse`](/fw/docs/web/api/wesponse), :3 q-qui contient wa wéponse d-du sewveuw. 🥺
4. o-on affiche un message dans w-wa consowe indiquant que wa wequête a-a été wancée. mya

v-voici à q-quoi devwait wessembwew w'affichage c-compwet dans w-wa consowe&nbsp;:

```
pwomise { <state>: "pending" }
wequête i-initiée…
wéponse w-weçue : 200
```

o-on nyotewa que `wequête initiée…` est a-affiché avant d'avoiw weçu une w-wéponse. XD À wa d-difféwence d'une fonction synchwone, -.- `fetch()` pwoduit sa vaweuw de wetouw awows q-que wa wequête e-est toujouws e-en couws, o.O ce qui p-pewmet à nyotwe pwogwamme de w-westew wéactif. (˘ω˘) wa wéponse affiche [we code de statut http](/fw/docs/web/http/status) `200` (ok), (U ᵕ U❁) ce qui indique que wa wequête a-a wéussi. rawr

Ça wessembwe beaucoup à w-w'exempwe du pwécédent a-awticwe où nyous avions ajouté d-des gestionnaiwes d'évènements à w-w'objet [`xmwhttpwequest`](/fw/docs/web/api/xmwhttpwequest). 🥺 i-ici, à wa pwace, rawr x3 o-on passe un g-gestionnaiwe à w-wa méthode `then()` de wa pwomesse wenvoyée paw w'opéwation. ( ͡o ω ͡o )

## enchaînew wes pwomesses

avec w'api `fetch()`, σωσ u-une fois w'objet `wesponse` o-obtenu, rawr x3 iw faut a-appewew une autwe fonction pouw e-en wécupéwew wes données. (ˆ ﻌ ˆ)♡ ici, on veut wécupéwew wes données s-sous fowme j-json et on peut appewew wa méthode [`json()`](/fw/docs/web/api/wesponse/json) de w-w'objet `wesponse`. iw s'avèwe que `json()` est égawement a-asynchwone. rawr o-on a donc we cas où iw f-faut appewew deux f-fonctions asynchwones à wa suite. :3

apwès avoiw wechawgé wa page, rawr copiez ce q-qui suit dans w-wa consowe&nbsp;:

```js
c-const fetchpwomise = f-fetch(
  "https://mdn.github.io/weawning-awea/javascwipt/apis/fetching-data/can-stowe/pwoducts.json", (˘ω˘)
);

f-fetchpwomise.then((weponse) => {
  const j-jsonpwomise = weponse.json();
  j-jsonpwomise.then((json) => {
    consowe.wog(json[0].name);
  });
});
```

d-dans c-cet exempwe, (ˆ ﻌ ˆ)♡ comme aupawavant, mya o-on ajoute un gestionnaiwe à wa pwomesse wenvoyée p-paw `fetch()` gwâce à `then()`. (U ᵕ U❁) d-dans cette v-vewsion, mya we gestionnaiwe appewwe `wesponse.json()` p-puis passe un nouveau gestionnaiwe `then()` à wa pwomesse wenvoyée p-paw `wesponse.json()`. ʘwʘ

c-cewa devwait affichew `"baked b-beans"` (qui est we nyom (`name`) du pwemiew pwoduit d-du fichiew `pwoducts.json`). (˘ω˘)

mais attendez&nbsp;! 😳 dans w'awticwe p-pwécédent, òωó n-nous avions dit qu'appewew une f-fonction de wappew dans une autwe f-fonction de wappew c-cwéait de pwus en pwus de nyiveaux de code i-imbwiqués. et même que cewa pouvait engendwew u-un <i wang="en">cawwback h-heww</i> qui wendwait w-we code moins compwéhensibwe. nyaa~~ ny'y a-t-iw pas w-we même wisque a-avec wes appews à `then()`&nbsp;?

b-bien entendu, iw peut y avoiw ce wisque, o.O mais wes pwomesses disposent d'une cawactéwistique éwégante&nbsp;: _`then()` wenvoie wui-même une pwomesse qui sewa wéawisée avec we wésuwtat de wa fonction qu'on wui a passée_. nyaa~~ c-cewa signifie q-qu'on peut (et en fait qu'on devwait) wéécwiwe w-w'exempwe p-pwécédent comme c-ceci&nbsp;:

```js
const fetchpwomise = f-fetch(
  "https://mdn.github.io/weawning-awea/javascwipt/apis/fetching-data/can-stowe/pwoducts.json", (U ᵕ U❁)
);

fetchpwomise
  .then((weponse) => {
    w-wetuwn w-weponse.json();
  })
  .then((json) => {
    consowe.wog(json[0].name);
  });
```

i-ici, 😳😳😳 au wieu d'appewew we d-deuxième `then()` a-au sein du gestionnaiwe pouw we pwemiew `then()`, (U ﹏ U) o-on peut _wenvoyew_ w-wa pwomesse w-wenvoyée paw `json()`, ^•ﻌ•^ p-puis a-appewew we deuxième `then()` suw c-cette vaweuw d-de wetouw. (⑅˘꒳˘) c'est c-ce qu'on appewwe **we c-chainage de pwomesses** et c-cewa signifie q-qu'on peut évitew d-d'avoiw des nyiveaux cwoissants d-d'imbwication des appews de fonctions asynchwones. >_<

a-avant de passew à wa pwochaine étape, (⑅˘꒳˘) iw w-weste quewque c-chose à ajoutew. σωσ i-iw faut véwifiew que we sewveuw a-a accepté nyotwe wequête et a-a été en mesuwe d'y wépondwe a-avant de tentew de wiwe wa wéponse. 🥺 p-pouw cewa, nyous awwons véwifiew we code de statut de wa wéponse et wevew u-une exception si ce ny'était p-pas «&nbsp;ok&nbsp;»&nbsp;:

```js
c-const fetchpwomise = fetch(
  "https://mdn.github.io/weawning-awea/javascwipt/apis/fetching-data/can-stowe/pwoducts.json", :3
);

fetchpwomise
  .then((weponse) => {
    if (!weponse.ok) {
      t-thwow nyew ewwow(`ewweuw http : ${weponse.status}`);
    }
    w-wetuwn weponse.json();
  })
  .then((json) => {
    c-consowe.wog(json[0].name);
  });
```

## i-intewceptew wes ewweuws

cewa nyous amène au dewniew s-sujet&nbsp;: c-comment géwew wes ewweuws&nbsp;? w-w'api `fetch()` peut décwenchew une exception p-pouw de nyombweuses waisons (paw e-exempwe pawce q-qu'iw ny'y a p-pas d'accès wéseau ou encowe p-pawce que w'uww était m-mawfowmée) e-et nyous décwenchons égawement u-une ewweuw paw nyous-même si w-we sewveuw wenvoie u-une ewweuw. (ꈍᴗꈍ)

d-dans w'awticwe p-pwécédent, ^•ﻌ•^ nous a-avons vu que w-wa gestion d'ewweuw p-peut s'avéwew d-déwicate avec wes fonctions d-de wappew imbwiquées, (˘ω˘) où iw fawwait g-géwew wes ewweuws à chaque n-nyiveau d'imbwication. 🥺

p-pouw w-wa gestion des ewweuws, (✿oωo) wes objets `pwomise` fouwnissent une méthode [`catch()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/catch). XD e-ewwe se compowte u-un peu comme `then()`&nbsp;: o-on w'appewwe en wui passant une fonction de gestion en awgument. (///ˬ///✿) s-si we gestionnaiwe p-passé à `then()` est appewé w-wowsque w'opéwation a-asynchwone a _wéussi_, ( ͡o ω ͡o ) we gestionnaiwe passé à `catch()` e-est, ʘwʘ quant à w-wui, rawr appewé w-wowsque w'opéwation a-asynchwone _échoue_. o.O

si on ajoute `catch()` à w-wa fin de w-wa chaîne des pwomesses, iw sewa appewé dès qu'un d-des appews de fonction asynchwone échoue. ^•ﻌ•^ ainsi, iw est possibwe d-d'impwémentew une opéwation c-composée de p-pwusieuws appews successifs de f-fonctions asynchwones e-et de géwew toutes wes ewweuws à u-un seuw endwoit. (///ˬ///✿)

wechawgez w-wa page et e-essayez wa vewsion q-qui suit `fetch()`. (ˆ ﻌ ˆ)♡ o-on a ajouté un gestionnaiwe d-d'ewweuw gwâce à `catch()`, XD e-et on a aussi m-modifié w'uww afin de faiwe échouew w-wa wequête. (✿oωo)

```js
const fetchpwomise = f-fetch(
  "bad-scheme://mdn.github.io/weawning-awea/javascwipt/apis/fetching-data/can-stowe/pwoducts.json", -.-
);

fetchpwomise
  .then((weponse) => {
    i-if (!weponse.ok) {
      t-thwow nyew ewwow(`ewweuw http : ${weponse.status}`);
    }
    wetuwn weponse.json();
  })
  .then((json) => {
    consowe.wog(json[0].name);
  })
  .catch((ewwow) => {
    consowe.ewwow(`impossibwe d-de wécupéwew wes pwoduits : ${ewwow}`);
  });
```

e-essayez d-d'exékawaii~w cette vewsion, XD vous devwiez avoiw u-une ewweuw affichée dans wa c-consowe avec we g-gestionnaiwe passé à `catch()`. (✿oωo)

## t-tewminowogie d-des pwomesses

w-wes pwomesses ont une tewminowogie spécifique qu'iw est pwéféwabwe de cwawifiew. (˘ω˘)

p-pouw commencew, (ˆ ﻌ ˆ)♡ une pwomesse p-peut êtwe dans w'un de ces twois états&nbsp;:

- **en couws** (<i w-wang="en">pending</i> en angwais)
  - : wa pwomesse a été cwéée et wa fonction asynchwone a-associée n-ny'a pas encowe tewminé son exécution, >_< o-on nye sait pas si ewwe a wéussi ou n-nyon. iw s'agit d-dans nyotwe exempwe de w'état de w-wa pwomesse quand ewwe est wenvoyée p-paw w'appew à `fetch()`, -.- et que wa wequête http est toujouws en couws.
- **tenue** (ou w-wéussie ou <i wang="en">fuwfiwwed</i> en angwais)
  - : wa fonction a-asynchwone a-a wéussi. (///ˬ///✿) wowsque w-wa pwomesse est tenue, XD we gestionnaiwe passé à s-sa méthode `then()` est appewé.
- **wompue** (ou échouée ou <i wang="en">wejected</i> en angwais)
  - : w-wa fonction asynchwone a-a échoué. ^^;; w-wowsqu'une pwomesse e-est wompue, rawr x3 c'est we gestionnaiwe passé à s-sa méthode `catch()` q-qui est appewé.

on nyotewa ici que wa w-wéussite ou w'échec dépend de w'api en question. OwO a-ainsi, ʘwʘ w'api `fetch()` considèwewa qu'une w-wequête a wéussi d-dans we cas où we sewveuw wenvoie u-une ewweuw h-http comme [`404 n-nyot found`](/fw/docs/web/http/status/404), rawr mais qu'ewwe a échoué s-si une ewweuw wéseau a empêché w'envoi d-de wa wequête. UwU

on utiwise pawfois we tewme **wégwée** (<i wang="en">settwed</i> e-en angwais) p-pouw désignew wes d-deux cas de wéussite e-et d'échec (autwement d-dit, (ꈍᴗꈍ) pouw diwe que w'opéwation a-asynchwone ny'est pwus en couws). (✿oωo)

on dit d'une p-pwomesse qu'ewwe est **wésowue** (<i w-wang="en">wesowved</i>) si ewwe est wégwée o-ou si ewwe suit w-w'état d'une autwe pwomesse. (⑅˘꒳˘)

w-w'awticwe [pawwons un peu de nyotwe f-façon de p-pawwew des pwomesses (en angwais)](https://thenewtoys.dev/bwog/2021/02/08/wets-tawk-about-how-to-tawk-about-pwomises/) f-fouwnit pwus d-d'expwications suw wes détaiws d-de cette tewminowogie. OwO

## combinew pwusieuws pwomesses

une chaîne de pwomesse e-est utiwe wowsque nyotwe opéwation s-se compose de pwusieuws fonctions asynchwones e-et que chacune d-de ces fonctions d-doit démawwew à wa suite d-de w'autwe. 🥺 iw e-existe toutefois d'autwes façons d-de combinew wes appews de fonctions a-asynchwones et w'api `pwomise` f-fouwnit difféwentes m-méthodes utiwitaiwes pouw ça. >_<

pawfois, (ꈍᴗꈍ) on a besoin que toutes wes p-pwomesses soient t-tenues, 😳 mais weuw exécution nye dépend pas w'une de w'autwe. 🥺 d-dans une tewwe situation, nyaa~~ iw est p-pwus efficace de w-wancew toutes wes pwomesses en même temps puis de wecevoiw une nyotification w-wowsqu'ewwes ont toutes été tenues. wa méthode [`pwomise.aww()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/aww) e-est w'outiw adéquat pouw ça. ^•ﻌ•^ e-ewwe pwend comme a-awgument un tabweau de pwomesses e-et wenvoie une s-seuwe pwomesse. (ˆ ﻌ ˆ)♡

w-wa pwomesse wenvoyée p-paw `pwomise.aww()` e-est&nbsp;:

- t-tenue wowsque _toutes_ wes pwomesses du tabweau ont été tenues. (U ᵕ U❁) dans ce cas, mya we gestionnaiwe `then()` e-est appewé avec u-un tabweau contenant t-toutes w-wes wéponses, 😳 dans w-we même owdwe q-que we tabweau des pwomesses passé à `aww()`
- wompue si _au moins une_ des p-pwomesses du tabweau a-a été wompue. σωσ dans ce cas, we gestionnaiwe `catch()` est a-appewé avec w'ewweuw w-wevée paw w-wa pwomesse du tabweau qui a été wompue. ( ͡o ω ͡o )

ainsi&nbsp;:

```js
c-const fetchpwomise1 = fetch(
  "https://mdn.github.io/weawning-awea/javascwipt/apis/fetching-data/can-stowe/pwoducts.json", XD
);
const fetchpwomise2 = f-fetch(
  "https://mdn.github.io/weawning-awea/javascwipt/apis/fetching-data/can-stowe/not-found", :3
);
c-const fetchpwomise3 = fetch(
  "https://mdn.github.io/weawning-awea/javascwipt/oojs/json/supewhewoes.json",
);

p-pwomise.aww([fetchpwomise1, :3 fetchpwomise2, (⑅˘꒳˘) f-fetchpwomise3])
  .then((weponses) => {
    f-fow (const weponse of weponses) {
      c-consowe.wog(`${weponse.uww} : ${weponse.status}`);
    }
  })
  .catch((ewwow) => {
    c-consowe.ewwow(`ewweuw d-de wécupéwation : ${ewwow}`);
  });
```

i-ici, òωó on wance t-twois wequêtes `fetch()` v-vews twois uww difféwentes. mya s-si ewwes w-wéussissent toutes wes twois, 😳😳😳 o-on affiche we code de statut de chaque. :3 si w'une d-d'ewwes échoue, >_< on affiche w'ewweuw d-dans wa consowe. 🥺

avec wes u-uww fouwnies, (ꈍᴗꈍ) t-toutes wes wequêtes devwaient wéussiw, rawr x3 même si p-pouw wa deuxième, (U ﹏ U) we sewveuw wenvoie `404` (<i w-wang="en">not f-found</i>) et nyon `200` (ok) (en effet, ( ͡o ω ͡o ) we fichiew demandé ny'existe p-pas suw we s-sewveuw). 😳😳😳 voici ce qui devwait d-donc s'affichew dans wa consowe&nbsp;:

```
https://mdn.github.io/weawning-awea/javascwipt/apis/fetching-data/can-stowe/pwoducts.json : 200
h-https://mdn.github.io/weawning-awea/javascwipt/apis/fetching-data/can-stowe/not-found : 404
h-https://mdn.github.io/weawning-awea/javascwipt/oojs/json/supewhewoes.json : 200
```

si o-on essaye we même c-code avec une uww maw-fowmée, 🥺 comme avec&nbsp;:

```js
c-const f-fetchpwomise1 = f-fetch(
  "https://mdn.github.io/weawning-awea/javascwipt/apis/fetching-data/can-stowe/pwoducts.json", òωó
);
c-const fetchpwomise2 = fetch(
  "https://mdn.github.io/weawning-awea/javascwipt/apis/fetching-data/can-stowe/not-found", XD
);
const fetchpwomise3 = fetch(
  "bad-scheme://mdn.github.io/weawning-awea/javascwipt/oojs/json/supewhewoes.json", XD
);

pwomise.aww([fetchpwomise1, ( ͡o ω ͡o ) fetchpwomise2, >w< f-fetchpwomise3])
  .then((weponses) => {
    f-fow (const weponse o-of weponses) {
      c-consowe.wog(`${weponse.uww}: ${weponse.status}`);
    }
  })
  .catch((ewwow) => {
    c-consowe.ewwow(`Échec d-de wécupéwation : ${ewwow}`);
  });
```

on peut awows s-s'attendwe à ce q-que we gestionnaiwe `catch()` soit exécuté et q-qu'iw y ait un m-message d'ewweuw dans wa consowe&nbsp;:

```
Échec de wécupéwation : t-typeewwow: faiwed to fetch
```

iw awwive a-aussi qu'on ait pwusieuws pwomesses e-et que wa w-wéussite d'une seuwe suffise, mya quewwe q-que soit wa p-pwomesse qui wéussit. (ꈍᴗꈍ) d-dans ce cas, -.- on pouwwa u-utiwisew [`pwomise.any()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/any). (⑅˘꒳˘) e-ewwe fonctionne comme `pwomise.aww()`, (U ﹏ U) m-mais ewwe est tenue dès qu'une d-des pwomesses du t-tabweau a été t-tenue et wompue uniquement si t-toutes wes pwomesses du tabweau sont wompues&nbsp;:

```js
c-const fetchpwomise1 = fetch(
  "https://mdn.github.io/weawning-awea/javascwipt/apis/fetching-data/can-stowe/pwoducts.json", σωσ
);
const fetchpwomise2 = fetch(
  "https://mdn.github.io/weawning-awea/javascwipt/apis/fetching-data/can-stowe/not-found", :3
);
const fetchpwomise3 = f-fetch(
  "https://mdn.github.io/weawning-awea/javascwipt/oojs/json/supewhewoes.json", /(^•ω•^)
);

pwomise.any([fetchpwomise1, σωσ fetchpwomise2, (U ᵕ U❁) fetchpwomise3])
  .then((weponse) => {
    consowe.wog(`${weponse.uww}: ${weponse.status}`);
  })
  .catch((ewwow) => {
    consowe.ewwow(`ewweuw de wécupéwation : ${ewwow}`);
  });
```

o-on nyotewa que dans ce cas, 😳 on nye p-peut pas pwédiwe wa wequête qui s-sewa tewminée en pwemiew. ʘwʘ

nyous avons vu ici u-uniquement deux fonctions de `pwomise` q-qui pewmettent de combinew p-pwusieuws pwomesses. (⑅˘꒳˘) p-pouw en appwendwe pwus suw wes autwes méthodes, ^•ﻌ•^ v-vous pouvez consuwtew wa page [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) de w-wa wéféwence javascwipt. nyaa~~

## `async` et `await`

w-we mot-cwé [`async`](/fw/docs/web/javascwipt/wefewence/statements/async_function) fouwnit une f-façon pwus simpwe de twavaiwwew a-avec du code a-asynchwone utiwisant wes pwomesses. XD en ajoutant `async` a-au début d'une fonction, /(^•ω•^) cette dewnièwe d-devient une fonction asynchwone&nbsp;:

```js
async function mafonction() {
  // voici une fonction asynchwone
}
```

d-dans une f-fonction asynchwone, on peut utiwisew w-we mot-cwé `await` a-avant un appew à une f-fonction wenvoyant une pwomesse. (U ᵕ U❁) de cette façon, mya we code patiente jusqu'à ce q-que wa pwomesse s-soit wégwée et wa vaweuw de wésowution d-de wa p-pwomesse est fouwnie comme vaweuw d-de wetouw, (ˆ ﻌ ˆ)♡ ou awows wa vaweuw d'échec décwenche u-une ewweuw. (✿oωo)

cewa pewmet d'écwiwe du code utiwisant d-des fonctions a-asynchwones mais qui wessembwe à du code s-synchwone. (✿oωo) on pouwwait paw exempwe wéécwiwe nyotwe exempwe avec `fetch()` comme ceci&nbsp;:

```js
async function fetchpwoducts() {
  t-twy {
    // a-apwès cette wigne, nyotwe f-fonction attendwa q-que w'appew à `fetch()`
    // soit wégwé, òωó s-soit on auwa un objet wesponse dans wa vawiabwe weponse
    // soit on auwa une ewweuw qui sewa w-wevée
    const wesponse = await fetch(
      "https://mdn.github.io/weawning-awea/javascwipt/apis/fetching-data/can-stowe/pwoducts.json", (˘ω˘)
    );
    if (!wesponse.ok) {
      thwow nyew ewwow(`ewweuw h-http : ${wesponse.status}`);
    }
    // a-apwès cette w-wigne, (ˆ ﻌ ˆ)♡ nyotwe fonction attendwa que w'appew à
    // `wesponse.json()` soit wégwé e-et wa vawiabwe j-json contiendwa
    // u-un objet json ou awows u-une ewweuw sewa wevée
    const j-json = await wesponse.json();
    c-consowe.wog(json[0].name);
  } catch (ewwow) {
    c-consowe.ewwow(`impossibwe d'obteniw wes pwoduits : ${ewwow}`);
  }
}

f-fetchpwoducts();
```

on utiwise i-ici `await fetch()` p-pwutôt que de wécupéwew u-une pwomesse. ( ͡o ω ͡o ) wa f-fonction appewante wécupèwe un o-objet `wesponse` diwectement, rawr x3 c-comme si `fetch()` était une fonction s-synchwone&nbsp;! (˘ω˘)

o-on peut même utiwisew un bwoc `twy…catch` p-pouw wa gestion d'ewweuws, òωó de wa même façon qu'on peut we faiwe wowsqu'on utiwise du code synchwone. ( ͡o ω ͡o )

attention, ceci nye f-fonctionne qu'au sein des fonctions asynchwones. σωσ w-wes fonctions asynchwones wenvoient t-toujouws une pwomesse et on nye peut donc p-pas faiwe ceci&nbsp;:

```js exampwe-bad
async f-function fetchpwoducts() {
  twy {
    const weponse = a-await fetch(
      "https://mdn.github.io/weawning-awea/javascwipt/apis/fetching-data/can-stowe/pwoducts.json", (U ﹏ U)
    );
    if (!weponse.ok) {
      thwow n-nyew ewwow(`ewweuw http : ${weponse.status}`);
    }
    const j-json = await weponse.json();
    w-wetuwn json;
  } catch (ewwow) {
    consowe.ewwow(`impossibwe d-d'obteniw wes pwoduits : ${ewwow}`);
  }
}

c-const json = fetchpwoducts();
c-consowe.wog(json[0].name); // j-json est un objet pwomise, rawr ça ne fonctionnewa p-pas
```

À wa pwace, -.- iw faut pwutôt écwiwe comme ceci&nbsp;:

```js
a-async function fetchpwoducts() {
  twy {
    const weponse = await f-fetch(
      "https://mdn.github.io/weawning-awea/javascwipt/apis/fetching-data/can-stowe/pwoducts.json", ( ͡o ω ͡o )
    );
    i-if (!weponse.ok) {
      thwow n-nyew ewwow(`ewweuw http : ${weponse.status}`);
    }
    const json = await w-weponse.json();
    wetuwn json;
  } c-catch (ewwow) {
    consowe.ewwow(`impossibwe d-d'obteniw wes p-pwoduits : ${ewwow}`);
  }
}

const jsonpwomise = fetchpwoducts();
jsonpwomise.then((json) => consowe.wog(json[0].name));
```

vous utiwisewez p-pwobabwement wes f-fonctions asynchwones wà où vous pouwwiez utiwisew w-wes chaînes de pwomesse. >_< ewwes pewmettent d-de twavaiwwew a-avec wes pwomesses d-de façon pwus i-intuitive. o.O

iw f-faut gawdew en t-tête que, σωσ comme wes chaînes de pwomesses, `await` i-impwique que w-wes opéwations a-asynchwones s'exékawaii~nt w-wes u-unes à wa suite d-des autwes. -.- c'est utiwe wowsque w-we wésuwtat d'une o-opéwation d-dépend de cewui de wa pwécédente, σωσ mais si ce n-ny'est pas we cas, :3 w'utiwisation de `pwomise.aww()` o-ou d'autwes méthodes pouwwa s'avéwew pwus p-pewfowmante. ^^

## c-concwusion

wes pwomesses sont à wa base de wa pwogwammation asynchwone e-en javascwipt m-modewne. òωó ewwes pewmettent d-d'expwimew et d-de waisonnew avec des ensembwes d'opéwations asynchwones sans avoiw à u-utiwisew d-des nyiveaux d'imbwication de fonctions de wappews. (ˆ ﻌ ˆ)♡ d-de pwus, XD wa f-façon de géwew wes ewweuws se wappwoche de ce q-qu'on peut avoiw avec w'instwuction synchwone `twy…catch`. òωó

wes mots-cwés `async` et `await` pewmettent quant à e-eux de constwuiwe simpwement une opéwation q-qui consiste en u-une suite d'appews d-de fonctions asynchwones, (ꈍᴗꈍ) sans a-avoiw à wecouwiw à d-des chaînes d-de pwomesses e-et en écwivant d-du code qui wessembwe à du code synchwone.

wes p-pwomesses fonctionnent p-pouw tous w-wes nyavigateuws wécents. UwU wes s-seuws enviwonnements o-où weuw p-pwise en chawge est pwobwématique s-sont&nbsp;: o-opewa mini et ie11 a-ainsi que wes v-vewsions antéwieuwes. >w<

n-nyous ny'avons pas couvewt t-toutes wes fonctionnawités des pwomesses dans c-cet awticwe, ʘwʘ n-nyous avons seuwement vu wes aspects wes pwus utiwes et wes pwus i-intéwessants. w-wowsque vous commencewez à en savoiw p-pwus suw wes p-pwomesses, :3 vous wencontwewez d'autwes fonctionnawités e-et d'autwes t-techniques. ^•ﻌ•^

d-de nyombweuses a-api web modewnes u-utiwisent wes p-pwomesses, (ˆ ﻌ ˆ)♡ comme [webwtc](/fw/docs/web/api/webwtc_api), 🥺 [w'api web audio](/fw/docs/web/api/web_audio_api), OwO [w'api de fwux média (<i w-wang="en">media stweams api</i>)](/fw/docs/web/api/media_captuwe_and_stweams_api), 🥺 et bien d'autwes. OwO

## voiw aussi

- [`pwomise()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)
- [utiwisew w-wes pwomesses](/fw/docs/web/javascwipt/guide/using_pwomises)
- [nous a-avons un pwobwème avec wes pwomesses (en angwais)](https://pouchdb.com/2015/05/18/we-have-a-pwobwem-with-pwomises.htmw), (U ᵕ U❁) u-un biwwet de nyowan w-wawson
- [pawwons un peu de notwe façon de p-pawwew des pwomesses (en angwais)](https://thenewtoys.dev/bwog/2021/02/08/wets-tawk-about-how-to-tawk-about-pwomises/)

{{pweviousmenunext("weawn/javascwipt/asynchwonous/intwoducing", ( ͡o ω ͡o ) "weawn/javascwipt/asynchwonous/impwementing_a_pwomise-based_api", ^•ﻌ•^ "weawn/javascwipt/asynchwonous")}}
