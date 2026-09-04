---
title: "HTMLImageElement: sizes プロパティ"
short-title: sizes
slug: Web/API/HTMLImageElement/sizes
l10n:
  sourceCommit: fde38492f4490cb442affcf2a31e66defa9d76f6
---

{{APIRef("HTML DOM")}}

**`sizes`** は {{domxref("HTMLImageElement")}} インターフェイスのプロパティで、[画像](/ja/docs/Web/HTML/Reference/Elements/img)のレイアウト上の幅を指定できます。[メディアクエリー](/ja/docs/Web/CSS/Guides/Media_queries)のリストの各項目ごとに指定できるほか、遅延読み込みされる画像に対しては `auto` を指定することで、要素のレイアウトサイズに基づいてブラウザーが自動的に表示させる画像を選択することができるようにします。
これにより、ブラウザーは要素の {{domxref("HTMLImageElement/srcset", "srcset")}} で指定されたさまざまな画像の中から、さまざまなメディア条件に一致するものを選べます。方向やアスペクト比が異なる画像であっても同様です。

`sizes` プロパティは、`<img>` 要素の [`sizes`](/ja/docs/Web/HTML/Reference/Elements/img#sizes) コンテンツ属性を反映します。
これは、`srcset` で幅記述子が使用されている場合にのみ存在します。

## 値

`auto` キーワード（任意で、その後に任意の数のソースサイズが続く場合もある）か、1つ以上のソースサイズからなる文字列です。

詳細については、HTML の `<img>` リファレンスの [`sizes`](/ja/docs/Web/HTML/Reference/Elements/img#sizes) 属性を参照してください。

## 例

### ウィンドウの幅に合わせて画像を選択

この例では、ブラウザーが `sizes` 属性を使用して、画像を現在のビューポート幅における画像のレンダリング幅に基づいて `srcset` から選択する仕組みを示しています。
同時に、ブラウザーウィンドウのサイズを変更した際に、どの画像が読み込まれるかという効果を確認することもできます。

#### HTML

遅延読み込みの効果を実証するためには、画像を当初は{{glossary("visual viewport", "視覚的ビューポート")}}から非表示にし、その後スクロールして表示領域内に表示させる必要があります。
これは、`spacer` および `demo-wrap` コンテナーを含む外側の `scroll-container` の {{htmlelement("div")}} を使用することで実現されます。
画像は `demo-wrap` コンテナー内に含まれており、`spacer` コンテナーに設定された高さによって、このコンテナーが視覚的ビューポートの外側に押し出されます。

この {{htmlelement("img")}} 要素には以下の属性があります。

- `srcset` では 4 つの画像が定義しており、それらの幅が `600px`、`900px`、`1200px`、`1500px` であることを示しています。
- `src` は、`srcset` が対応していない場合や構文解析できない場合に使用する画像を指定します。
  `srcset` の中で最も大きな画像を使用します。これは、最も小さな画像を拡大するよりも、大きな画像を縮小する方が、常に良好な結果が得られるためです。
- `loading` は `lazy` です。
- `sizes` は、ビューポート幅の各ブレイクポイントにおける画像の想定レンダリング幅を指定し、これによりブラウザーが `srcset` から最適な画像を選択することができるようになります。

```html
<div id="scroll-container">
  画像を表示するには上にスクロールしてください
  <div id="spacer"></div>
  <div id="demo-wrap">
    <div class="img-container" id="resizable">
      <div class="img-square">
        <img
          loading="lazy"
          sizes="(max-width: 600px) 600px, (max-width: 900px) 900px, (max-width: 1200px) 1200px, 1500px"
          src="1500.png"
          srcset="600.png 600w, 900.png 900w, 1200.png 1200w, 1500.png 1500w"
          alt="画像の例" />
      </div>
      <div class="label">
        <strong>コンテナー幅: <span id="width-label"></span></strong>
      </div>
    </div>
  </div>
</div>
```

```html hidden
<pre id="log"></pre>
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
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

```css hidden
#scroll-container {
  height: 600px;
  overflow-y: scroll;
  border: 2px solid #cccccc;
}
#spacer {
  height: 620px;
}
#demo-wrap {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  align-items: flex-start;
  padding: 16px;
}
.img-container {
  border: 2px solid #cccccc;
  overflow: hidden;
}
.img-square {
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
}
.img-square img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.label {
  font-size: 13px;
  padding: 6px 10px;
  background: whitesmoke;
}
#resizable {
  width: 100%;
}
```

```js hidden
// ログ出力
const images = document.querySelectorAll(".img-square img");
const widthLabel = document.getElementById("width-label");

