---
title: HTML `<em>` 強調要素
short-title: <em>
slug: Web/HTML/Reference/Elements/em
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

**`<em>`** は [HTML](/ja/docs/Web/HTML) の要素で、強調されたテキストを示します。`<em>` 要素は入れ子にすることができ、入れ子の段階に応じてより強い程度の強調を表すことができます。

{{InteractiveExample("HTML デモ: &lt;em&gt;", "tabbed-shorter")}}

```html interactive-example
<p>Get out of bed <em>now</em>!</p>

<p>We <em>had</em> to do something about it.</p>

<p>This is <em>not</em> a drill!</p>
```

```css interactive-example
em {
  /* ここにスタイルを追加 */
}
```

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)以外の属性はありません。

## 使用上のメモ

`<em>` 要素は、周囲の文字列と比較して強調される言葉のためのものであり、ふつうは文内の一語または数語に限定され、文自体の意味に影響します。

通常、この要素はイタリック体で表示されます。しかしながら、単にイタリック体のスタイルを適用するために用いるべきではありません。そのような場合は CSS の {{cssxref("font-style")}} によるスタイル付けを使用してください。著作物（書籍、演劇、歌など）の題名を示すためには、 {{HTMLElement("cite")}} 要素を使用してください。学名や他の言語の単語のようによくイタリック体が使われるような、トーンやムードが異なるテキストをマークするには {{HTMLElement("i")}} 要素を使用してください。これらも通常、イタリック体のスタイルとなりますが、異なる意味を持っています。周辺のテキストよりも高い重要性を持つテキストを示すためには、{{HTMLElement("strong")}} 要素を使用してください。

> [!NOTE]
> （訳注）日本語フォントではイタリック体を持たないフォントが多く、CSS でイタリック体を指定してもイタリック体で表示されないことがあります。

### \<i> と \<em>

一部の開発者は、同様の結果を生み出すために複数の要素があることに混乱するかもしれません。`<em>` と `<i>` はその代表例で、どちらも文字列をイタリック体にするものです。違いは何でしょうか。どちらを使用するべきでしょうか。

デフォルトでは、視覚的な結果は同じです。しかし、意味論的な意味合いは異なります。 `<em>` 要素はその内容を強調することを表しますが、一方で `<i>` 要素は、外来語、架空の登場人物の考え、用語の定義を表す文字列など、通常の文章から外れた文字列を表します。（書籍や映画などの作品名には、 `<cite>` を使用してください。）

つまり、どちらを使うのが正しいかは場面によります。どちらも純粋な装飾目的ではありません。それは CSS によるスタイル設定の役割です。

`<em>` の例としては次のようなものがあります。

```html live-sample___em-example
<p>Just <em>do</em> it already!</p>
<p>We <em>had</em> to do something about it.</p>
```

{{EmbedLiveSample('em-example', "", 85)}}

このテキストを読む人やソフトウェアは、イタリック体の単語を、語調を強調して発音するでしょう。

`<i>` の例としては次のようなものがあります。

```html live-sample___i-example
<p>The word <i>the</i> is an article.</p>
<p>The <i>Queen Mary</i> sailed last night.</p>
```

{{EmbedLiveSample('i-example', "", 85)}}

ここでは、"Queen Mary" という言葉に特別な強調や重要性が置かれているわけではありません。単に、問題となっている対象がメアリーという名の女王ではなく、"Queen Mary" という名の船であることを示しているに過ぎません。

## 例

この例では、`<em>` 要素を使用して、2 つの材料リストの間に存在する暗黙的または明示的な対比を強調しています。

```html-nolint
<p>
  HTML 5 では、以前は<em>ブロックレベル</em>コンテンツと呼ばれていたものが、現在は<em>フロー</em>コンテンツと呼ばれるようになりました。
</p>
```

### 結果

{{EmbedLiveSample("Example")}}

## 技術的概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Guides/Content_categories"
          >コンテンツカテゴリー</a
        >
      </th>
      <td>
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >,
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#記述コンテンツ"
          >記述コンテンツ</a
        >, 知覚可能コンテンツ
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
        <code
          ><a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles#structural_roles_with_html_equivalents">emphasis</a
          ></code
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
