---
title: 論理否定演算子 (!)
slug: Web/JavaScript/Reference/Operators/Logical_NOT
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

**論理否定演算子 (`!`)** （論理反転、否定）は、真値を取ると偽値になり、その逆も同様です。これは通常論理型 (ブール型) の値に使用されます。論理型以外の値に使用した場合、単一のオペランドが `true` に変換できる場合は `false` を返し、それ以外は `true` を返します。

{{InteractiveExample("JavaScript デモ: 論理否定演算子 (!)", "shorter")}}

```js interactive-example
const a = 3;
const b = -2;

console.log(!(a > 0 || b > 0));
// 予想される結果: false
```

## 構文

```js-nolint
!x
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

`!` 演算子は論理値以外のオペランドに対して使用することができますが、返値が常に[論理型プリミティブ](/ja/docs/Web/JavaScript/Guide/Data_structures#論理型)に変換することが可能であるため、論理演算子と見なすことができます。返値 (または一般的な式) を対応する論理値に明示的に変換するには、二重の否定演算子 (`!!`) または {{jsxref("Boolean/Boolean", "Boolean")}} コンストラクターを使用してください。

## 例

### 否定の使用

以下のコードは `!` （論理否定）演算子の例を示しています。

```js
!true; // !t は false を返す
!false; // !f は true を返す
!""; // !f は true を返す
!"Cat"; // !t は false を返す
```

### 二重否定 (`!!`)

複数の否定演算子を連続して使用することで、明示的にあらゆる値を対応する[論理型プリミティブ](/ja/docs/Web/JavaScript/Guide/Data_structures#論理型)に変換することができます。変換は値の「真値性」または「偽値性」に基づいて行われます（{{Glossary("truthy")}} および {{Glossary("falsy")}} を参照）。

同じ変換は {{jsxref("Boolean/Boolean", "Boolean()")}} 関数を通じて行うこともできます。

```js
!!true; // !!truthy は true を返す
!!{}; // !!truthy は true: あらゆるオブジェクトは真値になります…
!!new Boolean(false); // … .valueOf() が false の Boolean オブジェクトであっても
!!false; // !!falsy は false を返す
!!""; // !!falsy は false を返す
!!Boolean(false); // !!falsy は false を返す
```

### 否定同士の変換

以下の操作を**論理値**で行った場合、

```js-nolint
!!bCondition
```

常に以下のものと等しくなります。

```js-nolint
bCondition
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Boolean")}}
- {{Glossary("Truthy", "真値")}}
- {{Glossary("Falsy", "偽値")}}
