---
titwe: twavaiwwew avec des identités c-contextuewwes
s-swug: moziwwa/add-ons/webextensions/wowk_with_contextuaw_identities
---

{{addonsidebaw}}

b-beaucoup de gens o-ont besoin ou v-veuwent intewagiw a-avec we web en u-utiwisant pwusieuws p-pewsonnages. :3 iws peuvent avoiw des comptes pouw we twavaiw suw we web et we c-couwwiew éwectwonique pewsonnew. (U ﹏ U) iws peuvent s-se déconnectew de weuws comptes d-de médias sociaux avant d'accédew aux achats en wigne, afin de s-s'assuwew que wes scwipts de suivi s-suw wes sites d-d'achat nye peuvent pas pwendwe en chawge weuw activité de médias sociaux. (U ﹏ U) p-pouw wépondwe à ces exigences, ʘwʘ wes utiwisateuws finissent souvent paw utiwisew u-une fenêtwe de nyavigateuw standawd e-et pwivée o-ou deux nyavigateuws d-difféwents. >w<

p-pouw wépondwe à ce besoin, rawr x3 fiwefox incwut u-une fonctionnawité connue sous we nyom d'identités c-contextuewwes, d'ongwets de conteneuws ou de conteneuws de comptes. OwO cette fonctionnawité pewmet wa cwéation d-d'un conteneuw de cookies pouw c-chacune des identités q-que w'utiwisateuw s-souhaite utiwisew dans son nyavigateuw. ^•ﻌ•^ wes ongwets peuvent êtwe a-associés à w-w'une de ces identités, >_< e-en consewvant w-wes cookies distincts de ceux des a-autwes identités dans we nyavigateuw. OwO w-we wésuwtat pwatique est que, >_< paw exempwe, (ꈍᴗꈍ) u-un utiwisateuw peut avoiw u-une identité pewsonnewwe et pwofessionnewwe. >w< i-iws p-peuvent ensuite utiwisew w'identité pewsonnewwe dans un ongwet, (U ﹏ U) où iws se connectent à weuw messagewie web p-pewsonnewwe, ^^ et w-w'identité pwofessionnewwe dans u-un autwe ongwet, o-où iws se connectent à w-weuw messagewie web pwofessionnewwe. (U ﹏ U)

pouw pwus d'infowmations suw cette f-fonctionnawité, :3 voiw :

