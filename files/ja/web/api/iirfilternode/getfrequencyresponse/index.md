---
title: "IIRFilterNode: getFrequencyResponse() メソッド"
slug: Web/API/IIRFilterNode/getFrequencyResponse
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{ APIRef("Web Audio API") }}

`getFrequencyResponse()` は {{ domxref("IIRFilterNode") }} インターフェイスのメソッドで、現在のフィルタリングアルゴリズムの設定を受け取り、指定した周波数の配列で指定した周波数に対する周波数レスポンスを計算します。

2 つの出力配列 `magResponseOutput` と `phaseResponseOutput` は、このメソッドを呼び出す前に作成する必要があります。これらは、入力周波数の値の配列 (`frequencyArray`) と同じサイズでなければなりません。

## 構文

```js-nolint
getFrequencyResponse(frequencyArray, magResponseOutput, phaseResponseOutput)
```

### 引数

- `frequencyArray`
  - : {{jsxref("Float32Array")}} で、フィルターしたいヘルツ単位の周波数の配列が入ったものです。
- `magResponseOutput`
  - : {{jsxref("Float32Array")}} で、`frequencyArray` の各周波数値に対して計算された周波数レスポンスの大きさを受け取ります。
- `phaseResponseOutput`
  - : {{jsxref("Float32Array")}} で、入力 `frequencyArray` の各周波数値に対して計算された位相レスポンスの値をラジアン単位で受け取ります。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

- `NotSupportedError` {{domxref("DOMException")}}
  - : 指定された 3 つの配列がすべて同じ長さでない場合に発生します。

## 例

次の例では、メディアストリームで IIR フィルターを使用しています（完全なフルデモについては、[stream-source-buffer デモ](https://mdn.github.io/webaudio-examples/stream-source-buffer/)をライブで参照するか、[ソースを読んでください](https://github.com/mdn/webaudio-examples/blob/master/stream-source-buffer/index.html)）。このデモでは、この IIR フィルターの周波数レスポンスを、5 つのサンプル周波数について取得します。入力周波数を格納するオブジェクトと、出力のマグニチュードとフェーズ値を受け取るためのオブジェクトを 2 つ、それぞれ作成する必要があります。

```js
const myFrequencyArray = new Float32Array(5);
myFrequencyArray[0] = 1000;
myFrequencyArray[1] = 2000;
myFrequencyArray[2] = 3000;
myFrequencyArray[3] = 4000;
myFrequencyArray[4] = 5000;

const magResponseOutput = new Float32Array(5);
const phaseResponseOutput = new Float32Array(5);
```

次に、結果を含む HTML に {{ htmlelement("ul") }} 要素を作成し、JavaScript でその参照を取得します。

```html
<p>IIR filter frequency response for:</p>
<ul class="freq-response-output"></ul>
```

```js
const freqResponseOutput = document.querySelector(".freq-response-output");
```

最後に、フィルターを作成した後、`getFrequencyResponse()` を使用してレスポンスデータを生成して配列に入れ、各データ集合をループ処理してページの下部に人間が読めるリストとして出力しています。

```js
const feedforwardCoefficients = [0.1, 0.2, 0.3, 0.4, 0.5];
const feedbackCoefficients = [0.5, 0.4, 0.3, 0.2, 0.1];

const iirFilter = audioCtx.createIIRFilter(
  feedforwardCoefficients,
  feedbackCoefficients,
);

// …

function calcFrequencyResponse() {
  iirFilter.getFrequencyResponse(
    myFrequencyArray,
    magResponseOutput,
    phaseResponseOutput,
  );

  for (let i = 0; i < myFrequencyArray.length; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = `${myFrequencyArray[i]}Hz: Magnitude ${magResponseOutput[i]}, Phase ${phaseResponseOutput[i]} radians.`;
    freqResponseOutput.appendChild(listItem);
  }
}

calcFrequencyResponse();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブオーディオ API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- {{domxref("IIRFilterNode")}}
- {{domxref("AudioNode")}}
