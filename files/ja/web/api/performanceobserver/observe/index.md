---
title: PerformanceObserver.observe()
slug: Web/API/PerformanceObserver/observe
---

{{APIRef("Performance Timeline API")}}

監視するパフォーマンスエントリタイプのセットを指定するには、**{{domxref("PerformanceObserver")}}** インターフェイスの **`observe()`** メソッドを使用します。パフォーマンスエントリタイプは {{domxref("DOMString")}} オブジェクトの配列として指定され、それぞれが 1 つのエントリタイプを命名します。型名は[パフォーマンスエントリタイプ名](/ja/docs/Web/API/PerformanceEntry/entryType)に記載されています。

一致するパフォーマンスエントリが記録されると、パフォーマンスオブザーバーのコールバック関数 ({{domxref("PerformanceObserver")}}) の作成時に設定されたコールバック関数が呼び出されます。

## 構文

```
observer.observe(options);
```

### 引数

- `options`

  - : 1 つのメンバを持つ `PerformanceObserverInit` ディクショナリ

    - "`entryTypes`" は {{domxref("DOMString")}} オブジェクトの配列で、それぞれが監視対象のパフォーマンスエントリの種類を 1 つ指定します。有効な型名のリストについては {{domxref("PerformanceEntry.entryType")}} を参照してください。認識されない型は無視されますが、ブラウザーは開発者がコードをデバッグするのに役立つ警告メッセージをコンソールに出力するかもしれません。有効な型が見つからない場合、`observe()` は効果がありません。

## 例

この例では、2 つの `PerformanceObservers` を作成して設定します。1 つは`"mark"` と `"frame"` イベントを監視し、もう 1 つは `"measure"` イベントを監視します。

```js
var observer = new PerformanceObserver(function(list, obj) {
  var entries = list.getEntries();
  for (var i=0; i < entries.length; i++) {
    // Process "mark" and "frame" events
  }
});
observer.observe({entryTypes: ["mark", "frame"]});

function perf_observer(list, observer) {
  // Process the "measure" event
}
var observer2 = new PerformanceObserver(perf_observer);
observer2.observe({entryTypes: ["measure"]});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("api.PerformanceObserver.observe")}}
