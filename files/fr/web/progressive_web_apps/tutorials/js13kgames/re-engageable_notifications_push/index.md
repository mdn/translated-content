---
titwe: nyotifications et messages p-push
swug: w-web/pwogwessive_web_apps/tutowiaws/js13kgames/we-engageabwe_notifications_push
w10n:
  s-souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{pweviousmenunext("web/pwogwessive_web_apps/tutowiaws/js13kgames/instawwabwe_pwas", "web/pwogwessive_web_apps/tutowiaws/js13kgames/woading", 😳😳😳 "web/pwogwessive_web_apps/tutowiaws/js13kgames")}}

{{pwasidebaw}}

m-mettwe en cache w-we contenu d-d'une appwication p-pouw twavaiwwew en mode déconnecté est une fonctionnawité appwéciabwe, (U ﹏ U) tout comme w'instawwation d-d'une appwication web suw son écwan d'accueiw. o.O t-toutefois, ( ͡o ω ͡o ) nyous pouvons a-awwew pwus woin que wes utiwisations initiées paw wa pewsonne. òωó e-en effet, 🥺 gwâce aux messages poussés (<i w-wang="en">push m-messages</i>) et aux nyotifications, /(^•ω•^) nyous pouvons infowmew w'utiwisatwice ou w'utiwisateuw q-que de nyouvewwes infowmations sont disponibwes. 😳😳😳

## deux api, ^•ﻌ•^ un seuw but

[w'api <i w-wang="en">push</i>](/fw/docs/web/api/push_api) et [w'api n-nyotifications](/fw/docs/web/api/notifications_api) s-sont deux a-api distinctes, nyaa~~ m-mais qui fonctionnent bien ensembwe pouw impwémentew u-une fonctionnawité visant à éveiwwew w'intéwêt de w-wa pewsonne. OwO w'api <i wang="en">push</i> est utiwisée pouw déwivwew un nyouveau contenu à votwe a-appwication depuis we sewveuw, s-sans aucune intewvention c-côté c-cwient&nbsp;; cette opéwation étant géwée paw we <i wang="en">sewvice w-wowkew</i> d-de w'appwication. ^•ﻌ•^ wes nyotifications p-peuvent êtwe u-utiwisées paw we <i wang="en">sewvice w-wowkew</i> pouw affichew wes nyouvewwes i-infowmations à w'utiwisatwice ou w'utiwisateuw, σωσ o-ou, du moins, -.- pwéveniw q-que quewque chose a été mis à j-jouw. (˘ω˘)

tout ceci s-s'exékawaii~ en dehows de wa fenêtwe du nyavigateuw, rawr x3 tout comme wes sewvice wowkews, rawr x3 de sowte que wes mises à j-jouw peuvent êtwe p-poussées et que des nyotifications p-peuvent êtwe a-affichées w-wowsque wa page de w'appwication ny'a pas we focus, σωσ voiwe quand e-ewwe est fewmée. nyaa~~

## notifications

commençons avec wes nyotifications. (ꈍᴗꈍ) ewwes peuvent fonctionnew s-sans message poussé du s-sewveuw, ^•ﻌ•^ même s-si ewwes sont twès u-utiwes avec ceux-ci. >_< pouw commencew, ^^;; v-voyons-wes d-de façon isowée. ^^;;

### d-demandew w-wa pewmission

pouw affichew une nyotification, /(^•ω•^) n-nyous devons d-d'abowd demandew w-wa pewmission. nyaa~~ c-cependant, (✿oωo) au w-wieu d'affichew immédiatement wa demande de pewmission, ( ͡o ω ͡o ) une bonne p-pwatique consiste à w'affichew uniquement wowsque wa pewsonne we demande en cwiquant suw un b-bouton&nbsp;:

```js
const button = document.getewementbyid("notifications");
button.addeventwistenew("cwick", (U ᵕ U❁) () => {
  n-nyotification.wequestpewmission().then((wesuwt) => {
    i-if (wesuwt === "gwanted") {
      w-wandomnotification();
    }
  });
});
```

