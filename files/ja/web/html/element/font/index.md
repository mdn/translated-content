---
title: <font>
slug: Web/HTML/Element/font
tags:
  - Element
  - HTML
  - Obsolete
  - Reference
  - Web
  - 廃止
translation_of: Web/HTML/Element/font
---
<div>{{ obsolete_header }}</div>

<h2 id="概要">概要</h2>

<p><em>フォント要素</em>（<code>&lt;font&gt;</code>）はその内包するテキストの、フォントサイズ、文字色、使用フォントを定義します。</p>

<div class="note">
<p><em>使用上の注意:</em></p>

<p><strong>この要素は使用しないで下さい！</strong> この要素は HTML 3.2 で一度仕様に取り込まれましたが、HTML 4.01 で他の外見のみに関するすべての要素とともに非推奨要素とされ、 HTML5 で廃止されています。</p>

<p>HTML 4 になって、 HTML ではスタイルに関する情報を扱わなくなりました（{{HTMLElement("style")}} 要素や各要素の <strong>style</strong> 属性は例外）。新規のウェブ開発では、スタイルは <a href="/ja/docs/CSS" title="CSS">CSS</a> のみを用いて記述するべきです。</p>

<p>以前の {{HTMLElement("font")}} 要素の動きは、 CSS の <a href="/ja/docs/Web/CSS/CSS_Fonts">CSS Fonts</a> でより良い形で実現できます。</p>
</div>

<h2 id="属性">属性</h2>

<p>他のすべての HTML 要素と同様に、この要素は <a href="/ja/docs/HTML/Global_attributes" title="HTML/Global attributes">グローバル属性</a>に対応しています。</p>

<dl>
 <dt>{{ htmlattrdef("color") }}</dt>
 <dd>色名または #RRGGBB 形式のカラーコードでテキストの色を指定します。</dd>
 <dt>{{ htmlattrdef("face") }}</dt>
 <dd>フォント名を 1 つ、またはカンマで区切って複数指定します。複数記述した場合は、表示可能なフォントの内で最初のものが優先されます。指定したフォントが全てローカルのシステム内にインストールされていない場合は、システムで設定されている等幅フォントかプロポーショナルフォントが適用されます。</dd>
 <dt>{{ htmlattrdef("size") }}</dt>
 <dd>フォントサイズとして、数値または相対値キーワードを指定します。 数値の場合の範囲は <code>1</code> から <code>7</code> で、<code>1</code> が最小、<code>3</code> が初期値となります。 「<code>+2</code>」、「<code>-3</code>」の様に、{{ HTMLElement("basefont") }} 要素の {{ htmlattrxref("size", "basefont") }} 属性の値、もしくは初期値である <code>3</code> を基準とする相対値で記述する事も可能です。</dd>
</dl>

<h2 id="DOM_interface" name="DOM_interface">DOM インターフェース</h2>

<p>この要素は {{domxref("HTMLFontElement")}} インターフェースを提供します。</p>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("html.elements.font")}}</p>

<div>{{ HTMLRef }}</div>
