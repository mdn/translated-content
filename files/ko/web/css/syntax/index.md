---
title: 구문
slug: Web/CSS/Syntax
---

{{cssref}}

종속형 스타일 시트([CSS](/ko/docs/Web/CSS)) 언어의 기본 목표는 브라우저 엔진이 색상, 위치 지정 또는 장식과 같은 특정 기능을 사용하여 페이지에 요소를 그릴 수 있도록 하는 것입니다. 이러한 목표 달성을 위해 만들어진 *CSS 구문*을 이루고 있는 기본 구성 요소는 다음과 같습니다.

- **속성**(property)은 {{glossary("identifier", "식별자")}}, 즉 사람이 읽을 수 있는 *이름*이며 어떠한 CSS 기능을 구현할 것인지 결정합니다.
- **값**(value)은 앞서 지정한 속성이 브라우저에 의해 어떤 식으로 나타나야 할지 기술합니다. 각 속성의 의미적 표현을 형식 문법으로 정의한 유효한 값 집합과 함께 브라우저 엔진이 구현합니다.

## CSS 선언

CSS 속성을 특정 값으로 설정하는 것은 CSS 언어의 핵심 기능입니다. 속성과 값 쌍은 **선언**(declaration)이라 부르며, 모든 CSS 엔진은 적절하게 요소를 배열하고 스타일을 입히기 위해서 요소 하나하나마다 어떤 선언을 적용할지 계산합니다.

CSS에서는 속성과 값 모두 대소문자를 구분합니다. 속성-값 쌍은 콜론, '`:`' (`U+003A COLON`)으로 구분하며 속성과 값 앞, 사이, 뒤에 오는 공백은 무시합니다.

![css syntax - declaration.png](css_syntax_-_declaration.png)

CSS는 [100가지 이상의 속성](/ko/docs/Web/CSS/CSS_Reference)과 셀 수 없이 많은 값이 있습니다. 속성에 아무 값이나 넣는 것은 허용되지 않고, 대신 속성마다 유효한 값을 정의하고 있습니다. 주어진 속성에 대해 값이 유효하지 않은 경우, 그 선언은 부적합으로 간주하여 CSS 엔진이 완전히 무시합니다.

## CSS 선언 블록

선언은 **블록** 단위로 이루어져 있습니다. 즉, 여는 중괄호, '`{`' (`U+007B LEFT CURLY BRACKET`) 및 닫는 중괄호, '`}`' (`U+007D RIGHT CURLY BRACKET`)로 구분된 구조 입니다. 어떤 경우엔 블록을 중첩할 수 있으므로 열고 닫는 중괄호가 서로 맞아야 합니다.

![css syntax - block.png](css_syntax_-_block.png)

이런 블록은 자연스럽게도 **선언 블록**이라고 부르며, 내부의 선언은 세미콜론, '`;`' (`U+003B SEMICOLON`)으로 구분합니다. 선언 블록은 아무런 선언도 들어가지 않은 빈 상태로도 존재할 수 있습니다. 선언 주위의 공백은 무시합니다. 마지막 선언에는 세미콜론을 생략해도 되지만, 다른 선언을 밑에다 덧붙여서 블록을 확장하면서 세미콜론 추가를 잊는 상황을 방지하기 위해 붙여주는 것이 *좋은 스타일*이라고 생각하는 경우가 자주 있기는 합니다.

CSS 선언 블록을 시각화하면 다음과 같습니다.

![css syntax - declarations block.png](declaration-block.png)

