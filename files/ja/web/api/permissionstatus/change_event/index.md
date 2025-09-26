---
title: "PermissionStatus: change イベント"
short-title: change
slug: Web/API/PermissionStatus/change_event
l10n:
  sourceCommit: ee253ac58d71b2ed336b705ab97dbe93122b3e04
---

{{APIRef("Permissions API")}}{{AvailableInWorkers}}

**`change`** は {{domxref("PermissionStatus")}} インターフェイスイベントで、{{domxref("PermissionStatus.state")}} プロパティが変化するたびに発行されます。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("change", (event) => {});

onchange = (event) => {};
```

## イベント型

一般的な {{domxref("Event")}} です。

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
