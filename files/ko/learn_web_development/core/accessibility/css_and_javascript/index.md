---
title: CSS와 JavaScript의 접근성 모범 사례
slug: Learn_web_development/Core/Accessibility/CSS_and_JavaScript
original_slug: Learn/Accessibility/CSS_and_JavaScript
l10n:
  sourceCommit: 4bddde3e2b86234eb4594809082873fc5bf00ee3
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Accessibility/HTML","Learn/Accessibility/WAI-ARIA_basics", "Learn/Accessibility")}}

CSS와 JavaScript는 적절하게 사용될 때 접근성 높은 웹 경험을 제공할 수 있지만, 잘못 사용될 경우 접근성에 심각한 영향을 줄 수 있습니다. 이 문서에서는 복잡한 콘텐츠라도 가능한 한 접근성을 보장하기 위해 고려해야 할 몇 가지 CSS와 JavaScript 모범 사례를 설명합니다.

<table>
  <tbody>
    <tr>
      <th scope="row">필요한 사전 지식:</th>
      <td>
        HTML, CSS, JavaScript에 대한
        기본적인 이해와
        <a href="/ko/docs/Learn/Accessibility/What_is_accessibility">
        접근성이 무엇인지</a>에
        대한 이해.
      </td>
    </tr>
    <tr>
      <th scope="row">목표:</th>
      <td>
        웹 문서에 CSS와 JavaScript를 적절하게 사용하여 접근성을 최대화하고
        접근성을 저하시키지 않는 방법에 익숙해집니다.
      </td>
    </tr>
  </tbody>
</table>

## CSS와 JavaScript는 접근 가능한가요?

CSS와 JavaScript는 HTML만큼 접근성에 중요하지는 않지만, 사용 방법에 따라 접근성에 도움이 되게 하거나 손상시킬 수 있습니다. 다시 말해, CSS와 JavaScript의 사용이 문서의 접근성을 망치지 않도록 몇 가지 모범 사례를 고려하는 것은 중요합니다.

## CSS

CSS부터 살펴봅시다.

### 올바른 의미론적 표현과 사용자 경험

CSS를 사용하여 HTML 요소를 원하는 대로 보이게 만들 수 있지만, 항상 그렇게 해야 하는 것은 아닙니다. [HTML: 접근성을 위한 좋은 기초](/ko/docs/Learn/Accessibility/HTML) 문서에서 자주 말했듯이, 가능한 경우 적절한 의미론적 요소를 사용해야 합니다. 그렇지 않으면 모두에게 혼란과 사용성 문제가 발생할 수 있으며, 특히 장애를 가진 사용자에게는 더 큰 문제가 될 수 있습니다. 올바른 의미론적 요소를 사용하는 것은 사용자 경험과 많은 관련이 있습니다. 요소는 기능에 따라 특정한 방식으로 보이고 동작하며, 이러한 일반적인 규칙은 사용자에게 기대됩니다.

예를 들어, 스크린 리더 사용자는 개발자가 콘텐츠를 마크업할 때 적절한 제목 요소를 사용하지 않으면 페이지를 제목 요소를 통해 탐색할 수 없습니다. 마찬가지로, 제목은 제목처럼 보이지 않도록 스타일을 변경하면 시각적인 목적을 읽게 됩니다.

요약하면, 페이지 기능의 스타일을 업데이트하여 디자인에 맞게 조정할 수 있지만, 너무 많이 기대와 다르게 보이거나 동작하지 않도록 변경하지는 마십시오. 다음 섹션에서는 고려해야 할 주요 HTML 기능을 요약합니다.

#### "표준" 텍스트 콘텐츠 구조

제목, 단락, 목록 — 페이지의 핵심 텍스트 콘텐츠

```html
<h1>Heading</h1>

<p>Paragraph</p>

<ul>
  <li>My list</li>
  <li>has two items.</li>
</ul>
```

일반적인 CSS는 다음과 같습니다.

```css
h1 {
  font-size: 5rem;
}

p,
li {
  line-height: 1.5;
  font-size: 1.6rem;
}
```

