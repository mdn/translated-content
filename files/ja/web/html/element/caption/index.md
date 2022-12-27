---
title: '<caption>: 表キャプション要素'
slug: Web/HTML/Element/caption
---

{{HTMLRef}}

**HTML の `<caption>` 要素**は、表のキャプション (またはタイトル) を指定します。

{{EmbedInteractiveExample("pages/tabbed/caption.html", "tabbed-taller")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Content_categories">コンテンツカテゴリ</a>
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
        {{HTMLElement("table")}} 要素。table
        要素の最初の子要素としてのみ配置可能。
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
      <td>{{domxref("HTMLTableCaptionElement")}}</td>
    </tr>
  </tbody>
</table>

## 属性

この要素は [グローバル属性](/ja/docs/Web/HTML/Global_attributes) を持ちます。

### 非推奨の属性

以下の属性は非推奨であり、使用するべきではありません。以下に記述しているのは、既存コードを更新する際の参考や、歴史的な関心としてのためのみです。

- {{htmlattrdef("align")}} {{deprecated_inline}}

  - : この列挙属性は caption 要素の、自身の指し示す table 要素を基準とした相対的な位置を指定します。以下の値を指定できます。

    - `left`
      - : キャプションを表の左側に表示します。
    - `top`
      - : キャプションを表の上側に表示します。
    - `right`
      - : キャプションを表の右側に表示します。
    - `bottom`
      - : キャプションを表の下側に表示します。

    > **メモ:** **使用上の注意:** この属性は非推奨ですので使用しないでください。 {{HTMLElement("caption")}} 要素にスタイルを適用するには、 [CSS](/ja/docs/Web/CSS) プロパティの {{cssxref("caption-side")}} および {{cssxref("text-align")}} を使用してください。

## 使用上の注意

`<caption>` 要素は親である {{htmlelement("table")}} 要素の最初の子としてください。

`<table>` 要素が {{HTMLElement("figure")}} 要素の唯一の子孫である場合は、 {{HTMLElement("figcaption")}} 要素を `<caption>` の代わりに使用してください。

## 例

このシンプルな例は、キャプションを含む票を表します。

```html
<table>
  <caption>Example Caption</caption>
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
  align: right;
}
table {
  border-collapse: collapse;
  border-spacing: 0px;
}
table, th, td {
  border: 1px solid black;
}
```

{{EmbedLiveSample('Example', 650, 100)}}

`table {background: red;}` ではキャプションは変更されません。そのためには `display: block` が必要です。

## 仕様書

| 仕様書                                                                                                           | 状態                             | 備考 |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | ---- |
| {{SpecName('HTML WHATWG', 'tables.html#the-caption-element', '&lt;caption&gt;')}}     | {{Spec2('HTML WHATWG')}} |      |
| {{SpecName('HTML5 W3C', 'tabular-data.html#the-caption-element', '&lt;caption&gt;')}} | {{Spec2('HTML5 W3C')}}     |      |
| {{SpecName('HTML4.01', 'struct/tables.html#h-11.2.2', '&lt;caption&gt;')}}             | {{Spec2('HTML4.01')}}     |      |

## ブラウザーの互換性

{{Compat("html.elements.caption")}}

## 関連情報

- {{HTMLElement("caption")}} 要素の align 属性 の代替となる CSS プロパティ:

  - {{cssxref("text-align")}}, {{cssxref("caption-side")}}
