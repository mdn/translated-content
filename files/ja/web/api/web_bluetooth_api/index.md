---
title: Web Bluetooth API
slug: Web/API/Web_Bluetooth_API
l10n:
  sourceCommit: 4f0f7386262363103a3e9cf482bb348d8570b331
---

{{DefaultAPISidebar("Bluetooth API")}}{{SeeCompatTable}}

Web Bluetooth API は、Bluetooth Low Energy の周辺機器に接続して操作する機能を提供します。

> **メモ:** この API は [Web Workers](/ja/docs/Web/API/Web_Workers_API) (not exposed via {{domxref("WorkerNavigator")}}) では _使用できません_ 。({{domxref("WorkerNavigator")}} 経由では公開されていません)

## インターフェイス

- {{DOMxRef("Bluetooth")}}
  - : 指定のオプションに合致する {{DOMxRef("BluetoothDevice")}} オブジェクトで解決する {{jsxref("Promise")}} を返します。
- {{DOMxRef("BluetoothCharacteristicProperties")}}
  - : 特定の `BluetoothRemoteGATTCharacteristic` のプロパティを提供します。
- {{DOMxRef("BluetoothDevice")}}
  - : 特定のスクリプト実行環境内の Bluetooth デバイスを表します。
- {{DOMxRef("BluetoothRemoteGATTCharacteristic")}}
  - : GATT キャラクタリスティックを表します。これは、周辺機器のサービスに関する詳細情報を提供する基本的なデータ要素です。
- {{DOMxRef("BluetoothRemoteGATTDescriptor")}}
  - : GATT ディスクリプターを表します。これは、キャラクタリスティックの値に関する詳細情報を提供します。
- {{DOMxRef("BluetoothRemoteGATTServer")}}
  - : リモートデバイス上の GATT サーバーを表します。
- {{DOMxRef("BluetoothRemoteGATTService")}}
  - : GATT サーバーにより提供されるサービスを表します。デバイス、参照されるサービス、このサービスのキャラクタリスティックのリストも含みます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
