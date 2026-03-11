---
title: オーバーフロー時の代替オプションと条件付き非表示
short-title: オーバーフロー時の処理
slug: Web/CSS/Guides/Anchor_positioning/Try_options_hiding
l10n:
  sourceCommit: 81f8fcd666952c1782653a3675347c392cc997ca
---

[CSS アンカー位置指定](/ja/docs/Web/CSS/Guides/Anchor_positioning)を使用する際の重要な考慮点は、アンカーが配置されている場所に関わらず、可能な限りアンカー位置指定要素をユーザーが常に操作しやすい位置に表示させることです。例えば、ページをスクロールすると、アンカーとその関連付けられた位置指定要素はビューポートの端に向かって移動します。位置指定要素がビューポートからオーバーフローを始めた場合、その位置を変更して再び画面上に表示させる必要があります。例えば、アンカーの反対側に位置指定要素を配置し直すといった対応が考えられます。

または、状況によっては、はみ出した位置指定要素をできれば単に非表示にする方が望ましい場合もあります。例えば、それらのアンカーが画面外にある場合、そのコンテンツは意味をなさない可能性があります。

このガイドでは、CSS のアンカー位置指定メカニズムを使用してこれらの課題を管理する方法 —— **位置指定の代替オプション**と**条件付き非表示** —— を説明します。位置指定の代替オプションは、位置指定要素がオーバーフローし始めた際にブラウザーが試行する代替位置を指定し、画面上に表示し続けることを可能にします。条件付き非表示では、アンカーまたは位置指定要素を非表示にする条件を指定できます。

> [!NOTE]
> CSS アンカー位置指定の基本的な仕組みについては、[CSS アンカー位置指定の使用方法](/ja/docs/Web/CSS/Guides/Anchor_positioning/Using)を参照してください。

## 機能概要

UI 要素のツールチップが右上に固定されている場合、ユーザーがコンテンツをスクロールしてその UI 機能がビューポートの右上隅に移動すると、その UI 機能のツールチップは画面外にスクロールしてしまいます。CSS アンカー位置指定はこのような問題を解決します。モジュールの {{cssxref("position-try-fallbacks")}} プロパティは、位置指定要素がオーバーフローするのを防ぐため、ブラウザーが試行する代替位置指定の代替オプションを 1 つ以上指定します。

位置指定の代替オプションは次のように指定できます。

