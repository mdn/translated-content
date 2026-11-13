---
title: EventTarget
slug: Web/API/EventTarget
l10n:
  sourceCommit: f4c0e822eb6a1ea438c7342f43a3e4809adbd56a
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

**`EventTarget`** インターフェイスは、イベントを受け取ることや、リスナーを持つことができるオブジェクトが実装します。
言い換えると、イベントのターゲットはすべて、このインターフェイスに関する 3 つのメソッドを実装しています。

{{domxref("Element")}} とその子、{{domxref("Document")}}、{{domxref("Window")}} は、最も一般的なイベントターゲットですが、他のオブジェクト、例えば {{domxref("IDBRequest")}}、{{domxref("AudioNode")}}、{{domxref("AudioContext")}} などもイベントターゲットになります。

多くのイベントターゲット（要素、文書、ウィンドウなど）では、[イベントハンドラーを登録](/ja/docs/Web/API/Document_Object_Model/Events#イベントハンドラーの登録)するのに `onイベント名` プロパティや属性を使用することもできます。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("EventTarget.EventTarget()","EventTarget()")}}
  - : 新しい `EventTarget` オブジェクトのインスタンスを作成します。

## インスタンスメソッド

- {{domxref("EventTarget.addEventListener()")}}
  - : 特定のイベント種別のイベントハンドラーを `EventTarget` に登録します。
- {{domxref("EventTarget.removeEventListener()")}}
  - : `EventTarget` からイベントリスナーを削除します。
- {{domxref("EventTarget.dispatchEvent()")}}
  - : この `EventTarget` にイベントを送出します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [イベント索引](/ja/docs/Web/API/Document_Object_Model/Events#イベント索引) - プラットフォームで利用可能なイベント。
- [イベント入門](/ja/docs/Learn_web_development/Core/Scripting/Events)
- {{domxref("Event")}} インターフェイス
