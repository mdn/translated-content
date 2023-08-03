---
title: "<rtc>: ルビ文字列コンテナー要素"
slug: Web/HTML/Element/rtc
---

{{HTMLSidebar}}

**HTML のルビ文字列コンテナー (`<rtc>`) 要素**は、 {{HTMLElement("ruby")}} 要素内で使用する {{HTMLElement("rb")}} 要素にルビで与える文字列の、意味を表す注釈を包含します。{{HTMLElement("rb")}} 要素は発音の注釈 ({{HTMLElement("rt")}}) と意味の注釈 ({{HTMLElement("rtc")}}) の両方を持つことができます。

{{EmbedInteractiveExample("pages/tabbed/rtc.html", "tabbed-standard")}}

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
        >または {{HTMLElement("rt")}} 要素
      </td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>
        直後に {{HTMLElement("rb")}}, {{HTMLElement("rtc")}},
        {{HTMLElement("rt")}}
        要素の開始タグがある、または親要素の終了タグがある場合は、この要素の終了タグを省略可能。
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>{{HTMLElement("ruby")}} 要素</td>
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

```html
<div class="info">
  <ruby>
    <rbc>
      <rb>旧</rb><rt>jiù</rt>
      <rb>金</rb><rt>jīn</rt>
      <rb>山</rb><rt>shān</rt>
    </rbc>
    <rtc>San Francisco</rtc>
  </ruby>
</div>
```

```css hidden
.info {
  padding-top: 10px;
  font-size: 36px;
}
```

{{EmbedLiveSample("Examples", 600, 120)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("ruby")}}
- {{HTMLElement("rp")}}
- {{HTMLElement("rb")}}
- {{HTMLElement("rt")}}
- {{HTMLElement("rbc")}}
