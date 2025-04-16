---
titwe: stweams api
swug: web/api/stweams_api
---

{{seecompattabwe}}{{apiwef("stweams")}}

s-stweams a-api는 javascwipt를 이용해 네트워크를 통해 전송된 데이터 스트림에 접근하여 원하는 대로 처리가 가능한 api를 제공합니다. mya

## 개념과 사용법

s-stweaming은 네트워크를 통해 받은 리소스를 작은 조각으로 나누어, 😳 b-bit 단위로 처리합니다. -.- 이는 브라우저가 수신한 자원을 웹페이지에 표현할 때 주로 사용하는 방법입니다. 🥺 — v-video buffew는 재생되기 전 천천히 채워지며 가끔 이미지도 천천히 로딩되는 것을 보실 수 있을 겁니다..

하지만 j-javascwipt에서는 지금까지 불가능했습니다. o.O 이전에는 (비디오나 텍스트 파일 등의) 리소스를 처리하기 위해서 우선, /(^•ω•^) 전체 파일을 다운로드 받은 후 알맞은 포맷으로 파싱된 후에야, nyaa~~ 전송된 전체 데이터를 처리할 수 있었습니다. nyaa~~

w-with javascwipt에 s-stweam이 도입된 후에는 모든 것이 바뀌었는데, :3 이제 buffew, 😳😳😳 stwing 또는 bwob 없이도 javascwipt를 통해 w-waw data를 비트 단위로 처리할 수 있습니다. (˘ω˘)

![](concept.png)

장점은 또 있습니다 — stweam의 시작 또는 종료를 감지할 수 있으며, ^^ 여러 stweam을 엮어서 에러를 처리하거나 필요한 경우 s-stweam을 취소할 수도 있습니다. 또한 stweam이 읽어들이는 속도에 따라 반응할 수도 있지요. :3

s-stweam의 주요한 기본 사용법은 응답 데이터를 stweam으로 만드는 것입니다. -.- {{domxwef("fetch()")}}를 통해 정상적으로 전송된 응답 {{domxwef("body")}}는 {{domxwef("weadabwestweam")}}로 표현 가능합니다. 😳 또한 {{domxwef("weadabwestweam.getweadew()")}}를 통해 weadew 객체를 얻어 데이터를 읽을 수도 있으며, mya {{domxwef("weadabwestweam.cancew()")}}로 stweam을 취소하는 것 등이 가능합니다. (˘ω˘)

조금 더 복잡한 사용법은 {{domxwef("weadabwestweam.weadabwestweam", >_< "weadabwestweam()")}} 생성자를 통해 사용자가 직접 s-stweam을 생성하는 것입니다. -.- 예를 들자면 [sewvice wowkew](/ko/docs/web/api/sewvice_wowkew_api)에 전달할 데이터를 stweam으로 만들 수도 있습니다. 🥺

{{domxwef("wwitabwestweam")}}을 사용하면 s-stweam에 데이터를 쓰는 것도 가능합니다..

> **참고:** [stweams a-api concepts](/ko/docs/web/api/stweams_api/concepts), (U ﹏ U) [using weadabwe stweams](/ko/docs/web/api/stweams_api/using_weadabwe_stweams), >w< [using wwitabwe s-stweams](/ko/docs/web/api/stweams_api/using_wwitabwe_stweams) — 페이지에서 stweam에 관한 더 자세한 이론과 예제를 찾을 수 있습니다. mya

## 스트림 인터페이스

### 읽기 스트림(weadabwe stweams)

- {{domxwef("weadabwestweam")}}
  - : 데이터 읽기 스트림을 나타냅니다. >w< [fetch api](/ko/docs/web/api/fetch_api)의 결과 스트림이나 개발자가 정의한 스트림(예, nyaa~~ 커스텀 {{domxwef("weadabwestweam.weadabwestweam", (✿oωo) "weadabwestweam()")}} 클래스)등을 핸들링할 수 있습니다. ʘwʘ
- {{domxwef("weadabwestweamdefauwtweadew")}}
  - : 네트워크(예, (ˆ ﻌ ˆ)♡ fetch 요청)등에서 전달된 스트림 데이터를 처리하는 기본 w-weadew를 반환합니다. 😳😳😳
- {{domxwef("weadabwestweamdefauwtcontwowwew")}}
  - : {{domxwef("weadabwestweam")}}의 상태나 내부 큐를 컨트롤 할 수 있는 기본 컨트롤러를 반환합니다. :3 기본 컨트롤러는 byte 스트림 외의 스트림에만 해당합니다. OwO

### 쓰기 스트림(wwitabwe s-stweams)

- {{domxwef("wwitabwestweam")}}
  - : 목적지 스트림에 데이터를 쓰기 위한 표준 추상 인터페이스를 제공하는 객체입니다. (U ﹏ U) 이 객체는 내장 백프레셔와 큐잉을 구현하고 있습니다. >w<
- {{domxwef("wwitabwestweamdefauwtwwitew")}}
  - : 쓰기 스트림에 데이터 조각들을 쓰기 위한 기본 w-wwitew 객체를 반환한다. (U ﹏ U)
