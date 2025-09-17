---
title: "IntersectionObserver: takeRecords() メソッド"
short-title: takeRecords()
slug: Web/API/IntersectionObserver/takeRecords
l10n:
  sourceCommit: fe47429d64ffaacb24f5130523442aeaabf26ac6
---

{{APIRef("Intersection Observer API")}}

**`takeRecords()`** は {{domxref("IntersectionObserver")}} インターフェイスのメソッドで、 {{domxref("IntersectionObserverEntry")}} オブジェクトの配列を返します。それぞれのオブジェクトは、前回明示的にこのメソッドが呼び出されるか、暗黙的にオブザーバーのコールバックが自動的に呼び出されて交差状態がチェックされたときから変更されたそれぞれの対象要素を表します。

> [!NOTE]
> コールバックを使用してこれらの変更を監視している場合は、このメソッドを呼び出す必要はありません。
> このメソッドを呼び出すと処理待ちの交差リストをクリアしてしまうため、コールバックが実行されません。

## 構文

```js-nolint
takeRecords()
```

### 引数

なし。

### 返値

ルートとの交差状態が最後に調べられた時点以降に変更された対象要素ごとに 1 つずつ {{domxref("IntersectionObserverEntry")}} オブジェクトが入った配列。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [交差オブザーバー API](/ja/docs/Web/API/Intersection_Observer_API)
