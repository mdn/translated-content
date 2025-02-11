---
title: :focus-visible
slug: Web/CSS/:focus-visible
l10n:
  sourceCommit: fe36fe6e46bc87566759c0f167f315b3779d2ed6
---

{{CSSRef}}

**`:focus-visible`** 擬似クラスは、要素が {{CSSxRef(":focus")}} 擬似クラスに一致している時で、{{glossary("User Agent", "ユーザーエージェント")}}が要素にフォーカスを明示するべきであると推測的に判断した場合に適用されます (多くのブラウザーではこの場合、既定で「フォーカスリング」を表示します)。

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-focus-visible.html", "tabbed-shorter")}}

このセレクターは、ユーザーの入力方法（マウスなのかキーボードなのか）によって異なるフォーカス表示を提供したい場合に便利です。

## 構文

```css
:focus-visible {
  /* ... */
}
```

## :focus と :focus-visible

もともと、ユーザーエージェント CSS は `:focus` 擬似クラスのみに基づいてフォーカススタイルを設定し、フォーカスされた要素のほとんどをフォーカスリングの輪郭線でスタイル設定していました。これにより、すべてのリンクやボタンを含むすべての要素が、フォーカスされたときにフォーカスリングが適用されることになり、多くの人が醜いと感じました。見た目が悪いので、一部の作者はユーザーエージェントの輪郭線のフォーカススタイルを除去しました。フォーカススタイルの変更はユーザビリティに悪影響を及ぼし、フォーカススタイルが除去されると、目の見えるユーザーにとってキーボードナビゲーションが利用できなくなります。

ブラウザーは、フォーカスがあるときに各要素の周囲に（「フォーカスリング」を描画するなどして）フォーカスを目に見える形で示さなくなりました。その代わりに、ユーザーにとって最も有益な場合にのみフォーカスインジケーターを提供するために、様々な発見的手法を使用しています。例えば、ポインティングデバイスを使用してボタンがクリックされた場合、一般的にフォーカスは視覚的な表示されませんが、ユーザー入力が必要なテキストボックスにフォーカスがある場合、フォーカスが表示されます。ユーザーがキーボードを使ってページを操作しているときや、スクリプトを使ってフォーカスを管理しているときには、常にフォーカススタイルが要求されますが、ユーザーがどこにフォーカスを置いているかを知っているとき、例えばマウスや指などのポインティングデバイスを使用して要素に物理的にフォーカスを設定するときには、その要素がユーザーの注意を引き続ける必要がない限り、フォーカススタイルは要求されません。

`focus` 擬似クラスは、常に現在フォーカスされている要素に一致します。 `focus-visible` 擬似クラスもフォーカスされた要素に一致しますが、ユーザーが現在どこにフォーカスがあるのかを知る必要がある場合にのみ一致します。 `focus-visible` 擬似クラスは、必要なときにフォーカスされた要素に一致するので、（`:focus` 擬似クラスの代わりに）`:focus-visible` を使用することで、フォーカスインジケータが現れるタイミングを変更することなく、フォーカスインジケータの外観を変更することができます。

[`:focus`](/ja/docs/Web/CSS/:focus) 擬似クラスを使用すると、常に現在フォーカスされている要素を対象とします。この意味は、ユーザーがポインティングデバイスを使用すると、フォーカスされた要素の周囲に目に見えるフォーカスリングが現れることを意味します。 `focus-visible` 擬似クラスは、ユーザーエージェントの選択的なフォーカス表示の動作を尊重しつつ、フォーカス表示のカスタマイズを可能にします。

## 例

### :focus と :focus-visible の比較

この例では 3 組のコントロールを表示しています。それぞれのペアは [`text`](/ja/docs/Web/HTML/Element/input/text) 入力とボタンで構成されています。

