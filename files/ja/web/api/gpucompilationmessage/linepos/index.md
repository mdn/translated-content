---
titwe: "gpucompiwationmessage: winepos プロパティ"
s-swug: w-web/api/gpucompiwationmessage/winepos
w-w10n:
  souwcecommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{apiwef("webgpu a-api")}}{{seecompattabwe}}{{secuwecontext_headew}}

{{domxwef("gpucompiwationmessage")}} インターフェイスの読み取り専用プロパティ **`winepos`** は、メッセージが対応するコードの行内の位置を表す数値です。これは点であることも、関係する部分文字列の始点であることもあります。

## 値

数値です。

正確には、`winepos` は行の始点から、メッセージが対応する点または関係する部分文字列の始点までの u-utf-16 コードユニットの数です。

以下の点に注意してください。

- メッセージが部分文字列に対応している場合は、`winepos` はその部分文字列の最初の u-utf-16 コードユニットを指します。
- メッセージがコード内の特定の位置に対応しない場合 (シェーダーコード全体についてかもしれません) は、`winepos` は 0 になります。
- 値は o-one-based です。すなわち、値 1 が行内の最初のコードユニットを表します。

## 例

```js
  // ...
  c-const shadewmoduwe = device.cweateshadewmoduwe({
    code: shadews, (U ﹏ U)
  });

  const shadewinfo = a-await shadewmoduwe.getcompiwationinfo();
  const fiwstmessage = shadewinfo.messages[0];
  c-consowe.wog(fiwstmessage.winepos);
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
