---
title: scroll()
slug: Web/CSS/Reference/Properties/animation-timeline/scroll
l10n:
  sourceCommit: b7534af9f369a80fe12556cba781890e87a171d9
---

**`scroll()`** は [CSS 関数](/ja/docs/Web/CSS/Reference/Values/Functions)で、{{cssxref("animation-timeline")}} と共に使用することで、[無名スクロール進行タイムライン](/ja/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#無名スクロール進行タイムライン)を作成し、そのタイムラインのスクローラーと軸を定義します。

## 構文

```css
/* 引数を設定しない関数 */
animation-timeline: scroll();

/* スクローラー要素を選択する値 */
animation-timeline: scroll(nearest); /* 既定 */
animation-timeline: scroll(root);
animation-timeline: scroll(self);

/* 軸を選択する値 */
animation-timeline: scroll(block); /* 既定 */
animation-timeline: scroll(inline);
animation-timeline: scroll(y);
animation-timeline: scroll(x);

/* スクローラーと軸を指定する例 */
animation-timeline: scroll(block nearest); /* 既定 */
animation-timeline: scroll(inline root);
animation-timeline: scroll(x self);
```

### 引数

- `<scroller>`
  - : スクロール進行タイムラインを提供するスクローラー要素を示す値には、以下のいずれかを指定します。
    - `nearest`
      - : どちらかの軸にスクロールバーを持つ、現在の要素の最も近い祖先。これがデフォルト値です。
    - `root`
      - : 文書のルート要素です。
    - `self`
      - : 現在の要素自身です。

- `<axis>`
  - : スクロールポートの方向（軸）を説明する {{ cssxref("axis") }} キーワード値。デフォルト値は `block` です。

## 解説

`scroll()` は CSS 関数で、カンマで区切られた {{cssxref("animation-timeline")}} プロパティ内の値の一つとして使用すると、{{cssxref("@keyframes")}} アニメーションのスクロール進行タイムラインを指定します。これはスクロール可能な要素（_scroller_）と、アニメーションタイムラインを提供するスクロールバー軸を定義します。

デフォルトでは、`scroll()` は最も近い親スクロールコンテナーの `block` 軸を参照します。スクローラーと軸の値は任意の順序で指定します。

以下の 5 つの宣言は同等です。

```css
animation-timeline: scroll();
animation-timeline: scroll(block);
animation-timeline: scroll(nearest);
animation-timeline: scroll(block nearest);
animation-timeline: scroll(nearest block);
```

スクロール進行タイムラインは、`<axis>` および[書字方向](/ja/docs/Web/CSS/Guides/Writing_modes/Writing_mode_systems)に応じた水平または垂直のスクロールバーをスクロールすることで進行します。指定された軸にスクロールバーがない場合、アニメーションタイムラインは無効になります。

### 形式文法

{{CSSSyntax}}

## 例

### 無名スクロール進行タイムラインの設定

この例では、 `#square` 要素は `scroll()` 関数を使用してアニメーションされる要素に適用される無名スクロール進行タイムラインを使ってアニメーションされます。
この具体的な例でのタイムラインは、ブロック方向のスクロールバーから、（任意の）スクロールバーを持つ最も近い親要素によって指定されたものです。

#### HTML

例の HTML は下記の通りです。

```html
<div id="container">
  <div id="square"></div>
  <div id="stretcher"></div>
</div>
```

#### CSS

下記の CSS では、`animation-timeline`プロパティで指定されたタイムラインに従って、交互に回転する正方形を定義しています。
この場合、タイムラインは `scroll(block nearest)` によって指定されます。これはスクロールバーを保有する最も近い祖先要素のブロック方向のスクロールバーを選択することを意味しています。

> [!NOTE]
> 実は `block` と `nearest` は既定値なので、`scroll()` だけを使用することができました。

```css
#square {
  background-color: deeppink;
  width: 100px;
  height: 100px;
  margin-top: 100px;
  position: absolute;
  bottom: 0;

  animation-name: rotateAnimation;
  animation-duration: 1ms; /* Firefox では、アニメーションを適用するために必要 */
  animation-direction: alternate;
  animation-timeline: scroll(block nearest);
}

@keyframes rotateAnimation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
```

コンテナー用の CSS では、コンテナーの高さを 300px に設定し、コンテナーがはみ出した場合に垂直スクロールバーを作成するようにも設定しています。
"stretcher" の CSS では、ブロックの高さを 600px に設定し、コンテナー要素を強制的にオーバーフローさせます。
この 2 つを組み合わせることで、コンテナーに垂直スクロールバーを確実に設置し、無名スクロール進行タイムラインのソースとして使用することができます。

```css
#container {
  height: 300px;
  overflow-y: scroll;
  position: relative;
}

#stretcher {
  height: 600px;
}
```

```css hidden
@layer no-support {
  @supports not (animation-timeline: scroll()) {
    body::before {
      content: "このブラウザーは CSS の `scroll()` 関数に対応していません。";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1em;
    }
  }
}
```

#### 結果

スクロールすると、正方形の要素がアニメーションします。

{{EmbedLiveSample("Setting an anonymous scroll progress timeline", "100%", "320px")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS アニメーションの使用](/ja/docs/Web/CSS/Guides/Animations/Using)
- [CSS アニメーション](/ja/docs/Web/CSS/Guides/Animations)モジュール
- [CSS スクロール駆動アニメーション](/ja/docs/Web/CSS/Guides/Scroll-driven_animations)
- {{domxref("ScrollTimeline")}}
- [ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API)