- [定義済み代替オプション](#定義済み代替オプション)
- [`position-area` 値](#試行代替オプション_position-area_の使用)
- [カスタムオプション](#カスタム代替オプション)（{{cssxref("@position-try")}} アットルールを使用して定義）

さらに、{{cssxref("position-try-order")}} プロパティを使用すると、利用できる配置オプションを要素の初期位置指定よりも優先して設定するさまざまなオプションを指定できます。例えば、初期表示時に要素をより多くの利用可能な高さまたは幅を持つ領域に配置したい場合などに活用できます。

一括指定プロパティ {{cssxref("position-try")}} を使用することにより、`position-try-order` と `position-try-fallbacks` の値を単一の宣言で指定できます。

アンカー位置指定されたコンテンツは、アンカーが画面外にある場合、またはその逆の場合に意味をなさないことがあります。例えば、クイズの質問をアンカーに含み、関連付けられた配置済み要素に回答を配置し、両方を同時に表示するか、あるいはまったく表示しないようにしたい場合があります。これは条件付き非表示機能で実現でき、{{cssxref("position-visibility")}} プロパティで管理されます。このプロパティは、オーバーフローする要素が非表示になる条件を定義する様々な値を取ります。

## 定義済み代替オプション

`position-try-fallbacks` プロパティの事前定義された代替値（仕様書では [`<try-tactic>`](/ja/docs/Web/CSS/Reference/Properties/position-try-fallbacks#try-tactic) として定義）は、アンカー位置指定要素がオーバーフローする可能性がある場合、その要素の位置を1軸または両軸で「反転」させます。

要素は、ブロック軸 (`flip-block`)、インライン軸 (`flip-inline`)、またはアンカーの角から中心を経て対角の角へ引かれた仮想線 (`flip-start`) に沿って反転させることができます。これら 3 つの値は要素を反転させ、まず反対側の位置に、`flip-start` では隣接する側の位置に鏡像を映し出します。例えば、アンカーから `10px` 上に位置指定された要素がアンカー上端でオーバーフローが始まった場合、`flip-block` 値は位置指定要素をアンカーから 10px 下に反転させます。

この例では、2 つの {{htmlelement("div")}} 要素を記載します。まず最初の要素はアンカー要素となり、2 つ目の要素はアンカー要素を基準に相対配置されます。

```html
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>これは情報ボックスです。</p>
</div>
```

`<body>` 要素をビューポートより大きくスタイル設定し、アンカー要素と位置指定要素をビューポート内で水平方向および垂直方向にスクロール可能にします。

```css
body {
  width: 1500px;
  height: 500px;
}
```

説明のため、アンカーを絶対位置指定し、初期の `<body>` のレンダリングの中央付近に現れるようにします。

```css hidden
.anchor {
  font-size: 1.8rem;
  color: white;
  text-shadow: 1px 1px 1px black;
  background-color: hsl(240 100% 75%);
  width: fit-content;
  border-radius: 10px;
  border: 1px solid black;
  padding: 3px;
}

.anchor {
  anchor-name: --my-anchor;
  position: absolute;
  top: 100px;
  left: 45%;
}
```

アンカー位置指定された要素には固定位置指定が与えられ、`position-area` を使用してアンカーの左上角に固定されます。`position-try-fallbacks: flip-block, flip-inline;` が指定され、位置指定要素がビューポートの端に近づいた際にオーバーフローを防ぐための代替移動オプションが提供されます。

```css hidden
.infobox {
  color: darkblue;
  background-color: azure;
  border: 1px solid #dddddd;
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
}
```

```css
.infobox {
  position: fixed;
  position-anchor: --my-anchor;
  position-area: top left;
  position-try-fallbacks: flip-block, flip-inline;
}
```

> [!NOTE]
> 複数の位置指定の代替オプションが指定された場合、カンマで区切られ、指定された順序で試行されます。

デモをスクロールして、アンカーが端に近づき始めるようにしてみてください。

{{ EmbedLiveSample("Using predefined fallback options", "100%", "250") }}

- アンカーをビューポートの上部に移動します。位置指定要素は、オーバーフローを避けるためアンカーの左下に反転します。
- アンカーをビューポートの左側に移動します。位置指定要素は、オーバーフローを避けるためアンカーの右上に反転します。

アンカーをビューポートの左上角に移動すると、問題が発生します。位置指定要素がブロック方向とインライン方向にオーバーフローし始めると、デフォルトの左上位置に戻り、両方向にオーバーフローします。これは望ましい動作ではありません。

これは、ブラウザーに `flip-block` または `flip-inline` の配置オプションしか与えなかったためです。両方を同時に試す選択肢を与えませんでした。ブラウザーは代替オプションを試行し、位置指定要素がビューポートまたは包含ブロック内に完全に描画されるものを探します。見つからない場合、位置指定要素は元の定義された描画位置で、位置指定の代替オプションを適用せずに描画されます。

次の節では、この課題を修正する方法を説明します。

## 複数の値を 1 つのオプションに統合

複数の[定義済み代替オプション](#定義済み代替オプション)または[カスタム代替オプション](#カスタム代替オプション)の名前を、カンマ区切りの `position-try-fallbacks` リスト内で、空白区切りによる単一の代替オプション値として指定できます。これらの代替オプションを適用する際、ブラウザーは個々の効果を組み合わせて単一の統合された代替オプションとして処理します。

前回のデモで見つかった問題を修正するため、複合試行代替オプションを使用しましょう。このデモの HTML と CSS は、情報ボックスの位置指定スタイルを除き同じです。この場合、3 つ目となる位置指定試行代替オプション `flip-block flip-inline` が指定されます。

```html hidden
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>これは情報ボックスです。</p>
</div>
```

```css hidden
body {
  width: 1500px;
  height: 500px;
}

.anchor {
  font-size: 1.8rem;
  color: white;
  text-shadow: 1px 1px 1px black;
  background-color: hsl(240 100% 75%);
  width: fit-content;
  border-radius: 10px;
  border: 1px solid black;
  padding: 3px;
}

.anchor {
  anchor-name: --my-anchor;
  position: absolute;
  top: 100px;
  left: 45%;
}

.infobox {
  color: darkblue;
  background-color: azure;
  border: 1px solid #dddddd;
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
}
```

```css-nolint
.infobox {
  position: fixed;
  position-anchor: --my-anchor;
  position-area: top left;
  position-try-fallbacks:
    flip-block,
    flip-inline,
    flip-block flip-inline;
}
```

これは、ブラウザーがまず `flip-block` を試行し、次に `flip-inline` を試行してオーバーフローを避けることを意味します。これらの代替オプションが両方失敗した場合、ブラウザーは両方を組み合わせ、要素の位置をブロック方向およびインライン方向で同時に反転させようと試みます。これで、アンカーをビューポートの上端と左端に向かってスクロールすると、位置指定要素が右下に反転します。

{{ EmbedLiveSample("Combining multiple values into one option", "100%", "250") }}

## 試行代替オプション `position-area` の使用

事前定義された `<try-tactic>` の試行代替オプションは便利ですが、軸間で位置指定された要素の位置を反転させることしかできないため制限があります。例えば、アンカーの左上に配置されたアンカー位置指定要素が、オーバーフローを始める場合、アンカーの真下に位置を変更したい場合はどうすればよいでしょうか？

これを実現するには、{{cssxref("position-area")}} の値を位置指定の試行代替オプションとして使用し、`position-try-fallbacks` リストに含めます。これにより、その位置領域に基づく試行代替オプションが自動的に生成されます。実質的に、この `position-area` プロパティ値のみを含む [カスタム位置指定オプション](#カスタム代替オプション)を作成するショートカットとなります。

以下の例は、`position-area` による位置指定の試行代替オプションの使用例を示しています。情報ボックスの位置指定を除き、同じ HTML と CSS を使用しています。この場合、位置指定の代替オプションとして`position-area` 値（`top`、`top-right`、`right`、`bottom-right`、`bottom`、`bottom-left`、`left`）を使用します。これにより、アンカーがビューポートのどの端に接近しても、位置指定要素は合理的に位置決めされます。この詳細な手法は、事前定義値の手法よりも粒度が細かく柔軟性があります。

```html hidden
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>これは情報ボックスです。</p>
</div>
```

```css hidden
body {
  width: 1500px;
  height: 500px;
}

.anchor {
  font-size: 1.8rem;
  color: white;
  text-shadow: 1px 1px 1px black;
  background-color: hsl(240 100% 75%);
  width: fit-content;
  border-radius: 10px;
  border: 1px solid black;
  padding: 3px;
}

.anchor {
  anchor-name: --my-anchor;
  position: absolute;
  top: 100px;
  left: 45%;
}

.infobox {
  color: darkblue;
  background-color: azure;
  border: 1px solid #dddddd;
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
}
```

```css-nolint
.infobox {
  position: fixed;
  position-anchor: --my-anchor;
  position-area: top left;
  position-try-fallbacks:
    top, top right, right,
    bottom right, bottom,
    bottom left, left;
}
```

> [!NOTE]
> `position-area`を、position-try 代替リスト内の空白区切りで結合された位置オプションに追加することはできません。

ページをスクロールさせ、アンカーがビューポートの端に近づいた際、これらの位置指定の代替オプションがどのような効果をもたらすか確認してください。

{{ EmbedLiveSample("Using `position-area` try fallback options", "100%", "250") }}

## カスタム代替オプション

上記の仕組みでは利用できないカスタム位置代替オプションを使用するには、{{cssxref("@position-try")}} アットルールを使用して独自のものを作成できます。構文は次のとおりです：

```plain
@position-try --try-fallback-name {
  descriptor-list
}
```

`--try-fallback-name` は、位置の試行代替オプションに対して開発者が定義する名前です。この名前は、{{cssxref("position-try-fallbacks")}} プロパティ値内の、カンマ区切りの試行代替オプションリスト内で指定できます。複数の `@position-try` ルールが同じ名前を持つ場合、文書内の順序で最後にあるものが他のものを上書きします。試行代替オプションとアンカー名またはカスタムプロパティ名に同じ名前を使用することは避けてください。アットルールが無効になるわけではありませんが、CSS の追跡が大変困難になります。

`descriptor-list` は、個々のカスタム試行代替オプションのプロパティ値を定義します。これには、位置指定要素の配置方法やサイズ、マージンなどが記載されます。許可されるプロパティ記述子の限定リストは以下の通りです。

- {{cssxref("position-area")}}
- [インセットプロパティ](/ja/docs/Glossary/Inset_properties)
- マージンプロパティ（{{cssxref("margin-left")}}、{{cssxref("margin-block-start")}}、など）
- [自己配置](/ja/docs/Web/CSS/Guides/Anchor_positioning/Using#centering_on_the_anchor_using_anchor-center)プロパティ
- サイズ指定プロパティ（{{cssxref("width")}}、{{cssxref("block-size")}}、など）
- {{cssxref("position-anchor")}}

アットルールに記載した値は、名前付きカスタム試行代替オプションが適用された場合に位置指定要素に適用されます。位置指定要素に既にプロパティが設定されていた場合、それらのプロパティ値は記述子値によって上書きされます。ユーザーがスクロールして別の試行代替オプションが適用されるか、試行代替オプションが適用されなくなった場合、前回適用された試行代替オプションの値は解除されます。

この例では、いくつかのカスタム試行代替オプションを設定して使用します。ベースとなる HTML と CSS コードは、前回の例と同じものを使用します。

まず、`@position-try` を使用して 4 つのカスタム試行代替オプションを定義します。

```html hidden
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>これは情報ボックスです。</p>
</div>
```

```css hidden
body {
  width: 1500px;
  height: 500px;
}

.anchor {
  font-size: 1.8rem;
  color: white;
  text-shadow: 1px 1px 1px black;
  background-color: hsl(240 100% 75%);
  width: fit-content;
  border-radius: 10px;
  border: 1px solid black;
  padding: 3px;
}

.anchor {
  anchor-name: --my-anchor;
  position: absolute;
  top: 100px;
  left: 45%;
}

.infobox {
  color: darkblue;
  background-color: azure;
  border: 1px solid #dddddd;
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
}
```

```css
@position-try --custom-left {
  position-area: left;
  width: 100px;
  margin-right: 10px;
}

@position-try --custom-bottom {
  position-area: bottom;
  margin-top: 10px;
}

@position-try --custom-right {
  position-area: right;
  width: 100px;
  margin-left: 10px;
}

@position-try --custom-bottom-right {
  position-area: bottom right;
  margin: 10px 0 0 10px;
}
```

カスタム試行代替オプションを作成したら、その名前を参照することで位置リストに含めることができます。

```css
.infobox {
  position: fixed;
  position-anchor: --my-anchor;
  position-area: top;
  width: 200px;
  margin-bottom: 10px;
  position-try-fallbacks:
    --custom-left, --custom-bottom, --custom-right, --custom-bottom-right;
}
```

デフォルトの位置は `position-area: top` で定義されていることに注意してください。情報ボックスがどの方向にもページからはみ出さない場合、情報ボックスはアンカーの上に配置され、`position-try-fallbacks` プロパティで設定された位置指定の代替オプションは無視されます。また、情報ボックスには固定幅と下マージンが設定されている点にも注意してください。これらの値は、異なる位置指定の代替オプションが適用されるにつれて変化します。

情報ボックスがはみ出し始めた場合、ブラウザーは`position-try-fallbacks`プロパティに掲載されている位置オプションを試行します。

- ブラウザーはまず `--custom-left` 代替位置を試行します。これにより情報ボックスがアンカーの左側に移動され、マージンが調整されるほか、情報ボックスの幅も変更されます。
- 次に、ブラウザーは `--custom-bottom` 位置を試行します。これにより情報ボックスはアンカー要素の下部に移動し、適切なマージンが設定されます。`width` 記述子が記載されていないため、情報ボックスは `width` プロパティで設定されたデフォルトの幅 `200px` に戻ります。
- 次にブラウザーは `--custom-right` 位置を試行します。これは `--custom-left` 位置とほぼ同様に動作し、同じ `width` 記述子値が適用されますが、`position-area` と `margin` の値が反転され、情報ボックスが適切に右側に配置されます。
- 他の代替手段のいずれも位置指定要素のオーバーフローを防止できなかった場合、ブラウザーは最終手段として `--custom-bottom-right` 位置を試行します。これは他の代替オプションとほぼ同様の仕組みですが、位置指定要素をアンカーの右下に配置します。

代替手段のいずれも位置指定要素のオーバーフローを停止できなかった場合、位置は初期値である `position-area: top;` に復帰します。

> [!NOTE]
> 位置指定の代替オプションが適用されると、その値は位置指定要素に設定されたデフォルト値を上書きします。例えば、位置指定要素に設定されたデフォルトの `width` は `200px` ですが、`--custom-right` 位置指定の代替オプションが適用されると、その幅は `100px` に設定されます。

ページをスクロールして、アンカーがビューポートの端に接近した際、これらの位置指定の代替オプションの効果を調べてください。

{{ EmbedLiveSample("Custom fallback options", "100%", "250") }}

## `position-try-order` の使用

{{cssxref("position-try-order")}} プロパティは、位置指定の試行機能の他の部分とは焦点が若干異なり、位置指定要素がまず表示される際に位置指定の試行代替オプションを使用します。これは、要素がオーバーフローする過程において使用するのではなく、まず表示される時点での処理です。

このプロパティは、位置指定要素を最初に表示する際に、その包含ブロックに最大幅または最大高さを与える位置指定の試行代替オプションを使用することを指定できます。これは `most-height`、`most-width`、`most-block-size`、`most-inline-size` の値を設定することで実現されます。また、`normal` の値を使用することで、以前に設定された `position-try-order` 値の効果を除去することもできます。

要素に代入された初期位置指定よりも広い幅／高さを提供する位置指定の代替オプションが利用できない場合、`position-try-order` は効果を持ちません。

このプロパティの効果を示すデモを見てみましょう。HTML は前回の例と同じですが、`position-try-order` の異なる値を選択してその効果を確認できるように、ラジオボタンを含む `<form>` を追加しています。

```html hidden
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>これは情報ボックスです。</p>
</div>

<form>
  <fieldset>
    <legend>試行順序を選択</legend>
    <div>
      <label for="radio-normal">normal</label>
      <input
        type="radio"
        id="radio-normal"
        name="position-try-order"
        value="normal"
        checked />
    </div>
    <div>
      <label for="radio-most-height">most-height</label>
      <input
        type="radio"
        id="radio-most-height"
        name="position-try-order"
        value="most-height" />
    </div>
  </fieldset>
</form>
```

カスタム代替オプション `--custom-bottom` を記載しました。これは要素をアンカーの下に配置し、マージンを追加します。

```css hidden
.anchor {
  font-size: 1.8rem;
  color: white;
  text-shadow: 1px 1px 1px black;
  background-color: hsl(240 100% 75%);
  width: fit-content;
  border-radius: 10px;
  border: 1px solid black;
  padding: 3px;
}

.anchor {
  anchor-name: --my-anchor;
  position: absolute;
  top: 100px;
  left: 45%;
}

.infobox {
  color: darkblue;
  background-color: azure;
  border: 1px solid #dddddd;
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
  text-align: center;
}

form {
  position: fixed;
  bottom: 2px;
  right: 2px;
}
```

```css
@position-try --custom-bottom {
  top: anchor(bottom);
  bottom: unset;
  margin-top: 10px;
}
```

最初に情報ボックスをアンカーの上部に位置指定し、その後、カスタム試行代替案を適用します。

```css
.infobox {
  position: fixed;
  position-anchor: --my-anchor;
  bottom: anchor(top);
  margin-bottom: 10px;
  justify-self: anchor-center;
  position-try-fallbacks: --custom-bottom;
}
```

最後に、ラジオボタンに [`change`](/ja/docs/Web/API/HTMLElement/change_event) イベントハンドラーを設定する JavaScript を記述します。ラジオボタンが選択されると、その値が情報ボックスの `position-try-order` プロパティに適用されるようにします。

```js
const infobox = document.querySelector(".infobox");
const radios = document.querySelectorAll('[name="position-try-order"]');

for (const radio of radios) {
  radio.addEventListener("change", setTryOrder);
}

function setTryOrder(e) {
  const tryOrder = e.target.value;
  infobox.style.positionTryOrder = tryOrder;
}
```

`most-height` 順序オプションを選択してみてください。これにより `--custom-bottom` 位置代替オプションが適用され、要素がアンカーの下に配置されます。これは、アンカーの下にある空間が上にある空間よりも大きいためです。

{{ EmbedLiveSample("Using `position-try-order`", "100%", "300") }}

## 条件付きでアンカー位置指定要素を非表示にする

状況によっては、アンカー位置指定された要素を非表示にしたい場合があります。例えば、アンカー要素がビューポートの端に近すぎるためにクリップされる場合、関連付けられた要素全体を非表示にしたいかもしれません。{{cssxref("position-visibility")}} プロパティを使用すると、位置指定要素が非表示になる条件を指定することができます。

デフォルトで、位置指定要素は常に表示されます。`no-overflow` 値は、位置指定要素が親要素またはビューポートからはみ出し始めた場合に、**強く非表示**にします。

一方、`anchors-visible` の値は、関連付けられたアンカーが（親要素またはビューポートからオーバーフローするか、他の要素に覆われることで）完全に隠れている場合、位置指定要素を強く非表示にします。アンカーの一部がまだ表示されている場合、位置指定要素は表示されます。

強く非表示にされた要素は、実際の {{cssxref("visibility")}} の値にかかわらず、自身とその子孫要素の `visibility` 値が `hidden` に設定されているかのように振る舞います。

このプロパティの動作を見てみましょう。

この例では、前回の例と同じ HTML と CSS を使用し、情報ボックスをアンカー要素の下端に固定しています。情報ボックスには `position-visibility: no-overflow;` が指定されており、ビューポートからはみ出し始める位置までスクロールアップされると完全に非表示になります。

```html hidden
<p>
  Malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Vel elit
  scelerisque mauris pellentesque pulvinar pellentesque habitant morbi
  tristique.
</p>

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua. Dui nunc mattis enim ut tellus
  elementum sagittis vitae et.
</p>

<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>これは情報ボックスです。</p>
</div>

<p>
  Nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. In arcu
  cursus euismod quis viverra nibh cras pulvinar. Vulputate ut pharetra sit amet
  aliquam.
</p>

<p>
  Malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Vel elit
  scelerisque mauris pellentesque pulvinar pellentesque habitant morbi
  tristique. Porta lorem mollis aliquam ut porttitor. Turpis cursus in hac
  habitasse platea dictumst quisque. Dolor sit amet consectetur adipiscing elit.
  Ornare lectus sit amet est placerat. Nulla aliquet porttitor lacus luctus
  accumsan.
</p>
```

```css hidden
.anchor {
  font-size: 1.8rem;
  color: white;
  text-shadow: 1px 1px 1px black;
  background-color: hsl(240 100% 75%);
  width: fit-content;
  border-radius: 10px;
  border: 1px solid black;
  padding: 3px;
}

.anchor {
  anchor-name: --my-anchor;
}

body {
  width: 50%;
  margin: 0 auto;
}
```

```css hidden
.infobox {
  color: darkblue;
  background-color: azure;
  border: 1px solid #dddddd;
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
}
```

```css
.infobox {
  position: fixed;
  position-anchor: --my-anchor;
  margin-bottom: 5px;
  position-area: top span-all;
  position-visibility: no-overflow;
}
```

ページを下にスクロールし、位置指定要素がビューポートの上端に達すると非表示になる様子を確認してください。

{{ EmbedLiveSample("Conditional hiding using `position-visibility`", "100%", "250") }}

## 関連情報

- [CSS アンカー位置指定](/ja/docs/Web/CSS/Guides/Anchor_positioning)モジュール
- [CSS アンカー位置指定の使用](/ja/docs/Web/CSS/Guides/Anchor_positioning/Using)
- [学習: CSS 位置指定](/ja/docs/Learn_web_development/Core/CSS_layout/Positioning)
- [CSS 論理的プロパティと値](/ja/docs/Web/CSS/Guides/Logical_properties_and_values)モジュール
- [学習: CSS におけるアイテムのサイズ設定](/ja/docs/Learn_web_development/Core/Styling_basics/Sizing)
