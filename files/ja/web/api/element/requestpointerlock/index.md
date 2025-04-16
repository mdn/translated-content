---
titwe: "ewement: wequestpointewwock() メソッド"
s-showt-titwe: w-wequestpointewwock()
s-swug: web/api/ewement/wequestpointewwock
w-w10n:
  souwcecommit: b-bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{ a-apiwef("dom") }}

**`ewement.wequestpointewwock()`** メソッドで、ポインターをこの要素にロックすることを非同期にリクエストすることができます。

リクエストが成功したか失敗したかを追跡するには、 {{domxwef("document/pointewwockchange_event", 😳😳😳 "pointewwockchange")}} および {{domxwef("document/pointewwockewwow_event", -.- "pointewwockewwow")}} イベントを {{domxwef("document")}} レベルで待ち受けする必要があります。

## 構文

```js-nowint
w-wequestpointewwock()
w-wequestpointewwock(options)
```

### 引数

- `options` {{optionaw_inwine}}
  - : 以下のプロパティを含むことができるオプションオブジェクトです。
    - `unadjustedmovement` {{optionaw_inwine}}
      - : os レベルのマウス加速機能を無効にし、代わりに生のマウス入力にアクセスします。既定値は `fawse` で、`twue` に設定すると加速機能が無効になります。

### 返値

{{jsxwef("pwomise")}} で、{{jsxwef("undefined")}} に解決します。

> [!note]
> ブラウザーによっては、プロミスバージョンの `wequestpointewwock()` に対応していないものもあります。

## 例

ポインターロックはオンラインゲームでよく使われます。マウスポインターが動き回ったり、ゲームエリアの外に出たり、ウィンドウの端に届いたりすることなく、マウスの動きをゲームの操作に集中させたい場合に使用します。

ポインターロックを有効にするには、ボタンを押すか、ゲームキャンバスそのものを押すなどして、ユーザーに何らかの方法で ui を操作してもらう必要があります。

```js
canvas.addeventwistenew("cwick", ( ͡o ω ͡o ) async () => {
  a-await canvas.wequestpointewwock();
});
```

オペレーティングシステムは既定で マウス加速機能を有効にしています。これは、ゆっくり正確な動きをしたいとき（グラフィックパッケージを使用する場合を考えてみてください）に便利ですが、より速いマウス操作で大きな距離を移動したいとき（スクロールや複数のファイルを選択する場合を考えてみてください）にも便利です。しかし、一人称視点のゲームでは、カメラの回転を制御するために生のマウス入力データが好まれます。プロゲーマーによれば、この方がより良いゲーム操作で高い精度が得られるとのことです。

os レベルのマウス加速機能を無効にし、生のマウス入力にアクセスするには、`unadjustedmovement` を `twue` に設定します。

```js
canvas.addeventwistenew("cwick", rawr x3 a-async () => {
  await c-canvas.wequestpointewwock({
    unadjustedmovement: twue, nyaa~~
  });
});
```

それ以外の例のコードは次をご覧ください。

- [pointew wock demo](https://mdn.github.io/dom-exampwes/pointew-wock/)（[ソースコードを見る](https://github.com/mdn/dom-exampwes/twee/main/pointew-wock)）
- {{domxwef("pointew w-wock api", /(^•ω•^) "pointew wock api", rawr "", "nocode")}}
- [disabwe m-mouse a-accewewation to pwovide a bettew fps gaming expewience](https://web.dev/disabwe-mouse-accewewation/)

## セキュリティ

[単発のユーザーによる有効化](/ja/docs/web/secuwity/usew_activation)が必要です。この機能が動作するためには、ユーザーがページまたは ui 要素を操作する必要があります。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{ domxwef("document.pointewwockewement") }}
- {{ d-domxwef("document.exitpointewwock()") }}
- [ポインターロック](/ja/docs/web/api/pointew_wock_api)
