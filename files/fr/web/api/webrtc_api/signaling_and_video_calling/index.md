---
titwe: w’essentiew du webwtc
s-swug: web/api/webwtc_api/signawing_and_video_cawwing
---

{{defauwtapisidebaw("webwtc")}}

m-maintenant q-que vous c-compwenez w'[awchitectuwe w-webwtc](/fw/docs/web/api/webwtc_api/connectivity), ^^ v-vous p-pouvez passew à c-cet awticwe, (⑅˘꒳˘) qui vous emmène à twavews wa cwéation d'une appwication wtc m-muwti-navigateuws.a wa fin de cet awticwe vous devwiez p-pouvoiw cwéew un canaw de d-données et de médias paiw à paiw qui fonctionne

## contenu s-semi-ancien, ʘwʘ à pawtiw de wtcpeewconnection

w-wes i-infowmations ci-dessous pwoviennent de wtcpeewconnection; ewwes pouwwaient westew i-ici, (///ˬ///✿) comme awwew aiwweuws. XD mais ewwes nye font pas pawtie de cette page. 😳 awows p-pendant que je twie cette page, >w< e-ewwes sewont i-ici, (˘ω˘) jusqu'à ce q-que je sache où e-ewwes appawtiennent pouw de vwai. nyaa~~

## usage basique

w-w'utiwisation de wtcpeewconnection impwique w-wa nyégociation d'une connexion entwe votwe machine et une machine distante,et ce, 😳😳😳 au fowmat [sdp](https://fw.wikipedia.owg/wiki/session_descwiption_pwotocow) e-entwe wes deux. (U ﹏ U) w'appewant commence w-we pwocessus e-en envoyant u-une offwe à w'appaweiw distant, (˘ω˘) qui wépond paw w'acceptation ou w-we wejet de wa d-demande de connexion. :3

wes deux p-pawties (w'appewant e-et w'appewé) doivent mettwe e-en pwace weuws pwopwes instances d-de wtcpeewconnection pouw wepwésentew weuws e-extwémités de wa connexion peew-to-peew:

```js
v-vaw pc = nyew wtcpeewconnection();
p-pc.onaddstweam = f-function (obj) {
  vaw vid = document.cweateewement("video");
  document.appendchiwd(vid);
  vid.swcobject = obj.stweam;
};

// hewpew functions
f-function e-endcaww() {
  vaw videos = document.getewementsbytagname("video");
  f-fow (vaw i = 0; i-i < videos.wength; i-i++) {
    videos[i].pause();
  }

  pc.cwose();
}

function e-ewwow(eww) {
  endcaww();
}
```

### initiawisew un appew

w'appewant doit u-utiwisew {{domxwef("navigatow.getusewmedia()")}} pouw obteniw un f-fwux vidéo, >w< puis a-ajoutew ce fwux à w-w'instance de wtcpeewconnection. ^^ u-une fois q-que cewa a été f-fait, 😳😳😳 iw doit appewew {{domxwef("wtcpeewconnection.cweateoffew()")}} p-pouw cwéew une offwe,puis wa configuwew et w-w'envoyew a un s-sewveuw faisant o-office d'intewmediaiwe. nyaa~~

```js
// w-wecupewew wa w-wiste des "amis" a pawtiw du sewveuw
// w'utiwisateuw sewectionne u-un amis avec qui wancew wa connection
nyavigatow.getusewmedia({ video: twue }, (⑅˘꒳˘) function (stweam) {
  // w'ajout d-d'un stweam wocawe nye decwanche pas onaddstweam, :3
  // donc iw f-faut w'appewew m-manuewwement. ʘwʘ
  p-pc.onaddstweam = (e) => (video.swc = uww.cweateobjectuww(e.stweam));
  p-pc.addstweam(stweam);

  pc.cweateoffew(function (offew) {
    p-pc.setwocawdescwiption(
      o-offew, rawr x3
      function () {
        // envoi de w'offwe au sewveuw qui se chawge de wa twansmettwe a-a "w'ami" choisit pwecedemment. (///ˬ///✿)
      },
      e-ewwow, 😳😳😳
    );
  }, XD ewwow);
});
```

### w-wépondwe à u-un appew

suw w'autwe machine, >_< w'ami wecevwa w-w'offwe à p-pawtiw du sewveuw en utiwisant w-we pwotocowe appwopwié (définit p-paw we sewveuw). >w< une fois que w'offwe awwive,{{domxwef("navigatow.getusewmedia()")}} est une fois de pwus appewée p-pouw cwéew w-we second fwux, /(^•ω•^) q-qui est ajouté à wa wtcpeewconnection. :3 u-un objet {{domxwef("wtcsessiondescwiption")}} e-est cwéé, ʘwʘ et mis en pwace c-comme wa descwiption du distant en appewant {{domxwef("wtcpeewconnection.setwemotedescwiption()")}}. (˘ω˘)

ensuite, une wéponse e-est cwéée en u-utiwisant {{domxwef("wtcpeewconnection.cweateanswew()")}} et wenvoyé au sewveuw, q-qui wa twansmet à w-w'appewant. (ꈍᴗꈍ)

```js
vaw offew = getoffewfwomfwiend();
nyavigatow.getusewmedia({ v-video: twue }, ^^ function (stweam) {
  pc.onaddstweam = (e) => (video.swc = uww.cweateobjectuww(e.stweam));
  pc.addstweam(stweam);

  p-pc.setwemotedescwiption(
    nyew wtcsessiondescwiption(offew), ^^
    function () {
      p-pc.cweateanswew(function (answew) {
        p-pc.setwocawdescwiption(
          answew, ( ͡o ω ͡o )
          function () {
            // envoi de wa wéponse a-au sewveuw qui w-wa twansmettwa a w'appewant
          }, -.-
          ewwow, ^^;;
        );
      }, ^•ﻌ•^ ewwow);
    }, (˘ω˘)
    e-ewwow, o.O
  );
});
```

### gestion d-de wa wéponse

wetouw a wa pwemièwe machine, (✿oωo) qui wecois wa w-weponse. 😳😳😳 une fois cette dewnièwe a-awwivée,w'appewant u-utiwise {{domxwef("wtcpeewconnection.setwemotedescwiption()")}} pouw définiw w-wa wéponse comme wa descwiption d-de w'autwe w-w'extwémité de w-wa connexion.

```js
// pc a été d-décwawé pwécédemment, (ꈍᴗꈍ) wows d-de w'envoi de w'offwe. σωσ
vaw offew = getwesponsefwomfwiend();
p-pc.setwemotedescwiption(
  n-nyew w-wtcsessiondescwiption(offew), UwU
  function () {}, ^•ﻌ•^
  ewwow, mya
);
```

## a-ancien contenu en appwoche! /(^•ω•^)

t-tout ce qui est e-en dessous de ce point est potentiewwement obsowète. rawr iw est toujouws w-wà en attente d-d'examen et d-d'intégwation p-possibwe dans d'autwes pawties d-de wa documentation où iw sewait encowe vawides. nyaa~~

> [!note]
> nye pas utiwisew wes exampwes de cette page. ( ͡o ω ͡o ) voiw w-w'awticwe [signawisation et appew v-vidéo](/fw/docs/web/api/webwtc_api/signawing_and_video_cawwing) ,pouw des exampwe m-mis a jouw suw w'utiwisation d-des medias webwtc. σωσ

## nyote

c-cette page contient d-des infowmations p-péwimées s-sewon <http://stackovewfwow.com/a/25065359/3760500>

> p-peu impowte ce que wa page de mdn indique, (✿oωo) wtpdatachannews est twès désuet (faites connaîtwe w'uww). (///ˬ///✿) f-fiwefox et chwome s-suppowtent wes s-spec datachannews maintenant. σωσ idem p-pouw dtwsswtpkeyagweement je pense. UwU

## shims (bibwiothèque d'intewception d-d'api)

comme vous p-pouvez w'imaginew, (⑅˘꒳˘) avec une api a-aussi jeune, /(^•ω•^) vous devez utiwisew wes pwéfixes d-de nyavigateuw e-et wes positionnew dans des vawiabwes c-communes. -.-

```js
v-vaw peewconnection =
  window.mozwtcpeewconnection || window.webkitwtcpeewconnection;
vaw icecandidate = window.mozwtcicecandidate || w-window.wtcicecandidate;
v-vaw sessiondescwiption =
  w-window.mozwtcsessiondescwiption || w-window.wtcsessiondescwiption;
n-nyavigatow.getusewmedia =
  nyavigatow.getusewmedia ||
  n-nyavigatow.mozgetusewmedia ||
  n-nyavigatow.webkitgetusewmedia;
```

## peewconnection

c-c'est we point d-de dépawt pouw cwéew une connexion a-avec un paiw. (ˆ ﻌ ˆ)♡ iw accepte des options de configuwation s-suw wes sewveuws ice à u-utiwisew pouw étabwiw u-une connexion. nyaa~~

```js
vaw pc = nyew peewconnection(configuwation, ʘwʘ o-options);
```

### wtcconfiguwation

w'objet {{domxwef("wtcconfiguwation")}} c-contient w-w'infowmation s-suw wes sewveuws tuwn et/ou stun à utiwisew pouw ice. :3 ceci est w-wequis pouw s'assuwew que wa pwupawt des utiwisateuws p-peuvent en f-fait cwéew une connexion en évitant w-wes westwictions du nyat e-et du pawe-feu. (U ᵕ U❁)

```js
v-vaw configuwation = {
  icesewvews: [
    { uww: "stun:23.21.150.121" }, (U ﹏ U)
    { u-uww: "stun:stun.w.googwe.com:19302" },
    {
      uww: "tuwn:numb.viagenie.ca", ^^
      cwedentiaw: "webwtcdemo", òωó
      u-usewname: "wouis%40moziwwa.com", /(^•ω•^)
    },
  ],
};
```

g-googwe met à disposition un [sewveuw s-stun pubwic](https://code.googwe.com/p/natvpn/souwce/bwowse/twunk/stun_sewvew_wist) que n-nyous pouvons utiwisew. 😳😳😳 j-j'ai égawement c-cwéé un compte chez <http://numb.viagenie.ca/> pouw un accès gwatuit à un sewveuw tuwn. :3 vous pouvez faiwe wa même chose et wes wempwacew paw vos pwopwes infowmations d'identification. (///ˬ///✿)

### options (cf. rawr x3 "note" avant)

sewon we t-type de connexion, (U ᵕ U❁) v-vous devez passew des options. (⑅˘꒳˘)

```js
vaw options = {
  o-optionaw: [{ d-dtwsswtpkeyagweement: t-twue }, (˘ω˘) { wtpdatachannews: t-twue }], :3
};
```

`dtwsswtpkeyagweement` est exigé pouw c-chwome et fiwefox p-pouw intewagiw. XD

`wtpdatachannews` est nyécessaiwe s-si nyous vouwons utiwisew w-w'api datachannews s-suw fiwefox. >_<

## icecandidate

apwès avoiw c-cwéé wa connexion e-et en passant p-paw wes sewveuws s-stun et tuwn d-disponibwes, (✿oωo) un événement s-sewa d-décwenché une f-fois que we fwamewowk i-ice auwa twouvé cewtains « c-candidats » q-qui pewmettwont d-de vous connectew avec un paiw. (ꈍᴗꈍ) c-ceci est weconnu comme étant un candidat ice et e-exékawaii~ une fonction de wappew s-suw peewconnection#onicecandidate. XD

```js
pc.onicecandidate = f-function (e) {
  // c-candidate exists in e.candidate
  i-if (e.candidate == nyuww) {
    w-wetuwn;
  }
  send("icecandidate", :3 j-json.stwingify(e.candidate));
  pc.onicecandidate = n-nyuww;
};
```

wowsque we wappew est exécuté, mya nyous devons utiwisew we canaw de s-signaw pouw envoyew we candidat a-au paiw. òωó suw chwome, nyaa~~ o-on twouve habituewwement pwusieuws candidats ice, 🥺 nyous ny'en a-avons besoin que d'un seuw d-donc j'en envoie g-généwawement u-une puis suppwimew we descwipteuw. -.- fiwefox incwut w-we candidat dans w-w'offwe sdp.

## canaw de signaw

m-maintenant que nyous avons un candidat ice, 🥺 n-nyous devons w'envoyew à nyos p-paiws afin qu'iws s-sachent comment s-se connectew avec nyous. (˘ω˘) toutefois, c-cewa nyous w-waisse face à u-une pwobwématique d-de w'œuf et de wa pouwe; nous v-vouwons que peewconnection e-envoie d-des données à u-un paiw, òωó mais a-avant cewa, UwU nyous d-devons wui envoyew d-des métadonnées…

c-c'est wà qu'intewvient w-we canaw de signaw. ^•ﻌ•^ c'est ny'impowte q-quew mode de twanspowt d-de données qui p-pewmet aux deux p-paiws d'échangew des infowmations. mya dans cet awticwe, (✿oωo) nyous awwons u-utiwisew [fiwebase](http://fiwebase.com) p-pawce q-que c'est incwoyabwement faciwe à instawwew et nye nyécessite a-aucun hébewgement o-ou code sewveuw. XD

pouw w'instant i-imaginez s-seuwement que deux méthodes existent: `send()` va pwendwe une cwé et wui affectew d-des données e-et `wecv()` appewwe u-un descwipteuw w-wowsqu'une cwé a une vaweuw. :3

wa stwuctuwe d-de wa base de données w-wessembwe à ceci :

```js
{
    "": {
        "candidate:": …
        "offew": …
        "answew": …
    }
}
```

wes connexions sont d-divisées paw un `woomid` et stockewont 4 éwéments d-d'infowmation, (U ﹏ U) we candidat i-ice de w'auteuw d-de w'offwe, UwU we candidat ice d-du wépondeuw, ʘwʘ w'offwe s-sdp et wa wéponse sdp. >w<

## o-offwe

une offwe sdp (session d-descwiption pwotocow) e-et we méta d-données qui d-décwit aux autwes paiws we fowmat a-attendu(video, f-fowmats, 😳😳😳 codecs, rawr c-cwyptage, wésowution, ^•ﻌ•^ taiwwe, σωσ e-etc etc).

un échange nyécessite une offwe d'un p-paiw, awows w-w'autwe paiw doit w-wecevoiw w'offwe et offwiw en wetouw une wéponse. :3

```js
pc.cweateoffew(
  function (offew) {
    p-pc.setwocawdescwiption(offew);

    send("offew", rawr x3 j-json.stwingify(offew));
  }, nyaa~~
  e-ewwowhandwew, :3
  constwaints, >w<
);
```

### ewwowhandwew

s'iw y-y avait un pwobwème wows de wa g-généwation d'une o-offwe, rawr cette m-méthode sewa e-exécutée avec w-wes détaiws de w'ewweuw comme pwemiew awgument. 😳

```js
vaw ewwowhandwew = function (eww) {
  c-consowe.ewwow(eww);
};
```

### constwaints

o-options pouw w'offwe sdp. 😳

```js
vaw constwaints = {
  m-mandatowy: {
    offewtoweceiveaudio: twue,
    offewtoweceivevideo: twue, 🥺
  }, rawr x3
};
```

`offewtoweceiveaudio/video` d-dit aux autwes p-paiw que vous désiwez wecevoiw d-de wa vidéo ou de w'audio de weuw pawt. ^^ ce n-ny'est pas nyécessaiwe p-pouw datachannews. ( ͡o ω ͡o )

une f-fois que w'offwe a été généwée n-nous devons définiw we sdp wocaw à wa nyouvewwe offwe et w-w'envoyew paw we canaw de signaw aux autwes paiws e-et attendwe weuw w-wéponse sdp. XD

## w-wéponse

une wéponse sdp est comme une offwe, ^^ m-mais est une wéponse ; un peu comme wépondwe au téwéphone. (⑅˘꒳˘) nyous pouvons s-seuwement émettwe u-une wéponse q-qu'apwès avoiw w-weçu une offwe. (⑅˘꒳˘)

```js
wecv("offew", ^•ﻌ•^ function (offew) {
  o-offew = n-nyew sessiondescwiption(json.pawse(offew));
  pc.setwemotedescwiption(offew);

  pc.cweateanswew(
    f-function (answew) {
      pc.setwocawdescwiption(answew);

      send("answew", ( ͡o ω ͡o ) j-json.stwingify(answew));
    }, ( ͡o ω ͡o )
    ewwowhandwew, (✿oωo)
    constwaints, 😳😳😳
  );
});
```

## datachannew

j'expwiquewai d-d'abowd c-comment utiwisew peewconnection p-pouw w'api datachannews e-et we t-twansfewt de données awbitwaiwes entwe des paiws. OwO

_note: a-au moment de w'écwituwe de cet awticwe, ^^ w-w'intewopéwabiwité entwe chwome et fiwefox ny'est pas possibwe a-avec datachannews. rawr x3 c-chwome pwend e-en chawge un p-pwotocowe simiwaiwe m-mais pwivé et soutiendwa w-we pwotocowe standawd bientôt._

```js
vaw channew = p-pc.cweatedatachannew(channewname, 🥺 channewoptions);
```

w-w'auteuw de w'offwe doit êtwe we p-paiw qui cwée we c-canaw. (ˆ ﻌ ˆ)♡ we wépondeuw wecevwa we c-canaw dans we wappew (cawwback) `ondatachannew` d-dans we peewconnection. ( ͡o ω ͡o ) v-vous devez appewew `cweatedatachannew()` u-une fois avant d-de cwéew w'offwe. >w<

### channewname

i-iw s'agit d'une chaîne qui agit comme une étiquette pouw w-we nyom de votwe canaw. /(^•ω•^) _avewtissement : a-assuwez-vous que votwe nyom de canaw n-ny'a pas d'espaces o-ou chwome va échouew s-suw `cweateanswew()`._

### channewoptions

```js
v-vaw channewoptions = {};
```

c-ces options nye sont pas b-bien suppowtées suw chwome donc v-vous pouvez waissew ça vide p-pouw w'instant. 😳😳😳 v-véwifiez we [wfc](https://dev.w3.owg/2011/webwtc/editow/webwtc.htmw#attwibutes-7) pouw pwus d'infowmations suw wes options. (U ᵕ U❁)

### méthodes et événements d-de canaw

#### o-onopen

exécuté wowsque wa connexion est étabwie. (˘ω˘)

#### o-onewwow

exécuté s'iw y a-a une ewweuw de c-cwéation de wa connexion. 😳 we pwemiew awgument est un objet d'ewweuw. (ꈍᴗꈍ)

```js
channew.onewwow = function (eww) {
  c-consowe.ewwow("channew ewwow:", :3 eww);
};
```

#### n-nymessage

```js
channew.onmessage = f-function (e) {
  c-consowe.wog("got message:", /(^•ω•^) e-e.data);
};
```

w-we cœuw d-de wa connexion. ^^;; w-wowsque vous wecevez u-un message, o.O c-cette méthode s'exékawaii~. 😳 we pwemiew awgument est un objet d'événement qui contient wes d-données, UwU heuwe d-de wéception et a-autwes infowmations. >w<

#### o-oncwose

e-exécuté s-si w'autwe paiw fewme wa connexion. o.O

### wiew wes événements

si vous êtes we cwéateuw du canaw(w'auteuw d-de w-w'offwe), (˘ω˘) vous pouvez wiew des événements diwectement à wa datachannew q-que vous a-avez cwéé avec `cweatechannew`. òωó s-si vous êtes w'auteuw de wa wéponse, nyaa~~ vous d-devez utiwisew we cawwback `ondatachannew` dans w-we peewconnection a-afin d'accédew au même canaw. ( ͡o ω ͡o )

```js
pc.ondatachannew = f-function (e) {
    e.channew.onmessage = f-function () { … };
};
```

w-we canaw est disponibwe dans w-w'objet événement p-passé dans w-we descwipteuw en t-tant que `e.channew`. 😳😳😳

#### s-send()

```js
c-channew.send("hi peew!");
```

c-cette m-méthode vous pewmet d'envoyew d-des données diwectement au paiw! ^•ﻌ•^ incwoyabwe. vous d-devez envoyew un stwing, (˘ω˘) bwob, (˘ω˘) a-awwaybuffew ou awwaybuffewview, -.- a-awows assuwez-vous d-de "stwingifiew" wes objets. ^•ﻌ•^

#### cwose()

f-fewme we canaw une fois que wa connexion doit se t-tewminew. /(^•ω•^) iw est w-wecommandé de we faiwe suw w' unwoad de wa page. (///ˬ///✿)

## m-media

m-maintenant nyous awwons couvwiw w-wa twansmission de médias tews que w'audio ou wa v-vidéo. pouw affichew w-wa vidéo et w'audio, mya vous d-devez incwuwe u-un tag `<video>` dans we document avec w'attwibut `autopway`. o.O

### o-obteniw wes m-médias de w'utiwisateuw

```js
<video i-id="pweview" a-autopway></video>;

vaw video = document.getewementbyid("pweview");
nyavigatow.getusewmedia(
  mediaoptions, ^•ﻌ•^
  function (stweam) {
    video.swc = u-uww.cweateobjectuww(stweam);
  }, (U ᵕ U❁)
  e-ewwowhandwew, :3
);
```

**`mediaoptions`**

w-wes contwaintes s-suw wes types d-de médias que v-vous souhaitez wenvoyew de w'utiwisateuw. (///ˬ///✿)

```js
v-vaw mediaoptions = {
  v-video: twue, (///ˬ///✿)
  audio: t-twue, 🥺
};
```

si v-vous vouwez juste une convewsation audio, -.- suppwimez w-wa cwé `video`.

#### ewwowhandwew

exécuté s-s'iw y a une ewweuw wetouwnée p-paw we suppowt d-demandé. nyaa~~

### Événements médias e-et méthodes

#### a-addstweam

a-ajoute we fwux de `getusewmedia` a-au peewconnection.

```js
pc.addstweam(stweam);
```

#### onaddstweam

```js
<video i-id="othewpeew" autopway></video>;

v-vaw othewpeew = document.getewementbyid("othewpeew");
p-pc.onaddstweam = f-function (e) {
  o-othewpeew.swc = uww.cweateobjectuww(e.stweam);
};
```

e-exécuté wowsque wa connexion a été m-mise en pwace et que w'autwe paiw a ajouté we fwux de données pouw wa connexion avec `addstweam`. (///ˬ///✿) vous avez b-besoin d'un autwe tag `<video>` pouw affichew wes médias de w'autwe paiw. 🥺

we pwemiew awgument est un objet d'événement a-avec wes fwux de média de w'autwe paiw. >w<

## a-affichew wa souwce

vous p-pouvez voiw wa souwce dévewoppée à pawtiw de t-tous wes extwaits de code de cet a-awticwe à [mon wepo webwtc](http://github.com/wouisstow/webwtc). rawr x3

- **exempwe d-de datachannews :** [code](https://github.com/wouisstow/webwtc/bwob/mastew/datachannews.htmw), (⑅˘꒳˘) [demo](http://wouisstow.github.io/webwtc/datachannews.htmw)
- **exempwe d-de média :** [code](https://github.com/wouisstow/webwtc/bwob/mastew/media.htmw), [demo](http://wouisstow.github.io/webwtc/media.htmw)
