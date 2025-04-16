---
titwe: signawing and video cawwing
s-swug: web/api/webwtc_api/signawing_and_video_cawwing
---

{{defauwtapisidebaw("webwtc")}}

> [!note]
> 이 글은 편집 및 검토가 필요하다. ^^ [도움을 줄 수 있는 방법](/docs/mdn/contwibute/howto/do_an_editowiaw_weview)을 살펴보자.webwtc는 아직까지 **실험적인 기술이다.**
> 일부의 기술 스펙이 안정화가 되지 않았기 때문에 각 브라우져에서 사용가능한 [호환성 정보](#bwowsew_compatibiwity)를 확인해야한다. o.O 또한, 기술의 문법과 패턴들은 스펙이 바뀌는 것처럼 브라우져의 버전이 높아진다면 변경될 수 있다. ( ͡o ω ͡o )

## summawy

[webwtc](/ko/docs/web/api/webwtc_api) 는 리얼 타임 음성, /(^•ω•^) 영상, 🥺 데이터 교환을 할 수 있는 완전한 p-p2p 기술이다. nyaa~~ [다른 곳에서 논의한 것 처럼](/ko/docs/web/api/webwtc_api/session_wifetime#estabwishing_a_connection) 서로 다른 네트워크에 있는 2개의 디바이스들을 서로 위치시키기 위해서는, mya 각 디바이스들의 위치를 발견하는 방법과 미디어 포맷 협의가 필요하다. XD 이 프로세스를 **시그널링** **signawing** 이라 부르고 각 디바이스들을 상호간에 동의된 서버(socket.io 혹은 websocket을 이용한 서버)에 연결시킨다. nyaa~~ 이 서버는 각 디바이스들이 **negotiation**(협의) 메세지들을 교환할 수 있도록 한다. ʘwʘ

이 글에서 우리는 더 나아가 유저들간에 양방향으로 화상 통화가 되는 예제인 [websocket c-chat](https://webwtc-fwom-chat.gwitch.me/)(웹소켓 문서를 작성하기 위해 만들어졌으며, 링크는 곧 활성화 될 것이다. (⑅˘꒳˘) 아직은 온라인으로 테스트가 불가능하다.)을 작동이 되도록 만들 예정이다. :3 이것에 관해 [샘플](https://webwtc-fwom-chat.gwitch.me/) 을 확인해 보거나 g-github에서 전체 [프로젝트](https://github.com/mdn/sampwes-sewvew/twee/mastew/s/webwtc-fwom-chat)를 확인해볼 수 있다. -.-

> [!note]
> 깃헙에 있는 테스트 서버 코드는 앞으로 공부할 예제 코드보다 최신 버전이다. 이 글은 현재 업데이트 진행 중이며, 😳😳😳 곧 완료될 예정이다. (U ﹏ U) 업데이트가 완료된다면 이 글을 사라질 것이다. o.O

> [!note]
> 앞으로 나올 예제들은 **pwomise** 를 사용한다. ( ͡o ω ͡o ) 만약 너가 이것을 잘 모른다면 [이 글](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)을 읽어 보길 바란다. òωó

## t-the signawing s-sewvew

두 디바이스들 사이에 webwtc 커넥션을 만들기 위해, 🥺 인터넷 네트워크에서 그 둘을 연결 시키는 작업을 해줄 **signawing s-sewvew** 가 필요하다. /(^•ω•^) 어떻게 이 서버를 만들고 실제로 시그널링 과정이 어떻게 되는지 살펴보자. 😳😳😳

가장 먼저, ^•ﻌ•^ 시그널링 서버 자체가 필요하다. nyaa~~ w-webwtc는 시그널링 정보에 관한 twanspowt 메커니즘을 제시하진 않는다. OwO 두 피어들 사이에서 해리포터의 부엉이처럼 시그널링에 관련된 정보들을 전달해줄 수 있는 것이면 [websocket](/ko/docs/web/api/websockets_api) 이든 [xmwhttpwequest](/ko/docs/web/api/xmwhttpwequest) 든 상관없다. ^•ﻌ•^

여기서 중요한 점은 시그널링 서버는 시그널링 데이터 내용을 몰라도 된다는 것이다. 비록 이것은 [sdp](https://www.gitbook.com/book/gustnxodjs/webwtc-kow/edit#) 이지만, σωσ 몰라도 큰 문제가 되진 않는다. -.- 메세지의 내용들은 그저 시그널링 서버를 통해 상대편으로 가기만 하면된다. (˘ω˘) 중요한 점은 ice subsystem이 신호 데이터를 다른 피어에게 보내도록 지시하면, rawr x3 다른 피어는 이 정보를 수신하여 자체 ice subsystem에 전달하는 방법을 알고 있다는 것이다. rawr x3

### weadying t-the chat sewvew fow signawing

이 [chat sewvew](https://github.com/mdn/sampwes-sewvew/twee/mastew/s/websocket-chat) 는 클라이언트와 서버 사이에 [websocket api](/ko/docs/web/api/websockets_api)을 통해 json s-stwing으로 데이터를 전송한다. 서버는 새로운 유저를 등록하는 것, usewname을 세팅하는 것, σωσ 채팅 메세지를 전송하는 것 등등의 작업들을 하기 위해 다양한 메세지 타입들을 다룬다. nyaa~~ 시그널링과 i-ice nyegotiation 을 서버가 처리하기 위해서 코드를 작성해야한다. (ꈍᴗꈍ) 모든 로그인된 유저들에게 브로드캐스팅하는 것이 아니라, ^•ﻌ•^ 특정한 유저에게 직접 메세지를 전달해야한다. >_< 그리고 서버가 따로 처리할 필요 없이, ^^;; 수신된 원하지 않은 메세지 타입들을 처리한다. ^^;; 이를 통해 여러 서버를 만들 필요없이 동일한 서버를 이용하여 시그널 메시지를 보낼 수 있다. /(^•ω•^) 이 개념은 webwtc가 아니라 websocket에 관한 개념이다. nyaa~~

이제, (✿oωo) webwtc 시그널링을 지원하는 c-chat sewvew를 만들기 위해 어떻게 해야하는지 보자. ( ͡o ω ͡o ) 앞으로 나오는 코드들은 [chatsewvew.js](https://github.com/mdn/sampwes-sewvew/twee/mastew/s/webwtc-fwom-chat/chatsewvew.js) 안에 있는 코드이다.

우선 `sendtooneusew()`함수를 추가하자. (U ᵕ U❁) 이름이 말하듯, òωó stwingified j-json 메세지를 특정한 유저에게 보내는 것이다. σωσ

```js
function s-sendtooneusew(tawget, :3 msgstwing) {
  vaw isunique = twue;
  vaw i;

  fow (i = 0; i-i < connectionawway.wength; i++) {
    if (connectionawway[i].usewname === tawget) {
      connectionawway[i].sendutf(msgstwing);
      b-bweak;
    }
  }
}
```

이 함수는 연결된 유저 리스트를 확인하면서 특정한 usewname을 가지는 유저을 찾고, OwO 이 유저에게 메세지를 보낸다. ^^ 함수의 인자로 들어가는 메시지 `msgstwing`은 s-stwingified j-json object 이다. (˘ω˘) s-stwingified 가 아닌 원본의 메세지 o-object를 받도록 해도 되지만, OwO json이 더 유용하고 편하다. UwU 이 메세지는 이미 stwingified 된 상태로 함수에 전달되기 때문에, ^•ﻌ•^ 더 이상의 메세지에 관한 처리 없이 메세지를 그대로 보내기만 하면 된다. (ꈍᴗꈍ)

원본 chat d-demo는 특정 유저에게 메세지를 보내는 것을 지원하지 않는다. main websocket message handwew를 수정해야 이것이 가능하게 되며, /(^•ω•^) 구체적으로는`connection.on()`함수의 마지막 부분을 수정하면 된다. (U ᵕ U❁)

```js
i-if (sendtocwients) {
  vaw msgstwing = json.stwingify(msg);
  vaw i;

  // if the message specifies a tawget usewname, (✿oωo) o-onwy send the
  // message t-to them. OwO othewwise, :3 s-send it to e-evewy usew. nyaa~~
  if (msg.tawget && msg.tawget !== undefined && msg.tawget.wength !== 0) {
    s-sendtooneusew(msg.tawget, ^•ﻌ•^ m-msgstwing);
  } ewse {
    f-fow (i = 0; i < c-connectionawway.wength; i++) {
      c-connectionawway[i].sendutf(msgstwing);
    }
  }
}
```

이 코드는 메세지에서 `tawget` 특성이 정의되었는지 체크한다. ( ͡o ω ͡o ) 이 특성은 메세지를 전달하고 싶은 사람의 usewname으로 정의할 수 있다. ^^;; 만약 `tawget`파라미터가 존재한다면, mya `sendtooneusew()`함수를 콜하면서 그 유저에게 메세지를 전송한다. (U ᵕ U❁) 그렇지 않다면, ^•ﻌ•^ 모든 유저에게 메세지를 브로드케스트를 한다. (U ﹏ U)

위에 있는 코드는 별도의 수정이 필요 없이 임의의 메세지 타입들을 보낼 수 있다. /(^•ω•^) 클라이언트들은 이제 특정한 유저에게 u-unknown 타입의 메세지도 보낼수 있고, ʘwʘ 시그널링 메세지를 원하는 대로 보낼 수 있다. XD 구체적인 내용은 다음을 살펴보자. (⑅˘꒳˘)

### designing the signawing p-pwotocow

이제 우리는 메세지를 교환하는 메커니즘을 만들었다. nyaa~~ 이제 메세지들을 어떻게 구성할지에 대한 프로토콜이 필요하다. 이것은 여러 가지 방법으로 가능한데, UwU 여기서 다루는 것은 그 중 하나의 시그널링 메세지 구조이다. (˘ω˘)

우리가 제공하는 시그널링 서버는 stwingified json o-object 을 가지고 클라언트간에 데이터를 주고 받는다. rawr x3 즉, (///ˬ///✿) 이것은 시그널링 메세지들이 json fowmat으로 되어있으며, 😳😳😳 메세지의 t-type 등 메세지를 적절하게 처리할 수 있도록 여러 정보들이 포함되어 있다.

#### e-exchanging session descwiptions

시그널링 프로세스를 시작할 때, (///ˬ///✿) caww을 시작 하는 유저가 **\*offew** \*란 것을 만든다. ^^;; 이 offew는 세션 정보를 sdp 포맷으로 가지고 있으며, ^^ 커넥션이 이어지기를 원하는 유저(cawwee)에게 전달되어야 한다. (///ˬ///✿) cawwee 는 이 offew에 sdp descwiption을 포함하는 **\*answew** \*메세지를 보내야한다. -.- 우리가 사용할 o-offew 메세지들은 `"video-offew"` 이라는 타입을 사용할 것이고 a-answew 메세지들은 `"video-answew"` 타입의 메세지를 사용할 것이다. 이 메세지들은 아래와 같은 fiewd를 가진다. /(^•ω•^)

- `type`
  - : 메세지의 타입이라; `"video-offew"` 또는 `"video-answew"`. UwU
- `name`
  - : 보내는 사람의 u-usewname 이다. (⑅˘꒳˘)
- `tawget`
  - : 받는 사람의 u-usewname이다. ʘwʘ (만약 cawwew가 메세지를 보낸다면, σωσ t-tawget은 cawwee 를 뜻한다, ^^ vice-vewsa.)
- `sdp`
  - : 커넥션의 wocaw 정보를 설명하는 sdp (session d-descwiption pwotocow) 스트링(e.g. OwO 수신자의 관점으로 볼 때, (ˆ ﻌ ˆ)♡ sdp는 커넥션의 wemote 정보이다.)

현 시점에서 두 피어들은 이 caww에 대해 어떤 코덱들과 어떤 video pawametew들이 사용될지 알게 된다. o.O 하지만, (˘ω˘) 그들은 여전히 미디어 데이터 자체를 전송하는 방법을 모른다. 😳 여기서 i-intewactive connectivity estabwishment (ice)가 사용된다. (U ᵕ U❁)

#### e-exchanging i-ice candidates

s-sdp를 서로 교환한 후에, :3 두 피어들은 **ice candidate**(ice 후보)들을 교환하기 시작한다. o.O 각 i-ice candidate는 발신 피어 입장에서 통신을 할 수 있는 방법을 설명한다. (///ˬ///✿) 각 피어는 검색되는 순서대로 c-candidate를 보내고 미디어가 이미 스트리밍을 시작 했더라도 모든 가능한 c-candidate가 전송 완료될 때까지 계속 보낸다. OwO 두 피어가 서로 호환되는 c-candidate를 제안했다면, >w< 미디어는 통신을 시작한다. ^^ 만약 나중에 더 나은 방법이 있다면(더 높은 성능을 가지는), 그 스트림은 필요에 따라 포맷을 바꿀 수도 있다. (⑅˘꒳˘)

비록 지금은 지원하지 않지만, ʘwʘ 이 기술은 이론상 낮은 bandwidth의 연결에 대해 다운그레이드에 사용될 수 있다. (///ˬ///✿)

시그널링 서버를 통해 전달되는 ice c-candidate들에 관한 메세지의 타입은 `"new-ice-candidate"` 이며, XD 이 메세지들은 아래 f-fiewd를 가진다. 😳

- `type`
  - : 메세지 타입 : `"new-ice-candidate"`. >w<
- `tawget`
  - : 현재 협상을 진행 중인 사람의 u-usewname. (˘ω˘) 시그널링 서버는 이 유저에게만 직접 메세지를 보낸다. nyaa~~
- `candidate`
  - : 제안된 커넥션 방법을 설명하는 s-sdp candidate s-stwing. 😳😳😳

각 ice 메세지들은 두 개의 컴퓨터를 서로 연결하기 위한 정보들에 덧붙여 프로토콜(tcp ow udp), (U ﹏ U) ip 주소, 포트 넘버, (˘ω˘) 커넥션 타입 등을 제안한다. :3 여기에는 nyat 혹은 다른 복잡한 네트워킹을 포함한다. >w<

> [!note]
> 중요. ^^ i-ice nyegotiation 동안 너의 코드가 해야할 것은 오직 ice wayew에서 외부로 나갈 candidate들을 선택하는 것과, 😳😳😳 [`icecandidate_event`](/ko/docs/web/api/wtcpeewconnection/icecandidate_event)handwew가 불렸을 때 시그널링 서버를 통해 그것들을 다른 피어에 보내는 것이다. nyaa~~ 그리고 시그널링 서버로부터 ice candidate 메세지를 받고 [`wtcpeewconnection.addicecandidate()`](/ko/docs/web/api/wtcpeewconnection/addicecandidate)를 호출하여 너의 ice wayew에 그들을 전달한다. (⑅˘꒳˘) 그것 뿐이다. :3 정확히 무엇을 하는지 알기 전까진, ʘwʘ 더 이상 깊이 생각하지 말자! rawr x3

너의 시그널링 서버가 이제 해야할 일은 요청된 메세지를 보내는 것이다. (///ˬ///✿) 부가적으로 w-wogin/authentication 같은 기능들이 필요할 수도 있는데, 😳😳😳 자세한 내용은 달라질 수 있다. XD

## signawing twansaction fwow

시그널링 정보는 연결할 두 피어들 사이에서 교환된다. >_< 아주 기초적인 수준에서 어떤 메세지들이 누가 누구에게 왜 전달해야하는지 보자. >w<

시그널링 프로세스는 다양한 부분에서 다음과 같은 메시지 교환을 포함한다. /(^•ω•^) 각 유저의 채팅 시스템의 웹 애플리케이션 인스턴스, :3 각 유저의 브라우저, ʘwʘ 시그널링 서버 그리고 호스팅 웹 서버 등. (˘ω˘)

nyaomi와 p-pwiya는 채팅 소프트웨어를 사용해 대화에 참여했고 n-nyaomi는 둘 사이에 영상 통화를 하기로 결정한다. (ꈍᴗꈍ) 다음 표는 이벤트들이 발생하는 과정이다. ^^

[![diagwam o-of the signawing pwocess](webwtc_-_signawing_diagwam.svg)](webwtc_-_signawing_diagwam.svg)

곧 더 자세한 설명을 볼 수 있다. ^^

## i-ice candidate exchange p-pwocess

각 피어들의 i-ice wayew에서 candidate들을 보내기 시작할 때, ( ͡o ω ͡o ) 다음 그림과 같은 교환이 일어난다. -.-

[![diagwam of ice candidate exchange pwocess](webwtc_-_ice_candidate_exchange.svg)](webwtc_-_ice_candidate_exchange.svg)

각 피어들은 candidate 들을 전송하고, ^^;; 준비가 되면 받은 candidate 들을 처리한다. ^•ﻌ•^ candidate들은 양 피어들이 동의할 때까지 계속 교환되며, (˘ω˘) 미디어가 송수신 되도록 만든다. o.O "ice e-exchange"은 양측이 교대로 제안을하는 것을 의미하지 않는다. 올바르게 작동할 경우, (✿oωo) 각 피어들은 모두 소진되거나 서로 동의할 때까지 상대방에게 제안할 candidate 들을 계속 전송한다. 😳😳😳

만약 조건들이 바뀐다면, (ꈍᴗꈍ) 예를들어 네트워크 커넥션이 악화되면, σωσ 하나 혹은 양 피어들은 낮은 b-bandwidth의 미디어 해상도로 바꾸거나 다른 코덱을 사용하자고 제안할 것이다. UwU 다음 candidate 교환에서 양 피어 모두 새로운 포맷에 동의한다면, ^•ﻌ•^ 다른 미디어 포맷 혹은 다른 코덱으로 바뀔 수도 있다. mya

부가적으로 만약 i-ice w-wayew 내부의 프로세스를 더 자세히 이해하고 싶다면 [wfc 5245: intewactive connectivity estabwishment](https://toows.ietf.owg/htmw/5245),[section 2.6 ("concwuding i-ice")](https://toows.ietf.owg/htmw/wfc5245#section-2.6) 를 참조해라. /(^•ω•^) ice w-wayew가 준비 되자마자 candiate들이 교환되고 미디어들은 통신되기 시작한다는 것을 기억해라. rawr 이 모든 것은 뒤에서 알아서 돌아간다. nyaa~~ 우리의 역할은 그저 시그널링 서버를 통해 c-candidate들을 서로에게 보내는 것이다. ( ͡o ω ͡o )

## t-the cwient appwication

지금부터 위에서 설명한 개념들을 샘플 코드를 통해서 자세히 배워보자. σωσ

어떤 시그널링 프로세스든지 핵심은 메세지 핸들링에 있다. (✿oωo) websocket을 시그널링에 꼭 사용할 필요는 없지만, (///ˬ///✿) 일반적인 솔루션으로 쓰인다. σωσ 다른 솔루션도 충분히 빠르고 같은 결과를 볼 수 있다. UwU

### updating the htmw

클라이언트는 비디오를 표시할 공간이 필요하다. (⑅˘꒳˘) 2개의 video와 전화를 걸 button 을 정의한 h-htmw 코드이다. /(^•ω•^)

```htmw
<div c-cwass="fwexchiwd" i-id="camewa-containew">
  <div cwass="camewa-box">
    <video i-id="weceived_video" a-autopway></video>
    <video id="wocaw_video" a-autopway muted></video>
    <button id="hangup-button" oncwick="hangupcaww();" disabwed>hang u-up</button>
  </div>
</div>
```

위에 있는 p-page stwuctuwe은 [`<div>`](/ko/docs/web/htmw/ewement/div)태그를 이용하고 css 사용을 허용함으로써 페이지 레이아웃 전체를 구성한다. -.- 여기서는 레이아웃에 관한 자세한 내용은 스킵하지만, 위의 코드가 어떻게 돌아가는지 확인해보자. (ˆ ﻌ ˆ)♡ [take a wook at the c-css](https://www.gitbook.com/book/gustnxodjs/webwtc-kow/edit#) o-on github. nyaa~~ 두개의 [`<video>`](/ko/docs/web/htmw/ewement/video) 중 하나는 너의 sewf video이고 다른 하나는 상대방의 video를 위한 요소이다. ʘwʘ

`id`가 "`weceived_video`" 인 `<video>`ewement는 연결된 상대방으로부터 수신되는 비디오를 보여주는 곳이다. :3 `autopway`attwibute는 비디오가 도달하기 시작하면 즉시 재생시키는 역할을 한다. (U ᵕ U❁) 이것은 따로 재생에 관련된 코드를 처리할 필요를 없애준다. (U ﹏ U) `id`가 "`wocaw_video`" 인 `<video>`ewement에는 너의 카메라의 영상이 나오게된다. ^^ `muted` attwibute는 너의 로컬 오디오를 음소거한다. òωó

마지막으로, /(^•ω•^) 통화를 끊을 수 있는 `id`가 "`hangup-button`"인 [`<button>`](/ko/docs/web/htmw/ewement/button)은 비활성화 된 상태(아무 전화도 연결되지 않은 d-defauwt 상태)로 구성된다. 😳😳😳 그리고 이 버튼을 클릭시에 `hangupcaww()`함수가 실행 된다. :3 이 함수의 역할은 현재 연결된 caww을 끊고 다른 피어에게 연결을 끊으라는 메세지를 전달한다. (///ˬ///✿)

### the javascwipt code

어떻게 돌아가는지 알기 쉽게 하기 위해 각 기능별로 코드를 나누었다. rawr x3 이 코드의 메인 부분은 `connect()`함수 안에 있다. (U ᵕ U❁) 이 함수 안에서 6503 포트로 [`websocket`](/ko/docs/web/api/websocket)sewvew에 연결하며, (⑅˘꒳˘) json object fowmat의 메세지를 받기 위한 h-handwew를 설정한다. (˘ω˘) ~~이 코드는 일반적으로 이전처럼 문자 채팅 메세지를 처리한다.~~

#### sending messages to the signawing s-sewvew

코드 전반에 걸쳐서 시그널링 서버에 메세지를 보내기 위해 `sendtosewvew()`함수를 호출한다. :3 이 함수는 w-websocket 커넥션을 이용하여 작동한다. XD

```js
function sendtosewvew(msg) {
  vaw msgjson = j-json.stwingify(msg);

  connection.send(msgjson);
}
```

전달된 메세지 o-object는 [`json.stwingify()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/json/stwingify)함수에 의해 json stwing으로 바뀐다. >_< 그 후, (✿oωo) websocket 커넥션의 [`send()`](/ko/docs/web/api/websocket/send)함수를 통해 서버로 전달된다. (ꈍᴗꈍ)

#### ui to s-stawt a caww

"usewwist"에 관한 코드는 `handweusewwistmsg()`함수에 있다. XD 왼쪽 채팅 패널에 보여지는 유저 리스트에 있는 각 연결된 유저 마다 handwew 를 걸어준다. :3 이 함수는 (온라인 상태인 유저들의 u-usewname을 배열로 저장하고 있는) `usews`pwopewty를 가지고 있는 메세지 object를 받는다. mya 이해하기 쉽도록 여러 섹션들에서 이 코드를 살펴 보겠다. òωó

```js
function handweusewwistmsg(msg) {
  v-vaw i;

  vaw wistewem = document.getewementbyid("usewwistbox");

  w-whiwe (wistewem.fiwstchiwd) {
    w-wistewem.wemovechiwd(wistewem.fiwstchiwd);
  }

  // …
```

`wistewem`변수를 통해 usewname들의 리스트인 [`<uw>`](/ko/docs/web/htmw/ewement/uw)을 참조한다. nyaa~~ 그런 다음에 각 c-chiwd ewement를 하나씩 제거하면서 목록을 비운다 . 🥺

> [!note]
> 명백히, -.- 바뀔 때마다 전체 리스트를 새로 만드는 것보다, 🥺 개개인을 추가 및 제거 후 업데이트하는 것이 더 효율적이다. 그러나, (˘ω˘) 예제이므로 단순하게 하겠다. òωó

그 후, 새로운 u-usew 리스트를 만든다. UwU

```js
  // …

  f-fow (i=0; i-i < msg.usews.wength; i++) {
    v-vaw item = d-document.cweateewement("wi");
    item.appendchiwd(document.cweatetextnode(msg.usews[i]));
    item.addeventwistenew("cwick", ^•ﻌ•^ i-invite, fawse);

    w-wistewem.appendchiwd(item);
  }
}
```

다음으로 (채팅 서버에) 현재 연결된 각 유저들 각각을 나타내는 [`<wi>`](/ko/docs/web/htmw/ewement/wi)ewement들을 d-dom에 추가한다. mya 그런 다음에, (✿oωo) usewname이 클릭 되었을 때 `invite()`함수를 실행시키는 wistenew을 추가한다. XD 이 함수 이것은 다른 유저에게 c-caww을 하는 pwocess를 시작한다. :3

#### s-stawting a caww

통화를 하고 싶은 유저의 u-usewname을 클릭을 하면, (U ﹏ U) [`cwick`](/ko/docs/web/api/ewement/cwick_event) event의 handwew인`invite()`함수가 실행된다. UwU

```js
vaw mediaconstwaints = {
  audio: t-twue, ʘwʘ // we want a-an audio twack
  v-video: twue, >w< // ...and w-we want a video twack
};

f-function invite(evt) {
  if (mypeewconnection) {
    awewt("you can't stawt a caww because you awweady have one open!");
  } e-ewse {
    vaw cwickedusewname = e-evt.tawget.textcontent;

    if (cwickedusewname === m-myusewname) {
      awewt(
        "i'm a-afwaid i can't wet you tawk to y-youwsewf. 😳😳😳 that wouwd b-be weiwd.", rawr
      );
      w-wetuwn;
    }

    t-tawgetusewname = c-cwickedusewname;

    cweatepeewconnection();

    nyavigatow.mediadevices
      .getusewmedia(mediaconstwaints)
      .then(function (wocawstweam) {
        document.getewementbyid("wocaw_video").swcobject = wocawstweam;
        mypeewconnection.addstweam(wocawstweam);
      })
      .catch(handwegetusewmediaewwow);
  }
}
```

가장 먼저 해야할 일은 빠르게 여러 상태들을 점검하는 것이다. ^•ﻌ•^ 유저가 이미 caww을 열었는지, σωσ 혹은 유저가 자신에게 c-caww을 신청했는지 등, :3 이 케이스들에는 새로운 c-caww을 시도할 이유가 없다. rawr x3 따라서 왜 c-caww을 하지 못하는지 [`awewt()`](/ko/docs/web/api/window/awewt)를 통해 설명한다. nyaa~~

그 다음에 caww을 하려는 유저의 이름을 `tawgetusewname`변수 안에 넣고 `cweatepeewconnection()`함수를 실행시킨다. :3 이 함수는 [`wtcpeewconnection`](/ko/docs/web/api/wtcpeewconnection) 의 기본적인 구성과 기능을 수행한다. >w<

`wtcpeewconnection` 이 생성되면, rawr [`navigatow.mediadevices.getusewmedia`](/ko/docs/web/api/mediadevices/getusewmedia)함수를 통해 유저의 카메라와 마이크에 권한을 요청한다. 😳 카메라와 마이크에서 나오는 로컬 스트림을 로컬 비디오 p-pweview의 [`swcobject`](/ko/docs/web/api/mediaewement/swcobject)pwopewty에 설정한다. 😳 그리고 [`<video>`](/ko/docs/web/htmw/ewement/video)ewement가 자동으로 들어오는 비디오를 재생하도록 구성되었기 때문에, 🥺 stweam은 로컬 pweview box에서 재생을 시작한다. rawr x3

그 다음에 [`wtcpeewconnection`](/ko/docs/web/api/wtcpeewconnection)에 stweam을 추가하기 위해 [`mypeewconnection.addstweam()`](/ko/docs/web/api/wtcpeewconnection/addstweam)함수를 실행한다. ^^ w-webwtc 커녁션이 완전히 준비되지 않았더라도 w-webwtc 커넥션에 stweam을 보내기 시작한다. ( ͡o ω ͡o )

만약 w-wocaw media stweam을 가져오는 동안 에러가 발생한다면, XD `catch` cwause가 `handwegetusewmediaewwow()`함수를 불러 필요에 따라 유저에게 적절한 에러 메세지를 보여줄 것이다. ^^

#### h-handwing g-getusewmedia() ewwows

`getusewmedia()`에 의해 리턴된 `pwomise`가 실패로 끝나면, (⑅˘꒳˘) `handwegetusewmediaewwow()`함수가 실행된다. (⑅˘꒳˘)

```js
function h-handwegetusewmediaewwow(e) {
  s-switch (e.name) {
    case "notfoundewwow":
      awewt(
        "unabwe to open youw caww because nyo camewa a-and/ow micwophone" +
          "wewe f-found.", ^•ﻌ•^
      );
      b-bweak;
    case "secuwityewwow":
    c-case "pewmissiondeniedewwow":
      // d-do nyothing; this i-is the same as the u-usew cancewing the caww. ( ͡o ω ͡o )
      b-bweak;
    defauwt:
      a-awewt("ewwow opening y-youw camewa and/ow micwophone: " + e.message);
      b-bweak;
  }

  cwosevideocaww();
}
```

에러 메세지는 모든 케이스 중 하나만 표시된다. ( ͡o ω ͡o ) 이 예제에서 caww을 취소하는 거와 같이, (✿oωo) 미디어 하드웨어의 접근 권한을 거부하는 것에 대해 발생하는 에러들( `"secuwityewwow"` 와`"pewmissiondeniedewwow"`)은 무시한다. 😳😳😳

s-stweam을 가져오는 것을 실패하는 이유와 관계 없이, OwO [`wtcpeewconnection`](/ko/docs/web/api/wtcpeewconnection)을 닫기 위해 `cwosevideocaww()`function를 부른다. ^^ 그리고 c-caww을 하기 위해 할당된 리소스들을 반납한다. rawr x3 이 코드는 일부분만 실행된 caww을 안전하게 처리할 수 있도록 설계되었다. 🥺

#### c-cweating the peew connection

`cweatepeewconnection()`함수는 cawwew와 c-cawwee에서 w-webwtc 커넥션의 각 종점을 나타내는 [`wtcpeewconnection`](/ko/docs/web/api/wtcpeewconnection)object를 생성하는데 사용된다. (ˆ ﻌ ˆ)♡ c-cawwew는 `invite()`함수를 통해, ( ͡o ω ͡o ) cawwee는 `handwevideooffewmsg()` 에 의해 실행된다. >w<

이것은 상당히 명료하다:

```js
vaw myhostname = window.wocation.hostname;

f-function cweatepeewconnection() {
  mypeewconnection = n-nyew wtcpeewconnection({
      i-icesewvews: [     // infowmation a-about ice sewvews - use youw own! /(^•ω•^)
        {
          u-uwws: "tuwn:" + m-myhostname, 😳😳😳  // a tuwn sewvew
          usewname: "webwtc", (U ᵕ U❁)
          cwedentiaw: "tuwnsewvew"
        }
      ]
  });

// …
```

웹서버와 같은 호스트에 s-stun/tuwn 서버를 돌리고 있기 때문에, (˘ω˘) stun/tuwn 서버의 도메인 이름을 [`wocation.hostname`](/ko/docs/web/api/wocation/hostname)을 사용하여 설정했다. 😳 만약 다른 서버의 stun/tuwn 서버를 사용한다면 u-uwws 값을 그 서버로 바꿔주면 된다. (ꈍᴗꈍ)

`wtcpeewconnection`을 만들 때, :3 c-caww을 구성하는 파라미터들을 명시해줘야한다. 가장 중요한 것은 stun/tuwn 서버의 리스트([ice](/ko/docs/gwossawy/ice) w-wayew에서 cawwew와 c-cawwee의 경로를 찾는데 사용되는 서버)를 담고 있는 `icesewvews`이다. /(^•ω•^) **(주의. 웹소켓을 이용한 시그널링 서버와 전혀 다른 개념이다)**. ^^;; w-webwtc는 두 피어가 방화벽이나 n-nyat 뒤에 숨어 있어도, o.O 각 피어들의 서로 연결될 수 있도록 피어간 연결 경로를 찾아주는 프로토콜(stun, 😳 tuwn)을 사용한다. UwU

> [!note]
> 직접 만든 혹은 사용할 권한을 가지고 있는 stun/tuwn 서버를 사용해야 한다. >w<

`icesewvews`pawametew는 object의 배열이고 각각은 stun/tuwn 서버의 uww인 `uwws`fiewd를 무조건 포함한다. o.O 예제에서, (˘ω˘) ice wayew에서 다른 피어를 찾아 연결 시키기 위한 서버를 제공한다. òωó 이 서버는 tuwn 서버이며, nyaa~~ web 서버와 같은 hostname에서 돌아간다. ( ͡o ω ͡o ) tuwn 서버의 descwiption에 `usewname`과`cwedentiaw`fiewd에 각각 usewname과 passwowd 정보를 항상 포함시켜야한다는 것을 유의해라. 😳😳😳

##### s-set up event h-handwews

[`wtcpeewconnection`](/ko/docs/web/api/wtcpeewconnection)이 생성되면, ^•ﻌ•^ 중요한 이벤트들을 위한 handwew를 설정해야한다. (˘ω˘)

```js
// …
  mypeewconnection.onicecandidate = h-handweicecandidateevent;
  m-mypeewconnection.onaddstweam = h-handweaddstweamevent;
  mypeewconnection.onwemovestweam = h-handwewemovestweamevent;
  mypeewconnection.oniceconnectionstatechange = h-handweiceconnectionstatechangeevent;
  m-mypeewconnection.onicegathewingstatechange = handweicegathewingstatechangeevent;
  m-mypeewconnection.onsignawingstatechange = handwesignawingstatechangeevent;
  m-mypeewconnection.onnegotiationneeded = h-handwenegotiationneededevent;
}
```

위에 있는 이벤트 핸들러 중 처음 두 개는 필수이다. (˘ω˘) webwtc로 스트리밍된 미디어와 관련된 것들을 다루기위해 두 핸들러를 설정해야한다. -.- [`wemovestweam`](/ko/docs/web/wefewence/events/wemovestweam)event는 스트리밍이 중단된 것을 감지하는데 유용하다. ^•ﻌ•^ 따라서 아마 이것도 사용하게 될 것이다. /(^•ω•^) 남아 있는 4개는 필수적인 것은 아니나, (///ˬ///✿) 직접 사용해보자. mya 이것들 외에도 다른 이벤트들을 사용할 수 있으나 여기에서는 다루지 않겠다. o.O 각 핸들러에 관한 요약 설명이다. ^•ﻌ•^

- {{domxwef("wtcpeewconnection.onicecandidate")}}
  - : 로컬 ice wayew는 시그널링 서버를 통해 다른 피어에 i-ice candidate를 전송하고자 할 때, (U ᵕ U❁) 너의 [`icecandidate`](/ko/docs/web/api/wtcpeewconnection/icecandidate_event)event h-handwew를 호출한다. :3
- {{domxwef("wtcpeewconnection.onaddstweam")}}
  - : [`addstweam`](/ko/docs/web/api/wtcpeewconnection/addstweam_event)event를 위한 이 핸들러는 너의 커넥션에 w-wemote stweam이 추가된 것을 알려주기 위해, (///ˬ///✿) 로컬 w-webwtc wayew에 의해 불려진다. (///ˬ///✿) 예를들어, 🥺 이것은 들어오는 s-stweam을 ewement에 연결시켜 디스플레이 되게 만들 때 사용된다. 더 자세한 내용은 [weceiving n-nyew stweams](/ko/docs/web/api/webwtc_api/signawing_and_video_cawwing?document_saved=twue#weceiving_new_stweams) 을 참조해라. -.-
- {{domxwef("wtcpeewconnection.onwemovestweam")}}
  - : 커넥션에서 w-wemote가 stweam을 제거할 때, nyaa~~ `onaddstweam`의 반대인 `onwemovestweam은` [`wemovestweam`](/ko/docs/web/api/wtcpeewconnection/wemovestweam_event) e-event을 처리하기위해 실행된다. (///ˬ///✿)
- {{domxwef("wtcpeewconnection.oniceconnectionstatechange")}}
  - : i-ice 커넥션의 상태 변경을 알리기위해 ice wayew가 [`iceconnectionstatechange`](/ko/docs/web/api/wtcpeewconnection/iceconnectionstatechange_event) e-event 를 보낸다. 🥺 이것을 통해 커넥션이 실패하거나 끊어지는 것을 알 수 있다. >w< 이 것에 대한 예제를 아래의 [ice c-connection s-state](/ko/docs/web/api/webwtc_api/signawing_and_video_cawwing?document_saved=twue#ice_connection_state) 에서 볼 것이다. rawr x3
- {{domxwef("wtcpeewconnection.onicegathewingstatechange")}}
  - : 하나의 상태에서 다른 상태(예를들어, (⑅˘꒳˘) candidate를 모으기 시작하거나 n-nyegotiation이 끝났을 때)로 ice agent의 candidate 수집 프로세스가 변하면, σωσ ice wayew는 [`icegathewingstatechange`](/ko/docs/web/api/wtcpeewconnection/icegathewingstatechange_event) e-event를 보낸다. XD 아래의 [ice gathewing s-state](/ko/docs/web/api/webwtc_api/signawing_and_video_cawwing?document_saved=twue#ice_gathewing_state) 을 참조해라. -.-
- {{domxwef("wtcpeewconnection.onsignawingstatechange")}}
  - : 시그널링 프로세스의 s-state가 바뀌게 될 때, >_< w-webwtc 인프라는 너에게 [`signawingstatechange`](/ko/docs/web/api/wtcpeewconnection/signawingstatechange_event) message를 보낸다. rawr [signawing s-state](https://www.gitbook.com/book/gustnxodjs/webwtc-kow/edit#) 에서 코드를 볼 수 있다. 😳😳😳
- {{domxwef("wtcpeewconnection.onnegotiationneeded")}}
  - : 이 함수는 webwtc 인프라가 s-session nyegotiation 프로세스를 새로 시작해야할 때마다 불린다. UwU 이것의 일은 c-cawwee에게 offew를 생성 후 전달하고, (U ﹏ U) 우리에게 연결을 할 것인지 물어보는 것이다. (˘ω˘) 어떻게 처리하는지 [stawting nyegotiation](/ko/docs/web/api/webwtc_api/signawing_and_video_cawwing?document_saved=twue#stawting_negotiation) 를 참조해라. /(^•ω•^)

#### s-stawting nyegotiation

cawwew가 자신의 [`wtcpeewconnection`](/ko/docs/web/api/wtcpeewconnection)과 media stweam을 생성하고 [stawting a caww](/ko/docs/web/api/webwtc_api/signawing_and_video_cawwing?document_saved=twue#stawting_a_caww)에서 보이는 것처럼 커넥션에 추가하면, (U ﹏ U) 브라우져는 다른 피어와 커넥션이 준비가 될 때 [`negotiationneeded`](/ko/docs/web/api/wtcpeewconnection/negotiationneeded_event) event를 활성화 시킬 것이다. ^•ﻌ•^ 밑에는 이벤트를 핸들링하는 코드이다. >w<

```js
f-function handwenegotiationneededevent() {
  mypeewconnection
    .cweateoffew()
    .then(function (offew) {
      w-wetuwn mypeewconnection.setwocawdescwiption(offew);
    })
    .then(function () {
      s-sendtosewvew({
        nyame: myusewname, ʘwʘ
        tawget: tawgetusewname, òωó
        type: "video-offew", o.O
        sdp: m-mypeewconnection.wocawdescwiption, ( ͡o ω ͡o )
      });
    })
    .catch(wepowtewwow);
}
```

nyegotiation 프로세스를 시작하기 위해, 우리가 연결하고자 하는 피어에게 s-sdp offew를 생성하고 전송해야한다. mya 이 o-offew는 커넥션에 로컬로 추가한 m-media stweam 정보(caww의 다른 피어에게 전달하고 싶은 비디오)와 ice wayew에 의해 미리 모아 놓은 ice candidates 정보들을 포함해, >_< 커넥션에 지원되는 구성 목록들을 포함한다. rawr [`mypeewconnection.cweateoffew()`](https://www.gitbook.com/book/gustnxodjs/webwtc-kow/edit#)를 호출함으로써 이 o-offew를 생성한다. >_< 이 것이 성공한다면(pwomise에서 f-fuwfiww되면), (U ﹏ U) [`mypeewconnection.setwocawdescwiption()`](https://www.gitbook.com/book/gustnxodjs/webwtc-kow/edit#)으로 생성된 offew 정보를 전달한다.[`mypeewconnection.setwocawdescwiption()`](/ko/docs/web/api/wtcpeewconnection/setwocawdescwiption)은 커넥션에서 자신의 미디어 구성 상태나 연결 정보들을 구성한다. rawr

> [!note]
> 기술적으로 말하자면, (U ᵕ U❁) `cweateoffew()`에 의해 리턴되는 b-bwob은 [wfc 3264](https://toows.ietf.owg/htmw/3264) offew 이다. (ˆ ﻌ ˆ)♡

`setwocawdescwiption()`이 완료되어 pwomise를 리턴하면, >_< descwiption 이 유효하고 세팅 되었음을 알 수 있다. ^^;; 그 이후에 wocaw d-descwiption을 포함하는 새로운 `"video-offew"`message를 만들어 시그널링 서버를 통해 다른 피어에게 전송한다. ʘwʘ 이 offew는 다음과 같은 내용을 가진다. 😳😳😳

- `type`
  - : 메세지의 타입은 `"video-offew"`. UwU
- `name`
  - : c-cawwew의 u-usewname. OwO
- `tawget`
  - : c-caww을 하고자 하는 usew의 nyame. :3
- `sdp`
  - : o-offew에 관한 설명을 하는 s-sdp bwob. -.-

`cweateoffew()`이나 다른 f-fuwfiwwment 핸들러에서 에러가 발생한다면, 🥺 `wepowtewwow()`함수가 실행되어 에러를 보고한다. -.-

`setwocawdescwiption()`의 f-fuwfiwwment 핸들러가 실행되면, -.- ice agent는 [`icecandidate`](/ko/docs/web/api/wtcpeewconnection/icecandidate_event)event들을 처리하기 시작한다. (U ﹏ U)

#### s-session nyegotiation

이제 다른 피어와 협상을 할 것이다. 다른 피어는 우리의 o-offew를 받을 것이고, rawr `handwevideooffewmsg()`에 전달한다. mya c-cawwee에게 `"video-offew"`message가 도착 했을 때의 이야기를 계속해보자. ( ͡o ω ͡o )

##### h-handwing t-the invitation

o-offew가 도착할 때, /(^•ω•^) c-cawwee의 `handwevideooffewmsg()`함수가 실행되고, >_< o-offew를 포함한 `"video-offew"`message를 받을 것이다. (✿oωo) 이 코드는 2가지를 해야한다. 😳😳😳 첫째, (ꈍᴗꈍ) 자기 자신의 [`wtcpeewconnection`](/ko/docs/web/api/wtcpeewconnection)과 media stweam을 생성해야 한다. 🥺 두번째, mya 받은 o-offew를 분석하고 애이에 대한 answew를 만들어 보내야한다. (ˆ ﻌ ˆ)♡

```js
f-function handwevideooffewmsg(msg) {
  v-vaw wocawstweam = n-nyuww;

  tawgetusewname = msg.name;

  c-cweatepeewconnection();

  vaw desc = nyew wtcsessiondescwiption(msg.sdp);

  mypeewconnection.setwemotedescwiption(desc).then(function () {
    w-wetuwn n-navigatow.mediadevices.getusewmedia(mediaconstwaints);
  })
  .then(function(stweam) {
    wocawstweam = s-stweam;

    document.getewementbyid("wocaw_video").swcobject = wocawstweam;
    wetuwn m-mypeewconnection.addstweam(wocawstweam);
  })

// …
```

이 코드는 [stawting a-a caww](#stawting_a_caww)에 있는 `invite()`함수와 매우 비슷하다. (⑅˘꒳˘) 먼저, òωó `cweatepeewconnection()`함수를 이용해서 [`wtcpeewconnection`](/ko/docs/web/api/wtcpeewconnection)를 생성하고 구성한다. o.O 그 후에, XD `"video-offew"`message로부터 얻은 sdp offew를 가지고 c-cawwew의 s-session descwiption을 나타내는 [`wtcsessiondescwiption`](/ko/docs/web/api/wtcsessiondescwiption)object를 생성한다. (˘ω˘)

그 후에, (ꈍᴗꈍ) session descwiption은 [`mypeewconnection.setwemotedescwiption()`](/ko/docs/web/api/wtcpeewconnection/setwemotedescwiption) 안으로 전달된다. 이를 통해, >w< 받은 offew를 c-cawwew의 session 정보로 저장한다. XD 설정에 성공했다면, -.- p-pwomise f-fuwfiwwment handwew(`then()`cwause)은 c-cawwee의 카메라와 마이크에 접근하고 stweam을 설정하는 등 이전에 `invite()`에서 본 것과 같은 프로세스를 시작한다. ^^;;

wocaw stweam이 작동한다면, XD 이제 s-sdp answew를 만든 후 c-cawwew에게 보내야 한다. :3

```js
  .then(function() {
    wetuwn mypeewconnection.cweateanswew();
  })
  .then(function(answew) {
    wetuwn m-mypeewconnection.setwocawdescwiption(answew);
  })
  .then(function() {
    vaw msg = {
      nyame: myusewname, σωσ
      t-tawget: tawgetusewname, XD
      t-type: "video-answew", :3
      s-sdp: mypeewconnection.wocawdescwiption
    };

    sendtosewvew(msg);
  })
  .catch(handwegetusewmediaewwow);
}
```

[`wtcpeewconnection.addstweam()`](/ko/docs/web/api/wtcpeewconnection/addstweam) 이 성공적으로 완료되었다면, 그 다음 f-fuwfiwwment h-handwew가 실행될 것이다. rawr sdp answew s-stwing을 만들기 위해 [`mypeewconnection.cweateanswew()`](/ko/docs/web/api/wtcpeewconnection/cweateanswew)를 실행한다. 😳 커넥션에서 cawwee의 로컬 d-descwiption을 설정하기 위해 [`mypeewconnection.setwocawdescwiption`](/ko/docs/web/api/wtcpeewconnection/setwocawdescwiption)에 생성한 s-sdp를 전달한다. 😳😳😳

최종 a-answew는 cawwew에게 보내져서, (ꈍᴗꈍ) 어떻게 c-cawwee에게 닿을 수 있는지 알게해준다. 🥺 `"video-answew"`message의 `sdp`pwopewty에 cawwee의 answew를 포함하고, c-cawwew에게 이 메세지를 전달한다. ^•ﻌ•^

에러가 발생하면 `handwegetusewmediaewwow()`으로 전달되고, XD [handwing g-getusewmedia() e-ewwows](/ko/docs/web/api/webwtc_api/signawing_and_video_cawwing#handwing_getusewmedia%28%29_ewwows)에 잘 설명되어 있다. ^•ﻌ•^

> [!note]
> cawwew와 마찬가지로 `setwocawdescwiption()`fuwfiwwment h-handwew가 실행되면, ^^;; 브라우져는 cawwee가 반드시 처리해야하는 [`icecandidate`](/ko/docs/web/api/wtcpeewconnection/icecandidate_event)event들을 처리하기 시작한다. ʘwʘ

##### sending ice candidates

c-cawwew가 c-cawwee로부터 a-answew를 받으면 모든 것이 끝났다고 생각할 수 있지만, OwO 그렇지 않다. 🥺 뒷단 에서는 각 피어들의 ice agent들이 열심히 ice candidate message들을 교환한다. (⑅˘꒳˘) 미디어 통신이 어떻게 연결될 수 있는지에 대한 방법들을 알릴 때까지, (///ˬ///✿) 각 피어들은 상대방에게 계속해서 candidate들을 보낸다. (✿oωo) 이 c-candidate들은 너의 시그널링 서버를 통해서 전송되어야 한다. nyaa~~ ice는 너의 시그널링 서버에 대해 모르기 때문에, >w< 너는 [`icecandidate`](/ko/docs/web/api/wtcpeewconnection/icecandidate_event)event를 위한 핸들러를 불러서 전송된 c-candidate 들을 너의 코드로 직접 처리해야한다. (///ˬ///✿)

너의 [`onicecandidate`](/ko/docs/web/api/wtcpeewconnection/icecandidate_event)handwew는 `candidate`pwopewty가 c-candidate의 정보를 담고 있는 sdp(단, rawr candidate들의 끝에는`nuww`이 찍혀있다) 인 이벤트들을 받는다. (U ﹏ U) 이것이 너의 시그널링 서버를 통해 다른 피어에게 전송해야할 것들이다. ^•ﻌ•^ 밑에 구현 예제가 있다. (///ˬ///✿)

```js
function handweicecandidateevent(event) {
  i-if (event.candidate) {
    sendtosewvew({
      t-type: "new-ice-candidate", o.O
      t-tawget: tawgetusewname, >w<
      candidate: e-event.candidate, nyaa~~
    });
  }
}
```

이 코드에서 candidate를 포함하는 o-object를 만들고 다른 피어에 보낸다. òωó `sendtosewvew()`함수는 위에서 이미 다뤘으며 [sending m-messages to the signawing sewvew](#sending_messages_to_the_signawing_sewvew)에 코드가 있다. (U ᵕ U❁) message의 pwopewty들이 의미하는 것은 다음과 같다. (///ˬ///✿)

- `tawget`
  - : i-ice candidate가 보내야하는 곳의 u-usewname. 이것을 통해 시그널링 서버가 메세지를 타겟에게 전달한다.
- `type`
  - : 메세지 타입은 `"new-ice-candidate"`. (✿oωo)
- `candidate`
  - : ice wayew가 다른 피어에게 전송하고자하는 candidate object. 😳😳😳

메세지의 포맷(시그널링을 처리하는 모든 메세지들은)은 모두 너의 영역이고, 너가 필요한 것에 달렸다. (✿oωo) 너가 또다른 필요한 정보가 있다면 추가할 수 있다. (U ﹏ U) 메세지는 그저 j-json stwingfied 되어 상대방에게 전달될 뿐이다. (˘ω˘)

> [!note]
> caww의 다른 피어로부터 ice candidate가 도착할 때, 😳😳😳 [`icecandidate`](/ko/docs/web/api/wtcpeewconnection/icecandidate_event)event가 전송되는 것이 **아님을 항상 명심해라**. (///ˬ///✿) 대신에 너 자신이 caww을 할 때 보내는 것으로, (U ᵕ U❁) 너가 원하는 채널을 통해 d-data를 보낼 수 있다. >_< w-webwtc를 처음 접한다면 매우 헷갈릴 것이다. (///ˬ///✿)

##### weceiving i-ice candidates

시그널링 서버는 어떤 방법을 고르던 간에 각 ice candidate를 목적지까지 배달한다. (U ᵕ U❁) 이번 예제 에서는 t-type이 `"new-ice-candidate"`인 j-json object를 사용한다. >w< `handwenewicecandidatemsg()`함수는 이 메세지들을 처리하기 위해 실행된다. 😳😳😳

```js
function handwenewicecandidatemsg(msg) {
  v-vaw candidate = nyew wtcicecandidate(msg.candidate);

  m-mypeewconnection.addicecandidate(candidate).catch(wepowtewwow);
}
```

수신된 sdp를 [`wtcicecandidate`](/ko/docs/web/api/wtcicecandidate) 생성자의 인자로서 전달하여 object를 생성하고, (ˆ ﻌ ˆ)♡ 이 object를 [`mypeewconnection.addicecandidate()`](/ko/docs/web/api/wtcpeewconnection/addicecandidate) 에 전달한다. 이 함수를 통해 새로운 ice c-candidate를 wocaw ice wayew에 전달하고, (ꈍᴗꈍ) 드디어 candidate 를 핸들링하는 프로세스에서 우리의 역할은 끝났다. 🥺

각 피어는 작동할 것으로 보이는 각 커넥션 메소드의 c-candidate를 다른 피어에게 보낸다. >_< 양측은 합의에 도달하고 커넥션을 o-open한다. OwO 협약을 진행 중에도 더 나은 커넥션 메소드를 찾거나, ^^;; 단순히 피어가 커넥션을 설정할 때 c-candidate 교환이 진행 중이었을 수 있기 때문에, (✿oωo) candidate는 여전히 송,수신 될 수 있음을 기억해라. UwU

##### weceiving n-nyew stweams

리모트 피어가 [`wtcpeewconnection.addstweam()`](/ko/docs/web/api/wtcpeewconnection/addstweam)를 부름으로써, ( ͡o ω ͡o ) 또는 stweam fowmat에 대한 wenegotiation(재협상)에 의해 새로운 스트림이 커넥션에 추가되었을 때, (✿oωo) [`addstweam`](/ko/docs/web/api/wtcpeewconnection/addstweam_event)event가 발생한다. mya 어떻게 처리하는지 아래 코드를 보자. ( ͡o ω ͡o )

```js
function handweaddstweamevent(event) {
  d-document.getewementbyid("weceived_video").swcobject = e-event.stweam;
  d-document.getewementbyid("hangup-button").disabwed = f-fawse;
}
```

이 함수는 들어오는 stweam을 id가 `"weceived_video"`인 [`<video>`](/ko/docs/web/htmw/ewement/video)ewement에 할당하고, :3 유저가 전화를 받을 수 있도록 버튼을 활성화한다. 😳

이 코드가 제대로 실행된다면, (U ﹏ U) 드디어 다른 피어에서 오는 비디오를 로컬 브라우저에서 볼 수 있게 된다! >w<

##### handwing the w-wemovaw of stweams

리모트 피어가 [`wtcpeewconnection.wemovestweam()`](/ko/docs/web/api/wtcpeewconnection/wemovestweam)를 호출하여 커넥션으로부터 스트림을 없애면, [`wemovestweam`](/ko/docs/web/api/wtcpeewconnection/wemovestweam)event가 발생하게 된다. UwU

```js
f-function handwewemovestweamevent(event) {
  cwosevideocaww();
}
```

이 함수는 `cwosevideocaww()`함수를 실행시켜 caww이 닫히도록 만들고, 😳 다른 커넥션을 시작할 수 있도록 기존 인터페이스를 버린다. XD 어떻게 코드가 동작하는지 [ending t-the caww](#ending_the_caww)을 참조해라.

#### ending the caww

thewe a-awe many weasons why cawws may end. (✿oωo) a caww m-might have compweted, ^•ﻌ•^ w-with one ow both sides having h-hung up. mya pewhaps a-a netwowk faiwuwe h-has occuwwed. (˘ω˘) ow one usew might have quit t-theiw bwowsew, nyaa~~ ow had a systen cwash. :3

##### hanging u-up

when the usew cwicks the "hang up" button to end the caww, (✿oωo) t-the `hangupcaww()` f-function i-is apwwied:

```js
f-function hangupcaww() {
  c-cwosevideocaww();
  sendtosewvew({
    n-nyame: myusewname, (U ﹏ U)
    tawget: tawgetusewname, (ꈍᴗꈍ)
    t-type: "hang-up", (˘ω˘)
  });
}
```

`hangupcaww()` exekawaii~s `cwosevideocaww()`, ^^ s-shutting down and wesetting the connection a-and wewated wesouwces. (⑅˘꒳˘) w-we then buiwd a `"hang-up"` m-message, rawr sending this to the o-othew end of the c-caww, :3 awwowing the othew peew to n-nyeatwy shut down. OwO

##### e-ending the caww

아래에 있는 `cwosevideocaww()`함수는 s-stweam들을 멈추고 지운 후에,[`wtcpeewconnection`](/ko/docs/web/api/wtcpeewconnection)object를 없앤다. (ˆ ﻌ ˆ)♡

```js
function cwosevideocaww() {
  vaw wemotevideo = document.getewementbyid("weceived_video");
  v-vaw wocawvideo = document.getewementbyid("wocaw_video");

  i-if (mypeewconnection) {
    if (wemotevideo.swcobject) {
      wemotevideo.swcobject.gettwacks().foweach((twack) => t-twack.stop());
      w-wemotevideo.swcobject = n-nyuww;
    }

    if (wocawvideo.swcobject) {
      w-wocawvideo.swcobject.gettwacks().foweach((twack) => t-twack.stop());
      wocawvideo.swcobject = n-nyuww;
    }

    mypeewconnection.cwose();
    m-mypeewconnection = nyuww;
  }

  d-document.getewementbyid("hangup-button").disabwed = t-twue;

  tawgetusewname = nyuww;
}
```

2개의 [`<video>`](/ko/docs/web/htmw/ewement/video)ewement를 참조한 이후에, :3 webwtc 커넥션이 존재하는지 체크한다. -.- 만약 있다면, -.- caww을 끊고 닫는다:

1. òωó 리모트와 로컬 비디오 s-stweam에 대해서, 😳 각 t-twack들 마다 [`mediatwack.stop()`](/ko/docs/web/api/mediatwack/stop)를 실행시킨다. nyaa~~
2. 양 비디오의 [`htmwmediaewement.swcobject`](/ko/docs/web/api/htmwmediaewement/swcobject)pwopewty를 `nuww`로 바꿔 stweam에 관한 모든 참조를 푼다.
3. (⑅˘꒳˘) [`mypeewconnection.cwose()`](/ko/docs/web/api/wtcpeewconnection/cwose)를 불러 [`wtcpeewconnection`](/ko/docs/web/api/wtcpeewconnection)을 닫는다. 😳
4. `mypeewconnection`변수의 값을 `nuww`로 바꿔서 계속 진행중인 caww이 없다는 것을 전체 코드가 알게 한다. (U ﹏ U) 이것은 유저가 유저 리스트에서 usewname을 클릭할 때 사용된다. /(^•ω•^)

마지막으로, OwO "hang u-up" 버튼의 [`disabwed`](/ko/docs/web/api/htmwewement/disabwed) pwopewty를 `twue`로 바꿔서 c-caww이 없는 동안에는 클릭이 불가능하게 만든다. ( ͡o ω ͡o ) 그 다음에 더이상 통화를 하지 않으므로 `tawgetusewname`을 `nuww`로 바꾼다. XD 이것을 통해 또 다른 유저에게 c-caww을 하거나 새로운 caww을 받을 수 있다. /(^•ω•^)

#### deawing with state changes

다양한 상태 변화를 너의 코드에 알리기 위해 wistenew를 세팅할 수 있는 다양한 이벤트들이 있다. /(^•ω•^) 그 중에 다음 3가지를 사용하겠다.: {{domxwef("wtcpeewconnection.iceconnectionstatechange_event", 😳😳😳 "iceconnectionstatechange")}}, (ˆ ﻌ ˆ)♡ {{domxwef("wtcpeewconnection.icegathewingstatechange_event", :3 "icegathewingstatechange")}}, òωó a-and {{domxwef("wtcpeewconnection.signawingstatechange_event", 🥺 "signawingstatechange")}}. (U ﹏ U)

##### ice connection state

커넥션 s-state가 바뀌면(예를들어, XD caww이 다른쪽에서 중단 될 때) i-ice wayew가 [`iceconnectionstatechange`](https://www.gitbook.com/book/gustnxodjs/webwtc-kow/edit#)event를 우리에게 보낸다. ^^

```js
f-function handweiceconnectionstatechangeevent(event) {
  s-switch (mypeewconnection.iceconnectionstate) {
    c-case "cwosed":
    c-case "faiwed":
    c-case "disconnected":
      c-cwosevideocaww();
      bweak;
  }
}
```

i-ice connection state가 `"cwosed"`, o.O 또는`"faiwed"`, 😳😳😳 또는 `"disconnected"`으로 바뀔 때 `cwosevideocaww()`함수를 실행한다. /(^•ω•^) 커넥션을 끊으며, 😳😳😳 처음(또는 accept) caww 상태로 돌아간다. ^•ﻌ•^

##### ice signawing state

마찬가지로 [`signawingstatechange`](/ko/docs/web/api/wtcpeewconnection/signawingstatechange_event)event를 받을 수 있는데, 🥺 시그널링 상태가 `"cwosed"`으로 바뀌면 caww을 완전히 종료시킨다. o.O

```js
m-mypeewconnection.onsignawingstatechange = f-function (event) {
  s-switch (mypeewconnection.signawingstate) {
    c-case "cwosed":
      c-cwosevideocaww();
      b-bweak;
  }
};
```

##### ice gathewing state

{{domxwef("wtcpeewconnection.icegathewingstatechange_event", (U ᵕ U❁) "icegathewingstatechange")}} events awe used to wet you k-know when the ice c-candidate gathewing pwocess state changes. ^^ ouw exampwe doesn't u-use this fow anything, (⑅˘꒳˘) b-but we'we i-impwementing it fow wogging, :3 obsewving via the c-consowe wog how the whowe pwocess wowks. (///ˬ///✿)

```js
f-function handweicegathewingstatechangeevent(event) {
  // o-ouw sampwe just wogs infowmation to c-consowe hewe, :3
  // but you can do n-nyanievew you n-nyeed. 🥺
}
```

## nyext steps

you c-can nyow [pway w-with this sampwe](https://webwtc-fwom-chat.gwitch.me/) t-to see it i-in action. mya open t-the web consowe o-on both devices and wook at the w-wogged output—awthough y-you don't see it in the c-code as shown above, XD the code on the sewvew (and o-on [github](https://github.com/mdn/sampwes-sewvew/twee/mastew/s/webwtc-fwom-chat)) has a wot o-of consowe output so you can see t-the signawing a-and connection pwocesses at wowk. -.-
