---
title: animation-composition
slug: Web/CSS/animation-composition
l10n:
  sourceCommit: d35542bdca7fef10c5f82678d5669f633afe7b32
---

{{CSSRef}}

**`animation-composition`** は [CSS](/ja/docs/Web/CSS) のプロパティで、複数のアニメーションが同じプロパティに同時に影響する場合に使用する{{Glossary("composite operation", "合成演算")}}を指定します。

## 構文

```css
/* 単一のアニメーション */
animation-composition: replace;
animation-composition: add;
animation-composition: accumulate;

/* 複数のアニメーション */
animation-composition: replace, add;
animation-composition: add, accumulate;
animation-composition: replace, add, accumulate;

/* グローバル値 */
animation-composition: inherit;
animation-composition: initial;
animation-composition: revert;
animation-composition: revert-layer;
animation-composition: unset;
```

> [!NOTE]
> 複数の値をカンマ区切りで `animation-*` プロパティに指定すると、{{cssxref("animation-name")}}が出現した順にアニメーションに適用されます。アニメーションと合成の数が異なる場合、`animation-composition` プロパティに列挙されている値は、最初の `animation-name` から最後の `animation-name` まで循環し、すべてのアニメーションに `animation-composition` 値が割り当てるまで繰り返されます。より詳しい情報は、[複数のアニメーションプロパティ値の設定](/ja/docs/Web/CSS/CSS_animations/Using_CSS_animations#複数のアニメーションプロパティ値の設定)を参照してください。

### 値

- `replace`
  - : 効果値がプロパティの基盤値を上書きします。これが既定値です。
- `add`
  - : 効果値は、プロパティの基盤値の上に構築されます。この演算は加算効果をもたらします。加算演算が可換でない種類のアニメーションの場合、オペランドの順序は、基礎値の後に効果値が続きます。
- `accumulate`
  - : 効果値と基礎値は結合されます。加算処理が可換でない種類のアニメーションでは、オペランドの順序は基礎値の後に効果値が続きます。

## 解説

[@keyframes](/ja/docs/Web/CSS/@keyframes) アットルールが対象とする各プロパティは、効果スタックに関連付けられています。効果スタックの値は、 CSS スタイルルールのプロパティの基礎値 (_underlying value_) と、キーフレームのプロパティの効果値 (_effect value_) を組み合わせて計算されます。 `animation-composition` プロパティは、基礎値と効果値の合成方法を指定するのに役立ちます。

例えば、下記の CSS の場合、 `blur(5px)` が基盤値で、 `blur(10px)` が効果値です。 `animation-composition` プロパティは、基礎値と効果値の効果を合成した後、最終的な効果値を生成する処理を指定します。

```css
.icon:hover {
  filter: blur(5px);
  animation: 3s infinite pulse;
  animation-composition: add;
}

@keyframes pulse {
  0% {
    filter: blur(10px);
  }
  100% {
    filter: blur(20px);
  }
}
```

例えばこの例で、 `animation-composition` プロパティに異なる値を設定したとします。それぞれの場合の最終的な効果値は下記で説明するように計算されます。

- `replace` を指定すると、 `blur(10px)` は `0%` のキーフレームで `blur(5px)` を置き換えます。これはプロパティの既定値です。
- `add` を指定すると、 `0%` のキーフレームの合成効果値は `blur(5px) blur(10px)` になります。
- `accumulate` を指定すると、 `0%` のキーフレームの合成効果値は `blur(15px)` になります。

> [!NOTE]
> 合成演算は、キーフレーム内で指定することもできます。その場合、指定した合成演算は、まずそのキーフレーム内の各プロパティに対して使用され、次に次のキーフレーム内の各プロパティに対して使用されます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### animation-composition 値の理解

下記の例では、様々な `animation-composition` の値を横に並べて効果を表示しています。

#### HTML

```html
<div class="container">
  replace
  <div id="replace" class="target"></div>
</div>
<div class="container">
  add
  <div id="add" class="target"></div>
</div>
<div class="container">
  accumulate
  <div id="accumulate" class="target"></div>
</div>
```

#### CSS

ここで基盤値は `translateX(50px) rotate(45deg)` です。

```css hidden
.container {
  width: 230px;
  height: 200px;
  background: cyan;
  display: inline-block;
  text-align: center;
}

.target {
  width: 20px;
  height: 50px;
  background: green;
  border-radius: 10px;
  margin: 20px 0;
}
```

```css
@keyframes slide {
  20%,
  40% {
    transform: translateX(100px);
    background: yellow;
  }
  80%,
  100% {
    transform: translateX(150px);
    background: orange;
  }
}

.target {
  transform: translateX(30px) rotate(45deg);
  animation: slide 5s linear infinite;
}
.target:hover {
  animation-play-state: paused;
}
#replace {
  animation-composition: replace;
}
#add {
  animation-composition: add;
}
#accumulate {
  animation-composition: accumulate;
}
```

#### 結果

{{EmbedLiveSample("Reversing the animation direction","100%","250")}}

- `replace` を使用すると、 `transform` プロパティの `0%, 20%` のキーフレームでの最終的な効果値は `translateX(100px)` になります（基盤の値である `translateX(30px) rotate(45deg)` を完全に置き換えます）。この場合、要素は 45deg から 0deg まで回転し、要素自体に設定された既定値から 0% マークで設定された回転しない値までアニメーションします。これが既定の動作です。
- `add` を使用すると、 `transform` プロパティの `0%, 20%` のキーフレームでの最終的な効果値は、`translateX(30px) rotate(45deg)` に `translateX(100px)` が続きます。つまり、要素は右に `30px` 移動し、`45deg` 回転し、さらに X 軸方向に `100px` 移動します。
- `accumulate` を称すると、 `0%, 20%` キーフレームでの最終的な効果値は `translateX(130px) rotate(45deg)` になります。つまり、 2 つの X 軸の移動値 `30px` と `100px` が結合または「累積」されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS アニメーションの使用](/ja/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- [KeyFrameEffect の composite プロパティ](/ja/docs/Web/API/KeyframeEffect/composite)
- 他の関連アニメーションプロパティ: {{cssxref("animation")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}}, {{cssxref("animation-play-state")}}, {{cssxref("animation-timeline")}}, {{cssxref("animation-timing-function")}}
