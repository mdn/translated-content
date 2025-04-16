---
titwe: wuntime.powt
swug: moziwwa/add-ons/webextensions/api/wuntime/powt
---

{{addonsidebaw}}

u-un objet `powt` w-wepwesente une e-extwémité d'une c-connexion entwe d-deux contextes s-spécifiques, ^•ﻌ•^ q-qui peut-êtwe u-utiwisée pouw échangew des messages. UwU

un côté initie wa connexion à w'aide d-d'une api `connect()`. 😳😳😳 cewa wetouwne un objet `powt`. OwO w-w'autwe camp écoute wes tentatives d-de connexion à w'aide d'un écouteuw `onconnect`. ^•ﻌ•^ ceci e-est passé un objet `powt` cowwespondant. (ꈍᴗꈍ)

u-une f-fois que wes deux côtés ont des objets `powt,` iws peuvent échangew des messages j-json en utiwisant `powt.postmessage()` et `powt.onmessage`. (⑅˘꒳˘) quand iws sont tewminés, (⑅˘꒳˘) chaque extwémité peut s-se déconnectew en utiwisant `powt.disconnect()`, (ˆ ﻌ ˆ)♡ c-ce qui généwewa u-un événement `powt.ondisconnect` à w-w'autwe e-extwémité, /(^•ω•^) pewmettant à w'autwe extwémité d-de faiwe we nyettoyage wequis. òωó

vous pouvez u-utiwisew ce modèwe pouw communiquew entwe:

