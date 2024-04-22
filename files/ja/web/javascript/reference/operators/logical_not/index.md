---
title: 論理否定 (!)
slug: Web/JavaScript/Reference/Operators/Logical_NOT
---

{{jsSidebar("Operators")}}

論理否定 (`!`) 演算子 (論理反転、否定) は、真値を取ると偽値になり、その逆も同様です。これは通常論理型 (ブール型) の値に使用されます。論理型以外の値に使用した場合、単一のオペランドが `true` に変換できる場合は `false` を返し、それ以外は `true` を返します。

{{EmbedInteractiveExample("pages/js/expressions-logical-not.html", "shorter")}}

## 構文

```js
!expr;
```

## 解説

単一のオペランドが `true` に変換できる場合は `false` を返し、それ以外は `true` を返します。

ある値が `true` に変換できる場合、その値は真値 ({{Glossary("truthy")}}) と呼ばれます。ある値が `false` に変換できる場合、その値は偽値 ({{Glossary("falsy")}}) と呼ばれます。

false に変換することができる式の例を示します。

- `null`
- `NaN`
- `0`
- 空文字列 (`""` または `''` または ` `` `)
- `undefined`

`!` 演算子は論理値以外のオペランドに対して使用することができますが、返値が常に[論理型プリミティブ](/ja/docs/Web/JavaScript/Data_structures#論理型)に変換することが可能であるため、論理演算子と見なすことができます。返値 (または一般的な式) を対応する論理値に明示的に変換するには、二重の[否定演算子](/ja/docs/Web/JavaScript/Reference/Operators/Logical_NOT)または {{jsxref("Global_Objects/Boolean/Boolean", "Boolean")}} コンストラクターを使用してください。

## 例

### 否定の使用

以下のコードは `!` (論理否定) 演算子の例を示しています。

```js
n1 = !true; // !t は false を返す
n2 = !false; // !f は true を返す
n3 = !""; // !f は true を返す
n4 = !"Cat"; // !t は false を返す
```

### 二重否定 (`!!`)

複数の否定演算子を連続して使用することで、明示的にあらゆる値を対応する[論理型プリミティブ](/ja/docs/Web/JavaScript/Data_structures#論理型)に変換することができます。変換は値の「真値性」または「偽値性」に基づいて行われます ({{Glossary("truthy")}} および {{Glossary("falsy")}} を参照)。

同じ変換は {{jsxref("Global_Objects/Boolean/Boolean", "Boolean")}} 関数を通じて行うこともできます。

```js
n1 = !!true; // !!truthy は true を返す
n2 = !!{}; // !!truthy は true: *あらゆる*オブジェクトは真値になります...
n3 = !!new Boolean(false); // ... .valueOF() が false の Boolean オブジェクトであっても
n4 = !!false; // !!falsy は false を返す
n5 = !!""; // !!falsy は false を返す
n6 = !!Boolean(false); // !!falsy は false を返す
```

### 否定同士の変換

以下の操作を**論理値**で行った場合、

```js
!!bCondition;
```

常に以下のものと等しくなります。

```js
bCondition;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Boolean")}}
- {{Glossary("Truthy", "真値")}}
- {{Glossary("Falsy", "偽値")}}
