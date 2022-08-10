---
title: 'Feature-Policy: autoplay'
slug: Web/HTTP/Headers/Feature-Policy/autoplay
translation_of: Web/HTTP/Headers/Feature-Policy/autoplay
---
<div>{{HTTPSidebar}} {{SeeCompatTable}}</div>

<p>The HTTP {{HTTPHeader("Feature-Policy")}} header <code>autoplay</code> directive controls whether the current document is allowed to autoplay media requested through the {{domxref("HTMLMediaElement")}} interface. When this policy is enabled and there were no user gestures, the {{domxref("Promise")}} returned by {{domxref("HTMLMediaElement.play()")}} will reject with a <code>DOMException</code>. The {{htmlattrxref("autoplay", "audio")}} attribute on {{HTMLElement("audio")}} and {{HTMLElement("video")}} elements will be ignored.</p>

<p>For more details on autoplay and autoplay blocking, see the article <a href="/en-US/docs/Web/Media/Autoplay_guide">Autoplay guide for media and Web Audio APIs</a>.</p>

<h2 id="语法">语法</h2>

<pre class="syntaxbox">Feature-Policy: autoplay &lt;可选&gt;;</pre>

<dl>
 <dt>&lt;allowlist&gt;</dt>
 <dd>{{page("Web/HTTP/Feature_Policy/Using_Feature_Policy", "allowlist")}} 默认值是<code>'self'</code>.</dd>
</dl>

<h2 id="规范">规范</h2>

{{Specifications}}

<h2 id="浏览器兼容性">浏览器兼容性</h2>



<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{HTTPHeader("Feature-Policy")}} header</li>
 <li><a href="/en-US/docs/Web/HTTP/Feature_Policy">Feature Policy</a></li>
 <li><a href="/en-US/docs/Web/HTTP/Feature_Policy/Using_Feature_Policy">Using Feature Policy</a></li>
</ul>
