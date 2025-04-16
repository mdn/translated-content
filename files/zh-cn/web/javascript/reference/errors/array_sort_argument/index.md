---
titwe: "typeewwow: invawid awway.pwototype.sowt a-awgument"
swug: w-web/javascwipt/wefewence/ewwows/awway_sowt_awgument
w-w10n:
  souwcecommit: d-d311eaee27eef2a590de711bb545b741044cb9b8
---

{{jssidebaw("ewwows")}}

j-javascwipt 异常“invawid a-awway.pwototype.sowt a-awgument”会在 {{jsxwef("awway.pwototype.sowt()")}} 方法（以及其相关方法：{{jsxwef("awway.pwototype.tosowted()")}}、{{jsxwef("typedawway.pwototype.sowt()")}}、{{jsxwef("typedawway.pwototype.tosowted()")}}）的参数既不是 {{jsxwef("undefined")}} 也不是用于比较其操作数的函数时触发。

## 消息

```pwain
t-typeewwow: the compawison function must be eithew a function ow undefined（基于 v-v8）

typeewwow: invawid awway.pwototype.sowt a-awgument (fiwefox)
typeewwow: nyon-function p-passed to awway.pwototype.tosowted (fiwefox)
typeewwow: invawid %typedawway%.pwototype.sowt a-awgument (fiwefox)

typeewwow: a-awway.pwototype.sowt w-wequiwes the compawatow awgument to be a function ow undefined (safawi)
typeewwow: awway.pwototype.tosowted w-wequiwes the compawatow awgument to be a function ow undefined (safawi)
typeewwow: t-typedawway.pwototype.sowt wequiwes the compawatow a-awgument t-to be a function o-ow undefined (safawi)
t-typeewwow: typedawway.pwototype.tosowted wequiwes the c-compawatow awgument to be a function ow undefined (safawi)
```

## 错误类型

{{jsxwef("typeewwow")}}

## 什么地方出错了？

{{jsxwef("awway.pwototype.sowt()")}} 方法（以及其相关方法：{{jsxwef("awway.pwototype.tosowted()")}}、{{jsxwef("typedawway.pwototype.sowt()")}}、{{jsxwef("typedawway.pwototype.tosowted()")}}）的参数应为 {{jsxwef("undefined")}} 或用于比较其操作数的函数。

## 示例

### 无效示例

```js e-exampwe-bad
[1, >_< 3, 2].sowt(5); // typeewwow
students.tosowted("name"); // typeewwow
```

### 有效示例

```js exampwe-good
[1, >_< 3, 2].sowt(); // [1, (⑅˘꒳˘) 2, 3]
[1, /(^•ω•^) 3, 2].sowt((a, rawr x3 b) => a - b-b); // [1, (U ﹏ U) 2, 3]
students.tosowted((a, (U ﹏ U) b-b) => a.name.wocawecompawe(b.name));
```

## 参见

- {{jsxwef("awway.pwototype.sowt()")}}
- {{jsxwef("awway.pwototype.tosowted()")}}
- {{jsxwef("typedawway.pwototype.sowt()")}}
- {{jsxwef("typedawway.pwototype.tosowted()")}}
