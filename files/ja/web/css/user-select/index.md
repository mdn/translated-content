---
title: user-select
slug: Web/CSS/user-select
---

{{CSSRef}}

**`user-select`** は [CSS](/ja/docs/Web/CSS) のプロパティで、ユーザーがテキストを範囲選択できるかどうかを制御します。これは、テキストボックスを除いて、{{Glossary("Chrome", "クローム")}}として読み込まれたコンテンツには影響を与えません。

```css
/* キーワード値 */
user-select: none;
user-select: auto;
user-select: text;
user-select: contain;
user-select: all;

/* グローバル値 */
user-select: inherit;
user-select: initial;
user-select: revert;
user-select: unset;

/* Mozilla 特有の値 */
-moz-user-select: none;
-moz-user-select: text;
-moz-user-select: all;

/* WebKit 特有の値 */
-webkit-user-select: none;
-webkit-user-select: text;
-webkit-user-select: all; /* Safari では動作しません。"none" または
                             "text" を使ってください。さもないと、
                             <html> コンテナーで入力可能になってしまいます。 */

/* Microsoft 特有の値 */
-ms-user-select: none;
-ms-user-select: text;
-ms-user-select: element;
```

> **メモ:** `user-select` は継承されるプロパティではありませんが、多くの場合、初期値の `auto` は継承されているように見えます。 WebKit/Chromium ベースのブラウザーは、仕様書に書かれている動作に従わず、このプロパティを継承するように実装して*おり*、いくつかの問題を発生させています。現在までに、 Chromium は[この問題を修正し](https://chromium.googlesource.com/chromium/src/+/b01af0b296ecb855aac95c4ed335d188e6eac2de)、最終的な動作が仕様書に合うようにすることを選択しています。

## 構文

- `none`
  - : 対象要素とその子孫要素の文章は範囲選択できません。 {{domxref("Selection")}} オブジェクトはこれらの要素も含むことができることに注意してください。
- `auto`

  - : `auto` の使用値は下記のように決められます。

    - `::before` と `::after` の擬似要素では、使用値は `none` になります。
    - 編集可能な要素の場合、使用値は `contain` になります。
    - 上記以外で、親要素の `user-select` の使用値が `all` の場合、対象要素の使用値も `all` になります。
    - 上記以外で、親要素の `user-select` の使用値が `none` の場合、対象要素の使用値も `none` になります。
    - 上記以外の場合、使用値は `text` になります。

- `text`
  - : ユーザーはテキストを範囲選択できます。
- `all`
  - : この要素の内容は不可分的に選択されます。選択範囲が要素の一部を含んだ場合、選択範囲はすべての子孫要素を含む要素全体が含まれなければなりません。子孫要素でダブルクリックや右クリックを行うと、この値が付けられている最も上位の先祖要素が範囲選択されます。
- `contain`
  - : 要素の内部から選択を始めることができます。しかし、選択範囲は要素の境界内のみに限定されます。
- `element`{{non-standard_inline}} (IE 特有のエイリアス)
  - : `contain` と同じです。 Internet Explorer だけが対応しています。

> **メモ:** CSS UI 4 では、 [`user-select: element` が `contain` に名称が変わります。](https://github.com/w3c/csswg-drafts/commit/3f1d9db96fad8d9fc787d3ed66e2d5ad8cfadd05)

</div>

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

<h2 id="Examples">例</h3>

### HTML

```html
<p>このテキストを選択できるはずです。</p>
<p class="unselectable">ちょっと、このテキストの選択はできませんよ！</p>
<p class="all">一度クリックすると、このテキスト全体を選択します。</p>
```

### CSS

```css
.unselectable {
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.all {
  -moz-user-select: all;
  -webkit-user-select: all;
  -ms-user-select: all;
  user-select: all;
}
```

### 結果

{{EmbedLiveSample("Examples")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{Cssxref("::selection")}} 擬似要素
- JavaScript の {{domxref("Selection")}} オブジェクト
