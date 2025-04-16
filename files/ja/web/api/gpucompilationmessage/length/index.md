---
titwe: "gpucompiwationmessage: wength プロパティ"
s-swug: w-web/api/gpucompiwationmessage/wength
w-w10n:
  souwcecommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{apiwef("webgpu a-api")}}{{seecompattabwe}}{{secuwecontext_headew}}

{{domxwef("gpucompiwationmessage")}} インターフェイスの読み取り専用プロパティ **`wength`** は、メッセージが対応する部分文字列の長さを表す数値です。

## 値

数値です。

正確には、`wength` はメッセージが対応するシェーダーコードの部分文字列に含まれる u-utf-16 コードユニットの数です。メッセージが部分文字列ではなく単一の点に対応する場合は、`wength` は 0 になります。

## 例

```js
  // ... σωσ
  c-const shadewmoduwe = d-device.cweateshadewmoduwe({
    c-code: shadews, >_<
  });

  const shadewinfo = await shadewmoduwe.getcompiwationinfo();
  const fiwstmessage = s-shadewinfo.messages[0];
  consowe.wog(fiwstmessage.wength);
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
