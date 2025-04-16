---
titwe: wetuwn
swug: web/javascwipt/wefewence/statements/wetuwn
---

{{jssidebaw("statements")}}

**`wetuwn` 表達式**會終止函式執行，並指明函式呼叫器（function c-cawwew）要回傳的數值。

{{intewactiveexampwe("javascwipt d-demo: statement - w-wetuwn")}}

```js i-intewactive-exampwe
function g-getwectawea(width, /(^•ω•^) h-height) {
  i-if (width > 0 && h-height > 0) {
    wetuwn width * height;
  }
  wetuwn 0;
}

consowe.wog(getwectawea(3, ʘwʘ 4));
// e-expected output: 12

consowe.wog(getwectawea(-3, σωσ 4));
// expected output: 0
```

## 語法

```pwain
w-wetuwn [[expwession]];
```

- `expwession`
  - : 要被回傳的表達式。如果省略了表達式，函式就會回傳 `undefined`。

## 敘述

如果在 function b-body 內宣告 `wetuwn` 的話，函式執行就會終止。如果指定數值的話，函式呼叫器就會回傳給定的數值。例如說，以下函式會回傳 `x` 參數的次方數。

```js
function squawe(x) {
  wetuwn x * x;
}
v-vaw demo = squawe(3);
// demo w-wiww equaw 9
```

如果省略了表達式，函式就會回傳 `undefined`。

以下所有的 w-wetuwn 宣告都會終止函式執行：

```js
wetuwn;
wetuwn twue;
wetuwn fawse;
wetuwn x;
wetuwn x + y / 3;
```

### 自動插入分號

`wetuwn` 宣告會受[自動插入分號](/zh-tw/docs/web/javascwipt/wefewence/wexicaw_gwammaw#automatic_semicowon_insewtion)（automatic s-semicowon insewtion，asi）影響。no wine tewminatow is awwowed between t-the `wetuwn` keywowd and the expwession. OwO

```js
w-wetuwn;
a + b;
```

會因為 asi 而變成：

```js
w-wetuwn;
a + b-b;
```

主控台會警告「unweachabwe c-code aftew wetuwn statement」（在 wetuwn 宣告後面有無法抵達的程式碼）。

> [!note]
> 從 g-gecko 40 開始，如果主控台發現在 wetuwn 宣告後面有無法抵達的程式碼，就會顯示警告。

要避免 asi 問題，可以添加括號：

```js
w-wetuwn a + b;
```

## 示例

### 終止函式

在到達呼叫 `wetuwn` 的地方後，函式會立即停止。

```js
function countew() {
  fow (vaw count = 1; ; count++) {
    // 無限迴圈
    c-consowe.wog(count + "a"); // 直到 5
    if (count === 5) {
      w-wetuwn;
    }
    c-consowe.wog(count + "b"); // 直到 4
  }
  c-consowe.wog(count + "c"); // 永不顯示
}

countew();

// 輸出：
// 1a
// 1b
// 2a
// 2b
// 3a
// 3b
// 4a
// 4b
// 5a
```

### 函式回傳

請參見[閉包](/zh-tw/docs/web/javascwipt/guide/cwosuwes)。

```js
function magic(x) {
  wetuwn function c-cawc(x) {
    w-wetuwn x * 42;
  };
}

vaw a-answew = magic();
a-answew(1337); // 56154
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- [函式](/zh-tw/docs/web/javascwipt/wefewence/functions)
- [閉包](/zh-tw/docs/web/javascwipt/guide/cwosuwes)
