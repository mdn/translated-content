---
title: ライブコードサンプルの簡単なデモ
slug: orphaned/MDN/Structures/Live_samples/Simple_live_sample_demo
tags:
  - MDN Meta
  - Structures
  - 例
translation_of: MDN/Structures/Live_samples/Simple_live_sample_demo
original_slug: MDN/Structures/Live_samples/Simple_live_sample_demo
---
<div>{{MDNSidebar}}</div>

<h2 id="The_example" name="The_example">例</h2>

<p id="Simple_example_of_a_live_demo">これは、MDN でライブデモを行う方法を示す非常に簡単な例です。詳細については、<a href="/ja/docs/MDN/Contribute/Structures/Live_samples">ライブサンプル</a>を参照してください。</p>

<pre class="brush: html notranslate">&lt;form&gt;
  &lt;label&gt;Try me&lt;input type="text" name="name"&gt;&lt;/label&gt;
  &lt;input type="submit" value="go"&gt;
&lt;/form&gt;</pre>

<pre class="brush: css notranslate">form {
  border-radius: 10px;
  background: powderblue;
}</pre>

<pre class="brush: js notranslate">var f = document.querySelector('form');

f.addEventListener('submit', function(ev) {
  ev.preventDefault();
  document.querySelectorAll('input')[1].value = 'sending';
}, false);</pre>

<p>{{ EmbedLiveSample('The_example', '', '', '') }}</p>

<div class="blockIndicator note">
<p>注: ローカライズしたページでは、最初の引数の値は、サンプルを含む見出しの ID と同じにしてください．</p>
</div>
