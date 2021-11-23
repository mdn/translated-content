---
title: <display-listitem>
slug: Web/CSS/display-listitem
tags:
  - CSS
  - CSS データ型
  - CSS 表示
  - Reference
  - list-item
translation_of: Web/CSS/display-listitem
---
<div>{{CSSRef}}</div>

<p class="summary"> <code style="white-space: nowrap;">list-item</code> キーワードは、要素に {{CSSxRef("list-style")}} プロパティで指定された内容 (例えば見出し記号) を含む <code>::marker</code> 疑似要素と共に、自身の内容物のために指定された種類の基本的なボックスを生成します。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<p><code style="white-space: nowrap;">list-item</code> 単独の値を指定すると、要素はリストの項目のように動作します。これは {{CSSxRef("list-style-type")}} や {{CSSxRef("list-style-position")}} と共に使用することができます。</p>

<p><code style="white-space: nowrap;">list-item</code> は {{CSSxRef("&lt;display-outside&gt;")}} キーワードのいずれかと、 {{CSSxRef("&lt;display-inside&gt;")}} の <code>flow</code> または <code style="white-space: nowrap;">flow-root</code> キーワードと組み合わせることもできます。</p>

<div class="note">
<p><strong>メモ</strong>: 二つの値の構文に対応しているブラウザーでは、内部表示種別がないと既定で flow になります。外部表示種別が指定されないと、基本ボックスは外部表示種別が <code>block</code> になります。</p>
</div>

<h2 id="Example" name="Example">例</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html;">&lt;div class="fake-list"&gt;I will display as a list item&lt;/div&gt;
</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css;">.fake-list {
  display: list-item;
  list-style-position: inside;
}
</pre>

<h3 id="Result" name="Result">結果</h3>

<p>{{EmbedLiveSample("Example", "100%", 150)}}</p>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<h3 id="Support_of_list-item" name="Support_of_list-item"><code>list-item</code> の対応</h3>

<p>{{Compat("css.properties.display.list-item", 10)}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{CSSxRef("display")}}
  <ul>
   <li>{{CSSxRef("&lt;display-outside&gt;")}}</li>
   <li>{{CSSxRef("&lt;display-inside&gt;")}}</li>
   <li>{{CSSxRef("&lt;display-internal&gt;")}}</li>
   <li>{{CSSxRef("&lt;display-box&gt;")}}</li>
   <li>{{CSSxRef("&lt;display-legacy&gt;")}}</li>
  </ul>
 </li>
</ul>
