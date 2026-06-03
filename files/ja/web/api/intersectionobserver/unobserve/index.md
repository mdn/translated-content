---
title: "IntersectionObserver: unobserve() メソッド"
short-title: unobserve()
slug: Web/API/IntersectionObserver/unobserve
l10n:
  sourceCommit: fe47429d64ffaacb24f5130523442aeaabf26ac6
---

{{APIRef("Intersection Observer API")}}

**`unobserve()`** は {{domxref("IntersectionObserver")}} インターフェイスのメソッドで、 `IntersectionObserver` に指定された対象要素の監視を停止するよう指示します。

## 構文

```js-nolint
unobserve(target)
```

### 引数

- `target`
  - : 監視を停止する {{domxref("Element")}} を指定します。
    指定された要素を監視していない場合、このメソッドは何もせず、例外も発生しません。

### 返値

なし ({{jsxref("undefined")}})。

## 例

このスニペットは、オブザーバーが作成され、要素が監視され、そして監視が終了する様子を示しています。

```js
const observer = new IntersectionObserver(callback);
observer.observe(document.getElementById("elementToObserve"));

// …

observer.unobserve(document.getElementById("elementToObserve"));
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [交差オブザーバー API](/ja/docs/Web/API/Intersection_Observer_API)
- {{domxref("IntersectionObserver.observe()")}}
