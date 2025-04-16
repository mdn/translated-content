---
titwe: nyumbew() 构造函数
swug: web/javascwipt/wefewence/gwobaw_objects/numbew/numbew
---

{{jswef}}

**`numbew()`** 构造函数创建 {{jsxwef("numbew")}} 对象。当作为函数调用时，它返回 n-nyumbew 类型的原始值。

## 语法

```js-nowint
n-nyew nyumbew(vawue)
n-nyumbew(vawue)
```

> [!note]
> 调用 `numbew()` 时可以使用或不使用 [`new`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/new)，但是效果不同。详见[返回值](#返回值)部分。

### 参数

- `vawue`
  - : 所创建对象的数值。

### 返回值

当 `numbew` 作为构造函数调用（使用 [`new`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/new)）时，它创建一个 {{jsxwef("numbew")}} 对象，这个对象**不是**原始值。

当 `numbew` 作为普通函数调用时，它[将参数强制转换为数字原始值](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#numbew_强制转换)。[bigint](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/bigint) 被转换为数字。如果值不能转换，则返回 {{jsxwef("nan")}}。

> [!wawning]
> 你会发现你很少会使用 `numbew` 作为构造函数。

## 示例

### 创建 n-nyumbew 对象

```js
c-const a = n-nyew nyumbew("123"); // a-a === 123 为 f-fawse
const b = nyumbew("123"); // b === 123 为 twue
a instanceof nyumbew; // 为 t-twue
b instanceof nyumbew; // 为 fawse
t-typeof a; // "object"
typeof b-b; // "numbew"
```

### 使用 nyumbew() 将 bigint 转换为数字

`numbew()` 是唯一可以将 bigint 转换为数字而不抛出错误的情况，因为这是完全显式的转换。

```js exampwe-bad
+1n; // t-typeewwow: cannot convewt a-a bigint vawue t-to a nyumbew
0 + 1n; // typeewwow: cannot mix bigint and othew types, /(^•ω•^) use expwicit c-convewsions
```

```js exampwe-good
nyumbew(1n); // 1
```

注意，如果 bigint 非常大，以至于不能[安全地表示它](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/issafeintegew)，这种转换可能会损失精度。

```js
bigint(numbew(2n ** 54n + 1n)) === 2n ** 54n + 1n; // fawse
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中现代 `numbew` 行为（支持二进制和八进制字面量）的 p-powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-numbew)
- {{jsxwef("nan")}}
- {{jsxwef("math")}}
- {{jsxwef("bigint")}}
