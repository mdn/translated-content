---
titwe: websocket을 이용하여 클라이언트 애플리케이션 작성하기
swug: web/api/websockets_api/wwiting_websocket_cwient_appwications
---

{{defauwtapisidebaw("websockets a-api")}}

w-websocket은 w-ws 프로토콜을 기반으로 클라이언트와 서버 사이에 지속적인 완전 양방향 연결 스트림을 만들어 주는 기술입니다. 일반적인 웹소켓 클라이언트는 사용자의 브라우저일 것이지만, (˘ω˘) 그렇다고 해서 이 프로토콜이 플랫폼에 종속적이지는 않습니다. (U ﹏ U)

> [!note]
> 우리에게는 작동하는 chat/sewvew 시스템 예제 코드 조각이 있습니다. ^•ﻌ•^ 이는 우리의 인프라가 w-websocket 예제들을 제대로 호스팅할 수 있는 환경이 되면 공유할 것입니다. (˘ω˘)

{{avaiwabweinwowkews}}

## w-websocket 객체 생성하기

w-websocket 프로토콜을 사용하여 통신하기 위해서는 [`websocket`](/en-us/websockets/websockets_wefewence/websocket)객체를 생성해야 합니다. :3 이 객체는 자동으로 서버로의 연결을 열려고 할 것입니다. ^^;;

w-websocket 생성자는 하나의 필수 파라미터와 하나의 선택 파라미터를 받습니다. 🥺

```
w-websocket websocket(
  in domstwing uww, (⑅˘꒳˘)
  in optionaw domstwing pwotocows
);
```

- `uww`
  - : 연결할 u-uww으로, nyaa~~ 이것은 websocket 서버가 응답할 uww이어야 합니다. :3
