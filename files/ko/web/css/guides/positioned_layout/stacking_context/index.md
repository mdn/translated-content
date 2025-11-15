---
title: 쌓임 맥락
slug: Web/CSS/Guides/Positioned_layout/Stacking_context
original_slug: Web/CSS/CSS_positioned_layout/Stacking_context
l10n:
  sourceCommit: 9a06522ff323403f707ddad2cb45e27b53cee41e
---

**쌓임 맥락**(stacking context)은 가상의 Z축을 사용한 HTML 요소의 3차원 개념화입니다. Z축은 사용자 기준이며, 사용자는 뷰포트 혹은 웹페이지를 바라보고 있을 것으로 가정합니다. 각각의 HTML 요소는 자신의 속성에 따른 우선순위를 사용해 3차원 공간을 차지합니다.

## 설명

이전 글 [z-index 사용하기](/ko/docs/Web/CSS/CSS_positioned_layout/Using_z-index)에서 보았듯, 특정 요소의 렌더링 순서는 자신의 `z-index` 속성 값에 영향을 받습니다. 이는 그 요소들이 가진 특별한 속성으로 인해 **쌓임 맥락**이 생성되기 때문입니다.

쌓임 맥락은, 문서 어디에서나, 다음 조건을 만족하는 요소가 생성합니다.

