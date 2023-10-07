---
title: z-index가 없는 경우의 쌓임
slug: Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_without_z-index
---

{{CSSRef}}

« [CSS](/ko/CSS) « [CSS z-index 이해하기](/ko/CSS/Understanding_z-index)

### z-index가 없는 경우의 쌓임

만약 모든 엘리먼트들에 z-index가 지정되지 않았을 경우에는 엘리먼트들이 다음 순서로 아래에서부터 위로 쌓인다.

1. 뿌리 엘리먼트의 배경과 테두리
2. 자식 엘리먼트들은 HTML에서 등장하는 순서대로
3. position이 지정된 자식 엘리먼트들은 HTML에서 등장하는 순서대로

다음 예제에는 위의 쌓임 규칙을 설명하기 위한 적당한 크기의 엘리먼트들이 준비되어있다.

> **참고:** **노트:**
>
> - 주어진 동일한 엘리먼트들의 그룹은 모두 z-index가 설정되지 않았다. DIV #1 부터 DIV #4 까지는 position 속성이 설정되었다. 엘리먼트의 position속성 값과는 상관 없이 HTML 계층 구조대로 쌓임을 알 수 있다.
> - position 속성이 지정되지 않은 블록(DIV #5)은 항상 position이 지정된 엘리먼트 이전에 렌더링 된다. 따라서 position이 지정된 엘리먼트 아래에 보인다. 설령 HTML 문서상에서 먼저 나오더라도 position이 지정되지 않은 엘리먼트는 지정된 엘리먼트보다 아래에 보인다.

## 예제

### HTML

```html
<div id="abs1" class="absolute">
  <strong>DIV #1</strong><br />position: absolute;
</div>
<div id="rel1" class="relative">
  <strong>DIV #2</strong><br />position: relative;
</div>
<div id="rel2" class="relative">
  <strong>DIV #3</strong><br />position: relative;
</div>
<div id="abs2" class="absolute">
  <strong>DIV #4</strong><br />position: absolute;
</div>
<div id="sta1" class="static">
  <strong>DIV #5</strong><br />position: static;
</div>
```

### CSS

```css
strong {
  font-family: sans-serif;
}

div {
  padding: 10px;
  border: 1px dashed;
  text-align: center;
}

.static {
  position: static;
  height: 80px;
  background-color: #ffc;
  border-color: #996;
}

.absolute {
  position: absolute;
  width: 150px;
  height: 350px;
  background-color: #fdd;
  border-color: #900;
  opacity: 0.7;
}

.relative {
  position: relative;
  height: 80px;
  background-color: #cfc;
  border-color: #696;
  opacity: 0.7;
}

#abs1 {
  top: 10px;
  left: 10px;
}

#rel1 {
  top: 30px;
  margin: 0px 50px 0px 50px;
}

#rel2 {
  top: 15px;
  left: 20px;
  margin: 0px 50px 0px 50px;
}

#abs2 {
  top: 10px;
  right: 10px;
}

#sta1 {
  background-color: #ffc;
  margin: 0px 50px 0px 50px;
}
```

## 결과

{{EmbedLiveSample("예제", 600, 400)}}

### See also

- [Stacking and float](/en/CSS/Understanding_z-index/Stacking_and_float) : How floating elements are handled
- [Adding z-index](/en/CSS/Understanding_z-index/Adding_z-index) : Using z-index to change default stacking
- [The stacking context](/en/CSS/Understanding_z-index/The_stacking_context) : Notes on the stacking context
- [Stacking context example 1](/en/CSS/Understanding_z-index/Stacking_context_example_1) : 2-level HTML hierarchy, z-index on the last level
- [Stacking context example 2](/en/CSS/Understanding_z-index/Stacking_context_example_2) : 2-level HTML hierarchy, z-index on all levels
- [Stacking context example 3](/en/CSS/Understanding_z-index/Stacking_context_example_3) : 3-level HTML hierarchy, z-index on the second level

### Original Document Information

- Author(s): Paolo Lombardi
- This article is the english translation of an article I wrote in italian for [YappY](http://www.yappy.it). I grant the right to share all the content under [Creative Commons: Attribution-Sharealike license](http://creativecommons.org/licenses/by-sa/2.0/)
- Last Updated Date: July 9th, 2005
