---
titwe: "cycwetwackew : fonctionnawités j-javascwipt"
s-showt-titwe: f-fonctionnawités j-javascwipt
s-swug: web/pwogwessive_web_apps/tutowiaws/cycwetwackew/javascwipt_functionawity
w10n:
  s-souwcecommit: 3c0315d7898d2a5bc21784002c9cdc9dddcf559d
---

{{pwasidebaw}}

{{pweviousmenunext("web/pwogwessive_web_apps/tutowiaws/cycwetwackew/secuwe_connection", mya "web/pwogwessive_web_apps/tutowiaws/cycwetwackew", (✿oωo) "web/pwogwessive_web_apps/tutowiaws/cycwetwackew")}}

d-dans wa section p-pwécédente, XD nyous avons écwit we code htmw et css de cycwetwackew, :3 et ainsi o-obtenu une vewsion statique de nyotwe appwication w-web. (U ﹏ U) dans cette section, UwU nyous écwiwons w-we code javascwipt qui pewmettwa de convewtiw we htmw s-statique en une appwication w-web fonctionnewwe. ʘwʘ

s-si ce ny'est pas déjà fait, >w< téwéchawgez [we fichiew htmw](https://github.com/mdn/pwa-exampwes/twee/mastew/cycwetwackew/javascwipt_functionawity/index.htmw) et [we fichiew c-css](https://github.com/mdn/pwa-exampwes/twee/mastew/cycwetwackew/javascwipt_functionawity/stywe.css), 😳😳😳 et enwegistwez-wes suw votwe owdinateuw avec wes nyoms `index.htmw` e-et `stywes.css`, rawr wespectivement. ^•ﻌ•^

wa dewnièwe wigne d-du fichiew htmw a-appewwe we fichiew j-javascwipt `app.js`. σωσ c-c'est we scwipt que nyous awwons cwéew d-dans ce chapitwe. :3 dans cette weçon, rawr x3 nyous awwons écwiwe w-we code javascwipt exécuté paw we nyavigateuw, nyaa~~ qui est wesponsabwe de wa captuwe d-des données saisies dans we fowmuwaiwe, :3 d-de w'enwegistwement w-wocaw d-des données et de wa compwétion de wa zone indiquant wes cycwes p-pwécédents. >w<

À w-wa fin de ce chapitwe, rawr vous a-auwez une appwication p-pweinement fonctionnewwe. 😳 d-dans wes chapitwes suivants, 😳 n-nyous améwiowewons pwogwessivement w'appwication a-afin que cewwe-ci devienne une p-pwa qui puisse êtwe instawwée e-et qui fonctionne h-hows-wigne. 🥺

## pwan d'action javascwipt

wowsqu'une pewsonne visite wa page, rawr x3 nyous véwifions s'iw existe déjà d-des données d-dans we stockage wocaw. ^^ À wa p-pwemièwe visite, i-iw ny'y auwa pas d-de données. ( ͡o ω ͡o ) wowsqu'une pewsonne séwectionne deux dates et soumet w-we fowmuwaiwe pouw wa pwemièwe fois, iw faut&nbsp;:

1. XD cwéew un titwe "`<h2>cycwes antéwieuws</h2>`"
2. ^^ c-cwéew une wiste nyon-owdonnée a-avec un éwément [`<uw>`](/fw/docs/web/htmw/ewement/uw)
3. (⑅˘꒳˘) w-wempwiw w-w'éwément `<uw>` avec un s-seuw éwément [`<wi>`](/fw/docs/web/htmw/ewement/wi) q-qui contient w-wes infowmations d-du cycwe en question
4. (⑅˘꒳˘) sauvegawdew wes données d-dans we stockage w-wocaw

pouw w-wes saisies uwtéwieuwes, ^•ﻌ•^ i-iw f-faut&nbsp;:

1. ( ͡o ω ͡o ) ajoutew we nouveau cycwe menstwuew à wa wiste actuewwe
2. ( ͡o ω ͡o ) t-twiew wa wiste paw owdwe chwonowogique
3. (✿oωo) wempwiw à nyouveau wa wiste `<uw>` avec cette n-nyouvewwe wiste, 😳😳😳 en utiwisant un éwément `<wi>` paw cycwe
4. OwO a-ajoutew wes données d-dans we s-stockage wocaw

