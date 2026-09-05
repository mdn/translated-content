---
title: Performance API
slug: Web/API/Performance_API
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{DefaultAPISidebar("Performance API")}}{{AvailableInWorkers}}

Performance API는 웹 애플리케이션의 성능을 측정하는 데 사용되는 여러 표준의 모음입니다.

## 개념 및 사용법

웹 애플리케이션이 빠르게 동작하도록 하려면 다양한 성능 지표를 측정하고 분석하는 것이 중요합니다. Performance API는 중요한 내장 지표와 함께, 브라우저의 성능 타임라인에 직접 측정값을 추가하는 기능을 제공합니다. 성능 타임라인은 고정밀 타임스탬프를 담고 있으며 개발자 도구에서 확인할 수 있습니다. 또한 이 데이터를 분석 엔드포인트로 전송하여 시간에 따른 성능 지표를 기록할 수도 있습니다.

각 성능 지표는 하나의 {{domxref("PerformanceEntry")}}로 표현됩니다. 성능 항목에는 `name`, `duration`, `startTime`, `type`이 있습니다. 모든 성능 지표는 `PerformanceEntry` 인터페이스를 확장하여 더 구체화합니다.

대부분의 성능 항목은 여러분이 아무것도 하지 않아도 자동으로 기록되며, {{domxref("Performance.getEntries()")}}로 접근할 수 있습니다. 다만 {{domxref("PerformanceObserver")}}를 사용하는 방식이 권장됩니다. 예를 들어 정해진 임곗값보다 오래 걸리는 이벤트는 {{domxref("PerformanceEventTiming")}} 항목으로 기록됩니다. 한편 Performance API를 사용하면 {{domxref("PerformanceMark")}}와 {{domxref("PerformanceMeasure")}} 인터페이스를 이용해 여러분만의 커스텀 이벤트를 직접 정의하고 기록할 수도 있습니다.

핵심이 되는 {{domxref("Performance")}} 인터페이스는 {{domxref("Window.performance", "Window")}}와 {{domxref("WorkerGlobalScope.performance", "Worker")}} 전역 스코프 양쪽에서 모두 사용할 수 있으며, 커스텀 성능 항목을 추가하고, 성능 항목을 지우고, 성능 항목을 가져올 수 있게 해줍니다.

{{domxref("PerformanceObserver")}} 인터페이스를 사용하면 다양한 종류의 성능 항목이 기록될 때 이를 수신할 수 있습니다.

