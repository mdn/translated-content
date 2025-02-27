---
title: "PermissionStatus: name プロパティ"
short-title: name
slug: Web/API/PermissionStatus/name
l10n:
  sourceCommit: ee253ac58d71b2ed336b705ab97dbe93122b3e04
---

{{APIRef("Permissions API")}}{{AvailableInWorkers}}

**`name`** は {{domxref("PermissionStatus")}} インターフェイスの読み取り専用プロパティで、要求された権限の名前を返します。

## 値

読み取り専用で、{{domxref("Permissions.query", "navigator.permissions.query()")}} に渡された `name` 引数と同じ値です。

## 例

```js
function stateChangeListener() {
  console.log(`${this.name} の権限の状態は ${this.state} に変化しました。`);
}
function queryAndTrackPermission(permissionName) {
  navigator.permissions
    .query({ name: permissionName })
    .then((permissionStatus) => {
      console.log(
        `${permissionName} の権限の状態は ${permissionStatus.state} です。`,
      );
      permissionStatus.onchange = stateChangeListener;
    });
}
queryAndTrackPermission("geolocation");
queryAndTrackPermission("midi");
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
