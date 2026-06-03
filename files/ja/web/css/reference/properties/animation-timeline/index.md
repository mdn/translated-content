---
title: animation-timeline
slug: Web/CSS/Reference/Properties/animation-timeline
l10n:
  sourceCommit: f6b253c16e6b1b9fe568c082a6f9f9bbd18a1c5d
---

**`animation-timeline`** は [CSS](/ja/docs/Web/CSS) のプロパティで、 CSS アニメーションの進行を制御するのに使われるタイムラインを指定します。

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

`animation-timeline` プロパティは、カンマ区切りで指定する 1 つ以上の値で構成され、それぞれの値は以下のいずれかです。

- `none`
  - : アニメーションはタイムラインに関連付けられません。

- `auto`
  - : アニメーションのタイムラインはこの文書の既定の {{domxref("DocumentTimeline")}} です。

- {{cssxref("animation-timeline/scroll", "scroll()")}}
  - : ルート要素、直近のスクローラー、またはそれ自身を無名スクロール進行タイムラインとして定義し、またオプションでスクローラーのスクロール軸を定義します。

- {{cssxref("animation-timeline/view", "view()")}}
  - : 直近の祖先のスクロールコンテナーを無名ビュー進行タイムラインとして定義し、オプションで、デフォルトの `baseline` 軸方向と `auto` の開始・終了インセットを上書きします。

- `<dashed-ident>`
  - : {{cssxref('scroll-timeline-name')}} または {{cssxref('view-timeline-name')}} プロパティ（または {{cssxref('scroll-timeline')}} または {{cssxref('view-timeline')}} 一括指定プロパティ）で以前に宣言された、スクロール駆動またはビュー進行タイムラインの名前です。

## 解説

CSS キーフレームアニメーションのデフォルトのタイムラインは、時間ベースの {{domxref("DocumentTimeline")}} です。`animation-timeline` プロパティを使用することで、名前付きまたは無名のスクロール進行またはビュー進行のタイムラインを設定することができます。あるいは、要素のアニメーションの進行を制御するために、明示的にデフォルトの時間ベースの文書タイムラインを設定したり、タイムラインをまったく設定しないこともできます（この場合、要素はアニメーションしません）。

以下の種類のタイムラインを `animation-timeline` で設定することができます。

- {{domxref("DocumentTimeline")}}
  - : デフォルトの文書タイムラインで、文書が最初にブラウザー内に読み込まれてからの時間を渡すことで進行します。これは伝統的に CSS アニメーションと関連付けられているタイムラインであり、`auto` の値で選択するか、 `animation-timeline` の値をまったく指定しない場合に選択されます。
