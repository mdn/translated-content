---
title: 交差オブザーバー API
slug: Web/API/Intersection_Observer_API
l10n:
  sourceCommit: bc9f7bec1ab48f29d241e38a9f1598f783f6b60a
---

{{DefaultAPISidebar("Intersection Observer API")}}

交差オブザーバー API (Intersection Observer API) は、対象となる要素が、祖先要素または文書の最上位の{{Glossary("viewport", "ビューポート")}}と交差する変化を非同期的に監視する方法を提供します。

## 概要

従来、ある要素の可視状態、あるいは 2 つの要素の相対的な可視状態を検出することは困難であり、その解決策は信頼性が低く、ブラウザーやアクセスするサイトの動作が重くなる傾向がありました。ウェブが成熟していくにつれて、このような情報の必要性は高まっていきます。交差情報 (Intersection information) についての情報は次の理由から必要とされています。

- ページがスクロールした際の画像やその他のコンテンツの遅延読み込み。
- 「無限スクロール」をするウェブサイトを実装し、スクロールに従って次々とコンテンツを読み込んで、ユーザーがページの切り替えをせずに済むようにすること。
- 広告費を計算するための広告が表示されたかどうかのレポート。
- ユーザーが結果を見るかどうかで、タスクを実行するかどうか、アニメーションを処理するかどうかを決定すること。

以前は、要素同士の交差の検出を実装するには、イベントハンドラーやループで {{domxref("Element.getBoundingClientRect()")}} などのメソッドを呼び出し、影響を受けるすべての要素について必要な情報を蓄積していました。このコードはすべてメインスレッドで実行されるため、これらのうち 1 つでもあればパフォーマンスの問題を引き起こす可能性があります。サイトでこのような検出が大量に行われると、まったく醜くなる可能性があります。

ウェブページで無限スクロールを使用することを考えてみてください。ベンダーから提供されるライブラリーを使用して、ページ全体に定期的に配置された広告を管理し、アニメーショングラフィックスを表示し、通知ボックスなどを描画するカスタムライブラリーを使用します。それぞれには独自に交差を検出するためのルーチンがあり、すべてがメインスレッド上で実行されます。ウェブサイトの作者は、これが起こっていることを認識していないかもしれません。内部の働きについてほとんど知らずに 2 つのライブラリーを使用しているからです。ユーザーがページをスクロールすると、スクロール処理中にこれらの交差の検出ルーチンが絶えず起動し、ユーザーはブラウザー、ウェブサイト、およびコンピューターにイライラさせられることになります。

交差オブザーバー API は、特定の要素が他の要素（または{{Glossary("viewport", "ビューポート")}}）と交差に入ったり出たりしたとき、または 2 つの要素間の交差量が指定された量だけ変化したときに実行されるコールバック関数を、コードが登録できるようにします。こうすることで、サイトはこのような要素の交差を監視するために、メインスレッドで何らかの処理をする必要がなくなり、ブラウザーは適切と思われる交差の管理を自由に最適化することができます。

交差オブザーバー API は、重複したピクセルの正確な数や、具体的にどのピクセルが重複したかに基づいてロジックを起動することはできません。これは、「_N_ % 程度のどこかで交差していたら、何かをする必要がある」という、より一般的な用途のみを解決します。

## 概念と使い方

交差オブザーバー API を使用すると、以下のいずれかの状況が発生したときに呼び出されるコールバックを構成することができます。

- **対象**要素が端末のビューポートまたは指定された要素と交差したとき。この指定された要素は、交差オブザーバー API の用途では**ルート要素**または**ルート**と呼びます。
- オブザーバーが対象要素を監視するよう最初に指示されたとき。

通常、対象要素の最も近いスクロール可能な祖先、または対象要素がスクロール可能な要素の子孫でない場合は、端末のビューポートを基準にして交差の変化を監視したいと思うでしょう。端末のビューポートを基準にして交差を監視するには、 `root` オプションに `null` を指定します。交差オブザーバーのオプションについてのより詳しい説明は、このまま読み進めてください。

ビューポートとその他の要素のどちらがルートとして使用されていても、 API は同じように動作し、対象要素の表示状態が変わってルートとの間で交差の量の期待値を通るたびに、提供したコールバック関数が実行されます。

対象要素とそのルート要素の交差する度合いが**交差率**です。これは対象要素のパーセント値を 0.0 から 1.0 の間の値で表現したものです。

### 交差オブザーバーの作成

交差オブザーバーは、コンストラクターを呼び出してしきい値が一方向また他の方向に交差する度に実行されるコールバック関数を渡すことで生成します。

```js
const options = {
  root: document.querySelector("#scrollArea"),
  rootMargin: "0px",
  scrollMargin: "0px",
  threshold: 1.0,
};

const observer = new IntersectionObserver(callback, options);
```

しきい値 (threshold) の 1.0 は、 `root` オプションで指定された要素内で対象が 100% 表示された時にコールバックが呼び出されることを意味しています。

#### 交差オブザーバーのオプション

`options` オブジェクトは {{domxref("IntersectionObserver.IntersectionObserver", "IntersectionObserver()")}} コンストラクターに渡され、オブザーバーのコールバックが呼び出される状況を制御します。以下のようなフィールドがあります。

