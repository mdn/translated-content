---
title: tab-size
slug: Web/CSS/tab-size
---

{{CSSRef}}

[CSS](/ko/docs/Web/CSS) **`tab-size`** 속성은 탭 문자(U+0009)의 너비를 조절합니다.

## 구문

```css
/* <integer> 값 */
tab-size: 4;
tab-size: 0;

/* <length> 값 */
tab-size: 10px;
tab-size: 2em;

/* 전역 값 */
tab-size: inherit;
tab-size: initial;
tab-size: unset;
```

### 값

- {{CSSxRef("&lt;integer&gt;")}}
  - : 공백 문자(U+0020)에 대한 탭 문자의 상대적인 너비. 0 이상의 정수여야 합니다.
- {{CSSxRef("&lt;length&gt;")}}
  - : 탭 문자의 너비. 양의 값이어야 합니다.

## 형식 정의

{{CSSInfo}}

## 형식 구문

{{CSSSyntax}}

## 예제

### 글자 수로 정의

```css
pre {
  tab-size: 4; /* Set tab size to 4 characters wide */
}
```

### 탭 제거

```css
pre {
  tab-size: 0; /* Remove indentation */
}
```

### 기본 크기와 비교

다음 예제는 기본 탭 크기를 사용자 지정 탭 크기와 비교합니다. {{cssxref("white-space")}} 속성을 `pre`로 설정해서 탭 문자가 접히지 않도록 했습니다.

#### HTML

```html
<p>no tab</p>
<p>&#0009;default tab size of 8 characters wide</p>
<p class="custom">&#0009;custom tab size of 3 characters wide</p>
<p>&nbsp;&nbsp;&nbsp;3 spaces, equivalent to the custom tab size</p>
```

#### CSS

```css
p {
  white-space: pre;
}

.custom {
  tab-size: 3;
  -moz-tab-size: 3;
}
```

#### 결과

{{EmbedLiveSample('기본_크기와_비교')}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Controlling size of a tab character (U+0009)](https://lists.w3.org/Archives/Public/www-style/2008Dec/0009.html), Anne van Kesteren이 CSSWG에 보낸 이메일.
