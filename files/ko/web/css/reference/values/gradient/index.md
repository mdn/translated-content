---
title: <gradient>
slug: Web/CSS/Reference/Values/gradient
original_slug: Web/CSS/gradient
---

**`<gradient>`** [CSS](/ko/docs/Web/CSS) [자료형](/ko/docs/Web/CSS/CSS_values_and_units/CSS_data_types)은 {{cssxref("&lt;image&gt;")}}의 특별한 종류로 여러 색의 점진적인 변화를 나타냅니다.

{{InteractiveExample("CSS Demo: &lt;gradient&gt;")}}

```css interactive-example-choice
background: linear-gradient(#f69d3c, #3f87a6);
```

```css interactive-example-choice
background: radial-gradient(#f69d3c, #3f87a6);
```

```css interactive-example-choice
background: repeating-linear-gradient(#f69d3c, #3f87a6 50px);
```

```css interactive-example-choice
background: repeating-radial-gradient(#f69d3c, #3f87a6 50px);
```

```css interactive-example-choice
background: conic-gradient(#f69d3c, #3f87a6);
```

```html interactive-example
<section class="display-block" id="default-example">
  <div id="example-element"></div>
</section>
```

```css interactive-example
#example-element {
  min-height: 100%;
}
```

CSS 그레이디언트는 [원본 크기가 없습니다](/ko/docs/Web/CSS/image#no_intrinsic). 즉 실제 크기나 선호 크기가 없습니다. 그레이디언트의 크기는 적용하는 요소의 크기와 동일해집니다.

## 구문

### 그레이디언트 함수

`<gradient>` 자료형은 아래 나열한 함수 중 하나를 사용해 생성합니다.

#### 선형 그레이디언트

가상의 선을 따라 여러 색 사이를 전이합니다. {{cssxref("linear-gradient()")}} 함수를 사용해 생성합니다.

```html hidden
<div class="linear-gradient">선형 그레이디언트</div>
```

```css hidden
div {
  width: 240px;
  height: 80px;
}
```

```css
.linear-gradient {
  background: linear-gradient(
    to right,
    red,
    orange,
    yellow,
    green,
    blue,
    indigo,
    violet
  );
}
```

{{EmbedLiveSample('선형_그레이디언트', 240, 80)}}

#### 원형 그레이디언트

중심점으로부터 바깥으로 여러 색 사이를 전이합니다. {{cssxref("radial-gradient()")}} 함수를 사용해 생성합니다.

```html hidden
<div class="radial-gradient">원형 그레이디언트</div>
```

```css hidden
div {
  width: 240px;
  height: 80px;
}
```

```css
.radial-gradient {
  background: radial-gradient(red, yellow, rgb(30, 144, 255));
}
```

{{EmbedLiveSample('원형_그레이디언트', 240, 80)}}

#### 반복 그레이디언트

요소를 꽉 채울 때까지 그레이디언트를 필요한 만큼 반복합니다. {{cssxref("repeating-linear-gradient()")}}나 {{cssxref("repeating-radial-gradient()")}} 함수를 사용해 생성합니다.

```html hidden
<div class="linear-repeat">반복하는 선형 그레이디언트</div>
<br />
<div class="radial-repeat">반복하는 원형 그레이디언트</div>
```

```css hidden
div {
  width: 240px;
  height: 80px;
}
```

```css
.linear-repeat {
  background: repeating-linear-gradient(
    to top left,
    lightpink,
    lightpink 5px,
    white 5px,
    white 10px
  );
}

.radial-repeat {
  background: repeating-radial-gradient(
    powderblue,
    powderblue 8px,
    white 8px,
    white 16px
  );
}
```

{{EmbedLiveSample('반복_그레이디언트', 220, 180)}}

#### 원뿔 그레이디언트

원을 따라 여러 색 사이를 전이합니다. {{cssxref("conic-gradient", "conic-gradient()")}} 함수를 사용해 생성합니다.

```html hidden
<div class="conic-gradient">원뿔 그레이디언트</div>
```

```css hidden
div {
  width: 200px;
  height: 200px;
}
```

```css
.conic-gradient {
  background: conic-gradient(lightpink, white, powderblue);
}
```

{{EmbedLiveSample('원뿔_그레이디언트', 240, 80)}}

## 보간

색과 관련한 다른 보간과 마찬가지로, 그레이디언트도 색과 투명도가 동시에 변할 때 예상하지 못한 회색이 등장하는걸 방지하기 위해 알파 채널을 미리 곱한 색 공간을 사용해 계산합니다. 오래 된 브라우저에서 {{cssxref("&lt;color&gt;", "", "#transparent_키워드")}} 키워드를 사용할 땐 다르게 행동할 수 있음을 주의하세요.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [CSS 그레이디언트 사용하기](/ko/docs/Web/CSS/CSS_images/Using_CSS_gradients)
- 그레이디언트 함수: {{cssxref("linear-gradient", "linear-gradient()")}}, {{cssxref("radial-gradient", "radial-gradient()")}}, {{cssxref("repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("repeating-radial-gradient", "repeating-radial-gradient()")}}