- `root`
  - : 対象が見えるかどうかを確認するためのビューポートとして使用される要素です。指定されなかった場合、または `null` の場合は既定でブラウザーのビューポートが使用されます。
- `rootMargin`
  - : ルート要素の周囲のマージンです。 CSS の {{cssxref("margin")}} プロパティと同様に、 1 ～ 4 つの値からなる文字列であり、例えば `"10px 20px 30px 40px"`（上、右、下、左）のように指定します。値はピクセル単位 (`px`) またはパーセント単位 (`%`) のみ指定可能です。この値の設定する組み合わせは、交差計算前にルート要素の境界ボックスのそれぞれの辺を伸長または縮小させる役割を果たします。負の値は境界ボックスを縮小し、正の値は拡張します。未指定時の既定値は `"0px 0px 0px 0px"` です。
- `scrollMargin`
  - : 入れ子になった{{glossary("scroll container","スクロールコンテナー")}}の周囲に設定されるマージンで、 `rootMargin` と同じ値/既定値を取ります。
    これらのマージンは、交差を計算する前に、入れ子になったスクロール可能なコンテナーに適用されます。
    正の値を指定すると、コンテナーのクリップ矩形を拡張し、対象が可視になる前に交差を検出することができます。一方、負の値はクリップ矩形を縮小します。
- `threshold`
  - : 単一の数値または数値の配列で、対象がどのくらいの割合で見えている場合にオブザーバーのコールバックを実行するかを示します。見える範囲が 50% を超えたときのみ検出する場合は値 0.5 を使用します。 25% を超える度にコールバックを実行する場合は、 \[0, 0.25, 0.5, 0.75, 1] という配列を指定します。既定値は 0 です（つまり、 1 ピクセルでも表示されるとコールバックが実行されます）。 1.0 の値は全てのピクセルが見えるようになるまで、しきい値を超えたとはみなされないことを意味します。
