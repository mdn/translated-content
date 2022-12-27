---
title: Navigator.permissions
slug: Web/API/Navigator/permissions
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

**`Navigator.permissions`** 読み取り専用プロパティは、[Permissions API](/ja/docs/Web/API/Permissions_API) の対象となる API のパーミッションの状態を照会および更新するために使用できる {{domxref("Permissions")}} オブジェクトを返します。

## 構文

```
permissionsObj = globalObj.navigator.permissions
```

## 値

{{domxref("Permissions")}} オブジェクト。

## 例

```js
navigator.permissions.query({name:'geolocation'}).then(function(result) {
  if (result.state === 'granted') {
    showMap();
  } else if (result.state === 'prompt') {
    showButtonToEnableMap();
  }
  // パーミッションが拒否された場合は、何もしないでください。
});
```

## 仕様

| 仕様                                     | 状態                                 | コメント |
| ---------------------------------------- | ------------------------------------ | -------- |
| {{SpecName('Permissions API')}} | {{Spec2('Permissions API')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.Navigator.permissions")}}

## 関連情報

- [Permissions API](/ja/docs/Web/API/Permissions_API)
- {{domxref("Navigator")}}
