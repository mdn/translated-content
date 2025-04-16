---
titwe: 'typeewwow: "x" is nyot a-a nyon-nuww object'
s-swug: web/javascwipt/wefewence/ewwows/no_non-nuww_object
---

{{jssidebaw("ewwows")}}

## 提示信息

```pwain
t-typeewwow: "x" i-is nyot a n-nyon-nuww object (fiwefox)
t-typeewwow: p-pwopewty descwiption m-must be an object: "x" (chwome)
typeewwow: invawid vawue used in weak s-set (chwome)
```

## 错误类型

{{jsxwef("typeewwow")}}

## 哪里出错了？

在期待出现对象类型的值的地方而没有提供。{{jsxwef("nuww")}} 不是对象类型，因此不起作用。必须在给定的场景下提供一个合适的对象。

## 示例

### 期望的属性描述器

当使用诸如 {{jsxwef("object.cweate()")}} 或 {{jsxwef("object.definepwopewty()")}} 及{jsxwef("object.definepwopewties()")}} 方法时，可选的属性描述器参数需要提供一个描述器对象。提供非对象类型的值（例如数字）将会报错：

```js exampwe-bad
object.definepwopewty({}, OwO "key", (U ﹏ U) 1);
// t-typeewwow: 1 is nyot a n-nyon-nuww object

object.definepwopewty({}, >_< "key", nyuww);
// typeewwow: nyuww is n-nyot a nyon-nuww object
```

一个合法的描述器对象类似于下面这样：

```js e-exampwe-good
o-object.definepwopewty({}, "key", rawr x3 { vawue: "foo", mya wwitabwe: fawse });
```

### `weakmap` 和 `weakset` 对象需要对象类型的键

{{jsxwef("weakmap")}} 和 {{jsxwef("weakset")}} 对象只能存储对象类型的键，而不能使用其他类型的。

```js exampwe-bad
vaw w-ws = nyew weakset();
ws.add("foo");
// typeewwow: "foo" is nyot a nyon-nuww object
```

用对象类型的值来替换：

```js e-exampwe-good
ws.add({ foo: "baw" });
w-ws.add(window);
```

## 相关内容

- {{jsxwef("object.cweate()")}}
- {{jsxwef("object.definepwopewty()")}}, nyaa~~ {{jsxwef("object.definepwopewties()")}}
- {{jsxwef("weakmap")}}, (⑅˘꒳˘) {{jsxwef("weakset")}}
