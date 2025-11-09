---
title: スクロールスナップイベントの使用
slug: Web/CSS/Guides/Scroll_snap/Using_scroll_snap_events
original_slug: Web/CSS/CSS_scroll_snap/Using_scroll_snap_events
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

[CSS スクロールスナップ](/ja/docs/Web/CSS/Guides/Scroll_snap)モジュールでは、 2 つの**スクロールスナップイベント**、 {{domxref("Element/scrollsnapchanging_event", "scrollsnapchanging")}} と {{domxref("Element/scrollsnapchange_event", "scrollsnapchange")}} が定義されています。これらは、ブラウザーが新しい[スクロールスナップのターゲット](/ja/docs/Web/CSS/Guides/Scroll_snap/Basic_concepts)がそれぞれ待機中または選択されたと判断したことに応じて、それぞれ JavaScript を実行できるようにします。

このガイドでは、これらのイベントの概要と完全な例を紹介します。

## イベント概要

スクロールスナップイベントは、スクロールスナップの対象となり得るものが含まれている[スクロールコンテナー](/ja/docs/Glossary/Scroll_container)に対して設定されます。

- {{domxref("Element/scrollsnapchanging_event", "scrollsnapchanging")}} イベントは、現在のスクロール操作が終わり、新しいスクロールスナップ対象が選択されるとブラウザーが判断したときに発行されます。これは待機中のスクロールスナップターゲットです。 仕様上、このイベントはスクロール操作中に、ユーザーが新しいスナップターゲット候補に移動するたびに発行されます。 スクロール操作ごとに `scrollsnapchanging` イベントが複数回発生する場合もありますが、複数のスナップターゲットに移動するスクロール操作では、すべてのスナップターゲット候補に対してイベントが発生するわけではありません。 むしろ、最後にスナップが確定する可能性のあるターゲットに対してのみイベントが発生します。

- {{domxref("Element/scrollsnapchange_event", "scrollsnapchange")}} イベントは、スクロール操作の終わりに新しいスクロールスナップのターゲットが選択された際に発行されます。 具体的には、このイベントはスクロール操作が完了した際に発行されますが、新しいスナップのターゲットが選択された場合のみです。 このイベントは、 {{domxref("Element/scrollend_event", "scrollend")}} イベントが発行される直前に発行されます。

実際に 2 つのイベントを表示させる例を見ていきましょう（この記事の後半で、このイベントがどのように構築されるかを見ていきます）。

{{ EmbedLiveSample("One-dimensional scroller example", "100%", "500") }}

掲載されているボックスのリストを上下にスクロールしてみてください。

- スクロールのジェスチャーを離さずに、コンテナー内でゆっくりと上下にスクロールしてみてください。例えば、タッチ画面の端末やトラックパッドのスクロールエリア上で指をドラッグしたり、スクロールバー上でマウスボタンを押し下げたままマウスを移動させたりしてみてください。ボックスの上に移動すると、ボックスの色が濃い灰色に変わり、ボックスから離れると元の色に戻ります。これが、 `scrollsnapchanging` イベントの動作です。
- 次に、スクロール操作を解除してみてください。スクロール位置の最も近いボックスが紫色に変わり、テキストが白くなります。このアニメーションは、 `scrollsnapchange` イベントが発生したときに発生します。
- 最後に、高速スクロールを試してみてください。例えば、画面に強く指を弾くようにして、いくつかの潜在的なターゲットを渡すと、スクロールコンテナー内でさらに下のターゲット付近で静止し始めます。スクロールが遅くなり始める際に、 `scrollsnapchanging` イベントが 1 回だけ発行され、その後、 `scrollsnapchange` イベントが発行され、選択したスナップ対象が紫色に変わります。

## `SnapEvent` イベントオブジェクト

上記 2 つのイベントは、 {{domxref("SnapEvent")}} イベントオブジェクトを共有しています。ここには、スクロールスナップイベントがどのように動作するかを示す 2 つのプロパティがあります。

