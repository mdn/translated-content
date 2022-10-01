---
title: PermissionStatus.state
slug: Web/API/PermissionStatus/state
---

{{APIRef("Permissions API")}}{{SeeCompatTable}}

{{domxref("PermissionStatus")}} インターフェイスの **`state`** 読み取り専用プロパティは、要求されたパーミッションの状態を返します。 このプロパティは、`'granted'`（付与）、`'denied'`（拒否）、`'prompt'`（プロンプト）のいずれかを返します。

## 構文

```
var permission = PermissionStatus.state;
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

| 仕様                                                                                         | 状態                                 | コメント |
| -------------------------------------------------------------------------------------------- | ------------------------------------ | -------- |
| {{SpecName('Permissions API','#widl-PermissionStatus-state','state')}} | {{Spec2('Permissions API')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.PermissionStatus.state")}}