> **참고:** CSS 선언 블록의 콘텐츠, 즉 여닫는 중괄호 없이 세미콜론으로 분리한 선언 목록은 HTML [`style`](/ko/docs/Web/HTML/Global_attributes#style) 특성의 값으로 사용할 수 있습니다.

## CSS 규칙집합

스타일 시트가 선언을 웹 페이지의 요소 하나씩에만 적용할 수 있다면 거의 쓸모가 없을 것입니다. 진짜 목표는 다양한 선언을 문서의 다양한 부분에 적용하는 것입니다.

CSS에서는 선언 블록에 조건을 붙여 해결할 수 있습니다. 각 (유효한) 선언 블록은 페이지의 일부 요소를 선택하는 조건인 선택자(_selector_)가 선행됩니다. 선택자-선언 블록 쌍은 **규칙집합** 또는 종종 간단히 **규칙**이라고 합니다.

![css syntax - ruleset.png](ruleset.png)

페이지 요소는 여러 선택자로 그리고 결국 주어진 속성을 서로 다른 값으로 여러 번 포함하는 여러 규칙에 의해 일치될 수 있기에, CSS 표준은 어느 게 다른 것보다 우선하고 적용되어야 하는 지를 정의합니다: 이를 종속([cascade](/ko/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)) 알고리즘이라고 합니다.

> **참고:** 비록 선택자 그룹에 의해 특징지어진 규칙집합이 규칙집합을 각각 단일 선택자로 대체하는 일종의 단축(shorthand)일지라도, 이는 규칙집합 자체의 유효성에 적용되지는 않는다는 점에 유의하는 것이 중요합니다.
>
> 이는 중요한 결과로 이어집니다: 단일 기본 선택자 하나가 무효한 경우, 무명(unknown) 가상 요소(pseudo-element) 또는 가상 클래스(pseudo-class)를 사용할 때처럼, 모든 *선택자*는 무효하고 따라서 전체 규칙은 무시됩니다(유효하지도 않기에).

## CSS 문

규칙집합은 종종 큰 규칙집합 목록만으로 구성된 스타일 시트의 주요 구성 블록입니다. 하지만 문자 집합, import하려는 다른 외부 스타일 시트, 글꼴 모양 또는 목록 카운터 설명 및 더 많은 것처럼 웹 제작자가 스타일 시트에서 전하고 싶은 다른 정보가 있습니다. 이를 위해 다른 특정 종류의 문을 사용합니다.

**문**은 비 공백 문자로 시작하여 첫 번째 닫는 중괄호 또는 세미콜론 (문자열 외에, 이스케이프되지 않고 다른 {}, () 및 \[] 쌍에 포함되지 않는) 으로 끝나는 구성 블록입니다.

![css syntax - statements Venn diag.png](css_syntax_-_statements_venn_diag.png)

다음과 같은 다른 종류의 문이 있습니다:

- 본 것처럼, CSS 선언의 컬렉션과 선택자에 의해 기술된 조건을 연결짓는 **규칙집합** (또는 _규칙_).
- at 기호, '`@`' (`U+0040 COMMERCIAL AT`)로 시작하고 그런 다음 문의 끝, 즉 블록 밖 다음 세미콜론(;) 또는 다음 블록의 끝까지 계속 식별자가 뒤따르는 **At-규칙**. 식별자에 의해 정의된 각 유형의 [at-규칙](/ko/docs/Web/CSS/At-rule)은, 물론 자체 내부 구문 및 의미(semantics)가 있을 수 있습니다. 그들은 메타 데이터 정보({{ cssxref("@charset") }} 또는 {{ cssxref("@import") }} 같은), 조건부 정보({{ cssxref("@media") }} 또는 {{ cssxref("@document") }} 같은) 또는 설명 정보({{ cssxref("@font-face") }} 같은)를 전달하는 데 사용됩니다.

규칙집합 또는 at-규칙이 아닌 모든 문은 유효하지 않고 무시됩니다.

또 다른 문 그룹, **중첩 문**이 있습니다, 이들은 at-규칙, *조건부 그룹 규칙*의 특정 부분집합에서 사용될 수 있는 문입니다. 이러한 문은 오직 특정 조건이 일치되면 적용합니다: `@media` at-규칙 콘텐츠는 브라우저가 돌아가는 장치가 표현된 조건과 일치하는 경우에만 적용됩니다. 반면 `@document` at-규칙 콘텐츠는 현재 페이지가 일부 조건과 일치하는 경우에만 적용됩니다, 등등. CSS1 및 CSS2.1에서는, *규칙집합*만이 조건부 그룹 규칙 내에서 사용될 수 있습니다. 그것은 매우 제한됐고 이 제한은 [CSS Conditionals 레벨 3](/ko/docs/Web/CSS/CSS_Conditional_Rules)에서 해제되었습니다. 현재, 여전히 실험 중이고 모든 브라우저에서 지원되지는 않지만, 조건부 그룹 규칙은 광범위한 콘텐츠, 규칙집합뿐만 아니라 전부는 아니지만 일부 at-규칙을 포함할 수 있습니다.

## 같이 보기

- CSS 주요 개념

  - [CSS 문법](/ko/docs/Web/CSS/Syntax)
  - [@규칙](/ko/docs/Web/CSS/At-rule)
  - [주석](/ko/docs/Web/CSS/Comments)
  - [명시도](/ko/docs/Web/CSS/Specificity)
  - [상속](/ko/docs/Web/CSS/inheritance)
  - [박스 모델](/ko/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
  - [레이아웃 모드](/ko/docs/Web/CSS/Layout_mode)
  - [시각적 서식 모델](/ko/docs/Web/CSS/Visual_formatting_model)
  - [마진 중첩](/ko/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)
  - 값

    - [초깃값](/ko/docs/Web/CSS/initial_value)
    - [계산값](/ko/docs/Web/CSS/computed_value)
    - [결정값](/ko/docs/Web/CSS/resolved_value)
    - [지정값](/ko/docs/Web/CSS/specified_value)
    - [사용값](/ko/docs/Web/CSS/used_value)
    - [실제값](/ko/docs/Web/CSS/actual_value)

  - [값 정의 구문](/ko/docs/Web/CSS/Value_definition_syntax)
  - [단축 속성](/ko/docs/Web/CSS/Shorthand_properties)
  - [대체 요소](/ko/docs/Web/CSS/Replaced_element)
