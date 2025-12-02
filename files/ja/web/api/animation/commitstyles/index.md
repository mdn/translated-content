---
title: "Animation: commitStyles() メソッド"
short-title: commitStyles()
slug: Web/API/Animation/commitStyles
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef("Web Animations")}}

`commitStyles()` は[ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API) の {{domxref("Animation")}} インターフェイスのメソッドで、アニメーションの現在のスタイルの[計算値](/ja/docs/Web/CSS/Guides/Cascade/Property_value_processing#計算値)をターゲット要素の [`style`](/ja/docs/Web/HTML/Reference/Global_attributes/style) に書き込みます。 `commitStyles()` はアニメーションが[自動削除](/ja/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API#満了したアニメーションの自動削除)されていてもうまく動作します。

`commitStyles()` は `fill` と組み合わせて使用することができ、アニメーションが終わった後も最終的な状態を維持させることができます。同じ効果は `fill` だけでも得られますが、[無期限に満たすアニメーションを使用することは推奨されません](https://drafts.csswg.org/web-animations-1/#fill-behavior)。アニメーションは[すべての静的スタイルよりも優先されます](/ja/docs/Web/CSS/Guides/Cascade/Introduction#cascading_order)ので、無期限の塗りつぶしアニメーションは対象とする要素が通常のスタイル設定をされることを妨げる可能性があります。

`commitStyles()` を使用することができます スタイル設定は要素の [`style`](/ja/docs/Web/HTML/Reference/Global_attributes/style) 属性に書き込まれます。

## 構文

```js-nolint
commitStyles()
```

### 引数

なし。

### 返値

なし ({{jsxref("undefined")}})。

## 例

### アニメーションの最後の状態を確定

この例では、"Commit styles" と "Fill forwards" とラベル付けされた2つのボタンがあります。どちらのボタンもクリックするとアニメーションし、アニメーションの最終状態を維持します。

しかし、異なる点は、 "Fill forwards" は `fill: "forwards"` これは、ブラウザーがアニメーションの状態を無期限に、あるいは自動的に除去されるまで維持しなければならないことを意味しています。

しかし、 "Commit styles" ボタンはアニメーションが終了するのを待ち、 `commitStyles()` を呼び出されてからアニメーションを取り消しますので、完了したスタイルはアニメーションの状態ではなく `style` 属性の値として取り込まれます。

#### HTML

```html
<button class="commit-styles">Commit styles</button>
<br />
<button class="fill-forwards">Fill forwards</button>
```

```css hidden
button {
  margin: 0.5rem;
}
```

#### JavaScript

```js
const commitStyles = document.querySelector(".commit-styles");
let offset1 = 0;

commitStyles.addEventListener("click", async (event) => {
  // Start the animation
  offset1 = 100 - offset1;
  const animation = commitStyles.animate(
    { transform: `translate(${offset1}px)` },
    { duration: 500, fill: "forwards" },
  );

  // Wait for the animation to finish
  await animation.finished;
  // Commit animation state to style attribute
  animation.commitStyles();
  // Cancel the animation
  animation.cancel();
});

const fillForwards = document.querySelector(".fill-forwards");
let offset2 = 0;

fillForwards.addEventListener("click", async (event) => {
  // Start the animation
  offset2 = 100 - offset2;
  const animation = fillForwards.animate(
    { transform: `translate(${offset2}px)` },
    { duration: 500, fill: "forwards" },
  );
});
```

#### 結果

{{EmbedLiveSample("committing_the_final_state_of_an_animation")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API)
- {{domxref("Animation")}}: ウェブページのアニメーションを制御することができるその他のメソッドやプロパティ
