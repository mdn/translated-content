---
title: 이전 브라우저 지원
slug: Learn/CSS/CSS_layout/Supporting_Older_Browsers
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn/CSS/CSS_layout/Legacy_Layout_methods", "Learn/CSS/CSS_layout/Fundamental_Layout_Comprehension", "Learn/CSS/CSS_layout")}}

이 모듈에서는 Flexbox 및 Grid를 디자인의 기본 레이아웃 메서드로 사용할 것을 권고합니다. 그러나 당신이 사용한 메서드를 지원하지 않는 브라우저나 이전 브라우저를 사용해 당신의 사이트를 방문하는 사람들이 있을 겁니다. 이런 일은 웹상에서 항상 있는 일입니다. 즉 새로운 기능이 개발됨에 따라 서로 다른 브라우저가 서로 다른 것들의 우선 순위를 정합니다. 이 문서는 구식 기술의 사용자들을 외면하지 않고도 최신 웹 기술을 사용하는 방법에 대해 설명합니다.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">선결 사항:</th>
      <td>
        HTML 기본 (<a href="/ko/docs/Learn/HTML/Introduction_to_HTML"
          >HTML 입문</a
        >
        학습), CSS의 작동 방식
        <a href="/ko/docs/Learn/CSS/Introduction_to_CSS">CSS 입문 </a>및 (<a
          href="/ko/docs/Learn/CSS/Styling_boxes"
          >상자 양식 지정</a
        >
        학습)
      </td>
    </tr>
    <tr>
      <th scope="row">목표:</th>
      <td>
        여러분이 사용하려는 기능을 지원하지 않을 수있는 이전 브라우저에서
        레이아웃을 지원하는 방법을 파악합니다.
      </td>
    </tr>
  </tbody>
</table>

## 당신의 사이트 브라우저 지향은?

