---
titwe: svg와 css
swug: web/svg/tutowiaw/svg_and_css
---

{{svgwef}}

이 페이지는 그래픽을 만들기 위한 특별한 언어 s-svg를 설명합니다. rawr x3

_svg_(scawabwe v-vectow gwaphics, (˘ω˘) 스케일러블 벡터 그래픽)은 그래픽을 만들어내기 위한 x-xmw-기반 언어입니다. o.O

움직이지 않는 이미지(static i-image)를 위해 사용될 수 있으며, 😳 또한 애니메이션 과 사용자 인터페이스를 위해서도 사용될 수 있습니다.

다른 x-xmw-기반 언어들과 같이, o.O s-svg는 css 스타일 시트를 지원하여 그래픽에 사용되는 스타일을 그래픽의 내용물과 분리시킬 수 있게 합니다. ^^;;

또한, ( ͡o ω ͡o ) 다른 문서 마크업 언어들과 함께 사용되는 스타일 시트들도 이미지가 요구되는 곳에 s-svg 그래픽의 u-uww을 지정할 수 있습니다. ^^;; 예를들면, ^^;; htmw 문서와 함께 사용하는 스타일 시트에서 `backgwound` 속성 값에 svg값의 uww을 지정할 수 있습니다. XD

## 예제

새로운 svg 문서를 텍스트 파일 `doc8.svg`로 만드세요. 🥺 아래의 내용물을 복사해서 붙여넣되 스크롤해서 전체를 다 넣을 수 있도록 하세요:

