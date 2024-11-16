---
title: 쌓임 맥락 예제 1
slug: Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context_example_1
---

{{CSSRef}}

« [CSS](/ko/CSS) « [CSS z-index 이해하기](/ko/CSS/Understanding_z-index)

### 쌓임 맥락 예제1

기본 예제부터 시작하자. 쌓임 맥락의 뿌리에는 두개의 DIV #1과 DIV #3가 있다. 두 DIV는 모두 position 속성 값이 relative로 지정되었지만 z-index 속성 값은 지정되지 않았다. DIV #1 안에는 position 속성 값이 absolute로 지정된 DIV #2가 있고 DIV #3 안에도 position 속성 값이 absolute가 지정된 DIV #4가 있다. DIV #2와ㅏ DIV #4 모두 z-index 속성 값은 지정되지 않았다.

유일한 쌓임 맥락은 뿌리 엘리먼트다. z-index가 없는 엘리먼트들은 HTML 문서에서 등장 순서대로 쌓인다.

![쌓임 맥락 예제 1](understanding_zindex_05a.png)

DIV #2의 z-index 속성 값을 0또는 auto가 아닌 양의 정수로 지정하면 다른 DIV들 보다 위에 렌더링된다.

![쌓임 맥락 예제 1](understanding_zindex_05b.png)

DIV #4의 z-index 속성 값을 DIV #2의 z-index 속성 값보다 큰 값으로 지정하면 DIV #4는 DIV #2보다 위에 렌더링된다.

![Stacking context example 1](understanding_zindex_05c.png)

마지막 예제에서 DIV #2와 DIV #4는 형제가 아니다. 왜냐하면 둘의 부모가 다르기 때문이다. 그럼에도 불구하고 DIV #2와 DIV #4의 쌓임 순서를 z-index 속성 값을 지정함으로써 바꿀 수 있었다. 왜냐하면 DIV #1과 DIV #3은 z-index 속성 값이 지정되지 않았고 따라서 쌓임 맥락을 만들지 않았기 때문이다. 따라서 DIV #2와 DIV #4는 둘 다 뿌리 엘리먼트의 쌓임 맥락에 속해있고, z-index 속성 값을 변경하여 쌓임 순서를 바꿀 수 있다.

쌓임 맥락의 용어로 설명하자면 DIV #1과 DIV #3은 뿌리 엘리먼트에 _동화되었다._ 이 예제의 DIV들은 다음과 같은 쌓임 맥락 계층 구조를 이룬다.

- 뿌리 쌓임 맥락

  - DIV #2 (z-index 1)
  - DIV #4 (z-index 2)

> [!NOTE]
> DIV #1과 DIV #3은 투명하지 않다. 투명도를 1보다 적은 값으로 지정하게 되면 내부적으로 쌓임 맥락을 만든다는걸 기억하자. 이건 마치 z-index 값을 설정한 것과 비슷하다. 이 예제는 부모 엘리먼트들이 쌓임 맥락을 형성하지 않을 때 어떤 일이 일어나는지 보여준다.

## 예제

### HTML

```html
<div id="div1">
  <br /><span class="bold">DIV #1</span> <br />position: relative;
  <div id="div2">
    <br /><span class="bold">DIV #2</span> <br />position: absolute;
    <br />z-index: 1;
  </div>
</div>

<br />

<div id="div3">
  <br /><span class="bold">DIV #3</span> <br />position: relative;
  <div id="div4">
    <br /><span class="bold">DIV #4</span> <br />position: absolute;
    <br />z-index: 2;
  </div>
</div>
```

### CSS

```css
.bold {
  font-family: Arial;
  font-size: 12px;
  font-weight: bold;
}

#div1,
#div3 {
  height: 80px;
  position: relative;
  border: 1px dashed #669966;
  background-color: #ccffcc;
  padding-left: 5px;
}

#div2 {
  opacity: 0.8;
  z-index: 1;
  position: absolute;
  width: 150px;
  height: 200px;
  top: 20px;
  left: 170px;
  border: 1px dashed #990000;
  background-color: #ffdddd;
  text-align: center;
}

#div4 {
  opacity: 0.8;
  z-index: 2;
  position: absolute;
  width: 200px;
  height: 80px;
  top: 65px;
  left: 50px;
  border: 1px dashed #000099;
  background-color: #ddddff;
  text-align: left;
  padding-left: 10px;
}
```

## 결과

{{ EmbedLiveSample('예제', '', '300') }}

### See also

- [Stacking without z-index](/en/CSS/Understanding_z-index/Stacking_without_z-index) : Default stacking rules
- [Stacking and float](/en/CSS/Understanding_z-index/Stacking_and_float) : How floating elements are handled
- [Adding z-index](/en/CSS/Understanding_z-index/Adding_z-index) : Using z-index to change default stacking
- [The stacking context](/en/CSS/Understanding_z-index/The_stacking_context) : Notes on the stacking context
- [Stacking context example 2](/en/CSS/Understanding_z-index/Stacking_context_example_2) : 2-level HTML hierarchy, z-index on all levels
- [Stacking context example 3](/en/CSS/Understanding_z-index/Stacking_context_example_3) : 3-level HTML hierarchy, z-index on the second level

### Original Document Information

- Author(s): Paolo Lombardi
- This article is the english translation of an article I wrote in italian for [YappY](http://www.yappy.it). I grant the right to share all the content under [Creative Commons: Attribution-Sharealike license](http://creativecommons.org/licenses/by-sa/2.0/)
- Last Updated Date: July 9th, 2005
