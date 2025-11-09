---
title: overlay
slug: Web/CSS/Reference/Properties/overlay
original_slug: Web/CSS/overlay
l10n:
  sourceCommit: 1c4eb0bfb5f72a26fcc21a83fac91aa3e66c2fb8
---

{{SeeCompatTable}}

**`overlay`** は [CSS](/ja/docs/Web/CSS) のプロパティで、[最上位レイヤー](/ja/docs/Glossary/Top_layer)に現れる要素（例えば、表示された[ポップオーバー](/ja/docs/Web/API/Popover_API)やモーダルダイアログ ({{htmlelement("dialog")}}) 要素）が実際に最上位レイヤーにレンダリングされるかどうかを指定します。このプロパティは {{cssxref("transition-property")}} 値のリストの中で、 `allow-discrete` が {{cssxref("transition-behavior")}} として設定されている場合にのみ意味を持ちます。

`overlay` はブラウザーによってのみ設定することができることに注意してください。作成者のスタイルは要素の `overlay` 値を変更することはできません。しかし、要素に設定する[トランジションする要素のリスト](/ja/docs/Web/CSS/Reference/Properties/transition-property)に `overlay` を追加することはできます。これにより、最上位レイヤーからの除去が延期され、すぐに消えずにアニメーションが発生するようになります。

