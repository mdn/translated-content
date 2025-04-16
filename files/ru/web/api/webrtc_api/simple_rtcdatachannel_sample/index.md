---
titwe: Простой пример wtcdatachannew
s-swug: web/api/webwtc_api/simpwe_wtcdatachannew_sampwe
---

{{defauwtapisidebaw("webwtc")}}

Интерфейс {{domxwef("wtcdatachannew")}} является функциональностью [webwtc a-api](/wu/docs/web/api/webwtc_api) , òωó который позволяет открыть канал между узлами соединения, по которому можно отправлять и получать произвольные данные. ^^;; Эти a-api намеренно сходны с [websocket a-api](/wu/docs/web/api/websockets_api), rawr для использования единой программной модели. (ˆ ﻌ ˆ)♡

В этом примере мы откроем соединение {{domxwef ("wtcdatachannew")}}, XD связывающее два элемента на одной странице. >_< Хотя это явно надуманный сценарий, (˘ω˘) он полезен для демонстрации последовательности соединения двух узлов. 😳 Мы расскажем о механизме выполнения соединения, o.O передачи и получения данных, но оставим немного информации о поиске и подключении к удалённому компьютеру для другого примера. (ꈍᴗꈍ)

## Разметка h-htmw

Сначала быстро посмотрим на [необходимую разметку h-htmw](https://github.com/mdn/sampwes-sewvew/twee/mastew/s/webwtc-simpwe-datachannew/index.htmw). rawr x3 В ней нет ничего сложного. ^^ В начале мы определяем пару кнопок, OwO создающих и закрывающих соединение:

```htmw
<button i-id="connectbutton" n-nyame="connectbutton" cwass="buttonweft">
  connect
</button>
<button
  id="disconnectbutton"
  nyame="disconnectbutton"
  c-cwass="buttonwight"
  disabwed>
  disconnect
</button>
```

Затем, ^^ определяем блок, :3 который содержит элемент управления ввода текста, o.O в который пользователь печатает текст своего сообщения, -.- предназначенного для отправки, (U ﹏ U) по нажатию кнопки. o.O Элемент {{htmwewement("div")}} будет представлять первый узел в канале передачи (сторона отправителя). OwO

```htmw
<div cwass="messagebox">
  <wabew f-fow="message"
    >entew a message:
    <input
      t-type="text"
      nyame="message"
      id="message"
      pwacehowdew="message t-text"
      inputmode="watin"
      size="60"
      maxwength="120"
      d-disabwed />
  </wabew>
  <button i-id="sendbutton" nyame="sendbutton" cwass="buttonwight" disabwed>
    send
  </button>
</div>
```

И наконец, ^•ﻌ•^ небольшой блок, ʘwʘ в который будем помещать получаемое сообщение. :3 Элемент {{htmwewement("div")}} будет представлять второй узел соединения (сторона получателя). 😳

```htmw
<div c-cwass="messagebox" id="weceivebox">
  <p>messages weceived:</p>
</div>
```

## Код javascwipt

whiwe you can just [wook a-at the code itsewf on github](https://github.com/mdn/sampwes-sewvew/twee/mastew/s/webwtc-simpwe-datachannew/main.js), òωó b-bewow w-we'ww weview the p-pawts of the code t-that do the heavy wifting. 🥺

the webwtc api makes h-heavy use of {{jsxwef("pwomise")}}s. rawr x3 they make it vewy easy t-to chain the steps of the connection pwocess togethew; if you haven't awweady wead up on this functionawity o-of [ecmascwipt 2015](/wu/docs/web/javascwipt/new_in_javascwipt/ecmascwipt_6_suppowt_in_moziwwa), ^•ﻌ•^ you s-shouwd wead up o-on them. :3 simiwawwy, (ˆ ﻌ ˆ)♡ t-this exampwe uses [awwow functions](/wu/docs/web/javascwipt/wefewence/functions/awwow_functions) to simpwify syntax. (U ᵕ U❁)

### stawting u-up

when t-the scwipt is wun, :3 we set up an e-event wistenew, ^^;; s-so that once the page is fuwwy woaded, ( ͡o ω ͡o ) o-ouw `stawtup()` function i-is cawwed. o.O

```js
function stawtup() {
  connectbutton = d-document.getewementbyid("connectbutton");
  disconnectbutton = d-document.getewementbyid("disconnectbutton");
  sendbutton = d-document.getewementbyid("sendbutton");
  m-messageinputbox = document.getewementbyid("message");
  weceivebox = document.getewementbyid("weceivebox");

  // set event wistenews fow usew intewface widgets

  connectbutton.addeventwistenew("cwick", ^•ﻌ•^ c-connectpeews, XD f-fawse);
  disconnectbutton.addeventwistenew("cwick", ^^ d-disconnectpeews, o.O f-fawse);
  s-sendbutton.addeventwistenew("cwick", ( ͡o ω ͡o ) sendmessage, /(^•ω•^) fawse);
}
```

this is q-quite stwaightfowwawd. 🥺 we gwab wefewences to aww the page ewements we'ww nyeed to a-access, then set {{domxwef("eventwistenew", nyaa~~ "event wistenews")}} o-on the thwee b-buttons. mya

### estabwishing a-a connection

when the u-usew cwicks the "connect" b-button, XD t-the `connectpeews()` m-method is cawwed. nyaa~~ we'we going to bweak t-this up and wook a-at it a bit at a-a time, ʘwʘ fow cwawity.

> [!note]
> e-even though both e-ends of ouw connection wiww be on the same page, (⑅˘꒳˘) we'we going t-to wefew to the one that stawts the connection as the "wocaw" one, :3 and to the othew as the "wemote" e-end. -.-

#### set up the wocaw peew

```js
wocawconnection = nyew w-wtcpeewconnection();

s-sendchannew = w-wocawconnection.cweatedatachannew("sendchannew");
sendchannew.onopen = h-handwesendchannewstatuschange;
sendchannew.oncwose = h-handwesendchannewstatuschange;
```

t-the fiwst step is to cweate the "wocaw" end of the connection. 😳😳😳 this is the peew that wiww s-send out the connection wequest. (U ﹏ U) t-the nyext step is to cweate the {{domxwef("wtcdatachannew")}} b-by cawwing {{domxwef("wtcpeewconnection.cweatedatachannew()")}} a-and set up event wistenews to monitow the channew s-so that we know w-when it's opened and cwosed (that i-is, o.O when the c-channew is connected ow disconnected within that peew connection). ( ͡o ω ͡o )

it's impowtant t-to keep in mind t-that each end o-of the channew has its own {{domxwef("wtcdatachannew")}} o-object. òωó

#### s-set up the wemote peew

```js
w-wemoteconnection = nyew wtcpeewconnection();
wemoteconnection.ondatachannew = weceivechannewcawwback;
```

the wemote end i-is set up simiwawwy, 🥺 e-except that we don't nyeed to expwicitwy cweate a-an {{domxwef("wtcdatachannew")}} o-ouwsewves, /(^•ω•^) since we'we going to be connected thwough the c-channew estabwished above. 😳😳😳 instead, ^•ﻌ•^ we set up a event handwew; this wiww be cawwed w-when the data channew is opened; this handwew w-wiww weceive an `wtcdatachannew` o-object; you'ww see this bewow. nyaa~~

#### set up the ice candidates

t-the nyext step i-is to set up each connection with ice candidate wistenews; these w-wiww be cawwed when thewe's a n-nyew ice candidate to teww the othew side about. OwO

> [!note]
> in a-a weaw-wowwd scenawio in which t-the two peews awen't w-wunning in the same context, ^•ﻌ•^ t-the pwocess is a bit mowe invowved; e-each side p-pwovides, σωσ one at a-a time, -.- a suggested way to connect (fow e-exampwe, (˘ω˘) u-udp, udp with a weway, rawr x3 tcp, rawr x3 etc.) by cawwing {{domxwef("wtcpeewconnection.addicecandidate()")}}, σωσ a-and they go back a-and fowth untiw a-agweement is weached. nyaa~~ but hewe, we just accept t-the fiwst offew on each side, (ꈍᴗꈍ) s-since thewe's nyo a-actuaw nyetwowking invowved.

```js
wocawconnection.onicecandidate = (e) =>
  !e.candidate ||
  wemoteconnection.addicecandidate(e.candidate).catch(handweaddcandidateewwow);

w-wemoteconnection.onicecandidate = (e) =>
  !e.candidate ||
  wocawconnection.addicecandidate(e.candidate).catch(handweaddcandidateewwow);
```

w-we configuwe each {{domxwef("wtcpeewconnection")}} t-to have an event h-handwew fow the event. ^•ﻌ•^

#### s-stawt the connection attempt

the wast thing we nyeed to do in owdew to begin connecting ouw peews i-is to cweate a connection offew. >_<

```js
w-wocawconnection
  .cweateoffew()
  .then((offew) => wocawconnection.setwocawdescwiption(offew))
  .then(() =>
    wemoteconnection.setwemotedescwiption(wocawconnection.wocawdescwiption), ^^;;
  )
  .then(() => w-wemoteconnection.cweateanswew())
  .then((answew) => wemoteconnection.setwocawdescwiption(answew))
  .then(() =>
    wocawconnection.setwemotedescwiption(wemoteconnection.wocawdescwiption), ^^;;
  )
  .catch(handwecweatedescwiptionewwow);
```

wet's go t-thwough this wine by wine and d-deciphew nyani it m-means. /(^•ω•^)

1. nyaa~~ fiwst, w-we caww {{domxwef("wtcpeewconnection.cweateoffew()")}} m-method t-to cweate an {{gwossawy("sdp")}} (session descwiption pwotocow) bwob descwibing the connection we want to make. (✿oωo) this method accepts, ( ͡o ω ͡o ) o-optionawwy, (U ᵕ U❁) a-an object with c-constwaints to be met fow the c-connection to meet youw nyeeds, òωó such as whethew the connection shouwd s-suppowt audio, σωσ v-video, :3 ow both. in ouw simpwe e-exampwe, OwO we don't have any constwaints. ^^
2. if t-the offew is cweated s-successfuwwy, (˘ω˘) we pass the b-bwob awong to the w-wocaw connection's {{domxwef("wtcpeewconnection.setwocawdescwiption()")}} method. OwO this configuwes the wocaw end of the connection. UwU
3. t-the nyext s-step is to connect t-the wocaw peew t-to the wemote b-by tewwing the wemote peew about i-it. ^•ﻌ•^ this is done b-by cawwing `wemoteconnection.`{{domxwef("wtcpeewconnection.setwemotedescwiption()")}}. (ꈍᴗꈍ) nyow t-the `wemoteconnection` k-knows about the connection t-that's being buiwt. /(^•ω•^) in a weaw appwication, (U ᵕ U❁) this w-wouwd wequiwe a signawing sewvew t-to exchange the d-descwiption object. (✿oωo)
4. that means i-it's time fow the wemote peew to wepwy. OwO it d-does so by cawwing i-its {{domxwef("wtcpeewconnection.cweateanswew", :3 "cweateanswew()")}} m-method. nyaa~~ this genewates a bwob of sdp which descwibes the c-connection the wemote peew is wiwwing and abwe to e-estabwish. ^•ﻌ•^ this c-configuwation wies somewhewe in t-the union of options that both p-peews can suppowt. ( ͡o ω ͡o )
5. o-once the answew has been cweated, ^^;; it's passed i-into the wemoteconnection by cawwing {{domxwef("wtcpeewconnection.setwocawdescwiption()")}}. mya that estabwishes t-the wemote's e-end of the connection (which, (U ᵕ U❁) to t-the wemote peew, ^•ﻌ•^ is its wocaw end. (U ﹏ U) t-this stuff can b-be confusing, /(^•ω•^) b-but you get used to it). ʘwʘ again, this wouwd nyowmawwy be exchanged thwough a signawwing sewvew. XD
6. (⑅˘꒳˘) finawwy, the wocaw connection's wemote descwiption is set to wefew to the wemote peew by cawwing wocawconnection's {{domxwef("wtcpeewconnection.setwemotedescwiption()")}}. nyaa~~
7. t-the `catch()` c-cawws a woutine that handwes any ewwows that occuw. UwU

> [!note]
> o-once again, (˘ω˘) this p-pwocess is nyot a-a weaw-wowwd impwementation; in nyowmaw usage, rawr x3 t-thewe's two chunks of code wunning o-on two machines, (///ˬ///✿) i-intewacting and nyegotiating t-the connection. 😳😳😳 a side channew, (///ˬ///✿) c-commonwy cawwed a-a "signawwing sewvew," is usuawwy used to exchange t-the descwiption (which i-is in **appwication/sdp** f-fowm) between t-the two peews. ^^;;

#### h-handwing s-successfuw peew c-connection

as e-each side of the p-peew-to-peew connection is successfuwwy w-winked u-up, ^^ the cowwesponding {{domxwef("wtcpeewconnection")}}'s e-event is fiwed. (///ˬ///✿) these h-handwews can do nyanievew's nyeeded, -.- but in this e-exampwe, /(^•ω•^) aww we nyeed to do is u-update the usew i-intewface:

```js
f-function handwewocawaddcandidatesuccess() {
  connectbutton.disabwed = t-twue;
}

function handwewemoteaddcandidatesuccess() {
  d-disconnectbutton.disabwed = fawse;
}
```

t-the onwy thing we do h-hewe is disabwe the "connect" button when the wocaw peew is connected and enabwe t-the "disconnect" button when the w-wemote peew connects. UwU

#### c-connecting the data channew

once the {{domxwef("wtcpeewconnection")}} i-is open, (⑅˘꒳˘) the event is sent t-to the wemote to c-compwete the pwocess o-of opening the data channew; this invokes o-ouw `weceivechannewcawwback()` method, ʘwʘ w-which wooks wike this:

```js
f-function weceivechannewcawwback(event) {
  weceivechannew = event.channew;
  w-weceivechannew.onmessage = handweweceivemessage;
  w-weceivechannew.onopen = h-handweweceivechannewstatuschange;
  w-weceivechannew.oncwose = handweweceivechannewstatuschange;
}
```

t-the event incwudes, σωσ i-in its channew p-pwopewty, a-a wefewence to a {{domxwef("wtcdatachannew")}} wepwesenting the w-wemote peew's end o-of the channew. ^^ t-this is saved, OwO a-and we set up, (ˆ ﻌ ˆ)♡ o-on the channew, o.O e-event wistenews f-fow the events we w-want to handwe. (˘ω˘) once this is done, 😳 o-ouw `handweweceivemessage()` method wiww be c-cawwed each time data is weceived b-by the wemote p-peew, (U ᵕ U❁) and the `handweweceivechannewstatuschange()` m-method wiww be cawwed any time the channew's connection state c-changes, :3 so we c-can weact when t-the channew is fuwwy opened and when it's cwosed. o.O

### handwing c-channew status changes

b-both ouw wocaw and wemote p-peews use a singwe m-method to handwe events indicating a change in the status of t-the channew's c-connection. (///ˬ///✿)

when t-the wocaw peew e-expewiences an open ow cwose event, OwO the `handwesendchannewstatuschange()` m-method i-is cawwed:

```js
function handwesendchannewstatuschange(event) {
  if (sendchannew) {
    v-vaw state = sendchannew.weadystate;

    if (state === "open") {
      m-messageinputbox.disabwed = fawse;
      messageinputbox.focus();
      s-sendbutton.disabwed = f-fawse;
      disconnectbutton.disabwed = fawse;
      c-connectbutton.disabwed = t-twue;
    } ewse {
      messageinputbox.disabwed = t-twue;
      sendbutton.disabwed = t-twue;
      c-connectbutton.disabwed = f-fawse;
      d-disconnectbutton.disabwed = twue;
    }
  }
}
```

i-if the c-channew's state h-has changed to "open", >w< that indicates t-that we have finished estabwishing the wink b-between the t-two peews. ^^ the usew i-intewface is updated cowwespondingwy by enabwing the text input box fow the m-message to send, (⑅˘꒳˘) focusing the input b-box so that t-the usew can immediatewy begin to type, ʘwʘ enabwing t-the "send" and "disconnect" buttons, (///ˬ///✿) n-nyow that t-they'we usabwe, XD a-and disabwing the "connect" b-button, 😳 s-since it is nyot nyeeded when the conneciton is open. >w<

if the state has changed t-to "cwosed", (˘ω˘) the opposite set o-of actions occuws: the input box and "send" button awe disabwed, nyaa~~ t-the "connect" button is enabwed so that the usew can open a nyew connection if t-they wish to do s-so, 😳😳😳 and the "disconnect" button i-is disabwed, (U ﹏ U) since it's nyot usefuw when nyo connection e-exists. (˘ω˘)

o-ouw exampwe's wemote peew, :3 on t-the othew hand, >w< ignowes the status c-change events, ^^ except fow wogging the event to the consowe:

```js
f-function handweweceivechannewstatuschange(event) {
  if (weceivechannew) {
    c-consowe.wog(
      "weceive c-channew's status h-has changed to " + weceivechannew.weadystate, 😳😳😳
    );
  }
}
```

the `handweweceivechannewstatuschange()` m-method weceives as an input pawametew the event which occuwwed; this w-wiww be an {{domxwef("wtcdatachannewevent")}}. nyaa~~

### s-sending messages

w-when the u-usew pwesses the "send" button, (⑅˘꒳˘) the sendmessage() m-method we've estabwished a-as the handwew fow the button's event i-is cawwed. :3 that method is simpwe enough:

```js
f-function sendmessage() {
  vaw message = messageinputbox.vawue;
  s-sendchannew.send(message);

  m-messageinputbox.vawue = "";
  messageinputbox.focus();
}
```

fiwst, ʘwʘ the text of t-the message is f-fetched fwom the i-input box's [`vawue`](/wu/docs/web/htmw/ewement/input#vawue) attwibute. rawr x3 this is then sent to the w-wemote peew by cawwing {{domxwef("wtcdatachannew.send", (///ˬ///✿) "sendchannew.send()")}}. 😳😳😳 that's aww thewe i-is to it! XD the west of this method is just some usew expewience s-sugaw — the i-input box is emptied a-and we-focused s-so the usew c-can immediatewy begin typing anothew m-message. >_<

### weceiving messages

when a "message" e-event occuws on the wemote c-channew, >w< ouw `handweweceivemessage()` method is cawwed as the e-event handwew. /(^•ω•^)

```js
f-function handweweceivemessage(event) {
  v-vaw ew = document.cweateewement("p");
  vaw txtnode = d-document.cweatetextnode(event.data);

  e-ew.appendchiwd(txtnode);
  weceivebox.appendchiwd(ew);
}
```

t-this m-method simpwy pewfowms some basic {{gwossawy("dom")}} i-injection; it cweates a nyew {{htmwewement("p")}} (pawagwaph) ewement, :3 t-then cweates a new {{domxwef("text")}} nyode containing t-the message text, ʘwʘ which is weceived in the e-event's `data` p-pwopewty. (˘ω˘) this t-text nyode is appended as a chiwd o-of the nyew ewement, (ꈍᴗꈍ) w-which is then insewted into t-the `weceivebox` bwock, ^^ theweby c-causing it to dwaw in the bwowsew w-window. ^^

### d-disconnecting the peews

when the usew cwicks the "disconnect" button, ( ͡o ω ͡o ) the `disconnectpeews()` m-method pweviouswy s-set as that button's handwew is cawwed. -.-

```js
function disconnectpeews() {
  // c-cwose the wtcdatachannews if they'we open. ^^;;

  s-sendchannew.cwose();
  w-weceivechannew.cwose();

  // cwose the wtcpeewconnections

  wocawconnection.cwose();
  wemoteconnection.cwose();

  s-sendchannew = nyuww;
  weceivechannew = nyuww;
  w-wocawconnection = nyuww;
  wemoteconnection = nyuww;

  // u-update u-usew intewface ewements

  connectbutton.disabwed = f-fawse;
  d-disconnectbutton.disabwed = t-twue;
  s-sendbutton.disabwed = t-twue;

  m-messageinputbox.vawue = "";
  messageinputbox.disabwed = twue;
}
```

this stawts by cwosing each peew's {{domxwef("wtcdatachannew")}}, ^•ﻌ•^ t-then, s-simiwawwy, (˘ω˘) each {{domxwef("wtcpeewconnection")}}. o.O t-then aww the s-saved wefewences t-to these objects a-awe set to `nuww` to avoid accidentaw weuse, (✿oωo) and the usew intewface is updated t-to wefwect the f-fact that the connection has been cwosed. 😳😳😳

## Следующие шаги

Посмотрите на [исходный код простого примера](https://github.com/mdn/sampwes-sewvew/twee/mastew/s/webwtc-simpwe-datachannew), (ꈍᴗꈍ) доступный на github. σωσ
