---
title: CSS 값과 단위
slug: Learn/CSS/Building_blocks/Values_and_units
l10n:
  sourceCommit: 751d58669499de0c6ea0d5b356e0e1448418c5d3
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Overflowing_content", "Learn/CSS/Building_blocks/Sizing_items_in_CSS", "Learn/CSS/Building_blocks")}}

CSS에 사용된 모든 속성에는 해당 속성에 허용되는 값이 있으며, MDN의 속성 페이지를 보면 특성 속성에 유효한 값을 이해하는 데 도움이 됩니다. 이 레슨에서는 가장 일반적인 값과 사용 단위를 살펴보겠습니다.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">전제조건:</th>
      <td>
        기본 컴퓨터 활용 능력,
        <a
          href="https://developer.mozilla.org/en-US/Learn/Getting_started_with_the_web/Installing_basic_software"
          >기본 소프트웨어 설치</a
        >,
        <a
          href="https://developer.mozilla.org/en-US/Learn/Getting_started_with_the_web/Dealing_with_files"
          >파일 작업</a
        >
        에 대한 기본 지식, HTML 기본 사항 (<a
          href="/ko/docs/Learn/HTML/Introduction_to_HTML"
          >HTML 소개</a
        >
        학습) 및 , CSS 작동 방식 이해 (<a
          href="/ko/docs/Learn/CSS/First_steps"
          >CSS 첫 번째 단계</a
        >
        학습)
      </td>
    </tr>
    <tr>
      <th scope="row">목적:</th>
      <td>CSS 속성에 사용되는 다양한 유형의 값과 단위에 대해 배우기.</td>
    </tr>
  </tbody>
</table>

## CSS 값이란 무엇인가?

CSS 사양과 MDN의 속성 페이지에서 [`<color>`](/ko/docs/Web/CSS/color_value) 또는 [`<length>`](/ko/docs/Web/CSS/length). 와 같이 꺾쇠괄호로 묶여 있는 값을 찾을 수 있습니다. `<color>` 값이 특정 속성에 유효한 것으로 표시되면, [`<color>`](/ko/docs/Web/CSS/color_value) 참조 페이지에 나열된 대로 유효한 속성을 해당 속성의 값으로 사용할 수 있습니다.

> **참고:** CSS 값을 _데이터 유형_ 이라고 합니다. 용어는 기본적으로 상호 교환이 가능합니다. CSS에서 데이터 유형이라고 하는 것을 볼 때, 실제로 가치를 말하는 멋진 방법입니다.

> **참고:** 예, CSS 값은 CSS 속성과 구별하기 위해, 꺾쇠괄호를 사용하여 표시되는 경향이 있습니다 (예: {{cssxref("color")}} 속성, [`<color>`](/ko/docs/Web/CSS/color_value) 데이터 형식). CSS 데이터 형식과 HTML 요소도 꺾쇠괄호를 사용하므로 혼동될 수 있지만, 이는 매우 다른 상황에서 사용됩니다.

다음 예제에서는 키워드를 사용하여 머리글의 색상을 설정하고, `rgb()` 함수를 사용하여 배경을 설정했습니다:

```css
h1 {
  color: black;
  background-color: rgb(197, 93, 161);
}
```

CSS 값은 허용가능한 하윗값 모음을 정의하는 방법입니다. 즉, `<color>` 가 유효한 것으로 표시되면 — 키워드, 16진수 값, `rgb()` 함수 등 어떤 색상 값을 사용할 수 있는지 궁금할 필요가 없습니다. 사용 가능한 `<color>` 값은 브라우저에서 지원한다고 가정합니다. 각 값에 대한 MDN 페이지는 브라우저 지원에 대한 정보를 제공합니다. 예를 들어 [`<color>`](/ko/docs/Web/CSS/color_value) 페이지를 보면 브라우저 호환성 섹션에 다양한 색상 값 유형과 지원이 나열되어 있습니다.

여러가지 가능한 값을 시험해 볼 수 있도록 예를 들어 자주 접할 수 있는 몇 가지 유형의 값과 단위를 살펴보겠습니다.

## 숫자, 길이 및 백분율

CSS에서 사용할 수 있는 다양한 숫자 데이터 형식이 있습니다. 다음은 모두 숫자로 분류됩니다.

