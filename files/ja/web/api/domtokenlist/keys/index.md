---
title: "DOMTokenList: keys() メソッド"
short-title: keys()
slug: Web/API/DOMTokenList/keys
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("DOM")}}

**`keys()`** は {{domxref("DOMTokenList")}} インターフェイスのメソッドで、このオブジェクトに含まれるすべてのキーを処理することができる{{jsxref("Iteration_protocols","イテレーター","",1)}}を返します。
キーの型は符号なし整数です。

## 構文

```js-nolint
keys()
```

## 引数

なし。

### 返値

{{jsxref("Iteration_protocols","イテレーター","",1)}}を返します。

## 例

次の例では、 {{htmlelement("span")}} 要素に設定されたクラスのリストを `DOMTokenList` として受け取るために、 {{domxref("Element.classList")}} を使用しています。 `keys()` を使用してキーを含むイテレーターを取得してから、 [for...of](/ja/docs/Web/JavaScript/Reference/Statements/for...of) ループを使用してそれぞれを反復処理し、それを `<span>` の {{domxref("Node.textContent")}} に書き込みます。

最初に HTML です。

```html
<span class="a b c"></span>
```

そして JavaScript です。

```js
const span = document.querySelector("span");
const classes = span.classList;
const iterator = classes.keys();

for (let value of iterator) {
  span.textContent += `(${value}) `;
}
```

出力結果は以下のようになります。

{{ EmbedLiveSample('Examples', '100%', 60) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("DOMTokenList.entries()")}}, {{domxref("DOMTokenList.forEach()")}}, {{domxref("DOMTokenList.values")}}
