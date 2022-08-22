---
title: SVG の image 要素
slug: Web/SVG/Tutorial/SVG_Image_Tag
tags:
  - Beginner
  - NeedsBeginnerUpdate
  - NeedsContent
  - NeedsUpdate
  - SVG
  - Tutorial
  - チュートリアル
  - 初心者
translation_of: Web/SVG/Tutorial/SVG_Image_Tag
---
<p>{{ PreviousNext("Web/SVG/Tutorial/SVG_Fonts", "Web/SVG/Tutorial/Tools_for_SVG") }}</p>

<p>SVG の {{ SVGElement("image") }} 要素は、ラスター画像を SVG オブジェクト内に描画することを可能にします。</p>

<p>以下の基本的な例では、 {{ SVGAttr("href") }} 属性で参照されている .jpg 画像を SVG オブジェクト内に描画します。</p>

<pre class="brush: xml">&lt;?xml version="1.0" standalone="no"?&gt;
&lt;!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
  "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"&gt;
&lt;svg width="5cm" height="4cm" version="1.1"
     xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"&gt;
	&lt;image href="firefox.jpg" x="0" y="0" height="50px" width="50px"/&gt;
&lt;/svg&gt;</pre>

<p>いくつか注意すべき重要事項があります (<a class="external" href="http://www.w3.org/TR/SVG/struct.html#ImageElement">W3 仕様書</a>に基づくものです)。</p>

<ul>
 <li>
  <p>x 属性や y 属性を措定しない場合、それらの値は 0 になります。</p>
 </li>
 <li>
  <p>height 属性や width 属性を指定しない場合、それらの値は 0 になります。</p>
 </li>
 <li>height 属性または width 属性の値が 0 である場合、その画像を描画しません。</li>
</ul>

<p>{{ PreviousNext("Web/SVG/Tutorial/SVG_Fonts", "Web/SVG/Tutorial/Tools_for_SVG") }}</p>
