---
title: overflow-inline
slug: Web/CSS/overflow-inline
tags:
  - CSS
  - CSS ボックスモデル
  - CSS プロパティ
  - リファレンス
  - recipe:css-property
browser-compat: css.properties.overflow-inline
translation_of: Web/CSS/overflow-inline
---
{{CSSRef}}

**`overflow-inline`** は [CSS](/ja/docs/Web/CSS) のプロパティで、内容がボックスのインライン方向の先頭および末尾方向の端をはみ出した時に、どのように表示するかを設定します。これは表示なし、スクロールバー付き、内容をはみ出させるの何れかになります。

> **Note:** `overflow-inline` プロパティは、文書の書字方向に応じて、 {{Cssxref("overflow-y")}} または {{Cssxref("overflow-x")}} に対応します。

## 構文

```css
/* キーワード値 */
overflow-inline: visible;
overflow-inline: hidden;
overflow-inline: scroll;
overflow-inline: auto;

/* グローバル値 */
overflow-inline: inherit;
overflow-inline: initial;
overflow-inline: revert;
overflow-inline: unset;
```

`overflow-inline` プロパティは、以下の値の一覧のうち一つのキーワードで指定します。

### 値

- `visible`
  - : 内容は切り取られず、パディングボックスのインライン方向の先頭と末尾の辺よりも外側に表示される可能性があります。
- `hidden`
  - : インライン方向にパディングボックスに合わせる必要がある場合は、内容を切り取ります。スクロールバーは表示されません。
- `scroll`
  - : インライン方向にパディングボックスに合わせる必要がある場合は、内容を切り取ります。ブラウザーは内容が実際に切り取られるかどうかにかかわらず、スクロールバーを表示します。 (これは内容が変化したときにスクロールバーが表示されたり非表示になったりすることを防ぎます。) プリンターははみ出す内容を印刷するかもしれません。
- `auto`
  - : ユーザーエージェントに依存します。内容がパディングボックス内に収まる場合は `visible` と同じように表示されますが、新しいブロック整形コンテキストを生成します。内容があふれる場合、デスクトップブラウザーはスクロールバーを表示します。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### インライン方向のはみ出し動作の設定

#### HTML

```html
<ul>
  <li><code>overflow-inline:hidden</code> — ボックスの外側のテキストを隠す
    <div id="div1">
      ABCDEFGHIJKLMOPQRSTUVWXYZABCDEFGHIJKLMOPQRSTUVWXYZ
    </div>
  </li>

  <li><code>overflow-inline:scroll</code> — 常にスクロールバーを表示
    <div id="div2">
      ABCDEFGHIJKLMOPQRSTUVWXYZABCDEFGHIJKLMOPQRSTUVWXYZ
    </div>
  </li>

  <li><code>overflow-inline:visible</code> — 必要に応じてテキストをボックスの外に表示
    <div id="div3">
      ABCDEFGHIJKLMOPQRSTUVWXYZABCDEFGHIJKLMOPQRSTUVWXYZ
    </div>
  </li>

  <li><code>overflow-inline:auto</code> — 多くのブラウザーでは  <code>scroll</code> と同じ
    <div id="div4">
      ABCDEFGHIJKLMOPQRSTUVWXYZABCDEFGHIJKLMOPQRSTUVWXYZ
    </div>
  </li>
</ul>
```

#### CSS

```css
#div1, #div2, #div3, #div4 {
  border: 1px solid black;
  width:  250px;
  margin-bottom: 12px;
}

#div1 { overflow-inline: hidden;}
#div2 { overflow-inline: scroll;}
#div3 { overflow-inline: visible;}
#div4 { overflow-inline: auto;}
```

#### 結果

{{EmbedLiveSample("Setting_inline_overflow_behavior", "100%", "270")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 関連する CSS プロパティ: {{cssxref("text-overflow")}}, {{cssxref("white-space")}}, {{Cssxref("overflow")}}, {{Cssxref("overflow-block")}}, {{Cssxref("overflow-x")}}, {{Cssxref("overflow-y")}}, {{Cssxref("clip")}}, {{Cssxref("display")}}
- [CSS 論理プロパティ](/ja/docs/Web/CSS/CSS_Logical_Properties)
- [書字方向](/ja/docs/Web/CSS/CSS_Writing_Modes)
