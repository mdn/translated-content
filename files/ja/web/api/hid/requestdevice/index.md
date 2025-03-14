---
title: HID.requestDevice()
slug: Web/API/HID/requestDevice
l10n:
  sourceCommit: a243190b798aa57b6cc08b9ef3216aed8ab9c895
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}

{{domxref("HID")}} インターフェイスの **`requestDevice()`** メソッドは、HID デバイスへのアクセスを要求します。

ユーザーエージェントは接続されたデバイスのリストを含む許可ダイアログを表示し、ユーザーにそれらのデバイスから 1 個を選んで許可するように要求するでしょう。

## 構文

```js-nolint
requestDevice(options)
```

### 引数

- `options`

  - : ペアリング可能なデバイスを抽出する用のフィルターオブジェクトの配列を含むオブジェクトです。それぞれのフィルターオブジェクトは以下のプロパティを持つことができます。

    - `vendorId` {{optional_inline}}
      - : 要求する HID デバイスのベンダー ID を表す整数です。
    - `productId` {{optional_inline}}
      - : 要求する HID デバイスのプロダクト ID を表す整数です。
    - `usagePage` {{optional_inline}}

      - : 要求するデバイスの HID 使用法の Usage Page 部分を表す整数です。トップレベルのコレクションの使用法は、デバイスの種類を特定するために使用されます。

        標準の HID 使用法の値は、[HID Usage Tables](https://usb.org/document-library/hid-usage-tables-13) に載っています。

    - `usage` {{optional_inline}}
      - : 要求するデバイスの HID 使用法の Usage ID 部分を表す整数です。

> [!NOTE]
> デバイスフィルターは、ユーザーに提示するデバイスリストを絞り込むために使われます。フィルターが無い場合、接続された全てのデバイスが表示されます。1 個以上のフィルターが含まれている場合、デバイスはいずれかのフィルターに当てはまればリストに入ります。フィルターに当てはまるには、そのフィルターに含まれるルール全てに当てはまる必要があります。

### 返値

指定されたフィルターに当てはまり接続された {{domxref("HIDDevice")}} オブジェクトの配列で解決する {{jsxref("Promise")}} を返します。

### 例外

- `SecurityError` {{domxref("DOMException")}}
  - : ページが HID 機能へのアクセスを許可しないとき投げられます。

## セキュリティ

[ユーザーによる一時的な有効化](/ja/docs/Web/Security/User_activation)が必要です。この機能が動作するためには、ユーザーがページまたは UI 要素を操作しなければなりません。

## 例

### 4 種類全てのフィルタールールによってデバイスを特定する

この例では、HID デバイスはベンダー ID `0xABCD`、プロダクト ID `0x1234`、Usage Page `0x0C`、Usage ID `0x01` を持つことを要求されます。これらのルール全てを満たすデバイスのみが表示されます。

```js
let requestButton = document.getElementById("request-hid-device");
requestButton.addEventListener("click", async () => {
  let device;
  try {
    const devices = await navigator.hid.requestDevice({
      filters: [
        {
          vendorId: 0xabcd,
          productId: 0x1234,
          usagePage: 0x0c,
          usage: 0x01,
        },
      ],
    });
    device = devices[0];
  } catch (error) {
    console.log("エラーが発生しました。");
  }

  if (!device) {
    console.log("デバイスが選択されませんでした。");
  } else {
    console.log(`HID: ${device.productName}`);
  }
});
```

### 2 種類のフィルターを用いる例

次の例は 2 種類のフィルターを用いています。これらのフィルターのいずれかに当てはまるデバイスが表示されます。

```js
// Nintendo Switch Joy-Con の USB ベンダー / プロダクト ID を持つデバイスを抽出します。
const filters = [
  {
    vendorId: 0x057e, // Nintendo Co., Ltd
    productId: 0x2006, // Joy-Con Left
  },
  {
    vendorId: 0x057e, // Nintendo Co., Ltd
    productId: 0x2007, // Joy-Con Right
  },
];

// ユーザーに Joy-Con デバイスを選択するよう指示します。
const [device] = await navigator.hid.requestDevice({ filters });
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