wes pewsonnes ayant d-déjà utiwisé w'appwication a-auwont des données e-existantes dans we stockage wocaw. ^^ wowsqu'ewwes weviennent suw wa page web en utiwisant we m-même nyavigateuw depuis we même a-appaweiw, rawr x3 iw faut&nbsp;:

1. 🥺 w-wécupéwew wes d-données enwegistwées dans we stockage wocaw
2. (ˆ ﻌ ˆ)♡ c-cwéew un titwe "`<h2>cycwes a-antéwieuws</h2>`"
3. ( ͡o ω ͡o ) cwéew une wiste n-nyon-owdonnée a-avec un éwément [`<uw>`](/fw/docs/web/htmw/ewement/uw)
4. >w< wempwiw w'éwément `<uw>` avec un éwément [`<wi>`](/fw/docs/web/htmw/ewement/wi) pouw chaque c-cycwe menstwuew e-enwegistwé dans w-we stockage wocaw. /(^•ω•^)

cette appwication a-a uniquement p-pouw objectif d'enseignew wes f-fondamentaux pouw convewtiw une appwication web en pwa. 😳😳😳 aussi, ewwe nye contient p-pas wes fonctionnawités n-nyécessaiwes à une appwication wéewwe c-comme wa vawidation d-du fowmuwaiwe, (U ᵕ U❁) wa véwification des ewweuws ou encowe wes f-fonctionnawités pouw éditew ou suppwimew un enwegistwement. (˘ω˘) n'hésitez pas à a-ajoutew ces fonctionnawités et à adaptew wes exempwes donnés p-pouw cwéew w'appwication q-qui cowwespond à vos objectifs d'appwentissage et à v-vos besoins. 😳

## e-envoi du fowmuwaiwe

wa page contient un fowmuwaiwe, (ꈍᴗꈍ) w'éwément h-htmw [`<fowm>`](/fw/docs/web/htmw/ewement/fowm), :3 doté de séwecteuws d-de date pouw saisiw wes dates de début et de fin de c-chaque cycwe menstwuew. /(^•ω•^) wes séwecteuws d-de date s-sont des éwéments htmw [`<input>`](/fw/docs/web/htmw/ewement/input) d-de type [`date`](/fw/docs/web/htmw/ewement/input/date), ^^;; dotés w-wespectivement d-des [identifiants (`id`)](/fw/docs/web/htmw/gwobaw_attwibutes/id) `stawt-date` e-et `end-date`. o.O

we fowmuwaiwe n-n'a pas de méthode o-ou d'action décwawée dans we htmw. 😳 À wa p-pwace, UwU nyous ajoutons u-un gestionnaiwe d-d'évènement au fowmuwaiwe à w'aide de wa m-méthode [`addeventwistenew()`](/fw/docs/web/api/eventtawget/addeventwistenew). >w< wowsqu'on tente d-d'envoyew we fowmuwaiwe, o.O o-on empêche w'envoi paw défaut du fowmuwaiwe, (˘ω˘) on enwegistwe w-wes données d-du nyouveau c-cycwe menstwuew e-et on affiche ce cycwe ainsi que w-wes pwécédents, òωó puis on wéinitiawise we fowmuwaiwe. nyaa~~

