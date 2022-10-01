---
title: get RegExp[@@species]
slug: Web/JavaScript/Reference/Global_Objects/RegExp/@@species
---

{{JSRef}}

**`RegExp[@@species]`** アクセサープロパティは `RegExp` コンストラクターを返します。

{{EmbedInteractiveExample("pages/js/regexp-getregexp-@@species.html")}}

## 解説

`species` アクセサープロパティは、 `RegExp` の既定のコンストラクターを返します。サブクラスのコンストラクターは、コンストラクターの割り当てをオーバーライドするためにこれを使用することができます。

## 例

### 通常オブジェクトの species

`species` プロパティは、既定のコンストラクターを返します。 `RegExp` オブジェクトであれば、 `RegExp` コンストラクターを返します。

```js
RegExp[Symbol.species]; // function RegExp()
```

### 派生オブジェクトの species

派生クラスのコレクションオブジェクト (たとえば、独自の正規表現を表す `MyRegExp`) では、 `MyRegExp` の species は `MyRegExp` コンストラクターです。しかし、派生クラスのメソッドで親である `RegExp` オブジェクトを返すようにこれをオーバーライドしたくなるかもしれません。

```js
class MyRegExp extends RegExp {
  // MyRegExp の species を親である RegExp コンストラクタにオーバーライドします。
  static get [Symbol.species]() { return RegExp; }
}
```

## 仕様書

| 仕様書                                                                                                       |
| ------------------------------------------------------------------------------------------------------------ |
| {{SpecName('ESDraft', '#sec-get-regexp-@@species', 'get RegExp [ @@species ]')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.RegExp.@@species")}}

## 関連情報

- {{jsxref("RegExp")}}
- {{jsxref("Symbol.species")}}
