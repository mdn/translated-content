---
title: font-synthesis
slug: Web/CSS/Reference/Properties/font-synthesis
original_slug: Web/CSS/font-synthesis
---

[CSS](/ko/docs/Web/CSS) **`font-synthesis`** 속성은 브라우저가 굵은 글꼴과 이탤릭 글꼴을 합성하는 것을 허용할지 설정합니다.

{{InteractiveExample("CSS Demo: font-synthesis")}}

```css interactive-example-choice
font-synthesis: weight style small-caps;
```

```css interactive-example-choice
font-synthesis: none;
```

```css interactive-example-choice
font-synthesis: weight;
```

```css interactive-example-choice
font-synthesis: style;
```

```css interactive-example-choice
font-synthesis: small-caps;
```

```css interactive-example-choice
font-synthesis: position;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    <p class="english">
      This font does not include <span class="bold">bold</span>,
      <span class="italic">italic</span>,
      <span class="small-caps">small-caps</span>, and
      <span class="sub">subscript</span> or
      <span class="sup">superscript</span> variants.
    </p>
    <p class="chinese">
      中文排版通常不运用<span class="bold">粗体</span>或<span class="italic"
        >斜体</span
      ><span class="sub">常不</span><span class="sup">运用</span>。
    </p>
  </div>
</section>
```

```css interactive-example
@font-face {
  font-family: Oxygen;
  font-style: normal;
  font-weight: 400;
  src: url("https://fonts.gstatic.com/s/oxygen/v14/2sDfZG1Wl4LcnbuKjk0m.woff2")
    format("woff2");
}

/* [108] */
@font-face {
  font-family: "Ma Shan Zheng";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("https://fonts.gstatic.com/s/mashanzheng/v10/NaPecZTRCLxvwo41b4gvzkXaRMGEFoZJFdX0wQ5Xo5Hr21L9zCcRFhbSe5Nk0pIMuUkHEA.108.woff2")
    format("woff2");
}
/* [110] */
@font-face {
  font-family: "Ma Shan Zheng";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("https://fonts.gstatic.com/s/mashanzheng/v10/NaPecZTRCLxvwo41b4gvzkXaRMGEFoZJFdX0wQ5Xo5Hr21L9zCcRFhbSe5Nk0pIMuUkHEA.110.woff2")
    format("woff2");
}
/* [117] */
@font-face {
  font-family: "Ma Shan Zheng";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("https://fonts.gstatic.com/s/mashanzheng/v10/NaPecZTRCLxvwo41b4gvzkXaRMGEFoZJFdX0wQ5Xo5Hr21L9zCcRFhbSe5Nk0pIMuUkHEA.117.woff2")
    format("woff2");
}
/* [118] */
@font-face {
  font-family: "Ma Shan Zheng";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("https://fonts.gstatic.com/s/mashanzheng/v10/NaPecZTRCLxvwo41b4gvzkXaRMGEFoZJFdX0wQ5Xo5Hr21L9zCcRFhbSe5Nk0pIMuUkHEA.118.woff2")
    format("woff2");
}
/* [119] */
@font-face {
  font-family: "Ma Shan Zheng";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("https://fonts.gstatic.com/s/mashanzheng/v10/NaPecZTRCLxvwo41b4gvzkXaRMGEFoZJFdX0wQ5Xo5Hr21L9zCcRFhbSe5Nk0pIMuUkHEA.119.woff2")
    format("woff2");
}

.english {
  font-size: 1.2em;
  font-family: Oxygen;
}

.chinese {
  font-size: 1.2em;
  font-family: "Ma Shan Zheng";
}

.bold {
  font-weight: bold;
}

.italic {
  font-style: italic;
}

.small-caps {
  font-variant: small-caps;
}

.sub {
  font-variant: sub;
}

.sup {
  font-variant: super;
}
```

## 구문

`font-synthesis`는 다음 방법 중 하나를 사용해 지정합니다.

- `none` 키워드.
- `weight` 또는 `style` 키워드.
- `weight`와 `style` 키워드.

### 값

- `none`
  - : 굵은 글꼴과 이탤릭 글꼴의 합성을 금지합니다.
- `weight`
  - : 필요한 경우 굵은 글꼴을 합성할 수 있습니다.
- `style`
  - : 필요한 경우 이탤릭 글꼴을 합성할 수 있습니다.

## 설명

대부분의 표준 서양 글꼴은 이탤릭과 굵은 글꼴을 포함하고 있으나 상용 글꼴은 그렇지 않은 경우도 많습니다. 한국, 중국, 일본을 포함한 비 알파벳 문화권의 문자 체계는 보통 이런 변형을 포함하지 않으며 브라우저의 글꼴 합성으로 인해 가독성이 떨어질 수 있습니다. 이 두 가지 경우에 대해 `font-synthesis`를 사용해 기본 글꼴 합성을 끄는 것이 좋을 수도 있습니다.

## 형식 정의

{{cssinfo}}

## 형식 구문

{{csssyntax}}

## 예제

### 글꼴 합성 비활성화

#### HTML

```html
<em class="syn">절 합성하세요! Synthesize!</em>
<br />
<em class="no-syn">절 합성하지 마세요! Synthesize!</em>
```

#### CSS

```css
em {
  font-weight: bold;
}
.syn {
  font-synthesis: style weight;
}
.no-syn {
  font-synthesis: none;
}
```

#### 결과

{{ EmbedLiveSample('글꼴_합성_비활성화', '', '50') }}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{cssxref("font-style")}}
- {{cssxref("font-weight")}}
