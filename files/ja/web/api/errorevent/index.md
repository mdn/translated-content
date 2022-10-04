---
title: ErrorEvent
slug: Web/API/ErrorEvent
---

{{APIRef("HTML DOM")}}

**`ErrorEvent`** インターフェイスは、スクリプトまたはファイルのエラーに関連する情報を提供するイベントを表します。

{{InheritanceDiagram(600, 120)}}

## プロパティ

_また、親である {{domxref("Event")}}_ からプロパティを継承します。

- {{domxref("ErrorEvent.message")}} {{readonlyInline}}
  - : 関数を説明するヒューマンリーダブルなエラーメッセージを含む {{domxref("DOMString")}} です。
- {{domxref("ErrorEvent.filename")}} {{readonlyInline}}
  - : エラーが発生したスクリプトファイルの名前を含む {{domxref("DOMString")}} です。
- {{domxref("ErrorEvent.lineno")}} {{readonlyInline}}
  - : エラーが発生したスクリプトファイルの行番号を含む `integer` です。
- {{domxref("ErrorEvent.colno")}} {{readonlyInline}}
  - : エラーが発生したスクリプトファイルの列番号を含む `integer` です。
- {{domxref("ErrorEvent.error")}} {{readonlyInline}} {{experimental_inline}}
  - : イベントに関係する JavaScript `Object` です。

## コンストラクタ

- {{domxref("ErrorEvent.ErrorEvent", "ErrorEvent()")}}
  - : 指定されたパラメータで `ErrorEvent` イベントを作成します。

## 関数

_親である {{domxref("Event")}}_ から関数を継承します。

## 仕様

| 仕様                                                                                                                 | ステータス                           | 備考                                                            |
| -------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | --------------------------------------------------------------- |
| {{ SpecName('HTML WHATWG', 'webappapis.html#the-errorevent-interface', 'ErrorEvent') }} | {{ Spec2('HTML WHATWG') }} | `error` プロパティと 5 番目のパラメータをコンストラクタに追加。 |
| {{ SpecName('HTML5 W3C', 'webappapis.html#the-errorevent-interface', 'ErrorEvent') }}     | {{ Spec2('HTML5 W3C') }}     | 初回定義。                                                      |

## ブラウザーの互換性

{{Compat("api.ErrorEvent")}}

## 関連項目

- [web worker を使用して](/ja/docs/Web/Guide/Performance/Using_web_workers)、 その様なイベントを発生させる可能性が最も高いオブジェクト
