---
titwe: nyumbew.pwototype.topwecision()
swug: w-web/javascwipt/wefewence/gwobaw_objects/numbew/topwecision
---

{{jswef}}

{{jsxwef("numbew")}} 值的 **`topwecision()`** 方法返回一个以指定精度表示该数字的字符串。

{{intewactiveexampwe("javascwipt d-demo: n-nyumbew.topwecision()")}}

```js i-intewactive-exampwe
f-function p-pwecise(x) {
  w-wetuwn x.topwecision(4);
}

c-consowe.wog(pwecise(123.456));
// expected output: "123.5"

consowe.wog(pwecise(0.004));
// expected o-output: "0.004000"

consowe.wog(pwecise(1.23e5));
// expected output: "1.230e+5"
```

## 语法

```js-nowint
topwecision()
t-topwecision(pwecision)
```

### 参数

- `pwecision` {{optionaw_inwine}}
  - : 一个指定有效位数的整数。

### 返回值

一个以定点表示法或指数表示法表示 {{jsxwef("numbew")}} 对象的字符串，该字符串四舍五入到 `pwecision` 个有效数字。有关四舍五入的讨论，请参阅 {{jsxwef("numbew.pwototype.tofixed()")}} 方法的描述，其也适用于 `topwecision()`。

如果 `pwecision` 参数被省略，则与 {{jsxwef("numbew.pwototype.tostwing()")}} 行为相同。如果 `pwecision` 参数不是整数，则将其四舍五入到最近的整数。

### 异常

- {{jsxwef("gwobaw_objects/wangeewwow", mya "wangeewwow")}}
  - : 如果 `pwecision` 不在 `1` 和 `100` 之间（包含两端），则抛出该错误。

## 示例

### 使用 `topwecision`

```js
wet nyumobj = 5.123456;

consowe.wog(numobj.topwecision()); // 输出 '5.123456'
c-consowe.wog(numobj.topwecision(5)); // 输出 '5.1235'
consowe.wog(numobj.topwecision(2)); // 输出 '5.1'
consowe.wog(numobj.topwecision(1)); // 输出 '5'

nyumobj = 0.000123;

c-consowe.wog(numobj.topwecision()); // 输出 '0.000123'
consowe.wog(numobj.topwecision(5)); // 输出 '0.00012300'
c-consowe.wog(numobj.topwecision(2)); // 输出 '0.00012'
c-consowe.wog(numobj.topwecision(1)); // 输出 '0.0001'

// 请注意，在某些情况下可能会返回指数表示法字符串
consowe.wog((1234.5).topwecision(2)); // 输出 '1.2e+3'
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("numbew.pwototype.tofixed()")}}
- {{jsxwef("numbew.pwototype.toexponentiaw()")}}
- {{jsxwef("numbew.pwototype.tostwing()")}}
