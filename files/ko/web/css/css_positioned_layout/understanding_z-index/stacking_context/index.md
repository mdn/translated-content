---
title: 쌓임 맥락
slug: Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context
---

{{CSSRef}}

**쌓임 맥락**(stacking context)은 가상의 Z축을 사용한 HTML 요소의 3차원 개념화입니다. Z축은 사용자 기준이며, 사용자는 뷰포트 혹은 웹페이지를 바라보고 있을 것으로 가정합니다. 각각의 HTML 요소는 자신의 속성에 따른 우선순위를 사용해 3차원 공간을 차지합니다.

## 쌓임 맥락

이전 글 [z-index 사용하기](/ko/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Adding_z-index)에서 보았듯, 특정 요소의 렌더링 순서는 자신의 `z-index` 속성 값에 영향을 받습니다. 이는 그 요소들이 가진 특별한 속성으로 인해 **쌓임 맥락**이 생성되기 때문입니다.

쌓임 맥락은, 문서 어디에서나, 다음 조건을 만족하는 요소가 생성합니다.

- 문서의 루트 요소. (`<html>`)
- {{cssxref("position")}}이 `absolute` 또는 `relative`이고, {{cssxref("z-index")}}가 `auto`가 아닌 요소.
- {{cssxref("position")}}이 `fixed` 또는 `sticky`인 요소. (`sticky`는 모든 모바일 브라우저에서는 해당하지만 구형 데스크톱 브라우저에서는 해당하지 않음)
- 플렉스({{cssxref("flexbox")}}) 컨테이너의 자식 중 {{cssxref("z-index")}}가 `auto`가 아닌 요소.
- 그리드({{cssxref("grid")}}) 컨테이너의 자식 중 {{cssxref("z-index")}}가 `auto`가 아닌 요소.
- {{cssxref("opacity")}}가 1보다 작은 요소. ([불투명도 명세](http://www.w3.org/TR/css3-color/#transparency) 참고)
- {{cssxref("mix-blend-mode")}}가 `normal`이 아닌 요소.
- 다음 속성 중 하나라도 `none`이 아닌 값을 가진 요소.

  - {{cssxref("transform")}}
  - {{cssxref("filter")}}
  - {{cssxref("perspective")}}
  - {{cssxref("clip-path")}}
  - {{cssxref("mask")}} / {{cssxref("mask-image")}} / {{cssxref("mask-border")}}

- {{cssxref("isolation")}}이 `isolate`인 요소.
- {{cssxref("-webkit-overflow-scrolling")}}이 `touch`인 요소.
- {{cssxref("will-change")}}의 값으로, 초깃값이 아닐 때 새로운 쌓임 맥락을 생성하는 속성을 지정한 요소.
- {{cssxref("contain")}}이 `layout`, `paint`, 또는 둘 중 하나를 포함하는 값(`strict`, `content` 등)인 요소.

쌓임 맥락 안의 자식 요소는 이전에 설명했던 규칙을 동일하게 사용해 쌓입니다. 중요한 것은, 자식의 `z-index` 값은 부모에게만 의미가 있다는 점입니다. 하나의 쌓임 맥락은 부모 쌓임 맥락 안에서 통째로 하나의 단위로 간주됩니다.

요약하면,

- 쌓임 맥락이 다른 쌓임 맥락을 포함할 수 있고, 함께 계층 구조를 이룹니다.
- 쌓임 맥락은 형제 쌓임 맥락과 완전히 분리됩니다. 쌓임을 처리할 땐 자손 요소만 고려합니다.
- 각각의 쌓임 맥락은 독립적입니다. 어느 요소의 콘텐츠를 쌓은 후에는 그 요소를 통째 부모 쌓임 맥락 안에 배치합니다.

> **참고:** 모든 요소가 쌓임 맥락을 생성하는 건 아니므로, 쌓임 맥락의 계층 구조는 HTML 요소 계층 구조의 부분집합입니다. 자신의 쌓임 맥락을 만들지 않은 요소는 '부모 쌓임 맥락에 의해 **동화된다**'라고 표현할 수 있겠습니다.

## 예시

![Example of stacking rules modified using z-index](understanding_zindex_04.png)

위의 예시에서, 모든 요소는 각자의 포지션과 `z-index`로 인해 자신의 쌓임 맥락을 형성합니다. 쌓임 맥락의 계층 구조는 다음과 같습니다.

- 루트

  - DIV #1
  - DIV #2
  - DIV #3

    - DIV #4
    - DIV #5
    - DIV #6

DIV #4, DIV #5, DIV #6은 DIV #3의 자식이므로, DIV #3 내부에서만 셋의 쌓임을 처리했다는 것을 이해하는게 중요합니다. DIV #3 내부의 요소의 쌓기와 렌더링이 끝난 후에는, 전체 DIV #3을 루트 요소의 쌓임 맥락 하에서 형제 DIV와 쌓습니다.

> **참고:**
>
> - DIV #4는 DIV #1보다 z-index 속성 값이 더 크지만 DIV #1보다 아래에 렌더링 되었다. 왜냐하면 DIV #1의 z-index 속성 값인 5는 뿌리 엘리먼트의 쌓임 맥락 안에서 유효하나 DIV #4의 z-index 속성 값인 6은 DIV #3의 쌓임 맥락 안에서만 유효하기 때문이다. DIV #4는 자신이 속하는 DIV #3의 z-index 속성 값이 4이므로 DIV #1 아래에 쌓였다.
> - 같은 이유로 DIV #2는 DIV #5 아래에 렌더링 되었다. DIV #5는 DIV #2보다 z-index 값이 작지만 뿌리 엘리먼트의 쌓임 맥락안에서 유효한 DIV #5가 속한 DIV #3의 z-index 값이 DIV #2의 z-index 값 보다 더 크기 때문이다.
> - DIV #3의 z-index 속성 값인 4는 DIV #4, DIV #5, DIV #6의 z-index 속성값과 독립적이다. 왜냐하면 다른 쌓임 맥락에 속해있기 때문이다.
> - 렌더링 순서를 이해하는 쉬운 방법은 z-index를 "버전 번호" 처럼 생각하는 것이다. 자식 엘리먼트는 부모 엘리먼트 버전 번호의 마이너 버전이다. 이 방법은 왜 z-index가 1인 DIV #5가 z-index가 2인 DIV #2 위에 쌓였는지, z-index가 6인 DIV #4가 z-index가 5인 DIV #1 아래에 쌓였는지 이해하게 해준다. 우리 예제에서는
>
>   - 뿌리 엘리먼트
>
>     - DIV #2 - z-index가 2
>     - DIV #3 - z-index가 4
>
>       - DIV #5 - z-index가 1인데 z-index가 4인 엘리먼트 아래에서 쌓였으므로 렌더링 순서는 4.1이다.
>       - DIV #6 - z-index가 3인데 z-index가 4인 엘리먼트 아래에서 쌓였으므로 렌더링 순서는 4.3이다.
>       - DIV #4 - z-index가 6인데 z-index가 4인 엘리먼트 아래에서 쌓였으므로 렌더링 순서는 4.6이다.
>
>     - DIV #1 - z-index가 5

## 예제

### HTML

```html
<div id="div1">
  <h1>Division Element #1</h1>
  <code
    >position: relative;<br />
    z-index: 5;</code
  >
</div>

<div id="div2">
  <h1>Division Element #2</h1>
  <code
    >position: relative;<br />
    z-index: 2;</code
  >
</div>

<div id="div3">
  <div id="div4">
    <h1>Division Element #4</h1>
    <code
      >position: relative;<br />
      z-index: 6;</code
    >
  </div>

  <h1>Division Element #3</h1>
  <code
    >position: absolute;<br />
    z-index: 4;</code
  >

  <div id="div5">
    <h1>Division Element #5</h1>
    <code
      >position: relative;<br />
      z-index: 1;</code
    >
  </div>

  <div id="div6">
    <h1>Division Element #6</h1>
    <code
      >position: absolute;<br />
      z-index: 3;</code
    >
  </div>
</div>
```

### CSS

```css
* {
  margin: 0;
}
html {
  padding: 20px;
  font:
    12px/20px Arial,
    sans-serif;
}
div {
  opacity: 0.7;
  position: relative;
}
h1 {
  font: inherit;
  font-weight: bold;
}
#div1,
#div2 {
  border: 1px dashed #696;
  padding: 10px;
  background-color: #cfc;
}
#div1 {
  z-index: 5;
  margin-bottom: 190px;
}
#div2 {
  z-index: 2;
}
#div3 {
  z-index: 4;
  opacity: 1;
  position: absolute;
  top: 40px;
  left: 180px;
  width: 330px;
  border: 1px dashed #900;
  background-color: #fdd;
  padding: 40px 20px 20px;
}
#div4,
#div5 {
  border: 1px dashed #996;
  background-color: #ffc;
}
#div4 {
  z-index: 6;
  margin-bottom: 15px;
  padding: 25px 10px 5px;
}
#div5 {
  z-index: 1;
  margin-top: 15px;
  padding: 5px 10px;
}
#div6 {
  z-index: 3;
  position: absolute;
  top: 20px;
  left: 180px;
  width: 150px;
  height: 125px;
  border: 1px dashed #009;
  padding-top: 125px;
  background-color: #ddf;
  text-align: center;
}
```

### 결과

{{ EmbedLiveSample('예제', '100%', '396') }}

## 같이 보기

- [Stacking without the z-index property](/ko/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_without_z-index): The stacking rules that apply when `z-index` is not used.
- [Stacking with floated blocks](/ko/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_and_float): How floating elements are handled with stacking.
- [Using z-index](/ko/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Adding_z-index): How to use `z-index` to change default stacking.
- [Stacking context example 1](/ko/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_context_example_1): 2-level HTML hierarchy, `z-index` on the last level
- [Stacking context example 2](/ko/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_context_example_2): 2-level HTML hierarchy, `z-index` on all levels
- [Stacking context example 3](/ko/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_context_example_3): 3-level HTML hierarchy, `z-index` on the second level

## Original Document Information

- Author(s): Paolo Lombardi
- This article is the English translation of an article I wrote in Italian for [YappY](http://www.yappy.it). I grant the right to share all the content under the [Creative Commons: Attribution-Sharealike license](http://creativecommons.org/licenses/by-sa/2.0/).
- Last Updated Date: July 9, 2005