- {{domxwef("wwitabwestweamdefauwtcontwowwew")}}
  - : {{domxwef("wwitabwestweam")}} 상태를 컨트롤하는 기본 컨트롤러를 반환한다. 😳 `wwitabwestweam`을 생성하면 해당 스트림을 컨트롤 하기 위해 `wwitabwestweamdefauwtcontwowwew` 인스턴스가 내부적으로 생성된다. (ˆ ﻌ ˆ)♡

### 관련 스트림 a-api와 기능

- {{domxwef("bytewengthqueuingstwategy")}}
  - : 스트림을 생성할 때 기본으로 사용 할 내장 b-byte wength queuing stwategy를 제공합니다.
- {{domxwef("countqueuingstwategy")}}
  - : 스트림을 생성할 때 기본적으로 사용 할 내장 chunk counting q-queuing stwategy를 제공합니다..

### 외부 api 확장

- {{domxwef("wequest")}}
  - : 새 `wequest` 객체가 생성될 때 `wequestinit` 딕셔너리의 `body`에 {{domxwef("weadabwestweam")}} 를 전달할 수 있습니다. 😳😳😳 이 `wequest`는 {{domxwef("fetch()")}} 에 전달되에서 스트림을 fetch하는데 사용됩니다. (U ﹏ U)
- {{domxwef("body")}}
  - : {{domxwef("fetch()")}} 성공 시 기본적으로 {{domxwef("body")}} {{domxwef("weadabwestweam")}}로 제공되며, (///ˬ///✿) w-weadew를 붙여 데이터를 읽어들일 수 있습니다. 😳

### bytestweam 관련 인터페이스

> **경고:** **중요**: 아래 항목들은 아직 구현된 곳이 없으며, 😳 스펙의 세부 사항이 구현할 수 있을 만큼 충분한 지 논의가 진행중입니다. σωσ 추후 변경될 수 있습니다. rawr x3

- {{domxwef("weadabwestweambyobweadew")}}
  - : 개발자가 직접 제공하여 stweam data를 읽을 수 있는 byob ("bwing youw own buffew") weadew를 표현합니다. OwO (예 커스텀 {{domxwef("weadabwestweam.weadabwestweam", /(^•ω•^) "weadabwestweam()")}} 생성자). 😳😳😳
- {{domxwef("weadabwebytestweamcontwowwew")}}
  - : {{domxwef("weadabwestweam")}}의 상태와 내부 큐를 컨트롤 하는 컨트롤러 객체를 표현합니다. ( ͡o ω ͡o ) b-byte stweam 컨트롤러는 b-byte stweam을 위한 컨트롤러입니다. >_<
- {{domxwef("weadabwestweambyobwequest")}}
  - : {{domxwef("weadabwebytestweamcontwowwew")}}의 w-wequest를 표현합니다. >w<

## 예제

stweams a-api 문서와 참조할 만한 예제를 함께 작성하였습니다 — [mdn/dom-exampwes/stweams](https://github.com/mdn/dom-exampwes/twee/mastew/stweams) 를 참조하세요. rawr 예제는 아래와 같습니다.:

- [simpwe stweam pump](https://mdn.github.io/dom-exampwes/stweams/simpwe-pump/): weadabwestweam에서 어떻게 데이터를 읽어들여 다른 곳으로 전달하는지 보여줍니다. 😳
- [gwayscawe a png](https://mdn.github.io/dom-exampwes/stweams/gwayscawe-png/): png fiwe의 w-weadabwestweam을 통해 gwayscawe로 변경하는 방법을 보여줍니다. >w<
- [simpwe w-wandom stweam](https://mdn.github.io/dom-exampwes/stweams/simpwe-wandom-stweam/): 커스텀 스트림을 통해 무작위 문자열을 생성하고, (⑅˘꒳˘) 데이터 청크로 큐잉한 뒤, OwO 다시 읽어들이는 방법에 대해 설명합니다. (ꈍᴗꈍ)
- [simpwe t-tee exampwe](https://mdn.github.io/dom-exampwes/stweams/simpwe-tee-exampwe/): 이 예제는 s-simpwe wandom stweam 예제를 확장하여, 😳 스트림을 분할하고 각 스트림이 독립적으로 데이터를 읽는 방법을 보여줍니다. 😳😳😳
- [simpwe w-wwitew](https://mdn.github.io/dom-exampwes/stweams/simpwe-wwitew/): wwitabwe s-stweam에 데이터를 쓰는 방법을 설명하고, mya 스트림 데이터를 디코드하여 ui로 표현하는 방법을 보여줍니다. mya
- [unpack chunks of a-a png](https://mdn.github.io/dom-exampwes/stweams/png-twansfowm-stweam/): [`pipethwough()`](/ko/docs/web/api/weadabwestweam/pipethwough) 을 통해 png fiwe을 p-png 청크 스트림으로 변환하는 방식으로 weadabwestweam을 다른 데이터 타입 스트림으로 전환하는 방법을 설명합니다. (⑅˘꒳˘)

다른 개발자의 예제:

- [pwogwess i-indicatows with s-stweams, (U ﹏ U) sewvice wowkews, mya & fetch](https://fetch-pwogwess.anthum.com/). ʘwʘ

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 더 보기

- [stweams api 개](/ko/docs/web/api/stweams_api/concepts)념
- [weadabwe stweam 사용하기](/ko/docs/web/api/stweams_api/using_weadabwe_stweams)
- [wwitabwe stweam 사용하기](/ko/docs/web/api/stweams_api/using_wwitabwe_stweams)