- [スクロール進行タイムライン](/ja/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#スクロール進行タイムライン)
  - : スクロール可能な要素（スクローラー）を上下（または左右）にスクロールすることで進行します。スクロール進行のタイムラインを提供する要素は、2 つの方法で指定することができます。
    - [名前付きスクロール進行タイムライン](/ja/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#名前付きスクロール進行タイムライン)
      - : スクローラーの {{cssxref("scroll-timeline-name")}} プロパティ（または {{cssxref("scroll-timeline")}} の一括指定プロパティ）に {{cssxref("dashed-ident")}} を指定して、明示的に名前を指定します。そして、その `<dashed-ident>` の名前をその `animation-timeline` プロパティの値として設定します。
    - [無名スクロール進行タイムライン](/ja/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#無名スクロール進行タイムライン)
      - : アニメーションさせる要素の `animation-timeline` プロパティに {{cssxref("animation-timeline/scroll", "scroll()")}} 関数を設定します。この関数の 2 つのオプション引数は、スクロール進行タイムラインを指定するスクローラーと、使用するスクロール軸を定義します。
- [ビュー進行タイムライン](/ja/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#ビュー進行タイムライン)
  - : スクローラー内の要素（主体 (_Subject_) と呼ばれる）の可視性の変化に基づいて進行します。既定では、スクローラーの一方の端に最初に主体が表示されたときにタイムラインは `0%` になり、反対側の端に到達したときに `100%` になります。ビュー進行タイムラインは、2 つの方法で指定することができます。
    - [名前付きビュー進行タイムライン](/ja/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#名前付きビュー進行タイムライン)
      - : {{cssxref("view-timeline-name")}} プロパティ（または {{cssxref("view-timeline")}} の一括指定プロパティ）を `<dashed-ident>` に設定することで、主体の名前を明示的に指定します。要素の `animation-timeline` プロパティをアニメーション対象の `<dashed-ident>` に設定すると、主体の可視性が要素のアニメーション進行を制御します。なお、アニメーション対象の要素が主体と同一である必要はありません。
    - [無名ビュー進行タイムライン](/ja/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#無名ビュー進行タイムライン_view_関数)
      - : 要素の `animation-timeline` プロパティに {{cssxref("animation-timeline/view", "view()")}} 関数を設定すると、直近のスクローラーのスクロール領域内での可視性に基づいてアニメーションが実行されるようになります。
- タイムラインなし
  - : すべてのアニメーションタイムラインは、`none` の値を選択することで除去することが可能です。`animation-timeline: none` が設定された場合、従うべきタイムラインがなくなるので、アニメーションは発生しなくなります。

`animation-timeline` はリセット専用の値として {{cssxref("animation")}} 一括指定に含められています。これは、 `animation` を記載することで、前回宣言した `animation-timeline` の値を `auto` にリセットすることは意味していますが、 `animation` によって固有の値を設定することはできません。[CSS スクロール駆動アニメーション](/ja/docs/Web/CSS/Guides/Scroll-driven_animations)を作成する際には、 `animation` の一括指定を宣言した後に、 `animation-timeline` を宣言しなければ、その値が有効になりません。

複数の値をカンマ区切りで指定した場合、それぞれの `animation-timeline` 値は、{{cssxref("animation-name")}} の値が現れる順序で、単一のアニメーションに適用されます。`animation-timeline` 宣言の値の数が `animation-name` の値の数よりも多い場合、余分なタイムライン値は無視されます。`animation-timeline` の値が `animation-name` の値より少ない場合、`animation-timeline` の値は順番に繰り返し適用され、すべての `animation-name` に関連付けられたタイムラインが割り当てられるまで続きます。

2 つ以上のタイムラインが同じ `<dashed-ident>` 名と同一の詳細度を持つ場合、カスケード内で最後に宣言されたものが使用されます。`animation-timeline` に記載された名前に一致するタイムラインが見つからない場合、その値に関連付けられた `animation-name` はタイムラインに関連付けられません。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的な例

この例は、`animation-timeline` プロパティの基本的な使用法と、`none`、`auto`、およびデフォルト値 (`auto`) を示しています。

#### HTML

{{htmlelement("article")}} に 3 つの {{htmlelement("section")}} の子があります。それぞれの `<section>` は固有の `id` と子の {{htmlelement("div")}} が 1 つあります。

```html
<article>
  <section id="none">
    <div></div>
  </section>
  <section id="auto">
    <div></div>
  </section>
  <section id="default">
    <div></div>
  </section>
</article>
```

#### CSS

[フレックスボックスレイアウト](/ja/docs/Web/CSS/Guides/Flexible_box_layout)を使用して、 3 つのセクションが横に並ぶように設定します。`id `を表示させるために[生成コンテンツ](/ja/docs/Web/CSS/Guides/Generated_content)を利用しています。すべての要素に同じスタイル設定を適用し、要素を 1 回転させる `rotate` の {{cssxref("@keyframes")}} アニメーションを適用します。{{cssxref("animation")}} 一括指定を使用して、`rotate` アニメーションを無限回数、2 秒間で、直線的に進行する反復処理として宣言し、アニメーションごとに交互に方向を切り替えます。

```css
article {
  display: flex;
  gap: 10px;
  text-align: center;
}
section {
  background-color: beige;
  padding: 20px;
}
section::after {
  content: attr(id);
  display: block;
}
div {
  height: 100px;
  width: 100px;
  background-color: magenta;
  animation: rotate 2s infinite alternate linear;
}
@keyframes rotate {
  to {
    rotate: 1turn;
  }
}
```

それぞれの `<div>` における唯一の違いは、`animation-timeline` 宣言のみです（`default` には宣言がありません）。

```css
#none div {
  animation-timeline: none;
}
#auto div {
  animation-timeline: auto;
}
```

```css hidden
@layer no-support {
  @supports not (animation-timeline: none) {
    body::before {
      content: "Your browser doesn't support the `animation-timeline` property";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1em;
    }
  }
}
```

`animation-timeline` プロパティは、{{cssxref("animation")}} 一括指定にはリセット専用値として含まれているため、適用されるには `animation` 一括指定の後に記述するか、 `animation` 一括指定よりも高い詳細度で適用する必要があります。

#### 結果

{{EmbedLiveSample("basic usage", "100%", "170px")}}

`auto` を宣言すると、`animation-timeline` がデフォルトでその値に設定されるのと同じ効果があります。また、`none` を指定すると要素からすべてのタイムラインが除去されるため、`none` の場合アニメーションは一切発生しません。

### 名前付きスクロール進行タイムラインの設定

この例では、アニメーションタイムラインを水平スクロール進行タイムラインに設定します。

#### HTML

コンテナーには 3 つのストレッチャー要素が含まれており、これによってコンテナーが確実にスクロールコンテナーになるようにします。中央の要素にはアニメーションを適用する図形が含まれています。

```html live-sample___named_scroll live-sample___anonymous_scroll
<div id="container">
  <div class="stretcher"></div>
  <div class="stretcher">
    <div id="shape"></div>
  </div>
  <div class="stretcher"></div>
</div>
```

#### CSS

コンテナーをフレックスコンテナーとして定義し、コンテナーの {{cssxref("width")}} を、そのフレックス子要素の合計幅の半分に設定します。{{cssxref("overflow-x")}} の値を `scroll` に設定することで、水平スクロールバーが設けられます。

{{cssxref("scroll-timeline-name")}} および {{cssxref("scroll-timeline-axis")}} プロパティで定義されたスクロール進行タイムラインは、`--square-timeline` と名付けられてます。このタイムラインは、`#square` 要素に `animation-timeline: --square-timeline` を使用して適用されます。

```css live-sample___named_scroll live-sample___anonymous_scroll
#container {
  display: flex;
  width: 300px;
  border: 1px solid;

  overflow-x: scroll;
  scroll-timeline-axis: inline;
  scroll-timeline-name: --square-timeline;
}

.stretcher {
  flex: 0 0 200px;
}
```

以下の CSS は、`animation-timeline` プロパティによって指定されたタイムライン（以上で定義された `--square-timeline`）に従い、交互の方向に回転させる正方形を定義します。アニメーションはビューポートを通過する際に、交互の方向で 2 回発生するように設定されています。アニメーション効果をより明確にするため、[角のノッチ加工](/ja/docs/Web/CSS/Reference/Properties/corner-shape)を追加しました。

```css live-sample___named_scroll live-sample___anonymous_scroll
#shape {
  background-color: deeppink;
  width: 100px;
  height: 100px;
  border-radius: 25px;
  corner-shape: notch;

  animation: rotateAnimation 1ms linear 2 alternate;
  animation-timeline: --square-timeline;
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

```css hidden live-sample___named_scroll live-sample___named_view
@layer no-support {
  @supports not (animation-timeline: --square-timeline) {
    body::before {
      content: "このブラウザーは名前付きアニメーションタイムラインに対応していません。";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1em;
    }
  }
}
```

#### 結果

スクロールすると、アニメーションしている主体要素を見ることができます。

{{EmbedLiveSample("named_scroll", "100%", "150px")}}

### 無名スクロール進行タイムラインの設定

この例は前回の例を拡張したもので、`scroll()` 関数を使用して無名関数のスクロール進行タイムラインを適用しています。

#### CSS

前の例の CSS をすべて含み、`animation-timeline` プロパティのみを設定して前回の例の値を上書きします。タイムラインは `scroll(inline nearest)` の値によって指定し、これはスクロールバーを持つ最も近い親要素のインライン方向にあるスクロールバーを選択します。これは `#container` 要素の垂直スクロールバーです。なぜなら `.stretcher` 要素はあふれたコンテンツを持たず、したがってスクロールコンテナーではないからです。

```css live-sample___anonymous_scroll
#shape {
  animation-timeline: scroll(inline nearest);
}
```

```css hidden live-sample___anonymous_scroll
@layer no-support {
  @supports not (animation-timeline: scroll()) {
    body::before {
      content: "Your browser doesn't support the scroll() function.";
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

{{EmbedLiveSample("anonymous_scroll", "100%", "150px")}}

### 名前付きビュー進行タイムラインの設定

この例では、名前付きビュー進行タイムラインを作成して適用する方法を示します。2 つの要素がアニメーション化され、異なる要素がスクロールバーとして機能します。

#### HTML

```html-nolint hidden live-sample___named_view
<main class="scroller">
  <div class="container">
    <h1>Directions</h1>
    <h2>Lincoln Memorial to Martin Luther King, Jr. Memorial</h2>
    <ol>
      <li>Head south on Lincoln Memorial Circle</li>
      <li>Turn right toward Independence Ave</li>
      <li>Turn left onto Independence Ave</li>
      <li>Turn right onto West Basin Dr</li>
      <li>Look up when you reach 64 Independence Ave!</li>
    </ol>
    <section>
```

HTML はスクロール領域内のコンテナー内で大量のテキストを記載していますが、簡潔化のため非表示にしています。このテキストの壁の中央に、2 つの `<div>` 要素を記載します。まず 1 つは要素自体の可視性に基づいて、2 つ目は親要素の可視性に基づいてアニメーションを適用します。

```html live-sample___named_view
<div class="animatedElement self">SELF</div>
<div class="animatedElement parent">PARENT</div>
```

```html-nolint hidden live-sample___named_view
</section>
<h2>Martin Luther King, Jr. Memorial to Lincoln Memorial</h2>
<ol>
  <li>Head north toward Independence Ave SW</li
  ><li>Turn left onto Independence Ave</li
  ><li>Turn right toward the Korean War Veterans Memorial</li
  ><li>Take a photo of the memorial as you walk past it.</li
  ><li>Head north on Lincoln Memorial Circle</li
  ><li>Look up. You can't miss it!</li>
</ol>
  </div>
</main>
```

#### CSS

要素の不透明度と変倍を変更するキーフレームアニメーションを生成し、両方のアニメーションする要素に適用します。

```css live-sample___named_view
@keyframes animationEffect {
  0% {
    opacity: 0;
    scale: 0;
  }
  100% {
    opacity: 1;
    scale: 1;
  }
}

.animatedElement {
  animation: animationEffect 1ms linear;
}
```

`self` 要素は、`view-timeline-name` プロパティを `<dashed-ident>` に設定し、同時にその `<dashed-ident>` 名を `animation-timeline` プロパティの値として設定することで、明示的に自身のスクローラーとして指定されます。`parent` の場合、アニメーションする要素のスクローラーとして `container` を設定します。

```css live-sample___named_view
.self {
  view-timeline-name: --selfScrollerElement;
  animation-timeline: --selfScrollerElement;
}
.container {
  view-timeline-name: --parentScrollerElement;
}
.parent {
  animation-timeline: --parentScrollerElement;
}
```

簡潔にするため、追加の CSS 宣言は省略しました。

```css hidden live-sample___named_view
@layer setup {
  section {
    display: flex;
    gap: 10px;
  }
  main {
    width: 400px;
    padding: 1em;
    height: 300px;
    overflow: scroll;
    border: 1px solid;
    background-color: beige;
    font-family: sans-serif;
  }

  li {
    margin-bottom: 0.75lh;
  }

  .animatedElement {
    height: 200px;
    width: calc(100% - 2em);
    margin: auto;
    background-color: forestgreen;
    background-image:
      repeating-linear-gradient(37deg, transparent 0 52px, beige 52px 57px),
      repeating-linear-gradient(94deg, transparent 0 52px, beige 52px 57px);
    border: 1px solid;
    font-size: 3em;
    place-content: center;
  }
}
```

#### 結果

スクロールすると、アニメーションしている主体要素を見ることができます。

{{EmbedLiveSample("named_view", "100%", "350px")}}

`self` 要素の可視性が自分自身でアニメーションを制御している点に注目してください。この場合、要素の上端がビューポート（スクロール領域の可視部分）に入ると `0%` キーフレームの位置にあり、下端がビューポートから外れるまで `100%` キーフレームの位置に到達しません。

`parent` 要素は、親要素が表示されている場合にのみ可視化されます。つまり、表示領域に入るときには、アニメーションの進捗がすでに約 `25%` であるということです。ビューポートの上端から外れる時点では、アニメーションの進捗はわずか約 `75%` です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("animation")}}, {{cssxref("animation-composition")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}}, {{cssxref("animation-play-state")}}, {{cssxref("animation-timing-function")}}
- {{cssxref("scroll-timeline-name")}}, {{cssxref("scroll-timeline-axis")}}, {{cssxref("scroll-timeline")}}
- {{cssxref("view-timeline-name")}}, {{cssxref("view-timeline-axis")}}, {{cssxref("view-timeline")}}, {{cssxref("view-timeline-inset")}}
- {{domxref("AnimationTimeline")}}
- [ガイド: CSS アニメーションの使用](/ja/docs/Web/CSS/Guides/Animations/Using)
- [CSS アニメーション](/ja/docs/Web/CSS/Guides/Animations)モジュール
- [CSS スクロール駆動アニメーション](/ja/docs/Web/CSS/Guides/Scroll-driven_animations)
