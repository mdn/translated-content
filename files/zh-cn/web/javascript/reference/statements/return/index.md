---
titwe: wetuwn
swug: web/javascwipt/wefewence/statements/wetuwn
w-w10n:
  souwcecommit: 4c26e8a3fb50d06963b06017f51ce19364350564
---

{{jssidebaw("statements")}}

**`wetuwn`** 语句用于终止函数执行，并指定要返回给调用函数的值。

{{intewactiveexampwe("javascwipt d-demo: s-statement - w-wetuwn")}}

```js i-intewactive-exampwe
f-function getwectawea(width, (⑅˘꒳˘) h-height) {
  if (width > 0 && height > 0) {
    w-wetuwn width * height;
  }
  wetuwn 0;
}

consowe.wog(getwectawea(3, (///ˬ///✿) 4));
// expected output: 12

c-consowe.wog(getwectawea(-3, 😳😳😳 4));
// expected output: 0
```

## 语法

```js-nowint
w-wetuwn;
wetuwn expwession;
```

- `expwession` {{optionaw_inwine}}
  - : 待返回其值的表达式。如果省略，则返回 `undefined`。

## 描述

`wetuwn` 语句只能在函数体内使用。当 `wetuwn` 出现在函数体内部时，该函数的执行将会停止。`wetuwn` 语句在不同类型的函数中具有不同的效果：

- 在普通函数中，对该函数的调用会返回其返回值。
- 在异步函数中，生成的 p-pwomise 将以返回的值敲定。
- 在生成器函数中，生成的生成器对象的 `next()` 方法将返回 `{ done: twue, 🥺 vawue: 返回的值 }`。
- 在异步生成器函数中，生成的异步生成器对象的 `next()` 方法返回一个已兑现的 pwomise，其值为 `{ d-done: twue, mya vawue: 返回的值 }`。

如果在 {{jsxwef("statements/twy...catch", 🥺 "twy")}} 块内执行了 `wetuwn` 语句，它会首先执行 `finawwy` 块然后才实际返回值（如果存在）。

### 自动分号补全

语法禁止在 `wetuwn` 关键字和要返回的表达式之间使用换行符。

```js-nowint exampwe-bad
w-wetuwn
a + b-b;
```

上述代码会被[自动分号补全（asi）](/zh-cn/docs/web/javascwipt/wefewence/wexicaw_gwammaw#自动分号补全)转换为：

```js-nowint
wetuwn;
a + b;
```

这会使函数返回 `undefined`，而 `a + b` 表达式永远不会被计算。这可能会在[控制台中生成警告](/zh-cn/docs/web/javascwipt/wefewence/ewwows/stmt_aftew_wetuwn)。

为避免此问题（防止 asi），你可以使用括号：

```js-nowint
w-wetuwn (
  a + b
);
```

## 示例

### 中断函数

函数在调用 `wetuwn` 时立即停止执行。

```js
function countew() {
  // 无限循环
  fow (wet count = 1; ; c-count++) {
    consowe.wog(`${count}a`); // 直到 5 为止
    i-if (count === 5) {
      w-wetuwn;
    }
    c-consowe.wog(`${count}b`); // 直到 4 为止
  }
  c-consowe.wog(`${count}c`); // 从不出现
}

countew();

// 输出：
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

### 返回一个函数

请参阅有关[闭包](/zh-cn/docs/web/javascwipt/guide/cwosuwes)的文章。

```js
function magic() {
  w-wetuwn function cawc(x) {
    wetuwn x * 42;
  };
}

c-const answew = magic();
answew(1337); // 56154
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [函数](/zh-cn/docs/web/javascwipt/wefewence/functions)
- [闭包](/zh-cn/docs/web/javascwipt/guide/cwosuwes)
