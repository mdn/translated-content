---
title: JSON.parse()
slug: Web/JavaScript/Reference/Global_Objects/JSON/parse
---

{{JSRef}}

**`JSON.parse()`** 方法把會把一個 JSON 字串轉換成 JavaScript 的數值或是物件。另外也可選擇使用 reviver 函數讓這些數值或是物件在被回傳之前做轉換。

## 語法

```js-nolint
JSON.parse(text[, reviver])
```

### 參數

- `text`
  - : 要解析成 JSON 的字串。針對 JSON 語法的描述，請參見 {{jsxref("JSON")}} 物件。
- `reviver` {{optional_inline}}
  - : 為選擇性的參數，用來描述 JSON 字串中的值該如何被解析並回傳的函式(function)

### 回傳值

從給定的 JSON `text` 回傳對應的 {{jsxref("Object")}}。

### 例外

如果解析的字串不是合法的 JSON 格式會丟出一個 {{jsxref("SyntaxError")}} 例外

## 範例

### 使用 `JSON.parse()`

```js
JSON.parse("{}"); // {}
JSON.parse("true"); // true
JSON.parse('"foo"'); // "foo"
JSON.parse('[1, 5, "false"]'); // [1, 5, "false"]
JSON.parse("null"); // null
```

### 使用 **`reviver`** 參數

如果 `reviver` 函數有被指定，字串解析後產生出來的值會在函式回傳前經過轉換。 具體來講，解析後的值或是物件屬性會一個接一個地被這個 reviver 函數過濾（順序是由巢狀架構中最深的到最淺的），而當一個屬性即將被過濾時，該屬性的名稱（字串形態）以及值會被當作參數傳入 reviver 函數。如果 reviver 函數回傳了 {{jsxref("undefined")}}（或是沒有回傳值，例如：函式提早結束），則該屬性會從物件中被刪除；反之如果成功的話，該屬性的值就會被新的回傳值取代。

如果 reviver 只需轉換某些特定的值，請記得將其他不須特別轉換的值以原來的值回傳，否則這些值會從回傳的結果物件中刪除。

```js
JSON.parse('{"p": 5}', function (k, v) {
  if (typeof v === "number") {
    return v * 2; // return v * 2 for numbers
  }
  return v; // return everything else unchanged
});

// { p: 10 }

JSON.parse('{"1": 1, "2": 2, "3": {"4": 4, "5": {"6": 6}}}', function (k, v) {
  console.log(k); // log the current property name, the last is "".
  return v; // return the unchanged property value.
});

// 1
// 2
// 4
// 6
// 5
// 3
// ""
```

### `JSON.parse()` 不容許尾部有逗號

```js example-bad
// 這兩個都會拋出 SyntaxError
JSON.parse("[1, 2, 3, 4, ]");
JSON.parse('{"foo" : 1, }');
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## Gecko 相關

從 Gecko 29 版本開始，錯誤格式的 JSON 字串會產生更詳細的錯誤訊息，包含造成解析錯誤的行數及列數。這在針對大量 JSON 資料進行除錯時會很有幫助。

```js
JSON.parse("[1, 2, 3, 4,]");
// SyntaxError: JSON.parse: unexpected character at
// line 1 column 13 of the JSON data
```

## 參見

- {{jsxref("JSON.stringify()")}}
