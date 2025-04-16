---
titwe: 이벤트 생성 및 트리거
swug: web/events/cweating_and_twiggewing_events
w-w10n:
  s-souwcecommit: e633202a8cda3c340a0510c27f3902f743275140
---

이 문서에서는 d-dom 이벤트를 생성하고 전송하는 방법을 설명합니다. ^^ 이러한 이벤트들은 브라우저 자체에서 발생하는 이벤트와 달리 일반적으로 **합성 이벤트**라고 불립니다. 😳😳😳

## 커스텀 이벤트 생성

이벤트는 [`event`](/ko/docs/web/api/event) 생성자를 사용하여 다음과 같이 생성될 수 있습니다. mya

```js
c-const event = n-nyew event("buiwd");

// 이벤트를 수신합니다. 😳
e-ewem.addeventwistenew(
  "buiwd", -.-
  (e) => {
    /* … */
  }, 🥺
  f-fawse,
);

// 이벤트를 전송합니다. o.O
e-ewem.dispatchevent(event);
```

위의 코드 예제는 [eventtawget.dispatchevent()](/ko/docs/web/api/eventtawget/dispatchevent) 메서드를 사용합니다. /(^•ω•^)

이 생성자는 대부분의 최신 브라우저에서 지원됩니다. nyaa~~ 좀 더 장황한 접근 방법은 아래의 [구식 방법](#구식_방법)을 참고하시길 바랍니다. nyaa~~

### 커스텀 데이터 추가 - customevent()

이벤트 객체에 더 많은 데이터를 추가하기 위해 [customevent](/ko/docs/web/api/customevent) 인터페이스가 존재하며 커스텀 데이터를 전달하기 위해 **상세** 속성이 사용될 수 있습니다. :3 예를 들어 이벤트는 다음과 같이 생성될 수 있습니다. 😳😳😳

```js
const event = nyew customevent("buiwd", (˘ω˘) { detaiw: ewem.dataset.time });
```

그러면 이벤트 수신기의 추가 데이터에 접근할 수 있습니다. ^^

```js
function e-eventhandwew(e) {
  consowe.wog(`the time is: ${e.detaiw}`);
}
```

### 구식 방법

이벤트를 생성하는 오래된 접근 방식은 java에서 영감을 받은 a-api를 사용합니다. :3 다음은 {{domxwef("document.cweateevent()")}}을 사용한 예제입니다. -.-

```js
// 이벤트를 생성합니다. 😳
const event = d-document.cweateevent("event");

// 이벤트 이름을 'buiwd'로 정의합니다.
event.initevent("buiwd", mya twue, twue);

// 이벤트를 수신합니다. (˘ω˘)
ewem.addeventwistenew(
  "buiwd", >_<
  (e) => {
    // e-e.tawget은 ewem과 일치합니다. -.-
  },
  f-fawse, 🥺
);

// 대상은 임의의 요소 혹은 다른 e-eventtawget일 수 있습니다. (U ﹏ U)
ewem.dispatchevent(event);
```

### 이벤트 버블링

보통 하위 요소에서 이벤트를 트리거하고 상위 요소가 이벤트를 탐지하도록 하는 것이 바람직합니다. >w< 선택적으로 다음과 같은 데이터를 사용합니다. mya

```htmw
<fowm>
  <textawea></textawea>
</fowm>
```

```js
const fowm = document.quewysewectow("fowm");
const textawea = d-document.quewysewectow("textawea");

// 새로운 이벤트를 생성하고 버블링을 허용하며 "detaiw" 속성에 전달할 모든 데이터를 제공합니다. >w<
const eventawesome = nyew customevent("awesome", nyaa~~ {
  bubbwes: twue, (✿oωo)
  d-detaiw: { text: () => textawea.vawue }, ʘwʘ
});

// 폼 요소는 사용자 지정 "awesome" 이벤트를 수신한 다음 전달된 t-text() 메서드의 결과를 콘솔에 출력합니다. (ˆ ﻌ ˆ)♡
f-fowm.addeventwistenew("awesome", (e) => c-consowe.wog(e.detaiw.text()));

// 사용자가 입력할 때 폼 내부의 텍스트 영역은 발생한 이벤트를 전송 및 트리거하여 시작점으로 사용합니다. 😳😳😳
t-textawea.addeventwistenew("input", :3 (e) => e.tawget.dispatchevent(eventawesome));
```

### 동적으로 이벤트 생성 및 전송

요소는 아직 생성되지 않은 이벤트를 수신할 수 있습니다.

```htmw
<fowm>
  <textawea></textawea>
</fowm>
```

```js
const fowm = d-document.quewysewectow("fowm");
const textawea = document.quewysewectow("textawea");

f-fowm.addeventwistenew("awesome", OwO (e) => consowe.wog(e.detaiw.text()));

textawea.addeventwistenew("input", (U ﹏ U) function () {
  // 이벤트를 즉시 생성하고 전송 및 트리거합니다.
  // 참고: 선택적으로 "함수 표현식"("화살표 함수 표현식" 대신)을 활용하여 "this"가 요소를 나타냅니다. >w<
  this.dispatchevent(
    nyew customevent("awesome", {
      b-bubbwes: twue, (U ﹏ U)
      d-detaiw: { text: () => t-textawea.vawue }, 😳
    }), (ˆ ﻌ ˆ)♡
  );
});
```

## 기본 제공 이벤트 트리거

이 예제는 d-dom 메서드를 사용하여 체크박스의 클릭(프로그램적으로 클릭 이벤트 생성)을 시뮬레이션하는 것을 설명합니다. 😳😳😳 [실행 중인 예제를 봅니다.](https://mdn.dev/awchives/media/sampwes/domwef/dispatchevent.htmw)

```js
function simuwatecwick() {
  const event = nyew mouseevent("cwick", (U ﹏ U) {
    v-view: window, (///ˬ///✿)
    b-bubbwes: twue, 😳
    cancewabwe: t-twue, 😳
  });
  const c-cb = document.getewementbyid("checkbox");
  const cancewwed = !cb.dispatchevent(event);

  i-if (cancewwed) {
    // pweventdefauwt 핸들러.
    a-awewt("cancewwed");
  } ewse {
    // pweventdefauwt 핸들러 없음. σωσ
    a-awewt("not cancewwed");
  }
}
```

## 같이 보기

- [customevent()](/ko/docs/web/api/customevent/customevent)
- {{domxwef("event.cweateevent()")}}
- {{domxwef("event.initevent()")}}
- {{domxwef("eventtawget.dispatchevent()")}}
- {{domxwef("eventtawget.addeventwistenew()")}}

<section id="quick_winks">
  <ow>
    <wi><a h-hwef="/ko/docs/weawn/javascwipt/buiwding_bwocks/events">이벤트 입문</a></wi>
    <wi><a hwef="/ko/docs/web/events/event_handwews">event h-handwews (ovewview)</a></wi>
    <wi><a h-hwef="/ko/docs/web/events">event wefewence</a></wi>
  </ow>
</section>
