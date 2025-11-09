---
title: animation-timeline
slug: Web/CSS/Reference/Properties/animation-timeline
original_slug: Web/CSS/animation-timeline
l10n:
  sourceCommit: 9231a7046973685f4600e1891fa644ecce41ef3b
---

{{SeeCompatTable}}

**`animation-timeline`** は [CSS](/ja/docs/Web/CSS) のプロパティで、 CSS アニメーションの進行を制御するのに使われるタイムラインを指定します。

以下の種類のタイムラインを `animation-timeline` で設定することができます。

- 既定では文書のタイムラインで、文書が最初にブラウザー内に読み込まれてからの時刻を渡すことで進行します。これは伝統的に CSS アニメーションと関連付けられているタイムラインであり、`auto` の値で選択するか、 `animation-timeline` の値をまったく指定しません。
- スクロール進行タイムライン (_scroll progress timeline_) は、スクロール可能な要素 (_scroller_) を上下（または左右）にスクロールすることで進行します。スクロール範囲における位置は、開始には0%、終わりには100%というように、進行のパーセント値に変換されます。スクロール進行のタイムラインを提供する要素は、 2 つの方法で指定することができます。
  - 名前付きスクロール進行タイムライン (_named scroll progress timeline_) とは、スクロール進行タイムラインを提供するスクローラーに、 {{cssxref("scroll-timeline-name")}} プロパティ（または {{cssxref("scroll-timeline")}} の一括指定プロパティ）を用いて明示的に名前を指定したものです。そして、その名前を要素の `animation-timeline` プロパティの値として指定することで、アニメーションさせる要素にリンクします。
  - 無名スクロール進行タイムライン (_anonymous scroll progress timeline_) とは、アニメーションさせる要素に {{cssxref("animation-timeline/scroll", "scroll()")}} 関数を `animation-timeline` 値として指定されたもので、渡す引数に基づいて使用するスクロール進行タイムラインとスクロール軸を提供するスクローラーを選択します。
- ビュー進行タイムライン (_view progress timeline_) は、スクローラー内の要素（主体 (_Subject_) と呼ばれる）の可視性の変化に基づいて進行します。既定では、スクローラーの一方の端に最初に主体が表示されたときにタイムラインは 0% になり、反対側の端に到達したときに 100% になります。スクロール進行タイムラインとは異なり、スクローラーを指定することはできません。被写体の可視性は常に最も近い祖先のスクローラー内で追跡されます。ビュー進行タイムラインを提供する主体は、2 つの方法で指定します。
  - 名前付きビュー進行タイムラインは、 {{cssxref("view-timeline-name")}} プロパティ（または {{cssxref("view-timeline")}} の一括指定プロパティ）を用いて主題の名前を明示的に指定するものです。そして、その名前を要素の `animation-timeline` プロパティの値として指定することで、アニメーションさせる要素にリンクします。これは重要な点です。名前付きビュー進行タイムラインでは、アニメーションさせる要素は被写体と同じである必要はありません。
  - 無名ビュー進行タイムラインとは、 {{cssxref("animation-timeline/view", "view()")}} 関数を `animation-timeline` 値として指定され、最も近い親スクローラー内の位置に基づいてアニメーションが発生させられるものです。

> [!NOTE]
> `animation-timeline` はリセット専用の値として {{cssxref("animation")}} 一括指定に含められています。これは、 `animation` を記載することで、前回宣言した `animation-timeline` の値を `auto` にリセットすることは意味していますが、 `animation` によって固有の値を設定することはできません。[CSS スクロール駆動アニメーション](/ja/docs/Web/CSS/Guides/Scroll-driven_animations)を作成する際には、 `animation` の一括指定を宣言した後に、 `animation-timeline` を宣言しなければ、その値が有効になりません。

<!-- {{EmbedInteractiveExample("pages/css/animation-name.html")}} -->

## 構文

```css
/* 単一のアニメーション */
animation-timeline: none;
animation-timeline: auto;

/* 単一のアニメーション名付きタイムライン */
animation-timeline: --timeline_name;

/* 単一のアニメーション無名スクロール進行タイムライン */
animation-timeline: scroll();
animation-timeline: scroll(scroller axis);

/* 単一のアニメーション無名ビューの進行タイムライン */
animation-timeline: view();
animation-timeline: view(axis inset);

/* 複数のアニメーション */
animation-timeline: --progressBarTimeline, --carouselTimeline;
animation-timeline: none, --slidingTimeline;

/* グローバル値 */
animation-timeline: inherit;
animation-timeline: initial;
animation-timeline: revert;
animation-timeline: revert-layer;
animation-timeline: unset;
```

### 値

- `none`
  - : アニメーションはタイムラインに関連付けられません。
- `auto`
  - : アニメーションのタイムラインはこの文書の既定の [DocumentTimeline](/ja/docs/Web/API/DocumentTimeline) です。

