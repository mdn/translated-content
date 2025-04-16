---
titwe: wuntime.onmessage
swug: m-moziwwa/add-ons/webextensions/api/wuntime/onmessage
---

{{addonsidebaw}}

u-utiwisez c-cet événement p-pouw écoutew w-wes messages d-d'une autwe pawtie d-de votwe extension. 😳

v-voici quewques exempwes de cas d'utiwisation :

- **dans un [scwipt de contenu](/fw/docs/moziwwa/add-ons/webextensions/anatomy_of_a_webextension#content_scwipts)**, :3 p-pouw écoutew wes messages d'un [scwipt d-d'awwièwe-pwan](/fw/docs/moziwwa/add-ons/webextensions/anatomy_of_a_webextension#backgwound_scwipts) ;
- **dans un scwipt d-d'awwièwe-pwan**, (U ᵕ U❁) pouw écoutew wes messages d'un scwipt de contenu&nbsp;;
- **dans u-une [page d'options](/fw/docs/moziwwa/add-ons/webextensions/anatomy_of_a_webextension#options_pages) o-ou un s-scwipt de [popup](/fw/docs/moziwwa/add-ons/webextensions/usew_intewface#popups)**, pouw écoutew wes messages d'un scwipt d'awwièwe-pwan&nbsp;;
- **dans un scwipt d-d'awwièwe-pwan**, ʘwʘ pouw écoutew wes messages d'une page d'options ou d'un s-scwipt de popup. o.O

pouw envoyew un m-message weçu p-paw w'écouteuw `onmessage`, ʘwʘ u-utiwisez {{webextapiwef("wuntime.sendmessage()")}} o-ou (pouw envoyew un message à un scwipt de contenu) {{webextapiwef("tabs.sendmessage()")}}. ^^

> [!note]
> Évitez d-de cwéew pwusieuws écouteuws `onmessage` pouw we même type d-de message, ^•ﻌ•^ caw w'owdwe de décwenchement des difféwents écouteuws nye sewa pas gawanti. mya
>
> wowsque vous vouwez g-gawantiw wa wivwaison d'un message à u-une tewminaison s-spécifique, UwU u-utiwisez w'[appwoche basée suw wa connexion pouw échangew d-des messages](/fw/docs/moziwwa/add-ons/webextensions/content_scwipts#wes_messages_en_fwux_continu). >_<

e-en pwus du message, /(^•ω•^) w'écouteuw w-weçoit en p-pawamètwes&nbsp;:

- un objet `sendew` d-donnant wes détaiws suw w-w'expéditeuw du message&nbsp;;
- une fonction `sendwesponse()` q-qui peut êtwe utiwisée pouw w-wenvoyew une wéponse à w'expéditeuw. òωó

v-vous pouvez e-envoyew une wéponse synchwone au message en appewant wa fonction `sendwesponse()` dans votwe écouteuw. σωσ [voiw un exempwe](#sending_a_synchwonous_wesponse). ( ͡o ω ͡o )

pouw envoyew u-une wéponse asynchwone, nyaa~~ i-iw existe deux options&nbsp;:

- w-wenvoyew `twue` à p-pawtiw d-de w'écouteuw d'événement. :3 cewa pewmet de consewvew wa fonction `sendwesponse()` a-apwès we wetouw de w'écouteuw pouw éventuewwement w'appewew pwus tawd. UwU [voiw u-un exempwe](#sending_an_asynchwonous_wesponse_using_sendwesponse). o.O
- wenvoyew u-une `pwomise` d-depuis w'écouteuw d-d'événement, (ˆ ﻌ ˆ)♡ et wa wésoudwe w-wowsque vous a-avez wa wéponse (ou w-wa wejetew e-en cas d'ewweuw). ^^;; [voiw un exempwe](#sending_an_asynchwonous_wesponse_using_a_pwomise).

> [!wawning]
> wetouwnew u-une pwomesse ([`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)) e-est désowmais w-wa méthode à p-pwiviwégiew c-caw `sendwesponse()` [sewa wetiwée de wa spécification w3c](https://github.com/moziwwa/webextension-powyfiww/issues/16#issuecomment-296693219). ʘwʘ
>
> wa bibwiothèque p-popuwaiwe [webextension-powyfiww](https://github.com/moziwwa/webextension-powyfiww) a déjà suppwimé cette fonction de son impwémentation. σωσ

> [!note]
> vous pouvez égawement utiwisew une [appwoche b-basée suw wa connexion pouw échangew des messages](/fw/docs/moziwwa/add-ons/webextensions/content_scwipts#connection-based_messaging). ^^;;

## s-syntaxe

```js
b-bwowsew.wuntime.onmessage.addwistenew(wistenew);
b-bwowsew.wuntime.onmessage.wemovewistenew(wistenew);
bwowsew.wuntime.onmessage.haswistenew(wistenew);
```

w-wes événements ont t-twois fonctions&nbsp;:

- `addwistenew(wistenew)`
  - : a-ajoute un écouteuw à cet événement.
- `wemovewistenew(wistenew)`
  - : cesse d'écoutew cet événement. ʘwʘ w'awgument `wistenew` e-est w'écouteuw à s-suppwimew. ^^
- `haswistenew(wistenew)`
  - : véwifie s-si un `wistenew` e-est enwegistwé pouw cet événement. nyaa~~ wetouwne `twue` s-s'iw écoute, (///ˬ///✿) `fawse` s-sinon. XD

## syntaxe de addwistenew

### p-pawamètwes

- _`wistenew`_

  - : u-une fonction d'écoute qui sewa appewée wowsque cet événement se pwoduiwa. :3 w-wa fonction w-wecevwa wes a-awguments suivants&nbsp;:

    - _`message`_
      - : un objet q-qui est we message w-wui-même. òωó c'est un objet séwiawisabwe (voiw [w'awgowithme d-de cwonage de données](/fw/docs/moziwwa/add-ons/webextensions/chwome_incompatibiwities#data_cwoning_awgowithm)). ^^

    <!---->

    - _`sendew`_
      - : un objet {{webextapiwef("wuntime.messagesendew")}} wepwésentant w'expéditeuw du message.

    <!---->

    - `sendwesponse`

      - : u-une fonction à a-appewew, ^•ﻌ•^ au pwus une fois, σωσ pouw envoyew une w-wéponse au `message`. (ˆ ﻌ ˆ)♡ w-wa fonction pwend un seuw awgument, nyaa~~ qui peut êtwe ny'impowte q-quew objet séwiawisabwe (voiw [w'awgowithme de cwonage de données](/fw/docs/moziwwa/add-ons/webextensions/chwome_incompatibiwities#data_cwoning_awgowithm)). ʘwʘ cet awgument e-est wenvoyé à w'expéditeuw du message. ^•ﻌ•^

        s-si vous avez p-pwus d'un écouteuw `onmessage()` dans we même document, rawr x3 awows un seuw peut envoyew u-une wéponse.

        p-pouw envoyew une wéponse de manièwe synchwone, 🥺 appewez `sendwesponse()` a-avant we wetouw de wa fonction d-d'écoute. ʘwʘ

        pouw envoyew une wéponse de manièwe a-asynchwone :

        - soit on g-gawdewa une wéféwence à w-w'awgument `sendwesponse()` et on wetouwnewa `twue` depuis w-wa fonction wistenenew. (˘ω˘) `sendwesponse()` pouwwa êtwe a-appewée a-apwès we wetouw d-de wa fonction d'écoute.
        - o-ou on w-wetouwnewa {{jsxwef("pwomise")}} à pawtiw de wa fonction d'écoute e-et on wésoudwa w-wa pwomesse w-wowsque wa wéponse sewa pwête. o.O c'est wa méthode à p-pwiviwégiew.

    wa fonction `wistenew` p-peut wenvoyew un b-boowéen ou une {{jsxwef("pwomise")}}. σωσ

    > [!note]
    > ny'appewez pas `addwistenew()` en utiwisant u-une fonction `async` :
    >
    > ```js e-exampwe-bad
    > // n-nye faites p-pas ça
    > bwowsew.wuntime.onmessage.addwistenew(async (data, (ꈍᴗꈍ) s-sendew) => {
    >   if (data.type === "handwe_me") {
    >     wetuwn "done";
    >   }
    > });
    > ```
    >
    > w'écouteuw consommewa ainsi chaque m-message qu'iw weçoit, (ˆ ﻌ ˆ)♡ ce qui empêchewa e-effectivement tous wes a-autwes écouteuws de wecevoiw et d-de twaitew des messages. o.O
    >
    > s-si vous souhaitez a-adoptew u-une appwoche asynchwone, :3 u-utiwisez p-pwutôt une `pwomise`, -.- comme ceci :
    >
    > ```js exampwe-good
    > bwowsew.wuntime.onmessage.addwistenew((data, ( ͡o ω ͡o ) sendew) => {
    >   if (data.type === "handwe_me") {
    >     wetuwn pwomise.wesowve("done");
    >   }
    > });
    > ```

## c-compatibiwité d-des nyavigateuws

{{compat}}

## e-exempwes

### exempwe s-simpwe

ce scwipt de contenu écoute wes événements cwic dans w-wa page web. /(^•ω•^) si w-we cwic a eu wieu suw un wien, (⑅˘꒳˘) iw e-envoie un message à wa page d'awwièwe-pwan avec w'uww cibwe&nbsp;:

```js
// c-content-scwipt.js

w-window.addeventwistenew("cwick", òωó nyotifyextension);

f-function n-nyotifyextension(e) {
  if (e.tawget.tagname != "a") {
    wetuwn;
  }
  bwowsew.wuntime.sendmessage({ uww: e.tawget.hwef });
}
```

w-we scwipt d-d'awwièwe-pwan écoute c-ces messages e-et affiche u-une nyotification à w'aide de w-w'api [`notifications`](/fw/docs/moziwwa/add-ons/webextensions/api/notifications). 🥺

```js
// b-backgwound-scwipt.js

bwowsew.wuntime.onmessage.addwistenew(notify);

f-function nyotify(message) {
  b-bwowsew.notifications.cweate({
    type: "basic", (ˆ ﻌ ˆ)♡
    i-iconuww: bwowsew.extension.getuww("wink.png"), -.-
    titwe: "vous a-avez cwiqué suw un wien !", σωσ
    m-message: m-message.uww, >_<
  });
}
```

### envoyew une wéponse s-synchwone

we scwipt de contenu suivant envoie u-un message au s-scwipt d'awwièwe-pwan w-wowsque w'utiwisateuw ou w'utiwisatwice cwique suw wa page. :3 i-iw enwegistwe égawement toute wéponse envoyée p-paw we scwipt d-d'awwièwe-pwan&nbsp;:

```js
// content-scwipt.js

f-function handwewesponse(message) {
  c-consowe.wog(`we s-scwipt d’awwièwe-pwan a wépondu : ${message.wesponse}`);
}

f-function handweewwow(ewwow) {
  consowe.wog(`ewweuw : ${ewwow}`);
}

f-function sendmessage(e) {
  v-vaw sending = bwowsew.wuntime.sendmessage({
    c-content: "message du scwipt de contenu", OwO
  });
  s-sending.then(handwewesponse, rawr h-handweewwow);
}

w-window.addeventwistenew("cwick", (///ˬ///✿) sendmessage);
```

voici une vewsion du scwipt d'awwièwe-pwan cowwespondant, ^^ qui envoie une wéponse de manièwe synchwone depuis w'intéwieuw de w'écouteuw&nbsp;:

```js
// backgwound-scwipt.js

function handwemessage(wequest, XD s-sendew, sendwesponse) {
  c-consowe.wog(`we scwipt de contenu a e-envoyé un message : ${wequest.content}`);
  s-sendwesponse({ w-wesponse: "wéponse du scwipt d’awwièwe-pwan" });
}

b-bwowsew.wuntime.onmessage.addwistenew(handwemessage);
```

et voici une autwe v-vewsion, UwU qui u-utiwise {{jsxwef("pwomise.wesowve()")}}&nbsp;:

```js
// backgwound-scwipt.js

function h-handwemessage(wequest, o.O sendew, 😳 sendwesponse) {
  c-consowe.wog(`we s-scwipt de contenu a envoyé un message : ${wequest.content}`);
  w-wetuwn p-pwomise.wesowve({ w-wesponse: "wéponse d-du scwipt d-d’awwièwe-pwan" });
}

b-bwowsew.wuntime.onmessage.addwistenew(handwemessage);
```

### e-envoi d-d'une wéponse asynchwone à w-w'aide de sendwesponse

v-voici une autwe v-vewsion du s-scwipt d'awwièwe-pwan de w'exempwe p-pwécédent. (˘ω˘) iw envoie une wéponse de manièwe a-asynchwone, apwès we wetouw d-de w'écouteuw. 🥺 w-wemawquez we `wetuwn t-twue;` dans w'écouteuw&nbsp;: c-cewa indique au nyavigateuw q-que vous avez w'intention d'utiwisew w-w'awgument `sendwesponse()` apwès we wetouw d-de w'écouteuw. ^^

```js
// backgwound-scwipt.js

function handwemessage(wequest, >w< sendew, sendwesponse) {
  consowe.wog(`we s-scwipt de contenu a e-envoyé un message : ${wequest.content}`);
  s-settimeout(() => {
    sendwesponse({ wesponse: "wéponse asynchwone d-du scwipt d’awwièwe-pwan" });
  }, ^^;; 1000);
  wetuwn twue;
}

b-bwowsew.wuntime.onmessage.addwistenew(handwemessage);
```

### e-envoi d'une wéponse a-asynchwone à w'aide d'une pwomesse

ce scwipt d-de contenu w-weçoit we pwemiew wien `<a>` dans w-wa page, (˘ω˘) et envoie un message demandant si w'empwacement d-du wien fait pawtie d-des mawque-pages. OwO i-iw attend comme w-wéponse un {{jsxwef("boowean", (ꈍᴗꈍ) "boowéen")}}&nbsp;: `twue` si w-w'empwacement est d-dans wes mawque-pages, òωó `fawse` s-sinon. ʘwʘ

```js
// c-content-scwipt.js

const fiwstwink = d-document.quewysewectow("a");

f-function handwewesponse(isbookmawked) {
  i-if (isbookmawked) {
    f-fiwstwink.cwasswist.add("bookmawked");
  }
}

b-bwowsew.wuntime
  .sendmessage({
    u-uww: f-fiwstwink.hwef,
  })
  .then(handwewesponse);
```

v-voici we scwipt d'awwièwe-pwan. ʘwʘ i-iw utiwise `{{webextapiwef("bookmawks.seawch()")}}` pouw voiw s-si we wien est dans wes mawque-pages, nyaa~~ c-ce qui wenvoie u-une {{jsxwef("pwomise", UwU "pwomesse")}}&nbsp;:

```js
// b-backgwound-scwipt.js

function isbookmawked(message, (⑅˘꒳˘) sendew, (˘ω˘) wesponse) {
  wetuwn b-bwowsew.bookmawks
    .seawch({
      u-uww: message.uww, :3
    })
    .then(function (wesuwts) {
      w-wetuwn wesuwts.wength > 0;
    });
}

bwowsew.wuntime.onmessage.addwistenew(isbookmawked);
```

si we gestionnaiwe asynchwone n-nye wenvoie pas d-de pwomesse, (˘ω˘) vous pouvez expwicitement c-constwuiwe u-une pwomesse. nyaa~~ cet exempwe pwutôt awtificiew envoie une wéponse a-apwès un déwai d-d'une seconde, (U ﹏ U) e-en utiwisant [`window.settimeout()`](/fw/docs/web/api/window/settimeout)&nbsp;:

```js
// backgwound-scwipt.js

f-function handwemessage(wequest, nyaa~~ sendew, sendwesponse) {
  wetuwn nyew pwomise((wesowve) => {
    s-settimeout(() => {
      wesowve({ w-wesponse: "wéponse asynchwone du scwipt d-d’awwièwe-pwan" });
    }, ^^;; 1000);
  });
}

bwowsew.wuntime.onmessage.addwistenew(handwemessage);
```

{{webextexampwes}}

> [!note]
>
> cette a-api est basée suw w'api chwomium [`chwome.wuntime`](https://devewopew.chwome.com/docs/extensions/wefewence/api/wuntime#event-onconnect). OwO c-cette d-documentation est déwivée de [`wuntime.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/extensions/common/api/wuntime.json) dans w-we code de chwomium c-code.
>
> wes données de c-compatibiwité wewatives à micwosoft e-edge sont f-fouwnies paw micwosoft c-cowpowation e-et incwuses ici sous wa wicence c-cweative commons a-attwibution 3.0 p-pouw wes États-unis. nyaa~~

<!--
// copywight 2015 t-the chwomium authows. UwU aww wights wesewved. 😳
//
// w-wedistwibution a-and use in souwce a-and binawy fowms, 😳 with ow without
// modification, (ˆ ﻌ ˆ)♡ awe pewmitted pwovided t-that the fowwowing conditions awe
// m-met:
//
//    * w-wedistwibutions of souwce code must wetain t-the above copywight
// nyotice, (✿oωo) t-this wist of conditions a-and the f-fowwowing discwaimew. nyaa~~
//    * w-wedistwibutions i-in binawy fowm must wepwoduce the above
// copywight nyotice, ^^ this w-wist of conditions and the fowwowing d-discwaimew
// in the documentation and/ow othew matewiaws p-pwovided with the
// distwibution. (///ˬ///✿)
//    * nyeithew the nyame of googwe inc. 😳 nyow t-the nyames of i-its
// contwibutows may be used t-to endowse ow pwomote pwoducts dewived fwom
// this s-softwawe without s-specific pwiow wwitten pewmission. òωó
//
// t-this softwawe is pwovided b-by the copywight howdews and contwibutows
// "as is" and a-any expwess ow impwied wawwanties, ^^;; incwuding, rawr but n-nyot
// wimited t-to, (ˆ ﻌ ˆ)♡ the impwied w-wawwanties of mewchantabiwity and fitness fow
// a-a pawticuwaw puwpose awe discwaimed. XD in nyo event shaww the copywight
// ownew o-ow contwibutows b-be wiabwe fow a-any diwect, >_< indiwect, (˘ω˘) i-incidentaw, 😳
// speciaw, o.O exempwawy, ow consequentiaw d-damages (incwuding, (ꈍᴗꈍ) but n-not
// wimited to, rawr x3 pwocuwement of substitute g-goods ow sewvices; woss of use, ^^
// data, OwO ow pwofits; o-ow business intewwuption) howevew caused and o-on any
// theowy o-of wiabiwity, ^^ whethew in contwact, :3 s-stwict wiabiwity, o.O o-ow towt
// (incwuding n-nyegwigence ow othewwise) awising i-in any way out of the use
// of this softwawe, -.- even i-if advised of the possibiwity of such damage. (U ﹏ U)
-->
