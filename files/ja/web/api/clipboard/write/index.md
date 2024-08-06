---
title: Clipboard.write()
slug: Web/API/Clipboard/write
---

{{APIRef("Clipboard API")}}

{{domxref("Clipboard")}} の **`write()`** メソッドは、画像などの任意のデータをクリップボードに書き込みます。切り取りやコピーの機能を実装するのに利用することができます。

[権限 API](/ja/docs/Web/API/Permissions_API) の `"clipboard-write"` 権限は、ページがアクティブなタブにあるときに自動的に付与されます。

> [!NOTE]
> 非同期クリップボード API に対するブラウザーの対応は、まだ実装の途上にあります。詳しくは、[互換性一覧表](#ブラウザーの互換性)と[クリップボードの可用性](/ja/docs/Web/API/Clipboard#クリップボードの可用性) を必ずチェックしてください。

## 構文

```js
write(data);
```

### 引数

- `data`
  - : クリップボードに書き込むデータを含む {{domxref("ClipboardItem")}} オブジェクトの配列です。

### 返値

クリップボードにデータが書き込まれたときに解決される{{jsxref("Promise")}}。クリップボードアクセスを完了できない場合、プロミスは拒否される。

## 例

この関数は、クリップボードの現在の内容を指定された文字列に置き換えます。

```js
function setClipboard(text) {
  const type = "text/plain";
  const blob = new Blob([text], { type });
  const data = [new ClipboardItem({ [type]: blob })];

  navigator.clipboard.write(data).then(
    () => {
      /* success */
    },
    () => {
      /* failure */
    },
  );
}
```

このコードでは、まず新しい {{domxref("Blob")}} オブジェクトを作成します。このオブジェクトは、クリップボードに送信される {{domxref("ClipboardItem")}} オブジェクトを構築するために必要です。 {{domxref("Blob")}} のコンストラクターはコピーしたいコンテンツとそのタイプを受け取ります。この {{domxref("Blob")}} オブジェクトは、例えば{{domxref("Canvas")}}など多くのソースから派生させることができます。

次に、クリップボードに送信するために Blob が配置される新しい {{domxref("ClipboardItem")}} オブジェクトを作成します。
domxref("ClipboardItem")}} コンストラクターに渡されるオブジェクトのキーはコンテンツの種類を、値はコンテンツを表します。次に `write()` が呼ばれ、履行関数とエラー関数の両方が指定されます。

### キャンバスの内容をクリップボードにコピーする例

```js
function copyCanvasContentsToClipboard(canvas, onDone, onError) {
  canvas.toBlob((blob) => {
    let data = [new ClipboardItem({ [blob.type]: blob })];

    navigator.clipboard.write(data).then(
      () => {
        onDone();
      },
      (err) => {
        onError(err);
      },
    );
  });
}
```

> [!NOTE]
> 一度に渡すことができるクリップボードの項目は 1 つだけです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [クリップボード API](/ja/docs/Web/API/Clipboard_API)
- [Async Clipboard API demo on Glitch](https://async-clipboard-api.glitch.me/)
- [Image support for Async Clipboard article](https://web.dev/async-clipboard/)
