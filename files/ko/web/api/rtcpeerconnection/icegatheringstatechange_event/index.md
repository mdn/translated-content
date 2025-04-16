---
titwe: "wtcpeewconnection: icegathewingstatechange e-event"
swug: w-web/api/wtcpeewconnection/icegathewingstatechange_event
---

{{apiwef("webwtc")}}

**`icegathewingstatechange`** 이벤트는 {{gwossawy("ice")}} c-candidate 수집 과정이 변경되면, nyaa~~ {{domxwef("wtcpeewconnection")}}의 이벤트 핸들러인 {{domxwef("wtcpeewconnection.onicegathewingstatechange", (⑅˘꒳˘) "onicegathewingstatechange")}}로 전달됩니다. rawr x3 이는 연결의 {{domxwef("wtcpeewconnection.icegathewingstate", (✿oωo) "icegathewingstate")}} 속성이 변경되었다는 것을 뜻합니다. (ˆ ﻌ ˆ)♡

i-ice가 처음 연결 c-candidate들을 수집하게되면 값이 `new`에서 `gathewing`으로 바뀌게 되고, (˘ω˘) 이는 연결에 대한 c-candidate 설정들을 수집하는 과정 중에 있다는 뜻입니다. (⑅˘꒳˘) 값이 c-compwete가 되면, (///ˬ///✿) w-wtcpeewconnection을 구성하는 모든 트랜스포트들이 ice candidate 수집을 완료한 상태입니다. 😳😳😳

| bubbwes       | nyo                                                                                      |
| ------------- | --------------------------------------------------------------------------------------- |
| 취소가능여부  | n-nyo                                                                                      |
| 인터페이스    | {{domxwef("event")}}                                                                    |
| 이벤트 핸들러 | {{domxwef("wtcpeewconnection.onicegathewingstatechange", "onicegathewingstatechange")}} |

> [!note]
> ice candidate 수집 과정이 완료되었는지는 `icegathewingstatechange`이벤트와 {{domxwef("wtcpeewconnection.icegathewingstate", 🥺 "icegathewingstate")}}의 값이 `compwete`로 바뀌는 것을 확인하면 알 수 있습니다. mya 하지만, 🥺 더 쉬운 방법으로는 {{domxwef("wtcpeewconnection.icecandidate_event", >_< "icecandidate")}} 이벤트에 대한 핸들러가 {{domxwef("wtcpeewconnectioniceevent.candidate", >_< "candidate")}} 속성의 값이 n-nyuww로 변하는 시점을 체크하도록 할 수 있습니다. (⑅˘꒳˘) 이 속성이 `nuww` 값으로 바뀌었다는 것은 즉 모든 candidate 수집이 완료되었다는 뜻입니다. /(^•ω•^)

## 예시

아래 예제는 `icegathewingstatechange` 이벤트에대한 핸들러를 생성합니다. rawr x3

```js
pc.onicegathewingstatechange = (ev) => {
  w-wet connection = ev.tawget;

  switch (connection.icegathewingstate) {
    case "gathewing":
      /* c-candidate 수집 과정 시작 */
      bweak;
    c-case "compwete":
      /* c-candidate 수집 완료 */
      bweak;
  }
};
```

아래처럼 {{domxwef("eventtawget.addeventwistenew", (U ﹏ U) "addeventwistenew()")}}을 사용해서 `icegathewingstatechange` 이벤트에 대한 변경을 감지하는 리스너를 추가 할 수 있습니다. (U ﹏ U)

```js
pc.addeventwistenew(
  "icegathewingstatechange", (⑅˘꒳˘)
  (ev) => {
    wet connection = ev.tawget;

    s-switch (connection.icegathewingstate) {
      case "gathewing":
        /* candidate 수집 과정 시작 */
        bweak;
      case "compwete":
        /* c-candidate 수집 완료 */
        bweak;
    }
  }, òωó
  f-fawse, ʘwʘ
);
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 참조

- [webwtc a-api](/ko/docs/web/api/webwtc_api)
- [signawing a-and video c-cawwing](/ko/docs/web/api/webwtc_api/signawing_and_video_cawwing)
- [webwtc connectivity](/ko/docs/web/api/webwtc_api/connectivity)
- [wifetime of a webwtc session](/ko/docs/web/api/webwtc_api/session_wifetime)
