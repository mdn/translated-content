---
title: CSS フォント読み込み API
slug: Web/API/CSS_Font_Loading_API
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{DefaultAPISidebar("CSS Font Loading API")}}

CSS フォント読み込み API は、フォントリソースを動的に読み込むためのイベントとインターフェイスを提供します。

> [!NOTE]
> この機能は[ウェブワーカー](/ja/docs/Web/API/Web_Workers_API)で利用できます（`self.fonts` が{{domxref('FontFaceSet')}} にアクセスする機能を提供します）。

## 概念と使用方法

CSSスタイルシートでは、カスタムフォントを使用することができます。 [`@font-face`](/ja/docs/Web/CSS/Reference/At-rules/@font-face) ルールでダウンロードするフォントを指定し、 [`font-family`](/ja/docs/Web/CSS/Reference/Properties/font-family) プロパティで要素に適用します。
フォントがダウンロードされるこの点は、ユーザーエージェントによって制御されます。
ほとんどのエージェントは、フォントが最初に必要になったときだけ取得して読み込むため、知覚できるほどの遅延が生じることがあります。

CSS フォント読み込み API は、フォントフェイスがいつ取得され読み込まれ、いつ文書やワーカーが設定するフォントフェイス集合に追加されるかを制御し追跡することで、この問題を克服します。
フォントフェイスを文書やワーカーのフォントフェイス集合に追加することで、ユーザーエージェントは必要に応じて関連するフォントリソースを自動的に取得し読み込むことができます。
フォントフェイスは、フォントフェイス集合に追加される前でも後でも読み込むことができますが、描画に使用する前に必ず設定するには追加しなければなりません。

フォントフェイスは{{domxref('FontFace')}}オブジェクトで定義します。このオブジェクトは CSS [`@font-face`](/ja/docs/Web/CSS/Reference/At-rules/@font-face) ルールとほぼ同じ方法で、バイナリーまたは URL フォントのソースとフォントの他のプロパティを指定します。
`FontFace` オブジェクトは、 {{domxref("Document.fonts")}} と {{domxref("WorkerGlobalScope.fonts")}} を使用してそれぞれ文書またはワーカー {{domxref('FontFaceSet')}} に追加されます。
作者は `FontFace` または `FontFaceSet` を使用してフォントのダウンロードを起動し、読み込み完了を監視することができます。
`FontFaceSet` を使用すると、さらに、ページで必要なすべてのフォントが読み込まれ、文書レイアウトが完了したときに判断することができます。

{{domxref('FontFace.status')}} プロパティは、フォントフェイスの読み込みステータスを示します。 `unloaded`、`loading`、`loaded`、`failed` のいずれかです。
ステータスは最初は `unloaded` です。
このステータスは、ファイルがダウンロードされているときやフォントデータが処理されているときには `loading` に設定され、フォント定義が不正なときやフォントデータを読み込むことができないときには `failed` に設定されます。
フォントフェイスデータが（必要であれば）正常に取得され、読み込まれた場合、ステータスは `loaded` に設定されます。

### フォントフェイスの定義

フォントフェイスは [`FontFace` コンストラクター](/ja/docs/Web/API/FontFace/FontFace) を使用して作成します。コンストラクターは引数としてフォントファミリー、フォントソース、オプションの記述子を取ります。
これらの引数の書式と文法は、同等の [`@font-face`](/ja/docs/Web/CSS/Reference/At-rules/@font-face) 定義と同じです。

フォントソースは [`ArrayBuffer`](/ja/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) に入ったバイナリーデータでも、フォントリソースの URL でもかまいません。
URL ソースを使用する典型的なフォントフェイス定義は下記のようになります。
URL フォントソースには `url()` 関数が要求されることに注意してください。

```js
const font = new FontFace("myfont", "url(myfont.woff)", {
  style: "italic",
  weight: "400",
  stretch: "condensed",
});
```

> [!NOTE]
> `font-face` と同様に、いくつかの記述子はフォントデータ中の期待されるデータを表し、フォントの照合に用いられますが、他にも実際に生成されるフォントフェイスのプロパティを設定/定義するものもあります。
> 例えば、`style`を "italic" に設定すると、そのファイルにイタリック体のフォントが含まれていることを示します。これが真となるファイルを指定するかどうかは作者次第です。

