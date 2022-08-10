---
title: CustomElementRegistry.upgrade()
slug: Web/API/CustomElementRegistry/upgrade
translation_of: Web/API/CustomElementRegistry/upgrade
---
<p>{{APIRef("CustomElementRegistry")}}</p>

<p>CustomElementRegistry 接口的 upgrade() 方法将更新节点子树中所有包含阴影的自定义元素，甚至在它们连接到主文档之前也是如此。</p>

<h2 id="语法">语法</h2>

<pre class="syntaxbox">customElements.upgrade(<em>root</em>);
</pre>

<h3 id="参数">参数</h3>

<dl>
 <dt><code>root</code></dt>
 <dd>待升级的包含阴影的派生元素<code>节点</code> 。如果没有可升级的派生实例，则不会抛出异常。</dd>
</dl>

<h3 id="返回值">返回值</h3>

<p>空。</p>

<h2 id="示例">示例</h2>

<p>摘至<a href="https://html.spec.whatwg.org/multipage/custom-elements.html#dom-customelementregistry-upgrade">HTML 规范</a>:</p>

<pre class="brush: js">const el = document.createElement("spider-man");

class SpiderMan extends HTMLElement {}
customElements.define("spider-man", SpiderMan);

console.assert(!(el instanceof SpiderMan)); // not yet upgraded

customElements.upgrade(el);
console.assert(el instanceof SpiderMan);    // upgraded!
</pre>

<h2 id="规范">规范</h2>

{{Specifications}}

<h2 id="浏览器支持">浏览器支持</h2>

<div>


<p>{{Compat("api.CustomElementRegistry.upgrade")}}</p>
</div>
