---
title: CSS 선택자
slug: Web/CSS/CSS_selectors
---

{{CSSRef("Selectors")}}

**CSS 선택자**는 CSS 규칙을 적용할 요소를 정의합니다.

> **참고:** 부모, 부모의 형제, 부모 형제의 자식을 선택할 수 있는 선택자는 존재하지 않습니다.

## 기본 선택자

- [전체 선택자](/ko/docs/Web/CSS/Universal_selectors)
  - : 모든 요소를 선택합니다. 추가로 네임스페이스 제한을 둘 수 있습니다.
    **구문:** `*` `ns|*` `*|*`
    **예제:** `*`은 문서 내의 모든 요소와 일치합니다.
- [유형 선택자](/ko/docs/Web/CSS/Type_selectors)
  - : 주어진 노드 이름을 가진 모든 요소를 선택합니다.
    **구문:** `elementname`
    **예제:** `input`은 모든 {{HTMLElement("input")}} 요소와 일치합니다.
- [클래스 선택자](/ko/docs/Web/CSS/Class_selectors)
  - : 주어진 `class` 특성을 가진 모든 요소를 선택합니다.
    **구문:** `.classname`
    **예제:** `.index`는 "index" 클래스를 가진 모든 요소와 일치합니다.
- [ID 선택자](/ko/docs/Web/CSS/ID_selectors)
  - : `id` 특성에 따라 요소를 선택합니다. 문서 내에는 주어진 ID를 가진 요소가 하나만 존재해야 합니다.
    **구문:** `#idname`
    **예제:** `#toc`는 "toc" ID를 가진 요소와 일치합니다.
- [특성 선택자](/ko/docs/Web/CSS/Attribute_selectors)
  - : 주어진 특성을 가진 모든 요소를 선택합니다.
    **구문:** `[attr]` `[attr=value]` `[attr~=value]` `[attr|=value]` `[attr^=value]` `[attr$=value]` `[attr*=value]`
    **예제:** `[autoplay]`는 `autoplay` 특성을 설정한 모든 요소와 일치합니다. 특성의 값은 고려하지 않습니다.

## 그룹 선택자

- [선택자 목록](/ko/docs/Web/CSS/Selector_list)
  - : `,`는 선택자 그룹을 생성하는 방법으로, 모든 일치하는 노드를 선택합니다.
    **구문:** `A, B`
    **예제:** `div, span`은 모든 {{HTMLElement("span")}}과 {{HTMLElement("div")}} 요소와 일치합니다.

## 결합자

- [자손 결합자](/ko/docs/Web/CSS/Descendant_combinator)
  - : ""(공백) 결합자는 첫 번째 요소의 자손인 노드를 선택합니다. **구문:** `A B`**예제:**`div span`은 {{HTMLElement("div")}} 요소 안에 위치하는 모든 {{HTMLElement("span")}} 요소와 일치합니다.
- [자식 결합자](/ko/docs/Web/CSS/Child_combinator)
  - : `>` 결합자는 첫 번째 요소의 바로 아래 자식인 노드를 선택합니다.
    **구문:** `A > B`
    **예제:** `ul > li`는 {{HTMLElement("ul")}} 요소 바로 아래에 위치하는 모든 {{HTMLElement("li")}} 요소와 일치합니다.
- [일반 형제 결합자](/ko/docs/Web/CSS/General_sibling_combinator)
  - : `~` 결합자는 형제, 즉 첫 번째 요소를 뒤따르면서 같은 부모를 공유하는 두 번째 요소를 선택합니다.
    **구문:** `A ~ B`
    **예제:** `p ~ span`은 {{HTMLElement("p")}} 요소를 뒤따르는 모든 {{HTMLElement("span")}} 요소와 일치합니다.
- [인접 형제 결합자](/ko/docs/Web/CSS/Adjacent_sibling_combinator)
  - : `+` 결합자는 인접 형제, 즉 첫 번째 요소의 바로 뒤에 위치하면서 같은 부모를 공유하는 두 번째 요소를 선택합니다.
    **구문:** `A + B`
    **예제:** `h2 + p`는 {{HTMLElement("h2")}} 바로 뒤에 위치하는 {{HTMLElement("p")}} 요소와 일치합니다.
- [열 결합자](/ko/docs/Web/CSS/Column_combinator) {{Experimental_Inline}}
  - : `||` 결합자는 같은 열에 속하는 노드를 선택합니다.
    **구문:** `A || B`
    **예제:** `col || td`는 {{HTMLElement("col")}}의 범위에 속하는 모든 {{HTMLElement("td")}} 요소와 일치합니다.

## 의사 클래스/요소

- [의사 클래스](/ko/docs/Web/CSS/Pseudo-classes)
  - : 의사 `:`은 문서 트리가 포함하지 않는 상태 정보에 기반해 요소를 선택할 수 있습니다.
    **예제:** `a:visited`는 사용자가 방문한 모든 {{HTMLElement("a")}} 요소와 일치합니다.
- [의사 요소](/ko/docs/Web/CSS/Pseudo-elements)
  - : 의사 `::`는 HTML이 포함하지 않는 개체를 선택합니다.
    **예제:** `p::first-line`은 모든 {{HTMLElement("p")}} 요소의 첫 번째 줄과 일치합니다.

## 명세

{{Specifications}}

[의사 클래스](/ko/docs/Web/CSS/Pseudo-classes#명세)와 [의사 요소](/ko/docs/Web/CSS/Pseudo-elements#명세)의 명세 표에서 각각의 상세 정보를 볼 수 있습니다.

## 같이 보기

- [CSS 명시도](/ko/docs/Web/CSS/Specificity)
