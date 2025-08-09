---
title: JSON.isRawJSON()
slug: Web/JavaScript/Reference/Global_Objects/JSON/isRawJSON
l10n:
  sourceCommit: 47962c4ebad5a138673422ec63a282ab9a63d454
---

{{JSRef}}

**`JSON.isRawJSON()`** は静的メソッドで、ある値が {{jsxref("JSON.rawJSON()")}} から返されるオブジェクトであるかどうかを検査します。

## 構文

```js-nolint
JSON.isRawJSON(value)
```

### 引数

- `value`
  - : 検査する値です。

### 返値

`value` が {{jsxref("JSON.rawJSON()")}} で作成されたものであれば `true` です。そうでなければ `false` です。

## 解説

「生の JSON」オブジェクトは、 JSON にシリアライズされたとき、すでに JSON の一部であるかのように扱われます。さらに、 {{jsxref("JSON.rawJSON()")}} が動作するので、生の JSON は構文的に有効な JSON であることが保証されます。生の JSON オブジェクトの形状と動作の詳細情報については、 {{jsxref("JSON.rawJSON()")}} を参照してください。このメソッドは、他のシリアライズライブラリーが生の JSON オブジェクトに対して `JSON.stringify()` と同様の動作を実装できるようにするために存在します。

## 例

### JSON.isRawJSON() の使用

次の例は、 `JSON.isRawJSON()` を使用して、オブジェクトが `JSON.rawJSON()` によって返されたかどうかを検査する方法を示します。データを YAML 風の形式にシリアライズするカスタムシリアライザーを実装しています。

```js
function mySerializer(value, indent = "") {
  if (typeof value !== "object" || value === null) {
    return JSON.stringify(value);
  }
  if (JSON.isRawJSON(value)) {
    return value.rawJSON;
  }
  const subIndent = `${indent}  `;
  if (Array.isArray(value)) {
    return `- ${value.map((v) => mySerializer(v, subIndent)).join(`\n${indent}- `)}`;
  }
  return Object.entries(value)
    .map(([key, value]) => {
      const subValue = mySerializer(value, subIndent);
      if (subValue.includes("\n")) {
        return `${key}:\n${subIndent}${subValue}`;
      }
      return `${key}: ${subValue}`;
    })
    .join(`\n${indent}`);
}

console.log(
  mySerializer({
    name: "Josh",
    userId: JSON.rawJSON("12345678901234567890"),
    friends: [
      { name: "Alice", userId: JSON.rawJSON("9876543210987654321") },
      { name: "Bob", userId: JSON.rawJSON("56789012345678901234") },
    ],
  }),
);

// name: "Josh"
// userId: 12345678901234567890
// friends:
//   - name: "Alice"
//     userId: 9876543210987654321
//   - name: "Bob"
//     userId: 56789012345678901234
```

もしこの例で `userId` の値を `JSON.rawJSON()` で作成せず、直接数値として渡していた場合、 JavaScript の浮動小数点数の制限により、精度が低下してしまいます。

```js
console.log(
  mySerializer({
    name: "Josh",
    userId: 12345678901234567890,
    friends: [
      { name: "Alice", userId: 9876543210987654321 },
      { name: "Bob", userId: 56789012345678901234 },
    ],
  }),
);

// name: "Josh"
// userId: 12345678901234567000
// friends:
//   - name: "Alice"
//     userId: 9876543210987655000
//   - name: "Bob"
//     userId: 56789012345678900000
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`JSON.isRawJSON` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#jsonparse-source-text-access)
- {{jsxref("JSON")}}
- {{jsxref("JSON.stringify()")}}
- {{jsxref("JSON.rawJSON()")}}
