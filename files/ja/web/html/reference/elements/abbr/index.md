---
title: "<abbr>: 略語要素"
slug: Web/HTML/Reference/Elements/abbr
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

**`<abbr>`** は [HTML](/ja/docs/Web/HTML) の要素で、略語や頭字語を表します。

略語や頭字語を記載する場合、最初の使用時には、略語をマークアップするための `<abbr>` とともに、その用語の完全な展開をプレーンテキストで提供してください。これにより、ユーザーにその略語や頭字語の意味を知らせることができます。

オプションの [`title`](/ja/docs/Web/HTML/Reference/Global_attributes/title) 属性で、略語や頭字語の完全な展開形が存在しない場合に、その展開形を提供することができます。これは、ユーザーエージェントがコンテンツをどのように告知/表示するかのヒントを提供し、同時にすべてのユーザーにその略語が意味していることを知らせます。設定する場合、`title` はこの完全な説明のみを含み、それ以外を含んではいけません。

{{InteractiveExample("HTML デモ: &lt;abbr&gt;", "tabbed-shorter")}}

```html-nolint interactive-example
<p>
  <abbr>CSS</abbr> (Cascading Style Sheets) を使うと、 <abbr>HTML</abbr> (HyperText Markup Language) にスタイルを設定できます。スタイルシートを使用すると、 <abbr>CSS</abbr> のプレゼンテーション層と <abbr>HTML</abbr> のコンテンツ層を分離することができます。これは「関心事の分離」と呼ばれています。
</p>
```

```css interactive-example
abbr {
  font-style: italic;
  color: chocolate;
}
```

## 属性

この要素は[グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)のみに対応しています。[`title`](/ja/docs/Web/HTML/Reference/Global_attributes/title) 属性は `<abbr>` 要素と共に使用すると、特定の意味を持ちます。これは完全な人間が読める形の説明または略語の完全形を設定する必要があります。この文字列は、よくマウスポインターが要素の上で静止したときに、ブラウザーがツールチップとして表示することがあります。

それぞれの `<abbr>` 要素は他の独立しています。同じ文書内で他の省略形ではない表現の文字列に自動的に結びつかない場合は、`title` を使用してください。

## 使用上の注意

### よくある使用例

必ずしもすべての略語を `<abbr>` でマークアップする必要はありません。しかし、有用な場合がいくつかあります。

- 略語が使用され、文書コンテンツの流れの外で完全形や定義を提供したい場合は、 `<abbr>` を適切な [`title`](/ja/docs/Web/HTML/Reference/Global_attributes/title) と共に使用してください。
- 読者になじみのない略語を定義するには、`<abbr>` を使用して用語を提示し、その定義をインラインテキストで記載してください。インライン展開や定義を利用できない場合にのみ、 `title` 属性を記載してください。
- テキスト内に略語が存在し、意味の注釈が必要な場合、`<abbr>` 要素は有用です。これはスタイル設定やスクリプトの目的で使用することができます。
- `<abbr>` は {{HTMLElement("dfn")}} との組み合わせで、略語や頭字語の用語の定義を行なうことができます。以下の[略語の定義](#略語の定義)の例をご覧ください。

### 文法的な考慮事項

[文法的に数を表現する](<https://ja.wikipedia.org/wiki/数_(文法)>)言語（つまり、項目の数が文の文法に影響する言語）では、`<abbr>` 要素内の `title` 属性で同じ文法的な数値を使用してください。これは、アラビア語のように 2 よりも大きい数の文法を持つ言語で特に重要ですが、英語にも当てはまります。

## 既定のスタイル

この要素の目的は単に作者の利便性のためであり、すべてのブラウザーが既定でこの要素を行内 ({{cssxref("display", "display: inline")}}) で表示します。ただし、既定のスタイルはブラウザーによりさまざまです。

一部のブラウザーでは、この要素の内容に点線の下線を引きます。他にも点線の下線を引くだけでなく、小さな大文字で表示するものもあります。それ以外のものは {{HTMLElement("span")}} 要素以上のスタイルを適用しません。このスタイルを制御するには {{cssxref('text-decoration')}} および {{cssxref('font-variant')}} を使用してください。

### アクセシビリティ

頭字語や略語を、ページ内で最初に使われたときに完全な形で綴ることは、特に中身が技術用語や業界用語であった場合に、人々が理解するのに役立ちます。

本文中で略語や頭字語を展開することが使用不可能な場合のみ、`title` を記載してください。特に読み手にとって慣れない専門用語の場合、発表された単語やフレーズと画面に表示される内容に差異があると、耳障りになることがあります。

```html
<p>
  JavaScript Object Notation (<abbr>JSON</abbr>) は軽量のデータ交換形式です。
</p>
```

{{EmbedLiveSample("Accessibility")}}

これは特に、コンテンツで説明している用語や概念になじみがない人、その言語の初心者、認知症の人などに有益です。

## 例

### 意味論的な略語のマークアップ

完全形や説明を提供せずに略語をマークアップするには、この例にあるように、単に属性なしで `<abbr>` を使用してください。

#### HTML

```html
<p><abbr>HTML</abbr> を使うのは楽しくて簡単です。</p>
```

#### 結果

{{EmbedLiveSample("Marking_up_an_abbreviation_semantically")}}

### 略語のスタイル付け

この単純な例に見られるように、 CSS を使用して略語のために専用のスタイルを設定することができます。

#### HTML

```html
<p><abbr>CSS</abbr> を使うと、略語のスタイル付けができます。</p>
```

#### CSS

```css
abbr {
  font-variant: all-small-caps;
}
```

#### 結果

{{EmbedLiveSample("Styling_abbreviations")}}

### 完全形の提供

[`title`](/ja/docs/Web/HTML/Reference/Global_attributes/title) 属性を追加することで、略語や頭字語の完全形や定義を提供することができます。

#### HTML

```html
<p>Ashok's joke made me <abbr title="Laugh Out Loud">LOL</abbr> big time.</p>
```

#### 結果

{{EmbedLiveSample("Providing_an_expansion")}}

### 略語の定義

こちらに示すように、`<abbr>` と {{HTMLElement("dfn")}} を組み合わせることで、より正式に略語を定義することができます。

#### HTML

```html-nolint
<p>
  <dfn id="html"><abbr title="HyperText Markup Language">HTML</abbr> </dfn>  は、ウェブページの意味と構造を構築するために使用するマークアップ言語です。
</p>

<p>
  仕様書 (<dfn id="spec">Specification</dfn>, <abbr>spec</abbr>) は、ある技術や API がどのように機能することを意図し、どのようにアクセスするのかを詳細に説明した文書です。
</p>
```

#### 結果

{{EmbedLiveSample("Defining_an_abbreviation", 600, 120)}}

## 技術的概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Guides/Content_categories"
          >コンテンツカテゴリ－</a
        >
      </th>
      <td>
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >、
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#記述コンテンツ"
          >記述コンテンツ</a
        >、知覚可能コンテンツ
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

- [`<abbr>` 要素の使用](/ja/docs/Learn_web_development/Core/Structuring_content/Advanced_text_features#略語)
