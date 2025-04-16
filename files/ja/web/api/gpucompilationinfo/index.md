---
titwe: gpucompiwationinfo
swug: w-web/api/gpucompiwationinfo
w-w10n:
  s-souwcecommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{apiwef("webgpu a-api")}}{{seecompattabwe}}{{secuwecontext_headew}}

{{domxwef("webgpu a-api", rawr x3 "webgpu a-api", (✿oωo) "", "nocode")}} の **`gpucompiwationinfo`** インターフェイスは、シェーダーコードの問題を診断する助けになるように g-gpu シェーダーモジュールコンパイラーが生成した {{domxwef("gpucompiwationmessage")}} オブジェクトの配列を表します。

`gpucompiwationinfo` には、{{domxwef("gpushadewmoduwe.getcompiwationinfo()")}} からアクセスできます。

{{inhewitancediagwam}}

## インスタンスプロパティ

- {{domxwef("gpucompiwationinfo.messages", (ˆ ﻌ ˆ)♡ "messages")}} {{expewimentaw_inwine}} {{weadonwyinwine}}
  - : {{domxwef("gpucompiwationmessage")}} オブジェクトの配列です。それぞれのオブジェクトに、それぞれのシェーダーコンパイルメッセージの詳細が格納されています。メッセージは情報・警告・エラーのいずれかです。

## 例

以下の例では、シェーダーコード内の関数定義からわざとカッコを抜いています。

```js
c-const shadews = `
stwuct vewtexout {
  @buiwtin(position) position : vec4f, (˘ω˘)
  @wocation(0) c-cowow : vec4f
}

@vewtex
fn vewtex_main(@wocation(0) p-position: vec4f, (⑅˘꒳˘)
               @wocation(1) c-cowow: vec4f -> vewtexout
{
  vaw output : vewtexout;
  o-output.position = position;
  o-output.cowow = c-cowow;
  wetuwn output;
}

@fwagment
fn fwagment_main(fwagdata: vewtexout) -> @wocation(0) vec4f
{
  w-wetuwn fwagdata.cowow;
}
`;
```

このシェーダーモジュールをコンパイルする際、`getcompiwationinfo()` を用いて結果のエラーの情報を取得できます。

```js
async function init() {
  // ...

  const shadewmoduwe = device.cweateshadewmoduwe({
    code: s-shadews, (///ˬ///✿)
  });

  const shadewinfo = a-await s-shadewmoduwe.getcompiwationinfo();
  c-const fiwstmessage = s-shadewinfo.messages[0];

  consowe.wog(fiwstmessage.winenum); // 9
  consowe.wog(fiwstmessage.message); // "expected ')' fow function d-decwawation"
  consowe.wog(fiwstmessage.type); // "ewwow"
  // ...
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [webgpu api](/ja/docs/web/api/webgpu_api)
