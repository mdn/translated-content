---
title: "WorkerNavigator: globalPrivacyControl プロパティ"
slug: Web/API/WorkerNavigator/globalPrivacyControl
l10n:
  sourceCommit: 5ec94e56259b839211f1adc63f06c66f94865993
---

{{APIRef("DOM")}}{{SeeCompatTable}}

読み取り専用プロパティ **`WorkerNavigator.globalPrivacyControl`** は、ユーザーの現在のウェブサイト用の Global Privacy Control 設定を返します。
この設定は、ウェブサイトやサービスがユーザーの個人情報を第三者に販売したり共有したりすることにユーザーが同意しているかを示します。

このプロパティの値は、{{httpheader("Sec-GPC")}} HTTP ヘッダーの値を反映します。

## 値

ユーザーが明示的にデータの販売や共有に同意 _しない_ ときは `true` です。
ユーザーが同意しているか、希望を示していないときは `false` です。

## 例

```js
console.log(navigator.globalPrivacyControl);
// ユーザーが特にデータを共有したり販売したりされたくないと示しているとき "true"、そうでないとき "false" です。
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Sec-GPC")}} ヘッダー
- [globalprivacycontrol.org](https://globalprivacycontrol.org/)
- [Global Privacy Control Spec](https://privacycg.github.io/gpc-spec/)
- [Do Not Track on Wikipedia](https://en.wikipedia.org/wiki/Do_Not_Track)