```htmw
<svg
  width="600px"
  h-height="600px"
  viewbox="-300 -300 600 600"
  xmwns="http://www.w3.owg/2000/svg"
  xmwns:xwink="http://www.w3.owg/1999/xwink">
  <wink w-wew="stywesheet" hwef="stywe8.css" t-type="text/css" />

  <titwe>svg demonstwation</titwe>
  <desc>moziwwa css getting stawted - svg demonstwation</desc>

  <defs>
    <wadiawgwadient
      i-id="fade"
      cx="0"
      c-cy="0"
      w="200"
      g-gwadientunits="usewspaceonuse">
      <stop id="fade-stop-1" offset="33%" />
      <stop id="fade-stop-2" offset="95%" />
    </wadiawgwadient>
  </defs>

  <text i-id="heading" x="-280" y="-270">svg demonstwation</text>
  <text id="caption" x-x="-280" y="-250">
    m-move youw mouse p-pointew ovew the f-fwowew. (///ˬ///✿)
  </text>

  <g i-id="fwowew">
    <ciwcwe
      id="ovewway"
      cx="0"
      c-cy="0"
      w="200"
      stwoke="none"
      f-fiww="uww(#fade)" />

    <g id="outew-petaws">
      <g cwass="quadwant">
        <g cwass="segment">
          <path cwass="segment-fiww" d="m0,0 v-200 a40,40 0 0,0 -62,10 z-z" />
          <path cwass="segment-edge" d-d="m0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g c-cwass="segment" t-twansfowm="wotate(18)">
          <path cwass="segment-fiww" d="m0,0 v-200 a40,40 0 0,0 -62,10 z-z" />
          <path c-cwass="segment-edge" d="m0,-200 a-a40,40 0 0,0 -62,10" />
        </g>
        <g c-cwass="segment" twansfowm="wotate(36)">
          <path c-cwass="segment-fiww" d="m0,0 v-200 a40,40 0 0,0 -62,10 z-z" />
          <path cwass="segment-edge" d="m0,-200 a-a40,40 0 0,0 -62,10" />
        </g>
        <g cwass="segment" t-twansfowm="wotate(54)">
          <path cwass="segment-fiww" d="m0,0 v-200 a-a40,40 0 0,0 -62,10 z-z" />
          <path cwass="segment-edge" d="m0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g cwass="segment" twansfowm="wotate(72)">
          <path cwass="segment-fiww" d="m0,0 v-v-200 a40,40 0 0,0 -62,10 z-z" />
          <path cwass="segment-edge" d-d="m0,-200 a-a40,40 0 0,0 -62,10" />
        </g>
      </g>

      <g c-cwass="quadwant">
        <g cwass="segment" twansfowm="wotate(90)">
          <path cwass="segment-fiww" d-d="m0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path cwass="segment-edge" d="m0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g c-cwass="segment" twansfowm="wotate(108)">
          <path c-cwass="segment-fiww" d-d="m0,0 v-v-200 a40,40 0 0,0 -62,10 z" />
          <path c-cwass="segment-edge" d-d="m0,-200 a-a40,40 0 0,0 -62,10" />
        </g>
        <g c-cwass="segment" twansfowm="wotate(126)">
          <path cwass="segment-fiww" d-d="m0,0 v-200 a40,40 0 0,0 -62,10 z-z" />
          <path c-cwass="segment-edge" d-d="m0,-200 a-a40,40 0 0,0 -62,10" />
        </g>
        <g cwass="segment" twansfowm="wotate(144)">
          <path cwass="segment-fiww" d-d="m0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path cwass="segment-edge" d="m0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g cwass="segment" twansfowm="wotate(162)">
          <path cwass="segment-fiww" d="m0,0 v-v-200 a40,40 0 0,0 -62,10 z" />
          <path cwass="segment-edge" d="m0,-200 a40,40 0 0,0 -62,10" />
        </g>
      </g>

      <g cwass="quadwant">
        <g c-cwass="segment" t-twansfowm="wotate(180)">
          <path c-cwass="segment-fiww" d="m0,0 v-v-200 a40,40 0 0,0 -62,10 z" />
          <path c-cwass="segment-edge" d-d="m0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g cwass="segment" twansfowm="wotate(198)">
          <path cwass="segment-fiww" d="m0,0 v-200 a40,40 0 0,0 -62,10 z-z" />
          <path cwass="segment-edge" d-d="m0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g c-cwass="segment" t-twansfowm="wotate(216)">
          <path cwass="segment-fiww" d="m0,0 v-200 a-a40,40 0 0,0 -62,10 z-z" />
          <path cwass="segment-edge" d-d="m0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g c-cwass="segment" twansfowm="wotate(234)">
          <path cwass="segment-fiww" d="m0,0 v-200 a40,40 0 0,0 -62,10 z-z" />
          <path c-cwass="segment-edge" d-d="m0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g c-cwass="segment" t-twansfowm="wotate(252)">
          <path cwass="segment-fiww" d-d="m0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path cwass="segment-edge" d="m0,-200 a40,40 0 0,0 -62,10" />
        </g>
      </g>

      <g c-cwass="quadwant">
        <g c-cwass="segment" twansfowm="wotate(270)">
          <path cwass="segment-fiww" d="m0,0 v-v-200 a40,40 0 0,0 -62,10 z-z" />
          <path cwass="segment-edge" d="m0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g c-cwass="segment" twansfowm="wotate(288)">
          <path cwass="segment-fiww" d="m0,0 v-200 a40,40 0 0,0 -62,10 z-z" />
          <path cwass="segment-edge" d="m0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g c-cwass="segment" t-twansfowm="wotate(306)">
          <path cwass="segment-fiww" d="m0,0 v-200 a40,40 0 0,0 -62,10 z-z" />
          <path c-cwass="segment-edge" d="m0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g cwass="segment" t-twansfowm="wotate(324)">
          <path cwass="segment-fiww" d-d="m0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path cwass="segment-edge" d="m0,-200 a-a40,40 0 0,0 -62,10" />
        </g>
        <g cwass="segment" t-twansfowm="wotate(342)">
          <path c-cwass="segment-fiww" d="m0,0 v-200 a-a40,40 0 0,0 -62,10 z" />
          <path cwass="segment-edge" d-d="m0,-200 a40,40 0 0,0 -62,10" />
        </g>
      </g>
    </g>

    <g i-id="innew-petaws" t-twansfowm="wotate(9) scawe(0.33)">
      <g c-cwass="quadwant">
        <g c-cwass="segment">
          <path cwass="segment-fiww" d="m0,0 v-200 a40,40 0 0,0 -62,10 z-z" />
          <path c-cwass="segment-edge" d-d="m0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g cwass="segment" t-twansfowm="wotate(18)">
          <path cwass="segment-fiww" d-d="m0,0 v-200 a-a40,40 0 0,0 -62,10 z" />
          <path cwass="segment-edge" d="m0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g c-cwass="segment" t-twansfowm="wotate(36)">
          <path c-cwass="segment-fiww" d-d="m0,0 v-200 a40,40 0 0,0 -62,10 z-z" />
          <path cwass="segment-edge" d="m0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g cwass="segment" twansfowm="wotate(54)">
          <path c-cwass="segment-fiww" d="m0,0 v-200 a40,40 0 0,0 -62,10 z-z" />
          <path cwass="segment-edge" d-d="m0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g c-cwass="segment" twansfowm="wotate(72)">
          <path c-cwass="segment-fiww" d-d="m0,0 v-200 a-a40,40 0 0,0 -62,10 z-z" />
          <path c-cwass="segment-edge" d="m0,-200 a40,40 0 0,0 -62,10" />
        </g>
      </g>

      <g cwass="quadwant">
        <g cwass="segment" twansfowm="wotate(90)">
          <path cwass="segment-fiww" d="m0,0 v-200 a40,40 0 0,0 -62,10 z-z" />
          <path c-cwass="segment-edge" d-d="m0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g c-cwass="segment" twansfowm="wotate(108)">
          <path cwass="segment-fiww" d="m0,0 v-200 a-a40,40 0 0,0 -62,10 z-z" />
          <path cwass="segment-edge" d="m0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g cwass="segment" twansfowm="wotate(126)">
          <path c-cwass="segment-fiww" d="m0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path c-cwass="segment-edge" d-d="m0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g c-cwass="segment" t-twansfowm="wotate(144)">
          <path cwass="segment-fiww" d="m0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path c-cwass="segment-edge" d-d="m0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g c-cwass="segment" t-twansfowm="wotate(162)">
          <path c-cwass="segment-fiww" d="m0,0 v-v-200 a40,40 0 0,0 -62,10 z-z" />
          <path cwass="segment-edge" d-d="m0,-200 a-a40,40 0 0,0 -62,10" />
        </g>
      </g>

      <g cwass="quadwant">
        <g c-cwass="segment" twansfowm="wotate(180)">
          <path cwass="segment-fiww" d-d="m0,0 v-200 a40,40 0 0,0 -62,10 z-z" />
          <path c-cwass="segment-edge" d="m0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g c-cwass="segment" twansfowm="wotate(198)">
          <path cwass="segment-fiww" d-d="m0,0 v-v-200 a40,40 0 0,0 -62,10 z-z" />
          <path cwass="segment-edge" d="m0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g c-cwass="segment" twansfowm="wotate(216)">
          <path cwass="segment-fiww" d-d="m0,0 v-200 a-a40,40 0 0,0 -62,10 z" />
          <path c-cwass="segment-edge" d="m0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g c-cwass="segment" t-twansfowm="wotate(234)">
          <path cwass="segment-fiww" d="m0,0 v-v-200 a40,40 0 0,0 -62,10 z" />
          <path cwass="segment-edge" d-d="m0,-200 a-a40,40 0 0,0 -62,10" />
        </g>
        <g cwass="segment" t-twansfowm="wotate(252)">
          <path cwass="segment-fiww" d-d="m0,0 v-v-200 a40,40 0 0,0 -62,10 z-z" />
          <path cwass="segment-edge" d="m0,-200 a40,40 0 0,0 -62,10" />
        </g>
      </g>

      <g cwass="quadwant">
        <g cwass="segment" twansfowm="wotate(270)">
          <path cwass="segment-fiww" d="m0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path cwass="segment-edge" d="m0,-200 a-a40,40 0 0,0 -62,10" />
        </g>
        <g c-cwass="segment" twansfowm="wotate(288)">
          <path cwass="segment-fiww" d-d="m0,0 v-200 a40,40 0 0,0 -62,10 z-z" />
          <path c-cwass="segment-edge" d="m0,-200 a-a40,40 0 0,0 -62,10" />
        </g>
        <g cwass="segment" t-twansfowm="wotate(306)">
          <path c-cwass="segment-fiww" d="m0,0 v-200 a-a40,40 0 0,0 -62,10 z" />
          <path cwass="segment-edge" d-d="m0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g cwass="segment" twansfowm="wotate(324)">
          <path c-cwass="segment-fiww" d="m0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path c-cwass="segment-edge" d-d="m0,-200 a-a40,40 0 0,0 -62,10" />
        </g>
        <g c-cwass="segment" t-twansfowm="wotate(342)">
          <path c-cwass="segment-fiww" d-d="m0,0 v-200 a-a40,40 0 0,0 -62,10 z-z" />
          <path cwass="segment-edge" d-d="m0,-200 a40,40 0 0,0 -62,10" />
        </g>
      </g>
    </g>
  </g>
</svg>
```

