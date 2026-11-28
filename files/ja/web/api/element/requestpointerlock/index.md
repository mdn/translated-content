---
title: "Element: requestPointerLock() メソッド"
short-title: requestPointerLock()
slug: Web/API/Element/requestPointerLock
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("Pointer Lock API")}}

**`requestPointerLock()`** は {{domxref("Element")}} インターフェイスのメソッドで、指定された要素にポインターをロックすることを非同期にリクエストできます。

リクエストが成功したか失敗したかを追跡するには、 {{domxref("Document/pointerlockchange_event", "pointerlockchange")}} および {{domxref("Document/pointerlockerror_event", "pointerlockerror")}} イベントを {{domxref("Document")}} レベルで待ち受けする必要があります。

> [!NOTE]
> 現行の仕様では、`requestPointerLock()` は {{domxref("Document/pointerlockchange_event", "pointerlockchange")}} または {{domxref("Document/pointerlockerror_event", "pointerlockerror")}} イベントを発行することで、リクエストの成否を通知するだけです。[仕様への提案された更新](https://github.com/w3c/pointerlock/pull/49)<sup>(英語)</sup>では、成否を通知する {{jsxref("Promise")}} を返すように `requestPointerLock()` が更新されています。このページでは、{{jsxref("Promise")}} を返すバージョンを説明しています。ただし、このバージョンはまだ標準ではなく、すべてのブラウザーで実装されているわけではありません。詳細は[ブラウザーの互換性](#ブラウザーの互換性)を参照してください。

## 構文

```js-nolint
requestPointerLock()
requestPointerLock(options)
```

### 引数

- `options` {{optional_inline}}
  - : 以下のプロパティを含むことができるオプションオブジェクトです。
    - `unadjustedMovement` {{optional_inline}}
      - : OS レベルのマウス加速機能を無効にし、代わりに生のマウス入力にアクセスします。デフォルト値は `false` で、`true` に設定すると加速機能が無効になります。

### 返値

{{jsxref("Promise")}} で、{{jsxref("undefined")}} に解決します。

## セキュリティ

`requestPointerLock()` を呼び出すには、{{Glossary("Transient activation", "単発のユーザーによる有効化")}}が必要です。この機能が動作するには、ユーザーがページまたは UI 要素を操作する必要があります。また、対象要素に関連付けられている文書はアクティブな状態でなければなりません。

デフォルトのロック解除操作（`exitPointerLock()` の呼び出しではない）によってポインターロックを解除した直後に `requestPointerLock()` を呼び出した場合、{{Glossary("Transient activation", "単発のユーザーによる有効化")}}が利用可能でも呼び出しは失敗します。

{{domxref("Element.requestFullscreen()", "requestFullscreen()")}} とともに `requestPointerLock()` を呼び出す場合は、まず `requestPointerLock()` を呼び出す必要があります。これは、{{domxref("Element.requestFullscreen()", "requestFullscreen()")}} が {{Glossary("Transient activation", "単発のユーザーによる有効化")}}の状態を消費するためです。

{{htmlelement("iframe")}} 要素内で `requestPointerLock()` を呼び出す場合は、`allow-pointer-lock` [サンドボックストークン](/ja/docs/Web/HTML/Reference/Elements/iframe#sandbox)を追加する必要があります。また、ほかの {{htmlelement("iframe")}} 要素内の要素をポインターロックモードにすることもできません。

## 例

ポインターロックはオンラインゲームでよく使われます。マウスポインターが動き回ったり、ゲームエリアの外に出たり、ウィンドウの端に届いたりすることなく、マウスの動きをゲームの操作に集中させたい場合に使用します。

ポインターロックを有効にするには、ボタンを押すか、ゲームキャンバスそのものを押すなどして、ユーザーに何らかの方法で UI を操作してもらう必要があります。

```js
canvas.addEventListener("click", async () => {
  await canvas.requestPointerLock();
});
```

オペレーティングシステムはデフォルトでマウス加速機能を有効にしています。これは、ゆっくり正確な動きをしたいとき（グラフィックパッケージを使用する場合を考えてみてください）に便利ですが、より速いマウス操作で大きな距離を移動したいとき（スクロールや複数のファイルを選択する場合を考えてみてください）にも便利です。しかし、一人称視点のゲームでは、カメラの回転を制御するために生のマウス入力データが好まれます。プロゲーマーによれば、この方がより良いゲーム操作で高い精度が得られるとのことです。

OS レベルのマウス加速機能を無効にし、生のマウス入力にアクセスするには、`unadjustedMovement` を `true` に設定します。

```js
canvas.addEventListener("click", async () => {
  await canvas.requestPointerLock({
    unadjustedMovement: true,
  });
});
```

それ以外の例のコードは次をご覧ください。

- [ポインターロックのデモ](https://mdn.github.io/dom-examples/pointer-lock/)<sup>(英語)</sup>（[ソースコードを見る](https://github.com/mdn/dom-examples/tree/main/pointer-lock)<sup>(英語)</sup>）
- {{domxref("Pointer Lock API", "Pointer Lock API", "", "nocode")}}
- [マウス加速を無効にして FPS ゲームの操作性を向上させる](https://web.dev/articles/disable-mouse-acceleration)<sup>(英語)</sup>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{ domxref("Document.pointerLockElement") }}
- {{ domxref("Document.exitPointerLock()") }}
- [ポインターロック](/ja/docs/Web/API/Pointer_Lock_API)
