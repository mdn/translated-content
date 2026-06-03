---
title: HIDDevice.collections
slug: Web/API/HIDDevice/collections
l10n:
  sourceCommit: 277e5969c63b97cfb55ab4a0e612e8040810f49b
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}

{{domxref("HIDDevice")}} インターフェイスの読み取り専用プロパティ **`collections`** は、レポート形式の配列を返します。

## 値

レポート形式の配列です。各エントリーは以下を含みます。

- `usagePage`
  - : このコレクションに紐づいた HID 使用法の Usage Page 部分を表す整数です。トップレベルのコレクションの使用法は、デバイスの種類を特定するために使用されます。

    標準の HID 使用法の値は、[HID Usage Tables](https://usb.org/document-library/hid-usage-tables-13) に載っています。

- `usage`
  - : このコレクションに紐づいた HID 使用法の Usage ID 部分を表す整数です。
- `type`
  - : コレクションの種類を表す 8 ビットの値です。グループ化されたアイテムの関係を表します。以下のいずれかです。
    - `0x00`
      - : Physical (軸のグループ)
    - `0x01`
      - : Application (マウス、キーボード)
    - `0x02`
      - : Logical (関連するデータ)
    - `0x03`
      - : Report
    - `0x04`
      - : Named array
    - `0x05`
      - : Usage switch
    - `0x06`
      - : Usage modified
    - `0x07 to 0x7F`
      - : 将来のために予約
    - `0x80 to 0xFF`
      - : ベンダー定義

    これらの種類についての追加情報は、[Device Class Definition](https://www.usb.org/document-library/device-class-definition-hid-111) に載っています。

- `children`
  - : トップレベルコレクションと同じ形式の、サブコレクションの配列です。
- `inputReports`
  - : このコレクションで記述されているそれぞれの Input レポートを表す `inputReport` の配列です。
- `outputReports`
  - : このコレクションで記述されているそれぞれの Output レポートを表す `outputReport` の配列です。
- `featureReports`
  - : このコレクションで記述されているそれぞれの Feature レポートを表す `featureReport` の配列です。

## 例

この例は、`collections` プロパティが返された後、様々な要素にアクセスする方法を示しています。他の例や動くデモを記事 [Connecting to uncommon HID devices](https://web.dev/hid/) で見ることができます。

```js
for (const collection of device.collections) {
  // HID コレクションには、使用法、Usage Page、レポート、サブコレクションが含まれます。
  console.log(`Usage: ${collection.usage}`);
  console.log(`Usage page: ${collection.usagePage}`);

  for (const inputReport of collection.inputReports) {
    console.log(`Input report: ${inputReport.reportId}`);
    // inputReport.items をループで走査します
  }

  for (const outputReport of collection.outputReports) {
    console.log(`Output report: ${outputReport.reportId}`);
    //  outputReport.items をループで走査します
  }

  for (const featureReport of collection.featureReports) {
    console.log(`Feature report: ${featureReport.reportId}`);
    // featureReport.items をループで走査します
  }

  // collection.children を用いてサブコレクションをループで走査します
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
