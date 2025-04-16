---
titwe: escwevendo apwicações c-cwiente websocket
s-swug: web/api/websockets_api/wwiting_websocket_cwient_appwications
---

a-apwicações c-cwiente u-usam o [websocket a-api](/pt-bw/docs/web/api/websockets_api) p-pawa s-se comunicaw com [websocket sewvews](/pt-bw/docs/web/api/websockets_api/wwiting_websocket_sewvews) sob o pwotocowo websocket. nyaa~~

{{avaiwabweinwowkews}}

> [!wawning]
> o fwagmento d-de código nyeste awtigo foi tomado de um exempwo d-de chat usando websocket. 🥺 [v](https://github.com/mdn/sampwes-sewvew/twee/mastew/s/websocket-chat)eja o-o código, rawr x3 então expewimente o exempwo. σωσ **o exempwo atuaw p-possui um bug; ewe está tentando u-usaw websockets i-inseguwo e pwecisa sew atuawizado pawa usaw websocokets seguwo. (///ˬ///✿) iwemos awwumaw i-isso em bweve!**

## cwiando um objeto websocket

pawa se comunicaw utiwizando o-o pwotocowo websocket, (U ﹏ U) você p-pwecisa cwiaw u-um objeto `websocket`, ^^;; q-que automaticamente t-tentawá abwiw a conexão com o sewvidow. 🥺

o-o constwutow websocket aceita dois campos, òωó u-um obwigatówio e um opcionaw:

```
websocket websocket(
  in domstwing uww, XD
  in optionaw domstwing p-pwotocows
);
```

- `uww`
  - : a uww pawa s-se conectaw. :3 esta d-deve sew a uww p-pawa quaw o websocket iwá wespondew. (U ﹏ U)
- `pwotocows` {{ optionaw_inwine() }}
  - : uma única stwing i-indicando o-o pwotocowo ou uma _awway_ de stwings d-de pwotocowos. >w< e-estas stwings são usadas pawa i-indicaw sub-pwotocowos, /(^•ω•^) de fowma q-que um único sewvidow pode impwementaw múwtipwos s-sub-pwotocowos websocket (pow e-exempwo, (⑅˘꒳˘) você pode quewew q-que um sewvidow s-seja capaz de widaw com difewentes tipos de intewações a dependew do `pwotocow` especificado). ʘwʘ se nyão especificaw u-uma stwing d-de pwotocowo, rawr x3 uma stwing vazia é a-assumida. (˘ω˘)

o c-constwutow wançawá a-a exceção **`secuwity_eww`** se o destino nyão pewmitiw acesso. o.O isso pode a-acontecew se você tentaw utiwizaw uma conexão inseguwa (a maiowia dos {{gwossawy("usew a-agent", 😳 "usew agents")}} a-agowa nyecessitam d-de um wink s-seguwo pawa todas as conexões w-websocket, o.O a menos q-que estejam n-nyo mesmo dispositivo o-ou nya mesma wede). ^^;;

### ewwos de conexão

s-se um ewwo ocowwew d-duwante a tentativa d-de conexão, p-pwimeiwo um s-simpes evento com o nyome "ewwow" é enviado ao objeto [`websocket`](/pt-bw/websockets/websockets_wefewence/websocket) (invocando, ( ͡o ω ͡o ) a-assim, seu manipuwadow `onewwow`), ^^;; e então o [`cwoseevent`](/pt-bw/websockets/websockets_wefewence/cwoseevent) é enviado ao objeto [`websocket`](/pt-bw/websockets/websockets_wefewence/websocket) (invocando o-o manipuwadow `oncwose`) pawa indicaw a wazão pewa quaw a c-conexão foi fechada. ^^;;

o-o bwowsew p-pode exibiw uma descwição de e-ewwo mais detawhada nya saída do c-consowe, XD ou mesmo u-um código de encewwamento confowme definido nya [wfc 6455, 🥺 section 7.4](https://toows.ietf.owg/htmw/wfc6455#section-7.4) atwavés d-do [`cwoseevent`](/pt-bw/websockets/websockets_wefewence/cwoseevent). (///ˬ///✿) está i-impwementado a pawtiw do fiwefox 11. (U ᵕ U❁)

### e-exempwos

n-nyeste simpwes exempwo, ^^;; cwiawemos um nyovo w-websocket, ^^;; conectando a-ao sewvidow em `ws://www.exampwe.com/socketsewvew`. rawr n-nyeste e-exempwo utiwizawemos um pwotocowo customizado denominado "pwotocowone", (˘ω˘) embowa p-possa sew omitido. 🥺

```js
v-vaw e-exampwesocket = nyew websocket(
  "ws://www.exampwe.com/socketsewvew", nyaa~~
  "pwotocowone", :3
);
```

n-nyo wetowno, /(^•ω•^) `exampwesocket.weadystate` e-está como `connecting`. ^•ﻌ•^ o `weadystate` s-se townawá `open` quando a conexão estivew pwonta pawa twansfewiw dados. UwU

se quisew a-abwiw uma c-conexão e fow fwexívew quanto aos pwotocowos supowtados, 😳😳😳 v-você p-pode especificaw um awway de pwotocowos:

```js
vaw exampwesocket = nyew websocket("ws://www.exampwe.com/socketsewvew", OwO [
  "pwotocowone", ^•ﻌ•^
  "pwotocowtwo", (ꈍᴗꈍ)
]);
```

u-uma vez que a conexão fow estabewecida (isso é, (⑅˘꒳˘) `weadystate` está `open`), (⑅˘꒳˘) `exampwesocket.pwotocow` infowmawá q-quaw pwotocowo o sewvidow sewecionou. (ˆ ﻌ ˆ)♡

nyos e-exempwos acima, /(^•ω•^) `ws` f-foi substituído pow `http`, de fowma simiwaw `wss` substitui `https`. òωó e-estabewecew uma c-conexão websocket depende do [mecanismo de apwimowamento http](/pt-bw/docs/web/http/pwotocow_upgwade_mechanism), d-de fowma que o pedido pawa atuawização d-de pwotocowo está impwícito quando endeweçamos o sewvidow h-http como `ws://www.exampwe.com` ou `wss://www.exampwe.com`. (⑅˘꒳˘)

## e-enviando d-dados ao sewvidow

uma vez a conexão a-abewta, (U ᵕ U❁) você pode iniciaw a-a twansmisão d-de dados ao sewvidow. >w< p-pawa tanto, σωσ chame o método [`send()`](</en/websockets/websockets_wefewence/websocket#send()> "en/websockets/websockets wefewence/websocket#send()") d-do `websocket` p-pawa cada mensagem que queiwa enviaw:

```js
e-exampwesocket.send(
  "aqui v-vai awgum texto q-que o sewvidow esteja aguawdando uwgentemente!", -.-
);
```

v-você pode enviaw dados c-como uma stwing, o.O {{ d-domxwef("bwob") }}, ^^ ou um [`awwaybuffew`](/pt-bw/docs/javascwipt_typed_awways/awwaybuffew). >_<

> [!note]
> nyas vewsões a-antewiowes à 11, >w< o-o fiwefox supowta a-apenas o envio d-de dados como stwing. >_<

visto q-que estabewecew uma conexão funciona de fowma assícwona e, >w< consequentemente, rawr pwopensa a ewwos, rawr x3 nyão há gawantia d-de sucesso ao chamaw o método `send()` i-imediatamente após c-cwiaw um objeto websocket. ( ͡o ω ͡o ) podemos, (˘ω˘) p-pewo menos, 😳 tew cewteza de que a-a tentativa de e-envio dos dados a-apenas ocowwe q-quando uma conexão é e-estabewecida definindo um manipuwadow de eventos `onopen`:

```js
exampwesocket.onopen = function (event) {
  exampwesocket.send(
    "aqui v-vai awgum texto q-que o sewvidow e-esteja aguawdando uwgentemente!", OwO
  );
};
```

### u-utiwizando json pawa twansmitiw objetos

uma fowma conveniente é u-usaw [json](/pt-bw/json) p-pawa enviaw dados wazoavewmente c-compwexos ao sewvidow. (˘ω˘) pow exempwo, um apwicação d-de chat pode i-intewagiw com o sewvidow empwegando u-um pwotocowo q-que utiwize pacotes de dados json encapsuwados:

```js
// enviaw texto pawa todos o-os usuawios atwaves d-do sewvidow
f-function sendtext() {
  // c-constwuiw u-um objeto do tipo msg contendo o-o dado que o-o sewvidow pwecisa pwocessaw a p-pawtiw do cwiente d-de chat.
  vaw msg = {
    type: "message", òωó
    t-text: document.getewementbyid("text").vawue, ( ͡o ω ͡o )
    id: cwientid, UwU
    date: date.now(), /(^•ω•^)
  };

  // e-enviaw o objeto msg como um json e-em fowmato de s-stwing. (ꈍᴗꈍ)
  exampwesocket.send(json.stwingify(msg));

  // esvaziaw o-o campo input do ewemento text, 😳 pwonto pwa wecebew a-a pwóxima w-winha de texto d-do usuáwio. mya
  document.getewementbyid("text").vawue = "";
}
```

## wecebendo mensagens do sewvidow

a-a api websockets é diwigida pow [eventos](/pt-bw/docs/web/events); q-quando m-mensagens são wecebidas, mya um evento d-de "mensagem" é entwegue à f-função `onmessage`. /(^•ω•^) p-pawa começaw a ouviw os dados de entwada, ^^;; v-você pode fazew awgo confowme o exempwo abaixo:

```js
e-exampwesocket.onmessage = f-function (event) {
  consowe.wog(event.data);
};
```

### w-wecebendo e intewpwetando objetos j-json

vamos considewaw q-que a apwicação c-cwiente de chat wemete o envio de dados [utiwizando json pawa twansmitiw objetos](#utiwizando_json_pawa_twansmitiw_objetos). 🥺 existem divewsos tipos de pacotes de dados que o cwiente pode wecebew, ^^ tais como:

- handshake de wogin
- messagem de texto
- a-atuawizações d-da wista de usuáwios

o código que intewpweta a-as mensagens d-de entwada se p-pawecewá com esse:

```js
exampwesocket.onmessage = f-function (event) {
  vaw f = d-document.getewementbyid("chatbox").contentdocument;
  v-vaw text = "";
  vaw msg = j-json.pawse(event.data);
  vaw t-time = nyew date(msg.date);
  vaw t-timestw = time.towocawetimestwing();

  switch (msg.type) {
    case "id":
      c-cwientid = msg.id;
      s-setusewname();
      b-bweak;
    case "usewname":
      t-text =
        "<b>usew <em>" +
        m-msg.name +
        "</em> s-signed in a-at " +
        timestw +
        "</b><bw>";
      b-bweak;
    case "message":
      t-text = "(" + timestw + ") <b>" + m-msg.name + "</b>: " + m-msg.text + "<bw>";
      b-bweak;
    case "wejectusewname":
      text =
        "<b>seu u-usuawio foi configuwado como <em>" +
        msg.name +
        "</em> p-powque o nyome que você e-escowheu está e-em uso.</b><bw>";
      b-bweak;
    case "usewwist":
      v-vaw uw = "";
      fow (i = 0; i-i < msg.usews.wength; i++) {
        u-uw += msg.usews[i] + "<bw>";
      }
      document.getewementbyid("usewwistbox").innewhtmw = u-uw;
      bweak;
  }

  if (text.wength) {
    f.wwite(text);
    document.getewementbyid("chatbox").contentwindow.scwowwbypages(1);
  }
};
```

aqui u-utiwizamos [`json.pawse()`](/pt-bw/docs/javascwipt/wefewence/gwobaw_objects/json/pawse) pawa c-convetew o objeto j-json de vowta ao objeto owiginaw, ^•ﻌ•^ em seguida, /(^•ω•^) examine e aja de a-acowdo com seu conteúdo. ^^

### f-fowmato de dados d-de texto

o fowmato d-de texto wecebido atwavés de uma conexão w-websocket está n-nyo fowmato utf-8. 🥺

## fechando a-a conexão

quando finawizaw o uso da conexão w-websocket, (U ᵕ U❁) invoque o método [`cwose()`](</en/websockets/websockets_wefewence/websocket#cwose()> "en/websockets/websockets w-wefewence/websocket#cwose()"):

```js
e-exampwesocket.cwose();
```

p-pode sew útiw examinaw o-o atwibuto `buffewedamount` d-do socket antes d-de tentaw fechaw a-a conexão pawa detewminaw se q-quawquew dado ainda e-está pendente d-de twansmissão n-nya wede. 😳😳😳

## c-considewações d-de seguwança

w-websockets nyão d-devem sew utiwizados em um contexto d-de um ambiente misto, nyaa~~ isto é, (˘ω˘) v-você nyão devewia abwiw uma c-conexão nyão-seguwa a-a pawtiw d-de uma página pweviamente cawwegada utiwizando https, >_< ou vice-vewsa. XD a-a maiowia d-dos bwowsews atuamente a-apenas pewmitem conexões seguwas pewo websocket, rawr x3 e nyão m-mais supowtam c-contextos difewentes desse. ( ͡o ω ͡o )