- `scroll()`
  - : 無名スクロール進行タイムラインは、現在の要素の祖先スクローラーによって指定されます。関数の引数でスクローラーを選択し、タイムラインが測定されるスクロール軸を選択することができます。

    詳しくは {{cssxref("animation-timeline/scroll", "scroll()")}} を参照してください。

- `view()`
  - : 無名ビュー進行タイムラインは、`animation-timeline: view();`が設定された主体から提供されます。関数の引数では、タイムラインの進行が追跡されるスクロールバーの軸と、主体が表示されているとみなされるボックスの位置を調整するインセットを選択できます。

    詳しくは {{cssxref("animation-timeline/view", "view()")}} を参照してください。

- `<dashed-ident>`
  - : {{cssxref('scroll-timeline-name')}} または {{cssxref('view-timeline-name')}} プロパティ（または {{cssxref('scroll-timeline')}} または {{cssxref('view-timeline')}} 一括指定プロパティ）で前回宣言された名前付きタイムラインを識別する {{cssxref('dashed-ident')}} です。

    > [!NOTE]
    > 2 つ以上のタイムラインが同じ名前を持っている場合、カスケード内で最後に宣言されたものが使用されます。また、指定された名前に一致するタイムラインが見つからない場合、アニメーションはタイムラインに関連付けられません。

    > [!NOTE]
    > [`<dashed-ident>`](/ja/docs/Web/CSS/Reference/Values/dashed-ident) 値は `--` で始まる必要があります。これにより、標準 CSS キーワードとの名前の衝突を避けることができます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 単純な例

`--squareTimeline` という名前のスクロール進行タイムラインは、 `id` が `container` である要素の `scroll-timeline-name` プロパティを使用して定義します。
これは `animation-timeline: --squareTimeline` を使用して `#square` 要素のアニメーションのタイムラインとして設定します。

#### HTML

例の HTML は下記の通りです。

```html
<div id="container">
  <div id="square"></div>
  <div id="stretcher"></div>
</div>
```

#### CSS

コンテナーの CSS では、`--squareTimeline` という名前のスクロール進行タイムラインのソースとして、`scroll-timeline-name` プロパティを使用して設定しています（どのスクロールバーの軸を使用するかは {{cssxref("scroll-timeline-axis")}} で明示的に設定することができますが、ここではブロック方向のスクロールバーしかないので、既定ではそれが使用されます）。

コンテナーの高さは 300px に設定し、コンテナーがはみ出した場合に垂直スクロールバーを作成するようにも設定しています（下記では、"stretcher" 要素に CSS を使用して、はみ出した場合に確実に保持するようにしています）。

```css
#container {
  height: 300px;
  overflow-y: scroll;
  scroll-timeline-name: --squareTimeline;
  position: relative;
}
```

下記の CSS では、 `animation-timeline` プロパティで指定されたタイムラインに従って、交互に回転する正方形を定義しています（設定するには `--squareTimeline` タイムラインを使用します）。

```css
#square {
  background-color: deeppink;
  width: 100px;
  height: 100px;
  margin-top: 100px;
  animation-name: rotateAnimation;
  animation-duration: 1ms; /* Firefox では、アニメーションを適用するために必要 */
  animation-direction: alternate;
  animation-timeline: --squareTimeline;

  position: absolute;
  bottom: 0;
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

"stretcher" の CSS はブロックの高さを 600px に設定し、コンテナー要素をオーバーフローさせ、スクロールバーを作成します。
この要素がなければスクロールバーが現れず、したがってアニメーションタイムラインに関連付けるスクロール進行タイムラインもなくなります。

```css
#stretcher {
  height: 600px;
}
```

#### 結果

スクロールすると、正方形の要素がアニメーションします。

{{EmbedLiveSample("Setting a named scroll progress timeline", "100%", "320px")}}

### 無名スクロール進行タイムラインの設定

この例では、 `#square` 要素は `scroll()` 関数を使ってアニメーションする要素に使用する、無名スクロール進行タイムラインを使ってアニメーションします。
この具体的な例でのタイムラインは、ブロック方向のスクロールバーから、（任意の）スクロールバーを持つ最も近い親要素によって指定されたものです。

#### HTML

例の HTML は下記で表示させます。

```html
<div id="container">
  <div id="square"></div>
  <div id="stretcher"></div>
</div>
```

#### CSS

下記の CSS では、 `animation-timeline` プロパティで指定されたタイムラインに従って、交互に回転する正方形を定義しています。
この場合、タイムラインは `scroll(block nearest)` によって指定されます。これは、スクロールバーを持つ最も近い祖先要素のブロック方向のスクロールバーを選択することを意味しています。

> [!NOTE]
> 実は `block` と `nearest` が既定値の引数なので、`scroll()` だけを使用することができました。

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
この 2 つを組み合わせることで、コンテナーに垂直スクロールバーが確実に設置され、無名スクロール進行タイムラインのソースとして使用することができます。

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

