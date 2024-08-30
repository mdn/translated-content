---
title: "<em>: 強調要素"
slug: Web/HTML/Element/em
l10n:
  sourceCommit: 942a529383ee7ee3996fb234187641c08935f3ff
---

{{HTMLSidebar}}

**`<em>`** は [HTML](/ja/docs/Web/HTML) の要素で、強調されたテキストを示します。`<em>` 要素は入れ子にすることができ、入れ子の段階に応じてより強い程度の強調を表すことができます。

{{EmbedInteractiveExample("pages/tabbed/em.html", "tabbed-shorter")}}

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Global_attributes)以外の属性はありません。

## 使用上のメモ

`<em>` 要素は、周囲の文字列と比較して強調される言葉のためのものであり、ふつうは文内の一語または数語に限定され、文自体の意味に影響します。

通常、この要素はイタリック体で表示されます。しかしながら、単にイタリック体のスタイルを適用するために用いるべきではありません。そのような場合は CSS の {{cssxref("font-style")}} によるスタイル付けを使用してください。著作物（書籍、演劇、歌など）の題名を示すためには、 {{HTMLElement("cite")}} 要素を使用してください。学名や他の言語の単語のようによくイタリック体が使われるような、トーンやムードが異なるテキストをマークするには {{HTMLElement("i")}} 要素を使用してください。これらも通常、斜体のスタイルとなりますが、異なる意味を持っています。周辺のテキストよりも高い重要性を持つテキストを示すためには、{{HTMLElement("strong")}} 要素を使用してください。

> [!NOTE]
> （訳注）日本語フォントでは斜体を持たないフォントが多く、斜体で表示されないことがあります。

### \<i> と \<em>

新しい開発者はよく、同様の結果を生み出すために複数の要素があることによく混乱します。 `<em>` と`<i>` はその代表例で、どちらも文字列を斜体にするものです。違いは何でしょうか。どちらを使用するべきでしょうか。

既定では、視覚的な結果は同じです。しかし、意味論的な意味合いは異なります。 `<em>` 要素はその内容を強調することを表しますが、一方で `<i>` 要素は、外来語、架空の登場人物の考え、用語の定義を表す文字列など、通常の文章から外れた文字列を表します。（書籍や映画などの作品名には、 `<cite>` を使用してください。）

つまり、どちらを使うのが正しいかは場面に依存します。どちらも純粋な装飾目的ではなく、それは CSS による整形の役割です。

`<em>` の例は "Just _do_ it already!" や "We _had_ to do something about it" です。文字列を読む人やソフトウェアは、斜体の単語を強調して読み上げるでしょう。

`<i>` の例は "The _Queen Mary_ sailed last night" です。ここで、 "Queen Mary" という語句に強調や重要性は与えていません。これは単に、対象物が Mary という名前の女王ではなく*Queen Mary* という名前の船であることを示します。`<i>` の別の例として "The word _the_ is an article" があります。

## 例

`<em>` 要素は、暗黙的あるいは明示的な対比を表すためによく使われます。

```html
<p>
  In HTML 5, what was previously called
  <em>block-level</em> content is now called <em>flow</em> content.
</p>
```

### 結果

{{EmbedLiveSample("Example")}}

## 技術的概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Content_categories"
          >コンテンツカテゴリー</a
        >
      </th>
      <td>
        <a href="/ja/docs/Web/HTML/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >,
        <a href="/ja/docs/Web/HTML/Content_categories#記述コンテンツ"
          >記述コンテンツ</a
        >, 知覚可能コンテンツ
      </td>
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
      <td>なし。開始タグと終了タグの両方が必須です。</td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>
        <a href="/ja/docs/Web/HTML/Content_categories#記述コンテンツ"
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
      <td>
        {{domxref("HTMLElement")}}。 Gecko 1.9.2 (Firefox 4)
        以前では、この要素には {{domxref("HTMLSpanElement")}}
        インターフェイスが実装されています。
      </td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("i")}}
