---
title: "KeyboardLayoutMap: has() メソッド"
short-title: has()
slug: Web/API/KeyboardLayoutMap/has
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("Keyboard API")}}{{SeeCompatTable}}

**`has()`** は {{domxref('KeyboardLayoutMap')}} インターフェイスのメソッドで、オブジェクトに指定したキーを持つ要素があるかどうかを示す論理値を返します。

有効なキーの一覧は [UI Events KeyboardEvent code Values](https://www.w3.org/TR/uievents-code/#key-alphanumeric-writing-system) 仕様にあります。

## 構文

```js-nolint
has(key)
```

### 引数

- `key`
  - : マップ内で検索する要素のキーです。

### 返値

指定したキーが得られたかどうかを示す論理値 ({{jsxref('Boolean')}}) です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
