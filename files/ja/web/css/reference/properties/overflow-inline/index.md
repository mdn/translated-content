---
title: overflow-inline
slug: Web/CSS/Reference/Properties/overflow-inline
original_slug: Web/CSS/overflow-inline
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

**`overflow-inline`** は [CSS](/ja/docs/Web/CSS) のプロパティで、コンテンツがボックスのインライン方向の先頭および末尾方向の端をあふれた時にどのように表示するかを設定します。これは表示なし、スクロールバー付き、コンテンツをはみ出させる、のいずれかになります。

> [!NOTE]
> `overflow-inline` プロパティは、文書の書字方向に応じて、 {{cssxref("overflow-y")}} または {{cssxref("overflow-x")}} に対応します。

## 構文

```css
/* キーワード値 */
overflow-inline: visible;
overflow-inline: hidden;
overflow-inline: clip;
overflow-inline: scroll;
overflow-inline: auto;

/* グローバル値 */
overflow-inline: inherit;
overflow-inline: initial;
overflow-inline: revert;
overflow-inline: revert-layer;
overflow-inline: unset;
```

`overflow-inline` プロパティは、単一の {{cSSXref("overflow_value", "&lt;overflow&gt;")}} キーワード値で指定します。

### 値

- `visible`
  - : コンテンツは切り取られず、パディングボックスのインライン方向の先頭と末尾の端よりも外側に表示される可能性があります。
- `hidden`
  - : インライン方向にパディングボックスに合わせる必要がある場合は、コンテンツを切り取ります。スクロールバーは表示されません。
- `clip`
  - : あふれたコンテンツは、 {{cSSXref("overflow-clip-margin")}} プロパティを使用して定義された要素のオーバーフロークリップ枠で切り取られます。
- `scroll`
  - : あふれたコンテンツは、インライン方向にパディングボックスに合わせる必要がある場合に切り取られます。ブラウザーはコンテンツが実際に切り取られるかどうかにかかわらず、スクロールバーを表示します。 (これで、コンテンツが変化したときにスクロールバーが表示されたり非表示になったりすることを防ぎます。) プリンターはあふれたコンテンツを印刷するかもしれません。
- `auto`
  - : ユーザーエージェントに依存します。コンテンツがパディングボックス内に収まる場合は `visible` と同じように表示されますが、新しいブロック整形コンテキストを生成します。コンテンツがあふれる場合、デスクトップブラウザーはスクロールバーを表示します。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### インライン方向のはみ出し動作の設定

#### HTML

```html-nolint
<ul>
  <li>
    <code>overflow-inline: hidden</code> （ボックスの外側のテキストを隠す）
    <div id="div1">ABCDEFGHIJKLMOPQRSTUVWXYZABCDEFGHIJKLMOPQRSTUVWXYZ</div>
  </li>

  <li>
    <code>overflow-inline: scroll</code> （常にスクロールバーを表示）
    <div id="div2">ABCDEFGHIJKLMOPQRSTUVWXYZABCDEFGHIJKLMOPQRSTUVWXYZ</div>
  </li>

  <li>
    <code>overflow-inline: visible</code> （必要に応じてテキストをボックスの外に表示）
    <div id="div3">ABCDEFGHIJKLMOPQRSTUVWXYZABCDEFGHIJKLMOPQRSTUVWXYZ</div>
  </li>

  <li>
    <code>overflow-inline: auto</code> （多くのブラウザーでは
    <code>scroll</code> と同じ）
    <div id="div4">ABCDEFGHIJKLMOPQRSTUVWXYZABCDEFGHIJKLMOPQRSTUVWXYZ</div>
  </li>

  <li>
    <code>overflow-inline: clip</code> （オーバーフロークリップ枠を越えてボックスの外にあるテキストを隠す）
    <code>clip</code>
    <div id="div5">ABCDEFGHIJKLMOPQRSTUVWXYZABCDEFGHIJKLMOPQRSTUVWXYZ</div>
  </li>
</ul>
```

#### CSS

```css
div {
  border: 1px solid black;
  width: 250px;
  margin-bottom: 12px;
}

#div1 {
  overflow-inline: hidden;
}
#div2 {
  overflow-inline: scroll;
}
#div3 {
  overflow-inline: visible;
}
#div4 {
  overflow-inline: auto;
}
#div5 {
  overflow-inline: clip;
  overflow-clip-margin: 2em;
}
```

#### 結果

{{EmbedLiveSample("Setting_inline_overflow_behavior", "100%", "270")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("clip")}}, {{cssxref("display")}}, {{cssxref("overflow")}}, {{cssxref("overflow-block")}}, {{cssxref("overflow-clip-margin")}}, {{cssxref("overflow-x")}}, {{cssxref("overflow-y")}}, {{cssxref("text-overflow")}}, {{cssxref("white-space")}}
- [CSS オーバーフロー](/ja/docs/Web/CSS/Guides/Overflow)モジュール
- [CSS 論理的プロパティ](/ja/docs/Web/CSS/Guides/Logical_properties_and_values)
- [CSS 書字方向](/ja/docs/Web/CSS/Guides/Writing_modes)
- [学習: コンテンツのオーバーフロー](/ja/docs/Learn_web_development/Core/Styling_basics/Overflow)
