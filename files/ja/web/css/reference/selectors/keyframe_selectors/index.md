---
title: キーフレームセレクター
slug: Web/CSS/Reference/Selectors/Keyframe_selectors
l10n:
  sourceCommit: f8ef875113a7d3e9952f41de68be1e3a3a1e6988
---

CSS の**キーフレームセレクター** (keyframe selectors) は、アニメーションタイムラインのキーフレームスタイルを適用する特定の時点を識別します。これらのセレクターは {{cssxref("@keyframes")}} アットルール内でのみ使用されます。

## 構文

```css
/* キーワード */
from {
}
to {
}

/* <percentage> 値 */
0% {
}
50% {
}
100% {
}

/* <timeline-range-name> と共に */
entry 20% {
}
exit 80% {
}

/* セレクターリスト */
0%,
50%,
100% {
}
from,
to {
}
```

### 値

- `from`
  - : アニメーションシーケンスの開始点を表します。`0%` と同等です。
- `to`
  - : アニメーションシーケンスの終了点を表します。`100%` と同等です。
- `<percentage>`
  - : `0%` 以上 `100%` 以下の {{cssxref("percentage")}} で、アニメーションシーケンス全体の進行度を表します。
- `<timeline-range-name> <percentage>`
  - : `<percentage>` 成分の前に置かれた {{cssxref("timeline-range-name")}} で、名前付きタイムライン範囲内の特定の進行点を表します。

## 解説

`<keyframe-selector>` は、`to` または `from` キーワード、`0%` 以上 `100%` 以下のパーセント値、あるいはこれらのキーワードやパーセント値をカンマで区切ったリストのいずれかです。パーセント値の前に {{cssxref("timeline-range-name")}} が付いている場合、アニメーションタイムラインがビュー進行タイムラインであるときはタイムラインの範囲を定義します。そうでない場合はセレクターは無視されます。カンマ区切りの `<keyframe-selector>` リストが使用された場合、次のスタイルブロックは指定されたすべての進行点に適用されます。

### 有効なパーセント値

パーセント値にはパーセント記号 (`%`) を記載しなければなりません。単位のない値（`0` や `20` など）および `0%` から `100%` の範囲外（`-10%` や `110%` など）の値は無効であり、そのキーフレームブロックが無視されます。

### カスケード、順序、優先順位、重要性

アニメーションの `@keyframes` で設定されたプロパティ値は、すべての通常のスタイルよりも優先されます。つまり、[詳細度](/ja/docs/Web/CSS/Guides/Cascade/Specificity)にかかわらず、アニメーション値は {{cssxref("important", "!important")}} フラグが設定されていない値を上書きします。アニメーションプロパティ値よりも優先されるのは、important プロパティ値と現在トランジション中の値のみです。

すべてのキーフレームセレクターは同じ詳細度を持ちます。セレクターリスト内のキーフレームセレクターの順序は重要ではありません。重複するキーフレームセレクターが、同じセレクター上で既に宣言されたプロパティに対して異なる値を宣言する場合にのみ、ソース順序が重要となります。

`!important` フラグは `@keyframes` 定義内では無効です。

### 開始セレクターと終了セレクターの省略

`0%`（または `from`）または `100%`（または `to`）のキーフレームが指定されていない場合、ブラウザーはそれらの状態に対して要素の計算済みスタイルを使用します。これにより、アニメーションは要素の非アニメーションプロパティ値から、または非アニメーションプロパティ値へスムーズに移行することができます。言い換えれば、開始または終了キーフレームのセレクターブロック内では設定されていないプロパティが、タイムライン中間のキーフレームで指定されている場合、そのプロパティは元の値からその値へとアニメーションします。

例えば、要素の背景色が `red` で、次のアニメーションが適用された場合は次のようになります。

```css
@keyframes changeToPurple {
  25%,
  75% {
    background-color: purple;
  }
}
```

