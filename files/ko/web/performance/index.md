---
title: 웹 성능
slug: Web/Performance
---

{{QuickLinksWithSubPages}}

웹 성능은 객관적인 측정치이면서 로드 시간과 런타임을 어떻게 인식하는지에 대한 주관적인 사용자 경험입니다. 사이트가 로드되는 데 걸리는 시간, 로드 후 상호작용에 반응할 수 있게 되기까지의 시간, 사용자와 콘텐츠의 상호작용이 얼마나 매끄러운지(스크롤이 부드러운지, 버튼은 클릭 가능한지, 빠르게 팝업이 로드되고 표시되는지, 애니메이션이 부드럽게 표시되는지)가 바로 웹 성능입니다. 웹 성능에는 객관적 측정치(로딩 시간, 초당 프레임 수, 상호작용에 반응할 수 있게 되기까지의 시간 등)와 주관적 경험(콘텐츠의 로딩 시간이 얼마나 길다고 느끼는지)이 모두 포함됩니다.

사이트 응답 시간이 길어질수록 이탈하는 사용자는 늘어납니다. 로딩 시간과 응답 시간을 최소화하고, 추가 기능을 활용해 대기 시간이 느껴지지 않게 하는 등 최대한 빠르게 웹사이트를 이용하고 상호작용할 수 있어야 합니다. 이와 동시에 최초 로드 시점 이후의 서비스를 비동기적으로 불러와놓는 것이 중요합니다.

글의 다음 부분에서 웹 성능을 측정하고 개선할 때 도움이 될 만한 도구와 API, 모범 사례를 소개합니다.

## 주요 안내서

{{LandingPageListSubpages}}

## 초보자를 위한 튜토리얼

MDN의 [웹 성능 학습 안내서](/ko/docs/Learn_web_development/Extensions/Performance)에는 웹 성능의 필수 개념들에 대한 최신 튜토리얼들이 있습니다. 웹 성능의 세계에 막 발을 들여놓았다면 여기에서 시작하세요.

- [웹 성능: 개요](/ko/docs/Learn/Performance/What_is_web_performance)
  - : 본격적으로 웹 성능에 대해 배우기 전 내용을 전반적으로 살펴봅니다. 여기에서 여정을 시작하세요.
- [웹 성능이란 무엇인가?](/ko/docs/Learn/Performance/What_is_web_performance)
  - : 이 글에서는 성능이란 어떤 것인지에 대해 자세히 살펴보면서 전체 모듈을 시작합니다. 성능에 관해 생각할 때 고려해야 할 도구나 지표, API, 네트워크, 사용자 그룹, 그리고 성능을 웹 개발 과정의 일부로 포함시키는 방법에 대해 다룹니다.
- [사용자는 성능을 어떻게 인지하는가?](/ko/docs/Learn/Performance/Perceived_performance)
  - : 웹사이트를 사용자가 주관적으로 얼마나 빠르다고 인식하는지가 실제 몇 ms 단위로 빠른지보다 중요합니다. 사용자의 주관적 인식은 실제 페이지 로딩 시간, 유휴 시간, 사용자의 상호작용에 대한 응답성, 스크롤 및 기타 애니메이션들이 얼마나 부드러운가에 의해 영향을 받습니다. 이 글에서는 로딩과 관련된 다양한 지표, 애니메이션, 응답성 지표에 대해 논의하고 실제 타이밍과 일치하지 않더라도 주관적 인식을 개선할 수 있는 모범 사례들을 살펴봅니다.
- [웹 성능 기초](/ko/docs/Learn_web_development/Extensions/Performance/Best_practices)
  - : HTML, CSS, JavaScript, 미디어 파일 등의 프론트엔드 구성 요소뿐만 아니라 어플리케이션을 느리게 만들 수 있는 기능들과 주관적, 객관적으로 빠르게 만들 수 있는 기능들이 있습니다. 웹 성능과 관련된 API, 개발자 도구, 모범 사례, 안 좋은 사례를 여럿 소개합니다. 이 글에서는 그런 기능들을 기본적인 수준으로 다루면서 각 주제별로 성능을 개선하기 위해 더 깊게 살펴볼 수 있는 링크를 제공합니다.
