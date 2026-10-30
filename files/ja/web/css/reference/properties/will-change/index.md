---
title: "`will-change` プロパティ"
short-title: will-change
slug: Web/CSS/Reference/Properties/will-change
l10n:
  sourceCommit: d78544a841b0e266a6efc169c044573f5e0b4e7d
---

**`will-change`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素がどのように変化するかをブラウザーにレンダリングのヒントとして提供することで、アニメーションを最適化することができます。

## 構文

```css
/* キーワード値 */
will-change: auto;
will-change: scroll-position;
will-change: contents;

/* <custom-ident> の例 */
will-change: transform;
will-change: opacity;

/* 複数の値 */
will-change: left, top;

/* グローバル値 */
will-change: inherit;
will-change: initial;
will-change: revert;
will-change: revert-layer;
will-change: unset;
```

### 値

この値は、`auto` または、カンマで区切られた 1 つ以上の `<animatable-feature>` 値のいずれかです。

- `auto`
  - : ブラウザーが通常行う経験則や最適化をすべて適用することを示します。これがデフォルト値です。

- `<animatable-feature>`
  - : 以下のいずれかを表します。
    - `scroll-position`
      - : 要素のスクロール位置が、近い将来変更される見込みであることを示し、これによりブラウザーはあふれたコンテンツのレンダリングを最適化できることを示します。

    - `contents`
      - : その要素のコンテンツ（サブツリー内のすべての要素を含む）が近い将来変更される見込みであることを指定し、ブラウザーがその要素のキャッシュをそれほど積極的に行わないように示します。

    - {{cssxref("custom-ident", "&lt;custom-ident&gt;")}}
      - : CSS プロパティの名前を、{{cssxref("ident")}} の形式で指定します。このプロパティの値は、アニメーションが適用されるか、あるいは近い将来に変更されることが予想されるものです。指定された `<ident>` がプロパティの短縮形を表す場合、その個別指定の要素がすべて適用されます。値として `will-change`、`none`、`all`、`auto`、`scroll-position`、`contents` を指定することはできません。

## 解説

`will-change` プロパティは、どのプロパティがアニメーションするか、あるいはその他の方法で変更されることが予想されるかをブラウザーに示すレンダリングヒントを提供します。これにより、ブラウザーは必要なレンダリングの最適化を作成し、より滑らかな変化を実現し、{{glossary("jank", "ジャンク")}}を避けることができるようになります。

`will-change` プロパティは、レンダリングのパフォーマンス改善を目的としています。このプロパティは、頻繁に再描画や再配置が行われる要素や、{{cssxref("box-shadow")}} や {{cssxref("clip-path")}} などのプロパティを使用して複雑な視覚効果を作成する要素のパフォーマンスを改善することができます。

このプロパティを要素に適用すると、その値が要素のサブツリー全体に適用され、子孫要素がいずれも変更可能になることを示します。このため、{{htmlelement("body")}} のような大規模な範囲に `auto` 以外の値を適用すると、実際にはページのパフォーマンスに悪影響を及ぼす可能性があります。このプロパティの使用は、文書の範囲をできるだけ狭く抑え、深く入れ子になった要素に限定するようにしてください。

> [!WARNING]
> `will-change` は既存の性能問題を扱うための最終解決手段として使用することを意図しています。パフォーマンス上の問題を予測するためにこれを使用しないでください。

このプロパティを正しく使用するのは、少し複雑な場合があります。以下のガイドラインを参考にしてください。

