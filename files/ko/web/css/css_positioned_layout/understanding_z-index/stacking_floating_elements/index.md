---
title: floating 엘리먼트의 쌓임
slug: Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_floating_elements
---

{{CSSRef}}

« [CSS](/ko/docs/Web/CSS) « [CSS z-index 이해하기](/ko/docs/Web/CSS/CSS_Positioning/Understanding_z_index)

### floating 엘리먼트의 쌓임

floating 엘리먼트들의 쌓임 순서는 약간 다르다. floating 엘리먼트들은 position이 지정된 블록과 지정되지 않은 블록 사이에 쌓인다.

1. 뿌리 엘리먼트의 배경과 테두리
2. 자식 엘리먼트들은 HTML에서 등장하는 순서대로
3. floating 엘리먼트
4. position이 지정된 자식 엘리먼트들은 HTML에서 등장하는 순서대로

사실 다음 예제에서 보는 것처럼 position이 지정되지 않은 엘리먼트(DIV #4)의 배경과 테두리는 floating 엘리먼트들에 의해 영향을 받지 않는다. 반면 컨텐츠는 영향을 받는다. 이것은 CSS 표준 float 명세에 따른 것이다.

위의 규칙 리스트를 수정하여 이 명세를 포함시켜보자.

1. 뿌리 엘리먼트의 배경과 테두리
2. 자식 엘리먼트들은 HTML에서 등장하는 순서대로
3. floating 엘리먼트
4. inline 자식 엘리먼트는 보통의 흐름대로
5. position이 지정된 자식 엘리먼트들은 HTML에서 등장하는 순서대로

> **참고:** **노트:** 아래 예제에서 position이 지정되지 않은 엘리먼트 이외에는 모든 엘리먼트가 쌓임 순서를 보여주기 위해 반투명하게 설정되었다. 만약 position이 지정되지 않은 엘리먼트 (DIV #4)의 투명도를 낮추면 이상한 일이 일어난다. 배경과 테두리가 (원래에는 floating 엘리먼트 아래에 있어야 함에도 불구하고) floating 엘리먼트와 position이 지정된 엘리먼트 사이에 보이는 것이다. 이것이 명세의 일부인지 아니면 버그인지 확실하지 않다. 투명도를 적용하는것이 새로운 쌓임 맥락(stacking context)를 만드는 것일까?

## 예제

### HTML

```html
<div id="abs1"><strong>DIV #1</strong><br />position: absolute;</div>

<div id="flo1"><strong>DIV #2</strong><br />float: left;</div>

<div id="flo2"><strong>DIV #3</strong><br />float: right;</div>

<br />

<div id="sta1"><strong>DIV #4</strong><br />no positioning</div>

<div id="abs2"><strong>DIV #5</strong><br />position: absolute;</div>

<div id="rel1"><strong>DIV #6</strong><br />position: relative;</div>
```

### CSS

```css
div {
  padding: 10px;
  text-align: center;
}

strong {
  font-family: sans-serif;
}

#abs1 {
  position: absolute;
  width: 150px;
  height: 200px;
  top: 10px;
  right: 140px;
  border: 1px dashed #900;
  background-color: #fdd;
}

#sta1 {
  height: 100px;
  border: 1px dashed #996;
  background-color: #ffc;
  margin: 0px 10px 0px 10px;
  text-align: left;
}

#flo1 {
  margin: 0px 10px 0px 20px;
  float: left;
  width: 150px;
  height: 200px;
  border: 1px dashed #090;
  background-color: #cfc;
}

#flo2 {
  margin: 0px 20px 0px 10px;
  float: right;
  width: 150px;
  height: 200px;
  border: 1px dashed #090;
  background-color: #cfc;
}

#abs2 {
  position: absolute;
  width: 150px;
  height: 100px;
  top: 80px;
  left: 100px;
  border: 1px dashed #990;
  background-color: #fdd;
}

#rel1 {
  position: relative;
  border: 1px dashed #996;
  background-color: #cff;
  margin: 0px 10px 0px 10px;
  text-align: left;
}
```

## 결과

{{EmbedLiveSample("예제", 600, 250)}}

### See also

- [Stacking without z-index](/ko/CSS/Understanding_z-index/Stacking_without_z-index) : Default stacking rules
- [Adding z-index](/ko/CSS/Understanding_z-index/Adding_z-index) : Using z-index to change default stacking
- [The stacking context](/ko/CSS/Understanding_z-index/The_stacking_context) : Notes on the stacking context
- [Stacking context example 1](/ko/CSS/Understanding_z-index/Stacking_context_example_1) : 2-level HTML hierarchy, z-index on the last level
- [Stacking context example 2](/ko/CSS/Understanding_z-index/Stacking_context_example_2) : 2-level HTML hierarchy, z-index on all levels
- [Stacking context example 3](/ko/CSS/Understanding_z-index/Stacking_context_example_3) : 3-level HTML hierarchy, z-index on the second level

### Original Document Information

- Author(s): Paolo Lombardi
- This article is the english translation of an article I wrote in italian for [YappY](https://www.yappy.it). I grant the right to share all the content under [Creative Commons: Attribution-Sharealike license](https://creativecommons.org/licenses/by-sa/2.0/)
- Last Updated Date: July 9th, 2005