> [!NOTE]
> オーバーレイ `overlay` のアニメーションをトランジションさせるには、 [`transition-behavior: allow-discrete`](/ja/docs/Web/CSS/Reference/Properties/transition-behavior) を設定する必要があります。 `overlay` のアニメーションは通常の[離散アニメーション](/ja/docs/Web/CSS/Guides/Animations/Animatable_properties#離散)と異なり、開始状態か終了状態かに関わらず、可視状態（つまり `auto`）がトランジションの再生時間全体にわたって常に表示されます。

## 構文

```css
/* キーワード値 */
overlay: auto;
overlay: none;

/* グローバル値 */
display: inherit;
display: initial;
display: revert;
display: revert-layer;
display: unset;
```

### 値

- `auto`
  - : 最上位レイヤーに昇格した場合、要素は最上位レイヤーにレンダリングされます。
- `none`
  - : 要素は最上位レイヤーにレンダリングされません。

## 公式定義

{{cssinfo}}

## 形式文法

{{CSSSyntax}}

## 例

### ポップオーバーのトランジション

この例では、[ポップオーバー](/ja/docs/Web/API/Popover_API)が [トランジション](/ja/docs/Web/CSS/Guides/Transitions)で非表示から表示させたり戻したりするアニメーションをします。

#### HTML

HTML は、 [popover](/ja/docs/Web/HTML/Reference/Global_attributes/popover) 属性を使用してポップオーバーとして宣言された {{htmlelement("div")}} 要素と、 [popovertarget](/ja/docs/Web/HTML/Reference/Elements/button#popovertarget) 属性を使用してポップオーバーの表示コントロールとして指定された {{htmlelement("button")}} 要素を含んでいます。

```html-nolint
<button popovertarget="mypopover">ポップオーバーを表示</button>
<div popover="auto" id="mypopover">ポップオーバーです。アニメーションします。</div>
```

#### CSS

`overlay` プロパティはトランジションするプロパティのリストにのみ存在しています。 `overlay` はユーザーエージェントが制御するプロパティなので、トランジション前とトランジション後の状態では宣言されません。

```css
html {
  font-family: Arial, Helvetica, sans-serif;
}

[popover]:popover-open {
  opacity: 1;
  transform: scaleX(1);
}

[popover] {
  font-size: 1.2rem;
  padding: 10px;

  /* 消滅アニメーションの最後の状態 */
  opacity: 0;
  transform: scaleX(0);

  transition:
    opacity 0.7s,
    transform 0.7s,
    overlay 0.7s allow-discrete,
    display 0.7s allow-discrete;
  /* transition: all 0.7s allow-discrete;
  と等価 */
}

/* 有効にするためには、前の [popover]:popover-open ルールの
   後に記述する必要があります。 */
@starting-style {
  [popover]:popover-open {
    opacity: 0;
    transform: scaleX(0);
  }
}

/* ポップオーバーの背景のトランジション */

[popover]::backdrop {
  background-color: rgb(0 0 0 / 0%);
  transition:
    display 0.7s allow-discrete,
    overlay 0.7s allow-discrete,
    background-color 0.7s;
  /* transition: all 0.7s allow-discrete;
  と等価 */
}

[popover]:popover-open::backdrop {
  background-color: rgb(0 0 0 / 25%);
}

/* 入れ子セレクター (&) は擬似要素を表すことができないので、この開始スタイルルールは入れ子にすることができません。 */

@starting-style {
  [popover]:popover-open::backdrop {
    background-color: rgb(0 0 0 / 0%);
  }
}
```

アニメーションさせたい 2 つのプロパティは [`opacity`](/ja/docs/Web/CSS/Reference/Properties/opacity) と [`transform`](/ja/docs/Web/CSS/Reference/Properties/transform) です。これらのプロパティの開始状態にはポップオーバー要素の既定の非表示状態（`[popover]` で選択）を設定し、終了状態にはポップオーバーの開くための状態（[`:popover-open`](/ja/docs/Web/CSS/Reference/Selectors/:popover-open) 擬似クラスで選択）を設定します。そして、 [`transition`](/ja/docs/Web/CSS/Reference/Properties/transition) プロパティを設定するには、この 2 つの間でアニメーションします。

アニメーションする要素は、表示されているときは[最上位レイヤー](/ja/docs/Glossary/Top_layer)に昇格し、非表示のときは最上位レイヤーから除去されるので、 `overlay` がトランジションする要素のリストに追加されます。これにより、最上位レイヤーからの要素の除去はアニメーションが終わるまで確実に延期されます。このような単純なアニメーションでは大きな違いはありませんが、より複雑なケースではこれを行わないと、要素がオーバーレイからすばやく除去されてしまい、アニメーションがスムーズでなくなったり、効果的でなくなったりすることがあります。また、 [`transition-behavior: allow-discrete`](/ja/docs/Web/CSS/Reference/Properties/transition-behavior) の一括指定には、離散的なトランジションを有効にする値も設定されていることに注意してください。

アニメーションが双方向で動作するようにするには、以下のような手順も必要になります。

- アニメーションの開始状態を [`@starting-style`](/ja/docs/Web/CSS/Reference/At-rules/@starting-style) アットルール内に設定します。これは予期しない動作を避けるために必要です。既定では、要素の最初のスタイルが更新されたときや、 `display` 型が `none` から別の型に変更されたときには、トランジションは発生しません。 `@starting-style` では、既定で設定されていることを特定の制御された方法で上書きすることができます。これがなければ、出現アニメーションは発生せず、ポップオーバーはただ現れるだけです。
- `display` もトランジションする要素のリストに追加されているので、アニメーションする要素は出現アニメーションと消滅アニメーションの両方を通して表示されます（`display: block` に設定します）。これがなければ、消滅アニメーションでは表示されません。結果的に、ポップオーバーはただ消えてしまいます。この場合も、アニメーションが発生するためには `transition-behavior: allow-discrete` が必要です。

また、開いた時にポップオーバーの背後に現れる [`::backdrop`](/ja/docs/Web/CSS/Reference/Selectors/::backdrop) にトランジションを記載して、暗くなるアニメーションを提供していることに注意してください。ポップオーバーを開くための背景を選択するには `[popover]:popover-open::backdrop` が必要です。

#### 結果

このコードは次のように表示されます。

{{ EmbedLiveSample("Transitioning a popover", "100%", "200") }}

> [!NOTE]
> ポップオーバーは表示されるたびに `display: none` から `display: block` に変化するので、出現トランジションのたびに `@starting-style` スタイルから `[popover]:popover-open` スタイルに遷移します。ポップオーバーが閉じられたとき、その `[popover]:popover-open` 状態から既定の `[popover]` 状態に遷移します。
>
> このような場合、出現時と消滅時のスタイル設定を異なるものにすることが可能です。この証明は[スタイル設定を使用する場合のデモンストレーション](/ja/docs/Web/CSS/Reference/At-rules/@starting-style#demonstration_of_when_starting_styles_are_used)の例を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS トランジション](/ja/docs/Web/CSS/Guides/Transitions)モジュール
- [`@starting-style`](/ja/docs/Web/CSS/Reference/At-rules/@starting-style)
- [`transition-behavior`](/ja/docs/Web/CSS/Reference/Properties/transition-behavior)
- [Four new CSS features for smooth entry and exit animations](https://developer.chrome.com/blog/entry-exit-animations/) (developer.chrome.com, 2023)