- [HTML과 웹 성능](/ko/docs/Learn/Performance/HTML)
  - : 마크업의 순서나 속성들이 웹사이트의 성능에 영향을 미칠 수 있습니다. DOM 노드의 개수를 최소화하고 스타일과 스크립트, 미디어와 써드파티 스크립트 등을 포함할 때의 순서와 속성을 최적화하여 사용자 경험을 크게 개선할 수 있습니다. 이 글에서는 최고의 성능을 끌어내려면 HTML을 어떻게 사용해야 하는지를 다룹니다.
- [멀티미디어: 이미지와 비디오](/ko/docs/Learn_web_development/Extensions/Performance/Multimedia)
  - : 많은 경우 웹 성능을 개선하는 가장 쉬운 방법은 미디어 최적화입니다. 사용자 에이전트의 기능, 크기, 픽셀 밀도를 고려해 제각기 다른 미디어 파일을 제공할 수 있습니다. 배경의 비디오에서 오디오 트랙을 없애는 것과 같은 팁을 추가로 활용하면 더 성능을 개선할 수 있습니다. 이 글에서는 비디오, 오디오, 이미지 콘텐트가 성능에 어떻게 영향을 미치는지, 그리고 어떻게 그런 영향을 최소화할 수 있는지 살펴봅니다.
- [CSS와 웹 성능](/ko/docs/Learn/Performance/CSS)
  - : 성능 개선 시 CSS 최적화는 상대적으로 중요하지 않습니다. 하지만 다른 CSS 기능보다 성능에 많은 영향을 끼치는 기능들이 몇 가지 있습니다. 이 글에서는 성능에 영향을 미치는 CSS 속성을 살펴보고 성능에 부정적인 영향을 주지 않도록 스타일을 다루는 방법을 제안합니다.
- [웹 성능을 높이는 JavaScript 모범 사례](/ko/docs/Learn/Performance/JavaScript)
  - : JavaScript는 올바르게 사용할 경우 상호작용이 가능한 몰입감 있는 웹 경험을 제공합니다. 그러나 그렇지 않을 경우 다운로드 시간과 렌더링 시간, 인앱 성능, 배터리 수명, 사용자 경험을 크게 저하시킬 수도 있습니다. 이 글은 복잡한 컨텐츠이더라도 성능을 최대한으로 발휘할 수 있도록 고려해야 하는 JavaScript 모범 사례들에 대해 소개합니다.
- [모바일 환경에서의 웹 성능](/ko/docs/Learn/Performance/Mobile)
  - : 모바일 기기로 웹에 접속하는 것이 대중화되면서, 모든 모바일 플랫폼은 완전한 기능을 갖춘 웹 브라우저를 탑재하게 되었습니다. 그러나 여전히 대역폭과 CPU, 배터리 수명이 제한적이기 때문에 모바일 플랫폼에서의 웹 컨텐츠의 성능을 고려해야 합니다. 이 글에서는 모바일 환경에 특화된 고려 사항을 살펴봅니다.

## Performance API 사용하기

