---
title: Text()
slug: Web/API/Text/Text
tags:
  - コンストラクター
  - リファレンス
browser-compat: api.Text.Text
translation_of: Web/API/Text/Text
---
{{ APIRef("DOM")}}

**`Text()`** コンストラクターは新しい {{domxref("Text")}} オブジェクトを返します。これは、引数で与えられたオプションの文字列をテキストコンテンツとして使用します。

## 構文

```js
new Text();
new Text(aString);
```

### 引数

- `aString` {{optional_inline}}

### 返値

新しい {{domxref("Text")}} オブジェクトで、 `aString` または引数が省略された場合は空文字列が入ったものです。

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
