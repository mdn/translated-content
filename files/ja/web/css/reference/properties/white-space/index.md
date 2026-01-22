---
title: white-space
slug: Web/CSS/Reference/Properties/white-space
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

**`white-space`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素内の{{Glossary("whitespace", "ホワイトスペース")}}をどのように扱うかを設定します。

{{InteractiveExample("CSS デモ: white-space")}}

```css interactive-example-choice
white-space: normal;
```

```css interactive-example-choice
white-space: pre;
```

```css interactive-example-choice
white-space: pre-wrap;
```

```css interactive-example-choice
white-space: pre-line;
```

```css interactive-example-choice
white-space: wrap;
```

```css interactive-example-choice
white-space: collapse;
```

```css interactive-example-choice
white-space: preserve nowrap;
```

<!-- cSpell:ignore stept -->

```html interactive-example
<section class="default-example" id="default-example">
  <div id="example-element">
    <p>
      But ere she from the church-door stepped She smiled and told us why: 'It
      was a wicked woman's curse,' Quoth she, 'and what care I?' She smiled, and
      smiled, and passed it off Ere from the door she stept—
    </p>
  </div>
</section>
```

```css interactive-example
#example-element {
  width: 16rem;
}

#example-element p {
  border: 1px solid #c5c5c5;
  padding: 0.75rem;
  text-align: left;
}
```

このプロパティは 2 つのことを指定します。