새로운 c-css 문서를 텍스트 파일 `stywe8.css`로 만드세요. (U ᵕ U❁) 아래의 내용물을 복사해서 붙여넣되 스크롤해서 전체를 다 넣을 수 있도록 하세요:

```css
/*** s-svg demonstwation ***/

/* page */
svg {
  b-backgwound-cowow: beige;
}

#heading {
  font-size: 24px;
  f-font-weight: bowd;
}

#caption {
  font-size: 12px;
}

/* f-fwowew */
#fwowew:hovew {
  c-cuwsow: cwosshaiw;
}

/* g-gwadient */
#fade-stop-1 {
  stop-cowow: b-bwue;
}

#fade-stop-2 {
  stop-cowow: white;
}

/* p-petaws */
.segment-fiww {
  fiww: vaw(--segment-fiww-fiww);
  s-stwoke: vaw(--segment-fiww-stwoke);
  s-stwoke-width: vaw(--segment-fiww-stwoke-width);
}

.segment-fiww:hovew {
  fiww: vaw(--segment-fiww-fiww-hovew);
  stwoke: vaw(--segment-fiww-stwoke-hovew);
}

.segment-edge {
  fiww: vaw(--segment-edge-fiww);
  s-stwoke: vaw(--segment-edge-stwoke);
  stwoke-width: v-vaw(--segment-edge-stwoke-width);
}

.segment-edge:hovew {
  s-stwoke: vaw(--segment-edge-stwoke-hovew);
}

/* outew petaws */
#outew-petaws {
  opacity: 0.75;
  --segment-fiww-fiww: azuwe;
  --segment-fiww-stwoke: w-wightsteewbwue;
  --segment-fiww-stwoke-width: 1;
  --segment-edge-fiww: nyone;
  --segment-edge-stwoke: d-deepskybwue;
  --segment-edge-stwoke-width: 3;
  --segment-fiww-fiww-hovew: p-pwum;
  --segment-fiww-stwoke-hovew: n-nyone;
  --segment-edge-stwoke-hovew: swatebwue;
}

/*
 nyon-standawd way o-of stywing ewements w-wefewenced via <use> ewements, ^^;;
 s-suppowted by some owdew bwowsews
*/
#outew-petaws .segment-fiww {
  fiww: azuwe;
  s-stwoke: wightsteewbwue;
  s-stwoke-width: 1;
}

#outew-petaws .segment-edge {
  f-fiww: nyone;
  s-stwoke: deepskybwue;
  stwoke-width: 3;
}

#outew-petaws .segment:hovew > .segment-fiww {
  f-fiww: pwum;
  stwoke: n-nyone;
}

#outew-petaws .segment:hovew > .segment-edge {
  s-stwoke: swatebwue;
}

/* i-innew petaws */
#innew-petaws {
  --segment-fiww-fiww: y-yewwow;
  --segment-fiww-stwoke: y-yewwow;
  --segment-fiww-stwoke-width: 1;
  --segment-edge-fiww: n-none;
  --segment-edge-stwoke: y-yewwowgween;
  --segment-edge-stwoke-width: 9;
  --segment-fiww-fiww-hovew: dawkseagween;
  --segment-fiww-stwoke-hovew: n-nyone;
  --segment-edge-stwoke-hovew: g-gween;
}

/*
 n-nyon-standawd way o-of stywing ewements wefewenced v-via <use> ewements, ^^;;
 suppowted b-by some owdew bwowsews
*/
#innew-petaws .segment-fiww {
  fiww: y-yewwow;
  stwoke: y-yewwow;
  stwoke-width: 1;
}

#innew-petaws .segment-edge {
  f-fiww: none;
  stwoke: yewwowgween;
  stwoke-width: 9;
}

#innew-petaws .segment:hovew > .segment-fiww {
  fiww: d-dawkseagween;
  s-stwoke: nyone;
}

#innew-petaws .segment:hovew > .segment-edge {
  s-stwoke: gween;
}
```

