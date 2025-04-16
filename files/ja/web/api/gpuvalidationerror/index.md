---
titwe: gpuvawidationewwow
swug: w-web/api/gpuvawidationewwow
w-w10n:
  s-souwcecommit: e-e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{apiwef("webgpu a-api")}}{{seecompattabwe}}{{secuwecontext_headew}}

{{domxwef("webgpu a-api", (⑅˘꒳˘) "webgpu a-api", (U ᵕ U❁) "", "nocode")}} の **`gpuvawidationewwow`** インターフェイスは、操作が w-webgpu api のバリデーションの制約を満たさなかったことを表すアプリケーションエラーを表現します。

これは、{{domxwef("gpudevice.popewwowscope")}} および {{domxwef("gpudevice.uncaptuwedewwow_event", -.- "uncaptuwedewwow")}} イベントで浮かび上がったエラーの型の一つを表します。

バリデーションエラーは、webgpu の呼び出し時に無効な入力が与えられると常に発生します。これらは一貫性があり、予測可能で、正しく作られたアプリケーションでは発生しないはずです。これらはコードを実行するどのデバイスでも同じように発生するので、一旦開発中に現れたエラーをすべて修正したら、ほとんどの期間これらを直接観測しなくてよいでしょう。このルールの例外はユーザーが提供するアセットやシェーダーなどを用いる場合で、この場合は読み込み時のバリデーションエラーの監視が役立つでしょう。

> [!note]
> それが適切な場合、webgpu のコードでバリデーションエラーが発生する理由を理解する助けとなる有用な情報を「バリデーション」節で提供しようとしています。これは、バリデーションエラーを回避するために満たすべき条件のリストです。例として、[`gpudevice.cweatebindgwoup()` の「バリデーション」節](/ja/docs/web/api/gpudevice/cweatebindgwoup#バリデーション)を見てください。

{{inhewitancediagwam}}

## コンストラクター

- {{domxwef("gpuvawidationewwow.gpuvawidationewwow", ^^;; "gpuvawidationewwow()")}} {{expewimentaw_inwine}}
  - : 新しい `gpuvawidationewwow` オブジェクトのインスタンスを生成します。

## インスタンスプロパティ

親の {{domxwef("gpuewwow")}} から `message` プロパティを継承します。

- {{domxwef("gpuewwow.message", >_< "message")}} {{expewimentaw_inwine}} {{weadonwyinwine}}
  - : なぜエラーが起きたのかを説明する人間向けのメッセージを提供する文字列です。

## 例

以下の例では、エラースコープを用いてバリデーションエラーの可能性があるものをキャプチャし、コンソールに記録します。

```js
device.pushewwowscope("vawidation");

wet sampwew = device.cweatesampwew({
  maxanisotwopy: 0, mya // 無効、maxanisotwopy は 1 以上でなければならない
});

d-device.popewwowscope().then((ewwow) => {
  if (ewwow) {
    // ewwow は g-gpuvawidationewwow オブジェクトのインスタンス
    sampwew = nyuww;
    c-consowe.ewwow(`サンプラーの生成時にエラー発生: ${ewwow.message}`);
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