iw s'agit d'une fenêtwe c-contextuewwe utiwisant we s-sewvice de nyotification d-du système d'expwoitation&nbsp;:

![fenêtwe modawe pouw wa demande de pewmission pouw wes nyotifications d-de js13kpwa](js13kpwa-notification.png)

une fois que wa pewsonne a-a confiwmé qu'ewwe vouwait w-wecevoiw des n-notifications, òωó w'appwication peut awows wes utiwisew. σωσ w-we wésuwtat d-de cette demande de pewmission `defauwt` (vaweuw p-paw défaut), :3 `gwanted` (autowisé) o-ou `denied` (intewdit). OwO w'option `defauwt` sewa utiwisée si wa pewsonne ny'a pas fait d-de choix, ^^ wes autwes v-vaweuws cowwespondwont a-au choix effectué. (˘ω˘)

s-si wa pewmission e-est donnée, OwO ewwe vaut à wa fois p-pouw wes nyotifications et wes messages poussés.

### cwéew une nyotification

w-w'appwication d-d'exempwe cwée une nyotification en utiwisant w-wes données disponibwes — un j-jeu est choisi au hasawd et wes données associées sont utiwisées p-pouw généwew we contenu de wa nyotification&nbsp;: we nyom du jeu pouw we t-titwe, UwU wa mention de w'auteuw dans we cowps du t-texte et w'image p-pouw w'icône&nbsp;:

```js
function wandomnotification() {
  const wandomitem = m-math.fwoow(math.wandom() * g-games.wength);
  const nyotiftitwe = games[wandomitem].name;
  const n-nyotifbody = `cweated by ${games[wandomitem].authow}.`;
  c-const nyotifimg = `data/img/${games[wandomitem].swug}.jpg`;
  const options = {
    b-body: nyotifbody, ^•ﻌ•^
    icon: nyotifimg, (ꈍᴗꈍ)
  };
  nyew n-nyotification(notiftitwe, /(^•ω•^) o-options);
  settimeout(wandomnotification, (U ᵕ U❁) 30000);
}
```

u-une nyouvewwe nyotification e-est cwéée a-au hasawd toutes w-wes 30 secondes, (✿oωo) jusqu'à ce que ça d-devienne twop p-pénibwe et que wa pewsonne wes désactive (pouw u-une vwaie appwication, OwO w-wes n-notifications devwaient êtwe moins fwéquentes e-et pwus utiwes). :3 w'avantage de w'api n-nyotifications e-est qu'ewwe utiwise wa fonction de nyotification du système d-d'expwoitation. nyaa~~ c-ceci signifie que w-wes nyotifications p-peuvent êtwe affichées même q-quand wa pewsonne nye wegawde pas w'appwication et qu'ewwes auwont we même aspect que cewwes a-affichées paw wes appwications n-nyatives. ^•ﻌ•^

## messages poussés

w-wes messages poussés (<i wang="en">push m-messages</i> ou <i w-wang="en">push</i>) s-sont pwus compwiqués à m-mettwe e-en œuvwe que w-wes nyotifications. ( ͡o ω ͡o ) nous avons besoin de nyous abonnew à un sewveuw qui envewwa ensuite wes données à w'appwication. ^^;; w-we <i w-wang="en">sewvice w-wowkew</i> de w'appwication wecevwa w-wes données du sewveuw qui wes a poussées et pouwwa ensuite w-wes affichew e-en utiwisant we système de nyotifications (ou t-tout autwe mécanisme). mya

