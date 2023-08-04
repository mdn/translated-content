---
title: white-space
slug: Web/CSS/white-space
---

{{CSSRef}}

**`white-space`** は CSS のプロパティで、要素内の{{Glossary("whitespace", "ホワイトスペース")}}をどのように扱うかを設定します。

{{EmbedInteractiveExample("pages/css/white-space.html")}}

このプロパティは 2 つのことを指定します。

- ホワイトスペースを折り畳むかどうか、およびその方法。
- 行を自動折り返しの場面で折り返すことができるかどうか。

> **メモ:** *要素の内部で*折り返しを行うには、代わりに {{CSSxRef("overflow-wrap")}}, {{CSSxRef("word-break")}}, {{CSSxRef("hyphens")}} を使用してください。

## 構文

```css
/* キーワード値 */
white-space: normal;
white-space: nowrap;
white-space: pre;
white-space: pre-wrap;
white-space: pre-line;
white-space: break-spaces;

/* グローバル値 */
white-space: inherit;
white-space: initial;
white-space: revert;
white-space: unset;
```

`white-space` プロパティは、以下の値の一覧から選択した単一のキーワードで指定します。

### 値

- `normal`
  - : 連続するホワイトスペースがまとめられます。ソース内の改行文字もホワイトスペースとして扱われます。行ボックスを埋めるために、必要なら行を折り返します。
- `nowrap`
  - : `normal` と同じくホワイトスペースを詰めますが、行の折り返しは行いません。
- `pre`
  - : 連続するホワイトスペースはそのまま残され、行の折り返しは、ソース内の改行文字と、 {{HTMLElement("br")}} 要素でのみ行います。
- `pre-wrap`
  - : 連続するホワイトスペースはそのまま残されます。行の折り返しは、改行文字や {{HTMLElement("br")}} 要素のあるときか、行ボックスを埋めるのに必要なときに行います。
- `pre-line`
  - : 連続するホワイトスペースは詰められて 1 つになります。行の折り返しは、改行文字や {{HTMLElement("br")}} 要素のあるときか、行ボックスを埋めるのに必要なときに行われます。
- `break-spaces`

  - : 下記の点を除いて、動作は `pre-wrap` と同じです。

    - そのまま残された連続するホワイトスペースは、行末にあるものを含め、空間を占有します。
    - 残されたそれぞれのホワイトスペースの後で、ホワイトスペースの間を含め、改行する可能性があります。
    - そのような残された空白は空間を占有し、ぶら下がらず、ボックスの内在の寸法 (min-content および max-content の大きさ) に影響します。

次の表に、`white-space` 値の動作をまとめます。

<table class="standard-table">
  <thead>
    <tr>
      <th></th>
      <th>改行</th>
      <th>空白とタブ文字</th>
      <th>テキストの折り返し</th>
      <th>行末の空白</th>
      <th>行末のその他の空白区切り</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th><code>normal</code></th>
      <td>まとめる</td>
      <td>まとめる</td>
      <td>折り返す</td>
      <td>除去</td>
      <td>ぶら下げる</td>
    </tr>
    <tr>
      <th><code>nowrap</code></th>
      <td>まとめる</td>
      <td>まとめる</td>
      <td>折り返さない</td>
      <td>除去</td>
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
      <td>まとめる</td>
      <td>折り返す</td>
      <td>除去</td>
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

> **メモ:** **空白**と**その他の空白区切り**には違いがあります。以下のように定義されています。
>
> - 空白
>   - : 空白 (U+0020)、タブ (U+0009)、区切り文字 (改行など)。
> - その他の空白区切り
>   - : Unicode で定義されているその他の区切り文字で、空白として定義されているもの意外。
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

<h3 id="In_action">操作</h3>

#### HTML

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
  width: 300px;
  padding: 16px;
  border-radius: 10px;
}

#css-code {
  background-color: rgb(220, 220, 220);
  font-size: 16px;
  font-family: monospace;
}

#css-code select {
  font-family: inherit;
}

#results {
  background-color: rgb(230, 230, 230);
  overflow-x: scroll;
  height: 400px;
  white-space: normal;
  font-size: 14px;
}
```

```js hidden
var select = document.querySelector("#css-code select");
var results = document.querySelector("#results p");
select.addEventListener("change", function (e) {
  results.setAttribute("style", "white-space: " + e.target.value);
});
```

```html
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
  nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
  eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
  in culpa qui officia deserunt mollit anim id est laborum.
</p>
```

#### 結果

{{EmbedLiveSample("In_action", "100%", 500)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- *内部での*折り返しを定義するプロパティ: {{CSSxRef("overflow-wrap")}}, {{CSSxRef("word-break")}}, {{CSSxRef("hyphens")}}
