---
title: ARIA
slug: Web/Accessibility/ARIA
---

**접근가능한 리치 인터넷 어플리케이션**(Accessible Rich Internet Applications, **ARIA**)은 장애를 가진 사용자가 웹 콘텐츠와 웹 어플리케이션(특히 JavaScript를 사용하여 개발한 경우)에 더 쉽게 접근할 수 있는 방법을 정의하는 여러 특성을 말합니다.

ARIA는 HTML을 보충해, 일반적으로 보조 기술이 알 수 없는 상호작용 및 흔히 쓰이는 어플리케이션 위젯에 필요한 정보를 제공합니다. 예를 들어 ARIA는 HTML4에서의 탐색 랜드마크, JavaScript 위젯, 폼 힌트 및 오류 메시지, 실시간 콘텐츠 업데이트 등을 접근 가능한 형태로 제공합니다.

> **경고:** 여기 등장하는 많은 위젯은 나중에 HTML5로 통합됐으므로, 구현하려는 기능을 가진 요소가 존재한다면 **개발자는 되도록 의미를 가진 HTML을 ARIA보다 선호해야 합니다**. 몇 가지 예시로, 네이티브 요소는 키보드 접근성, 역할, 상태를 내장하고 있습니다. 그러나 ARIA를 쓰기로 결정했다면 브라우저 동작 방식을 따라 하는 건 개발자의 책임입니다.

다음은 진행 표시줄 위젯의 마크업입니다.

```html
<div
  id="percent-loaded"
  role="progressbar"
  aria-valuenow="75"
  aria-valuemin="0"
  aria-valuemax="100"></div>
```

This progress bar is built using a `<div>`, which has no meaning. Unfortunately, there isn't a more semantic tag available to developers in HTML 4, so we need to include ARIA roles and properties. These are specified by adding attributes to the element. In this example, the `role="progressbar"` attribute informs the browser that this element is actually a JavaScript-powered progress bar widget. The `aria-valuemin` and `aria-valuemax` attributes specify the minimum and maximum values for the progress bar, and the `aria-valuenow` describes the current state of it and therefore must be kept updated with JavaScript. Along with placing them directly in the markup, ARIA attributes can be added to the element and updated dynamically using JavaScript code like this:

```js
// Find the progress bar <div> in the DOM.
var progressBar = document.getElementById("percent-loaded");

// Set its ARIA roles and states,
// so that assistive technologies know what kind of widget it is.`;
progressBar.setAttribute("role", "progressbar");
progressBar.setAttribute("aria-valuemin", 0);
progressBar.setAttribute("aria-valuemax", 100);

