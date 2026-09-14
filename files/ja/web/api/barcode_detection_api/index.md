---
title: バーコード検出 API
slug: Web/API/Barcode_Detection_API
l10n:
  sourceCommit: 41d343d684f9f6e7199d408b209bcd0e077eb023
---

{{securecontext_header}}{{DefaultAPISidebar("Barcode Detection API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

バーコード検出 API (Barcode Detection API) は、線形および二次元のバーコードを画像から検出します。

## 概念と使用方法

ウェブアプリケーションでバーコード認識に対応することで、対応しているバーコード形式を通じてさまざまな用途に利用できるようになります。 QR コードはオンライン決済、ウェブナビゲーション、ソーシャルメディア接続の確立に、アステカコードは搭乗券のスキャンに、ショッピングアプリは JAN、EAN、UPC バーコードを使用して物理的なアイテムの価格を比較するために使用することが可能です。

検出は {{domxref('BarcodeDetector.detect()','detect()')}} メソッドで行われ、これに画像オブジェクトを渡します。これは {{domxref("HTMLImageElement")}}、{{domxref("SVGImageElement")}}、{{domxref("HTMLVideoElement")}}、{{domxref("HTMLCanvasElement")}}、{{domxref("ImageBitmap")}}、{{domxref("OffscreenCanvas")}}、{{domxref("VideoFrame")}}、{{domxref('Blob')}}、{{domxref('ImageData')}} のいずれかです。オプションの引数を {{domxref('BarcodeDetector')}} コンストラクターに渡すことで、検出するバーコード形式のヒントを与えることができます。

### 対応しているバーコード形式

バーコード検出 API は、以下のバーコード形式に対応しています。

<table class="no-markdown">
  <thead>
    <tr>
      <th>形式</th>
      <th>説明</th>
      <th>画像</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>aztec</td>
      <td>
        正方形の二次元行列で、iso24778 に準拠しており、その中心にはアステカのピラミッドに似た、正方形の角灯パターンがあります。周囲に空白ゾーンを必要としません。
      </td>
      <td>
        <img
          alt="アステカバーコードのサンプル画像です。正方形の中に黒と白の小さな四角形が入っています。"
          src="aztec.gif"
        />
      </td>
    </tr>
    <tr>
      <td>code_128</td>
      <td>
        線形（一次元）、双方向復号可能、自己検査可能なバーコードです。iso15417 に準拠し、{{Glossary("ASCII")}} の 128 文字すべてを符号化できます（この名称の由来）
      </td>
      <td>
        <img
          alt="code-128 バーコードの画像です。黒と白の縦線が水平に分布しています。"
          src="code-128.gif"
        />
      </td>
    </tr>
    <tr>
      <td>code_39</td>
      <td>
        線形（一次元）の自己検査バーコードです。iso16388 に準拠した離散的で可変長のバーコードです。
      </td>
      <td>
        <img
          alt="code-39 バーコードの画像です。黒と白の縦線が水平に分布しています。"
          src="code-39.png"
        />
      </td>
    </tr>
    <tr>
      <td>code_93</td>
      <td>
        線形の可変長の連続的な記号であり、bc5 に準拠します。Code 128 よりも情報密度が高く、Code 39 に似た外見です。Code 93 は、主にカナダポストが配達の補足情報をエンコードするために使用しています。
      </td>
      <td>
        <img
          alt="code 93 形式のバーコードの画像です。黒と白の縦線が水平に分布しています。"
          src="code-93.png"
        />
      </td>
    </tr>
    <tr>
      <td>codabar</td>
      <td>
        線形のバーコードで、 0-9, A-D と記号 - . $ / + の文字を表します。
      </td>
      <td>
        <img
          alt="codebar 形式のバーコードの画像です。黒と白の縦線が水平に分布しています。"
          src="codabar.png"
        />
      </td>
    </tr>
    <tr>
      <td>data_matrix</td>
      <td>
        方向に依存しない二次元バーコードであり、黒と白のモジュールを正方形または長方形に配列したもので、iso16022 に準拠しています。
      </td>
      <td>
        <img
          alt="データマトリクスバーコードの一例。正方形の中に白と黒の小さな正方形が埋め尽くされています。"
          src="data-matrix.png"
        />
      </td>
    </tr>
    <tr>
      <td>ean_13</td>
      <td>
        線形バーコードで、UPC-A 規格に基づき、ISO15420 で定義されています。
      </td>
      <td>
        <img
          alt="EAN-13 形式のバーコードの画像です。黒と白の縦線が水平に分布しています。"
          src="ean-13.png"
        />
      </td>
    </tr>
    <tr>
      <td>ean_8</td>
      <td>線形バーコードで、iso15420 で定義され、EAN-13 から派生したものです。</td>
      <td>
        <img
          alt="EAN-8 形式のバーコードの画像です。黒と白の縦線が水平に分布しています。"
          src="ean-8.png"
        />
      </td>
    </tr>
    <tr>
      <td>itf</td>
      <td>
        連続的、自己チェック、双方向にデコード可能なバーコードです。常に 14 桁の数字がエンコードされています。
      </td>
      <td>
        <img
          alt="ITF バーコードの画像です。黒と白の縦線が水平に分布しています。"
          src="ift.png"
        />
      </td>
    </tr>
    <tr>
      <td>pdf417</td>
      <td>
        複数行、複数列の連続した二次元バーコードの記号化形式です。双方向にデコード可能で、 iso15438 規格を使用しています。
      </td>
      <td>
        <img
          alt="pdf417バーコードのフォーマットの例です。白黒の小さな四角形が並んでいます。"
          src="pdf417.png"
        />
      </td>
    </tr>
    <tr>
      <td>qr_code</td>
      <td>
        二次元バーコードで、ISO18004 規格をしています。エンコードされる情報は、テキスト、URL、その他のデータです。
      </td>
      <td>
        <img
          alt="QR コードの一例です。白と黒の小さな四角形が並んでいます。"
          src="qr-code.png"
        />
      </td>
    </tr>
    <tr>
      <td>upc_a</td>
      <td>
        最も一般的な線形バーコードの一つで、米国では小売業に広く適用されています。 ISO15420 で定義されており、バーとスペースで数字を表現し、各桁は幅が可変のバー 2 本とスペース 2 本の一意なパターンと関連付けられています。 UPC-A は、各商品に一意に割り当てられる 12 桁の数字をエンコードでき、技術的には EAN-13 のサブセットです（UPC-A コードは、最初の文字を 0 に設定した EAN-13 で表現されます）。
      </td>
      <td>
        <img
          alt="upc-a バーコードの画像です。白黒の縦線の長方形で、その下に数字が書かれています。"
          src="upc-a.png"
        />
      </td>
    </tr>
    <tr>
      <td>upc_e</td>
      <td>
        UPC-A の変化形で、ISO15420 で定義されており、不要なゼロを圧縮してよりコンパクトなバーコードにしたものです。
      </td>
      <td>
        <img
          alt="upc-e バーコードの画像です。黒と白の縦線が入った長方形です。"
          src="upc-e.png"
        />
      </td>
    </tr>
    <tr>
      <td>unknown</td>
      <td>
        この値は、プラットフォームが検出中のバーコードを解釈できない、または特定できない、または対応していないことを表すために使用されます。
      </td>
      <td></td>
    </tr>
  </tbody>
</table>

ユーザーエージェントが対応している形式は、 {{domxref('BarcodeDetector/getSupportedFormats_static','getSupportedFormats()')} メソッドで確認することができます。

## インターフェイス

- {{domxref("BarcodeDetector")}} {{Experimental_Inline}}
  - : `BarcodeDetector` インターフェイスはバーコード検出 API のインターフェイスで、画像内の線形および二次元バーコードを検出できるようにします。

## 例

### 検出器の作成

この例では、ブラウザーの互換性をチェックし、指定されたサポート形式で、新しいバーコード検出器オブジェクトを作成します。

```js
// 互換性をチェック
if (!("BarcodeDetector" in globalThis)) {
  console.log("Barcode Detector はこのブラウザーでは対応していません。");
} else {
  console.log("Barcode Detector に対応しています。");

  // 新しい検出器を生成
  const barcodeDetector = new BarcodeDetector({
    formats: ["code_39", "codabar", "ean_13"],
  });
}
```

### 対応している形式の取得

次の例では、 `getSupportedFormats()` メソッドを呼び出し、結果をコンソールに記録しています。

```js
// 対応している型をチェック
BarcodeDetector.getSupportedFormats().then((supportedFormats) => {
  supportedFormats.forEach((format) => console.log(format));
});
```

### バーコードの検出

この例では、 `detect()` メソッドを使用して、与えられた画像内のバーコードを検出しています。これらは繰り返し処理され、バーコードのデータはコンソールに記録されます。

```js
barcodeDetector
  .detect(imageEl)
  .then((barcodes) => {
    barcodes.forEach((barcode) => console.log(barcode.rawValue));
  })
  .catch((err) => {
    console.log(err);
  });
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [barcodefaq.com: A website with information about different barcodes and examples of the different types.](https://www.barcodefaq.com/)
- [The Shape Detection API: a picture is worth a thousand words, faces, and barcodes](https://developer.chrome.com/docs/capabilities/shape-detection#barcodedetector)
