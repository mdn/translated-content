---
title: HTML `<caption>` 表キャプション要素
short-title: <caption>
slug: Web/HTML/Reference/Elements/caption
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

**`<caption>`** は [HTML](/ja/docs/Web/HTML) の要素で、表のキャプション（またはタイトル）を指定し、表の{{glossary("accessible name","アクセシブル名")}}または{{glossary("accessible description","アクセシブル説明")}}を提供します。

{{InteractiveExample("HTML デモ: &lt;caption&gt;", "tabbed-taller")}}

```html interactive-example
<table>
  <caption>
    He-Man and Skeletor facts
  </caption>
  <tbody>
    <tr>
      <td></td>
      <th scope="col" class="heman">He-Man</th>
      <th scope="col" class="skeletor">Skeletor</th>
    </tr>
    <tr>
      <th scope="row">Role</th>
      <td>Hero</td>
      <td>Villain</td>
    </tr>
    <tr>
      <th scope="row">Weapon</th>
      <td>Power Sword</td>
      <td>Havoc Staff</td>
    </tr>
    <tr>
      <th scope="row">Dark secret</th>
      <td>Expert florist</td>
      <td>Cries at romcoms</td>
    </tr>
  </tbody>
</table>
```

```css interactive-example
caption {
  caption-side: bottom;
  padding: 10px;
  font-weight: bold;
}

table {
  border-collapse: collapse;
  border: 2px solid rgb(140 140 140);
  font-family: sans-serif;
  font-size: 0.8rem;
  letter-spacing: 1px;
}

th,
td {
  border: 1px solid rgb(160 160 160);
  padding: 8px 10px;
}

th {
  background-color: rgb(230 230 230);
}

td {
  text-align: center;
}

tr:nth-child(even) td {
  background-color: rgb(250 250 250);
}

tr:nth-child(odd) td {
  background-color: rgb(240 240 240);
}

.heman {
  font:
    1.4rem "molot",
    sans-serif;
  text-shadow:
    1px 1px 1px white,
    2px 2px 1px black;
}

.skeletor {
  font:
    1.7rem "rapscallion",
    fantasy;
  letter-spacing: 3px;
  text-shadow:
    1px 1px 0 white,
    0 0 9px black;
}
```

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)があります。

### 非推奨の属性

以下の属性は非推奨であり、使用するべきではありません。以下に記述しているのは、既存コードを更新する際の参考や、歴史的な関心としてのためのみです。

- `align` {{deprecated_inline}}
  - : キャプションを表のどちら側に表示するかを指定します。使用可能な{{Glossary("enumerated", "列挙")}}値は、`left`、`top`、`right`、`bottom` です。この属性は非推奨となっているため、代わりに CSS の {{cssxref("caption-side")}} および {{cssxref("text-align")}} プロパティを使用してください。

## 使用上の注意

- `<caption>` 要素は存在する場合、親である {{htmlelement("table")}} 要素の最初の子とする必要があります。
- `<table>` 要素が {{HTMLElement("figure")}} 要素内に含まれており、その図の唯一のコンテンツである場合は、要素の唯一の子孫である場合は、`<figure>` の {{HTMLElement("figcaption")}} 要素を `<caption>` の代わりに使用してください。
- 表に {{cssxref("background-color")}} を適用しても、キャプションには適用されません。両方の背景を同じ色にしたい場合は、`background-color` を `<caption>` 要素にも追加してください。

## 例

一般的な標準や最善の手法を紹介する完全な表の例については、{{HTMLElement("table")}} をご覧ください。

### キャプション付きの表

この例では、表示されているデータを説明するキャプションを備えた基本的な表を示しています。

このような「タイトル」は、ページをすばやく目を通すユーザーにとって役立ちます。特に視覚障碍のあるユーザーにとっては有益であり、表の内容が何であるかを知るためにスクリーンリーダーで多くのセルのコンテンツを読み上げてもらう必要がなく、表の関連性をすばやく判断できるようになります。

#### HTML

`<caption>` 要素が {{HTMLElement("table")}} の最初の子要素として 使用され、表のデータを説明するタイトルのようなテキストコンテンツがつけられています。`<caption>` の後、{{HTMLElement("tr")}}、{{HTMLElement("th")}}、{{HTMLElement("td")}} 要素を使用して、3 行（最初の行はヘッダー行）と 2 列が作成されます。

```html
<table>
  <caption>
    ユーザーのログインメールアドレス
  </caption>
  <thead>
    <tr>
      <th>ログイン名</th>
      <th>メールアドレス</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>user1</td>
      <td>user1@example.com</td>
    </tr>
    <tr>
      <td>user2</td>
      <td>user2@example.com</td>
    </tr>
  </tbody>
</table>
```

#### CSS

基本的な CSS を使用し、`<caption>` の位置を揃え、強調表示しています。

```css
caption {
  caption-side: top;
  text-align: left;
  padding-bottom: 10px;
  font-weight: bold;
}
```

```css hidden
table {
  border-collapse: collapse;
  border: 2px solid rgb(140 140 140);
  font-family: sans-serif;
  font-size: 0.8rem;
  letter-spacing: 1px;
}

th,
td {
  border: 1px solid rgb(160 160 160);
  padding: 8px 10px;
}

th {
  background-color: rgb(230 230 230);
}

td {
  text-align: center;
}
```

#### 結果

{{EmbedLiveSample('Example', 650, 140)}}

## 技術的概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Guides/Content_categories"
          >コンテンツカテゴリー</a
        >
      </th>
      <td>なし</td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>
        要素の直後に ASCII の空白文字やコメントが続かない場合、終了タグは省略可能です。
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>
        {{HTMLElement("table")}} 要素で、その最初の子要素としてのみ配置可能。
      </td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td>
        <code
          ><a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles#html_同等物を持つ構造ロール">caption</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>許可されている <code>role</code> なし</td>
    </tr>
    <tr>
      <th scope="row">DOM インターフェイス</th>
      <td>{{domxref("HTMLTableCaptionElement")}}</td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [学習: HTML 表の基本](/ja/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
- {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}}: その他の表関連要素
- {{cssxref("caption-side")}}: 親の {{HTMLElement("table")}} から相対的な `<caption>` の位置を決める CSS プロパティです。
- {{cssxref("text-align")}}: `<caption>` のテキストコンテンツの水平配置を
