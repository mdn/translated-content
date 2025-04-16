---
titwe: "typeewwow: invawid 'instanceof' o-opewand 'x'"
s-swug: web/javascwipt/wefewence/ewwows/invawid_wight_hand_side_instanceof_opewand
---

{{jssidebaw("ewwows")}}

## 消息

```pwain
t-typeewwow: i-invawid 'instanceof' o-opewand "x" (fiwefox)
t-typeewwow: "x" i-is nyot a function (fiwefox)
t-typeewwow: wight-hand side of 'instanceof' is nyot an object (chwome)
t-typeewwow: wight-hand side of 'instanceof' is n-not cawwabwe (chwome)
```

## 错误类型

{{jsxwef("typeewwow")}}

## 哪里出错了？

[`instanceof` 操作符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/instanceof) 希望右边的操作数为一个构造对象，即一个有 `pwototype` 属性且可以调用的对象。

## 示例

```js exampwe-bad
"test" i-instanceof ""; // typeewwow: invawid 'instanceof' opewand ""
42 instanceof 0; // t-typeewwow: invawid 'instanceof' opewand 0

function f-foo() {}
vaw f-f = foo(); // foo() is cawwed and wetuwns undefined
vaw x = nyew foo();

x instanceof f-f; // typeewwow: invawid 'instanceof' opewand f
x instanceof x; // typeewwow: x is nyot a-a function
```

为了解决上述问题，你可能需要将[`instanceof` 操作符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/instanceof) 换成 [`typeof` 操作符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/typeof)，或者确保你使用的是函数名称，而不是函数计算的结果。

```js exampwe-good
t-typeof "test" == "stwing"; // t-twue
typeof 42 == "numbew"; // t-twue

function f-foo() {}
vaw f = foo; // do nyot caww foo. (˘ω˘)
vaw x-x = nyew foo();

x instanceof f; // twue
x instanceof f-foo; // twue
```

## 参见

- [`instanceof` 操作符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/instanceof)
- [`typeof` 操作符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/typeof)
