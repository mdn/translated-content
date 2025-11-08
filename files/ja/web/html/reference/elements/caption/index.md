---
title: "<caption>: 表キャプション要素"
slug: Web/HTML/Reference/Elements/caption
original_slug: Web/HTML/Element/caption
l10n:
  sourceCommit: 942a529383ee7ee3996fb234187641c08935f3ff
---

{{HTMLSidebar}}

**`<caption>`** は [HTML](/ja/docs/Web/HTML) の要素で、表のキャプション（またはタイトル）を指定します。

{{InteractiveExample("HTML デモ: &lt;caption&gt;", "tabbed-taller")}}

```html interactive-example
<table>
  <caption>
    He-Man and Skeletor facts
  </caption>
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
  font: 1.4rem molot;
  text-shadow:
    1px 1px 1px #fff,
    2px 2px 1px #000;
}

.skeletor {
  font: 1.7rem rapscallion;
  letter-spacing: 3px;
  text-shadow:
    1px 1px 0 #fff,
    0 0 9px #000;
}
```

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)があります。

### 非推奨の属性

以下の属性は非推奨であり、使用するべきではありません。以下に記述しているのは、既存コードを更新する際の参考や、歴史的な関心としてのためのみです。

- `align` {{deprecated_inline}}
  - : この[列挙型](/ja/docs/Glossary/Enumerated)属性は caption 要素の、自身の指し示す table 要素を基準とした相対的な位置を指定します。以下の値が指定できます。
    - `left`
      - : キャプションを表の左側に表示します。
    - `top`
      - : キャプションを表の上側に表示します。
    - `right`
      - : キャプションを表の右側に表示します。
    - `bottom`
      - : キャプションを表の下側に表示します。

    > [!WARNING]
    > この属性は非推奨ですので使用しないでください。{{HTMLElement("caption")}} 要素にスタイルを適用するには、[CSS](/ja/docs/Web/CSS) プロパティの {{cssxref("caption-side")}} および {{cssxref("text-align")}} を使用してください。

## 使用上の注意

`<caption>` 要素は親である {{htmlelement("table")}} 要素の最初の子とする必要があります。

`<caption>` を持つ `<table>` 要素が {{HTMLElement("figure")}} 要素の唯一の子孫である場合は、 {{HTMLElement("figcaption")}} 要素を `<caption>` の代わりに使用してください。

表の {{cssxref("background-color")}} はキャプションを含みません。両方の背景を同じ色にしたい場合は、`background-color` を `<caption>` 要素にも追加してください。

## 例

このシンプルな例は、キャプションを含む票を表します。

```html
<table>
  <caption>
    Example Caption
  </caption>
  <tr>
    <th>Login</th>
    <th>Email</th>
  </tr>
  <tr>
    <td>user1</td>
    <td>user1@sample.com</td>
  </tr>
  <tr>
    <td>user2</td>
    <td>user2@sample.com</td>
  </tr>
</table>
```

```css hidden
caption {
  caption-side: top;
}
table {
  border-collapse: collapse;
  border-spacing: 0px;
}
table,
th,
td {
  border: 1px solid black;
}
```

{{EmbedLiveSample('Example', 650, 100)}}

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
        <a href="/ja/docs/Web/HTML/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>
        要素の直後に ASCII
        空白文字やコメントが続かない場合、終了タグは省略可能です。
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
        <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles#structural_roles_with_html_equivalents">caption</a>
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

- {{HTMLElement("caption")}} 要素の align 属性 の代替となる CSS プロパティ:
  - {{cssxref("text-align")}}, {{cssxref("caption-side")}}
