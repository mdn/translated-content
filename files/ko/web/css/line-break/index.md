---
title: line-break
slug: Web/CSS/line-break
---

{{CSSRef}}

[CSS](/ko/docs/Web/CSS) **`line-break`** 속성은 한중일(CJK) 3개국어의 텍스트 줄을 어디서 바꿀지 지정합니다.

```css
/* 키워드 값 */
line-break: auto;
line-break: loose;
line-break: normal;
line-break: strict;
line-break: anywhere;

/* 전역 값 */
line-break: inherit;
line-break: initial;
line-break: unset;
```

## 구문

### 값

- `auto`
  - : 기본 줄 바꿈 규칙을 사용합니다.
- `loose`
  - : 가장 자유로운 줄 바꿈 규칙을 사용합니다. 보통 신문 등 짧은 줄에서 사용합니다.
- `normal`
  - : 가장 흔한 줄 바꿈 규칙을 사용합니다.
- `strict`
  - : 가장 엄격한 줄 바꿈 규칙을 사용합니다.
- `anywhere`
  - : 모든 타이포그래피 글자 단위 주위에서 줄을 바꿀 수 있습니다. 줄 바꿈 위치는 모든 문장 부호, 공백, 단어 중간을 포함하며 GL, WJ, ZWJ 문자 클래스가 나타내는 줄 바꿈 제한 및 {{cssxref("word-break")}}가 요구하는 규칙 모두 무시할 수 있습니다. 붙임표는 사용하지 않습니다.

## 형식 정의

{{cssinfo}}

## 형식 구문

{{csssyntax}}

## 예제

### 줄 바꿈 지정하기

줄 바꿈이 "々", "ぁ", "。"의 주위에서 어떻게 발생하는지 살펴보세요.

#### HTML

```html
<div lang="ja">
  <p class="wrapbox auto">
    auto:<br />そこは湖のほとりで木々が輝いていた。<br />その景色に、美しいなぁと思わずつぶやいた。
  </p>
  <p class="wrapbox loose">
    loose:<br />そこは湖のほとりで木々が輝いていた。<br />その景色に、美しいなぁと思わずつぶやいた。
  </p>
  <p class="wrapbox normal">
    normal:<br />そこは湖のほとりで木々が輝いていた。<br />その景色に、美しいなぁと思わずつぶやいた。
  </p>
  <p class="wrapbox strict">
    strict:<br />そこは湖のほとりで木々が輝いていた。<br />その景色に、美しいなぁと思わずつぶやいた。
  </p>
  <p class="wrapbox anywhere">
    anywhere:<br />そこは湖のほとりで木々が輝いていた。<br />その景色に、美しいなぁと思わずつぶやいた。
  </p>
</div>
```

#### CSS

```css
.wrapbox {
  width: 10em;
  margin: 0.5em;
  white-space: normal;
  vertical-align: top;
  display: inline-block;
}
.auto {
  line-break: auto;
}
.loose {
  line-break: loose;
}
.normal {
  line-break: normal;
}
.strict {
  line-break: strict;
}
.anywhere {
  line-break: anywhere;
}
```

#### 결과

{{ EmbedLiveSample('줄_바꿈_지정하기', 200, 400) }}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
