---
title: transition-behavior
slug: Web/CSS/Reference/Properties/transition-behavior
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

**`transition-behavior`** は [CSS](/ja/docs/Web/CSS) のプロパティで、プロパティは、アニメーションの動作が[離散](/ja/docs/Web/CSS/Guides/Animations/Animatable_properties#離散)であるプロパティにトランジションを始めるかどうかを指定します。

## 構文

```css
/* キーワード値 */
transition-behavior: allow-discrete;
transition-behavior: normal;

/* グローバル値 */
transition-behavior: inherit;
transition-behavior: initial;
transition-behavior: revert;
transition-behavior: revert-layer;
transition-behavior: unset;
```

### 値

- `allow-discrete`
  - : この要素では、離散アニメーションプロパティのトランジションが開始されます。
- `normal`
  - : この要素では、離散アニメーションプロパティのトランジションが開始されません。

## 解説

`transition-behavior` プロパティは、他のトランジションプロパティ、特に {{cssxref("transition-property")}} および {{cssxref("transition-duration")}} と組み合わせて使用する場合にのみ有益なプロパティです。再生時間が 0 でないアニメーションをするプロパティがなければ、トランジションは発生しないからです。

```css
.card {
  transition-property: opacity, display;
  transition-duration: 0.25s;
  transition-behavior: allow-discrete;
}

.card.fade-out {
  opacity: 0;
  display: none;
}
```

`transition-behavior` の値は、一括指定の {{cssxref("transition")}} 宣言に含めることができます。一括指定に含める場合、すべてのプロパティを使用する、または既定値では、 `allow-discrete` 値は通常のアニメーション可能なプロパティに影響を与えません。以下の CSS は、上記の個別指定の宣言と同等です。

```css
.card {
  transition: all 0.25s;
  transition: all 0.25s allow-discrete;
}

.card.fade-out {
  opacity: 0;
  display: none;
}
```

上記のスニペットでは、 `transition` プロパティを 2 回記述しています。最初のものは `allow-discrete` 値を記述していません。これによってブラウザー間の対応ができ、 `transition-behavior` に対応していないブラウザーでもカードの他のプロパティが確実にトランジションするようにしています。

### 離散アニメーションの挙動

離散アニメーションプロパティは一般的に、 2 つの値の間をアニメーションの 50% で切り替えます。

ただし例外があり、それは `display: none` または `content-visibility: hidden` との間でアニメーションする場合です。この場合、ブラウザーはアニメーションの間中、トランジションしたコンテンツが表示されるように、 2 つの値を切り替えます。

従って、例えば次のようになります。

- `display` を `none` から `block` （または他の表示可能な `display` 値）にアニメーションさせるときは、値が `block` に切り替わるのはアニメーションの `0%` であり、期間中ずっと表示されます。
- `display` を `block` （または他の表示可能な `display` 値）から `none` にアニメーションさせるときは、値は `none` に切り替わるのはアニメーションの `100%` です。

## 公式定義

{{cssinfo}}

## 形式文法

{{CSSSyntax}}

## 例

### ポップオーバーのトランジション

この例では、[ポップオーバー](/ja/docs/Web/API/Popover_API)が非表示から表示へ[トランジション](/ja/docs/Web/CSS/Guides/Transitions)したり、戻したりするアニメーションをしています。

#### HTML

この HTML では、 {{htmlelement("div")}} 要素に [popover](/ja/docs/Web/HTML/Reference/Global_attributes/popover) 属性を用いてポップオーバーとして宣言し、 {{htmlelement("button")}} 要素に [popovertarget](/ja/docs/Web/HTML/Reference/Elements/button#popovertarget) 属性を用いてポップオーバーの表示コントロールとして指定しています。

```html-nolint
<button popovertarget="mypopover">ポップオーバーを表示</button>
<div popover="auto" id="mypopover">これがポップオーバーです。アニメーションします。</div>
```

#### CSS

```css hidden
html {
  font-family: "Helvetica", "Arial", sans-serif;
}

[popover] {
  font-size: 1.2rem;
  padding: 10px;
}
```

```css
[popover]:popover-open {
  opacity: 1;
  transform: scaleX(1);
}

[popover] {
  /* 消滅アニメーションの最終状態 */
  opacity: 0;
  transform: scaleX(0);

  transition-property: opacity, transform, overlay, display;
  transition-duration: 0.7s;
  transition-behavior: allow-discrete;
  /* 一括指定の transition プロパティを使用すると、次のように書くことができます。
    transition: 
      opacity 0.7s,
      transform 0.7s,
      overlay 0.7s allow-discrete,
      display 0.7s allow-discrete;

    または、これでも構いません。
    transition: all 0.7s allow-discrete;
  */
}

/* 詳細度は同じなので、効果を得るためには前記の [popover]:popover-open ルールの
後に記載する必要があります。 */
@starting-style {
  [popover]:popover-open {
    opacity: 0;
    transform: scaleX(0);
  }
}
```

アニメーションさせたいプロパティは [`opacity`](/ja/docs/Web/CSS/Reference/Properties/opacity) と [`transform`](/ja/docs/Web/CSS/Reference/Properties/transform) の 2 つです。これらのプロパティの開始状態にはポップオーバー要素の既定の非表示状態（`[popover]` で選択）を設定し、終了状態にはポップオーバーを開いた状態（[`:popover-open`](/ja/docs/Web/CSS/Reference/Selectors/:popover-open) 擬似クラスで選択）を設定します。そして、この 2 つの間でアニメーションするように [`transition`](/ja/docs/Web/CSS/Reference/Properties/transition) プロパティを設定します。

アニメーションする要素は、表示されると[最上位レイヤー](/ja/docs/Glossary/Top_layer)へ移動し、（[`display: none`](/ja/docs/Web/CSS/Reference/Properties/display) で）非表示になると最上位レイヤーから除去されるため、以下のプロパティをトランジションする要素のリストに追加し、双方向でアニメーションが動作するようにしています。どちらの場合も、 `transition-behavior: allow-discrete` を一括指定して、トランジションのアニメーションを有効にしています。

- `display`: アニメーションする要素の出現と消滅の両方のアニメーションを通して表示される（`display: block`に設定する）ために必要です。これがないと、消滅アニメーションは表示されません。結果として、ポップオーバーはただ消えてしまいます。
- [`overlay`](/ja/docs/Web/CSS/Reference/Properties/overlay): 要素が最上位レイヤーから除去されるのをアニメーションが終わるまで確実に延期するようにするために必要です。これは、このような単純なアニメーションでは大差ありませんが、より複雑なケースでは、これを行わないと、要素がオーバーレイからすばやく除去され、アニメーションが滑らかでなくなったり、効果的でなくなったりすることがあります。

さらに、アニメーションの開始状態は [`@starting-style`](/ja/docs/Web/CSS/Reference/At-rules/@starting-style) アットルール内に設定します。これは予期しない動作を避けるために必要です。既定では、要素の初回スタイル更新時、または `display` の種類が `none` から別の種類に変更された場合、トランジションは発生しません。`@starting-style` により、既定のスタイルを特有の制御方法で上書きすることができます。これがなければ、出現アニメーションは発生せず、ポップオーバーはただ現れるだけです。

#### 結果

このコードは次のように表示されます。

{{ EmbedLiveSample("Transitioning a popover", "100%", "200") }}

> [!NOTE]
> ポップオーバーは表示されるたびに `display: none` から `display: block` に変化するので、表示トランジションが発生するたびに `@starting-style` スタイルから `[popover]:popover-open` スタイルに遷移します。ポップオーバーが閉じられたとき、その `[popover]:popover-open` 状態から既定の `[popover]` 状態に遷移します。
>
> このような場合、出現時と消滅時で異なるスタイル設定が可能です。この例については、[開始スタイルを使用する場合のデモ](/ja/docs/Web/CSS/Reference/At-rules/@starting-style#開始スタイルを使用する場合のデモ)を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`overlay`](/ja/docs/Web/CSS/Reference/Properties/overlay)
- [`@starting-style`](/ja/docs/Web/CSS/Reference/At-rules/@starting-style)
- [CSS トランジション](/ja/docs/Web/CSS/Guides/Transitions)モジュール
- [Four new CSS features for smooth entry and exit animations](https://developer.chrome.com/blog/entry-exit-animations/) (developer.chrome.com, 2023)
