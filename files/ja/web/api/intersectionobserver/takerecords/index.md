---
title: IntersectionObserver.takeRecords()
slug: Web/API/IntersectionObserver/takeRecords
l10n:
  sourceCommit: b7556b71e1fc3e89057671b372871e9f33d3f0b8
---

{{APIRef("Intersection Observer API")}}

{{domxref("IntersectionObserver")}} の **`takeRecords()`** メソッドは、対象となる要素のうち、前回交差状態がチェックされた、すなわち明示的にこのメソッドが呼び出されたか、自動的にオブザーバーのコールバックが呼び出された以降に交差状態が変化した要素を、要素ごとに 1 つの {{domxref("IntersectionObserverEntry")}} オブジェクトとした配列を返します。

> **メモ:** コールバックを使用してこれらの変更を監視している場合は、このメソッドを呼び出す必要はありません。このメソッドを呼び出すと処理待ちの交差リストをクリアしてしまうため、コールバックが実行されません。

## 構文

```js-nolint
takeRecords()
```

### 引数

なし。

### 返値

ルートとの交差状態が最後に調べられた時点以降に変更された対象要素ごとに 1 つの {{domxref("IntersectionObserverEntry")}} オブジェクトとした配列。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [交差オブザーバー API](/ja/docs/Web/API/Intersection_Observer_API)
