---
title: '<rb>: ルビベース要素'
slug: Web/HTML/Element/rb
---

{{HTMLRef}}{{Non-standard_Header}}

**HTML ルビベース (`<rb>`) 要素**は、 {{HTMLElement("ruby") }} 表記のベースとなるテキストの部分を区切るために使用されます。つまり、修飾される文字列です。一つの `<rb>` 要素がベーステキストの不可分な区間を隔てるように囲みます。

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
      <td>{{htmlelement("ruby")}} 要素の子と同様。</td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>
        終了タグを省略できるのは、要素に {{HTMLElement("rt")}},
        {{HTMLElement("rtc")}}, {{HTMLElement("rp")}}
        要素、または他の
        <code>&#x3C;rb></code>
        要素が続く場合、または親要素に残りのコンテンツがない場合です。
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>{{HTMLElement("ruby")}} 要素。</td>
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

## 使用上のメモ

- ルビ表記は、日本語の振り仮名や台湾語の注音符号のように、東アジアの文字の発音を示すためのものです。 `<rb>` 要素はルビベース文字の区間を区切るために使用されます。
- `<rb>` 要素は空要素ではありませんが、ソースコード上ではそれぞれの要素の開始タグだけを含めるのが一般的で、その方がマークアップが複雑ではなく読みやすくなります。ブラウザーは表示する際に完全な要素に補完します。
- 修飾をしたいそれぞれのベース区間/`<rb>` 要素ごとに一つずつ {{htmlelement("rt")}} 要素を置く必要があります。

## 例

この例では、元の文字に対して "Kanji" が等価であるという注釈を提供します。

```html
<ruby>
  <rb>漢<rb>字
  <rp>(</rp><rt>kan<rt>ji<rp>)</rp>
</ruby>
```

ルビのベーステキストを二つの部分に区切るために二つの `<rb>` 要素を含めています。一方で、注釈も二つの {{htmlelement("rt")}} 要素で区切っています。

なお、この例を完全に分割して注釈された二つのベーステキストの部分で書くこともできます。この場合は `<rb>` 要素を含める必要はありません。

```html
<ruby>
  漢 <rp>(</rp><rt>Kan</rt><rp>)</rp>
  字 <rp>(</rp><rt>ji</rt><rp>)</rp>
</ruby>
```

```html hidden
<ruby> <rb>漢<rb>字 <rp>(</rp><rt>kan<rt>ji<rp>)</rp> </ruby>
```

```css
body {
  font-size: 22px;
}
```

出力は以下のようになります。

{{EmbedLiveSample("with-ruby", "100%", 60)}}

上記の HTML はルビに対応して*いない*ブラウザーでは次のように表示されます。

```html hidden
漢字 (kan ji)
```

```css hidden
body {
  font-size: 22px;
}
```

{{EmbedLiveSample("without-ruby", "100%", 60)}}

> **メモ:** それ以外の例は、 {{HTMLElement("ruby")}} 要素についての記事を参照してください。

## 仕様書

| 仕様書                                                                                                       | 状態                         | 備考 |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------- | ---- |
| {{SpecName('HTML5 W3C', 'textlevel-semantics.html#the-rb-element', '&lt;rb&gt;')}} | {{Spec2('HTML5 W3C')}} |      |

## ブラウザーの互換性

{{Compat("html.elements.rb")}}

## 関連情報

- {{HTMLElement("ruby")}}
- {{HTMLElement("rt")}}
- {{HTMLElement("rp")}}
- {{HTMLElement("rtc")}}
