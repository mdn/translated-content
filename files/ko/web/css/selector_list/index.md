---
title: 선택자 목록
slug: Web/CSS/Selector_list
---

{{CSSRef}}

[CSS](/ko/docs/Web/CSS) **선택자 목록**(`,`)은 일치하는 모든 요소를 선택합니다.

```css
/* 모든 span과 div 요소 선택 */
span,
div {
  border: red 2px solid;
}
```

다수의 선택자를 쉼표 구분 목록에 넣어 스타일 시트 크기를 줄일 수 있습니다.

## 구문

```
element, element, element { style properties }
```

## 예제

### 한 줄 묶기

쉼표로 구분한 목록을 한 줄에 배치할 수 있습니다.

```css
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: helvetica;
}
```

### 여러 줄 묶기

쉼표로 구분한 목록을 여러 줄에 배치할 수도 있습니다.

```css
#main,
.content,
article {
  font-size: 1.1em;
}
```

### 선택자 목록 무효화

선택자 목록의 단점은, 다음의 두 경우가 서로 같지 않다는 점입니다.

```css
h1 {
  font-family: sans-serif;
}
h2:maybe-unsupported {
  font-family: sans-serif;
}
h3 {
  font-family: sans-serif;
}
```

```css
h1,
h2:maybe-unsupported,
h3 {
  font-family: sans-serif;
}
```

왜냐하면 목록 내의 하나의 선택자라도 브라우저가 지원하지 않으면 전체 목록을 무효화하기 때문입니다.

대응 방법은 {{CSSxRef(":is", ":is()")}} 선택자를 사용하는 것을 통해, 유효하지 않은 선택자를 무시하는 것입니다. 그러나 `:is()`가 명시도를 계산하는 방법으로 인해, 모든 선택자가 동일한 명시도를 갖게 되는 부작용이 있습니다.

```css
h1 {
  font-family: sans-serif;
}
h2:maybe-unsupported {
  font-family: sans-serif;
}
h3 {
  font-family: sans-serif;
}
```

```css
:is(h1, h2:maybe-unsupported, h3) {
  font-family: sans-serif;
}
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 선택자 목록 무효화라는 과거의 실수를 가지지 않는 {{CSSxRef(":is", ":is()")}} {{Experimental_Inline}}, {{CSSxRef(":where", ":where()")}} {{Experimental_Inline}} 의사 클래스.