개념에 대한 더 자세한 내용은 아래의 [Performance API 가이드](#가이드)를 참고하세요.

![Performance API의 UML 다이어그램](diagram.svg)

## 참조

Performance API에는 다음 인터페이스가 존재합니다.

- {{domxref("EventCounts")}}
  - : {{domxref("performance.eventCounts")}}가 반환하는 읽기 전용 맵으로, 이벤트 종류별로 디스패치된 이벤트 수를 담고 있습니다.
- {{domxref("LargestContentfulPaint")}}
  - : 페이지 로드가 처음 시작된 시점을 기준으로, 뷰포트 안에 보이는 가장 큰 이미지나 텍스트 블록이 렌더링되기까지 걸린 시간을 측정합니다.
- {{domxref("LayoutShift")}}
  - : 페이지 내 요소의 이동을 바탕으로 웹 페이지의 레이아웃 안정성을 파악할 수 있는 정보를 제공합니다.
- {{domxref("LayoutShiftAttribution")}}
  - : 위치가 이동한 요소에 대한 디버깅 정보를 제공합니다.
- {{domxref("NotRestoredReasonDetails")}}
  - : 탐색 시 페이지가 뒤로/앞으로 캐시({{Glossary("bfcache")}})를 사용하지 못하게 된 이유 중 하나를 나타냅니다.
- {{domxref("NotRestoredReasons")}}
  - : 탐색 시 현재 문서가 뒤로/앞으로 캐시({{Glossary("bfcache")}})를 사용하지 못하게 된 이유를 담은 보고 데이터를 제공합니다.
- {{domxref("Performance")}}
  - : 성능 측정값에 접근하기 위한 주요 인터페이스입니다. {{domxref("Window.performance")}} 또는 {{domxref("WorkerGlobalScope.performance")}}를 통해 윈도우와 워커 컨텍스트에서 사용할 수 있습니다.
- {{domxref("PerformanceElementTiming")}}
  - : 특정 요소의 렌더링 타임스탬프를 측정합니다.
- {{domxref("PerformanceEntry")}}
  - : 하나의 성능 지표를 캡슐화한 성능 타임라인상의 항목입니다. 모든 성능 지표는 이 인터페이스를 상속합니다.
- {{domxref("PerformanceEventTiming")}}
  - : 이벤트의 지연 시간과 {{Glossary("Interaction to Next Paint")}}(INP)를 측정합니다.
- {{domxref("PerformanceLongAnimationFrameTiming")}}
  - : 렌더링을 점유하여 다른 작업의 실행을 막는 [긴 애니메이션 프레임(LoAF)](/ko/docs/Web/API/Performance_API/Long_animation_frame_timing#what_is_a_long_animation_frame)에 대한 지표를 제공합니다.
- {{domxref("PerformanceLongTaskTiming")}}
  - : 렌더링을 점유하여 다른 작업의 실행을 막는 [긴 작업](/ko/docs/Glossary/Long_task)에 대한 지표를 제공합니다.
- {{domxref("PerformanceMark")}}
  - : 성능 타임라인에 직접 기록하는 커스텀 마커입니다.
- {{domxref("PerformanceMeasure")}}
  - : 두 성능 항목 사이의 시간을 직접 측정한 값입니다.
- {{domxref("PerformanceNavigationTiming")}}
  - : 문서를 로드하는 데 걸리는 시간처럼, 문서 탐색 이벤트를 측정합니다.
- {{domxref("PerformanceObserver")}}
  - : 성능 타임라인에 새로운 성능 항목이 기록되는 것을 관찰합니다.
- {{domxref("PerformanceObserverEntryList")}}
  - : {{domxref("PerformanceObserver")}}에서 관찰된 성능 항목의 목록입니다.
- {{domxref("PerformancePaintTiming")}}
  - : 웹 페이지 구성 과정에서 일어나는 렌더링 작업을 측정합니다.
- {{domxref("PerformanceResourceTiming")}}
  - : 이미지, 스크립트, fetch 호출 등의 리소스에 대해 리다이렉트 시작·종료 시간, fetch 시작 시간, DNS 조회 시작·종료 시간, 응답 시작·종료 시간과 같은 네트워크 로딩 지표를 측정합니다.
- {{domxref("PerformanceScriptTiming")}}
  - : [긴 애니메이션 프레임(LoAF)](/ko/docs/Web/API/Performance_API/Long_animation_frame_timing#what_is_a_long_animation_frame)을 유발하는 개별 스크립트에 대한 지표를 제공합니다.
- {{domxref("PerformanceServerTiming")}}
  - : {{HTTPHeader("Server-Timing")}} HTTP 헤더에 담겨 응답과 함께 전송되는 서버 지표를 노출합니다.
- {{domxref("TaskAttributionTiming")}}
  - : 긴 작업을 유발한 작업의 종류와 컨테이너를 식별합니다.
- {{domxref("VisibilityStateEntry")}}
  - : 페이지 가시성 상태 변화, 즉 탭이 포그라운드에서 백그라운드로(또는 그 반대로) 전환되는 시점의 타이밍을 측정합니다.

## 가이드

다음 가이드들은 Performance API의 핵심 개념을 이해하고 그 기능에 대한 전반적인 개요를 파악하는 데 도움을 줍니다.

- [성능 데이터](/ko/docs/Web/API/Performance_API/Performance_data): 성능 데이터를 수집하고 조회하고 처리하기.
- [고정밀 타이밍](/ko/docs/Web/API/Performance_API/High_precision_timing): 고정밀 시간과 모노토닉 시계로 측정하기.
- [리소스 타이밍](/ko/docs/Web/API/Performance_API/Resource_timing): 이미지, CSS, JavaScript와 같이 가져온 리소스의 네트워크 타이밍 측정하기.
- [내비게이션 타이밍](/ko/docs/Web/API/Performance_API/Navigation_timing): 문서의 탐색 타이밍 측정하기.
- [사용자 타이밍](/ko/docs/Web/API/Performance_API/User_timing): 애플리케이션에 특화된 성능 데이터를 측정하고 기록하기.
- [서버 타이밍](/ko/docs/Web/API/Performance_API/Server_timing): 서버 측 지표 수집하기.
- [긴 애니메이션 프레임 타이밍](/ko/docs/Web/API/Performance_API/Long_animation_frame_timing): 긴 애니메이션 프레임(LoAF)과 그 원인에 대한 지표 수집하기.
- [bfcache 차단 이유 모니터링하기](/ko/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons): 현재 문서가 뒤로/앞으로 캐시({{Glossary("bfcache")}})를 사용하지 못하게 된 이유 보고하기.

## 명세서

{{Specifications}}

## 같이 보기

- [웹 성능](/ko/docs/Web/Performance)
- [학습: 웹 성능](/ko/docs/Learn_web_development/Extensions/Performance)
