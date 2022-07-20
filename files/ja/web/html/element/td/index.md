---
title: '<td>: 表データセル要素'
slug: Web/HTML/Element/td
tags:
  - HTML
  - HTML 表形式データ
  - Reference
  - Web
  - ウェブ
  - セル
  - テーブル
  - データセル
  - 要素
translation_of: Web/HTML/Element/td
---
<div>{{HTMLRef}}</div>

<p><span class="seoSummary"><strong>HTML の <code>&lt;td&gt;</code> 要素</strong>は、表でデータを包含するセルを定義します。これは<em>表モデル</em>に関与します。</span></p>

<div>{{EmbedInteractiveExample("pages/tabbed/td.html","tabbed-taller")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/ja/docs/Web/HTML/Content_categories">コンテンツカテゴリ</a></th>
   <td>区分化ルート</td>
  </tr>
  <tr>
   <th scope="row">許可されている内容</th>
   <td><a href="/ja/docs/Web/HTML/Content_categories#Flow_content">フローコンテンツ</a></td>
  </tr>
  <tr>
   <th scope="row">タグの省略</th>
   <td>開始タグは必須です。<br>
    直後に {{HTMLElement("th")}} 要素または {{HTMLElement("td")}} 要素がある場合、または親要素内で以降のデータがない場合は終了タグを省略可能。</td>
  </tr>
  <tr>
   <th scope="row">許可されている親要素</th>
   <td>{{HTMLElement("tr")}} 要素</td>
  </tr>
  <tr>
   <th scope="row">暗黙の ARIA ロール</th>
   <td><code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/Cell_Role">cell</a></code> ({{HTMLElement("table")}} 要素の子孫である場合)</td>
  </tr>
  <tr>
   <th scope="row">許可されている ARIA ロール</th>
   <td>すべて</td>
  </tr>
  <tr>
   <th scope="row">DOM インターフェイス</th>
   <td>{{domxref("HTMLTableDataCellElement")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Attributes" name="Attributes">属性</h2>

<p>この要素には<a href="/ja/docs/Web/HTML/Global_attributes">グローバル属性</a>があります。</p>

<dl>
 <dt>{{htmlattrdef("colspan")}}</dt>
 <dd>この属性はセルをいくつの列に広げるかを示す、負でない整数を持ちます。既定値は <code>1</code> です。1000 を超える値は正しくないとみなされ、既定値 (1) が設定されるでしょう。</dd>
 <dt>{{htmlattrdef("headers")}}</dt>
 <dd>この属性は、空白文字で区切られた文字列のリストを持ちます。各々の文字列は、この要素に当てはめる {{HTMLElement("th")}} 要素の <strong>id</strong> 属性と対応します。</dd>
 <dt>{{htmlattrdef("rowspan")}}</dt>
 <dd>この属性はセルをいくつの行に広げるかを示す、負でない整数を持ちます。デフォルト値は <code>1</code> です。<code>0</code> を設定した場合は、セルが属する表セクション ({{HTMLElement("thead")}}, {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}}) の終端 (暗黙的に定義されるものであっても) まで拡張します。65534 より大きな値は、65534 に切り詰めます。</dd>
</dl>

<h3 id="Deprecated_attributes" name="Deprecated_attributes">非推奨の属性</h3>

<dl>
 <dt>{{htmlattrdef("abbr")}} {{obsolete_inline("html5")}}</dt>
 <dd>この属性は、セルの内容の簡潔な説明を持ちます。読み上げソフトなど一部のユーザーエージェントは、内容自体の前にこの説明を提供することがあります。
 <div class="note"><strong>注:</strong> この属性は最新の標準で廃止されているため、使用しないでください。代わりに、セルの内容を独立した短縮コンテンツそのもので始めることを検討するか、セルの内容として短縮コンテンツを使用して長いコンテンツはセルの説明として <strong>title</strong> 属性に追加してください。</div>
 </dd>
 <dt>{{htmlattrdef("align")}} {{obsolete_inline("html5")}}</dt>
 <dd>この列挙属性は各セルの中身について、水平方向の配置方法を制御します。以下の値を指定可能です。
 <ul>
  <li><code>left</code>: 中身をセルの左側に揃えます。</li>
  <li><code>center</code>: 中身をセル内で中央揃えにします。</li>
  <li><code>right</code>: 中身をセルの右側に揃えます。</li>
  <li><code>justify</code>: 中身がセル内で両端揃えになるように、テキストコンテンツに空白を挿入します。</li>
  <li><code>char</code>: テキストコンテンツを特定の文字に対して、最小のオフセットで揃えます。特定の文字は {{htmlattrxref("char", "td")}} 属性および {{htmlattrxref("charoff", "td")}} 属性で定義します。{{unimplemented_inline(2212)}}</li>
 </ul>

 <p>この属性を設定しない場合は、値が <code>left</code> であるとみなされます。</p>

 <div class="note"><strong>注:</strong> この属性は最新の標準仕様で廃止された (サポートされていない) ため、使用しないでください。

 <ul>
  <li><code>left</code>, <code>center</code>, <code>right</code>, <code>justify</code> の値と同様の効果を得るには、 CSS の {{cssxref("text-align")}} プロパティを使用してください。</li>
  <li>CSS3 で <code>char</code> の値と同様の効果を得るには、 {{cssxref("text-align")}} プロパティの値 {{htmlattrxref("char", "td")}} を使用できます {{unimplemented_inline}}。</li>
 </ul>
 </div>
 </dd>
 <dt>{{htmlattrdef("axis")}} {{obsolete_inline("html5")}}</dt>
 <dd>この属性は、空白文字で区切られた文字列のリストを持ちます。各文字列は、このヘッダーを適用するセルグループの <code>id</code> です。
 <div class="note"><strong>注:</strong> この属性は最新の標準で廃止されているため、使用しないでください。</div>
 </dd>
 <dt>{{htmlattrdef("bgcolor")}} {{Non-standard_inline}}</dt>
 <dd>この属性は、列の各セルの背景色を定義します。値は <a href="https://www.w3.org/Graphics/Color/sRGB">sRGB</a> で定義された6桁の16進数値のいずれかで、先頭に '#' を付加します。16個のあらかじめ定義された色文字列から、1つを使用することができます。
 <table>
  <tbody>
   <tr>
    <td style="background-color: black; width: 24px; height: 24px; border: 1px solid black;"></td>
    <td><code>black</code> = "#000000"</td>
    <td style="background-color: green; width: 24px; height: 24px; border: 1px solid black;"></td>
    <td><code>green</code> = "#008000"</td>
   </tr>
   <tr>
    <td style="background-color: silver; width: 24px; height: 24px; border: 1px solid black;"></td>
    <td><code>silver</code> = "#C0C0C0"</td>
    <td style="background-color: lime; width: 24px; height: 24px; border: 1px solid black;"></td>
    <td><code>lime</code> = "#00FF00"</td>
   </tr>
   <tr>
    <td style="background-color: gray; width: 24px; height: 24px; border: 1px solid black;"></td>
    <td><code>gray</code> = "#808080"</td>
    <td style="background-color: olive; width: 24px; height: 24px; border: 1px solid black;"></td>
    <td><code>olive</code> = "#808000"</td>
   </tr>
   <tr>
    <td style="background-color: white; width: 24px; height: 24px; border: 1px solid black;"></td>
    <td><code>white</code> = "#FFFFFF"</td>
    <td style="background-color: yellow; width: 24px; height: 24px; border: 1px solid black;"></td>
    <td><code>yellow</code> = "#FFFF00"</td>
   </tr>
   <tr>
    <td style="background-color: maroon; width: 24px; height: 24px; border: 1px solid black;"></td>
    <td><code>maroon</code> = "#800000"</td>
    <td style="background-color: navy; width: 24px; height: 24px; border: 1px solid black;"></td>
    <td><code>navy</code> = "#000080"</td>
   </tr>
   <tr>
    <td style="background-color: red; width: 24px; height: 24px; border: 1px solid black;"></td>
    <td><code>red</code> = "#FF0000"</td>
    <td style="background-color: blue; width: 24px; height: 24px; border: 1px solid black;"></td>
    <td><code>blue</code> = "#0000FF"</td>
   </tr>
   <tr>
    <td style="background-color: purple; width: 24px; height: 24px; border: 1px solid black;"></td>
    <td><code>purple</code> = "#800080"</td>
    <td style="background-color: teal; width: 24px; height: 24px; border: 1px solid black;"></td>
    <td><code>teal</code> = "#008080"</td>
   </tr>
   <tr>
    <td style="background-color: fuchsia; width: 24px; height: 24px; border: 1px solid black;"></td>
    <td><code>fuchsia</code> = "#FF00FF"</td>
    <td style="background-color: aqua; width: 24px; height: 24px; border: 1px solid black;"></td>
    <td><code>aqua</code> = "#00FFFF"</td>
   </tr>
  </tbody>
 </table>

 <div class="note"><strong>使用上のメモ:</strong> この属性は標準外であり Internet Explorer の一部バージョンしか実装していませんので、使用しないでください。 {{ HTMLElement("td") }} 要素は <a href="/ja/docs/Web/CSS">CSS</a> を使用してスタイル付けをしてください。 <strong>bgcolor</strong> 属性と同様の効果を与えるには、 <a href="/ja/docs/Web/CSS">CSS</a> の {{ cssxref("background-color") }} プロパティを適切な {{ HTMLElement("td") }} 又は {{ HTMLElement("th") }} 要素で使用してください。</div>
 </dd>
</dl>

<dl>
 <dt>{{htmlattrdef("char")}} {{obsolete_inline("html5")}}</dt>
 <dd>この属性は、列内のセルで揃える文字を設定します。典型的な値に、数値や金額を揃えようとするときのピリオド (.) があります。{{ htmlattrxref("align", "td") }} 属性を <code>char</code> に設定していない場合は、この属性を無視します。
 <div class="note"><strong>注:</strong> この属性は最新の標準で廃止されているため、使用しないでください。 CSS3 で {{ htmlattrxref("char", "td") }} と同じ効果を得るには、 {{cssxref("text-align")}} プロパティの最初の値としてその文字を設定することができます。 CSS3 では{{unimplemented_inline}}</div>
 </dd>
 <dt>{{htmlattrdef("charoff")}} {{obsolete_inline("html5")}}</dt>
 <dd>この属性は、 <strong>char</strong> 属性で指定した揃え文字から列のデータをオフセットする文字数を示します。
 <div class="note"><strong>注:</strong> この属性は最新の標準で廃止されているため、使用しないでください。</div>
 </dd>
 <dt>{{htmlattrdef("height")}} {{Deprecated_inline("html 4")}}, {{obsolete_inline("html5")}}</dt>
 <dd>この属性はセルの高さの推奨値を定義するために使用されます。
 <div class="note"><strong>注:</strong> この属性は最新の標準で廃止されているため、使用しないでください。代わりに CSS の {{cssxref("height")}} プロパティを使用してください。</div>
 </dd>
 <dt>{{htmlattrdef("scope")}} {{obsolete_inline("html5")}}</dt>
 <dd>これは列挙型の属性で、この ({{HTMLElement("th")}} で定義されている) 見出し要素が関連するセルを定義します。次の値を取ることができます。
 <div class="note"><strong>注:</strong> この属性を表のセル要素に使用することは、最新の仕様書で廃止されました。この属性は {{HTMLElement("th")}} 要素のみに、行と列のどちらの見出しであるかを定義するために使用してください。</div>
 </dd>
 <dt>{{htmlattrdef("valign")}} {{obsolete_inline("html5")}}</dt>
 <dd>この属性は、表本体の各行のセルにおける垂直方向のテキスト配置方法を指定します。以下の値が指定可能です。
 <ul>
  <li><code>baseline</code>: テキストを可能な限りセルの下端に近づけますが、下端ではなく文字の<a href="https://en.wikipedia.org/wiki/Baseline_%28typography%29">ベースライン</a>に揃えます。文字がサイズ全体に渡る場合は、 <code>bottom</code> と同じ効果になります。</li>
  <li><code>bottom</code>: テキストを可能な限りセルの下端に近づけて配置します。</li>
  <li><code>middle</code>: テキストをセル内の中央に置きます。</li>
  <li><code>top</code>: テキストを可能な限りセルの上端に近づけて配置します。</li>
 </ul>

 <div class="note"><strong>注:</strong> この属性は最新の標準で廃止されているため、使用しないでください。代わりに CSS の {{cssxref("vertical-align")}} プロパティを使用してください。</div>
 </dd>
 <dt>{{htmlattrdef("width")}} {{Deprecated_inline("html 4")}}, {{obsolete_inline("html5")}}</dt>
 <dd>この属性は、セルの推奨する幅を定義します。<a href="/ja/docs/Web/API/HTMLTableElement/cellSpacing">cellspacing</a> 及び <a href="/ja/docs/Web/API/HTMLTableElement/cellPadding">cellpadding</a> がスペースを追加し、また {{HTMLElement("col")}} の幅も影響を与えます。通常、列の幅が特定のセルを正常に表示できないほど狭く、またそのようなセルが存在する場合は、表示する際に幅を広げるでしょう。
 <div class="note"><strong>注:</strong> この属性は最新の標準で廃止されているため、使用しないでください。代わりに CSS の {{cssxref("width")}} プロパティを使用してください。</div>
 </dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<p><code>&lt;td&gt;</code> 要素の使用例については、 {{HTMLElement("table")}} を参照してください。</p>

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
   <td>{{SpecName('HTML WHATWG','tables.html#the-td-element','td element')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C','tabular-data.html#the-td-element','td element')}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("html.elements.td")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>他の表関連 HTML 要素: {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}}</li>
</ul>
