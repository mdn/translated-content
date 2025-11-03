---
title: container-name
slug: Web/CSS/Reference/Properties/container-name
original_slug: Web/CSS/container-name
l10n:
  sourceCommit: 63cbf204323f117a2a80c7aa6273e50253ab9d07
---

**container-name** [CSS](/ko/docs/Web/CSS) 속성은 [컨테이너 쿼리](/ko/docs/Web/CSS/CSS_containment/Container_queries)에서 [@container](/ko/docs/Web/CSS/@container) @-규칙에 사용되는 쿼리 컨테이너 이름의 목록을 지정합니다.
컨테이너 쿼리는 가장 가까운 컨테인먼트 맥락(containment context) 조상 요소의 [크기](/ko/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_size_queries)나 [스크롤 상태](/ko/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries)에 따라 요소에 스타일을 적용합니다.
컨테인먼트 맥락에 이름을 지정하면, 단순히 가장 가까운 조상 대신 해당 이름을 사용해 {{Cssxref("@container")}} @-규칙으로 구체적으로 타겟팅할 수 있습니다.

> [!NOTE]
> {{cssxref("container-type")}}과 `container-name` 속성을 사용할 때는 {{cssxref("contain")}} 속성의 `style`과 `layout` 값이 자동으로 적용됩니다.

## 구문

```css
container-name: none;

/* 하나의 이름 */
container-name: myLayout;

/* 여러 개의 이름 */
container-name: myPageLayout myComponentLibrary;

/* 전역 값 */
container-name: inherit;
container-name: initial;
container-name: revert;
container-name: revert-layer;
container-name: unset;
```

### 값

- `none`
  - : 기본값입니다. 쿼리 컨테이너에 이름이 지정되지 않습니다.

- {{cssxref("custom-ident")}}
  - : 컨테이너를 식별하는 데 사용되는 대소문자를 구분하는 문자열입니다.
    다음과 같은 조건이 적용됩니다.
    - 이름은 `or`, `and`, `not`, `default`와 같아서는 안 됩니다.
    - 이름 값은 따옴표로 감싸면 안 됩니다.
    - 대시(-)가 포함된 식별자(작성자가 정의한 식별자)는 사용할 수 있습니다. (예시: `--container-name`)
    - 공백으로 구분된 여러 개의 이름을 나열할 수 있습니다.

## 형식 정의

{{CSSInfo}}

## 형식 구문

{{CSSSyntax}}

## 예제

### 컨테이너 이름 사용하기

다음은 제목과 텍스트로 구성된 카드 컴포넌트의 HTML 예시입니다.

```html
<div class="card">
  <div class="post-meta">
    <h2>Card title</h2>
    <p>My post details.</p>
  </div>
  <div class="post-excerpt">
    <p>
      A preview of my <a href="https://example.com">blog post</a> about cats.
    </p>
  </div>
</div>
```

컨테인먼트 맥락을 생성하려면 CSS에서 요소에 `container-type` 속성을 추가하면 됩니다.
아래 예시는 카드의 메타 정보와 게시글 요약 두 부분에 각각 컨테인먼트 맥락을 생성하는 방법을 보여줍니다.

> [!NOTE]
> 이러한 선언을 위한 축약형 문법은 {{cssxref("container")}} 페이지에서 설명되어 있습니다.

```css
.post-meta {
  container-type: inline-size;
}

.post-excerpt {
  container-type: inline-size;
  container-name: excerpt;
}
```

{{Cssxref("@container")}} @-규칙을 사용해 컨테이너 쿼리를 작성하면, 쿼리의 조건이 참일 때 해당 컨테이너의 요소에 스타일이 적용됩니다.
아래 예시는 두 개의 컨테이너 쿼리를 보여주는데, 하나는 `.post-excerpt` 요소의 내용에만 적용되고, 다른 하나는 `.post-meta`와 `.post-excerpt`의 내용 모두에 적용됩니다.

```css
@container excerpt (width >= 400px) {
  p {
    visibility: hidden;
  }
}

@container (width >= 400px) {
  p {
    font-size: 2rem;
  }
}
```

컨테이너 쿼리 작성에 대한 더 자세한 내용은 [CSS 컨테이너 쿼리](/ko/docs/Web/CSS/CSS_containment/Container_queries) 페이지를 참고하세요.

### 여러 개의 컨테이너 이름 사용하기

컨테이너 맥락에 여러 개의 이름을 공백으로 구분하여 지정할 수도 있습니다.

```css
.post-meta {
  container-type: inline-size;
  container-name: meta card;
}
```

이렇게 하면 {{cssxref("@container")}} @-규칙에서 두 이름 중 어느 것이든 사용해 컨테이너를 선택할 수 있습니다.
이는 여러 컨테이너 쿼리에서 각각 다른 조건으로 같은 컨테이너를 타겟팅하고 싶을 때 유용합니다.

```css
@container meta (width <= 500px) {
  p {
    visibility: hidden;
  }
}

@container card (width <= 200px) {
  h2 {
    font-size: 1.5em;
  }
}
```

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
- CSS {{Cssxref("container-type")}} 속성
- CSS {{cssxref("content-visibility")}} 속성