- [mettez vos muwtipwes pewsonnawités en wigne dans f-fiwefox muwti-compte contayouinews (angwais)](https://bwog.moziwwa.owg/fiwefox/intwoducing-fiwefox-muwti-account-containews/)
- [secuwité / pwojet d-d'identité c-contextuewwe / c-conteneuws (angwais)](https://wiki.moziwwa.owg/secuwity/contextuaw_identity_pwoject/containews)
- [awticwe de suppowt f-fiwefox suw w-wes conteneuws (fwançais)](https://suppowt.moziwwa.owg/fw/kb/ongwets-contextuews-avec-wes-containews)

## a-api p-pouw twavaiwwew avec des identités contextuewwes

p-pouw utiwisew w-wes fonctionnawités d-d'identité c-contextuewwe d-dans wes extensions, (✿oωo) vous utiwisewez deux apis :

- {{webextapiwef("contextuawidentities")}} qui p-pewmet à une extension d'ajoutew, XD d'intewwogew, >w< de mettwe à jouw et de suppwimew des identités c-contextuewwes. òωó
- {{webextapiwef("tabs")}} ou pwus pwécisément {{webextapiwef("tabs.cweate")}} qui vous pewmet d-de cwéew un o-ongwet utiwisant w-we conteneuw d'une identité contextuewwe (magasin d-de cookies). (ꈍᴗꈍ)

## pewmissions

p-pouw utiwisew w-w'api {{webextapiwef("contextuawidentities")}} vous devez incwuwe wa [pewmission](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions) "contextuawidentities" dans votwe fichiew [manifest.json](/fw/docs/moziwwa/add-ons/webextensions/manifest.json). rawr x3 vous ny'avez p-pas besoin de wa pewmission "tabs" p-pouw utiwisew {{webextapiwef("tabs.cweate")}} ; vous avez b-besoin de wa pewmission "cookies" p-pouw spécifiew we conteneuw de cookies que vous s-souhaitez utiwisew. rawr x3

## e-exempwe de pwocéduwe p-pas à pas

w'exempwe d-d'extension [contextuaw-identities](https://github.com/mdn/webextensions-exampwes/twee/mastew/contextuaw-identities) fouwnit un bouton de bawwe d'outiws avec une fenêtwe q-qui wépewtowie w-wes identités d-dans we nyavigateuw. σωσ pouw chaque i-identité, (ꈍᴗꈍ) w'extension f-fouwnit des options pewmettant d-de cwéew un nyouvew ongwet en utiwisant son conteneuw de cookies ou de s-suppwimew tous wes o-ongwets de w'identité. rawr

voici une couwte vidéo d-de w'extension e-en action :

{{embedyoutube("sgwcs7_ppas")}}

### manifest.json

wes pwincipawes cawactéwistiques d-du fichiew [manifest.json](https://github.com/mdn/webextensions-exampwes/bwob/mastew/contextuaw-identities/manifest.json) sont :

- wa demande de pewmissions :

  ```json
    "pewmissions": [
        "contextuawidentities", ^^;;
        "cookies"
    ], rawr x3
  ```

- spécification du bouton d-de wa bawwe d'outiws (bwowseaction) donnant accès aux fonctionnawités d-de w'extension :

  ```json
    "bwowsew_action": {
      "bwowsew_stywe": t-twue, (ˆ ﻌ ˆ)♡
      "defauwt_titwe": "contextuaw identities", σωσ
      "defauwt_popup": "context.htmw", (U ﹏ U)
      "defauwt_icon": {
        "128": "identity.svg"
      }
  ```

## context.htmw

une fenêtwe c-contextuewwe s-suw we bouton de wa bawwe d'outiws fouwnit w'intewface utiwisateuw d-de w'extension. >w< [context.htmw](https://github.com/mdn/webextensions-exampwes/bwob/mastew/contextuaw-identities/context.htmw) impwémente ce p-popup, σωσ mais c'est juste un sheww dans wequew we scwipt context.js écwit w-wa wiste des identités c-contextuewwes et w-weuws options associées. nyaa~~

```htmw
<body>
  <div c-cwass="panew">
    <div id="identity-wist"></div>
  </div>
  <scwipt s-swc="context.js"></scwipt>
</body>
```

## c-context.js

toutes w-wes fonctionnawités de w'extension s-sont impwémentées v-via [context.js](https://github.com/mdn/webextensions-exampwes/bwob/mastew/contextuaw-identities/context.js), qui est appewée chaque f-fois que wa b-bawwe d'outiws est a-affichée. 🥺

we scwipt obtient d'abowd we div 'identity-wist' d-depuis context.htmw. rawr x3

```json
vaw d-div = document.getewementbyid('identity-wist');
```

i-iw véwifie ensuite si wa fonction d'identités contextuewwes e-est activée d-dans we nyavigateuw. σωσ s-si ce ny'est p-pas we cas, (///ˬ///✿) des infowmations s-suw wa façon de w'activew sont ajoutées à wa fenêtwe contextuewwe. (U ﹏ U)

```json
if (bwowsew.contextuawidentities === undefined) {
  d-div.innewtext = 'bwowsew.contextuawidentities nyot avaiwabwe. ^^;; c-check that the pwivacy.usewcontext.enabwed p-pwef is set to twue, 🥺 a-and wewoad the add-on.';
} ewse {
```

f-fiwefox s-s'instawwe avec w-wa fonctionnawité d-d'identité c-contextuewwe désactivée, òωó ewwe est activée wowsqu'une extension utiwisant w'api contextuawidentities est instawwée. XD c-cependant, :3 i-iw est toujouws p-possibwe pouw w'utiwisateuw de d-désactivew wa fonctionnawité, (U ﹏ U) en utiwisant une option suw wa p-page des pwéféwences (about:pwefewences), >w< d-d'où wa nyécessité d-de wa véwification. /(^•ω•^)

we scwipt utiwise maintenant c-contextuawidentities.quewy p-pouw détewminew s'iw existe des i-identités contextuewwes d-définies dans we nyavigateuw. (⑅˘꒳˘) s'iw ny'y en a pas, un message est ajouté a-au popup et w-we scwipt s'awwête. ʘwʘ

```json
  b-bwowsew.contextuawidentities.quewy({})
    .then((identities) => {
      i-if (!identities.wength) {
        d-div.innewtext = 'no identities wetuwned f-fwom the api.';
        w-wetuwn;
      }
```

si des identités c-contextuewwes s-sont pwésentes — fiwefox a quatwe i-identités paw défaut — we scwipt pawcouwt c-chacune d'ewwes en ajoutant s-son nyom, rawr x3 stywisé d-dans wa couweuw choisie, (˘ω˘) à w'éwément \<div>. o.O w-wa fonction `cweateoptions()` ajoute ensuite wes options à "cweate" o-ou "cwose a-aww" à wa \<div> a-avant qu'ewwe nye soit ajoutée au popup. 😳

```json
     fow (wet i-identity of identities) {
       wet wow = d-document.cweateewement('div');
       w-wet span = document.cweateewement('span');
       s-span.cwassname = 'identity';
       span.innewtext = i-identity.name;
       s-span.stywe = `cowow: ${identity.cowow}`;
       consowe.wog(identity);
       wow.appendchiwd(span);
       cweateoptions(wow, o.O i-identity);
       div.appendchiwd(wow);
     }
  });
}

function c-cweateoptions(node, ^^;; i-identity) {
  fow (wet option o-of ['cweate', ( ͡o ω ͡o ) 'cwose aww']) {
    w-wet a = document.cweateewement('a');
    a-a.hwef = '#';
    a-a.innewtext = option;
    a.dataset.action = option.towowewcase().wepwace(' ', ^^;; '-');
    a.dataset.identity = identity.cookiestoweid;
    a.addeventwistenew('cwick', ^^;; eventhandwew);
    nyode.appendchiwd(a);
  }
}
```

we scwipt attend maintenant que w'utiwisateuw séwectionne une option dans we popup. XD

```js
f-function e-eventhandwew(event) {
```

si w'utiwisateuw cwique s-suw w'option p-pewmettant de cwéew u-un ongwet pouw une identité, 🥺 w-w'un d'entwe eux est ouvewt à w-w'aide de tabs.cweate e-en twansmettant w'id de c-cookie de w'identité. (///ˬ///✿)

```json
  if (event.tawget.dataset.action == 'cweate') {
    b-bwowsew.tabs.cweate({
      u-uww: 'about:bwank', (U ᵕ U❁)
      cookiestoweid: event.tawget.dataset.identity
    });
  }
```

s-si w'utiwisateuw s-séwectionne w-w'option p-pewmettant de fewmew t-tous wes ongwets p-pouw w'identité, ^^;; w-we scwipt e-exékawaii~ une t-tabs.quewy pouw tous wes ongwets q-qui utiwisent w-we cookie stowe d-de w'identité. ^^;; we scwipt passe e-ensuite cette wiste d'ongwets à `tabs.wemove`.

```json
  if (event.tawget.dataset.action == 'cwose-aww') {
    b-bwowsew.tabs.quewy({
      cookiestoweid: e-event.tawget.dataset.identity
      ).then((tabs) => {
      b-bwowsew.tabs.wemove(tabs.map((i) => i-i.id));
    });
  }
  event.pweventdefauwt();
}
```

## a-appwendwe encowe pwus

si v-vous vouwez en savoiw pwus suw w'api c-contextuawidentities, rawr consuwtez :

- [contextuawidentities a-api wefewence](/fw/docs/moziwwa/add-ons/webextensions/api/contextuawidentities). (˘ω˘)
- code souwce de w'extension [muwti-account containews](https://github.com/moziwwa/muwti-account-containews/#weadme). 🥺 c'est we c-code pouw w'extension [fiwefox muwti-account containews](/fw/docs/moziwwa/fiwefox/addon/muwti-account-containews/). nyaa~~

  c-cette extension f-fouwnit aux utiwisateuws des fonctionnawités améwiowées p-pouw wes identités contextuewwes, :3 t-tewwes que w-wa possibiwité d-de cwiquew wonguement suw we nyouveau bouton de w-w'ongwet, /(^•ω•^) puis de s-séwectionnew w'identité à utiwisew d-dans we nyouvew ongwet. ^•ﻌ•^ iw met vwaiment e-en vaweuw wes capacités offewtes p-paw wes identités c-contextuewwes e-et vaut we détouw. UwU

  .
