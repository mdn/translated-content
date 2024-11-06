---
title: "Navigator: javaEnabled() メソッド"
slug: Web/API/Navigator/javaEnabled
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{APIRef("HTML DOM")}}{{Deprecated_Header}}

このメソッドは常に false を返します。

## 構文

```js-nolint
javaEnabled()
```

### 引数

なし

### 返値

論理値 `false` です。

## 例

```js
if (window.navigator.javaEnabled()) {
  // コードが実行されることはありません。条件は常に false です
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
