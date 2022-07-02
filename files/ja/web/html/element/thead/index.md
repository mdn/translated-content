---
title: '<thead>: 表ヘッダー要素'
slug: Web/HTML/Element/thead
tags:
  - 要素
  - HTML
  - HTML 表形式データ
  - リファレンス
  - 表
  - ウェブ
browser-compat: html.elements.thead
translation_of: Web/HTML/Element/thead
---

{{HTMLRef}}

**`<thead>`** は [HTML](/ja/docs/Web/HTML) の要素で、表の列の見出しを定義する行のセットを定義します。

{{EmbedInteractiveExample("pages/tabbed/thead.html","tabbed-taller")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/Guide/HTML/Content_categories">コンテンツカテゴリー</a>
      </th>
      <td>なし</td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>0 個以上の {{HTMLElement("tr")}} 要素</td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>
        開始タグは必須。 {{HTMLElement("thead")}} 要素の直後に {{HTMLElement("tbody")}} 要素または {{HTMLElement("tfoot")}} 要素がある場合は終了タグを省略可能。
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>
        {{HTMLElement("table")}} 要素。 {{HTMLElement("thead")}} は（暗黙的に定義されるものであっても） {{HTMLElement("caption")}} 要素や {{HTMLElement("colgroup")}} 要素の後方かつ {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("tr")}} の各要素の前方に配置しなければなりません。
      </td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td>
        <code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/Rowgroup_Role">rowgroup</a></code>
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>すべて</td>
    </tr>
    <tr>
      <th scope="row">DOM インターフェイス</th>
      <td>{{domxref("HTMLTableSectionElement")}}</td>
    </tr>
  </tbody>
</table>

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Global_attributes)があります。

### 非推奨の属性

- {{htmlattrdef("align")}} {{deprecated_inline}}

  - : この列挙属性は各セルの中身について、水平方向の配置方法を制御します。以下の値を指定可能です。

    - `left`: 中身をセルの左側に揃えます。
    - `center`: 中身をセル内で中央揃えにします。
    - `right`: 中身をセルの右側に揃えます。
    - `justify`: 中身がセル内で両端揃えになるように、テキストコンテンツに空白を挿入します。
    - `char`: テキストコンテンツを特定の文字に対して、最小のオフセットで揃えます。特定の文字は {{htmlattrxref("char", "thead")}} 属性および {{htmlattrxref("charoff", "thead")}} 属性で定義します。

    この属性を設定しない場合は、値が `left` であるとみなされます。

    > **Warning:** この属性は最新の標準仕様で廃止された (対応していない) ため、使用しないでください。
    >
    > - `left`, `center`, `right`, `justify` の値と同様の効果を得るには、 CSS の {{cssxref("text-align")}} プロパティを使用してください。
    > - CSS3 で `char` の値と同様の効果を得るには、 {{htmlattrxref("char", "thead")}} の値を {{cssxref("text-align")}} プロパティの値として使用することができます。

- {{htmlattrdef("bgcolor")}} {{Non-standard_inline}}

  - : この属性は、列の各セルの背景色を定義します。値は [sRGB](https://www.w3.org/Graphics/Color/sRGB) で定義された 6 桁の 16 進数値のいずれかで、先頭に '#' を付加します。 16 個の定義済みの色文字列から、 1 つを使用することができます。

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

    > **Note:** この属性は標準外であり Microsoft Internet Explorer の一部バージョンしか実装していませんので、使用しないでください。 {{HTMLElement("thead")}} 要素は [CSS](/ja/docs/Web/CSS) を使用してスタイル付けをしてください。 **bgcolor** 属性と同様の効果を与えるには、 [CSS](/ja/docs/Web/CSS) の {{cssxref("background-color")}} プロパティを適切な {{HTMLElement("td")}} または {{HTMLElement("th")}} 要素で使用してください。

- {{htmlattrdef("char")}} {{deprecated_inline}}

  - : この属性は、列内のセルで揃える文字を設定します。典型的な値に、数値や金額を揃えようとするときのピリオド (.) があります。{{htmlattrxref("align", "thead")}} 属性を `char` に設定していない場合は、この属性を無視します。

    > **Note:** この属性は最新の標準仕様で廃止された（そして対応していない）ため、使用しないでください。CSS3 で {{htmlattrxref("char", "thead")}} と同じ効果を得るには、 {{htmlattrxref("char", "thead")}} 属性で使用する文字のセットを {{cssxref("text-align")}} プロパティの値として使用することができます。

- {{htmlattrdef("charoff")}} {{deprecated_inline}}

  - : この属性は、 **char** 属性で指定した揃え文字から列のデータをオフセットする文字数を示します。

    > **Note:** この属性は最新の標準仕様で廃止された (サポートされていない) ため、使用しないでください。

- {{htmlattrdef("valign")}} {{deprecated_inline}}

  - : この属性は、表本体の各行のセルにおける垂直方向のテキスト配置方法を指定します。以下の値が指定可能です。

    - `baseline`: テキストを可能な限りセルの下端に近づけますが、下端ではなく文字の[ベースライン](https://en.wikipedia.org/wiki/Baseline_%28typography%29)に揃えます。文字がサイズ全体に渡る場合は、 `bottom` と同じ効果になります。
    - `bottom`: テキストを可能な限りセルの下端に近づけて配置します。
    - `middle`: テキストをセル内の中央に置きます。
    - `top`: テキストを可能な限りセルの上端に近づけて配置します。

    > **Note:** この属性は最新の標準仕様で廃止された（そして対応していない）ため、使用しないでください。代わりに CSS の {{cssxref("vertical-align")}} プロパティを使用してください。

## 例

`<thead>` の例については、 {{HTMLElement("table")}} を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 他の表関連 HTML 要素: {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("tr")}}
- `<thead>` 要素のスタイル設定に役立つであろう CSS プロパティと擬似クラス:

  - {{cssxref(":nth-child")}} 擬似クラス: 列内のセルの配置を設定するため
  - {{cssxref("text-align")}} プロパティ: すべてのセル内コンテンツを '.' などの同一文字で揃えるための