- `delay` {{experimental_inline}}
  - : 対象の可視性を追跡する場合（[trackVisibility](#trackvisibility) が `true` の場合）、これを用いてこのオブザーバーからの通知間の最小遅延（ミリ秒単位）を設定することができます。
    通知レートを制限することが望ましいのは、可視性の計算の負荷が大きいからである。
    可視性を追跡する場合、 100 未満の値はすべて 100 に設定されます。許容できる最大値を使用しましょう。
    既定値は 0です。
- `trackVisibility` {{experimental_inline}}
  - : 論理値で、この `IntersectionObserver` が対象とする可視性の変化を追跡するか否かを示します。

    `false` の場合、対象要素がルート要素のビューポート内にスクロールインした際に、ブラウザーは交差を報告します。
    `true` の場合、ブラウザーは対象とするが実際に表示されているか、他の要素に覆われていないか、フィルターや不透明度の縮小、座標変換によって歪んだり隠されたりしていないかを追加で調べます。
    既定では値は `false` です。可視性の追跡は計算負荷が高いためです。
    これが設定される場合、 [`delay`](#delay) も設定するのが望ましいです。

#### 交差変化コールバック

`IntersectionObserver()` コンストラクターに渡すコールバックは、{{domxref("IntersectionObserverEntry")}} オブジェクトのリストとオブザーバー自体を受け取ります。

```js
const callback = (entries, observer) => {
  entries.forEach((entry) => {
    // それぞれの項目は、観測された 1 つの対象要素の交差状態の変化を示している
    //   entry.boundingClientRect
    //   entry.intersectionRatio
    //   entry.intersectionRect
    //   entry.isIntersecting
    //   entry.rootBounds
    //   entry.target
    //   entry.time
  });
};
```

コールバックが受信する項目のリストには、しきい値の超過の発生それぞれについて 1 つの {{domxref("IntersectionObserverEntry")}} オブジェクトが記載されます。複数の対象から、あるいは単一の対象が短時間で複数のしきい値を超過した場合に、一度に複数の項目が受信される可能性があります。項目はキューを使用して配信されるため、生成された時刻順に並べられるはずですが、正確な順序付けにはできれば {{domxref("IntersectionObserverEntry.time")}} を使用しましょう。各項目は、指定された要素のどの部分がルート要素と交差しているか、その要素が交差しているとみなされるかどうかなどを説明します。項目にはその具体的な瞬間の情報のみが含まれます。スクロール方向や速度など、時間経過に伴う情報が求められる場合は、前回受信した項目の内容を記憶して、自身で計算する必要があるかもしれません。

コールバックはメインスレッドで実行される点に注意してください。可能な限り早く動作する必要があります。もし時間を要する処理であるなら、 {{domxref("Window.requestIdleCallback()")}} を使ったほうがいいでしょう。

下記のコードスニペットは、要素がルートと交差していない状態から、 75% 以上交差している状態に遷移する回数を、カウンターで記録するコールバックを示しています。しきい値が 0.0 （既定）の場合、コールバックは {{domxref("IntersectionObserverEntry.isIntersecting", "isIntersecting")}} の論理値が変化するたびに呼び出されます。したがって、このスニペットはまず変化が正の方向であるか調べ、次に {{domxref("IntersectionObserverEntry.intersectionRatio", "intersectionRatio")}} が 75% 以上かどうかを判定します。そうであれば、カウンターを増加させます。

```js
const intersectionCallback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      let elem = entry.target;

      if (entry.intersectionRatio >= 0.75) {
        intersectionCounter++;
      }
    }
  });
};
```

#### 監視対象となる要素の指定

オブザーバーを作成したら、監視する対象要素を指定する必要があります。

```js
const target = document.querySelector("#listItem");
observer.observe(target);

// オブザーバー用に設定されたコールバックが、これで初めて実行される
// オブザーバーに対象が割り当てられるまで待つ（対象が現在表示されていなくても）
```

対象が `IntersectionObserver` で指定するしきい値に達するたびに、コールバックが呼び出されます。

また、 `root` オプションを指定した場合、対象はルート要素の子孫要素で なければならないことに注意して ください。

### 交差の計算方法

交差オブザーバー API によって考慮される領域はすべて矩形です。異形の要素は、要素全体を囲む最小の矩形で占有しているとみなされます。同様に、要素の可視部分が矩形ではない場合、要素が交差する矩形は要素の可視部分全体を含む最小の矩形であると見なされます。

{{domxref("IntersectionObserverEntry")}} オブジェクトによって提供される様々なプロパティが、どのように交差を表現するかを理解すると有益でしょう。

#### 交差ルートとルートマージン

ある要素とそのコンテナーとの交差を監視するまえに、まずはコンテナーを知る必要があります。ここでのコンテナーとは**交差ルート**または**ルート要素**です。これは監視される要素の親要素となる文書内の特定の要素になるか、文書のビューポートをコンテナーとして使用する際は `null` になるかいずれかになります。

**ルート交差矩形**は対象をチェックするために使用される矩形です。この矩形は次のように決まります。

- 交差ルートが暗黙のルート（すなわち最上位の {{domxref("Document")}}）である場合、ルート交差矩形はビューポートの矩形になります。
- 交差ルートのあふれた部分が切り取られていた場合、ルート交差矩形はルート要素のコンテンツ領域になります。
- それ以外の場合は、ルート交差矩形は交差ルートのクライアント矩形（{{domxref("Element.getBoundingClientRect", "getBoundingClientRect()")}} を呼び出して返されるもの）です。

交差するルートとして使用される矩形は、**ルートマージン** `rootMargin` を {{domxref("IntersectionObserver")}} の作成時に設定することで調整することが可能です。 `rootMargin` の値は交差ルートの外接ボックスの各辺に追加されるオフセットを定義して、最終的な交差ルートの境界を作成します（コールバックが実行された際には {{domxref("IntersectionObserverEntry.rootBounds")}} で取得できるものです）。正の値はボックスを拡張し、負の値は縮小します。それぞれのオフセット値はピクセル単位 (px) またはパーセント値 (%) でのみ表すことができます。

ルートマージンを使用してボックスを拡張することの効果は、オーバーフロー対象が可視化される前にルートと交差することを可能にすることです。
これは、例えば、画像が可視化される時点ではなく、表示領域に入る直前に読み込みを開始するために使用することができます。

下記の例では、スクロール可能なボックスと、初期状態では画面外にある要素があります。
ルート要素の右マージンを調整すると、次のことが確認できます。

- マージンが正の値の場合、赤い要素は表示されていなくてもルートと交差しているとみなさます。これは、その要素がルートのマージン領域と交差しているためです。
- マージンが負の場合、赤い要素が可視になり始めても、ルートの境界ボックスが縮小されているため、まだルートと交差しているとはみなされません。

```html hidden
<div class="demo">
  <div id="container">
    <div id="elem"></div>
    <div id="gutter"></div>
  </div>
  <div id="marginIndicator"></div>
</div>
<div class="controls">
  <label>
    ルートの右マージンの設定:
    <input id="margin" type="number" value="0" step="5" />px
  </label>
  <label>
    このスライダーを使ってコンテナーのスクロールが可能:
    <input id="scrollAmount" type="range" min="0" max="300" value="0" />
  </label>
  <p>現在の交差率: <span id="output"></span></p>
</div>
```

```css hidden
.demo {
  display: flex;
}

.controls {
  display: flex;
  flex-direction: column;
}

#container {
  position: relative;
  width: 200px;
  height: 100px;
  overflow-x: scroll;
  border: 1px solid black;
}

#marginIndicator {
  position: relative;
  height: 100px;
  background-color: blue;
  opacity: 0.5;
}

#elem {
  background-color: red;
  width: 100px;
  height: 100px;
  position: absolute;
  left: 200px;
}

#gutter {
  width: 500px;
  height: 100px;
}
```

```js hidden
let observer;
function createObserver() {
  if (observer) {
    observer.disconnect();
  }
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        output.textContent = entry.intersectionRatio.toFixed(2);
      });
    },
    {
      threshold: Array.from({ length: 1000 }, (_, i) => i / 1000),
      root: container,
      rootMargin: `0px ${margin.value}px 0px 0px`,
    },
  );
  if (margin.valueAsNumber < 0) {
    marginIndicator.style.width = `${-margin.valueAsNumber}px`;
    marginIndicator.style.left = `${margin.valueAsNumber}px`;

    marginIndicator.style.backgroundColor = "blue";
  } else {
    marginIndicator.style.width = `${margin.valueAsNumber}px`;
    marginIndicator.style.left = "0px";
    marginIndicator.style.backgroundColor = "green";
  }
  observer.observe(elem);
}
createObserver();
margin.addEventListener("input", () => {
  createObserver();
});
scrollAmount.addEventListener("input", () => {
  container.scrollLeft = scrollAmount.value;
});
```

{{EmbedLiveSample("交差ルートとルートマージン", "", 200)}}

#### 交差ルートとスクロールマージン

ルート要素が入れ子になった{{glossary("scroll container","スクロールコンテナー")}}を含んでおり、それらのスクロール可能なコンテナーのいずれかの内部にある対象との交差を監視したい場合 を考えてみましょう。
既定では、対象要素との交差は、対象がルートで定義された領域内に可視化された時点で観測可能になります。
言い換えれば、コンテナがルート内でスクロール表示され、かつ対象が自身のコンテナーのクリッピング矩形内でスクロール表示された時点です。

スクロールマージンを使用すると、対象がスクロールコンテナー内で表示される前または後の交差を監視し始めることができます。
このマージンは、ルート要素（それ自体がスクロールコンテナーである場合を含む）を含む、ルート内のすべてのネストされたスクロールコンテナーに追加され、交差の計算に使用されるクリッピング領域を拡張（正のマージン）または縮小（負のマージン）する効果があります。

> [!NOTE]
> それぞれのスクロールコンテナーで交差オブザーバーを作成し、マージン適用を希望するスクロール領域に対して、 rootMargin プロパティを使用することで、同様の効果を実現できます。
> スクロールマージンを使用する方が人間工学的です。なぜなら、ほとんどの場合、 1 つの交差オブザーバーで、すべての含まれる対象をカバーできるからです。

下記の例では、スクロール可能なボックスと、初期状態では画面外にある画像カルーセルがあります。
ルート要素上のオブザーバーが、カルーセル内の対象となる画像要素を監視します。
画像要素がルート要素と交差し始めた時点で、画像が読み込まれた、交差がログ出力され、オブザーバーが除去されます。

下にスクロールするとカルーセルを表示します。
表示されている画像はすぐに読み込まれるはずです。
カルーセルをスクロールした場合、要素が表示範囲に入った瞬間に画像が読み込まれた様子が確認できるはずです。

例をリセットした後、提供されているコントロールを使用してスクロールマージンの割合を調整することができます。
20% のような正の値を設定すると、スクロールコンテナーのクリップ矩形が 20% 拡張され、画像が表示範囲に入る前に検出・読み込まれる様子が確認できるはずです。
同様に、負の値を設定すると、画像が既に表示範囲内にある時点で交差が検出されるようになります。

```html hidden
<button id="reset" type="button">リセット</button>
```

```html hidden
<div id="root-container">
  <p>前のコンテンツ（カルーセルは上にスクロール）</p>

  <div class="flex-container">
    <div class="carousel">
      <img
        data-src="ballon-portrait.jpg"
        class="lazy-carousel-img"
        alt="Balloon portrait" />
      <img
        data-src="balloon-small.jpg"
        class="lazy-carousel-img"
        alt="balloon-small" />
      <img data-src="surfer.jpg" class="lazy-carousel-img" alt="surfer" />
      <img
        data-src="border-diamonds.png"
        class="lazy-carousel-img"
        alt="border-diamonds" />
      <img data-src="fire.png" class="lazy-carousel-img" alt="fire" />
      <img data-src="puppy-header.jpg" class="lazy-carousel-img" alt="puppy" />
      <img data-src="moon.jpg" class="lazy-carousel-img" alt="moon" />
      <img data-src="rhino.jpg" class="lazy-carousel-img" alt="rhino" />
    </div>
    <div id="margin-indicator"></div>
  </div>
  <p>後のコンテンツ</p>
</div>
```

```html hidden
<div class="controls">
  <label>
    スクロールルートの右マージンを設定:
    <input id="margin" type="number" value="0" step="5" />%
  </label>
</div>
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#root-container {
  height: 250px;
  overflow-y: auto;
  border: solid blue;
}

.controls {
  margin-top: 10px;
}

p {
  height: 50vh;
}

.flex-container {
  display: flex;
}

#margin-indicator {
  position: relative;
  height: 100px;
  width: 1px;
  background-color: red;
  opacity: 0.5;
  display: flex;
}

.carousel {
  width: 300px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  display: flex;
  border: solid;
  /* outline: 200px solid rgba(0, 0, 0, 0.1); */
}
.carousel img {
  scroll-snap-stop: always;
  scroll-snap-align: start;
  display: block;
  width: 195px;
  height: 99px;
  min-width: 195px;
  min-height: 99px;
  margin-right: 10px;
  background-color: #eeeeee; /* Placeholder background */
}

#log {
  height: 100px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js hidden
const reload = document.querySelector("#reset");

reload.addEventListener("click", () => {
  window.location.reload(true);
});

const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```js hidden
const rootContainer = document.getElementById("root-container");
const marginIndicator = document.getElementById("margin-indicator");
const carousel = document.querySelector(".carousel");
const lazyImages = carousel.querySelectorAll(".lazy-carousel-img");
let imageObserver;

function createImageObserver() {
  if (imageObserver) {
    imageObserver.disconnect();
  }

  let observerOptions = {
    root: rootContainer,
    rootMargin: "0px", // 余分なマージンなし
    scrollMargin: `${margin.valueAsNumber}%`, // 余分なマージンなし / Can be set
    threshold: 0.01, // 画像の 1% が表示されたときに開始
  };

  imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        log(`交差: ${img.dataset.src}`); // 最初の交差のみ
        img.src = `https://mdn.github.io/shared-assets/images/examples/${img.dataset.src}`; // src を設定することで画像を読み込み
        img.classList.remove("lazy-carousel-img"); // クラスを除去
        observer.unobserve(img); // 読み込まれたら監視を停止
      }
    });
  }, observerOptions);

  if (margin.valueAsNumber < 0) {
    marginIndicator.style.width = `${-margin.valueAsNumber}px`;
    marginIndicator.style.left = `${margin.valueAsNumber}px`;
    marginIndicator.style.backgroundColor = "blue";
  } else {
    marginIndicator.style.width = `${margin.valueAsNumber}px`;
    marginIndicator.style.left = "0px";
    marginIndicator.style.backgroundColor = "green";
  }

  lazyImages.forEach((image) => {
    imageObserver.observe(image); // それぞれの画像の監視を開始
  });
}

