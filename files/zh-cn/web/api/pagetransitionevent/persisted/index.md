---
title: PageTransitionEvent.persisted
slug: Web/API/PageTransitionEvent/persisted
translation_of: Web/API/PageTransitionEvent/persisted
---
<div>{{APIRef("HTML DOM")}}</div>

<p>只读属性<code><strong>persisted</strong></code>代表一个页面是否从缓存中加载的</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js notranslate">window.addEventListener('pageshow', function(event) {
  if (event.persisted) {
    console.log('Page was loaded from cache.');
  }
});</pre>

<h3 id="Value">Value</h3>

<p>A {{jsxref("Boolean")}}.</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>



<p>{{Compat("api.PageTransitionEvent.persisted")}}</p>
