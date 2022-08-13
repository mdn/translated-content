---
title: window.scroll
slug: Web/API/Window/scroll
tags:
  - CSSOM View
  - DOM
translation_of: Web/API/Window/scroll
---
<p>{{ApiRef}}</p>

<h2 id="Summary" name="Summary">概要</h2>

<p>ウィンドウを文書内の特定の位置までスクロールします。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">window.scroll(<em>x-coord</em>,<em>y-coord)</em>
window.scroll(options)
</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<ul>
 <li><code>x-coord</code> : 左上を基準とした、表示させたい文書の水平軸上のピクセル</li>
 <li><code>y-coord</code> : 左上を基準とした、表示させたい文書の垂直軸上のピクセル</li>
</ul>

<p>または</p>

<ul>
 <li><code>options</code> : 三つのプロパティを持たせられるオブジェクト

  <ul>
   <li><code>top</code> <code>y-coord</code> と同じです</li>
   <li><code>left</code> <code>x-coord</code> と同じです<code> </code></li>
   <li><code>behavior</code> <code>smooth</code>、 <code>instant</code>、 <code>auto</code> のうちどれか一つを含む文字列。初期値は <code>auto</code> です</li>
  </ul>
 </li>
</ul>

<h2 id="Example" name="Example">例</h2>

<pre class="brush:html">&lt;!-- 100 個目の垂直ピクセル上にウィンドウの最上部を配置します。 --&gt;

&lt;button onClick="scroll(0, 100);"&gt;click to scroll down 100 pixels&lt;/button&gt;
</pre>

<h4 id="スクロールの動作を変更する">スクロールの動作を変更する</h4>

<p>スクロールの仕方を変えたいなら、options で指定してください</p>

<pre class="brush: js line-numbers  language-js"><code class="language-js">window<span class="punctuation token">.</span><span class="function token">scroll</span><span class="punctuation token">(</span><span class="punctuation token">{</span>
  top<span class="punctuation token">:</span> <span class="number token">1000</span><span class="punctuation token">,</span>
  behavior<span class="punctuation token">:</span> <span class="string token">"smooth"</span>
<span class="punctuation token">}</span><span class="punctuation token">)</span><span class="punctuation token">;</span></code></pre>

<h2 id="Notes" name="Notes">注記</h2>

<p>効果としては、 {{domxref("window.scrollTo")}} もこのメソッドと同じです。 繰り返し特定の距離をスクロールさせるには {{domxref("window.scrollBy")}} を使用してください。</p>

<p>次のページもご覧下さい : {{domxref("window.scrollByLines")}} 、 {{domxref("window.scrollByPages")}} 、 {{domxref("Element.scrollIntoView()")}}</p>

<h2 id="Specification" name="Specification">仕様</h2>

<table class="standard-table" style="height: 129px; width: 1675px;">
 <thead>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{ SpecName('CSSOM View', '#dom-window-scroll', 'window.scroll()') }}</td>
   <td>{{ Spec2('CSSOM View') }}</td>
   <td>
    <p>Initial definition.</p>
   </td>
  </tr>
 </tbody>
</table>
