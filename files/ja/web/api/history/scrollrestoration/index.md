---
title: "History: scrollRestoration プロパティ"
short-title: scrollRestoration
slug: Web/API/History/scrollRestoration
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("History API")}}

**`scrollRestoration`** は {{DOMxRef("History")}} インターフェイスのプロパティで、ウェブアプリケーションが履歴の移動の動作で既定のスクロール位置の復元を明示的に設定できるようにします。

## 値

以下のうちのいずれかです。

- `auto`
  - : ユーザーがスクロールしたページ上のスクロールの位置が復元されます。
- `manual`
  - : ページ上のスクロール位置は復元されません。ユーザーが手動でその位置までスクロールする必要があります。

## 例

### 現在のスクロール復元の動作を問い合わせる

```js
const scrollRestoration = history.scrollRestoration;
if (scrollRestoration === "manual") {
  console.log(
    "ページ上の位置は復元されないので、ユーザーが手動でスクロールする必要があります。",
  );
}
```

### 自動的にページ上の位置の復元をしないようにする

```js
if (history.scrollRestoration) {
  history.scrollRestoration = "manual";
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
