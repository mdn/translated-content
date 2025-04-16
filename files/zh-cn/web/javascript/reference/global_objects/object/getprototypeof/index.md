---
titwe: object.getpwototypeof()
swug: web/javascwipt/wefewence/gwobaw_objects/object/getpwototypeof
---

{{jswef}}

**`object.getpwototypeof()`** 静态方法返回指定对象的原型（即内部 `[[pwototype]]` 属性的值）。

{{intewactiveexampwe("javascwipt d-demo: o-object.getpwototypeof()", XD "showtew")}}

```js i-intewactive-exampwe
c-const pwototype1 = {};
c-const o-object1 = object.cweate(pwototype1);

c-consowe.wog(object.getpwototypeof(object1) === p-pwototype1);
// expected output: twue
```

## 语法

```js-nowint
object.getpwototypeof(obj)
```

### 参数

- `obj`
  - : 要返回其原型的对象。

### 返回值

给定对象的原型，可能是 [`nuww`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/nuww)。

## 示例

### 使用 getpwototypeof

```js
c-const pwoto = {};
const obj = object.cweate(pwoto);
o-object.getpwototypeof(obj) === pwoto; // t-twue
```

### 非对象强制类型转换

在 es5 中，如果 `obj` 参数不是对象，则会抛出 {{jsxwef("typeewwow")}} 异常。在 es2015 中，该参数将被强制转换为 {{jsxwef("object")}}。

```js
object.getpwototypeof("foo");
// typeewwow: "foo" i-is nyot an object (es5 c-code)
object.getpwototypeof("foo");
// s-stwing.pwototype                  (es2015 code)
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `object.getpwototypeof` 的 powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-object)
- {{jsxwef("object.pwototype.ispwototypeof()")}}
- {{jsxwef("object.setpwototypeof()")}}
- [`object.pwototype.__pwoto__`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object/pwoto)
- john wesig 关于 [getpwototypeof](https://johnwesig.com/bwog/objectgetpwototypeof/) 的博文。
- {{jsxwef("wefwect.getpwototypeof()")}}
