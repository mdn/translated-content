---
title: CharacterData.remove()
slug: Web/API/CharacterData/remove
tags:
  - メソッド
  - リファレンス
browser-compat: api.CharacterData.remove
translation_of: Web/API/CharacterData/remove
---
{{APIRef("DOM")}}

**`remove()`** は {{domxref("CharacterData")}} インターフェイスのメソッドで、このノードに含まれるテキストを削除します。

## 構文

```js
remove();
```

### 引数

なし。

## 例

### `remove()` の使用

```html
<span>Result: </span>A long string.
```

```js
let span = document.getElementsByTagName("span")[0];
let textnode = span.nextSibling;

textnode.remove(); // Removes the text
```

{{EmbedLiveSample("Example", "100%", 50)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Element.remove()")}}
- {{domxref("CharacterData.deleteData()")}}
