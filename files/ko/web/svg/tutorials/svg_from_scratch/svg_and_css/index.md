---
title: SVG와 CSS
slug: Web/SVG/Tutorials/SVG_from_scratch/SVG_and_CSS
original_slug: Web/SVG/Tutorial/SVG_and_CSS
---

{{SVGRef}}

이 페이지는 그래픽을 만들기 위한 특별한 언어 SVG를 설명합니다.

_SVG_(Scalable Vector Graphics, 스케일러블 벡터 그래픽)은 그래픽을 만들어내기 위한 XML-기반 언어입니다.

움직이지 않는 이미지(static image)를 위해 사용될 수 있으며, 또한 애니메이션 과 사용자 인터페이스를 위해서도 사용될 수 있습니다.

다른 XML-기반 언어들과 같이, SVG는 CSS 스타일 시트를 지원하여 그래픽에 사용되는 스타일을 그래픽의 내용물과 분리시킬 수 있게 합니다.

또한, 다른 문서 마크업 언어들과 함께 사용되는 스타일 시트들도 이미지가 요구되는 곳에 SVG 그래픽의 URL을 지정할 수 있습니다. 예를들면, HTML 문서와 함께 사용하는 스타일 시트에서 `background` 속성 값에 SVG값의 URL을 지정할 수 있습니다.

## 예제

새로운 SVG 문서를 텍스트 파일 `doc8.svg`로 만드세요. 아래의 내용물을 복사해서 붙여넣되 스크롤해서 전체를 다 넣을 수 있도록 하세요:

```html
<svg
  width="600px"
  height="600px"
  viewBox="-300 -300 600 600"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <link rel="stylesheet" href="style8.css" type="text/css" />

  <title>SVG demonstration</title>
  <desc>Mozilla CSS Getting Started - SVG demonstration</desc>

  <defs>
    <radialGradient
      id="fade"
      cx="0"
      cy="0"
      r="200"
      gradientUnits="userSpaceOnUse">
      <stop id="fade-stop-1" offset="33%" />
      <stop id="fade-stop-2" offset="95%" />
    </radialGradient>
  </defs>

  <text id="heading" x="-280" y="-270">SVG demonstration</text>
  <text id="caption" x="-280" y="-250">
    Move your mouse pointer over the flower.
  </text>

  <g id="flower">
    <circle
      id="overlay"
      cx="0"
      cy="0"
      r="200"
      stroke="none"
      fill="url(#fade)" />

    <g id="outer-petals">
      <g class="quadrant">
        <g class="segment">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(18)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(36)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(54)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(72)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
      </g>

      <g class="quadrant">
        <g class="segment" transform="rotate(90)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(108)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(126)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(144)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(162)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
      </g>

      <g class="quadrant">
        <g class="segment" transform="rotate(180)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(198)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(216)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(234)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(252)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
      </g>

      <g class="quadrant">
        <g class="segment" transform="rotate(270)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(288)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(306)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(324)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(342)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
      </g>
    </g>

    <g id="inner-petals" transform="rotate(9) scale(0.33)">
      <g class="quadrant">
        <g class="segment">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(18)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(36)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(54)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(72)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
      </g>

      <g class="quadrant">
        <g class="segment" transform="rotate(90)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(108)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(126)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(144)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(162)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
      </g>

      <g class="quadrant">
        <g class="segment" transform="rotate(180)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(198)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(216)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(234)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(252)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
      </g>

      <g class="quadrant">
        <g class="segment" transform="rotate(270)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(288)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(306)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(324)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(342)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
      </g>
    </g>
  </g>
</svg>
```

새로운 CSS 문서를 텍스트 파일 `style8.css`로 만드세요. 아래의 내용물을 복사해서 붙여넣되 스크롤해서 전체를 다 넣을 수 있도록 하세요:

