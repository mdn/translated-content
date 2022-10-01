---
title: '<rt>: ルビ文字列要素'
slug: Web/HTML/Element/rt
---

{{HTMLRef}}

**HTML のルビ文字列 (`<rt>`) 要素**は、ルビによる注釈（振り仮名）のルビ文字列の部分を定義し、東アジアの組版において発音、翻訳、音写などの情報を提供するために使用します。 `<rt>` 要素は常に {{HTMLElement("ruby")}} 要素の中で使用されます。

{{EmbedInteractiveExample("pages/tabbed/rt.html", "tabbed-shorter")}}

より多くの例については {{HTMLElement("ruby")}} 要素についての記事を参照してください。

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
        <a href="/ja/docs/Web/HTML/Content_categories#記述コンテンツ"
          >記述コンテンツ</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>
        {{HTMLElement("rt")}} 要素の直後に {{HTMLElement("rt")}}
        要素または {{HTMLElement("rp")}}
        要素がある場合、または親要素内に他のコンテンツがない場合は終了タグを省略可能。
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>{{HTMLElement("ruby")}} 要素</td>
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
      <td>すべて</td>
    </tr>
    <tr>
      <th scope="row">DOM インターフェイス</th>
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Global_attributes)のみがあります。

## 例

この例では、 {{HTMLElement("ruby")}} 要素内の漢字にローマ字表記を提供します。

```html
<ruby>
  漢 <rt>Kan</rt>
  字 <rt>ji</rt>
</ruby>
```

```css hidden
body {
  font-size: 22px;
}
```

このブラウザーの出力は次のように見えます。

{{EmbedLiveSample("Using_ruby_annotations", 600, 60)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("ruby")}}
- {{HTMLElement("rp")}}
- {{HTMLElement("rb")}}
- {{HTMLElement("rtc")}}
- {{CSSXRef("text-transform", "text-transform: full-size-kana")}}
