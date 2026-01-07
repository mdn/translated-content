---
title: "<colgroup>: 表の列グループ要素"
slug: Web/HTML/Reference/Elements/colgroup
original_slug: Web/HTML/Element/colgroup
l10n:
  sourceCommit: 942a529383ee7ee3996fb234187641c08935f3ff
---

{{HTMLSidebar}}

**`<colgroup>`** は [HTML](/ja/docs/Web/HTML) の要素で、表内の列のグループを定義します。

{{InteractiveExample("HTML デモ: &lt;colgroup&gt;", "tabbed-taller")}}

```html interactive-example
<table>
  <caption>
    Superheros and sidekicks
  </caption>
  <colgroup>
    <col />
    <col span="2" class="batman" />
    <col span="2" class="flash" />
  </colgroup>
  <tr>
    <td></td>
    <th scope="col">Batman</th>
    <th scope="col">Robin</th>
    <th scope="col">The Flash</th>
    <th scope="col">Kid Flash</th>
  </tr>
  <tr>
    <th scope="row">Skill</th>
    <td>Smarts, strong</td>
    <td>Dex, acrobat</td>
    <td>Super speed</td>
    <td>Super speed</td>
  </tr>
</table>
```

```css interactive-example
.batman {
  background-color: #d7d9f2;
}

.flash {
  background-color: #ffe8d4;
}

table {
  border-collapse: collapse;
  border: 2px solid rgb(140 140 140);
  font-family: sans-serif;
  font-size: 0.8rem;
  letter-spacing: 1px;
}

caption {
  caption-side: bottom;
  padding: 10px;
}

th,
td {
  border: 1px solid rgb(160 160 160);
  padding: 8px 6px;
}

td {
  text-align: center;
}
```

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)があります。

- `span`
  - : この属性は正の整数で、`<colgroup>` 要素がまたがる列の数を示します。存在しない場合の既定値は `1` です。

    `span` 属性は、1 つ以上の {{HTMLElement("col")}} 要素が `<colgroup>` の中にある場合は許可されません。

### 非推奨の属性

以下の属性は非推奨であり、使用すべきではありません。これらの属性は、既存のコードを更新する際の参考として、また歴史的な興味のためだけに、以下に文書化されています。

