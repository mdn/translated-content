---
title: "@position-try"
slug: Web/CSS/Reference/At-rules/@position-try
l10n:
  sourceCommit: 3e0ba995376cace7f08f0771635f86f0fb1753b3
---

**`@position-try`** は [CSS](/ja/docs/Web/CSS) の[アットルール](/ja/docs/Web/CSS/Guides/Syntax/At-rules)で、アンカー位置指定された要素の位置指定と配置を定義するために使用することができます、独自の位置指定試行フォールバックオプションを定義するために使用されます。アンカー要素には、{{cssxref("position-try-fallbacks")}} プロパティまたは {{cssxref("position-try")}} 一括指定を介して、1 つ以上の位置指定の代替オプションセットを適用できます。位置指定された要素が、その包含ブロックまたはビューポートからオーバーフローし始める位置に移動されると、ブラウザーは位置指定された要素を完全に画面内に収める最初の位置指定の代替オプションを選択します。

それぞれの位置オプションは {{cssxref("dashed-ident")}} で名付けられ、インセット位置、マージン、サイズ、自己配置などの情報を定義する宣言を指定する記述子リストを含みます。`<dashed-ident>` は、{{cssxref("position-try-fallbacks")}} プロパティおよび {{cssxref("position-try")}} 一括指定においてカスタム位置オプションを参照するために使用されます。

アンカー機能の詳細情報と位置試行代替機能の使用方法については、[CSS アンカー位置指定](/ja/docs/Web/CSS/Guides/Anchor_positioning)モジュールおよび[CSS アンカー位置指定の使用方法](/ja/docs/Web/CSS/Guides/Anchor_positioning/Using)ガイドを参照してください。

## 構文

```css
@position-try --try-option-name {
  descriptor-list
}
```

> [!NOTE]
> `--try-option-name` は、カスタム位置指定オプションの識別名を指定する {{cssxref("dashed-ident")}} です。これにより、その代替オプションを {{cssxref("position-try-fallbacks")}} リストに追加することができます。

### 記述子

記述子は、カスタム位置指定オプションの動作を定義するプロパティ値を指定します。つまり、位置指定要素が配置される場所を決定します。

- `position-anchor`
  - : {{cssxref("position-anchor")}} プロパティの値を指定し、位置指定要素が固定されるアンカー要素を定義します。これは、{{cssxref("dashed-ident")}} でアンカー要素の {{cssxref("anchor-name")}} プロパティの値と等しい値を指定することで行われます。
- `position-area`
  - : アンカー位置指定要素の位置をアンカーに対する相対位置で定義する {{cssxref("position-area")}} プロパティの値を指定します。
- [インセットプロパティ](/ja/docs/Glossary/Inset_properties)記述子
  - : [`anchor()`](/ja/docs/Web/CSS/Reference/Values/anchor) 関数の値を指定し、アンカー位置指定要素の端の位置を、アンカー要素の端に対する相対位置で定義します。インセットプロパティ記述子は、以下のプロパティを表すように設定できます。
    - {{cssxref("top")}}
    - {{cssxref("left")}}
    - {{cssxref("bottom")}}
    - {{cssxref("right")}}.
    - {{cssxref("inset-block-start")}}
    - {{cssxref("inset-block-end")}}
    - {{cssxref("inset-inline-start")}}
    - {{cssxref("inset-inline-end")}}
    - {{cssxref("inset-block")}}
    - {{cssxref("inset-inline")}}
    - {{cssxref("inset")}}
- マージンプロパティ記述子
  - : アンカー位置指定された要素に設定されるマージンを指定します。マージンプロパティ記述子は、以下のプロパティを表すように設定できます。
    - {{cssxref("margin-top")}}
    - {{cssxref("margin-left")}}
    - {{cssxref("margin-bottom")}}
    - {{cssxref("margin-right")}}
    - {{cssxref("margin-block-start")}}
    - {{cssxref("margin-block-end")}}
    - {{cssxref("margin-inline-start")}}
    - {{cssxref("margin-inline-end")}}
    - {{cssxref("margin")}}
    - {{cssxref("margin-block")}}
    - {{cssxref("margin-inline")}}
