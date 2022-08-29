---
title: Text.replaceWholeText()
slug: conflicting/Web/API/Text
tags:
  - メソッド
  - 非推奨
  - リファレンス
translation_of: Web/API/Text/replaceWholeText
original_slug: Web/API/Text/replaceWholeText
browser-compat: api.Text.replaceWholeText
---
{{ApiRef("DOM")}}{{deprecated_header}}

**`replaceWholeText()`** は {{domxref("Text")}} インターフェイスのメソッドで、ノードのテキストと、*論理的に隣接するすべてのテキストノード*を指定されたテキストで置き換えます。
置換されたノードは、現在のノードを含め、置換テキストを受け取るものでない限り、削除されます。

> **Note:** 現代のブラウザーで同じ効果を達成するには、 {{domxref("Node.textContent")}}, {{domxref("Element.innerHTML")}}, {{domxref("HTMLElement.innerText")}}, {{domxref("CharacterData.replaceData()")}} を使用することを検討してください。

## 構文

```js
replaceWholeText(content)
```

### 引数

- `content`
  - : このノードを置き換えるテキストです。
    > **Note:** `content` 引数は省略不可ですが、空文字列 (`""`) に設定することはできます。

### 返値

置き換えられた文字列の {{domxref("Text")}} ノード、または置き換える文字列が　`""` であった場合は `null` です。

> **Note:** 返されるノードは、現在のノードが読み取り専用でない限り、現在のノードです。読み取り専用であった場合は、同じ型のテキストノードが新たに生成され、そのノードが置換された位置に挿入されたものとします。

### 例外

- `NoModificationError` {{domxref("DOMException")}}
  - : 置き換えられるテキストノードすべてが読み取り専用であった場合に発生します。

## 仕様書

このメソッドは、もともと DOM 仕様書に存在していたものです。現在は削除されており、この機能は標準化路線に乗っていません。

代わりに、 {{domxref("Node.textContent")}}, {{domxref("Element.innerHTML")}}, {{domxref("HTMLElement.innerText")}}, {{domxref("CharacterData.replaceData()")}} などを使用したアルゴリズムを使うことを検討してください。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先の {{domxref("Text")}} インターフェイス
- {{domxref("Node.textContent")}}, {{domxref("Element.innerHTML")}},
  {{domxref("HTMLElement.innerText")}}, {{domxref("CharacterData.replaceData()")}}
