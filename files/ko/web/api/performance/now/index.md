---
title: "Performance: now() method"
short-title: now()
slug: Web/API/Performance/now
l10n:
  sourceCommit: 8ab0f2fde2a9c1c7e547884abedf3848f8d7dda5
---

{{APIRef("Performance API")}} {{AvailableInWorkers}}

**`performance.now()`** 메서드는 밀리초 단위의 고해상도 타임스탬프를 반환합니다. 이는 {{domxref("Performance.timeOrigin")}} (윈도우 맥락에서는 탐색이 시작되었을 때의 시간이나 {{domxref("Worker")}} 혹은 {{domxref("ServiceWorker")}} 맥락에서는 워커가 진행된 시간) 으로부터의 시간 경과를 나타냅니다.

## 구문

```js-nolint
now()
```

### 매개변수

없습니다.

### 반환 값

밀리초로 측정된 {{domxref("DOMHighResTimeStamp")}} 값을 반환합니다.

## 설명

### `Performance.now` vs. `Date.now`

[`Date.now`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Date/now)와는 다르게, `performance.now()` 에 의하여 반환된 타임스탬프 값은 1 밀리초 해상도에 제한되지 않습니다. 대신에 이는 마이크로초 정밀도까지 표현될 수 있는 부동소수점으로 시간을 나타냅니다.

또한 `Date.now()` 는 유닉스 에포크 (1970-01-01T00:00:00Z) 기준이고, 시스템 시계에 의존하기 때문에 시스템과 시계 왜곡 등과 같은 사용자의 시계 조정에 영향을 받을 수 있습니다.
반면 `performance.now()` 메서드는 현재 시간이 감소하거나 조정되지 않는 [모노토닉 시계](https://w3c.github.io/hr-time/#dfn-monotonic-clock)인 `timeOrigin` 속성을 기준으로 합니다.

### `performance.now` 명세 변경

`performance.now()` 메서드의 의미는 고해상도 시간 단계 1과 단계 2 사이에서 변화했습니다.

| 변경 사항 | 단계 1                                                                                     | 단계 2                                                                                                                                      |
| --------- | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------- |
| 기준      | [`performance.timing.navigationStart`](/ko/docs/Web/API/PerformanceTiming/navigationStart) | {{domxref("Performance.timeOrigin")}}                                                                                                       |
| 발생 조건 | 문서 불러오기 혹은 언로드 프롬프트 (만일 있는 경우).                                       | (이전 문서가 없을 경우) 브라우저 맥락 생성, 언로드 프롬프트 (만일 있는 경우), 혹은 탐색 시작 (HTML에서 정의된 것처럼, 불러오기 몇 단계 전). |

`performance.now()` 메서드는 Navigation Timing 명세의 [`performance.timing.navigationStart`](/ko/docs/Web/API/PerformanceTiming/navigationStart) 속성을 기준으로 합합니다. 이는 `performance.now()` 가 지금은 {{domxref("Performance.timeOrigin")}} 을 기준으로 하도록 변경되었습니다. 이는 웹 페이지 간의 타임스탬프를 비교할 때 시계 변경 위험을 피할 수 있습니다.

```js
// 단계 1 (시계 변경 위험 있음)
currentTime = performance.timing.navigationStart + performance.now();

// 단계 2 (시계 변경 위험 없음)
currentTime = performance.timeOrigin + performance.now();
```

### 수면 중 틱

단계 2 명세는 `performance.now()` 의 수면 중 틱을 요구합니다. 수면 중 틱은 오직 윈도우에서 파이어폭스와 크로미움에서만 나타나는 것으로 보입니다. 다른 운영 체제에서 관련된 브라우저 버그는 다음과 같습니다:

- 크롬/크로미움 ([버그](https://crbug.com/1206450))
- 파이어폭스 ([버그](https://bugzil.la/1709767))
- 사파리/웹킷 ([버그](https://webkit.org/b/225610))

명세서 상 더 많은 정보는 이슈 [hr-time#115](https://github.com/w3c/hr-time/issues/115#issuecomment-1172985601) 에서 확인할 수 있습니다.

## 예제

### `performance.now()` 사용하기

코드에서 특정한 시점으로부터 시간이 얼마나 경과했는지를 파악하기 위해 아래와 같은 코드를 작성할 수 있습니다.

```js
const t0 = performance.now();
doSomething();
const t1 = performance.now();
console.log(`doSomething 호출에 걸린 시간은 ${t1 - t0} 밀리초.`);
```

## 보안 요구사항

타이밍 공격과 [핑거프린팅](/ko/docs/Glossary/Fingerprinting) 에 대비하기 위해 `performance.now()` 는 사이트 격리 상태에 따라 정밀도가 조정됩니다.

- 격리된 맥락에서의 해상도: 5 마이크로초
- 격리되지 않은 맥락에서의 해상도: 100 마이크로초

사이트를 교차 출처로부터 격리하기 위해 {{HTTPHeader("Cross-Origin-Opener-Policy")}} 와
{{HTTPHeader("Cross-Origin-Embedder-Policy")}} 헤더를 사용합니다.

```http
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

이 헤더들은 최상위 문서가 교차 출처 문서들과 브라우징 컨텍스트 그룹을 공유하지 않도록 보장합니다. COOP는 문서를 프로세스 단위로 격리하여 잠재적인 공격자가 팝업에서 이를 열더라도 전역 객체에 접근할 수 없게 하여 [XS-Leaks](https://github.com/xsleaks/xsleaks) 같은 교차 출처 공격을 방지합니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{domxref("Performance.timeOrigin")}}
