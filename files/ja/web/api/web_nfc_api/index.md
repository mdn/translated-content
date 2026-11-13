---
title: ウェブ NFC API
slug: Web/API/Web_NFC_API
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{DefaultAPISidebar("Web NFC API")}}{{SeeCompatTable}}

ウェブ NFC API では、 NFC によるデータ交換を軽量な NFC Data Exchange Format (NDEF) メッセージにて行うことができます。

> [!NOTE]
> 端末やタグは、ウェブ NFC で使用するために NDEF レコード形式に対応するよう に特別にフォーマットし記録する必要があります。低レベルの操作は現在 API で対応していませんが、そのような機能を追加する API についての公開討論が行われています。

## インターフェイス

- {{DOMxRef("NDEFMessage")}}
  - : NDEF メッセージを表すインターフェイスであり、 `NDEFReader` オブジェクトを介して互換性のあるタグから受信したり、タグに送信したりすることができます。メッセージはメタデータと NDEF レコードから構成されます。
- {{DOMxRef("NDEFReader")}} {{Experimental_Inline}}
  - : 互換性のある NFC タグからメッセージを読み書きできるようにするインターフェイスです。メッセージは `NDEFMessage` オブジェクトとして表現されます。
- {{DOMxRef("NDEFRecord")}}
  - : NDEF レコードを表すインターフェイスであり、 NDEF メッセージに含めることができます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