if ("IntersectionObserver" in window) {
  createImageObserver();
  margin.addEventListener("input", () => {
    createImageObserver();
  });
} else {
  // 交差オブザーバーに対応していないブラウザー向けの代替処理
  // 交差オブザーバーが対応していない場合、すべての画像を即時読み込みする
  lazyImages.forEach((img) => {
    img.src = img.dataset.src;
    img.classList.remove("lazy-carousel-img");
  });
  console.warn(
    "交差オブザーバーに対応していません。 すべてのカルーセル画像が読み込まれました。",
  );
}
```

{{EmbedLiveSample("交差ルートとスクロールマージン","100%","500px")}}

#### しきい値

交差オブザーバー API は、対象要素が見える量の微細な変化が発生するたびに知らせるのではなく、**しきい値** (threshold) を使用します。オブザーバーを作成する際に、表示される対象要素がどの程度見えているかの割合を表す 1 つ以上の数値を指定することができます。API はこれらのしきい値を超えて見えたかどうかの変更のみを知らせます。

例えば、対象要素が見える量が 25% 単位で増えたり減ったりするたびに通知を受けたい場合は、オブザーバーを作成する際に \[0, 0.25, 0.5, 0.75, 1] という配列をしきい値のリストとして指定します。

コールバックが呼び出されると、 `IntersectionObserverEntry` オブジェクトのリストを受け取ります。これは、ルートと交差する度合いが変化し、露出量がいずれかの方向にしきい値を越えた観測対象ごとに 1 つずつあります。

対象が*現在*ルートと交差しているかどうかは、項目の {{domxref("IntersectionObserverEntry.isIntersecting", "isIntersecting")}} プロパティを見ることで確認できます。これにより、その項目が、要素が交差している状態から交差しなくなるまでの遷移を表すのか、交差していない状態から交差する状態への遷移を表すのかを判断することができます。

交差する矩形がゼロになることもあり得ることに注意してください。これは、交差部分が両者の境界線にぴったり沿っているか、または {{domxref("IntersectionObserverEntry.boundingClientRect", "boundingClientRect")}} の面積がゼロの場合に起こり得ることです。このように対象とルートが境界線を共有している状態は、交差した状態に遷移したとみなすには不十分です。

しきい値の仕組みを感じ取るには、下のボックスをスクロールして見てください。その中にある各色のボックスには四隅全てにパーセント値が表示されています。コンテナーをスクロールする時にこれらのパーセント値が変化することが分かります。各ボックスには異なるしきい値が設定されています。

- 最初のボックスには、可視点の各パーセント値が設定されています。つまり{{domxref("IntersectionObserver.thresholds")}} の配列は `[0.00, 0.01, 0.02, /*…,*/ 0.99, 1.00]` となります。
- 2 つ目のボックスには単一のしきい値が、 50% の位置にあります。
- 3 つ目のボックスには、可視率 10% 毎にしきい値があります (0%, 10%, 20%...)
- 最後のボックスのしきい値は 25% 毎です。

```html hidden
<template id="boxTemplate">
  <div class="sampleBox">
    <div class="label topLeft"></div>
    <div class="label topRight"></div>
    <div class="label bottomLeft"></div>
    <div class="label bottomRight"></div>
  </div>