다음을 지켜야 합니다.

- 텍스트를 논리적이고 가독성 좋고 읽기 편안하게 만들기 위해 합리적인 글꼴 크기, 줄 간격, 글자 간격 등을 선택하세요.
- 제목은 본문 텍스트와 구분되도록 일반적으로 기본 스타일과 같이 크고 굵게 보이도록 해야 합니다. 목록은 목록처럼 보여야 합니다.
- 텍스트 색상은 배경 색상과 잘 대비되어야 합니다.

자세한 내용은 [HTML 텍스트 기본 사항](/ko/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals)와 [텍스트 스타일링](/ko/docs/Learn/CSS/Styling_text)을 참고하세요.

#### 텍스트 강조

래핑되는 텍스트의 특정 강조점을 부여하는 인라인 마크업은 다음과 같습니다.

```html
<p>The water is <em>very hot</em>.</p>

<p>
  Water droplets collecting on surfaces is called <strong>condensation</strong>.
</p>
```

강조된 텍스트에 간단한 색상을 추가할 수 있습니다.

```css
strong,
em {
  color: #a60000;
}
```

그러나 강조할 요소를 의미 있는 방식으로 스타일을 지정할 경우는 거의 없을 것입니다. 굵은 글꼴과 기울임 꼴 텍스트의 표준 규칙은 쉽게 알아볼 수 있으며 스타일을 변경하면 혼란이 발생할 수 있습니다. 강조에 대한 자세한 내용은 [강조 및 중요성](/ko/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals#emphasis_and_importance)를 참고하세요.

#### 약어

확장과 연관되는 약어, 두문자어 또는 초기화를 허용하는 요소입니다.

```html
<p>
  Web content is marked up using Hypertext Markup Language, or
  <abbr>HTML</abbr>.
</p>
```

다시 말하지만, 간단한 방법으로 스타일을 지정할 수 있습니다.

```css
abbr {
  color: #a60000;
}
```

약어에 대해 인정된 스타일링 규칙은 점선 밑줄이며, 이에 크게 벗어나는 것은 현명하지 않습니다. 약어에 대한 더 많은 것은 [약어](/ko/docs/Learn/HTML/Introduction_to_HTML/Advanced_text_formatting#약어)를 참고하세요.

#### 링크

웹에서 새로운 곳으로 이동하는 방법인 하이퍼링크입니다.

```html
<p>Visit the <a href="https://www.mozilla.org">Mozilla homepage</a>.</p>
```

매우 간단한 링크 스타일은 아래와 같습니다.

```css
a {
  color: #ff0000;
}

a:hover,
a:visited,
a:focus {
  color: #a60000;
  text-decoration: none;
}

a:active {
  color: #000000;
  background-color: #a60000;
}
```

표준 링크 규칙은 밑줄이 그어져 있으며 표준 상태에서는 다른 색상(기본값: 파랑색), 이전에 링크를 방문했을 때는 다른 색상(기본값: 빨간색)으로 표시됩니다. 또한, 링크 위에 마우스를 올리면 마우스 포인터가 포인터 아이콘으로 바뀌고, 링크에 초점을 맞추거나(예: 탭 이동을 통해) 활성화되면 강조 표시됩니다. 다음 이미지는 Firefox(점선 윤곽선)와 Chrome(파란색 윤곽선) 모두 강조 표시를 보여줍니다.

![Firefox 브라우저에 있는 링크 목록의 스크린샷. 목록에는 4개의 항목이 포함되어 있습니다. 두 번째 목록 항목은 탭을 통해 초점이 맞춰질 때 파란색 점선 윤곽선을 사용하여 강조 표시됩니다.](focus-highlight-firefox.png)

![Chrome 브라우저에 있는 링크 목록의 스크린샷. 목록에는 4개의 항목이 포함되어 있습니다. 세 번째 목록 항목은 탭을 통해 초점이 맞춰질 때 파란색 외곽선을 사용하여 강조 표시됩니다.](focus-highlight-chrome.png)

사용자가 링크와 상호작용을 할 때 계속 피드백을 제공하는 한 링크 스타일을 창의적으로 사용할 수 있습니다. 상태가 변경되면 반드시 어떤 일이 발생해야 하며 포인터 커서나 윤곽선을 제거해서는 안 됩니다. 둘 다 키보드 컨트롤을 사용하는 사람들에게 매우 중요한 접근성 도구입니다.

#### 양식 요소

사용자가 웹 사이트에 데이터를 입력할 수 있도록 하는 요소입니다.

```html
<div>
  <label for="name">Enter your name</label>
  <input type="text" id="name" name="name" />
</div>
```

[form-css.html](https://github.com/mdn/learning-area/blob/main/accessibility/css/form-css.html) 예시에서 CSS의 좋은 예시를 볼 수 있습니다. ([라이브 보기](https://mdn.github.io/learning-area/accessibility/css/form-css.html)도 있습니다.)

양식을 위해 작성할 대부분의 CSS는 요소의 크기를 조정하고, 레이블과 입력을 정렬하고, 깔끔하고 단정하게 보이기 위한 것입니다.

그러나 양식 요소에 초점이 맞춰졌을 때 받을 것으로 예상되는 시각적인 피드백에서 너무 많이 벗어나서는 안 됩니다. 이는 기본적으로 링크와 동일합니다(위 참고). 양식 포커스/호버 상태의 스타일을 지정하여 브라우저 전체에서 이 동작을 보다 일관되게 만들거나 페이지 디자인에 더 잘 맞도록 할 수 있지만 완전히 제거하지는 마십시오. 다시 말하지만 사람들은 이러한 단서에 의존하여 무슨 일이 일어나고 있는지 알 수 있습니다.

#### 테이블

표 형식의 데이터를 표현하기 위한 표입니다.

[table-css.html](https://github.com/mdn/learning-area/blob/main/accessibility/css/table-css.html) 예제에서 표 HTML 및 CSS의 훌륭하고 간단한 예를 볼 수 있습니다. ([라이브 보기](https://mdn.github.io/learning-area/accessibility/css/table-css.html)도 있습니다.)

표 CSS는 일반적으로 표를 디자인에 더 잘 어울리게 하고 보기 좋게 만드는 역할을 합니다. 표 헤더가 눈에 띄도록 하고(일반적으로 굵게 표시), 얼룩말 줄무늬를 사용하여 여러 행을 구문 분석하기 쉽게 하는 것이 좋습니다.

### 색상 및 색상 대비

웹 사이트의 색 구성표를 선택할 때 텍스트 색상이 배경 색상과 잘 대비되는지 확인하세요. 디자인은 멋져 보일 수 있지만 색맹과 같은 시각 장애가 있는 사람이 콘텐츠를 읽을 수 없다면 좋지 않습니다.

대비가 문제를 일으키지 않을 정도로 큰지 확인하는 쉬운 방법이 있습니다. 전경색과 배경색을 입력하여 확인할 수 있는 온라인 배디 검사 도구가 많이 있습니다. 예를 들어 [색상 대비 검사기](https://webaim.org/resources/contrastchecker/)는 사용이 간편하며 색상 대비와 관련된 WCAG 기준을 준수하는 데 필요한 사항에 대한 설명을 제공합니다.

> [!NOTE]
> 명암 대비가 높으면 광택 화면이 있는 스마트폰이나 태블릿을 사용하는 사람은 햇빛과 같은 밝은 환경에서 페이지를 더 잘 읽을 수 있도록 해줍니다.

또 다른 팁은 표지판/정보를 색상에만 의존하지 않는 것입니다. 이는 색상을 볼 수 없는 사람들에게는 좋지 않기 때문입니다. 예를 들어, 필수 양식 필드를 빨간색으로 표시하는 대신 별표와 빨간색으로 표시하세요.

### 요소 숨기기

시각적 디자인에서 모든 콘텐츠가 한 번에 표시되지 않도록 요구하는 경우가 많이 있습니다. 예를 들어, [탭 정보 상자 예시](https://mdn.github.io/learning-area/css/css-layout/practical-positioning-examples/info-box.html) ([소스 코드](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/info-box.html))에는 세가지 정보 패널이 있지만, 우리는 그것들을 서로의 위에 [배치](/ko/docs/Learn/CSS/CSS_layout/Positioning)하고 클릭하여 각각을 표시할 수 있는 탭을 제공하고 있습니다. (Tab 키와 Enter/Return을 사용하여 키보드로 액세스할 수도 있습니다.)

![탭 1이 선택된 3개의 탭 인터페이스는 해당 탭의 내용만 표시됩니다. 다른 탭의 내용은 숨깁니다. 탭을 선택하면 텍스트 색상이 검은색에서 흰색으로 바뀌고 배경 색상이 주황색에서 빨간색으로 바뀝니다.](tabbed-info-box.png)

스크린 리더 사용자는 이 중 어떤 것도 신경 쓰지 않습니다. 소스 순서가 적절하고 모든 내용을 읽을 수 있다면 만족합니다. 이 예에서 사용된 절대 위치 지정은 일반적으로 스크린 리더가 콘텐츠에 접근하는 것을 방해하지 않기 때문에 시각적 효과를 위해 콘텐츠를 숨기는 가장 좋은 메커니즘 중 하나로 간주됩니다.

반면에 {{cssxref("visibility")}}`:hidden` 또는 {{cssxref("display")}}`:none`은 스크린 리더에서 콘텐츠를 숨기기 때문에 사용하면 안 됩니다. 물론, 이 콘텐츠를 스크린 리더에서 숨기려는 타당한 이유가 있는 경우는 예외입니다.

> **참고:** [스크린 리더 사용자만을 위한 보이지 않는 콘텐츠](https://webaim.org/techniques/css/invisiblecontent/)에는 이 주제와 관련된 훨씬 더 유용한 세부 정보가 있습니다.

### 사용자가 스타일을 재정의하는 것을 허용

사용자가 자신만의 맞춤 스타일로 스타일을 재정의할 수 있습니다. 예를 들면 다음과 같습니다.

- Sarah Maddox의 [Firefox에서 사용자 정의 스타일 시트(CSS)를 사용하는 방법](https://www.itsupportguides.com/knowledge-base/computer-accessibility/how-to-use-a-custom-style-sheet-css-with-firefox/)을 참고하세요. Firefox에서 이 작업을 수동으로 수행하는 방법을 다루는 유용한 가이드입니다.
- 확장 프로그램을 사용하는 것이 더 쉬울 수도 있습니다. 예를 들어, Stylus 확장 프로그램은 [Firefox](https://addons.mozilla.org/en-US/firefox/addon/styl-us/)에서 사용할 수 있으며 Stylish는 [Chrome](https://chrome.google.com/webstore/detail/stylish-custom-themes-for/fjnbnpbmkenffdnngjfgmeleoegfcffe)과 동일합니다.

사용자는 다양한 이유로 이 작업을 수행할 수 있다. 시각 장애가 있는 사용자는 방문하는 모든 웹 사이트에서 텍스트를 더 크게 표시하고 싶을 수도 있고, 심각한 색맹이 있는 사용자는 모든 웹 사이트를 쉽게 볼 수 있도록 고대비 색상으로 표시할 수도 있습니다. 필요가 무엇이든, 이에 익숙해져야 하며 그러한 변경 사항이 디자인에 적용될 수 있도록 디자인을 충분히 유연하게 만들어야 합니다. 예를 들어, 기본 콘텐츠 영역이 더 큰 텍스트를 처리할 수 있는지(모든 내용이 표시되도록 스크롤되기 시작할 수도 있음) 단순히 숨기거나 완전히 깨지지 않도록 할 수 있습니다.

## JavaScript

JavaScript는 어떻게 사용하냐에 따라 접근성을 깨뜨릴 수 있습니다.

최신 JavaScript는 강력한 언어이며, 오늘날 간단한 콘텐츠 및 UI 업데이트부터 완전한 2D 및 3D 게임까지 많은 작업을 수행할 수 있습니다. 모든 콘텐츠가 모든 사람에게 100% 접근 가능해야 한다는 규칙은 없습니다. 단지 할 수 있는 일을 하고 앱을 가능한 한 접근 가능하게 만들기만 하면 됩니다.

간단한 콘텐츠와 기능은 쉽게 액세스할 수 있습니다. 예를 들어, 텍스트, 이미지, 표, 양식, 기능을 활성화하는 푸시 버튼 등이 있습니다. [HTML: 접근성을 위한 좋은 기반](/ko/docs/Learn/Accessibility/HTML) 문서에서 살펴본 것처럼 주요 고려 사항은 다음과 같습니다.

- 좋은 의미론: 올바른 작업에 적합한 요소를 사용합니다. 예를 들어, 제목과 단락, {{htmlelement("button")}} 및 {{htmlelement("a")}} 요소를 사용하는지 확인하세요.
- 콘텐츠가 직접 텍스트 콘텐츠, 양식 요소에 적합한 텍스트 레이블 또는 [대체 텍스트](/ko/docs/Learn/Accessibility/HTML#대체_텍스트)(예: 이미지 대체 텍스트)로 제공되는지 확인하세요.

또한 JavaScript를 사용하여 누락된 기능을 구축하는 방법에 대한 예도 살펴보았습니다. [키보드 접근성 다시 구축](/ko/docs/Learn/Accessibility/HTML#키보드_접근성_다시_구축하기)을 참조하세요. 이는 이상적이지는 않지만, 어떤 이유로 사용되는 마크업을 제어할 수 없는 상황에서는 가능하다는 것을 보여줍니다. 비의미론적 JavaScript 기반 위젯에 대한 접근성을 향상시키는 또 다른 방법은 WAI-ARIA를 사용하여 스크린 리더 사용자에게 추가적인 의미론을 제공하는 것입니다. 다음 문서에서도 이 문제를 자세히 다룰 것입니다.

3D 게임과 같은 복잡한 기능은 접근하기 쉽지 않습니다. [WebGL](/ko/docs/Web/API/WebGL_API)을 사용하여 만든 복잡한 3D 게임은 현재로서는 중증 시각 장애인이 활용할 수 있는 정보인 대체 텍스트나 다른 정보를 제공할 수 있는 기능이 없는 {{htmlelement("canvas")}} 요소에서 렌더링됩니다. 이러한 게임에는 실제로 중증 시각 장애인 그룹의 사람들이 주요 대상 청중의 일부로 포함되어 있지 않으며 시각 장애인이 100% 접근할 수 있도록 기대하는 것은 비합리적입니다. 그러나, [키보드 제어](/ko/docs/Games/Techniques/Control_mechanisms/Desktop_with_mouse_and_keyboard)를 구현하여 마우스가 아닌 사용자도 사용할 수 있도록 하고 색약이 있는 사용자도 사용할 수 있을 만큼 색 구성표를 충분히 대비되게 만들 수 있습니다.

### 너무 많은 JavaScript의 문제

문제는 종종 사람들이 JavaScript에 너무 많이 의존할 때 발생합니다. 때로는 모든 것이 JavaScript로 이루어진 웹 사이트를 보게 될 것입니다. HTML, CSS는 JavaScript로 생성되었습니다. 이것은 모든 종류의 접근성 및 그와 관련된 다른 문제들을 가지고 있으므로 권장되지 않습니다.

올바른 작업에 적합한 요소를 사용할 뿐만 아니라 올바른 작업에 적합한 기술을 사용하고 있는지도 확인해야 합니다! 빛나는 JavaScript 기반 3D 정보 상자가 필요한지, 아니면 평범한 오래된 텍스트가 필요한지 신중하게 생각해 보세요. 복잡한 비표준 양식 위젯이 필요한지, 아니면 텍스트 입력이 필요한지 신중하게 생각해 보세요. 그리고 가능하다면 JavaScript를 사용하여 모든 HTML 콘텐츠를 생성하지 마세요.

### 눈에 띄지 않게 유지하기

콘텐츠를 만들 때 **눈에 띄지 않는 JavaScript**를 염두에 두어야 합니다. 눈에 띄지 않는 JavaScript의 개념은 가능한 한 기능을 향상시키는 데 사용되어야 하며, 전체를 구축하는 데 사용되어선 안 됩니다. 기본 기능은 JavaScript 없이도 이상적으로 작동해야 하지만 이것이 항상 가능한 것은 아니라는 점은 잘 알고 있습니다. 하지만 다시 말해, 가능한 한 내장된 브라우저 기능을 사용하는 것이 중요합니다.

눈에 띄지 않는 JavaScript의 좋은 예는 다음과 같습니다.

- 서버가 데이터를 확인할 때까지 기다리지 않고도 사용자에게 양식 항목에 대한 문제를 빠르게 알려주는 클라이언트 측 양식 검증을 제공합니다. 사용할 수 없는 경우 양식은 여전히 작동하지만 검증은 더 느릴 수 있습니다.
- JavaScript를 사용할 수 없는 경우 사용할 수 있는 동영상에 대한 직접 링크와 함께 키보드 사용자가 엑세스할 수 있는 HTML `<video>`의 맞춤형 컨트롤을 제공합니다(기본 `<video>` 브라우저 컨트롤은 대부분의 브라우저에서 키보드로 액세스할 수 없습니다).

예제로 빠르고 지저분한 클라이언트 측 양식 유효성 검사를 작성했습니다. [form-validation.html](https://github.com/mdn/learning-area/blob/main/accessibility/css/form-validation.html)를 참고하세요. 여기서는 간단한 양식을 볼 수 있습니다. 하나 또는 두 필드를 모두 비워 두고 양식을 제출하려고 하면 제출이 실패하고 무엇이 잘못되었는지 알려주는 오류 메시지가 나타납니다.

이러한 종류의 양식 유효성 검사는 눈에 띄지 않습니다. JavaScript를 사용할 수 없어도 양식을 완벽하게 사용할 수 있으며, 악의적인 사용자가 클라이언트 측 검증(예: 브라우저에서 JavaScript 비활성화)을 우회하기가 너무 쉽기 때문에 합리적인 양식 구현에서는 서버 측 유효성 검사도 활성화됩니다. 클라이언트 측 검증은 오류를 보고하는 데 여전히 매우 유용합니다. 사용자는 서버로 왕복하고 페이지를 다시 로드할 필요 없이 즉시 실수를 알 수 있습니다. 이는 확실히 유용한 점입니다.

> [!NOTE]
> 이 간단한 데모에서는 서버측 유효성 검사가 구현되지 않았습니다.

우리는 이 양식 검사에 대한 접근성도 매우 높게 만들었습니다. {{htmlelement("label")}} 요소를 사용해서 양식 레이블이 입력에 명확하게 연결되어 있는 것을 확실하게 해서 스크린 리더가 다음과 같이 읽을 수 있습니다.

```html
<label for="name">Enter your name:</label>
<input type="text" name="name" id="name" />
```

양식이 제출될 때만 유효성 검사를 수행합니다. 이는 UI를 너무 자주 업데이트하지 않고 스크린 리더(및 기타) 사용자에게 잠재적으로 혼란을 주지 않기 위한 것입니다.

```js
form.onsubmit = validate;

function validate(e) {
  errorList.innerHTML = "";
  for (let i = 0; i < formItems.length; i++) {
    const testItem = formItems[i];
    if (testItem.input.value === "") {
      errorField.style.left = "360px";
      createLink(testItem);
    }
  }

  if (errorList.innerHTML !== "") {
    e.preventDefault();
  }
}
```

> [!NOTE]
> 이 예제에서는 스크린 리더가 내용을 읽는 데 방해가 되지 않기 때문에 display나 visibility 등의 다른 방법 대신 절대 위치 지정을 사용하여 오류 메시지 상자를 숨기고 표시합니다.

실제 양식 유효성 검사는 이보다 훨씬 더 복잡합니다. 입력한 이름이 실제로 이름처럼 보이고, 입력된 나이가 실제로 숫자이며 사실적인지(예: 음수가 아니며 4자리 미만) 확인하고자 합니다. 여기서는 각 입력 필드에 대한 값이 입력되었는지 (`if (testItem.input.value === '')`) 확인하는 간단한 검사를 구현했습니다.

유효성 검사가 수행되었을 때 테스트가 통과되면 양식이 제출됩니다. 오류가 있는 경우 (`if (errorList.innerHTML !== '')`) 양식 제출을 중지하고 ([`preventDefault()`](/ko/docs/Web/API/Event/preventDefault)를 사용) 생성된 오류 메시지를 표시합니다(아래 참고). 이 메커니즘은 오류가 있는 경우에만 오류가 표시됨을 의미하므로 사용성에 더 좋습니다.

양식을 제출할 때 입력한 값이 없는 입력에 대해 링크가 있는 목록 아이템을 만들어 `errorList`에 삽입합니다.

```js
function createLink(testItem) {
  const listItem = document.createElement("li");
  const anchor = document.createElement("a");

  const name = testItem.input.name;
  anchor.textContent = `${name} field is empty: fill in your ${name}.`;
  anchor.href = `#${name}`;
  listItem.appendChild(anchor);
  errorList.appendChild(listItem);
}
```

각 링크는 두 가지 목적을 위해 사용됩니다. 오류가 무엇인지 알려주며, 해당 링크를 클릭/활성화하여 해당 입력 요소로 바로 이동하여 항목을 수정할 수 있습니다.

또한 `errorField`는 소스 순서의 맨 위에 배치되어 있습니다(CSS를 사용하는 UI의 위치는 다르지만). 이는 사용자가 양식 제출의 문제점을 파악하고 페이지의 처음으로 돌아가서 문제의 입력 요소를 파악할 수 있다는 것을 의미합니다.

마지막으로, 우리는 WAI-ARIA 속성을 몇가지 데모에 사용하여 페이지를 다시 로드하지 않고 콘텐츠 영역이 지속적으로 업데이트됨에 따라 발생하는 접근성 문제를 해결하는 데 도움을 주었습니다(스크린 리더는 기본적으로 이 문제를 선택하거나 사용자에게 경고하지 않음).

```html
<div class="errors" role="alert" aria-relevant="all">
  <ul></ul>
</div>
```

이러한 속성에 대해서는 [WAI-ARIA](/ko/docs/Learn/Accessibility/WAI-ARIA_basics)를 훨씬 더 자세히 다루는 다음 문서에서 설명하겠습니다.

> [!NOTE]
> HTML 양식에 `required`, `min`/`minlength`, `max`/`maxlength` 속성과 같은 검증 메커니즘이 내장되어 있다는 사실을 생각해 보시는 분들도 있을 것입니다(자세한 내용은 {{htmlelement("input")}} 요소를 참고하세요). 여러 브라우저에서 지원이 고르지 않기 때문에 데모에서 사용하지 못했습니다(예: IE10 이상에만 지원).

> [!NOTE]
> WebAIM의 [사용 가능하고 액세스 가능한 양식 유효성 검사 및 오류 복구](https://webaim.org/techniques/formvalidation/)는 액세스 가능한 양식 유효성 검사에 대한 몇 가지 유용한 정보를 더 제공합니다.

### 다른 JavaScript 접근성 문제

JavaScript를 구현하고 접근성에 대해 생각할 때 주의해야 할 사항이 있습니다. 찾는 대로 추가될 예정입니다.

#### 마우스 고유 이벤트

아시다시피 대부분의 사용자 상호 작용은 이벤트 핸들러를 사용하여 클라이언트 측 JavaScript로 구현되며, 이를 통해 특정 이벤트 발생에 대한 응답으로 함수를 실행할 수 있습니다. 일부 이벤트에는 접근성 문제가 있을 수 있습니다. 여러분이 보게 될 주요 예는 [mouseover](/ko/docs/Web/API/Element/mouseover_event), [mouseout](/ko/docs/Web/API/Element/mouseout_event), [dblclick](/ko/docs/Web/API/Element/dblclick_event) 등과 같은 마우스 고유 이벤트입니다. 이러한 이벤트에 응답하여 실행되는 기능은 키보드 제어와 같은 다른 메커니즘을 사용하여 엑세스할 수 없습니다.

이러한 문제를 완화하려면 키보드 사용자에게 접근성을 제공하는 다른 방법(소위 장치 독립적 이벤트 핸들러)으로 활성화할 수 있는 유사한 이벤트와 함께 이러한 이벤트를 두 배로 늘려야 합니다. [focus](/ko/docs/Web/API/Element/focus_event) 및 [blur](/ko/docs/Web/API/Element/blur_event) 는 키보드 사용자에게 접근성을 제공합니다.

이것이 유용할 수 있는 경우를 살펴보겠습니다. 전자상거래 제품 카탈로그에서 볼 수 있는 것처럼 마우스를 올리거나 초점을 맞추면 이미지의 더 큰 버전을 표시하는 썸네일 이미지를 제공하고 싶을 수도 있습니다.

우리는 [mouse-and-keyboard-events.html](https://mdn.github.io/learning-area/accessibility/css/mouse-and-keyboard-events.html) ([소스 코드](https://github.com/mdn/learning-area/blob/main/accessibility/css/mouse-and-keyboard-events.html)를 참고하세요.)에서 매우 간단한 예를 만들었습니다. 이 코드에는 확대된 이미지를 표시하고 숨기는 두 가지 기능이 있습니다. 이는 이벤트 핸들러로 설정된 다음 줄에 의해 실행됩니다.

```js
imgThumb.onmouseover = showImg;
imgThumb.onmouseout = hideImg;

imgThumb.onfocus = showImg;
imgThumb.onblur = hideImg;
```

처음 두 줄은 각각 마우스 포인터를 썸네일 위로 가져갈 때와 멈추었을 때 기능을 실행합니다. 하지만 키보드로 확대/축소된 보기에 액세스할 수는 없습니다. 이를 허용하기 위해 이미지에 초점이 맞춰지고 흐려질 때(초점이 멈출 때) 기능을 실행하는 마지막 두 줄을 포함했습니다. 이것은 이미지 위에 `tabindex="0"`을 포함시켰기 때문에 이미지 위에 탭을 눌러 수행할 수 있습니다.

[click](/ko/docs/Web/API/Element/click_event) 이벤트는 흥미롭습니다. 마우스에 의존하는 것처럼 보이지만 대부분의 브라우저는 초점이 있는 링크나 양식 요소에서 Enter/Return을 누른 후 또는 터치 스크린 장치에서 이러한 요소를 탭할 때 [onclick](/ko/docs/Web/API/Element/click_event) 이벤트 핸들러를 활성화합니다. 그러나 tabindex를 사용하여 기본 초점 가능 이벤트가 아닌 이벤트에 초점을 두는 경우에는 기본적으로 동작하지 않습니다. 이러한 경우 정확한 키를 눌렀을 때 특별히 감지해야 합니다([키보드 접근성 다시 구축](/ko/docs/Learn/Accessibility/HTML#키보드_접근성_다시_구축하기)를 참고하세요.).

## 실력을 시험해 보세요!

이 문서를 끝까지 읽었지만 가장 중요한 정보를 기억할 수 있습니까? 계속 진행하기 전에 이 정보를 유지했는지 확인하기 위한 몇가지 추가 테스트를 확인할 수 있습니다. [실력 테스트: CSS 및 JavaScript 접근성](/ko/docs/Learn/Accessibility/CSS_and_JavaScript/Test_your_skills:_CSS_and_JavaScript_accessibility)를 참고하세요.

## 요약

이 문서를 통해 웹 페이지에서 CSS 및 JavaScript 사용과 관련된 접근성 문제에 대해 많은 세부 정보와 이해를 얻었기를 바랍니다.

다음은 WAI-ARIA입니다!

{{PreviousMenuNext("Learn/Accessibility/HTML","Learn/Accessibility/WAI-ARIA_basics", "Learn/Accessibility")}}
