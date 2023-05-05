---
title: '<th>: 表見出し要素'
slug: Web/HTML/Element/th
---

{{HTMLSidebar}}

**`<th>`** は [HTML](/ja/docs/Web/HTML) の要素で、表のセルのグループ用の見出しであるセルを定義します。このグループの正確な性質は、{{htmlattrxref("scope", "th")}} 属性と {{htmlattrxref("headers", "th")}} 属性で定義します。

{{EmbedInteractiveExample("pages/tabbed/th.html","tabbed-taller")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/Guide/HTML/Content_categories"
          >コンテンツカテゴリー</a
        >
      </th>
      <td>なし。</td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
        <a href="/ja/docs/Web/Guide/HTML/Content_categories#フローコンテンツ">フローコンテンツ</a>、ただしヘッダー、フッター、区分コンテンツ、見出しコンテンツを除く。
      </td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>
        開始タグは必須です。<br>直後に {{HTMLElement("th")}} 要素または {{HTMLElement("td")}} 要素がある場合、または親要素内で以降のデータがない場合は終了タグを省略可能。
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>{{HTMLElement("tr")}} 要素</td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td>
        <code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/columnheader_role">columnheader</a></code> または <code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/rowheader_role">rowheader</a></code>
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>すべて</td>
    </tr>
    <tr>
      <th scope="row">DOM インターフェイス</th>
      <td>{{domxref("HTMLTableCellElement")}}</td>
    </tr>
  </tbody>
</table>

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Global_attributes)があります。

- {{htmlattrdef("abbr")}}
  - : この属性は、セルの内容の簡潔な説明を持ちます。読み上げソフトなど一部のユーザーエージェントは、内容自体の前にこの説明を提供することがあります。
- {{htmlattrdef("colspan")}}
  - : この属性はセルをいくつの列に広げるかを示す、負でない整数を持ちます。既定値は `1` です。1000 を超える値は正しくないとみなされ、既定値 (1) が設定されるでしょう。
- {{htmlattrdef("headers")}}
  - : この属性は、空白文字で区切られた文字列のリストを持ちます。各々の文字列は、この要素に当てはめる {{HTMLElement("th")}} 要素の **id** 属性と対応します。
- {{htmlattrdef("rowspan")}}
  - : この属性はセルをいくつの行に広げるかを示す、負でない整数を持ちます。既定値は `1` です。`0` を設定した場合は、セルが属する表セクション ({{HTMLElement("thead")}}, {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}}, 暗黙的に定義されたものも含む) の終端まで拡張します。 65534 より大きな値は、 65534 に切り詰めます。
- {{htmlattrdef("scope")}}

  - : これは列挙型の属性で、この ({{HTMLElement("th")}} で定義されている) 見出し要素が関連するセルを定義します。次の値を取ることができます。

    - `row`: この見出しはその行に属するすべてのセルに関連します。
    - `col`: この見出しはその列に属するすべてのセルに関連します。
    - `rowgroup`: この見出しは行グループに属し、その中のすべてのセルに関連します。これらのセルは {{HTMLElement("table")}} 要素の `[dir](/ja/docs/Web/HTML/Global_attributes/dir)` 属性の値によって、見出しの右又は左に配置されます。
    - `colgroup`: この見出しは列グループに属し、その中のすべてのセルに関連します。

    もし `scope` 属性が指定されていないか、その値が `row`, `col`, `rowgroup`, `colgroup` でない場合は、ブラウザーは自動的に見出しセルが適用されるセルの集合を選択します。

### 非推奨の属性

- {{htmlattrdef("align")}} {{deprecated_inline}}

  - : この列挙属性は各セルの中身について、水平方向の配置方法を制御します。以下の値を指定可能です。

    - `left`: 中身をセルの左側に揃えます。
    - `center`: 中身をセル内で中央揃えにします。
    - `right`: 中身をセルの右側に揃えます。
    - `justify` (テキストのみ): セルの中で幅が全体にわたるように、中身が引き延ばされます。
    - `char` (テキストのみ): テキストコンテンツを特定の文字に対して、最小のオフセットで揃えます。特定の文字は {{htmlattrxref("char", "th")}} 属性および {{htmlattrxref("charoff", "th")}} 属性で定義します。

    この属性を設定しない場合は、値が `left` であるとみなされます。

    > **メモ:** この属性は最新の標準仕様で廃止されたため、使用しないでください。
    >
    > - `left`, `center`, `right`, `justify` の値と同様の効果を得るには、 CSS の {{cssxref("text-align")}} プロパティを使用してください。
    > - `char` の値と同様の効果を得るには、 {{cssxref("text-align")}} プロパティに {{htmlattrxref("char", "th")}} で使用する値と同じものを指定してください。