function updateWidthLabel() {
  widthLabel.textContent = `${document.getElementById("resizable").offsetWidth}px`;
}

updateWidthLabel();
new ResizeObserver(updateWidthLabel).observe(
  document.getElementById("resizable"),
);

images.forEach((img) => {
  if (img.complete) {
    log(`${img.currentSrc} (${img.offsetWidth}px) はキャッシュ済みです`);
  }
  img.addEventListener("load", () => {
    log(`${img.currentSrc} (${img.offsetWidth}px container) を読み込みました`);
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        log(`${img.alt} がビューポートに入りました`);
        observer.unobserve(img);
      }
    });
  },
  {
    root: document.getElementById("scroll-container"),
    rootMargin: "0px",
    threshold: 0.1,
  },
);

images.forEach((img) => observer.observe(img));
```

CSS と JavaScript は非表示です（これらを確認したい場合は、「再生」を選択して、対話型プレイグラウンドでサンプル全体を表示してください）。

#### 結果

この例は{{LiveSampleLink('ウィンドウの幅に合わせて画像を選択', '別ウィンドウで開く')}}のがいいでしょう。そうすれば、サイズを自由に調整でき、例が親フレームの制約を受けることもありません。

1. フレームをスクロールして画像を表示させてください。
   画像の下部にあるラベルには、現在のコンテナーの幅が示されています。
2. ウィンドウのサイズを変更してみてください。`sizes` 属性のメディアクエリーのブレイクポイントで、画像が変化するのが確認できるはずです。

   選択した画像は、コンテナーの幅だけから推測されるよりも大きい場合があることに注意してください。
   多くのディスプレイ（おそらく大半）は、[デバイスピクセル比 (DPR)](/ja/docs/Web/API/Window/devicePixelRatio) が 1 より大きくなっています。
   ディスプレイの物理ピクセル密度で鮮明な画像を表示するために、ブラウザーは、`srcset` から選択を行う前に、一致した `sizes` ヒントに DPR を乗算します。
   例えば、ビューポートが 2× で 500px 以下のディスプレイの場合、一致するヒントは `600px` ですが、ブラウザーは 1200px 以下の画像を見ていき、利用できるサイズの中で最も近い `1200.png` を選択し、利用可能な空間に収まるように拡縮します。

   > [!NOTE]
   > その結果、特定のブレイクポイントにおいて、特定のディスプレイでは `srcset` に指定された画像の一部にアクセスできない場合があり、これはブラウザーによって異なる可能性があります。

{{EmbedLiveSample("Selecting an image to fit window width", "", 600)}}

このログには、画像に対して `load` イベントが発生したタイミングや、画像が表示領域と交差したタイミングに関する情報が記録されます。
なお、画像は遅延読み込みされるため、`load` イベントは、画像がビューポートに入る直前に発生するはずです。

### 遅延読み込みされる画像の自動選択

この例では、{{htmlelement("img")}} 要素が遅延読み込みされる際、`sizes` の値を `auto` に設定すると、[`srcset`](/ja/docs/Web/HTML/Reference/Elements/img#srcset) から読み込む画像の選択にどのような影響があるかを示しています。
同時に、コンテナーのサイズを変更した際に、読み込まれた画像にどのような効果が出るかを確認することもできます。

#### HTML

HTML は前回の例と似ていますが、3 つのほぼ同一の {{htmlelement("img")}} 要素が定義されている点が異なります。それぞれの要素には、幅が `600px`、`400px`、`200px` の 3 つの画像を示す `srcset` 属性があり、`sizes` の値は `auto` となっています。
これらは、さまざまな画像を選択できるようにサイズが調整されたコンテナー内に収められています。

```html
<div id="scroll-container">
  画像を表示するには上にスクロールしてください
  <div id="spacer"></div>
  <div id="demo-wrap">
    <div class="img-container img-container--sm" id="resizable">
      <div class="img-square">
        <img
          loading="lazy"
          sizes="auto"
          src="600.png"
          srcset="600.png 600w, 400.png 400w, 200.png 200w"
          alt="小さなコンテナーの画像" />
      </div>
      <div class="label"><strong>コンテナー幅: 100px</strong></div>
    </div>

    <div class="img-container img-container--md">
      <div class="img-square">
        <img
          loading="lazy"
          sizes="auto"
          src="600.png"
          srcset="600.png 600w, 400.png 400w, 200.png 200w"
          alt="中くらいのコンテナーの画像" />
      </div>
      <div class="label"><strong>コンテナー幅: 200px</strong></div>
    </div>

    <div class="img-container img-container--lg">
      <div class="img-square">
        <img
          loading="lazy"
          sizes="auto"
          src="600.png"
          srcset="600.png 600w, 400.png 400w, 200.png 200w"
          alt="大きなコンテナーの画像" />
      </div>
      <div class="label"><strong>コンテナー幅: 400px</strong></div>
    </div>
  </div>
