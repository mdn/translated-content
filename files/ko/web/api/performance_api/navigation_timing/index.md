---
title: 내비게이션 타이밍(Navigation Timing)
slug: Web/API/Performance_API/Navigation_timing
---

**Navigation Timing API**는 웹 사이트의 성능을 측정하는 데 사용할 수 있는 데이터를 제공합니다. 같은 목적에 사용했던 다른 JavaScript 기반 메커니즘과 다르게 이 API는 더 유용하고 정확한 종단 간(end-to-end) 대기 시간(latency)을 제공할 수 있습니다.

다음 예제는 지각하는(perceived) 로딩 시간을 측정하는 법을 보여줍니다.

```js
function onLoad() {
  var now = new Date().getTime();
  var page_load_time = now - performance.timing.navigationStart;
  console.log("User-perceived page loading time: " + page_load_time);
}
```

{{domxref("PerformanceTiming")}} 인터페이스로 접근할 수 있는 밀리 초 단위로 주어진 측정된 이벤트가 많이 있습니다. 발생하는 순서로 된 이벤트 목록입니다.

- navigationStart
- unloadEventStart
- unloadEventEnd
- redirectStart
- redirectEnd
- fetchStart
- domainLookupStart
- domainLookupEnd
- connectStart
- connectEnd
- secureConnectionStart
- requestStart
- responseStart
- responseEnd
- domLoading
- domInteractive
- domContentLoadedEventStart
- domContentLoadedEventEnd
- domComplete
- loadEventStart
- loadEventEnd

`window.performance.navigation` 객체는 리다이렉트(redirect), 앞/뒤 버튼, 혹은 보통의 URL 로딩이 어떤 페이지 로드를 일으키는지(trigger) 아는 데 사용할 수 있는 두 속성을 저장합니다.

window\.performance.navigation.type:

| 상수                                                              | 값  | 설명                                                                                                                                                                                  |
| ----------------------------------------------------------------- | --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <a name="const_next"><code>TYPE_NAVIGATENEXT</code></a>           | 0   | 아래 목록의 TYPE_RELOAD과 TYPE_BACK_FORWARD가 사용하는 것 외에, 링크 클릭하기, 사용자 에이전트(UA) 주소 바에 URL 입력하기, 폼 전송, 스크립트 연산으로 초기화하기로 시작한 내비게이션. |
| <a name="const_next_no_duplicate"><code>TYPE_RELOAD</code></a>    | 1   | 리로드(reload) 연산 혹은 location.reload() 메소드를 통한 내비게이션.                                                                                                                  |
| <a name="const_prev"><code>TYPE_BACK_FORWARD</code></a>           | 2   | 히스토리 순회(traversal) 연산을 통한 내비게이션                                                                                                                                       |
| <a name="const_prev_no_duplicate"><code>TYPE_UNDEFINED</code></a> | 255 | 위 값으로 정의되지 않는 어떠한 내비게이션 타입.                                                                                                                                       |

`window.performance.navigation.redirectCount`는 마지막 페이지에 도달할 때까지, 만일 있다면 몇 번의 리다이렉션이 일어났는지를 나타냅니다.

Navigation Timing API는 XHR로 서버에 보낸 클라이언트 쪽 성능 데이터를 모을 뿐 아니라 이전 페이지 언로드(unload) 시간, 도메인 룩업(look up) 시간, window\.onload 전체 시간 등 다른 방법으로 측정하기 매우 어려운 데이터를 측정하는 데 사용할 수 있습니다.

### 예제

어떤 페이지를 로딩하는 데 필요한 전체 시간 계산하기.

```js
var perfData = window.performance.timing;
var pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
```

요청 응답 시간 계산하기.

```js
var connectTime = perfData.responseEnd - perfData.requestStart;
```

### 링크

- [Test Page](http://webtimingdemo.appspot.com/)
- <http://w3c-test.org/webperf/specs/NavigationTiming/>
- <http://www.w3.org/TR/navigation-timing/>
