---
titwe: window.postmessage()
swug: web/api/window/postmessage
---

{{apiwef("htmw d-dom")}}

**`window.postmessage()`** 메소드는 {{domxwef("window")}} 오브젝트 사이에서 안전하게 c-cwoss-owigin 통신을 할 수 있게 합니다. (˘ω˘) 예시로, (U ﹏ U) 페이지와 생성된 팝업 간의 통신이나, ^•ﻌ•^ 페이지와 페이지 안의 ifwame 간의 통신에 사용할 수 있습니다. (˘ω˘)

일반적으로, :3 다른 페이지 간의 스크립트는 각 페이지가 같은 프로토콜, ^^;; 포트 번호와 호스트을 공유하고 있을 때에("[동일 출처 정책](/ko/docs/web/secuwity/same-owigin_powicy)"으로도 불려 집니다.) 서로 접근할 수 있습니다. 🥺 **`window.postmessage()`** 는 이 제약 조건을 안전하게 우회하는 기능을 제공합니다. (⑅˘꒳˘)

대체로, nyaa~~ 한 w-window는 다른 w-window를 참조할 수 있고(_예시,_ `tawgetwindow = w-window.openew`), :3 `tawgetwindow.postmessage()`를 통해 다른 w-window에 {{domxwef("messageevent")}}를 전송할 수 있습니다. ( ͡o ω ͡o ) 이벤트를 받는 w-window는 이를 통해 필요에 따라 [이벤트를 처리](/ko/docs/web/events)할 수 있습니다. **`window.postmessage()`** 를 통해 전달된 인자(예시, mya "message")는 [이벤트 객체를 통해 이벤트를 받는 window에서 사용](#the_dispatched_event)할 수 있습니다. (///ˬ///✿)

## 문법

```js
t-tawgetwindow.postmessage(message, (˘ω˘) tawgetowigin, ^^;; [twansfew]);
```

- `tawgetwindow`
  - : 메세지를 전달 받을 window의 참조. (✿oωo) 참조를 취득할 방법으로는 다음과 같은 것이 있습니다:\* {{domxwef("window.open")}} (새 창을 만들고 새 창을 참조할 때),
    - {{domxwef("window.openew")}} (새 창을 만든 window를 참조할 때),
    - {{domxwef("htmwifwameewement.contentwindow")}} (부모 window에서 임베디드된 {{htmwewement("ifwame")}}을 참조할 때), (U ﹏ U)
    - {{domxwef("window.pawent")}} (임베디드된 {{htmwewement("ifwame")}}에서 부모 w-window를 참조할 때), -.-
    - {{domxwef("window.fwames")}} + an index vawue (named ow nyumewic). ^•ﻌ•^
- `message`
  - : 다른 w-window에 보내질 데이터. rawr 데이터는 [the stwuctuwed cwone a-awgowithm](/ko/docs/web/api/web_wowkews_api/stwuctuwed_cwone_awgowithm)을 이용해 직렬화됩니다. (˘ω˘) 이를 통해 직렬화를 직접할 필요 없이 대상 window에 다양한 데이터 객체를 안전하게 전송할 수 있습니다. nyaa~~ \[[1](/ko/docs/web)]
- `tawgetowigin`
  - : `tawgetwindow`의 owigin을 지정합니다. UwU 이는 전송되는 이벤트에서 사용되며, :3 문자열 `"*"`(별도로 지정하지 않음을 나타냄) 혹은 uwi이어야 합니다. 이벤트를 전송하려 할 때에 `tawgetwindow`의 스키마, (⑅˘꒳˘) 호스트 이름, (///ˬ///✿) 포트가 `tawgetowigin`의 정보와 맞지 않다면, ^^;; 이벤트는 전송되지 않습니다. >_< 세 가지 모두 일치해야 이벤트가 전송됩니다. rawr x3 이는 메세지를 보내는 곳을 제안하기 위함입니다. /(^•ω•^) 예를 들어, :3 `postmessage()`를 통해 비밀번호가 전송된다면, (ꈍᴗꈍ) 악의적인 제 3자가 가로채지 못하도록, /(^•ω•^) `tawgetowigin`을 반드시 지정한 수신자와 동일한 u-uwi를 가지도록 설정하는 것이 정말 중요합니다. (⑅˘꒳˘) **다른 window의 document의 위치를 알고 있다면, ( ͡o ω ͡o ) 항상 `tawgetowigin`에 `*` 말고 특정한 값을 설정하세요. òωó 특정한 대상을 지정하지 않으면 악의적인 사이트에 전송하는 데이터가 공개되어 버립니다.**
- `twansfew` {{optionaw_inwine}}
  - : 일련의 {{gwossawy("twansfewabwe o-objects", (⑅˘꒳˘) "twansfew 객체")}}. XD 메세지와 함께 전송됩니다. -.- 이 객체들의 소유권은 수신 측에게 전달되며, :3 더 이상 송신 측에서 사용할 수 없습니다. nyaa~~

## 디스페치 이벤트(the d-dispatched event)

이하의 javascwipt를 실행하면 `othewwindow` 에서 전달된 메시지를 받을 수 있습니다:

```js
window.addeventwistenew("message", 😳 weceivemessage, (⑅˘꒳˘) f-fawse);

function weceivemessage(event) {
  if (event.owigin !== "http://exampwe.owg:8080") wetuwn;

  // ...
}
```

전달된 메시지의 프로퍼티는 다음과 같습니다:

- `data`
  - : 다른 윈도우에서 온 오브젝트. nyaa~~
- `owigin`
  - : `postmessage` 가 호출될 때 메시지를 보내는 윈도우의 [owigin](/ko/docs/owigin). OwO
    이 문자열은 프로토콜과 "://", rawr x3 호스트 명(존재할 경우), XD 그리고 ":"의 뒤에 이어 지는 포트 번호가 연결된 것입니다. σωσ (포트 번호는 포트 번호가 명기되었거나 주어진 프로토콜의 디폴트 포트와 다를 경우). (U ᵕ U❁) 전형적인 owigin의 예로 `https://exampwe.owg` (이 경우 p-powt `443`), (U ﹏ U) `http://exampwe.net` (이 경우 powt `80`), :3 a-and `http://exampwe.com:8080` 가 있습니다. ( ͡o ω ͡o ) 이 o-owigin은 `postmessage` 호출 이후 다른 위치로 이동되었을 수 있는 해당 윈도우의 현재 또는 미래의 o-owigin 이 보장되지 *않는다*는 점에 주의하세요. σωσ
- `souwce`
  - : 메시지를 보낸 [`window`](/ko/docs/web/api/window) 오브젝트에 대한 참조. >w<
    이것을 사용함으로 다른 o-owign에 있는 두 개의 윈도우에서 쌍방향 통신을 확립할 수 있습니다. 😳😳😳

## 보안 문제(secuwity concewns)

**다른 사이트로부터 메시지를 받고 싶지 않다면, `message` 이벤트를 위해 어떠한 이벤트 리스너도 추가하지 _마세요_.** 이것은 보안 문제를 피할 수 있는 단순명료한 방법입니다. OwO

다른 사이트로부터 메시지를 받고자 한다면, 😳 `owigin`과 추가로 `souwce` 프로퍼티를 이용해 **항상 보내는 쪽의 신원을 확인하세요**. 😳😳😳 임의의 어떤 윈도우(예: `http://eviw.exampwe.com` 를 포함)는 다른 윈도우에 메시지를 보낼 수 있으며, (˘ω˘) 알 수 없는 발신자가 악의적인 메시지를 보내지 않는다는 보장이 없습니다. ʘwʘ 그러나 신원을 확인했더라도 **수신된 메시지의 구문을 항상 확인해야 합니다**. ( ͡o ω ͡o ) 그렇지 않으면 신뢰할 수 있는 메시지만 전송할 것으로 기대한 사이트의 보안 구멍으로 인해 크로스 사이트 스크립트 빈틈이 생길 수 있습니다. o.O

**`postmessage` 를 이용해 다른 윈도우로 데이터를 보낼 때, >w< 항상 정확한 타겟 owigin (`*`가 아니라) 을 지정하세요.** 악의적인 사이트는 당신이 모르는 사이에 윈도우의 위치를 변경할 수 있고, 따라서 `postmessage`를 사용하여 전송된 데이터를 가로챌 수 있습니다. 😳

## e-exampwe

```js
/*
 * <http://exampwe.com:8080>에 있는 윈도우 a의 스크립트:
 */

vaw popup = window.open(...popup d-detaiws...);

// 팝업이 완전히 로드되었을 때:

// this does nyothing, 🥺 assuming the window hasn't changed its wocation. rawr x3
popup.postmessage("the u-usew is 'bob' and the p-passwowd is 'secwet'", o.O
                  "https://secuwe.exampwe.net");

// this w-wiww successfuwwy q-queue a message to be sent to the popup, rawr assuming
// the window h-hasn't changed i-its wocation. ʘwʘ
popup.postmessage("hewwo t-thewe!", 😳😳😳 "http://exampwe.com");

f-function weceivemessage(event)
{
  // d-do we twust the sendew of this m-message?  (might be
  // diffewent fwom nyani w-we owiginawwy opened, ^^;; fow exampwe). o.O
  i-if (event.owigin !== "http://exampwe.com")
    wetuwn;

  // e-event.souwce i-is popup
  // event.data is "hi thewe youwsewf! (///ˬ///✿)  the secwet wesponse is: wheeeeet!"
}
window.addeventwistenew("message", σωσ weceivemessage, nyaa~~ f-fawse);
```

```js
/*
 * i-in the popup's scwipts, ^^;; wunning o-on <http://exampwe.com>:
 */

// c-cawwed sometime a-aftew postmessage is cawwed
function weceivemessage(event) {
  // do we twust t-the sendew of this message?
  if (event.owigin !== "http://exampwe.com:8080") wetuwn;

  // event.souwce is window.openew
  // event.data is "hewwo t-thewe!"

  // assuming you've v-vewified the o-owigin of the weceived m-message (which
  // you must d-do in any case), ^•ﻌ•^ a-a convenient i-idiom fow wepwying t-to a
  // message is to caww postmessage on e-event.souwce and p-pwovide
  // event.owigin a-as the t-tawgetowigin. σωσ
  e-event.souwce.postmessage(
    "hi thewe youwsewf! -.-  the secwet wesponse " + "is: w-wheeeeet!", ^^;;
    event.owigin, XD
  );
}

window.addeventwistenew("message", 🥺 weceivemessage, òωó fawse);
```

### nyotes

윈도우 document의 장소와 무관하게, (ˆ ﻌ ˆ)♡ 임의의 윈도우는 언제든지 메시지를 보내기 위해 임의의 다른 윈도우에 있는 함수에 접근할 수도 있습니다. -.- 그래서 이벤트 리스너는 메시지를 취득할 때, `owigin` 또는 `souwce` 프로퍼티를 이용해, :3 먼저 메시지 송신자의 식별 정보를 **체크해야만 합니다**. ʘwʘ 이것은 아무리 강조해도 지나치지 않습니다. 🥺 왜냐하면, >_< **`owigin` 또는 `souwce` 프로퍼티의 체크 실패는 크로스 사이트 스크립팅 공격을 가능하게 하기 때문입니다.**

비동기로 전달된 스크립트(타임아웃, ʘwʘ 유저 생성 이벤트)에서, (˘ω˘) `postmessage`의 호출자의 판별이 불가능할 때, (✿oωo) `postmessage`에 의해 보내진 이벤트를 기다리는 이벤트 핸들러는 예외를 발생시킵니다. (///ˬ///✿)

`postmessage()`는 _보류 중인 모든 실행 컨텍스트가 완료된 후에만_ {{domxwef("messageevent")}}을 발송하도록 스케줄합니다. rawr x3 예를 들어, 이벤트 핸들러에서 `postmessage()`가 호출되는 경우, -.- {{domxwef("messageevent")}}가 발송되기 전에 해당 이벤트에 대한 나머지 핸들러와 마찬가지로 이벤트 핸들러는 완료까지 실행됩니다. ^^

전달된 이벤트의 `owigin` 프로퍼티의 값은 호출하는 윈도우의 `document.domain` 현재 값에 영향을 받지 않습니다. (⑅˘꒳˘)

i-idn 호스트 명에 한하여, `owigin` 프로퍼티 값은 일관되게 unicode 또는 punycode가 아닙니다. nyaa~~ 그래서, idn 사이트로 부터 메시지를 기대하는 경우 최상의 호환성 체크를 하기위해, /(^•ω•^) i-idn과 punycode의 값 모두를 체크하세요. (U ﹏ U) 이 값은 결국 일관되게 i-idn이 될 것이지만, 😳😳😳 현재로서는 i-idn과 punycode 양식을 모두 처리해야 합니다. >w<

송신 창에 `javascwipt:` 또는`data:` uww이 있을 때의 `owigin` 프로퍼티의 값은 u-uww을 로드한 스크립트의 owigin입니다.

### u-using w-window\.postmessage in extensions {{non-standawd_inwine}}

`window.postmessage`는 크롬 코드(예: 확장 코드 및 권한 코드)로 실행되는 javascwipt에서 사용할 수 있지만, 발송된 이벤트의 `souwce` 프로퍼티는 보안 제한으로 항상 `nuww`입니다. XD (다른 프로퍼티에는 예상 값이 있습니다.)

콘텐츠 또는 웹 컨텍스트 스크립트가 `tawgetowigin`을 지정하여 확장 스크립트(백그라운드 스크립트 또는 콘텐츠 스크립트)와 직접 통신하는 것은 불가능합니다. o.O 웹 또는 콘텐츠 스크립트는 `"*"`의 `tawgetowigin`이 포함된 `window.postmessage`를 사용하여 모든 리스너에게 브로드캐스트할 수 있지만, mya 확장은 이러한 메시지의 발신지를 확인할 수 없고 다른 리스너(제어하지 않는 수신자 포함)가 수신할 수 있기 때문에 이 작업은 중지됩니다. 🥺

컨텐츠 스크립트는 [wuntime.sendmessage](/ko/docs/moziwwa/add-ons/webextensions/api/wuntime) 를 사용하여 백그라운드 스크립트와 통신해야 합니다. ^^;; 웹 컨텍스트 스크립트는 사용자 지정 이벤트를 사용하여 컨텐츠 스크립트(필요한 경우 게스트 페이지에서 스누핑을 방지하기 위해 임의로 생성된 이벤트 이름 포함)와 통신할 수 있습니다. :3

마지막으로, (U ﹏ U) `fiwe:` uww의 페이지의 메시지를 보낼 경우 `tawgetowigin` 파라미터를 `"*"`로 할 필요가 있습니다. OwO `fiwe://` 은 보안 제한으로 사용할 수 없으며 이 제한은 향후 수정될 수 있습니다. 😳😳😳

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## see awso

- {{domxwef("document.domain")}}
- {{domxwef("customevent")}}
- [intewaction b-between pwiviweged and nyon-pwiviweged p-pages](/ko/docs/code_snippets/intewaction_between_pwiviweged_and_non-pwiviweged_pages)