</div>
```

```html hidden
<div id="controls">
  <label for="slider">最初の画像の幅:</label>
  <input type="range" id="slider" min="100" max="700" value="100" step="1" />
  <input type="number" id="number" min="100" max="700" value="100" step="1" />
  <span>px</span>
</div>
```

```html hidden
<pre id="log"></pre>
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
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

#### CSS

ここでは、さまざまな画像コンテナーのサイズを設定する CSS クラスを示します。

```css hidden
#scroll-container {
  height: 400px;
  overflow-y: scroll;
  border: 2px solid #cccccc;
}
#spacer {
  height: 600px;
}
#demo-wrap {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  align-items: flex-start;
  padding: 16px;
}
.img-container {
  border: 2px solid #cccccc;
  overflow: hidden;
}
.img-square {
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
}
.img-square img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.label {
  font-size: 13px;
  padding: 6px 10px;
  background: whitesmoke;
}
```

```css hidden
#controls {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}
#number {
  width: 60px;
}
```

```css
.img-container--sm {
  width: 100px;
}
.img-container--md {
  width: 200px;
}
.img-container--lg {
  width: 400px;
}
```

```js hidden
const slider = document.getElementById("slider");
const number = document.getElementById("number");
const resizable = document.getElementById("resizable");
const resizableImg = resizable.querySelector("img");
const resizableLabel = resizable.querySelector(".label strong");

function setSize(px) {
  px = Math.min(700, Math.max(100, px));
  resizable.style.width = `${px}px`;
  resizableImg.sizes = `${px}px`; // ブラウザーが新しい srcset 候補を選択可能になるよう、サイズを更新する
  resizableLabel.textContent = `${px}px`;
  slider.value = px;
  number.value = px;
}

slider.addEventListener("input", () => setSize(slider.valueAsNumber));
number.addEventListener("input", () => setSize(number.valueAsNumber));

// ログ出力
const images = document.querySelectorAll(".img-square img");

images.forEach((img) => {
  if (img.complete) {
    log(`${img.currentSrc} (${img.offsetWidth}px) はキャッシュ済みです`);
  }
  img.addEventListener("load", () => {
    log(`${img.currentSrc} (${img.offsetWidth}px container) を読み込みました`);
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        log(`Entered viewport: ${img.alt}`);
        observer.unobserve(img);
      }
    });
  },
  {
    root: document.getElementById("scroll-container"),
    rootMargin: "0px",
    threshold: 0.1,
  },
);

images.forEach((img) => observer.observe(img));
```

残りの CSS や、スライダーやログ出力などを制御する JavaScript は表示していません（これらを確認したい場合は、「再生」を選択して、対話的プレイグラウンドでサンプル全体をご覧ください）。

#### 結果

フレームをスクロールして、3 つの画像を表示してください。
ブラウザーは、幅の制約の違いに基づいて、それぞれの画像を選択しているはずです。
スライダーを使って、最初の画像のコンテナーのサイズを変更することができます。
なお、コンテナーのサイズが変化しても、ブラウザーが新しい画像を選択して表示するかどうかは実装次第であり、動的な変化に反応することが必須ではないため、必ずしも新しい画像が表示されるとは限りません。

{{EmbedLiveSample("Automatic image selection for lazy loaded images", "", 600)}}

このログには、それぞれの画像に対して `load` イベントが発生したタイミングや、画像が可視ビューポートと重なるタイミングに関する情報が記録されます。
なお、画像は遅延読み込みされるため、`load` イベントは画像がビューポートに入る直前に発生するはずです。
また、最初の画像のコンテナーサイズを変更した際にも `load` イベントが発生しますが、これはブラウザーがレイアウトを再計算したことを示すものであり（必ずしも新しい画像が読み込まれたことを意味するわけではありません）、この点にもご注意ください。

### ブログの例

ソースサイズを使用してウィンドウの幅に合わせて画像を選択する方法を示す、もう少し実用的な例を示します。

