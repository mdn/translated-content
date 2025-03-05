---
title: EventTarget
slug: Web/API/EventTarget
l10n:
  sourceCommit: 15f0b5552bc9c2ea1f32b0cd5ee840a7d43c887e
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

**`EventTarget`** インターフェイスは、イベントを受け取ることや、リスナーを持つことができるオブジェクトが実装します。
言い換えると、イベントのターゲットはすべて、このインターフェイスに関する 3 つのメソッドを実装しています。

{{domxref("Element")}} とその子、{{domxref("Document")}}、{{domxref("Window")}} は、最も一般的なイベントターゲットですが、他のオブジェクト、例えば {{domxref("IDBRequest")}}、{{domxref("AudioNode")}}、{{domxref("AudioContext")}} などもイベントターゲットになります。

多くのイベントターゲット (要素、文書、ウィンドウを含む) は、[イベントハンドラー](/ja/docs/Web/Events/Event_handlers)を設定するのに `onイベント名` プロパティや属性を使用することもできます。

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

- [イベントリファレンス](/ja/docs/Web/Events) - プラットフォームで利用可能なイベント。
- [イベント開発者ガイド](/ja/docs/Learn/JavaScript/Building_blocks/Events)
- {{domxref("Event")}} インターフェイス
