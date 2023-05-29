---
title: 블록 서식 맥락
slug: Web/Guide/CSS/Block_formatting_context
---

{{ CSSRef }}

**블록 서식 맥락**(block format context)은 웹 페이지를 렌더링하는 시각적 CSS의 일부로서, 블록 박스의 레이아웃이 발생하는 지점과 플로팅 요소의 상호작용 범위를 결정하는 범위입니다.

블록 서식 맥락은 다음과 같은 경우에 생성됩니다.

- 문서의 루트 요소({{htmlelement("html")}}).
- 플로팅 요소({{cssxref("float")}}이 `none`이 아님).
- 절대 위치를 지정한 요소({{cssxref("position")}}이 `absolute` 또는 `fixed`).
- 인라인 블록({{cssxref("display")}}가 `inline-block`).
- 표 칸({{cssxref("display")}}가 `table-cell`, HTML 표 칸의 기본값).
- 표 주석({{cssxref("display")}}가 `table-caption`, HTML 표 주석의 기본값).
- {{cssxref("display")}}가 `table`, `table-row`, `table-row-group`, `table-header-group`, `table-footer-group` (HTML 표에서, 각각 표 전체, 행, 본문, 헤더, 푸터의 기본값) 또는 `inline-table`인 요소가 암시적으로 생성한 무명 칸.
- {{cssxref("overflow")}}가 `visible`이 아닌 블록 요소.
- {{cssxref("display")}}가 `flow-root`.
- {{cssxref("contain")}}이 `layout`, `content`, `paint`.
- 스스로 플렉스, 그리드, 테이블 컨테이너가 아닌 경우의 플렉스 항목({{cssxref("display")}}가 `flex` 또는 `inline-flex`인 요소의 바로 아래 자식)
- 스스로 플렉스, 그리드, 테이블 컨테이너가 아닌 경우의 그리드 항목({{cssxref("display")}}가 `grid` 또는 `inline-grid`인 요소의 바로 아래 자식)
- 다열 컨테이너({{cssxref("column-count")}} 또는 ({{cssxref("column-width")}}가 `auto`가 아닌 경우. `column-count: 1` 포함).
- {{cssxref("column-span")}}이 `all`인 경우. 해당하는 요소가 다열 컨테이너 안에 위치하지 않아도 항상 새로운 블록 서식 맥락을 생성해야 합니다. ([명세 변경](https://github.com/w3c/csswg-drafts/commit/a8634b96900279916bd6c505fda88dda71d8ec51), [Chrome 버그](https://bugs.chromium.org/p/chromium/issues/detail?id=709362))

블록 서식 맥락은 레이아웃에 영향을 주지만, 보통 맥락을 생성하는 요소는 아래와 같은 작용을 하기 때문에 위치 설정과 플로팅 해제를 위해 더 많이 사용합니다.

- 내부 플로팅 가두기
- 외부 플로팅 제외하기
- [여백 상쇄](/ko/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing) 제거

## 예제

### 내부 플로팅 가두기

Make float content and alongside content the same height.

Let's have a look at a couple of these in order to see the effect creating a new BFC.

In the following example, we have a floated element inside a `<div>` with a `border` applied. The content of that `<div>` has floated alongside the floated element. As the content of the float is taller than the content alongside it, the border of the `<div>` now runs through the float. As explained in the [guide to in-flow and out of flow elements](/ko/docs/Web/CSS/CSS_Flow_Layout/In_Flow_and_Out_of_Flow), the float has been taken out of flow so the `background` and `border` of the `<div>` only contain the content and not the float.

**using `overflow: auto`**

Setting `overflow: auto` or set other values than the initial value of `overflow: visible` created a new BFC containing the float. Our `<div>` now becomes a mini-layout inside our layout. Any child element will be contained inside it.

The problem with using `overflow` to create a new BFC is that the `overflow` property is meant for telling the browser how you want to deal with overflowing content. There are some occasions in which you will find you get unwanted scrollbars or clipped shadows when you use this property purely to create a BFC. In addition, it is potentially not readable for a future developer, as it might not be obvious why you used `overflow` for this purpose. If you use `overflow`, it is a good idea to comment the code to explain.

**using `display: flow-root`**

A newer value of `display` lets us create a new BFC without any other potentially problematic side-effects. Using `display: flow-root` on the containing block creates a new BFC .

With `display: flow-root;` on the `<div>`, everything inside that container participates in the block formatting context of that container, and floats will not poke out of the bottom of the element.

The value name of `flow-root` makes sense when you understand you are creating something that acts like the `root` element (`<html>` element in browser) in terms of how it creates a new context for the flow layout inside it.

#### HTML

```html
<section>
    <div class="box">
        <div class="float">I am a floated box!</div>
        <p>I am content inside the container.</p>
    </div>
</section>
<section>
    <div class="box" style="overflow:auto">
        <div class="float">I am a floated box!</div>
        <p>I am content inside the <code>overflow:auto</code> container.</p>
    </div>
</section>
<section>
    <div class="box" style="display:flow-root">
        <div class="float">I am a floated box!</div>
        <p>I am content inside the <code>display:flow-root</code> container.</p>
    </div>
</section>
```

#### CSS

```css
section {
    height:150px;
}
.box {
    background-color: rgb(224, 206, 247);
    border: 5px solid rebeccapurple;
}
.box[style] {
    background-color: aliceblue;
    border: 5px solid steelblue;
}
.float {
    float: left;
    width: 200px;
    height: 100px;
    background-color: rgba(255, 255, 255, .5);
    border:1px solid black;
    padding: 10px;
}
```

{{EmbedLiveSample("example1", 200, 450)}}

### Exclude external floats

In the following example, we are using `display:flow-root` and floats to implement double columns layout, beacuse an element in the normal flow that establishes a new BFC must not overlap the margin box of any floats in the same block formatting context as the element itself.

#### HTML

```html
<section>
  <div class="float">Try to resize this outer float</div>
  <div class="box"><p>Normal</p></div>
</section>
<section>
  <div class="float">Try to resize this outer float</div>
  <div class="box" style="display:flow-root"><p><code>display:flow-root</code><p></div>
</section>
```

#### CSS

```css
section {
    height:150px;
}
.box {
    background-color: rgb(224, 206, 247);
    border: 5px solid rebeccapurple;
}
.box[style] {
    background-color: aliceblue;
    border: 5px solid steelblue;
}
.float {
    float: left;
    overflow: hidden; /* required by resize:both */
    resize: both;
    margin-right:25px;
    width: 200px;
    height: 100px;
    background-color: rgba(255, 255, 255, .75);
    border: 1px solid black;
    padding: 10px;
}
```

{{EmbedLiveSample("example2", 200, 300)}}

Rather than inline-blocks with width:\<percentage>, in this case we don't have to specify the width of the right div.

Note that flexbox is a more efficient way to implement muti columns layout in morden CSS.

### 여백 상쇄

Creating a new BFC to avoid the [margin collapsing](/ko/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing) between two neighbor div:

#### HTML

```html
<div class="blue"></div>
<div class="red-outer">
  <div class="red-inner">red inner</div>
</div>
```

#### CSS

```css
.blue, .red-inner {
  height: 50px;
  margin: 10px 0;
}

.blue {
  background: blue;
}

.red-outer {
  overflow: hidden;
  background: red;
}
```

{{EmbedLiveSample("여백_상쇄", 120, 120)}}

## 같이 보기

- {{ cssxref("float") }}, {{ cssxref("clear") }}
