---
title: '<plaintext>: プレーンテキスト要素 (非推奨)'
slug: Web/HTML/Element/plaintext
tags:
  - Element
  - HTML
  - Obsolete
  - Reference
  - Web
  - ウェブ
  - 要素
translation_of: Web/HTML/Element/plaintext
---
<div>{{Obsolete_header}}</div>

<p><span class="seoSummary"><em>プレーンテキスト要素</em> (<code>&lt;plaintext&gt;</code>) は、開始タグ以降のすべてを生のテキストとして表示し、それ以降の HTML を無視します。</span>開始タグ以降は全て生のテキスト扱いになるので、終了タグはありません。</p>

<div class="note"><strong>メモ</strong>: この要素は使用しないで下さい。

<ul>
 <li><code>&lt;plaintext&gt;</code> は HTML 2 より非推奨となっており、全てのブラウザーが実装しているわけではありません。実装しているブラウザーでも、一貫していません。</li>
 <li><code>&lt;plaintext&gt;</code> は HTML 5 で廃止されています。この要素を受け付けるブラウザーは {{HTMLElement("pre")}} 要素と同様に扱い、内部の HTML を解釈する場合もあります。</li>
 <li><code>&lt;plaintext&gt;</code> 要素が ({{HTMLElement("head")}} などの非表示の要素を除いて) ページの最初の要素になるのであれば、 HTML は使用しないでください。代わりに、テキストファイルを <code>text/plain</code> の <a href="/ja/docs/Properly_Configuring_Server_MIME_Types">MIME タイプ</a>で送信するようにしてください。</li>
 <li>この要素を使用する代わりに、 {{HTMLElement("pre")}} 要素か、意味的に適切であれば (インラインテキスト向けの) {{HTMLElement("code")}} 要素を使用してください。その際、コンテンツの中身がうっかり HTML として解釈されないように、 <code>&lt;</code>, <code>&gt;</code>, <code>&amp;</code> の各文字をエスケープしてください。</li>
 <li>等幅フォントは、 HTML 要素に <a href="/ja/docs/Web/CSS">CSS</a> の {{cssxref("font-family")}} スタイルを <code>monospace</code> にすることで適用することができます。</li>
</ul>
</div>

<h2 id="Attributes" name="Attributes">属性</h2>

<p>この要素は、全ての要素が持つ<a href="/ja/docs/Web/HTML/Global_attributes" rel="internal">グローバル属性</a>以外の属性を持ちません。</p>

<h2 id="DOM_interface" name="DOM_interface">DOM インタフェース</h2>

<p>この要素は {{domxref('HTMLElement')}} インタフェースを提供します。</p>

<div class="note">
<p><strong>実装メモ:</strong> Gecko 1.9.2 以前では、 Firefox はこの要素に {{domxref('HTMLSpanElement')}} インタフェースを実装しています。</p>
</div>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの対応</h2>

<p>{{Compat("html.elements.plaintext")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{HTMLElement("pre")}} 及び {{HTMLElement("code")}} 要素を代わりに使用してください。</li>
 <li>{{HTMLElement("plaintext")}} とほぼ同等の {{HTMLElement("listing")}} と {{HTMLElement("xmp")}} も廃止されています。</li>
</ul>

<div>{{HTMLRef}}</div>