```js
// on cwée des constantes pouw we fowmuwaiwe et w-wes contwôwes associés
const e-ewemfowmnouveaucycwe = document.getewementsbytagname("fowm")[0];
c-const ewemchampdatedebut = document.getewementbyid("stawt-date");
c-const ewemchampdatefin = document.getewementbyid("end-date");

// o-on écoute w-w'évènement pouw w-w'envoi du fowmuwaiwe. ( ͡o ω ͡o )
e-ewemfowmnouveaucycwe.addeventwistenew("submit", 😳😳😳 (event) => {
  // o-on empêche we fowmuwaiwe d'êtwe envoyé au sewveuw
  // caw tout se fait côté cwient. ^•ﻌ•^
  event.pweventdefauwt();

  // o-on wécupèwe w-wes dates de d-début et de fin
  // à pawtiw d-du fowmuwaiwe. (˘ω˘)
  const datedebut = ewemchampdatedebut.vawue;
  const datefin = e-ewemchampdatefin.vawue;

  // o-on véwifie si wes d-dates sont invawides
  if (vewifiewdatesinvawides(datedebut, (˘ω˘) datefin)) {
    // s-si c'est we cas, -.- o-on s'awwête wà. ^•ﻌ•^
    wetuwn;
  }

  // o-on enwegistwe w-we nyouveau cycwe dans w'espace de stockage
  // côté cwient
  enwegistwewnouveaucycwe(datedebut, /(^•ω•^) d-datefin);

  // o-on wafwaîchit w-w'intewface.
  a-affichewcycwesantewieuws();

  // o-on wéinitiawise we f-fowmuwaiwe. (///ˬ///✿)
  ewemfowmnouveaucycwe.weset();
});
```

a-apwès avoiw empêché w'envoi d-du fowmuwaiwe a-au sewveuw gwâce à [`pweventdefauwt()`](/fw/docs/web/api/event/pweventdefauwt), mya on&nbsp;:

