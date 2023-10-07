---
title: "<rt>: ルビテキスト要素"
slug: Web/HTML/Element/rt
l10n:
  sourceCommit: e04d8d2766c468f149445c0bf438d09f9b2d188c
---

{{HTMLSidebar}}

**`<rt>`** は [HTML](/ja/docs/Web/HTML) の要素で、ルビによる注釈（振り仮名）のルビテキストの部分を指定子します。東アジアの組版において発音、翻訳、音写などの情報を提供するために使用します。 `<rt>` 要素は常に {{HTMLElement("ruby")}} 要素の中で使用されます。

{{EmbedInteractiveExample("pages/tabbed/rt.html", "tabbed-shorter")}}

より多くの例については {{HTMLElement("ruby")}} 要素についての記事を参照してください。

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Global_attributes)のみがあります。

## 例

### ルビ注釈の使用

この例では、 {{HTMLElement("ruby")}} 要素内の漢字にローマ字表記を提供します。

```html
<ruby> 漢 <rt>Kan</rt> 字 <rt>ji</rt> </ruby>
```

```css hidden
body {
  font-size: 22px;
}
```

#### 結果

{{EmbedLiveSample("Using_ruby_annotations", 600, 60)}}

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
      <td>
        <a href="/ja/docs/Web/HTML/Content_categories#記述コンテンツ"
          >記述コンテンツ</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>
        <code>&#x3C;rt></code> 要素の直後に <code>&#x3C;rt></code>
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
