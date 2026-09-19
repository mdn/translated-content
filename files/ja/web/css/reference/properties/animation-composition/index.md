---
title: "`animation-composition` プロパティ (CSS)"
short-title: animation-composition
slug: Web/CSS/Reference/Properties/animation-composition
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

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

### 値

このプロパティは、カンマ区切りの 1 つ以上のキーワード値として指定します。

- `replace`
  - : 効果値がプロパティの基盤値を上書きします。これがデフォルト値です。
- `add`
  - : 効果値は、プロパティの基盤値の上に構築されます。この演算は加算効果をもたらします。加算演算が可換でない種類のアニメーションの場合、オペランドの順序は、基礎値の後に効果値が続きます。
- `accumulate`
  - : 効果値と基礎値は結合されます。加算処理が可換でない種類のアニメーションでは、オペランドの順序は基礎値の後に効果値が続きます。

## 解説

[@keyframes](/ja/docs/Web/CSS/Reference/At-rules/@keyframes) アットルールが対象とする各プロパティは、効果スタックに関連付けられています。効果スタックの値は、 CSS スタイルルールのプロパティの基礎値 (_underlying value_) と、キーフレームのプロパティの効果値 (_effect value_) を組み合わせて計算されます。 `animation-composition` プロパティは、基礎値と効果値の合成方法を指定するのに役立ちます。

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

- `replace` を指定すると、 `blur(10px)` は `0%` のキーフレームで `blur(5px)` を置き換えます。これはプロパティのデフォルト値です。
- `add` を指定すると、 `0%` のキーフレームの合成効果値は `blur(5px) blur(10px)` になります。
- `accumulate` を指定すると、 `0%` のキーフレームの合成効果値は `blur(15px)` になります。

> [!NOTE]
> 合成演算は、キーフレーム内で指定することもできます。その場合、指定した合成演算は、まずそのキーフレーム内の各プロパティに対して使用され、次に次のキーフレーム内の各プロパティに対して使用されます。

### 複数の値

複数の値をカンマ区切りで `animation-*` プロパティに指定すると、{{cssxref("animation-name")}}が出現した順にアニメーションに適用されます。アニメーションと合成の数が異なる場合、`animation-composition` プロパティに列挙されている値は、最初の `animation-name` から最後の `animation-name` まで循環し、すべてのアニメーションに `animation-composition` 値が割り当てるまで繰り返されます。より詳しい情報は、[複数のアニメーションプロパティ値の設定](/ja/docs/Web/CSS/Guides/Animations/Using#複数のアニメーションプロパティ値の設定)を参照してください。

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

```css hidden
body {
  display: flex;
  flex-wrap: wrap;
  gap: 3px;
}

.container {
  flex: 1;
  min-width: 200px;
  height: 200px;
  background: lightblue;
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
  50% {
    transform: translateY(30px);
  }
  100% {
    transform: translateX(150px);
  }
}

.target {
  transform: translateX(30px) rotate(45deg);
  animation: slide 5s linear infinite;
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

すべての場合で、`transform` プロパティの基盤となる値は `translateX(30px) rotate(45deg)` です。`animation-composition` の各値による効果は以下の通りです。

- `replace` を使用すると、それぞれのキーフレームの `transform` プロパティが、アニメーションする要素に設定されている元の `transform` プロパティを完全に置き換えます。`50%` キーフレームにおける `transform` プロパティの最終的な効果値は `translateY(30px)`（`rotate` や `translateX` は無し）であり、`100%` キーフレームでは `translateX(150px)`（`rotate` や `translateY` は無し）となります。

  ターゲットは `transform: translateX(30px) rotate(45deg)` の状態から始まり、実質的に `transform: translateY(30px)` へとアニメーションし、その後 `transform: translateX(150px)` へと変化します。

- `add` を使用する場合、それぞれのキーフレームにおける最終的な効果値は、基盤となる `transform` 値の後に効果値が配置されたものとなります。

  したがって、ターゲットは `transform: translateX(30px) rotate(45deg)` から始まり、実際にはまず `transform: translateX(30px) rotate(45deg) translateY(30px)`（これは回転後の Y 軸上で `30px` 「下方向」に相当する）へとアニメーションし、 さらに `transform: translateX(30px) rotate(45deg) translateX(150px)` へとアニメーションします。加算演算は前回のキーフレームではなく、基となる `transform` を基準とするため、`100%` の時点では `translateY(30px)` は適用されず、要素は元の位置から回転後の X 軸に沿って `150px` 移動した位置に配置されます。

- `accumulate` を使用すると、最終的な効果値は、キーフレームの効果 `transform` と、その基盤となる元の値が組み合わさったものになります。`50%` の時点では、`translateY(30px)` が元となる `translateX(30px)` と組み合わさり、単一の平行移動（`translate(30px, 30px)`）となります。`100%` の時点では、`translateX(150px)` が元となる `translateX(30px)` と組み合わさり、`translateX(180px)` を生成します。

  したがって、ターゲットは `transform: translateX(30px) rotate(45deg)` から始まり、実質的にはまず `transform: translate(30px, 30px) rotate(45deg)` へとアニメーションし、その後 `transform: translateX(180px) rotate(45deg)` へと変化します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS アニメーションの使用](/ja/docs/Web/CSS/Guides/Animations/Using)
- [KeyFrameEffect の composite プロパティ](/ja/docs/Web/API/KeyframeEffect/composite)
- 他の関連アニメーションプロパティ: {{cssxref("animation")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}}, {{cssxref("animation-play-state")}}, {{cssxref("animation-timeline")}}, {{cssxref("animation-timing-function")}}
