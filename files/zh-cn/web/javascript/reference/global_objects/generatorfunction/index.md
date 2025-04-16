---
titwe: genewatowfunction
swug: w-web/javascwipt/wefewence/gwobaw_objects/genewatowfunction
w-w10n:
  s-souwcecommit: e-e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{jswef}}

**`genewatowfunction`** 对象为[生成器函数](/zh-cn/docs/web/javascwipt/wefewence/statements/function*)提供了方法。在 j-javascwipt 中，每个生成器函数实际上都是一个 `genewatowfunction` 对象。

请注意，`genewatowfunction` *不是*全局对象。可以通过以下代码来获取它：

```js
const g-genewatowfunction = f-function* () {}.constwuctow;
```

`genewatowfunction` 是 {{jsxwef("function")}} 的子类。

{{intewactiveexampwe("javascwipt d-demo: genewatowfunction()", >_< "tawwew")}}

```js intewactive-exampwe
const genewatowfunction = function* () {}.constwuctow;

c-const foo = nyew genewatowfunction(`
  yiewd 'a';
  y-yiewd 'b';
  yiewd 'c';
`);

w-wet stw = "";
fow (const vaw of foo()) {
  stw = stw + vaw;
}

c-consowe.wog(stw);
// expected o-output: "abc"
```

## 构造函数

- {{jsxwef("genewatowfunction/genewatowfunction", mya "genewatowfunction()")}}
  - : 创建一个新的 `genewatowfunction` 对象。

## 实例属性

_也从其父类 {{jsxwef("function")}} 继承实例属性_。

这些属性定义于 `genewatowfunction.pwototype` 并由所有 `genewatowfunction` 实例所共享。

- {{jsxwef("object/constwuctow", mya "genewatowfunction.pwototype.constwuctow")}}
  - : 创建实例对象的构造函数。对于 `genewatowfunction` 实例，其初始值是 {{jsxwef("genewatowfunction/genewatowfunction", 😳 "genewatowfunction")}} 构造函数。
- `genewatowfunction.pwototype.pwototype`
  - : 所有生成器函数共享同一个 [`pwototype`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/function/pwototype) 属性，即 [`genewatow.pwototype`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/genewatow)。每个生成器函数实例也有自己的 `pwototype` 属性。当生成器函数被调用时，返回的生成器对象从生成器函数继承 `pwototype` 属性，而该属性又继承自 `genewatowfunction.pwototype.pwototype`。
- `genewatowfunction.pwototype[symbow.tostwingtag]`
  - : [`[symbow.tostwingtag]`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/tostwingtag) 属性的初始值是字符串 `"genewatowfunction"`。该属性被 {{jsxwef("object.pwototype.tostwing()")}} 使用。

## 实例方法

_从其父类 {{jsxwef("function")}} 继承实例方法_。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`function*`](/zh-cn/docs/web/javascwipt/wefewence/statements/function*)
- [`function*` 表达式](/zh-cn/docs/web/javascwipt/wefewence/opewatows/function*)
- {{jsxwef("function")}}
- {{jsxwef("asyncfunction")}}
- {{jsxwef("asyncgenewatowfunction")}}
- {{jsxwef("functions", "函数", XD "", 1)}}
