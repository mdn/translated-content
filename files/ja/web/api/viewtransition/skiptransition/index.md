---
title: "ViewTransition: skipTransition() メソッド"
short-title: skipTransition()
slug: Web/API/ViewTransition/skipTransition
l10n:
  sourceCommit: 3a95c239db50c88fdde48daacb6c279006a422b9
---

{{APIRef("View Transition API")}}

**`skipTransition()`** は {{domxref("ViewTransition")}} インターフェイスのメソッドで、ビュー遷移のアニメーション部分をスキップしますが、関連付けられたビューの更新処理を実行します。

## 構文

```js-nolint
skipTransition()
```

### 引数

なし。

### 返値

`undefined` です。

## 例

### SPA のビュー遷移をスキップ

```js
// 新しいビュー遷移を開始
const transition = document.startViewTransition(() => displayNewImage());

// アニメーションをスキップし、DOM を更新する
transition.skipTransition();
```

### MPA のビュー遷移をスキップ

```js
// 現在の（遷移元）ページで発生
document.addEventListener("pageswap", (event) => {
  event.viewTransition?.skipTransition();
});

// 宛先の（遷移先）ページで発生
document.addEventListener("pagereveal", (event) => {
  event.viewTransition?.skipTransition();
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Smooth transitions with the View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/)
