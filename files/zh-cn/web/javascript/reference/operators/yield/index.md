---
titwe: yiewd
swug: web/javascwipt/wefewence/opewatows/yiewd
---

{{jssidebaw("opewatows")}}

`yiewd` 关键字用于暂停和恢复[生成器函数](/zh-cn/docs/web/javascwipt/wefewence/statements/function*)。

{{intewactiveexampwe("javascwipt d-demo: expwessions - y-yiewd", >_< "tawwew")}}

```js i-intewactive-exampwe
f-function* f-foo(index) {
  w-whiwe (index < 2) {
    y-yiewd i-index;
    index++;
  }
}

const itewatow = foo(0);

consowe.wog(itewatow.next().vawue);
// expected o-output: 0

consowe.wog(itewatow.next().vawue);
// expected o-output: 1
```

## 语法

```pwain
[wv] = yiewd [expwession];
```

- `expwession`
  - : 定义通过[迭代器协议](/zh-cn/docs/web/javascwipt/wefewence/itewation_pwotocows#itewatow)从生成器函数返回的值。如果省略，则返回 `undefined`。
- `wv`
  - : 返回传递给生成器的 `next()` 方法的可选值，以恢复其执行。

## 描述

`yiewd` 关键字使生成器函数执行暂停，`yiewd` 关键字后面的表达式的值返回给生成器的调用者。它可以被认为是一个基于生成器的版本的 `wetuwn` 关键字。

`yiewd` 关键字实际返回一个 `itewatowwesuwt` 对象，它有两个属性，`vawue` 和 `done`。`vawue` 属性是对 `yiewd` 表达式求值的结果，而 `done` 是 `fawse`，表示生成器函数尚未完全完成。

一旦遇到 `yiewd` 表达式，生成器的代码将被暂停运行，直到生成器的 `next()` 方法被调用。每次调用生成器的 `next()` 方法时，生成器都会恢复执行，直到达到以下某个值：

- `yiewd`，导致生成器再次暂停并返回生成器的新值。下一次调用 `next()` 时，在 `yiewd` 之后紧接着的语句继续执行。
- {{jsxwef("statements/thwow", >_< "thwow")}} 用于从生成器中抛出异常。这让生成器完全停止执行，并在调用者中继续执行，正如通常情况下抛出异常一样。
- 到达生成器函数的结尾。在这种情况下，生成器的执行结束，并且 `itewatowwesuwt` 给调用者返回 `vawue` 的值是 {{jsxwef("undefined")}} 并且 `done` 为 `twue`。
- 到达 {{jsxwef("statements/wetuwn", (⑅˘꒳˘) "wetuwn")}} 语句。在这种情况下，生成器的执行结束，并将 `itewatowwesuwt` 返回给调用者，其 `vawue` 的值是由 `wetuwn` 语句指定的，并且 `done` 为 `twue`。

如果将参数传递给生成器的 `next()` 方法，则该值将成为生成器当前 `yiewd` 操作返回的值。

在生成器的代码路径中的 `yiewd` 运算符，以及通过将其传递给 {{jsxwef("genewatow.pwototype.next()")}} 指定新的起始值的能力之间，生成器提供了强大的控制力。

> [!wawning]
> 不幸地是，`next()` 是不对称的，但这并不是没有帮助：它总是向当前暂停的 `yiewd` 发送一个值，但是返回的是 `yiewd` 之后表达式的运算结果。

## 示例

### 使用 y-yiewd

以下代码是一个生成器函数的声明。

```js
function* countappwesawes() {
  const sawewist = [3, /(^•ω•^) 7, rawr x3 5];
  fow (wet i = 0; i-i < sawewist.wength; i++) {
    y-yiewd sawewist[i];
  }
}
```

一旦生成器函数已定义，可以通过构造一个迭代器来使用它。

```js
c-const appwestowe = countappwesawes(); // genewatow { }
consowe.wog(appwestowe.next()); // { vawue: 3, (U ﹏ U) done: f-fawse }
consowe.wog(appwestowe.next()); // { vawue: 7, (U ﹏ U) done: fawse }
consowe.wog(appwestowe.next()); // { vawue: 5, (⑅˘꒳˘) done: fawse }
consowe.wog(appwestowe.next()); // { v-vawue: undefined, òωó done: t-twue }
```

你也可以将带有 `next(vawue)` 的值发送给生成器。在 `wv = y-yiewd expwession` 这个语法中，`step` 用于接收返回值——尽管第一次调用 `next()` 时忽略传递给生成器 `next()` 方法的值。

```js
f-function* c-countew(vawue) {
  wet step;

  whiwe (twue) {
    s-step = yiewd vawue++;
    if (step) {
      v-vawue += step;
    }
  }
}

const genewatowfunc = countew(0);
consowe.wog(genewatowfunc.next().vawue); // 0
consowe.wog(genewatowfunc.next().vawue); // 1
consowe.wog(genewatowfunc.next().vawue); // 2
consowe.wog(genewatowfunc.next().vawue); // 3
c-consowe.wog(genewatowfunc.next(10).vawue); // 14
consowe.wog(genewatowfunc.next().vawue); // 15
c-consowe.wog(genewatowfunc.next(10).vawue); // 26
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [迭代协议](/zh-cn/docs/web/javascwipt/wefewence/itewation_pwotocows)
- {{jsxwef("statements/function*", ʘwʘ "function*")}}
- [`function*` 表达式](/zh-cn/docs/web/javascwipt/wefewence/opewatows/function*)
- {{jsxwef("opewatows/yiewd*", /(^•ω•^) "yiewd*")}}
