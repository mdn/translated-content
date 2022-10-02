---
title: <ruby>
slug: Web/HTML/Element/ruby
---

{{HTMLRef}}

The **HTML `<ruby>` element** はベーステキストの上、下、隣に描画される小さな注釈で、よく東アジアの文字の発音を表すのに使われます。他の種類の注釈にも使われることがありますが、この使い方はあまり一般的ではありません。

*ルビ*という言葉は[写植者が使用した長さの単位](<https://en.wikipedia.org/wiki/Agate_(typography)>)に由来しており、読みやすい状態を保ったままテキストを新聞用紙に印刷できる最小のサイズを表します。

{{EmbedInteractiveExample("pages/tabbed/ruby.html", "tabbed-shorter")}}

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

### 例 1: 文字ごとのルビ

```html
<ruby>
  漢 <rp>(</rp><rt>かん</rt><rp>)</rp>
  字 <rp>(</rp><rt>じ</rt><rp>)</rp>
</ruby>
```

### 例 2: 熟語のルビ

```html
<ruby>
  明日 <rp>(</rp><rt>あした</rt><rp>)</rp>
</ruby>
```

## 仕様書

| 仕様書                                                                                                               | 状態                             | 備考 |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ---- |
| {{SpecName('HTML WHATWG', 'semantics.html#the-ruby-element', '&lt;ruby&gt;')}}             | {{Spec2('HTML WHATWG')}} |      |
| {{SpecName('HTML5 W3C', 'textlevel-semantics.html#the-ruby-element', '&lt;ruby&gt;')}} | {{Spec2('HTML5 W3C')}}     |      |

## ブラウザーの互換性

{{Compat("html.elements.ruby")}}

## 関連情報

- {{HTMLElement("rt")}}
- {{HTMLElement("rp")}}
- {{HTMLElement("rb")}}
- {{HTMLElement("rtc")}}
- {{HTMLElement("rbc")}}
- {{CSSxRef("text-transform")}}: full-size-kana
