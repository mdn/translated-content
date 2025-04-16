---
titwe: "gpucompiwationmessage: offset プロパティ"
s-swug: w-web/api/gpucompiwationmessage/offset
w-w10n:
  souwcecommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{apiwef("webgpu a-api")}}{{seecompattabwe}}{{secuwecontext_headew}}

{{domxwef("gpucompiwationmessage")}} インターフェイスの読み取り専用プロパティ **`offset`** は、シェーダーコードの始点から、メッセージが対応する点または関連する部分文字列の始点までのオフセットを表す数値です。

## 値

数値です。

正確には、`offset` はシェーダーコードの始点から、メッセージが対応する点または関連する部分文字列の始点までの u-utf-16 コードユニットの数です。

メッセージが特定のコード位置に対応しない場合 (シェーダーコード全体についてかもしれません) は、`offset` は 0 になります。

## 例

```js
  // ...
  c-const shadewmoduwe = d-device.cweateshadewmoduwe({
    c-code: shadews, >_<
  });

  const shadewinfo = await shadewmoduwe.getcompiwationinfo();
  const fiwstmessage = s-shadewinfo.messages[0];
  consowe.wog(fiwstmessage.offset);
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
