---
title: overflow-block
slug: Web/CSS/overflow-block
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

**`overflow-block`** は [CSS](/ja/docs/Web/CSS) プロパティで、コンテンツがブロックの先頭およびブロックの末尾の端をあふれた時にどのように表示するかを設定します。これは表示なし、スクロールバー付き、コンテンツをはみ出させる、のいずれかになります。

> **メモ:** `overflow-block` プロパティは、文書の書字方向に応じて、 {{Cssxref("overflow-y")}} または {{Cssxref("overflow-x")}} に対応します。

## 構文

```css
/* キーワード値 */
overflow-block: visible;
overflow-block: hidden;
overflow-block: clip;
overflow-block: scroll;
overflow-block: auto;

/* グローバル値 */
overflow-block: inherit;
overflow-block: initial;
overflow-block: revert;
overflow-block: revert-layer;
overflow-block: unset;
```

`overflow-block` プロパティは、単一の {{CSSXref("overflow_value", "&lt;overflow&gt;")}} キーワード値で指定します。

### 値

- `visible`
  - : コンテンツは切り取られず、パディングボックスのブロックの先頭とブロックの末尾の端よりも外側に表示される可能性があります。
- `hidden`
  - : ブロック方向にパディングボックスに合わせる必要がある場合は、コンテンツを切り取ります。スクロールバーは表示されません。
- `clip`
  - : あふれたコンテンツは、 {{CSSXref("overflow-clip-margin")}} プロパティを使用して定義された要素のオーバーフロークリップ枠で切り取られます。
- `scroll`
  - : ブロック方向にパディングボックスに合わせる必要がある場合は、コンテンツを切り取ります。ブラウザーはコンテンツが実際に切り取られるかどうかにかかわらず、スクロールバーを表示します。 (これで、コンテンツが変化したときにスクロールバーが表示されたり非表示になったりすることを防ぎます。) プリンターはあふれたコンテンツを印刷するかもしれません。
- `auto`
  - : ユーザーエージェントに依存します。コンテンツがパディングボックス内に収まる場合は `visible` と同じように表示されますが、新しいブロック整形コンテキストを生成します。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### HTML

```html-nolint
<ul>
  <li>
    <code>overflow-block: hidden</code> （ボックスの外側のテキストを隠す）
    <div id="hidden">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur.
    </div>
  </li>

  <li>
    <code>overflow-block: scroll</code> （常にスクロールバーを表示）
    <div id="scroll">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur.
    </div>
  </li>

  <li>
    <code>overflow-block: clip</code> （オーバーフロークリップ枠を越えてボックスの外にあるテキストを隠す）
    <div id="clip">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur.
    </div>
  </li>

  <li>
    <code>overflow-block: visible</code> （必要に応じてテキストをボックスの外に表示）
    <div id="visible">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur.
    </div>
  </li>

  <li>
    <code>overflow-block:auto</code> （多くのブラウザーでは
    <code>scroll</code> と同じ）
    <div id="auto">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur.
    </div>
  </li>
</ul>
```

### CSS

```css
div {
  border: 1px solid black;
  width: 250px;
  height: 100px;
  margin-bottom: 120px;
}

#hidden {
  overflow-block: hidden;
}
#scroll {
  overflow-block: scroll;
}
#clip {
  overflow-block: clip;
}
#visible {
  overflow-block: visible;
}
#auto {
  overflow-block: auto;
}
```

### 結果

{{EmbedLiveSample("Examples", "100%", "780")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 関連する CSS プロパティ: {{cssxref("text-overflow")}}, {{cssxref("white-space")}}, {{Cssxref("overflow")}}, {{Cssxref("overflow-inline")}}, {{Cssxref("overflow-x")}}, {{Cssxref("overflow-y")}}, {{Cssxref("clip")}}, {{Cssxref("display")}}
- [CSS 論理的プロパティ](/ja/docs/Web/CSS/CSS_logical_properties_and_values)
- [CSS オーバーフロー](/ja/docs/Web/CSS/CSS_overflow)モジュール
- [CSS スクロールバースタイル設定](/ja/docs/Web/CSS/CSS_scrollbars_styling)モジュール
- [書字方向](/ja/docs/Web/CSS/CSS_writing_modes)
- [CSS の構成要素: 要素のオーバーフロー](/ja/docs/Learn/CSS/Building_blocks/Overflowing_content)
