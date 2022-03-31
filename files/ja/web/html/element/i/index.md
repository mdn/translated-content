---
title: '<i>: 慣用的なテキスト要素'
slug: Web/HTML/Element/i
tags:
  - 要素
  - HTML
  - HTML 文字レベルの意味付け
  - リファレンス
  - ウェブ
browser-compat: html.elements.i
translation_of: Web/HTML/Element/i
---

{{HTMLRef}}

**`<i>`** は [HTML](/ja/docs/Web/HTML) の要素で、何らかの理由で他のテキストと区別されるテキストの範囲を表します。例えば、慣用句、技術用語、分類学上の呼称、などです。英文においてはよくイタリック体で表現されてきたものであり、それがこの要素の `<i>` という名前の元になっています。

{{EmbedInteractiveExample("pages/tabbed/i.html", "tabbed-shorter")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Content_categories">コンテンツカテゴリー</a>
      </th>
      <td>
        <a href="/ja/docs/Web/HTML/Content_categories#flow_content">フローコンテンツ</a>, <a href="/ja/docs/Web/HTML/Content_categories#phrasing_content">記述コンテンツ</a>, 知覚可能コンテンツ
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
        <a href="/ja/docs/Web/HTML/Content_categories#phrasing_content">記述コンテンツ</a>
      </td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>
        <a href="/ja/docs/Web/HTML/Content_categories#phrasing_content">記述コンテンツ</a>を受け入れるすべての要素
      </td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">対応するロールなし</a>
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

この要素には[グローバル属性](/ja/docs/Web/HTML/Global_attributes)以外の属性はありません。

## 使用上のメモ

- `<i>` 要素は、読みやすくする目的で、文字列を通常の文脈から区別するために使用します。これは、この範囲の文字列が周囲の文字列とは意味論的に異なるということです。 `<i>` 要素の用途の中には、次のような様々な品質やモードのテキストを表す区間があります。

  - 音声またはムードが変わるところ
  - 分類学上の表記（"_Homo sapiens_" のような属や種など）
  - 他言語の慣用語（"_et cetera_"など）。言語を識別するには {{htmlattrxref("lang")}} 属性を指定する必要があります。
  - 専門用語
  - 音訳
  - 感想（「彼女は不思議に思った、_ところでこの作家は何を話しているのだろう_」など）
  - 西洋の書字体系における船名または船舶名（「彼らは配属された船である *Empress of the Galaxy* をドックで探した」など。）

- 以前のバージョンの HTML 仕様では、 `<i>` 要素は文字列をイタリック体で表示するために使用する、単なる表現用の要素でした。これは `<b>` 要素が文字列の太字表示に使用されたことと同様です。これらのタグに印字表現ではない意味が定義されたため、それは正しくなくなりました。ブラウザーは現在でも一般的に `<i>` の中身を斜体で表示するでしょうが、この要素の定義としては、そうすることは要件ではなくなりました。テキストをイタリック体で表示するには、 CSS の {{cssxref("font-style")}} プロパティを使用してください。
- この要素は、他の要素でより適切にマークアップされない場合にのみ使用してください。

  - 強調を表すには {{HTMLElement("em")}} 要素を使用してください。
  - 重要性を表すには {{HTMLElement("strong")}} 要素を使用してください。
  - 関連性を表すには {{HTMLElement("mark")}} 要素を使用してください。
  - 書籍、演劇、音楽などの作品名を表すには {{HTMLElement("cite")}} 要素を使用してください。
  - 用語の定義のインスタンスを表すには {{HTMLElement("dfn")}} 要素を使用してください。

## 例

この例では、 `<i>` 要素を他の言語の文字列を示すために使用することを示します。

```html
<p>The Latin phrase <i>Veni, vidi, vici</i> is often
mentioned in music, art, and literature.</p>
```

### 結果

{{EmbedLiveSample("Examples")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("em")}}
- その他のイタリック体にする要素: {{HTMLElement("var")}}, {{HTMLElement("dfn")}}, {{HTMLElement("cite")}}, {{HTMLElement("address")}}
