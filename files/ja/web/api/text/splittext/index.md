---
title: Text.splitText()
slug: Web/API/Text/splitText
tags:
  - API
  - DOM
  - Method
  - Text
  - splitText
  - メソッド
translation_of: Web/API/Text/splitText
---
<p>{{APIRef("DOM")}}</p>

<p><strong><code>Text.splitText()</code></strong> メソッドは、 {{domxref("Text")}} ノードを指定したオフセットで二つに分割し、両方のノードを兄弟としてツリーの中に保持します。</p>

<p>分割後、現在のノードには指定したオフセット位置までのすべてのコンテンツが設定され、新規作成された同じ種類のノードには残りのテキストが設定されます。新しく作成されたノードは呼び出し元に返されます。元のノードに親があった場合、新しいノードは元のノードの次の兄弟として挿入されます。オフセットが元のノードの長さと等しい場合、新しく作成されたノードにはデータがありません。</p>

<p>分割されたテキストノードは、 {{domxref("Node.normalize()")}} メソッドを用いて結合することができます。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><var>newNode</var> = <var>textNode</var>.splitText(<var>offset</var>)
</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>offset</var></code></dt>
 <dd>テキストノードを分割する直前の位置。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>新しく生成された {{domxref("Text")}} ノードを返し、指定されたオフセット位置移行のテキストが格納されます。</p>

<h3 id="Exceptions" name="Exceptions">例外</h3>

<p>{{domxref("DOMException")}} で値が <code>INDEX_SIZE_ERR</code> のものは、指定されたオフセットが負の値であるか、ノードのテキストの16ビット単位の文字数よりも大きい場合に発生します。 {{domxref("DOMException")}} で値が <code>NO_MODIFICATION_ALLOWED_ERR</code> のものは、ノードが読取専用の場合に発生します。</p>

<h2 id="Example" name="Example">例</h2>

<p>この例では、 {{HTMLElement("p")}} のテキストが二つのテキストノードに分割され、 {{HTMLElement("u")}} がその間に挿入されます。</p>

<h3 id="HTML">HTML</h3>

<pre class="brush: html notranslate">&lt;p&gt;foobar&lt;/p&gt;</pre>

<h3 id="JavaScript">JavaScript</h3>

<pre class="brush: js notranslate">const p = document.querySelector('p');

// &lt;p&gt; の中身をテキストノードとして取得
const foobar = p.firstChild;

// 'foobar' を二つのテキストノード 'foo' と 'bar' に分割し、
// 'bar' を const として保存
const bar = foobar.splitText(3);

// &lt;u&gt; 要素を作成して ' new content ' を含める
const u = document.createElement('u');
u.appendChild(document.createTextNode(' new content '));

// &lt;u&gt; を 'bar' の前に追加
p.insertBefore(u, bar);

// 結果: &lt;p&gt;foo&lt;u&gt; new content &lt;/u&gt;bar&lt;/p&gt;</pre>

<h3 id="Result" name="Result">結果</h3>

<p>{{EmbedLiveSample("Example", 700, 70)}}</p>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
   <th scope="col">備考</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('DOM WHATWG', '#dom-text-splittext', 'Text.splitText')}}</td>
   <td>{{Spec2('DOM WHATWG')}}</td>
   <td>{{SpecName('DOM3 Core')}} から変更なし。</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM3 Core', 'core.html#ID-38853C1D', 'Text.splitText')}}</td>
   <td>{{Spec2('DOM3 Core')}}</td>
   <td>{{SpecName('DOM2 Core')}} から変更なし。</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM2 Core', 'core.html#ID-38853C1D', 'Text.splitText')}}</td>
   <td>{{Spec2('DOM2 Core')}}</td>
   <td>{{SpecName('DOM1')}} から変更なし。</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM1', 'level-one-core.html#ID-38853C1D', 'Text.splitText')}}</td>
   <td>{{Spec2('DOM1')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.Text.splitText")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>所属先の {{domxref("Text")}} インターフェイス</li>
 <li>逆のメソッド: {{domxref("Node.normalize")}}</li>
</ul>
