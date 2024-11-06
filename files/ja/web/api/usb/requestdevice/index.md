---
title: USB.requestDevice()
slug: Web/API/USB/requestDevice
l10n:
  sourceCommit: a243190b798aa57b6cc08b9ef3216aed8ab9c895
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}{{securecontext_header}}

{{domxref("USB")}} インターフェイスの **`requestDevice()`** メソッドは、指定のデバイスが見つかった場合は {{domxref("USBDevice")}} のインスタンスで解決する {{jsxref("Promise")}} を返します｡このメソッドを呼ぶと､ユーザーエージェントのペア設定手続きを開始します｡

## 構文

```js-nolint
requestDevice(filters)
```

### 引数

- `filters`

  - : ペア設定をしたいデバイスの候補を決めるフィルターオブジェクトの配列です。それぞれのフィルターオブジェクトは、以下のプロパティーを持つことができます。

    - `vendorId`
    - `productId`
    - `classCode`
    - `subclassCode`
    - `protocolCode`
    - `serialNumber`

### 返値

{{DOMxRef("USBDevice")}} のインスタンスで解決する {{JSxRef("Promise")}} です。

## セキュリティ

[ユーザーによる一時的な有効化](/ja/docs/Web/Security/User_activation)が必要です。この機能が動作するためには、ユーザーがページまたは UI 要素を操作する必要があります。

## 例

以下の例では、2 個の USB デバイスのうちの一つを検索します。2 個のプロダクト ID が指定されていることに注目してください。両方が `requestDevice()` に渡されています。これにより、ユーザーにペア設定するデバイスを選択してもらうユーザーエージェントの手続きを開始します。選択されたデバイスのみが `then()` に渡されます。

フィルターの数は、ユーザーエージェントが提示するデバイスの数を指定するわけではありません。例えば、プロダクト ID `0xa800` を持つ USB デバイス 1 個だけが検出された場合は、ユーザーエージェントはデバイスを 1 個だけ挙げるでしょう。一方、ユーザーエージェントがリストにあるデバイスのうち最初のものを 2 個、2 番目のものを 1 個検出した場合は、3 個全てのデバイスが挙げられるでしょう。

```js
const filters = [
  { vendorId: 0x1209, productId: 0xa800 },
  { vendorId: 0x1209, productId: 0xa850 },
];
navigator.usb
  .requestDevice({ filters })
  .then((usbDevice) => {
    console.log(`製品名: ${usbDevice.productName}`);
  })
  .catch((e) => {
    console.error(`デバイスがありません。${e}`);
  });
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
