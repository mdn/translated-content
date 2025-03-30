---
title: WAI-ARIA 기본
slug: Learn/Accessibility/WAI-ARIA_basics
l10n:
  sourceCommit: 93b34fcdb9cf91ff44f5dfe7f4dcd13e961962da
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Accessibility/CSS_and_JavaScript","Learn/Accessibility/Multimedia", "Learn/Accessibility")}}

이전 글에 이어, 의미 없는 HTML과 동적 자바스크립트로 업데이트되는 콘텐츠가 포함된 복잡한 UI 컨트롤에 접근성을 보장하는 것은 때때로 쉽지 않을 수 있습니다. 이러한 문제는 WAI-ARIA의 도움을 받을 수 있는데 이는 브라우저 및 보조 기술이 인식할 수 있는 추가적인 의미를 제공함으로써 사용자에게 무슨 일이 일어나고 있는지 알리는 기술입니다. 이 글에서는 접근성 개선을 위해 이를 사용할 수 있는 기본적인 방법을 다룹니다.

<table>
  <tbody>
    <tr>
      <th scope="row">전제 조건:</th>
      <td>
        HTML, CSS 및 자바스크립트에 대한 기초적인 이해.
        <a href="/ko/docs/Learn/Accessibility"
          >강좌의 이전 글</a
        >에 대한 이해.
      </td>
    </tr>
    <tr>
      <th scope="row">목표:</th>
      <td>
        WAI-ARIA에 익숙해지기, 필요한 경우 접근성 향상을 위해 시맨틱에 이를 추가하는 법 배우기.
      </td>
    </tr>
  </tbody>
</table>

## WAI-ARIA란?

먼저 WAI-ARIA가 무엇인지, 그리고 이를 통해 무엇을 할 수 있는지 살펴봅시다.

### 전혀 새로운 문제들

웹 앱이 더욱 복잡하고 동적으로 변하면서 새로운 종류의 접근성 기능 및 문제가 등장하기 시작했습니다.

예를 들어, HTML은 일반적인 페이지 기능의 정의를 위해 여러 새로운 의미 요소들({{htmlelement("nav")}}, {{htmlelement("footer")}}, 등)을 도입했습니다. 이 요소들의 도입 이전에는 개발자들이 `<div class="nav">` 처럼 ID 또는 클래스를 추가한 {{htmlelement("div")}}를 사용했지만 여기에는 메인 네비게이션과 같은 특정 페이지 탐색 기능을 프로그래밍 방식으로 쉽게 찾을 수 있는 방법이 없어 문제가 되었습니다.

이에 대한 초창기 해결책은 페이지 상단에 하나 이상의 숨겨진 링크를 추가하여 네비게이션(혹은 다른 요소)으로 연결하는 것이었습니다.

```html
<a href="#hidden" class="hidden">네비게이션으로 건너뛰기</a>
```

그러나 이 방법은 여전히 부정확하며 스크린리더 이용 시 화면을 페이지 상단에서부터 읽을 때만 기능한다는 문제가 있습니다.

다른 예시로는 날짜 설정을 위한 날짜 선택기, 값 설정을 위한 슬라이더 등과 같은 복잡한 컨트롤을 포함한 어플리케이션의 등장이 있습니다. HTML은 이러한 컨트롤을 렌더링하기 위하여 다음과 같은 특수 입력 유형을 제공합니다.

```html
<input type="date" /> <input type="range" />
```

이러한 기능들은 처음부터 지원되던 것들도 아니고 지금도 여전히 스타일 지정이 용이하지는 않기 때문에, 디자이너와 개발자로 하여금 임의적인 사용자 정의 솔루션을 선택하게 하는 결과를 낳았습니다. 일부 개발자들은 HTML에서 제공하는 기본 기능을 사용하는 대신 여러 중첩된 {{htmlelement("div")}}와 스타일링을 위한 CSS, 동적 제어를 위한 자바스크립트로 이루어진 자바스크립트 라이브러리들에 의존합니다.

여기서의 문제는 이러한 구현이 시각적으로는 작동하나 스크린리더로는 해독이 불가하기 때문에 스크린리더 사용자들은 의미를 설명할 수 없는 요소들이 뒤섞여 있다는 말만 듣게 된다는 것입니다.

### WAI-ARIA를 들어가며

