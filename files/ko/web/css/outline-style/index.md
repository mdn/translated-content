---
title: outline-style
slug: Web/CSS/outline-style
---

{{CSSRef}}

[CSS](/ko/docs/Web/CSS) **`outline-style`** 속성은 요소 외곽선의 스타일을 설정합니다. 외곽선은 요소의 [테두리](/ko/docs/Web/CSS/border) 바깥에 그려지는 선입니다.

{{EmbedInteractiveExample("pages/css/outline-style.html")}}

외곽선 외형을 설정할 땐 {{cssxref("outline")}} 단축 속성을 사용하는게 편리한 상황이 많습니다.

## 구문

```css
/* 키워드 값 */
outline-style: auto;
outline-style: none;
outline-style: dotted;
outline-style: dashed;
outline-style: solid;
outline-style: double;
outline-style: groove;
outline-style: ridge;
outline-style: inset;
outline-style: outset;

/* 전역 값 */
outline-style: inherit;
outline-style: initial;
outline-style: unset;
```

`outline-style` 속성은 다음 값 중 하나를 사용해 지정합니다.

### 값

- `auto`
  - : 사용자 에이전트가 사용자 지정 외곽선을 그릴 수 있도록 허용합니다.
- `none`
  - : 외곽선을 제거합니다. {{cssxref("outline-width")}}가 `0`입니다.
- `dotted`
  - : 외곽선을 점 여러 개로 그립니다.
- `dashed`
  - : 외곽선을 짧은 선 여러 개로 그립니다.
- `solid`
  - : 외곽선을 하나의 선으로 그립니다.
- `double`
  - : 외곽선을 두 개의 선으로 그립니다. {{cssxref("outline-width")}}는 두 선과 그 사이의 간격을 합친 값입니다.
- `groove`
  - : 외곽선을 마치 파낸 것처럼 그립니다.
- `ridge`
  - : `groove`의 반대입니다. 외곽선을 마치 튀어나온 것처럼 그립니다.
- `inset`
  - : 요소가 페이지 안에 박힌 것처럼 외곽선을 그립니다.
- `outset`
  - : `inset`의 반대입니다. 요소가 페이지 밖으로 나온 것처럼 그립니다.

## 형식 정의

{{cssinfo}}

## 형식 구문

{{csssyntax}}

## 예제

### 외곽선 스타일을 `auto`로 설정하기

`auto` 값은 사용자 지정 스타일을 의미합니다. "일반적으로 플랫폼 기본 사용자 인터페이스 스타일이거나, CSS에서 나타낼 수 있는 것보다 더 풍부한 스타일 (예컨대 둥근 꼭짓점에 바깥쪽 픽셀은 반투명하여 빛나는 것처럼 보이는 외곽선)입니다."

#### HTML

```html
<div>
  <p class="auto">Outline Demo</p>
</div>
```

#### CSS

```css
.auto {
  outline-style: auto; /* same result as "outline: auto" */
}

/* To make the Demo clearer */
* {
  outline-width: 10px;
  padding: 15px;
}
```

#### 결과

{{ EmbedLiveSample('외곽선_스타일을_auto로_설정하기') }}

### 외곽선 스타일을 `dashed`, `dotted`로 설정하기

#### HTML

```html
<div>
  <div class="dotted">
    <p class="dashed">Outline Demo</p>
  </div>
</div>
```

#### CSS

```css
.dotted {
  outline-style: dotted; /* same result as "outline: dotted" */
}
.dashed {
  outline-style: dashed;
}

/* To make the Demo clearer */
* {
  outline-width: 10px;
  padding: 15px;
}
```

#### 결과

{{ EmbedLiveSample('외곽선_스타일을_dashed_dotted로_설정하기') }}

### 외곽선 스타일을 `solid`, `double`로 설정하기

#### HTML

```html
<div>
  <div class="solid">
    <p class="double">Outline Demo</p>
  </div>
</div>
```

#### CSS

```css
.solid {
  outline-style: solid;
}
.double {
  outline-style: double;
}

/* To make the Demo clearer */
* {
  outline-width: 10px;
  padding: 15px;
}
```

#### 결과

{{ EmbedLiveSample('외곽선_스타일을_solid_double로_설정하기') }}

### 외곽선 스타일을 `groove`, `ridge`로 설정하기

#### HTML

```html
<div>
  <div class="groove">
    <p class="ridge">Outline Demo</p>
  </div>
</div>
```

#### CSS

```css
.groove {
  outline-style: groove;
}
.ridge {
  outline-style: ridge;
}

/* To make the Demo clearer */
* {
  outline-width: 10px;
  padding: 15px;
}
```

#### 결과

{{ EmbedLiveSample('외곽선_스타일을_groove_ridge로_설정하기') }}

### 외곽선 스타일을 inset, outset으로 설정하기

#### HTML

```html
<div>
  <div class="inset">
    <p class="outset">Outline Demo</p>
  </div>
</div>
```

#### CSS

```css
.inset {
  outline-style: inset;
}
.outset {
  outline-style: outset;
}

/* To make the Demo clearer */
* {
  outline-width: 10px;
  padding: 15px;
}
```

#### 결과

{{ EmbedLiveSample('외곽선_스타일을_inset_outset으로_설정하기') }}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
