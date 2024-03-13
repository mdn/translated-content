---
title: 프로그레시브 웹 앱
slug: Web/Progressive_web_apps
---

프로그레시브 웹 앱은 최신 웹 API와 전통적인 점진적 개선 전략을 함께 사용해 크로스 플랫폼 웹 어플리케이션을 생성합니다. 이러한 앱은 어디서든 동작하며 네이티브 앱에서의 사용자 경험 이점과 동일한 몇 가지 기능들을 제공합니다. 이 문서에서는 이에 대해 여러분이 알아야 할 모든 것들에 대해 알려드립니다.

## PWA 이점

PWA는 발견 가능, 설치 가능, 연결 가능해야 하고, 네트워크에 독립적이어야 하고, 점진적이고 재참여가 가능해야하며 반응형이고 안전해야 합니다. 이러한 것들이 무엇을 의미하는지는 [프로그레시브 웹 앱 이점](/ko/docs/Web/Apps/Progressive/Advantages) 문서를 읽어보시기 바랍니다. PWA를 구현하는 방법은 아래 섹션에 나열된 가이드를 참조하십시오.

## 핵심 PWA 가이드

다음 가이드는 간단한 예제를 살펴보고 모든 조각이 어떻게 동작하는지 보여줌으로써 PWA 구현을 위해 해야하는 것들이 무엇인지 보여줍니다.

1. [프로그레시브 웹 앱 소개](/ko/docs/Web/Apps/Progressive/Introduction)
2. [프로그레시브 웹 앱 구조](/ko/docs/Web/Apps/Progressive/App_structure)
3. [Service worker를 사용해 PWA를 오프라인에서 동작하게 만들기](/ko/docs/Web/Apps/Progressive/Offline_Service_workers)
4. [PWA를 설치가능하게 만드는 방법](/ko/docs/Web/Apps/Progressive/Installable_PWAs)
5. [알림과 푸시를 사용해 PWA를 재참여(re-engageable)가능하게 만드는 방법](/ko/docs/Web/Apps/Progressive/Re-engageable_Notifications_Push)

## 기술 가이드

- [클라이언트 사이드 저장소](/ko/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage) — 웹 저장소, IndexedDB, service worker를 언제 어떻게 사용하는지 보여주는 상세 가이드
- [Service worker 사용](/ko/docs/Web/API/Service_Worker_API/Using_Service_Workers) — Service Worker API에 대한 더 자세한 가이드.
- [IndexedDB 사용](/ko/docs/Web/API/IndexedDB_API/Using_IndexedDB) — IndexedDB의 근본에 대한 자세한 설명.
- [Web Storage API 사용](/ko/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API) — 간단하게 만들어진 Web storage API.
- [Application Shell 구조를 사용한 웹 앱 즉시 로딩](https://developers.google.com/web/updates/2015/11/app-shell) — App Shell 코딩 패턴을 사용해 빠르게 로딩되는 앱을 생성하는 가이드.
- [Push API 사용](/ko/docs/Web/API/Push_API/Using_the_Push_API) — Web Push API의 기초에 대해 배우기.
- [Notifications API 사용](/ko/docs/Web/API/Notifications_API/Using_the_Notifications_API) — 웹 알림 요약.
- [반응형 디자인 블록 구축](/ko/docs/Web/Apps/Modern/Responsive/responsive_design_building_blocks) — 반응형 디자인 기초, 최신 앱 레이아웃 필수 주제 배우기.
- [모바일 우선](/ko/docs/Web/Apps/Modern/Responsive/Mobile_first) — 반응형 어플리케이션 레이아웃을 생성할 때, 보통 기본적으로 모바일 레이아웃을 생성하고, 더 넓은 상단 레이아웃을 구축하는 것이 좋습니다.
- [홈 화면에 추가 가이드](/ko/docs/Web/Apps/Progressive/Add_to_home_screen) — 앱을 홈 화면에 추가하여 얻을 수 있는 이점에 대해 배우기.

## 도구

- [localForage](https://localforage.github.io/localForage/) — 아주 간단하게 클라이언트 사이드 데이터 저장소를 만들 수 있는 훌륭하고 가벼운 JavaScript 라이브러리. 기본적으로 IndexedDB를 사용하고 필요한 경우 Web SQL/Web Storage를 사용합니다.
- [ServiceWorkerWare](https://github.com/fxos-components/serviceworkerware) — 손쉬운 Service Worker 개발을 위한 Express 같은 마이크로프레임워크.
- [oghliner](https://github.com/mozilla/oghliner) — 템플릿이자 GitHub 페이지에 오프라인 웹 앱을 배포하기 위한 도구.
- [sw-precache](https://github.com/GoogleChrome/sw-precache) — 특정 리소스를 프리캐싱(미리 캐싱;precache)하는 service worker 코드를 생성하는 노드 모듈.
- [workbox](https://github.com/GoogleChrome/workbox) — 더 나은 캐싱 전략과 쉬운 프리캐싱을 제공하는 sw-precache의 정신적 지주.
- [upup](https://www.talater.com/upup/) — 사이트가 사용자들을 위해 항상 존재하도록 해주는 작은 스크립트.
- [The service worker cookbook](https://github.com/mdn/serviceworker-cookbook/) — 오프라인 앱 및 그 이상의 다양한 앱 구현 방법을 보여주는 훌륭한 service worker/push 가이드 시리즈.

## 함께 보기

- [Progressive Web Apps landing page](https://web.dev/progressive-web-apps/) and [check list](https://web.dev/pwa-checklist/) on [web.dev](https://web.dev/)
- [Progressive Web Apps: Everything You Need To Know](https://www.csschopper.com/blog/progressive-web-apps-everything-you-need-to-know/)
- [Progressive Web Apps: Escaping Tabs Without Losing Our Soul](https://medium.com/@slightlylate/progressive-apps-escaping-tabs-without-losing-our-soul-3b93a8561955#.6czgj0myh)
- [Instant Loading Web Apps with An Application Shell Architecture](https://developer.chrome.com/blog/app-shell/)
- [Workbox](https://developer.chrome.com/docs/workbox/) — set of libraries to power a "production-ready" service worker for your PWA
- [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) — web-app auditing tool that includes PWA-auditing features
- [localForage](https://localforage.github.io/localForage/) — `localStorage`-like _async_ storage, to improve your PWA's offline experience

{{QuickLinksWithSubpages("/ko/docs/Web/Progressive_web_apps/")}}
