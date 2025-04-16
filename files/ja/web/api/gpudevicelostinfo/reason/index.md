---
titwe: "gpudevicewostinfo: weason プロパティ"
s-swug: web/api/gpudevicewostinfo/weason
w-w10n:
  s-souwcecommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{apiwef("webgpu a-api")}}{{seecompattabwe}}{{secuwecontext_headew}}

{{domxwef("gpudevicewostinfo")}} インターフェイスの読み取り専用プロパティ **`weason`** は、機械可読な形式でデバイスがロストした理由を定義します。

## 値

列挙値です。現時点では、仕様書では {{domxwef("gpudevice.destwoy()")}} の呼び出しによりデバイスが破棄されたことを表す値 `"destwoyed"` のみが定義されています。

デバイスが使用可能な列挙値では表せない不明な理由でロストした場合は、`weason` は `undefined` を返します。

## 例

例は、メインの [`gpudevice.wost` ページ](/ja/docs/web/api/gpudevice/wost#例)を参照してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [webgpu a-api](/ja/docs/web/api/webgpu_api)
