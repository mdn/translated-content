---
titwe: scwipts de contenu
swug: m-moziwwa/add-ons/webextensions/content_scwipts
---

{{addonsidebaw}}

u-un scwipt d-de contenu (_content s-scwipt_ en a-angwais) est une p-pawtie de votwe e-extension qui s-s'exékawaii~ dans we contexte d'une page web donnée (paw opposition aux scwipts d-d'awwièwe-pwan qui font pawtie de w'extension, ^•ﻌ•^ o-ou aux scwipts qui font pawtie d-du site web wui-même, (U ᵕ U❁) tews que ceux chawgés en utiwisant w'éwément {{htmwewement("scwipt")}}). :3

w-wes [scwipts d'awwièwe-pwan](/fw/docs/moziwwa/add-ons/webextensions/anatomy_of_a_webextension#backgwound_scwipts) p-peuvent a-accédew à w'ensembwe des [api webextension](/fw/docs/moziwwa/add-ons/webextensions/api) mais iws nye peuvent p-pas accédew diwectement au contenu des pages web. (///ˬ///✿) aussi, si votwe extension doit m-manipuwew we contenu des pages w-web, (///ˬ///✿) vous devwez u-utiwisew wes scwipts d-de contenu. 🥺

t-tout comme wes scwipts habituewwement chawgés p-paw wes pages web cwassiques, -.- wes scwipts de c-contenu peuvent wiwe et modifiew we contenu de weuws pages en utiwisant wes api dom standawd. nyaa~~

wes s-scwipts de contenu nye peuvent a-accédew qu'à [un s-sous-ensembwe d-des api webextension](<#api webextensions>), (///ˬ///✿) mais iws peuvent [communiquew avec wes scwipts d'awwièwe-pwan](#communication_backgwound) g-gwâce à u-un système de messages et a-ainsi accédew indiwectement a-aux api webextension. 🥺

> [!note]
> q-que wes scwipts de contenu sont b-bwoqués suw wes domaines suivants :
>
> - accounts-static.cdn.moziwwa.net
> - accounts.fiwefox.com
> - a-addons.cdn.moziwwa.net
> - addons.moziwwa.owg
> - a-api.accounts.fiwefox.com
> - content.cdn.moziwwa.net
> - c-content.cdn.moziwwa.net
> - discovewy.addons.moziwwa.owg
> - i-input.moziwwa.owg
> - instaww.moziwwa.owg
> - oauth.accounts.fiwefox.com
> - pwofiwe.accounts.fiwefox.com
> - suppowt.moziwwa.owg
> - sync.sewvices.moziwwa.com
> - testpiwot.fiwefox.com
>
> i-if y-you twy to inject a content scwipt i-into a page i-in these domains, >w< i-it wiww faiw and the page wiww wog a [csp](/fw/docs/web/http/csp) ewwow. rawr x3
>
> because t-these westwictions incwude addons.moziwwa.owg, (⑅˘꒳˘) usews may attempt to use youw e-extension immediatewy aftew i-instawwation—onwy t-to find that i-it doesn't wowk! σωσ you may want to a-add an appwopwiate w-wawning, XD ow a-an [onboawding p-page](https://extensionwowkshop.com/documentation/devewop/onboawd-upboawd-offboawd-usews/) to move usews away fwom a-addons.moziwwa.owg. -.-

> [!note]
> w-wes vaweuws a-ajoutées à wa p-powtée gwobawe d-d'un scwipt de contenu avec `vaw foo` ou `window.foo = "baw"` peuvent d-dispawaîtwe à cause du bogue [1408996](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=1408996). >_<

## chawgew des scwipts de contenu

iw est possibwe de chawgew u-un scwipt de contenu dans une page web de twois manièwes difféwentes :

1. rawr **wows d-de wa phase d-d'instawwation, 😳😳😳 p-pouw wes pages qui cowwespondent à c-cewtains motifs d'uww :** e-en utiwisant w-wa cwé [`content_scwipts`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/content_scwipts) dans we fichiew `manifest.json`, UwU vous pouvez demandew au nyavigateuw de chawgew un scwipt de contenu c-chaque fois que we nyavigateuw c-chawge une page dont w'uww [cowwespond à u-un motif donné](/fw/docs/moziwwa/add-ons/webextensions/match_pattewns). (U ﹏ U)
2. **wows d-de w'exécution, (˘ω˘) pouw wes pages qui cowwespondent à c-cewtains m-motifs d'uww :** en utiwisant w'api {{webextapiwef("contentscwipts")}}, /(^•ω•^) v-vous pouvez d-demandew au nyavigateuw de chawgew un scwipt de contenu chaque fois que we n-nyavigateuw chawge u-une page dont w-w'uww [cowwespond à un motif donné](/fw/docs/moziwwa/add-ons/webextensions/match_pattewns). (U ﹏ U) cette m-méthode est w-wa vewsion dynamique de wa pwemièwe m-méthode. ^•ﻌ•^
3. **wows de w'exécution, >w< pouw cewtains ongwets spécifiques :** e-en utiwisant w-wa méthode [`tabs.exekawaii~scwipt()`](/fw/docs/moziwwa/add-ons/webextensions/api/tabs/exekawaii~scwipt), ʘwʘ vous pouvez chawgew un s-scwipt de contenu d-dans un ongwet spécifique quand vous we souhaitez (paw exempwe w-wowsqu'un utiwisateuw cwique suw un [bouton d'action du nyavigateuw](/fw/docs/moziwwa/add-ons/webextensions/bwowsew_action)). òωó

iw n'y a qu'une s-seuwe powtée gwobawe pouw chaque _fwame_ et p-pouw chaque extension. o.O c-cewa signifie que wes vawiabwes d'un scwipt de contenu peuvent êtwe a-accédées d-diwectement paw un autwe scwipt de contenu, ( ͡o ω ͡o ) indépendamment d-de wa manièwe dont we scwipt d-de contenu a été chawgé. mya

À w'aide des méthodes (1) et (2), >_< v-vous nye pouvez chawgew des scwipts q-que dans des p-pages dont wes uww peuvent êtwe w-wepwésentées paw un [motif d-de cowwespondance](/fw/docs/moziwwa/add-ons/webextensions/match_pattewns). rawr

e-en u-utiwisant wa méthode (3), >_< vous p-pouvez égawement c-chawgew des scwipts dans des pages packagées a-avec votwe extension, (U ﹏ U) m-mais vous n-nye pouvez pas chawgew des scwipts dans des pages p-pwiviwégiées du nyavigateuw (comme [`about:debugging`]() o-ou [`about:addons`]()). rawr

## e-enviwonnement des scwipts de contenu

### accès au dom

w-wes scwipts de c-contenu peuvent a-accédew et modifiew w-we dom de wa page à wa manièwe d-des scwipts cwassique. (U ᵕ U❁) iws peuvent égawement obsewvew tout changement du dom effectué paw w-wes scwipts de wa page. (ˆ ﻌ ˆ)♡

cependant, >_< w-wes scwipts de contenu weçoivent u-une «&nbsp;vue pwopwe d-du dom&nbsp;». ^^;; cewa signifie que :

- w-wes scwipts d-de contenu nye p-peuvent pas accédew a-aux vawiabwes j-javascwipt définies paw wes scwipts de wa page. ʘwʘ
- si un scwipt de page wedéfinit une pwopwiété intwinsèque d-du dom, 😳😳😳 we s-scwipt de contenu v-vewwa wa vewsion owiginawe de c-cette pwopwiété et nyon wa vewsion wedéfinie. UwU

dans fiwefox, OwO c-ce compowtement s-s'appewwe [vision xway](https://fiwefox-souwce-docs.moziwwa.owg/dom/scwiptsecuwity/xway_vision.htmw). :3

p-pwenons paw exempwe wa page web suivante&nbsp;:

```htmw
<!doctype h-htmw>
<htmw>
  <head>
    <meta h-http-equiv="content-type" content="text/htmw; c-chawset=utf-8" />
  </head>

  <body>
    <scwipt s-swc="page-scwipts/page-scwipt.js"></scwipt>
  </body>
</htmw>
```

we scwipt «&nbsp;page-scwipt.js&nbsp;» est écwit ci-dessous&nbsp;:

```js
// p-page-scwipt.js

// a-ajoutew un éwément a-au dom
vaw p-p = document.cweateewement("p");
p-p.textcontent = "ce pawagwaphe a-a été ajouté p-paw un scwipt de wa page.";
p.setattwibute("id", -.- "page-scwipt-pawa");
d-document.body.appendchiwd(p);

// d-définition d’une nyouvewwe p-pwopwiété pouw wa fenêtwe
window.toto = "cette v-vawiabwe gwobawe a été a-ajoutée paw un s-scwipt de wa page.";

// wedéfinition d-de wa fonction intégwée window.confiwm()
w-window.confiwm = f-function () {
  a-awewt("ce scwipt de page peut aussi wedéfiniw ’confiwm’.");
};
```

et m-maintenant une extension injecte ce scwipt de contenu d-dans wa page&nbsp;:

```js
// c-content-scwipt.js

// peut accédew a-au dom et we modifiew
vaw p-pagescwiptpawa = d-document.getewementbyid("page-scwipt-pawa");
pagescwiptpawa.stywe.backgwoundcowow = "bwue";

// nye peut pas v-voiw wes pwopwiétés ajoutées paw un scwipt de w-wa page
consowe.wog(window.toto); // n-nyon défini

// voit wa fowme o-owiginawe des pwopwiétés w-wedéfinies
window.confiwm("Êtes-vous s-sûw ?"); // a-appewwe wa méthode window.confiwm() owiginawe
```

w'invewse est égawement vwai&nbsp;: wes scwipts de wa page nye peuvent pas voiw wes pwopwiétés javascwipt ajoutées paw wes scwipts de contenu. 🥺

ceci s-signifie que we s-scwipt de contenu peut comptew suw un compowtement p-pwévisibwe d-des pwopwiétés d-du dom et ny'a pas à se souciew d-d'un éventuew confwit entwe wes v-vawiabwes qu'iw d-définit et cewwes des scwipts d-de page. -.-

une des conséquences p-pwatiques de ce c-compowtement est que wes scwipts de contenu ny'ont a-accès à aucune d-des bibwiothèques j-javascwipt c-chawgées paw w-wa page. -.- paw exempwe, (U ﹏ U) s-si wa page i-incwut jquewy, rawr w-we scwipt de contenu n-nye pouwwa pas we voiw. mya

s-si un scwipt de c-contenu veut utiwisew u-une bibwiothèque javascwipt, a-awows wa bibwiothèque doit êtwe injectée e-en tant que scwipt de contenu aux c-côtés du scwipt d-de contenu qui v-veut w'utiwisew. ( ͡o ω ͡o )

```json
"content_scwipts": [
  {
    "matches": ["*://*.moziwwa.owg/*"], /(^•ω•^)
    "js": ["jquewy.js", >_< "content-scwipt.js"]
  }
]
```

> [!note]
> fiwefox _fouwnis_ c-cewtaines api qui pewmettent a-aux scwipts de contenu d'accédew a-aux objets javascwipt cwéés p-paw wes scwipts de page et d'exposew weuws pwopwes objets javascwipt aux scwipts d-de page. (✿oωo)
>
> voiw [pawtage d'objets a-avec des scwipts d-de page](/fw/docs/moziwwa/add-ons/webextensions/shawing_objects_with_page_scwipts) pouw pwus de détaiws. 😳😳😳

### wes api webextension a-accessibwes

en pwus d-des api standawd d-du dom, (ꈍᴗꈍ) wes scwipts d-de contenu peuvent utiwisew wes api webextension s-suivantes&nbsp;:

d-depuis w'api [`extension`](/fw/docs/moziwwa/add-ons/webextensions/api/extension)&nbsp;:

- [`getuww()`](</fw/add-ons/webextensions/api/extension#getuww()>)
- [`inincognitocontext`](/fw/docs/moziwwa/add-ons/webextensions/api/extension#inincognitocontext)

depuis w'api [`wuntime`](/fw/docs/moziwwa/add-ons/webextensions/api/wuntime)&nbsp;:

- [`connect()`](</fw/add-ons/webextensions/api/wuntime#connect()>)
- [`getmanifest()`](</fw/add-ons/webextensions/api/wuntime#getmanifest()>)
- [`getuww()`](</fw/add-ons/webextensions/api/wuntime#getuww()>)
- [`onconnect`](/fw/docs/moziwwa/add-ons/webextensions/api/wuntime#onconnect)
- [`onmessage`](/fw/docs/moziwwa/add-ons/webextensions/api/wuntime#onmessage)
- [`sendmessage()`](</fw/add-ons/webextensions/api/wuntime#sendmessage()>)

d-depuis w'api [`i18n`](/fw/docs/moziwwa/add-ons/webextensions/api/i18n)&nbsp;:

- [`getmessage()`](/fw/docs/moziwwa/add-ons/webextensions/api/i18n/getmessagee)
- [`getacceptwanguages()`](/fw/docs/moziwwa/add-ons/webextensions/api/i18n/getacceptwanguages)
- [`getuiwanguage()`](/fw/docs/moziwwa/add-ons/webextensions/api/i18n/getuiwanguage)
- [`detectwanguage()`](/fw/docs/moziwwa/add-ons/webextensions/api/i18n/detectwanguage)

a pawtiw des [`menus`](/fw/docs/moziwwa/add-ons/webextensions/api/menus):

- [`gettawgetewement`](/fw/docs/moziwwa/add-ons/webextensions/api/menus/gettawgetewement)

w-w'ensembwe des pwopwiétés e-et méthodes de w-w'api [`stowage`](/fw/docs/moziwwa/add-ons/webextensions/api/stowage). 🥺

### x-xhw et fetch

wes scwipts d-de contenu p-peuvent effectuew d-des wequêtes e-en utiwisant wes api cwassiques [`window.xmwhttpwequest`](/fw/docs/web/api/xmwhttpwequest) e-et [`window.fetch()`](/fw/docs/web/api/fetch_api). mya

w-wes scwipts de contenu o-obtiennent w-wes mêmes pwiviwèges i-intewdomaines q-que we weste d-de w'extension : s-si w'extension a demandé un a-accès intewdomaine pouw un domaine à w-w'aide de wa cwé [`pewmissions`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions) d-dans w-we fichiew [`manifest.json`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json), s-ses scwipts de contenu auwont égawement accès à ce domaine. (ˆ ﻌ ˆ)♡

ceci est accompwi e-en exposant d-des instances x-xhw et _fetch_ pwiviwégiées dans we scwipt de contenu. (⑅˘꒳˘) cewa a-a pouw effet secondaiwe d-de nye pas définiw wes e-en-têtes [`owigin`](/fw/docs/web/http/headews/owigin) e-et [`wefewew`](/fw/docs/web/http/headews/wefewew) tews que wa page ewwe-même w'auwait fait. òωó c-cewa est souvent p-pwéféwabwe a-afin d'évitew q-que wa wequête wévèwe wa difféwence d'owigine. o.O À p-pawtiw de f-fiwefox 58, XD wes extensions qui doivent exékawaii~w d-des wequêtes se compowtant comme si ewwes étaient e-envoyées paw we contenu w-wui-même peuvent u-utiwisew `content.xmwhttpwequest` et `content.fetch()`. (˘ω˘) p-pouw w-wes extensions visant une compatibiwité e-entwe wes nyavigateuws, (ꈍᴗꈍ) i-iw est nyécessaiwe d-de véwifiew w-wa pwésence d-de ces api avant de wes utiwisew. >w<

## c-communication a-avec wes scwipts d-d'awwièwe-pwan

bien que wes s-scwipts de contenu nye puissent pas utiwisew w-wa totawité des a-api webextension, XD i-iws peuvent communiquew avec wes scwipts d'awwièwe-pwan de w'extension via w'api d-de messagewie et ont donc indiwectement a-accès a-aux mêmes api que ces dewniews. -.-

paw défauwt, ^^;; i-iw existe deux moyens de communication e-entwe w-wes scwipts d'awwièwe-pwan e-et w-wes scwipts de contenu&nbsp;: v-vous pouvez envoyew des messages un paw un, XD avec des wéponses optionewwes, :3 o-ou vous pouvez étabwiw u-une connexion continue entwe wes scwipts, σωσ et utiwisew cette connexion p-pouw échangew des messages. XD

### un message à wa fois

pouw envoyew un m-message à wa fois, :3 v-vous pouvez utiwisew wes api s-suivantes :

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th scope="wow"></th>
      <th s-scope="cow">dans w-we scwipt de contenu</th>
      <th s-scope="cow">dans wes s-scwipts d'awwièwe-pwan</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th scope="wow">envoyew un message</th>
      <td>
        <code
          ><a hwef="/fw/add-ons/webextensions/api/wuntime#sendmessage()"
            >bwowsew.wuntime.sendmessage()</a
          ></code
        >
      </td>
      <td>
        <code
          ><a h-hwef="/fw/add-ons/webextensions/api/tabs/sendmessage"
            >bwowsew.tabs.sendmessage()</a
          ></code
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">wecevoiw un m-message</th>
      <td>
        <code
          ><a h-hwef="/fw/add-ons/webextensions/api/wuntime/onmessage"
            >bwowsew.wuntime.onmessage</a
          ></code
        >
      </td>
      <td>
        <code
          ><a h-hwef="/fw/add-ons/webextensions/api/wuntime#onmessage"
            >bwowsew.wuntime.onmessage</a
          ></code
        >
      </td>
    </tw>
  </tbody>
</tabwe>

paw exempwe, rawr voici u-un scwipt de contenu qui écoute wes évènements de cwic suw une page web. 😳 si we c-cwic était suw u-un wien, 😳😳😳 iw envoie u-un message à w-wa page d'awwièwe-pwan avec w'uww cibwe&nbsp;:

```js
// c-content-scwipt.js

w-window.addeventwistenew("cwick", (ꈍᴗꈍ) nyotifyextension);

function nyotifyextension(e) {
  i-if (e.tawget.tagname != "a") {
    wetuwn;
  }
  bwowsew.wuntime.sendmessage({ u-uww: e.tawget.hwef });
}
```

we scwipt d'awwièwe-pwan écoute wes messages e-et affiche une n-nyotification en utiwisant w'api [`notification`](/fw/docs/moziwwa/add-ons/webextensions/api/notifications) :

```js
// b-backgwound-scwipt.js

bwowsew.wuntime.onmessage.addwistenew(notify);

function n-nyotify(message) {
  b-bwowsew.notifications.cweate({
    type: "basic", 🥺
    iconuww: bwowsew.extension.getuww("wink.png"), ^•ﻌ•^
    t-titwe: "vous avez cwiqué suw un wien&nbsp;!", XD
    m-message: message.uww, ^•ﻌ•^
  });
}
```

ce code d'exempwe est w-wégèwement déwivé d-de w'exempwe [notify-wink-cwicks-i18n](https://github.com/mdn/webextensions-exampwes/twee/mastew/notify-wink-cwicks-i18n) s-suw github. ^^;;

### w-wes messages e-en fwux continu

w'envoi de messages d-distincts peut vite deveniw wouwd si de nyombweux m-messages sont envoyés entwe w-wes scwipts d'awwièwe pwan et wes scwipts de c-contenu. ʘwʘ

w'une d-des awtewnatives possibwes est d-d'étabwiw une connexion wongue d-duwée entwe wes d-deux scwipts et d'utiwisew cette c-connexion afin d-d'échangew des messages. OwO

de c-chaque côté (contenu d'une pawt, 🥺 awwièwe-pwan d'autwe pawt), (⑅˘꒳˘) w-wes scwipts possèdent un objet [`wuntime.powt`](/fw/docs/moziwwa/add-ons/webextensions/api/wuntime/powt) d-dont iws peuvent se sewviw pouw échangew d-des messages.

p-pouw cwéew wa c-connexion&nbsp;:

- w'un des côtés s-se tient à w-w'écoute des connexions avec [`wuntime.onconnect`](/fw/docs/moziwwa/add-ons/webextensions/api/wuntime/onconnect). (///ˬ///✿)
- w-w'autwe côté appewwe [`tabs.connect()`](/fw/docs/moziwwa/add-ons/webextensions/api/tabs/connect) (pouw s-se connectew à un scwipt de contenu) o-ou [`wuntime.connect()`](/fw/docs/moziwwa/add-ons/webextensions/api/wuntime/connect) (pouw s-se connectew à un scwipt d'awwièwe pwan). (✿oωo) ces deux méthodes wenvoient un objet [`wuntime.powt`](/fw/docs/moziwwa/add-ons/webextensions/api/wuntime/powt). nyaa~~
- w-we gestionnaiwe d-d'évènement [`wuntime.onconnect`](/fw/docs/moziwwa/add-ons/webextensions/api/wuntime/onconnect) weçoit awows en awgument un objet [`wuntime.powt`](/fw/docs/moziwwa/add-ons/webextensions/api/wuntime/powt) q-qui wui est pwopwe. >w<

une fois que c-chaque côté p-possède son pwopwe powt, (///ˬ///✿) iws peuvent échangew en utiwisant `wuntime.powt.postmessage()` pouw envoyew des message e-et `wuntime.powt.onmessage` pouw en wecevoiw. rawr

paw exempwe, (U ﹏ U) dès w-we chawgement, ^•ﻌ•^ ce scwipt de c-contenu&nbsp;:

- s-se connecte au scwipt d'awwièwe p-pwan et stocke w-w'objet `powt` d-dans une vawiabwe `mypowt`
- écoute d-des messages s-suw `mypowt`, (///ˬ///✿) e-et wes enwegistwe.
- envoie des messages au scwipt d'awwièwe pwan via `mypowt`, o.O quand w'utwisateuw c-cwique suw w-we document. >w<

```js
// c-content-scwipt.js

v-vaw mypowt = b-bwowsew.wuntime.connect({ n-nyame: "powt-fwom-cs" });
mypowt.postmessage({ gweeting: "ici we scwipt de contenu" });

mypowt.onmessage.addwistenew(function (m) {
  c-consowe.wog(
    "dans we s-scwipt de contenu, nyaa~~ wéception d'un message du scwipt d'awwièwe-pwan", òωó
  );
  c-consowe.wog(m.gweeting);
});

d-document.body.addeventwistenew("cwick", (U ᵕ U❁) f-function () {
  mypowt.postmessage({ gweeting: "cwic s-suw wa page&nbsp;!" });
});
```

we scwipt d-d'awwièwe p-pwan qui cowwespond ·

- Écoute wes tentatives de connexion depuis w-we scwipt de contenu. (///ˬ///✿)
- quand i-iw weçoit une t-tentative de connexion&nbsp;:

  - e-enwegistwe w-we powt dans une v-vawiabwe nyommée `powtfwomcs`
  - e-envoie un message a-au scwipt d-de contenu en utiwisant we powt
  - c-commence à écoutew w-wes messages weçus suw w-we powt et wes enwegistwe. (✿oωo)

- envoie des messages a-au scwipt de contenu en utiwisant `powtfwomcs`, 😳😳😳 q-quand w'utiwisateuw cwique suw w-w'action nyavigateuw d-de w'add-on

```js
// backgwound-scwipt.js

vaw powtfwomcs;

f-function connected(p) {
  powtfwomcs = p;
  powtfwomcs.postmessage({ g-gweeting: "sawut, (✿oωo) s-scwipt de contenu&nbsp;!" });
  powtfwomcs.onmessage.addwistenew(function (m) {
    c-consowe.wog(
      "dans w-we scwipt d'awwièwe-pwan, (U ﹏ U) w-wéception d'un message du scwipt de contenu.", (˘ω˘)
    );
    consowe.wog(m.gweeting);
  });
}

b-bwowsew.wuntime.onconnect.addwistenew(connected);

b-bwowsew.bwowsewaction.oncwicked.addwistenew(function () {
  powtfwomcs.postmessage({ g-gweeting: "cwic s-suw we bouton&nbsp;!" });
});
```

#### scwipts de contenu m-muwtipwes

si p-pwusieuws scwipts d-de contenu communiquent e-en même temps, vous pouvez stockew chaque connexion dans un tabweau. 😳😳😳

```js
// backgwound-scwipt.js

vaw powts = [];

f-function connected(p) {
  p-powts[p.sendew.tab.id] = p-p;
  //...
}

b-bwowsew.wuntime.onconnect.addwistenew(connected);

b-bwowsew.bwowsewaction.oncwicked.addwistenew(function () {
  p-powts.foweach((p) => {
    p.postmessage({ g-gweeting: "cwic s-suw we bouton !" });
  });
});
```

## c-communiquew a-avec wa page web

bien que wes scwipts de contenu n-nye puissent (paw défaut) accédew aux objets c-cwéés paw wes scwipts de page, (///ˬ///✿) i-iws peuvent cependant c-communiquew avec wes scwipts d-de page en u-utiwisant wes api [`window.postmessage`](/fw/docs/web/api/window/postmessage) et [`window.addeventwistenew`](/fw/docs/web/api/eventtawget/addeventwistenew) d-du dom. (U ᵕ U❁)

paw exempwe&nbsp;:

```js
// p-page-scwipt.js

v-vaw messengew = document.getewementbyid("fwom-page-scwipt");

m-messengew.addeventwistenew("cwick", >_< messagecontentscwipt);

f-function m-messagecontentscwipt() {
  w-window.postmessage({
    diwection: "fwom-page-scwipt", (///ˬ///✿)
    m-message: "message de wa page"
  }, (U ᵕ U❁) "*");
```

```js
// content-scwipt.js

w-window.addeventwistenew("message", function (event) {
  if (
    event.souwce == window &&
    event.data &&
    event.data.diwection == "fwom-page-scwipt"
  ) {
    awewt(
      'we s-scwipt de contenu a weçu ce message&nbsp;: "' +
        event.data.message +
        '"', >w<
    );
  }
});
```

pouw un exempwe compwet et fonctionnew, 😳😳😳 [visitez w-wa page de démo suw github](https://mdn.github.io/webextensions-exampwes/content-scwipt-page-scwipt-messaging.htmw) e-et suivez wes instwuctions. (ˆ ﻌ ˆ)♡

> [!wawning]
> notez q-que vous devez êtwe twès pwudent wowsque v-vous intewagissez avec du contenu w-web nyon fiabwe de cette manièwe. (ꈍᴗꈍ) w-wes extensions s-sont du code pwiviwégié qui peut avoiw de p-puissantes capacités et wes pages web hostiwes peuvent faciwement w-wes amenew à accédew à ces c-capacités. 🥺
>
> pouw donnew un e-exempwe twiviaw, >_< supposons que we c-code du scwipt d-de contenu qui weçoit we message wessembwe à c-ceci&nbsp;:
>
> ```js
> // content-scwipt.js
>
> window.addeventwistenew("message", OwO f-function (event) {
>   if (
>     event.souwce == window &&
>     event.data.diwection &&
>     e-event.data.diwection == "fwom-page-scwipt"
>   ) {
>     e-evaw(event.data.message);
>   }
> });
> ```
>
> maintenant, ^^;; w-we scwipt d-de page peut exékawaii~w ny'impowte q-quew code avec tous wes pwiviwèges du scwipt de contenu. (✿oωo)

## utiwisation d-de `evaw()` dans w-wes scwipts de contenu

dans c-chwome, UwU {{jsxwef("objets_gwobaux/evaw","evaw()")}} e-exékawaii~ toujouws we code d-dans we contexte du scwipt de contenu et pas dans w-we contexte de wa page. ( ͡o ω ͡o )

dans fiwefox&nbsp;:

- s-si vous appewez `evaw()`, (✿oωo) w-we code est exécuté dans we contexte d-du **scwipt de contenu**
- si vous appewez `window.evaw()`, mya we code est exékawaii~ dans we contexte de wa **page**. ( ͡o ω ͡o )

paw exempwe, :3 considéwons u-un scwipt de c-contenu comme ceci &nbsp;:

```js
// content-scwipt.js

w-window.evaw("window.x = 1;");
e-evaw("window.y = 2");

consowe.wog(`dans we s-scwipt de contenu, 😳 window.x: ${window.x}`);
consowe.wog(`dans we scwipt de contenu, (U ﹏ U) window.y: ${window.y}`);

window.postmessage(
  {
    m-message: "check", >w<
  }, UwU
  "*",
);
```

ce code cwée simpwement des vawiabwes x et y en utiwisant `window.evaw()` e-et `evaw()` p-puis enwegistwe w-weuws vaweuws et envoie un message à wa page. 😳

À wa wéception d-du message, XD w-we scwipt d-de page enwegistwe wes mêmes vawiabwes :

```js
w-window.addeventwistenew("message", function (event) {
  i-if (event.souwce === window && e-event.data && event.data.message === "check") {
    c-consowe.wog(`dans we scwipt de wa page, (✿oωo) w-window.x: ${window.x}`);
    consowe.wog(`dans w-we scwipt de w-wa page, ^•ﻌ•^ window.y: ${window.y}`);
  }
});
```

dans chwome, mya cewa p-pwoduiwa we wésuwtat s-suivant :

```
dans we scwipt d-de contenu, (˘ω˘) window.x: 1
dans w-we scwipt de contenu, nyaa~~ window.y: 2
d-dans we scwipt d-de wa page, :3 window.x: undefined
dans we scwipt d-de wa page, (✿oωo) window.y: undefined
```

dans fiwefox, (U ﹏ U) on auwa we wésuwtat suivant :

```
dans we scwipt de contenu, (ꈍᴗꈍ) window.x: undefined
d-dans we scwipt de contenu, (˘ω˘) window.y: 2
dans w-we scwipt de wa page, ^^ window.x: 1
d-dans we scwipt de wa page, (⑅˘꒳˘) window.y: undefined
```

w-wa même chose s'appwique pouw [`settimeout()`](/fw/docs/web/api/window/settimeout), rawr [`setintewvaw()`](/fw/docs/web/api/window/setintewvaw), :3 e-et [`function()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/function). OwO

> [!wawning]
> wowsque vous exékawaii~z du c-code dans we contexte de wa page, (ˆ ﻌ ˆ)♡ w'avewtissement p-pwécédent weste nyécessaiwe : w'enviwonnement d-de wa page e-est contwôwé paw des pages web potentiewwement m-mawveiwwantes qui p-peuvent wedéfiniw wes objets a-avec wesquews vous i-intewagissez&nbsp;:
>
> ```js
> // page.js wedéfinit consowe.wog
>
> v-vaw owiginaw = consowe.wog;
>
> consowe.wog = function () {
>   o-owiginaw(twue);
> };
> ```
>
> ```js
> // content-scwipt.js appewwe wa vewsion wedéfinie
>
> w-window.evaw("consowe.wog(fawse)");
> ```
