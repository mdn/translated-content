---
title: get Set[@@species]
slug: Web/JavaScript/Reference/Global_Objects/Set/@@species
tags:
  - ECMAScript 2015
  - JavaScript
  - プロパティ
  - set
browser-compat: javascript.builtins.Set.@@species
translation_of: Web/JavaScript/Reference/Global_Objects/Set/@@species
---
{{JSRef}}

**`Set[Symbol.species]`** アクセサープロパティは、`Set` コンストラクターを返します。

## 解説

`species` アクセサープロパティは、 `Set` オブジェクトの既定のコンストラクターを返します。サブクラスのコンストラクターはコンストラクターに代入することで、これをオーバーライドすることができます。

## 例

通常のオブジェクトの spicies

`species` プロパティは、`Set` オブジェクトの既定のコンストラクター関数である `Set` コンストラクターを返します。

```js
Set[Symbol.species]; // Set() 関数
```

### 派生オブジェクトの spicies

派生コレクションオブジェクト（たとえば、独自の集合である `MySet`）では、`MySet` の species は `MySet` コンストラクターです。しかし、派生クラスのメソッドで、親である `Set` オブジェクトを返すためにこれをオーバーライドしたいかもしれません。

```js
class MySet extends Set {
  // MySet species を親である Set コンストラクターにオーバーライド。
  static get [Symbol.species]() { return Set; }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Set")}}
- {{jsxref("Symbol.species")}}
