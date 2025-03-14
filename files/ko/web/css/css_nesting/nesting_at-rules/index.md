---
title: CSS 중첩 @-규칙
slug: Web/CSS/CSS_nesting/Nesting_at-rules
l10n:
  sourceCommit: 4b6b77bc36496c88dcbe477ec46da678a85d8e6e
---

{{CSSRef}}

CSS 중첩을 이용하면 어떠한 [@-규칙](/ko/docs/Web/CSS/At-rule) 이든 다른 스타일 규칙 안에 또 다른 중첩 스타일을 가질 수 있습니다. @-규칙 내에 중첩된 스타일 규칙은 그것의 가장 가까운 조상으로부터 스타일 중첩 선택자 정의를 가져옵니다. 속성은 직접적으로 @-규칙 안에 포함될 수 있는데, 이는 마치 `& {...}` 블록 안에 중첩된 것과 같은 동작을 합니다.

## 중첩 가능한 @-규칙들

- {{cssxref('@media')}}
- {{cssxref('@supports')}}
- {{cssxref('@layer')}}
- {{cssxref('@scope')}}
- {{cssxref('@container')}}

## 예제

### 중첩 `@media` @-규칙

이 예제에서는 CSS 블록들을 확인할 수 있습니다. 처음 블록은 전형적인 @-규칙 중첩을 사용하는 방법을, 두번째 블록은 브라우저가 중첩을 파싱할 때 중첩을 작성하는 확장된 방법을, 그리고 마지막 블록은 중첩되지 않은 것과 동일한 형태를 보여줍니다.

#### 중첩 CSS

```css
.foo {
  display: grid;
  @media (orientation: landscape) {
    grid-auto-flow: column;
  }
}
```

#### 확장된 중첩 CSS

```css
.foo {
  display: grid;
  @media (orientation: landscape) {
    & {
      grid-auto-flow: column;
    }
  }
}
```

#### 중첩되지 않은 형태

```css
.foo {
  display: grid;
}

@media (orientation: landscape) {
  .foo {
    grid-auto-flow: column;
  }
}
```

### 다중 중첩 `@media` @-규칙들

@-규칙은 다른 @-규칙에 중첩될 수 있습니다. 아래에서 이러한 예제를 확인할 수 있으며, 중첩 없이 작성된 방식도 함께 확인할 수 있습니다.

#### 중첩 @-규칙들

```css
.foo {
  display: grid;
  @media (orientation: landscape) {
    grid-auto-flow: column;
    @media (min-width: 1024px) {
      max-inline-size: 1024px;
    }
  }
}
```

#### 중첩되지 않은 형태

```css
.foo {
  display: grid;
}
@media (orientation: landscape) {
  .foo {
    grid-auto-flow: column;
  }
}
@media (orientation: landscape) and (min-width: 1024px) {
  .foo {
    max-inline-size: 1024px;
  }
}
```

### 중첩 종속 계층 (`@layer`)

[종속 계측](/ko/docs/Web/CSS/@layer) 은 [자식 계층 생성](/ko/docs/Web/CSS/@layer#nesting_layers) 과 중첩될 수 있습니다. 이들은 `.`(온점) 으로 결합됩니다.

#### 부모 & 자식 계층 정의하기

스타일을 지정하고 그것을 사용하기 전에 명명된 종속 계층을 정의하는 것부터 알아보겠습니다.

```css
@layer base {
  @layer support;
}
```

#### 중첩 계층에 규칙 지정하기

여기 `.foo` 선택자는 자신의 규칙을 **base** `@layer` 에 할당합니다. 중첩된 **support** `@layer` 는 `base.support` 하위 레이어를 생성하고, `&` 중첩 선택자는 `.foo .bar` 규칙을 생성하는 데에 사용되었습니다.

```css
.foo {
  @layer base {
    block-size: 100%;
    @layer support {
      & .bar {
        min-block-size: 100%;
      }
    }
  }
}
```

#### 중첩이 사용되지 않은 형태

```css
@layer base {
  .foo {
    block-size: 100%;
  }
}
@layer base.support {
  .foo .bar {
    min-block-size: 100%;
  }
}
```

## 같이 보기

- [CSS 중첩](/ko/docs/Web/CSS/CSS_nesting) 모듈
- [`&` 중첩 선택자](/ko/docs/Web/CSS/Nesting_selector)
- [CSS 중첩 사용하기](/ko/docs/Web/CSS/CSS_nesting/Using_CSS_nesting)
- [중첩과 명시도](/ko/docs/Web/CSS/CSS_nesting/Nesting_and_specificity)
- [중첩 컨테이너 쿼리](/ko/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#nested_queries)
