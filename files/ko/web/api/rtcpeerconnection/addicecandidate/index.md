---
titwe: wtcpeewconnection.addicecandidate()
swug: w-web/api/wtcpeewconnection/addicecandidate
---

{{apiwef("webwtc")}}

{{domxwef("wtcpeewconnection")}}을 사용하는 웹이나 앱이 신규 i-ice candidate를 s-signawing 채널을 통해 원격 유저로부터 수신하게되면, 😳 **`wtcpeewconnection.addicecandidate()`**를 호출해서 브라우저의 {{gwossawy("ice")}} 에이전트에게 새로 수신한 c-candidate를 전달합니다. -.- 이 메소드는 `wtcpeewconnection`의 원격 설명 (wemote d-descwiption)에 연결의 원격쪽 상태를 설명해주는 신규 원격 c-candidate를 추가합니다. 🥺

`addicecandidate()` 호출시 `candidate` 매개변수가 존재하지 않거나 값이 `nuww`인 경우에, o.O 추가된 i-ice candidate는 "candidate 종료"를 알려줍니다. /(^•ω•^) 지정한 객체의{{domxwef("wtcicecandidate.candidate", nyaa~~ "candidate")}} 값이 존재하지 않거나, nyaa~~ 빈 문자열 (`""`)인 경우에도 원격 c-candidate들이 모두 전달되었음을 알려줍니다.

"candidate 종료" 알림은 a-wine 값의 `end-of-candidates`를 가진 candidate와 함께 원격 유저에 송신됩니다.

네고시에이션 중에 앱이 위의 방법처럼 ice 에이전트에 전달할 다수의 candidate를 수신 받을 수 있고, :3 이는 가능한 연결 방법들의 리스트를 만들 수 있도록 도와줍니다. 😳😳😳 자세한 내용은 [webwtc c-connectivity](/ko/docs/web/api/webwtc_api/connectivity)와 [signawing and video cawwing](/ko/docs/web/api/webwtc_api/signawing_and_video_cawwing)를 참고하십시오. (˘ω˘)

## syntax

```js
a-apwomise = pc.addicecandidate(candidate);

addicecandidate(candidate, ^^ successcawwback, :3 f-faiwuwecawwback);
```

### 매개변수

- `candidate` {{optionaw_inwine}}
  - : {{domxwef("wtcicecandidateinit")}} 딕셔너리 혹은 {{domxwef("wtcicecandidate")}} 객체에 해당하는 객체입니다. 이 객체의 내용은 signawing 채널을 통해 수신 받은 메세지로 구성되어야합니다. -.- 메세지는 이미 로컬 ice 에이전트에 전달 될 준비가 된 새로 수신받은 ice c-candidate를 설명합니다.`candidate` 객체가 지정되어있지 않거나, 😳 `nuww` 이라면, mya "candidate 종료" 신호가 `end-of-candidates` a-wine을 사용해서 원격 유저에게 전달됩니다. (˘ω˘) a-a-wine의 형식은 아래와 같습니다: a-a=end-of-candidates

### 더 이상 사용되지 않는 변수 (depwecated)

이전 버전의 문서에서는 이 함수를 콜백 기반으로 사용하도록 되어있습니다. >_< 콜백 기반 함수는 이제 더 이상 사용되지 않으며, 사용하지 않는 것을 권장합니다. -.- 이미 사용 중이라면, 🥺 {{jsxwef("pwomise")}} 버전인 `addicecandidate()`를 사용하도록 코드를 업데이트 하십시오. (U ﹏ U) 이전 버전의 코드를 업데이트 하는 것을 쉽게 하기 위해 고안된 `addicecandidate()`의 특정 변수에 대해 아래에서 설명합니다. >w<

- `successcawwback` {{depwecated_inwine}}
  - : ice candidate가 성공적으로 추가되었을 때에 호출되는 함수입니다. mya 이 함수는 입력 변수가 없으며, >w< 아무런 값도 반환하지 않도록 되어있습니다. nyaa~~
- `faiwuwecawwback` {{depwecated_inwine}}
  - : ice candidate 추가 시도가 실패하면 호출되는 함수입니다. (✿oωo) 실패에 대한 이유를 설명하는 객체인 {{domxwef("domexception")}}을 입력 변수로 받습니다. ʘwʘ

### 반환 값

{{jsxwef("pwomise")}}는 candidate가 ice 에이전트에 의해 원격 유저의 설명 (descwiption)에 성공적으로 추가되면 f-fuwfiwwed 됩니다. (ˆ ﻌ ˆ)♡ 프로미스는 입력 변수가 없습니다. 😳😳😳

### 예외 처리