- {{domxref("SnapEvent.snapTargetBlock", "snapTargetBlock")}} は、イベントが発行された際に、[ブロック方向](/ja/docs/Glossary/Flow_relative_values#ブロック方向)にスナップされた要素への参照を返します。または、スクロールスナップがインライン方向のみに発生し、ブロック方向にスナップされる要素がない場合は `null` を返します。
- {{domxref("SnapEvent.snapTargetInline", "snapTargetInline")}} は、イベントが発行された際に、[インライン方向](/ja/docs/Glossary/Flow_relative_values#インライン方向)にスナップされた要素への参照を返します。または、スクロールスナップがブロック方向のみに発生し、インライン方向にスナップされる要素がない場合は `null` を返します。

これらのプロパティにより、イベントハンドラー関数は、スナップされた要素（`scrollsnapchange` の場合）またはスクロール操作がこれで完了した場合にスナップされるはずである要素（`scrollsnapchanging` の場合）を、 1 次元および 2 次元で報告することができます。例えば、 {{domxref("HTMLElement.style", "style")}} プロパティを使用してスタイルを直接設定したり、このスタイルシートはスタイルを定義しているクラスを設定したりするなど、これらの要素を任意の方法で操作することができます。

### CSS `scroll-snap-type` との関連

`SnapEvent` で利用できるプロパティ値は、スクロールコンテナーで設定された CSS の {{cssxref("scroll-snap-type")}} プロパティの値に直接対応しています。

- スナップ軸を `block`（または現在の書字方向で `block` と等価な物理軸値）として指定した場合、`snapTargetBlock` のみ要素参照を返します。
- スナップ軸を `inline`（または現在の書き込みモードで `inline` と同等となる物理軸値）として指定した場合、`snapTargetInline` のみ要素参照を返します。
- スナップ軸を `both` と指定した場合、`snapTargetBlock` と `snapTargetInline` は要素参照を返します。

### 1 次元のスクローラーの処理

水平スクロールバーを扱っている場合、コンテンツの {{cssxref("writing-mode")}} が横書きである場合は、スナップされた要素が変更されると、イベントオブジェクトの `snapTargetInline` プロパティのみが変更され、 `writing-mode` が縦書きである場合は、 `snapTargetBlock` プロパティが変更されます。

逆に、垂直スクローラーを扱う場合は、コンテンツの書字方向が横書きに指定されている場合はスナップされた要素が変更されると `snapTargetBlock` プロパティのみが変更され、コンテンツの書字方向に縦書が指定されている場合は `snapTargetInline` プロパティが変更されます。

どちらの場合も、両者の変化しないというプロパティは `null` です。

例えば、典型的な 1 次元スクロールのスナップイベントハンドラー関数を表示させてみましょう。

```js
scrollingElem.addEventListener("scrollsnapchange", (event) => {
  event.snapTargetBlock.className = "select-section";
});
```

このスニペットでは、スナップターゲットが内部に表示されるブロック方向のスクロールコンテナー要素に、 `scrollsnapchange` ハンドラー関数が設定されています。イベントが発行されると、 `snapTargetBlock` 要素に `select-section` クラスが設定されます。このクラスは、新たに選択されたスナップターゲットを、選択されたように見せるスタイル設定に使用することができます（例えば、アニメーションを使用するなど）。

### 2 次元のスクローラーの処理

横書きと縦書きのスクロールを扱う場合は、コードが複雑になります。これは、 `snapTargetBlock` プロパティと `snapTargetInline` プロパティの値がどちらも要素の参照を返すためです（どちらも `null` を返すことはありません）。また、どちらも、スクロールの方向とコンテンツの `writing-mode` によって値が変更されます。

- スクローラーが水平方向にスクロールする場合、コンテンツの {{cssxref("writing-mode")}} が横書きである場合は、スナップされた要素が変更されると `snapTargetInline` プロパティが変更され、コンテンツの `writing-mode` が縦書きである場合は `snapTargetBlock` プロパティが変更されます。
- スクローラーが垂直方向にスクロールする場合、コンテンツの {{cssxref("writing-mode")}} が横書きである場合は、スナップされた要素が変更されると `snapTargetBlock` プロパティが変更され、コンテンツの `writing-mode` が縦書きである場合は `snapTargetInline` プロパティが変更されます。

これに対処するには、`snapTargetBlock` 要素と `snapTargetInline` 要素のどちらが変更されたのかを追跡する必要があるでしょう。 例を見てみましょう。

```js
const prevState = {
  snapTargetInline: "s1",
  snapTargetBlock: "s1",
};

scrollingElem.addEventListener("scrollsnapchange", (event) => {
  if (!(prevState.snapTargetBlock === event.snapTargetBlock.id)) {
    console.log(
      `コンテナーはブロック方向に要素 ${event.snapTargetBlock.id} までスクロールしました`,
    );
  }

  if (!(prevState.snapTargetInline === event.snapTargetInline.id)) {
    console.log(
      `コンテナーはインライン方向に要素 ${event.snapTargetBlock.id} までスクロールしました`,
    );
  }

  prevState.snapTargetBlock = event.snapTargetBlock.id;
  prevState.snapTargetInline = event.snapTargetInline.id;
});
```

このスニペットでは、まず、前の `snapTargetBlock` および `snapTargetInline` 要素の ID を持つるオブジェクト (`prevState`) を定義します。

イベントハンドラー関数では、 `if` 文を使用して、以下を検査します。

- `prevState.snapTargetBlock` の ID が現在の `event.snapTargetBlock` 要素の ID であること。
- `prevState.snapTargetInline` の ID が現在の `event.snapTargetInline` 要素の ID であること。

値が異なる場合、スクロールバーがその方向（ブロックまたはインライン）にスクロールされたということになり、そのことを示すメッセージをコンソールにログ出力します。例えば、スナップされた要素を何らかの方法でスタイル設定し、スナップされたことを示すことができます。

それから、 `prevState.snapTargetBlock` および `prevState.snapTargetInline` の値を更新し、イベントハンドラーが次に実行されたときのための準備をします。

この記事の残りの部分では、スクロールスナップが完了したときのイベントの例をいくつか見ていきます。それぞれの節の終わりにあるライブレンダリング版で実際に試すことができます。

## 1 次元のスクローラーの例

この例では、垂直スクロールする {{htmlelement("main")}} 要素に複数の明るい灰色の {{htmlelement("section")}} 要素が含まれており、これらはすべてスクロールスナップのターゲットとなっています。新しいスナップターゲットが待機状態になると、濃い灰色に変わります。新しいスナップターゲットが選択されると、白いテキストとともにスムーズに紫色にアニメーションします。前回選択されていたスナップターゲットが異なる場合は、黒いテキストとともにスムーズに灰色に戻ります。

### HTML

この例の HTML は単一の `<main>` 要素です。ページの容量を節約するために、後で JavaScript で `<section>` 要素を動的に追加します。

```html live-sample___one-dimensional_scroller_example
<main></main>
```

### CSS

```css hidden live-sample___one-dimensional_scroller_example
* {
  box-sizing: border-box;
}

html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
}

h2 {
  font-size: 1rem;
  letter-spacing: 1px;
}

section {
  font-family: Arial, Helvetica, sans-serif;
  border-radius: 5px;
  background: #eee;
  box-shadow:
    inset 1px 1px 4px rgb(255 255 255 / 0.5),
    inset -1px -1px 4px rgb(0 0 0 / 0.5);
  width: 150px;
  height: 150px;

  display: flex;
  align-items: center;
  justify-content: center;
}
```

CSS では、まず `<main>` 要素に太い黒の {{cssxref("border")}} と固定された {{cssxref("width")}} および {{cssxref("height")}} を設定します。 また、 {{cssxref("overflow")}} の値を `scroll` に設定し、コンテンツがはみ出した場合は非表示にしてスクロールできるようにします。さらに、 {{cssxref("scroll-snap-type")}} を `block mandatory` に設定し、ブロック方向のスナップターゲットのみが常にスナップされるようにします。

```css live-sample___one-dimensional_scroller_example
main {
  border: 3px solid black;
  width: 250px;
  height: 450px;
  overflow: scroll;
  scroll-snap-type: block mandatory;
}
```

それぞれの `<section>` 要素には、 {{cssxref("margin")}} が `50px` で与えられており、 `<section>` 要素を区切り、スクロールの吸着動作をより明確にさせています。次に、 {{cssxref("scroll-snap-align")}} を `center` に設定し、各吸着ターゲットの中心に吸着させたいことを指定します。最後に、吸着ターゲットが選択された、または選択待ちの状態になった際に適用されるスタイル変更をスムーズにアニメーション化するために、 {{cssxref("transition")}} を適用します。

```css live-sample___one-dimensional_scroller_example
section {
  margin: 50px auto;
  scroll-snap-align: center;
  transition: 0.5s ease;
}
```

上記のスタイル変更は、 `<section>` 要素に適用されるクラスを JavaScript を通じて適用されます。 `select-section` クラスは選択を意味するものとして適用されます。これにより、紫色の背景と白いテキスト色が設定されます。 `pending` クラスは選択待機中のスナップターゲットを意味するものとして適用されます。これにより、選択待機中のターゲットの背景色が濃い灰色に設定されます。

```css live-sample___one-dimensional_scroller_example
.pending {
  background-color: #ccc;
}

.select-section {
  background: purple;
  color: white;
}
```

### JavaScript

JavaScriptでは、まず `<main>` 要素への参照を取得し、生成する `<section>` 要素の数（この場合は21）と、カウントを開始する変数を定義します。次に、 [`while`](/ja/docs/Web/JavaScript/Reference/Statements/while) ループを使用して `<section>` 要素を生成し、各要素に子要素として [`h2`](/ja/docs/Web/HTML/Reference/Elements/Heading_Elements) タグを追加し、そのテキストとして `Section` と現在の `n` の値を表示します。

```js live-sample___one-dimensional_scroller_example
const mainElem = document.querySelector("main");
const sectionCount = 21;
let n = 1;

while (n <= sectionCount) {
  mainElem.innerHTML += `
    <section>
      <h2>Section ${n}</h2>
    </section>
  `;
  n++;
}
```

それでは、 {{domxref("Element/scrollsnapchanging_event", "scrollsnapchanging")}} イベントのハンドラー関数を見てみましょう。 `<main>` 要素の子（すなわち `<section>` 要素すべて）は、待機中のスナップターゲット選択となります。

1. 以前に `pending` クラスが適用されていた要素がないか確認し、該当する場合はそれを削除します。これは、現在の待機中の対象のみに `pending` クラスが適用され、濃い灰色に色付けされるようにするためです。以前待機中だったが、現在は待機中でない対象にスタイルを維持させたくないからです。
2. {{domxref("SnapEvent.snapTargetBlock", "snapTargetBlock")}} プロパティで参照される要素（これは、 `<section>` 要素のうちの 1 つ）に `pending` のクラスを指定すると、濃い灰色に変わります。

```js live-sample___one-dimensional_scroller_example
mainElem.addEventListener("scrollsnapchanging", (event) => {
  const previousPending = document.querySelector(".pending");
  if (previousPending) {
    previousPending.classList.remove("pending");
  }

  event.snapTargetBlock.classList.add("pending");
});
```

> [!NOTE]
> このデモでは、イベントオブジェクトのプロパティである `snapTargetInline` を気にする必要はありません。 なぜなら、このデモでは垂直スクロールのみを使用しており、またデモでは横書きモードを使用しているため、 `snapTargetBlock` の値のみが変更されるからです。 この場合、 `snapTargetInline` は常に `null` を返します。

スクロール操作が終了し、 `<section>` 要素が実際にスナップ先として選択されると、 {{domxref("Element/scrollsnapchange_event", "scrollsnapchange")}} イベントハンドラー関数が実行されます。これは、

1. 前回、スナップ対象が選択されていたかどうか、つまり、前回、 `select-section` クラスが要素に適用されていたかどうかを調べます。 該当する場合は、除去します。
2. `select-section` クラスを `snapTargetBlock` プロパティで参照する `<section>` 要素に適用し、選択されたスナップ対象に選択アニメーションが存在するようにします。

```js live-sample___one-dimensional_scroller_example
mainElem.addEventListener("scrollsnapchange", (event) => {
  const currentlySnapped = document.querySelector(".select-section");
  if (currentlySnapped) {
    currentlySnapped.classList.remove("select-section");
  }

  event.snapTargetBlock.classList.add("select-section");
});
```

### 結果

スクロールコンテナー内で上下にスクロールし、上記で説明されている動作を観察してみてください。

{{ EmbedLiveSample("One-dimensional scroller example", "100%", "500") }}

## 2 次元のスクローラーの例

この例は、複数の明るい灰色の {{htmlelement("section")}} 要素（すべてスナップターゲット）を含む、水平および垂直スクロールの {{htmlelement("main")}} 要素という機能を除いては、前述の例と同様です。

この例の HTML は前回と同じで、単一の `<main>` 要素です。

```html hidden
<main></main>
```

### CSS

```css hidden
* {
  box-sizing: border-box;
}

html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
}

section {
  font-family: Arial, Helvetica, sans-serif;
  border-radius: 5px;
  background: #eee;
  box-shadow:
    inset 1px 1px 4px rgb(255 255 255 / 0.5),
    inset -1px -1px 4px rgb(0 0 0 / 0.5);
  width: 150px;
  height: 150px;

  display: flex;
  align-items: center;
  justify-content: center;

  scroll-snap-align: center;
}

h2 {
  font-size: 1rem;
  letter-spacing: 1px;
}
```

この例の CSS は、前回の例の CSS と類似しています。最も大きな違いは以下の通りです。

最初の `<main>` 要素のスタイルを見てみましょう。 `<section>` 要素をグリッドレイアウトで配置したいので、 [CSS グリッドレイアウト](/ja/docs/Web/CSS/Guides/Grid_layout)を使用して、 7 列で表示されるように、 {{cssxref("grid-template-columns")}} の値に `repeat(7, 1fr)` を使用します。また、 `<section>` 要素の周囲の余白を指定するために、 `<main>` 要素の `padding` と {{cssxref("gap")}} を設定し、 `<section>` 要素のマージンではなくします。

最後に、この例では両方向にスクロールするので、 {{cssxref("scroll-snap-type")}} を `both mandatory` に設定し、ブロック方向とインライン方向のスナップ対象を常にスナップするようにします。

```css
main {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  padding: 100px;
  gap: 50px;
  overflow: scroll;
  border: 3px solid black;
  width: 350px;
  height: 350px;

  scroll-snap-type: both mandatory;
}
```

次に、この例ではトランジションの代わりに CSS アニメーションを使用します。これによりコードは複雑になりますが、適用されるアニメーションをより細かく制御することができます。

最初に、スナップターゲットの選択が行われた、または待機中であることを示すシグナルに適用されるクラスを定義します。 `select-section` クラスと `deselect-section` クラスは、選択または選択解除を示すキーフレームアニメーションを適用します。 `pending` クラスは、待機中のスナップターゲット選択を示すために適用されます（例えば、前回のように、選択部分に濃い灰色の背景を適用します）。

{{cssxref("@keyframes")}} は、それぞれ灰色の背景と黒（既定）のテキスト色から紫色の背景と白のテキスト色にアニメーション化します。後者のアニメーションは最初のものと多少異なります。また、 {{cssxref("opacity")}} を使用してフェードアウト/フェードイン効果を作成します。

```css
.select-section {
  animation: select 0.8s ease forwards;
}

.deselect-section {
  animation: deselect 0.8s ease forwards;
}

.pending {
  background-color: #ccc;
}

@keyframes select {
  from {
    background: #eee;
    color: black;
  }

  to {
    background: purple;
    color: white;
  }
}

@keyframes deselect {
  0% {
    background: purple;
    color: white;
    opacity: 1;
  }

  80% {
    background: #eee;
    color: black;
    opacity: 0.1;
  }

  100% {
    background: #eee;
    color: black;
    opacity: 1;
  }
}
```

### JavaScript

JavaScript では、前の例とほぼ同じ方法で始めますが、今回は 49 個の `<section>` 要素を生成し、それぞれに `s` に現在の `n` の値を足した ID を割り当てて、後で追跡できるようにします。 上記で指定した CSS グリッドレイアウトでは、7 つの `<section>` 要素で 7 つの列が構成されます。

```js
const mainElem = document.querySelector("main");
const sectionCount = 49;
let n = 1;

while (n <= sectionCount) {
  mainElem.innerHTML += `
    <section id="s${n}">
      <h2>Section ${n}</h2>
    </section>
  `;
  n++;
}
```

次に、`prevState`と呼ばれるオブジェクトを指定します。これにより、この点で以前に選択されていたスナップターゲットを追跡することができます。そのプロパティには、以前のインラインおよびブロックスナップターゲットの ID が保存されています。これは、イベントハンドラーが発行されるたびに、新しいブロックターゲットまたは新しいインラインターゲットにスタイルを適用する必要があるかどうかを判断する上で重要です。

```js
const prevState = {
  snapTargetInline: "s1",
  snapTargetBlock: "s1",
};
```

例えば、このスクロールコンテナーがスクロールされ、新しい {{domxref("SnapEvent.snapTargetBlock")}} 要素の ID が変更された（`prevState.snapTargetBlock` に格納されている ID と等しくない）が、新しい {{domxref("SnapEvent.snapTargetInline")}} 要素の ID は、 `prevState.snapTargetInline` に格納されている ID と同じままであったとします。これは、ブロック方向で新しいスナップ対象に移動したということなので、 `SnapEvent.snapTargetBlock` をスタイル設定すべきですが、インライン方向では新しいスナップ対象が移動していないので、 `SnapEvent.snapTargetInline` にスタイル設定すべきではありません。

今回は、 {{domxref("Element/scrollsnapchange_event", "scrollsnapchange")}} イベントハンドラー関数を最初に説明します。この関数では、次の処理を行います。

1. 前回選択された `<section>` 要素のスナップターゲット（`select-section` クラスがあることで示される）には `deselect-section` クラスを設定し、選択解除のアニメーションを表示するようにします。前回スナップターゲットが選択されていなかった場合は、 `select-section` クラスを DOM の最初の `<section>` に適用し、ページが最初に読み込まれた際に選択されているように表示させます。
2. 前回選択したスナップ対象 ID と今回選択したスナップ対象 ID を、ブロック選択とインライン選択の両方について比較します。 両者が異なっている場合、選択が変更されたことを示します。そのため、適切なスナップ対象に `select-section` クラスを適用し、視覚的にこのことを示します。
3. `prevState.snapTargetBlock` と `prevState.snapTargetInline` を、先ほど選択したスクロールスナップ対象の ID と等しくなるように更新します。これにより、次にイベントが発行された際に、前回選択したものが対象となります。

```js
mainElem.addEventListener("scrollsnapchange", (event) => {
  if (document.querySelector(".select-section")) {
    document.querySelector(".select-section").className = "deselect-section";
  } else {
    document.querySelector("section").className = "select-section";
  }

  if (!(prevState.snapTargetBlock === event.snapTargetBlock.id)) {
    event.snapTargetBlock.className = "select-section";
  }

  if (!(prevState.snapTargetInline === event.snapTargetInline.id)) {
    event.snapTargetInline.className = "select-section";
  }

  prevState.snapTargetBlock = event.snapTargetBlock.id;
  prevState.snapTargetInline = event.snapTargetInline.id;
});
```

{{domxref("Element/scrollsnapchanging_event", "scrollsnapchanging")}} イベントハンドラー関数が呼び出された場合、次のようにします。

1. 前回 `pending` クラスが指定された要素から、そのクラスが除去され、現在の待機対象のみに `pending` クラスが指定され、濃い灰色に色付けされます。
2. 現在待機中の要素に `pending` クラスを指定すると、濃い灰色に変わりますが、`select-section` クラスを保有していない場合のみです。新しい対象が実際に選択されるまでは、以前に選択された対象には紫色の選択スタイル設定を維持させたいからです。また、`if` 文には、変更されたのがインラインまたはブロックの待機中のスナップ対象のどちらであるかによって、スタイル設定をそのいずれかだけに限定するための追加のチェックが含まれます。この場合も、前回と今回のスナップ対象をそれぞれ比較します。

```js
mainElem.addEventListener("scrollsnapchanging", (event) => {
  const previousPending = document.querySelector(".pending");
  if (previousPending) {
    previousPending.className = "";
  }

  if (
    !(event.snapTargetBlock.className === "select-section") &&
    !(prevState.snapTargetBlock === event.snapTargetBlock.id)
  ) {
    event.snapTargetBlock.className = "pending";
  }

  if (
    !(event.snapTargetInline.className === "select-section") &&
    !(prevState.snapTargetInline === event.snapTargetInline.id)
  ) {
    event.snapTargetInline.className = "pending";
  }
});
```

### 結果

スクロールコンテナー内で水平および垂直方向にスクロールし、上記で説明されている動作を監視してみてください。

{{ EmbedLiveSample("Two-dimensional scroller example", "100%", "500") }}

## `Document` と `Window` のスクロールスナップイベント

この記事では、 {{domxref("Element")}} インターフェイスで発生するスクロールスナップイベントについて説明しましたが、同じイベントは {{domxref("Document")}} および {{domxref("Window")}} オブジェクトでも発行されます。次のものを参照してください。

- `Document` の {{domxref("Document/scrollsnapchange_event", "scrollsnapchange")}} および {{domxref("Document/scrollsnapchanging_event", "scrollsnapchanging")}} イベントのリファレンス。
- `Window` の {{domxref("Window/scrollsnapchange_event", "scrollsnapchange")}} および {{domxref("Window/scrollsnapchanging_event", "scrollsnapchanging")}} イベントのリファレンス。

これらは、 `Element` 版とほぼ同様に動作しますが、HTML 文書全体をスクロールスナップコンテナーとして設定する必要がある点が異なります（つまり、 {{cssxref("scroll-snap-type")}} が {{htmlelement("html")}} 要素に設定されている）。

例えば、上記で見てきた例と同様の例を挙げると、重要なコンテンツを含む `<main>` 要素を取得した場合、

```html
<main>
  <!-- 重要なコンテンツ -->
</main>
```

`<main>` 要素は、例えば、 CSS プロパティの組み合わせを使用してスクロールコンテナーにすることができます。

```css
main {
  width: 250px;
  height: 450px;
  overflow: scroll;
}
```

次に、 {{cssxref("scroll-snap-type")}} プロパティを {{htmlelement("html")}} 要素に指定することで、スクロールコンテンツにスクロールスナップ動作を実装することができます。

```css
html {
  scroll-snap-type: block mandatory;
}
```

次の JavaScript のスニペットは、 `scrollsnapchange` イベントが、 `<main>` 要素の子が新しく選択されたスナップターゲットになったときに HTML 文書上で発行されるようにします。 ハンドラー関数では、 `selected` クラスを {{domxref("SnapEvent.snapTargetBlock")}} で参照される子に設定しています。このクラスは、イベントが発行されたときに、選択されたように（アニメーションなどで）見えるように、スタイルを設定するために使用することができます。

```js
document.addEventListener("scrollsnapchange", (event) => {
  event.snapTargetBlock.classList.add("selected");
});
```

代わりに `Window` でイベントを発行することで、同じ機能を実現できます。

```js
window.addEventListener("scrollsnapchange", (event) => {
  event.snapTargetBlock.classList.add("selected");
});
```

## 関連情報

- {{domxref("Element/scrollsnapchanging_event", "scrollsnapchanging")}} イベント
- {{domxref("Element/scrollsnapchange_event", "scrollsnapchange")}} イベント
- {{domxref("SnapEvent")}}
- [CSS スクロールスナップ](/ja/docs/Web/CSS/Guides/Scroll_snap)モジュール
- [Scroll Snap Events](https://developer.chrome.com/blog/scroll-snap-events) (developer.chrome.com, 2024)
