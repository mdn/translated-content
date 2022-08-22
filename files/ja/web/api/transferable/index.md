---
title: Transferable
slug: Web/API/Transferable
tags:
  - API
  - Interface
  - Reference
  - Transferable
  - Web Workers
  - インターフェイス
translation_of: Web/API/Transferable
---
{{APIRef("DOM")}}

**`Transferable`** インターフェイスは、メインスレッドと Web worker のような、異なる実行コンテキスト間で転送できるオブジェクトを表します。

これは抽象インターフェイスであり、この型のオブジェクトは存在しません。メソッドやプロパティも一切定義していません。 {{domxref("Worker.postMessage()")}} メソッドを使用して {{domxref("Worker")}} へ転送されるなど、特定の条件で使用可能なオブジェクトを示す単なるタグに過ぎません。

> **Note:** **メモ:** `Transferable` インターフェイスは厳密にはもう存在しません。*機能面*では `Transferable` オブジェクトはまだ存在しますが、もっと基礎的なレベルで実装されています (技術的にいえば、 `[Transferable]` という {{Glossary("WebIDL")}} 拡張属性です)。

{{domxref("ArrayBuffer")}}, {{domxref("MessagePort")}}, {{domxref("ImageBitmap")}}, {{domxref("OffscreenCanvas")}} の各型が、このインターフェイスを実装しています。

## プロパティ

_`Transferable` インターフェイスは特定のプロパティを実装または継承していません。_

## メソッド

_`Transferable` インターフェイスは特定のプロパティを実装または継承していません。_

## 仕様書

| 仕様書                                                                                                               | 状態                             | 備考                                                                              |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------- | --------------------------------------------------------------------------------- |
| {{SpecName('HTML WHATWG', "infrastructure.html#transferable-objects", "Transferable")}} | {{Spec2('HTML WHATWG')}} | `Transferable` インターフェイスを `[Transferable]` Web IDL 拡張属性で置き換えた。 |
| {{SpecName('HTML5 W3C', "infrastructure.html#transferable-objects", "Transferable")}}     | {{Spec2('HTML5 W3C')}}     | 初回定義                                                                          |

## ブラウザーの互換性

{{Compat("api.Transferable")}}

## 関連情報

- これを実装するインターフェイス: {{jsxref("ArrayBuffer")}}, {{domxref("MessagePort")}}, {{domxref("ImageBitmap")}}
