---
title: view()
slug: Web/CSS/Reference/Properties/animation-timeline/view
original_slug: Web/CSS/animation-timeline/view
l10n:
  sourceCommit: dfad9eccce7c2f11c195003ec1cbd7b0fd9db577
---

{{SeeCompatTable}}

**`view()`** は [CSS 関数](/ja/docs/Web/CSS/Reference/Values/Functions)で、アニメーションタイムラインと共に使用して、アニメーションする無名ビュー進行タイムラインを提供する主体要素を示すことができます。ビュー進行タイムラインは、最も近い先祖スクロール内の主体要素の可視性の変化によって進行します。既定では、タイムラインは、主体がスクローラーの一方の端に最初に表示された時に 0% になり、反対側の端に達した時に 100% になります。

関数の引数には、タイムラインの進行が追跡されるスクロールバーの軸と、主体が表示されているとみなされるボックスの位置を調整するインセットを指定します。

> [!NOTE]
> 示された軸がスクロールバーを持たない場合、アニメーションタイムラインは非アクティブになります（進行がゼロになります）。

> [!NOTE]
> `view()` を使用するたびに、[ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API) に {{domxref("ViewTimeline")}} の固有のインスタンスが対応付けられます。

## 構文

```css
/* 引数を設定しない関数 */
animation-timeline: view();

/* 軸を選択する値 */
animation-timeline: view(block); /* 既定 */
animation-timeline: view(inline);
animation-timeline: view(y);
animation-timeline: view(x);

/* インセットの値 */
animation-timeline: view(auto); /* 既定 */
animation-timeline: view(20%);
animation-timeline: view(200px);
animation-timeline: view(20% 40%);
animation-timeline: view(20% 200px);
animation-timeline: view(100px 200px);
animation-timeline: view(auto 200px);

/* 軸とインセットを指定する例 */
animation-timeline: view(block auto); /* 既定 */
animation-timeline: view(inline 20%);
animation-timeline: view(x 200px auto);
```

### 引数

- 軸
  - : スクロールバー軸の値は以下のいずれかになります。
    - `block`
      - : スクロールコンテナーのブロック軸にあるスクロールバーで、行内のテキストの流れに垂直な方向の軸です。
        標準的な英語のような横書きモードでは `y` と同じになり、縦書きモードでは `x` と同じになります。これが既定値です。
    - `inline`
      - : スクロールコンテナーのインライン軸にあるスクロールバーで、行のテキストの流れと平行な方向の軸です。
        横書きモードでは `x` と同じになり、縦書きモードでは `y` と同じになります。
    - `y`
      - : スクロールコンテナーの縦軸にあるスクロールバー。
    - `x`
      - : スクロールコンテナーの横軸にあるスクロールバー。

