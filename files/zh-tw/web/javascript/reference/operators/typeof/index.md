---
title: typeof
slug: Web/JavaScript/Reference/Operators/typeof
---

## 摘要

typeof 運算子會傳回一個字串值, 指出未經運算 (unevaluated) 的運算元所代表的型別。

<table>
  <thead>
    <tr>
      <th colspan="2" scope="col">運算子</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>實作於:</td>
      <td>JavaScript 1.1</td>
    </tr>
    <tr>
      <td>ECMA 版本:</td>
      <td>ECMA-262 (以及 ECMA-357 for E4X objects)</td>
    </tr>
  </tbody>
</table>

## 語法

`typeof` 之後面跟著它的唯一運算元:

```plain
typeof operand
```

## 參數

`operand` 表示式代表傳入的物件或原始型別。

## 說明

下表摘要列出了 `typeof 可能的傳回值`:

| 型別                                            | 傳回             |
| ----------------------------------------------- | ---------------- |
| Undefined                                       | `"undefined"`    |
| Null                                            | `"object"`       |
| Boolean                                         | `"boolean"`      |
| Number                                          | `"number"`       |
| String                                          | `"string"`       |
| 主機端物件 (由 JS 執行環境提供)                 | _視實作方式而異_ |
| Function 物件 (實作 ECMA-262 所定義的 [[Call]]) | `"function"`     |
| E4X XML 物件                                    | "xml"            |
| E4X XMLList 物件                                | "xml"            |
| 所有其它物件                                    | `"object"`       |

## 範例

### 一般情況

```js
// Numbers
typeof 37 === "number";
typeof 3.14 === "number";
typeof Math.LN2 === "number";
typeof Infinity === "number";
typeof NaN === "number"; // 雖然是 "Not-A-Number"
typeof Number(1) === "number"; // 但是不要使用這種方式!

// Strings
typeof "" === "string";
typeof "bla" === "string";
typeof typeof 1 === "string"; // typeof 一律會傳回一個字串
typeof String("abc") === "string"; // 但是不要使用這種方式!

// Booleans
typeof true === "boolean";
typeof false === "boolean";
typeof Boolean(true) === "boolean"; // 但是不要使用這種方式!

// Undefined
typeof undefined === "undefined";
typeof blabla === "undefined"; // 一個 undefined 變數

// Objects
typeof { a: 1 } === "object";
typeof [1, 2, 4] === "object"; // 請使用 Array.isArray 或者 Object.prototype.toString.call 以區分正規運算式和陣列
typeof new Date() === "object";

typeof new Boolean(true) === "object"; // 這樣會令人混淆。不要這樣用!
typeof new Number(1) === "object"; // 這樣會令人混淆。不要這樣用!
typeof new String("abc") === "object"; // 這樣會令人混淆。不要這樣用!

// Functions
typeof function () {} === "function";
typeof Math.sin === "function";
```

### `null`

```js
typeof null === "object"; // 自從有 JavaScript 開始就是這樣了
```

自從 JavaScript 一開始出現, JavaScript 的值就總以型別標簽跟著一個值的方式表示。物件的型別標簽是 0. 而 `null` 這個值是使用 NULL 指標 (在大部份平台上是 0x00) 來表示. 因此, null 看起來像是一個以 0 為型別標簽的值, 並使得 `typeof` 傳回不甚正確的結果. ([參考來源](https://2ality.com/2013/10/typeof-null.html))

這個問題已計畫[在下一版 ECMAScript 予以修正](http://wiki.ecmascript.org/doku.php?id=harmony:typeof_null) (會以 opt-in 方式提供). 屆時它將會做出如 `typeof null === 'null'` 的正確回傳結果。

> [!NOTE]
> 此修正計畫已被拒絕

### 正規表示式 (Regular expressions)

可呼叫的正規表示式在某些瀏覽器上面必須借助非正式插件 (need reference to say which).

```js
typeof /s/ === "function"; // Chrome 1-12 ... // 不符合 ECMAScript 5.1 (譯註: 在新版 Chrome 已修正為 'object')
typeof /s/ === "object"; // Firefox 5+ ...    // 符合 ECMAScript 5.1
```

### 其它怪異輸入 (quirks)

#### 舊版 Internet Explorer 請留意 alert 函數

在 IE 6, 7 和 8, `typeof alert === 'object'`

> [!NOTE]
> 這並不怪異。這是實情。在許多較舊的 IE 中, 主機端物件的確是物件, 而非函數

## 規範

{{Specifications}}

## 參照

- [instanceof](/zh-TW/docs/Web/JavaScript/Reference/Operators/instanceof)
