---
title: container
slug: Web/CSS/Reference/Properties/container
original_slug: Web/CSS/container
l10n:
  sourceCommit: 63cbf204323f117a2a80c7aa6273e50253ab9d07
---

**container** [단축 속성](/ko/docs/Web/CSS/CSS_cascade/Shorthand_properties) [CSS](/ko/docs/Web/CSS) 속성은 해당 요소를 쿼리 컨테이너로 설정하고, [컨테이너 쿼리](/ko/docs/Web/CSS/CSS_containment/Container_queries)에서 사용되는 [컨테인먼트 맥락](/ko/docs/Web/CSS/CSS_containment/Container_queries#naming_containment_contexts)의 이름과 유형을 지정합니다.

## 구성 속성

이 속성은 다음 CSS의 단축형입니다.

- {{Cssxref("container-name")}}
- {{Cssxref("container-type")}}

## 구문

```css
/* <container-name> */
container: my-layout;

/* <container-name> / <container-type> */
container: my-layout / size;

/* 전역 값 */
container: inherit;
container: initial;
container: revert;
container: revert-layer;
container: unset;
```

### 값

- `<container-name>`
  - : 컨테인먼트 맥락에 사용되는 대소문자를 구분하는 이름입니다.
    구문에 대한 자세한 내용은 {{cssxref("container-name")}} 속성 페이지에서 확인할 수 있습니다.
- `<container-type>`
  - : 컨테인먼트 맥락의 유형입니다.
    구문에 대한 자세한 내용은 {{cssxref("container-type")}} 속성 페이지에서 확인할 수 있습니다.

## 형식 정의

{{CSSInfo}}

## 형식 구문

{{CSSSyntax}}

## 예제

### 인라인 사이즈 컨테인먼트를 설정하기

다음은 이미지, 제목, 그리고 텍스트로 구성된 카드 컴포넌트의 HTML 예시입니다.

```html
<div class="post">
  <div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

명시적으로 컨테이너 맥락을 생성하려면, `container-type`을 선언하고 필요에 따라 `container-name`을 함께 지정하면 됩니다.

```css
.post {
  container-type: inline-size;
  container-name: sidebar;
}
```

`container` 축약형 속성은 이 과정을 한 번에 선언할 수 있도록 더 간단하게 만들어줍니다.

```css
.post {
  container: sidebar / inline-size;
}
```

이후에는 {{cssxref("@container")}} @-규칙을 사용해 해당 컨테이너를 이름으로 선택할 수 있습니다.

```css
@container sidebar (width >= 400px) {
  /* <stylesheet> */
}
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [CSS 컨테이너 쿼리](/ko/docs/Web/CSS/CSS_containment/Container_queries)
- [컨테이너 크기 및 스타일 쿼리 사용](/ko/docs/Web/CSS/CSS_containment/Container_size_and_style_queries)
- {{Cssxref("@container")}} @-규칙
- CSS {{Cssxref("contain")}} 속성
- CSS {{Cssxref("container-type")}} 속성
- CSS {{Cssxref("container-name")}} 속성
- CSS {{cssxref("content-visibility")}} 속성
