---
title: '<q>: 行内引用要素'
slug: Web/HTML/Element/q
---

{{HTMLSidebar}}

**HTML の `<q>` 要素** は、その内容が行内の引用であることを表します。最近の多くのブラウザーでは、文字列を引用符で囲むように実装しています。この要素は、段落区切りをまたがない短い引用のためのものです。長文の引用には、 {{HTMLElement("blockquote")}} 要素を使用してください。

{{EmbedInteractiveExample("pages/tabbed/q.html", "tabbed-shorter")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/Guide/HTML/Content_categories"
          >コンテンツカテゴリ</a
        >
      </th>
      <td>
        <a href="/ja/docs/Web/Guide/HTML/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >,
        <a href="/ja/docs/Web/Guide/HTML/Content_categories#記述コンテンツ"
          >記述コンテンツ</a
        >, 知覚可能コンテンツ
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
        <a href="/ja/docs/Web/Guide/HTML/Content_categories#記述コンテンツ"
          >記述コンテンツ</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>
        <a href="/ja/docs/Web/Guide/HTML/Content_categories#記述コンテンツ"
          >記述コンテンツ</a
        >を受け入れるすべての要素
      </td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >No corresponding role</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>すべて</td>
    </tr>
    <tr>
      <th scope="row">DOM インターフェイス</th>
      <td>{{domxref("HTMLQuoteElement")}}</td>
    </tr>
  </tbody>
</table>

> **メモ:** 最近の多くのブラウザーは、`<q>` 要素内の文字列の周りに自動的に引用符を追加します。古いブラウザーでは引用符を追加するためにスタイル規則が必要な場合があります。

## 属性

この要素は[グローバル属性](/ja/docs/Web/HTML/Global_attributes)を持ちます。

- `cite`
  - : この属性の値は、引用した情報の引用元文書やメッセージの URL です。この属性は、引用文の文脈や参照先を説明する情報を指すためのものです。

## 例

```html
<p>According to Mozilla's website,
  <q
  cite="https://www.mozilla.org/en-US/about/history/details/">Firefox 1.0
  was released in 2004 and became a big success.</q></p>
```

{{EmbedLiveSample('Example')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("html.elements.q")}}

## 関連情報

- {{HTMLElement("blockquote")}} 要素は長い引用のためのものです。
- {{HTMLElement("cite")}} 要素は引用元のためのものです。
