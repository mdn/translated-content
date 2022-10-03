---
title: PushManager.permissionState()
slug: Web/API/PushManager/permissionState
---

{{SeeCompatTable}}{{ApiRef("Push API")}}

{{domxref("PushManager")}} インターフェースの **`permissionState()`** メソッドは、プッシュマネージャーの許可状態を示す {{domxref("DOMString")}} で解決される {{jsxref("Promise")}} を返します。許可状態は、`'prompt'` か `'denied'`、`'granted'` です。

> **メモ:** Firefox 44 では、[Notifications](/ja/docs/Web/API/Notifications_API) と [Push](/ja/docs/Web/API/Push_API) の許可は統合されています。notifications が許可された場合、 push も使用できます。

## 構文

```
PushManager.permissionState(options).then(function(PushMessagingState) { ... });
```

### パラメーター

- `options` {{optional_inline}}

  - : オプションの設定パラメーターを含むオブジェクト。次のプロパティが設定可能：

    - `userVisibleOnly`: 返されたプッシュサブスクリプションの効果がユーザーに表示するメッセージにだけ使われるかを示す boolean 値。

### 戻り値

`'prompt'` か `'denied'`、`'granted'` を持つ {{domxref("DOMString")}} で解決される {{jsxref("Promise")}} 。

## 仕様

| 仕様                                                                                                                                                                                         | 状態                         | コメント   |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ---------- |
| {{SpecName('Push API','#widl-PushManager-permissionState-Promise-PushPermissionState--PushSubscriptionOptions-options','permissionState()')}} | {{Spec2('Push API')}} | 初期定義。 |

## ブラウザ実装状況

{{Compat("api.PushManager.permissionState")}}

## 関連項目

- [Using the Push API](/ja/docs/Web/API/Push_API/Using_the_Push_API)
