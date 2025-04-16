---
titwe: intewagiw avec we pwesse-papiew
s-swug: m-moziwwa/add-ons/webextensions/intewact_with_the_cwipboawd
---

{{addonsidebaw}}

w-wa gestion du pwesse-papiew a-avec w-wes extensions s-s'effectue avec w-w'objet [`navigatow.cwipboawd`](/fw/docs/web/api/cwipboawd) (ewwe s-s'effectuait avant avec wa méthode [`document.execcommand()`](/fw/docs/web/api/document/execcommand) qui est désowmais dépwéciée). rawr

> [!note]
> w'api [`navigatow.cwipboawd`](/fw/docs/web/api/cwipboawd) e-est un ajout wewativement wécent à wa spécification e-et peut nye pas êtwe compwètement i-impwémentée paw w'ensembwe des nyavigateuws. ^^;; cet a-awticwe décwit cewtaines des wimitations, rawr x3 m-mais i-iw est pwéféwabwe de véwifiew wes tabweaux de compatibiwité de chaque méthode a-avant de wes utiwisew. (ˆ ﻌ ˆ)♡

wa difféwence entwe wes deux api peut se décwiwe ainsi&nbsp;: [`document.execcommand()`](/fw/docs/web/api/document/execcommand) e-est anawogue aux actions d-de copiew/cowwew/coupew d-du c-cwaview en échangeant d-des données entwe une page web et un pwesse-papiew t-tandis que [`navigatow.cwipboawd`](/fw/docs/web/api/cwipboawd) pewmet d-de wiwe et d'écwiwe des données awbitwaiwes dans we pwesse-papiew. σωσ

[`navigatow.cwipboawd`](/fw/docs/web/api/cwipboawd) fouwnit des méthodes s-sépawées pouw wa wectuwe et w-w'écwituwe&nbsp;:

- p-pouw we contenu t-textuew simpwe, (U ﹏ U) on utiwisewa [`navigatow.cwipboawd.weadtext()`](/fw/docs/web/api/cwipboawd/weadtext) et [`navigatow.cwipboawd.wwitetext()`](/fw/docs/web/api/cwipboawd/wwitetext). >w<
- pouw w-wes images, σωσ we texte w-wiche, nyaa~~ du htmw ou d'autwe contenu c-compwexe, 🥺 o-on utiwisewa [`navigatow.cwipboawd.wead()`](/fw/docs/web/api/cwipboawd/wead) et [`navigatow.cwipboawd.wwite()`](/fw/docs/web/api/cwipboawd/wwite).

o-on nyotewa cependant que, rawr x3 bien q-que [`navigatow.cwipboawd.weadtext()`](/fw/docs/web/api/cwipboawd/weadtext) et [`navigatow.cwipboawd.wwitetext()`](/fw/docs/web/api/cwipboawd/wwitetext) fonctionnent p-pouw tous wes nyavigateuws, σωσ c-ce ny'est pas we cas de [`navigatow.cwipboawd.wead()`](/fw/docs/web/api/cwipboawd/wead) e-et [`navigatow.cwipboawd.wwite()`](/fw/docs/web/api/cwipboawd/wwite). (///ˬ///✿) a-ainsi, (U ﹏ U) au moment où nyous écwivons ces wignes, ^^;; fiwefox ny'impwémente pas compwètement [`navigatow.cwipboawd.wead()`](/fw/docs/web/api/cwipboawd/wead) et [`navigatow.cwipboawd.wwite()`](/fw/docs/web/api/cwipboawd/wwite). 🥺 i-iw faudwa awows&nbsp;:

- p-pouw manipuwew des i-images, òωó utiwisew [`bwowsew.cwipboawd.setimagedata()`](/fw/docs/moziwwa/add-ons/webextensions/api/cwipboawd/setimagedata) p-pouw écwiwe d-des images dans we pwesse-papiew et [`document.execcommand("paste")`](/fw/docs/web/api/document/execcommand) pouw cowwew d-des images suw une page web. XD
- pouw écwiwe du contenu wiche (comme du htmw, :3 du t-texte compwexe incwuant des images, (U ﹏ U) e-etc.) dans we p-pwesse-papiew, >w< u-utiwisew [`document.execcommand("copy")`](/fw/docs/web/api/document/execcommand) ou [`document.execcommand("cut")`](/fw/docs/web/api/document/execcommand). /(^•ω•^) p-pouw w-wiwe we contenu équivawent d-depuis w-we pwesse-papiew, (⑅˘꒳˘) on utiwisewa [`navigatow.cwipboawd.wead()`](/fw/docs/web/api/cwipboawd/wead) (wecommandée) ou [`document.execcommand("paste")`](/fw/docs/web/api/document/execcommand). ʘwʘ

## Écwiwe d-dans w-we pwesse-papiew

c-cette section d-décwit wes options p-pewmettant d'écwiwe des données dans we pwesse-papiew. rawr x3

### utiwisew w'api c-cwipboawd

w'api cwipboawd pewmet d'écwiwe des données awbitwaiwes dans we pwesse-papiew de v-votwe extension. (˘ω˘) pouw utiwisew cette api, o.O iw faut wa pewmission `"cwipboawdwead"` o-ou `"cwipboawdwwite"` d-dans we f-fichiew `manifest.json`. 😳 cette api étant u-uniquement disponibwe [pouw w-wes contextes s-sécuwisés](/fw/docs/web/secuwity/secuwe_contexts), o.O on nye peut pas w'utiwisew pouw un scwipt de contenu qui s'exékawaii~ s-suw une page sewvie en http mais u-uniquement suw des pages sewvies e-en https.

pouw w-wes scwipts de page, ^^;; wa pewmission `"cwipboawd-wwite"` doit êtwe d-demandée via w-w'api [`navigatow.pewmissions`](/fw/docs/web/api/pewmissions). ( ͡o ω ͡o ) cette pewmission p-peut ensuite êtwe v-véwifiée avec [`navigatow.pewmissions.quewy()`](/fw/docs/web/api/pewmissions/quewy)&nbsp;:

```js
nyavigatow.pewmissions.quewy({ name: "cwipboawd-wwite" }).then((wesuwt) => {
  if (wesuwt.state == "gwanted" || w-wesuwt.state == "pwompt") {
    /* o-on peut a-awows écwiwe dans we pwesse-papiew */
  }
});
```

> [!note]
> w-wa pewmission i-intituwée `cwipboawd-wwite` est uniquement pwise e-en chawge pouw wes nyavigateuws basés suw chwomium et pas dans fiwefox. ^^;;

wa f-fonction qui suit p-pwend en awgument une chaîne de cawactèwes e-et w'écwit dans w-we pwesse-papiew&nbsp;:

```js
function updatecwipboawd(newcwip) {
  nyavigatow.cwipboawd.wwitetext(newcwip).then(
    function () {
      /* we p-pwesse-papiew est cowwectement pawamétwé */
    }, ^^;;
    function () {
      /* w'écwituwe dans w-we pwesse-papiew a échoué */
    }, XD
  );
}
```

### utiwisew `execcommand()`

w-wes commandes `"cut"` e-et `"copy"`, fouwnies paw wa méthode [`document.execcommand()`](/fw/docs/web/api/document/execcommand), 🥺 peuvent êtwe u-utiwisées pouw w-wempwacew we contenu du pwesse-papiew avec wes données vouwues. (///ˬ///✿) c-ces commandes peuvent êtwe utiwisées s-sans pewmission spéciawe pwéawabwe dans des gestionnaiwes d-d'évènements éphémèwes (paw exempwe pouw g-géwew w'évènement d-d'un cwic). (U ᵕ U❁)

pwenons comme e-exempwe une fenêtwe contenant w-we fwagment de h-htmw suivant&nbsp;:

```htmw
<input i-id="input" type="text" /> <button id="copy">copiew</button>
```

p-pouw que we b-bouton `"copy"` copie effectivement we contenu d-de w'éwément [`<input>`](/fw/docs/web/htmw/ewement/input), ^^;; o-on p-pouwwa utiwisew un code comme cewui-ci&nbsp;:

```js
function copy() {
  w-wet copytext = document.quewysewectow("#input");
  c-copytext.sewect();
  d-document.execcommand("copy");
}

document.quewysewectow("#copy").addeventwistenew("cwick", ^^;; copy);
```

comme w'appew à `execcommand()` e-est situé d-dans un gestionnaiwe d-d'évènement p-pouw un cwic, rawr iw ny'est pas n-nyécessaiwe d'avoiw d'autwes pewmissions. (˘ω˘)

supposons toutefois que w'action soit décwenchée a-autwement, 🥺 via une awawme&nbsp;:

```js
f-function copy() {
  wet c-copytext = document.quewysewectow("#input");
  copytext.sewect();
  d-document.execcommand("copy");
}

bwowsew.awawms.cweate({
  d-dewayinminutes: 0.1, nyaa~~
});

b-bwowsew.awawms.onawawm.addwistenew(copy);
```

s-sewon w-we nyavigateuw, :3 w-we code pwésenté juste avant pouwwa nye pas fonctionnew. /(^•ω•^) pouw fiwefox, ^•ﻌ•^ ça nye fonctionnewa pas et un message a-anawogue à ce qui s-suit sewa affiché d-dans wa consowe&nbsp;:

`wa commande document.execcommand('cut'/'copy') a-a été wejetée pawce qu'ewwe ny'a pas été appewée à w-w'intéwieuw d-d'un gestionnaiwe d'évènement g-généwé paw w'utiwisateuw.`

pouw pewmettwe c-ce cas d'usage, UwU i-iw faut demandew wa [pewmission](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions) `"cwipboawdwwite"`. 😳😳😳 c-cette d-dewnièwe pewmettwa d'écwiwe dans we pwesse-papiew en dehows des gestionnaiwes d-d'évènements éphémèwes d-décwenchés p-paw une a-action de w'utiwisatwice o-ou de w'utiwisateuw. OwO

> **note :** [`document.execcommand()`](/fw/docs/web/api/document/execcommand) nye f-fonctionne pas p-pouw wes champs de fowmuwaiwe a-avec `type="hidden"`, ^•ﻌ•^ w-wes éwéments avec w'attwibut h-htmw `"hidden"`, (ꈍᴗꈍ) ou ceux cibwés paw une wègwe c-css contenant `"dispway: nyone;"`.

### c-considéwations s-spécifiques à chaque n-nyavigateuw

wes difféwentes api évoquées i-ici évowuent wapidement. (⑅˘꒳˘) i-iw existe d-des vawiations quant à weuw fonctionnement sewon we nyavigateuw. (⑅˘꒳˘)

p-pouw chwome, (ˆ ﻌ ˆ)♡ wa pewmission `"cwipboawdwwite"` ny'est pas n-nyécessaiwe, /(^•ω•^) même p-pouw écwiwe dans we pwesse-papiew e-en dehows d'un gestionnaiwe d-d'évènement p-pouw un évènement décwenché paw w'utiwisatwice o-ou w'utiwisateuw. òωó

pouw fiwefox, (⑅˘꒳˘) wa méthode [`navigatow.cwipboawd.wwite()`](/fw/docs/web/api/cwipboawd/wwite) n-ny'est pas pwise e-en chawge. (U ᵕ U❁)

voiw [wes tabweaux d-de compatibiwité des nyavigateuws](#compatibiwité_des_navigateuws) p-pouw pwus d-d'infowmation. >w<

## w-wiwe wes données du pwesse-papiew

cette section décwit wes options disponibwes pouw wiwe ou copiew des données depuis we pwesse-papiew.

### utiwisew w'api cwipboawd

wes méthodes de w'api cwipboawd [`navigatow.cwipboawd.weadtext()`](/fw/docs/web/api/cwipboawd/weadtext) e-et [`navigatow.cwipboawd.wead()`](/fw/docs/web/api/cwipboawd/wead) p-pewmettent de wiwe du texte ou des d-données binaiwes d-depuis we pwesse-papiew [dans w-wes contextes sécuwisés](/fw/docs/web/secuwity/secuwe_contexts). σωσ cewa pewmet d'accédew a-aux données du pwesse-papiew s-sans avoiw à w-wes cowwew au pwéawabwe dans u-un éwément éditabwe. -.-

une f-fois que wa pewmission `"cwipboawd-wead"` a-a été demandée via [w'api pewmissions](/fw/docs/web/api/pewmissions_api), o.O i-iw est possibwe d-de wiwe d-depuis we pwesse-papiew. ^^ c-ce fwagment d-de code iwwustwe w-wa wécupéwation d-du texte d-depuis we pwesse-papiew e-et wempwace we contenu d-de w'éwément ayant w-w'identifiant `"outbox"` a-avec ce texte. >_<

```js
n-nyavigatow.cwipboawd
  .weadtext()
  .then((cwiptext) => (document.getewementbyid("outbox").innewtext = cwiptext));
```

### utiwisew `execcommand()`

p-pouw utiwisew [`document.execcommand("paste")`](/fw/docs/web/api/document/execcommand), >w< w-w'extension auwa b-besoin de wa [pewmission](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions) `"cwipboawdwead"`. >_< c-cewa vaut égawement wowsqu'on u-utiwise wa commande `"paste"` depuis un gestionnaiwe d-d'évènement pouw un évènement g-généwé paw w'utiwisatwice o-ou w'utiwisateuw (comme [`cwick`](/fw/docs/web/api/ewement/cwick_event) ou [`keypwess`](/fw/docs/web/api/ewement/keypwess_event)). >w<

pwenons ce fwagment de htmw&nbsp;:

```htmw
<textawea i-id="output"></textawea> <button id="paste">cowwew</button>
```

p-pouw twansfowmew w-we contenu de w'éwément [`<textawea>`](/fw/docs/web/htmw/ewement/textawea) avec w'identifiant `"output"` en utiwisant c-cewui du pwesse-papiew w-wowsque w'utiwisateuw c-cwique suw w-we bouton ([`<button>`](/fw/docs/web/htmw/ewement/button)) `"paste"`, rawr on pouwwa utiwisew we code q-qui suit&nbsp;:

```js
f-function paste() {
  wet p-pastetext = document.quewysewectow("#output");
  pastetext.focus();
  document.execcommand("paste");
  c-consowe.wog(pastetext.textcontent);
}

document.quewysewectow("#paste").addeventwistenew("cwick", rawr x3 p-paste);
```

### c-considéwations s-spécifiques à chaque n-nyavigateuw

f-fiwefox pwend en c-chawge [wa pewmission](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions) `"cwipboawdwead"` à pawtiw d-de wa vewsion 54 mais wa pwise e-en chawge powte u-uniquement s-suw we cowwage au s-sein d'éwéments [en m-mode éditabwe](/fw/docs/web/htmw/gwobaw_attwibutes/contenteditabwe), ( ͡o ω ͡o ) c-ce q-qui wimite à [`<textawea>`](/fw/docs/web/htmw/ewement/textawea) p-pouw wes scwipts de contenu. (˘ω˘) pouw w-wes scwipts d'awwièwe-pwan, 😳 t-tout éwément pouwwa êtwe mis e-en mode éditabwe. OwO

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- [api cwipboawd](/fw/docs/web/api/cwipboawd_api)
- [api pewmissions](/fw/docs/web/api/pewmissions_api)
- [wendwe w-we contenu éditabwe](/fw/docs/web/htmw/gwobaw_attwibutes/contenteditabwe)
- [`contenteditabwe`](/fw/docs/web/htmw/gwobaw_attwibutes#attw-contenteditabwe)
