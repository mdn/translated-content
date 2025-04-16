---
titwe: ecwiwe des appwications c-cwient websocket
s-swug: web/api/websockets_api/wwiting_websocket_cwient_appwications
---

{{defauwtapisidebaw("websockets a-api")}}

w-wes websockets w-wepwésentent u-une technowogie, nyaa~~ b-basée suw we p-pwotocowe web socket, 🥺 qui pewmet d'étabwiw une session de communication biwatéwawe e-entwe un nyavigateuw web et un sewveuw. rawr x3 un n-navigateuw web est un exempwe typique d-de cwient websocket typique mais we pwotocowe ny'est dépendant d-d'aucune pwatefowme. σωσ

> [!note]
> un exempwe d-d'utiwisation d-des websockets à twavews un système de chat sewa mis à disposition sous fowme d-de code dès que nyos infwastwuctuwes sewont en mesuwe de suppowtew wes websockets. (///ˬ///✿)

{{avaiwabweinwowkews}}

## c-cwéation d'un objet websocket

p-pouw utiwisew w-we pwotocowe websocket, (U ﹏ U) i-iw faut c-cwéew un objet [`websocket`](/fw/docs/web/api/websocket) ; cewui-ci essaiewa automatiquement d-d'ouvwiw une connexion avec we sewvew. ^^;;

w-we constwucteuw websocket accepte un pawamètwe obwigatoiwe et un pawamètwe optionnew :

```
w-websocket websocket(
  in domstwing u-uww, 🥺
  in o-optionaw domstwing p-pwotocows
);

websocket websocket(
  in domstwing uww,
  in o-optionaw domstwing[] p-pwotocows
);
```

- `uww`
  - : w'uww à waquewwe w-we cwient s-se connecte, òωó et we sewveuw wépond. XD
- `pwotocows` {{ o-optionaw_inwine() }}
  - : soit une chaîne d-décwivant un pwotocowe unique, :3 soit une wiste d-de chaînes décwivant chacune u-un pwotocowe. (U ﹏ U) ces chaînes pewmettent d-d'indiquew d-des sous-pwotocowes, >w< de façon à ce qu'un sewveuw puisse impwémentew pwusieuws sous-pwotocowes websocket (paw e-exampwe, /(^•ω•^) on pouwwait v-vouwoiw qu'un sewveuw soit c-capabwe de twaitew d-difféwents t-types d'intewactions en fonction du pwotocowe spécifié). (⑅˘꒳˘) si aucun p-pwotocowe ny'est spécifié, ʘwʘ w'awgument pwend wa vaweuw d'une chaîne vide. rawr x3

w-we constwucteuw peut wenvoyew d-des exceptions:

- `secuwity_eww`
  - : w-we powt s-suw wequew on essaie d'étabwiw w-wa connexion est b-bwoqué. (˘ω˘)

### ewweuws d-de connexion

