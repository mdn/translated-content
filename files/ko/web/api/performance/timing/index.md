---
title: "Performance: timing 속성"
slug: Web/API/Performance/timing
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("Performance API")}}{{deprecated_header}}

오래된
**`Performance.timing`** 읽기 전용
속성은 대기시간과 관련된 성능 정보를 포함한 {{domxref("PerformanceTiming")}}
객체를 반환합니다.

이 속성은 워커에서 사용할 수 없습니다.

> [!WARNING]
> 이 속성은 [Navigation Timing Level 2 specification](https://w3c.github.io/navigation-timing/#obsolete) 문서에 따라 더 이상 지원되지 않습니다. {{domxref("PerformanceNavigationTiming")}}
> 인터페이스를 대신 사용해주세요.

## 값

{{domxref("PerformanceTiming")}} 객체.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 이 속성이 속한 {{domxref("Performance")}} 인터페이스