</template>

<main>
  <div class="contents">
    <div class="wrapper"></div>
  </div>
</main>
```

```css hidden
.contents {
  position: absolute;
  width: 700px;
  height: 1725px;
}

.wrapper {
  position: relative;
  top: 600px;
}

.sampleBox {
  position: relative;
  left: 175px;
  width: 150px;
  background-color: rgb(245 170 140);
  border: 2px solid rgb(201 126 17);
  padding: 4px;
  margin-bottom: 6px;
}

#box1 {
  height: 200px;
}

#box2 {
  height: 75px;
}

#box3 {
  height: 150px;
}

#box4 {
  height: 100px;
}

.label {
  font:
    14px "Open Sans",
    "Arial",
    sans-serif;
  position: absolute;
  margin: 0;
  background-color: rgb(255 255 255 / 70%);
  border: 1px solid rgb(0 0 0 / 70%);
  width: 3em;
  height: 18px;
  padding: 2px;
  text-align: center;
}

.topLeft {
  left: 2px;
  top: 2px;
}

.topRight {
  right: 2px;
  top: 2px;
}

.bottomLeft {
  bottom: 2px;
  left: 2px;
}

.bottomRight {
  bottom: 2px;
  right: 2px;
}
```

```js hidden
let observers = [];

startup = () => {
  let wrapper = document.querySelector(".wrapper");

  // オブザーバーのオプション

  let observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: [],
  };

  // それぞれのボックスに設定するしきい値の配列。最初のボックスの
  // しきい値は、（各パーセント点対して）非常にたくさんあるため、
  // プログラムで設定します。

  let thresholdSets = [
    [],
    [0.5],
    [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
    [0, 0.25, 0.5, 0.75, 1.0],
  ];

  for (let i = 0; i <= 1.0; i += 0.01) {
    thresholdSets[0].push(i);
  }

  // それぞれのボックスを追加し、それぞれに新しいオブザーバーを生成

  for (let i = 0; i < 4; i++) {
    let template = document
      .querySelector("#boxTemplate")
      .content.cloneNode(true);
    let boxID = `box${i + 1}`;
    template.querySelector(".sampleBox").id = boxID;
    wrapper.appendChild(document.importNode(template, true));

    // このボックスのオブザーバーを設定

    observerOptions.threshold = thresholdSets[i];
    observers[i] = new IntersectionObserver(
      intersectionCallback,
      observerOptions,
    );
    observers[i].observe(document.querySelector(`#${boxID}`));
  }

  // 開始位置までスクロール

  document.scrollingElement.scrollTop =
    wrapper.firstElementChild.getBoundingClientRect().top + window.scrollY;
  document.scrollingElement.scrollLeft = 750;
};

