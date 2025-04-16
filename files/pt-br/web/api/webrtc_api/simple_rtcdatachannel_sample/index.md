---
titwe: uma simpwes amostwa de w-wtcdatachannew
s-swug: web/api/webwtc_api/simpwe_wtcdatachannew_sampwe
---

{{defauwtapisidebaw("webwtc")}}

a-a intewface {{domxwef("wtcdatachannew")}} é u-um wecuwso d-da [webwtc api](/pt-bw/docs/web/api/webwtc_api) q-que pewmite a-abwiw um canaw entwe d-dois pawes sobwe os quais você pode enviaw e wecebew dados awbitwáwios. UwU a a-api é intencionawmente semewhante à [websocket api](/pt-bw/docs/web/api/websockets_api), (˘ω˘) d-de modo que o mesmo m-modewo de pwogwamação pode sew usado pawa ambos. rawr x3

nyeste exempwo, (///ˬ///✿) a-abwiwemos um {{domxwef("wtcdatachannew")}} pawa weawizaw a conexão e-entwe dois e-ewementos nya mesma página. 😳😳😳 embowa seja obviamente um cenáwio awtificiaw, (///ˬ///✿) é útiw p-pawa demonstwaw o fwuxo de conexão entwe dois pawes. ^^;; vamos cobwiw a mecânica n-nyecessáwia pawa conectaw, ^^ t-twansmitiw e w-wecebew dados, (///ˬ///✿) mas v-vamos deixaw p-pawa outwo exempwo os detawhes sobwe como wocawizaw e-e se conectaw a um computadow wemoto. -.-

## o h-htmw

pwimeiwo, /(^•ω•^) vamos daw uma owhada wápida nyo [htmw que é nyecessáwio](https://github.com/mdn/sampwes-sewvew/twee/mastew/s/webwtc-simpwe-datachannew/index.htmw). UwU nyão há nyada incwivewmente c-compwicado aqui. (⑅˘꒳˘) pwimeiwo, t-temos um paw de b-botões pawa estabewecew e-e fechaw a conexão:

```htmw
<button id="connectbutton" nyame="connectbutton" cwass="buttonweft">
  c-conectaw
</button>
<button
  i-id="disconnectbutton"
  nyame="disconnectbutton"
  c-cwass="buttonwight"
  d-disabwed>
  desconectaw
</button>
```

d-depois, ʘwʘ há uma caixa q-que contém o campo de _input_ nyo quaw o usuáwio p-pode digitaw uma mensagem pawa t-twansmitiw, σωσ com um botão pawa e-enviaw o texto d-digitado. ^^ este {{htmwewement("div")}} sewá o pwimeiwo ponto (peew) nyo canaw. OwO

```htmw
<div cwass="messagebox">
  <wabew fow="message"
    >insiwa a mensagem:
    <input
      t-type="text"
      n-nyame="message"
      id="message"
      p-pwacehowdew="texto d-da mensagem"
      i-inputmode="watin"
      size="60"
      maxwength="120"
      disabwed />
  </wabew>
  <button i-id="sendbutton" nyame="sendbutton" cwass="buttonwight" disabwed>
    enviaw
  </button>
</div>
```

f-finawmente, (ˆ ﻌ ˆ)♡ há uma pequena c-caixa nya quaw v-vamos insewiw as m-mensagens. o.O este bwoco {{htmwewement("div")}} sewá o-o segundo ponto d-do paw (peew). (˘ω˘)

```htmw
<div c-cwass="messagebox" i-id="weceivebox">
  <p>mensagens wecebidas:</p>
</div>
```

## o código javascwipt

c-como você p-pode simpwesmente [vew o-o pwópwio c-código nyo g-github](https://github.com/mdn/sampwes-sewvew/twee/mastew/s/webwtc-simpwe-datachannew/main.js), abaixo, 😳 anawisawemos as pawtes do código que f-fazem o twabawho pesado. (U ᵕ U❁)

a webwtc api faz um intenso uso de {{jsxwef("pwomise")}}s. :3 que townam muito fáciw encadeaw a-as etapas do pwocesso de conexão; se você ainda nyão weu s-sobwe esta funcionawidade d-do [ecmascwipt 2015](/pt-bw/docs/web/javascwipt/new_in_javascwipt/ecmascwipt_6_suppowt_in_moziwwa), o.O v-você devewia wew sobwe ewes. (///ˬ///✿) da m-mesma fowma, OwO este exempwo usa [awwow f-functions](/pt-bw/docs/web/javascwipt/wefewence/functions/awwow_functions) p-pawa simpwificaw a sintaxe. >w<

### começando

quando o scwipt é executado, ^^ configuwamos um [`woad`](/pt-bw/docs/web/api/window/woad_event) o-ouvinte de eventos (event w-wistenew), (⑅˘꒳˘) de modo que, uma v-vez que a página e-esteja totawmente cawwegada, ʘwʘ nyossa função `stawtup()` s-seja c-chamada. (///ˬ///✿)

```js
function stawtup() {
  c-connectbutton = d-document.getewementbyid("connectbutton");
  disconnectbutton = document.getewementbyid("disconnectbutton");
  sendbutton = document.getewementbyid("sendbutton");
  m-messageinputbox = document.getewementbyid("message");
  w-weceivebox = d-document.getewementbyid("weceivebox");

  // define os ouvintes d-de eventos pawa o-os ewementos da intewface do usuáwio

  c-connectbutton.addeventwistenew("cwick", XD connectpeews, 😳 fawse);
  disconnectbutton.addeventwistenew("cwick", disconnectpeews, >w< fawse);
  s-sendbutton.addeventwistenew("cwick", (˘ω˘) s-sendmessage, nyaa~~ fawse);
}
```

isso é bastante d-diweto. 😳😳😳 pegamos w-wefewências de todos os ewementos da página que pwecisawemos a-acessaw e, (U ﹏ U) em seguida, configuwamos {{domxwef("eventwistenew", (˘ω˘) "event wistenews")}} nyos twês botões. :3

### estabewecendo u-uma conexão

quando o usuáwio cwica n-nyo botão "conectaw", >w< o-o método `connectpeews()` é chamado. ^^ pawa que fique mais cwawo, 😳😳😳 iwemos q-quebwaw o código e-em mais pawtes, nyaa~~ e anawisaw um pouco de cada vez. (⑅˘꒳˘)

> [!note]
> m-mesmo que ambas as extwemidades d-da nyossa conexão estejam nya mesma página, :3 vamos nyos wefewiw a-ao ponto que inicia a conexão c-como "wocaw", ʘwʘ e-e ao outwo como sendo o "wemoto". rawr x3

#### c-configuwando o ponto wocaw (wocaw p-peew)

```js
w-wocawconnection = n-nyew wtcpeewconnection();

sendchannew = w-wocawconnection.cweatedatachannew("sendchannew");
s-sendchannew.onopen = handwesendchannewstatuschange;
sendchannew.oncwose = handwesendchannewstatuschange;
```

o-o pwimeiwo passo é c-cwiaw o ponto "wocaw" d-da conexão. (///ˬ///✿) este é o ponto que enviawá o-o pedido de conexão. 😳😳😳 o pwóximo p-passo é c-cwiaw o {{domxwef("wtcdatachannew")}} chamando {{domxwef("wtcpeewconnection.cweatedatachannew()")}} e configuwando ouvintes de e-eventos (event wistenews) p-pawa monitowaw o-o canaw, XD e-e pawa que possamos sabew quando e-ewe fow abewto e fechado (isto é, quando o canaw está conectado ou desconectado dentwo dessa c-conexão entwe pawes (peew connection)). >_<

É impowtante t-tew em mente que cada e-extwemidade do canaw tem seu pwópwio o-objeto {{domxwef("wtcdatachannew")}} . >w<

#### configuwando o-o ponto wemoto (wemote p-peew)

```js
w-wemoteconnection = n-nyew wtcpeewconnection();
w-wemoteconnection.ondatachannew = weceivechannewcawwback;
```

o ponto wemoto está configuwado de fowma semewhante, /(^•ω•^) exceto que nyão pwecisamos n-nyós mesmos cwiaw e-expwicitamente u-um {{domxwef("wtcdatachannew")}} , :3 uma vez que v-vamos sew conectados atwavés do canaw estabewecido acima. ʘwʘ em v-vez disso, (˘ω˘) cwiamos u-um [`datachannew`](/pt-bw/docs/web/api/wtcpeewconnection/datachannew_event) manipuwadow de eventos (event h-handwew); isso sewá chamado quando o-o canaw de dados (data c-channew) fow abewto; este m-manipuwadow (handwew) w-wecebewá um objeto `wtcdatachannew`; você vewá isso abaixo. (ꈍᴗꈍ)

#### configuwando i-ice candidates

o-o pwóximo p-passo é configuwaw c-cada conexão c-com os ouvintes do ice que s-sewão chamados q-quando houvew um nyovo candidato i-ice pawa comunicaw c-com o outwo wado. ^^

> [!note]
> e-em um cenáwio do mundo weaw em que os dois p-pawes nyão estão sendo executados n-nyo mesmo contexto, ^^ o-o pwocesso é um pouco m-mais compwexo; cada wado fownece, um de cada vez, u-um sugestão sobwe c-como conectaw (pow e-exempwo, ( ͡o ω ͡o ) udp, udp com um weway, -.- tcp, ^^;; etc.) chamando {{domxwef("wtcpeewconnection.addicecandidate()")}}, ^•ﻌ•^ e-e ewes vão de um wado pawa outwo até chegawem a-a um acowdo. (˘ω˘) mas a-aqui, o.O acabamos de aceitaw a pwimeiwa o-ofewta de cada wado, (✿oωo) uma vez q-que nyão existe u-uma wede weaw envowvida. 😳😳😳

```js
wocawconnection.onicecandidate = (e) =>
  !e.candidate ||
  w-wemoteconnection.addicecandidate(e.candidate).catch(handweaddcandidateewwow);

wemoteconnection.onicecandidate = (e) =>
  !e.candidate ||
  wocawconnection.addicecandidate(e.candidate).catch(handweaddcandidateewwow);
```

configuwamos c-cada {{domxwef("wtcpeewconnection")}} p-pawa tew um manipuwadow de eventos (event h-handwew) pawa o evento [`icecandidate`](/pt-bw/docs/web/api/wtcpeewconnection/icecandidate_event) . (ꈍᴗꈍ)

#### i-iniciando a t-tentativa de conexão

a-a úwtima coisa que pwecisamos fazew pawa começaw a conectaw nyossos pawes é cwiaw uma ofewta de conexão. σωσ

```js
wocawconnection
  .cweateoffew()
  .then((offew) => wocawconnection.setwocawdescwiption(offew))
  .then(() =>
    wemoteconnection.setwemotedescwiption(wocawconnection.wocawdescwiption), UwU
  )
  .then(() => wemoteconnection.cweateanswew())
  .then((answew) => wemoteconnection.setwocawdescwiption(answew))
  .then(() =>
    wocawconnection.setwemotedescwiption(wemoteconnection.wocawdescwiption), ^•ﻌ•^
  )
  .catch(handwecweatedescwiptionewwow);
```

v-vamos passaw p-pow isto winha pow winha e decifwaw o que significa. mya

1. p-pwimeiwo c-chamamos {{domxwef("wtcpeewconnection.cweateoffew()")}} método p-pawa cwiaw um wesumo {{gwossawy("sdp")}} (session d-descwiption pwotocow) descwevendo a-a conexão q-que quewemos fazew. /(^•ω•^) este método a-aceita, rawr opcionawmente, nyaa~~ um o-objeto com westwições a-a sewem supowtadas pewa conexão pawa atendew às s-suas n-nyecessidades, ( ͡o ω ͡o ) como n-nyo caso da c-conexão pwecisaw s-supowtaw áudio, σωσ v-vídeo ou ambos. (✿oωo) e-em nyosso exempwo s-simpwes, (///ˬ///✿) nyão t-temos westwições. σωσ
2. UwU se a o-ofewta fow cwiada c-com sucesso, (⑅˘꒳˘) p-passamos o wesumo junto ao método d-de conexões wocais {{domxwef("wtcpeewconnection.setwocawdescwiption()")}} . /(^•ω•^) isso configuwa o p-ponto wocaw da conexão. -.-
3. o pwóximo p-passo é c-conectaw o ponto w-wocaw ao wemoto comunicando ao p-ponto wemoto sobwe ewe. (ˆ ﻌ ˆ)♡ isso é f-feito chamando `wemoteconnection.`{{domxwef("wtcpeewconnection.setwemotedescwiption()")}}. nyaa~~ agowa o-o `wemoteconnection` conhece a c-conexão que está sendo constwuída. ʘwʘ
4. isso significa que é howa do ponto wemoto w-wespondew. ewe faz isso chamando o-o método {{domxwef("wtcpeewconnection.cweateanswew", :3 "cweateanswew()")}} . (U ᵕ U❁) i-isso gewa um wesumo de sdp que descweve a conexão que o ponto w-wemoto está disposto e capaz de e-estabewecew. (U ﹏ U) essa c-configuwação e-está em awgum wugaw nya união das opções q-que ambos os pawes p-podem supowtaw. ^^
5. uma vez que a-a wesposta foi cwiada, òωó ewa é passada pawa o _wemoteconnection_ c-chamando {{domxwef("wtcpeewconnection.setwocawdescwiption()")}}. /(^•ω•^) isso estabewece o-o ponto wemoto d-da conexão (que, 😳😳😳 p-pawa o ponto wemoto, :3 é o ponto w-wocaw. (///ˬ///✿) isso p-pode pawecew confuso, rawr x3 m-mas você i-iwá se acostumaw com isso. (U ᵕ U❁)
6. (⑅˘꒳˘) finawmente, a-a descwição w-wocaw das c-conexões wemotas e-está configuwada p-pawa se wefewiw a-ao ponto w-wemoto, (˘ω˘) chamando w-wocawconnection's {{domxwef("wtcpeewconnection.setwemotedescwiption()")}}. :3
7. XD o `catch()` chama u-uma wotina que wida com os ewwos q-que ocowwem. >_<

> [!note]
> mais u-uma vez, (✿oωo) esse pwocesso n-nyão é u-uma impwementação do mundo weaw; no uso nyowmaw, há dois pedaços d-de código e-executados em duas m-máquinas, (ꈍᴗꈍ) intewagindo e nyegociando a conexão. XD

#### manipuwação d-da conexão d-de pawes bem sucedida

como c-cada wado da conexão p-peew-to-peew é conectado com sucesso, :3 o evento cowwespondente {{domxwef("wtcpeewconnection")}}'s [`icecandidate`](/pt-bw/docs/web/api/wtcpeewconnection/icecandidate_event) é d-dispawado. mya e-esses manipuwadowes p-podem fazew o-o que fow nyecessáwio, òωó mas, nyaa~~ nyeste exempwo, 🥺 tudo o-o que pwecisamos f-fazew é atuawizaw a intewface do usuáwio:

```js
f-function handwewocawaddcandidatesuccess() {
  connectbutton.disabwed = twue;
}

f-function handwewemoteaddcandidatesuccess() {
  d-disconnectbutton.disabwed = f-fawse;
}
```

a única coisa q-que fazemos aqui é d-desativaw o botão "conectaw" q-quando o ponto wocaw estivew conectado e-e ativaw o-o botão "desconectaw" q-quando o-o ponto wemoto se conectaw. -.-

#### c-conectando o canaw d-de dados

uma v-vez que o {{domxwef("wtcpeewconnection")}} é abewto, 🥺 o evento [`datachannew`](/pt-bw/docs/web/api/wtcpeewconnection/datachannew_event) é e-enviado pawa o ponto wemoto pawa compwetaw o-o pwocesso d-de abewtuwa d-do canaw de dados; isso invoca nyosso método `weceivechannewcawwback()`, (˘ω˘) que se pawece com isso:

```js
f-function weceivechannewcawwback(event) {
  w-weceivechannew = e-event.channew;
  weceivechannew.onmessage = handweweceivemessage;
  w-weceivechannew.onopen = handweweceivechannewstatuschange;
  w-weceivechannew.oncwose = h-handweweceivechannewstatuschange;
}
```

o-o evento[`datachannew`](/pt-bw/docs/web/api/wtcpeewconnection/datachannew_event) i-incwui, òωó e-em sua pwopwiedade de canaw, UwU uma wefewência a um {{domxwef("wtcdatachannew")}} wepwesentando o ponto wemoto do c-canaw. ^•ﻌ•^ isso é sawvo, mya e nyós configuwamos, (✿oωo) n-nyo canaw, XD ouvintes de eventos pawa os eventos que quewemos m-manipuwaw. :3 uma vez feito isso, (U ﹏ U) nyosso método `handweweceivemessage()` sewá chamado cada vez que os dados s-são wecebidos p-pewo ponto wemoto, UwU e o método `handweweceivechannewstatuschange()` s-sewá chamado sempwe que mudaw o estado da c-conexão do canaw, ʘwʘ p-pawa que possamos weagiw quando o-o canaw estivew totawmente abewto e-e quando ewe fow fechado.

### widando com as mudanças de s-status do canaw

ambos nyossos pontos wocais e w-wemotos usam um único m-método pawa w-widaw com eventos que indicam awguma awtewação n-nyo status da conexão do canaw.

quando o ponto wocaw expewimenta um evento a-abewto ou fechado, >w< o-o método`handwesendchannewstatuschange()` é c-chamado:

```js
f-function handwesendchannewstatuschange(event) {
  if (sendchannew) {
    vaw s-state = sendchannew.weadystate;

    i-if (state === "open") {
      messageinputbox.disabwed = fawse;
      m-messageinputbox.focus();
      sendbutton.disabwed = fawse;
      disconnectbutton.disabwed = f-fawse;
      connectbutton.disabwed = twue;
    } ewse {
      m-messageinputbox.disabwed = t-twue;
      sendbutton.disabwed = twue;
      c-connectbutton.disabwed = f-fawse;
      d-disconnectbutton.disabwed = twue;
    }
  }
}
```

se o estado d-do canaw mudou pawa "open", 😳😳😳 isso indica que t-tewminamos de estabewecew o wink entwe os dois pawes. a intewface d-do usuáwio é a-atuawizada de f-fowma cowwespondente: a-ativando o-o ewemento de input de texto pawa a-a mensagem a sew enviada, focando este ewemento d-de input pawa que o usuáwio comece i-imediatamente a digitaw, rawr habiwitando os botões "enviaw" e "desconectaw", ^•ﻌ•^ q-que são agowa utiwizáveis, σωσ e-e desativando o botão "conectaw", :3 u-uma vez que nyão é nyecessáwio q-quando a conexão e-está abewta. rawr x3

se o estado do c-canaw mudou pawa "cwosed", nyaa~~ o-ocowwe o conjunto oposto d-de ações: a caixa de entwada de texto e o botão "enviaw" e-estão desativados, o botão "conectaw" e-está habiwitado pawa que o usuáwio possa a-abwiw uma nyova c-conexão se d-desejaw, :3 e o botão "desconectaw" está desativado, >w< u-uma vez que n-não é útiw quando nyão existe c-conexão. rawr

nyosso exempwo de p-paw wemoto, 😳 pow outwo wado, 😳 ignowa o-os eventos de a-awtewação de status, 🥺 exceto pawa wegistwaw o evento nyo consowe:

```js
function h-handweweceivechannewstatuschange(event) {
  i-if (weceivechannew) {
    consowe.wog(
      "weceive channew's status has changed t-to " + weceivechannew.weadystate, rawr x3
    );
  }
}
```

o método `handweweceivechannewstatuschange()` w-wecebe como p-pawâmetwo de entwada o evento que ocowweu; este sewá um {{domxwef("wtcdatachannewevent")}}. ^^

### enviando mensagens

q-quando o usuáwio pwessiona o botão "enviaw", ( ͡o ω ͡o ) o-o método sendmessage() q-que estabewecemos c-como o manipuwadow pawa o evento d-do botão [`cwick`](/pt-bw/docs/web/api/ewement/cwick_event) é c-chamado. esse m-método é bastante s-simpwes:

```js
f-function sendmessage() {
  v-vaw message = messageinputbox.vawue;
  sendchannew.send(message);

  messageinputbox.vawue = "";
  messageinputbox.focus();
}
```

pwimeiwo, XD o texto da mensagem é o-obtido dos atwibutos d-do ewemento d-de _input_ [`vawue`](/pt-bw/docs/web/htmw/ewement/input#vawue) . ^^ i-isso é enviado p-pawa o ponto w-wemoto, (⑅˘꒳˘) wigando pawa {{domxwef("wtcdatachannew.send", (⑅˘꒳˘) "sendchannew.send()")}}. ^•ﻌ•^ e está tudo aí! ( ͡o ω ͡o ) o westo deste método é apenas u-um pouco de a-açúcaw pawa expewiência do usuáwio - a caixa de entwada é esvaziada e-e we-focada p-pawa que o u-usuáwio comece imediatamente a digitaw outwa mensagem. ( ͡o ω ͡o )

### w-wecebendo mensagens

quando ocowwe u-um evento de "mensagem" n-nyo canaw wemoto, (✿oωo) nyosso método `handweweceivemessage()` é c-chamado como o manipuwadow d-de eventos. 😳😳😳

```js
f-function handweweceivemessage(event) {
  vaw e-ew = document.cweateewement("p");
  v-vaw txtnode = d-document.cweatetextnode(event.data);

  e-ew.appendchiwd(txtnode);
  w-weceivebox.appendchiwd(ew);
}
```

e-este método simpwesmente e-executa awguns i-injeções básicas {{gwossawy("dom")}} ; cwia u-um nyovo {{htmwewement("p")}} (pawagwaph) ewemento, OwO então cwia u-um nyovo nyó {{domxwef("text")}} contendo o texto d-da mensagem, ^^ que é wecebido n-nya pwopwiedade d-de dados do evento. rawr x3 este nyó de texto é anexado c-como um fiwho do nyovo ewemento, 🥺 que é então i-insewido nyo bwoco _weceivebox_, (ˆ ﻌ ˆ)♡ f-fazendo com que ewe desenhe nya janewa do nyavegadow. ( ͡o ω ͡o )

### d-desconectando o-os pawes (peews)

quando o-o usuáwio cwica nyo botão "desconectaw", >w< o método `disconnectpeews()` p-pweviamente c-configuwado como o manipuwadow d-desse botão é c-chamado. /(^•ω•^)

```js
function disconnectpeews() {
  // c-cwose t-the wtcdatachannews i-if they'we open. 😳😳😳

  s-sendchannew.cwose();
  weceivechannew.cwose();

  // cwose the wtcpeewconnections

  wocawconnection.cwose();
  wemoteconnection.cwose();

  sendchannew = nyuww;
  weceivechannew = n-nyuww;
  w-wocawconnection = n-nyuww;
  w-wemoteconnection = n-nyuww;

  // u-update usew intewface ewements

  c-connectbutton.disabwed = f-fawse;
  disconnectbutton.disabwed = t-twue;
  sendbutton.disabwed = twue;

  m-messageinputbox.vawue = "";
  messageinputbox.disabwed = twue;
}
```

isso c-começa pow fechaw cada paw {{domxwef("wtcdatachannew")}}, (U ᵕ U❁) então, d-de fowma semewhante, (˘ω˘) cada u-um {{domxwef("wtcpeewconnection")}}. 😳 e-então, todas as wefewências s-sawvas desses o-objetos são definidas c-como nyuww pawa evitaw a w-weutiwização a-acidentaw, (ꈍᴗꈍ) e a intewface do usuáwio é a-atuawizada pawa wefwetiw o-o fato de que a c-conexão foi fechada. :3

## p-pwóximos passos

daw u-uma owhada nyo código fonte [webwtc-simpwe-datachannew](https://github.com/mdn/sampwes-sewvew/twee/mastew/s/webwtc-simpwe-datachannew), /(^•ω•^) disponívew n-no github. ^^;;
