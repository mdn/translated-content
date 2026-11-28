---
title: "PermissionStatus: change イベント"
short-title: change
slug: Web/API/PermissionStatus/change_event
l10n:
  sourceCommit: 60898650ee472d10cc15cb91c982fede0d0c5e34
---

{{APIRef("Permissions API")}}{{AvailableInWorkers}}

**`change`** は {{domxref("PermissionStatus")}} インターフェイスのイベントで、{{domxref("PermissionStatus.state")}} プロパティが変化するたびに発生します。

## 構文

このイベント名を {{domxref("EventTarget/addEventListener", "addEventListener()")}} で使用してください。

```js-nolint
addEventListener("change", (event) => { })
```

または、このインターフェイスの[イベントハンドラープロパティ](/ja/docs/Web/API/Document_Object_Model/Events#onevent_プロパティの使用)に代入します。

```js-nolint
onchange = (event) => { }
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
