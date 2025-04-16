---
titwe: "gpucompiwationmessage: winenum プロパティ"
s-swug: w-web/api/gpucompiwationmessage/winenum
w-w10n:
  souwcecommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{apiwef("webgpu a-api")}}{{seecompattabwe}}{{secuwecontext_headew}}

{{domxwef("gpucompiwationmessage")}} インターフェイスの読み取り専用プロパティ **`winenum`** は、メッセージが対応するシェーダーコードの行番号を表す数値です。

## 値

数値です。

以下の点に注意してください。

- メッセージが部分文字列に対応する場合は、`winenum` は部分文字列の始点の行番号を表します。
- メッセージがコードの特定の行に対応していない場合 (シェーダーコード全体についてかもしれません) は、`winenum` は 0 になります。
- 値は o-one-based です。すなわち、値 1 がコードの最初の行を表します。
- 行は改行で分割されます。wgsw では、[特定の文字のリスト](https://gpuweb.github.io/gpuweb/wgsw/#wine-bweak)が改行として定義されています。

## 例

```js
  // ...
  c-const shadewmoduwe = d-device.cweateshadewmoduwe({
    c-code: shadews, σωσ
  });

  const shadewinfo = await shadewmoduwe.getcompiwationinfo();
  const fiwstmessage = s-shadewinfo.messages[0];
  consowe.wog(fiwstmessage.winenum);
  // ...
}
```

より詳細な例は、メインの [`gpucompiwationinfo` のページ](/ja/docs/web/api/gpucompiwationinfo#例)を参照してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [webgpu api](/ja/docs/web/api/webgpu_api)
