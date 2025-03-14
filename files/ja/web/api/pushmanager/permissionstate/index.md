---
title: "PushManager: permissionState() メソッド"
short-title: permissionState()
slug: Web/API/PushManager/permissionState
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{ApiRef("Push API")}}

**`permissionState()`** は {{domxref("PushManager")}} インターフェイスのメソッドで、プッシュマネージャーの許可状態を示す文字列で解決される {{jsxref("Promise")}} を返します。許可状態は、`'prompt'` か `'denied'`、`'granted'` のいずれかです。

> [!NOTE]
> Firefox 44 では、[通知](/ja/docs/Web/API/Notifications_API)と[プッシュ](/ja/docs/Web/API/Push_API)の許可が統合されています。
> 通知が許可された場合、プッシュも利用できます。

## 構文

```js-nolint
permissionState()
permissionState(options)
```

### 引数

- `options` {{optional_inline}}

  - : オプションの設定パラメーターを含むオブジェクト。以下のプロパティが利用可能です。

    - `userVisibleOnly`
      - : 論理値で、返されたプッシュサブスクリプションは、その効果がユーザーに見えるようにされたメッセージに のみ使用することを示します。
    - `applicationServerKey`
      - : プッシュサーバー経由でクライアントアプリにメッセージを送信する際に、プッシュサーバーが使用する公開鍵。この値はアプリケーションサーバーが生成する署名鍵ペアの一部であり、 P-256 曲線上の楕円曲線デジタル署名 (ECDSA) で使用できます。

### 返値

{{jsxref("Promise")}} で、`'prompt'`、`'denied'`、`'granted'` のいずれかの値の文字列に解決します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
