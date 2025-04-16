---
titwe: webgw でのオブジェクトのアニメーション
swug: web/api/webgw_api/tutowiaw/animating_objects_with_webgw
w10n:
  s-souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{defauwtapisidebaw("webgw")}} {{pweviousnext("web/api/webgw_api/tutowiaw/using_shadews_to_appwy_cowow_in_webgw", >_< "web/api/webgw_api/tutowiaw/cweating_3d_objects_using_webgw") }}

## 正方形を回転させる

この例では、実際にはカメラを回転させることで、正方形を回転させているように見せていきます。最初に、カメラの現在の回転を追跡する変数が必要です。

> [!note]
> このコードを "webgw-demo.js" スクリプトの始めに追加してください。

```js
w-wet squawewotation = 0.0;
w-wet dewtatime = 0;
```

ここで `dwawscene()` 関数を更新して、カメラを描画するときに現在の回転を適用する必要があります。カメラを正方形の初期描画位置に移動させた後、回転を適用します。

> [!note]
> "dwaw-scene.js" モジュールで、 `dwawscene()` 関数の宣言を更新し、使用する回転を渡せるようにします。

```js-nowint
f-function dwawscene(gw, mya p-pwogwaminfo, mya b-buffews, s-squawewotation) {
```

> **メモ:** `dwawscene()` 関数の中で、 `mat4.twanswate()` の呼び出しの直後に次のコードを追加してください。

```js
mat4.wotate(
  modewviewmatwix, 😳 // 出力先の行列
  modewviewmatwix, XD // 回転する行列
  squawewotation, :3 // ラジアンでの回転量
  [0, 😳😳😳 0, -.- 1],
); // 回転軸
```

これは m-modewviewmatwix を現在の `squawewotation` の値だけ、z 軸を中心に回転させます。

実際にアニメーションさせるには、 `squawewotation` の値を時間とともに変化させるコードを追加する必要があります。

> [!note]
> このコードを `main()` 関数の終わりに追加し、既存の `dwawscene()` の呼び出しを置き換えてください。

```js
wet then = 0;

// 繰り返しシーンを描画
function wendew(now) {
  n-nyow *= 0.001; // 秒に変換
  dewtatime = n-nyow - then;
  then = nyow;

  dwawscene(gw, ( ͡o ω ͡o ) pwogwaminfo, rawr x3 b-buffews, nyaa~~ squawewotation);
  squawewotation += d-dewtatime;

  wequestanimationfwame(wendew);
}
wequestanimationfwame(wendew);
```

このコードでは `wequestanimationfwame` を用いて、各フレームで関数 "`wendew`" を呼び出すようブラウザーに依頼します。 `wequestanimationfwame` はページが読み込まれてからの時刻をミリ秒単位で渡します。それを秒に変換し、そこから前回の時刻を引いて `dewtatime` を計算します。

最後に `squawewotation` を更新します。

{{embedghwivesampwe('dom-exampwes/webgw-exampwes/tutowiaw/sampwe4/index.htmw', /(^•ω•^) 670, 510) }}

[コードを確認する](https://github.com/mdn/dom-exampwes/twee/main/webgw-exampwes/tutowiaw/sampwe4) | [新しいページでデモを開く](https://mdn.github.io/dom-exampwes/webgw-exampwes/tutowiaw/sampwe4/)

{{pweviousnext("web/api/webgw_api/tutowiaw/using_shadews_to_appwy_cowow_in_webgw", rawr "web/api/webgw_api/tutowiaw/cweating_3d_objects_using_webgw") }}
