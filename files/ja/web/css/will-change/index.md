---
title: will-change
slug: Web/CSS/will-change
---

{{CSSRef}}

[CSS](/ja/docs/Web/CSS) の **`will-change`** プロパティは、どのような要素の変更が予測されているかブラウザーに助言します。ブラウザーは要素が実際に変更される前に、最適化をセットアップすることができます。この種の最適化は、実際に変化が求められる前に、潜在的に高コストの処理を行うことで、ページの応答を向上させることができます。

> **警告:** `will-change` は既存の性能問題を扱うための最終解決手段として使用することを意図しています。予想されるパフォーマンス問題に使用しないでください。

```css
/* キーワード値 */
will-change: auto;
will-change: scroll-position;
will-change: contents;
will-change: transform; /* <custom-ident> の例 */
will-change: opacity; /* <custom-ident> の例 */
will-change: left, top; /* 2つの <animateable-feature> の例 */

/* グローバル値 */
will-change: inherit;
will-change: initial;
will-change: unset;
```

このプロパティを適切に使用するには、少々注意が必要です。

- *will-change を多くの要素に適用しすぎないでください。*ブラウザーはすでに可能な限りすべての最適化を試みています。 `will-change` を試みるような強力な最適化は、大量のマシンリソースを使ってしまい、使い切ってしまった場合、ページの速度の低下や多量のリソース消費を引き起こします。
- *控えめに使用してください。*最適化においてブラウザーが行う通常の動作は、可能な限り早く最適化を解除して、通常に戻すことです。しかし、スタイルシートに直接 `will-change` を追加することは、対象の要素の変更が間近であることを示し続けることであり、ブラウザーはそうでない場合よりも長い間最適化を維持し続けなければなりません。そのため、変化が発生する前後にスクリプトコードを使って `will-change` のオン/オフを切り替えることを習慣づけると良いでしょう。
- _事前の最適化を行うために will-change を要素に適用しないでください。_ ページが良く動作している場合、少々のスピードアップのためだけに `will-change` プロパティを要素に追加しないでください。 `will-change` は既存のパフォーマンス問題を扱うための最終手段として使われるべきものです。そのため、パフォーマンス問題に先んじて使うべきではありません。 過度な `will-change` の使用は、過度にメモリを消費するとともに、ブラウザーが起こりうる変化に対する準備をしようとすることで、より複雑なレンダリングが発生する原因となります。これはパフォーマンスの悪化につながります。
- *処理するために十分な時間を与えてください。*このプロパティは、ユーザーエージェントに変更する可能性のあるプロパティについて事前に通知するための方法として用意されています。そして、ブラウザーは、プロパティの変更が実際に発生する前に、プロパティの変更に必要な事前最適化の適用を選択できます。そのため、ブラウザーに実際の最適化を行うためのいくばくかの時間を与えることが重要になります。少なくとも少し早めに何らかの変更が行われることを予測する方法を見つけてから、`will-change` を設定してください。
- [重ね合わせコンテキスト](/ja/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context)を生成するプロパティ値 (例えば will-change: opacity) を、手前に生成される重ね合わせコンテキストとして使用する場合、_will-change は実際に要素の視覚的な表現に影響を与える可能性があることに注意してください_。

## 構文

### 値

- `auto`
  - : このキーワードは特定の意図を表現しません。ユーザーエージェントは通常通りの経験則と最適化を適用します。

`<animateable-feature>` は次の値のいずれかである場合。

- `scroll-position`
  - : まもなく要素のスクロール位置をアニメーション化、または変更することが予想されることを示します。
- `contents`
  - : まもなく要素のコンテンツに対して何らかのアニメーション化、または変更が予想されることを示します。
- {{cssxref("custom-ident", "&lt;custom-ident&gt;")}}
  - : まもなく要素で指定された名前のプロパティをアニメーション化、または変更されることが予想されることを示します。指定されたプロパティが一括指定プロパティの場合、それが展開されたすべてのプロパティが予想の対象となります。 `unset`, `initial`, `inherit`, `will-change`, `auto`, `scroll-position`, `contents` の値は指定できません。仕様では特定の値についての動作を定義していませんが、一般的に `transform` は合成レイヤーのヒントとなります。特定の CSS プロパティに対しては、 [現在のところ Chrome は 2 つのアクションを取ります](https://github.com/operasoftware/devopera/pull/330)。新しい合成レイヤーを構築するか、または新しい{{Glossary("stacking context","重ね合わせコンテキスト")}}を構築します。

### スタイルシートで

しかし、ページが大きく複雑なアルバムやスライドデッキプレゼンテーションのようなキー押下で遷移するアプリケーションの場合、スタイルシートに `will-change` を含めた方が適切なこともあります。これによって、ブラウザーは事前に切り替えの準備を行い、キーが押されるとすぐに、てきぱきとしたページ間の切り替えができます。しかし、スタイルシートで `will-change` プロパティを直接使用するのは注意してください。ブラウザーが必要なくなったメモリを最適化のために保存し続けることになる可能性があるからです。

```css
.slide {
  will-change: transform;
}
```

## 公式定義

{{CSSInfo}}

## 形式文法

{{CSSSyntax}}

## 例

### スクリプトから

これはスクリプトから `will-change` プロパティを適用する方法を示しています。おそらく多くの場合はこのようにします。

```js
var el = document.getElementById("element");

// 要素がホバーされたとき、will-change を設定する
el.addEventListener("mouseenter", hintBrowser);
el.addEventListener("animationEnd", removeHint);

function hintBrowser() {
  // アニメーションのキーフレームブロックで
  // 変更されるであろう最適化可能なプロパティ
  this.style.willChange = "transform, opacity";
}

function removeHint() {
  this.style.willChange = "auto";
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("css.properties.will-change")}}

## 関連情報

- {{cssxref("transform")}}