| 데이터 형식                                   | 설명                                                                                                                                                                                                                                                                                                                                               |
| --------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`<integer>`](/ko/docs/Web/CSS/integer)       | `<integer>` 은 `1024` 또는`-55`와 같은 정수입니다.                                                                                                                                                                                                                                                                                                 |
| [`<number>`](/ko/docs/Web/CSS/number)         | `<number>` 는 10진수를 나타냅니다. 소수점 이하의 소수 자릿수 (예: `0.255`, `128` 또는 `-1.2`) 가 있을 수도 있고 없을 수도 있습니다.                                                                                                                                                                                                                |
| [`<dimension>`](/ko/docs/Web/CSS/dimension)   | `<dimension>` 은 예를 들어 `45deg`, `5s` 또는 `10px`. 과 같은 단위가 붙어있는 `<number>` 입니다. `<dimension>` 은 [`<length>`](/ko/docs/Web/CSS/length), [`<angle>`](/ko/docs/Web/CSS/angle), [`<time>`](/ko/docs/Web/CSS/time) 및 [`<resolution>`](/ko/docs/Web/CSS/resolution) 의 종류를 포함하는 카테고리입니다[.](/ko/docs/Web/CSS/resolution) |
| [`<percentage>`](/ko/docs/Web/CSS/percentage) | `<percentage>` 는 다른 값의 일부, 예를 들어 `50%`를 나타냅니다. 백분율 값은 항상 다른 수량을 기준으로 합니다. 예를 들어 요소의 길이는 부모 요소의 길이를 기준으로 합니다.                                                                                                                                                                          |

### 길이

가장 자주 사용되는 숫자 형식은 `<length>` 입니다. 예를 들면 `10px` (픽셀) 또는 `30em`. CSS에서 사용되는 길이는 상대 및 절대의 두 가지 유형이 있습니다. 얼마나 커질지 알기 위해서는 차이를 이해하는 것이 중요합니다.

#### 절대 길이 단위

다음은 모두 **절대** 길이 단위이며 다른 것과 관련이 없으며 일반적으로 항상 동일한 크기로 간주됩니다.

| 단위 | 이름            | 다음과 동일함            |
| ---- | --------------- | ------------------------ |
| `cm` | 센티미터        | 1cm = 37.8px = 25.2/64in |
| `mm` | 밀리미터        | 1mm = 1/10th of 1cm      |
| `Q`  | 4분의 1밀리미터 | 1Q = 1/40th of 1cm       |
| `in` | 인치            | 1in = 2.54cm = 96px      |
| `pc` | Picas           | 1pc = 1/6th of 1in       |
| `pt` | 포인트          | 1pt = 1/72nd of 1in      |
| `px` | 픽셀            | 1px = 1/96th of 1in      |

이러한 값의 대부분은 화면 출력이 아닌 인쇄에 사용될 때 더 유용합니다. 예를 들어 일반적으로 화면에 `cm` (센티미터)를 사용하지 않습니다. 보통 사용하는 유일한 값은 `px` (픽셀)입니다.

#### 상대 길이 단위

상대 길이 단위는 다른 요소 (상위 요소의 글꼴 크기 또는 viewport 크기)와 관련이 있습니다. 상대 단위를 사용하면 텍스트나 다른 요소의 크기가 페이지의 다른 모든 것에 비례하여 조정되도록 신중하게 계획할 수 있다는 이점이 있습니다. 웹 개발에 가장 유용한 단위가 아래 표에 나열되어 있습니다.