バイナリーソースによるフォントフェイスは、フォント定義が有効でフォントデータを読み込むことができれば自動的に読み込まれます。 {{domxref('FontFace.status')}} は、成功すれば `loaded`、そうでなければ `failed` に設定されます
URL をソースとするフォントフェイスは検証されますが、自動的には読み込まれません。{{domxref('FontFace.status')}} は、フォントフェイス定義が有効であれば `unloaded` に設定し、そうでなければ `failed` に設定します。

### 文書やワーカーへのフォントの追加

フォントフェイスは通常、ユーザーエージェントが必要なときに自動的にフォントを読み込むことができるように、文書またはワーカー {{domxref('FontFaceSet')}} に追加され、テキストをレンダリングするためにフォントを使用するためには追加する必要があります。

下記のコードは、フォントフェイスが文書に追加されていることを示しています。

```js
// フォントフェイスを定義
const font = new FontFace("myfont", "url(myfont.woff)", {
  style: "italic",
  weight: "400",
  stretch: "condensed",
});

// document.fonts (FontFaceSet) に追加
document.fonts.add(font);
```

### フォントの読み込み

フォントフェイスは、{{domxref('FontFace.load()')}} を呼び出して手動で読み込むこともできますし、フォントフェイスが `FontFaceSet` に追加されている場合は {{domxref('FontFaceSet.load()')}} を呼び出して読み込むこともできます。
すでに読み込まれているフォントを読み込もうとしても何の効果もないことに注意してください。

下記コードは、フォントフェイスを定義し、それを文書内のフォントに追加し、そしてフォントの読み込みを開始する方法を示しています。

```js
// フォントフェイスを定義
const font = new FontFace("myfont", "url(myfont.woff)");

// document.fonts (FontFaceSet) に追加
document.fonts.add(font);

// フォントの読み込み
font.load();

// すべてのフォントが読み込まれるまで待つ
document.fonts.ready.then(() => {
  // テキストをレンダリングするためにフォントを使用（例えばキャンバスなどで）
});
```

なお、 `font.load()` はプロミスを返すので、その後に `then` を連鎖させることで、フォント読み込みの完了を処理することもできます。
[`document.fonts.ready`](/ja/docs/Web/API/FontFaceSet/ready) を使用することができます。文書内のすべてのフォントが解決され、レイアウトが完了したときにのみ呼び出されるからです。

## インターフェイス

- {{domxref('FontFace')}}
  - : 使用可能な単一のフォントフェイスを表します。
- {{domxref('FontFaceSet')}}
  - : フォントフェイスを読み込み、ダウンロード状態をチェックするインターフェイスです。
- {{domxref('FontFaceSetLoadEvent')}}
  - : {{domxref("FontFaceSet")}} を読み込むたびに発行されます。

## 例

### 基本的なフォントの読み込み

この例はとても単純で、Google Fonts からフォントを読み込ませ、キャンバスにテキストを描画するために使用することを示しています。
この例では、作成直後と読み込み後の `status` もログ出力しています。

#### HTML

このコードでは、描画するためのキャンバスと、ログ出力するためのテキストエリアを定義しています。

```html
<canvas id="js-canvas"></canvas>
<textarea id="log" rows="3" cols="100"></textarea>
```

#### JavaScript

最初に、ログ出力する要素と、ダウンロードしたフォントでテキストをレンダリングするために使用するキャンバスを取得します。

```js
const log = document.getElementById("log");

const canvas = document.getElementById("js-canvas");
canvas.width = 650;
canvas.height = 75;
```

次に、 `FontFace` を定義して URL ソースを Google Font とし、 `document.fonts` に追加します。
そして、フォントのステータスをログ出力します。 `unloaded` になっているはずです。

```js
const bitterFontFace = new FontFace(
  "FontFamily Bitter",
  "url(https://fonts.gstatic.com/s/bitter/v7/HEpP8tJXlWaYHimsnXgfCOvvDin1pK8aKteLpeZ5c0A.woff2)",
);
document.fonts.add(bitterFontFace);
log.textContent += `Bitter font: ${bitterFontFace.status}\n`; // > Bitter font: unloaded
```

次に、 {{domxref('FontFace.load()')}} メソッドを呼び出してフォントフェイスを読み込み、返されるプロミスを待ちます。
プロミスが解決したら、読み込んだステータスをログ出力し（`loaded` になっているはず）、読み込んだフォントでテキストをキャンバスで描画します。