intersectionCallback = (entries) => {
  entries.forEach((entry) => {
    const box = entry.target;
    const visiblePct = `${Math.floor(entry.intersectionRatio * 100)}%`;

    box.querySelector(".topLeft").textContent = visiblePct;
    box.querySelector(".topRight").textContent = visiblePct;
    box.querySelector(".bottomLeft").textContent = visiblePct;
    box.querySelector(".bottomRight").textContent = visiblePct;
  });
};

startup();
```

{{EmbedLiveSample("しきい値", 500, 500)}}

#### 可視性の追跡と遅延

既定では、オブザーバーは対象要素がルート要素のビューポート内にスクロールされた際に通知を提供します。
多くの状況ではこれで十分ですが、対象が「視覚的に損なわれた」状態では交差を報告しないことが重要な場合もあります。
例えば、アナリティクスや広告インプレッションを計測する際には、対象要素が全体または一部で隠れたり歪んだりしていないことが重要です。

`trackVisibility` 設定は、透明度の変更やフィルター、座標変換の適用などにより、ブラウザーが視覚的に損なわれていないと考えてみる対象の交差のみを報告するようオブザーバーに指示します。
このアルゴリズムは保守的であり、わずかな透明度低下など技術的には可視である要素を省略する場合があります。

可視性の計算は計算コストが高いため、必要な場合にのみ使用するようにしましょう。
可視性を追跡する際には、最小報告間隔を制限するために {{domxref("IntersectionObserver/delay","delay")}} も設定する必要があります。
推奨される設定は、許容できる最大値（可視性追跡時の最小遅延は 100 ミリ秒）に遅延が設定されることです。

#### クリッピングと交差矩形

ブラウザーは次のように最終的な交差矩形を計算します。これはすべて完了した後の状態が見えますが、交差がいつ発生するかを正確に把握するために、これらの手順を理解すると役立ちます。

1. 対象要素の外接矩形（つまり、要素を構成するすべてのコンポーネントの外接ボックスを完全に囲む最小の矩形）を、対象に対して {{domxref("Element.getBoundingClientRect", "getBoundingClientRect()")}} を呼び出すことによって取得します。
   これは、交差の矩形の最大の大きさです。残りの手順で、交差しない部分を削除していきます。
2. 対象の直接の親ブロックから外側に向けて、それぞれの包含ブロックのクリッピングを（存在すれば）交差する矩形に適用します。
   ブロックのクリッピングは、 2 つのブロックの交差と、 {{cssxref("overflow")}} プロパティで（存在すれば）指定されたクリッピングモードに基づいて決定されます。 `overflow` に `visible` 以外を設定すると、クリッピングが行われます。
3. 包含する要素の中に、ネストされた閲覧コンテキストのルートがあった場合（{{HTMLElement("iframe")}} に含まれる文書など）、交差する矩形は包含するコンテキストのビューポートで切り取られ、コンテナー群を通して上方に再帰的にコンテナーの包含ブロックを続けます。ですから、最上位の `<iframe>` に到達したら、交差矩形はフレームのビューポートに切り取られ、そのフレームの親要素が交差ルートに向けた再帰の次のブロックになります。
4. 上方への再帰が交差ルートに達すると、結果の矩形が交差ルートの座標空間に対応付けられます。
5. 結果の矩形はそれから[ルート交差矩形](#the_intersection_root_and_root_margin)と交差することで更新されます。
6. この矩形は、最終的に、対象の {{domxref("document")}} の座標空間に対応付けられます。

## インターフェイス

- {{domxref("IntersectionObserver")}}
  - : 交差オブザーバー API の主なインターフェイスです。同一の交差設定に対して任意の数の対象要素を監視するオブザーバーを作成し管理するためのメソッドを提供します。各オブザーバーは 1 つ以上の対象要素と共通の親要素、または最上位の {{domxref("Document")}} の{{Glossary('viewport', 'ビューポート')}}との交差における変化を非同期的に監視することが出来ます。この親要素またはビューポートは**ルート**と呼ばれます。
- {{domxref("IntersectionObserverEntry")}}
  - : スクロールにおける変化の特定の瞬間において、対象要素とルートとなるコンテナーとの交差を表現します。この型のオブジェクトは、 `IntersectionObserver` コールバックへの入力、または {{domxref("IntersectionObserver.takeRecords()")}} の呼び出しの 2 通りの方法でのみ受け取ることができます。

## 単純な例

この単純な例では、対象要素の色と透明度を要素の可視性で変化させます。[交差オブザーバー API による要素の表示時間設定](/ja/docs/Web/API/Intersection_Observer_API/Timing_element_visibility)では、要素のセット（例えば広告など）がユーザーに表示される時間を測定し、統計を記録したり要素を更新したりしてその情報にユーザーどう反応したかを示す、より拡張性の高い具体例を見ることができるでしょう。

### HTML

この例における HTML は非常に短く、主な要素は対象となるボックス（IDは `"box"` としました）とボックス内のコンテンツです。

```html
<div id="box">
  <div class="vertical">Welcome to <strong>The Box!</strong></div>
