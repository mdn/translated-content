---
title: "Text: Text() コンストラクター"
slug: Web/API/Text/Text
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{ APIRef("DOM")}}

**`Text()`** コンストラクターは新しい {{domxref("Text")}} オブジェクトを返します。これは、引数で与えられたオプションの文字列をテキストコンテンツとして使用します。

## 構文

```js-nolint
new Text()
new Text(string)
```

### 引数

- `string` {{optional_inline}}

### 返値

新しい {{domxref("Text")}} オブジェクトで、`string` 引数の内容、引数が与えられなかった場合は空文字列を持ったものです。

## 例

```js
let text = new Text("Test");
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [DOM API](/ja/docs/Web/API/Document_Object_Model)
