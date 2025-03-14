---
title: "DOMTokenList: add() メソッド"
short-title: add()
slug: Web/API/DOMTokenList/add
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("DOM")}}

**`add()`** は {{domxref("DOMTokenList")}} インターフェイスのメソッドで、指定されたトークンをリストに追加します。既に存在する場合は何もしません。

## 構文

```js-nolint
add(token0)
add(token0, token1)
add(token0, token1, /* … ,*/ tokenN)
```

## 引数

- `tokenN`
  - : `DOMTokenList` に追加するトークン（またはトークン群）を表す文字列です。

### 返値

なし。

### 例外

- `SyntaxError` {{domxref("DOMException")}}
  - : 引数のうちの 1 つが空文字列であった場合に発生します。
- `InvalidCharacterError` {{domxref("DOMException")}}
  - : トークンに ASCII ホワイトスペースが含まれていた場合に発生します。

## 例

以下の例では、 {{htmlelement("span")}} 要素に設定されたクラスのリストを `DOMTokenList` として受け取るのに {{domxref("Element.classList")}} を使用しています。それからリストに新しいトークンを追加し、リストを `<span>` の {{domxref("Node.textContent")}} に書き込みます。

最初に HTML です。

```html
<span class="a b c"></span>
```

そして JavaScript です。

```js
const span = document.querySelector("span");
const classes = span.classList;
classes.add("d");
span.textContent = classes;
```

出力結果は以下のようになります。

{{ EmbedLiveSample('Examples', '100%', 60) }}

同様に、複数のトークンを追加することができます。

```js
span.classList.add("d", "e", "f");
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
