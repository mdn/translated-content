---
title: "@layer"
slug: Web/CSS/Reference/At-rules/@layer
original_slug: Web/CSS/@layer
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

**`@layer`** [CSS](/ko/docs/Web/CSS) [at-rule](/ko/docs/Web/CSS/CSS_syntax/At-rule)은 캐스케이드 레이어를 선언하는 데 사용되며, 여러 캐스케이드 레이어가 있을 경우 우선순위를 정의하는 데도 사용할 수 있습니다.

{{InteractiveExample("CSS Demo: @layer", "tabbed-standard")}}

```css interactive-example
@layer module, state;

@layer state {
  .alert {
    background-color: brown;
  }
  p {
    border: medium solid limegreen;
  }
}

@layer module {
  .alert {
    border: medium solid violet;
    background-color: yellow;
    color: white;
  }
}
```

```html interactive-example
<p class="alert">Beware of the zombies</p>
```

## 구문

```css
/* 문 @규칙 */
@layer layer-name;
@layer layer-name, layer-name, layer-name;

/* 블록 @규칙 */
@layer {rules}
@layer layer-name {rules}
```

- _layer-name_ : 캐스케이드 레이어의 이름
- _rules_ : 캐스케이드 레이어에 있는 CSS 규칙 집합

## 설명

캐스케이드 레이어 내의 규칙들은 함께 캐스케이딩되며, 웹 개발자들에게 캐스케이드에 대한 더 많은 제어권을 제공합니다. 레이어에서 정의되지 않은 스타일은 항상 이름이 있는 레이어와 이름이 없는 레이어에서 선언된 스타일을 무시합니다.

다음 다이어그램은 1, 2, ..., N 순서로 선언된 레이어의 우선순위를 보여줍니다.

