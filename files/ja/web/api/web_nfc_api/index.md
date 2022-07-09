---
title: ウェブ NFC API
slug: Web/API/Web_NFC_API
tags:
  - NDEF
  - リファレンス
  - ウェブ NFC
---
{{DefaultAPISidebar("Web NFC API")}}{{SeeCompatTable}}

ウェブ NFC API では、 NFC によるデータ交換を軽量な NFC Data Exchange Format (NDEF) メッセージにて行うことができます。

> **Note:** デバイスやタグは、ウェブ NFC で使用するために NDEF レコード形式に対応するよう に特別にフォーマットし記録する必要があります。低レベルの操作は現在 API で対応していませんが、そのような機能を追加する API についての公開討論が行われています。

## インターフェイス

- {{DOMxRef("NDEFMessage")}}
  - : NDEF メッセージを表すインターフェイスであり、 `NDEFReader` オブジェクトを介して互換性のあるタグから受信したり、タグに送信したりすることができます。メッセージはメタデータと NDEF レコードから構成されます。
- {{DOMxRef("NDEFReader")}}
  - : 互換性のある NFC タグからメッセージを読み書きできるようにするインターフェイスです。メッセージは `NDEFMessage` オブジェクトとして表現されます。
- {{DOMxRef("NDEFRecord")}}
  - : NDEF レコードを表すインターフェイスであり、 NDEF メッセージに含めることができます。

## 仕様書

| 仕様書                             | 状態 | 備考 |
| ----------------------------------------- | ------ | ------- |
| [Web NFC](https://w3c.github.io/web-nfc/) | 草稿  |         |

## ブラウザーの互換性

{{Compat("api.NDEFReader")}}