</div>
```

### CSS

この CSS はこの例ではあまり重要ではありません。この CSS は要素をレイアウトし、 {{cssxref("background-color")}} と {{cssxref("border")}} 属性が [CSS トランジション](/ja/docs/Web/CSS/Guides/Transitions)に加わることができるようにし、要素が多少見えなくなるときの変更に影響を与えるのに使用します。

```css
#box {
  background-color: rgb(40 40 190 / 100%);
  border: 4px solid rgb(20 20 120);
  transition:
    background-color 1s,
    border 1s;
  width: 350px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.vertical {
  color: white;
  font: 32px "Arial";
}

.extra {
  width: 350px;
  height: 350px;
  margin-top: 10px;
  border: 4px solid rgb(20 20 120);
  text-align: center;
  padding: 20px;
}
```

### JavaScript

最後に、交差オブザーバー API を使って何ができるのか、 JavaScript のコードを見ていきましょう。

#### セットアップ

まずは、いくつかの変数を準備してオブザーバーをインストールする必要があります。

```js
const numSteps = 20.0;

let boxElement;
let prevRatio = 0.0;
let increasingColor = "rgb(40 40 190 / ratio)";
let decreasingColor = "rgb(190 40 40 / ratio)";

// セットアップする
window.addEventListener(
  "load",
  (event) => {
    boxElement = document.querySelector("#box");

    createObserver();
  },
  false,
);
```

セットアップした定数と変数は下記の通りです。

- `numSteps`
  - : 可視率が 0.0 から 1.0 の間にどのくらいの数のしきい値を設定するか示す定数です。
- `prevRatio`
  - : この変数はしきい値を超えた最後の可視率を記録するために使用します。これは対象要素が大体見えるようになったかどうかを調べることが出来ます。
- `increasingColor`
  - : 可視率が増加している時に対象要素に適用する色を定義する文字列です。文字列の中の "比率" という単語は対象要素の現在の可視率に置き換えられ、要素が色を変化させるだけでなく不透明になるにつれて透明度が増していきます。
- `decreasingColor`
  - : 同様に、可視率が減少していく時に適用する色を定義する文字列です。

{{domxref("EventTarget.addEventListener", "Window.addEventListener()")}} を呼び出して {{domxref("Window/load_event", "load")}} イベントの待ち受けを開始します。ページの読み込みが完了すると、{{domxref("Document.querySelector", "querySelector()")}} を使用して ID が `"box"` 要素への参照を取得し、 `createObserver()` メソッドを呼び出して交差オブザーバーの設定とインストール処理を開始します。

#### 交差オブザーバーの作成

`createObserver()` メソッドは新しい交差オブザーバー ({{domxref("IntersectionObserver")}}) を作成し、対象要素の監視を開始するためにページが完全に読み込まれてから呼び出されます。

```js
function createObserver() {
  let observer;

  let options = {
    root: null,
    rootMargin: "0px",
    threshold: buildThresholdList(),
  };

  observer = new IntersectionObserver(handleIntersect, options);
  observer.observe(boxElement);
}
```

この関数ではオブザーバーの設定を含む `options` オブジェクトを設定することから始めます。文書のビューポートに対して対象要素がどのくらい見えているかという変化を監視したいので、 `root` は `null` にします。マージンは必要がないので、マージンオフセットである `rootMargin` 設定は "0px" と指定しています。これによって、オブザーバーは追加された（または差し引かれた）空間がなくても対象要素の境界とビューポートの境界の交差点がどう変化するのか監視を開始することができます。

可視率のしきい値のリストである、 `threshold` は関数 `buildThresholdList()` によって構成されます。しきい値のリストは、この例ではプログラムによって計算されています。その数が意図的に調整可能だからです。

`options` が用意できたら、新しいオブザーバーを作成、つまり{{domxref("IntersectionObserver.IntersectionObserver", "IntersectionObserver()")}} のコンストラクターを呼び出して、しきい値をまたいだ際に呼ばれる関数 `handleIntersect()` を指定し、オプションを指定します。次に、返されたオブザーバーに対して {{domxref("IntersectionObserver.observe", "observe()")}} を呼び出し、必要な対象要素を渡します。

`observer.observe()` をそれぞれの要素に対して呼び出すことにより、ビューポートに対して交差し変化しているかを複数の要素から監視することが出来ます。

#### しきい値比率の配列を組み立てる

しきい値のリストを作成する `buildThresholdList()` 関数は次のようになります。

```js
function buildThresholdList() {
  let thresholds = [];
  let numSteps = 20;

  for (let i = 1.0; i <= numSteps; i++) {
    let ratio = i / numSteps;
    thresholds.push(ratio);
  }

  thresholds.push(0);
  return thresholds;
}
```

これは 1 と `numSteps` の間の各整数 `i` に対して、値 `i/numSteps` をしきい値の配列に入れることで、それぞれが 0.0 と 1.0 の間の比率であるしきい値の配列を作成しています。また、0 を配列に含めます。既定の `numSteps` (20) が指定された結果、以下のしきい値のリストが表示されます。

<table class="standard-table">
    <thead>
      <tr>
        <th>#</th>
        <th>率</th>
        <th>#</th>
        <th>率</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>0</th>
        <td>0.05</td>
        <th>11</th>
        <td>0.6</td>
      </tr>
      <tr>
        <th>1</th>
        <td>0.1</td>
        <th>12</th>
        <td>0.65</td>
      </tr>
      <tr>
        <th>2</th>
        <td>0.15</td>
        <th>13</th>
        <td>0.7</td>
      </tr>
      <tr>
        <th>3</th>
        <td>0.2</td>
        <th>14</th>
        <td>0.75</td>
      </tr>
      <tr>
        <th>4</th>
        <td>0.25</td>
        <th>15</th>
        <td>0.8</td>
      </tr>
      <tr>
        <th>5</th>
        <td>0.3</td>
        <th>16</th>
        <td>0.85</td>
      </tr>
      <tr>
        <th>6</th>
        <td>0.35</td>
        <th>17</th>
        <td>0.9</td>
      </tr>
      <tr>
        <th>7</th>
        <td>0.4</td>
        <th>18</th>
        <td>0.95</td>
      </tr>
      <tr>
        <th>8</th>
        <td>0.45</td>
        <th>19</th>
        <td>1</td>
      </tr>
      <tr>
        <th>9</th>
        <td>0.5</td>
        <th>20</th>
        <td>0</td>
      </tr>
      <tr>
        <th>10</th>
        <td>0.55</td>
      </tr>
    </tbody>
</table>

もちろん、しきい値の配列をハードコードすることは可能ですし、よくやりがちなことです。しかし、この例では設定を追加することで粒度を調整したりするする余地が残っています。

#### 交差の変化の処理

ブラウザーは対象要素（この場合は `"box"` という ID を持つ要素）が表示されているか、またはどのくらい見えているかという比率が、しきい値のリストにある値の 1 つをまたぐことを検出して、 `handleIntersect()` を呼び出します。

```js
function handleIntersect(entries, observer) {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > prevRatio) {
      entry.target.style.backgroundColor = increasingColor.replace(
        "ratio",
        entry.intersectionRatio,
      );
    } else {
      entry.target.style.backgroundColor = decreasingColor.replace(
        "ratio",
        entry.intersectionRatio,
      );
    }

    prevRatio = entry.intersectionRatio;
  });
}
```

リストである `entries` 内にある {{domxref("IntersectionObserverEntry")}} について、entry の {{domxref("IntersectionObserverEntry.intersectionRatio", "intersectionRatio")}} が上昇しているかを調べます。上昇していれば対象の {{cssxref("background-color")}} に `increasingColor` （`"rgb(40 40 190 / ratio)"` だったことを思い出してください）の値をセットし、その際にその中にある "ratio" という文字列を entry が持つ `intersectionRatio` と置き換えます。その結果、色が変更されるだけでなく、対象要素の透明度も変更されます。交差する比率が下がるに連れて、背景色のアルファ値が下がりより透明度の高い要素となります。

同様に、 `intersectionRatio` が下がっている場合は `decreasingColor` を文字列として使用し "ratio" という文字列を `intersectionRatio` でもって置き換えたあとに、要素の `background-color` として適用します。

最後に、交差する割合が上がっているか下がっているかを追跡するために、変数 `prevRatio` に現在の比率を代入しておきます。

### 結果

以下がその結果内容です。ページを上下にスクロールして、ボックスの外観がどう変化するかを確認してみましょう。

{{EmbedLiveSample('A_simple_example', 400, 400)}}

より応用的な例は[交差オブザーバー API による要素の表示時間設定](/ja/docs/Web/API/Intersection_Observer_API/Timing_element_visibility)の節を見てください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [交差オブザーバーのポリフィル](https://github.com/w3c/IntersectionObserver)
- [交差オブザーバー API による要素の表示時間設定](/ja/docs/Web/API/Intersection_Observer_API/Timing_element_visibility)
- {{domxref("IntersectionObserver")}} および {{domxref("IntersectionObserverEntry")}}
