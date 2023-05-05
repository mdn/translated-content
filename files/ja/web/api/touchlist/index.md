---
title: TouchList
slug: Web/API/TouchList
l10n:
  sourceCommit: d414c502f3cc1c08d2fb043e98cda4a65621ff08
---

{{APIRef("Touch Events")}}

**`TouchList`** インターフェイスは、タッチ面上の接触点のリストを表します。例えば、ユーザーがタッチ面（画面やトラックパッドなど）を 3 本指で操作している場合、対応する `TouchList` オブジェクトは 1 本の指あたり 1 つの {{domxref("Touch")}} オブジェクトを持ち、全部で 3 項目になります。

> **メモ:** このインターフェイスは[変更不可能なリストを作成しようとするもの](https://stackoverflow.com/questions/74630989/why-use-domstringlist-rather-than-an-array/74641156#74641156)で、すでに使用しているコードを壊さないために対応しているだけです。現代の API では、代わりに ECMAScript の配列型をラップした型を使用しているので、ECMAScript の配列のように扱うことができ、同時にその使用方法に追加の意味づけをすることができます（例えば、アイテムを読み取り専用にする）。

## インスタンスプロパティ

- {{domxref("TouchList.length")}} {{readonlyInline}}
  - : `TouchList` 中の {{domxref("Touch")}} オブジェクトの個数です。

## インスタンスメソッド

- {{domxref("TouchList.item()")}}
  - : リスト内の指定した位置の {{domxref("Touch")}} オブジェクトを返します。

## 例

[タッチイベントのメイン記事にある例](/ja/docs/Web/API/Touch_events#例)をご覧ください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [タッチイベント](/ja/docs/Web/API/Touch_events)
- {{domxref("Document.createTouchList()")}}
