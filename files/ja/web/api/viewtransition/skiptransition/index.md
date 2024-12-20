---
title: "ViewTransition: skipTransition() メソッド"
short-title: skipTransition()
slug: Web/API/ViewTransition/skipTransition
l10n:
  sourceCommit: 7b3ccaec4a93584da12939587ea746acaabe30bc
---

{{APIRef("View Transitions API")}}{{SeeCompatTable}}

**`skipTransition()`** は {{domxref("ViewTransition")}} インターフェイスのメソッドで、ビュー遷移のアニメーション部分をスキップしますが、 DOM を更新する {{domxref("Document.startViewTransition()", "document.startViewTransition()")}} コールバックの実行はスキップしません。

## 構文

```js-nolint
skipTransition()
```

### 引数

なし。

### 返値

`undefined` です。

## 例

```js
// 新しいビュー遷移を開始
const transition = document.startViewTransition(() => displayNewImage());

// アニメーションをスキップし、DOM を更新する
transition.skipTransition();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Smooth and simple transitions with the View Transitions API](https://developer.chrome.com/docs/web-platform/view-transitions/)