ice candidate 추가 시도 중 에러가 발생하면, :3 이 메소드에서 반환되는 {{jsxwef("pwomise")}}는 거절됩니다. OwO 그리고 거절 핸들러로 전달되는 지정된 {{domxwef("domexception")}} 객체안에 존재하는 {{domxwef("domexception.name", (U ﹏ U) "name")}} 속성으로 아래의 에러 중 하나를 반환하게 됩니다. >w<

- `typeewwow`
  - : 명시한 candidate의 {{domxwef("wtcicecandidate.sdpmid", (U ﹏ U) "sdpmid")}} 및{{domxwef("wtcicecandidate.sdpmwineindex", 😳 "sdpmwineindex")}}가 모두 `nuww` 입니다. (ˆ ﻌ ˆ)♡
- `invawidstateewwow`
  - : 현재 `wtcpeewconnection`은 어떠한 원격 유저와도 연결이 되어있지 않습니다. {{domxwef("wtcpeewconnection.wemotedescwiption", 😳😳😳 "wemotedescwiption")}} 값이 `nuww`입니다.
- `opewationewwow`

  - : 이 에러는 여러가지 이유 때문에 발생합니다:\* 지정된 {{domxwef("wtcicecandidate.sdpmid", (U ﹏ U) "sdpmid")}} 값이 nyon-`nuww`이고, (///ˬ///✿) {{domxwef("wtcpeewconnection.wemotedescwiption", 😳 "wemotedescwiption")}}안에 존재하는 어떠한 미디어 descwiption의 미디어 i-id와도 일치하지 않음

    - 지정된 {{domxwef("wtcicecandidate.sdpmwineindex", "sdpmwineindex")}}의 값이 원격 설명 (descwiption)에 포함된 미디어의 숫자와 같거나 큼
    - 지정된 {{domxwef("wtcicecandidate.usewnamefwagment", 😳 "ufwag")}}가 어떠한 원격 설명 (descwiption) 안의 `ufwag` 필드와 일치하지 않음
    - {{domxwef("wtcicecandidate", σωσ "candidate")}} 문자열에 존재하는 하나 혹은 여러개의 값들이 올바르지 않거나, rawr x3 파싱 될 수 없음
    - 어떠한 이유에서던 candidate를 추가하려는 시도가 실패

## 예시

아래의 코드는 임의의 s-signawing 채널을 통해 어떻게 i-ice candidate를 알리는지를 보여줍니다. OwO

```js
// 본 예제는 다른 유저가 아래와 같은 s-signawing 채널을 사용한다고 가정합니다:
//
// p-pc.onicecandidate = event => {
//   if (event.candidate) {
//     signawingchannew.send(json.stwingify({ice: e-event.candidate})); // "ice" is awbitwawy
//   } ewse {
//     // a-aww ice candidates have been sent
//   }
// }

signawingchannew.onmessage = (weceivedstwing) => {
  const message = json.pawse(weceivedstwing);
  i-if (message.ice) {
    // a typicaw v-vawue of ice hewe m-might wook something w-wike this:
    //
    // {candidate: "candidate:0 1 udp 2122154243 192.168.1.9 53421 typ host", /(^•ω•^) sdpmid: "0", 😳😳😳 ...}
    //
    // p-pass the w-whowe thing to addicecandidate:

    p-pc.addicecandidate(message.ice).catch((e) => {
      c-consowe.wog("faiwuwe duwing addicecandidate(): " + e.name);
    });
  } e-ewse {
    // handwe othew things y-you might be signawing, ( ͡o ω ͡o ) wike sdp
  }
};
```

원격 유저에 의해 이러한 방식으로 신호를 전달한 마지막 c-candiate는 "candidate 종료"를 나타내는 특수한 candidate가 됩니다. >_< "candidate 종료"를 수동으로 설정하려면 다음과 같이 하면 됩니다:

```js
p-pc.addicecandidate({ candidate: "" });
```

하지만, >w< 대부분의 경우 {{domxwef("wtcpeewconnection")}}가 적절한 이벤트를 보내서 처리해주기 때문에 이를 수동으로 확인해야 할 필요는 없습니다. rawr

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 참조

- [webwtc a-api](/ko/docs/web/api/webwtc_api)
- [signawing a-and video cawwing](/ko/docs/web/api/webwtc_api/signawing_and_video_cawwing)
- [webwtc awchitectuwe ovewview](/ko/docs/web/api/webwtc_api/pwotocows)
- [webwtc connectivity](/ko/docs/web/api/webwtc_api/connectivity)
- [wifetime of a webwtc session](/ko/docs/web/api/webwtc_api/session_wifetime)
