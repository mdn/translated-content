---
title: "DOMTokenList: item() メソッド"
short-title: item()
slug: Web/API/DOMTokenList/item
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("DOM")}}

**`item()`** は {{domxref("DOMTokenList")}} インターフェイスのメソッドで、リスト内の項目をその位置から取得します。

> **メモ:** このメソッドは[ブラケット記法](/ja/docs/Web/JavaScript/Reference/Operators/Property_accessors#ブラケット表記法)と等価です。
> したがって、 `aList.item(i)` は `aList[i]` と同じです。

## 構文

```js-nolint
tokenList.item(index)
```

### 引数

- `index`
  - : 返したい項目の位置を表す数値です。整数でなかった場合は、整数部分のみが使用されます。

### 返値

返された要素を表す文字列です。数値がそのリストの `length` 以上であった場合は `null` を返します。

### 例外

- {{jsxref("TypeError")}}
  - : `index` が整数に変換できなかった場合に発生します。

## 例

次の例は、 {{htmlelement("span")}} 要素に設定されたクラスのリストを `DOMTokenList` として取得するのに {{domxref("Element.classList")}} を使用します。それからリスト内の最後の要素を `item(tokenList.length - 1)` を使用して取得し、 `<span>` の {{domxref("Node.textContent")}} の中に書き込みます。

最初に HTML です。

```html
<span class="a b c"></span>
```

そして JavaScript です。

```js
const span = document.querySelector("span");
const classes = span.classList;
const item = classes.item(classes.length - 1);
span.textContent = item;
```

出力結果は以下のようになります。

{{ EmbedLiveSample('Examples', '100%', 60) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