- ホワイトスペースを[統合する](/ja/docs/Web/CSS/Guides/Text/Whitespace#統合と変換)かどうか、およびその方法。
- 行を自動折り返しの場面で折り返すことができるかどうか。

> [!NOTE]
> 要素の内部で折り返しを行うには、代わりに {{CSSxRef("overflow-wrap")}}, {{CSSxRef("word-break")}}, {{CSSxRef("hyphens")}} を使用してください。

## 構成要素のプロパティ

このプロパティは、以下の CSS プロパティの一括指定です。

- {{cssxref("white-space-collapse")}}
- {{cssxref("text-wrap-mode")}}

> [!NOTE]
> 仕様書は 3 つ目（すなわち `white-space-trim`）の構成要素を定義していますが、これは今のところどのブラウザーでも実装されていません。

## 構文

```css
/* キーワード値 */
white-space: normal;
white-space: pre;
white-space: pre-wrap;
white-space: pre-line;

/* white-space-collapse および text-wrap-mode の一括指定値 */
white-space: nowrap;
white-space: wrap;
white-space: break-spaces;
white-space: collapse;
white-space: preserve nowrap;

/* グローバル値 */
white-space: inherit;
white-space: initial;
white-space: revert;
white-space: revert-layer;
white-space: unset;
```

### 値

`white-space` プロパティの値は、以下の値のリストから選択した単一のキーワード、または {{CSSxRef("white-space-collapse")}} および {{cssxref("text-wrap")}} プロパティの一括指定を表す 2 つの値として指定できます。

- `normal`
  - : 連続するホワイトスペースを[統合します](/ja/docs/Web/CSS/Guides/Text/Whitespace#統合と変換)。ソース内の改行文字もホワイトスペースとして扱われます。行ボックスを埋めるために、必要なら行を折り返します。行は必要に応じて折り返され、行ボックスを埋めます。`collapse wrap` と同等です。
- `pre`
  - : 連続するホワイトスペースはそのまま残され、行の折り返しは、ソース内の改行文字と、 {{HTMLElement("br")}} 要素でのみ行います。`preserve nowrap` と同等です。
- `pre-wrap`
  - : 連続するホワイトスペースはそのまま残されます。行の折り返しは、改行文字や {{HTMLElement("br")}} 要素のあるときか、行ボックスを埋めるのに必要なときに行います。`preserve wrap` と同等です。
- `pre-line`
  - : 連続するホワイトスペースは[統合して](/ja/docs/Web/CSS/Guides/Text/Whitespace#統合と変換) 1 つにします。行の折り返しは、改行文字や {{HTMLElement("br")}} 要素のあるときか、行ボックスを埋めるのに必要なときに行われます。

> [!NOTE]
> `white-space` プロパティを一括指定プロパティとして使用するのは、比較的新しい機能です（[ブラウザーの互換性](#ブラウザーの互換性)を参照）。元々、6 つのキーワード値を持っていましたが、`nowrap` の値は {{cssxref("text-wrap-mode")}} の値として解釈され、`break-spaces` の値は {{cssxref("white-space-collapse")}} の値として解釈されるようになりました。上記の 4 つのキーワードは今でも `white-space` に固有のものです が、これらは個別指定の同等表現を持っています。`white-space` を一括指定にする変更により、受け入れられる値がさらに多くのキーワードや組み合わせ（`wrap` や `collapse` など）に拡張されます。

次の表は、これら 4 つの `white-space` キーワードの値の挙動をまとめたものです。

<table class="standard-table">
  <thead>
    <tr>
      <th></th>
      <th>改行文字</th>
      <th>空白と<br>タブ文字</th>
      <th>テキストの<br>折り返し</th>
      <th>行末の空白</th>
      <th>行末の<br>その他の空白区切り</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th><code>normal</code></th>
      <td>統合する</td>
      <td>統合する</td>
      <td>折り返す</td>
      <td>除去する</td>
      <td>ぶら下げる</td>
    </tr>
    <tr>
      <th><code>pre</code></th>
      <td>そのまま</td>
      <td>そのまま</td>
      <td>折り返さない</td>
      <td>そのまま</td>
      <td>折り返さない</td>
    </tr>
    <tr>
      <th><code>pre-wrap</code></th>
      <td>そのまま</td>
      <td>そのまま</td>
      <td>折り返す</td>
      <td>ぶら下げる</td>
      <td>ぶら下げる</td>
    </tr>
    <tr>
      <th><code>pre-line</code></th>
      <td>そのまま</td>
      <td>統合する</td>
      <td>折り返す</td>
      <td>除去する</td>
      <td>ぶら下げる</td>
    </tr>
  </tbody>
</table>

タブの既定値は 8 文字で、{{cssxref("tab-size")}} プロパティを使用して設定できます。`normal`、`nowrap`、`pre-line` の値の場合、すべてのタブは空白文字 (U+0020) 文字に変換されます。

> [!NOTE]
> **空白**と**その他の空白区切り**には違いがあります。以下のように定義されています。
>
> - 空白
>   - : 空白 (U+0020)、タブ (U+0009)、区切り文字 (改行など)。
> - その他の空白区切り
>   - : Unicode で定義されているその他の区切り文字で、空白として定義されているもの以外。
>
> ホワイトスペースが*ぶら下げる*とある場合、内在サイズを計算するときにボックスの大きさに影響することがあります。

## 公式定義

{{CSSInfo}}

## 形式文法

{{CSSSyntax}}

## 例

### 基本的な例

```css
code {
  white-space: pre;
}
```

### \<pre> 要素内での改行

```css
pre {
  white-space: pre-wrap;
}
```

### 実践

```html hidden
<div id="css-code" class="box">
  p { white-space:
  <select>
    <option>normal</option>
    <option>nowrap</option>
    <option>pre</option>
    <option>pre-wrap</option>
    <option>pre-line</option>
    <option>break-spaces</option>
  </select>
  }
</div>
<div id="results" class="box">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
</div>
```

```css hidden
.box {
  width: 350px;
  padding: 16px;
}

#css-code {
  background-color: gainsboro;
  font-size: 16px;
  font-family: monospace;
}

#css-code select {
  font-family: inherit;
  width: 100px;
}

#results {
  background-color: rgb(230 230 230);
  overflow-x: scroll;
  white-space: normal;
  font-size: 14px;
}
```

```js hidden
const select = document.querySelector("#css-code select");
const results = document.querySelector("#results p");
select.addEventListener("change", (e) => {
  results.style.setProperty("white-space", e.target.value);
});
```

{{EmbedLiveSample("In_action", "100%", 450)}}

### 表内の行の折り返しの制御

#### HTML

```html
<table>
  <tbody>
    <tr>
      <td></td>
      <td>分割されるとても長いコンテンツ</td>
      <td class="nw">分割されないとても長いコンテンツ</td>
    </tr>
    <tr>
      <td class="nw">white-space:</td>
      <td>normal</td>
      <td>nowrap</td>
    </tr>
  </tbody>
</table>
```

#### CSS

```css
table {
  border-collapse: collapse;
  border: solid black 1px;
  width: 250px;
  height: 150px;
}
td {
  border: solid 1px black;
  text-align: center;
}
.nw {
  white-space: nowrap;
}
```

#### 結果

{{EmbedLiveSample('Controlling line wrapping in tables', "100%", "100%")}}

### SVG の text 要素内の複数行

CSS の `white-space` プロパティで、既定では折り返しを行わない {{SVGElement("text")}} 要素を複数行にすることができます。

#### HTML

`<text>` 要素内のテキストは、改行が検出されるように複数行に分割する必要があります。最初の行の後、残りの行は空白を削除する必要があります。

```html-nolint
<svg viewBox="0 0 320 150">
  <text y="20" x="10">Here is an English paragraph
that is broken into multiple lines
in the source code so that it can
be more easily read and edited
in a text editor.
  </text>
</svg>
```

#### CSS

```css
text {
  white-space: break-spaces;
}
```

#### 結果

{{EmbedLiveSample("multiple_lines_in_svg_text_element", "100%", 350)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 内部での折り返しを定義するプロパティ: {{CSSxRef("overflow-wrap")}}, {{CSSxRef("word-break")}}, {{CSSxRef("hyphens")}}
- {{cssxref("tab-size")}}
- [CSS でのホワイトスペースの扱い](/ja/docs/Web/CSS/Guides/Text/Whitespace)
