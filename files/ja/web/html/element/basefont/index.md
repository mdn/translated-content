---
title: <basefont>
slug: Web/HTML/Element/basefont
tags:
  - Element
  - HTML
  - Obsolete
  - Reference
  - Web
  - フォント
translation_of: Web/HTML/Element/basefont
---
<div>{{obsolete_header}}</div>

<p><span class="seoSummary">廃止された <strong>HTML の基本フォント要素</strong> (<code>&lt;basefont&gt;</code>) は、子孫要素の既定のフォントの種類、大きさ、色を設定します。</span>設定すると、 {{HTMLElement("font")}} を使用したフォントの大きさは基本の大きさから相対的にな物になります。</p>

<p>この要素は使用しないでください。要素やそのコンテンツのフォントの設定を変更するには、代わりに、 {{cssxref("font")}}, {{cssxref("font-family")}}, {{cssxref("font-size")}}, {{cssxref("color")}} を使用してください。</p>

<h2 id="Attributes" name="Attributes">属性</h2>

<p>他の全ての HTML 要素と同様に、この要素は<a href="/ja/docs/HTML/Global_attributes" title="HTML/Global attributes">グローバル属性</a>に対応します。</p>

<dl>
 <dt>{{htmlattrdef("color")}}</dt>
 <dd>この属性は、テキストの文字色を色名または16進の #RRGGBB 表記で設定します。</dd>
 <dt>{{htmlattrdef("face")}}</dt>
 <dd>この属性は、1つ以上のフォント名のリストです。文書の文字列は既定のスタイルで、クライアントのブラウザーがサポートする最初のフォント書体を使用して表示します。リスト内のフォントがローカルシステムにインストールされていない場合、一般的にブラウザーはシステムのプロポーショナルフォントまたは等幅フォントを既定値にします。</dd>
 <dt>{{htmlattrdef("size")}}</dt>
 <dd>この属性は、フォントのサイズを数値または相対値で指定します。数値の範囲は1から7で、1が最小、3が既定値です。</dd>
</dl>

<h2 id="使用上のメモ">使用上のメモ</h2>

<p><strong>この要素を使用しないでください！</strong>この要素は主要ブラウザー間での一貫した実装がないまま、一度 HTML 3.2 の仕様として策定されました。さらに、その後のブラウザーのバージョンアップでも一貫した実装は行なわれませんでした。これを使用しても、常に<em>不確実な</em>結果しかもたらされませんでした。</p>

<p><code>&lt;basefont&gt;</code> 要素は、スタイルの調整用途の為のみの他の要素と同時に、既に非推奨になっています。 HTML 4 より、HTML はスタイル情報を伝えなくなりました（{{HTMLElement("style")}} 要素や各要素の <strong>style</strong> 属性を除く）。 HTML5 では、この要素は完全に削除されました。新たなウェブ開発では、スタイルを <a href="/ja/docs/CSS" title="CSS">CSS</a> のみで記述してください。</p>

<p>以前の {{HTMLElement("font")}} 要素の動作は <a href="/ja/docs/Web/CSS/CSS_Fonts">CSS フォント</a>のプロパティで実現でき、またより詳しく制御できます。</p>

<h2 id="DOM_interface" name="DOM_interface">DOM インターフェイス</h2>

<p>この要素は {{domxref("HTMLBaseFontElement")}} インターフェイスを提供します。</p>

<h2 id="Example" name="Example">例</h2>

<pre>&lt;basefont color="#FF0000" face="Helvetica" size="+2" /&gt;
</pre>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザー実装状況</h2>

<p>{{Compat("html.elements.basefont")}}</p>

<h2 id="Notes" name="Notes">メモ</h2>

<ul>
 <li>HTML 3.2 は basefont 要素に対応していますが、 size 属性のみです。</li>
 <li>HTML および XHTML の strict 仕様では、この要素に対応していません。</li>
 <li>Mozilla や Opera などの一部の標準志向ブラウザーは、これが transitional の標準仕様の一部であるにもかかわらず、この要素に対応していません。</li>
 <li>この要素は、 {{HTMLElement("body")}} 要素の CSS 規則で模倣できます。</li>
 <li>XHTML 1.0 では <code>&lt;basefont /&gt;</code> のように末尾のスラッシュが必要です。</li>
</ul>

<div>{{HTMLRef}}</div>