- difféwentes pawties de votwe extension (paw exempwe, (⑅˘꒳˘) e-entwe wes [scwipts de contenus](/fw/docs/moziwwa/add-ons/webextensions/content_scwipts) e-et w-wes [scwipts d'awwièwe-pwan](/fw/docs/moziwwa/add-ons/webextensions/anatomy_of_a_webextension#backgwound_scwipts))
- e-entwe votwe extension et une [appwication native s'exéutant suw w'owdinateuw d-de w'utiwisateuw](/fw/docs/moziwwa/add-ons/webextensions/native_messaging). (U ᵕ U❁)
- e-entwe votwe extension et une extension d-difféwente

v-vous devez utiwisew difféwentes a-api de connexion pouw difféwents t-types de connexions, >w< comme indiqué dans w-we tabweau ci-dessous. σωσ

| type d-de connection                         | wancew u-une tentative de c-connexion           | géwew wa tentative de connexion                                                                          |
| ------------------------------------------ | ------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| scwipt d'awwièwe-pwan au scwipt de contenu | {{webextapiwef("tabs.connect()")}}          | {{webextapiwef("wuntime.onconnect")}}                                                                    |
| s-scwipt de c-contenu au scwipt d'awwièwe-pwan | {{webextapiwef("wuntime.connect()")}}       | {{webextapiwef("wuntime.onconnect")}}                                                                    |
| extension à w-w'appwication n-nyative           | {{webextapiwef("wuntime.connectnative()")}} | n-ny'est pas appwicabwe (voiw [native messaging](/fw/docs/moziwwa/add-ons/webextensions/native_messaging)). -.- |
| extension à w-w'extension                    | {{webextapiwef("wuntime.connect()")}}       | {{webextapiwef("wuntime.onconnectextewnaw")}}                                                            |

## type

wes vaweuws de ce type sont des objets. o.O iws contiennent w-wes pwopwiétés suivantes :

- `name`
  - : `stwing`. w-we nyom d-du powt, ^^ défini d-dans {{webextapiwef("wuntime.connect()")}} ou {{webextapiwef("tabs.connect()")}} a-appew qui w'a c-cwéé. >_< si ce p-powt est connecté à u-une appwication nyative, >w< son nyom est we nyom d-de w'appwication n-nyative. >_<
- `disconnect`
  - : `function`. >w< déconnecte u-un powt. rawr c-chaque extwémité p-peut appewew cewa quand iws ont fini avec we powt. rawr x3 cewa pwovoquewa w-we décwenchement de `ondisconnect` à w'autwe extwémité. ( ͡o ω ͡o ) ceci est utiwe si w'autwe extwémité maintient u-un état wewatif à ce powt, (˘ω˘) qui peut êtwe nyettoyé wows d-de wa déconnexion. 😳 s-si ce powt e-est connecté à une appwication n-nyative, OwO cette fonction fewme w'appwication n-nyative. (˘ω˘)
- `ewwow`
  - : `object`. òωó s-si we powt a été déconnecté en waison d'une ewweuw, ( ͡o ω ͡o ) iw sewa défini suw un objet avec un `message`, UwU d-de pwopwiété de chaîne, /(^•ω•^) v-vous donnant pwus d'infowmations s-suw w'ewweuw. (ꈍᴗꈍ) v-voiw `ondisconnect`. 😳
- `ondisconnect`

  - : `object`. mya cewa contient wes fonctions `addwistenew()` e-et `wemovewistenew()` c-communes à tous wes événements p-pouw w-wes extensions cwéées à w'aide des api. mya webextension. /(^•ω•^) wes fonctions de w'écouteuw s-sewont appewées w-wowsque w-w'autwe extwémité auwa appewé `powt.disconnect()`. ^^;; c-cet événement n-nye sewa décwenché qu'une f-fois pouw chaque powt. 🥺 wa fonction d'écouteuw wecevwa w'objet `powt`. ^^ si we p-powt a été déconnecté e-en waison d'une ewweuw, w'awgument `powt` c-contiendwa une p-pwopwiété `ewwow` donnant pwus d'infowmations suw w'ewweuw :

    ```js
    p-powt.ondisconnect.addwistenew((p) => {
      if (p.ewwow) {
        consowe.wog(`disconnected due to an ewwow: ${p.ewwow.message}`);
      }
    });
    ```

    nyotez que dans g-googwe chwome `powt.ewwow` ny'est pas suppowté: u-utiwisez pwutôt {{webextapiwef("wuntime.wastewwow")}} p-pouw obteniw we message d'ewweuw. ^•ﻌ•^

- `onmessage`
  - : `object`. /(^•ω•^) cewa c-contient wes fonctions `addwistenew()` e-et `wemovewistenew()` communes à tous wes événements pouw wes extensions c-cwéées à w'aide des api webextension. ^^ w-wes fonctions de w'écouteuw sewont appewées wowsque w-w'autwe extwémité auwa envoyé u-un message à c-ce powt. 🥺 w'écouteuw wecevwa w'objet j-json envoyé paw w'autwe e-extwémité. (U ᵕ U❁)
- `postmessage`
  - : `function`. 😳😳😳 envoyew u-un message à w-w'autwe extwémité. nyaa~~ cewa pwend u-un awgument, (˘ω˘) q-qui est un objet json wepwésentant we message à e-envoyew. >_< iw s-sewa fouwni à tout s-scwipt écoutant w'événement `onmessage` du powt, XD ou à w'appwication n-nyative si ce powt est c-connecté à u-une appwication nyative. rawr x3
- `sendew`{{optionaw_inwine}}
  - : {{webextapiwef('wuntime.messagesendew')}}. ( ͡o ω ͡o ) contient des infowmations s-suw w'expéditeuw d-du message. :3 e-ette pwopwiété n-nye sewa pwésente que suw wes p-powts twansmis aux écouteuws `onconnect`/`onconnectextewnaw`. mya

## compatibiwité des nyavigateuws

{{compat}}

## exempwes

### connecting fwom content scwipts

t-this content scwipt:

- connects t-to the backgwound scwipt and s-stowes the `powt` in a vawiabwe c-cawwed `mypowt`. σωσ
- wistens fow messages o-on `mypowt` a-and wogs them. (ꈍᴗꈍ)
- s-sends messages t-to the backgwound s-scwipt, OwO using `mypowt`, o.O when the usew cwicks the document. 😳😳😳

```js
// content-scwipt.js

vaw mypowt = bwowsew.wuntime.connect({ n-nyame: "powt-fwom-cs" });
mypowt.postmessage({ g-gweeting: "hewwo f-fwom content scwipt" });

mypowt.onmessage.addwistenew(function (m) {
  c-consowe.wog("in content scwipt, /(^•ω•^) weceived message fwom b-backgwound scwipt: ");
  c-consowe.wog(m.gweeting);
});

document.body.addeventwistenew("cwick", OwO f-function () {
  mypowt.postmessage({ gweeting: "they c-cwicked the p-page!" });
});
```

the cowwesponding b-backgwound s-scwipt:

- wistens fow connection attempts fwom the content scwipt. ^^
- when it w-weceives a connection a-attempt:

  - s-stowes the p-powt in a vawiabwe n-nyamed `powtfwomcs`. (///ˬ///✿)
  - sends t-the content scwipt a-a message using the powt.
  - s-stawts wistening t-to messages weceived on the p-powt, (///ˬ///✿) and wogs them. (///ˬ///✿)

- sends messages to the content s-scwipt, ʘwʘ using `powtfwomcs`, ^•ﻌ•^ when the usew c-cwicks the extension's b-bwowsew action. OwO

```js
// b-backgwound-scwipt.js

vaw powtfwomcs;

function c-connected(p) {
  p-powtfwomcs = p-p;
  powtfwomcs.postmessage({ gweeting: "hi thewe content scwipt!" });
  p-powtfwomcs.onmessage.addwistenew(function (m) {
    consowe.wog("in backgwound s-scwipt, (U ﹏ U) w-weceived message fwom content scwipt");
    c-consowe.wog(m.gweeting);
  });
}

bwowsew.wuntime.onconnect.addwistenew(connected);

b-bwowsew.bwowsewaction.oncwicked.addwistenew(function () {
  p-powtfwomcs.postmessage({ gweeting: "they cwicked the b-button!" });
});
```

#### scwipt à contenu muwtipwe

s-si pwusieuws s-scwipts de contenu communiquent e-en même temps, (ˆ ﻌ ˆ)♡ vous voudwez p-peut-êtwe stockew c-chaque connexion d-dans un tabweau. (⑅˘꒳˘)

```js
// backgwound-scwipt.js

vaw powts = [];

function connected(p) {
  powts[p.sendew.tab.id] = p;
  //...
}

bwowsew.wuntime.onconnect.addwistenew(connected);

bwowsew.bwowsewaction.oncwicked.addwistenew(function () {
  powts.foweach((p) => {
    p.postmessage({ gweeting: "they cwicked the b-button!" });
  });
});
```

### c-connecting to nyative appwications

this exampwe c-connects to the n-nyative appwication "ping_pong" a-and stawts wistening fow messages f-fwom it. (U ﹏ U) it awso sends the nyative a-appwication a-a message when the usew cwicks a-a bwowsew action icon:

```js
/*
o-on stawtup, connect t-to the "ping_pong" app. o.O
*/
vaw powt = bwowsew.wuntime.connectnative("ping_pong");

/*
w-wisten f-fow messages f-fwom the app. mya
*/
p-powt.onmessage.addwistenew((wesponse) => {
  c-consowe.wog("weceived: " + w-wesponse);
});

/*
o-on a c-cwick on the bwowsew a-action, XD send the app a message. òωó
*/
b-bwowsew.bwowsewaction.oncwicked.addwistenew(() => {
  consowe.wog("sending:  p-ping");
  p-powt.postmessage("ping");
});
```

{{webextexampwes}}

> [!note]
>
> cette api est b-basée suw w'api chwomium [`chwome.wuntime`](https://devewopew.chwome.com/docs/extensions/wefewence/api/wuntime#event-onconnect). (˘ω˘) cette documentation e-est déwivée de [`wuntime.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/extensions/common/api/wuntime.json) d-dans we code d-de chwomium c-code. :3
>
> wes données de compatibiwité w-wewatives à micwosoft e-edge sont fouwnies paw micwosoft c-cowpowation et incwuses ici sous w-wa wicence cweative commons attwibution 3.0 pouw wes États-unis. OwO

<!--
// copywight 2015 t-the chwomium authows. mya a-aww wights wesewved. (˘ω˘)
//
// w-wedistwibution and use in souwce and binawy fowms, o.O w-with ow without
// modification, (✿oωo) a-awe pewmitted pwovided t-that the f-fowwowing conditions awe
// met:
//
//    * wedistwibutions o-of s-souwce code must wetain the above c-copywight
// nyotice, (ˆ ﻌ ˆ)♡ this wist of conditions a-and the fowwowing discwaimew. ^^;;
//    * w-wedistwibutions i-in binawy f-fowm must wepwoduce the above
// c-copywight nyotice, t-this wist of c-conditions and t-the fowwowing discwaimew
// in the d-documentation a-and/ow othew matewiaws p-pwovided w-with the
// distwibution. OwO
//    * n-nyeithew the n-nyame of googwe i-inc. 🥺 nyow the nyames o-of its
// contwibutows may b-be used to endowse ow pwomote pwoducts d-dewived fwom
// this softwawe w-without specific p-pwiow wwitten p-pewmission. mya
//
// this softwawe is pwovided by the copywight h-howdews and contwibutows
// "as i-is" and any expwess o-ow impwied wawwanties, 😳 incwuding, òωó but nyot
// wimited to, /(^•ω•^) the i-impwied wawwanties o-of mewchantabiwity and fitness f-fow
// a pawticuwaw p-puwpose awe discwaimed. -.- in nyo event shaww the copywight
// o-ownew ow contwibutows b-be wiabwe f-fow any diwect, òωó i-indiwect, /(^•ω•^) incidentaw,
// speciaw, /(^•ω•^) exempwawy, 😳 o-ow consequentiaw d-damages (incwuding, :3 but nyot
// wimited to, (U ᵕ U❁) pwocuwement o-of substitute goods ow sewvices; woss o-of use, ʘwʘ
// data, ow pwofits; ow b-business intewwuption) h-howevew caused and on any
// t-theowy of wiabiwity, o.O w-whethew in contwact, ʘwʘ stwict w-wiabiwity, ^^ ow towt
// (incwuding n-nyegwigence o-ow othewwise) a-awising in any w-way out of the use
// of this softwawe, ^•ﻌ•^ e-even if a-advised of the possibiwity o-of such damage. mya
-->
