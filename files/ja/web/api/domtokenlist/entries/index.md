---
title: "DOMTokenList: entries() メソッド"
short-title: entries()
slug: Web/API/DOMTokenList/entries
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("DOM")}}

**`entries()`** は {{domxref("DOMTokenList")}} インターフェイスのメソッドで、このオブジェクトに含まれるすべてのキー/値の組を処理することができる{{jsxref("Iteration_protocols","イテレーター","",1)}}を返します。値は [キー, 値] の組を持つ配列 ({{jsxref("Array")}}) であり、それぞれが単一のトークンを表します。

## 構文

```js-nolint
entries()
```

### 返値

{{jsxref("Iteration_protocols","イテレーター","",1)}}を返します。

## 例

次の例では、 {{htmlelement("span")}} 要素に設定されたクラスのリストを `DOMTokenList` として受け取るのに {{domxref("Element.classList")}} を使用しています。 `entries()` を使用してキー/値の組を含むイテレーターを取得してから、 {{jsxref("Statements/for...of", "for...of")}} ループを使用してそれぞれを反復処理し、それを `<span>` の {{domxref("Node.textContent")}} に書き込みます。

最初に HTML です。

```html
<span class="a b c"></span>
```

そして JavaScript です。

```js
const span = document.querySelector("span");
const classes = span.classList;
const iterator = classes.entries();

for (const value of iterator) {
  span.textContent += `(${value})`;
}
```

出力結果は以下のようになります。

{{ EmbedLiveSample('Examples', '100%', 60) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("DOMTokenList.foreach()")}}, {{domxref("DOMTokenList.keys")}}, {{domxref("DOMTokenList.values")}}
