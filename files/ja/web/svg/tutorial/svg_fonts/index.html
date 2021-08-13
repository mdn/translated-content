---
title: SVG フォント
slug: Web/SVG/Tutorial/SVG_fonts
tags:
  - Advanced
  - NeedsUpdate
  - SVG
  - SVG:Tutorial
translation_of: Web/SVG/Tutorial/SVG_fonts
---
<p>{{ PreviousNext("Web/SVG/Tutorial/Filter_effects", "Web/SVG/Tutorial/SVG_Image_Tag") }}</p>

<p>SVG が規定された時点では、ブラウザーでウェブフォントの対応は普及していませんでした。しかし、テキストを正しく描画するためには、正しいフォントファイルへのアクセスが不可欠であるため、この機能を提供するためにフォント記述技術が SVG に追加されました。これは PostScript や OTF などの他のフォーマットとの互換性を目的としたものではなく、レンダリング時にグリフ情報を SVG に埋め込む簡単な手段です。</p>

<div class="note"><strong>SVG フォントは、現在 Safari と Android ブラウザーのみが対応しています。</strong><br>
Internet Explorer <a href="https://blogs.msdn.com/b/ie/archive/2010/08/04/html5-modernized-fourth-ie9-platform-preview-available-for-developers.aspx">は実装を検討しておらず</a>、 <a href="https://www.chromestatus.com/feature/5930075908210688">Chrome 38 (および Opera 25) では機能がら削除されており</a>、 Firefox は <a href="/ja/docs/Web/Guide/WOFF">WOFF</a> に集中するために<a class="link-https" href="https://bugzilla.mozilla.org/show_bug.cgi?id=119490">実装を無期限に延期しています</a>。しかし、 <a href="https://www.adobe.com/svg/viewer/install/">Adobe SVG Viewer</a> プラグインや Batik、 Inkscape の一部など、他のツールは SVG フォントの埋め込みに対応しています。</div>

<p>SVG フォントを定義するためのベースは {{ SVGElement("font") }} 要素です。</p>

<h2 id="Defining_a_font">フォントの定義</h2>

<p>フォントに必要なすべての情報を得ることに、連携して関わる要素がいくつかあります。始めに (<a href="https://www.w3.org/TR/SVG/fonts.html#FontElement">仕様書</a> で示されている) 宣言の例、その後に詳しい説明を示します。</p>

<pre>&lt;font id="Font1" horiz-adv-x="1000"&gt;
  &lt;font-face font-family="Super Sans" font-weight="bold" font-style="normal"
      units-per-em="1000" cap-height="600" x-height="400"
      ascent="700" descent="300"
      alphabetic="0" mathematical="350" ideographic="400" hanging="500"&gt;
    &lt;font-face-src&gt;
      &lt;font-face-name name="Super Sans Bold"/&gt;
    &lt;/font-face-src&gt;
  &lt;/font-face&gt;
  &lt;missing-glyph&gt;&lt;path d="M0,0h200v200h-200z"/&gt;&lt;/missing-glyph&gt;
  &lt;glyph unicode="!" horiz-adv-x="300"&gt;&lt;!-- Outline of exclam. pt. glyph --&gt;&lt;/glyph&gt;
  &lt;glyph unicode="@"&gt;&lt;!-- Outline of @ glyph --&gt;&lt;/glyph&gt;
  &lt;!-- more glyphs --&gt;
&lt;/font&gt;
</pre>

<p>まずは {{ SVGElement("font") }} 要素から始まります。これは id 要素を持っており、それは URI を通してフォントを参照する (後述) ために必要です。<code>horiz-adv-x</code> 属性は 1 つのグリフのパス定義に比べて、文字の幅を平均してどのくらい広げるかを定義します。値 <code>1000</code> は、作業を行うにあたりほどよい値を設定します。また、基本的なグリフボックスのレイアウトをさらに定義するための付随的な属性がいくつかあります。</p>

<p>{{ SVGElement("font-face") }} 要素 CSS の <a href="/ja/docs/Web/CSS/@font-face"><code>@font-face</code></a> 宣言と対になるものです。これはフォントウェイトやフォントスタイルの分類など、最終的なフォントの基本的なプロパティを定義します。前出の例で最も重要で、最初に定義するものは <code>font-family</code> です。この値は、CSS や SVG の <code>font-family</code> プロパティで参照することができます。<code>font-weight</code> および <code>font-style</code> 属性は、同じ目的を持ちます。その後に続く属性は、フォントレンダリングエンジンへのレンダリング指示になります。例えば、グリフ全体の高さを表すのが<a href="https://ja.wikipedia.org/wiki/%E3%82%A2%E3%82%BB%E3%83%B3%E3%83%80%E3%83%BC">アセンダー</a>です。</p>

