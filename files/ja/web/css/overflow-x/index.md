---
title: overflow-x
slug: Web/CSS/overflow-x
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

**`overflow-x`** は [CSS](/ja/docs/Web/CSS) のプロパティで、ブロックレベル要素のコンテンツが左右の端からあふれた時にどのように表示するかを設定します。これは表示なし、スクロールバー付き、コンテンツをはみ出させる、のいずれかになります。このプロパティは、[`overflow`](/ja/docs/Web/CSS/overflow) 一括指定プロパティを使用して設定することもできます。

{{EmbedInteractiveExample("pages/css/overflow-x.html")}}

## 構文

```css
/* キーワード値 */
overflow-x: visible;
overflow-x: hidden;
overflow-x: clip;
overflow-x: scroll;
overflow-x: auto;

/* グローバル値 */
overflow-x: inherit;
overflow-x: initial;
overflow-x: revert;
overflow-x: revert-layer;
overflow-x: unset;
```

`overflow-x` プロパティは、単一の {{CSSXref("overflow_value", "&lt;overflow&gt;")}} キーワード値で指定します。

{{cssxref("overflow-y")}} が `hidden`、`scroll`、`auto` のいずれかで、 `overflow-x` プロパティが `visible` （既定値）の場合、この値は暗黙的に `auto` として計算されます。

### 値

- `visible`
  - : あふれたコンテンツは切り取られず、この要素のパディングボックスの左右の端よりも外側に表示される可能性があります。この要素ボックスは{{glossary("scroll container","スクロールコンテナー")}}になりません。
- `hidden`
  - : 要素のパディングボックスに水平方向に合わせる必要がある場合は、コンテンツを切り取ります。スクロールバーは表示されません。
- `clip`
  - : あふれたコンテンツは、 [`overflow-clip-margin`](/ja/docs/Web/CSS/overflow-clip-margin) プロパティを使用して定義された要素のオーバーフロークリップ枠で切り取られます。その結果、コンテンツは要素のパディングボックスから `overflow-clip-margin` の値 {{cssxref("&lt;length&gt;")}} だけはみ出します（設定されていない場合は `0px` です）。 `clip` と `hidden` の違いは、 `clip` キーワードはプログラムによるスクロールも含め、すべてのスクロールを禁止することです。新しい整形コンテキストは生成されません。新しい整形コンテキストを生成するのであれば、 `overflow: clip` と共に {{cssxref("display", "display: flow-root", "#flow-root")}} を使用してください。この要素ボックスはスクロールコンテナーにはなりません。
- `scroll`
  - : あふれたコンテンツは、水平方向にパディングボックスに合わせる必要がある場合に切り取られます。ブラウザーはコンテンツが実際に切り取られるかどうかにかかわらず、水平方向のスクロールバーを表示します。 (これで、コンテンツが変化したときにスクロールバーが表示されたり非表示になったりすることを防ぎます。) プリンターはあふれたコンテンツを印刷するかもしれません。
- `auto`
  - : あふれたコンテンツは要素のパディングボックスで切り取られ、あふれたコンテンツはビュー内にスクロールすることができます。 `scroll` とは異なり、ユーザーエージェントはコンテンツがあふれた場合のみスクロールバーを表示し、既定では、スクロールバーを非表示にします。コンテンツが要素のパディングボックス内に収まる場合、 `visible` と同じように見えますが、新しいブロック整形コンテキストを確立します。デスクトップのブラウザーは、コンテンツがあふれた場合にスクロールバーを提供します。

> [!NOTE]
> キーワード値 `overlay` は、 `auto` の古い別名です。 `overlay` の場合、スクロールバーは空間を占有することなく、コンテンツの上に描画されます。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### HTML

```html
<ul>
  <li>
    <code>overflow-x:hidden</code> — ボックスの外側のテキストを隠す
    <div id="div1">ABCDEFGHIJKLMOPQRSTUVWXYZABCDEFGHIJKLMOPQRSTUVWXYZ</div>
  </li>

  <li>
    <code>overflow-x:scroll</code> — 常にスクロールバーを表示
    <div id="div2">ABCDEFGHIJKLMOPQRSTUVWXYZABCDEFGHIJKLMOPQRSTUVWXYZ</div>
  </li>

  <li>
    <code>overflow-x:visible</code> — 必要に応じてテキストをボックスの外に表示
    <div id="div3">ABCDEFGHIJKLMOPQRSTUVWXYZABCDEFGHIJKLMOPQRSTUVWXYZ</div>
  </li>

  <li>
    <code>overflow-x:auto</code> — 多くのブラウザーでは
    <code>scroll</code> と同じ
    <div id="div4">ABCDEFGHIJKLMOPQRSTUVWXYZABCDEFGHIJKLMOPQRSTUVWXYZ</div>
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
  width: 250px;
  margin-bottom: 12px;
}

#div1 {
  overflow-x: hidden;
}
#div2 {
  overflow-x: scroll;
}
#div3 {
  overflow-x: visible;
}
#div4 {
  overflow-x: auto;
}
```

### 結果

{{EmbedLiveSample("Examples", "100%", "270")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{Cssxref("clip")}}, {{Cssxref("display")}}, {{cssxref("text-overflow")}}, {{cssxref("white-space")}}
- [CSS オーバーフロー](/ja/docs/Web/CSS/CSS_overflow)モジュール
- [CSS の構成要素: 要素のオーバーフロー](/ja/docs/Learn/CSS/Building_blocks/Overflowing_content)