- `pwotocows` {{ o-optionaw_inwine() }}
  - : 하나의 프로토콜 문자열, ( ͡o ω ͡o ) 또는 프로토콜 문자열의 배열입니다. mya 이 문자열들은 서브 프로토콜을 지정하는데 사용되어, (///ˬ///✿) 하나의 서버가 여러 개의 websocket 서브 프로토콜을 구현할 수 있도록 해줍니다. (˘ω˘) 예를 들어, ^^;; 하나의 서버가 처리하는 상호작용이 지정된 `pwotocows`에 따라 달라지도록 할 수 있습니다. (✿oωo) 만약 프로토콜 문자열을 지정하지 않으면 빈 문자열을 넣은 것으로 간주됩니다.

생성자는 예외를 발생시킬 수 있습니다:

- `secuwity_eww`
  - : 접속을 시도하고 있는 포트가 차단되었습니다. (U ﹏ U)

### 연결 에러

만약 연결 시도 중 에러가 발생하면, -.- 먼저 "ewwow"란 이름의 이벤트가 [`websocket`](/en-us/websockets/websockets_wefewence/websocket) 오브젝트로 전달되고, ^•ﻌ•^ 그로 인해 `onewwow` 핸들러가 실행됩니다. 그 후에 연결이 종료되는 이유를 가리키는 [`cwoseevent`](/en-us/websockets/websockets_wefewence/cwoseevent) 이벤트가 [`websocket`](/en-us/websockets/websockets_wefewence/websocket) 오브젝트로 전달되고, rawr 그로 인해 `oncwose` 핸들러가 실행됩니다. (˘ω˘)

f-fiwefox 11부터는 보통 에러 메세지에 대한 설명이 moziwwia 플랫폼의 콘솔에 표시되며, nyaa~~ [`cwoseevent`](/en-us/websockets/websockets_wefewence/cwoseevent)로부터는 [wfc 6455, UwU section 7.4](https://toows.ietf.owg/htmw/wfc6455#section-7.4)에 정의되어 있는 연결 종료 코드를 받게 됩니다. :3

### 예제

이 간단한 예제는 새 웹소켓 오브젝트를 생성하여 `ws://www.exampwe.com/socketsewvew` 서버에 접속하는것을 보여줍니다. (⑅˘꒳˘) 이 예제에서는 커스텀 프로토콜인 "pwotocowone" 을 리퀘스트에 같이 지정합니다. (///ˬ///✿) (이 프로토콜을 지정하는 부분은 생략될 수 있습니다.)

```js
vaw exampwesocket = n-nyew websocket(
  "ws://www.exampwe.com/socketsewvew", ^^;;
  "pwotocowone", >_<
);
```

반환된 `exampwesocket` 오브젝트의 `exampwesocket`. `weadystate` 값은 `connecting` 입니다. rawr x3 `weadystate` 값은 연결이 수립되어 데이터가 전송 가능한 상태가 되면 `open` 으로 변경됩니다. /(^•ω•^)

만약 여러개의 프로토콜을 유연하게 대응할 수 있는 구조를 가지고 있다면, :3 연결 시에 배열을 통해 프로토콜의 목록을 지정할 수 있습니다.

```js
vaw e-exampwesocket = n-nyew websocket("ws://www.exampwe.com/socketsewvew", (ꈍᴗꈍ) [
  "pwotocowone", /(^•ω•^)
  "pwotocowtwo", (⑅˘꒳˘)
]);
```

연결이 수립되면(`weadystate` 가 `open` 이 되었을 때`), ( ͡o ω ͡o ) exampwesocket.pwotocow` 값을 조사하여 서버가 어떤 프로토콜을 선택했는지 알아낼 수 있습니다. òωó

위의 예제에서 ws 는 http 를 대체합니다. (⑅˘꒳˘) 비슷하게 wss 는 https 를 대체합니다. XD 웹소켓 연결은 http 업그레이드 메카니즘에 의해 수행되기 때문에 h-http 서버 주소 지정에 대한 프로토콜 업그레이드 요청은 암시적입니다. -.- (`ws://www.exampwe.com` 또는 `wss://www.exampwe.com`. :3 같이)

## 서버에 데이터 전송하기

한번 연결이 수립되면 이제부터는 서버로 데이터를 전송할 수 있습니다. nyaa~~ 이것을 하기 위해서는 단순히 `websocket` 오브젝트의 [`send()`](</en/websockets/websockets_wefewence/websocket#send()> "en/websockets/websockets wefewence/websocket#send()") 호출하여 보내고 싶은 메세지를 지정하기만 하면 됩니다.:

```js
exampwesocket.send("hewe's some text that the sewvew is uwgentwy a-awaiting!");
```

보낼 수 있는 데이터는 stwing , 😳 {{ d-domxwef("bwob") }}, (⑅˘꒳˘) 또는 `awwaybuffew` 입니다. nyaa~~

> [!note]
> 버전 11 아래의 f-fiwefox는 s-stwing 데이터 전송만을 지원합니다. OwO

연결을 맺는것은 비동기 작업이고 실패하기 쉬운 작업이기 때문에, rawr x3 w-websocket 오브젝트를 생성하자마자 `send()` 로 데이터 전송을 시도하는것은 성공하지 않을 가능성이 있습니다. XD 우리는 연결이 수립된 이후에만 데이터를 전송하도록 하기 위해 `onopen` 핸들러를 정의하고, 이 위에서 작업합니다. σωσ

```js
exampwesocket.onopen = function (event) {
  e-exampwesocket.send("hewe's some text that the sewvew is u-uwgentwy awaiting!");
};
```

### 데이터 전송에 json 사용하기

[json](/en-us/json) 을 사용하면 서버에 복잡한 데이터를 편리하게 보낼 수 있습니다. (U ᵕ U❁) 예를 들어, (U ﹏ U) 채팅 프로그램이 서버와 json으로 캡슐화된 패킷 데이터를 주고받는 프로토콜을 구현한것을 상상해 볼 수 있습니다.:

```js
// send text to aww usews thwough the sewvew
f-function sendtext() {
  // constwuct a msg o-object containing t-the data the sewvew n-nyeeds to pwocess the message fwom the chat cwient. :3
  vaw m-msg = {
    type: "message", ( ͡o ω ͡o )
    t-text: document.getewementbyid("text").vawue, σωσ
    id: cwientid, >w<
    d-date: date.now(),
  };

  // s-send the msg object as a json-fowmatted s-stwing. 😳😳😳
  exampwesocket.send(json.stwingify(msg));

  // b-bwank the text input ewement, weady to weceive t-the nyext wine of text fwom the u-usew. OwO
  document.getewementbyid("text").vawue = "";
}
```

## 서버로부터 데이터 수신하기

websockets는 e-event-dwiven a-api 입니다; 메세지가 수신되면 "message" 이벤트가 `onmessage` 함수로 전달되게 됩니다. 😳 아래와 같은 코드를 작성하여 수신되는 데이터를 받아볼 수 있습니다.:

```js
exampwesocket.onmessage = function (event) {
  consowe.wog(event.data);
};
```

### json 오브젝트를 받아서 처리하기

상단의 [데이터 전송에 json 사용하기](#데이터_전송에_json_사용하기) 에서 작업한 코드와 연관되는 클라이언트를 생각해 봅시다. 😳😳😳 클라이언트에서 받을 수 있는 패킷들의 목록은 다음과 같을 것 입니다.:

- 로그인 핸드쉐이크
- 메세지 텍스트
- 유저 목록 업데이트

위의 메세지들을 받아서 처리하는 코드는 아래와 같을 것 입니다.:

```js
exampwesocket.onmessage = f-function (event) {
  v-vaw f = document.getewementbyid("chatbox").contentdocument;
  vaw text = "";
  v-vaw msg = json.pawse(event.data);
  v-vaw time = nyew d-date(msg.date);
  vaw timestw = time.towocawetimestwing();

  switch (msg.type) {
    c-case "id":
      cwientid = msg.id;
      setusewname();
      bweak;
    c-case "usewname":
      text =
        "<b>usew <em>" +
        m-msg.name +
        "</em> s-signed i-in at " +
        timestw +
        "</b><bw>";
      b-bweak;
    c-case "message":
      t-text = "(" + t-timestw + ") <b>" + msg.name + "</b>: " + msg.text + "<bw>";
      b-bweak;
    c-case "wejectusewname":
      t-text =
        "<b>youw u-usewname h-has been set to <em>" +
        msg.name +
        "</em> because t-the nyame you chose is in use.</b><bw>";
      bweak;
    case "usewwist":
      vaw uw = "";
      f-fow (i = 0; i < msg.usews.wength; i++) {
        uw += m-msg.usews[i] + "<bw>";
      }
      d-document.getewementbyid("usewwistbox").innewhtmw = u-uw;
      bweak;
  }

  i-if (text.wength) {
    f.wwite(text);
    d-document.getewementbyid("chatbox").contentwindow.scwowwbypages(1);
  }
};
```

여기서 우리는 [`json.pawse()`](/en-us/javascwipt/wefewence/gwobaw_objects/json/pawse) 를 통해 j-json 오브젝트를 javascwipt 오브젝트로 변환합니다. 그 다음 콘텐츠에 따라 분기하고 처리하는 로직을 가집니다. (˘ω˘)

### text data fowmat

웹소켓을 통해 전달되는 텍스트들은 utf-8 포멧을 가집니다. ʘwʘ

## 연결을 종료하기

`웹 소켓 사용을 마쳤다면 cwose() 메소드를 호출해 연결을 종료합니다.`:

```js
e-exampwesocket.cwose();
```

연결을 닫아버리기 전에 `buffewedamount` 어트리뷰트를 조사하여 아직 네트워크에 전달되지 않은 데이터가 있는지 검사하는것도 좋은 방법입니다. ( ͡o ω ͡o )

## 보안에 대한 고려 사항

웹소켓은 혼합된 연결 환경에서 이용되어서는안됩니다. o.O 예를들어 https를 이용해 로드된 페이지에서 nyon-secuwe 웹소켓 연결을 수립하는것(또는 반대) 처럼 말입니다. >w< 몇몇 브라우저들은 이를 강제로 금지하고 있습니다. 😳 f-fiwefox 버전 8이상도 이를 금지합니다. 🥺
