---
title: "Range: toString() メソッド"
short-title: toString()
slug: Web/API/Range/toString
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{ApiRef("DOM")}}

**`Range.toString()`** メソッドは{{Glossary("stringifier", "文字列化")}}で、 {{domxref("Range")}} のテキストを返します。

{{domxref("Range")}} の内容を alert で表示すると、暗黙のうちに `toString()` を呼び出すので、アラートダイアログで範囲とテキストを比較しても効果がありません。

## 構文

```js-nolint
toString()
```

### 引数

なし。

### 返値

文字列です。

## 例

### HTML

```html
<p>
  This example logs <em>everything</em> between the emphasized <em>words</em>.
  Look at the output below.
</p>
<p id="log"></p>
```

### JavaScript

```js
const range = document.createRange();

range.setStartBefore(document.getElementsByTagName("em").item(0), 0);
range.setEndAfter(document.getElementsByTagName("em").item(1), 0);
document.getElementById("log").textContent = range.toString();
```

### 結果

{{EmbedLiveSample("Examples")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [DOM インターフェイス索引](/ja/docs/Web/API/Document_Object_Model)
