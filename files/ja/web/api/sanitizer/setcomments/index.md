---
title: "Sanitizer: setComments() メソッド"
short-title: setComments()
slug: Web/API/Sanitizer/setComments
l10n:
  sourceCommit: ba886c384e385689ce8feffacf4f7ce1d8c5e736
---

{{APIRef("HTML Sanitizer API")}}

**`setComments()`** メソッドは、{{domxref("Sanitizer")}} インターフェイスのメソッドで、無害化オブジェクトによってコメントを許可するか除去するかを設定します。

## 構文

```js-nolint
setComments(allow);
```

### 引数

- `allow`
  - : コメントを許可する場合は `true`、除去する場合は `false` です。

### 返値

操作によって構成が変更された場合は `true` を返し、構成の [`comments`](/ja/docs/Web/API/SanitizerConfig#comments) がすでに指定した値に設定されている場合は `false` を返します。

## 例

### コメントを無害化する方法

以下のコードは、`setComments()` メソッドの基本的な使い方を示します。

```js
// 無害化オブジェクトを作成（ここではデフォルト）
const sanitizer = new Sanitizer();

// コメントを許可
sanitizer.setComments(true);

// コメントを除去
sanitizer.setComments(false);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
