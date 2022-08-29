---
title: CharacterData.deleteData()
slug: Web/API/CharacterData/deleteData
tags:
  - メソッド
  - リファレンス
browser-compat: api.CharacterData.deleteData
translation_of: Web/API/CharacterData/deleteData
---
{{APIRef("DOM")}}

**`deleteData()`** は {{domxref("CharacterData")}} インターフェイスのメソッドで、この `CharacterData` ノードからすべてまたは一部のデータを削除します。

## 構文

```js
characterData.deleteData(offset, count)
```

### 引数

- `offset`
  - : 削除するデータの先頭をバイト数で表す数です。
    `0` は文字列の最初の文字を表します。
- `count`
  - : 削除するバイト数です。

### 返値

なし。

## 例外

- `IndexSizeError` {{domxref("DOMException")}}
  - : `offset` が中のデータの長さよりも長い場合に発生します。

## 例

```html
<span>Result: </span>A long string.
```

```js
let span = document.getElementsByTagName("span")[0];
let textnode = span.nextSibling;

textnode.deleteData(1, 5);
```

{{EmbedLiveSample("Example", "100%", 50)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("CharacterData.appendData()")}}, {{domxref("CharacterData.insertData()")}}, {{domxref("CharacterData.replaceData()")}}
- {{domxref("CharacterData.data")}}