- {{htmlattrdef("axis")}} {{deprecated_inline}}

  - : この属性は、空白文字で区切られた文字列のリストを持ちます。各文字列は、このヘッダーを適用するセルグループの `id` です。

    > **メモ:** この属性は最新の標準で廃止されているため、使用しないでください。代わりに {{htmlattrxref("scope", "th")}} 属性を使用してください。

- {{htmlattrdef("bgcolor")}} {{Non-standard_inline}}

  - : この属性は、列の各セルの背景色を定義します。値は [sRGB](https://www.w3.org/Graphics/Color/sRGB) で定義された6桁の16進数値のいずれかで、先頭に '#' を付加します。16個のあらかじめ定義された色文字列から、 1 つを使用することができます。

    - `black` = "#000000"
    - `green` = "#008000"
    - `silver` = "#C0C0C0"
    - `lime` = "#00FF00"
    - `gray` = "#808080"
    - `olive` = "#808000"
    - `white` = "#FFFFFF"
    - `yellow` = "#FFFF00"
    - `maroon` = "#800000"
    - `navy` = "#000080"
    - `red` = "#FF0000"
    - `blue` = "#0000FF"
    - `purple` = "#800080"
    - `teal` = "#008080"
    - `fuchsia` = "#FF00FF"
    - `aqua` = "#00FFFF"

    > **メモ:** この属性は標準外であり Internet Explorer の一部バージョンしか実装していませんので、使用しないでください。 {{HTMLElement("th")}} 要素は [CSS](/ja/docs/Web/CSS) を使用してスタイル付けをしてください。同様の効果を与えるには、 [CSS](/ja/docs/Web/CSS) の {{cssxref("background-color")}} プロパティを使用してください。

- {{htmlattrdef("char")}} {{deprecated_inline}}

  - : この属性は、列内のセルで揃える文字を設定します。典型的な値に、数値や金額を揃えようとするときのピリオド (.) があります。 {{htmlattrxref("align", "th")}} 属性を `char` に設定していない場合は、この属性を無視します。

    > **メモ:** この属性は最新の標準で廃止されているため、使用しないでください。 CSS3 で同じ効果を得るには、 {{cssxref("text-align")}} プロパティの最初の値としてその文字を設定することができます。

- {{htmlattrdef("charoff")}} {{deprecated_inline}}

  - : この属性は、 **char** 属性で指定した揃え文字から列のデータをオフセットする文字数を示します。この値は、このシフトの長さを指定します。

    > **メモ:** この属性は最新の標準で廃止されているため、使用しないでください。

- {{htmlattrdef("height")}} {{deprecated_inline}}

  - : この属性はセルの高さの推奨値を定義するために使用されます。

    > **メモ:** この属性は最新の標準で廃止されているため、使用しないでください。代わりに CSS の {{cssxref("height")}} プロパティを使用してください。

- {{htmlattrdef("valign")}} {{deprecated_inline}}

  - : この属性は、表本体の各行のセルにおける垂直方向のテキスト配置方法を指定します。以下の値が指定可能です。

    - `baseline`: テキストを可能な限りセルの下端に近づけますが、下端ではなく文字の[ベースライン](https://en.wikipedia.org/wiki/Baseline_%28typography%29)に揃えます。文字がサイズ全体に渡る場合は、 `bottom` と同じ効果になります。
    - `bottom`: テキストを可能な限りセルの下端に近づけて配置します。
    - `middle`: テキストをセル内の中央に置きます。
    - `top`: テキストを可能な限りセルの上端に近づけて配置します。

    > **メモ:** この属性は最新の標準で廃止されているため、使用しないでください。代わりに CSS の {{cssxref("vertical-align")}} プロパティを使用してください。

- {{htmlattrdef("width")}} {{deprecated_inline}}

  - : この属性は、セルの推奨する幅を定義します。 {{domxref("HTMLTableElement.cellSpacing", "cellspacing")}} および {{domxref("HTMLTableElement.cellPadding", "cellpadding")}} プロパティで追加のスペースを追加し、また {{HTMLElement("col")}} の幅も影響を与えます。通常、列の幅が特定のセルを正常に表示できないほど狭く、またそのようなセルが存在する場合は、表示する際に幅を広げるでしょう。

    > **メモ:** この属性は最新の標準で廃止されているため、使用しないでください。代わりに CSS の {{cssxref("width")}} プロパティを使用してください。

## 例

`<th>` 要素の例については、 {{HTMLElement("table")}} を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

<h2 id="See_also" name="See_also">関連情報</h2>

- 他の表関連 HTML 要素: {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}}