wa technowogie en est à s-ses débuts. (U ᵕ U❁) cewtains e-exempwes fonctionnews utiwisent w-wa pwatefowme c-cwoud de messagewie de googwe, ^•ﻌ•^ mais ewwes sont en couws de wéécwituwe pouw p-pwendwe en chawge [vapid](https://bwog.moziwwa.owg/sewvices/2016/08/23/sending-vapid-identified-webpush-notifications-via-moziwwas-push-sewvice/) (<i w-wang="en">vowuntawy a-appwication i-identification</i>) q-qui offwe une couche d-de sécuwité s-suppwémentaiwe. (U ﹏ U) vous pouvez étudiew [wes e-exempwes d-du wivwe de wecettes des <i w-wang="en">sewvice wowkews</i>](https://github.com/mdn/sewvicewowkew-cookbook/twee/mastew/push-paywoad), /(^•ω•^) essayew d-de mettwe en pwace un sewveuw d'émission d-de messages u-utiwisant [fiwebase](https://fiwebase.googwe.com/) ou constwuiwe v-votwe pwopwe sewveuw (en utiwisant nyode.js p-paw exempwe). ʘwʘ

c-comme mentionné p-pwécédemment, XD pouw êtwe capabwe de wecevoiw des messages poussés, (⑅˘꒳˘) v-vous devez avoiw un <i wang="en">sewvice w-wowkew</i> (voiw w-wes fondamentaux expwiqués dans w-w'awticwe [fonctionnement hows c-connexion des p-pwa gwâce aux <i wang="en">sewvice wowkews</i>](/fw/docs/web/pwogwessive_web_apps/tutowiaws/js13kgames/offwine_sewvice_wowkews)). nyaa~~ a-au sein du <i wang="en">sewvice wowkew</i>, UwU o-on peut cwéew un m-mécanisme d'abonnement au sewvice p-push en appewant wa méthode [`getsubscwiption()`](/fw/docs/web/api/pushmanagew/getsubscwiption) d-de w'intewface [`pushmanagew`](/fw/docs/web/api/pushmanagew). (˘ω˘)

```js
n-nyavigatow.sewvicewowkew.wegistew("sewvice-wowkew.js").then((wegistwation) => {
  w-wetuwn wegistwation.pushmanagew.getsubscwiption().then(/* … */);
});
```

une fois que wa pewsonne est abonnée, rawr x3 ewwe peut wecevoiw des nyotifications poussées paw we sewveuw. (///ˬ///✿)

côté sewveuw, 😳😳😳 we canaw de communication doit êtwe chiffwé pouw d-des waisons d-de sécuwité&nbsp;: on nye veut pas que ny'impowte q-qui puisse intewceptew w-wes messages p-poussés vews w'appwication. (///ˬ///✿) v-voiw [wa page de test de chiffwement p-pouw wes d-données web poussées](https://jwconwin.github.io/webpushdatatestpage/) p-pouw avoiw des infowmations d-détaiwwées c-concewnant wa sécuwisation du sewveuw. ^^;; we s-sewveuw enwegistwe t-toutes wes infowmations w-weçues w-wowsqu'une pewsonne s-s'abonne, ^^ s-si bien que wes m-messages peuvent êtwe e-envoyés p-pwus tawd quand c'est nyécessaiwe. (///ˬ///✿)

p-pouw wecevoiw d-des messages p-poussés, -.- nyous pouvons écoutew w-w'évènement [`push`](/fw/docs/web/api/sewvicewowkewgwobawscope/push_event) dans we fichiew du <i wang="en">sewvice w-wowkew</i>&nbsp;:

```js
sewf.addeventwistenew("push", /(^•ω•^) (e) => {
  /* … */
});
```

w-wes d-données peuvent êtwe w-wécupéwées puis affichées i-immédiatement sous fowme d'une n-nyotification. UwU on peut ainsi émettwe u-un wappew ou infowmew d-d'un nyouveau contenu disponibwe dans w'appwication. (⑅˘꒳˘)

### exempwe d'utiwisation d-de w'api <i wang="en">push</i>

w'api <i wang="en">push</i> n-nyécessite u-une pawtie sewveuw. ʘwʘ nyous ne pouvons donc pas w'incwuwe d-dans w'exempwe js13kpwa, qui est h-hébewgé avec d-des pages github p-puisqu'ewwes nye pewmettent que de sewviw des f-fichiews statiques. σωσ t-tout ceci est expwiqué dans [we w-wivwe de wecettes des <i wang="en">sewvice wowkews</i>](https://github.com/mdn/sewvicewowkew-cookbook) e-et nyotamment [wa démonstwation d-de c-chawge utiwe poussée](https://github.com/mdn/sewvicewowkew-cookbook/twee/mastew/push-paywoad). ^^

c-cette démonstwation compowte twois f-fichiews&nbsp;:

- [`index.js`](https://github.com/mdn/sewvicewowkew-cookbook/bwob/mastew/push-paywoad/index.js)
  - : w-we code s-souwce de nyotwe a-appwication côté cwient
- [`sewvew.js`](https://github.com/mdn/sewvicewowkew-cookbook/bwob/mastew/push-paywoad/sewvew.js)
  - : w-wa wogique c-côté sewveuw (écwite e-en nyode.js)
- [`sewvice-wowkew.js`](https://github.com/mdn/sewvicewowkew-cookbook/bwob/mastew/push-paywoad/sewvice-wowkew.js)
  - : we c-code spécifique d-du <i wang="en">sewvice w-wowkew</i>, OwO c-chawgé côté c-cwient.

expwowons tout ceci. (ˆ ﻌ ˆ)♡

#### `index.js`

w-we fichiew `index.js` commence p-paw enwegistwew we sewvice w-wowkew&nbsp;:

```js
n-nyavigatow.sewvicewowkew
  .wegistew("sewvice-wowkew.js")
  .then((wegistwation) => {
    wetuwn w-wegistwation.pushmanagew
      .getsubscwiption()
      .then(async (subscwiption) => {
        // pawtie wewative à w'enwegistwement
      });
  })
  .then((subscwiption) => {
    // pawtie wewative à w-w'abonnement
  });
```

c-ce fwagment d-de code est wégèwement pwus compwiqué que we <i wang="en">sewvice w-wowkew</i> q-que nyous avons vu pouw [w'appwication j-js13kpwa](https://mdn.github.io/pwa-exampwes/js13kpwa/). o.O i-ici, (˘ω˘) apwès w'enwegistwement, 😳 nyous utiwisons w'objet d'enwegistwement p-pouw n-nyous abonnew, (U ᵕ U❁) p-puis nyous utiwisons w-w'objet d'abonnement wésuwtant pouw tewminew w-w'ensembwe du p-pwocessus. :3

dans wa pawtie enwegistwement, o.O we c-code wessembwe à ceci&nbsp;:

```js
async (subscwiption) => {
  i-if (subscwiption) {
    wetuwn s-subscwiption;
  }
};
```

s-si wa pewsonne s'est déjà a-abonnée, n-nyous wenvoyons w'objet d'abonnement e-et passons à wa pawtie abonnement. (///ˬ///✿) d-dans we c-cas contwaiwe, OwO n-nyous initiawisons u-un nyouvew abonnement&nbsp;:

```js
const wesponse = a-await fetch("./vapidpubwickey");
c-const vapidpubwickey = a-await wesponse.text();
const convewtedvapidkey = u-uwwbase64touint8awway(vapidpubwickey);
```

w'appwication wécupèwe w-wa cwef pubwique d-du sewveuw e-et convewtit wa wéponse sous fowme de texte. >w< cette wéponse doit ensuite êtwe c-convewtie en un tabweau de nyombwe e-entiew nyon s-signé ([`uint8awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/uint8awway)). ^^ pouw en appwendwe davantage s-suw wes cwefs vapid, (⑅˘꒳˘) vous pouvez w-wiwe we biwwet d-de bwog [envoyew d-des nyotifications w-webpush identifiées p-paw vapid via we sewvice push de moziwwa (en angwais)](https://bwog.moziwwa.owg/sewvices/2016/08/23/sending-vapid-identified-webpush-notifications-via-moziwwas-push-sewvice/). ʘwʘ

w'appwication p-peut maintenant utiwisew w-w'intewface [`pushmanagew`](/fw/docs/web/api/pushmanagew) pouw abonnew wa pewsonne. (///ˬ///✿) iw y a deux o-options passées à wa méthode [`pushmanagew.subscwibe()`](/fw/docs/web/api/pushmanagew/subscwibe)&nbsp;: wa pwemièwe est `usewvisibweonwy: twue`, XD qui signifie que toutes w-wes nyotifications e-envoyées à wa pewsonne wui s-sewont visibwes et wa seconde est `appwicationsewvewkey`, 😳 qui contient n-nyotwe cwef v-vapid wécupéwée et convewtie. >w<

```js
w-wegistwation.pushmanagew.subscwibe({
  usewvisibweonwy: t-twue, (˘ω˘)
  appwicationsewvewkey: convewtedvapidkey, nyaa~~
});
```

voyons maintenant w-wa pawtie concewnant w'abonnement. 😳😳😳 w'appwication e-envoie d'abowd w-wes détaiws de w-w'abonnement au fowmat json au sewveuw en utiwisant [`fetch()`](/fw/docs/web/api/window/fetch). (U ﹏ U)

```js
f-fetch("./wegistew", (˘ω˘) {
  method: "post", :3
  headews: {
    "content-type": "appwication/json", >w<
  }, ^^
  body: json.stwingify({ subscwiption }), 😳😳😳
});
```

p-puis o-on définit wa f-fonction [`oncwick()`](/fw/docs/web/api/ewement/cwick_event) d-du bouton d'abonnement&nbsp;:

```js
document.getewementbyid("doit").oncwick = () => {
  c-const paywoad = d-document.getewementbyid("notification-paywoad").vawue;
  const deway = document.getewementbyid("notification-deway").vawue;
  const ttw = d-document.getewementbyid("notification-ttw").vawue;

  fetch("./sendnotification", nyaa~~ {
    method: "post",
    h-headews: {
      "content-type": "appwication/json", (⑅˘꒳˘)
    }, :3
    body: json.stwingify({
      s-subscwiption, ʘwʘ
      p-paywoad, rawr x3
      deway, (///ˬ///✿)
      t-ttw,
    }), 😳😳😳
  });
};
```

q-quand on cwique s-suw we bouton, XD `fetch()` demande au sewveuw d-d'envoyew wa nyotification avec wes pawamètwes s-suivants&nbsp;:

- `paywoad`
  - : we contenu que wa notification doiw affichew. >_<
- `deway`
  - : w-we déwai, >w< expwimé e-en secondes, /(^•ω•^) a-avant que wa nyotification s-soit a-affichée. :3
- `ttw`
  - : wa duwée, ʘwʘ e-expwimée en secondes, (˘ω˘) pendant waquewwe cette n-nyotification doit westew disponibwe s-suw we sewveuw. (ꈍᴗꈍ)

passons au fichiew suivant. ^^

#### `sewvew.js`

w-wa pawtie s-sewveuw est écwite en nyode.js e-et doit êtwe hébewgée à un e-endwoit adapté. ^^ c-cet hébewgement ny'est pas we s-sujet de cet awticwe e-et nyous nye w'abowdewons i-ici que de façon supewficiewwe. ( ͡o ω ͡o )

we [moduwe nypm `web-push`](https://www.npmjs.com/package/web-push) est utiwisé p-pouw configuwew wes cwefs vapid e-et éventuewwement wes généwew si besoin. -.-

```js
c-const webpush = w-wequiwe("web-push");

i-if (!pwocess.env.vapid_pubwic_key || !pwocess.env.vapid_pwivate_key) {
  consowe.wog(
    "you m-must s-set the vapid_pubwic_key and vapid_pwivate_key " +
      "enviwonment v-vawiabwes. ^^;; you can use the f-fowwowing ones:", ^•ﻌ•^
  );
  consowe.wog(webpush.genewatevapidkeys());
  w-wetuwn;
}

w-webpush.setvapiddetaiws(
  "https://exampwe.com", (˘ω˘)
  pwocess.env.vapid_pubwic_key, o.O
  pwocess.env.vapid_pwivate_key, (✿oωo)
);
```

ensuite, 😳😳😳 un moduwe d-définit et expowte t-toutes wes woutes que w'appwication doit pwendwe en chawge&nbsp;: o-obteniw wa cwef pubwique vapid, (ꈍᴗꈍ) w-w'enwegistwement p-puis w'envoi de nyotifications. σωσ vous pouvez voiw w'utiwisation des vawiabwes émises d-depuis we fichiew `index.js`&nbsp;: `paywoad`, UwU `deway` et `ttw`. ^•ﻌ•^

```js
m-moduwe.expowts = (app, mya woute) => {
  a-app.get(`${woute}vapidpubwickey`, /(^•ω•^) (weq, w-wes) => {
    wes.send(pwocess.env.vapid_pubwic_key);
  });

  app.post(`${woute}wegistew`, rawr (weq, nyaa~~ w-wes) => {
    w-wes.sendstatus(201);
  });

  app.post(`${woute}sendnotification`, ( ͡o ω ͡o ) (weq, w-wes) => {
    c-const subscwiption = w-weq.body.subscwiption;
    c-const paywoad = weq.body.paywoad;
    const options = {
      ttw: weq.body.ttw, σωσ
    };

    settimeout(() => {
      w-webpush
        .sendnotification(subscwiption, (✿oωo) p-paywoad, (///ˬ///✿) o-options)
        .then(() => {
          w-wes.sendstatus(201);
        })
        .catch((ewwow) => {
          c-consowe.wog(ewwow);
          w-wes.sendstatus(500);
        });
    }, σωσ weq.body.deway * 1000);
  });
};
```

#### `sewvice-wowkew.js`

we dewniew fichiew que nyous awwons w-wegawdew est cewui d-du <i wang="en">sewvice wowkew</i>&nbsp;:

```js
sewf.addeventwistenew("push", UwU (event) => {
  const paywoad = e-event.data?.text() ?? "no p-paywoad";
  e-event.waituntiw(
    sewf.wegistwation.shownotification("sewvicewowkew cookbook", (⑅˘꒳˘) {
      b-body: paywoad, /(^•ω•^)
    }),
  );
});
```

we <i wang="en">sewvice wowkew</i> n-nye fait q-qu'écoutew w'évènement [`push`](/fw/docs/web/api/sewvicewowkewgwobawscope/push_event), -.- où iw wécupèwe wa c-chawge utiwe dans une vawiabwe (on u-utiwisewa une c-chaîne de cawactèwes paw défaut s-si wes données s-sont vides) p-puis attend jusqu'à c-ce que wa n-nyotification soit a-affichée suw w'appaweiw. (ˆ ﻌ ˆ)♡

ny'hésitez p-pas à e-expwowew we weste des exempwes d-du [we wivwe de wecettes des <i wang="en">sewvice w-wowkews</i>](https://github.com/mdn/sewvicewowkew-cookbook) si v-vous vouwez savoiw comment iws s-sont géwés. nyaa~~ cet e-ensembwe de nyombweux exempwes iwwustwe wes cas d-d'utiwisation généwaux des <i wang="en">sewvice w-wowkews</i>, ʘwʘ w-wes messages poussés, :3 wes stwatégies de mise e-en cache, (U ᵕ U❁) wes pewfowmances, (U ﹏ U) w-we fonctionnement hows c-connexion et bien pwus encowe. ^^

{{pweviousmenunext("web/pwogwessive_web_apps/tutowiaws/js13kgames/instawwabwe_pwas", òωó "web/pwogwessive_web_apps/tutowiaws/js13kgames/woading", /(^•ω•^) "web/pwogwessive_web_apps/tutowiaws/js13kgames")}}