### 名前付きビュー進行タイムラインの設定

`view-timeline-name` プロパティを使用して、`--subjectReveal` という名前のビュー進行タイムラインを `class` が `animation` の主体要素に定義します。
これを同じ要素のタイムラインとして設定するには `animation-timeline: --subjectReveal;` を使用します。その結果、主体要素は文書がスクロールされるにつれて上方向に移動するアニメーションが表示されます。

#### HTML

例の HTML は下記で表示させます。

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

  <div class="subject animation"></div>

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
```

#### CSS

`subject` 要素とそのコンテンツを含む `content` 要素は最小限のスタイル設定で、テキストコンテンツには基本的なフォント設定をしています。

```css
.subject {
  width: 300px;
  height: 200px;
  margin: 0 auto;
  background-color: deeppink;
}

.content {
  width: 75%;
  max-width: 800px;
  margin: 0 auto;
}

p,
h1 {
  font-family: Arial, Helvetica, sans-serif;
}

h1 {
  font-size: 3rem;
}

p {
  font-size: 1.5rem;
  line-height: 1.5;
}
```

`subject` クラスを持つ `<div>` には `animation` クラスも指定されています。ここで {{cssxref("view-timeline-name")}} を設定するには、名前付きのビュー進行タイムラインを定義します。また、同じ値で `animation-timeline` 名も指定され、ビュー進行タイムラインの進行に合わせてアニメーションする要素であることを宣言します。

最後に、要素の不透明度と変倍をアニメーションで指定し、スクロール移動されるたびにフェードインしたり変倍させたりします。

```css
.animation {
  view-timeline-name: --subjectReveal;
  animation-timeline: --subjectReveal;

  animation-name: appear;
  animation-fill-mode: both;
  animation-duration: 1ms; /* Firefox では、アニメーションを適用するために必要 */
}

@keyframes appear {
  from {
    opacity: 0;
    transform: scaleX(0);
  }

  to {
    opacity: 1;
    transform: scaleX(1);
  }
}
```

#### 結果

スクロールすると、アニメーションしている主体要素を見ることができます。

{{EmbedLiveSample("Setting a named view progress timeline", "100%", "480px")}}

### 無名ビュー進行タイムラインの設定

クラス `subject` を持つ要素に `animation-timeline: view()` を用いて無名進行タイムラインを設定します。その結果、 `subject` 要素は文書化されたものをスクロールしながら上方向に移動するアニメーションが表示されます。

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

  <div class="subject animation"></div>

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
```

#### CSS

`subject` 要素とそのコンテンツを含む `content` 要素は最小限のスタイル設定で、テキストコンテンツには基本的なフォント設定をしています。

```css
.subject {
  width: 300px;
  height: 200px;
  margin: 0 auto;
  background-color: deeppink;
}

.content {
  width: 75%;
  max-width: 800px;
  margin: 0 auto;
}

p,
h1 {
  font-family: Arial, Helvetica, sans-serif;
}

h1 {
  font-size: 3rem;
}

p {
  font-size: 1.5rem;
  line-height: 1.5;
}
```

`subject` クラスを持つ `<div>` には `animation` クラスも指定されています。ここで `animation-timeline: view()` が設定され、スクロールする祖先（文書内のルート要素）が指定された進行タイムラインに沿ってアニメーションすることを宣言します。

最後に、要素の不透明度と変倍をアニメーションで指定し、スクロール移動されるたびにフェードインしたり変倍させたりします。

```css
.animation {
  animation-timeline: view();

  animation-name: appear;
  animation-fill-mode: both;
  animation-duration: 1ms; /* Firefox では、アニメーションを適用するために必要 */
}

@keyframes appear {
  from {
    opacity: 0;
    transform: scaleX(0);
  }

  to {
    opacity: 1;
    transform: scaleX(1);
  }
}
```

#### 結果

スクロールすると、アニメーションしている主体要素を見ることができます。

{{EmbedLiveSample("Setting an anonymous view progress timeline", "100%", "480px")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("animation")}}, {{cssxref("animation-composition")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}}, {{cssxref("animation-play-state")}}, {{cssxref("animation-timing-function")}}
- {{cssxref("scroll-timeline-name")}}, {{cssxref("scroll-timeline-axis")}}, {{cssxref("scroll-timeline")}}
- {{cssxref("timeline-scope")}}
- {{cssxref("view-timeline-name")}}, {{cssxref("view-timeline-axis")}}, {{cssxref("view-timeline")}}, {{cssxref("view-timeline-inset")}}
- JavaScript で相当するもの: `timeline` プロパティが {{domxref("Element.animate()")}} 呼び出しで利用できます
- [CSS スクロール駆動アニメーション](/ja/docs/Web/CSS/Guides/Scroll-driven_animations)
- [CSS アニメーションの使用](/ja/docs/Web/CSS/Guides/Animations/Using)