アニメーションが始まる時は背景色が `red` となり、アニメーションの 4 分の 1 の時点で `purple` へ遷移します。その後、アニメーションの半分にわたって `purple` を維持し、[アニメーションタイムライン](/ja/docs/Web/CSS/Reference/Properties/animation-timeline)の 75% 時点から元の背景色である `red` へ再び遷移します。[`to` と `from` の省略](#to_と_from_の省略)の例を参照してください。

#### 省略されたプロパティ宣言

複数のプロパティをアニメーションさせるために `@keyframes` アニメーションを作成する場合、すべてのキーフレームセレクターブロックですべてのプロパティを宣言する必要はありません。

例えば、[基本的な使い方](#基本的な使い方) の例では、`opacity` がすべてのキーフレームセレクターブロックで宣言されていますが、`transform` の値は開始時と終了時のみ設定されています。この場合、要素はアニメーションタイムラインの `50%` 地点で完全に不透明になりますが、要素が右方向に `25vw` 座標変換される時点は {{cssxref(「animation-timing-function」)}} に依存します。`linear` の場合は `50%` 地点ですが、`ease-in` が使用されている場合（この例の場合）は異なります。

### カスケード順

複数のキーフレームブロックが同じ `<keyframe-selector>` を使用している場合、それらは[カスケード](/ja/docs/Web/CSS/Guides/Cascade/Introduction)します。これは、同じセレクターを持つ複数のブロックで同じプロパティが定義されている場合、ルール内の最後の宣言が優先されることを意味します。異なるプロパティを定義している場合は、それらは混合されます。

このアニメーションは複数のセレクターブロックで不変の値を繰り返し使用していますが、これは不要です。

```css
@keyframes uglyAnimation {
  0% {
    transform: translateX(0);
    opacity: 0;
    background-color: purple;
  }
  50% {
    transform: translateX(0);
    opacity: 1;
    background-color: purple;
  }
  75% {
    transform: translateX(0);
    opacity: 0;
    background-color: green;
  }
  100% {
    transform: translateX(50vw);
    opacity: 0;
    background-color: purple;
  }
}
```

カスケードを使用し、1 つのセレクターブロック内で値をグループ化し、必要に応じて上書きできます。以下のコードは前回と同じですが、CSS の行数が少なくなっています。

```css
@keyframes uglyAnimation {
  0%,
  50%,
  75%,
  100% {
    transform: translateX(0);
    opacity: 0;
    background-color: purple;
  }
  50% {
    opacity: 1;
  }
  75% {
    background-color: green;
  }
  100% {
    transform: translateX(50vw);
  }
}
```

順序は重要です！カスケードを無視できません。上記の順序を誤って変更すると、移行効果が失われます。次の設定では、要素が紫色で完全に不透明になり、アニメーション適用中の全期間においてすべての変化がリセットされます。プロパティ値は適用され、静的なまま維持されます。これは、最後の宣言が前回の一連のキーフレームセレクターブロックで定義された宣言を上書きするためです。

```css
@keyframes makeItPurpleOnly {
  0% {
    background-color: yellow;
  }
  50% {
    opacity: 0;
  }
  75% {
    background-color: green;
  }
  100% {
    transform: translateX(50vw);
  }
  0%,
  50%,
  75%,
  100% {
    transform: translateX(0);
    opacity: 1;
    background-color: purple;
  }
}
```

### 名前付きタイムラインの範囲

キーフレームセレクターは、もともと [CSS アニメーションモジュール](/ja/docs/Web/CSS/Guides/Animations)で定義されていましたが、[CSS スクロール駆動アニメーション](/ja/docs/Web/CSS/Guides/Scroll-driven_animations)モジュールでは拡張され、ビュー進行タイムラインの範囲情報を `@keyframes` アニメーション定義に直接記載することができるようになりました。セレクターで {{cssxref("timeline-range-name")}} を `<percentage>` 要素の前に指定することで、キーフレームを名前付きタイムライン範囲内の特定の進行点につけることができます。`<timeline-range-name>` は選択された事前定義済み名前付きタイムライン範囲を表し、その後に続く `<percentage>` は当該名前付きタイムライン範囲の開始点から終了点までのパーセント値を表します。

```css
@keyframes in-and-out {
  entry 0% {
    opacity: 0;
    transform: translateX(100%);
  }
  entry 100% {
    opacity: 1;
    transform: translateX(0);
  }
  exit 0% {
    opacity: 1;
    transform: translateX(0);
  }
  exit 100% {
    opacity: 0;
    transform: translateX(-100%);
  }
}
```

要素のアニメーションタイムラインが名前付きビュータイムライン範囲を持っていない場合、その名前付きタイムライン範囲上の点に設定されたキーフレームは無視されます。これらの設定点はアニメーションの有効範囲外にあることがあります。この場合、自動生成される `from` (`0%`) および `to` (`100%`) キーフレームは、それぞれ `0%` 以前または `100%` 以後にキーフレームを保有していないプロパティに対してのみ生成されます。

## 例

### 基本的な使い方

この例では、これらのキーフレームセレクター型を使用してキーフレームアニメーションを作成することで、キーワードとパーセント値を使用する方法を示しています。

#### HTML

アニメーションを適用する要素を記載します。

```html
<div>I am animated</div>
```

#### CSS

ボックスに基本的なスタイルを設定します。

```css
div {
  background-color: rebeccapurple;
  color: white;
  width: min-content;
  padding: 10px;
  font: 2rem sans-serif;
}
```

{{cssxref("@keyframes")}} アニメーションを作成し、`from` および `to` キーワードと中間パーセント値にスタイルを適用しています。{{cssxref("opacity")}} プロパティと {{cssxref("transform")}} プロパティをアニメーションさせます。

```css
@keyframes slide-and-fade {
  from {
    transform: translateX(0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  to {
    transform: translateX(50vw);
    opacity: 0;
  }
}
```

{{cssxref("animation")}} 一括指定プロパティを使用して、要素にアニメーションを適用します。

```css
div {
  animation: slide-and-fade 4s ease-in infinite;
}
```

#### 結果

{{EmbedLiveSample("Basic usage","100%","200")}}

### セレクターリスト

前回の例と同じ HTML と基本的なスタイルを設定し、この例ではカンマ区切りでセレクター群を用いてキーフレームをグループ化し、アニメーション内の複数の時点で同じスタイルを適用する方法を示します。

```html hidden
<div>I am animated</div>
```

#### CSS

要素のサイズを変更する `pulse` アニメーションを作成します。

```css
div {
  animation: pulse 4s linear infinite;
}

@keyframes pulse {
  0%,
  75% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  25%,
  100% {
    transform: scale(0.8);
  }
}
```

```css hidden
div {
  background-color: rebeccapurple;
  color: white;
  width: min-content;
  padding: 10px;
  font: 2rem sans-serif;
}
```

#### 結果

{{EmbedLiveSample("Selector lists and initial values","100%","125")}}

複数のキーフレームセレクターをカンマ区切りで指定したセレクターリストを使用することで、アニメーションは `25%` キーフレームから `75%` キーフレームに到達するまで「一時停止」します。

### `to` と `from` の省略

この例は、`@keyframes` アニメーション定義に `to` または `from` キーフレームセレクターが含まれない場合、アニメーション対象のプロパティが元のプロパティ値から開始し、元のプロパティ値へ戻ってアニメーションすることを示しています。

#### HTML

いくつか要素を配置してあります。これらすべてをアニメーション処理します。

```html
<div>I am animated</div>
<div>I am animated</div>
<div>I am animated</div>
```

#### CSS

要素に基本スタイルを提供し、それぞれの要素に異なる {{cssxref("outline-width")}} と {{cssxref("background-color")}} を設定します。これら2つのプロパティをアニメーションさせます。

```css
div {
  background-color: magenta;
  outline: 10px dashed black;
  color: white;
  width: min-content;
  padding: 10px;
  font: 2rem sans-serif;
  margin: 35px auto;

  animation: changes 5s linear infinite;
}
div:first-of-type {
  background-color: blue;
  outline-width: 0;
}
div:last-of-type {
  background-color: green;
  outline-width: 20px;
}
```

要素の `background-color` と `outline-width` を、キーフレーム `30%` と `40%` で設定するアニメーションを作成します。

```css
@keyframes changes {
  30%, 40% {
    background-color: black;
    outline-width: 15px;
}
```

#### 結果

{{EmbedLiveSample("Omitting to and from","100%","420")}}

`background-color` プロパティと `outline-width` プロパティは、`30%` と `40%` のキーフレームで設定されています。その結果、要素の `background-color` の値は `green`、`magenta`、`blue` から `black` へアニメーションし、`outline-width` の値は `0px`、`10px`、`20px` から `15px` へアニメーションします。これらの状態はアニメーションの全体時間の 10 分の 1（`30%` から `40%` の間）維持されます。`40%` の後、これらのプロパティは再び初期値へ戻ります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("@keyframes")}}
- {{cssxref("animation")}}
- {{cssxref("animation-range")}}
- [CSS アニメーションの使用](/ja/docs/Web/CSS/Guides/Animations/Using)
- [CSS アニメーション](/ja/docs/Web/CSS/Guides/Animations)モジュール
- [CSS スクロール駆動アニメーション](/ja/docs/Web/CSS/Guides/Scroll-driven_animations)
