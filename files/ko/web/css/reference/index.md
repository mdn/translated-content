---
title: CSS 참고서
slug: Web/CSS/Reference
---

**CSS 참고서**를 이용해 [알파벳 순서로 정리한](#키워드_색인) 모든 표준 [CSS](/ko/docs/Web/CSS) 속성, [의사 클래스](/ko/docs/Web/CSS/Pseudo-classes), [의사 요소](/ko/docs/Web/CSS/Pseudo-elements), [CSS 자료형](/ko/docs/Web/CSS/CSS_values_and_units/CSS_data_types)과 [@규칙](/ko/docs/Web/CSS/CSS_syntax/At-rule)을 찾아보세요. 또한 [유형별로 정리한 CSS 선택자](#선택자)와 [주요 CSS 개념](#개념)도 찾아볼 수 있습니다. 추가로 간단한 [DOM-CSS / CSSOM](#dom-css_cssom) 참조도 들어 있습니다.

## 기본 규칙 구문

### 스타일 규칙 구문

```
style-rule ::=
    selectors-list {
      properties-list
    }
```

... where :

```
selectors-list ::=
    selector[:pseudo-class] [::pseudo-element]
    [, selectors-list]

properties-list ::=
    [property : value] [; properties-list]
```

아래 [선택자](#선택자), [의사 클래스](#의사_클래스), [의사 요소](#의사_요소) 목록을 참고하세요. 각 *`value`*의 구문은 지정한 *`property`*가 정의하는 자료형에 따라 다릅니다.

#### 스타일 규칙 예제

```css
strong {
  color: red;
}

div.menu-bar li:hover > ul {
  display: block;
}
```

CSS 선택자 구문을 설명하는 입문자 단계의 소개 부분은 [이 자습서](/ko/docs/Learn/CSS/Introduction_to_CSS/%EC%84%A0%ED%83%9D%EC%9E%90)에서 찾아볼 수 있습니다. 규칙 정의에서 [구문](/ko/docs/Web/CSS/CSS_syntax/Syntax) 오류가 하나라도 발생하면 규칙 전체가 유효하지 않다는 점을 명심하세요. 유효하지 않은 규칙은 브라우저가 무시합니다. CSS 규칙 정의는 모두 (ASCII) [텍스트에 기반](https://www.w3.org/TR/css-syntax-3/#intro)하지만, DOM-CSS / CSSOM (규칙 관리 시스템)은 [객체에 기반](https://www.w3.org/TR/cssom/#introduction)합니다.

### @규칙 구문

@규칙 체계는 매우 다양하므로 필요한 구체적인 구문을 찾으려면 [@규칙](/ko/docs/Web/CSS/CSS_syntax/At-rule)을 봐주세요.

## 키워드 색인

> [!NOTE]
> 이 색인에 있는 속성 이름에는 CSS 표준 이름과 다른 [JavaScript 이름](/ko/docs/Web/CSS/Reference#index)이 들어가지 않습니다.

{{CSS_Ref}}

## 선택자

다음은 [선택자](/ko/docs/Web/CSS/CSS_selectors) 목록입니다. 선택자를 사용하면 DOM 요소의 다양한 기능에 기반한 조건을 통해 스타일을 입힐 수 있습니다.

### 기본 선택자

**기본 선택자**는 선택자의 기초를 이루며, 조합을 통해 더 복잡한 선택자를 생성합니다.

- [전체 선택자](/ko/docs/Web/CSS/Universal_selectors) `*`, `ns|*`, `*|*`, `|*`
- [태그 선택자](/ko/docs/Web/CSS/Type_selectors) _`elementname`_
- [클래스 선택자](/ko/docs/Web/CSS/Class_selectors) `.classname`
- [ID 선택자](/ko/docs/Web/CSS/ID_selectors) `#idname`
- [속성 선택자](/ko/docs/Web/CSS/Attribute_selectors) `[attr=value]`

### 그룹 선택자

- [선택자 목록](/ko/docs/Web/CSS/Selector_list) `A, B`
  - : A와 B 요소를 모두 선택합니다. 일치하는 여러가지 요소를 선택할 때 사용합니다.

### 결합자

결합자는 "*`A`*는 *`B`*의 자식", "*`A`*는 *`B`*와 인접 요소"처럼, 두 개 이상의 선택자끼리 관계를 형성합니다.

- [인접 형제 결합자](/ko/docs/Web/CSS/%EC%9D%B8%EC%A0%91_%ED%98%95%EC%A0%9C_%EC%84%A0%ED%83%9D%EC%9E%90) `A + B`
  - : 요소 *`A`*와 *`B`*가 같은 부모를 가지며 *`B`*가 *`A`*를 바로 뒤따라야 하도록 지정합니다.
- [일반 형제 결합자](/ko/docs/Web/CSS/Subsequent-sibling_combinator) `A ~ B`
  - : 요소 *`A`*와 *`B`*가 같은 부모를 가지며 *`B`*가 *`A`*를 뒤따라야 하도록 지정합니다. 그러나 *`B`*가 *`A`*의 바로 옆에 위치해야 할 필요는 없습니다.
- [자식 결합자](/ko/docs/Web/CSS/Child_combinator) `A > B`
  - : 요소 *`B`*가 *`A`*의 바로 밑에 위치해야 하도록 지정합니다.
- [자손 결합자](/ko/docs/Web/CSS/Descendant_combinator) `A B`
  - : 요소 *`B`*가 *`A`*의 밑에 위치해야 하도록 지정합니다. 그러나 *`B`*가 *`A`*의 바로 아래에 있을 필요는 없습니다.
- [열 결합자](/ko/docs/Web/CSS/Column_combinator) `A || B` {{experimental_inline}}
  - : 요소 *`B`*가 표의 열 _`A`_ 안에 위치해야 하도록 지정합니다. 여러 열에 걸친 요소는, 각각의 열 모두에 대해 안쪽에 위치한 것으로 간주합니다.

### 의사 클래스/요소

- [의사 클래스](/ko/docs/Web/CSS/Pseudo-classes) `:`
  - : 요소의 특정 상태를 선택합니다.
- [의사 요소](/ko/docs/Web/CSS/Pseudo-elements) `::`
  - : HTML이 포함하지 않은 객체를 나타냅니다.

> [!NOTE]
> **같이 보기:** [Selectors Level 4 명세의 선택자 목록.](https://www.w3.org/TR/selectors/#overview)

## 개념

### 구문과 의미

- [CSS 구문](/ko/docs/Web/CSS/CSS_syntax/Syntax)
- [@-규칙](/ko/docs/Web/CSS/CSS_syntax/At-rule)
- [종속](/ko/docs/Web/CSS/Cascade)
- [주석](/ko/docs/Web/CSS/CSS_syntax/Comments)
- [서술자](/ko/docs/Glossary/CSS_Descriptor)
- [상속](/ko/docs/Web/CSS/CSS_cascade/Inheritance)
- [단축 속성](/ko/docs/Web/CSS/CSS_cascade/Shorthand_properties)
- [명시도](/ko/docs/Web/CSS/CSS_cascade/Specificity)
- [값 정의 구문](/ko/docs/Web/CSS/CSS_values_and_units/Value_definition_syntax)

### 값

- [실제값](/ko/docs/Web/CSS/actual_value)
- [계산값](/ko/docs/conflicting/Web/CSS/CSS_cascade/Value_processing_4129c9bf28ee4c2570fe2528f20c4b2cd9a30d9cf2ec4e75fb56fe903059e63e)
- [초깃값](/ko/docs/Web/CSS/CSS_cascade/Value_processing)
- [결정값](/ko/docs/conflicting/Web/CSS/CSS_cascade/Value_processing_a47f4c6da6bce4fc52f8ed2ce27dc58e53fa5bd72bfef0bb04a61adbc5249cc4)
- [지정값](/ko/docs/conflicting/Web/CSS/CSS_cascade/Value_processing)
- [사용값](/ko/docs/conflicting/Web/CSS/CSS_cascade/Value_processing_ec5028512f59a0673c4ed5cfd5bcbbe4dcec85980166da23f909867f8a36e8b2)

### 레이아웃

- [블록 서식 맥락](/ko/docs/Web/CSS/CSS_display/Block_formatting_context)
- [박스 모델](/ko/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- [컨테이닝 블록](/ko/docs/Web/CSS/CSS_display/Containing_block)
- [레이아웃 모드](/ko/docs/Glossary/Layout_mode)
- [여백 상쇄](/ko/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
- [대체 요소](/ko/docs/Web/CSS/CSS_images/Replaced_element_properties)
- [쌓임 맥락](/ko/docs/Web/CSS/CSS_positioned_layout/Stacking_context)
- [시각적 서식 맥락](/ko/docs/Web/CSS/Visual_formatting_model)

## DOM-CSS / CSSOM

### 주요 객체 유형

- {{DOMxRef("DocumentOrShadowRoot.styleSheets")}}
- `{{DOMxRef("StyleSheetList", "styleSheets", "", 1)}}[i].{{DOMxRef("CSSRuleList", "cssRules", "", 1)}}`
- `cssRules[i].{{DOMxRef("CSSRule.cssText", "cssText", "", 1)}}` (selector & style)
- `cssRules[i].{{DOMxRef("CSSStyleRule.selectorText", "selectorText", "", 1)}}`
- {{DOMxRef("HTMLElement.style")}}
- `HTMLElement.style.{{DOMxRef("CSSStyleDeclaration.cssText", "cssText", "", 1)}}` (just style)
- {{DOMxRef("Element.className")}}
- {{DOMxRef("Element.classList")}}

### 중요 메서드

- {{DOMxRef("CSSStyleSheet.insertRule()")}}
- {{DOMxRef("CSSStyleSheet.deleteRule()")}}

## 같이 보기

- [Mozilla CSS 확장](/ko/docs/Web/CSS/Mozilla_Extensions) (`-moz-` 접두사 사용)
- [WebKit CSS 확장](/ko/docs/Web/CSS/WebKit_Extensions) (대다수 `-webkit-` 접두사 사용)
- [Microsoft CSS 확장](/ko/docs/Web/CSS/Microsoft_Extensions) (`-ms-` 접두사 사용)

## 외부 링크

- [CSS 색인 (w3.org)](https://www.w3.org/TR/CSS/#indices)
