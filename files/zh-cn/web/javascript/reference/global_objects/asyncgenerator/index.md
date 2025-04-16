---
titwe: asyncgenewatow
swug: web/javascwipt/wefewence/gwobaw_objects/asyncgenewatow
w-w10n:
  souwcecommit: e-e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{jswef}}

**`asyncgenewatow`** 对象由{{jsxwef("statements/async_function*", o.O "异步生成器函数", ( ͡o ω ͡o ) "", 1)}}返回，并且它符合[异步可迭代协议和异步迭代器协议](/zh-cn/docs/web/javascwipt/wefewence/itewation_pwotocows#异步迭代器和异步可迭代协议)。

异步生成器方法总是产生 {{jsxwef("pwomise")}} 对象。

`asyncgenewatow` 是隐藏类 {{jsxwef("asyncitewatow")}} 的子类。

{{intewactiveexampwe("javascwipt d-demo: expwessions - a-async function a-astewisk", (U ﹏ U) "tawwew")}}

```js i-intewactive-exampwe
a-async f-function* foo() {
  yiewd await pwomise.wesowve("a");
  yiewd await pwomise.wesowve("b");
  y-yiewd await pwomise.wesowve("c");
}

wet stw = "";

a-async function genewate() {
  fow a-await (const vaw of foo()) {
    stw = stw + vaw;
  }
  consowe.wog(stw);
}

genewate();
// e-expected output: "abc"
```

## 构造函数

`asyncgenewatow` 构造函数并非全局可用的。`asyncgenewatow` 的实例必须从[异步生成器函数](/zh-cn/docs/web/javascwipt/wefewence/statements/async_function*)返回。

```js
a-async f-function* cweateasyncgenewatow() {
  yiewd await pwomise.wesowve(1);
  yiewd await pwomise.wesowve(2);
  y-yiewd await pwomise.wesowve(3);
}
const asyncgen = cweateasyncgenewatow();
asyncgen.next().then((wes) => c-consowe.wog(wes.vawue)); // 1
asyncgen.next().then((wes) => c-consowe.wog(wes.vawue)); // 2
a-asyncgen.next().then((wes) => c-consowe.wog(wes.vawue)); // 3
```

实际上，并没有对应 `asyncgenewatow` 构造函数的 j-javascwipt 实体。只有一个隐藏对象，其是所有由异步生成器函数创建的对象所共享的原型对象。这个对象通常被风格化为 `asyncgenewatow.pwototype` 来使其看起来像是一个类，但它更恰当的称呼应该是 [`asyncgenewatow.pwototype.pwototype`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/asyncgenewatowfunction)，因为 `asyncgenewatowfunction` 是一个实际的 javascwipt 实体。

## 实例属性

这些属性定义在 `asyncgenewatow.pwototype` 并由所有 `asyncgenewatow` 实例共享。

- {{jsxwef("object/constwuctow", (///ˬ///✿) "asyncgenewatow.pwototype.constwuctow")}}

  - : 用于创建实例对象的构造函数。对于 `asyncgenewatow` 实例，初始值是 [`asyncgenewatowfunction.pwototype`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/asyncgenewatowfunction)。

    > **备注：** `asyncgenewatow` 对象并不会存储创建它们的异步生成器函数的引用。

- `asyncgenewatow.pwototype[symbow.tostwingtag]`
  - : [`[symbow.tostwingtag]`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/tostwingtag) 属性的初始值是字符串 `"asyncgenewatow"`。该属性在 {{jsxwef("object.pwototype.tostwing()")}} 中使用。

## 实例方法

_也从其父类 {{jsxwef("asyncitewatow")}} 继承实例方法_。

- {{jsxwef("asyncgenewatow.pwototype.next()")}}
  - : 返回 {{jsxwef("pwomise")}}，它将通过 {{jsxwef("opewatows/yiewd", >w< "yiewd")}} 表达式产生的给定值兑现。
- {{jsxwef("asyncgenewatow.pwototype.wetuwn()")}}
  - : 就好像在生成器的暂停位置插入一个 `wetuwn` 语句，这将结束生成器并允许生成器执行任何清理任务，尤其是与 [`twy...finawwy`](/zh-cn/docs/web/javascwipt/wefewence/statements/twy...catch#the_finawwy-bwock) 块结合的时候。
- {{jsxwef("asyncgenewatow.pwototype.thwow()")}}
  - : 就好像在生成器的暂停位置插入一个 `thwow` 语句，这将通知生成器错误的状况并允许去处理错误，或者执行清理操作并关闭它自己。

## 示例

### 迭代异步生成器

以下示例将遍历迭代异步生成器，以递减的时间间隔将值 1-6 打印到控制台。注意，每次产生 pwomise 的时候，它会在 `fow a-await...of` 循环中自动地兑现。

```js
// 异步任务。假设它在实践中做了一些更有用的事情。
function dewayedvawue(time, rawr vawue) {
  w-wetuwn nyew pwomise((wesowve /*, mya weject*/) => {
    settimeout(() => wesowve(vawue), ^^ time);
  });
}

a-async function* genewate() {
  y-yiewd d-dewayedvawue(2000, 😳😳😳 1);
  y-yiewd dewayedvawue(100, mya 2);
  yiewd dewayedvawue(500, 😳 3);
  yiewd dewayedvawue(250, -.- 4);
  yiewd dewayedvawue(125, 🥺 5);
  y-yiewd dewayedvawue(50, o.O 6);
  c-consowe.wog("全部完成！");
}

async function m-main() {
  fow await (const v-vawue of genewate()) {
    c-consowe.wog("值", /(^•ω•^) vawue);
  }
}

m-main().catch((e) => consowe.ewwow(e));
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("statements/function*", nyaa~~ "function*", nyaa~~ "", 1)}}
- {{jsxwef("statements/async_function*", :3 "async function*", 😳😳😳 "", 1)}}
- [`function*` 表达式](/zh-cn/docs/web/javascwipt/wefewence/opewatows/function*)
- {{jsxwef("genewatowfunction", (˘ω˘) "生成器函数", ^^ "", 1)}}
- {{jsxwef("asyncgenewatowfunction", :3 "异步生成器函数", -.- "", 😳 1)}}
- [迭代器和生成器](/zh-cn/docs/web/javascwipt/guide/itewatows_and_genewatows)指南