- [Performance API](/ko/docs/Web/API/Performance_API/Using_the_Performance_API)
  - : 이 안내서는 [High-Resolution Time](https://w3c.github.io/hr-time/) 기준에 정의된 [`Performance`](/ko/docs/Web/API/Performance) 인터페이스를 어떻게 사용하는지 설명합니다.
- [Resource Timing API](/ko/docs/Web/API/Performance_API/Resource_timing)
  - : [Resource loading and timing](/ko/docs/Web/API/Performance_API/Resource_timing) 리소스를 로딩하고, 리소스 버퍼와 CORS에 대응하는 법을 다룹니다.
- [The performance timeline](/ko/docs/Web/API/Performance_Timeline/Using_Performance_Timeline)
  - : [Performance Timeline](/ko/docs/Web/API/Performance_Timeline) 기준은 [`Performance`](/ko/docs/Web/API/Performance) 인터페이스의 확장으로, 클라이언트 차원의 대기 시간을 어플리케이션 내부에서 측정할 수 있도록 돕습니다. 두 인터페이스를 함께 사용하여 어플리케이션의 어떤 지점이 성능에 병목 현상을 일으키는지 찾을 수 있습니다.
- [User Timing API](/ko/docs/Web/API/Performance_API/User_timing)
  - : [user timing API](/ko/docs/Web/API/Performance_API/User_timing)의 "mark"와 "measure" 타입을 활용하여 어플리케이션에 특화된 타임스탬프를 만들어 보세요. 이들은 브라우저의 Performance timeline의 일부가 됩니다.
- [Beacon API](/ko/docs/Web/API/Beacon_API)
  - : [Beacon](/ko/docs/Web/API/Beacon_API) 인터페이스는 비동기적이고 차단되지 않는 요청을 웹 서버에 보내도록 예약합니다.
- [Intersection Observer API](/ko/docs/Web/API/Intersection_Observer_API/Timing_element_visibility)
  - : [Intersection Observer API](/ko/docs/Web/API/Intersection_Observer_API)를 활용하여 요소가 보이는 시간을 지정하고 관심 요소가 보일 때 비동기적으로 알림을 받으세요.

## 다른 문서들

- [성능과 관련된 Firefox Profiler 기능](https://profiler.firefox.com/docs/#/)
  - : 이 웹사이트는 개발자 도구의 성능 관련 기능들이 무엇인지, 그리고 어떻게 사용하는지에 대한 정보를 제공합니다. [Call Tree](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-call-tree), [Flame Graph](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-flame-graph), [Stack Chart](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-stack-chart), [Marker Chart](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-marker-chart), [Network Chart](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-network-chart) 등에 대한 정보가 있습니다.
- [내장 profiler 사용하기](https://profiler.firefox.com/docs/#/./guide-getting-started)
  - : Firefox의 내장 profiler를 사용하여 앱 성능을 측정하는 법을 배웁니다.

## 용어 사전

- {{glossary('Beacon')}}
- {{glossary('Brotli compression')}}
- {{glossary('Client hints')}}
- {{glossary('Code splitting')}}
- {{glossary('CSSOM')}}
- {{glossary('Domain sharding')}}
- {{glossary('Effective connection type')}}
- {{glossary('First contentful paint')}}
- {{glossary('First CPU idle')}}
- {{glossary('First input delay')}}
- {{glossary('First interactive')}}
- {{glossary('First meaningful paint')}}
- {{glossary('First paint')}}
- {{glossary('HTTP')}}
- {{glossary('HTTP_2', 'HTTP/2')}}
- {{glossary('Jank')}}
- {{glossary('Latency')}}
- {{glossary('Lazy load')}}
- {{glossary('Long task')}}
- {{glossary('Lossless compression')}}
- {{glossary('Lossy compression')}}
- {{glossary('Main thread')}}
- {{glossary('Minification')}}
- {{glossary('Network throttling')}}
- {{glossary('Packet')}}
- {{glossary('Page load time')}}
- {{glossary('Page prediction')}}
- {{glossary('Parse')}}
- {{glossary('Perceived performance')}}
- {{glossary('Prefetch')}}
- {{glossary('Prerender')}}
- {{glossary('QUIC')}}
- {{glossary('RAIL')}}
- {{glossary('Real User Monitoring')}}
- {{glossary('Resource Timing')}}
- {{glossary('Round Trip Time (RTT)')}}
- {{glossary('Server Timing')}}
- {{glossary('Speculative parsing')}}
- {{glossary('Speed index')}}
- {{glossary('SSL')}}
- {{glossary('Synthetic monitoring')}}
- {{glossary('TCP handshake')}}
- {{glossary('TCP slow start')}}
- {{glossary('Time to first byte')}}
- {{glossary('Time to interactive')}}
- {{glossary('TLS')}}
- {{glossary('TCP', 'Transmission Control Protocol (TCP)')}}
- {{glossary('Tree shaking')}}
- {{glossary('Web performance')}}

## 참조 항목

HTML

- [`<picture>` 요소](/ko/docs/Web/HTML/Element/picture)
- [`<video>` 요소](/ko/docs/Web/HTML/Reference/Elements/video)
- [`<source>` 요소](/ko/docs/Web/HTML/Element/source)
- [`<img> srcset` 요소](/ko/docs/Web/HTML/Reference/Elements/img#attributes)
  - [반응형 이미지](/ko/docs/Web/HTML/Guides/Responsive_images)

- [`rel="preload"`를 사용해 콘텐츠 미리 불러오기](/ko/docs/Web/HTML/Reference/Attributes/rel/preload) - <https://w3c.github.io/preload/>

CSS

- [will-change](/ko/docs/Web/CSS/Reference/Properties/will-change)
- GPU v CPU
- Measuring layout
- Font-loading best practices

JavaScript

- [DOMContentLoaded](/ko/docs/Web/API/Document/DOMContentLoaded_event)
- [Garbage collection](/ko/docs/Glossary/Garbage_collection)
- [requestAnimationFrame](/ko/docs/Web/API/Window/requestAnimationFrame)

API

- [Performance API](/ko/docs/Web/API/Performance_API)
- [Navigation Timing API](/ko/docs/Web/API/Performance_API/Navigation_timing)
- [Media Capabilities API](/ko/docs/Web/API/Media_Capabilities_API/Using_the_Media_Capabilities_API)
- [Network Information API](/ko/docs/Web/API/Network_Information_API)
- [PerformanceNavigationTiming](/ko/docs/Web/API/PerformanceNavigationTiming)
- [Battery Status API](/ko/docs/Web/API/Battery_Status_API)
- [Navigator.deviceMemory](/ko/docs/Web/API/Navigator/deviceMemory)
- [Intersection Observer](/ko/docs/Web/API/Intersection_Observer_API)
- [Using the User Timing API](/ko/docs/Web/API/Performance_API/User_timing)
- [Long Tasks API](/ko/docs/Web/API/PerformanceLongTaskTiming)
- [High Resolution Timing API](/ko/docs/Web/API/DOMHighResTimeStamp) ([https://w3c.github.io/hr-time/)](https://w3c.github.io/hr-time/)
- [Resource Timing API](/ko/docs/Web/API/Performance_API/Resource_timing)
- [Page Visibility](/ko/docs/Web/API/Page_Visibility_API)
- [Cooperative Scheduling of Background Tasks API](/ko/docs/Web/API/Background_Tasks_API)
  - [requestIdleCallback()](/ko/docs/Web/API/Window/requestIdleCallback)

- [Beacon API](/ko/docs/Web/API/Beacon_API)
- Resource Hints - [dns-prefetch](/ko/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control), preconnect, [prefetch](/ko/docs/Glossary/Prefetch), and prerender
- [FetchEvent.preloadResponse](/ko/docs/Web/API/FetchEvent/preloadResponse)
- [Performance Server Timing API](/ko/docs/Web/API/PerformanceServerTiming)

헤더

- [Content-encoding](/ko/docs/Web/HTTP/Reference/Headers/Content-Encoding)
- HTTP/2
- [gZip](/ko/docs/Glossary/gzip_compression)
- Client Hints

도구

- [Performance in Firefox Developer Tools](https://profiler.firefox.com/docs/#/)

추가 지표

- Speed Index and Perceptual Speed Index

모범 사례

- [Using Service Workers](/ko/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Using Web Workers](/ko/docs/Web/API/Web_Workers_API/Using_web_workers)
  - [Web Workers API](/ko/docs/Web/API/Web_Workers_API)

- [PWA](/ko/docs/Web/Progressive_web_apps/Tutorials/js13kGames/Offline_Service_workers)
- [Caching](/ko/docs/Web/HTTP/Guides/Caching)
- Content Delivery Networks (CDN)
