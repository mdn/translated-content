---
title: HTML `<dfn>` 定義要素
short-title: <dfn>
slug: Web/HTML/Reference/Elements/dfn
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

**`<dfn>`** [HTML](/ja/docs/Web/HTML) 要素は、定義される用語を示します。`<dfn>` 要素は、完全な定義文の中で使用する必要があります。その際、用語の完全な定義は以下のいずれかとなります。

- 祖先である段落（テキストのブロック、{{HTMLElement("p")}} 要素で示されることもある）
- {{HTMLElement("dt")}}/{{HTMLElement("dd")}} の組み合わせ
- この `<dfn>` 要素の直近の祖先[セクション](/ja/docs/Web/HTML/Guides/Content_categories#区分コンテンツ)

{{InteractiveExample("HTML デモ: &lt;dfn&gt;", "tabbed-shorter")}}

```html-nolint interactive-example
<p>
  <dfn id="def-validator">バリデーター</dfn>とは、コードや文書に含まれる構文
  エラーをチェックするプログラムのことです。
</p>
```

```css interactive-example
dfn {
  /* ここにスタイルを追加 */
}
```

## 属性

この要素の属性は[グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)を含みます。

[`title`](/ja/docs/Web/HTML/Reference/Global_attributes/title) 属性は後述のとおり、通常と異なる特別な意味合いを持ちます。

## 使用上のメモ

`<dfn>` 要素の使用については、必ずしも明確に分かりやすくない側面がいくつかあります。ここでそれらを説明します。

### 定義される用語の指定

定義される用語は、以下の規則に従います。

1. `<dfn>` 要素に [`title`](/ja/docs/Web/HTML/Reference/Global_attributes/title) 属性がある場合、 `title` 属性の値が定義される用語とみなされます。その要素の中の文字列もその用語でなければなりませんが、略語（おそらく {{HTMLElement("abbr")}} を使用）や、用語のその他の形でも構いません。
2. `<dfn>` が単一の子要素を持ち、自分自身には何も文字列がなく、かつその子要素が `title` 属性を持つ {{HTMLElement("abbr")}} 要素である場合は、 `<abbr>` 要素の `title` の値が定義する用語です。
3. それ以外では、 `<dfn>` 要素の文字列コンテンツが定義される用語です。これは[以下の最初の例](#基本的な用語の識別)で示します。

> [!NOTE]
> もし `<dfn>` 要素に `title` 属性があれば、それが定義する用語であり、それ以外の文字列ではありません。

### `<dfn>` 要素へのリンク

`<dfn>` 要素に [`id`](/ja/docs/Web/HTML/Reference/Global_attributes/id) 属性をつけた場合は、 {{HTMLElement("a")}} 要素を使用してそこにリンクすることができます。用語の使用時にはそのようなリンクを使用して、用語のリンクをクリックすることで読者が用語の定義にすばやく移動できるようにしてください。

これは以下の[定義へのリンク](#定義へのリンク)の例で示します。

## 例

様々な利用シナリオの例をいくつか見てみましょう。

### 基本的な用語の識別

この例は、定義の中の用語の位置を識別するために素の `<dfn>` 要素を使用しています。

#### HTML

```html-nolint
<p>
  <strong>HTML の定義要素 (<dfn>&lt;dfn&gt;</dfn>)</strong> は、定義句または文の文脈内で定義される用語を示すために使用されます。
</p>
```

`<dfn>` 要素に `title` がないので、 `<dfn>` 要素自身の文字列コンテンツが定義される用語として使用されます。

#### 結果

{{EmbedLiveSample("Basic_identification_of_a_term", 650, 120)}}

### 定義へのリンク

定義へのリンクを追加するには、いつも通りの方法で {{HTMLElement("a")}} 要素を使ってリンクを作成します。

#### HTML

```html-nolint
<p>
  <strong>HTML の定義要素 (<dfn>&lt;dfn&gt;</dfn>)</strong> は、定義句または文の文脈内で定義される用語を示すために使用されます。
</p>

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Graece donan, Latine
  voluptatem vocant. Confecta res esset. Duo Reges: constructio interrete.
  Scrupulum, inquam, abeunti;
</p>

<p>
  したがって、このプロジェクトでは、<code><a href="#definition-dfn">&lt;dfn&gt;</a></code> 要素を使用することにしました。
</p>
```

ここで [`id`](/ja/docs/Web/HTML/Reference/Global_attributes/id) 属性の `"definition-dfn"` の値をリンク先として使用して、定義を見ることができます。その後で、 `<a>` の [`href`](/ja/docs/Web/HTML/Reference/Elements/a#href) 属性を `"#definition-dfn"` に設定して、定義に戻るリンクを設定します。

#### 結果

{{EmbedLiveSample("Links_to_definitions", 650, 300)}}

### 略語と定義の両方の使用

場合によっては、用語を定義する際に略語を使用したくなる場合もあるでしょう。これは `<dfn>` と {{HTMLElement("abbr")}} 要素を組み合わせて、このように実現できます。

#### HTML

```html-nolint
<p>
  <dfn><abbr title="ハッブル宇宙望遠鏡">HST</abbr></dfn>は、これまでに建造された科学観測装置の中でも、最も多くの成果を上げてきたもののひとつです。20 年以上にわたり軌道上にあり、空をくまなく観測し、かつてないほど高品質で詳細なデータや写真を送り続けています。
</p>

<p>
  実際、<abbr title="ハッブル宇宙望遠鏡">HST</abbr>は、これまでに作られたどの装置よりも、科学の発展に大きく貢献してきたと言えるでしょう。
</p>
```

`<abbr>` 要素が `<dfn>` の中で入れ子になっています。前者は用語が略語 ("HST") であることを示し、完全な用語 ("Hubble Space Telescope") を `title` 属性で定義します。後者は略語が定義された用語であることを表します。

#### 結果

{{EmbedLiveSample("Using_abbreviations_and_definitions_together", 650, 200)}}

## 技術的概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Guides/Content_categories">コンテンツカテゴリー</a>
      </th>
      <td>
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#フローコンテンツ">フローコンテンツ</a>,
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#記述コンテンツ">記述コンテンツ</a>,
        知覚可能コンテンツ
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#記述コンテンツ">記述コンテンツ</a>、ただし {{HTMLElement("dfn")}} 要素を子孫にしてはいけません。
      </td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>なし。開始タグと終了タグの両方が必須です。</td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#記述コンテンツ">記述コンテンツ</a>を受け入れるすべての要素
      </td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td><a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/term_role"><code>term</code></a></td>
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

- 定義リスト関連要素: {{HTMLElement("dl")}}, {{HTMLElement("dt")}}, {{HTMLElement("dd")}}
- {{HTMLElement("abbr")}}
