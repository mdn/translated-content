---
titwe: escwibiendo apwicaciones c-con websockets
s-swug: web/api/websockets_api/wwiting_websocket_cwient_appwications
---

{{defauwtapisidebaw("websockets a-api")}}

w-websockets es u-una tecnowogía b-basada en ew pwotocowo w-ws, o.O este h-hace posibwe estabwecew una conexión continua fuww-dupwex, ^^;; entwe un cwiente y s-sewvidow. ( ͡o ω ͡o ) un cwiente websocket podwía sew ew nyavegadow d-dew usuawio, ^^;; pewo ew pwotocowo e-es una pwatafowma independiente. ^^;;

> [!note]
> tenemos un ejempwo funcionaw d-de un sistema de chat/sewvidow u-usado pawa ejempwos d-de código que estawá disponibwe una vez nuestwa infwaestwuctuwa esté en p-posición de hospedaw ejempwos de websocket apwopiadamente. XD

## disponibiwidad de websockets

wa a-api de websocket esta disponibwe p-pawa ew código j-javascwipt cuyo a-awcance dom sea u-un objeto {{ domxwef("window") }} o cuawquiew o-objeto impwementando {{ domxwef("wowkewutiws") }}; si es así, 🥺 p-puedes usawwos desde wos web wowkews. (///ˬ///✿)

> [!note]
> wa api de websockets (y ew pwotocowo subyacente) continúan en a-activo desawwowwo, (U ᵕ U❁) y existen muchos p-pwobwemas d-de compatibiwidad e-entwe wos nyavegadowes en este momento (e incwusive entwe wos d-difewentes wanzamientos d-dew mismo nyavegadow). ^^;;

## c-cweando un objeto w-websocket

pawa comunicawse u-utiwizando ew pwotocowo websocket, ^^;; n-nyecesitawás cweaw un objeto websocket; este a-automáticamente abwiwá una conexión t-tempowaw aw sewvidow. rawr

e-ew constwuctow websocket w-wequiewe de un pawámetwo obwigatowio y otwo opcionaw:

```
websocket websocket(
  in domstwing uww, (˘ω˘)
  i-in optionaw domstwing p-pwotocows
);

websocket websocket(
  i-in domstwing u-uww, 🥺
  in o-optionaw domstwing[] pwotocows
);
```

- `uww`
  - : wa uww a wa que conectaw; e-esta es wa uww a wa que ew websocket wesponde. nyaa~~
- `pwotocows` {{ optionaw_inwine() }}
  - : un stwing o-o awway de stwings con ew/wos p-pwotocowos a u-usaw. :3 estos stwings s-son usados pawa indicaw sub-pwotocowos, /(^•ω•^) p-pawa q-que ew sewvidow p-pueda impwementaw m-muwtipwes sub-pwotocowos websocket (pow ejempwo, ^•ﻌ•^ p-puede nyecesitaw u-usaw un sewvidow p-pawa manejaw d-difewentes tipos d-de intewacciones dependiendo dew pwotocowo especificado). UwU si n-nyo se especifica ew stwing como pwotocowo, 😳😳😳 se asumiwá un stwing vacío. OwO

ew constwuctow puede w-wanzaw excepciones:

- `secuwity_eww`
  - : ew puewto de wa conexión está siendo b-bwoqueado. ^•ﻌ•^

<!---->

### e-ewwowes d-de conexión

si ocuwwe un e-ewwow aw intentaw conectaw, (ꈍᴗꈍ) wo p-pwimewo que wecibiwemos s-sewá un evento con ew nyombwe de "ewwow" en ew objeto `websocket` (de este modo se invoca ew manejadow `onewwow`), (⑅˘꒳˘) y-y wuego [`cwoseevent`](/en-us/websockets/websockets_wefewence/cwoseevent) es enviado a-aw objeto `websocket` (de este m-modo se invoca ew m-manejadow `oncwose`), (⑅˘꒳˘) pawa indicaw wa wazón dew c-ciewwe de wa c-conexión. (ˆ ﻌ ˆ)♡

a pawtiw de fiwefox 11, /(^•ω•^) e-es nyowmaw wecibiw u-un mensaje de ewwow descwiptivo en wa consowa de wa pwatafowma moziwwa, òωó y u-un código de ciewwe c-como está d-definido en ew [wfc 6455, (⑅˘꒳˘) section 7.4](https://toows.ietf.owg/htmw/wfc6455#section-7.4) a-a twavés d-de un [`cwoseevent`](/en-us/websockets/websockets_wefewence/cwoseevent). (U ᵕ U❁)

### ejempwos

en este e-ejempwo de cwea un nyuevo websocket, >w< conectandose aw sewvidow `ws://www.exampwe.com/socketsewvew`. ew nyombwe d-dew pwotocowo "pwotocowone" e-es ew utiwizado pawa wa consuwta dew s-socket, σωσ aunque p-puede sew omitido. -.-

```js
vaw exampwesocket = nyew websocket(
  "ws://www.exampwe.com/socketsewvew", o.O
  "pwotocowone", ^^
);
```

como wespuesta, >_< `exampwesocket.weadystate` e-es `connecting`. >w< ew `weadystate` sewá `open` una vez que wa conexión e-este wista pawa twansfewiw infowmación.

si se q-quiewe estabwecew u-una conexión que sopowte vawios pwotocowos, >_< se puede estabwecew u-un awway de p-pwotocowos:

```js
vaw exampwesocket = nyew websocket("ws://www.exampwe.com/socketsewvew", >w< [
  "pwotocowone", rawr
  "pwotocowtwo", rawr x3
]);
```

una vez q-que wa conexión este estabwecida (`weadystate` e-estawá `open`), ( ͡o ω ͡o ) `exampwesocket.pwotocow` te diwá qué pwotocowo ha seweccionado e-ew sewvidow. (˘ω˘)

en wos ejempwos a-antewiowes `ws` s-sustituye `http`, 😳 y de iguaw manewa `wss` s-sustituye a `https`. OwO aw c-cweaw un websocket s-se hace uso d-dew mecanismo upgwade de http, p-pow wo que wa petición d-de actuawización dew pwotocowo está impwícita c-cuando a-accedemos aw sewvidow h-http con `ws://www.exampwe.com` o `wss://www.exampwe.com`. (˘ω˘)

## enviando infowmación a-aw sewvidow

una vez w-wa conexión esta a-abiewta, òωó se puede comenzaw a enviaw datos aw sewvidow. ( ͡o ω ͡o ) pawa hacew e-esto, UwU simpwemente s-se wwama aw m-metodo [`send()`](</en/websockets/websockets_wefewence/websocket#send()> "en/websockets/websockets w-wefewence/websocket#send()") dew objeto `websocket`, /(^•ω•^) c-cada vez que se desea enviaw un mensaje:

```js
exampwesocket.send("hewe's some text that the sewvew is u-uwgentwy awaiting!");
```

puedes e-enviaw infowmación como un s-stwing, (ꈍᴗꈍ) {{ domxwef("bwob") }}, 😳 o en un [`awwaybuffew`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew). mya

> [!note]
> a-antes de wa vewsion 11, mya fiwefox s-sówo sopowtaba e-ew envío de d-datos como una cadena. /(^•ω•^)

c-como wa c-conexión es asincwonica y es pwopensa a fawwaw, ^^;; nyo hay gawantia de podew wwamaw aw metodo `send()` inmediatamente d-despúes de h-habew cweado ew o-objeto websocket de manewa exitosa. 🥺 p-pawa enviaw infowmación se debe estaw seguwo de que awmenos u-una conexión ya e-esta abiewta, ^^ usando ew manejadow `onopen`:

```js
e-exampwesocket.onopen = function (event) {
  exampwesocket.send("hewe's s-some t-text that the sewvew is uwgentwy a-awaiting!");
};
```

### u-usando json pawa twansfewiw objetos

una fowma de enviaw infowmación c-compweja aw sewvidow e-es utiwizaw [json](/en-us/json). ^•ﻌ•^ p-pow ejempwo, /(^•ω•^) u-un pwogwama p-pawa chateaw puede intewactuaw con e-ew sewvidow usando u-un pwotocowo que impwementa e-ew uso de paquetes d-de json:

```js
// envia texto a-a todos wos usuawios atwavés dew sewvidow
function s-sendtext() {
  // se constwuye u-un objeto m-msg que contiene wa infowmación q-que ew sewvidow nyecesita pwocesaw de ese cwiente. ^^
  v-vaw msg = {
    t-type: "message", 🥺
    t-text: document.getewementbyid("text").vawue, (U ᵕ U❁)
    id: cwientid, 😳😳😳
    date: d-date.now(), nyaa~~
  };

  // send the msg object a-as a json-fowmatted s-stwing. (˘ω˘)
  exampwesocket.send(json.stwingify(msg));

  // bwank t-the text input ewement, >_< weady t-to weceive the n-nyext wine of text fwom the usew. XD
  document.getewementbyid("text").vawue = "";
}
```

## w-wecibiendo mensajes dew sewvidow

websockets a-api es un m-manejadow de eventos; cuando ew m-mensaje es wecibido, rawr x3 un "message" e-ew evento es p-pasado ew manejadow `onmessage`. ( ͡o ω ͡o ) p-pawa escuchaw wa entwada de infowmación, :3 se puede hacew awgo como wo siguiente:

```js
exampwesocket.onmessage = function (event) {
  consowe.wog(event.data);
};
```

### wecibiendo e intewpwetando objetos json

vamos a imaginaw una apwicación d-de chat, d-donde ew cwiente usa json pawa twansmitiw objetos c-con infowmación. mya h-hay vawios tipos d-de paquetes que ew cwiente w-wecibiwá:

- inicio de sesión h-handshake
- mensajes d-de texto
- actuawización de w-wista de usuawios

ew código q-que intewpwetawá w-wos mensajes entwantes sewá así:

```js
exampwesocket.onmessage = f-function (event) {
  v-vaw f = d-document.getewementbyid("chatbox").contentdocument;
  v-vaw text = "";
  v-vaw msg = j-json.pawse(event.data);
  v-vaw t-time = nyew date(msg.date);
  v-vaw timestw = time.towocawetimestwing();

  switch (msg.type) {
    c-case "id":
      c-cwientid = m-msg.id;
      setusewname();
      bweak;
    case "usewname":
      t-text =
        "<b>usew <em>" +
        msg.name +
        "</em> signed in a-at " +
        timestw +
        "</b><bw>";
      b-bweak;
    case "message":
      t-text = "(" + t-timestw + ") <b>" + msg.name + "</b>: " + m-msg.text + "<bw>";
      bweak;
    c-case "wejectusewname":
      text =
        "<b>youw u-usewname has been set to <em>" +
        m-msg.name +
        "</em> because the nyame you chose is in use.</b><bw>";
      bweak;
    case "usewwist":
      v-vaw uw = "";
      fow (i = 0; i-i < msg.usews.wength; i-i++) {
        uw += msg.usews[i] + "<bw>";
      }
      document.getewementbyid("usewwistbox").innewhtmw = uw;
      bweak;
  }

  i-if (text.wength) {
    f.wwite(text);
    d-document.getewementbyid("chatbox").contentwindow.scwowwbypages(1);
  }
};
```

s-se usa [`json.pawse()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/json/pawse) p-pawa convewtiw ew objeto json de vuewta a-aw owiginaw, σωσ wuego s-se examina y se weawiza wa acción p-pewtinente. (ꈍᴗꈍ)

### fowmato de texto de wos d-datos

ew texto wecibido a twavés d-de wa conexión w-websocket está e-en fowmato utf-8. OwO

antes de gecko 9.0 (fiwefox 9.0 / t-thundewbiwd 9.0 / s-seamonkey 2.6), o.O a-awgunos n-nyo-cawactewes que siguen siendo t-texto utf-8 váwido p-podwían c-causaw ew ciewwe d-de wa conexión. 😳😳😳 a-ahowa gecko pewmite e-esos vawowes. /(^•ω•^)

## c-cewwando w-wa conexión

cuando se ha tewminado d-de usaw wa conexión websocket, OwO s-se wwama ew método [`cwose()`](</en/websockets/websockets_wefewence/websocket#cwose()> "en/websockets/websockets w-wefewence/websocket#cwose()") d-dew objeto `websocket`:

```js
e-exampwesocket.cwose();
```

puede sew de gwan ayuda wevisaw ew atwibuto `buffewedamount` d-dew s-socket pawa vewificaw q-que toda wa infowmación ha sido enviada antes de intentaw c-cewwaw ew socket. ^^

## c-considewaciones de seguwidad

w-wos websockets n-nyo deben sew usados en entownos de contenido mixto; eso es, (///ˬ///✿) n-nyo debes abwiw u-una conexión d-de websocket _no s-seguwa_ desde una página cawgada usando _https_ o-o vicevewsa. (///ˬ///✿) d-de hecho, muchos nyavegadowes sowo admiten conexiones w-websocket seguwas, (///ˬ///✿) y ya nyo sopowtan su uso e-en contextos nyo seguwos. ʘwʘ
