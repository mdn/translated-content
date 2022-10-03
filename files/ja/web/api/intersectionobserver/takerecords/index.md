---
title: IntersectionObserver.takeRecords()
slug: Web/API/IntersectionObserver/takeRecords
---

{{APIRef("Intersection Observer API")}}

{{domxref("IntersectionObserver")}} の **`takeRecords()`** メソッドは、明示的にこのメソッドを呼び出したか、監視のコールバックで暗黙的に自動呼出しされたかのどちらかで前回交差をチェックした後で交差状態の変化があった対象要素を示す {{domxref("IntersectionObserverEntry")}} オブジェクトの配列を返します。

> **メモ:** コールバックを使用してこれらの変更を監視している場合は、このメソッドを呼び出す必要はありません。このメソッドを呼び出すと処理待ちの交差リストをクリアしてしまうため、コールバックが実行されません。

## 構文

```
intersectionObserverEntries = intersectionObserver.takeRecords();
```

### 引数

なし。

### 返値

前回交差をチェックした後で交差状態の変化があった対象要素を示す {{domxref("IntersectionObserverEntry")}} オブジェクトの配列です。

## 例

<<<...>>>

## 仕様書

| 仕様書                                                                                                                                                   | 状態                                         | 備考     |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | -------- |
| {{SpecName('IntersectionObserver','#dom-intersectionobserver-takerecords','IntersectionObserver.takeRecords()')}} | {{Spec2('IntersectionObserver')}} | 初回定義 |

## ブラウザーの互換性

{{Compat("api.IntersectionObserver.takeRecords")}}

## 関連情報

- [Intersection Observer API](/ja/docs/Web/API/Intersection_Observer_API)
