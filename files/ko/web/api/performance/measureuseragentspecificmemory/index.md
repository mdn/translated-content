---
title: "Performance: measureUserAgentSpecificMemory() method"
short-title: measureUserAgentSpecificMemory()
slug: Web/API/Performance/measureUserAgentSpecificMemory
l10n:
  sourceCommit: cc41ecd796870c2b6c77ad0b04fcb8d8c7d877d2
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

**`measureUserAgentSpecificMemory()`** 메서드는 모든 아이프레임이나 웹 워커를 포함한 웹 애플리케이션의 메모리 사용량을 측정하는 데에 사용됩니다.

## 구문

```js-nolint
measureUserAgentSpecificMemory()
```

### 파라미터

없습니다.

### 반환 값

아래 속성들을 내포한 {{jsxref("Promise")}} 객체를 반환합니다.

- `bytes`
  - : 총 메모리 사용량을 나타내는 숫자입니다.
- `breakdown`
  - : 전체 `bytes`를 분할하고 소유 및 타입 정보를 제공하는 객체의 {{jsxref("Array")}} 입니다. 이 객체는 다음 속성들을 포함합니다.
    - `bytes`
      - : 항목들이 설명하는 메모리의 크기입니다.
    - `attribution`
      - : 메모리를 사용하는 JavaScript 실행 환경의 컨테이너 요소들로 이루어진 {{jsxref("Array")}} 입니다. 이 객체는 다음 속성들을 포함합니다.
        - `url`
          - 이 속성이 동일 출처의 자바스크립트 실행 환경에 해당하는 경우, 해당 실행 환경의 URL을 포함합니다. 그렇지 않은 경우 "cross-origin-url" 문자열이 들어갑니다.
        - `container`
          - : JavaScript 실행 환경을 포함하는 DOM 요소를 나타내는 객체입니다. 이 객체는 다음 속성들을 포함합니다.
            - `id`
              - : 컨테이너 요소의 `id` 값입니다.
            - `src`
              - : 컨테이너 요소의 `src` 값입니다. 만일 컨테이너 요소가 {{HTMLElement("object")}} 요소라면, 이 필드는 `data` 특성의 값을 포함합니다.
        - `scope`
          - : 동일 출처인 JavaScript 실행 환경의 타입을 나타내는 문자열입니다. 동일 출처라면 `"Window"`, `"DedicatedWorkerGlobalScope"`, `"SharedWorkerGlobalScope"`, `"ServiceWorkerGlobalScope"` 중 하나의 값을 가지게 되고, 교차 출처라면 `"cross-origin-aggregated"` 값을 갖습니다.
    - `types`
      - : 메모리와 연관된 구현별 메모리 타입들의 배열입니다.

예제 반환 값을 확인해 보세요.

```json
{
  "bytes": 1500000,
  "breakdown": [
    {
      "bytes": 1000000,
      "attribution": [
        {
          "url": "https://example.com",
          "scope": "Window",
        },
      ],
      "types": ["DOM", "JS"],
    },
    {
      "bytes": 0,
      "attribution": [],
      "types": [],
    },
    {
      "bytes": 500000,
      "attribution": [
        {
          "url": "https://example.com/iframe.html"
          "container": {
            "id": "example-id",
            "src": "redirect.html?target=iframe.html",
          },
          "scope": "Window",
        }
      ],
      "types": ["JS", "DOM"],
    },
  ],
}
```

### 예외

- `SecurityError` {{domxref("DOMException")}}
  - : 교차 출처 정보 유출을 방지하기 위한 [보안 요구사항](#security_requirements)을 충족되지 않을 경우 발생합니다

## 설명

브라우저는 객체가 생성될 때 자동으로 메모리를 할당하고, 더 이상 접근할 수 없게 되면 메모리를 해제합니다(가비지 컬렉션). 이 가비지 컬렉션(GC)은 근사치입니다. 특정 메모리 조각이 여전히 필요한지 여부를 판단하는 일반적인 문제는 불가능하기 때문입니다. ([JavaScript 메모리 관리](/ko/docs/Web/JavaScript/Guide/Memory_management) 를 참조하세요.) 개발자는 객체가 가비지 컬렉션되도록 하고, 메모리 누수가 발생하지 않도록 하며, 시간이 지남에 따라 메모리 사용량이 불필요하게 증가하여 웹 애플리케이션이 느려지고 반응하지 않게 되는 일이 없도록 해야 합니다. 메모리 누수는 일반적으로 이벤트 리스너 등록 해제를 잊거나, 워커를 닫지 않거나, 배열에 객체가 누적되는 등의 이유로 발생합니다.

`measureUserAgentSpecificMemory()` API는 메모리 사용량 데이터를 집계하여 메모리 누수를 찾는 데 도움을 줍니다. 이는 메모리 회귀 탐지나 기능의 메모리 영향을 평가하기 위한 A/B 테스트에 사용할 수 있습니다. 이 메서드를 한 번만 호출하기보다는, 세션 기간 동안 메모리 사용량이 어떻게 변화하는지 추적하기 위해 주기적으로 호출하는 것이 좋습니다.

이 API가 반환하는 `byte` 값은 구현에 크게 의존하기 때문에 브라우저 간이나 동일한 브라우저의 다른 버전 간에 비교할 수 없습니다. 또한 `breakdown` 과 `attribution` 배열이 제공되는 방식도 브라우저에 따라 다릅니다. 이 데이터에 대해 어떤 가정도 하드코딩하지 않는 것이 가장 좋습니다. 이 API는 데이터를 집계하고 샘플 간의 차이를 분석하기 위해 (무작위 간격으로) 주기적으로 호출하도록 설계되었습니다.

## 보안 요구사항

이 메서드를 사용하려면 문서가 [보안 환경](/ko/docs/Web/Security/Secure_Contexts)에 존재하고, {{domxref("Window.crossOriginIsolated","교차 출처 격리","","nocode")}} 되어야 합니다.

{{domxref("Window.crossOriginIsolated")}}와 {{domxref("WorkerGlobalScope.crossOriginIsolated")}} 속성을 사용하여 문서가 교차 출처 격리되어 있는지 확인할 수 있습니다:

```js
if (crossOriginIsolated) {
  // Use measureUserAgentSpecificMemory
}
```

## 예제

### 메모리 사용량 모니터링하기

아래 코드는 [지수 분포](https://en.wikipedia.org/wiki/Exponential_distribution#Random_variate_generation)를 사용하여 5분마다 무작위(랜덤) 간격으로 measureUserAgentSpecificMemory() 메서드를 호출하는 방법을 보여줍니다.

```js
function runMemoryMeasurements() {
  const interval = -Math.log(Math.random()) * 5 * 60 * 1000;
  console.log(`Next measurement in ${Math.round(interval / 1000)} seconds.`);
  setTimeout(measureMemory, interval);
}

async function measureMemory() {
  const memorySample = await performance.measureUserAgentSpecificMemory();
  console.log(memorySample);
  runMemoryMeasurements();
}

if (crossOriginIsolated) {
  runMemoryMeasurements();
}
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{domxref("Window.setTimeout", "setTimeout()")}}
- [measureUserAgentSpecificMemory()로 페이지의 총 메모리 사용량을 모니터링하세요 - web.dev](https://web.dev/articles/monitor-total-page-memory-usage)
