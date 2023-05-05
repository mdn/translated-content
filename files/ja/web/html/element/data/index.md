---
title: <data>
slug: Web/HTML/Element/data
---

{{HTMLSidebar}}

**HTML の `<data>` 要素**は、与えられたコンテンツの断片を機械可読な翻訳にリンクします。コンテンツが時刻または日付に関連するものであれば、 {{HTMLElement("time")}} 要素を使用する必要があります。

{{EmbedInteractiveExample("pages/tabbed/data.html", "tabbed-shorter")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Content_categories">コンテンツカテゴリ</a>
      </th>
      <td>
        <a href="/ja/docs/Web/HTML/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >,
        <a href="/ja/docs/Web/HTML/Content_categories#記述コンテンツ"
          >記述コンテンツ</a
        >, 知覚可能コンテンツ
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
        <a href="/ja/docs/Web/HTML/Content_categories#記述コンテンツ"
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
        <a href="/ja/docs/Web/HTML/Content_categories#記述コンテンツ"
          >記述コンテンツ</a
        >を受け入れるすべての要素
      </td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >対応するロールナシ</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>すべて</td>
    </tr>
    <tr>
      <th scope="row">DOM インターフェイス</th>
      <td>{{domxref("HTMLDataElement")}}</td>
    </tr>
  </tbody>
</table>

## 属性

この要素の属性は[グローバル属性](/ja/docs/Web/HTML/Global_attributes)を含みます。

- `value`
  - : この属性は要素の内容を機械可読な形式で指定します。

## 例

以下の例は商品名を表示しますが、それぞれの商品名に商品番号も結びつけます。

```html
<p>新製品</p>
<ul>
 <li><data value="398">ミニケチャップ</data></li>
 <li><data value="399">ジャンボケチャップ</data></li>
 <li><data value="400">メガジャンボケチャップ</data></li>
</ul>
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("html.elements.data")}}

## 関連情報

- HTML の {{HTMLElement("time")}} 要素