![캐스케이드 레이어 우선순위를 보여주는 다이어그램](https://mdn.github.io/shared-assets/images/diagrams/css/at-rules/layer-cascade.svg)

선언 순서가 중요합니다. 먼저 선언된 레이어가 가장 낮은 우선순위를 가지며, 마지막으로 선언된 레이어가 가장 높은 우선순위를 가집니다. 그러나 [`!important`](/ko/docs/Web/CSS/important) 플래그가 사용되면 우선순위가 뒤집힙니다.

`@layer` @규칙은 세 가지 방법 중 하나로 캐스케이드 레이어를 생성하는 데 사용됩니다

첫 번째 방법은 `@layer` 블록 @규칙을 사용하여 특정 이름의 캐스케이드 레이어를 생성하고, 그 레이어 내부에 CSS 규칙을 포함하는 방식입니다. 예를 들면 다음과 같습니다.

```css
@layer utilities {
  .padding-sm {
    padding: 0.5rem;
  }

  .padding-lg {
    padding: 0.8rem;
  }
}
```

두 번째 방법은 `@layer` 문 @규칙을 사용하여 스타일을 할당하지 않고 쉼표로 구분된 하나 이상의 이름 있는 캐스케이드 레이어를 생성하는 것입니다. 아래와 같이 단일 레이어를 만들 수 있습니다.

```css
@layer utilities;
```

여러 개의 레이어를 한 번에 정의할 수도 있습니다. 아래와 같이 작성할 수 있습니다.

```css
@layer theme, layout, utilities;
```

이 방법이 유용한 이유는 레이어가 선언된 순서가 각 레이어의 우선순위를 나타내기 때문입니다. 선언과 마찬가지로, 여러 레이어에 규칙이 있는 경우 마지막에 나열된 레이어가 우선권을 가집니다. 따라서, 앞서 나온 예시에서 `theme`와 `utilities`에 상충하는 규칙이 있다면, `utilities`에 있는 규칙이 우선권을 가지며 적용됩니다.

> [!NOTE]
> 레이어 이름을 선언하여 순서를 설정한 후, 이름을 다시 선언하여 해당 레이어에 CSS 규칙을 추가할 수 있습니다. 스타일은 해당 레이어에 추가되며, 레이어의 순서는 변경되지 않습니다.

세 번째 방법은 레이어 이름을 포함하지 않고 `@layer` 블록 @규칙을 사용하여 이름 없는 레이어를 생성하는 것입니다. 예시는 아래와 같습니다.

```css
@layer {
  p {
    margin-block: 1rem;
  }
}
```

이것은 *익명 캐스케이드 레이어*를 생성합니다. 이 레이어는 이름 있는 레이어와 동일한 방식으로 작동하지만, 이후에 규칙을 추가할 수는 없습니다. 익명 레이어의 우선순위는 이름이 있든 없든 레이어가 선언된 순서에 따르며, 레이어 외부에서 선언된 스타일보다 우선순위가 낮습니다.

캐스케이드 레이어를 생성하는 또 다른 방법은 {{cssxref("@import")}}를 사용하는 것입니다. 이 경우 규칙은 가져온 스타일 시트에 포함됩니다. `@import` @규칙은 `@charset` 및 `@layer` 규칙을 제외한 모든 유형의 규칙보다 먼저 와야 한다는 점을 기억하세요.

```css
@import "theme.css" layer(utilities);
```

### 중첩 레이어

레이어는 중첩될 수 있습니다. 예시는 아래와 같습니다.

```css
@layer framework {
  @layer layout {
  }
}
```

`framework` 내부의 `layout` 레이어에 규칙을 추가하려면 두 이름을 `.`로 연결합니다.

```css
@layer framework.layout {
  p {
    margin-block: 1rem;
  }
}
```

## 형식 구문

{{csssyntax}}

## 예제

### 간단한 예제

다음 예제에서는 두 개의 CSS 규칙이 생성됩니다. 하나는 어떤 레이어에도 포함되지 않은 {{htmlelement("p")}} 요소에 대한 규칙이고, 다른 하나는 `type`이라는 레이어 내의 `.box p`에 대한 규칙입니다.

레이어가 없으면 선택자 `.box p`가 가장 높은 구체성을 가지므로, `Hello, world!`는 녹색으로 표시됩니다. 그러나 `type` 레이어가 레이어 없는 콘텐츠를 포함하기 위해 생성된 익명 레이어보다 먼저 오므로, 텍스트는 보라색으로 표시됩니다.

또한 순서에 주목하세요. 레이어 없는 스타일을 먼저 선언했음에도 불구하고 여전히 레이어 스타일 *뒤*에 적용됩니다.

#### HTML

```html
<div class="box">
  <p>Hello, world!</p>
</div>
```

#### CSS

```css
p {
  color: rebeccapurple;
}

@layer type {
  .box p {
    font-weight: bold;
    font-size: 1.3em;
    color: green;
  }
}
```

#### 결과

{{EmbedLiveSample("Simple_example")}}

### 기존 레이어에 규칙 할당하기

다음 예제에서는 규칙이 적용되지 않은 두 개의 레이어가 생성된 후, 두 레이어에 CSS 규칙이 적용됩니다. `base` 레이어는 `color`, `border`, `font-size`, 및 `padding`을 정의하고, `special` 레이어는 다른 색상을 정의합니다. `special`이 레이어가 정의될 때 마지막에 오기 때문에 제공하는 색상이 사용되며 텍스트는 `rebeccapurple`로 표시됩니다. `base`에서 정의된 다른 모든 규칙은 여전히 적용됩니다.

#### HTML

```html
<div class="item">
  I am displayed in <code>color: rebeccapurple</code> because the
  <code>special</code> layer comes after the <code>base</code> layer. My green
  border, font-size, and padding come from the <code>base</code> layer.
</div>
```

#### CSS

```css
@layer base, special;

@layer special {
  .item {
    color: rebeccapurple;
  }
}

@layer base {
  .item {
    color: green;
    border: 5px solid green;
    font-size: 1.3em;
    padding: 0.5em;
  }
}
```

#### 결과

{{EmbedLiveSample("Assigning_rules_to_existing_layers")}}

## 명세서

{{Specifications}}

## 브라우저 호완성

{{Compat}}

## 같이 보기

- [`@import`](/ko/docs/Web/CSS/@import)
- {{domxref("CSSLayerBlockRule")}}
- {{domxref("CSSLayerStatementRule")}}
- [`!important`](/ko/docs/Web/CSS/important)
- [`revert-layer`](/ko/docs/Web/CSS/revert-layer)
- [Introducing the CSS cascade](/ko/docs/Web/CSS/Cascade)
- [계단식 및 상속](/ko/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
- [종속 계층](/ko/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
- [The future of CSS: Cascade layers](https://www.bram.us/2021/09/15/the-future-of-css-cascade-layers-css-at-layer/) on bram.us (2021)