```css
/*** SVG demonstration ***/

/* page */
svg {
  background-color: beige;
}

#heading {
  font-size: 24px;
  font-weight: bold;
}

#caption {
  font-size: 12px;
}

/* flower */
#flower:hover {
  cursor: crosshair;
}

/* gradient */
#fade-stop-1 {
  stop-color: blue;
}

#fade-stop-2 {
  stop-color: white;
}

/* petals */
.segment-fill {
  fill: var(--segment-fill-fill);
  stroke: var(--segment-fill-stroke);
  stroke-width: var(--segment-fill-stroke-width);
}

.segment-fill:hover {
  fill: var(--segment-fill-fill-hover);
  stroke: var(--segment-fill-stroke-hover);
}

.segment-edge {
  fill: var(--segment-edge-fill);
  stroke: var(--segment-edge-stroke);
  stroke-width: var(--segment-edge-stroke-width);
}

.segment-edge:hover {
  stroke: var(--segment-edge-stroke-hover);
}

/* outer petals */
#outer-petals {
  opacity: 0.75;
  --segment-fill-fill: azure;
  --segment-fill-stroke: lightsteelblue;
  --segment-fill-stroke-width: 1;
  --segment-edge-fill: none;
  --segment-edge-stroke: deepskyblue;
  --segment-edge-stroke-width: 3;
  --segment-fill-fill-hover: plum;
  --segment-fill-stroke-hover: none;
  --segment-edge-stroke-hover: slateblue;
}

/*
 Non-standard way of styling elements referenced via <use> elements,
 supported by some older browsers
*/
#outer-petals .segment-fill {
  fill: azure;
  stroke: lightsteelblue;
  stroke-width: 1;
}

#outer-petals .segment-edge {
  fill: none;
  stroke: deepskyblue;
  stroke-width: 3;
}

#outer-petals .segment:hover > .segment-fill {
  fill: plum;
  stroke: none;
}

#outer-petals .segment:hover > .segment-edge {
  stroke: slateblue;
}

/* inner petals */
#inner-petals {
  --segment-fill-fill: yellow;
  --segment-fill-stroke: yellow;
  --segment-fill-stroke-width: 1;
  --segment-edge-fill: none;
  --segment-edge-stroke: yellowgreen;
  --segment-edge-stroke-width: 9;
  --segment-fill-fill-hover: darkseagreen;
  --segment-fill-stroke-hover: none;
  --segment-edge-stroke-hover: green;
}

/*
 Non-standard way of styling elements referenced via <use> elements,
 supported by some older browsers
*/
#inner-petals .segment-fill {
  fill: yellow;
  stroke: yellow;
  stroke-width: 1;
}

#inner-petals .segment-edge {
  fill: none;
  stroke: yellowgreen;
  stroke-width: 9;
}

#inner-petals .segment:hover > .segment-fill {
  fill: darkseagreen;
  stroke: none;
}

#inner-petals .segment:hover > .segment-edge {
  stroke: green;
}
```

문서를 SVG 기능이 있는(SVG-enabled) 브라우저에서 여세요. 마우스 포인터(mouse pointer)를 그래픽위로 움직여 보세요.

### 결과

{{EmbedLiveSample("예제", "660", "660")}}

이 예제에서 주의할 점:

- SVG 문서는 전처럼 스타일 시트에 링크되어 있습니다.
- SVG는 그 자신만의 CSS 스타일 시트와 값을 가지고 있습니다. 이들중 몇가지는 HTML을 위한 CSS의 속성과 비슷합니다.

| 스타일 시트를 변경해서, 마우스 포인터가 안쪽 꽃잎들 중 한개 위에 오게 되면, 바깥 쪽 꽃잎이 작동하는 방식은 바뀌지 않은채 모든 안쪽꽃잎 색이 핑크(pink)색으로 변하게 하세요 |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

## 그럼 다음은?

If you had difficulty understanding this page, or if you have other comments about it, please contribute to its Discussion page.

이 예제에서 SVG 기능이 있는(SVG enabled) 브라우저는 이미 SVG 엘리먼트를 디스플레이하는 방법을 알고 있습니다. 스타일 시트는 단지 그 디스플레이를 특정 방식으로 수정할 뿐 입니다. 그러나 디스플레이하는 방식이 미리 지정되어 있지 않은 범용(general-purpose) XML 문서를 위해서 CSS를 사용할 수있습니다. 다음 페이지에서는 이를 실행해 봅니다: **[XML data](/ko/docs/CSS/Getting_Started/XML_data)**
