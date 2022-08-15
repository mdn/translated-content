---
title: SVG 이미지 요소
slug: Web/SVG/Tutorial/SVG_Image_Tag
tags:
  - 이미지
  - 학습서
translation_of: Web/SVG/Tutorial/SVG_Image_Tag
---
<p>{{ PreviousNext("Web/SVG/Tutorial/SVG_Fonts", "Web/SVG/Tutorial/Tools_for_SVG") }}</p>

<p>SVG {{ SVGElement("image") }} 요소는 비트맵 이미지를 SVG 객체와 함께 표시할 수 있도록 해 준다.</p>

<p>이 기본 예제에서, {{ SVGAttr("href") }} 속성으로 참조된 a .jpg 이미지는 SVG 객체 내부에 표시될 것이다:</p>

<pre class="brush: xml">&lt;?xml version="1.0" standalone="no"?&gt;
&lt;!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
  "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"&gt;
&lt;svg width="5cm" height="4cm" version="1.1"
     xmlns="http://www.w3.org/2000/svg" xmlns:xlink= "http://www.w3.org/1999/xlink"&gt;
	&lt;image xlink:href="firefox.jpg" x="0" y="0" height="50px" width="50px"/&gt;
&lt;/svg&gt;</pre>

<p>다음 몇가지를 주의하라(<a class="external" href="http://www.w3.org/TR/SVG/struct.html#ImageElement">W3 specs</a> 참조):</p>

<ul>
 <li>
  <p>x 또는 y 속성을 설정하지 않으면 0이 된다.</p>
 </li>
 <li>
  <p>height 또는 width 속성을 설정하지 않으면, 0이 된다.</p>
 </li>
 <li>height 또는 width 속성이 0이면 이미지는 표시되지 않을 것이다.</li>
</ul>

<p>{{ PreviousNext("Web/SVG/Tutorial/SVG_Fonts", "Web/SVG/Tutorial/Tools_for_SVG") }}</p>
