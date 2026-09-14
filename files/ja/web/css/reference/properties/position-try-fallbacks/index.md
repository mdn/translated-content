---
title: position-try-fallbacks
slug: Web/CSS/Reference/Properties/position-try-fallbacks
l10n:
  sourceCommit: 3e0ba995376cace7f08f0771635f86f0fb1753b3
---

**`position-try-fallbacks`** は [CSS](/ja/docs/Web/CSS) のプロパティで、アンカー位置指定された要素が、関連付けられたアンカー要素に対して配置される際の、1 つ以上の**位置指定代替オプション**のリストを指定することができます。要素がインセット修正済み包含ブロックからオーバーフローする可能性がある場合、ブラウザーは指定された順序でこれらの異なる代替配置位置を試行し、要素がコンテナーまたはビューポートからオーバーフローしなくなる値を探すまで配置を試みます。

> [!NOTE]
> {{cssxref("position-try")}} 一括指定プロパティを使用すると、{{cssxref("position-try-order")}} と `position-try-fallbacks` の値を単一の宣言で指定することができます。

> [!NOTE]
> このプロパティは当初、Chromium ブラウザーで `position-try-options` という名前で対応しており、同じプロパティ値を指定できました。`position-try-fallbacks` が対応されるまでは、代わりに {{cssxref("position-try")}} の一括指定を使用してください。

## 構文

```css
/* デフォルト値: 試行代替オプションなし */
position-try-fallbacks: none;

/* 単一の試行オプション */
position-try-fallbacks: flip-block;
position-try-fallbacks: top;
position-try-fallbacks: --custom-try-option;

/* 複数値の組み合わせのオプション */
position-try-fallbacks: flip-block flip-inline;

/* 複数値 */
position-try-fallbacks: flip-block, flip-inline;
position-try-fallbacks: top, right, bottom;
position-try-fallbacks: --custom-try-option1, --custom-try-option2;
position-try-fallbacks:
  flip-block,
  flip-inline,
  flip-block flip-inline;
position-try-fallbacks:
  flip-block,
  --custom-try-option,
  --custom-try-option flip-inline,
  right;

/* グローバル値 */
position-try-fallbacks: inherit;
position-try-fallbacks: initial;
position-try-fallbacks: revert;
position-try-fallbacks: revert-layer;
position-try-fallbacks: unset;
```

`position-try-fallbacks` プロパティは、キーワード値 `none` として、またはカンマ区切りで指定された 1 つ以上の独自の位置オプション名、`<try-tactic>`、あるいは `position-area` 値からなるカンマ区切りリストとして指定できます。

### 値

- `none`
  - : デフォルト値です。位置試行代替オプションは設定されません。
- `<try-tactic>`
  - : 事前定義された代替オプションは、位置指定要素の計算済み位置を取得し、アンカーの具体的な軸に沿って変換することで要素を移動させます。この際、マージンのオフセットも同様に反映されます。指定可能な値は以下の通りです。
    - `flip-block`
      - : 要素の位置をブロック軸に沿って反転させます。
    - `flip-inline`
      - : 要素の位置をインライン軸に沿って反転させます。
    - `flip-start`
      - : インライン軸とブロック軸の両方の値を反転させ、`start` プロパティ同士と `end` プロパティ同士を入れ替えます。
