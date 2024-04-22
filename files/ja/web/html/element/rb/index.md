---
title: "<rb>: ルビベース要素"
slug: Web/HTML/Element/rb
l10n:
  sourceCommit: e04d8d2766c468f149445c0bf438d09f9b2d188c
---

{{HTMLSidebar}}{{deprecated_header}}

**`<rb>`** は [HTML](/ja/docs/Web/HTML) の要素で、{{HTMLElement("ruby") }} 表記のベースとなるテキストの部分、すなわち修飾される文字列を区切るために使用されます。一つの `<rb>` 要素がベーステキストの不可分な区間を区切るように囲みます。

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Global_attributes)のみがあります。

## 使用上のメモ

- ルビ表記は、日本語の振り仮名や台湾語の注音符号のように、東アジアの文字の発音を示すためのものです。 `<rb>` 要素はルビベース文字の区間を区切るために使用されます。
- `<rb>` 要素は{{glossary("void element", "空要素")}}ではありませんが、ソースコード上ではそれぞれの要素の開始タグだけを含めるのが一般的で、その方がマークアップが複雑でなくなり読みやすくなります。ブラウザーは表示する際に完全な要素に補完します。
- 修飾をしたいそれぞれのベース区間/`<rb>` 要素ごとに 1 つずつ {{htmlelement("rt")}} 要素を置く必要があります。

## 例

### rb の使用

この例では、元の文字に対して "Kanji" が等価であるという注釈を提供します。

```html
<ruby>
  <rb>漢</rb><rb>字 </rb><rp>(</rp><rt>kan</rt><rt>ji</rt><rp>)</rp>
</ruby>
```

ルビのベーステキストを 2 つの部分に区切るために 2 つの `<rb>` 要素を含めています。一方で、注釈も 2 つの {{htmlelement("rt")}} 要素で区切っています。

#### 結果

{{EmbedLiveSample("Using_rb", "100%", 60)}}

### 注釈の分割

なお、この例を完全に分割して注釈された 2 つのベーステキストの部分で書くこともできます。この場合は `<rb>` 要素を含める必要はありません。

```html
<ruby>
  漢 <rp>(</rp><rt>Kan</rt><rp>)</rp> 字 <rp>(</rp><rt>ji</rt><rp>)</rp>
</ruby>
```

#### 結果

{{EmbedLiveSample('Separate annotations')}}

それ以外の例は、 {{HTMLElement("ruby")}} 要素についての記事を参照してください。

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

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("ruby")}}
- {{HTMLElement("rt")}}
- {{HTMLElement("rp")}}
- {{HTMLElement("rtc")}}