<p>子要素である {{ SVGElement("font-face-src") }} 要素は、CSS の <code>@font-face</code> 宣言の <code>src</code> プロパティに対応します。子要素の {{ SVGElement("font-face-name") }} や {{ SVGElement("font-face-uri") }} を用いて、フォントの宣言で外部のソースを指し示すことができます。前出の例では、レンダラーの手元に "Super Sans Bold" という名前のローカルフォントが存在する場合は、そのフォントを用いるべきであることを示します。</p>

<p>{{ SVGElement("font-face-src") }} の後に {{ SVGElement("missing-glyph") }} 要素があります。これはあるグリフがフォント内で見つからず、またフォールバックする仕組みもない場合に何を表示するべきかを定義します。またこの要素では、どのようにグリフを作成するかも示しています。単純にグラフィックの SVG コンテンツを内部に追加するのです。また、{{ SVGElement("filter") }}、{{ SVGElement("a") }}、あるいは {{ SVGElement("script") }} といった、他の SVG 要素もここで用いることができます。ただし単純なグリフを作るなら、標準の SVG パスと同様に <code>d</code> 属性を追加することもできます。</p>

<p>実際のグリフは {{ SVGElement("glyph") }} 要素で定義します。ここで最も重要な属性は <code>unicode</code> です。この属性は Unicode のコードポイントを定義して、その文字が <code>glyph</code> 要素で示すグリフで表現されます。<code>lang</code> 属性を指定した場合は、さらにグリフを特定の言語 (フォントを使用する側の <code>xml:lang</code> で示されます) のみに限定することができます。繰り返しになりますがグリフを定義するために任意の SVG を用いることができ、またユーザエージェントが対応するすばらしいエフェクトを用いることもできます。</p>

<p><code>font</code> の内部では、さらに {{ SVGElement("hkern") }} と {{ SVGElement("vkern") }} の 2 つの要素を定義することができます。それぞれ、少なくとも 2 つの文字 (<code>u1</code> および <code>u2</code> 属性) への参照と、それらの文字間の距離をどの程度縮めるかを決定する属性 <code>k</code> を持ちます。以下の例では、ユーザーエージェントに "A" と "V" の文字を標準的な文字間の距離よりも近づけるように指示しています。</p>

<pre>&lt;hkern u1="A" u2="V" k="20" /&gt;
</pre>

<h2 id="Referencing_a_font">フォントの参照</h2>

<p>これはとても単純です。これまで説明したようにフォントの宣言をひとまとめに収めた場合は、<code>font-family</code> 属性を用いるだけでよいのです。</p>

<pre>&lt;font&gt;
  &lt;font-face font-family="Super Sans" /&gt;
  &lt;!-- and so on --&gt;
&lt;/font&gt;

&lt;text font-family="Super Sans"&gt;My text uses Super Sans&lt;/text&gt;
</pre>

<p>ただし、どこでどのようにフォントを定義するかの自由のために、複数の方法を自由に組み合わせてもかまいません。</p>

<h3 id="Option_Use_CSS_font-face">オプション: CSS @font-face の利用</h3>

<p>リモートの (またはリモートでない) フォントの参照に <code>@font-face</code> を用いることができます。</p>

<pre>&lt;font id="Super_Sans"&gt;
  &lt;!-- and so on --&gt;
&lt;/font&gt;

&lt;style type="text/css"&gt;
@font-face {
  font-family: "Super Sans";
  src: url(#Super_Sans);
}
&lt;/style&gt;

&lt;text font-family="Super Sans"&gt;My text uses Super Sans&lt;/text&gt;</pre>

<h3 id="Option_reference_a_remote_font">オプション: リモートフォントの参照</h3>

<p>前に述べた <code>font-face-uri</code> で外部のフォントを参照することができ、高い再利用性を得ることができます。</p>

<pre>&lt;font&gt;
  &lt;font-face font-family="Super Sans"&gt;
    &lt;font-face-src&gt;
      &lt;font-face-uri xlink:href="fonts.svg#Super_Sans" /&gt;
    &lt;/font-face-src&gt;
  &lt;/font-face&gt;
&lt;/font&gt;
</pre>

<p>{{ PreviousNext("Web/SVG/Tutorial/Filter_effects", "Web/SVG/Tutorial/SVG_Image_Tag") }}</p>
