---
title: TouchList
slug: Web/API/TouchList
l10n:
  sourceCommit: cfa628aedb53a83b315943ef19fa6c73298fb7d5
---

{{APIRef("Touch Events")}}

**`TouchList`** インターフェイスは、タッチ面上の接触点のリストを表します。例えば、ユーザーがタッチ面（画面やトラックパッドなど）を 3 本指で操作している場合、対応する `TouchList` オブジェクトは 1 本の指あたり 1 つの {{domxref("Touch")}} オブジェクトを持ち、全部で 3 項目になります。

このインターフェイスは[変更不可能なリストを作成しようとしたもの](https://stackoverflow.com/questions/74630989/why-use-domstringlist-rather-than-an-array/74641156#74641156)で、すでに使用しているコードを壊さないために対応しているだけです。現代の API では、JavaScript の[配列](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array)をベースにした型でリストを表現しています。このことにより、配列のメソッドの多くを利用可能にし、同時にその使用方法に追加の意味づけをすることができます (例えば、アイテムを読み取り専用にする)。

この歴史的な理由は、開発者が `TouchList` を避けるべきということではありません。開発者は `TouchList` のオブジェクトをを自分で作成するのではなく、{{domxref("TouchEvent.targetTouches")}} などの API から取得するでしょう。そして、これらの API は非推奨になっていません。ただし、本物の配列との意味論的な違いには注意するべきです。

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
