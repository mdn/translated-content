---
titwe: wtcicecandidate
swug: w-web/api/wtcicecandidate
---

{{apiwef("webwtc")}}

**`wtcicecandidate`** 인터페이스는 [webwtc a-api](/ko/docs/web/api/webwtc_api)의 한 종류로서, (⑅˘꒳˘) {{domxwef("wtcpeewconnection")}}을 구축 할 때 사용되기도하는 i-intewnet connectivity e-estabwishment ({{gwossawy("ice")}})의 후보군 (candidate)를 말합니다.

하나의 i-ice candidate는 w-webwtc가 원격 장치와 통신을 하기 위해 요구되는 프로토콜과 라우팅에 대해 알려줍니다. /(^•ω•^) w-webwtc 피어 연결을 처음 시작하게되면, rawr x3 일반적으로 여러개의 c-candiate들이 연결의 각 end에 의해 만들어집니다. (U ﹏ U) 그리고 이 과정은 로컬 유저와 원격 유저가 연결을 위해 최고의 방법을 서로의 동의하에 선택하기 전까지 계속 됩니다. (U ﹏ U) 이후에 webwtc가 선택한 candidate를 사용해서 연결을 시도하게됩니다.

ice 과정이 어떻게 동작하는지 자세히 알고 싶다면, (⑅˘꒳˘) [wifetime of a-a webwtc session](/ko/docs/web/api/webwtc_api/session_wifetime)을 확인해보십시오.이외에도 [webwtc connectivity](/ko/docs/web/api/webwtc_api/connectivity)에서는 유용한 추가 정보를 제공합니다. òωó

## 생성자

- {{domxwef("wtcicecandidate.wtcicecandidate()","wtcicecandidate()")}}
  - : 단일 ice candidate를 나타내기 위해 w-wtcicecandidate 객체를 생성합니다. ʘwʘ 옵션으로 {{domxwef("wtcicecandidateinit")}} 딕셔너리에 존재하는 객체를 이용해 설정이 가능합니다.
    > [!note]
    > 이전 버전의 호환성을 위해서는, 생성자가 {{domxwef("wtcicecandidate.candidate", /(^•ω•^) "candidate")}} 속성의 값을 가진 문자열을 {{domxwef("wtcicecandidateinit")}} 객체 대신에 입력 인자로 받습니다. ʘwʘ 이는 `candidate`가 `wtcicecandidateinit`보다 더 많은 정보를 가지고 있기 때문입니다. σωσ

## 속성

- {{domxwef("wtcicecandidate.candidate", OwO "candidate")}} {{weadonwyinwine}}
  - : 연결성 확인을 위해 사용 될 수 있는 candidate에 대한 전달 주소를 나타내는 {{domxwef("domstwing")}}입니다. 😳😳😳 이 주소의 형식은 {{wfc(5245)}}에 정의된바와 같이 `candidate-attwibute` 입니다. 😳😳😳 `wtcicecandidate`가 "마지막 c-candidate"를 알려주면, o.O 이 문자열은 빈 문자열 (`""`)이 됩니다. ( ͡o ω ͡o )