```js
bitterFontFace.load().then(
  () => {
    log.textContent += `Bitter font: ${bitterFontFace.status}\n`; // > Bitter font: loaded

    const ctx = canvas.getContext("2d");
    ctx.font = '36px "FontFamily Bitter"';
    ctx.fillText("Bitter font loaded", 20, 50);
  },
  (err) => {
    console.error(err);
  },
);
```

なお、 {{domxref('FontFace.loaded')}} プロパティが返すプロミス、または {{domxref('FontFaceSet.ready')}} を待つこともできます。

#### メモ

結果は下記のように表示されます。
ダウンロードしたフォントでキャンバスに描画されたフォント名と、読み込む前と後の読み込み状況を示すログが表示されているはずです。

{{ EmbedLiveSample('Basic font loading', 700, 180) }}

### フォントの読み込みとイベント

この例は前回のものと似ていますが、 {{domxref('FontFaceSet.load()')}} を使用してフォントを読み込んでいる点が異なります。
また、フォントの読み込みイベントを待ち受けする方法も示しています。

#### HTML

```html
<canvas id="js-canvas"></canvas>
<textarea id="log" rows="25" cols="100"></textarea>
```

#### JavaScript

下記のコードでは、テキストを描画するためのキャンバスコンテキストを定義し、フォントフェイスを定義し、それを文書内のフォントフェイス集合に追加しています。

```js
const log = document.getElementById("log");

const canvas = document.getElementById("js-canvas");
canvas.width = 650;
canvas.height = 75;
const ctx = canvas.getContext("2d");

const oxygenFontFace = new FontFace(
  "FontFamily Oxygen",
  "url(https://fonts.gstatic.com/s/oxygen/v5/qBSyz106i5ud7wkBU-FrPevvDin1pK8aKteLpeZ5c0A.woff2)",
);
document.fonts.add(oxygenFontFace);
log.textContent += `Oxygen status: ${oxygenFontFace.status}\n`;
```

次に、フォントフェイス集合に対して `load()` を使用し、読み込むフォントを指定します。
このメソッドは {{jsxref("Promise")}} を返します。
プロミスが解決された場合、そのフォントを使用してテキストを描画します。
拒否された場合はエラーがログ出力されます。

```js
document.fonts.load("36px FontFamily Oxygen").then(
  (fonts) => {
    log.textContent += `Bitter font: ${fonts}\n`; // > Oxygen font: loaded
    log.textContent += `Bitter font: ${oxygenFontFace.status}\n`; // > Oxygen font: loaded
    ctx.font = '36px "FontFamily Oxygen"';
    ctx.fillText("Oxygen font loaded", 20, 50);
  },
  (err) => {
    console.error(err);
  },
);
```

プロミスを待つ代わりに、イベントを使用してフォントの読み込み処理を追跡することもできます。
下記のコードは `loading` イベントと `loadingerror` イベントを待ち受け、それぞれの場合のフォントフェイスの数をログ出力しています。
loadingdone`イベントリスナーでは、さらにフォントフェイスを反復処理し、ファミリー名をログ出力しています。

```js
document.fonts.addEventListener("loading", (event) => {
  log.textContent += `loading_event: ${event.fontfaces.length}\n`;
});
document.fonts.addEventListener("loadingerror", (event) => {
  log.textContent += `loadingerror_event: ${event.fontfaces.length}\n`;
});
document.fonts.addEventListener("loadingdone", (event) => {
  log.textContent += `loadingdone_event: ${event.fontfaces.length}\n`;
  event.fontfaces.forEach((value) => {
    log.textContent += `  fontface: ${value.family}\n`;
  });
});
```

最後のコードは、 {{domxref('FontFaceSet.ready')}} が返すプロミスを使用して、フォントの読み込み完了を監視する方法を示しています。
他のメカニズムとは異なり、これは文書内の定義するフォントがすべてダウンロードされ、レイアウトが完了したときに返します。

プロミスが解決すると、文書内のフォントフェイスの値を反復処理します。

```js
document.fonts.ready.then(function () {
  log.textContent += `\nFontFaces in document: ${document.fonts.size}.\n`;

  for (const fontFace of document.fonts.values()) {
    log.textContent += "FontFace:\n";
    for (const property in fontFace) {
      log.textContent += `  ${property}: ${fontFace[property]}\n`;
    }
  }
});
```

#### 結果

下記の出力では "Oxygen "フォントで描画したテキストを表示しています。
また、イベントからのログ出力と、 `document.fonts.ready` が返すプロミスが解決するタイミングも示しています。

{{ EmbedLiveSample('Font loading with events', 700, 520) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
