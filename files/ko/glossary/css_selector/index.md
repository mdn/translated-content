---
title: CSS 선택자 (Selector (CSS))
slug: Glossary/CSS_Selector
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{GlossarySidebar}}

**CSS 선택자**는 규칙이 일치하는 문서의 요소를 설명하는 CSS 규칙의 일부입니다. 일치하는 요소는 규칙에 지정된 스타일이 적용됩니다.

## 예제

이 CSS를 생각해보세요.

```css
p {
  color: green;
}

div.warning {
  width: 100%;
  border: 2px solid yellow;
  color: white;
  background-color: darkred;
  padding: 0.8em 0.8em 0.6em;
}

#customized {
  font:
    16px Lucida Grande,
    Arial,
    Helvetica,
    sans-serif;
}
```

이 선택자들은 `"p"` ({{HTMLElement("p")}} 요소 내부 텍스트에 녹색을 적용), `"div.warning"` ([class](/ko/docs/Web/HTML/Global_attributes/class) `"warning"`이 있는 모든 {{HTMLElement("div")}} 요소는 경고 상자처럼 보임) 및 `"#customized"` (ID가 `"customized"`인 요소의 기본 글꼴을 16픽셀 크기의 Lucida Grande 또는 몇 가지 대체 글꼴 중 하나로 설정) 입니다.

그런 다음, 이 CSS를 다음과 같은 일부 HTML에 적용할 수 있습니다.

```html
<p>This is happy text.</p>

<div class="warning">
  Be careful! There are wizards present, and they are quick to anger!
</div>

<div id="customized">
  <p>This is happy text.</p>

  <div class="warning">
    Be careful! There are wizards present, and they are quick to anger!
  </div>
</div>
```

결과 페이지 콘텐츠의 스타일은 다음과 같습니다.

{{EmbedLiveSample("Example", 640, 240)}}

## 같이 보기

- CSS 소개에서 [CSS 선택자에 대해 더 알아보기](/ko/docs/Learn/CSS/Building_blocks/Selectors)
- 기본 선택자

  - [타입 선택자](/ko/docs/Web/CSS/Type_selectors) `elementname`
  - [클래스 선택자](/ko/docs/Web/CSS/Class_selectors) `.classname`
  - [ID 선택자](/ko/docs/Web/CSS/ID_selectors) `#idname`
  - [범용 선택자](/ko/docs/Web/CSS/Universal_selectors) `* ns|* *|*`
  - [속성 선택자](/ko/docs/Web/CSS/Attribute_selectors) `[attr=value]`
  - [상태 선택자](/ko/docs/Web/CSS/Pseudo-classes) `a:active, a:visited`

- 그룹화 선택자

  - [선택자 목록](/ko/docs/Web/CSS/Selector_list) `A, B`

- 결합자

  - [인접 형제 선택자](/ko/docs/Web/CSS/Next-sibling_combinator) `A + B`
  - [일반 형제 선택자](/ko/docs/Web/CSS/Subsequent-sibling_combinator) `A ~ B`
  - [자식 선택자](/ko/docs/Web/CSS/Child_combinator) `A > B`
  - [하위 선택자](/ko/docs/Web/CSS/Descendant_combinator) `A B`

- 의사 요소

  - [의사 클래스](/ko/docs/Web/CSS/Pseudo-classes) `:`
  - [의사 요소](/ko/docs/Web/CSS/Pseudo-elements) `::`