모든 웹사이트는 공략 대상에 따라 달라집니다. 접근 방식을 결정하기 전에 이전 브라우저를 사용하여 사이트를 방문하는 방문자 수를 확인하십시오. 사람들이 사용중인 기술을 알려주는 분석 기능(예: Google analytics)을 이용할 수 있고, 추가 및 교체할 기존 웹 사이트가 있는 경우 이는 간단한 작업입니다. 당신이 분석툴이 없거나, 이번이 완전히 새로운 사이트 개설이라면 [Statcounter](http://gs.statcounter.com/)같은 위치별로 필터링된 통계를 제공할 수 있는 사이트가 있습니다.

또한 사람들이 여러분의 사이트를 이용하는 방식이나 장치 유형을 고려해야만 합니다. 예를 들어 모바일 장치 이용 방문자가 평균치를 웃돌거라는 예상을 할 수 있습니다. 접근성 및 보조 기술을 사용하는 사람들은 항상 고려해야하지만 일부 사이트에서는 그 점이 더욱 중요할 수 있습니다. 필자의 경험에 따르면 개발자들은 종종 이전 버전의 인터넷 익스플로러 사용자 1%에 대해 매우 걱정하는 반면, 더 많은 사용자 층인 내게 필요한 옵션 사용자에 대해선 전혀 고려하지 않습니다.

## 당신이 사용하려는 기능에 대한 지원은 어떻습니까?

사이트에 들어오는 브라우저를 알면, 해당 대상에 사용하고 싶은 기술을 평가할 수 있고, 그리고 그 기술을 이용할 수 없는 방문객들에게 얼마나 쉽게 대안을 제공할 수 있는지 진단할 수 있습니다. 우리는 CSS 속성을 상세히 설명하는 각 페이지에 대한 브라우저 호환성 정보를 모질라 개발자 네트워크에서 제공함으로써 쉽게 사용할 수 있도록 노력하고 있습니다. 예를 들어, {{cssxref("grid-template-columns")}} 페이지를 살펴보십시오. 이 페이지의 맨 아래에는 이 속성을 지원하기 시작한 버전과 함께 주요 브라우저가 나열된 표가 있습니다.

![](browser-table.png)

기능이 얼마나 잘 지원되는지 확인하는 또 다른 일반적인 방법은 [Can I Use](https://caniuse.com/) 웹 사이트입니다. 이 사이트에는 대부분의 웹 플랫폼 기능이 브라우저 지원 상태에 대한 정보와 함께 나열됩니다. 위치별로 사용 통계를 볼 수 있습니다. 주로 특정 지역의 사용자가있는 사이트에서 작업하는 경우 유용합니다. Google 웹 로그 분석 계정을 연결하여 사용자 데이터를 기반으로 분석할 수도 있습니다.

사용자의 브라우저가 보유한 기술과 당신이 사용하려는 것에 대한 지원을 이해하면 당신은 좋은 상황에서 모든 결정을 내리고 모든 사용자를 가장 잘 지원할 수있는 방법을 알 수 있습니다.

## 지원하는 것과 '모양이 똑같다'는 말은 다르다

일부 사용자는 휴대 전화로 사이트를 보고 다른 사용자는 대형 데스크톱 화면에서 사이트를 보고 있기 때문에 모든 브라우저에서 웹 사이트가 동일하게 보이지 않을 수 있습니다. 마찬가지로 일부 사용자는 이전 브라우저 버전을 갖고 있고 다른 사용자에게는 최신 브라우저를 갖고 있습니다. 일부 사용자는 화면 읽기 프로그램을 사용해 내용을 읽거나 페이지를 확대하여 읽을 수도 있습니다. 모든 사람을 지원한다는 것은 방어적으로 디자인된 콘텐츠 버전을 제공하여 최신 브라우저에서는 사이트 외관이 뛰어나지만, 이전 브라우저 사용자에게는 기본 수준으로 계속 사용할 수 있음을 의미합니다.

기본적인 지원 수준이란 페이지의 일반적인 흐름이 이해되도록 콘텐츠를 잘 구성하는 것에서 출발합니다. 기능이 매우 제한적인 전화기 사용자는 많은 CSS를 얻을 수 없지만, 콘텐츠는 쉽게 읽을 수 있는 방식으로 나열됩니다. 따라서 항상 잘 구성된 HTML 문서에서 출발해야 합니다. 여러분의 스타일 시트를 제거했을 때, 컨텐츠가 여전히 잘 이해되나요?

한 가지 옵션은 아주 오래된 브라우저나 제한된 브라우저를 사용하는 사람들이 찾을 수 있는 대체 페이지로 사이트 외관을 단순화하는 것입니다. 문제가 되는 해당 브라우저를 사용해 소수의 사람들이 사이트를 방문하는 경우 최신 브라우저 사용자들과 비슷한 체험을 그들에게 제공하기 위해 시간을 쏟는 것이 상업적으로 맞지 않을 겁니다. 사이트의 접근성을 높이고 더 많은 사용자에게 서비스를 제공하는 일에 시간을 투자하는 것이 더 좋을 겁니다. 평범한 HTML 페이지와 온갖 장신구가 포함된 페이지 사이에는 중간 지점이 있으며 CSS는 실제로 이러한 대체 페이지를 매우 간단하게 생성해 줍니다.

## CSS로 대체 페이지 생성하기

CSS 규격에는 두 가지 레이아웃 메서드가 동일한 항목에 적용될 때 브라우저가 수행하는 작업을 설명하는 정보가 포함되어 있습니다. 즉, 부동체 항목이 한편으로는 CSS grid 레이아웃을 사용하는 grid 항목인 경우 발생하는 상황에 대한 정의가 있음을 의미합니다. 이 정보가 브라우저가 이해하지 못하는 CSS를 무시한다는 지식과 결합되어, 이미 다루었던 [레거시 기술](/ko/docs/Learn/CSS/CSS_layout/Legacy_Layout_Methods)을 사용하여 간단한 레이아웃을 생성할 수 있는 방법이 있습니다. 그런 다음 이를 최신 브라우저에서는 grid 레이아웃으로 덮어씁니다.

아래 예에서는 세 개의 `<div>` 부동체를 행으로 표시했습니다. [CSS grid 레이아웃](/ko/docs/Learn/CSS/CSS_layout/Grids)을 지원하지 않는 브라우저는 상자 행을 <ruby><em>부동 레이아웃</em><rp> (</rp><rt>浮動 組版</rt><rp>) </rp></ruby>으로 간주합니다. grid 항목이 되는 부동 항목은 부동 동작을 상실합니다. 즉, `.wrapper` 클레스를 grid 컨테이너로 전환하면 부동 항목이 grid 항목이 됩니다. 브라우저가 grid 레이아웃을 지원하는 경우 grid 디스플레이를 표시합니다. 지원하지 않으면 `display: grid` 관련 속성은 무시되고 부동 레이아웃이 사용됩니다.

```css
* {
  box-sizing: border-box;
}

.wrapper {
  background-color: rgb(79, 185, 227);
  padding: 10px;
  max-width: 400px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.item {
  float: left;
  border-radius: 5px;
  background-color: rgb(207, 232, 220);
  padding: 1em;
}
```

```html
<div class="wrapper">
  <div class="item">항목 하나</div>
  <div class="item">항목 둘</div>
  <div class="item">항목 셋</div>
</div>
```

{{ EmbedLiveSample('예제1', '100%', '200') }}

> **참고:** {{cssxref("clear")}} 속성도 마찬가지로 정리된 항목이 grid가 되자마자 효력을 상실합니다. 따라서 정리된 footer가 딸린 레이아웃을 가질 수 있으며, 이 레이아웃이 grid 레이아웃으로 전환됩니다.

### 대체 메서드

이 부동 예제와 비슷한 방식으로 사용할 수있는 여러 레이아웃 메서드가 있습니다. 당신이 생성해야하는 레이아웃 패턴에 가장 적합한 것을 선택할 수 있습니다.

- Float(부동) 및 **clear** 위에서 볼 수 있듯이, 부동 또는 정리 속성이 레이아웃에 미치는 효과는 부동되거나 정리된 항목이 flex 또는 grid 항목이 되면 중단됩니다.
- display: inline-block<
  - : 이 방법을 사용하여 열 레이아웃을 생성할 수 있는 경우는 항목이 `display: inline-block`로 설정되었을 경우이지만, flex 또는 grid 항목이 된다면 인라인 블록 동작은 무시됩니다.
- display: table
  - : CSS 테이블을 생성하는 메서드는 해당 단원의 [입문서](/ko/docs/Learn/CSS/CSS_layout/Introduction)가 대체품으로 활용될 수 있습니다. CSS 테이블 레이아웃으로 설정된 항목은 그들이 flex 또는 grid 항목이 될 경우 자기 동작을 상실하게 됩니다. 중요하게는 테이블 구조를 수정하기 위해 생성된 익명 상자는 생성되지 않습니다.
- 다단 레이아웃
  - : 특정 레이아웃의 경우 당신은 [다단](/ko/docs/Learn/CSS/CSS_layout/Multiple-column_Layout)을 대체품로 사용할 수 있습니다. 여러분의 콘테이너가 `column-*` 속성에 속한 것으로 정의되었다면 grid 컨테이너가 될 것이고, 다단 동작은 발생하지 않습니다.
- grid 대체품 역할인 Flexbox<
  - : [Flexbox](/ko/docs/Learn/CSS/CSS_layout/Flexbox)는 인터넷 익스플로러 10과 11이 지원하기 때문에 grid를 지원하는 브라우저가 훨씬 많이 있습니다. 다만 이 단원의 뒷부분에서 설명하고 있는 구형 브라우저에서 flex를 지원하기 위한 처리 방법에 대해서도 확인해보세요. flex 컨테이너를 grid 컨테이너로 만들면 자식에 적용된 모든 `flex` 속성은 무시됩니다.

구형 브라우저에서 레이아웃 조정이 많이 필요한 경우 CSS를 이런 식으로 사용하면 괜찮은 경험을 할 수 있습니다. 오래되고 잘 지원되는 기술을 기반으로 간단한 레이아웃을 추가한 다음 최신 CSS를 사용하여 잠재 고객의 90% 이상이 볼 수있는 레이아웃을 만듭니다. 그러나 대체 코드에 새 브라우저가 해석할 내용이 포함되어야하는 경우가 있습니다. 이에 대한 좋은 예는 부동 항목에 백분율 너비를 추가하여 열을 마치 grid 디스플레이처럼 보이도록 컨테이너를 채울 수 있도록 (너비를) 늘리는 경우입니다.

부동 레이아웃에서 백분율은 컨테이너를 기준으로 계산됩니다. 33.333%는 컨테이너 너비의 3 분의 1입니다. 그러나 grid에서는 항목이 배치된 grid 영역을 기준으로 33.333%가 계산되므로 grid 레이아웃이 도입되면 실제로 원하는 크기의 3분의 1이 됩니다.

```css
* {
  box-sizing: border-box;
}

.wrapper {
  background-color: rgb(79, 185, 227);
  padding: 10px;
  max-width: 400px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.item {
  float: left;
  border-radius: 5px;
  background-color: rgb(207, 232, 220);
  padding: 1em;
  width: 33.333%;
}
```

```html
<div class="wrapper">
  <div class="item">항목 하나</div>
  <div class="item">항목 둘</div>
  <div class="item">항목 셋</div>
</div>
```

{{ EmbedLiveSample('예제2', '100%', '200') }}

이 문제를 해결하려면 grid가 지원되는지 여부와 너비가 재정의되는지 여부를 감지할 수있는 방법이 필요합니다. CSS가 우리를 위해 마련한 해결책은 이렇습니다.

## Feature queries

feature queries를 사용하면 브라우저가 특정 CSS 기능을 지원하는지 테스트 할 수 있습니다. 즉, 특정 기능을 지원하지 않는 브라우저 용 CSS를 작성한 다음 브라우저가 지원되는지 여부와 멋진 레이아웃을 제공하는지 확인하십시오.

위의 예제에 feature query를 추가하면 grid가 지원됨을 알고 있는 경우 이 feature query를 사용하여 항목 너비를 `auto`으로 다시 설정할 수 있습니다.

```css
* {
  box-sizing: border-box;
}

.wrapper {
  background-color: rgb(79, 185, 227);
  padding: 10px;
  max-width: 400px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.item {
  float: left;
  border-radius: 5px;
  background-color: rgb(207, 232, 220);
  padding: 1em;
  width: 33.333%;
}

@supports (display: grid) {
  .item {
    width: auto;
  }
}
```

```html
<div class="wrapper">
  <div class="item">항목 하나</div>
  <div class="item">항목 둘</div>
  <div class="item">항목 셋</div>
</div>
```

{{ EmbedLiveSample('예제3', '100%', '200') }}

feature query에 대한 지원은 최신 브라우저에서 매우 유용하지만 CSS grid를 지원하지 않는 브라우저는 feature query도 지원하지 않는다는 점에 유의해야합니다. 이는 위에서 설명한 접근 방식이 해당 브라우저에서 작동한다는 것을 의미합니다. 우리가 하는 작업은 feature query를 차치하고 먼저 이전 CSS를 작성하는 것입니다. grid를 지원하지 않고 feature query를 지원하지 않는 브라우저는 자기가 이해할 수 있는 레이아웃 정보를 이용하고 그밖에 다른 것들은 완전히 무시할 수 있습니다. feature query를 지원하는 브라우저는 CSS grid도 지원하므로 grid 코드 및 feature query 내부의 코드를 실행합니다.

feature query 규격에는 브라우저가 기능을 지원하지 않는지 테스트하는 기능도 포함되어 있습니다. 이는 브라우저가 feature query를 지원하는 경우에만 유용합니다. feature query를 지원하지 않는 브라우저가 갈수록 사라짐에 따라 미래에는 지원 부족 여부를 확인하는 방법은 작동하게 됩니다. 그러나 지금은 최상의 지원을 위해 이전 CSS를 사용한 다음 덮어 쓰는 방식을 사용하십시오.

## Flexbox 예전 버전

이전 버전의 브라우저에서는 이전의 Flexbox 명세가 반복되는 것을 여러분은 발견할 수 있습니다. 글을 쓰는 시점에서 이것은 Flexbox에 `-ms-` 접두사를 사용하는 인터넷 익스플로러 10의 문제입니다. 이는 또한 오래된 문서와 자습서가 있음을 의미합니다. 이 유용한 [안내서](https://css-tricks.com/old-flexbox-and-new-flexbox/)는 보고있는 내용을 확인하는 데 도움이되고 매우 오래된 브라우저에서 flex 지원이 필요한 경우에도 도움이 될 수 있습니다.

## 인터넷 익스플로러 10과 11 접두사 버전

CSS grid 규격은 인터넷 익스플로러 10에서 처음 나온 원형이었습니다. 즉, 인터넷 익스플로러 10 및 11에는 최신 grid 지원이 없지만, 이 사이트에 문서화된 최신 규격과는 다르나 매우 유용한 그리드 레이아웃 버전이 있습니다. 인터넷 익스플로러 10 및 11 구현은 `-ms-` 접두사를 사용해 해당 그리드를 마이크로소프트 브라우저에 사용할 수 있으며 이외의 브라우저에서는 무시됩니다. 에지 브라우저는 여전히 이전 구문을 이해하므로 현대 그리드 CSS에서 모든 항목을 안전하게 덮어씁니다.

[그리드 레이아웃의 점진적 향상](/ko/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_and_Progressive_Enhancement)에 대한 안내서는 그리드의 인터넷 익스플로러 버전을 이해하는 데 도움이되며 이 단원 끝에는 별도의 유용한 링크를 포함하고 있습니다. 그러나 이전 인터넷 익스플로러 버전 사용자의 방문자 수가 매우 많지 않다면 모든 비지원 브라우저에서 작동하는 대체품을 만드는 것이 더 좋습니다.

## 이전 브라우저 여부 확인

Flexbox 및 그리드를 지원하는 대부분의 브라우저를 사용하면 구형 브라우저를 테스트하기가 상당히 어려울 수 있습니다. 한 가지 방법은 [크로스 브라우저 테스트](/ko/docs/Learn/Tools_and_testing/Cross_browser_testing) 단위에 설명 된대로 Sauce *Labs*과 같은 온라인 테스트 도구를 사용하는 것입니다.

또한 가상 컴퓨터를 다운로드하여 설치한 뒤 제약이 걸린 본인의 컴퓨터 환경에서 이전 버전의 브라우저를 실행할 수 있습니다. 이전 버전의 인터넷 익스플로러에 액세스하는 것이 특히 유용하며 이를 위해 마이크로소프트는 [다양한 가상 컴퓨터를 무료로 다운로드](https://developer.microsoft.com/en-us/microsoft-edge/tools/vms/) 할 수 있도록 만들었습니다. 맥, 윈도우즈 및 리눅스 운영 체제에서 가상 컴퓨터를 사용할 수 있으므로 윈도우즈 컴퓨터를 사용하지 않더라도 이전 및 최신 윈도우즈 브라우저에서 테스트할 수있는 좋은 방법입니다.

## 요약정리

여러분은 이제 그리드 및 Flexbox와 같은 기술을 자신있게 사용하고, 이전 브라우저를 위한 대체품을 만들고, 향후 발생할 수 있는 새로운 기술을 활용할 수 있는 지식을 얻었습니다.

## 참조 항목

- [CSS feature query 사용하기](https://hacks.mozilla.org/2016/08/using-feature-queries-in-css/)
- [Flexbox의 이전 버전과의 호환성](/ko/docs/Web/CSS/CSS_Flexible_Box_Layout/Backwards_Compatibility_of_Flexbox)
- [CSS 레이아웃과 점진적 향상](/ko/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_and_Progressive_Enhancement)
- [CSS 그리드 사용하기: 그리드 없는 브라우저 지원하기](https://www.smashingmagazine.com/2017/11/css-grid-supporting-browsers-without-grid/)
- [인터넷 익스플로러 10 및 11 버전 그리드 사용을 위한 자습서](https://24ways.org/2012/css3-grid-layout/)
- [인터넷 익스플로러 10 용 그리드 레이아웃 구현을 사용해야 하나요](https://rachelandrew.co.uk/archives/2016/11/26/should-i-try-to-use-the-ie-implementation-of-css-grid-layout/)?
- [feature query가 포함된 중첩된 웹 디자인](https://24ways.org/2017/cascading-web-design/)
- [feature query 사용하기 (동영상)](https://gridbyexample.com/learn/2016/12/24/learning-grid-day24/)

{{PreviousMenuNext("Learn/CSS/CSS_layout/Legacy_Layout_methods", "Learn/CSS/CSS_layout/Fundamental_Layout_Comprehension", "Learn/CSS/CSS_layout")}}
