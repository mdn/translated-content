---
title: user-select
slug: Web/CSS/Reference/Properties/user-select
original_slug: Web/CSS/user-select
l10n:
  sourceCommit: 6732005dce0503eebc227e4fb3cc1c72f21d9d81
---

**`user-select`** は [CSS](/ja/docs/Web/CSS) のプロパティで、ユーザーがテキストを範囲選択できるかどうかを制御します。これは、テキストボックスを除いて、{{Glossary("Chrome", "クローム")}}として読み込まれたコンテンツには影響を与えません。

{{InteractiveExample("CSS デモ: user-select")}}

```css interactive-example-choice
user-select: none;
```

```css interactive-example-choice
user-select: text;
```

```css interactive-example-choice
user-select: all;
```

```html interactive-example
<section id="default-example">
  <p id="example-element">Try to select this text</p>
</section>
```

```css interactive-example
#example-element {
  font-size: 1.5rem;
}
```

## 構文

```css
/* キーワード値 */
user-select: none;
user-select: auto;
user-select: text;
user-select: all;

/* グローバル値 */
user-select: inherit;
user-select: initial;
user-select: revert;
user-select: revert-layer;
user-select: unset;
```

> [!NOTE]
> `user-select` は継承されるプロパティではありませんが、多くの場合、初期値の `auto` は継承されているように見えます。 WebKit/Chromium ベースのブラウザーは、仕様書に書かれている動作に従わず、このプロパティを継承するように実装して*おり*、いくつかの問題を発生させています。現在までに、 Chromium は[この問題を修正し](https://chromium.googlesource.com/chromium/src/+/b01af0b296ecb855aac95c4ed335d188e6eac2de)、最終的な動作が仕様書に合うようにすることを選択しています。

### 値

- `none`
  - : 対象要素とその子孫要素の文章は範囲選択できません。 {{domxref("Selection")}} オブジェクトはこれらの要素も含むことができることに注意してください。
- `auto`
  - : `auto` の使用値は下記のように決められます。
    - `::before` と `::after` の擬似要素では、使用値は `none` になります。
    - この要素の親要素の `user-select` の使用値が `none` の場合、使用値は `none` になります。
    - 上記以外で、親要素の `user-select` の使用値が `all` の場合、使用値は `all` になります。
    - 上記以外の場合、使用値は `text` になります。

- `text`
  - : ユーザーはテキストを範囲選択できます。
- `all`
  - : この要素の内容は不可分的に選択されます。選択範囲が要素の一部を含んだ場合、選択範囲はすべての子孫要素を含む要素全体が含まれなければなりません。子孫要素でダブルクリックや右クリックを行うと、この値が付けられている最も上位の先祖要素が範囲選択されます。

> [!NOTE]
> [CSS 基本ユーザーインターフェイス](/ja/docs/Web/CSS/Guides/Basic_user_interface)モジュールでは、 `contain` 値を `user-select` プロパティに定義して、要素の境界で囲まれた要素内で選択を開始できるようにしていますが、これはどのブラウザーも対応していません。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### HTML

```html
<p>このテキストを選択できるはずです。</p>
<p class="unselectable">ちょっと、このテキストの選択はできませんよ！</p>
<p class="all">一度クリックすると、このテキスト全体を選択します。</p>
```

### CSS

```css
.unselectable {
  -webkit-user-select: none; /* Safari */
  user-select: none;
}

.all {
  -webkit-user-select: all;
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