| 단위       | 관련 사항                                                                                                      |
| ---------- | -------------------------------------------------------------------------------------------------------------- |
| `em`       | 요소의 글꼴 크기.                                                                                              |
| `ex`       | 요소 글꼴의 x-height.                                                                                          |
| `ch`       | 요소 글꼴의 glyph "0"의 사전 길이 (너비)입니다.                                                                |
| `rem`      | 루트 요소의 글꼴 크기.                                                                                         |
| `lh`       | 요소의 라인 높이.                                                                                              |
| `rlh`      | 루트 요소의 라인 높이. 루트 요소의 `font-size` 또는 `line-height` 속성에 사용될 때 속성의 초깃값을 참조합니다. |
| `vw`       | 뷰포트의 초기 [컨테이닝 블록](/ko/docs/Web/CSS/All_About_The_Containing_Block) 너비 1%와 같습니다.             |
| `vh`       | 뷰포트의 초기 [컨테이닝 블록](/ko/docs/Web/CSS/All_About_The_Containing_Block) 높이 1%와 같습니다.             |
| `vmin`     | viewport의 작은 치수의 1%.                                                                                     |
| `vmax`     | viewport의 큰 치수의 1%.                                                                                       |
| `vb`       | 초기 컨테이닝 블록의 [블록 축](/ko/docs/Web/CSS/CSS_Logical_Properties#블록_치수) 크기 1%와 같습니다.          |
| `vi`       | 초기 컨테이닝 블록의 [인라인 축](/ko/docs/Web/CSS/CSS_Logical_Properties#인라인_치수) 크기 1%와 같습니다.      |
| `svw, svh` | [작은 뷰포트](/ko/docs/Web/CSS/length#relative_length_units_based_on_viewport) 각각의 너비 및 높이 1%.         |
| `lvw, lvh` | [큰 뷰포트](/ko/docs/Web/CSS/length#relative_length_units_based_on_viewport) 각각의 너비 및 높이 1%.           |
| `dvw, dvh` | [동적인 뷰포트](/ko/docs/Web/CSS/length#relative_length_units_based_on_viewport) 각각의 너비 및 높이 1%.       |

#### 예제 살펴보기

아래 예에서 일부 상대 및 절대 길이 단위의 동작을 확인할 수 있습니다. 첫 번째 박스에는 {{cssxref("width")}} 픽셀 단위로 설정되어 있습니다. 절대 단위로서 이 너비는 다른 사항에 관계없이 동일하게 유지됩니다.

두 번째 박스의 너비는 `vw` (viewport 너비) 단위로 설정됩니다. 이 값은 viewport 너비를 기준으로 하므로, 10vw 는 viewport 너비의 10%입니다. 브라우저 창의 너비를 변경하면, 박스의 크기가 변경되지만, 이 예제는 [`<iframe>`](/ko/docs/Web/HTML/Element/iframe) 을 사용하여 페이지에 포함되므로 작동하지 않습니다. 이 기능을 실제로 보려면 [브라우저 탭에서 예제를 연 후에 시도](https://mdn.github.io/css-examples/learn/values-units/length.html) 해야 합니다.

세 번째 박스는 `em` 단위를 사용합니다. 글꼴 크기에 상대적입니다. `.wrapper` class를 포함하는 {{htmlelement("div")}} 를 포함하여 글꼴 크기를 `1em` 으로 설정했습니다. 이 값을 `1.5em` 으로 변경하면 모든 요소의 글꼴 크기가 증가하지만, 너비가 해당 글꼴 크기에 비례하므로 마지막 항목만 넓어집니다.

위의 지침을 따른 후 다른 방법으로 값을 실습하여 얻은 것을 확인하세요.

{{EmbedGHLiveSample("css-examples/learn/values-units/length.html", '100%', 820)}}

#### ems 및 rems

`em` 과 `rem`은 박스에서 텍스트로 크기를 조정할 때 가장 자주 발생하는 두 개의 상대 길이입니다. [텍스트 스타일링](/ko/docs/Learn/CSS/Styling_text) 또는 [CSS 레이아웃](/ko/docs/Learn/CSS/CSS_layout) 과 같은 보다 복잡한 주제를 시작할 때, 이러한 작동 방식과 차이점을 이해하는 것이 좋습니다. 아래 예제는 데모를 제공합니다.

HTML은 중첩된 목록의 집합입니다. 총 3개의 목록이 있으며 두 예제 모두 동일한 HTML을 갖습니다. 유일한 차이점은 첫 번째는 **_ems_** class이고 두 번째는 **_rems_** class입니다.

먼저, `<html>` 요소에서 글꼴 크기로 16px 를 설정합니다.

**다시 말해서, em 단위는 "부모 요소의 글꼴 크기"를 의미합니다**. `ems` `class`가 있는 {{htmlelement("ul")}} 내부의 {{htmlelement("li")}} 요소는 부모로부터 크기를 가져옵니다. 따라서 각 중첩 부분은 글꼴 크기가 부모 글꼴 크기의 `1.3em`, 1.3 배로 설정되므로 점점 더 커집니다.

**다시 말해서, rem 단위는 "루트 요소의 글꼴 크기"를 의미합니다**. ("root em" 의 rem 표준입니다.) `rems` `class`가 있는 {{htmlelement("ul")}} 내부의 {{htmlelement("li")}} 요소는 루트 요소는 (`<html>`) 에서 크기를 가져옵니다. 이것은 각각의 연속적인 중첩 부분이 계속 커지는 것을 의미합니다.

그러나, CSS에서 `<html>` `font-size` 를 변경하면 다른 모든 텍스트가 변경되는 것을 볼 수 있습니다. `rem` 및 `em` 크기 텍스트.

{{EmbedGHLiveSample("css-examples/learn/values-units/em-rem.html", '100%', 1000)}}

### 백분율

많은 경우 백분율은 길이와 같은 방식으로 처리됩니다. 백분율이 있는 것은 항상 다른 값에 상대적으로 설정된다는 것입니다. 예를 들어, 요소의 `font-size` 를 백분율로 설정하면 요소 부모의 글꼴 크기에 대한 백분율이 됩니다. `width` 값에 백분율을 사용하면, 부모 너비의 백분율이 됩니다.

아래 예제에서 두 개의 백분율 크기 박스와 두 개의 픽셀 크기 박스는 동일한 class이름을 갖습니다. 두 세트의 너비는 각각 200px 및 40%입니다.

차이점은 두 박스의 두 번째 세트가 너비가 400 픽셀 안에 있다는 것입니다. 두 번째 200px 너비의 박스는 첫 번째 너비와 동일한 너비이지만, 두 번째 40% 박스는 이제 400px의 40%이므로 첫 번째 박스보다 훨씬 좁습니다!

**너비 또는 백분율 값을 변경하여 작동 방식을 확인합니다.**

{{EmbedGHLiveSample("css-examples/learn/values-units/percentage.html", '100%', 850)}}

다음 예제에서는 글꼴 크기가 백분율로 설정되어 있습니다. 각 `<li>` 의 `font-size` 는 80%이므로, 중첩된 목록 항목은 부모로부터 크기를 상속함에 따라 점차 작아집니다.

{{EmbedGHLiveSample("css-examples/learn/values-units/percentage-fonts.html", '100%', 650)}}

많은 값이 길이 또는 백분율을 허용하지만, 길이만 허용하는 값도 있습니다. MDN 속성 참조 페이지에서 어떤 값이 허용되는지 확인할 수 있습니다. 허용된 값에 [`<length-percentage>`](/ko/docs/Web/CSS/length-percentage) 가 포함된 경우 길이 또는 백분율을 사용할 수 있습니다. 허용된 값에 `<length>` 만 포함된 경우, 백분율을 사용할 수 없습니다.

### 숫자

일부 값은 단위를 추가하지 않고 숫자를 허용합니다. 단위가 없는 숫자를 허용하는 속성의 예는 요소의 불투명도 (투명한 정도)를 제어하는 `opacity` 속성입니다. 이 속성은 `0` (완전 투명)과 `1` (완전 불투명) 사이의 숫자를 허용합니다.

**아래 예제에서, `opacity` 값을 `0` 과 `1` 사이의 다양한 10진수 값으로 변경하고 박스와 그 내용이 어떻게 붙투명하게 되는지 확인하세요.**

{{EmbedGHLiveSample("css-examples/learn/values-units/opacity.html", '100%', 500)}}

> **참고:** CSS에서 숫자를 값으로 사용하는 경우 따옴표로 묶지 않아야합니다.

## 색상

CSS에서 색상을 지정하는 방법은 여러 가지가 있으며, 그중 일부는 다른 것 보다 최근에 구현되었습니다. 텍스트 색상, 배경 색상 등을 지정하든 상관없이 CSS의 모든 위치에서 동일한 색상 값을 사용할 수 있습니다.

최신 컴퓨터에서 사용할 수 있는 표준 색상 시스템은 24bit이며, 채널당 256개의 서로 다른 값 (256 x 256 x 256 = 16,777,216) 을 갖는 서로 다른 빨강, 녹색 및 파랑 채널의 조합을 통해 약 1670만 개의 고유한 색상을 표시할 수 있습니다. CSS에서 색상을 지정할 수 있는 몇 가지 방법을 살펴보겠습니다.

> **참고:** 이 자습서에서는 브라우저 지원 기능이 우수한 색상을 지정하는 일반적인 방법을 살펴봅니다. 다른 것도 있지만, 지원 기능이 뛰어나지 않고 덜 일반적입니다.

### 색상 키워드

여기의 학습 섹션이나 MDN 의 다른 예에서 색상 키워드를 지정하는 간단하고 이해하기 쉬운 방법인 색상 키워드를 볼 수 있습니다. 이 키워드에는 여러 가지가 있으며 그중 일부는 상당히 재미있는 이름을 가지고 있습니다! [`<color>`](/ko/docs/Web/CSS/color_value) 값에 대한 전체 목록을 페이지에서 볼 수 있습니다.

**아래의 라이브 예제에서 다른 색상 값을 사용하여 작동하는 방법에 대한 아이디어를 얻으십시오.**

{{EmbedGHLiveSample("css-examples/learn/values-units/color-keywords.html", '100%', 800)}}

### 16진수 RGB 값

다음 형식의 색상 값은 16진수 코드입니다. 각 16진수 값은 hash/pound 기호 (#) 와 6개의 16진수로 구성되며, 각 16진수는 0과 f (15를 나타냄) 사이의 16개 값 중 하나를 사용할 수 있으므로 `0123456789abcdef` 입니다. 각 값 쌍은 채널 중 하나 빨강, 녹색 및 파랑을 나타내며 각각에 대해 256개의 사용 가능한 값 (16 x 16 = 256) 을 지정할 수 있습니다.

이 값은 좀 더 복잡하고 이해하기 쉽지 않지만, 키워드보다 훨씬 더 다양합니다. 16진수 값을 사용하여 색상표에 사용하려는 색상을 나타낼 수 있습니다.

{{EmbedGHLiveSample("css-examples/learn/values-units/color-hex.html", '100%', 800)}}

**다시 한번, 값을 변경하여 색상이 어떻게 다른지 확인하세요.**

### RGB 및 RGBA 값

여기서 이야기할 세 번째 방식은 RGB입니다. RGB 값은 `rgb()` 함수입니다. 이 값은 16진수 값과 거의 같은 방식으로 색상의 빨강, 녹색 및 파랑 채널 값을 나타내는 세 개의 매개 변수가 제공됩니다. RGB와의 차이점은 각 채널이 2개의 16진수가 아니라 0~255 사이의 10진수로 표현되어 다소 이해하기 쉽다는 것입니다.

RGB 색상들을 사용하기 위해 우리의 마지막 예시를 다시 작성해봅시다.

{{EmbedGHLiveSample("css-examples/learn/values-units/color-rgb.html", '100%', 800)}}

RGBA 색상을 사용할 수도 있습니다. 이 색상은 RGB 색상과 정확히 같은 방식으로 작동하므로 RGB 값을 사용할 수 있지만, 색상의 알파 채널을 나타내는 네 번째 값이 있어 불투명도 (opacity)를 제어합니다. 이 값을 `0`으로 설정하면 색상이 완전히 투명해지는 반면, `1`이면 완전히 불투명하게 됩니다. 그 사이의 값은 다른 수준의 투명성을 제공합니다.

> **참고:** 색상에 알파 채널을 설정하면 앞에서 살펴본 {{cssxref("opacity")}} 속성을 사용하는 것과 한 가지 중요한 차이점이 있습니다. 불투명도를 사용하면 요소와 그 안에 있는 모든 것을 불투명하게 만드는 반면, RGBA 색상을 사용하면 불투명하게 지정한 색상만 만들어집니다.

아래 예제에서 나는 색상 박스가 포함된 블록에 배경 이미지를 추가했습니다. 그런 다음 박스에 다른 불투명도 값을 갖도록 설정했습니다. 알파 채널 값이 작을 때 배경이 더 잘 나타나는지 확인하세요.

{{EmbedGHLiveSample("css-examples/learn/values-units/color-rgba.html", '100%', 900)}}

**이 예에서는, 알파 채널 값을 변경하여 색상 출력에 어떤 영향을 미치는지 확인하세요.**

> **참고:** 구형 버전의 CSS에서는 `rgb()` 문법이 알파 매개변수를 지원하지 않았기 때문에 `rgba()` 라는 다른 함수를 호출해야 했습니다. 요즘에는 알파 매개변수를 `rgb()`에 넘길 수 있습니다. 하지만 구형 웹사이트와의 하위 호환성을위해 여전히 `rgba()` 문법은 지원되고 있습니다. 그리고 `rgb()`와 정확히 같은 동작을 수행합니다.

### HSL 및 HSLA 값

RGB보다 약간 덜 지원되는 HSL 색상은 (이전 버전의 IE에서는 지원되지 않음) 디자이너의 관심을 끈 후에 구현되었습니다. `hsl()` 함수는 빨강, 녹색 및 파랑 값 대신 색조 (hue), 채도 (saturation) 및 명도(lightness) 값을 받아들입니다. 이 값은 1670만 가지 색상을 구별하는 데 사용되지만, 다른 방식으로 사용됩니다.

- **색조 (Hue)**: 색상의 기본 음영입니다. 0에서 360 사이의 값을 사용합니다.
- **채도 (Saturation)**: 색상이 얼마나 포함되어 있습니까? 0–100% 사이의 값을 취합니다. 여기서 0은 색상이 없고 (회색 음영으로 표시됨), 100%는 전체 색상 채도입니다.
- **명도 (Lightness)**: 색상이 얼마나 밝습니까? 0–100%의 값을 받습니다. 여기서 0은 빛이 없고 (완전히 검은색으로 표시됨), 100%는 완전한 빛 (완전히 흰색으로 표시됨)입니다.

다음과 같이 HSL 색상을 사용하도록 RGB 예제를 업데이트할 수 있습니다.

{{EmbedGHLiveSample("css-examples/learn/values-units/color-hsl.html", '100%', 800)}}

`rgb()`처럼 불투명도를 명시하기 위해 `hsl()`에 알파 매개변수를 넘길 수 있습니다.

{{EmbedGHLiveSample("css-examples/learn/values-units/color-hsla.html", '100%', 900)}}

> **참고:** 구형 버전의 CSS에서는 `hsl()` 문법이 알파 매개변수를 지원하지 않았기 때문에 `hsla()` 라는 다른 함수를 호출해야 했습니다. 요즘에는 알파 매개변수를 `hsl()`에 넘길 수 있습니다. 하지만 구형 웹사이트와의 하위 호환성을위해 여전히 `hsla()` 문법은 지원되고 있습니다. 그리고 `hsl()`와 정확히 같은 동작을 수행합니다.

여러분의 프로젝트에서 이러한 색상 값을 사용할 수 있습니다. 대부분의 프로젝트에서 색상 팔레트를 결정한 다음 전체 프로젝트에서 해당 색상과 선택한 색상 지정 방법을 사용합니다. 색상 모델을 혼합하고 일치시킬 수 있지만, 일관성을 유지하려면 전체 프로젝트에서 동일한 모델을 사용하는 것이 가장 좋습니다!

## 이미지

[`<image>`](/ko/docs/Web/CSS/image) 값 형식은 이미지가 유효한 값인 경우 사용됩니다. 이것은 `url()` 함수 또는 gradient를 통해 가리키는 실제 이미지 파일일 수 있습니다.

아래 예제에서 CSS `background-image` 속성의 값으로 사용되는 이미지와 gradient를 보여주었습니다.

{{EmbedGHLiveSample("css-examples/learn/values-units/image.html", '100%', 740)}}

> **참고:** `<image>` 에 대해 가능한 다른 값이 있지만 이 값은 최신이며 최신 브라우저 지원이 좋지 않습니다. \<image> 데이터 형식을 읽으려면 MDN 페이지에서 [`<image>`](/ko/docs/Web/CSS/image) 데이터 형식을 확인하세요.

## 위치 (Position)

[`<position>`](/ko/docs/Web/CSS/position_value) 값 형식은 배경 이미지 ([`background-position`](/ko/docs/Web/CSS/background-position) 를 통해) 와 같은 항목을 배치하는 데 사용되는 2D 좌표를 나타냅니다. `top`, `left`, `bottom`, `right` 및 `center`와 같은 키워드를 사용하여 항목을 2D 박스의 특정 범위에 맞춰 길이와 함께 박스의 위쪽 및 왼쪽 가장자리에서 offset을 나타냅니다.

일반적인 position 값은 두 가지 값으로 구성됩니다. 첫 번째는 위치를 가로로 설정하고, 두 번째는 세로로 설정합니다. 한 축의 값만 지정하면 다른 축은 `center` 으로 설정됩니다.

다음 예제에서는 키워드를 사용하여 컨테이너의 위쪽과 오른쪽에서 40px의 배경 이미지를 배치했습니다.

{{EmbedGHLiveSample("css-examples/learn/values-units/position.html", '100%', 720)}}

**이 값을 가지고 놀면서 이미지를 어떻게 밀어낼 수 있는지 확인하세요.**

## 문자열 및 식별자 (identifiers)

위의 예에서, 키워드가 값으로 (예: `red`, `black`, `rebeccapurple` 및 `goldenrod`와 같은 `<color>` 키워드) 사용되는 위치를 확인했습니다. 이러한 키워드는 CSS 가 이해하는 특수한 값인 **_식별자 (identifiers)_**로 보다 정확하게 설명됩니다. 따라서 인용되지 않으며 문자열로 취급되지 않습니다.

CSS에서 문자열을 사용하는 장소가 있습니다. 예를 들면, [생성된 콘텐츠를 지정할 때](/ko/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements#Generating_content_with_before_and_after). 이 경우 값은 문자열임을 보여주기 위해 인용됩니다. 아래 예제에서는 인용되지 않은 색상 키워드와 인용된 생성된 콘텐츠 문자열을 사용합니다.

{{EmbedGHLiveSample("css-examples/learn/values-units/strings-idents.html", '100%', 550)}}

## 함수 (Functions)

우리가 살펴볼 마지막 값의 형식은 함수로 알려진 값의 그룹입니다. 프로그래밍에서 함수는 개발자와 컴퓨터 모두에서 최소한의 노력으로 반복적인 작업을 완료하기 위해 여러 번 실행할 수 있는 재사용 가능한 코드 섹션입니다. 함수는 일반적으로 JavaScript, Python 또는 C++과 같은 언어와 관련이 있지만, 속성값으로 CSS에도 존재합니다. `rgb()`, `hsl()` 등의 색상 섹션에서 작동하는 함수를 이미 보았습니다. 파일에서 이미지를 반환하는 데 사용되는 값인 `url()`도 함수입니다.

전통적인 프로그래밍 언어에서 찾아볼 수 있는 것과 비슷한 값은 `calc()` CSS 함수입니다. 이 함수를 사용하면 CSS 내에서 간단한 계산을 수행할 수 있습니다. 프로젝트의 CSS를 작성할 때 정의할 수 없는 값을 계산하고 런타임에 브라우저가 작동해야 하는 경우 특히 유용합니다.

예를 들어, 아래에서는 `calc()` 를 사용하여 박스를 `20% + 100px` 너비로 만듭니다. 20% 는 부모 container `.wrapper` 의 너비에서 계산되므로 너비가 변경되면 변경됩니다. 우리는 부모 요소의 20% 가 무엇인지 알지 못하기 때문에, 이 계산을 미리 수행할 수 없으므로 `calc()` 를 사용하여 브라우저에 지시합니다.

{{EmbedGHLiveSample("css-examples/learn/values-units/calc.html", '100%', 500)}}

## 스킬을 테스트하세요!

이 글의 가장 마지막까지 읽었지만 가장 중요한 정보를 기억할 수 있나요? 계속 진행하기 전에 이 정보를 기억하는지 확인할 수 있는 몇 가지 추가 테스트가 있습니다. [스킬 테스트하기: 값 및 단위](/ko/docs/Learn/CSS/Building_blocks/Values_tasks)를 확인해 주세요.

## 요약

지금까지 가장 일반적인 형식의 값과 단위를 빠르게 살펴보았습니다. [CSS 값 및 단위](/ko/docs/Web/CSS/CSS_Values_and_Units) 참조 페이지에서 다양한 유형을 모두 볼 수 있습니다. 이 수업을 진행하면서 사용 중인 많은 것들을 보게 될 것입니다.

기억해야 할 중요한 점은 각 속성에 정의된 값 목록이 있고 각 값에는 하윗값이 무엇인지 설명하는 정의가 있다는 것입니다. 그런 다음 MDN 에서 세부 사항을 찾을 수 있습니다. 예를 들어, [`<image>`](/ko/docs/Web/CSS/image) 를 사용하면 색상 gradient를 만들 수 있다는 점을 이해하는 것은 유용하지만 당연하지 않은 지식일 수 있습니다.

다음 기사에서는 CSS로 어떻게 [항목의 크기를 조절하는지](/ko/docs/Learn/CSS/Building_blocks/Sizing_items_in_CSS) 알아보겠습니다.

{{PreviousMenuNext("Learn/CSS/Building_blocks/Overflowing_content", "Learn/CSS/Building_blocks/Sizing_items_in_CSS", "Learn/CSS/Building_blocks")}}