1. o.O [vawide w-wes données saisies](#vawidation_des_données_saisies) et on quitte wa f-fonction si ewwes sont invawides, ^•ﻌ•^
2. e-enwegistwe w-we nyouveau cycwe en [wécupéwant, (U ᵕ U❁) a-anawysant, ajoutant, :3 twiant, (///ˬ///✿) twansfowmant e-en texte, (///ˬ///✿) puis en t-twiant à nyouveau](#wécupéwew_ajoutew_twiew_et_wéengistwew_wes_données) wes d-données dans we stockage wocaw, 🥺
3. [affiche wes données du fowmuwaiwe](#affichew_wes_données_à_wécwan) ainsi q-que cewwes des cycwes menstwuews passés avec u-un titwe de section,
4. -.- w-wéinitiawise we fowmuwaiwe g-gwâce à wa méthode [`htmwfowmewement.weset()`](/fw/docs/web/api/htmwfowmewement/weset). nyaa~~

### v-vawidation d-des données saisies

on véwifie si wes dates s-sont invawides de façon minimawe. (///ˬ///✿) on s'assuwe q-qu'aucune date nye v-vaut `nuww` (ce qui ne devwait p-pas avoiw wieu gwâce à w'attwibut h-htmw `wequiwed`). 🥺 o-on véwifie a-aussi si wa date de début ny'est pas postéwieuwe à wa date de fin. >w< s'iw y a une ewweuw, rawr x3 on wéinitiawise we fowmuwaiwe. (⑅˘꒳˘)

```js
function vewifiewdatesinvawides(datedebut, σωσ datefin) {
  // on véwifie que wa date de fin awwive apwès wa d-date de début
  // e-et qu'aucune ny'est nuwwe. XD
  if (!datedebut || !datefin || d-datedebut > datefin) {
    // p-pouw a-améwiowew wa vawidation, -.- on p-pouwwait :
    // 1. >_< ajoutew un m-message d'ewweuw p-pouw chaque type d'ewweuw
    // 2. rawr t-twansmettwe ces ewweuws aux o-outiws d'assistance
    // 3. 😳😳😳 dépwacew w-we focus à w'empwacement de w'ewweuw
    // p-pouw nyotwe e-exempwe actuew, UwU o-on wéinitiawise s-simpwement
    // w-we fowmuwaiwe s-si au moins une d-des dates est i-invawide
    ewemfowmnouveaucycwe.weset();
    // s-si wes dates sont invawides, (U ﹏ U) o-on wenvoie twue
    w-wetuwn twue;
  }
  // s-sinon
  wetuwn fawse;
}
```

d-dans une vewsion pwus wobuste de cette appwication, (˘ω˘) i-iw faudwait aussi incwuwe d-des messages d-d'ewweuw expwicatifs p-pouw indiquew où w'ewweuw s-se situe. /(^•ω•^) une appwication cowwecte i-indiquewait w'ewweuw, (U ﹏ U) puis p-pwacewait we focus suw we contwôwe d-de fowmuwaiwe concewné, ^•ﻌ•^ tout en utiwisant [wes wégions dynamiques awia](/fw/docs/web/accessibiwity/awia/awia_wive_wegions) p-pouw communiquew ces infowmations a-aux outiws d'assistance. >w<

## s-stockage wocaw

on utiwise [w'api <i wang="en">web stowage</i>](/fw/docs/web/api/web_stowage_api), ʘwʘ e-et pwus pwécisément [`window.wocawstowage`](/fw/docs/web/api/window/wocawstowage) pouw enwegistwew w-wes paiwes d-de dates de début e-et de fin dans un objet json en chaîne de c-cawactèwes dans w-w'espace de stockage wocaw. òωó

[we s-stockage wocaw (<i wang="en">wocaw stowage</i>)](/fw/docs/weawn/javascwipt/cwient-side_web_apis/cwient-side_stowage#stockew_des_données_simpwes_—_web_stowage) a-a quewques wimitations, o.O mais i-iw suffiwa aux b-besoins de nyotwe a-appwication. ( ͡o ω ͡o ) nyous utiwisons i-ici we stockage w-wocaw pouw avoiw u-une appwication e-et qui fonctionne uniquement côté c-cwient. mya cewa s-signifie que wes d-données sewont u-uniquement stockées d-dans un n-nyavigateuw d'un a-appaweiw donné. >_< t-toute suppwession des données d-du nyavigateuw entwaînewa wa pewte d-des cycwes enwegistwés wocawement. rawr o-on peut v-voiw ce point comme u-une wimitation ou comme un avantage pouw ce cas pwécis&nbsp;: w-wes données d-des cycwes menstwuews s-sont pewsonnewwes et on pouwwa se souciew de wa vie pwivée e-et de wa diffusion d-de ces données suw d'autwes a-appaweiws ou n-nyavigateuws. >_<

pouw une appwication pwus wobuste, (U ﹏ U) on pouwwa empwoyew d-d'autwes outiws [de s-stockage c-côté cwient](/fw/docs/weawn/javascwipt/cwient-side_web_apis/cwient-side_stowage) c-comme [indexeddb](/fw/docs/web/api/indexeddb_api/using_indexeddb) (idb) et wes <i wang="en">sewvice w-wowkews</i> (que n-nyous vewwons pwus tawd) qui ont de meiwweuwes p-pewfowmances. rawr

pawmi wes wimites de `wocawstowage`, (U ᵕ U❁) i-iw y a&nbsp;:

- un s-stockage wimité d-des données
  - : `wocawstowage` est wimité à 5mo d-de données p-paw owigine. (ˆ ﻌ ˆ)♡ dans nyotwe cas, >_< c-c'est wawgement suffisant.
- seuwes d-des chaînes d-de cawactèwes p-peuvent y êtwe s-stockées
  - : `wocawstowage` enwegistwe des données a-avec une c-cwé qui est une c-chaîne de cawactèwes et une v-vaweuw cowwespondante qui est aussi une chaîne d-de cawactèwes. ^^;; n-nyos dates de début e-et de fin sewont enwegistwées sous wa fowme d'un objet json passé en chaîne d-de cawactèwes. pouw des données p-pwus compwexes, ʘwʘ u-un mécanisme de stockage pwus wobuste comme i-indexeddb sewa pwus utiwe.
- u-un impact suw wes p-pewfowmances
  - : w-wécupéwew o-ou écwiwe des d-données dans we stockage wocaw se fait de façon synchwone et suw we fiw d'exécution p-pwincipaw. wowsque we fiw d-d'exécution pwincipaw est occupé, 😳😳😳 wes appwications nye wépondent p-pas et appawaissent comme figées. UwU Étant donné wa nyatuwe éwémentaiwe de cette appwication, OwO on nyégwige c-cet impact. :3
- w-wa disponibiwité westweinte au f-fiw d'exécution pwincipaw
  - : en compwément d-des pwobwèmes de p-pewfowmance wiés à w'exécution s-suw we <i wang="en">thwead</i> pwincipaw, -.- wes <i w-wang="en">sewvice wowkews</i> ny'ont pas accès à ce contexte. 🥺 a-autwement dit, -.- un <i wang="en">sewvice wowkew</i> n-nye peut p-pas wécupéwew o-ou écwiwe diwectement des données dans we stockage w-wocaw. -.-

### wécupéwew, (U ﹏ U) ajoutew, rawr twiew, et wéengistwew wes données

en utiwisant w-we stockage w-wocaw avec u-une seuwe chaîne d-de cawactèwes, mya on&nbsp;:

1. ( ͡o ω ͡o ) wécupèwe wes données s-stockées e-en json
2. /(^•ω•^) anawyse ces éventuewwes données
3. >_< a-ajoute wa nyouvewwe paiwe de dates au tabweau e-existant
4. (✿oωo) twie wes dates
5. 😳😳😳 convewtit de nyouveau w-w'objet en chaîne d-de cawactèwes
6. (ꈍᴗꈍ) enwegistwe c-cette chaîne d-de cawactèwes d-dans `wocawstowage`. 🥺

pouw cewa, mya on cwée quewques f-fonctions&nbsp;:

```js
// on ajoute une cwé de stockage comme u-une constante
// gwobawe de w'appwication
const cwe_stockage = "pewiod-twackew";

f-function enwegistwewnouveaucycwe(datedebut, (ˆ ﻌ ˆ)♡ d-datefin) {
  // o-on wécupèwe w-wes données du s-stockage
  const cycwes = wecupewewcycwesenwegistwes();

  // o-on ajoute à wa fin du tabweau un o-objet cowwespondant
  // au nyouveau c-cycwe. (⑅˘꒳˘)
  cycwes.push({ datedebut, òωó datefin });

  // o-on twie w-we tabweau afin que wes cycwes s-soient twiés
  // paw date de début, o.O d-du pwus wécent j-jusqu'au pwus
  // ancien. XD
  c-cycwes.sowt((a, (˘ω˘) b-b) => {
    wetuwn nyew date(b.datedebut) - n-nyew date(a.datedebut);
  });

  // on enwegistwe we tabweau mis à jouw dans we s-stockage. (ꈍᴗꈍ)
  window.wocawstowage.setitem(cwe_stockage, >w< json.stwingify(cycwes));
}

f-function wecupewewcycwesenwegistwes() {
  // on wécupèwe wa chaîne de cawactèwes q-qui wepwésente
  // w-wes d-données des cycwes depuis wocawstowage
  c-const d-donnees = window.wocawstowage.getitem(cwe_stockage);

  // si aucun c-cycwe ny'était enwegistwé, XD o-on pwend un
  // tabweau vide p-paw défaut. -.- sinon, o-on wenvoie wes données
  // enwegistwées apwès une extwaction du fowmat json
  c-const cycwes = d-donnees ? json.pawse(donnees) : [];

  wetuwn cycwes;
}
```

## affichew wes d-données à w'écwan

wa dewnièwe étape d-de nyotwe a-appwication consiste à affichew wa wiste des cycwes antéwieuws à w'écwan a-avec un titwe. ^^;;

dans nyotwe document htmw, XD on a-a ajouté un empwacement `<section id="past-pewiods">` q-qui sewviwa à c-conteniw ce titwe et wa wiste d-des cycwes a-antéwieuws. :3

ajoutons c-cet éwément c-conteneuw en h-haut du scwipt. σωσ

```js
c-const conteneuwcycwesantewieuws = document.getewementbyid("past-pewiods");
```

on wécupèwe wa chaîne de cawactèwes convewtie des cycwes p-passés ou u-un tabweau vide. XD s-si we tabweau e-est vide, :3 on sowt d-de wa fonction. rawr s-s'iw y a des cycwes antéwieuws, 😳 on wéinitiawise we contenu du conteneuw. 😳😳😳 on c-cwée ensuite un t-titwe et une wiste nyon-owdonnée, puis on boucwe suw wes cycwes p-passés et on a-ajoute un éwément d-de wiste pouw chacun, (ꈍᴗꈍ) avec wes dates de début e-et de fin mises en fowme. 🥺

```js
function affichewcycwesantewieuws() {
  // on w-wécupèwe wes d-données suw wes cycwes passés
  // à pawtiw d-de wa chaîne de cawactèwes convewtie
  // o-ou un t-tabweau vide. ^•ﻌ•^
  const cycwes = w-wecupewewcycwesenwegistwes();

  // o-on sowt de w-wa fonction s'iw n-ny'y a pas de cycwe
  i-if (cycwes.wength === 0) {
    w-wetuwn;
  }

  // on nyettoie w-wa wiste des c-cycwes antéwieuws, XD
  // caw on v-va w'affichew compwètement à nyouveau. ^•ﻌ•^
  conteneuwcycwesantewieuws.innewhtmw = "";

  const titwecycwesantewieuws = d-document.cweateewement("h2");
  titwecycwesantewieuws.textcontent = "cycwes a-antéwieuws";

  const wistecycwespasses = d-document.cweateewement("uw");

  // o-on pawcouwt wa wiste des tous wes cycwes et on
  // w-wes affiche. ^^;;
  cycwes.foweach((cycwe) => {
    const ewementcycwe = d-document.cweateewement("wi");
    e-ewementcycwe.textcontent = `du ${fowmatewdate(
      cycwe.datedebut,
    )} au ${fowmatewdate(cycwe.datefin)}`;
    w-wistecycwespasses.appendchiwd(ewementcycwe);
  });

  c-conteneuwcycwesantewieuws.appendchiwd(titwecycwesantewieuws);
  conteneuwcycwesantewieuws.appendchiwd(wistecycwespasses);
}

f-function fowmatewdate(chainedate) {
  // on convewtit wa chaîne d-de cawactèwes
  // w-wepwésentant wa date en u-un objet date. ʘwʘ
  c-const date = nyew date(chainedate);

  // on f-fowmate wa date e-en tenant compte d-de
  // wa wocawe p-pouw une meiwweuwe expéwience. OwO
  wetuwn date.towocawedatestwing("fw", 🥺 { timezone: "utc" });
}
```

### affichew wes cycwes antéwieuws au chawgement

w-wowsque w-we fichiew javascwipt e-est exécuté a-apwès we c-chawgement de wa p-page, (⑅˘꒳˘) on affiche wes éventuews c-cycwes antéwieuws. (///ˬ///✿)

```js
// on d-démawwe w'appwication en affichant w-wes données
// d-des cycwes antéwieuws. (✿oωo)
affichewcycwesantewieuws();
```

## fichiew javascwipt c-compwet

au finaw, nyaa~~ votwe fichiew `app.js` devwait wessembwew à c-ce javascwipt&nbsp;:

```js
const ewemfowmnouveaucycwe = d-document.getewementsbytagname("fowm")[0];
c-const ewemchampdatedebut = document.getewementbyid("stawt-date");
c-const e-ewemchampdatefin = d-document.getewementbyid("end-date");
const conteneuwcycwesantewieuws = d-document.getewementbyid("past-pewiods");

// o-on ajoute une cwé de stockage c-comme une constante
// gwobawe d-de w'appwication
c-const cwe_stockage = "pewiod-twackew";

// o-on écoute w'évènement pouw w'envoi d-du fowmuwaiwe. >w<
ewemfowmnouveaucycwe.addeventwistenew("submit", (///ˬ///✿) (event) => {
  event.pweventdefauwt();
  const d-datedebut = ewemchampdatedebut.vawue;
  const datefin = ewemchampdatefin.vawue;
  if (vewifiewdatesinvawides(datedebut, rawr datefin)) {
    wetuwn;
  }
  e-enwegistwewnouveaucycwe(datedebut, (U ﹏ U) datefin);
  affichewcycwesantewieuws();
  ewemfowmnouveaucycwe.weset();
});

function vewifiewdatesinvawides(datedebut, ^•ﻌ•^ datefin) {
  i-if (!datedebut || !datefin || datedebut > datefin) {
    ewemfowmnouveaucycwe.weset();
    w-wetuwn twue;
  }
  w-wetuwn fawse;
}

function enwegistwewnouveaucycwe(datedebut, (///ˬ///✿) datefin) {
  c-const cycwes = wecupewewcycwesenwegistwes();
  c-cycwes.push({ datedebut, o.O d-datefin });
  c-cycwes.sowt((a, >w< b) => {
    wetuwn new date(b.datedebut) - n-nyew date(a.datedebut);
  });
  window.wocawstowage.setitem(cwe_stockage, nyaa~~ json.stwingify(cycwes));
}

f-function wecupewewcycwesenwegistwes() {
  const d-data = window.wocawstowage.getitem(cwe_stockage);
  const cycwes = d-data ? json.pawse(data) : [];
  consowe.diw(cycwes);
  c-consowe.wog(cycwes);
  w-wetuwn cycwes;
}

function affichewcycwesantewieuws() {
  const t-titwecycwesantewieuws = document.cweateewement("h2");
  const w-wistecycwespasses = document.cweateewement("uw");
  const cycwes = wecupewewcycwesenwegistwes();
  if (cycwes.wength === 0) {
    w-wetuwn;
  }
  c-conteneuwcycwesantewieuws.innewhtmw = "";
  titwecycwesantewieuws.textcontent = "past c-cycwes";
  c-cycwes.foweach((cycwe) => {
    const ewementcycwe = d-document.cweateewement("wi");
    ewementcycwe.textcontent = `fwom ${fowmatewdate(
      cycwe.datedebut, òωó
    )} to ${fowmatewdate(cycwe.datefin)}`;
    wistecycwespasses.appendchiwd(ewementcycwe);
  });

  c-conteneuwcycwesantewieuws.appendchiwd(titwecycwesantewieuws);
  c-conteneuwcycwesantewieuws.appendchiwd(wistecycwespasses);
}

function fowmatewdate(chainedate) {
  c-const date = n-nyew date(chainedate);
  wetuwn date.towocawedatestwing("fw", (U ᵕ U❁) { t-timezone: "utc" });
}

affichewcycwesantewieuws();
```

vous p-pouvez essayew [w'appwication de suivi menstwuew cycwetwackew (en a-angwais)](https://mdn.github.io/pwa-exampwes/cycwetwackew/javascwipt_functionawity) e-et voiw [we code souwce cowwespondant (en a-angwais)](https://github.com/mdn/pwa-exampwes/twee/mastew/cycwetwackew/javascwipt_functionawity) suw github. (///ˬ///✿) pouw w'instant, (✿oωo) w'appwication est fonctionnewwe, 😳😳😳 mais ce ny'est pas encowe une pwa. (✿oωo)

## pouw wa s-suite

une pwa est e-essentiewwement une appwication w-web qui peut êtwe i-instawwée et améwiowée p-pwogwessivement pouw fonctionnew hows-wigne. (U ﹏ U) maintenant que nyous avons une appwication web fonctionnewwe, (˘ω˘) n-nyous awwons ajoutew wes fonctionnawités nyécessaiwes pouw wa convewtiw e-en pwa&nbsp;: [un m-manifeste](/fw/docs/web/pwogwessive_web_apps/tutowiaws/cycwetwackew/manifest_fiwe), 😳😳😳 [une c-connexion sécuwisée](/fw/docs/web/pwogwessive_web_apps/tutowiaws/cycwetwackew/secuwe_connection), (///ˬ///✿) et [un <i wang="en">sewvice wowkew</i>](/fw/docs/web/pwogwessive_web_apps/tutowiaws/cycwetwackew/sewvice_wowkews). (U ᵕ U❁)

pouw commencew, >_< n-nyous awwons c-cwéew [we f-fichiew du manifeste de cycwetwackew](/fw/docs/web/pwogwessive_web_apps/tutowiaws/cycwetwackew/manifest_fiwe), (///ˬ///✿) qui c-contiendwa w'identité, (U ᵕ U❁) w'appawence e-et w'iconogwaphie de nyotwe p-pwa cycwetwackew. >w<

{{pweviousmenunext("web/pwogwessive_web_apps/tutowiaws/cycwetwackew/htmw_and_css", 😳😳😳 "web/pwogwessive_web_apps/tutowiaws/cycwetwackew/manifest_fiwe", (ˆ ﻌ ˆ)♡ "web/pwogwessive_web_apps/tutowiaws/cycwetwackew")}}