- **`will-change` を多くの要素に適用しすぎないでください。** ブラウザーはすでに可能な限りすべての最適化を試みています。 `will-change` を試みるような強力な最適化は、大量のマシンリソースを使ってしまい、使い切ってしまった場合、ページの速度の低下や多量のリソース消費を引き起こします。
- **控えめに使用してください。** 最適化においてブラウザーが行う通常の動作は、可能な限り早く最適化を解除して、通常に戻すことです。しかし、スタイルシートに直接 `will-change` を追加することは、対象の要素の変更が間近であることを示し続けることであり、ブラウザーはそうでない場合よりも長い間最適化を維持し続けなければなりません。そのため、変化が発生する前後にスクリプトコードを使って `will-change` のオン/オフを切り替えることを習慣づけると良いでしょう。
- **予防的な最適化を行うために will-change を要素に適用しないでください。** ページが良く動作している場合、少々のスピードアップのためだけに `will-change` プロパティを要素に追加しないでください。 `will-change` は既存のパフォーマンス問題を扱うための最終手段として使われるべきものです。そのため、パフォーマンス問題に先んじて使うべきではありません。 過度な `will-change` の使用は、過度にメモリーを消費するとともに、ブラウザーが起こりうる変化に対する準備をしようとすることで、より複雑なレンダリングが発生する原因となります。これはパフォーマンスの悪化につながります。
- **処理するために十分な時間を与えてください。** このプロパティは、ユーザーエージェントに変更する可能性のあるプロパティについて事前に通知するための方法として用意されています。そして、ブラウザーは、プロパティの変更が実際に発生する前に、プロパティの変更に必要な事前最適化の適用を選択できます。そのため、ブラウザーに実際の最適化を行うためのいくばくかの時間を与えることが重要になります。少なくとも少し早めに何らかの変更が行われることを予測する方法を見つけてから、`will-change` を設定してください。
- **will-change は実際に要素の視覚的な表現に影響を与える可能性があることに注意してください**。[重ね合わせコンテキスト](/ja/docs/Web/CSS/Guides/Positioned_layout/Stacking_context)を生成するプロパティ値（`will-change: opacity` など）を使用する場合、手前に重ね合わせコンテキストが生成されます。

### アニメーション

アニメーションの品質を改善するために `will-change` を適用する場合は、アニメーションの定義である {{cssxref("@keyframes")}} 内ではなく、アニメーションが始まる前にこのプロパティを追加してください。アニメーションの対象となるプロパティは、あたかもすでに `will-change` に含まれているかのように扱われるため、そこに追加する必要はありません。

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

### 基本的な使い方

この例では、`will-change` プロパティの基本的な CSS での使い方を示しています。

#### CSS

CSS を使用して `will-change` プロパティを `#element` に適用し、{{cssxref("transform")}} および {{cssxref("opacity")}} のプロパティ値が、近い将来アニメーションするかか、あるいは何らかの形で変化することをブラウザーに示唆します。

```css
#element {
  will-change: transform, opacity;
}
```

### スクリプトから

この例では、必要に応じて `will-change` プロパティを適用し、処理が完了したら JavaScript で最適化を除去する方法を示しています。これは、一般的に `will-change` を適用する際の適切な方法です。

#### JavaScript

JavaScript で、{{domxref("Element/mouseenter_event", "mouseenter")}} イベントを使用して、要素にマウスオーバーした際に `will-change` プロパティを `#element` に追加します。`will-change` を `transform, opacity` に設定することで、ブラウザーに対し、{{cssxref("transform")}} および {{cssxref("opacity")}} プロパティの変更に対して最適化を行うよう指示します。{{domxref("Element/animationend_event", "animationend")}} イベントが発生すると、スクリプトはこの値を `auto` に設定します。

```js
const el = document.getElementById("element");

el.addEventListener("mouseenter", hintBrowser);
el.addEventListener("animationEnd", removeHint);

function hintBrowser() {
  this.style.willChange = "transform, opacity";
}

function removeHint() {
  this.style.willChange = "auto";
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("transform")}}
- 独立した座標変換プロパティ: {{cssxref("translate")}}, {{cssxref("scale")}}, {{cssxref("rotate")}}
- {{cssxref("animation")}}
- [CSS 変化予告](/ja/docs/Web/CSS/Guides/Will_change)モジュール
