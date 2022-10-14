---
title: IntersectionObserver.disconnect()
slug: Web/API/IntersectionObserver/disconnect
---

{{APIRef("Intersection Observer API")}}

{{domxref("IntersectionObserver")}} の **`disconnect()`** メソッドは、すべての対象要素について、表示状態の変化の監視を停止します。

## 構文

```
intersectionObserver.disconnect();
```

### 引数

なし。

### 返値

`undefined`。

## 仕様書

| 仕様書                                                                                                                                               | 状態                                         | 備考     |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | -------- |
| {{SpecName('IntersectionObserver','#dom-intersectionobserver-disconnect','IntersectionObserver.disconnect()')}} | {{Spec2('IntersectionObserver')}} | 初回定義 |

## ブラウザーの互換性

{{Compat("api.IntersectionObserver.disconnect")}}

## 関連情報

- {{domxref("IntersectionObserver.observe", "observe()")}}
- {{domxref("IntersectionObserver.unobserve", "unobserve()")}}
