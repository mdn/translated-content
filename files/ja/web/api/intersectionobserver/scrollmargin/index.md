---
title: "IntersectionObserver: scrollMargin プロパティ"
short-title: scrollMargin
slug: Web/API/IntersectionObserver/scrollMargin
l10n:
  sourceCommit: bc9f7bec1ab48f29d241e38a9f1598f783f6b60a
---

{{APIRef("Intersection Observer API")}}

**`scrollMargin`** は {{domxref("IntersectionObserver")}} インターフェイスの読み取り専用のプロパティで、ルート要素内に含まれるすべての{{glossary("scroll container","スクロールコンテナー")}}にマージンを追加します。ルート要素自体がスクロールコンテナーの場合も含みます。

これは、交差を計算する前にスクロール可能なコンテナーのクリップ矩形を拡張または縮小します。
これにより、例えば、対象要素がコンテナー内のビューポートにまだ表示されていない場合でも可視と見なされるようスクロールコンテナーの境界を調整したり、対象要素の端がコンテナーの境界ボックスの端に近すぎる場合に部分的に隠れていると見なしたりすることが可能になります。

ルート要素がスクロール可能なコンテナーでもあれば、 `scrollMargin` と {{domxref("IntersectionObserver/rootMargin","rootMargin")}} が組み合わされ、ターゲットとの交差を計算するために使用される実効的な境界矩形が決定されます。

詳しくは、 API 概要にある[交差ルートとスクロールマージン](/ja/docs/Web/API/Intersection_Observer_API#交差ルートとスクロールマージン)を参照してください。

## 値

文字列で、 CSS の {{cssxref("margin")}} プロパティの値と同様の書式のものです。

指定されたマージンは、スクロールコンテナーのクリップ矩形の 1 つ以上の辺に対するオフセットを定義します。
オブジェクトのインスタンス化時に `scrollMargin` が指定されていない場合、既定値は文字列 `"0px 0px 0px 0px"` となります。

## 例

### スクロールマージン付きのカルーセル

下記の例では、スクロール可能なボックス（ルート要素）と、初期状態では画面外にある画像カルーセルがあります。
ルート要素上のオブザーバーが、カルーセル内の対象となる画像要素を監視します。
画像要素がルート要素と交差し始めた時点で、画像が読み込まれた、交差がログ出力され、オブザーバーが除去されます。

この例では、`scrollMargin` を変更することで、カルーセルのスクロール可能なコンテナー内の対象が重なり始める際の挙動を確認できます。

#### HTML

```html hidden
<button id="reset" type="button">リセット</button>
```

下記のコードは、`root-container` の {{htmlelement("div")}} 要素を定義するものです。これは、交差オブザーバーにおいてルート要素として使用することができます。
この要素にはさらに、他の要素を「既定で」画面外に押し出すために使用される {{htmlelement("p")}} 要素、`carousel` の `<div>`、および `margin-indicator` （ルート要素内のスクロール可能要素に適用されるマージンのサイズを示すために使用される）が含まれています。

カルーセル内の {{htmlelement("img")}} 要素には、ファイル名を含む `data-src` 属性が設定されています。
オブザーバーのコードでは、それぞれの画像がルート要素と交差し始めた際にこの属性を使用して `img.src` を設定し、画像を読み込みます。

```html
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

```html
<div class="controls">
  <label>
    スクロールルートの右マージンを設定:
    <input id="margin" type="number" value="0" step="5" />px
  </label>
</div>
```

```html hidden
<pre id="log"></pre>
```

#### CSS

```css
#root-container {
  height: 250px;
  overflow-y: auto;
  border: solid blue;
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
  background-color: #eeeeee; /* プレースホルダーの背景 */
}

.controls {
  margin-top: 10px;
}
```

```css hidden
#log {
  height: 100px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### JavaScript

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

コードの最初の部分では、関数 `createImageObserver()` を定義しており、これを使用して `IntersectionObserver` オブジェクトを作成し、`imageObserver` 変数に代入しています。
オブザーバーのオプションは構築後に変更できないため、この関数を使用して、様々な `scrollMargin` 値の効果を実証できるようにしています。

`IntersectionObserver` は、 `rootMargin` を指定せず、 `threshold` をほぼゼロに設定し、 `scrollMargin` は `margin` 入力から値を取得し、スクロールコンテナーのすべての辺に適用されるように作成されます。

コールバックは、すべての監視対象のターゲットに対して呼び出されます。
交差した監視対象に対しては、 `img.src` を読み込まれた画像の名前（`img.dataset.src` から取得）に設定し、交差をログ出力した後、その画像の監視を停止します。

関数の終わりにあるコードは、それぞれの画像に対して {{domxref("IntersectionObserver.observe()")}} を呼び出し、オブザーバーが始まるようにします。

```js
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
    rootMargin: "0px", // 追加マージンなし
    scrollMargin: `${margin.valueAsNumber}px`, // 追加マージンなし / 設定可能
    threshold: 0.01, // 画像の 1% が表示されたときに起動
  };

  imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        log(`交差: ${img.dataset.src}`); // 最初の交差のみ
        img.src = `https://mdn.github.io/shared-assets/images/examples/${img.dataset.src}`; // src を設定して画像を読み込む
        img.classList.remove("lazy-carousel-img"); // クラスを除去
        observer.unobserve(img); // 読み込まれた後は監視を停止
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
    imageObserver.observe(image); // それぞれの画像の監視を始める
  });
}
```

次のコードは、開始時および `margin` 入力値が変更されるたびに `createImageObserver()` を使用してオブザーバーを生成します。
`IntersectionObserver` インターフェイスに非対応の場合、すべての画像を直ちに読み込みます。

```js
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

#### 結果

上にスクロールすると表示されます。
表示されている画像はすぐに読み込まれるはずです。
右にスクロールした場合、要素が表示された瞬間に画像が読み込まれているのが確認できるはずです。

（例をリセットした後）提供されているコントロールを使用してスクロールマージンの割合を調整することができます。
20% のような正の値を設定すると、スクロールコンテナーのクリップ矩形が 20% 拡張され、画像が表示範囲に入る前に検出・読み込まれる様子が確認できるはずです。
同様に、負の値を設定すると、画像が既に表示範囲内にある時点で交差が検出されるようになります。

{{EmbedLiveSample("Carousel with scroll margin","100%","500px")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
