---
title: 프로그레시브 웹 앱 소개
slug: Web/Progressive_web_apps/Tutorials/js13kGames
---

{{NextMenu("Web/Apps/Progressive/App_structure", "Web/Apps/Progressive")}}

이 문서는 프로그레시브 웹 앱(PWA)의 소개입니다. PWA가 무엇이고 일반 웹 앱에 어떤 이점을 가져다주는지 설명합니다.

## 프로그레시브 웹 앱이 무엇인가요?

PWA는 웹과 네이티브 앱의 기능 모두의 이점을 갖도록 수 많은 특정 기술과 표준 패턴을 사용해 개발된 웹 앱입니다.

예를 들어, 웹 앱은 발견이 쉽습니다 — 어플리케이션을 설치하는 것보다 웹사이트에 방문하는 것이 훨씬 쉽고 빠르며, 링크로 웹 앱을 공유할수도 있습니다.

반면에, 네이티브 앱은 운영체제와 보다 잘 통합되므로 더 부드러운 사용자 경험을 제공할 수 있습니다. 네이티브 앱은 설치할 수 있으므로 오프라인에서 동작하며, 사용자는 홈 화면의 아이콘을 탭하여 브라우저를 사용하여 이동하는 것보다 선호하는 앱에 더 쉽게 접근할 수 있습니다.

PWA는 이들과 동일한 이점을 즐길 수 있는 웹 앱을 생성하는 능력을 제공합니다.

완전히 새로운 개념은 아닙니다 — 이런 아이디어는 과거에 다양한 접근 방법으로 웹 플랫폼상에서 여러번 재검토되었습니다. 점진적인 향상과 반응형 디자인은 이미 우리가 모바일 친화적인 웹사이트를 구축할 수 있게 해주고 있습니다. 오프라인에서 동작하는 것과 앱을 설치하는 것은 몇 년 전 Firefox OS 생태계에서 이미 가능했었습니다.

하지만, PWA는 웹을 훌륭하게 만드는 이미 존재하는 어떤 기능도 제거하지 않은 상태로 이 모든 것 그리고 그 이상을 제공합니다.

## 앱을 PWA로 만드는 것은 무엇인가요?

위에서 암시했듯이, PWA는 하나의 기술로 생성된 것이 아닙니다. 이는 일부 특정 패턴, API 및 다른 기능들을 포함하는 웹 앱을 구축하는 하나의 새로운 철학을 나타냅니다. 첫눈에 웹 앱이 PWA인이 아닌지 구분하기는 쉽지 않습니다. 앱이 특정 요구 사항을 만족하거나 다음 기능들이 구현되었을 때 PWA라고 볼 수 있습니다: 오프라인에서 동작, 설치가 가능, 쉬운 동기화, 푸시 알림, 등.

