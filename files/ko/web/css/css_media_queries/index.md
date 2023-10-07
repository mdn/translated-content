---
title: 미디어 쿼리
slug: Web/CSS/CSS_media_queries
---

{{CSSRef}}

**미디어 쿼리**는 다양한 기기 특성과 파라메터의 존재 여부에 따라 사이트, 혹은 앱을 조정할 수 있습니다.

미디어 쿼리는 [반응형 디자인](/ko/docs/Web/Progressive_web_apps)의 핵심 구성 요소입니다. 예를 들어, 미디어 쿼리는 작은 기기에 맞춰 폰트 사이즈를 줄어들게 하거나, 세로 모드(portrait mode)일 때 단락의 패딩 값을 증가시킬 수도 있습니다. 혹은 터치 스크린에서 버튼 사이즈를 키울 수도 있습니다.

[CSS](/ko/docs/Web/CSS)에서는 {{cssxref("@media")}} [@규칙](/ko/docs/Web/CSS/At-rule)을 사용해서 스타일 시트의 일부를 조건부로 적용합니다. 이 스타일 시트는 미디어 쿼리의 결과에 기반한 스타일 시트입니다. {{cssxref("@import")}}를 사용해서 조건부로 전체 스타일시트를 적용해보세요.

### HTML에서의 미디어 쿼리

[HTML](/ko/docs/Web/HTML)에서 미디어 쿼리는 다양한 요소에 적용될 수 있습니다.:

- {{HTMLElement("link")}} 요소의 [`media`](/ko/docs/Web/HTML/Element/link#media) 속성에서는, 링크된 리소스 (일반적으로 CSS)가 적용되어야하는 미디어를 정의합니다.
- {{HTMLElement("source")}} 요소의 [`media`](/ko/docs/Web/HTML/Element/source#media) 속성에서는, 해당 소스가 적용되어야하는 미디어를 정의합니다. (이건 {{HTMLElement("picture")}} 요소 안에서만 유효합니다.)
- {{HTMLElement("style")}} 요소의 [`media`](/ko/docs/Web/HTML/Element/style#media) 속성에서는, 스타일이 적용되어야하는 미디어를 정의합니다.

### JavaScript에서의 미디어 쿼리

[JavaScript](/ko/docs/Web/JavaScript)에서는, {{domxref("Window.matchMedia()")}} 메소드로 미디어 쿼리를 테스트할 수 있습니다. {{domxref("MediaQueryList.addListener()")}} 메소드를 사용하면 쿼리가 변경될 때마다 사이트나 앱에서 알림을 받을 수도 있습니다. 이러한 기능을 사용하면, 사이트나 앱이 기기 구성, 방향 또는 상태의 변화에 따라 응답할 수도 있습니다.

[Testing media queries](/ko/docs/Web/CSS/Media_Queries/Testing_media_queries)에서 프로그래밍 방식으로 미디어 쿼리를 사용하는 방법에 대해 자세히 배워보세요.

## 참고서

### @규칙

- {{cssxref("@import")}}
- {{cssxref("@media")}}

## 안내서

- [미디어 쿼리 사용하기](/ko/docs/Web/CSS/Media_Queries/Using_media_queries)
  - : 미디어 쿼리 표현식을 구성하는데 사용되는 미디어 쿼리, 구문 및 연산자와 미디어 기능을 소개합니다.
- [프로그래밍 방식으로 미디어 쿼리 테스트하기](/ko/docs/Web/CSS/Media_Queries/Testing_media_queries)
  - : 자바스크립트 코드에서 어떻게 미디어 쿼리를 사용해 디바이스의 상태를 확인하는지, 그리고 미디어 쿼리가 변경될 때(사용자가 화면을 회전시키거나 브라우저를 리사이즈 할 때와 같은 상황)마다 알림을 보내기 위해 어떻게 리스너를 설정하는지에 대해 설명합니다.
- [접근성을 위한 미디어 쿼리](/ko/docs/Web/CSS/Media_Queries/Using_Media_Queries_for_Accessibility)
  - : 미디어 쿼리를 사용해 사용자가 웹사이트를 더 잘 이해할 수 있게 만들어보세요.

## 명세

{{Specifications}}

## 같이 보기

- {{cssxref("@supports")}} 를 사용하면 브라우저가 지원하는 다양한 CSS 기술들에 대한 스타일을 적용할 수 있습니다.
