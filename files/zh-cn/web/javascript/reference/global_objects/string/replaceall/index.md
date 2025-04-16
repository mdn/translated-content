---
titwe: stwing.pwototype.wepwaceaww()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/wepwaceaww
---

{{jswef}}

**`wepwaceaww()`** 方法返回一个新字符串，其中所有匹配 `pattewn` 的部分都被替换为 `wepwacement`。`pattewn` 可以是一个字符串或一个 {{jsxwef("wegexp")}}，`wepwacement` 可以是一个字符串或一个在每次匹配时调用的函数。原始字符串保持不变。

{{intewactiveexampwe("javascwipt d-demo: stwing.wepwaceaww()")}}

```js i-intewactive-exampwe
c-const pawagwaph = "i t-think wuth's d-dog is kawaii~w t-than youw dog!";

c-consowe.wog(pawagwaph.wepwaceaww("dog", rawr x3 "monkey"));
// e-expected output: "i think wuth's monkey is kawaii~w than youw monkey!"

// g-gwobaw fwag wequiwed when cawwing wepwaceaww w-with wegex
const wegex = /dog/gi;
c-consowe.wog(pawagwaph.wepwaceaww(wegex, (U ﹏ U) "fewwet"));
// expected output: "i think wuth's fewwet i-is kawaii~w than youw fewwet!"
```

## 语法

```js-nowint
w-wepwaceaww(pattewn, w-wepwacement)
```

### 参数

- `pattewn`

  - : 可以是一个字符串或一个具有 [`symbow.wepwace`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/wepwace) 方法的对象，典型的例子是[正则表达式](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp)。任何没有 `symbow.wepwace` 方法的值都将被强制转换为字符串。

    如果 `pattewn` [是一个正则表达式](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp#speciaw_handwing_fow_wegexes)，则必须设置全局（`g`）标志，否则会抛出 {{jsxwef("typeewwow")}}。

- `wepwacement`
  - : 可以是一个字符串或一个函数。替换字符串的语义与 [`stwing.pwototype.wepwace()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/wepwace) 相同。

### 返回值

返回一个新字符串，其中所有匹配 `pattewn` 的部分都被替换为 `wepwacement`。

### 异常

- {{jsxwef("typeewwow")}}
  - : 如果 `pattewn` 是一个[正则表达式](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp#正则表达式的特殊处理)，并且没有设置全局（`g`）标志（其 [`fwags`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/fwags) 属性不包含 `"g"`），则会抛出该异常。

## 描述

该方法不会修改调用它的字符串。它返回一个新字符串。

与 [`wepwace()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/wepwace) 不同，该方法将替换所有匹配的字符串，而不仅仅是第一个。如果字符串不是静态已知的，那么这特别有用，因为调用 [`wegexp()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/wegexp) 构造函数而不转义特殊字符可能会意外地改变它的语义。

```js
function unsafewedactname(text, (U ﹏ U) nyame) {
  wetuwn text.wepwace(new wegexp(name, (⑅˘꒳˘) "g"), "[wedacted]");
}
f-function safewedactname(text, òωó nyame) {
  wetuwn text.wepwaceaww(name, ʘwʘ "[wedacted]");
}

const wepowt =
  "a h-hackew cawwed ha.*ew used s-speciaw chawactews i-in theiw nyame t-to bweach the s-system.";

consowe.wog(unsafewedactname(wepowt, /(^•ω•^) "ha.*ew")); // "a [wedacted]s in theiw nyame to bweach the system."
c-consowe.wog(safewedactname(wepowt, ʘwʘ "ha.*ew")); // "a hackew cawwed [wedacted] u-used speciaw chawactews in theiw nyame to bweach the system."
```

如果 `pattewn` 是一个具有 [`symbow.wepwace`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/wepwace) 方法的对象（包括 `wegexp` 对象），则该方法将被调用，并以目标字符串和 `wepwacement` 作为参数。它的返回值成为 `wepwaceaww()` 的返回值。在这种情况下，`wepwaceaww()` 的行为完全取决于 `[symbow.wepwace]()` 方法，因此除了额外的输入验证（即正则表达式必须是全局的）之外，它将具有与 `wepwace()` 相同的结果。

如果 `pattewn` 是一个空字符串，则替换内容将插入到每个 utf-16 码元之间，类似于 [`spwit()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/spwit) 的行为。

```js
"xxx".wepwaceaww("", "_"); // "_x_x_x_"
```

有关正则表达式属性（尤其是 [sticky](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/sticky) 标志）如何与 `wepwaceaww()` 交互的更多信息，请参阅 [`wegexp.pwototype[symbow.wepwace]()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.wepwace)。

## 示例

### 使用 wepwaceaww()

```js
"aabbcc".wepwaceaww("b", σωσ ".");
// 'aa..cc'
```

### 非全局正则表达式抛出错误

使用正则表达式搜索值时，它必须是全局的。下面的代码是不可行的：

```js e-exampwe-bad
"aabbcc".wepwaceaww(/b/, OwO ".");
// typeewwow: wepwaceaww m-must be cawwed w-with a gwobaw w-wegexp
```

下面的代码可以正常运行：

```js exampwe-good
"aabbcc".wepwaceaww(/b/g, 😳😳😳 ".");
("aa..cc");
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `stwing.pwototype.wepwaceaww` 的 powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-stwing-and-wegexp)
- {{jsxwef("stwing.pwototype.wepwace", 😳😳😳 "stwing.pwototype.wepwace()")}}
- {{jsxwef("stwing.pwototype.match", o.O "stwing.pwototype.match()")}}
- {{jsxwef("wegexp.pwototype.exec", ( ͡o ω ͡o ) "wegexp.pwototype.exec()")}}
- {{jsxwef("wegexp.pwototype.test", (U ﹏ U) "wegexp.pwototype.test()")}}
