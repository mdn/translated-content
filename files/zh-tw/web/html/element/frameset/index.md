---
title: <frameset>
slug: Web/HTML/Element/frameset
translation_of: Web/HTML/Element/frameset
---
<div>{{Deprecated_header}}</div>

<h2 id="概要">概要</h2>

<p><code>&lt;frameset&gt;</code> 是用以包含 {{HTMLElement("frame")}} 元素的元素。</p>

<div class="note"><strong>注意：</strong>因為使用框架的推薦是 {{HTMLElement("iframe")}}，這個元素一般不會在現在的網站出現。</div>

<h2 id="屬性">屬性</h2>

<p>如同其他 HTML 元素，這個元素支持<a href="/zh-TW/HTML/Global_attributes">全域屬性</a>。</p>

<dl>
 <dt>{{htmlattrdef("cols")}}</dt>
 <dd>這個屬性指定了橫向框架的數量和尺寸。</dd>
 <dt>{{htmlattrdef("rows")}}</dt>
 <dd>這個屬性指定了直向框架的數量和尺寸。</dd>
</dl>

<h2 id="範例">範例</h2>

<pre class="brush:html">&lt;frameset cols="50%,50%"&gt;
  &lt;frame src="https://developer.mozilla.org/en/HTML/Element/frameset" /&gt;
  &lt;frame src="https://developer.mozilla.org/en/HTML/Element/frame" /&gt;
&lt;/frameset&gt;</pre>

<h2 id="參見">參見</h2>

<ul>
 <li>{{HTMLElement("frame")}}</li>
 <li>{{HTMLElement("iframe")}}</li>
</ul>

<p>{{HTMLRef}}</p>
