---
title: HTML `<data>` データ要素
short-title: <data>
slug: Web/HTML/Reference/Elements/data
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

**`<data>`** は [HTML](/ja/docs/Web/HTML) の要素で、与えられたコンテンツの断片を機械可読な翻訳にリンクします。コンテンツが時刻または日付に関連するものであれば、{{HTMLElement("time")}} 要素を使用する必要があります。

{{InteractiveExample("HTML デモ: &lt;data&gt;", "tabbed-shorter")}}

```html interactive-example
<p>新製品:</p>
<ul>
  <li><data value="398">ミニケチャップ</data></li>
  <li><data value="399">ジャンボケチャップ</data></li>
  <li><data value="400">メガジャンボケチャップ</data></li>
</ul>
```

```css interactive-example
data:hover::after {
  content: " (ID " attr(value) ")";
  font-size: 0.7em;
}
```

## 属性

この要素の属性には[グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)があります。

- `value`
  - : この属性は、要素の内容の機械可読な翻訳を指定します。

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

### 結果

{{EmbedLiveSample('Examples')}}

## 技術的概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Guides/Content_categories"
          >コンテンツカテゴリー</a
        >
      </th>
      <td>
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >,
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#記述コンテンツ"
          >記述コンテンツ</a
        >, 知覚可能コンテンツ
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#記述コンテンツ"
          >記述コンテンツ</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>なし。開始タグと終了タグの両方が必須です。</td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#記述コンテンツ"
          >記述コンテンツ</a
        >を受け入れるすべての要素
      </td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td>
        <code
          ><a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role"
            >generic</a
          ></code
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

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- HTML の {{HTMLElement("time")}} 要素
