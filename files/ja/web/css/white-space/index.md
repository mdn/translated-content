---
title: white-space
slug: Web/CSS/white-space
l10n:
  sourceCommit: 82877d5cf5a35e0a4d02b7c54aea0ce7d771d5cb
---

{{CSSRef}}

**`white-space`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素内の{{Glossary("whitespace", "ホワイトスペース")}}をどのように扱うかを設定します。

{{EmbedInteractiveExample("pages/css/white-space.html")}}

このプロパティは 2 つのことを指定します。

- ホワイトスペースを[統合する](#ホワイトスペースの統合)かどうか、およびその方法。
- 行を自動折り返しの場面で折り返すことができるかどうか。

> [!NOTE]
> 要素の内部で折り返しを行うには、代わりに {{CSSxRef("overflow-wrap")}}, {{CSSxRef("word-break")}}, {{CSSxRef("hyphens")}} を使用してください。

## 構文

```css
/* キーワード値 */
white-space: normal;
white-space: nowrap;
white-space: pre;
white-space: pre-wrap;
white-space: pre-line;
white-space: break-spaces;

/* white-space-collapse および text-wrap の一括指定値 */
white-space: collapse balance;
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
  - : 連続するホワイトスペースを[統合し](#ホワイトスペースの統合)ます。ソース内の改行文字もホワイトスペースとして扱われます。行ボックスを埋めるために、必要なら行を折り返します。
- `nowrap`
  - : `normal` と同様にホワイトスペースを[統合し](#ホワイトスペースの統合)ますが、行の折り返しは行いません。
- `pre`
  - : 連続するホワイトスペースはそのまま残され、行の折り返しは、ソース内の改行文字と、 {{HTMLElement("br")}} 要素でのみ行います。
- `pre-wrap`
  - : 連続するホワイトスペースはそのまま残されます。行の折り返しは、改行文字や {{HTMLElement("br")}} 要素のあるときか、行ボックスを埋めるのに必要なときに行います。
- `pre-line`
  - : 連続するホワイトスペースは[統合して](#ホワイトスペースの統合) 1 つになります。行の折り返しは、改行文字や {{HTMLElement("br")}} 要素のあるときか、行ボックスを埋めるのに必要なときに行われます。
- `break-spaces`

  - : 下記の点を除いて、動作は `pre-wrap` と同じです。

    - そのまま残された連続するホワイトスペースは、行末にあるものを含め、空間を占有します。
    - 残されたそれぞれのホワイトスペースの後で、ホワイトスペースの間を含め、改行する可能性があります。
    - そのような残された空白は空間を占有し、ぶら下がらず、ボックスの内在の寸法 ({{cssxref("min-content")}} および {{cssxref("max-content")}} の大きさ) に影響します。

次の表、様座な `white-space` キーワード値の動作を統合します。

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
      <th><code>nowrap</code></th>
      <td>統合する</td>
      <td>統合する</td>
      <td>折り返さない</td>
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
    <tr>
      <th><code>break-spaces</code></th>
      <td>そのまま</td>
      <td>そのまま</td>
      <td>折り返す</td>
      <td>折り返す</td>
      <td>折り返す</td>
    </tr>
  </tbody>
</table>

タブの既定値は 8 文字で、 [`tab-size`](/ja/docs/Web/CSS/tab-size) プロパティを使用して設定できます。`normal`、`nowrap`、`pre-line` の値の場合、すべてのタブは空白文字 (U+0020) 文字に変換されます。

> **メモ:** **空白**と**その他の空白区切り**には違いがあります。以下のように定義されています。
>
> - 空白
>   - : 空白 (U+0020)、タブ (U+0009)、区切り文字 (改行など)。
> - その他の空白区切り
>   - : Unicode で定義されているその他の区切り文字で、空白として定義されているもの以外。
>
> ホワイトスペースが*ぶら下げる*とある場合、内在サイズを計算するときにボックスの大きさに影響することがあります。

## ホワイトスペースの統合

{{cssxref("white-space-collapse")}} プロパティのページにおいて、[ブラウザーのホワイトスペースの統合アリゴリズム](/ja/docs/Web/CSS/white-space-collapse#ホワイトスペースの統合)を説明しています。

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
  background-color: rgb(220 220 220);
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
  <tr>
    <td></td>
    <td>Very long content that splits</td>
    <td class="nw">Very long content that don't split</td>
  </tr>
  <tr>
    <td class="nw">white-space:</td>
    <td>normal</td>
    <td>nowrap</td>
  </tr>
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
- [`tab-size`](/ja/docs/Web/CSS/tab-size)
