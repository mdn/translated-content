---
title: PermissionStatus
slug: Web/API/PermissionStatus
l10n:
  sourceCommit: ee253ac58d71b2ed336b705ab97dbe93122b3e04
---

{{APIRef("Permissions API")}}{{AvailableInWorkers}}

**`PermissionStatus`** は[権限 API](/ja/docs/Web/API/Permissions_API) のインターフェイスで、オブジェクトの状態と、その状態の変化を監視するためのイベントハンドラーを提供します。

{{InheritanceDiagram}}

## インスタンスプロパティ

- {{domxref("PermissionStatus.name")}} {{ReadOnlyInline}}
  - : 要求された権限の名前を返します。{{domxref("Permissions.query")}} に渡された `name` と同じです。
- {{domxref("PermissionStatus.state")}} {{ReadOnlyInline}}
  - : 要求された権限の状態を返します。 `'granted'`（許可）、`'denied'`（拒否）、`'prompt'`（プロンプト）のいずれかです。

### イベントハンドラー

- {{domxref("PermissionStatus.change_event", "change")}}
  - : `PermissionStatus.state` 変化するたびに発行されるイベントです。

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