- {{cssxref("position-area")}} 値
  - : 暗黙の 3x3 [位置領域グリッド](/ja/docs/Web/CSS/Reference/Properties/position-area#description)の 1 つ以上のタイル上に位置指定要素を、指定された {{cssxref("position-area_value","&lt;position-area>")}} 値に基づいて配置することで、関連付けられたアンカー要素の端に対する相対位置を決定します。この効果は、{{cssxref("position-area")}} 記述子のみを含む独自の {{cssxref("@position-try")}} 代替オプションと同じです。
- {{cssxref("dashed-ident")}}
  - : 代替オプションリストにカスタムオプション {{cssxref("@position-try")}} を追加します。このオプションの識別名は指定された `dashed-ident` と一致します。その名前を持つカスタム位置オプションが存在しない場合、このオプションは無視されます。

> [!NOTE]
> 複数のオプションを指定できます。オプションはカンマで区切ります。

## 解説

アンカー位置指定された要素は、可能な限り、アンカーの位置に関わらず、常にユーザーが操作しやすい場所に表示すべきです。配置された要素がビューポートからはみ出さないようにするには、アンカーが親要素やビューポートの端に近づいた際に、その位置を変更する必要が生じることがよくあります。

これは、`position-try-fallbacks` プロパティに 1 つ以上の位置指定の代替オプションが指定されていることで実現されます。位置指定要素の初期位置がオーバーフローする場合、ブラウザーはそれぞれの代替位置オプションを試行します。要素が包含ブロックからオーバーフローしない最初の代替オプションが適用されます。デフォルトで、ブラウザーはリストに掲載されている順序でこれらを試行し、位置指定要素のオーバーフローが発生しなくなる最初のオプションを適用します。

位置指定要素が完全に画面内に収まるオプションが見つからない場合、ブラウザーは代替オプションが適用される前のデフォルト位置で要素を表示します。

> [!NOTE]
> 場合によっては、位置指定要素が画面からはみ出した部分を単に非表示にしたいこともあるでしょう。これは {{cssxref("position-visibility")}} プロパティを使用して実現できます。ただし、ほとんどの場合、それらを画面に表示したまま使用可能にしておく方が望ましいでしょう。

アンカー機能の詳細や位置指定の代替手法については、[CSS アンカー位置指定](/ja/docs/Web/CSS/Guides/Anchor_positioning)モジュールおよび[オーバーフロー時の代替オプションと条件付き非表示](/ja/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding)ガイドを参照してください。

### 定義済み &lt;try-tactic&gt; 値

仕様書では `<try-tactic>` と呼ばれる事前定義値は、位置指定要素の計算済み位置をとり、アンカーの具体的な軸に沿って変換することで要素を移動させます。事前定義値は以下の通りです。

- `flip-block`
  - : 要素の位置をブロック軸に沿って反転させ、アンカーから同じ距離にあるが反対側に現れるようにします。言い換えれば、要素をアンカーの中心を通るインライン軸に対して線対称の位置に配置します。例えば、位置指定要素がアンカーの上端でオーバーフローし始めた場合、この値は位置を底部に反転させます。
- `flip-inline`
  - : 要素の位置をインライン軸に沿って反転させ、アンカーから同じ距離にあるが反対側に現れるようにします。言い換えれば、要素をアンカーの中心を通るブロック軸に対して線対称の位置に配置します。例えば、位置指定要素がアンカーの左側でオーバーフローし始めた場合、この値は位置を右側に反転させます。
- `flip-start`
  - : 要素の位置を、アンカーの中心を通る対角線上に引かれた軸で反転させます。この軸は、ブロック軸の先頭とインライン軸の先頭が交わる点、およびブロック軸の末尾とインライン軸の末尾が交わる点を通ります。例えば、位置指定要素がアンカーの左側でオーバーフローし始めた場合、この値は位置指定要素を上に反転させます。

### 組み合わせオプション

単一の位置指定試行代替オプションには、複数の `<try-tactic>` または `dashed-ident` オプション、あるいは両者を空白区切りで宣言した組み合わせを含めることができます。

- 複数の事前定義された `<try-tactic>` オプションがある場合、それらの変換は組み合わされる。
- 事前定義された `<try-tactic>` と `<dashed-ident>` で名付けられた `@position-try` オプションを宣言する場合、カスタム位置オプションがまず適用され、その後 `<try-tactic>` 変換が適用されます。

`position-area` はこのように組み合わせることはできません。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的な使い方

この例は、いくつかの事前定義された `<try-tactic>` 代替オプションの基本的な使用法を示しています。

#### HTML

この HTML には、アンカー要素とアンカー位置指定要素となる 2 つの {{htmlelement("div")}} 要素が含まれています。

```html
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>これは情報ボックスです。</p>
</div>
```

#### CSS

`<body>`要素をとても大きくスタイル設定し、水平方向と垂直方向の両方のスクロールをすることができるようにします。

アンカーには {{cssxref("anchor-name")}} が指定され、大きなマージンが設定されることで、 `<body>` の可視領域の中央付近に配置されます。

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
```

```css
body {
  width: 1500px;
  height: 500px;
}

.anchor {
  anchor-name: --my-anchor;
  margin: 100px 350px;
}
```

情報ボックスには固定位置が指定され、アンカーの `anchor-name` を参照する {{cssxref("position-anchor")}} プロパティによって両者が関連付けられ、さらに `position-area` を用いてアンカーの左上角に固定されています。

`position-try-fallbacks` リストを指定します（個別指定プロパティ名に未対応の場合に備え、 `position-try` 一括指定で再宣言します）。アンカーがビューポートの端に近づいた際のオーバーフローを防ぐため、アンカーのインライン軸またはブロック軸に沿って反転させる 2 つの事前定義された位置指定試行代替オプションを指定します。

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
  position-try: flip-block, flip-inline;
}
```

#### 結果

これは次のような結果になります。

{{ EmbedLiveSample("Predefined try options", "100%", "250") }}

アンカーが端に近づくようにスクロールしてみてください。

- アンカーをビューポートの上端近くに移動させると、位置指定要素がアンカーの左下に反転して配置され、オーバーフローを避けます。
- アンカーをビューポートの左端付近に移動させると、位置指定要素がアンカーの右上に反転して配置され、オーバーフローを避けます。

ブラウザーによっては、位置指定要素が代替位置に移動した後、その要素が代替位置に留まったままになる場合があります。これは、代替位置指定ができなくなった場合（例えば、 {{cssxref("position-area")}} で定義された位置に戻るための空間が確保された場合など）でも同様です。

ただし、アンカーをビューポートの左上角に移動すると問題が発生します。位置指定要素がブロック方向とインライン方向にオーバーフローし始めると、デフォルトの左上位置に戻り、両方向にオーバーフローしてしまうのです。これは望ましい結果ではありません。

これは、ブラウザーに`flip-block` または `flip-inline` の位置オプションしか与えなかったためです。両方を同時に試す選択肢を与えませんでした。次の例では、この課題を修正する方法を示します。

### 複数の値を単一のオプションに組み合わせ

前回のデモで見つかった問題を修正するために、複合的な試行代替オプションを使用しましょう。

#### HTML と CSS

このデモでは、HTML と CSS は、位置指定要素のコードを除き、すべて同じです。この場合、3 つ目となる位置指定試行代替オプション、`flip-block flip-inline` が指定されています。

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
  margin: 100px 350px;
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
.infobox {
  position: fixed;
  position-anchor: --my-anchor;
  position-area: top left;

  position-try:
    flip-block,
    flip-inline,
    flip-block flip-inline;
  position-try-fallbacks:
    flip-block,
    flip-inline,
    flip-block flip-inline;
}
```

#### 結果

{{ EmbedLiveSample("Combining multiple values into one option", "100%", "250") }}

第三の位置指定試行代替オプションは、ブラウザーがオーバーフローを避けるため `flip-block`、次に `flip-inline` を試行することを意味します。これらの代替手段が失敗した場合、両方を組み合わせて要素の位置をブロック方向とインライン方向で同時に反転させます。これで、アンカーをビューポートの上端かつ左端に向けてスクロールすると、位置指定要素が右下に反転します。

### `position-area` 試行代替オプション

この例では、`position-area` の位置指定試行代替オプションの動作を示しています。

#### HTML と CSS

このデモの HTML と CSS はすべて同じですが、位置指定要素のコードを除きます。この場合、位置指定試行代替オプションはすべて `position-area` 値です。`top`、`top right`、`right`、`bottom right`、`bottom`、`bottom left`、`left` です。

これは、位置指定要素が、アンカーがどのビューポートの端に近い場合でも、表示に適した位置を探すことを意味します。この手法は事前定義値の手法よりもやや手間がかかりますが、より細かく柔軟性があります。

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
  margin: 100px 350px;
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

  position-try:
    top, top right, right,
    bottom right, bottom,
    bottom left, left;

  position-try-fallbacks:
    top, top right, right,
    bottom right, bottom,
    bottom left, left;
}
```

#### 結果

{{ EmbedLiveSample("`position-area` try fallback options", "100%", "250") }}

ページをスクロールして、アンカーがビューポートの端に近づくにつれて、これらの位置指定試行代替オプションの効果を確認してください。

### カスタム試行オプションの例

{{cssxref("@position-try")}} リファレンスページを参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("position-try")}}
- {{cssxref("position-try-order")}}
- {{cssxref("@position-try")}} アットルール
- {{cssxref("position-area")}}
- [`<position-area>`](/ja/docs/Web/CSS/Reference/Values/position-area_value) 値
- [オーバーフロー時の代替オプションと条件付き非表示](/ja/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding)ガイド
- [CSS アンカー位置指定の使用](/ja/docs/Web/CSS/Guides/Anchor_positioning/Using)ガイド
- [CSS アンカー位置指定](/ja/docs/Web/CSS/Guides/Anchor_positioning)モジュール