게다가, 앱의 완성도를 퍼센트로 측정하는 도구들도 있습니다. ([Lighthouse](https://developers.google.com/web/tools/lighthouse/)가 현재 가장 유명합니다.) 다양한 기술적 이점을 구현함으로써, 앱을 더 점진적이게 만들 수 있고, 더 높은 Lighthouse 점수를 받을 수 있습니다. 하지만 이는 대략적인 지표일뿐입니다.

다음은 웹 앱을 PWA로 식별되기 위해 확인해야 하는 몇 가지 핵심 원칙입니다.

- [발견 가능](/ko/Apps/Progressive/Advantages#Discoverable), 따라서 컨텐츠를 검색 엔진을 통해 찾을 수 있습니다.
- [설치 가능](/ko/Apps/Progressive/Advantages#Installable), 따라서 기기의 홈 화면에서 사용할 수 있습니다.
- [연결 가능](/ko/Apps/Progressive/Advantages#Linkable), 따라서 간단하게 URL을 전송해 공유할 수 있습니다.
- [네트워크 독립적](/ko/Apps/Progressive/Advantages#Network_independent), 따라서 오프라인이나 불안한 네트워크 연결에서 동작합니다.
- [점진적](/ko/Apps/Progressive/Advantages#Progressive), 따라서 최신 브라우저의 모든 기능은 사용할 수 없지만 이전 브라우저의 기본 기능은 여전히 사용할 수 있습니다.
- [재 참여 가능(Re-engageable)](/ko/Apps/Progressive/Advantages#Re-engageable), 따라서 새 컨텐츠가 사용 가능할 때마다 알림을 보낼 수 있습니다.
- [반응형](/ko/Apps/Progressive/Advantages#Responsive), 따라서 모든 기기의 화면이나 브라우저에서 사용할 수 있습니다 — 모바일 폰, 태블릿, 노트북, TV, 냉장고, 등.
- [안전](/ko/Apps/Progressive/Advantages#Safe), 따라서 여러분과 앱 사이의 연결이 여러분의 민감한 데이터에 접근하려는 모든 제3자로부터 안전합니다.

### 이 모든 것들을 할만한 가치가 있나요?

물론입니다! 비교적 적은 노력으로 PWA 핵심 기능들을 구현할 수 있으며, 그 이점은 거대합니다. 예를 들면:

- [Service Workers](/ko/docs/Web/API/Service_Worker_API) 를 사용한 캐싱 덕분에 앱을 설치한 후에 로딩 시간이 줄어들어 소중한 데이터와 시간을 절약.
- 앱 업데이트가 있을 때 변경된 컨텐츠만 업데이트 할 수 있음. 반면, 네이티브 앱의 경우, 아주 작은 수정에도 사용자가 어플리케이션 전체를 다시 다운로드하도록 강제함.
- 네이티브 플랫폼에 보다 통합된 외관과 느낌 — 홈 화면의 앱 아이콘, 전체 화면으로 실행되는 앱, 등.
- 시스템 알림 및 푸시 메시지를 통한 사용자의 재 참여. 참여율이 높은 사용자와 더 나은 전환율을 이끌어 냄.

PWA 라우트를 시도하고 네이티브 앱 보다 더 향상된 웹 사이트 경험을 선택하여 측정 가능한 의미있는 이득을 본 회사들의 성공 스토리가 많습니다. [PWA Stats](https://www.pwastats.com/) 웹 사이트는 이러한 이점을 나타내는 많은 사례 연구들을 공유합니다.

가장 잘 알려진 성공 스토리는 아마 [Flipkart Lite](https://stories.flipkart.com/flipkart-lite/) 일 것입니다 — 2015년에 프로그레시브 웹 앱으로 사이트를 재구축해 전환율을 70% 상승시킨 인도의 가장 큰 전자 상거래 사이트입니다. [AliExpress](https://m.aliexpress.com/) PWA 역시 새로운 사용자에 대한 전환율을 104% 상승시키는 것으로 웹이나 네이티브 앱보다 훨씬 더 나은 결과를 보였습니다. 이윤 증가 및 PWA로 전환을 위해 상대적으로 적은 양의 작업을 놓고 봤을 때, 이점은 분명합니다.

더 많은 예제는 [pwa.rocks](https://pwa.rocks/) 의 목록에서 확인하시기 바랍니다. [hnpwa.com](https://hnpwa.com/) 페이지는 특별히 언급할 가치가 있습니다 — 여기에는 일반적인 TodoMVC 앱 대신 다양한 프론트엔드 프레임워크의 사용을 볼 수 있는 Hacker News 웹사이트의 구현 예제가 나열되어 있습니다.

심지어 [PWABuilder](https://www.pwabuilder.com/) 웹사이트를 사용해 PWA를 온라인에서 생성할수도 있습니다.

Service worker와 푸시에 관련된 정보는 최신 사이트에서 service worker를 사용하는 예제를 모아둔 [Service Worker Cookbook](https://github.com/mdn/serviceworker-cookbook/)을 확인하시기 바랍니다.

PWA 접근은 시도해볼만한 가치가 있으며, 여러분의 앱에서 동작하는지 스스로 확인해보시기 바랍니다.

## 브라우저 호환성

앞서 언급했듯이, PWA는 하나의 API에 의존하지 않고, 가능한 최고의 웹 경험을 전달하기 위한 목표를 달성하기 위해 다양한 기술들을 사용합니다.

PWA를 위해 요구되는 핵심 요소는 [service worker](/ko/docs/Web/API/Service_Worker_API) 지원입니다. 고맙게도 service worker는 현재 데스크탑 및 모바일의 [모든 주요 브라우저에서 지원됩니다](https://jakearchibald.github.io/isserviceworkerready/).

[웹 앱 Manifest](/ko/docs/Web/Manifest), [푸시](/ko/docs/Web/API/Push_API), [알림](/ko/docs/Web/API/Notifications_API), [홈 화면에 추가](/ko/docs/Web/Apps/Progressive/Add_to_home_screen) 기능과 같은 다른 기능들도 널리 지원되고 있습니다. 현재 Safari에서는 웹 앱 Manifest 및 홈 화면에 추가에 지원이 제한적이며 웹 푸시 알림은 지원하지 않습니다. 반면, 다른 주요 브라우저에서는 이 모든 기능들을 지원합니다.

이러한 API의 일부는 실험중이며 문서도 여전히 완성되지 않았지만, Flipkart 와 AliExpress와 같은 성공 스토리를 보면 여러분의 웹 앱에 PWA 기능의 일부를 시도하고 구현하는 것에 대해 이미 납득이 되었을것입니다.

무엇보다도 여러분은 프로그레시브 향상 규칙을 따라야 합니다 — 이러한 향상을 제공하는 기술들은 지원이 되는 경우에만 사용하고, 그렇지 않은 경우에도 여전히 기본 기능을 제공하시기 바랍니다. 이 방법으로 모든 사용자가 앱을 사용할 수 있지만, 최신 브라우저를 사용하는 사용자는 PWA 기능으로부터 더 많은 이점을 얻을 수 있습니다.

## 예시 어플리케이션

이 문서 시리즈에서는 [js13kGames 2017](http://2017.js13kgames.com/) 대회의 [A-Frame 카테고리](http://js13kgames.com/aframe)에 제출된 게임에 대한 정보를 나열하는 아주 간단한 웹사이트의 소스코드를 살펴볼 것입니다. 여러분은 웹 사이트의 실제 컨텐츠가 무엇인지에 대해서는 생각할 필요가 없습니다 — 중요한 점은 여러분의 프로젝트에 PWA 기능을 어떻게 사용하는지를 배우는 것입니다.

온라인 버전은 [mdn.github.io/pwa-examples/js13kpwa](https://mdn.github.io/pwa-examples/js13kpwa/) ([소스 코드도 확인하세요](https://github.com/mdn/pwa-examples/tree/master/js13kpwa))에서 확인하실 수 있으며, 다음 몇 가지 문서에서 자세히 설명할 것입니다.

이제, 우리의 예제 앱의 구조에 대해 살펴볼 이 시리즈의 두 번째 파트로 이동합시다.

{{NextMenu("Web/Apps/Progressive/App_structure", "Web/Apps/Progressive")}}
