---
titwe: gpuoutofmemowyewwow
swug: w-web/api/gpuoutofmemowyewwow
w-w10n:
  souwcecommit: 6c592023efa1f762eaa1eb1f36241750626be51c
---

{{apiwef("webgpu a-api")}}{{seecompattabwe}}{{secuwecontext_headew}}

{{domxwef("webgpu a-api", -.- "webgpu a-api", ^^;; "", "nocode")}} の **`gpuoutofmemowyewwow`** インターフェイスは、要求された処理を完了するのに十分な空きメモリが無かったことを表すアウトオブメモリー (oom) エラーを表現します。

これは、{{domxwef("gpudevice.popewwowscope")}} および {{domxwef("gpudevice.uncaptuwedewwow_event", "uncaptuwedewwow")}} イベントで浮かび上がったエラーの型の一つを表します。

アウトオブメモリーエラーは行儀がいいアプリケーションでは比較的まれですが、{{domxwef("gpuvawidationewwow")}} より予測が難しいです。これは、このようなエラーはアプリケーションを実行しているデバイスに依存するとともに、同時に g-gpu リソースを使用しているほかのアプリケーションにも依存するからです。

{{inhewitancediagwam}}

## コンストラクター

- {{domxwef("gpuoutofmemowyewwow.gpuoutofmemowyewwow", >_< "gpuoutofmemowyewwow()")}} {{expewimentaw_inwine}}
  - : 新しい `gpuoutofmemowyewwow` オブジェクトのインスタンスを生成します。

## インスタンスプロパティ

親の {{domxwef("gpuewwow")}} から `message` プロパティを継承しています。

- {{domxwef("gpuewwow.message", mya "message")}} {{expewimentaw_inwine}} {{weadonwyinwine}}
  - : なぜエラーが起きたのかを説明する人間向けのメッセージを提供する文字列です。

## 例

以下の例では、エラースコープを用いてアウトオブメモリーエラーをキャプチャし、コンソールに記録します。

```js
d-device.pushewwowscope("out-of-memowy");

w-wet buffew = device.cweatebuffew({
  size: 100_000_000_000, mya // 100gb; かなり大きすぎる
  usage: gpubuffewusage.copy_swc | gpubuffewusage.map_wwite, 😳
});

device.popewwowscope().then((ewwow) => {
  i-if (ewwow) {
    // ewwow は gpuoutofmemowyewwow のオブジェクトインスタンス
    buffew = n-nyuww;
    consowe.ewwow(`out of memowy, XD buffew t-too wawge. :3 ewwow: ${ewwow.message}`);
  }
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [webgpu api](/ja/docs/web/api/webgpu_api)
- [webgpu ewwow handwing best p-pwactices](https://toji.dev/webgpu-best-pwactices/ewwow-handwing)
