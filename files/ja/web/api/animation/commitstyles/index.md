---
title: "Animation: commitStyles() メソッド"
short-title: commitStyles()
slug: Web/API/Animation/commitStyles
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("Web Animations")}}

`commitStyles()` は[ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API) の {{domxref("Animation")}} インターフェイスのメソッドで、アニメーションの現在のスタイルの[計算値](/ja/docs/Web/CSS/Guides/Cascade/Property_value_processing#計算値)をターゲット要素の [`style`](/ja/docs/Web/HTML/Reference/Global_attributes/style) に書き込みます。

これは主に、アニメーションの最終状態のスタイルを対象要素に適用するために使用され、これによりアニメーション終了後もそのスタイルが維持されます。

## 構文

```js-nolint
commitStyles()
```

### 引数

なし。

### 返値

なし ({{jsxref("undefined")}})。

## 解説

`commitStyles()` メソッドは、主にアニメーションの最終状態における[計算値](/ja/docs/Web/CSS/Guides/Cascade/Property_value_processing#計算値)を、ターゲット要素の [`style`](/ja/docs/Web/HTML/Reference/Global_attributes/style) 属性に書き込むために使用されます。これにより、アニメーション終了後もスタイルが維持されます。
これは、アニメーションが終了したとき（つまり、{{domxref("Animation")}} オブジェクトの {{domxref("Animation.finished","finished")}} プロパティが解決されたとき）に行うことができます。

### fill モードにおける `commitStyles()`

古いブラウザーでは、アニメーションが完了した後に要素にスタイルを反映させるためには、[`fill`モード](/ja/docs/Web/API/KeyframeEffect/KeyframeEffect#fill)を指定する必要があります。

次のコードは、`animatedElement` という名前の要素にアニメーションを適用し、[`fill: "forwards"`](/ja/docs/Web/API/KeyframeEffect/KeyframeEffect#fill) を設定して、アニメーション完了後もスタイルを維持する方法を示しています。
アニメーションが完了したら、`commitStyles()` を使用して、その要素にスタイルを反映させます。

```js
// アニメーションの開始
const animation = animatedElement.animate(
  { transform: "translate(100px)" },
  { duration: 500, fill: "forwards" },
);

// アニメーションの完了を待つ
await animation.finished;
// アニメーション状態を animatedElement の style 属性に確定
animation.commitStyles();
// アニメーションを取り消す
animation.cancel();
```

`fill` はアニメーションを無期限に維持するため、スタイルを確定したら、アニメーションを取り消します。

なお、`fill` だけを使用しても同じ効果が得られますが、[無期限でスタイルを固定するアニメーションは推奨されていません](https://drafts.csswg.org/web-animations-1/#fill-behavior)。
アニメーションは [すべての静的なスタイルよりも優先されます](/ja/docs/Web/CSS/Guides/Cascade/Introduction#cascading_order)。そのため、終了時期が不定の塗りつぶしアニメーションが実行されていると、対象要素が正常にスタイル設定されないままになる可能性があります。

> [!NOTE]
> 同時に、要素の初期スタイルとして最終的なスタイルを設定し、アニメーションでそのスタイルに移行させることで、最終的な状態を明示的に保存する必要を避けることもできます。

### fill モードを設定しない `commitStyles()`

新しいブラウザーでは、[`fill` モード](/ja/docs/Web/API/KeyframeEffect/KeyframeEffect#fill) を設定する必要はありません（具体的なバージョンについては、[ブラウザーの互換性表](#ブラウザーの互換性)を参照してください）。

> [!NOTE]
> この新しい動作について、機能チェックを行う方法はありません。
> 現時点では、ほとんどのコードでは、前の節で示したように `fill` を設定し続ける必要があります。

次のコードは、`animatedElement` という名前の要素にアニメーションを適用し、{{domxref("Animation.finished","finished")}} プロパティを使用してアニメーションの完了を待ち、その後 `commitStyles()` を使用してその要素にスタイルを反映させる方法を示しています。
`fill` を設定していないため、後でアニメーションをキャンセルする必要はありません。

```js
// アニメーションを開始
const animation = animatedElement.animate(
  { transform: "translate(100px)" },
  { duration: 500 },
);

// アニメーションの完了を待つ
await animation.finished;

// アニメーション状態を animatedElement の style 属性に確定
animation.commitStyles();
```

`commitStyles()` はアニメーションが[自動削除](/ja/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API#満了したアニメーションの自動削除)されていてもうまく動作します。
要素のスタイルが確定した後は、通常通り変更や置き換えが可能です。

## 例

### fill を使用するアニメーションと使用しないアニメーション

この例では、`commitStyles()` を使用して、アニメーションの終了時に計算されたスタイルを保存する方法を、`fill` を使用する場合と使用しない場合の両方で示しています。
また、比較のために、`commitStyles()` も `fill` も使用しなかった場合に何が起こるかの例も提供しています。

この例では、まず「commitStyles() のみ」と「fill 付き commitStyles()」というラベルのついた 2 つのボタンが表示されます。
どちらのボタンもクリックするとアニメーションが再生され、どちらも `commitStyles()` を呼び出してアニメーションの最終状態を維持します。
違いは、「commitStyles() のみ」では、アニメーションの最終状態を維持するために `fill: "forwards"` を指定していない点です。
現在の仕様と一致していないブラウザーでは、最終状態が捕捉されない可能性があります。

そして、コードには比較用に使用できる「commitStyles() も fill もなし」というボタンと、「リセット」ボタンが表示されます。

#### HTML

```html
<button class="commit-styles">commitStyles() のみ</button>
<button class="commit-with-fill">fill 付き commitStyles()</button>
<button class="no-commit-or-fill">commitStyles() も fill もなし</button>
```

```html hidden
<button id="reset" type="button">リセット</button>
```

```css hidden
button {
  margin: 0.5rem;
  display: block;
}
```

```js hidden
const reload = document.querySelector("#reset");

reload.addEventListener("click", () => {
  window.location.reload(true);
});
```

#### JavaScript

このコードは、「commitStyles() のみ」ボタンのクリックハンドラーを定義しています。
これにより、ボタンがクリックされた際に、ボタンが右または左へ移動するアニメーションが再生されます。
なお、アニメーションが完了するとすぐに `commitStyles()` が呼び出されます。

```js
let offset1 = 0;

const commitStyles = document.querySelector(".commit-styles");

commitStyles.addEventListener("click", async (event) => {
  // アニメーションを開始
  offset1 = 100 - offset1;
  const animation = commitStyles.animate(
    { transform: `translate(${offset1}px)` },
    { duration: 500 },
  );

  // アニメーションの完了を待つ
  await animation.finished;
  // アニメーション状態を style 属性に確定
  animation.commitStyles();
});
```

このコードは、「fill 付き commitStyles()」ボタンのクリックハンドラーを定義しています。
同時に、ボタンがクリックされた際に、ボタンが右または左に移動するアニメーションも実行します。
`fill` が定義されているため、その後でアニメーションをキャンセルする必要がある。

なお、アニメーションが完了した後に `commitStyles()` が呼び出されることに注意してください。

```js
const commitStylesWithFill = document.querySelector(".commit-with-fill");
let offset2 = 0;

commitStylesWithFill.addEventListener("click", async (event) => {
  // アニメーションを開始
  offset2 = 100 - offset2;
  const animation = commitStylesWithFill.animate(
    { transform: `translate(${offset2}px)` },
    { duration: 500, fill: "forwards" },
  );

  // アニメーションの完了を待つ
  await animation.finished;
  // アニメーション状態を style 属性に確定
  animation.commitStyles();
  // アニメーションをキャンセル
  animation.cancel();
});
```

このコードは、「commitStyles() も fill もなし」ボタンのクリックハンドラーを定義しています。
同時に、ボタンがクリックされた際に、ボタンが右または左に移動するアニメーションも実行されます。
fill を定義しておらず、アニメーションも取り消していません。

```js
const noCommitStylesOrFill = document.querySelector(".no-commit-or-fill");
let offset3 = 0;

noCommitStylesOrFill.addEventListener("click", async (event) => {
  // アニメーションを開始
  offset3 = 100 - offset3;
  const animation = noCommitStylesOrFill.animate(
    { transform: `translate(${offset3}px)` },
    { duration: 500 },
  );
});
```

#### 結果

ボタンをクリックするとアニメーションが再生されます。
なお、現在のブラウザーでも、アニメーション終了後にスタイルを確定するために `fill` が必要な場合は、最初のボタンはアニメーションの最後に「ジャンプ」が発生します。
「commitStyles() も fill もなし」ボタンは、最終状態が保存されないため、常に最後にジャンプが発生します。

{{EmbedLiveSample("Animation with and without using fill")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API)
- {{domxref("Animation")}}: ウェブページのアニメーションを制御することができるその他のメソッドやプロパティ
