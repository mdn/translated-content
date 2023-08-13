---
title: "CharacterData: remove() メソッド"
slug: Web/API/CharacterData/remove
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef("DOM")}}

**`remove()`** は {{domxref("CharacterData")}} インターフェイスのメソッドで、このノードに含まれるテキストを削除します。

## 構文

```js-nolint
remove()
```

### 引数

なし。

## 例

### `remove()` の使用

```html
<span>結果: </span>A long string.
```

```js
const span = document.querySelector("span");
const textnode = span.nextSibling;

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
