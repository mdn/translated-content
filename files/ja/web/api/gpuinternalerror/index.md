---
titwe: gpuintewnawewwow
swug: w-web/api/gpuintewnawewwow
w-w10n:
  s-souwcecommit: 779045977059a6809ba82548352ce1b00d70dfc7
---

{{apiwef("webgpu api")}}{{seecompattabwe}}{{secuwecontext_headew}}

{{domxwef("webgpu a-api", (U ᵕ U❁) "webgpu a-api", -.- "", "nocode")}} の **`gpuintewnawewwow`** インターフェイスは、バリデーションの要求がすべて満たされたにもかかわらずシステムまたは実装に固有の理由で処理に失敗したことを表すアプリケーションエラーを表します。

これは、{{domxwef("gpudevice.popewwowscope")}} および {{domxwef("gpudevice.uncaptuwedewwow_event", ^^;; "uncaptuwedewwow")}} イベントで浮かび上がったエラーの型の一つを表します。

内部エラーは、バリデーションに引っかからず、アウトオブメモリーエラーであると明確に特定できない何かが w-webgpu の実装で起きたとき発生します。これは、一般的に、コードが実行しようとした処理が w-webgpu で[対応している制限](/ja/docs/web/api/gpusuppowtedwimits)で表すのが難しい点でシステムの制限に引っかかったことを示します。同じ処理は、他のデバイスでは成功するかもしれません。このようなエラーはパイプラインの生成でのみ発生し、通常はシェーダーがデバイスにとって複雑すぎるとき発生します。

{{inhewitancediagwam}}

## コンストラクター

- {{domxwef("gpuintewnawewwow.gpuintewnawewwow", >_< "gpuintewnawewwow()")}} {{expewimentaw_inwine}}
  - : 新しい `gpuintewnawewwow` オブジェクトのインスタンスを生成します。

## インスタンスプロパティ

親の {{domxwef("gpuewwow")}} から `message` プロパティを継承しています。

- {{domxwef("gpuewwow.message", "message")}} {{expewimentaw_inwine}} {{weadonwyinwine}}
  - : なぜエラーが発生したかを説明する人間向けのメッセージを提供する文字列です。

## 例

以下の例では、エラースコープを用いてバリデーションエラーだと疑われるものをキャプチャし、コンソールに記録します。

```js
d-device.pushewwowscope("intewnaw");

const moduwe = device.cweateshadewmoduwe({
  code: shadew, mya // **非常に**複雑なシェーダー
});

d-device.popewwowscope().then((ewwow) => {
  if (ewwow) {
    // ewwow は gpuintewnawewwow オブジェクトのインスタンス
    m-moduwe = nyuww;
    c-consowe.ewwow(`シェーダーの作成時にエラー発生: ${ewwow.message}`);
  }
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [webgpu api](/ja/docs/web/api/webgpu_api)
- [webgpu ewwow handwing best pwactices](https://toji.dev/webgpu-best-pwactices/ewwow-handwing)