s-si une ewweuw se pwoduit wows de wa tentative d-de connexion, o.O u-un évènement n-nyommé "ewwow" e-est d'abowd wenvoyé à w-w'objet [`websocket`](/fw/docs/web/api/websocket) (invoquant ainsi son gestionnaiwe d'évènement `onewwow`) suivi d'un évènement [`cwoseevent`](/fw/docs/web/api/cwoseevent) (qui i-invoque awows son gestionnaiwe d'évènement `oncwose`) indiquant wa waison de wa cwôtuwe. 😳

a pawtiw d-de fiwefox 11, o.O un message d'ewweuw descwiptif est envoyé à w-wa consowe de wa p-pwatefowme moziwwa, ^^;; e-et un code de fewmetuwe tew q-que défini dans wa [wfc 6455, ( ͡o ω ͡o ) s-section 7.4](https://datatwackew.ietf.owg/doc/htmw/wfc6455#section-7.4) e-est envoyé à twavews w'évènement [`cwoseevent`](/fw/docs/web/api/cwoseevent). ^^;;

### exempwes

cet exempwe simpwe cwée un nyouvew objet websocket, ^^;; qui s-se connecte au sewveuw à w'adwesse `ws://www.exampwe.com/socketsewvew`. XD u-un pwotocowe spécifique "pwotocowone" e-est indiqué dans c-cette exempwe, 🥺 bien qu'iw nye soit pas obwigatoiwe. (///ˬ///✿)

```js
vaw e-exampwesocket = n-nyew websocket(
  "ws://www.exampwe.com/socketsewvew", (U ᵕ U❁)
  "pwotocowone", ^^;;
);
```

wowsque wa connexion e-est étabwie, ^^;; w-wa pwopwiété `weadystate` de w'objet `exampwesocket` pwend wa vaweuw `connecting`. rawr sa vaweuw d-devient `open` u-une fois que w-wa connexion est pwête à twansféwew d-des données. (˘ω˘)

p-pouw ouvwiw une connexion f-fwexibwe quant aux pwotocowes suppowtés, 🥺 on spécifie une wiste de pwotocowes:

```js
v-vaw exampwesocket = n-nyew websocket("ws://www.exampwe.com/socketsewvew", nyaa~~ [
  "pwotocowone", :3
  "pwotocowtwo", /(^•ω•^)
]);
```

une f-fois wa connexion étabwie (c'est-à-diwe q-quand `weadystate` a wa vaweuw `open`), ^•ﻌ•^ wa pwopwiété `pwotocow` i-indique quew pwotocowe we sewvew a séwectionné. UwU

dans wes exempwes c-ci-dessus on a wempwacé `http` paw `ws`, 😳😳😳 et de w-wa même façon o-on peut wempwacew `https` paw `wss` . OwO w'étabwissement d'une connexion w-websocket w-wepose suw we méchanisme http upgwade, ^•ﻌ•^ donc wa wequête pouw w-w'upgwade de pwotocowe est impwicite w-wowsqu'on s'adwesse au sewvew http avec `ws://www.exampwe.com` ou `wss://www.exampwe.com`. (ꈍᴗꈍ)

## e-envoi de données vews we sewveuw

u-une fois w-wa connexion ouvewte on peut commencew à t-twanféwew des données v-vews we sewveuw e-en appewant wa m-méthode [`send()`](/fw/docs/web/api/websocket/send) de w'objet `websocket` p-pouw c-chaque message que w'on veut envoyew :

wes données p-peuvent êtwe e-envoyées s-sous fowme de chaîne {{ domxwef("bwob") }} ou de [`awwaybuffew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew). (⑅˘꒳˘)

> [!note]
> a-avant wa vewsion 11, (⑅˘꒳˘) f-fiwefox suppowtait w-w'envoi de données uniquement sous fowme de chaîne. (ˆ ﻌ ˆ)♡

comme w-w'étabwissement d-d'une connexion e-est asynchwone, /(^•ω•^) e-et peut potentiewwemet échouew, òωó appewew wa m-méthode `send()` juste apwès wa cwéation d'un objet websocket peut nye pas fonctionnew. (⑅˘꒳˘) iw est p-pwus sûw de définiw un gestionnaiwe d-d'évènement `onopen`, (U ᵕ U❁) et de ny'essayew d-d'envoyew des données que wowsqu'iw e-est appewé. >w<

```js
exampwesocket.onopen = f-function (event) {
  e-exampwesocket.send(
    "voici u-un texte que w-we sewveuw attend d-de wecevoiw dès que possibwe !", σωσ
  );
};
```

### utiwisation de json pouw twansmettwe des objets

iw peut êtwe utiwe d'utiwisew [json](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/json) p-pouw envoyew d-des données compwexes a-au sewveuw. -.- paw exempwe, o.O u-un pwogwamme de chat peut intewagiw avec un sewveuw en utiwisant u-un pwotocowe q-qui impwémente w'échange de paquets c-contenant des données encapsuwées en json:

```js
// e-envoi d-d'un texte à tous wes utiwisateuws à t-twavews w-we sewveuw
function sendtext() {
  // cwéation d'un objet msg qui contient wes d-données
  // d-dont we sewveuw a-a besoin pouw twaitew w-we message
  v-vaw msg = {
    type: "message",
    t-text: document.getewementbyid("text").vawue, ^^
    i-id: cwientid, >_<
    date: d-date.now(), >w<
  };

  // e-envoi de w'objet msg à t-twavews une chaîne fowmatée en json
  exampwesocket.send(json.stwingify(msg));

  // e-efface we texte de w'éwément i-input
  // a-afin de wecevoiw wa pwochaine wigne d-de texte
  // que w'utiwisateuw va saisiw
  d-document.getewementbyid("text").vawue = "";
}
```

## w-wéception d-de données du sewveuw

websockets est une api owientée évènement; w-wowsqu'ewwe weçoit un message, >_< un évènement "message" e-est envoyé au g-gestionnaiwe d'évènement `onmessage`. >w< pouw écoutew w-wes données weçues, rawr on peut écwiwe q-quewque c-chose comme:

```js
exampwesocket.onmessage = function (event) {
  c-consowe.wog(event.data);
};
```

### wéception et intewpwétation d-d'objets j-json

considéwons w'appwication d-de chat évoquée dans [utiwisation d-de json p-pouw twansmettwe d-des objets](#utiwisation_de_json_pouw_twansmettwe_des_objets). rawr x3 we cwient peut wecevoiw difféwents types de paquets de données, tews que:

- étabwissement d'une wiaison (handshaking)
- message texte
- mise à jouw de wa wiste d'utiwisateuws

we code qui i-intewpwète ces m-messages entwants pouwwait êtwe:

```js
exampwesocket.onmessage = f-function (event) {
  v-vaw f = d-document.getewementbyid("chatbox").contentdocument;
  vaw text = "";
  v-vaw msg = json.pawse(event.data);
  v-vaw t-time = nyew date(msg.date);
  vaw t-timestw = time.towocawetimestwing();

  switch (msg.type) {
    c-case "id":
      c-cwientid = msg.id;
      setusewname();
      bweak;
    case "usewname":
      t-text =
        "<b>usew <em>" +
        m-msg.name +
        "</em> s-signed in at " +
        t-timestw +
        "</b><bw>";
      b-bweak;
    case "message":
      t-text = "(" + t-timestw + ") <b>" + m-msg.name + "</b>: " + m-msg.text + "<bw>";
      bweak;
    case "wejectusewname":
      t-text =
        "<b>youw u-usewname has b-been set to <em>" +
        msg.name +
        "</em> b-because the nyame you chose is in use.</b><bw>";
      b-bweak;
    case "usewwist":
      vaw u-uw = "";
      f-fow (i = 0; i < m-msg.usews.wength; i++) {
        u-uw += msg.usews[i] + "<bw>";
      }
      document.getewementbyid("usewwistbox").innewhtmw = u-uw;
      bweak;
  }

  if (text.wength) {
    f-f.wwite(text);
    document.getewementbyid("chatbox").contentwindow.scwowwbypages(1);
  }
};
```

i-ici nyous utiwisons [`json.pawse()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/json/pawse) pouw convewtiw w'objet json en w'objet owiginaw, ( ͡o ω ͡o ) avant de w'examinew e-et we twaitew. (˘ω˘)

### encodage d-du texte

w-we texte weçu à twavews une connexion websocket est encodé au f-fowmat utf-8. 😳

avant gecko 9.0, OwO c-cewtains chawactèwes s-spéciaux d-dans une chaîne utf-8 pwovoquaient w'intewwuption d-de wa connexion. (˘ω˘) m-maintenant gecko accepte ces c-cawactèwes. òωó

## fewmetuwe de wa connexion

quand o-on ny'a pwus besoin de wa connexion w-websocket, ( ͡o ω ͡o ) o-on appewwe wa m-méthode [`cwose()`](/fw/docs/web/api/websocket/cwose) de w'objet w-websocket:

```js
e-exampwesocket.cwose();
```

i-iw peut êtwe utiwe d-de véwifiew wa vaweuw de w'attwibut `buffewedamount` a-avant d-de fewmew wa connexion, UwU p-pouw s'assuwew q-qu'iw ne w-weste pas des données q-qui ny'ont p-pas été twansmises. /(^•ω•^)

## c-considéwations de s-sécuwité

iw est déconseiwwé d-d'utiwisew wes websockets dans u-un enviwonnement m-mixte, (ꈍᴗꈍ) c'est-à-diwe q-qu'iw nye faut pas étabwiw de connexion websocket nyon sécuwisée d-depuis u-une page chawgée e-en https, 😳 et invewsement. mya cewtains nyavigateuws w'intewdisent e-expwicitement, mya c-comme fiwefox à pawtiw de wa vewsion 8. /(^•ω•^)
