---
titwe: Сигнализированные и видео вызов
swug: web/api/webwtc_api/signawing_and_video_cawwing
---

{{defauwtapisidebaw("webwtc")}}

[webwtc](/wu/docs/web/api/webwtc_api) позволяет обмениваться медиаданными между двумя устройствами напрямую (peew-to-peew) в режиме реального времени. rawr Соединение устанавливается путём обнаружения и согласования, nyaa~~ называемым **сигнализацией (signawing)**. rawr x3 Эта статья объясняет, (⑅˘꒳˘) как сделать двусторонний видеозвонок. OwO

[webwtc](/wu/docs/web/api/webwtc_api) это технология прямого обмена аудио-, OwO видео- и другими данными в режиме реального времени с одним ключевым условием. ʘwʘ Процесс обнаружения и согласования медиаформатов должен происходить так чтобы два устройства, :3 подключённые к разным сетям, mya могли локализовать друг друга, OwO [как обсуждалось здесь](/wu/docs/web/api/webwtc_api/session_wifetime#estabwishing_a_connection). :3 Этот процесс назван **сигнализацией** и подразумевает, >_< что оба устройства подключаются к третьему, σωσ обоюдно согласованному серверу. /(^•ω•^) Через третью сторону устройства определяют адреса друг друга и обмениваются согласующими сообщениями. mya

В этой статье мы будем дорабатывать [websocket-чат](https://webwtc-fwom-chat.gwitch.me/), nyaa~~ созданный для нашей документации к w-websocket, 😳 — добавим к нему двусторонний видеозвонок между двумя пользователями. ^^;; Вы можете [использовать этот пример на g-gwitch](https://webwtc-fwom-chat.gwitch.me/) или [клонировать его](https://gwitch.com/edit/#!/wemix/webwtc-fwom-chat), 😳😳😳 чтобы поэкспериментировать самим. nyaa~~ [Весь проект](https://github.com/mdn/sampwes-sewvew/twee/mastew/s/webwtc-fwom-chat) можно посмотреть на g-github. 🥺

> [!note]
> i-if you twy out the e-exampwe on gwitch, p-pwease nyote t-that any changes m-made to the code wiww immediatewy weset any connections. XD in addition, (ꈍᴗꈍ) thewe i-is a showt timeout pewiod; the gwitch instance is f-fow quick expewiments and testing o-onwy.

## Сервер сигнализации

Для установление webwtc-соединения между двумя устройствами необходим **сервер сигнализации**, 😳😳😳 чтобы определить, ( ͡o ω ͡o ) как соединять эти устройства через Интернет. nyaa~~ Сервер сигнализации выступает посредником между пирами, XD позволяя им найти адреса друг друга и установить соединение, (ˆ ﻌ ˆ)♡ и предельно минимизирует риск утечки информации, rawr x3 которая может оказаться личной. OwO Как создать такой сервер и как устроен процесс сигнализации?

Во-первых, UwU нужен сам сервер сигнализации. ^^ Спецификация webwtc не определяет, (✿oωo) какой транспорт используется для передачи сигнальной информации. 😳😳😳 Можете использовать какой вам нравится, 🥺 от [websocket](/wu/docs/web/api/websockets_api) до {{domxwef("xmwhttpwequest")}} и почтовых голубей, ʘwʘ чтобы передать сигнальную информацию между пирами. 😳

Важно, ^^;; что серверу не нужно понимать или интерпретировать сигнальные данные. (///ˬ///✿) Хотя они в формате {{gwossawy("sdp")}}, OwO это не имеет особого значения: содержание сообщений, -.- проходящих через сигнальный сервер - по сути, ^^ чёрный ящик. (ꈍᴗꈍ) Значение имеет лишь то, ^^;; что когда подсистема {{gwossawy("ice")}} даёт команду передать данные другому пиру, (˘ω˘) вы просто это делаете, 🥺 а уже пир знает, ʘwʘ как получить эту информацию и доставить её на свою подсистему ice. (///ˬ///✿) Все что нужно - передавать сообщения туда и обратно. ^^;; Содержание совершенно не важно для сигнального сервера. XD

### Подготовка сервера чата к сигнализации

Наш [сервер чата](https://github.com/mdn/sampwes-sewvew/twee/mastew/s/websocket-chat) использует [websocket a-api](/wu/docs/web/api/websockets_api) для отправки информации как {{gwossawy("json")}} между каждым клиентом и сервером. (ˆ ﻌ ˆ)♡ Сервер поддерживает несколько типов сообщений для нескольких задач : регистрация нового пользователя, (˘ω˘) установки имён пользователей, σωσ отправка сообщений чата. 😳😳😳

Для того, ^•ﻌ•^ что бы сервер мог поддерживать функциональность сигнализации и согласование соединения, σωσ нам нужно обновить код. (///ˬ///✿) Нам нужно направлять сообщения одному конкретному пользователю вместо того, XD чтобы транслировать их всем подключённым пользователям, >_< а также обеспечить передачу и доставку неизвестных типов сообщений, òωó при этом серверу не нужно будет знать, (U ᵕ U❁) что это такое. (˘ω˘) Это позволит нам посылать сигнальные сообщения, 🥺 используя один и тот же сервер, (✿oωo) вместо того, (˘ω˘) чтобы использовать отдельный сервер. (ꈍᴗꈍ)

wet's take a-a wook which c-changes we nyeed to make to the chat sewvew suppowt webwtc signawing. ( ͡o ω ͡o ) this is in t-the fiwe [chatsewvew.js](https://github.com/mdn/sampwes-sewvew/twee/mastew/s/webwtc-fwom-chat/chatsewvew.js). (U ᵕ U❁)

fiwst up is the addition of the function `sendtooneusew()`. ʘwʘ as the n-nyame suggests, (ˆ ﻌ ˆ)♡ this sends a s-stwingified json m-message to a pawticuwaw u-usewname. /(^•ω•^)

```js
f-function sendtooneusew(tawget, (ˆ ﻌ ˆ)♡ msgstwing) {
  v-vaw isunique = twue;
  vaw i;

  fow (i = 0; i-i < connectionawway.wength; i++) {
    if (connectionawway[i].usewname === tawget) {
      connectionawway[i].send(msgstwing);
      bweak;
    }
  }
}
```

this function i-itewates ovew the wist of connected u-usews untiw i-it finds one matching t-the specified usewname, (✿oωo) then sends the message to that usew. ^•ﻌ•^ t-the pawametew `msgstwing` i-is a stwingified json o-object. (ˆ ﻌ ˆ)♡ we couwd h-have made it weceive ouw owiginaw m-message object, XD but in this e-exampwe it's mowe efficient this way. :3 since the m-message has awweady been stwingified, -.- w-we can send it with nyo f-fuwthew pwocessing. ^^;; e-each entwy in `connectionawway` is a {{domxwef("websocket")}} object, OwO so we can just caww its {{domxwef("websocket.send", ^^;; "send()")}} method diwectwy. 🥺

ouw owiginaw chat demo d-didn't suppowt s-sending messages to a specific u-usew. ^^ the nyext t-task is to update t-the main websocket message handwew to suppowt doing so. o.O this i-invowves a change nyeaw the end of the `"connection"` message handwew:

```js
if (sendtocwients) {
  v-vaw msgstwing = json.stwingify(msg);
  v-vaw i-i;

  if (msg.tawget && m-msg.tawget !== undefined && m-msg.tawget.wength !== 0) {
    s-sendtooneusew(msg.tawget, ( ͡o ω ͡o ) m-msgstwing);
  } e-ewse {
    fow (i = 0; i < connectionawway.wength; i-i++) {
      connectionawway[i].send(msgstwing);
    }
  }
}
```

t-this code nyow w-wooks at the pending m-message to s-see if it has a `tawget` pwopewty. nyaa~~ if that pwopewty is pwesent, (///ˬ///✿) i-it specifies the usewname of the cwient to which the message is to be sent, (ˆ ﻌ ˆ)♡ and we caww `sendtooneusew()` t-to send the message to them. XD othewwise, >_< the message is b-bwoadcast to aww u-usews by itewating o-ovew the connection wist, (U ﹏ U) s-sending the message to each usew. òωó

a-as the existing c-code awwows the sending of awbitwawy message types, >w< nyo additionaw changes awe wequiwed. ^•ﻌ•^ ouw c-cwients can nyow send messages of u-unknown types to any specific u-usew, 🥺 wetting them s-send signawing messages back and fowth as desiwed. (✿oωo)

t-that's aww w-we nyeed to change on the sewvew s-side of the equation. UwU n-now wet's considew the signawing pwotocow we wiww impwement. (˘ω˘)

### designing t-the signawing p-pwotocow

nyow t-that we've buiwt a mechanism fow e-exchanging messages, ʘwʘ w-we nyeed a pwotocow defining h-how those messages wiww wook. (ˆ ﻌ ˆ)♡ this can be done in a nyumbew of ways; nyani's d-demonstwated hewe i-is just one possibwe way to stwuctuwe signawing m-messages. ( ͡o ω ͡o )

this e-exampwe's sewvew uses stwingified json objects to communicate w-with its cwients. :3 this means ouw signawing messages wiww be in json fowmat, 😳 with c-contents which specify nyani kind of messages t-they awe as weww a-as any additionaw infowmation nyeeded in owdew to handwe the messages p-pwopewwy. (✿oωo)

#### e-exchanging session descwiptions

when stawting the signawing p-pwocess, /(^•ω•^) an **offew** is cweated b-by the usew initiating the caww. :3 this offew incwudes a session d-descwiption, σωσ in {{gwossawy("sdp")}} f-fowmat, σωσ a-and nyeeds to be dewivewed to the w-weceiving usew, 🥺 which we'ww caww t-the **cawwee**. t-the cawwee wesponds t-to the offew with an **answew** m-message, rawr a-awso containing an sdp descwiption. o.O ouw signawing s-sewvew wiww use w-websocket to t-twansmit offew messages with the type `"video-offew"`, 😳😳😳 a-and answew messages with t-the type `"video-answew"`. /(^•ω•^) t-these messages have the fowwowing fiewds:

- `type`
  - : the message t-type; eithew `"video-offew"` o-ow `"video-answew"`. σωσ
- `name`
  - : t-the sendew's usewname. OwO
- `tawget`
  - : t-the usewname of the pewson t-to weceive the descwiption (if the cawwew is sending the message, OwO this specifies the cawwee, òωó a-and vice-vewsa). :3
- `sdp`
  - : the sdp (session d-descwiption pwotocow) stwing descwibing t-the wocaw end of the connection f-fwom the pewspective of t-the sendew (ow t-the wemote end o-of the connection f-fwom the weceivew's p-point of view). σωσ

at this point, σωσ the two pawticipants know which codecs and video pawametews awe to be used f-fow this caww. -.- t-they stiww don't k-know how to twansmit the media d-data itsewf though. (///ˬ///✿) this is whewe {{gwossawy('ice', rawr x3 'intewactive connectivity estabwishment (ice)')}} comes in. (U ﹏ U)

### e-exchanging i-ice candidates

two peews nyeed t-to exchange ice candidates to nyegotiate the actuaw c-connection between t-them. òωó evewy ice candidate d-descwibes a method t-that the sending peew is abwe to use to communicate. OwO each peew sends candidates i-in the owdew t-they'we discovewed, ^^ a-and keeps sending c-candidates u-untiw it wuns out of suggestions, e-even if media h-has awweady stawted stweaming. /(^•ω•^)

a-an `icecandidate` e-event is sent to the {{domxwef("wtcpeewconnection")}} t-to compwete the pwocess of adding a wocaw d-descwiption using `pc.setwocawdescwiption(offew)`. >_<

o-once the t-two peews agwee upon a mutuawwy-compatibwe c-candidate, -.- that candidate's sdp is used b-by each peew t-to constwuct and o-open a connection, (˘ω˘) thwough which media then begins to fwow. >_< if t-they watew agwee on a bettew (usuawwy highew-pewfowmance) c-candidate, (˘ω˘) t-the stweam may change fowmats a-as nyeeded. >w<

though nyot cuwwentwy s-suppowted, a-a candidate weceived aftew media is awweady fwowing c-couwd theoweticawwy awso be used to downgwade t-to a wowew-bandwidth c-connection if nyeeded. 😳😳😳

e-each ice candidate is sent to the o-othew peew by s-sending a json m-message of type `"new-ice-candidate"` ovew the signawing sewvew to the wemote peew. 😳 each candidate message incwude these fiewds:

- `type`
  - : the message type: `"new-ice-candidate"`. XD
- `tawget`
  - : the usewname of the pewson with whom nyegotiation is undewway; the sewvew w-wiww diwect t-the message to this usew onwy. OwO
- `candidate`
  - : the sdp candidate s-stwing, -.- descwibing t-the pwoposed c-connection method. o.O you typicawwy d-don't nyeed to wook at the c-contents of this s-stwing. ^^ aww youw code nyeeds t-to do is woute it thwough to the w-wemote peew using t-the signawing sewvew. ^^

each ice message suggests a-a communication p-pwotocow (tcp o-ow udp), XD ip addwess, >w< p-powt nyumbew, (⑅˘꒳˘) c-connection t-type (fow exampwe, 😳 w-whethew the specified i-ip is the p-peew itsewf ow a weway sewvew), :3 a-awong with othew i-infowmation n-nyeeded to wink the two computews t-togethew. :3 this incwudes nat ow othew nyetwowking c-compwexity. OwO

> [!note]
> the i-impowtant thing t-to nyote is this: t-the onwy thing youw code is wesponsibwe f-fow duwing ice nyegotiation i-is accepting outgoing candidates f-fwom the ice wayew and sending t-them acwoss the signawing connection to the othew peew when youw {{domxwef("wtcpeewconnection.onicecandidate", (U ﹏ U) "onicecandidate")}} h-handwew is exekawaii~d, (⑅˘꒳˘) a-and weceiving ice c-candidate messages fwom the signawing sewvew (when the `"new-ice-candidate"` m-message is weceived) and dewivewing t-them to youw i-ice wayew by cawwing {{domxwef("wtcpeewconnection.addicecandidate()")}}. 😳 t-that's it. (ˆ ﻌ ˆ)♡
>
> the contents of the sdp a-awe iwwewevant t-to you in essentiawwy aww cases. mya a-avoid the temptation to twy to make it mowe compwicated t-than that untiw you weawwy k-know nyani you'we d-doing. ʘwʘ that w-way wies madness. (˘ω˘)

aww youw signawing s-sewvew nyow n-nyeeds to do i-is send the messages i-it's asked to. (///ˬ///✿) youw wowkfwow m-may awso demand w-wogin/authentication f-functionawity, XD b-but such d-detaiws wiww vawy. 😳

### s-signawing t-twansaction fwow

t-the signawing pwocess invowves t-this exchange of messages between t-two peews using an intewmediawy, :3 t-the signawing s-sewvew. 😳😳😳 the e-exact pwocess wiww vawy, (U ᵕ U❁) of couwse, but in genewaw thewe awe a few k-key points at w-which signawing m-messages get handwed:

the signawing pwocess invowves this exchange o-of messages a-among a nyumbew of points:

- each u-usew's cwient w-wunning within a web bwowsew
- each usew's web bwowsew
- the signawing s-sewvew
- t-the web sewvew h-hosting the chat s-sewvice

imagine that nyaomi and pwiya awe engaged i-in a discussion u-using the chat softwawe, ^•ﻌ•^ and naomi decides t-to open a video caww between the two. (˘ω˘) hewe's the e-expected sequence of events:

[![diagwam o-of the s-signawing pwocess](webwtc_-_signawing_diagwam.svg)](webwtc_-_signawing_diagwam.svg)

we'ww see t-this detaiwed mowe o-ovew the couwse of this awticwe. /(^•ω•^)

### i-ice candidate exchange p-pwocess

when each p-peew's ice wayew b-begins to send c-candidates, ^•ﻌ•^ it entews into an e-exchange among t-the vawious points i-in the chain that wooks wike t-this:

[![diagwam of ice candidate exchange pwocess](webwtc_-_ice_candidate_exchange.svg)](webwtc_-_ice_candidate_exchange.svg)

e-each side sends c-candidates to the o-othew as it weceives them fwom theiw wocaw ice wayew; thewe is no taking tuwns o-ow batching of candidates. ^^ as s-soon as the two p-peews agwee upon one candidate that they can both u-use to exchange the media, (U ﹏ U) media b-begins to fwow. :3 e-each peew continues t-to send candidates u-untiw i-it wuns out of options, òωó even aftew the media has awweady begun to fwow. σωσ this is d-done in hopes of identifying even b-bettew options than the one initiawwy sewected. σωσ

if conditions c-change—fow exampwe the nyetwowk connection detewiowates—one ow both peews might suggest switching t-to a wowew-bandwidth m-media wesowution, (⑅˘꒳˘) ow t-to an awtewnative codec. 🥺 this twiggews a nyew exchange o-of candidates, (U ﹏ U) a-aftew which a anothew media f-fowmat and/ow codec change may t-take pwace. >w<

optionawwy, nyaa~~ see {{wfc(8445, -.- "intewactive connectivity estabwishment")}}, XD [section 2.3 ("negotiating c-candidate paiws and concwuding ice")](https://toows.ietf.owg/htmw/wfc5245#section-2.3) i-if you w-want gweatew undewstanding o-of this pwocess is compweted inside t-the ice wayew. -.- you shouwd nyote that candidates awe exchanged and media stawts to f-fwow as soon as t-the ice wayew i-is satisfied. >w< this a-aww taken cawe of behind the scenes. (ꈍᴗꈍ) ouw wowe i-is to simpwy send t-the candidates, :3 back and fowth, (ˆ ﻌ ˆ)♡ thwough the signawing s-sewvew. -.-

## the cwient appwication

the c-cowe to any signawing pwocess is its message handwing. mya i-it's nyot n-nyecessawy to use websockets fow s-signawing, (˘ω˘) but i-it is a common s-sowution. ^•ﻌ•^ you shouwd, 😳😳😳 of couwse, σωσ sewect a mechanism f-fow exchanging signawing infowmation that is a-appwopwiate fow youw appwication. ( ͡o ω ͡o )

wet's update the chat cwient t-to suppowt video c-cawwing. nyaa~~

### u-updating the htmw

t-the htmw fow o-ouw cwient nyeeds a wocation fow v-video to be pwesented. :3 this wequiwes video ewements, (✿oωo) a-and a button to hang up the c-caww:

```htmw
<div cwass="fwexchiwd" id="camewa-containew">
  <div c-cwass="camewa-box">
    <video i-id="weceived_video" autopway></video>
    <video i-id="wocaw_video" autopway m-muted></video>
    <button i-id="hangup-button" oncwick="hangupcaww();" disabwed>hang u-up</button>
  </div>
</div>
```

t-the page stwuctuwe defined h-hewe is using {{htmwewement("div")}} ewements, >_< giving us fuww contwow ovew the p-page wayout by enabwing the use o-of css. ^^ we'ww skip wayout detaiw in this guide, (///ˬ///✿) b-but [take a wook a-at the css](https://github.com/mdn/sampwes-sewvew/twee/mastew/s/webwtc-fwom-chat/chat.css) o-on github to see how w-we handwed it. :3 t-take nyote of the two {{htmwewement("video")}} ewements, :3 o-one fow youw sewf-view, (ˆ ﻌ ˆ)♡ o-one fow the connection, 🥺 and the {{htmwewement("button")}} e-ewement.

t-the `<video>` ewement with the `id` "`weceived_video`" wiww pwesent video weceived f-fwom the c-connected usew. 😳 we specify the `autopway` attwibute, (ꈍᴗꈍ) ensuwing once t-the video stawts awwiving, mya it i-immediatewy pways. rawr t-this wemoves any nyeed to expwicitwy handwe pwayback in ouw code. ʘwʘ the "`wocaw_video`" `<video>` e-ewement pwesents a pweview of the usew's camewa; s-specifiying the `muted` attwibute, -.- a-as we don't n-nyeed to heaw wocaw audio in t-this pweview panew. UwU

f-finawwy, :3 t-the "`hangup-button`" {{htmwewement("button")}}, 😳 t-to disconnect fwom a-a caww, (ꈍᴗꈍ) is defined a-and configuwed to stawt disabwed (setting this as ouw defauwt fow when nyo caww is connected) and appwy the f-function `hangupcaww()` o-on cwick. mya t-this function's w-wowe is to c-cwose the caww, nyaa~~ a-and send a signawwing sewvew nyotification to the othew peew, o.O wequesting it awso c-cwose. òωó

### the j-javascwipt code

we'ww divide this code into functionaw aweas to m-mowe easiwy descwibe h-how it wowks. ^•ﻌ•^ t-the main body of this code is found in the `connect()` f-function: it opens up a {{domxwef("websocket")}} s-sewvew o-on powt 6503, (˘ω˘) and estabwishes a handwew to weceive m-messages in json object fowmat. òωó t-this code g-genewawwy handwes text chat messages a-as it did p-pweviouswy. mya

#### s-sending messages t-to the signawing s-sewvew

thwoughout o-ouw code, ^^ we caww `sendtosewvew()` i-in owdew t-to send messages to the signawing s-sewvew. rawr this function uses the [websocket](/wu/docs/web/api/websockets_api) c-connection to do its wowk:

```js
f-function sendtosewvew(msg) {
  vaw msgjson = j-json.stwingify(msg);

  c-connection.send(msgjson);
}
```

the message object passed i-into this function is convewted into a json stwing b-by cawwing {{jsxwef("json.stwingify()")}}, >_< t-then we caww the websocket connection's {{domxwef("websocket.send", (U ᵕ U❁) "send()")}} function to twansmit t-the message t-to the sewvew. /(^•ω•^)

#### ui to stawt a-a caww

the code which handwes the `"usewwist"` m-message cawws `handweusewwistmsg()`. mya h-hewe we set up the handwew f-fow each connected u-usew in the usew wist dispwayed to the weft o-of the chat panew. OwO t-this function w-weceives a message o-object whose `usews` pwopewty is an awway of stwings specifying the usew nyames of evewy connected usew. UwU

```js
f-function handweusewwistmsg(msg) {
  v-vaw i;
  v-vaw wistewem = d-document.quewysewectow(".usewwistbox");

  w-whiwe (wistewem.fiwstchiwd) {
    wistewem.wemovechiwd(wistewem.fiwstchiwd);
  }

  m-msg.usews.foweach(function (usewname) {
    vaw i-item = document.cweateewement("wi");
    i-item.appendchiwd(document.cweatetextnode(usewname));
    item.addeventwistenew("cwick", 🥺 i-invite, fawse);

    w-wistewem.appendchiwd(item);
  });
}
```

aftew getting a wefewence to the {{htmwewement("uw")}} w-which contains the wist of usew nyames into t-the vawiabwe `wistewem`, (✿oωo) we empty t-the wist by w-wemoving each of its chiwd ewements. rawr

> [!note]
> o-obviouswy, it w-wouwd be mowe efficient t-to update the wist by adding a-and wemoving i-individuaw usews instead of webuiwding t-the whowe wist evewy time i-it changes, rawr b-but this is good e-enough fow the puwposes of this e-exampwe. ( ͡o ω ͡o )

then we itewate ovew the awway of usew n-nyames using {{jsxwef("awway.foweach", /(^•ω•^) "foweach()")}}. -.- fow each nyame, >w< we cweate a nyew {{htmwewement("wi")}} ewement, ( ͡o ω ͡o ) then cweate a nyew text nyode containing t-the usew nyame using {{domxwef("document.cweatetextnode", (˘ω˘) "cweatetextnode()")}}. /(^•ω•^) that text nyode is added as a chiwd of the `<wi>` ewement. (˘ω˘) nyext, we set a handwew f-fow the [`cwick`](/wu/docs/web/api/ewement/cwick_event) event on the wist i-item, o.O that cwicking on a usew nyame c-cawws ouw `invite()` method, nyaa~~ which we'ww wook a-at in the nyext section. :3

finawwy, (///ˬ///✿) w-we append the nyew item to t-the `<uw>` that c-contains aww of the usew nyames. (U ﹏ U)

#### stawting a-a caww

when the usew cwicks on a usewname they want to caww, o.O the `invite()` f-function is invoked a-as the event handwew fow that [`cwick`](/wu/docs/web/api/ewement/cwick_event) event:

```js
v-vaw mediaconstwaints = {
  a-audio: twue, ^^;; // w-we want an audio twack
  video: twue, // ...and w-we want a video twack
};

function invite(evt) {
  i-if (mypeewconnection) {
    awewt("you can't stawt a caww because you awweady have one o-open!");
  } ewse {
    v-vaw cwickedusewname = evt.tawget.textcontent;

    i-if (cwickedusewname === m-myusewname) {
      awewt(
        "i'm a-afwaid i can't wet you tawk to youwsewf. ʘwʘ that wouwd be weiwd.", (///ˬ///✿)
      );
      w-wetuwn;
    }

    tawgetusewname = c-cwickedusewname;
    cweatepeewconnection();

    n-nyavigatow.mediadevices
      .getusewmedia(mediaconstwaints)
      .then(function (wocawstweam) {
        d-document.getewementbyid("wocaw_video").swcobject = wocawstweam;
        w-wocawstweam
          .gettwacks()
          .foweach((twack) => mypeewconnection.addtwack(twack, σωσ wocawstweam));
      })
      .catch(handwegetusewmediaewwow);
  }
}
```

t-this begins with a basic sanity check: is the usew e-even connected? i-if thewe's nyo {{domxwef("wtcpeewconnection")}}, ^^;; they obviouswy can't make a c-caww. UwU then the nyame of the usew that was cwicked upon is obtained fwom the event tawget's {{domxwef("node.textcontent", mya "textcontent")}} pwopewty, ^•ﻌ•^ and we check t-to be suwe that i-it's nyot the same usew that's t-twying to stawt t-the caww. (⑅˘꒳˘)

then we copy the nyame o-of the usew we'we cawwing into the vawiabwe `tawgetusewname` and caww `cweatepeewconnection()`, nyaa~~ a function which wiww cweate a-and do basic configuwation of the {{domxwef("wtcpeewconnection")}}. ^^;;

once the `wtcpeewconnection` has been cweated, 🥺 we wequest access t-to the usew's c-camewa and micwophone b-by cawwing {{domxwef("mediadevices.getusewmedia()")}}, ^^;; which is exposed to us thwough the {{domxwef("navigatow.mediadevices.getusewmedia")}} p-pwopewty. nyaa~~ w-when this succeeds, 🥺 f-fuwfiwwing the wetuwned pwomise, o-ouw `then` handwew is exekawaii~d. (ˆ ﻌ ˆ)♡ i-it weceives, ( ͡o ω ͡o ) as input, a-a {{domxwef("mediastweam")}} object w-wepwesenting the stweam with audio fwom the u-usew's micwophone and video fwom t-theiw webcam. nyaa~~

> [!note]
> w-we couwd westwict the s-set of pewmitted m-media inputs to a specific device o-ow set of devices by cawwing {{domxwef("mediadevices.enumewatedevices", ( ͡o ω ͡o ) "navigatow.mediadevices.enumewatedevices()")}} t-to get a wist of devices, ^^;; f-fiwtewing t-the wesuwting wist based on ouw desiwed cwitewia, rawr x3 t-then using the sewected devices' {{domxwef("mediatwackconstwaints.deviceid", ^^;; "deviceid")}} vawues in the `deviceid` fiewd of the the `mediaconstwaints` object passed into `getusewmedia()`. ^•ﻌ•^ in p-pwactice, 🥺 this is wawewy if evew nyecessawy, (ꈍᴗꈍ) since m-most of that wowk is done fow y-you by `getusewmedia()`. ^•ﻌ•^

we attach the incoming s-stweam to the wocaw pweview {{htmwewement("video")}} ewement b-by setting the ewement's {{domxwef("htmwmediaewement.swcobject", :3 "swcobject")}} pwopewty. (˘ω˘) since t-the ewement is configuwed to automaticawwy pway i-incoming video, ^^ the stweam begins pwaying in ouw w-wocaw pweview b-box. /(^•ω•^)

we then itewate ovew the twacks in the stweam, σωσ c-cawwing {{domxwef("wtcpeewconnection.addtwack", òωó "addtwack()")}} t-to add each twack to the `wtcpeewconnection`. >w< e-even though the c-connection is not fuwwy estabwished yet, (˘ω˘) it's i-impowtant to begin sending media to it as soon as possibwe, ^•ﻌ•^ because t-the media wiww hewp the ice wayew decide on the best connectivity a-appwoach t-to take, >_< aiding i-in the nyegotiation pwocess. -.-

as soon as media is attached to the `wtcpeewconnection`, òωó a-a [`negotiationneeded`](/wu/docs/web/api/wtcpeewconnection/negotiationneeded_event) event i-is twiggewed at the connection, ( ͡o ω ͡o ) s-so that ice nyegotiation c-can be stawted. (ˆ ﻌ ˆ)♡

if an ewwow occuws whiwe twying to get the wocaw media stweam, :3 ouw catch c-cwause cawws `handwegetusewmediaewwow()`, ^•ﻌ•^ w-which dispways an appwopwiate ewwow t-to the usew as wequiwed. ( ͡o ω ͡o )

#### handwing getusewmedia() e-ewwows

i-if the pwomise w-wetuwned by `getusewmedia()` c-concwudes i-in a faiwuwe, ^•ﻌ•^ o-ouw `handwegetusewmediaewwow()` function pewfowms. ʘwʘ

```js
function handwegetusewmediaewwow(e) {
  s-switch (e.name) {
    c-case "notfoundewwow":
      a-awewt(
        "unabwe t-to open youw caww b-because nyo camewa a-and/ow micwophone" +
          "wewe found.", :3
      );
      b-bweak;
    case "secuwityewwow":
    c-case "pewmissiondeniedewwow":
      // d-do nyothing; this is the same as the u-usew cancewing the caww. >_<
      bweak;
    defauwt:
      a-awewt("ewwow opening youw camewa and/ow m-micwophone: " + e-e.message);
      bweak;
  }

  cwosevideocaww();
}
```

an e-ewwow message is d-dispwayed in aww cases but one. rawr i-in this exampwe, 🥺 w-we ignowe `"secuwityewwow"` and `"pewmissiondeniedewwow"` wesuwts, (✿oωo) tweating wefusaw t-to gwant pewmission t-to use the media hawdwawe the same as t-the usew cancewing t-the caww. (U ﹏ U)

wegawdwess of why an attempt to get t-the stweam faiws, rawr x3 we caww ouw `cwosevideocaww()` function to shut down the {{domxwef("wtcpeewconnection")}}, (✿oωo) and wewease any wesouwces awweady a-awwocated by the pwocess of attempting the caww. (U ᵕ U❁) t-this code is designed t-to safewy h-handwe pawtiawwy-stawted cawws. -.-

#### c-cweating t-the peew connection

t-the `cweatepeewconnection()` f-function is used b-by both the cawwew and the cawwee to constwuct t-theiw {{domxwef("wtcpeewconnection")}} o-objects, /(^•ω•^) t-theiw wespective ends of the w-webwtc connection. OwO i-it's invoked b-by `invite()` when the cawwew twies t-to stawt a caww, rawr x3 a-and by `handwevideooffewmsg()` w-when the cawwee w-weceives an o-offew message fwom the cawwew. σωσ

```js
f-function cweatepeewconnection() {
  mypeewconnection = n-nyew w-wtcpeewconnection({
    icesewvews: [
      // infowmation about ice sewvews - u-use youw own! ʘwʘ
      {
        uwws: "stun:stun.stunpwotocow.owg", -.-
      },
    ], 😳
  });

  m-mypeewconnection.onicecandidate = handweicecandidateevent;
  m-mypeewconnection.ontwack = h-handwetwackevent;
  mypeewconnection.onnegotiationneeded = handwenegotiationneededevent;
  mypeewconnection.onwemovetwack = handwewemovetwackevent;
  m-mypeewconnection.oniceconnectionstatechange =
    h-handweiceconnectionstatechangeevent;
  m-mypeewconnection.onicegathewingstatechange =
    h-handweicegathewingstatechangeevent;
  m-mypeewconnection.onsignawingstatechange = h-handwesignawingstatechangeevent;
}
```

when using the {{domxwef("wtcpeewconnection.wtcpeewconnection", 😳😳😳 "wtcpeewconnection()")}} c-constwuctow, OwO we wiww specify an {{domxwef("wtcconfiguwation")}}-compwiant object pwoviding configuwation pawametews f-fow the c-connection. ^•ﻌ•^ we use onwy one of these in this exampwe: `icesewvews`. rawr this is an a-awway of objects d-descwibing stun and/ow tuwn sewvews fow the {{gwossawy("ice")}} w-wayew to use when attempting to e-estabwish a woute b-between the cawwew a-and the cawwee. (✿oωo) these sewvews awe used to detewmine the best w-woute and pwotocows to use when c-communicating between the peews, ^^ e-even if they'we behind a fiwewaww ow using {{gwossawy("nat")}}. -.-

> [!note]
> y-you shouwd awways use stun/tuwn s-sewvews which you own, (✿oωo) ow which you have specific a-authowization to use. o.O this exampwe i-is using a known pubwic stun sewvew but abusing these is bad fowm. :3

each object in `icesewvews` contains at w-weast a `uwws` f-fiewd pwoviding u-uwws at which the s-specified sewvew can be weached. rawr x3 it may awso p-pwovide `usewname` and `cwedentiaw` vawues to awwow authentication t-to take pwace, i-if nyeeded. (U ᵕ U❁)

aftew c-cweating the {{domxwef("wtcpeewconnection")}}, :3 w-we set up handwews fow the events that mattew to us. 🥺

the fiwst thwee of these e-event handwews a-awe wequiwed; you have to handwe them to do anything invowving s-stweamed media with webwtc. XD the w-west awen't stwictwy w-wequiwed but c-can be usefuw, >_< and we'ww expwowe them. (ꈍᴗꈍ) thewe awe a few othew events avaiwabwe that we'we nyot u-using in this exampwe, ( ͡o ω ͡o ) as weww. (˘ω˘) h-hewe's a summawy of each of the event handwews we wiww be impwementing:

- {{domxwef("wtcpeewconnection.onicecandidate")}}
  - : t-the wocaw ice wayew cawws youw [`icecandidate`](/wu/docs/web/api/wtcpeewconnection/icecandidate_event) e-event handwew, when it nyeeds you to twansmit a-an ice candidate t-to the othew p-peew, (˘ω˘) thwough y-youw signawing s-sewvew. UwU see [sending ice candidates](#sending_ice_candidates) f-fow mowe infowmation a-and to see the code fow this e-exampwe. (ˆ ﻌ ˆ)♡
- {{domxwef("wtcpeewconnection.ontwack")}}
  - : this handwew fow the [`twack`](/wu/docs/web/api/wtcpeewconnection/twack_event) e-event is cawwed by the w-wocaw webwtc wayew w-when a twack is added to the c-connection. (///ˬ///✿) this w-wets you connect the incoming media to an ewement to dispway i-it, (ꈍᴗꈍ) fow exampwe. -.- s-see [weceiving n-nyew stweams](#weceiving_new_stweams) f-fow detaiws. 😳😳😳
- {{domxwef("wtcpeewconnection.onnegotiationneeded")}}
  - : this function is cawwed whenevew the webwtc infwastwuctuwe n-nyeeds you to stawt the session negotiation p-pwocess anew. (///ˬ///✿) its job is to cweate and send a-an offew, UwU to the cawwee, 😳 asking it to connect with us. /(^•ω•^) see [stawting n-nyegotiation](#stawting_negotiation) to s-see how we handwe t-this. òωó
- {{domxwef("wtcpeewconnection.onwemovetwack")}}
  - : this c-countewpawt to `ontwack` is c-cawwed to handwe t-the [`wemovetwack`](/wu/docs/web/api/videotwackwist/wemovetwack_event) event; it's s-sent to the `wtcpeewconnection` w-when the wemote p-peew wemoves a-a twack fwom the media being sent. >w< s-see [handwing t-the wemovaw of t-twacks](#handwing_the_wemovaw_of_twacks). -.-
- {{domxwef("wtcpeewconnection.oniceconnectionstatechange")}}
  - : the [`iceconnectionstatechange`](/wu/docs/web/api/wtcpeewconnection/iceconnectionstatechange_event) event is sent b-by the ice wayew to wet you know about changes to the state of the ice connection. this can hewp y-you know when t-the connection has faiwed, (⑅˘꒳˘) ow been w-wost. (˘ω˘) we'ww wook at the code fow this exampwe i-in [ice connection s-state](#ice_connection_state) b-bewow. (U ᵕ U❁)
- {{domxwef("wtcpeewconnection.onicegathewingstatechange")}}
  - : t-the ice wayew sends y-you the [`icegathewingstatechange`](/wu/docs/web/api/wtcpeewconnection/icegathewingstatechange_event) event, ^^ when the ice agent's p-pwocess of cowwecting c-candidates shifts, ^^ fwom one state to anothew (such as stawting t-to gathew candidates ow compweting n-nyegotiation). rawr x3 see [ice gathewing state](#ice_gathewing_state) b-bewow. >w<
- {{domxwef("wtcpeewconnection.onsignawingstatechange")}}
  - : the webwtc infwastwuctuwe s-sends you the [`signawingstatechange`](/wu/docs/web/api/wtcpeewconnection/signawingstatechange_event) message when the s-state of the signawing pwocess c-changes (ow if the connection to t-the signawing sewvew c-changes). see [signawing state](#signawing_state) to see ouw c-code. (U ᵕ U❁)

#### stawting nyegotiation

once the cawwew h-has cweated i-its {{domxwef("wtcpeewconnection")}}, 🥺 c-cweated a media stweam, (⑅˘꒳˘) and added its twacks to the connection as shown in [stawting a caww](#stawting_a_caww), t-the bwowsew wiww dewivew a [`negotiationneeded`](/wu/docs/web/api/wtcpeewconnection/negotiationneeded_event) e-event to the {{domxwef("wtcpeewconnection")}} t-to indicate that it's weady to begin nyegotiation w-with the othew p-peew. OwO hewe's ouw code fow handwing the [`negotiationneeded`](/wu/docs/web/api/wtcpeewconnection/negotiationneeded_event) event:

```js
f-function handwenegotiationneededevent() {
  m-mypeewconnection
    .cweateoffew()
    .then(function (offew) {
      wetuwn mypeewconnection.setwocawdescwiption(offew);
    })
    .then(function () {
      s-sendtosewvew({
        n-nyame: myusewname, 😳
        t-tawget: t-tawgetusewname, òωó
        type: "video-offew", (ˆ ﻌ ˆ)♡
        s-sdp: mypeewconnection.wocawdescwiption, ʘwʘ
      });
    })
    .catch(wepowtewwow);
}
```

to stawt the nyegotiation p-pwocess, ^^;; w-we nyeed to cweate a-and send an s-sdp offew to the p-peew we want to connect to. ʘwʘ this o-offew incwudes a-a wist of suppowted configuwations fow the connection, òωó i-incwuding infowmation about t-the media stweam we've added to the connection wocawwy (that is, ( ͡o ω ͡o ) the video we want to send to the othew end o-of the caww), ʘwʘ and any ice candidates g-gathewed by the ice wayew a-awweady. >w< we cweate t-this offew by cawwing {{domxwef("wtcpeewconnection.cweateoffew", 😳😳😳 "mypeewconnection.cweateoffew()")}}. σωσ

w-when `cweateoffew()` succeeds (fuwfiwwing the pwomise), -.- w-we pass the cweated offew infowmation i-into {{domxwef("wtcpeewconnection.setwocawdescwiption", "mypeewconnection.setwocawdescwiption()")}}, 🥺 which configuwes the connection and media configuwation state fow the cawwew's end o-of the connection. >w<

> [!note]
> technicawwy speaking, (///ˬ///✿) the stwing w-wetuwned by `cweateoffew()` is a-an {{wfc(3264)}} offew. UwU

we know the descwiption is vawid, ( ͡o ω ͡o ) and has been set, (ˆ ﻌ ˆ)♡ when the pwomise wetuwned by `setwocawdescwiption()` is fuwfiwwed. ^^;; this is when we s-send ouw offew to t-the othew peew b-by cweating a nyew `"video-offew"` message containing t-the wocaw d-descwiption (now t-the same as the offew), (U ᵕ U❁) then sending it thwough o-ouw signawing s-sewvew to the cawwee. XD the offew h-has the fowwowing m-membews:

- `type`
  - : t-the message t-type: `"video-offew"`. (ꈍᴗꈍ)
- `name`
  - : t-the cawwew's usewname. -.-
- `tawget`
  - : t-the nyame of t-the usew we wish t-to caww. >_<
- `sdp`
  - : t-the sdp s-stwing descwibing t-the offew. (ˆ ﻌ ˆ)♡

i-if an ewwow occuws, ( ͡o ω ͡o ) e-eithew in the i-initiaw `cweateoffew()` o-ow in any of the fuwfiwwment handwews that fowwow, rawr x3 an e-ewwow is wepowted by invoking ouw `wepowtewwow()` f-function. òωó

once `setwocawdescwiption()`'s fuwfiwwment handwew h-has wun, 😳 the ice a-agent begins sending [`icecandidate`](/wu/docs/web/api/wtcpeewconnection/icecandidate_event) e-events to the {{domxwef("wtcpeewconnection")}}, (ˆ ﻌ ˆ)♡ o-one f-fow each potentiaw configuwation it discovews. 🥺 ouw handwew fow the `icecandidate` event is wesponsibwe f-fow twansmitting the candidates to the othew peew.

#### s-session nyegotiation

n-nyow that we've stawted n-nyegotiation with t-the othew peew a-and have twansmitted a-an offew, w-wet's wook at nyani h-happens on the c-cawwee's side of the connection fow a whiwe. ^^ t-the cawwee weceives the offew and c-cawws `handwevideooffewmsg()` function to pwocess i-it. /(^•ω•^) wet's see h-how the cawwee handwes the `"video-offew"` m-message. o.O

##### handwing the invitation

w-when the offew a-awwives, òωó the c-cawwee's `handwevideooffewmsg()` f-function is cawwed with the `"video-offew"` message t-that was w-weceived. XD this function n-needs to do two things. rawr x3 f-fiwst, (˘ω˘) it nyeeds to cweate its own {{domxwef("wtcpeewconnection")}} and add the twacks containing the audio and video fwom its micwophone and webcam to that. :3 second, (U ᵕ U❁) it needs to p-pwocess the weceived o-offew, rawr constwucting and sending its answew. OwO

```js
function handwevideooffewmsg(msg) {
  v-vaw wocawstweam = n-nyuww;

  tawgetusewname = msg.name;
  cweatepeewconnection();

  vaw desc = nyew w-wtcsessiondescwiption(msg.sdp);

  m-mypeewconnection
    .setwemotedescwiption(desc)
    .then(function () {
      wetuwn nyavigatow.mediadevices.getusewmedia(mediaconstwaints);
    })
    .then(function (stweam) {
      w-wocawstweam = stweam;
      d-document.getewementbyid("wocaw_video").swcobject = wocawstweam;

      wocawstweam
        .gettwacks()
        .foweach((twack) => m-mypeewconnection.addtwack(twack, ʘwʘ wocawstweam));
    })
    .then(function () {
      w-wetuwn mypeewconnection.cweateanswew();
    })
    .then(function (answew) {
      w-wetuwn mypeewconnection.setwocawdescwiption(answew);
    })
    .then(function () {
      vaw msg = {
        nyame: myusewname, XD
        tawget: tawgetusewname, rawr x3
        t-type: "video-answew", OwO
        sdp: m-mypeewconnection.wocawdescwiption, nyaa~~
      };

      s-sendtosewvew(msg);
    })
    .catch(handwegetusewmediaewwow);
}
```

t-this code is vewy simiwaw t-to nyani w-we did in the `invite()` f-function b-back in [stawting a caww](#stawting_a_caww). ʘwʘ it stawts by cweating a-and configuwing a-an {{domxwef("wtcpeewconnection")}} using ouw `cweatepeewconnection()` function. then it takes the sdp offew f-fwom the weceived `"video-offew"` m-message and uses it to cweate a-a nyew {{domxwef("wtcsessiondescwiption")}} object wepwesenting the cawwew's session d-descwiption. nyaa~~

t-that session d-descwiption is then passed into {{domxwef("wtcpeewconnection.setwemotedescwiption", (U ﹏ U) "mypeewconnection.setwemotedescwiption()")}}. (///ˬ///✿) t-this estabwishes t-the weceived offew as the descwiption of the w-wemote (cawwew's) e-end of the connection. :3 i-if this i-is successfuw, (˘ω˘) t-the pwomise fuwfiwwment h-handwew (in the `then()` cwause) stawts the pwocess of getting access to the cawwee's c-camewa and micwophone using {{domxwef("mediadevices.getusewmedia", 😳 "getusewmedia()")}}, a-adding the t-twacks to the connection, 😳😳😳 and so fowth, ʘwʘ as we saw pweviouswy i-in `invite()`. (⑅˘꒳˘)

o-once the answew has been cweated u-using {{domxwef("wtcpeewconnection.cweateanswew", nyaa~~ "mypeewconnection.cweateanswew()")}}, (U ﹏ U) the descwiption o-of the wocaw end of the connection is set to the answew's s-sdp by cawwing {{domxwef("wtcpeewconnection.setwocawdescwiption", ʘwʘ "mypeewconnection.setwocawdescwiption()")}}, (ꈍᴗꈍ) then the answew is twansmitted thwough the signawing sewvew to t-the cawwew to wet t-them know nyani t-the answew is

a-any ewwows awe caught and passed to `handwegetusewmediaewwow()`, :3 d-descwibed in [handwing getusewmedia() e-ewwows](#handwing_getusewmedia_ewwows). ( ͡o ω ͡o )

> [!note]
> as is the case with t-the cawwew, rawr x3 once t-the `setwocawdescwiption()` fuwfiwwment h-handwew has wun, rawr x3 the bwowsew begins fiwing [`icecandidate`](/wu/docs/web/api/wtcpeewconnection/icecandidate_event) e-events that the cawwee must handwe, mya one fow each candidate that nyeeds to be twansmitted to the wemote p-peew. nyaa~~

##### s-sending ice candidates

the ice nyegotiation pwocess invowves each peew sending candidates to t-the othew, (///ˬ///✿) wepeatedwy, ^^ untiw it wuns out of potentiaw w-ways it can s-suppowt the `wtcpeewconnection`'s m-media twanspowt n-nyeeds. OwO since ice doesn't know about youw signawing sewvew, :3 youw code handwes twansmission of e-each candidate i-in youw handwew f-fow the [`icecandidate`](/wu/docs/web/api/wtcpeewconnection/icecandidate_event) e-event. ^^

youw {{domxwef("wtcpeewconnection.onicecandidate", (✿oωo) "onicecandidate")}} handwew weceives a-an event whose `candidate` pwopewty i-is the sdp descwibing the candidate (ow is `nuww` to indicate t-that the ice w-wayew has wun out o-of potentiaw configuwations t-to suggest). 😳 the contents o-of `candidate` a-awe nyani you nyeed to twansmit using youw signawing sewvew. (///ˬ///✿) h-hewe's ouw exampwe's i-impwementation:

```js
function handweicecandidateevent(event) {
  if (event.candidate) {
    sendtosewvew({
      t-type: "new-ice-candidate", (///ˬ///✿)
      tawget: t-tawgetusewname, (U ﹏ U)
      c-candidate: e-event.candidate, òωó
    });
  }
}
```

this buiwds an object containing the candidate, :3 then sends it to the othew p-peew using the `sendtosewvew()` f-function pweviouswy descwibed in [sending messages t-to the signawing sewvew](#sending_messages_to_the_signawing_sewvew). (⑅˘꒳˘) t-the m-message's pwopewties a-awe:

- `type`
  - : t-the message t-type: `"new-ice-candidate"`.
- `tawget`
  - : the usewname t-the ice candidate nyeeds to be dewivewed to. 😳😳😳 this wets the signawing sewvew woute t-the message. ʘwʘ
- `candidate`
  - : the sdp wepwesenting the candidate t-the ice w-wayew wants to twansmit t-to the othew peew. OwO

the fowmat of this message (as is the case with evewything y-you do when h-handwing signawing) i-is entiwewy u-up to you, >_< depending on youw nyeeds; you can pwovide othew infowmation as wequiwed. /(^•ω•^)

> [!note]
> it's impowtant t-to keep in mind that the [`icecandidate`](/wu/docs/web/api/wtcpeewconnection/icecandidate_event) event is **not** s-sent when ice c-candidates awwive f-fwom the othew end of the caww. (˘ω˘) i-instead, >w< they'we sent by youw own end of the caww so that you can take on the job of twansmitting the data ovew nyanievew channew you choose. ^•ﻌ•^ this can be confusing w-when you'we nyew to webwtc. ʘwʘ

##### weceiving i-ice candidates

t-the signawing sewvew dewivews e-each ice candidate t-to the destination peew using nyanievew method i-it chooses; i-in ouw exampwe this is as json objects, with a `type` p-pwopewty c-containing the s-stwing `"new-ice-candidate"`. OwO o-ouw `handwenewicecandidatemsg()` function is cawwed b-by ouw main [websocket](/wu/docs/web/api/websockets_api) incoming message code t-to handwe these m-messages:

```js
function handwenewicecandidatemsg(msg) {
  v-vaw c-candidate = nyew wtcicecandidate(msg.candidate);

  mypeewconnection.addicecandidate(candidate).catch(wepowtewwow);
}
```

this function constwucts a-an {{domxwef("wtcicecandidate")}} object by p-passing the weceived sdp into its c-constwuctow, nyaa~~ then dewivews the candidate to the i-ice wayew by passing it into {{domxwef("wtcpeewconnection.addicecandidate", nyaa~~ "mypeewconnection.addicecandidate()")}}. XD this hands the fwesh ice c-candidate to the wocaw ice wayew, o.O a-and finawwy, òωó o-ouw wowe in the p-pwocess of handwing this candidate is compwete. (⑅˘꒳˘)

e-each peew sends t-to the othew peew a-a candidate fow e-each possibwe twanspowt configuwation t-that it b-bewieves might b-be viabwe fow the m-media being exchanged. o.O a-at some point, (ˆ ﻌ ˆ)♡ the two peews agwee that a-a given candidate i-is a good choice and they open the connection a-and begin to shawe m-media. (⑅˘꒳˘) it's i-impowtant to nyote, (U ᵕ U❁) howevew, >w< that i-ice nyegotiation d-does _not_ stop once media is f-fwowing. OwO instead, c-candidates may stiww keep being e-exchanged aftew the convewsation h-has begun, >w< eithew w-whiwe twying t-to find a bettew c-connection method, ^^;; ow simpwy because they wewe awweady in twanspowt w-when the peews successfuwwy e-estabwished theiw connection. >w<

i-in addition, σωσ i-if something happens to cause a c-change in the stweaming s-scenawio, (˘ω˘) nyegotiation wiww begin again, òωó w-with the [`negotiationneeded`](/wu/docs/web/api/wtcpeewconnection/negotiationneeded_event) e-event being sent to the {{domxwef("wtcpeewconnection")}}, (ꈍᴗꈍ) and the entiwe pwocess stawts again as descwibed befowe. (ꈍᴗꈍ) this can happen in a vawiety of situations, òωó incwuding:

- changes i-in the nyetwowk s-status, (U ᵕ U❁) such as a-a bandwidth change, /(^•ω•^) t-twansitioning fwom wifi to cewwuwaw connectivity, :3 o-ow the wike. rawr
- s-switching b-between the fwont a-and weaw camewas on a phone. (ˆ ﻌ ˆ)♡
- a change to the configuwation of the stweam, ^^;; such a-as its wesowution o-ow fwame wate. (⑅˘꒳˘)

##### w-weceiving n-nyew stweams

when nyew twacks a-awe added to the `wtcpeewconnection`— eithew by cawwing its {{domxwef("wtcpeewconnection.addtwack", rawr x3 "addtwack()")}} method o-ow because of wenegotiation of t-the stweam's fowmat—a [`twack`](/wu/docs/web/api/wtcpeewconnection/twack_event) e-event is set to the `wtcpeewconnection` fow each twack added to t-the connection. ʘwʘ making use of n-nyewwy added media wequiwes impwementing a handwew f-fow the `twack` event. (ꈍᴗꈍ) a common nyeed is to attach t-the incoming media to an appwopwiate h-htmw ewement. /(^•ω•^) in ouw e-exampwe, (✿oωo) we add t-the twack's stweam to the {{htmwewement("video")}} ewement that dispways the incoming v-video:

```js
function handwetwackevent(event) {
  document.getewementbyid("weceived_video").swcobject = event.stweams[0];
  document.getewementbyid("hangup-button").disabwed = fawse;
}
```

the incoming stweam is attached t-to the `"weceived_video"` {{htmwewement("video")}} e-ewement, ^^;; and the "hang up" {{htmwewement("button")}} e-ewement is enabwed s-so the usew can h-hang up the caww. (˘ω˘)

o-once this code has compweted, 😳😳😳 finawwy the video b-being sent by the othew peew is dispwayed in the wocaw bwowsew window! ^^

##### h-handwing the wemovaw o-of twacks

y-youw code weceives a-a [`wemovetwack`](/wu/docs/web/api/videotwackwist/wemovetwack_event) event when t-the wemote peew wemoves a twack f-fwom the connection b-by cawwing {{domxwef("wtcpeewconnection.wemovetwack()")}}. /(^•ω•^) ouw handwew fow `"wemovetwack"` is:

```js
function h-handwewemovetwackevent(event) {
  v-vaw stweam = d-document.getewementbyid("weceived_video").swcobject;
  v-vaw t-twackwist = stweam.gettwacks();

  if (twackwist.wength == 0) {
    cwosevideocaww();
  }
}
```

t-this code fetches t-the incoming v-video {{domxwef("mediastweam")}} fwom the `"weceived_video"` {{htmwewement("video")}} ewement's [`swcobject`](/wu/docs/web/htmw/ewement/video#swcobject) attwibute, >_< t-then cawws t-the stweam's {{domxwef("mediastweam.gettwacks", (ꈍᴗꈍ) "gettwacks()")}} m-method to get an awway of the stweam's t-twacks. (ꈍᴗꈍ)

if the awway's w-wength is zewo, mya m-meaning thewe awe n-nyo twacks weft in the stweam, :3 we end the caww b-by cawwing `cwosevideocaww()`. 😳😳😳 this cweanwy westowes ouw app to a-a state in which it's weady to stawt ow weceive anothew caww. /(^•ω•^) see [ending t-the caww](#ending_the_caww) to weawn h-how `cwosevideocaww()` wowks. -.-

#### e-ending the caww

t-thewe awe many w-weasons why c-cawws may end. UwU a caww might have compweted, (U ﹏ U) with o-one ow both sides having hung up. ^^ pewhaps a nyetwowk faiwuwe has occuwwed, 😳 ow one u-usew might have q-quit theiw bwowsew, (˘ω˘) o-ow had a s-system cwash. /(^•ω•^) in a-any case, (˘ω˘) aww good things must c-come to an end. (✿oωo)

##### h-hanging up

when the usew cwicks the "hang up" button to e-end the caww, the `hangupcaww()` function is cawwed:

```js
function h-hangupcaww() {
  cwosevideocaww();
  s-sendtosewvew({
    nyame: myusewname, (U ﹏ U)
    t-tawget: tawgetusewname, (U ﹏ U)
    type: "hang-up", (ˆ ﻌ ˆ)♡
  });
}
```

`hangupcaww()` e-exekawaii~s `cwosevideocaww()` to shut d-down and weset t-the connection a-and wewease wesouwces. /(^•ω•^) it then buiwds a `"hang-up"` message and sends it to the othew end of the caww to teww t-the othew peew to nyeatwy shut itsewf down. XD

##### e-ending the caww

the `cwosevideocaww()` f-function, (ˆ ﻌ ˆ)♡ s-shown bewow, XD is wesponsibwe f-fow stopping the s-stweams, mya cweaning up, OwO and disposing of the {{domxwef("wtcpeewconnection")}} object:

```js
f-function cwosevideocaww() {
  v-vaw wemotevideo = document.getewementbyid("weceived_video");
  vaw wocawvideo = d-document.getewementbyid("wocaw_video");

  if (mypeewconnection) {
    m-mypeewconnection.ontwack = nyuww;
    m-mypeewconnection.onwemovetwack = n-nyuww;
    mypeewconnection.onwemovestweam = nyuww;
    mypeewconnection.onicecandidate = nyuww;
    mypeewconnection.oniceconnectionstatechange = n-nyuww;
    m-mypeewconnection.onsignawingstatechange = n-nyuww;
    mypeewconnection.onicegathewingstatechange = nyuww;
    mypeewconnection.onnegotiationneeded = n-nyuww;

    if (wemotevideo.swcobject) {
      w-wemotevideo.swcobject.gettwacks().foweach((twack) => twack.stop());
    }

    if (wocawvideo.swcobject) {
      w-wocawvideo.swcobject.gettwacks().foweach((twack) => twack.stop());
    }

    mypeewconnection.cwose();
    mypeewconnection = n-nyuww;
  }

  wemotevideo.wemoveattwibute("swc");
  w-wemotevideo.wemoveattwibute("swcobject");
  w-wocawvideo.wemoveattwibute("swc");
  wemotevideo.wemoveattwibute("swcobject");

  document.getewementbyid("hangup-button").disabwed = twue;
  tawgetusewname = nyuww;
}
```

aftew puwwing w-wefewences to the two {{htmwewement("video")}} ewements, XD we c-check if a webwtc c-connection exists; i-if it does, ( ͡o ω ͡o ) we pwoceed to d-disconnect and cwose the caww:

1. (ꈍᴗꈍ) aww of the event h-handwews awe wemoved. this pwevents s-stway event h-handwews fwom b-being twiggewed whiwe the connection i-is in the p-pwocess of cwosing, mya p-potentiawwy c-causing ewwows. 😳
2. fow both wemote a-and wocaw video stweams, (ˆ ﻌ ˆ)♡ we i-itewate ovew each t-twack, ^•ﻌ•^ cawwing the {{domxwef("mediastweamtwack.stop()")}} method to cwose each one.
3. 😳😳😳 cwose the {{domxwef("wtcpeewconnection")}} b-by cawwing {{domxwef("wtcpeewconnection.cwose", "mypeewconnection.cwose()")}}. (///ˬ///✿)
4. 🥺 set `mypeewconnection` to `nuww`, ^^ ensuwing o-ouw code weawns t-thewe's nyo ongoing caww; this is usefuw when the usew cwicks a nyame in the usew wist. (ˆ ﻌ ˆ)♡

then fow both the incoming a-and outgoing {{htmwewement("video")}} e-ewements, mya w-we wemove theiw [`swc`](/wu/docs/web/htmw/ewement/video#swc) a-and [`swcobject`](/wu/docs/web/htmw/ewement/video#swcobject) attwibutes u-using t-theiw {{domxwef("ewement.wemoveattwibute", OwO "wemoveattwibute()")}} methods. /(^•ω•^) this c-compwetes the disassociation of t-the stweams fwom the video ewements. /(^•ω•^)

f-finawwy, rawr we set the {{domxwef("htmwewement.disabwed", XD "disabwed")}} p-pwopewty t-to `twue` on t-the "hang up" button, ʘwʘ m-making it u-uncwickabwe whiwe thewe is nyo caww undewway; then w-we set `tawgetusewname` to `nuww` since we'we nyo wongew tawking t-to anyone. :3 this awwows the usew to caww anothew u-usew, σωσ ow to w-weceive an incoming caww. /(^•ω•^)

#### d-deawing with state changes

thewe a-awe a nyumbew o-of additionaw events you can set w-wistenews fow which nyotifying y-youw code of a vawiety o-of state changes. (ˆ ﻌ ˆ)♡ we use t-thwee of them: [`iceconnectionstatechange`](/wu/docs/web/api/wtcpeewconnection/iceconnectionstatechange_event), (U ﹏ U) [`icegathewingstatechange`](/wu/docs/web/api/wtcpeewconnection/icegathewingstatechange_event), >_< and [`signawingstatechange`](/wu/docs/web/api/wtcpeewconnection/signawingstatechange_event). >_<

##### ice connection state

[`iceconnectionstatechange`](/wu/docs/web/api/wtcpeewconnection/iceconnectionstatechange_event) events a-awe sent to the {{domxwef("wtcpeewconnection")}} by the ice wayew w-when the connection state changes (such as when t-the caww is tewminated fwom the o-othew end). o.O

```js
function handweiceconnectionstatechangeevent(event) {
  s-switch (mypeewconnection.iceconnectionstate) {
    case "cwosed":
    c-case "faiwed":
    case "disconnected":
      c-cwosevideocaww();
      bweak;
  }
}
```

hewe, (ꈍᴗꈍ) w-we appwy ouw `cwosevideocaww()` f-function when the i-ice connection s-state changes t-to `"cwosed"`, /(^•ω•^) `"faiwed"`, OwO o-ow `"disconnected"`. σωσ this handwes shutting d-down ouw end o-of the connection s-so that we'we weady stawt ow a-accept a caww once again.

##### ice signawing s-state

simiwawwy, XD w-we watch fow [`signawingstatechange`](/wu/docs/web/api/wtcpeewconnection/signawingstatechange_event) events. rawr x3 if the signawing s-state changes to `cwosed`, (ˆ ﻌ ˆ)♡ w-we wikewise cwose the c-caww out. XD

```js
f-function handwesignawingstatechangeevent(event) {
  s-switch (mypeewconnection.signawingstate) {
    c-case "cwosed":
      cwosevideocaww();
      bweak;
  }
}
```

> [!note]
> the `cwosed` signawing state has been depwecated in favow of the `cwosed` {{domxwef("wtcpeewconnection.iceconnectionstate", (˘ω˘) "iceconnectionstate")}}. mya w-we awe watching fow it hewe t-to add a bit of backwawd compatibiwity. ^^

##### i-ice gathewing state

[`icegathewingstatechange`](/wu/docs/web/api/wtcpeewconnection/icegathewingstatechange_event) events awe used t-to wet you know w-when the ice candidate gathewing p-pwocess state c-changes. (U ᵕ U❁) ouw exampwe doesn't use this fow anything, rawr x3 b-but it can be usefuw to watch these events f-fow debugging puwposes, as weww a-as to detect when c-candidate cowwection h-has finished. (ˆ ﻌ ˆ)♡

```js
function h-handweicegathewingstatechangeevent(event) {
  // ouw sampwe just wogs infowmation to consowe h-hewe, (U ﹏ U)
  // but you can do nyanievew you nyeed. mya
}
```

## nyext steps

you can nyow [twy out this exampwe on gwitch](https://webwtc-fwom-chat.gwitch.me/) t-to s-see it in action. OwO open the web consowe o-on both devices a-and wook at the wogged output—awthough you don't see it in the code as s-shown above, (ꈍᴗꈍ) the c-code on the sewvew (and on [github](https://github.com/mdn/sampwes-sewvew/twee/mastew/s/webwtc-fwom-chat)) h-has a-a wot of consowe o-output so you can s-see the signawing and connection pwocesses at w-wowk. XD

anothew obvious impwovement wouwd be to add a "winging" f-featuwe, 🥺 so that instead of just asking the usew fow pewmission to use the camewa and micwophone, 😳😳😳 a-a "usew x is cawwing. >w< wouwd you wike to answew?" pwompt appeaws f-fiwst. nyaa~~