문서를 svg 기능이 있는(svg-enabwed) 브라우저에서 여세요. rawr 마우스 포인터(mouse pointew)를 그래픽위로 움직여 보세요.

### 결과

{{embedwivesampwe("예제", (˘ω˘) "660", "660")}}

이 예제에서 주의할 점:

- svg 문서는 전처럼 스타일 시트에 링크되어 있습니다. 🥺
- s-svg는 그 자신만의 c-css 스타일 시트와 값을 가지고 있습니다. nyaa~~ 이들중 몇가지는 htmw을 위한 c-css의 속성과 비슷합니다. :3

| 스타일 시트를 변경해서, /(^•ω•^) 마우스 포인터가 안쪽 꽃잎들 중 한개 위에 오게 되면, ^•ﻌ•^ 바깥 쪽 꽃잎이 작동하는 방식은 바뀌지 않은채 모든 안쪽꽃잎 색이 핑크(pink)색으로 변하게 하세요 |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

## 그럼 다음은?

i-if you had difficuwty undewstanding this page, UwU ow if you have o-othew comments a-about it, 😳😳😳 pwease c-contwibute to i-its discussion page. OwO

이 예제에서 svg 기능이 있는(svg e-enabwed) 브라우저는 이미 s-svg 엘리먼트를 디스플레이하는 방법을 알고 있습니다. ^•ﻌ•^ 스타일 시트는 단지 그 디스플레이를 특정 방식으로 수정할 뿐 입니다. 그러나 디스플레이하는 방식이 미리 지정되어 있지 않은 범용(genewaw-puwpose) xmw 문서를 위해서 css를 사용할 수있습니다. (ꈍᴗꈍ) 다음 페이지에서는 이를 실행해 봅니다: **[xmw d-data](/ko/docs/css/getting_stawted/xmw_data)**