// Create a function that can be called at any time to update
// the value of the progress bar.
function updateProgress(percentComplete) {
  progressBar.setAttribute("aria-valuenow", percentComplete);
}
```

> **Note:** that ARIA was invented after HTML4, so does not validate in HTML4 or its XHTML variants. However, the accessibility gains it provides far outweigh any technical invalidity. In HTML5, all ARIA attributes validate. The new landmark elements (`<main>`, `<header>`, `<nav>` etc) have built-in ARIA roles, so there is no need to duplicate them.

## 지원

다른 웹 기술과 마찬가지로, ARIA 역시 환경 별 지원 수준에 차이를 보입니다. 지원 수준은 사용자의 운영 체제 및 사용하는 브라우저, 그리고 연결된 보조 기술마다 다릅니다. 게다가 각각의 버전 또한 영향을 줍니다. 오래된 소프트웨어 버전은 특정 ARIA 역할을 지원하지 않거나, 부분적으로만 지원하거나, 잘못된 기능을 가지고 있을 수 있습니다.

또 다른 중요한 점은, 보조 기술에 의존하는 사용자 일부가 컴퓨터 및 브라우저 상호작용 기능을 잃어버릴까 두려워 소프트웨어 업그레이드를 주저할 수 있다는 점을 인지하는 것입니다. 그러므로 가능한 한 보조 기술이 훨씬 넓게 지원하는, [의미를 가진 HTML 요소](/ko/docs/Learn/Accessibility/HTML)를 사용하는 편이 좋습니다.

마지막으로 작성한 ARIA을 실제 보조 기술로 시험하는 것도 필요합니다. 브라우저 에뮬레이터와 시뮬레이터가 전체 테스트에 효율적인 도구가 아니듯, 유사 보조 기술만으로는 완벽한 지원을 장담하기엔 부족합니다.

## 자습서

- [ARIA 소개](/ko/docs/Web/Accessibility/An_overview_of_accessible_web_applications_and_widgets)
  - : 동적인 컨텐츠를 ARIA를 적용해 접근성을 갖추도록 하는 방법에 대한 소개한 글입니다. Gez Lemon이 2008년에 쓴 ARIA 분야의 고전인 <a class="external" href="http://dev.opera.com/articles/view/introduction-to-wai-aria/">ARIA intro</a>도 참조하십시오.
- [스크린 리더기에서 ARIA를 어떻게 사용하는지에 대한 영상](http://zomigi.com/blog/videos-of-screen-readers-using-aria-updated/)
  - : ARIA "적용 전", "적용 후" 영상을 비롯하여, 웹에서 볼 수 있는 실제 사용 예제들과 그것보다 간략화된 예시들을 볼 수 있습니다.
- [ARIA 사용하기](https://w3c.github.io/using-aria/)
  - : 개발자를 위한 실용 가이드를 제공하는 글입니다. HTML 요소에 어떤 ARIA 속성들을 써야 하는지에 대해 제안하는 내용을 담고 있습니다. 제안은 실제 구현 상황을 바탕으로 합니다.

## 간단한 ARIA 향상

- [ARIA 랜드마크를 사용하여 페이지 탐색 고도화](https://www.paciellogroup.com/blog/2013/02/using-wai-aria-landmarks-2013/)
  - : 스크린 리더 사용자들을 위해 ARIA 랜드마크를 사용하여 웹 페이지의 탐색 기능을 향상시키는 법을 소개해주는 좋은 글입니다. [이와 더불어서 ARIA 구현 노트](http://www.paciellogroup.com/blog/2011/07/html5-accessibility-chops-aria-landmark-support/) 및 실제 사이트에서의 활용 예시들을 참고하세요. (2011년 7월에 업데이트됨)
- [폼 접근성 향상하기](/ko/docs/ARIA/forms)
  - : ARIA는 동적 콘텐츠만을 위한 것이 아닙니다! ARIA 특성을 사용해 HTML 폼의 접근성을 높이는 방법을 알아보세요.

## 스크립트 처리된 위젯을 위한 ARIA

- [JavaScript 위젯에 키보드 탐색 및 초점 적용하기](/ko/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets)
  - : {{htmlelement("input")}}, {{htmlelement("button")}} 등 내장 요소는 기본적으로 키보드를 지원합니다. {{htmlelement("div")}}와 ARIA로 특정 요소를 흉내 낸다면, 그 위젯도 키보드를 지원하도록 해야 합니다.
- [실시간 영역](/ko/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)
  - : 실시간 영역은 페이지 콘텐츠에 가해지는 변경점을 접근성 보조 기술이 어떻게 처리해야 하는지 제안합니다.
- [ARIA 실시간 영역으로 콘텐츠 변경 알리기](https://www.freedomscientific.com/SurfsUp/AriaLiveRegions.htm)
  - : JAWS 스크린 리더 소프트웨어의 개발진이 실시간 영역에 대해 요약한 글입니다.

## 표준화를 위한 노고

- [WAI-ARIA 명세](https://www.w3.org/TR/wai-aria-1.1/)
  - : W3C 명세입니다.
- [WAI-ARIA 작성 안내서](https://www.w3.org/TR/wai-aria-practices-1.1/)
  - : 흔히 쓰이는 위젯을 ARIA스럽게 만드는 방법에 대한 공식 안내서로, 훌륭한 자원입니다.

## 비디오

다음 발표 비디오는 ARIA를 이해할 수 있는 훌륭한 방법입니다. [ARIA, Accessibility APIs and coding like you give a damn! – Léonie Watson](https://www.youtube.com/watch?v=qdB8SRhqvFc)

## 버그 제출

[브라우저, 스크린 리더, JavaScript 라이브러리의 ARIA 버그 제출하기](/en/Accessibility/ARIA/How_to_file_ARIA-related_bugs)

## 관련 주제

{{glossary("Accessibility", "접근성")}}, {{glossary("AJAX")}}, [JavaScript](/ko/docs/JavaScript)

- [웹 개발](/ko/docs/Web/Guide)
- [접근성과 Mozilla](/ko/docs/Mozilla/Accessibility)