- 문서의 루트 요소. (`<html>`)
- {{cssxref("position")}}이 `absolute` 또는 `relative`이고, {{cssxref("z-index")}}가 `auto`가 아닌 요소.
- {{cssxref("position")}}이 `fixed` 또는 `sticky`인 요소. (`sticky`는 모든 모바일 브라우저에서는 해당하지만 구형 데스크톱 브라우저에서는 해당하지 않음)
- [container queries](/ko/docs/Web/CSS/CSS_containment/Container_queries)를 위한 {{cssxref("container-type")}}이 `size` 또는 `inline-size`인 요소.
- 플렉스({{cssxref("flexbox")}}) 컨테이너의 자식 중 {{cssxref("z-index")}}가 `auto`가 아닌 요소.
- 그리드({{cssxref("grid")}}) 컨테이너의 자식 중 {{cssxref("z-index")}}가 `auto`가 아닌 요소.
- {{cssxref("opacity")}}가 1보다 작은 요소. ([불투명도 명세](https://www.w3.org/TR/css3-color/#transparency) 참고)
- {{cssxref("mix-blend-mode")}}가 `normal`이 아닌 요소.
- 다음 속성 중 하나라도 `none`이 아닌 값을 가진 요소.
  - {{cssxref("transform")}}
  - {{cssxref("filter")}}
  - {{cssxref("backdrop-filter")}}
  - {{cssxref("perspective")}}
  - {{cssxref("clip-path")}}
  - {{cssxref("mask")}} / {{cssxref("mask-image")}} / {{cssxref("mask-border")}}

- {{cssxref("isolation")}}이 `isolate`인 요소.
- {{cssxref("will-change")}}의 값으로, 초깃값이 아닐 때 새로운 쌓임 맥락을 생성하는 속성을 지정한 요소.
- {{cssxref("contain")}}이 `layout`, `paint`, 또는 둘 중 하나를 포함하는 값(`strict`, `content` 등)인 요소.
- [top layer](/ko/docs/Glossary/Top_layer)에 배치된 요소와 이에 상응하는 {{cssxref("::backdrop")}}. [fullscreen](/ko/docs/Web/API/Fullscreen_API) 및 [popover](/ko/docs/Web/API/Popover_API) 요소들을 예로 들 수 있습니다.

쌓임 맥락 안의 자식 요소는 이전에 설명했던 규칙을 동일하게 사용해 쌓입니다. 중요한 것은, 자식의 `z-index` 값은 부모에게만 의미가 있다는 점입니다. 하나의 쌓임 맥락은 부모 쌓임 맥락 안에서 통째로 하나의 단위로 간주됩니다.

요약하면,

- 쌓임 맥락이 다른 쌓임 맥락을 포함할 수 있고, 함께 계층 구조를 이룹니다.
- 쌓임 맥락은 형제 쌓임 맥락과 완전히 분리됩니다. 쌓임을 처리할 땐 자손 요소만 고려합니다.
- 각각의 쌓임 맥락은 독립적입니다. 어느 요소의 콘텐츠를 쌓은 후에는 그 요소를 통째 부모 쌓임 맥락 안에 배치합니다.

> [!NOTE]
> 모든 요소가 쌓임 맥락을 생성하는 건 아니므로, 쌓임 맥락의 계층 구조는 HTML 요소 계층 구조의 부분집합입니다. 자신의 쌓임 맥락을 만들지 않은 요소는 '부모 쌓임 맥락에 의해 **동화된다**'라고 표현할 수 있겠습니다.

## 예제

![Example of stacking rules modified using z-index](understanding_zindex_04.png)

위의 예시에서, 모든 요소는 각자의 포지션과 `z-index`로 인해 자신의 쌓임 맥락을 형성합니다. 쌓임 맥락의 계층 구조는 다음과 같습니다.

- 루트
  - DIV #1
  - DIV #2
  - DIV #3
    - DIV #4
    - DIV #5
    - DIV #6

DIV #4, DIV #5, DIV #6은 DIV #3의 자식이므로, DIV #3 내부에서만 셋의 쌓임을 처리했다는 것을 이해하는 게 중요합니다. DIV #3 내부의 요소의 쌓기와 렌더링이 끝난 후에는, 전체 DIV #3을 루트 요소의 쌓임 맥락 아래에서 형제 DIV와 쌓습니다.

DIV #4는 DIV #1보다 z-index 속성값이 더 크지만, DIV #1보다 아래에 렌더링 되었습니다. 왜냐하면 DIV #1의 z-index 속성값인 5는 루트 요소의 쌓임 맥락 안에서 유효하나 DIV #4의 z-index 속성값인 6은 DIV #3의 쌓임 맥락 안에서만 유효하기 때문입니다. 그러므로, DIV #4는 더 낮은 z-index 속성값을 갖는 DIV #3에 속하게 되어 DIV #1 아래에 위치합니다.

같은 이유로 DIV #2 (`z-index`: 2)는 DIV #5 (`z-index`: 1) 아래에 렌더링 되었습니다. DIV #5가 그보다 더 큰 z-index 속성값을 갖는 DIV #3에 속해있기 때문입니다.

DIV #3의 z-index 속성값인 4는 DIV #4, DIV #5, DIV #6의 z-index 속성값과 독립적입니다. 왜냐하면 다른 쌓임 맥락에 속해있기 때문입니다.

Z축 상에 쌓인 요소들의 렌더링 순서를 이해하는 쉬운 방법은 z-index를 "버전 번호" 처럼 생각하는 것입니다. 자식 요소는 부모 요소의 메이저 버전 번호 아래 마이너 버전 번호를 갖습니다. 이 방법은 왜 z-index가 1인 DIV #5가 z-index가 2인 DIV #2위에 쌓였는지, z-index가 6인 DIV #4가 z-index가 5인 DIV #1 아래에 쌓였는지 이해하기 쉽도록 만들어줍니다.

우리 예제는 다음과 같습니다. (최종 렌더링 순서에 따라 정렬됨)

- 루트
  - DIV #2: (`z-index`: 2)
  - DIV #3: (`z-index`: 4)
    - DIV #5: (`z-index`: 1), (`z-index`: 4)인 요소 아래에서 쌓였으므로 렌더링 순서는 4.1입니다.
    - DIV #6: (`z-index`: 3), (`z-index`: 4)인 요소 아래에서 쌓였으므로 렌더링 순서는 4.3입니다.
    - DIV #4: (`z-index`: 6), (`z-index`: 4)인 요소 아래에서 쌓였으므로 렌더링 순서는 4.6입니다.
  - DIV #1: (`z-index`: 5)

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

## 결과

{{ EmbedLiveSample('예제', '100%', '396') }}

## 같이 보기

- [z-index가 없는 경우의 쌓임](/ko/docs/Web/CSS/CSS_positioned_layout/Stacking_without_z-index) : 기본 쌓임 규칙
- [floating 엘리먼트의 쌓임](/ko/docs/Web/CSS/CSS_positioned_layout/Stacking_floating_elements) : floating 엘리먼트들은 어떻게 다루어지는가
- [z-index 적용](/ko/docs/Web/CSS/CSS_positioned_layout/Using_z-index) : 기본 쌓임 순서를 변경하기 위해 z-index 사용하기
- [쌓임 맥락 예제1](/ko/docs/Web/CSS/CSS_positioned_layout/Stacking_context/Stacking_context_example_1) : 2레벨 HTML 계층구조, 마지막 레벨에서 z-index가 지정된 경우
- [쌓임 맥락 예제2](/ko/docs/Web/CSS/CSS_positioned_layout/Stacking_context/Stacking_context_example_2) : 2레벨 HTML 계층구조, 모든 레벨에서 z-index가 지정된 경우
- [쌓임 맥락 예제3](/ko/docs/Web/CSS/CSS_positioned_layout/Stacking_context/Stacking_context_example_3) : 3레벨 HTML 계층구조, 두번째 레벨에서 z-index가 지정된 경우
- [Top layer](/ko/docs/Glossary/Top_layer)
