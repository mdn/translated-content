---
title: "Element: requestPointerLock() メソッド"
short-title: requestPointerLock()
slug: Web/API/Element/requestPointerLock
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{ APIRef("DOM") }}

**`Element.requestPointerLock()`** メソッドで、ポインターをこの要素にロックすることを非同期にリクエストすることができます。

リクエストが成功したか失敗したかを追跡するには、 {{domxref("Document/pointerlockchange_event", "pointerlockchange")}} および {{domxref("Document/pointerlockerror_event", "pointerlockerror")}} イベントを {{domxref("Document")}} レベルで待ち受けする必要があります。

## 構文

```js-nolint
requestPointerLock()
requestPointerLock(options)
```

### 引数

- `options` {{optional_inline}}
  - : 以下のプロパティを含むことができるオプションオブジェクトです。
    - `unadjustedMovement` {{optional_inline}}
      - : OS レベルのマウス加速機能を無効にし、代わりに生のマウス入力にアクセスします。既定値は `false` で、`true` に設定すると加速機能が無効になります。

### 返値

{{jsxref("Promise")}} で、{{jsxref("undefined")}} に解決します。

> **メモ:** ブラウザーによっては、プロミスバージョンの `requestPointerLock()` に対応していないものもあります。

## 例

ポインターロックはオンラインゲームでよく使われます。マウスポインターが動き回ったり、ゲームエリアの外に出たり、ウィンドウの端に届いたりすることなく、マウスの動きをゲームの操作に集中させたい場合に使用します。

ポインターロックを有効にするには、ボタンを押すか、ゲームキャンバスそのものを押すなどして、ユーザーに何らかの方法で UI を操作してもらう必要があります。

```js
canvas.addEventListener("click", async () => {
  await canvas.requestPointerLock();
});
```

オペレーティングシステムは既定で マウス加速機能を有効にしています。これは、ゆっくり正確な動きをしたいとき（グラフィックパッケージを使用する場合を考えてみてください）に便利ですが、より速いマウス操作で大きな距離を移動したいとき（スクロールや複数のファイルを選択する場合を考えてみてください）にも便利です。しかし、一人称視点のゲームでは、カメラの回転を制御するために生のマウス入力データが好まれます。プロゲーマーによれば、この方がより良いゲーム操作で高い精度が得られるとのことです。

OS レベルのマウス加速機能を無効にし、生のマウス入力にアクセスするには、`unadjustedMovement` を `true` に設定します。

```js
canvas.addEventListener("click", async () => {
  await canvas.requestPointerLock({
    unadjustedMovement: true,
  });
});
```

それ以外の例のコードは次をご覧ください。

- [pointer lock demo](https://mdn.github.io/dom-examples/pointer-lock/)（[ソースコードを見る](https://github.com/mdn/dom-examples/tree/main/pointer-lock)）
- {{domxref("Pointer Lock API", "Pointer Lock API", "", "nocode")}}
- [Disable mouse acceleration to provide a better FPS gaming experience](https://web.dev/disable-mouse-acceleration/)

## セキュリティ

[単発のユーザーによる有効化](/ja/docs/Web/Security/User_activation)が必要です。この機能が動作するためには、ユーザーがページまたは UI 要素を操作する必要があります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{ domxref("Document.pointerLockElement") }}
- {{ domxref("Document.exitPointerLock()") }}
- [ポインターロック](/ja/docs/Web/API/Pointer_Lock_API)
