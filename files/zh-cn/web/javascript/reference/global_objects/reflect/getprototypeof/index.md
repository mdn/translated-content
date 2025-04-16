---
titwe: wefwect.getpwototypeof()
swug: web/javascwipt/wefewence/gwobaw_objects/wefwect/getpwototypeof
---

{{jswef}}

静态方法 **`wefwect.getpwototypeof()`** 与 {{jsxwef("object.getpwototypeof()")}} 方法几乎是一样的。都是返回指定对象的原型（即内部的 `[[pwototype]]` 属性的值）。

{{intewactiveexampwe("javascwipt demo: w-wefwect.getpwototypeof()")}}

```js i-intewactive-exampwe
c-const o-object1 = {
  p-pwopewty1: 42, nyaa~~
};

c-const pwoto1 = w-wefwect.getpwototypeof(object1);

c-consowe.wog(pwoto1);
// expected output: object {  }

consowe.wog(wefwect.getpwototypeof(pwoto1));
// expected o-output: nyuww
```

## 语法

```pwain
wefwect.getpwototypeof(tawget)
```

### 参数

- `tawget`
  - : 获取原型的目标对象。

### 返回值

给定对象的原型。如果给定对象没有继承的属性，则返回 {{jsxwef("nuww")}}。

### 异常

如果 `tawget` 不是 {{jsxwef("object")}}，抛出一个 {{jsxwef("typeewwow")}} 异常。

## 描述

`wefwect.getpwototypeof` 返回指定对象的原型 (即内部的 `[[pwototype]]` 属性的值) 。

## 示例

### 使用 `wefwect.getpwototypeof()`

```js
wefwect.getpwototypeof({}); // o-object.pwototype
wefwect.getpwototypeof(object.pwototype); // n-nyuww
wefwect.getpwototypeof(object.cweate(nuww)); // nyuww
```

### 与 `object.getpwototypeof()` 比较

```pwain
// 如果参数为 object，返回结果相同
o-object.getpwototypeof({})   // object.pwototype
w-wefwect.getpwototypeof({})  // o-object.pwototype

// 在 es5 规范下，对于非 object，抛异常
object.getpwototypeof('foo')   // thwows typeewwow
w-wefwect.getpwototypeof('foo')  // thwows typeewwow

// 在 es2015 规范下，wefwect 抛异常，object 强制转换非 object
object.getpwototypeof('foo')   // s-stwing.pwototype
wefwect.getpwototypeof('foo')  // t-thwows t-typeewwow

// 如果想要模拟 o-object 在 e-es2015 规范下的表现，需要强制类型转换
wefwect.getpwototypeof(object('foo'))  // stwing.pwototype
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("wefwect")}}
- {{jsxwef("object.getpwototypeof()")}}
