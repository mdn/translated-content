---
title: overflow-block
slug: Web/CSS/overflow-block
tags:
  - CSS
  - CSS ボックスモデル
  - CSS プロパティ
  - リファレンス
  - recipe:css-property
browser-compat: css.properties.overflow-block
translation_of: Web/CSS/overflow-block
---
{{CSSRef}}

**`overflow-block`** は [CSS](/ja/docs/Web/CSS) プロパティで、内容がブロックの先頭およびブロックの末尾の端をあふれた時にどのように表示するかを設定します。これは表示なし、スクロールバー付き、内容をはみ出させる、のいずれかになります。

> **Note:** `overflow-block` プロパティは、文書の書字方向に応じて、 {{Cssxref("overflow-y")}} または {{Cssxref("overflow-x")}} に対応します。

## 構文

```css
/* キーワード値 */
overflow-block: visible;
overflow-block: hidden;
overflow-block: scroll;
overflow-block: auto;

/* グローバル値 */
overflow-block: inherit;
overflow-block: initial;
overflow-block: revert;
overflow-block: unset;
```

`overflow-block` プロパティは、以下の値の一覧のうち一つのキーワードで指定します。

### 値

- `visible`
  - : 内容は切り取られず、パディングボックスのブロックの先頭とブロックの末尾の辺よりも外側に表示される可能性があります。
- `hidden`
  - : ブロック方向にパディングボックスに合わせる必要がある場合は、内容を切り取ります。スクロールバーは表示されません。
- `scroll`
  - : ブロック方向にパディングボックスに合わせる必要がある場合は、内容を切り取ります。ブラウザーは内容が実際に切り取られるかどうかにかかわらず、スクロールバーを表示します。 (これは内容が変化したときにスクロールバーが表示されたり非表示になったりすることを防ぎます。) プリンターははみ出す内容を印刷するかもしれません。
- `auto`
  - : ユーザーエージェントに依存します。内容がパディングボックス内に収まる場合は `visible` と同じように表示されますが、新しいブロック整形コンテキストを生成します。内容があふれる場合、デスクトップブラウザーはスクロールバーを表示します。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### HTML

```html
<ul>
  <li><code>overflow-block:hidden</code> — ボックスの外側のテキストを隠す
  <div id="div1">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    </div>
  </li>

  <li><code>overflow-block:scroll</code> — 常にスクロールバーを表示
  <div id="div2">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    </div>
  </li>

  <li><code>overflow-block:visible</code> — 必要に応じてテキストをボックスの外に表示
  <div id="div3">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    </div>
  </li>

  <li><code>overflow-block:auto</code> — 多くのブラウザーでは <code>scroll</code> と同じ
  <div id="div4">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    </div>
  </li>
</ul>
```

### CSS

```css
#div1,
#div2,
#div3,
#div4 {
  border: 1px solid black;
  width:  250px;
  height: 100px;
}

#div1 { overflow-block: hidden; margin-bottom: 120px;}
#div2 { overflow-block: scroll; margin-bottom: 120px;}
#div3 { overflow-block: visible; margin-bottom: 120px;}
#div4 { overflow-block: auto; margin-bottom: 120px;}
```

### 結果

{{EmbedLiveSample("Examples", "100%", "780")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 関連する CSS プロパティ: {{cssxref("text-overflow")}}, {{cssxref("white-space")}}, {{Cssxref("overflow")}}, {{Cssxref("overflow-inline")}}, {{Cssxref("overflow-x")}}, {{Cssxref("overflow-y")}}, {{Cssxref("clip")}}, {{Cssxref("display")}}
- [CSS 論理プロパティ](/ja/docs/Web/CSS/CSS_Logical_Properties)
- [書字方向](/ja/docs/Web/CSS/CSS_Writing_Modes)
