---
title: overflow
slug: Web/CSS/overflow
tags:
  - CSS
  - CSS ボックスモデル
  - CSS プロパティ
  - クリッピング
  - レイアウト
  - リファレンス
  - overflow
  - recipe:css-shorthand-property
  - スクロール
browser-compat: css.properties.overflow
translation_of: Web/CSS/overflow
---
{{CSSRef}}

`overflow` は [CSS](/ja/docs/Web/CSS) の[一括指定プロパティ](/ja/docs/Web/CSS/Shorthand_properties)で、要素のオーバーフロー時、すなわち、要素の内容が多すぎて[ブロック整形コンテキスト](/ja/docs/Web/Guide/CSS/Block_formatting_context)に収まらない場合の望ましい動作を両方向について設定します。

{{EmbedInteractiveExample("pages/css/overflow.html")}}

## 構成要素のプロパティ

このプロパティは以下の CSS プロパティの一括指定です。

- [`overflow-x`](/ja/docs/Web/CSS/overflow-x)
- [`overflow-y`](/ja/docs/Web/CSS/overflow-y)

## 構文

```css
/* キーワード値 */
overflow: visible;
overflow: hidden;
overflow: clip;
overflow: scroll;
overflow: auto;
overflow: hidden visible;

/* グローバル値 */
overflow: inherit;
overflow: initial;
overflow: revert;
overflow: unset;
```

`overflow` プロパティは、以下の値の一覧のうち一つまたは二つのキーワードで指定します。二つのキーワードが指定された場合、最初の値が `overflow-x` で、二つ目の値が `overflow-y` になります。それ以外の場合、 `overflow-x` および `overflow-y` は同じ値に設定されます。

### 値

- `visible`
  - : 内容はクリッピングされず、パディングボックスの外側に表示されることがあります。
- `hidden`
  - : 内容は、必要に応じてパディングボックスに合わせて切り取られます。スクロールバーは表示されず、ユーザーがスクロールできるようにするための対応 (ドラッグやスクロールホイールによる方法) もありません。内容はプログラム的に (例えば、 {{domxref("HTMLElement.offsetLeft", "offsetLeft")}} のようなプロパティの値を設定する方法などで) スクロールすることが<em>できます</em>ので、要素はスクロールコンテナーになります。
- `clip`
  - : `hidden` と同様に、コンテンツは要素のパディングボックスに合わせて切り取られます。 `clip` と `hidden` の違いは、 `clip` キーワードがプログラム的なスクロールも含め、すべてのスクロールを禁止することです。ボックスはスクロールコンテナーにはならず、新しい整形コンテキストを始めることもありません。新しい整形コンテキストを始めたいのであれば、 {{cssxref("display", "display: flow-root", "#flow-root")}} を使用して実現することができます。
- `scroll`
  - : 内容は、必要に応じてパディングボックスに合わせて切り取られます。コンテンツが変化したときに、スクロールバーが現れたり消えたりするのを防ぐため、ブラウザーは内容がクリッピングされるかどうかに関わらず、スクロールバーを常に表示します。プリンターはあふれた部分の内容を印刷する可能性があります。
- `auto`
  - : {{Glossary("user agent", "ユーザーエージェント")}}に依存します。内容がパディングボックス内に収まる場合は `visible` と同じように表示されますが、新しいブロック整形コンテキストを生成します。デスクトップブラウザーは内容があふれる場合、スクロールバーを表示します。

- `overlay` {{deprecated_inline}}
  - : `auto` と同じ動作をしますが、場所を取る代わりに内容の先頭にスクロールバーを表示します。 WebKit ベース (例えば Safari) 及び Blink ベース (例えば Chrome 又は Opera) のブラウザーでのみ対応しています。

#### Mozilla 拡張

- `-moz-scrollbars-none` {{deprecated_inline}}
  - : 代わりに `overflow: hidden` を使ってください。
- `-moz-scrollbars-horizontal` {{deprecated_inline}}
  - : `{{Cssxref("overflow-x")}}: scroll` および `{{Cssxref("overflow-y")}}: hidden`、または `overflow: scroll hidden` を代わりに使用してください。
- `-moz-scrollbars-vertical` {{deprecated_inline}}
  - : `{{Cssxref("overflow-x")}}: hidden` および `{{Cssxref("overflow-y")}}: scroll`、または `overflow: hidden scroll` を代わりに使用してください。
- `-moz-hidden-unscrollable` {{deprecated_inline}}
  - : 代わりに `overflow: clip` を使用してください。

Firefox 63 において、 `-moz-scrollbars-none`, `-moz-scrollbars-horizontal`, `-moz-scrollbars-vertical` は機能設定で隠されています。 about:config の中で `layout.css.overflow.moz-scrollbars.enabled` を `true` に設定してください。

## 解説

オーバーフローの選択肢としては、クリッピング、スクロールバーの表示、コンテナーの外側にはみ出して周囲の領域に表示するものがあります。

値を (既定値の) `visible` 以外の値に指定すると、新たな[ブロック整形コンテキスト](/ja/docs/Web/Guide/CSS/Block_formatting_context)を生成します。これは技術的な理由で必要なものです。そうでなければ、もしスクロールする要素に浮動要素が交差している時、スクロールするごとに強制的に折り返し処理をやり直すことになり、スクロール操作が遅くなる原因になるからです。

`overflow` の効果を得るには、ブロックレベルコンテナーに高さ (`height` または `max-height`) を設定するか、 `white-space` を `nowrap` に設定することが必要です。

一方の軸を`visible` (既定値) に設定して、もう一方を<em>他の</em>値に設定すると、 `visible` は `auto` として動作する結果になります。

JavaScript の {{domxref("Element.scrollTop")}} プロパティは、 `overflow` が `hidden` に設定されている場合でも HTML 要素をスクロールさせるために使うことができます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### テキストに様々な overflow の値を設定

#### HTML

```html
  <div>
    <code>visible</code>
    <p class="visible">
     Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
    </p>
  </div>

  <div>
    <code>hidden</code>
    <p class="hidden">
     Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
    </p>
  </div>

  <div>
    <code>scroll</code>
    <p class="scroll">
     Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
    </p>
  </div>

  <div>
    <code>auto</code>
    <p class="auto">
     Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
    </p>
  </div>
```

#### CSS

```css
body {
  display: flex;
  justify-content: space-around;
}

div {
  margin: 1em;
  font-size: 1.2em;
}

p {
  width: 8em;
  height: 5em;
  border: dotted;
}

p.visible {
  overflow: visible;
}

p.hidden {
  overflow: hidden;
}

p.scroll {
  overflow: scroll;
}

p.auto {
  overflow: auto;
}
```

#### 結果

{{EmbedLiveSample("Setting_different_overflow_values_for_text", "600", "250")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 関連 CSS プロパティ: {{cssxref("text-overflow")}}, {{cssxref("white-space")}}, {{Cssxref("overflow-x")}}, {{Cssxref("overflow-y")}}, {{Cssxref("overflow-inline")}}, {{Cssxref("overflow-block")}}, {{Cssxref("clip")}}, {{Cssxref("display")}}
- [CSS オーバーフロー](/ja/docs/Web/CSS/CSS_Overflow) および [スクロール可能なオーバーフローのデバッグ](/ja/docs/Tools/Page_Inspector/How_to/Debug_Scrollable_Overflow)