- サイズプロパティ記述子
  - : [`anchor-size()`](/ja/docs/Web/CSS/Reference/Values/anchor-size)関数の値を指定し、アンカー要素のサイズに対するアンカー位置指定要素のサイズを定義します。以下のプロパティを表すサイズ指定プロパティ記述子を設定できます。
    - {{cssxref("width")}}
    - {{cssxref("height")}}
    - {{cssxref("min-width")}}
    - {{cssxref("min-height")}}
    - {{cssxref("max-width")}}
    - {{cssxref("max-height")}}
    - {{cssxref("block-size")}}
    - {{cssxref("inline-size")}}
    - {{cssxref("min-block-size")}}
    - {{cssxref("min-inline-size")}}
    - {{cssxref("max-block-size")}}
    - {{cssxref("max-inline-size")}}
- 自己配置プロパティ記述子
  - : [`anchor-center`](/ja/docs/Web/CSS/Guides/Anchor_positioning/Using#centering_on_the_anchor_using_anchor-center) 値を指定して、アンカー位置指定要素を、ブロック方向またはインライン方向において、アンカー要素の中心に対して配置します。{{cssxref("align-self")}} および {{cssxref("justify-self")}} 記述子は `anchor-center` 値を導くことができます。

> [!NOTE]
> カスタム位置オプションが要素に適用されると、`@position-try` アットルール記述子で定義されたプロパティ値は、標準的な CSS プロパティを介して要素に設定された値よりも優先されます。

## 形式文法

{{csssyntax}}

## 例

### カスタム位置指定オプションの使い方

この例では、アンカー要素と位置指定要素を定義し、4 つの名前付きカスタム位置指定の試行代替オプションを生成します。これらのオプションは位置指定要素に適用され、アンカー要素がビューポート内のどこにあっても、そのコンテンツが常に確実に表示されるようにします。

#### HTML

ここでは 2 つの {{htmlelement("div")}} 要素を設置し、これがアンカーとアンカー位置指定要素となります。

```html
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>これは情報ボックスです。</p>
</div>
```

#### CSS

まず `<body>` 要素をとても大きくスタイル設定し、アンカー要素と位置指定要素をビューポート内で水平方向と垂直方向の両方にスクロール可能にします。

```css
body {
  width: 1500px;
  height: 500px;
}
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
```

アンカーには {{cssxref("anchor-name")}} が指定され、{{cssxref("position")}} 値として `absolute` が設定されます。次に、{{cssxref("top")}} と {{cssxref("left")}} の値を使用して、初期の `<body>` レンダリングの中央付近に配置します。

```css
.anchor {
  anchor-name: --my-anchor;
  position: absolute;
  top: 100px;
  left: 350px;
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

次に、`@position-try` アットルールを使用して、4つの独自の位置オプションを定義します。それぞれを識別し、その目的を記述するわかりやすい {{cssxref("dashed-ident")}} による名前を付けます。それぞれのオプションは、位置指定要素をアンカー要素の周囲の特定の位置に配置し、位置指定要素とそのアンカー要素の間に適切な `10px` のマージンを設定します。位置指定方法は様々な手法で処理され、利用できる異なるテクニックを示すためです。

- 最初と最後の位置オプションは {{cssxref("position-area")}} を使用しています。
- 2 番目の位置オプションは {{cssxref("top")}} で {{cssxref("anchor()")}} 値を使用し、 {{cssxref("justify-self", "justify-self: anchor-center")}} を用いて、位置指定要素をアンカーに対してインライン方向に中央揃えします。
- 3 番目の位置オプションでは、{{cssxref("left")}} に {{cssxref("anchor()")}} 値を使用し、それを {{cssxref("calc()")}} 関数で囲んで `10px` の空間を追加しています（他のオプションのように {{cssxref("margin")}} で間隔を作成するのではなく）。その後、{{cssxref("align-self", "align-self: anchor-center")}} を使用して、位置指定要素をブロック方向においてアンカーに対して中央揃えにします。

最後に、左右の位置指定オプションの場合は、{{cssxref("width")}} をより狭く指定します。

```css
@position-try --custom-left {
  position-area: left;
  width: 100px;
  margin-right: 10px;
}

@position-try --custom-bottom {
  top: anchor(bottom);
  justify-self: anchor-center;
  margin-top: 10px;
  position-area: none;
}

@position-try --custom-right {
  left: calc(anchor(right) + 10px);
  align-self: anchor-center;
  width: 100px;
  position-area: none;
}

@position-try --custom-bottom-right {
  position-area: bottom right;
  margin: 10px 0 0 10px;
}
```

情報ボックスには固定位置指定が指定され、{{cssxref("position-anchor")}} でアンカー名の `anchor-name` を参照して両者を関連付け、さらに {{cssxref("position-area")}} を用いてアンカーの上端に固定します。同時に固定幅の {{cssxref("width")}} といくらかの下方向のマージン {{cssxref("margin")}} を設定します。カスタム位置指定オプションは {{cssxref("position-try-fallbacks")}} プロパティで参照され、アンカーがビューポートの端に近づいた際に位置指定要素があふれたりスクロールで表示範囲外になったりするのを防ぎます。

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

#### 結果

ページをスクロールすると、アンカーがビューポートの異なる端に近づくにつれて、位置指定要素の配置が変化することに気づくでしょう。これは、異なる代替配置オプションが適用されるためです。

{{ EmbedLiveSample("Custom position option usage", "100%", "250") }}

これらのポジションオプションがどのように機能するか、詳しく説明しましょう。

- まず、デフォルトの位置は `position-area: top` で定義されていることに注意してください。情報ボックスがどの方向にもページからはみ出していない場合、情報ボックスはアンカーの上に配置され、`position-try-fallbacks` プロパティで設定された位置の代替オプションは無視されます。また、情報ボックスには固定幅と下マージンが設定されている点にも注意してください。これらの値は、異なる位置の代替オプションが適用されるにつれて変化します。
- 情報ボックスがオーバーフローを始めた場合、ブラウザーはまず `--custom-left` の位置を試行します。これにより `position-area: left` を使用して情報ボックスをアンカーの左側に移動し、マージンを調整すると同時に、情報ボックスの幅も変更します。
- 次に、ブラウザーは `--custom-bottom` 位置を試行します。これは `position-area` ではなく `top` と `justify-self` を使用して情報ボックスをアンカーの下部に移動し、適切なマージンを設定します。`width` 記述子を記載していないため、情報ボックスは `width` プロパティで設定されたデフォルト幅 `200px` に戻ります。
- ブラウザーは次に `--custom-right` 位置を試行します。これは `--custom-left` 位置とほぼ同様に動作し、同じ `width` 記述子値が適用されます。ただし、`position-area` ではなく `left` と `align-self` を使用して位置指定要素を配置します。また、`left` 値を `calc()` 関数でラップし、その内部で `10px` を加算して空間を生成しています。これは `margin` を使用する代わりに実施しています。
- 他の試行代替オプションのいずれも、位置指定要素のオーバーフローを停止させることに成功しない場合、ブラウザーは最終手段として `--custom-bottom-right` 位置を試行します。これは `position-area: bottom right` を使用して、位置指定要素をアンカーの右下に配置します。

位置オプションが適用されると、その値は位置指定要素に設定された初期値を上書きします。例えば、位置指定要素に初期設定された `width` は `200px` ですが、`--custom-right` 位置オプションが適用されると、その幅は `100px` に設定されます。

場合によっては、初期値を無効化するために独自の位置オプション内で値を設定する必要がある場合があります。`--custom-bottom` および `--custom-right` オプションは、位置指定要素を配置するために inset プロパティと `*-self: anchor-center` 値を使用します。そのため、それぞれの場合で `position-area: none` を設定することで、前回設定された `position-area` 値を除去します。これを実行しなかった場合、初期設定の `position-area: top` 値が引き続き有効となり、他の位置指定情報と干渉します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("position-area")}}
- {{cssxref("position-anchor")}}
- {{cssxref("position-try-fallbacks")}}
- {{cssxref("position-try")}}
- The {{cssxref("anchor()")}} function
- The {{cssxref("anchor-size()")}} function
- [CSS アンカー位置指定](/ja/docs/Web/CSS/Guides/Anchor_positioning)モジュール
- [CSS アンカー位置指定の使用](/ja/docs/Web/CSS/Guides/Anchor_positioning/Using)
- [オーバーフロー時の代替オプションと条件付き非表示](/ja/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding)ガイド
- {{domxref("CSSPositionTryRule")}}
