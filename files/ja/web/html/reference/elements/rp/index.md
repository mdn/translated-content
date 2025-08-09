---
title: "<rp>: ルビの代替表示用括弧要素"
slug: Web/HTML/Reference/Elements/rp
original_slug: Web/HTML/Element/rp
l10n:
  sourceCommit: e04d8d2766c468f149445c0bf438d09f9b2d188c
---

{{HTMLSidebar}}

**`<rp>`** は [HTML](/ja/docs/Web/HTML) の要素で、{{HTMLElement("ruby")}} 要素によるルビの表示に対応していないブラウザー向けの代替表示用の括弧を提供するために使用します。それぞれ 1 つの `<rp>` 要素で、注釈の文字列を含む {{HTMLElement("rt")}} 要素を囲む開き括弧と閉じ括弧をそれぞれ囲む必要があります。

{{InteractiveExample("HTML デモ: &lt;rp&gt;", "tabbed-shorter")}}

```html interactive-example
<ruby>
  漢 <rp>(</rp><rt>kan</rt><rp>)</rp> 字 <rp>(</rp><rt>ji</rt><rp>)</rp>
</ruby>
```

```css interactive-example
ruby {
  font-size: 2em;
}
```

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)以外の属性はありません。

## 使用上のメモ

- ルビは日本語のふりがなや台湾語の注音符号など、東アジア言語で発音を示すものです。`<rp>` 要素は {{HTMLElement("ruby")}} 要素に対応していない場合に使用されます。`<rp>` 要素の内容は、ルビの存在を示すために何を表示すべきか（通常は括弧）を示します。

## 例

### ルビの使用

この例はそれぞれの文字に等価な[ローマ字](https://ja.wikipedia.org/wiki/ローマ字)を表示するためのにルビを使用しています。

```html
<ruby>
  漢 <rp>(</rp><rt>Kan</rt><rp>)</rp> 字 <rp>(</rp><rt>ji</rt><rp>)</rp>
</ruby>
```

```css hidden
body {
  font-size: 22px;
}
```

このブラウザーでは次のように見えます。

{{EmbedLiveSample("Using_ruby_annotations", 600, 60)}}

それ以外の例は {{HTMLElement("ruby")}} 要素の記事を参照してください。

### ルビ対応なし

上記の HTML は、ルビの対応が*ない*ブラウザーで表示すると、このように見えるかもしれません。

```html hidden
漢 (Kan) 字 (ji)
```

```css hidden
body {
  font-size: 22px;
}
```

{{EmbedLiveSample("Without_ruby_support", 600, 60)}}

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
      <td>テキスト</td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>
        要素の直後に {{HTMLElement("rt")}} または他の
        <code>&#x3C;rp></code>
        要素が続くとき、または親要素内にそれ以上のコンテンツがない場合は、終了タグを省略可。
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>
        {{HTMLElement("ruby")}} 要素。 <code>&#x3C;rp></code> 要素は
        {{HTMLElement("rt")}}
        要素の直前または直後に配置しなければなりません。
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
- {{HTMLElement("rt")}}
- {{HTMLElement("rb")}}
- {{HTMLElement("rtc")}}
