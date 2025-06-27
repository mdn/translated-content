---
title: "OffscreenCanvas: convertToBlob() メソッド"
short-title: convertToBlob()
slug: Web/API/OffscreenCanvas/convertToBlob
l10n:
  sourceCommit: daeff1a2efaae366bcc8b6d911d86985646e665e
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

**`OffscreenCanvas.convertToBlob()`** メソッドは、このキャンバスに含まれる画像を表す {{domxref("Blob")}} オブジェクトを作成します。

希望するファイル形式と画質を指定することができます。
ファイル形式が指定されていない場合、または指定された形式に対応していない場合、データは `image/png` としてエクスポートされます。
ブラウザーは `image/png` に対応している必要があります。多くのブラウザーは、`image/jpeg` や `image/webp` などの他の形式にも対応しています。

作成される画像には、エンコード解像度メタデータに 対応しているファイル形式の場合、96dpi の解像度が指定されます。

## 構文

```js-nolint
convertToBlob()
convertToBlob(options)
```

### 引数

- `options` {{optional_inline}}
  - : 以下のプロパティを持つオブジェクトです。
    - `type`
      - : 画像形式を示す文字列。
        既定の型は `image/png` です。指定した型に対応していない場合も、この画像形式が使用されます。
    - `quality`
      - : 0 と 1 の間の数値で、非可逆圧縮に対応しているファイル形式 （`image/jpeg` や `image/webp` など） を使用して画像を作成する際に使用する画質を示します。
        このオプションが指定されていない場合、または数値が許容範囲外の場合、ユーザーエージェントは既定の品質値を使用します。

### 返値

キャンバスに含まれている画像を {{domxref("Blob")}} オブジェクトとして返すプロミス ({{jsxref("Promise")}}) です。

### 例外

プロミスは、次の例外を除き、拒否される場合があります。

- `InvalidStateError` {{domxref("DOMException")}}
  - : `OffscreenCanvas` は切り離されていません。言い換えれば、それはまだ DOM に関連付けられており、現在のワーカーには関連付けられていません。

- `SecurityError` {{domxref("DOMException")}}
  - : キャンバスのコンテキストモードは 2d で、このビットマップはオリジンがクリーンではありません。少なくともそのコンテンツの一部は、文書自体が読み込まれたサイト以外のサイトから読み込まれた、あるいは読み込まれた可能性があるからです。

- `IndexSizeError` {{domxref("DOMException")}}
  - : キャンバスビットマップにはピクセルは存在しません （水平方向および垂直方向の寸法はいずれも 0 です）。

- `EncodingError` {{domxref("DOMException")}}
  - : エンコードエラーのため、blob を作成できませんでした。

## 例

```js
const offscreen = new OffscreenCanvas(256, 256);
const gl = offscreen.getContext("webgl");

// gl コンテキストを使用して描画を実行します。

offscreen.convertToBlob().then((blob) => console.log(blob));
// Blob { size: 334, type: "image/png" }
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このメソッドを定義しているインターフェイス、 {{domxref("OffscreenCanvas")}}