- `align` {{deprecated_inline}}
  - : この列挙属性は、各列の内容物の水平方向の配置方法を制御します。以下の値が指定可能です。
    - `left` : 内容物をセルの左側に揃えます。
    - `center` : 内容物をセル内で中央揃えにします。
    - `right` : 内容物をセルの右側に揃えます。
    - `justify`: 内容物がセル内で両端揃えになるように、テキストコンテンツに空白を挿入します。
    - `char` : テキストコンテンツを特定の文字に対して、最小のオフセットで揃えます。特定の文字は [`char`](/ja/docs/Web/HTML/Reference/Elements/col#char) 属性および [`charoff`](/ja/docs/Web/HTML/Reference/Elements/col#charoff) 属性で定義します。

    この属性が設定されていない場合は、`left` 値であるものとします。子孫の {{HTMLElement("col")}} 要素は自身の [`align`](/ja/docs/Web/HTML/Reference/Elements/col#align) 属性を使用して、この値を上書きできます。

    > [!NOTE]
    > {{cssxref("text-align")}} プロパティを、 {{HTMLElement("colgroup")}} 要素を与えたセレクターに設定しようとしてはいけません。 {{HTMLElement("td")}} 要素は {{HTMLElement("colgroup")}} 要素の子孫ではないため、プロパティを継承しません。
    >
    > 表で [`colspan`](/ja/docs/Web/HTML/Reference/Elements/td#colspan) 属性を使用していない場合は、列ごとに 1 つずつ `td:nth-child(an+b)` CSS セレクターを使用してください。a は表内の列数、b は表内の列の位置を示す序数です。このセレクターの後でのみ `text-align` プロパティが使用できます。
    >
    > 表で [`colspan`](/ja/docs/Web/HTML/Reference/Elements/td#colspan) 属性を使用している場合は `[colspan=n]` のような、十分な CSS 属性セレクターの組み合わせで実現できますが、容易ではありません。

- `bgcolor` {{Deprecated_inline}}
  - : 表の背景色です。この属性は、列の各セルの背景色を定義します。 [6 桁の 16 進数の RGB コード](/ja/docs/Web/CSS/Reference/Values/hex-color)の前に '`#`' が付いた形です。定義済みの[色キーワード](/ja/docs/Web/CSS/Reference/Values/named-color)の一つも使用できます。

    同様の効果を得るには、 CSS の {{cssxref("background-color")}} プロパティを使用してください。

- `char` {{deprecated_inline}}
  - : この属性は、列グループ内の内容をある文字へ整列することを指定します。典型的な値としては、数字や金額を整列させようとするときのピリオド (.) があります。 [`align`](#align) が `char` に設定されていない場合、この属性は無視されますが、この列グループのメンバーである {{HTMLElement("col")}} の [`align`](/ja/docs/Web/HTML/Reference/Elements/col#align) の既定値として使用されます。
- `charoff` {{deprecated_inline}}
  - : この属性は、`char` 属性で指定した揃え文字から列のデータをオフセットする文字数を示します。
- `valign` {{deprecated_inline}}
  - : この属性は、各列の内容物の垂直方向の配置方法を制御します。以下の値が指定可能です。
    - `baseline` : テキストを可能な限りセルの下端に近づけますが、下端ではなく文字の [ベースライン](https://en.wikipedia.org/wiki/Baseline_%28typography%29) に揃えます。文字がサイズ全体に渡る場合は、`bottom` と同じ効果になります。
    - `bottom` : テキストを可能な限りセルの下端に近づけて配置します。
    - `middle` : テキストをセルの中央部に置きます。
    - and `top` : テキストを可能な限りセルの上端に近づけて配置します。

    > [!NOTE]
    > {{cssxref("vertical-align")}} プロパティを、 `<colgroup>` 要素を与えたセレクターに設定しようとしてはいけません。{{HTMLElement("td")}} 要素は `<colgroup>` 要素の子孫ではないため、プロパティを継承しません。
    >
    > 表で [`colspan`](/ja/docs/Web/HTML/Reference/Elements/td#colspan) 属性を使用していない場合は、`td:nth-child(an+b)` CSS セレクターを使用してください。 a は表の列数、 b は表内の列の位置を示す序数です。このセレクターの後でのみ `vertical-align` プロパティを使用できます。
    >
    > 表で [`colspan`](/ja/docs/Web/HTML/Reference/Elements/td#colspan) 属性を使用している場合は `[colspan=n]` のような、十分な CSS 属性セレクターの組み合わせで実現できますが、容易ではありません。

## 例

`<colgroup>` 要素の使用例については、{{HTMLElement("table")}} 要素のページを参照してください。

## 技術的概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Content_categories"
          >コンテンツカテゴリー</a
        >
      </th>
      <td>なし</td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
        <a href="/ja/docs/Web/HTML/Element/colgroup#span"><code>span</code></a> 属性が存在する場合:
        なし。<br />
        この属性がない場合: 0 個以上の {{HTMLElement("col")}} 要素。
      </td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>
        最初の子要素が {{HTMLElement("col")}}
        要素であり、かつ終了タグを省略した {{HTMLElement("colgroup")}}
        要素が前にない場合は、開始タグを省略できます。<br />
        空白またはコメントが後にない場合は、終了タグを省略できます。
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>
        {{HTMLElement("table")}}
        要素。{{HTMLElement("colgroup")}} は省略可能な
        {{HTMLElement("caption")}} 要素より後、かつ
        {{HTMLElement("thead")}}, {{HTMLElement("th")}},
        {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}},
        {{HTMLElement("tr")}} の各要素より前に置かなければなりません。
      </td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >対応するロールなし</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>許可されている <code>role</code> なし</td>
    </tr>
    <tr>
      <th scope="row">DOM インターフェイス</th>
      <td>{{domxref("HTMLTableColElement")}}</td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- `<col>` 要素のスタイル付けに特に便利な CSS プロパティおよび[擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes):
  - 列の幅を制御するための {{cssxref("width")}} プロパティ
  - 列内のセルの配置を設定するための {{cssxref(":nth-child")}} 擬似クラス
  - すべてのセル内コンテンツを '.' などの同一文字で揃えるための {{cssxref("text-align")}} プロパティ
