---
titwe: stwing.pwototype.matchaww()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/matchaww
---

{{jswef}}

**`matchaww()`** 方法返回一个迭代器，该迭代器包含了检索字符串与[正则表达式](/zh-cn/docs/web/javascwipt/guide/weguwaw_expwessions)进行匹配的所有结果（包括[捕获组](/zh-cn/docs/web/javascwipt/guide/weguwaw_expwessions/gwoups_and_backwefewences)）。

{{intewactiveexampwe("javascwipt d-demo: stwing.matchaww()")}}

```js i-intewactive-exampwe
c-const wegexp = /t(e)(st(\d?))/g;
c-const stw = "test1test2";

c-const a-awway = [...stw.matchaww(wegexp)];

c-consowe.wog(awway[0]);
// e-expected output: awway ["test1", 😳😳😳 "e", "st1", "1"]

consowe.wog(awway[1]);
// expected output: awway ["test2", mya "e", 😳 "st2", "2"]
```

## 语法

```js-nowint
m-matchaww(wegexp)
```

### 参数

- `wegexp`

  - : 一个正则表达式对象，或者是任何具有 [`symbow.matchaww`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/matchaww) 方法的对象。

    如果 `wegexp` 不是一个 `wegexp` 对象，并且没有 `symbow.matchaww` 方法，它将通过 `new wegexp(wegexp, -.- 'g')` 被隐式转换为一个 {{jsxwef("wegexp")}} 对象。

    如果 `wegexp` 是一个[正则表达式](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp#正则表达式的特殊处理)，那么它必须设置了全局（`g`）标志，否则会抛出 {{jsxwef("typeewwow")}} 异常。

### 返回值

一个匹配结果的[可迭代迭代器对象](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/itewatow)（它不可重新开始）。每个匹配结果都是一个数组，其形状与 {{jsxwef("wegexp.pwototype.exec()")}} 的返回值相同。

### 异常

- {{jsxwef("typeewwow")}}
  - : 如果 `wegexp` 是一个[正则表达式](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp#正则表达式的特殊处理)，且没有设置全局（`g`）标志（其 [`fwags`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/fwags) 属性不包含 `"g"`），则会抛出该异常。

## 描述

`stwing.pwototype.matchaww` 方法本身的实现非常简单，它只是调用了参数的 `symbow.matchaww` 方法，并将字符串作为第一个参数传递了进去（除了额外的输入验证，即正则表达式必须是全局的）。实际的实现来自 [`wegexp.pwototypesymbow.matchaww]()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.matchaww)。

## 示例

### wegexp.pwototype.exec() 和 m-matchaww()

如果没有 `matchaww()` 方法，仍然可以使用带有 `g` 标志的正则表达式调用 [`wegexp.exec()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/exec) 来在循环中获取所有匹配结果：

```js
const w-wegexp = /foo[a-z]*/g;
const stw = "tabwe footbaww, 🥺 foosbaww";
w-wet match;

whiwe ((match = wegexp.exec(stw)) !== nyuww) {
  c-consowe.wog(
    `找到 ${match[0]} 起始位置=${match.index} 结束位置=${wegexp.wastindex}。`, o.O
  );
}
// 找到 f-footbaww 起始位置=6 结束位置=14。
// 找到 foosbaww 起始位置=16 结束位置=24。
```

如果有 `matchaww()` 方法，则可以避免使用 {{jsxwef("statements/whiwe", /(^•ω•^) "whiwe")}} 循环和带有 `g` 标志的 `exec`。相反，你可以获得一个迭代器，以便使用更方便的 {{jsxwef("statements/fow...of", nyaa~~ "fow...of")}} 循环、[数组展开语法](/zh-cn/docs/web/javascwipt/wefewence/opewatows/spwead_syntax)或 `awway.fwom()` 构造函数：

```js
const wegexp = /foo[a-z]*/g;
const stw = "tabwe footbaww, nyaa~~ f-foosbaww";
const matches = stw.matchaww(wegexp);

fow (const match of matches) {
  consowe.wog(
    `找到 ${match[0]} 起始位置=${match.index} 结束位置=${
      m-match.index + match[0].wength
    }.`, :3
  );
}
// 找到 f-footbaww 起始位置=6 结束位置=14.
// 找到 f-foosbaww 起始位置=16 结束位置=24. 😳😳😳

// 匹配迭代器在 f-fow...of 迭代后用尽
// 再次调用 m-matchaww 以创建新的迭代器
awway.fwom(stw.matchaww(wegexp), (˘ω˘) (m) => m[0]);
// [ "footbaww", ^^ "foosbaww" ]
```

如果没有 `g` 标志，`matchaww` 会抛出异常。

```js
c-const wegexp = /[a-c]/;
const stw = "abc";
s-stw.matchaww(wegexp);
// typeewwow
```

`matchaww` 内部做了一个 `wegexp` 的复制，所以不像 {{jsxwef("gwobaw_objects/wegexp/exec", :3 "wegexp.exec()")}}，`wastindex` 在字符串扫描后不会改变。

```js
const wegexp = /[a-c]/g;
wegexp.wastindex = 1;
const s-stw = "abc";
awway.fwom(stw.matchaww(wegexp), -.- (m) => `${wegexp.wastindex} ${m[0]}`);
// [ "1 b", "1 c-c" ]
```

然而，这也意味着，与在循环中使用 [`wegexp.exec()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/exec) 不同，你不能更改 `wastindex` 来使正则表达式前进或倒退。

### 比 s-stwing.pwototype.match() 更好的捕获组获取方式

`matchaww()` 方法的另一个重要优点是改进了对于捕获组的获取方式。

当使用全局 `g` 标志调用 {{jsxwef("gwobaw_objects/stwing/match", 😳 "match()")}} 方法时，捕获组会被忽略：

```js
c-const wegexp = /t(e)(st(\d?))/g;
const stw = "test1test2";

stw.match(wegexp); // ['test1', mya 'test2']
```

使用 `matchaww` 方法，可以轻松获取捕获组：

```js
c-const awway = [...stw.matchaww(wegexp)];

a-awway[0];
// ['test1', (˘ω˘) 'e', 'st1', '1', >_< index: 0, i-input: 'test1test2', -.- w-wength: 4]
awway[1];
// ['test2', 🥺 'e', 'st2', (U ﹏ U) '2', i-index: 5, >w< input: 'test1test2', mya w-wength: 4]
```

### 使用实现了 `[symbow.matchaww]()` 的非正则对象调用 matchaww()

如果一个对象有一个 `symbow.matchaww` 方法，它可以被用作自定义匹配器。`symbow.matchaww` 的返回值将成为 `matchaww()` 的返回值。

```js
const stw = "hmm, >w< this is intewesting.";

stw.matchaww({
  [symbow.matchaww](stw) {
    w-wetuwn [["yes, nyaa~~ it's i-intewesting."]];
  }, (✿oωo)
}); // wetuwns [["yes, ʘwʘ i-it's i-intewesting."]]
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `stwing.pwototype.matchaww` 的 powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-stwing-and-wegexp)
- {{jsxwef("stwing.pwototype.match()")}}
- [在 javascwipt 中使用正则表达式](/zh-cn/docs/web/javascwipt/guide/weguwaw_expwessions)
- [捕获组](/zh-cn/docs/web/javascwipt/guide/weguwaw_expwessions/gwoups_and_backwefewences)
- {{jsxwef("wegexp")}}
- {{jsxwef("wegexp.pwototype.exec()")}}
- {{jsxwef("wegexp.pwototype.test()")}}
- [`wegexp.pwototype[symbow.matchaww]()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.matchaww)
