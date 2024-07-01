---
title: "<thead>: 表ヘッダー要素"
slug: Web/HTML/Element/thead
l10n:
  sourceCommit: 942a529383ee7ee3996fb234187641c08935f3ff
---

{{HTMLSidebar}}

**`<thead>`** は [HTML](/ja/docs/Web/HTML) の要素で、表の列の見出しを定義する行のセットを定義します。

{{EmbedInteractiveExample("pages/tabbed/thead.html","tabbed-taller")}}

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Global_attributes)があります。

### 非推奨の属性

- `align` {{deprecated_inline}}

  - : この[列挙型](/ja/docs/Glossary/Enumerated)の属性は、各セルの中身について、水平方向の配置方法を制御します。以下の値を指定可能です。

    - `left`: 中身をセルの左側に揃えます。
    - `center`: 中身をセル内で中央揃えにします。
    - `right`: 中身をセルの右側に揃えます。
    - `justify`: 中身がセル内で両端揃えになるように、テキストコンテンツに空白を挿入します。
    - `char`: テキストコンテンツを特定の文字に対して、最小のオフセットで揃えます。特定の文字は [`char`](#char) 属性および [`charoff`](#charoff) 属性で定義します。

    この属性を設定しない場合は、値が `left` であるとみなされます。

    > **警告:** この属性は最新の標準仕様で廃止された（対応していない）ため、使用しないでください。
    >
    > - 値の配置を指定するには、CSS の {{cssxref("text-align")}} プロパティを使用してください。

- `bgcolor` {{Deprecated_Inline}}

  - : この属性は、列の各セルの背景色を定義します。6 桁の 16 進による色または名前付きの色を受け付けます。アルファ透過には対応していません。

    > **メモ:** この属性は標準外であるため、使用しないでください。`thead` 要素は[CSS](/ja/docs/Web/CSS) の {{cssxref("background-color")}} プロパティを、適用可能な要素、たとえば `thead`, {{HTMLElement("tr")}}, {{HTMLElement("td")}}, {{HTMLElement("th")}} のいずれかの要素で使用してください。

- `char` {{deprecated_inline}}

  - : この属性は、列内のセルで揃える文字を設定します。典型的な値に、数値や金額を揃えようとするときのピリオド (.) があります。[`align`](#align) 属性を `char` に設定していない場合は、この属性を無視します。

    > **メモ:** この属性は最新の標準仕様で廃止された（そして対応していない）ため、使用しないでください。

- `charoff` {{deprecated_inline}}

  - : この属性は、**char**属性で指定した揃え文字から列のデータをオフセットする文字数を示すために使用します。

    > **メモ:** この属性は最新の標準仕様で廃止された（対応していない）ため、使用しないでください。

- `valign` {{deprecated_inline}}

  - : この属性は、表本体の各行のセルにおける垂直方向のテキスト配置方法を指定します。以下の値が指定可能です。

    - `baseline`: テキストを可能な限りセルの下端に近づけますが、下端ではなく文字の[ベースライン](https://en.wikipedia.org/wiki/Baseline_%28typography%29)に揃えます。文字がサイズ全体に渡る場合は、`bottom` と同じ効果になります。
    - `bottom`: テキストを可能な限りセルの下端に近づけて配置します。
    - `middle`: テキストをセル内の中央に置きます。
    - `top`: テキストを可能な限りセルの上端に近づけて配置します。

    > **メモ:** この属性は最新の標準仕様で廃止された（そして対応していない）ため、使用しないでください。代わりに CSS の {{cssxref("vertical-align")}} プロパティを使用してください。

## 例

`<thead>` の例については、 {{HTMLElement("table")}} を参照してください。

## 技術的概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Content_categories">コンテンツカテゴリー</a>
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

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 他の表関連 HTML 要素: {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("tr")}}
- `<thead>` 要素のスタイル設定に役立つであろう CSS プロパティと擬似クラス:

  - {{cssxref(":nth-child")}} 擬似クラス: 列内のセルの配置を設定するため
  - {{cssxref("text-align")}} プロパティ: すべてのセル内コンテンツを '.' などの同一文字で揃えるための
