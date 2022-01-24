---
title: user-modify
slug: Web/CSS/user-modify
tags:
  - CSS
  - CSS プロパティ
  - Deprecated
  - Mozilla 拡張
  - Non-standard
  - Reference
  - WebKit 拡張
  - 標準外
  - 非推奨
translation_of: Web/CSS/user-modify
---
<div>{{CSSRef}}{{Non-standard_Header}}{{Deprecated_Header}}</div>

<p><strong><code>user-modify</code></strong> プロパティは Firefox では効果がありません。元々は要素の内容をユーザーが編集できるかどうかを決める予定でした。</p>

<pre class="brush:css">/* キーワード値 */
user-modify: read-only;
user-modify: read-write;
user-modify: write-only;

/* グローバル値 */
user-modify: inherit;
user-modify: initial;
user-modify: unset;
</pre>

<div class="warning">
<p>このプロパティは {{HTMLAttrxRef("contenteditable")}} 属性に置き換えられました。</p>
</div>

<p>{{CSSInfo}}</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<p><code>-moz-user-modify</code> プロパティは、以下のリストにあるキーワード値の一つで指定します。</p>

<h3 id="Values" name="Values">値</h3>

<dl>
 <dt><code>read-only</code></dt>
 <dd>既定値です。内容は読み取り専用です。</dd>
 <dt><code>read-write</code></dt>
 <dd>ユーザーが内容を読み書きできます。</dd>
 <dt><code>read-write-plaintext-only</code> {{Non-standard_Inline}}</dt>
 <dd><code>read-write</code> と同じですが、リッチテキスト書式は失われます。</dd>
 <dt><code>write-only</code></dt>
 <dd>ユーザーが内容を編集できますが、読むことはできません。</dd>
</dl>

<h3 id="Formal_syntax" name="Formal_syntax">形式文法</h3>

{{CSSSyntax}}

<h2 id="Examples" name="Examples">例</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush:html">&lt;div class="readwrite"&gt;The user is able to change this text.&lt;/div&gt;
</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush:css">.readwrite {
  -moz-user-modify: read-write;
  -webkit-user-modify: read-write;
}
</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<p>このプロパティは仕様書で定義されていません。類似のプロパティである <code>user-focus</code> が、 <a class="external" href="http://www.w3.org/TR/2000/WD-css3-userint-20000216">CSS3 UI 仕様書の早期の草稿</a>で提案されましたが、作業グループによって拒否されました。</p>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの対応</h2>

<p>{{Compat("css.properties.user-modify")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{CSSxRef("-moz-user-focus")}}</li>
 <li>{{CSSxRef("-moz-user-input")}}</li>
 <li>{{CSSxRef("-moz-user-select")}}</li>
</ul>
