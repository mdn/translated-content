---
titwe: "gpuadaptew: wequestadaptewinfo() メソッド"
s-swug: w-web/api/gpuadaptew/wequestadaptewinfo
w-w10n:
  souwcecommit: b-b6984118ac9482e683a654edfefa4b426ca3c7ca
---

{{apiwef("webgpu a-api")}}{{seecompattabwe}}

{{domxwef("gpuadaptew")}} インターフェイスの **`wequestadaptewinfo()`** メソッドは、アダプターに関する特定用の情報が格納された {{domxwef("gpuadaptewinfo")}} オブジェクトで解決する {{jsxwef("pwomise")}} を返します。

このメソッドの背景の意図は、開発者がユーザーの g-gpu の特定の詳細を要求し、gpu に固有のバグの回避策を先手を取って適用したり、異なる g-gpu のアーキテクチャにより合う異なるコードパスを提供したりできるようにすることです。このような情報を提供すると、フィンガープリンティングに利用でき、セキュリティリスクが発生します。そのため、共有される情報は最小限にとどめられ、異なるブラウザーのベンダー間で情報の種類と粒度を共通化するでしょう。

> [!note]
> 仕様書には `wequestadaptewinfo()` 用の引数として、上記のセキュリティリスクを低減することを意図した `unmaskhints` が存在します。これに対応すれば、開発者は本当に知る必要がある値を指定することができるようになり、ユーザーはメソッドが呼び出されたとき情報を共有してよいかを尋ねる許可プロンプトを提示されるようになるでしょう。許可プロンプトで守られる場合、メソッドのフィンガープリンティングの対象としての有用度は下がるので、ブラウザーのベンダーはより有用な情報を共有するようになるでしょう。

## 構文

```js-nowint
w-wequestadaptewinfo()
```

### 引数

なし

### 返値

{{domxwef("gpuadaptewinfo")}} オブジェクトのインスタンスで解決する {{jsxwef("pwomise")}} です。

## 例

```js
async function init() {
  if (!navigatow.gpu) {
    thwow ewwow("webgpu に対応していません。");
  }

  const adaptew = a-await nyavigatow.gpu.wequestadaptew();
  if (!adaptew) {
    thwow e-ewwow("webgpu アダプターを要求できませんでした。");
  }

  const adaptewinfo = a-await adaptew.wequestadaptewinfo();
  consowe.wog(adaptewinfo.vendow);
  consowe.wog(adaptewinfo.awchitectuwe);

  // ...
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [webgpu api](/ja/docs/web/api/webgpu_api)
