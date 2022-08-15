---
title: SVG graphics
slug: Web/SVG/Tutorial/SVG_and_CSS
tags:
  - CSS:Getting_Started
translation_of: Web/SVG/Tutorial/SVG_and_CSS
original_slug: Web/CSS/Getting_Started/SVG_graphics
---
<p>이 페이지는 그래픽을 만들기 위한 특별한 언어 SVG를 설명합니다.</p>
<p>SVG 기능이 있는 모질라 브라우저에서 작동하는 간단한 예제를 만듭니다.</p>
<h3 id=".EC.A0.95.EB.B3.B4:_SVG" name=".EC.A0.95.EB.B3.B4:_SVG">정보: SVG</h3>
<p>
 <i>
  SVG</i>
 (Scalable Vector Graphics, 스케일러블 벡터 그래픽)은 그래픽을 만들어내기 위한 XML-기반 언어입니다.</p>
<p>움직이지 않는 이미지(static image)를 위해 사용될 수 있으며, 또한 애니메이션 과 사용자 인터페이스를 위해서도 사용될 수 있습니다.</p>
<p>다른 XML-기반 언어들과 같이, SVG는 CSS 스타일 시트를 지원하여 그래픽에 사용되는 스타일을 그래픽의 내용물과 분리시킬 수 있게 합니다.</p>
<p>또한, 다른 문서 마크업 언어들과 함께 사용되는 스타일 시트들도 이미지가 요구되는 곳에 SVG 그래픽의 URL을 지정할 수 있습니다. 예를들면, HTML 문서와 함께 사용하는 스타일 시트에서 <code>background</code> 속성 값에 SVG값의 URL을 지정할 수 있습니다.</p>
<table style="border: 1px solid #36b; padding: 1em; background-color: #f4f4f4; margin-bottom: 1em; width: 100%;">
 <caption>
  More details</caption>
 <tbody>
  <tr>
   <td>이글을 쓰는 시점에서(2005년 중반), 모질라 브라우저의 몇몇 최근 빌드만이 SVG 지원을 내장하고 있었습니다.
    <p><a class="external" href="http://www.adobe.com/svg/viewer/install/main.html">Adobe</a>에서 제공되는 것 같은 플럭인(plugin)을 인스톨하면 다른 버전에서도 SVG 지원을 추가할 수 있습니다.</p>
    <p>모질라에서의 SVG에 관한 더많은 정보를 원하시면, 이 위키안의 <a href="ko/SVG">SVG</a> 페이지를 보세요.</p>
   </td>
  </tr>
 </tbody>
</table>
<h3 id=".EC.95.A1.EC.85.98:_SVG_.EC.98.88.EC.A0.9C" name=".EC.95.A1.EC.85.98:_SVG_.EC.98.88.EC.A0.9C">액션: SVG 예제</h3>
<p>새로운 SVG 문서를 텍스트 파일 <code>doc8.svg</code>로 만드세요. 아래의 내용물을 복사해서 붙여넣되 스크롤해서 전체를 다 넣을 수 있도록 하세요:</p>
<div style="width: 48em; height: 12em; overflow: auto;">
 <pre>&lt;?xml version="1.0" standalone="no"?&gt;

&lt;?xml-stylesheet type="text/css" href="style8.css"?&gt;

&lt;!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
  "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"&gt;

&lt;svg width="600px" height="600px" viewBox="-300 -300 600 600"
  xmlns="http://www.w3.org/2000/svg" version="1.1"
  xmlns:xlink="http://www.w3.org/1999/xlink"&gt;

&lt;title&gt;SVG demonstration&lt;/title&gt;
&lt;desc&gt;Mozilla CSS Getting Started - SVG demonstration&lt;/desc&gt;

&lt;defs&gt;
  &lt;g id="segment" class="segment"&gt;
    &lt;path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/&gt;
    &lt;path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/&gt;
    &lt;/g&gt;
  &lt;g id="quadrant"&gt;
    &lt;use xlink:href="#segment"/&gt;
    &lt;use xlink:href="#segment" transform="rotate(18)"/&gt;
    &lt;use xlink:href="#segment" transform="rotate(36)"/&gt;
    &lt;use xlink:href="#segment" transform="rotate(54)"/&gt;
    &lt;use xlink:href="#segment" transform="rotate(72)"/&gt;
    &lt;/g&gt;
  &lt;g id="petals"&gt;
    &lt;use xlink:href="#quadrant"/&gt;
    &lt;use xlink:href="#quadrant" transform="rotate(90)"/&gt;
    &lt;use xlink:href="#quadrant" transform="rotate(180)"/&gt;
    &lt;use xlink:href="#quadrant" transform="rotate(270)"/&gt;
    &lt;/g&gt;
  &lt;radialGradient id="fade" cx="0" cy="0" r="200"
      gradientUnits="userSpaceOnUse"&gt;
    &lt;stop id="fade-stop-1" offset="33%"/&gt;
    &lt;stop id="fade-stop-2" offset="95%"/&gt;
    &lt;/radialGradient&gt;
  &lt;/defs&gt;

