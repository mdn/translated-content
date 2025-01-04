---
title: 웹 성능 측정하기
slug: Learn_web_development/Extensions/Performance/Measuring_performance
original_slug: Learn/Performance/Measuring_performance
l10n:
  sourceCommit: 79b1494aa78ef35b13ee8c028f6d4838478a6420
---

{{LearnSidebar}} {{PreviousMenuNext("Learn/Performance/Perceived_performance", "Learn/Performance/Multimedia", "Learn/Performance")}}

성능을 측정하는 것은 당신의 앱, 사이트 또는 웹 서비스의 성공을 평가하는 데 도움이 되는 중요한 지표를 제공합니다.

예를 들어, 성능 지표들을 사용해서 경쟁사 제품과 비교하여 앱의 성능을 확인하거나, 여러 릴리즈에 걸쳐 앱의 성능을 비교할 수 있습니다. 당신이 측정하려고 선택한 지표들은 사용자, 사이트 및 사업적 목표들과 관련이 있어야 합니다. 이러한 지표들은 기술적 이해관계자가 아닌 사용자도 사용하고 이해할 수 있는 형식으로 수집, 일관적으로 측정 및 분석되어야 합니다.

이 기사는 사이트 성능을 측정하고 최적화하는 데 사용할 수 있는 웹 성능 지표들에 접근하기 위해 사용할 수 있는 도구들을 소개합니다.

<table>
  <tbody>
    <tr>
      <th scope="row">필요한 사전 지식:</th>
      <td>
        기본 컴퓨터 활용능력,
        <a
          href="/ko/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >기본 소프트웨어 설치</a
        >,
        <a href="/ko/docs/Learn/Getting_started_with_the_web"
          >클라이언트 사이드 웹 기술들</a
        >의 기본적인 지식.
      </td>
    </tr>
    <tr>
      <th scope="row">목표:</th>
      <td>
          <p>
          다양한 웹 성능 API 및 해당 데이터들을 시각화하는 데 사용할 수 있는 도구들을 사용해서 모을 수 있는 웹 성능 지표들에 대한 정보를 제공합니다.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## 웹 성능 도구

성능을 측정하고 개선하는 데 도움을 주는 다양한 도구들이 있습니다. 이러한 도구들은 일반적으로 2가지 범주로 분류될 수 있습니다.

