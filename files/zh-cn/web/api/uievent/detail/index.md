---
title: UIEvent.detail
slug: Web/API/UIEvent/detail
translation_of: Web/API/UIEvent/detail
---
<p>{{APIRef("DOM Events")}}</p>

<p><strong><code>UIEvent.detail</code></strong> 是只读属性, 当值为非空的时候，提供当前点击数 (和环境有关) 。</p>

<p>对 {{event("click")}} 或者 {{event("dblclick")}} 事件，<code>UIEvent.detail</code> 是当前点击数量。</p>

<p>对 {{event("mousedown")}} 或者 {{event("mouseup")}} 事件，<code>UIEvent.detail</code> 是 1 加上当前点击数。</p>

<p>对所有的其它{{domxref("UIEvent")}} 对象，<code>UIEvent.detail</code> 总是零。</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

{{Compat("api.UIEvent.detail")}}
