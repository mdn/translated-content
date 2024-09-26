---
title: Barcode Detection API
slug: Web/API/Barcode_Detection_API
l10n:
  sourceCommit: 41d343d684f9f6e7199d408b209bcd0e077eb023
---

{{securecontext_header}}{{DefaultAPISidebar("Barcode Detection API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

Barcode Detection API 可用于检测图像中的条形码和二维码。

## 概念和用法

Web 应用程序中对条形码识别的支持通过支持的各种条形码格式解锁了各种用例。二维码可用于在线支付、网络导航或建立社交媒体连接，Aztec 码可用于扫描登机牌，购物应用程序可使用 EAN 或 UPC 条形码来比较实物商品的价格。

检测是通过 {{domxref('BarcodeDetector.detect()','detect()')}} 方法实现的，该方法接受一个图像对象；它可以是以下对象之一：{{domxref("HTMLImageElement")}}、{{domxref("SVGImageElement")}}、{{domxref("HTMLVideoElement")}}、{{domxref("HTMLCanvasElement")}}、{{domxref("ImageBitmap")}}、{{domxref("OffscreenCanvas")}}、{{domxref("VideoFrame")}}、{{domxref('Blob')}} 或 {{domxref('ImageData')}}。可以将可选参数传递给 {{domxref('BarcodeDetector')}} 构造函数，以提供有关要检测的条形码格式的提示。

### 支持的条形码格式

Barcode Detection API 支持以下条形码格式：

<table class="no-markdown">
  <thead>
    <tr>
      <th>格式</th>
      <th>描述</th>
      <th>图像</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>aztec</td>
      <td>
        一种遵循 iso24778 的方形二维矩阵，中心有方形牛眼图案，类似于阿兹特克金字塔。不需要周围的空白区域。
      </td>
      <td>
        <img
          alt="一个 aztec 条形码的示例图像。一个里面有较小的黑色和白色正方形的正方形"
          src="aztec.gif"
        />
      </td>
    </tr>
    <tr>
      <td>code_128</td>
      <td>
        一种线性（一维）、双向可解码、可自检的条形码，遵循 iso15417 标准，能够对 {{Glossary("ASCII")}} 的所有 128 个字符进行编码（因此而得名）。
      </td>
      <td>
        <img
          alt="一个 code-128 条形码的图像。一个垂直黑白线的水平布局图案"
          src="code-128.gif"
        />
      </td>
    </tr>
    <tr>
      <td>code_39</td>
      <td>
        一种遵循 iso16388 的线性（一维）可自检的条形码。它是一种离散且可变长度的条形码类型。
      </td>
      <td>
        <img
          alt="一个 code-39 条形码的图像。一个垂直黑白线的水平布局图案"
          src="code-39.png"
        />
      </td>
    </tr>
    <tr>
      <td>code_93</td>
      <td>
        一种 BC5 之后的可变长度的线性连续符号系统。它提供比 Code 128 和视觉上相似的 Code 39 更大的信息密度。Code 93 主要由加拿大邮政用来对补充的投递信息进行编码。
      </td>
      <td>
        <img
          alt="一个 code 93 条形码的图像。一个垂直黑白线的水平布局图案"
          src="code-93.png"
        />
      </td>
    </tr>
    <tr>
      <td>codabar</td>
      <td>
        一种表示字符 0-9、A-D 和符号 - . $ / + 的线性条形码。
      </td>
      <td>
        <img
          alt="一个 codabar 格式条形码的图像。一个黑白垂直线的水平布局团"
          src="codabar.png"
        />
      </td>
    </tr>
    <tr>
      <td>data_matrix</td>
      <td>
        一种与方向无关的二维码，由按照 ISO16022 标准排列成正方形或矩形图案的黑白模块组成。
      </td>
      <td>
        <img
          alt="一个数据矩阵条形码的示例。一个由较小的黑色和白色方块填充的正方形"
          src="data-matrix.png"
        />
      </td>
    </tr>
    <tr>
      <td>ean_13</td>
      <td>
        一种基于 UPC-A 标准并在 iso15420 中定义的线性条形码。
      </td>
      <td>
        <img
          alt="一个 EAN-13 格式条形码的图像。一个白色和黑色线条的水平布局的图案"
          src="ean-13.png"
        />
      </td>
    </tr>
    <tr>
      <td>ean_8</td>
      <td>一种在 ISO15420 中定义并源自 EAN-13 的线性条形码。</td>
      <td>
        <img
          alt="一个 EAN-8 格式条形码的图像。一个垂直黑白线的水平布局的图案"
          src="ean-8.png"
        />
      </td>
    </tr>
    <tr>
      <td>itf</td>
      <td>
        一种连续、自检、双向可解码的条形码。它始终编码 14 位数字。
      </td>
      <td>
        <img
          alt="一个 ITF 条形码的图像。一个白色和黑色线条的水平布局图案"
          src="ift.png"
        />
      </td>
    </tr>
    <tr>
      <td>pdf417</td>
      <td>
        一种具有多行和多列的连续二维条形码符号格式。它可双向解码并且使用 iso15438 标准。
      </td>
      <td>
        <img
          alt="一个 pdf417 条形码格式的示例。一个由较小的黑白正方形组成的矩形"
          src="pdf417.png"
        />
      </td>
    </tr>
    <tr>
      <td>qr_code</td>
      <td>
        一种采用 iso18004 标准的二维条形码。编码的信息可以是文本、URL 或其他数据。
      </td>
      <td>
        <img
          alt="一个二维码的示例。一个由较小的黑色和白色正方形组成的正方形"
          src="qr-code.png"
        />
      </td>
    </tr>
    <tr>
      <td>upc_a</td>
      <td>
        最常见的线性条形码类型之一，广泛应用于美国的零售业。在 iso15420 中定义，它通过条带和空格来表示数字，每个数字都与 2 个条块和 2 个空格的独特模式相关联，两者的宽度都是可变的。UPC-A 可以编码唯一分配给每个项目的 12 位数字，从技术上讲，它是 EAN-13 的子集（UPC-A 代码在 EAN-13 中表示，第一个字符设置为 0）。
      </td>
      <td>
        <img
          alt="一个 upc-a 条形码的图像。一个由黑白垂直线组成且下方有数字的矩形"
          src="upc-a.png"
        />
      </td>
    </tr>
    <tr>
      <td>upc_e</td>
      <td>
        一种 iso15420 中定义的 UPC-A 的变体，压缩掉不必要的零以获得更紧凑的条形码。
      </td>
      <td>
        <img
          alt="一个 upc-e 条形码的图像。一个由黑白垂直线组成的矩形"
          src="upc-e.png"
        />
      </td>
    </tr>
    <tr>
      <td>unknown</td>
      <td>
        平台使用此值来表示它不知道或未指定目前正在检测或支持的条形码格式。
      </td>
      <td></td>
    </tr>
  </tbody>
</table>

你可以通过 {{domxref('BarcodeDetector/getSupportedFormats_static','getSupportedFormats()')}} 方法检查用户代理支持的格式。

## 接口

- {{domxref("BarcodeDetector")}} {{Experimental_Inline}}
  - : Barcode Detection API 的 `BarcodeDetector` 接口允许检测图像中的条形码和二维码。

## 示例

### 创建检测器

此示例测试浏览器兼容性并使用指定的支持格式创建新的条形码检测器对象。

```js
// 检查兼容性
if (!("BarcodeDetector" in globalThis)) {
  console.log("此浏览器不支持条形码检测器。");
} else {
  console.log("条形码检测器是支持的！");

  // 创建新检测器
  const barcodeDetector = new BarcodeDetector({
    formats: ["code_39", "codabar", "ean_13"],
  });
}
```

### 获取支持的格式

以下示例调用 `getSupportedFormats()` 方法并将结果记录到控制台。

```js
// 检查支持的类型
BarcodeDetector.getSupportedFormats().then((supportedFormats) => {
  supportedFormats.forEach((format) => console.log(format));
});
```

### 检测条形码

此示例使用 `detect()` 方法来检测给定图像中的条形码。识别结果被迭代并且条形码数据被记录到控制台。

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

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [barcodefaq.com：包含有关不同条形码和不同类型示例的信息的网站。](https://www.barcodefaq.com/)
- [Shape Detection API：一张图片胜过一千个单词、人脸和条形码](https://developer.chrome.google.cn/docs/capabilities/shape-detection#barcodedetector)