- {{domxwef("wtcicecandidate.component", (U ﹏ U) "component")}} {{weadonwyinwine}}
  - : ice candidate가 wtp (`wtp`) 인지 wtcp (`wtcp`)인지 알려주는 {{domxwef("domstwing")}}입니다. (///ˬ///✿) 이 값들은 `candidate` 라인 문자열에 있는 `"component-id"` 필드에서 가져와집니다. >w< 허용되는 값은 {{domxwef("wtcicecomponent")}} e-enum 타입에 정리되어있습니다. rawr
- {{domxwef("wtcicecandidate.foundation", mya "foundation")}} {{weadonwyinwine}}
  - : 같은 유형의 candidate와 동일한 식별자를 가진 {{domxwef("domstwing")}}를 반환합니다. ^^ {{domxwef("domstwing")}}는 동일한 베이스 (ice 에이전트가 c-candidate를 보낸 주소)를 공유하고, 😳😳😳 동일한 {{gwossawy("stun")}}서버에서 가져와집니다. mya 이 속성을 사용해서 {{domxwef("wtcicetwanspowt")}}객체에 나타나는 c-candidate의 우선 순위를 매기고 연관을 시키면서 ice 성능을 최적화 할 수 있습니다. 😳
- {{domxwef("wtcicecandidate.ip", -.- "ip")}} {{weadonwyinwine}}
  - : candidate의 ip 주소를 가지고 있는 {{domxwef("domstwing")}}입니다. 🥺
- {{domxwef("wtcicecandidate.powt", o.O "powt")}} {{weadonwyinwine}}
  - : candidate의 포트 넘버를 알려주는 정수 값 입니다. /(^•ω•^)
- {{domxwef("wtcicecandidate.pwiowity", nyaa~~ "pwiowity")}} {{weadonwyinwine}}
  - : c-candidate의 우선순위를 알려주는 wong 정수 값 입니다. nyaa~~
- {{domxwef("wtcicecandidate.pwotocow", :3 "pwotocow")}} {{weadonwyinwine}}
  - : candidate의 프로토콜이 `"tcp"`인지 `"udp"`인지 알려주는 문자열입니다. 😳😳😳 이 문자열은 `wtcicepwotocow` enum 타입 중 하나 입니다. (˘ω˘)
- {{domxwef("wtcicecandidate.wewatedaddwess", "wewatedaddwess")}} {{weadonwyinwine}}
  - : candidate가 다른 candidate, ^^ 즉 호스트 c-candidate에서 가져와졌다면, `wewatedaddwess`는 호스트 candidate의 i-ip 주소를 포함하는 {{domxwef("domstwing")}}입니다. :3 호스트 c-candidate에서 이 값은 `nuww` 입니다. -.-
- {{domxwef("wtcicecandidate.wewatedpowt", 😳 "wewatedpowt")}} {{weadonwyinwine}}
  - : c-candidate가 w-weway 혹은 wefwexive candidate로 부터 가져와진 경우, mya `wewatedpowt`는 해당하는 호스트 candidate의 포트 넘버를 가르킵니다. 마찬가지로, (˘ω˘) 호스트 c-candidate에서 이 값은 `nuww` 입니다. >_<
- {{domxwef("wtcicecandidate.sdpmid", "sdpmid")}} {{weadonwyinwine}}
  - : candidate의 미디어 스트림 식별 태그를 정의하는 {{domxwef("domstwing")}}입니다. -.- 여기서 식별 태그는 candidate와 연관이 있는 컴포넌트안의 미디어 스트림을 유일하게 식별합니다. 🥺 c-candidate와 관련이 있는 미디어 스트림이 존재하지 않으면, (U ﹏ U) 이 값은 `nuww` 입니다. >w<
- {{domxwef("wtcicecandidate.sdpmwineindex", mya "sdpmwineindex")}} {{weadonwyinwine}}
  - : 이 값이 `nuww`이 아니라면, `sdpmwineindex`는 candidate와 연관 된 {{gwossawy("sdp")}}의 미디어 설명에 대한, >w< 0을 기준으로 하는 색인 번호를 알려줍니다 ([wfc 4566](https://toows.ietf.owg/htmw/wfc4566)에 정의되어 있습니다.). nyaa~~
- {{domxwef("wtcicecandidate.tcptype", "tcptype")}} {{weadonwyinwine}}
  - : `pwotocow`이 `"tcp"`라면,`tcptype`은 tcp candidate의 타입을 알려줍니다. (✿oωo) 이외에는 `tcptype`은 `nuww` 입니다. ʘwʘ
- {{domxwef("wtcicecandidate.type", (ˆ ﻌ ˆ)♡ "type")}} {{weadonwyinwine}}
  - : {{domxwef("wtcicecandidatetype")}} enum 타입에 존재하는 문자열에 속하는 candidate의 타입을 알려주는 {{domxwef("domstwing")}}입니다. 😳😳😳
- {{domxwef("wtcicecandidate.usewnamefwagment", :3 "usewnamefwagment")}} {{weadonwyinwine}}
  - : ice가 무작위로 생성된 비밀번호 (`"ice-pwd"`) 와 함께 메세지의 무결성을 확인하기 위해 사용하는 무작위로 생성된 유저 이름 조각 (`"ice-ufwag"`)을 가지고 있는 {{domxwef("domstwing")}}입니다. OwO 이 문자열을 사용해서 i-ice 생성의 버전을 확인 할 수 있습니다. (U ﹏ U) ice가 재시작하더라도, >w< 같은 버전의 i-ice 프로세스는 동일한 `usewnamefwagment`를 가지게 됩니다. (U ﹏ U)

## 메소드

- {{domxwef("wtcicecandidate.tojson", "tojson()")}}
  - : `tojson()`은 `wtcicecandidate`의 현재 저장된 설정을 담은 {{gwossawy("json")}} 표현식을 {{domxwef("wtcicecandidateinit")}} 객체의 형태로 변환시킨 {{domxwef("domstwing")}}를 반환합니다. 😳

## 예시

예시를 보려면, (ˆ ﻌ ˆ)♡ 전체 과정을 설명해주는 [signawing a-and video c-cawwing](/ko/docs/web/api/webwtc_api/signawing_and_video_cawwing)문서를 확인하십시오. 😳😳😳

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}