&lt;text id="heading" x="-280" y="-270"&gt;
  SVG demonstration&lt;/text&gt;
&lt;text  id="caption" x="-280" y="-250"&gt;
  Move your mouse pointer over the flower.&lt;/text&gt;

&lt;g id="flower"&gt;
  &lt;circle id="overlay" cx="0" cy="0" r="200"
    stroke="none" fill="url(#fade)"/&gt;
  &lt;use id="outer-petals" xlink:href="#petals"/&gt;
  &lt;use id="inner-petals" xlink:href="#petals"
    transform="rotate(9) scale(0.33)"/&gt;
  &lt;/g&gt;

&lt;/svg&gt;
</pre>
</div>
<p>새로운 CSS 문서를 텍스트 파일 <code>style8.css</code>로 만드세요. 아래의 내용물을 복사해서 붙여넣되 스크롤해서 전체를 다 넣을 수 있도록 하세요:</p>
<div style="width: 48em; height: 12em; overflow: auto;">
 <pre>/*** SVG demonstration ***/

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

/* outer petals */
#outer-petals {
  opacity: .75;
  }

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

#outer-petals .segment:hover &gt; .segment-fill {
  fill: plum;
  stroke: none;
  }

#outer-petals .segment:hover &gt; .segment-edge {
  stroke: slateblue;
  }

/* inner petals */
#inner-petals .segment-fill {
  fill: yellow;
  stroke: yellowgreen;
  stroke-width: 1;
  }

#inner-petals .segment-edge {
  fill: none;
  stroke: yellowgreen;
  stroke-width: 9;
  }

#inner-petals .segment:hover &gt; .segment-fill {
  fill: darkseagreen;
  stroke: none;
  }

#inner-petals .segment:hover &gt; .segment-edge {
  stroke: green;
  }
</pre>
</div>
<p>문서를 SVG 기능이 있는(SVG-enabled) 브라우저에서 여세요. 마우스 포인터(mouse pointer)를 그래픽위로 움직여 보세요.</p>
<p>이 위키페이지는 SVG를 지원하지 않습니다. 따라서 예제가 어떻게 실행되는 지 보여드릴 수 없습니다. 다음과 같이 보입니다:</p>
<table style="border: 2px outset #36b;">
 <tbody>
  <tr>
   <td><img alt="SVG demonstration"></td>
  </tr>
 </tbody>
</table>
<p>이 예제에서 주의할 점:</p>
<ul>
 <li>SVG 문서는 전처럼 스타일 시트에 링크되어 있습니다.</li>
 <li>SVG는 그 자신만의 CSS 스타일 시트와 값을 가지고 있습니다. 이들중 몇가지는 HTML을 위한 CSS의 속성과 비슷합니다.</li>
</ul>
<table style="border: 1px solid #36b; padding: 1em; background-color: #fffff4; margin-bottom: 1em;">
 <caption>
  Challenge</caption>
 <tbody>
  <tr>
   <td>스타일 시트를 변경해서, 마우스 포인터가 안쪽 꽃잎들 중 한개 위에 오게 되면, 바깥 쪽 꽃잎이 작동하는 방식은 바뀌지 않은채 모든 안쪽꽃잎 색이 핑크(pink)색으로 변하게 하세요</td>
  </tr>
 </tbody>
</table>
<h4 id=".EA.B7.B8.EB.9F.BC_.EB.8B.A4.EC.9D.8C.EC.9D.80.3F" name=".EA.B7.B8.EB.9F.BC_.EB.8B.A4.EC.9D.8C.EC.9D.80.3F">그럼 다음은?</h4>
<p>If you had difficulty understanding this page, or if you have other comments about it, please contribute to its <a>Discussion</a> page.</p>
<p>이 예제에서 SVG 기능이 있는(SVG enabled) 브라우저는 이미 SVG 엘리먼트를 디스플레이하는 방법을 알고 있습니다. 스타일 시트는 단지 그 디스플레이를 특정 방식으로 수정할 뿐 입니다. 그러나 디스플레이하는 방식이 미리 지정되어 있지 않은 범용(general-purpose) XML 문서를 위해서 CSS를 사용할 수있습니다. 다음 페이지에서는 이를 실행해 봅니다: <b><a href="ko/CSS/Getting_Started/XML_data">XML data</a></b></p>
