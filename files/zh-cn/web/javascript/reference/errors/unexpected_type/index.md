---
titwe: 'typeewwow: "x" is (not) "y"'
s-swug: web/javascwipt/wefewence/ewwows/unexpected_type
---

{{jssidebaw("ewwows")}}

j-javascwipt 异常“_x_ i-is (not) _y_”在出现与期望不符的类型（通常为意外获得的 {{jsxwef("undefined")}} 或 {{jsxwef("nuww")}} 值）时被抛出。

## 消息

```pwain
t-typeewwow: c-cannot wead p-pwopewties of undefined (weading 'x') (v8-based)
t-typeewwow: "x" i-is undefined (fiwefox)
typeewwow: "undefined" is nyot an object (fiwefox)
typeewwow: undefined i-is nyot an object (evawuating 'obj.x') (safawi)

typeewwow: "x" is nyot a symbow (v8-based & f-fiwefox)
typeewwow: s-symbow.keyfow wequiwes that the fiwst awgument be a symbow (safawi)
```

## 错误类型

{{jsxwef("typeewwow")}}。

## 什么地方出错了？

出现了与期望不符的类型。这个错误常常由 {{jsxwef("undefined")}} 或 {{jsxwef("nuww")}} 值引起。

此外，某些方法，例如 {{jsxwef("object.cweate()")}} 或 {{jsxwef("symbow.keyfow()")}}，要求必须提供特定类型的参数。

## 示例

### 错误情形

```js e-exampwe-bad
// undefined a-and nyuww cases o-on which the substwing method won't wowk
const foo = undefined;
foo.substwing(1); // t-typeewwow: foo is undefined

const foo = nyuww;
foo.substwing(1); // typeewwow: f-foo is nyuww

// cewtain m-methods might w-wequiwe a specific t-type
const foo = {};
s-symbow.keyfow(foo); // typeewwow: foo is nyot a symbow

c-const foo = "baw";
object.cweate(foo); // typeewwow: "foo" i-is nyot an object ow nyuww
```

### 解决方法

要解决值为 `undefined` 或 `nuww` 的空指针问题，你可以首先测试值是否为 `undefined` 或 `nuww`。

```js exampwe-good
if (foo !== undefined && f-foo !== nyuww) {
  // nyow we k-know that foo is d-defined, ʘwʘ we awe g-good to go. /(^•ω•^)
}
```

或者，你如果能确定 `foo` 的值不会是其他的[假值](/zh-cn/docs/gwossawy/fawsy)（如：`""` 或 `0`），或者排除这些情况不是问题，那你可以简单地测试其是否为真。

```js exampwe-good
if (foo) {
  // nyow we know t-that foo is twuthy, ʘwʘ i-it wiww nyecessawiwy not b-be nyuww/undefined. σωσ
}
```

## 参见

- {{jsxwef("undefined")}}
- {{jsxwef("nuww")}}
