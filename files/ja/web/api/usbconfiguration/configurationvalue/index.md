---
title: "USBConfiguration: configurationValue プロパティ"
slug: Web/API/USBConfiguration/configurationValue
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{securecontext_header}}{{APIRef("WebUSB API")}}{{SeeCompatTable}}

{{domxref("USBConfiguration")}} インターフェイスの読み取り専用プロパティ **`configurationValue`** は、このコンフィギュレーションのコンフィギュレーション番号を返します。これはデバイスによって提供されたこのコンフィギュレーションを定義しているコンフィギュレーションディスクリプターの [`bConfigurationValue`](https://www.beyondlogic.org/usbnutshell/usb5.shtml#ConfigurationDescriptors) フィールドと一致します。

## 値

現在の {{domxref("USBConfiguration")}} インスタンスで指定された {{domxref("USBDevice")}} の [コンフィギュレーションディスクリプター](https://www.beyondlogic.org/usbnutshell/usb5.shtml#ConfigurationDescriptors)です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
