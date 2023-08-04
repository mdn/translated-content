---
title: PermissionStatus.onchange
slug: Web/API/PermissionStatus/change_event
---

{{APIRef("Permissions API")}}{{SeeCompatTable}}

{{domxref("PermissionStatus")}} インターフェイス の **`onchange`** イベントハンドラは、{{domxref("PermissionStatus.state")}} プロパティが変更されるたびに呼び出されます。

## 構文

```js
PermissionStatus.onchange = function() { ... }
PermissionStatus.addEventListener('change', function() { ... })
```

## 例

```js
navigator.permissions.query({name:'geolocation'}).then(function(permissionStatus) {
  console.log('位置情報のパーミッションの状態は ' + permissionStatus.state + ' です。');
  permissionStatus.onchange = function() {
    console.log('位置情報のパーミッションの状態が ' + this.state + ' に変更されました。');
  };
});
```

## 仕様

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
