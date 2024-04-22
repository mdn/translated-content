---
title: "DOMTokenList: values() メソッド"
short-title: values()
slug: Web/API/DOMTokenList/values
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("DOM")}}

**`values()`** は {{domxref("DOMTokenList")}} インターフェイスのメソッドで、開発者がこの `DOMTokenList` に含まれるすべての値を処理することができる{{jsxref("Iteration_protocols","イテレーター","",1)}}を返します。それぞれの値は文字列です。

## 構文

```js-nolint
tokenList.values()
```

## 引数

なし。

### 返値

{{jsxref("Iteration_protocols","イテレーター","",1)}}を返します。

## 例

次の例では、 {{htmlelement("span")}} 要素に設定されたクラスのリストを {{domxref("Element.classList")}} を使用して `DOMTokenList` として受け取ります。 `values()` を使用して値を含むイテレーターを取得してから、 [for...of](/ja/docs/Web/JavaScript/Reference/Statements/for...of) ループを使用してそれぞれを反復処理し、それを `<span>` の {{domxref("Node.textContent")}} に書き込みます。

最初に HTML です。

```html
<span class="a b c"></span>
```

そして JavaScript です。

```js
const span = document.querySelector("span");
const classes = span.classList;
const iterator = classes.values();

for (const value of iterator) {
  span.textContent += `(${value}) `;
}
```

出力結果は以下のようになります。

{{ EmbedLiveSample('Examples', '100%', 60) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
