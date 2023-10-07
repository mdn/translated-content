---
title: ErrorEvent
slug: Web/API/ErrorEvent
l10n:
  sourceCommit: d3cdafcdb4d22e5c55771501e7c80451a96aa032
---

{{APIRef("HTML DOM")}}

**`ErrorEvent`** インターフェイスは、スクリプトまたはファイルのエラーに関連する情報を提供するイベントを表します。

{{InheritanceDiagram}}

## インスタンスプロパティ

_親である {{domxref("Event")}} から継承したプロパティもあります。_

- {{domxref("ErrorEvent.message")}} {{ReadOnlyInline}}
  - : 文字列で、関数を説明する人間が読むのに適したエラーメッセージが入ります。[`crossorigin`](/ja/docs/Web/HTML/Global_attributes#crossorigin) の設定がないと、エラーの記録が縮小されます。
- {{domxref("ErrorEvent.filename")}} {{ReadOnlyInline}}
  - : 文字列で、エラーが発生したスクリプトファイルの名前が入ります。
- {{domxref("ErrorEvent.lineno")}} {{ReadOnlyInline}}
  - : エラーが発生したスクリプトファイルの行番号を含む `integer` です。
- {{domxref("ErrorEvent.colno")}} {{ReadOnlyInline}}
  - : エラーが発生したスクリプトファイルの列番号を含む `integer` です。
- {{domxref("ErrorEvent.error")}} {{ReadOnlyInline}}
  - : イベントに関係する JavaScript の `Object` です。

## コンストラクター

- {{domxref("ErrorEvent.ErrorEvent", "ErrorEvent()")}}
  - : 指定された引数で `ErrorEvent` イベントを作成します。

## インスタンスメソッド

_親である {{domxref("Event")}} から継承したメソッドがあります。_

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブワーカーの使用](/ja/docs/Web/API/Web_Workers_API/Using_web_workers)、このようなイベントを発生させる可能性が最も高いオブジェクト