- [PageSpeed Insights](https://pagespeed.web.dev/) 또는 Firefox [네트워크 모니터](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) 및 [성능 모니터](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html) 같은 성능을 표시하거나 측정하는 도구들이 있습니다. 이러한 도구들은 얼마나 빠르게 또는 느리게 웹사이트가 불러와지는지 보여줍니다. 또한 이 도구들은 당신의 웹 앱에서 최적화하기 위해 개선할 수 영역도 표시해 줍니다.

- [Performance API](/ko/docs/Web/API/Performance_API) 를 사용해 사용자 지정 성능 도구를 만들 수 있습니다.

## 일반적인 성능 보고 도구

[PageSpeed Insights](https://pagespeed.web.dev/)같은 도구들은 빠른 성능 측정을 제공합니다. URL을 입력하면 몇 초안에 성능 보고서를 얻을 수 있습니다. 이 성능 보고서는 당신의 웹사이트가 모바일 및 데스크탑에서 어떻게 작동하는지 보여줍니다. 이 도구는 이미 잘하고 있는 부분과 개선할 수 있는 부분에 대한 아이디어를 얻는데 좋은 출발점입니다.

이 글을 작성하는 시점에, MDN의 성능 보고서 요약은 다음과 비슷합니다.

![A screenshot of PageSpeed Insights report for the Mozilla homepage.](pagespeed-insight-mozilla-homepage.png)

성능 보고서에는 어떤 것이 페이지에 보이기 전에 얼마나 오래 사용자가 기다려야 하는지, 페이지를 보여주는 데 필요한 바이트의 수 등에 대한 정보들을 포함하고 있습니다. 또한 측정된 수치가 좋은지 나쁜지도 알려줍니다.

[webpagetest.org](https://webpagetest.org)는 자동으로 사이트를 테스트하고 유용한 지표를 반환하는 다른 도구의 예입니다.

당신이 좋아하는 웹 사이트를 이러한 도구들을 이용해서 사용해 보고 어떤 점수가 나오는지 확인해 보세요.

## 네트워크 모니터 도구

최신 브라우저에는 불러온 페이지에 대해 실행하고 페이지의 성능을 확인하는 데 사용할 수 있는 도구가 있습니다. 대부분 비슷하게 동작합니다. 예를 들어, Firefox의 [네트워크 모니터](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html)는 네트워크에서 다운로드한 모든 애셋들의 자세한 정보를 보여줍니다. 그리고 각각 다운로드 받는데 얼마나 오래 걸렸는지 폭포수 시간 그래프를 통해서 보여줍니다.

![Firefox network monitor showing a list of assets that has loaded as well as load time per asset](network-monitor.png)

[Chrome 네트워크 모니터 문서](https://developer.chrome.com/docs/devtools/network/) 또한 확인할 수 있습니다.

## 성능 모니터 도구

[Firefox 성능 모니터](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html)같은 브라우저 성능 도구를 사용해서 다양한 작업을 수행할 때, 웹 앱 또는 웹 사이트의 사용자 인터페이스의 성능을 측정할 수 있습니다. 이는 웹 앱 또는 사이트를 느리게 할 수 있는 기능들을 나타냅니다.

![Developer tools performance panel showing the waterfall of recording #1.](perf-monitor.png)

[Chrome 성능 도구 문서](https://developer.chrome.com/docs/devtools/performance/) 또한 확인할 수 있습니다.

## Performance APIs

웹을 위한 코드를 작성할 때 자신만의 성능 측정 도구를 만들기 위해 사용할 수 있는 수많은 [Web APIs](/ko/docs/Web/API)가 있습니다.

당신은 [Navigation Timing API](/ko/docs/Web/API/Performance_API/Navigation_timing)를 사용해서 이전 페이지를 언로드 하는 데 걸리는 시간, 도메인 조회에 걸리는 시간, 윈도우의 로드 처리기 실행에 필요한 총시간 등 클라이언트 측 웹 성능을 측정하는 데 사용할 수 있습니다. 아래 다이어그램에 표시된 모든 내비게이션 이벤트와 관련된 지표들에 API를 사용할 수 있습니다.

![The various handlers that the navigation timing API can handle including Navigation timing API metrics Prompt for unload redirect unload App cache DNS TCP Request Response Processing onLoad navigationStart redirectStart redirectEnd fetchStart domainLookupEnd domainLookupStart connectStart (secureConnectionStart) connectEnd requestStart responseStart responseEnd unloadStart unloadEnd domLoading domInteractive domContentLoaded domComplete loadEventStart loadEventEnd](navigationtimingapi.jpg)

현재 페이지의 성능 관련 정보에 대한 접근을 제공하는 [Performance API](/ko/docs/Web/API/Performance_API)는 [Performance Timeline API](/ko/docs/Web/API/Performance_Timeline), [Navigation Timing API](/ko/docs/Web/API/Performance_API/Navigation_timing), [User Timing API](/ko/docs/Web/API/Performance_API/User_timing) 그리고 [Resource Timing API](/ko/docs/Web/API/Performance_API/Resource_timing)를 포함합니다. 이러한 인터페이스들은 JavaScript 작업들을 완료하는 데 걸리는 시간을 정확하게 측정하게 해줍니다.

[PerformanceEntry](/ko/docs/Web/API/PerformanceEntry) 객체는 '성능 타임라인'의 일부입니다.
'성능 항목'은 애플리케이션의 명시적 지점에서 성능 {{domxref("PerformanceMark","mark")}} 또는 {{domxref("PerformanceMeasure","measure")}} (예를 들어 {{domxref("Performance.mark","mark()")}} 메서드를 호출하여)를 생성하여 직접적으로 만들 수 있습니다. 성능 항목들은 또한 이미지 같은 리소스를 불러오는 간접적인 방법으로도 생성할 수 있습니다.

[PerformanceObserver API](/ko/docs/Web/API/PerformanceObserver)는 성능 측정 이벤트들을 관찰하고 브라우저의 성능 타임라인에 기록되는 새로운 [PerformanceEntry](/ko/docs/Web/API/PerformanceEntry)를 알려주는 데 사용할 수 있는 API입니다.

이 기사는 이러한 API들을 사용하는데 깊이 다루지는 않지만, 해당 API들이 존재하는 것을 아는 것만으로도 유용합니다. [Navigation and timings](/ko/docs/Web/Performance/Navigation_and_resource_timings)를 참고하여 performance Web APIs를 사용하는 추가적인 예시를 확인할 수 있습니다.

## 결론

이 글에서는 웹 앱 또는 사이트에서 성능을 측정하는 데 도움을 주는 웹 성능 도구들에 대해서 간략한 개요를 제공했습니다. 다음은 체감 성능과 피할 수 없는 성능 저하를 사용자에게 덜 심각하게 보이거나 완전히 위장하는 몇 가지 기법에 대해 살펴보겠습니다.

{{PreviousMenuNext("Learn/Performance/Perceived_performance", "Learn/Performance/Multimedia", "Learn/Performance")}}