- 最初のペアは、フォーカス状態のカスタムスタイルを追加せず、 既定の場合を示しています。
- 2 つ目のペアは `:focus` 擬似クラスを使用してスタイルを追加します。
- 3 つ目のペアは、`:focus-visible` 擬似クラスを使用してスタイルを追加します。

```html
<input value="既定のスタイル" /><br />
<button>既定のスタイル</button><br />

<input class="focus-only" type="text" value=":focus" /><br />
<button class="focus-only">:focus</button><br />

<input class="focus-visible-only" type="text" value=":focus-visible" /><br />
<button class="focus-visible-only">:focus-visible</button>
```

```css
input,
button {
  margin: 10px;
}

.focus-only:focus {
  outline: 2px solid black;
}

.focus-visible-only:focus-visible {
  outline: 4px dashed darkorange;
}
```

各要素を順番にクリックしていくと、フォーカスリングのスタイル設定に `:focus` を使用した場合、ユーザーがボタンをクリックすると UA がフォーカスリングを描画することがわかります。しかし、フォーカスリングのスタイル設定に `:focus-visible` を用いた場合は、既定値と同様にユーザーがボタンをクリックしても UA はフォーカスリングを描画しません。

各要素をタブで見ていくと、既定、`:focus`、`:focus-visible`の 3 つのケースすべてで、ユーザーがキーボードでボタンに移動すると、 UA はボタンの周りにフォーカスリングを描画することがわかります。

これは、 `:focus-visible` によって、デザイナーがフォーカスリングをいつ示すべきかを決定する際に、ブラウザーのロジックに従うことができることを示しています。

{{EmbedLiveSample("Comparing :focus and :focus-visible", "100%", 300)}}

### :focus の代替の適用

もしコードを `:focus-visible` に対応していない古いブラウザーで動作させる必要がある場合は、{{cssxref("@supports")}} で `:focus-visible` の対応を調べ、同じフォーカススタイル設定を `:focus` ルールの中で繰り返してください。なお、 `:focus` に何も指定しなくても、古いブラウザーでは単にネイティブの輪郭線が表示されます。

```html
<button class="button with-fallback" type="button">代替のあるボタン</button>
<button class="button without-fallback" type="button">代替のないボタン</button>
```

```css
.button {
  margin: 10px;
  border: 2px solid darkgray;
  border-radius: 4px;
}

.button:focus-visible {
  /* :focus-visible に対応している場合、フォーカスを描画 */
  outline: 3px solid deepskyblue;
  outline-offset: 3px;
}

@supports not selector(:focus-visible) {
  .button.with-fallback:focus {
    /* :focus-visible に対応していないブラウザー向けの代替 */
    outline: 3px solid deepskyblue;
    outline-offset: 3px;
  }
}
```

{{EmbedLiveSample("Selectively_showing_the_focus_indicator", "100%", 72)}}

## アクセシビリティの考慮

### 弱視

視覚的なフォーカスインジケーターが、弱視の人々からも見えるように確認してください。これは外光が明るい場所（太陽の下の屋外など）で画面を使用するすべての人にも利益になります。 [WCAG 2.1 SC 1.4.11 Non-Text Contrast](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html) は、視覚的なフォーカスインジケーターを少なくとも 3:1 にすることを要求しています。

- アクセシブルな視覚的フォーカスインジケーター: [Give Your Site Some Focus! Tips for Designing Useful and Usable Focus Indicators](https://www.deque.com/blog/give-site-focus-tips-designing-usable-focus-indicators/)

### 認知障碍

複数の入力形式を混在させている場合、フォーカスインジケーターが表示されたり消えたりする理由は明らかではないかもしれません。認知機能に不安のあるユーザーや、技術的な知識が乏しいユーザーにとって、対話的要素の動作が一貫していないと、混乱を招く可能性があります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSxRef(":focus")}}
- {{CSSxRef(":focus-within")}}
- [`:focus-visible` のポリフィル](https://github.com/WICG/focus-visible)
