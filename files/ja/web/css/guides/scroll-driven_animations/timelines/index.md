---
title: スクロール駆動アニメーションのタイムライン
slug: Web/CSS/Guides/Scroll-driven_animations/Timelines
l10n:
  sourceCommit: 11d748f9e217b6a9fd16291d7815a6f803f0136d
---

一般的な UI パターンには、ユーザーがページを縦方向または横方向にスクロールする際にアニメーションする要素が含まれます。これらの「スクロール駆動アニメーション」は、ページのスクロールやページ内のスクロールコンテナーのオーバーフローに直接反応して発生します。

[CSS スクロール駆動アニメーション](/ja/docs/Web/CSS/Guides/Scroll-driven_animations)モジュールで定義されたプロパティは、[CSS アニメーション](/ja/docs/Web/CSS/Guides/Animations) を拡張し、{{cssxref("@keyframes")}} アニメーションで定義されたプロパティ値を、ユーザー操作に応じてアニメーション化することを可能にします。

このガイドは、CSS を使用してスクロール駆動アニメーションのタイムラインとアニメーションを作成する方法の概要を説明します。

## スクロール駆動アニメーションとは

[CSS スクロール駆動アニメーション](/ja/docs/Web/CSS/Guides/Scroll-driven_animations)モジュールは、[CSS キーフレームアニメーション](/ja/docs/Web/CSS/Guides/Animations/Using#キーフレームを用いたアニメーションの流れの定義)をスクロールに連動させるためのプロパティを定義します。

### タイムラインの進行

アニメーションは、デフォルトの時間ベースの文書タイムラインではなく、スクロールベースのタイムラインに沿って進行するように設定できます。これには JavaScript は不要です。CSS を使用することで、[どのアニメーションタイムラインを定義するか](#アニメーションタイムライン)を選択することができ、時間の経過ではなくスクロール可能な要素のスクロールによって要素をアニメーションさせることも含まれます。

### パフォーマンス上の利点

CSSのスクロール駆動アニメーションはパフォーマンスに優れています。JavaScript によるスクロール駆動のアニメーションでは、[`scroll`](/ja/docs/Web/API/Document/scroll_event) イベントリスナーと、{{domxref("IntersectionObserver")}} オブジェクトを{{glossary("main thread", "メインスレッド")}}上で実行し、[スクロールポート](/ja/docs/Glossary/Scroll_container#スクロールポート)上の要素を追跡する必要があります。JavaScript でメインスレッドに依存して効果をレンダリングするたびに、メインスレッドがブロックされるリスクが生じます。これにより、ページの応答性が低下し、ユーザー体験の悪化、つまり{{glossary("jank", "ジャンク")}}を引き起こす可能性があります。

## 基礎

スクロール駆動アニメーションは、[CSS アニメーション](/ja/docs/Web/CSS/Guides/Animations) と[ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API) を基盤としています。スクロール駆動アニメーションを作成する前に、CSS の {{cssxref("@keyframes")}} アニメーションを理解しておく必要があります。詳細は [CSS アニメーションの使用ガイド](/ja/docs/Web/CSS/Guides/Animations/Using)を参照してください。

CSS では、要素にキーフレームアニメーションを適用することでアニメーションを作成します。これには {{cssxref("animation-name")}} プロパティ（または {{cssxref("animation")}} 一括指定）を使用します。デフォルトでは、アニメーションはデフォルトの文書タイムライン上で実行され、時間の経過とともに `from` キーフレームから `to` キーフレームへと、{{cssxref("animation-duration")}} プロパティの値で定義された時間をかけて移動します。デフォルトの文書タイムライン上で実行されるように設定された場合、アニメーションは、例えば {{cssxref("animation-play-state")}} が `paused` に設定されたり、要素から `animation-name` が除去されるなどとして再生が妨げられない限り、完了まで再生されます。

スクロール駆動アニメーションは、デフォルトの文書タイムライン ([DocumentTimeline](/ja/docs/Web/API/DocumentTimeline)) 上で実行されない CSS アニメーションです。代わりに、要素のコンテンツのスクロールによって駆動される、スクロール進行度またはビュー進行度のタイムライン上で実行されます。ユーザーのスクロール操作と、`@keyframe` キーフレームに沿ったアニメーションの進行には直接的な関連性があります。ユーザーが上下左右にスクロールすると、アニメーションはキーフレームの進行に沿って前進または後退します。スクロールが停止すると、アニメーションも停止し、`animation-play-state` が `pause` に設定された状態となります。

## アニメーションタイムライン

{{cssxref("animation-timeline")}} プロパティは、 [CSS アニメーション](/ja/docs/Web/CSS/Guides/Animations)モジュールで定義されており、このアニメーションで使用するタイムラインを設定します。

[CSS スクロール駆動アニメーション](/ja/docs/Web/CSS/Guides/Scroll-driven_animations)モジュールは、`animation-timeline` をスクロール進行度またはビュー進行度のタイムラインとして設定する機能を定義しています。`scroll-timeline-*` および `view-timeline-*` プロパティを使用して、要素をタイムラインコントローラーとして明示的に指定し、その名前を子孫要素の `animation-timeline` として設定できます。また、[`scroll()`](#スクロール進行タイムライン) および [`view()`](#ビュー進行タイムライン) 関数を使用して、無名スクロール進行タイムライン、および無名表示進行度タイムラインを定義することもできます。

あるいは、`animation-timeline` プロパティを使用して、[デフォルトの文書タイムラインを使用する](#通常の_css_アニメーション_デフォルトの文書タイムライン)ことを明示的に指定したり、[アニメーションにタイムラインを持たない](#アニメーションタイムラインの除去)ことを指定して、アニメーションをまったく発生させないようにすることもできます。

### 通常の CSS アニメーション: デフォルトの文書タイムライン

`animation-timeline` を明示的に `auto` に設定するか、プロパティを省略してデフォルトの `auto` を適用すると、タイムラインはデフォルトの文書タイムラインに設定されます。このデフォルト値に設定された場合、アニメーションの進行は、{{cssxref("animation-duration")}}、{{cssxref("animation-delay")}}、`animation-name` の各プロパティを介して、アニメーションが要素に関連付けられてから経過した時間によって決定されます。時間ベースの文書タイムラインは、従来から CSS アニメーションに関連付けられてきたタイムラインです。

```css live-sample___regular
:checked ~ .container > .item {
  animation-name: action;
  animation-duration: 3s;
  animation-delay: 500ms;
  animation-timeline: auto;
}
```

`action` という名前の回転キーフレームアニメーションを作成します。

```css live-sample___regular live-sample___named_scroll live-sample___anon_scroll
@keyframes action {
  from {
    rotate: 45deg;
  }
  to {
    rotate: 765deg;
  }
}
```

```html-nolint hidden live-sample___regular
<input type="checkbox" id="i" />
<label for="i">
  クリックでアニメーションを適用。チェックを外すとアニメーションを除去。
</label>
<div class="container">
  <span class="item"></span>
</div>
```

```css hidden live-sample___regular
div {
  width: 400px;
  height: 100px;
  border: 1px solid;
  background-color: palegoldenrod;
  position: relative;
}
span {
  --size: 50px;
  height: var(--size);
  width: var(--size);
  background-color: magenta;
  border: 1px solid;
  position: absolute;
  left: calc(50% - (var(--size) / 2));
  top: calc(50% - (var(--size) / 2));
}
```

チェックボックスがチェックされている場合、`action` アニメーションが要素に適用されます。チェックされていない場合、アニメーションは `<div>` に適用されません。

{{EmbedLiveSample("regular", "100%", "150")}}

チェックボックスをチェックしてみてください。0.5 秒間のアニメーション待機中は何も起こりません。その後、アニメーションが開始されると、ボックスは 45 度の回転位置にジャンプし、さらに 3 秒かけて 720 度（2 回転分）回転します。合計 3.5 秒後にアニメーションが終了し、`<div>` はデフォルトの回転前の状態に戻ります。

> [!NOTE]
> `animation-timeline` は、{{cssxref("animation")}} 一括指定プロパティによってデフォルト値 `auto` にリセットされますが、この一括指定では設定できません。したがって、スクロール駆動のアニメーションを作成する際は、意図した効果を得るために、常に `animation` 一括指定宣言の後に `animation-timeline` を宣言するようにしてください。

## スクロール進行タイムライン

スクロール進行タイムラインでは、スクロール可能な要素（スクローラー）の上から下（または左から右）へのスクロール、および逆方向のスクロールに基づいてタイムラインが進行します。デフォルトでは、スクロール範囲内の位置が進行率のパーセント値に換算されます。開始時は `0%`、終了時は `100%` となります。<!--This [animation range can be controlled](#controlling_the_animation_range) via the {{cssxref("animation-range")}} properties.-->

スクロール進行タイムラインを作成するには、`animation-timeline` の値がスクローラーを参照している必要があります。スクローラーは名前付きでも無名でも構いません。

### 名前付きスクロール進行タイムライン

「名前付きスクロール進行タイムライン」とは、スクローラーが明示的に {{cssxref("scroll-timeline-name")}} プロパティ（または {{cssxref("scroll-timeline")}} 一括指定）を使用して命名されているものです。この名前は {{cssxref("dashed-ident")}} です。スクローラーは、アニメーション対象要素の `animation-timeline` プロパティの値としてその `scroll-timeline-name` を指定することで、当該要素とリンクされます。

この HTML には 3 つの要素が含まれます。アニメーション対象の `item`、スクロール対象の `container`、そしてスクローラーです。`container` は親要素である `scroller` からオーバーフローする十分な大きさが必要です。スクロールが発生しなければ、スクロールタイムラインは生成されません。

```html live-sample___named_scroll live-sample___anon_scroll
<main class="scroller">
  <div class="container">
    <span class="item"></span>
  </div>
</main>
```

いくつかの基本スタイルを提供します。重要な点としては、スクロールバーよりも背の高いコンテナーの高さを設定し、スクロールを許可するためにオーバーフローを設定することが挙げられます。

```css live-sample___named_scroll live-sample___anon_scroll
.scroller {
  width: 400px;
  height: 100px;
  overflow: scroll;
}
.container {
  height: 200px;
}
```

アニメーション対象要素に設定する `animation-timeline` が、親要素の `scroll-timeline-name` と一致することで、名前付きスクロール進行タイムラインが生成されます。またアニメーションを含める必要があり、これは {{cssxref("animation")}} 一括指定の `animation-name` プロパティの値を、キーフレームアニメーションの {{cssxref("custom-ident")}} 名に設定することで実現します。

```css live-sample___named_scroll
.scroller {
  scroll-timeline-name: --rotate;
}
.item {
  animation: action 1ms linear;
  animation-timeline: --rotate;
}
```

```css hidden live-sample___named_scroll live-sample___anon_scroll
main {
  border: 1px solid;
  background-color: palegoldenrod;
}
div {
  position: relative;
}
span {
  --size: 50px;
  height: var(--size);
  width: var(--size);
  background-color: magenta;
  border: 1px solid;
  position: absolute;
  left: calc(50% - (var(--size) / 2));
  top: calc(50% - (var(--size) / 2));
}
```

この場合、チェックボックスは存在しません。`action` アニメーションの進行は、オーバーフロースクロールバーのスクロールによって制御されており、これは時間の場合とは異なり、期限切れにならないからです。

{{EmbedLiveSample("named_scroll", "100%", "150")}}

スクロールが発生する前、コンテナーの位置はスクロールバーの最上部であり、アニメーションは 0% のキーフレームにあります。下にスクロールしてみてください。スクロールすると、アニメーションがタイムラインに沿って進行し、さらに 720 度回転します。スクロールできなくなった時点で、アニメーションの進行は 100% (`to`) キーフレームに達します。スクロールバーを最上部まで戻さない限り、アニメーション対象はデフォルトの回転状態に戻りません。

#### アニメーションの再生時間

`animation` 一括指定の {{cssxref("animation-duration")}} 成分が `1ms` に設定されていることに気づいたかもしれません。[CSS スクロール駆動アニメーション](/ja/docs/Web/CSS/Guides/Scroll-driven_animations)を作成する際、`animation-duration` の値を指定してもアニメーションの再生時間には影響せず、必要ありません。ただし、非線形のビュー進行アニメーションのタイムラインには持続時間が影響するため、Firefox では要素にアニメーションを適用するためにゼロではない `animation-duration` が必要です。これらの理由から、`animation-duration` を `1ms` に設定するのが一般的な慣行となっています。

`animation-duration: 1ms` を設定することで、Firefox でのアニメーション動作が保証され、すべてのブラウザーでアニメーション効果が統一されます。また、ブラウザーがビュー進行アニメーションのタイムラインに対応していない場合、アニメーションは非表示になります。ブラウザーがキーフレームアニメーションに対応している場合、アニメーションはユーザーには表示されません。ただし、アニメーション自体は実行され、アニメーションイベントが発生します。

### 無名スクロール進行タイムライン

スクロール進行タイムラインに名前を付ける必要はありません。代わりに、アニメーションに「無名スクロール進行タイムライン」を関連付けることができます。この場合、アニメーション対象要素の `animation-timeline` は {{cssxref("animation-timeline/scroll", "scroll()")}} 関数に設定されます。この関数は、渡されたオプション引数に基づいて、スクロール進行タイムラインを提供するスクローラーと使用するスクロール軸を選択します。1 つの引数は、スクローラー要素と現在の要素との関係を定義する [`<scroller>`](/ja/docs/Web/CSS/Reference/Properties/animation-timeline/scroll#scroller) キーワードです（`nearest`、`root`、`self` のいずれか）。もう 1 つはスクロールバーの [`<axis>`](/ja/docs/Web/CSS/Reference/Properties/animation-timeline/scroll#axis) 値（`block`、`inline`、`y`、`x` のいずれか）です。

この例では、`animation-timeline` を `scroll()` 関数に設定する点を除き、前の例と同じ CSS を使用しています。また、スクロールの方向を変更するためにコンテナーのサイズを上書きしています。

```css live-sample___anon_scroll
.item {
  animation: action 1ms linear;
  animation-timeline: scroll(nearest inline);
}
.container {
  inline-size: 800px;
  block-size: 100%;
}
```

{{EmbedLiveSample("anon_scroll", "100%", "150")}}

コンテナーに {{cssxref("inline-size")}} を設定してインライン方向にオーバーフローさせ、 {{cssxref("block-size")}} を `100%` に設定してブロック方向でのオーバーフローを停止させます。インライン方向にスクロールしてみてください。

## ビュー進行タイムライン

スクロール コンテナーのスクロール オフセットを追跡する代わりに、ビュー進行タイムラインでは、スクロールポート内の要素（「対象物」と呼ばれる）の相対的な位置を追跡します。これにより、要素の可視性の変化に基づいてアニメーションを進行させることが可能です。これは「ビュー進行タイムライン」を介して実現されます。アニメーションのキーフレームの進行は、スクローラー内の対象の可視性に基づきます。スクロール進行タイムラインとは異なり、ビュー進行タイムラインではスクローラーを指定できません。対象の可視性は常に、その最も近い親スクローラー内で追跡されます。

ビュー進行タイムラインのアニメーションは、要素がスクロールポート内で可視状態にある場合にのみ発生します。タイムラインの進行は、追跡対象がブロックまたはインラインの末端でスクロールポートと交差し始めた時点で `0%` から開始されます。`100%` は、対象がブロックまたはインラインの開始端でスクロールポートから出た時点で発生します。

要素がビューポートから外れる際に通常 `100%` に到達するため、アニメーションの最終効果はアニメーション終了よりかなり前のキーフレームブロックで設定することをお勧めします。要素がビュー内に残った状態でアニメーションを完了させるには、`to` や `100%` キーフレームではなく、`20%`、`50%`、`80%` などのキーフレームブロック内で完了効果を設定してください。

ビュー進行タイムラインでは、進行状況の可視範囲を調整できます。
{{cssxref("view-timeline-inset")}} を使用します。これは {{cssxref("view-timeline")}} 一括指定の構成要素であり、対象が視野内と見なされるタイミングを調整します。デフォルト値は `auto` です。`auto` 以外のインセット値は、スクロール領域の境界を移動した効果と同じです。正のインセット値は内側への調整を、負の値は外側への調整を行います。

スクロール進行タイムラインと同様に、ビュー進行タイムラインは名前付きまたは無名にすることができます。

### 名前付きビュー進行タイムライン

「名前付きビュー進行タイムライン」は、対象物が {{cssxref("view-timeline-name")}} プロパティによって明示的に名づけられたものです。これは `view-timeline` の成分です。 `<dashed-ident>` の名前を、アニメーション対象要素の `animation-timeline` プロパティの値として指定することで、その要素にリンクさせます。

名前付きビュー進行タイムラインでは、アニメーションの対象要素と制御要素は同一である必要はありません。つまり、タイムラインを制御する要素とアニメーションする要素は別々でも構いません。これにより、スクロール可能なコンテナー内で、ある要素の動きに基づいて別の要素をアニメーションさせることができます。

ここでは {{cssxref("view-timeline-name")}} プロパティを使用して要素に名前を付け、その要素自体をビュー進行タイムラインのソースとして識別します。その後、その名前を `animation-timeline` プロパティの値として設定します。

```css live-sample___named_view
.item {
  animation: action 1ms linear;

  view-timeline-name: --a-name;
  animation-timeline: --a-name;
}
```

アニメーションをアニメーションタイムラインの**前に**適用しました。これは、`animation` が `animation-timeline` を `auto` にリセットするためです。

このアニメーションは、回転効果がアニメーションの進行度合いの `20%` で開始し、`80%` で終了するという点で、これまでの例とは若干異なります。つまり、要素が最初に表示される時点では回転しておらず、完全に視界から消える前に回転が停止します。

```css live-sample___named_view live-sample___anon_view
@keyframes action {
  0%,
  20% {
    rotate: 45deg;
  }
  80%,
  100% {
    rotate: 720deg;
  }
}
```

```css hidden live-sample___named_view live-sample___anon_view live-sample___anon_view_args
.scroller {
  width: 400px;
  height: 200px;
  line-height: 2;
  overflow: scroll;
  border: 1px solid;
  background-color: palegoldenrod;
}
.item {
  --size: 50px;
  height: var(--size);
  width: var(--size);
  background-color: magenta;
  border: 1px solid;
  left: calc(50% - (var(--size) / 2));
  top: calc(50% - (var(--size) / 2));
}
```

```html hidden live-sample___named_view live-sample___anon_view live-sample___anon_view_args
<main class="scroller">
  <p>上へスクロールでアニメーションを表示</p>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <div class="item"></div>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <p>下へスクロールでアニメーションを表示</p>
</main>
```

{{EmbedLiveSample("named_view", "100%", "250")}}

要素をスクロールして表示領域内に移動させます。要素は親スクロール領域の可視範囲内を移動する際に、`@keyframes` アニメーションを通じてアニメーション処理が行われます。

### 無名ビュー進行タイムライン: `view()` 関数

また、`animation-timeline` プロパティの値として {{cssxref("animation-timeline/view", "view()")}} 関数を設定することで、要素のアニメーションタイムラインが「無名ビュー進行タイムライン」であることを指定できます。これにより、要素は最も近い親スクローラー内の位置に基づいてアニメーションされます。

`view()`関数はビュータイムラインを作成します。このタイムラインをアニメーションさせたい要素に`animation-timeline`プロパティで紐付けます。この関数はセレクタに一致する各要素に対してビュータイムラインを生成します。

この例では、やはり `animation` を `animation-timeline` の前に定義してタイムラインがリセットされないようにしています。次に引数なしの `view()` 関数を指定します。定義上、対象の可視性は最も近い親スクローラーによって追跡されるため、スクローラーは明示的に指定しません。

```css live-sample___anon_view
.item {
  animation: action 1ms linear;
  animation-timeline: view();
}
```

{{EmbedLiveSample("anon_view", "100%", "250")}}

### `view()` 関数の引数

`view()` 関数は、最大 3 つのオプションの値を引数として受け取ります。

- 0 個または 1 個の `<axis>` 引数。設定された場合、アニメーションが進行するスクロール軸を指定します。
- キーワード `auto` または、0 個、1 個、2 個の {{cssxref("length-percentage")}} インセット値。設定された場合、これらの値はスクロールポートの先頭や末尾のオフセットを指定します。

`view()` と宣言することは `view(block auto)` と同等であり、これは `block` をタイムラインを提供する親要素の軸として定義し、{{cssxref("scroll-padding")}}（通常デフォルト値は `0`）をアニメーションの先頭と末尾となる可視領域内のインセットとして定義します。

この関数は {{cssxref("view-timeline-axis")}} と {{cssxref("view-timeline-inset")}} プロパティの値を設定します。

{{cssxref("view-timeline-inset")}} の引数は、スクロールポートの先頭と末尾を調整するインセット（正の場合）またはアウトセット（負の場合）を指定します。これらは、要素が「表示範囲内」と見なされるスクロール位置を決定するために使用され、アニメーションタイムラインの長さを決定します。つまり、アニメーションはスクロールポートの先頭の端で開始し末尾の端で終了するのではなく、インセット調整後のビューの先頭と末尾で発生します。

スクロールタイムラインの `scroll()` 関数とは異なり、`<scroller>` 引数は `view()` 関数には存在しません。これは、ビュータイムラインが常に直近のスクロールコンテナー内で対象を追跡するためです。

この例では、インセット値を使用しているため、`from` および `to` キーフレームセレクターが使用できます。

```css live-sample___anon_view_args
@keyframes action {
  from {
    rotate: 45deg;
  }
  to {
    rotate: 720deg;
  }
}

.item {
  animation: action 1ms linear;
  animation-timeline: view(block 20% 20%);
}
```

{{EmbedLiveSample("anon_view_args", "100%", "250")}}

## アクセシビリティの考慮

すべてのアニメーションやトランジションと同様に、常にユーザーの [`prefers-reduced-motion`](/ja/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion) 設定を考慮してください。

### アニメーションタイムラインの除去

`animation-timeline: none` を設定すると、要素はデフォルトの時間ベースの文書タイムラインを含むすべてのアニメーションタイムラインから切り離され、要素はアニメーションしなくなります。一部のアニメーションは必要かもしれませんが、ユーザーの `prefers-reduced-motion` 設定に基づいてアニメーションを削除するには、以下のようにします。

```css
@media (prefers-reduced-motion: reduce) {
  .optionalAnimations {
    animation-timeline: none;
  }
}
```

`animation` 一括指定は `animation-timeline` を `auto` に設定するため、十分な詳細度を持つセレクターを使用して、`animation-timeline` が `animation` の一括指定宣言によって上書きされないようにしてください。

## 関連情報

- [CSS アニメーション](/ja/docs/Web/CSS/Guides/Animations)
- [ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API)
