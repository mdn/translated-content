---
title: "<rtc>: ルビテキストコンテナー要素"
slug: Web/HTML/Reference/Elements/rtc
original_slug: Web/HTML/Element/rtc
l10n:
  sourceCommit: 942a529383ee7ee3996fb234187641c08935f3ff
---

{{HTMLSidebar}}{{deprecated_header}}

**`<rtc>`** は [HTML](/ja/docs/Web/HTML) の要素で、{{HTMLElement("ruby")}} 要素内で使用する {{HTMLElement("rb")}} 要素にルビで与える文字列の、意味を表す注釈を包含します。{{HTMLElement("rb")}} 要素は発音の注釈 ({{HTMLElement("rt")}}) と意味の注釈 ({{HTMLElement("rtc")}}) の両方を持つことができます。

{{InteractiveExample("HTML デモ: &lt;rtc&gt;", "tabbed-standard")}}

```html interactive-example
<ruby xml:lang="zh-Hant" style="ruby-position: under;">
    <rbc>
        <rb>馬</rb><rp>(</rp><rt>mǎ</rt><rp>)</rp>
        <rb>來</rb><rp>(</rp><rt>lái</rt><rp>)</rp>
        <rb>西</rb><rp>(</rp><rt>xī</rt><rp>)</rp>
        <rb>亞</rb><rp>(</rp><rt>yà</rt><rp>)</rp>
    </rbc>
    <rtc xml:lang="en" style="ruby-position: over;">
        <rp>(</rp><rt>Malaysia</rt><rp>)</rp>
    </rtc>
</ruby>
```

```css interactive-example
ruby {
  font-size: 2em;
}
```

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)のみがあります。

## 例

```html
<div class="info">
  <ruby>
    <rtc>
      <rb>旧</rb><rt>jiù</rt>
      <rb>金</rb><rt>jīn</rt>
      <rb>山</rb><rt>shān</rt>
    </rtc>
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

### 結果

{{EmbedLiveSample("Examples", 600, 120)}}

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

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("ruby")}}
- {{HTMLElement("rp")}}
- {{HTMLElement("rb")}}
- {{HTMLElement("rt")}}
