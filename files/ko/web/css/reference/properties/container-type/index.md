---
title: container-type
slug: Web/CSS/Reference/Properties/container-type
original_slug: Web/CSS/container-type
l10n:
  sourceCommit: 63cbf204323f117a2a80c7aa6273e50253ab9d07
---

**`container-type`** [CSS](/ko/docs/Web/CSS) 속성을 사용하면 요소를 쿼리 컨테이너로 설정할 수 있습니다. `container-type`은 컨테이너 쿼리에서 사용할 컨테이너 맥락의 유형을 정의하는 데 사용됩니다. 사용할 수 있는 컨테이너 맥락은 다음과 같습니다.

- [크기](/ko/docs/Web/CSS/CSS_containment/Container_size_and_style_queries): 컨테이너의 최대/최소 크기, 가로세로 비율, 방향 등과 같은 일반적인 크기나 인라인 크기 조건에 따라 자식 요소에 CSS 규칙을 선택적으로 적용할 수 있습니다.
- [스크롤 상태](/ko/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries): 컨테이너가 일부 스크롤되어 있거나, 스크롤 스냅 컨테이너에 맞춰진 [스냅 타겟](/ko/docs/Glossary/Scroll_snap#snap_target)인 경우 등 스크롤 상태에 따라 컨테이너의 자식 요소에 CSS 규칙을 선택적으로 적용할 수 있습니다.

> [!NOTE]
> `container-type`과 {{cssxref("container-name")}} 속성을 사용할 때에는, {{cssxref("contain")}} 속성의 `style`과 `layout` 값이 자동으로 적용됩니다.

## 구문

```css
/* 키워드 값 */
container-type: normal;
container-type: size;
container-type: inline-size;
container-type: scroll-state;

/* 두 개의 값 */
container-type: size scroll-state;

/* 전역 값 */
container-type: inherit;
container-type: initial;
container-type: revert;
container-type: revert-layer;
container-type: unset;
```

### 값

`container-type` 속성은 아래 목록 중 하나의 값만 지정할 수도 있고, 두 개의 값을 지정할 수도 있습니다. 이때 두 값을 지정할 경우 하나는 반드시 `스크롤 상태`여야 하며, 다른 하나는 `inline-size` 또는 `size`가 될 수 있습니다. 즉, 요소는 크기 쿼리 컨테이너, 스크롤 상태 쿼리 컨테이너, 둘 다, 또는 둘 다 아닌 상태로 설정할 수 있습니다.

- `inline-size`
  - : 컨테이너의 [인라인 축](/ko/docs/Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values#block_and_inline_dimensions)(가로 방향)에 대한 크기 쿼리를 위한 쿼리 컨테이너를 설정합니다.
    해당 요소에는 layout, style, inline-size 컨테인먼트가 적용됩니다.

    요소에 인라인 크기 컨테인먼트가 적용되어, 자식 요소를 무시하고 요소 자체의 인라인 크기만 [독립적으로 계산](/ko/docs/Web/CSS/CSS_containment/Using_CSS_containment#size_containment)할 수 있습니다(자세한 내용은 [CSS 컨테인먼트 사용하기](/ko/docs/Web/CSS/CSS_containment/Using_CSS_containment) 참고).

- `normal`
  - : 기본값입니다. 이 요소는 어떤 컨테이너 크기 쿼리의 쿼리 컨테이너로는 동작하지 않지만, [컨테이너 스타일 쿼리](/ko/docs/Web/CSS/@container#container_style_queries)의 쿼리 컨테이너로는 유지됩니다.

- `scroll-state`
  - : 컨테이너의 스크롤 상태 쿼리를 위한 쿼리 컨테이너를 설정합니다. 이 경우, 요소의 크기는 독립적으로 계산되지 않으며, 어떠한 컨테인먼트도 적용되지 않습니다.

- `size`
  - : 컨테이너의 [인라인과 블록](/ko/docs/Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values#block_and_inline_dimensions) 방향 모두에 대한 크기 쿼리를 위한 쿼리 컨테이너를 설정합니다.
    컨테이너에는 레이아웃 컨테인먼트, 스타일 컨테인먼트, 크기 컨테인먼트가 모두 적용됩니다.

    요소에는 인라인과 블록 방향 모두에 크기 컨테인먼트가 적용되어, 자식 요소를 무시하고 요소 자체의 크기만 독립적으로 계산할 수 있습니다.

## 형식 정의

{{CSSInfo}}

## 형식 구문

{{CSSSyntax}}

## 설명

컨테이너 쿼리를 사용하면 컨테이너에 대해 조건을 쿼리하여 그에 따라 내부 요소에 스타일을 선택적으로 적용할 수 있습니다. {{cssxref("@container")}} @-규칙은 컨테이너에 대해 수행할 테스트와, 쿼리 결과가 `true`일 때 컨테이너 내부에 적용할 규칙을 지정하는 데 사용됩니다.

컨테이너 쿼리 테스트는 `container-type` 속성이 지정된 요소에만 수행되며, 이 속성은 해당 요소를 크기 또는 스크롤 상태 컨테이너(또는 둘 다)로 정의합니다.

### 컨테이너 크기 쿼리

[컨테이너 크기 쿼리](/ko/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_size_queries)를 사용하면 최대/최소 크기, 가로세로 비율, 방향 등과 같은 크기 조건에 따라 컨테이너의 하위 요소에 CSS 규칙을 선택적으로 적용할 수 있습니다.

크기 컨테이너에는 추가적으로 크기 컨테인먼트가 적용됩니다. 이는 요소가 자신의 내용으로부터 크기 정보를 얻지 못하게 하여, 컨테이너 쿼리에서 무한 루프가 발생하는 것을 방지하는 데 중요합니다. 만약 그렇지 않다면, 컨테이너 쿼리 내부의 CSS 규칙이 콘텐츠의 크기를 변경하고, 그로 인해 쿼리 결과가 false가 되어 부모 요소의 크기가 바뀌고, 다시 콘텐츠 크기가 바뀌어 쿼리 결과가 true로 바뀌는 일이 반복되어 끝없는 루프가 발생할 수 있습니다.

컨테이너의 크기는 부모의 전체 너비로 확장되는 블록 레벨 요소처럼 문맥에 의해 결정되거나, 명시적으로 정의되어야 합니다. 만약 문맥상 또는 명시적으로 크기가 지정되지 않으면, 크기 컨테인먼트가 적용된 요소는 크기가 사라져버립니다.

### 컨테이너 스크롤 상태 쿼리

[컨테이너 스크롤 상태 쿼리](/ko/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries)를 사용하면 다음과 같은 스크롤 상태 조건에 따라 컨테이너의 자식 요소에 CSS 규칙을 선택적으로 적용할 수 있습니다.

- 컨테이너의 내용이 일부 스크롤되어 있는지 여부
- 컨테이너가 스크롤 스냅 컨테이너에 맞춰진 스냅 타겟인지 여부
- 컨테이너가 [`position: sticky`](/ko/docs/Web/CSS/display)로 설정되어 {{glossary("scroll container", "스크롤 컨테이너")}}의 경계에 고정되어 있는지 여부

첫 번째 경우에는 쿼리 대상 컨테이너가 바로 그 스크롤 컨테이너 자체입니다. 나머지 두 경우에는 쿼리 대상 컨테이너가 상위 스크롤 컨테이너의 스크롤 위치에 영향을 받는 요소입니다.

## 예제

### 인라인 크기 컨테인먼트 설정하기

다음은 이미지, 제목, 텍스트로 구성된 카드 컴포넌트의 HTML 예시입니다.

```html
<div class="container">
  <div class="card">
    <h3>Normal card</h3>
    <div class="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </div>
  </div>
</div>

<div class="container wide">
  <div class="card">
    <h3>Wider card</h3>
    <div class="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </div>
  </div>
</div>
```

컨테이너 맥락을 생성하려면 요소에 `container-type` 속성을 추가하면 됩니다.
아래 예시는 `inline-size` 값을 사용하여 컨테이너의 [인라인 축](/ko/docs/Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values#block_and_inline_dimensions)에 대한 컨테인먼트 맥락을 생성하는 방법을 보여줍니다.

```css
.container {
  container-type: inline-size;
  width: 300px;
  height: 120px;
}

.wide {
  width: 500px;
}
```

```css hidden
h3 {
  height: 2rem;
  margin: 0.5rem;
}

.card {
  height: 100%;
}

.content {
  background-color: wheat;
  height: 100%;
}

.container {
  margin: 1rem;
  border: 2px dashed red;
  overflow: hidden;
}
```

{{Cssxref("@container")}} @-규칙을 사용해 컨테이너 쿼리를 작성하면, 컨테이너의 너비가 400px보다 넓을 때 해당 컨테이너의 요소에 스타일이 적용됩니다.

```css
@container (width > 400px) {
  .card {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
}
```

{{EmbedLiveSample('Establishing_inline_size_containment', '100%', 300)}}

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [CSS 컨테이너 쿼리](/ko/docs/Web/CSS/CSS_containment/Container_queries)
- [컨테이너 크기 및 스타일 쿼리 사용하기](/ko/docs/Web/CSS/CSS_containment/Container_size_and_style_queries)
- [컨테이너 스크롤 상태 쿼리 사용하기](/ko/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries)
- {{Cssxref("@container")}} @-규칙
- CSS {{Cssxref("container")}} 축약형 속성
- CSS {{Cssxref("container-name")}} 속성
- CSS {{cssxref("content-visibility")}} 속성