この例では、ブログ風のレイアウトを作成し、テキストと画像を表示します。画像は、ウィンドウの幅に応じて 3 つのサイズポイントが指定されています。
画像も 3 種類用意し、それぞれの幅を指定しています。ブラウザーはこれらの情報をすべて受け取り、指定された値に最も合う画像と幅を選択します。

画像がどのように使われるかは、ブラウザーやユーザーのディスプレイの画素密度に依存する場合があります。

この例の下にあるボタンで、実際に `sizes` プロパティを少し変更し、画像の 3 つの幅のうち最大のものを 40em と 50em の間で切り替えています。

#### HTML

```html-nolint
<article>
  <h1>素晴らしい見出し</h1>
  <div class="test"></div>
  <p>
    これはさらにすごいコンテンツテキストです。実に見事です。そして、とても魅力的です。ああ、同時に賢く、ユーモアもあります。間違いなく受賞作級の出来ですね。
  </p>
  <img
    src="new-york-skyline-wide.jpg"
    srcset="
      new-york-skyline-wide.jpg 3724w,
      new-york-skyline-4by3.jpg 1961w,
      new-york-skyline-tall.jpg 1060w
    "
    sizes="(50em <= width <= 60em) 50em,
              (40em <= width < 50em) 30em,
              (width < 40em) 20em"
    alt="晴れた日のニューヨークのスカイライン。中央には新しいワン・ワールド・トレード・センターがついている。" />
  <p>
    それから、ここにはまだすごい話があります。信じられる？僕は到底信じられないよ。
  </p>

  <button id="break40">最終的な幅: 40em</button>
  <button id="break50">最終的な幅: 50em</button>
</article>
```

#### CSS

```css
article {
  margin: 1em;
  max-width: 60em;
  min-width: 20em;
  border: 4em solid #880e4f;
  border-radius: 7em;
  padding: 1.5em;
  font:
    16px "Open Sans",
    "Verdana",
    "Helvetica",
    "Arial",
    sans-serif;
}

article img {
  display: block;
  max-width: 100%;
  border: 1px solid #888888;
  box-shadow: 0 0.5em 0.3em #888888;
  margin-bottom: 1.25em;
}
```

#### JavaScript

JavaScript のコードでは、3 つ目の幅のオプションを 40em と 50em の間で切り替えることができる 2 つのボタンを処理しています。これは {{domxref("Element.click_event", "click")}} イベントを処理することで、 JavaScript 文字列オブジェクトの {{jsxref("String.replace", "replace()")}} メソッドを使って `sizes` 文字列の該当部分を置換して実現しています。

```js
const image = document.querySelector("article img");
const break40 = document.getElementById("break40");
const break50 = document.getElementById("break50");

break40.addEventListener(
  "click",
  () => (image.sizes = image.sizes.replace(/50em,/, "40em,")),
);

break50.addEventListener(
  "click",
  () => (image.sizes = image.sizes.replace(/40em,/, "50em,")),
);
```

#### 結果

このページは{{LiveSampleLink('Selecting an image to fit window width', '独自のウィンドウで見る')}}ほうが、大きさを完全に調整できるので適しています。

1. 開発者ツールを有効にして、ページの幅を変更してみてください。メディアクエリーのブレークポイントである `640px` (`40em`) および `800px` (`50em`) で、画像が変化し（サイズが跳ね上がる）、確認できるはずです。
2. 最後のメディアクエリーが適用されるように、幅を `50em` `(800px)` から `60em` (`960px`) の間に設定してください。
   次に、それぞれのボタンを順番に押してみて、画像のレイアウトサイズがどのように変化するかを確認してください。メモを取ってください。

{{EmbedLiveSample("Blog example", "", 1050)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [メディアクエリー](/ja/docs/Web/CSS/Guides/Media_queries)
- [メディアクエリーの使用](/ja/docs/Web/CSS/Guides/Media_queries/Using)
- [HTML における画像](/ja/docs/Learn_web_development/Core/Structuring_content/HTML_images)
- [レスポンシブ画像](/ja/docs/Web/HTML/Guides/Responsive_images)
- [`srcset` および `sizes` 属性の使用](/ja/docs/Web/HTML/Reference/Elements/img#srcset_および_sizes_属性の使用)
- {{domxref("HTMLImageElement.currentSrc")}}
- {{domxref("HTMLImageElement.src")}}
- {{domxref("HTMLImageElement.srcset")}}
