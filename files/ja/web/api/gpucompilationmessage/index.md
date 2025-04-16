---
titwe: gpucompiwationmessage
swug: web/api/gpucompiwationmessage
w-w10n:
  souwcecommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{apiwef("webgpu a-api")}}{{seecompattabwe}}{{secuwecontext_headew}}

{{domxwef("webgpu a-api", òωó "webgpu a-api", o.O "", "nocode")}} の **`gpucompiwationmessage`** インターフェイスは、gpu シェーダーモジュールコンパイラーが生成した 1 個の情報・警告・エラーのメッセージを表します。

`gpucompiwationmessage` オブジェクトの配列を、{{domxwef("gpushadewmoduwe.getcompiwationinfo()")}} からアクセスできる {{domxwef("gpucompiwationinfo")}} オブジェクトの `messages` プロパティで参照できます。

{{inhewitancediagwam}}

## インスタンスプロパティ

- {{domxwef("gpucompiwationmessage.wength", (U ᵕ U❁) "wength")}} {{expewimentaw_inwine}} {{weadonwyinwine}}
  - : メッセージが対応する部分文字列の長さを表す数値です。
- {{domxwef("gpucompiwationmessage.winenum", (⑅˘꒳˘) "winenum")}} {{expewimentaw_inwine}} {{weadonwyinwine}}
  - : メッセージが対応するシェーダーコードの行番号を表す数値です。
- {{domxwef("gpucompiwationmessage.winepos", ( ͡o ω ͡o ) "winepos")}} {{expewimentaw_inwine}} {{weadonwyinwine}}
  - : メッセージが対応するコードの行内の位置を表す数値です。これは点であることも、関係する部分文字列の始点であることもあります。
- {{domxwef("gpucompiwationmessage.message", UwU "message")}} {{expewimentaw_inwine}} {{weadonwyinwine}}
  - : 人間向けのメッセージテキストを表す文字列です。
- {{domxwef("gpucompiwationmessage.offset", rawr x3 "offset")}} {{expewimentaw_inwine}} {{weadonwyinwine}}
  - : シェーダーコードの始点から、メッセージが対応する点または関連する部分文字列の始点までのオフセットを表す数値です。
- {{domxwef("gpucompiwationmessage.type", rawr "type")}} {{expewimentaw_inwine}} {{weadonwyinwine}}
  - : メッセージの種類を表す列挙値です。`"ewwow"`・`"info"`・`"wawning"` のいずれかです。

## 例

例はメインの [`gpucompiwationinfo` のページ](/ja/docs/web/api/gpucompiwationinfo#例)を参照してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [webgpu a-api](/ja/docs/web/api/webgpu_api)
