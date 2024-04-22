---
title: "<tfoot>: 表フッター要素"
slug: Web/HTML/Element/tfoot
l10n:
  sourceCommit: 942a529383ee7ee3996fb234187641c08935f3ff
---

{{HTMLSidebar}}

**`<tfoot>`** は [HTML](/ja/docs/Web/HTML) の要素で、表の一連の列を総括する行のセットを定義します。

{{EmbedInteractiveExample("pages/tabbed/tfoot.html","tabbed-taller")}}

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Global_attributes)があります。

### 非推奨の属性

以下の属性は非推奨であり、使用すべきではありません。これらの属性は、既存のコードを更新する際の参考として、また歴史的な興味のためだけに、以下に文書化されています。

- `align` {{deprecated_inline}}

  - : この列挙属性は、各セルの内容物について、水平方向の配置方法を制御します。以下の値が指定可能です。

    - `left`: 内容物をセルの左側に揃えます。
    - `center`: 内容物をセル内で中央揃えにします。
    - `right`: 内容物をセルの右側に揃えます。
    - `justify`: 内容物がセル内で両端揃えになるように、テキストコンテンツに空白を挿入します。
    - `char`: テキストコンテンツを特定の文字に対して、最小のオフセットで揃えます。特定の文字は [`char`](#char) 属性および [`charoff`](#charoff) 属性で定義します。

    この属性が設定されていない場合は、`left` 値であるものとします。

    > **メモ:**
    >
    > - `left`, `center`, `right`, `justify` の値と同様の効果を得るには、 CSS の {{cssxref("text-align")}} プロパティを使用してください。
    > - CSS で `char` の値と同様の効果を得るには、 [`char`](#char) の値を {{cssxref("text-align")}} プロパティの値として使用することができます。

- `bgcolor` {{Deprecated_inline}}

  - : 表の背景色です。この属性は、列の各セルの背景色を定義します。 [6 桁の 16 進数の RGB コード](/ja/docs/Web/CSS/hex-color)の前に '`#`' が付いた形です。定義済みの[色キーワード](/ja/docs/Web/CSS/named-color)の一つを使用することもできます。

    同様の効果を得るには、 CSS の {{cssxref("background-color")}} プロパティを使用してください。

- `char` {{deprecated_inline}}
  - : この属性は、列内のセルの内容をある文字へ整列することを指定します。典型的な値としては、数字や金額を整列させようとするときのピリオド (.) があります。 [`align`](#align) が `char` に設定されていない場合、この属性は無視されます。
- `charoff` {{deprecated_inline}}
  - : この属性は、`char` 属性で指定した揃え文字から列のデータをオフセットする文字数を示します。
- `valign` {{deprecated_inline}}

  - : この属性は、表本体の各行のセルにおける垂直方向のテキスト配置方法を指定します。以下の値が指定可能です。

    - `baseline`: テキストを可能な限りセルの下端に近づけますが、下端ではなく文字の[ベースライン](https://en.wikipedia.org/wiki/Baseline_%28typography%29)</a>に揃えます。文字がサイズ全体に渡る場合は、 `bottom` と同じ効果になります。
    - `bottom`: テキストを可能な限りセルの下端に近づけて配置します。
    - `middle`: テキストをセル内の中央に置きます。
    - `top`: テキストを可能な限りセルの上端に近づけて配置します。

    > **メモ:** この属性は最新の標準仕様で廃止された（対応していない）ため、使用しないでください。代わりに CSS の {{cssxref("vertical-align")}} プロパティを使用してください。

## 例

`<tfoot>` の例については、 {{HTMLElement("table")}} を参照してください。

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
        開始タグは必須。親 {{HTMLElement("table")}} 要素内に以降のコンテンツがない場合は終了タグを省略可能。
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>
        {{HTMLElement("table")}} 要素。{{HTMLElement("tfoot")}} はすべての {{HTMLElement("caption")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("thead")}}, {{HTMLElement("tbody")}}, {{HTMLElement("tr")}} の各要素の後方に配置しなければなりません。これは HTML5 での要件です。<br />
        HTML4 では、 {{HTMLElement("tfoot")}} 要素は {{HTMLElement("tbody")}} 要素および {{HTMLElement("tr")}} 要素の後方に配置してはなりませんでした。
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

- 他の表関連要素: {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}}
- `<tfoot>` 要素のスタイル設定に役立つであろう CSS プロパティと擬似クラス:

  - {{cssxref(":nth-child")}} 擬似クラス: 列内のセルの配置を設定するため
  - {{cssxref("text-align")}} プロパティ: すべてのセル内コンテンツを '.' などの同一文字で揃えるため
