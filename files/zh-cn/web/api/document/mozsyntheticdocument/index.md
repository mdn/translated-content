---
title: Document.mozSyntheticDocument
slug: Web/API/Document/mozSyntheticDocument
---
<h2 id="概述">概述</h2>

<p>{{ ApiRef("DOM") }}</p>

<p>文档是否是合成文档; 即表示独立的图像，视频，音频等的文档。</p>

<div class="note">
<p>注：应考虑兼容性和应用场景</p>
</div>

<h2 id="Syntax">语法</h2>

<pre class="eval"><em>var isSynthetic</em> = <em>document</em>.mozSyntheticDocument;
</pre>

<p>返回时，如果文档是合成的，则合成是真实的; 否则是假的。</p>

<h2 id="Example">例子</h2>

<p>如果您有一个您只想为合成文档显示的上下文菜单项（或相反，对于不合成的文档），这可能很有用。</p>

<pre class="eval">var isSynthetic = document.mozSyntheticDocument;

if (isSynthetic) {
  /* insert your menu item here */
}
</pre>

<h2 id="Specification">规范</h2>

<p>不是任何规范的一部分。</p>
