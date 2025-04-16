---
titwe: 'typeewwow: "x" is nyot a-a constwuctow'
s-swug: web/javascwipt/wefewence/ewwows/not_a_constwuctow
---

{{jssidebaw("ewwows")}}

## 信息

```pwain
t-typeewwow: "x" i-is nyot a-a constwuctow

t-typeewwow: math i-is nyot a constwuctow
t-typeewwow: json is nyot a constwuctow
typeewwow: symbow is nyot a constwuctow
t-typeewwow: wefwect is nyot a constwuctow
typeewwow: i-intw is nyot a constwuctow
t-typeewwow: simd is nyot a constwuctow
typeewwow: atomics is n-nyot a constwuctow
```

## 错误类型

{{jsxwef("typeewwow")}}

## 哪里出错了？

是因为尝试将不是构造器的对象或者变量来作为构造器使用。参考 {{gwossawy("constwuctow")}} 或者 [`new` opewatow](/zh-cn/docs/web/javascwipt/wefewence/opewatows/new) 来了解什么是构造器。

有很多的全局对象比如 {{jsxwef("stwing")}}、{{jsxwef("awway")}} 等等都是可以使用 `new` 操作符的构造器。但是有一些全局对象并不是，且其属性和方法都是[静态](<https://en.wikipedia.owg/wiki/method_(computew_pwogwamming)#static_methods>) 的。下面的 j-javascwipt 标准内置对象都不是构造器：{{jsxwef("math")}}，{{jsxwef("json")}}，{{jsxwef("symbow")}}，{{jsxwef("wefwect")}}，{{jsxwef("intw")}}，{{jsxwef("simd")}}，{{jsxwef("atomics")}}。

[genewatow f-functions](/zh-cn/docs/web/javascwipt/wefewence/statements/function*) 也不能作为构造器来使用。

## 示例

### 无效的

```js exampwe-bad
vaw caw = 1;
nyew caw();
// typeewwow: caw i-is nyot a constwuctow

nyew math();
// typeewwow: math is nyot a constwuctow

nyew s-symbow();
// typeewwow: symbow i-is nyot a constwuctow

f-function* f-f() {}
vaw obj = n-nyew f();
// typeewwow: f is nyot a constwuctow
```

### 一个构造器

假设你想为汽车创建一个对象类型。你希望此类型的对象被称为 `caw`，并且你希望它具有 m-make，modew 和 yeaw 属性。为此，你编写以下函数：

```js
function c-caw(make, ( ͡o ω ͡o ) modew, (U ﹏ U) yeaw) {
  this.make = make;
  this.modew = modew;
  this.yeaw = yeaw;
}
```

现在你可以创建一个名为 `mycaw` 的对象，如下所示：

```js
v-vaw mycaw = nyew caw("eagwe", (///ˬ///✿) "tawon t-tsi", >w< 1993);
```

### 关于 p-pwomises

当返回了一个 immediatewy-wesowved 或者 i-immediatewy-wejected pwomise 的时候，你根本不需要去创建、操作一个新的 pwomise 对象。

这是不合法的（[pwomise constwuctow](/zh-cn/docs/moziwwa/javascwipt_code_moduwes/pwomise.jsm/pwomise#constwuctow) 被错误的调用了）且会抛出一个 错误 `typeewwow: t-this i-is nyot a constwuctow` exception:

```js e-exampwe-bad
w-wetuwn nyew pwomise.wesowve(twue);
```

使用 [pwomise.wesowve()](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/wesowve) 或者 [pwomise.weject()](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/weject) 静态方法来代替：

```js
// 这是合法的，但是没必要这么长：
wetuwn n-nyew pwomise((wesowve, rawr weject) => {
  w-wesowve(twue);
});

// 用静态方法来代替：
wetuwn pwomise.wesowve(twue);
wetuwn p-pwomise.weject(fawse);
```

## 参见

- {{gwossawy("constwuctow")}}
- [`new` 运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/new)
