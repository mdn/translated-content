---
title: "DOMTokenList: forEach() メソッド"
short-title: forEach()
slug: Web/API/DOMTokenList/forEach
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("DOM")}}

**`forEach()`** は {{domxref("DOMTokenList")}} インターフェイスのメソッドで、リスト中のそれぞれの値の組に対して挿入順で 1 回ずつ、引数で渡されたコールバックを呼び出します。

## 構文

```js-nolint
forEach(callback)
forEach(callback, thisArg)
```

### 引数

- `callback`

  - : それぞれの要素に対して呼び出す関数で、 3 つの引数を取ります。

    - `currentValue`
      - : 配列内で処理中の現在の要素です。
    - `currentIndex`
      - : 配列内で処理中の現在の要素の位置です。
    - `listObj`
      - : `forEach()` を実行中の配列です。

- `thisArg` {{Optional_inline}}
  - : `callback` を実行する際に {{jsxref("Operators/this", "this")}} として使用する値です。

### 返値

なし。

## 例

次の例では、{{htmlelement("pre")}} 要素に設定されたクラスのリストを `DOMTokenList` として受け取るのに {{domxref("Element.classList")}} を使用しています。`forEach()` を使用して値を含むイテレーターを取得し、それぞれの値を `<pre>` の {{domxref("Node.textContent")}} に `forEach()` の中の関数から書き込みます。

### HTML

```html
<pre class="a b c"></pre>
```

### JavaScript

```js
const pre = document.querySelector("pre");
const classes = pre.classList;
const iterator = classes.values();

classes.forEach(function (value, key, listObj) {
  pre.textContent += `(${value} ${key})/${this}\n`;
}, "arg");
```

### 結果

{{ EmbedLiveSample('Example', '100%', 100) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("DOMTokenList.entries()")}}, {{domxref("DOMTokenList.keys")}}, {{domxref("DOMTokenList.values")}}