[WAI-ARIA](https://www.w3.org/TR/wai-aria/) (Web Accessibility Initiative - Accessible Rich Internet Applications)는 W3C에서 작성한 사양으로, 요소에 추가적인 의미를 제공하고 접근성을 개선하는 일련의 추가적인 HTML 속성을 정의합니다. 이 사양에는 세 가지 주요 기능이 정의되어 있습니다.

- [역할](/ko/docs/Web/Accessibility/ARIA/Roles)
  - : 역할은 요소가 무엇인지 또는 어떠한 기능을 하는지 정의합니다. 이들 중 다수는 소위 랜드마크 역할로, `role="navigation"` ({{htmlelement("nav")}}) 또는 `role="complementary"` ({{htmlelement("aside")}}) 처럼 구조 요소의 의미를 중복합니다. `role="banner"`, `role="search"`, `role="tablist"` 등 다른 역할들은 UI 패턴에서 흔히 보이는 페이지 구조를 설명합니다.

- 속성
  - : 이는 요소의 속성을 정의하며, 요소에 추가적인 의미나 의미를 부여하는 데 사용됩니다. 예를 들어 `aria-required="true"` 입력 양식이 유효하기 위해서는 필수로 값이 작성되어야 함을 지정합니다. 한편, `aria-labelledby="label"` 를 사용하면 특정 요소에 아이디를 지정하여 해당 요소가 다른 요소의 라벨로 참조되도록 할 수 있는데, 이는 `<label for="input">`을 사용할 경우 불가능한 것입니다. `aria-labelledby` 의 용례로는 {{htmlelement("div")}}에 속한 주요 설명을 여러 표의 라벨로 지정하거나 이미지의 대체 텍스트로서 사용하여 페이지 내에 이미 존재하는 정보의 중복을 피하는 등이 있습니다. 이에 대한 예시는 [대체 텍스트](/ko/docs/Learn/Accessibility/HTML#text_alternatives)에서 확인할 수 있습니다.

- 상태
  - : 입력 양식이 현재 비활성화 되어 있음을 뜻하는 `aria-disabled="true"`등과 같이 요소의 현재 상태를 지정하여 스크린리더기에 전달하는 특수 속성입니다. 속성은 앱의 수명 주기 동안 변경되지 않는 반면 상태는 일반적으로 자바스크립트를 통해 프로그래밍 방식으로 변화시킬 수 있다는 점에서 속성과 차이가 있습니다.

WAI-ARIA 속성의 중요한 점은 브라우저의 접근성 API(스크린 리더가 정보를 얻는 곳)에 의해 노출되는 정보를 제외하고는 웹 페이지에 영향을 주지 않는다는 것입니다. WAI-ARIA 속성은 CSS로 요소를 선택하는 데 유용할 수 있지만 웹 페이지 구조, DOM 등에는 영향을 미치지 않습니다.

> [!NOTE]
> 모든 ARIA 역할과 및 용도에 관한 유용한 목록과 추가 정보 링크는 WAI-ARIA 사양 - [역할 정의](https://www.w3.org/TR/wai-aria-1.1/#role_definitions) 페이지에서 찾을 수 있습니다. [ARIA 역할](/en-US/docs/Web/Accessibility/ARIA/Roles) 참고하세요.
>
> 이 사양 목록에는 모든 속성 및 상태에 관한 추가 정보 링크가 포함되어 있습니다. [Definitions of States and Properties (all `aria-*` attributes)](https://www.w3.org/TR/wai-aria-1.1/#state_prop_def)를 참고하세요.

### WAI-ARIA는 어디에서 지원되나요?

이 질문에 대답하기는 쉽지 않습니다. WAI-ARIA의 어떤 기능이 어디에서 사용 가능한지 대한 결정적인 자료를 찾기가 어렵기 때문입니다.

1. WAI-ARIA 사양에는 아주 많은 기능이 포함되어 있습니다.
2. 수많은 운영 체제, 브라우저 및 스크린리더의 조합을 고려해야 합니다.

마지막 사항이 핵심입니다. 스크린 리더를 사용하기 위해서는 우선 운영체제가 스크린리더 작동에 필요한 정보를 필수 접근성 API를 갖춘 브라우저를 실행해야 합니다. 대부분의 인기 있는 OS에는 스크린리더가 사용할 수 있는 한두 개의 브라우저가 갖추어져 있습니다. Paciello Group은 이에 대한 데이터를 제공하는 최신 게시물을 보유하고 있습니다. [Rough Guide: browsers, operating systems and screen reader support updated](https://www.tpgi.com/rough-guide-browsers-operating-systems-and-screen-reader-support-updated/)를 참고하세요.

다음으로, 해당 브라우저에서 ARIA 기능을 지원하고 API를 통해 해당 기능을 노출하는지, 스크린 리더가 해당 정보를 인식하여 사용자에게 유용한 방식으로 표시하는지 여부도 고려해야 합니다.

1. 브라우저 지원은 거의 보편화되었습니다.
2. ARIA 기능에 대한 스크린리더 지원은 아직 보편적이라고 할 수는 없지만 가장 대중적인 몇 개의 스크린리더는 이 수준에 거의 도달했습니다. Powermapper의 [스크린 리더 호환성  (WAI-ARIA Screen reader compatibility)](https://www.powermapper.com/tests/screen-readers/aria/) 문서를 참고하면 지원 수준에 대해 알아볼 수 있습니다.

이 글에서 모든 WAI-ARIA 기능과 정확한 지원 세부 사항을 다루지는 않습니다. 대신 사용자가 알아야 하는 가장 중요한 WAI-ARIA 기능들을 다루는데, 지원과 관련된 세부 정보가 언급되지 않을 때는 해당 기능이 잘 지원되는 것으로 간주해도 무방합니다. 지원에 대한 예외 사항이 있을 경우에는 명확하게 언급하고 넘어가겠습니다.

> [!NOTE]
> 일부 자바스크립트 라이브러리는 복잡한 양식 컨트롤과 같은 UI 기능을 만들 때 ARIA 속성을 추가하는 WAI-ARIA를 지원합니다. 빠른 UI 개발을 위한 타사 자바스크립트 솔루션을 찾고 있다면, UI 위젯의 접근성을 중요한 선택 요소로 고려해야 합니다. 좋은 예시로는 jQuaery UI ([About jQuery UI: Deep accessibility support](https://jqueryui.com/about/#deep-accessibility-support)를 참고하세요), [ExtJS](https://www.sencha.com/products/extjs/), 그리고 [Dojo/Dijit](https://dojotoolkit.org/reference-guide/1.10/dijit/a11y/statement.html) 등이 있습니다.
