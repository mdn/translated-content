---
title: "PermissionStatus: state プロパティ"
short-title: state
slug: Web/API/PermissionStatus/state
l10n:
  sourceCommit: ee253ac58d71b2ed336b705ab97dbe93122b3e04
---

{{APIRef("Permissions API")}}{{AvailableInWorkers}}

**`state`** は {{domxref("PermissionStatus")}} インターフェイスの読み取り専用プロパティで、要求された権限の状態を返します。 このプロパティは、`'granted'`（許可）、`'denied'`（拒否）、`'prompt'`（プロンプト）のいずれかを返します。

## 値

以下のいずれかです。

- `'granted'`
  - : ユーザー、またはユーザーの代理となるユーザーエージェントが、[強力な機能](https://w3c.github.io/permissions/#dfn-powerful-feature)を使用する明示的な権限を付与しました。呼び出し側は、ユーザーエージェントがユーザーの許可を要求することなく、その機能を使用できる可能性があります。
- `'denied'`
  - : ユーザー、またはユーザーの代理となるユーザーエージェントが、この[強力な機能](https://w3c.github.io/permissions/#dfn-powerful-feature)にアクセスすることを拒否しています。呼び出し側は、この機能を使用することができません。
- `'prompt'`
  - : ユーザーは、その機能を使用する明示的な許可を与えていません（すなわち、_denied_ と同じです）。かつ、呼び出し側がその機能を使用しようとした場合、ユーザーエージェントは許可するか、その機能へのアクセスを拒否するかをユーザーに尋ねます。

## 例

```js
navigator.permissions
  .query({ name: "geolocation" })
  .then((permissionStatus) => {
    console.log(`位置情報の権限の状態は ${permissionStatus.state} です。`);
    permissionStatus.onchange = () => {
      console.log(
        `位置情報の権限の状態が ${permissionStatus.state} に変更されました。`,
      );
    };
  });
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
