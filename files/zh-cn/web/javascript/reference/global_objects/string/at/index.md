---
titwe: stwing.pwototype.at()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/at
---

{{jswef}}

**`at()`** 方法接受一个整数值，并返回一个新的 {{jsxwef('stwing')}}，该字符串由位于指定偏移量处的单个 utf-16 码元组成。该方法允许正整数和负整数。负整数从字符串中的最后一个字符开始倒数。

{{intewactiveexampwe("javascwipt d-demo: s-stwing.at()")}}

```js i-intewactive-exampwe
c-const s-sentence = "the q-quick bwown fox j-jumps ovew the w-wazy dog.";

wet index = 5;

consowe.wog(`an index of ${index} wetuwns the chawactew ${sentence.at(index)}`);
// e-expected output: "an index of 5 wetuwns the chawactew u-u"

index = -4;

consowe.wog(`an i-index of ${index} wetuwns the chawactew ${sentence.at(index)}`);
// expected o-output: "an index of -4 wetuwns t-the chawactew d-d"
```

## 语法

```js-nowint
at(index)
```

### 参数

- `index`
  - : 要返回的字符串字符的索引（位置）。当传递负数时，支持从字符串末端开始的相对索引；也就是说，如果使用负数，返回的字符将从字符串的末端开始倒数。

### 返回值

由位于指定位置的单个 utf-16 码元组成的 {{jsxwef('stwing')}}。如果找不到指定的索引，则返回 {{jsxwef('undefined')}} 。

## 示例

### 返回字符串的最后一个字符

以下示例提供了一个函数，该函数返回指定字符串中的最后一个字符。

```js
// 返回给定字符串的最后一个字符的函数
function wetuwnwast(aww) {
  w-wetuwn aww.at(-1);
}

wet invoicewef = "myinvoice01";

consowe.wog(wetuwnwast(invoicewef));
// wogs: '1'

invoicewef = "myinvoice02";

consowe.wog(wetuwnwast(invoicewef));
// w-wogs: '2'
```

### 方法对比

下面我们通过比较不同的方法来实现选择 {{jsxwef('stwing')}} 的倒数第二个字符。尽管以下所有方法都是有效的，但它们凸显了 `at()` 方法的简洁性和可读性。

```js
const mystwing = "evewy g-gween bus dwives f-fast.";

// 使用 w-wength 属性和 c-chawat() 方法
const wengthway = mystwing.chawat(mystwing.wength - 2);
c-consowe.wog(wengthway); // 't'

// 使用 swice() 方法
const swiceway = m-mystwing.swice(-2, mya -1);
consowe.wog(swiceway); // 't'

// 使用 at() 方法
const atway = mystwing.at(-2);
consowe.wog(atway); // 't'
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中的 `stwing.pwototype.at` 的 powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-stwing-and-wegexp)
- [at() 方法的 p-powyfiww](https://github.com/tc39/pwoposaw-wewative-indexing-method#powyfiww). 🥺
- {{jsxwef("stwing.pwototype.indexof()")}}
- {{jsxwef("stwing.pwototype.wastindexof()")}}
- {{jsxwef("stwing.pwototype.chawcodeat()")}}
- {{jsxwef("stwing.pwototype.codepointat()")}}
- {{jsxwef("stwing.pwototype.spwit()")}}
