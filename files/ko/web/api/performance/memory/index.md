---
title: "성능: 메모리 속성"
slug: Web/API/Performance/memory
l10n:
  sourceCommit: 7b3ccaec4a93584da12939587ea746acaabe30bc
---

{{APIRef("Performance API")}} {{Deprecated_Header}}{{Non-standard_header}}

비표준이자 레거시 `performance.memory` 속성은 JavaScript 힙의 크기를 반환하며, 이는 웹사이트의 메모리 사용량을 측정하고 줄이는 데 도움이 될 수 있습니다.

이 API가 제공하는 정보는 신뢰할 수 없습니다. 웹 페이지가 동일한 힙을 공유한다면 실제 메모리 사용량을 과대평가할 수 있으며, 웹 페이지가 별도의 힙에 할당된 작업자 또는/및 교차 사이트 iframe을 사용하는 경우 실제 메모리 사용량을 과소평가할 수 있기 때문입니다. "힙"이 정확히 무엇을 의미하는지에 대한 표준도 없습니다. 이 API는 Chromium 기반 브라우저에서만 사용할 수 있습니다.

`performance.memory`를 대체하기 위한 새로운 API는 {{domxref("Performance.measureUserAgentSpecificMemory()")}} 입니다. 이 API는 웹 페이지에서 사용하는 메모리를 추정하려 시도합니다.

## 값

읽기 전용 `performance.memory` 속성은 다음 속성들을 가진 객체입니다.

- `jsHeapSizeLimit`
  - : 맥락에서 사용할 수 있는 힙의 최대 크기(바이트 단위).
- `totalJSHeapSize`
  - : 할당된 전체 힙 크기(바이트 단위).
- `usedJSHeapSize`
  - : 현재 활성 상태인 JS 힙 세그먼트 크기(바이트 단위).

## 예제

### Javascript 힙 크기 얻기

`performance.memory` 를 호출하면 다음과 같은 객체를 반환합니다.

```js
{
  totalJSHeapSize: 39973671,
  usedJSHeapSize: 39127515,
  jsHeapSizeLimit: 4294705152
}
```

## 명세서

없음.

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{domxref("Performance.measureUserAgentSpecificMemory()")}}
