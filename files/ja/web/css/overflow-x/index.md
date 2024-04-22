---
title: overflow-x
slug: Web/CSS/overflow-x
---

{{CSSRef}}

**`overflow-x`** は [CSS](/ja/docs/Web/CSS) のプロパティで、ブロックレベル要素の内容が左右の境界からあふれた場合、どのように表示するのかを設定します。表示しないか、スクロールバーを表示するか、あふれさせるかを設定できます。

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
overflow-x: unset;
```

`overflow-x` プロパティは、以下の値の一覧のうち一つのキーワードで指定します。

### 値

- `visible`
  - : 内容は切り取られず、パディングボックスの左右の辺よりも外側に表示される可能性があります。 {{cssxref("overflow-y")}} が `hidden`, `scroll`, `auto` のいずれかであり、このプロパティが `visible` である場合は、暗黙に `auto` に計算します。
- `hidden`
  - : 水平方向にパディングボックスに合わせる必要がある場合は、内容を切り取ります。スクロールバーは表示されません。
- `clip` {{experimental_inline}}
  - : `hidden` のように、内容が要素のパディングボックスで切り取られます。 `clip` と `hidden` の違いは、 `clip` キーワードはプログラムによるスクロールも含め、すべてのスクロールを禁止することです。ボックスはスクロールコンテナーにならず、新しい整形コンテキストを開始しません。新しい整形コンテキストを始めるのであれば、 {{cssxref("display", "display: flow-root", "#flow-root")}} を使用して実現することができます。
- `scroll`
  - : 水平方向にパディングボックスに合わせる必要がある場合は、内容を切り取ります。ブラウザーは内容が実際に切り取られるかどうかにかかわらず、スクロールバーを表示します。 (これは内容が変化したときにスクロールバーが表示されたり非表示になったりすることを防ぎます。) プリンターははみ出す内容を印刷するかもしれません。
- `auto`
  - : ユーザーエージェントに依存します。内容がパディングボックス内に収まる場合は `visible` と同じように表示されますが、新しいブロック整形文脈を生成します。内容があふれる場合、デスクトップブラウザーはスクロールバーを表示します。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### HTML

```html
<ul>
 - <code>overflow-x:hidden</code> — ボックスの外側のテキストを隠す
    <div id="div1">
  </li>

 - <code>overflow-x:scroll</code> — 常にスクロールバーを表示
    <div id="div2">
  </li>

 - <code>overflow-x:visible</code> — 必要に応じてテキストをボックスの外に表示
    <div id="div3">
  </li>

 - <code>overflow-x:auto</code> — 多くのブラウザーでは <code>scroll</code> と同じ
    <div id="div4">
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

- 関連する CSS プロパティ: {{cssxref("text-overflow")}}, {{cssxref("white-space")}}, {{Cssxref("overflow")}}, {{Cssxref("overflow-y")}}, {{Cssxref("clip")}}, {{Cssxref("display")}}
