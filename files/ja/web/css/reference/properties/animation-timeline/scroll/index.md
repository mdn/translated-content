---
title: scroll()
slug: Web/CSS/Reference/Properties/animation-timeline/scroll
original_slug: Web/CSS/animation-timeline/scroll
l10n:
  sourceCommit: 34bc6ac7c5d03e5891bf94b0d4ebeccb0e7a29e5
---

{{SeeCompatTable}}

**`scroll()`** は [CSS 関数](/ja/docs/Web/CSS/Reference/Values/Functions)で、 {{cssxref("animation-timeline")}} と共に使用することができます。 {{cssxref("animation-timeline")}} はスクロール可能な要素 (_scroller_) とスクロールバーの軸を示し、現在の要素をアニメーションさせるための無名スクロール進行タイムラインを提供します。スクロール進行タイムラインは、スクローラーを上下（または左右）にスクロールすることで進行します。スクロール範囲内の位置は進行のパーセント値に変換されます。先頭は 0% で、末尾は 100% です。

> [!NOTE]
> 示された軸がスクロールバーを持たない場合、アニメーションタイムラインは非アクティブになります（進行がゼロになります）。

> [!NOTE]
> `scroll()` を使用するたびに、[ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API) に {{domxref("ScrollTimeline")}} の固有のインスタンスが対応付けられます。

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

- スクローラー
  - : スクロール進行タイムラインを提供するスクローラー要素を示す値には、以下のいずれかを指定します。
    - `nearest`
      - : どちらかの軸にスクロールバーを持つ、現在の要素の最も近い祖先。これが既定値です。
    - `root`
      - : 文書のルート要素です。
    - `self`
      - : 現在の要素自身です。

- 軸
  - : スクロールバー軸の値は以下のいずれかになります。
    - `block`
      - : スクロールコンテナーのブロック軸にあるスクロールバーで、行内のテキストの流れに垂直な方向の軸です。標準的な英語のような横書きモードでは `y` と同じになり、縦書きモードでは `x` と同じになります。これが既定値です。
    - `inline`
      - : スクロールコンテナーのインライン軸にあるスクロールバーで、行のテキストの流れと平行な方向の軸です。横書きモードでは `x` と同じになり、縦書きモードでは `y` と同じになります。
    - `y`
      - : スクロールコンテナーの縦軸にあるスクロールバー。
    - `x`
      - : スクロールコンテナーの横軸にあるスクロールバー。

> [!NOTE]
> スクローラーと軸の値は、任意の順序で指定することができます。

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

#### 結果

スクロールすると、正方形の要素がアニメーションします。

{{EmbedLiveSample("Setting an anonymous scroll progress timeline", "100%", "320px")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS スクロール駆動アニメーション](/ja/docs/Web/CSS/Guides/Scroll-driven_animations)
- [CSS アニメーションの使用](/ja/docs/Web/CSS/Guides/Animations/Using)
- [`animation-timeline`](/ja/docs/Web/CSS/Reference/Properties/animation-timeline)
