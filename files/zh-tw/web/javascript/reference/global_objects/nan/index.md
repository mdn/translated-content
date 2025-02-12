---
title: NaN
slug: Web/JavaScript/Reference/Global_Objects/NaN
---

{{jsSidebar("Objects")}}

全域屬性 **`NaN`** 表示「非數值」（Not-A-Number）的數值。

{{js_property_attributes(0,0,0)}}

{{InteractiveExample("JavaScript Demo: Standard built-in objects - NaN")}}

```js interactive-example
function sanitize(x) {
  if (isNaN(x)) {
    return NaN;
  }
  return x;
}

console.log(sanitize("1"));
// Expected output: "1"

console.log(sanitize("NotANumber"));
// Expected output: NaN
```

## 語法

```plain
NaN
```

## 描述

`NaN` 的屬性屬於*全域物件*。

如同 {{jsxref("Number.NaN")}} 一般，`NaN` 的初始數值是「非數值」。在當今的瀏覽器中，`NaN` 屬性不可設定（non-configurable）也不可覆寫（non-writable）。雖然可能有例外，也請不要覆蓋它。

寫程式很少會直接動用 `NaN`。通常是在 {{jsxref("Math")}} 函式計算失敗（`Math.sqrt(-1)`）或函式解析數字失敗（`parseInt("blabla")`）後才會回傳。

### 偵測是否為 `NaN`

`NaN` 不等於（`==`、`!=`、`===`、`!==`）任何值，包括 NaN 本身。請使用 {{jsxref("Number.isNaN()")}} 或 {{jsxref("Global_Objects/isNaN", "isNaN()")}} 來確認某個數值是否為 NaN。Or perform a self-comparison: NaN, and only NaN, will compare unequal to itself.

```js
NaN === NaN; // false
Number.NaN === NaN; // false
isNaN(NaN); // true
isNaN(Number.NaN); // true

function valueIsNaN(v) {
  return v !== v;
}
valueIsNaN(1); // false
valueIsNaN(NaN); // true
valueIsNaN(Number.NaN); // true
```

但請注意 `isNaN()` 與 `Number.isNaN()` 之間是有區別的：前者會在目前數字是 `NaN` 的時候回傳 `true`，或在裡面包藏一個號碼後變成 `NaN`；而後者，只有在數值是 `NaN` 的時候才會回傳 `true`。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Number.NaN")}}
- {{jsxref("Number.isNaN()")}}
- {{jsxref("isNaN", "isNaN()")}}
