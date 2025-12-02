---
title: background-origin
slug: Web/CSS/Reference/Properties/background-origin
original_slug: Web/CSS/background-origin
---

[CSS](/ko/docs/Web/CSS) **`background-origin`** 속성은 배경의 원점을 테두리 시작점, 테두리 내부, 안쪽 여백 내부 중 하나로 지정합니다.

{{InteractiveExample("CSS Demo: background-origin")}}

```css interactive-example-choice
background-origin: border-box;
background-repeat: no-repeat;
```

```css interactive-example-choice
background-origin: padding-box;
background-repeat: no-repeat;
```

```css interactive-example-choice
background-origin: content-box;
background-repeat: no-repeat;
```

```html interactive-example
<section id="default-example">
  <div id="example-element">This is the content of the element.</div>
</section>
```

```css interactive-example
#example-element {
  background-image: url("/shared-assets/images/examples/leopard.jpg");
  color: #d73611;
  text-shadow: 2px 2px black;
  padding: 20px;
  border: 10px dashed #333;
  font-size: 2em;
  font-weight: bold;
}
```

{{cssxref("background-attachment")}}가 `fixed`인 경우 `background-origin`은 무시됩니다.

## 구문

```css
/* 키워드 값 */
background-origin: border-box;
background-origin: padding-box;
background-origin: content-box;

/* 전역 값 */
background-origin: inherit;
background-origin: initial;
background-origin: unset;
```

`background-origin` 속성은 다음 목록의 키워드 중 하나를 선택해 지정할 수 있습니다.

### 값

- `border-box`
  - : 배경을 테두리 박스에 상대적으로 배치합니다.
- `padding-box`
  - : 배경을 안쪽 여백 박스에 상대적으로 배치합니다.
- `content-box`
  - : 배경을 콘텐츠 박스에 상대적으로 배치합니다.

## 형식 정의

{{cssinfo}}

## 형식 구문

{{csssyntax}}

## 예제

### 배경 원점 설정하기

```css
.example {
  border: 10px double;
  padding: 10px;
  background: url("image.jpg");
  background-position: center left;
  background-origin: content-box;
}
```

```css
#example2 {
  border: 4px solid black;
  padding: 10px;
  background: url("image.gif");
  background-repeat: no-repeat;
  background-origin: border-box;
}
```

```css
div {
  background-image:
    url("logo.jpg"), url("mainback.png"); /* Applies two images to the background */
  background-position:
    top right,
    0px 0px;
  background-origin: content-box, padding-box;
}
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{cssxref("background-clip")}}