- インセット
  - : この値は `auto` または {{cssxref("length-percentage")}} のいずれかです。[スクロールポート](/ja/docs/Glossary/Scroll_container#スクロールポート)のインセット（正の値）またはアウトセット（負の値）の調整を指定します。インセットは、アニメーションタイムラインの長さを決定する要素が表示されているかどうかを決定するために使用します。言い換えれば、アニメーションは要素がインセット調整されたビューにある限り続きます。
    - start
      - : スクロールポートの先頭からの内方オフセット。
    - end
      - : スクロールポートの末尾からの内方オフセット。

> [!NOTE]
> 軸とインセットの値は、任意の順序で指定することができます。

### 形式文法

{{CSSSyntax}}

## 例

### 無名ビュー進行タイムラインの設定

無名ビュー進行タイムラインは `animation-timeline: view()` を使用して `subject` クラスを持つ要素に設定します。その結果、 `subject` 要素は文書のスクロールに合わせてアニメーションします。

#### HTML

例の HTML は下記の通りです。

```html
<div class="content">
  <h1>Content</h1>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Risus quis varius quam
    quisque id. Et ligula ullamcorper malesuada proin libero nunc consequat
    interdum varius. Elit ullamcorper dignissim cras tincidunt lobortis feugiat
    vivamus at augue.
  </p>

  <p>
    Dolor sed viverra ipsum nunc aliquet. Sed sed risus pretium quam vulputate
    dignissim. Tortor aliquam nulla facilisi cras. A erat nam at lectus urna
    duis convallis convallis. Nibh ipsum consequat nisl vel pretium lectus.
    Sagittis aliquam malesuada bibendum arcu vitae elementum. Malesuada bibendum
    arcu vitae elementum curabitur vitae nunc sed velit.
  </p>

  <div class="subject-container">
    <div class="subject animation"></div>
  </div>

  <p>
    Adipiscing enim eu turpis egestas pretium aenean pharetra magna ac. Arcu
    cursus vitae congue mauris rhoncus aenean vel. Sit amet cursus sit amet
    dictum. Augue neque gravida in fermentum et. Gravida rutrum quisque non
    tellus orci ac auctor augue mauris. Risus quis varius quam quisque id diam
    vel quam elementum. Nibh praesent tristique magna sit amet purus gravida
    quis. Duis ultricies lacus sed turpis tincidunt id aliquet. In egestas erat
    imperdiet sed euismod nisi. Eget egestas purus viverra accumsan in nisl nisi
    scelerisque. Netus et malesuada fames ac.
  </p>
</div>
<div class="overlay top">inset start 50%</div>
<div class="overlay bottom">inset end 10%</div>
```

#### CSS

`subject` 要素と `content` 要素は最小限のスタイル設定にし、テキストコンテンツには基本的なフォント設定をしました。

```css
.subject {
  width: 300px;
  height: 200px;
  background-color: deeppink;
}

.content {
  width: 75%;
  max-width: 800px;
  margin: 0 auto;
}

p {
  font-size: 1.5rem;
  line-height: 1.8;
}
```

結果の理解を助けるために、`subject-container`、`top`、`bottom` という追加要素を使用しています。 `subject-container` はアニメーションの範囲を示します。また、半透過の `top` と `bottom` のオーバーレイは、オフセットされたスクロールポートを示します。

```css
.subject-container {
  border: 2px dashed black;
  width: 300px;
  margin: 0 auto;
}

.overlay {
  position: fixed;
  width: 100%;
  background-color: #f5deb3aa;
  display: flex;
  font-size: 1.2rem;
  font-weight: bold;
  color: red;
  justify-content: flex-end;
}

.top {
  top: 0;
  height: 244px;
  align-items: end;
}

.bottom {
  top: 432px;
  height: 48px;
}
```

以下のコードでは、 `subject` クラスを持つ `<div>` に `animation` クラスが指定されています。アニメーション `grow` は `subject` 要素を大きくしたり小さくしたりします。 `animation-timeline: view(block 55% 10%)` を設定することで、スクロールする祖先（この場合は文書内のルート要素）が指定された進行タイムラインに沿ってアニメーションすることを宣言します。

下にスクロールしている間、`50% 10%` のインセット値によってアニメーションが下から 10% で始まり、上から 50% で完了することに注意してください。アニメーションがタイムラインに沿って移動するにつれて、 `subject` は成長していきます。逆に、上にスクロールされるとアニメーションは逆方向へ進み、上から 50% で始まり、アニメーションを逆方向へ移動し、下から 10% で終わります。つまり、アニメーションが逆方向に進むにつれて、 `subject` は縮小していきます。

覚えておくべき重要な点は、アニメーションは `subject` 要素が `50% 10%` インセット値を使用してオフセットされるように設定されたビューにある限り続くということです。

```css
.animation {
  animation-timeline: view(block 50% 10%);

  animation-name: grow;
  animation-fill-mode: both;
  animation-duration: 1ms; /* Firefox では、アニメーションを適用するために必要 */
  animation-timing-function: linear;
}

@keyframes grow {
  from {
    transform: scaleX(0);
  }

  to {
    transform: scaleX(1);
  }
}
```

#### 結果

主体要素のアニメーションはスクロールしてご覧ください。

{{EmbedLiveSample("Setting an anonymous view progress timeline", "100%", "480px")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS スクロール駆動アニメーション](/ja/docs/Web/CSS/Guides/Scroll-driven_animations)
- [CSS アニメーションの使用](/ja/docs/Web/CSS/Guides/Animations/Using)
- [`animation-timeline`](/ja/docs/Web/CSS/Reference/Properties/animation-timeline)
