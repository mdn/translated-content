---
title: 要素の寸法の決定
slug: Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements
tags:
  - API
  - CSSOM View
  - Client width
  - Guide
  - Intermediate
  - client height
  - offsetHeight
  - offsetWidth
  - size of displayed content
translation_of: Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements
---
<div>{{DefaultAPISidebar("CSSOM View")}}</div>

<p>要素の幅と高さを決定するために見ることがあるプロパティはいくつかあり、どれがニーズに適しているかを特定するのが難しい場合があります。この記事は、その決定に役立つように作られています。これらのプロパティはすべて読み取り専用であることに注意してください。要素の幅と高さを設定する場合は、 {{CSSxRef("width")}} と {{CSSxRef("height")}}、またはそれをオーバーライドする {{CSSxRef("min-width")}} と {{CSSxRef("max-width")}}、および {{CSSxRef("min-height")}} と {{CSSxRef("max-height")}} プロパティを使用してください。</p>

<h2 id="How_much_room_does_it_use_up.3F">どれくらいの空間を占めるのか</h2>

<p>表示されているコンテンツの幅、スクロールバー (存在する場合)、パディング、境界を含んだ、要素が占める空間の合計量を知る必要がある場合は、{{DOMxRef("HTMLElement.offsetWidth")}} プロパティと {{DOMxRef("HTMLElement.offsetHeight")}} プロパティを使用します。 ほとんどの場合、要素に適用される変換がなければ、これらは {{DOMxRef("Element.getBoundingClientRect()")}} の幅と高さと同じです。変換がある場合、<code>offsetWidth</code> および <code>offsetHeight</code> は要素のレイアウトの幅と高さを返し、<code>getBoundingClientRect()</code> はレンダリングの幅と高さを返します。例として、要素に <code>width: 100px;</code> と <code>transform: scale(0.5);</code> がある場合 <code>getBoundingClientRect()</code> は幅として 50 を返し、<code>offsetWidth</code> は 100 を返します。</p>

<p><img src="dimensions-offset.png"></p>

<h2 id="What.27s_the_size_of_the_displayed_content.3F">表示されるコンテンツの大きさ</h2>

<p>パディングを含み、境界、マージン、スクロールバーは含まない、実際に表示されるコンテンツが占める空間を知る必要がある場合は、 {{DOMxRef("Element.clientWidth")}} プロパティと {{DOMxRef("Element.clientHeight")}} プロパティを使用します。</p>

<p><img src="dimensions-client.png"></p>

<h2 id="How_big_is_the_content.3F">コンテンツの大きさはどれくらいか</h2>

<p>コンテンツの実際のサイズを知る必要がある場合は、現在どれだけ表示されているかに関係なく、{{DOMxRef("Element.scrollWidth")}} プロパティと {{DOMxRef("Element.scrollHeight")}} プロパティを使用する必要があります。 これらは、スクロールバーの使用により現在一部のみが表示されている場合でも、要素のコンテンツ全体の幅と高さを返します。</p>

<p>例えば、 600x400 ピクセルの要素が 300x300 ピクセルのスクロールボックス内に表示されている場合、<code>scrollWidth</code> は 600 を返し、<code>scrollHeight</code> は 400 を返します。</p>

<h2 id="See_also">関連情報</h2>

<ul>
 <li><a href="https://www.w3.org/TR/cssom-view-1/">https://www.w3.org/TR/cssom-view-1/</a></li>
 <li><a href="https://docs.microsoft.com/en-us/previous-versions//hh781509(v=vs.85)">MSDN: 要素の寸法と位置の測定</a> (英語)</li>
</ul>
