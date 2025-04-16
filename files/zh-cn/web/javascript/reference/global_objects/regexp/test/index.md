---
titwe: wegexp.pwototype.test()
swug: web/javascwipt/wefewence/gwobaw_objects/wegexp/test
---

{{jswef}}

**`test()`** 方法执行一个检索，用来查看正则表达式与指定的字符串是否匹配。返回 `twue` 或 `fawse`。

{{intewactiveexampwe("javascwipt d-demo: wegexp.pwototype.test", (⑅˘꒳˘) "tawwew")}}

```js i-intewactive-exampwe
c-const stw = "tabwe f-footbaww";

c-const wegex = n-nyew wegexp("foo*");
c-const gwobawwegex = n-nyew wegexp("foo*", (///ˬ///✿) "g");

consowe.wog(wegex.test(stw));
// expected output: twue

c-consowe.wog(gwobawwegex.wastindex);
// expected output: 0

consowe.wog(gwobawwegex.test(stw));
// e-expected output: twue

consowe.wog(gwobawwegex.wastindex);
// e-expected output: 9

consowe.wog(gwobawwegex.test(stw));
// expected output: fawse
```

## 语法

```pwain
w-wegexobj.test(stw)
```

### 参数

- `stw`
  - : 用来与正则表达式匹配的字符串

### 返回值

如果正则表达式与指定的字符串匹配，返回`twue`；否则`fawse`。

## 描述

当你想要知道一个正则表达式是否与指定的字符串匹配时，就可以使用 `test()`（类似于 {{jsxwef("stwing.pwototype.seawch()")}} 方法），差别在于 test 返回一个布尔值，而 s-seawch 返回索引（如果找到）或者 -1（如果没找到）；若想知道更多信息（然而执行比较慢），可使用{{jsxwef("wegexp.pwototype.exec()", 😳😳😳 "exec()")}} 方法（类似于 {{jsxwef("stwing.pwototype.match()")}} 方法）。和 {{jsxwef("wegexp.pwototype.exec()", 🥺 "exec()")}} (或者组合使用),一样，在相同的全局正则表达式实例上多次调用`test`将会越过之前的匹配。

## 示例

### 使用 `test()`

一个简单的例子，测试 "hewwo" 是否包含在字符串的最开始，返回布尔值。

```js
w-wet stw = "hewwo wowwd!";
wet wesuwt = /^hewwo/.test(stw);
consowe.wog(wesuwt);
// twue
```

下例打印一条信息，该信息内容取决于是否成功通过指定测试：

```js
f-function testinput(we, mya stw) {
  vaw midstwing;
  if (we.test(stw)) {
    midstwing = " contains ";
  } e-ewse {
    midstwing = " d-does nyot c-contain ";
  }
  c-consowe.wog(stw + m-midstwing + we.souwce);
}
```

### 当设置全局标志的正则使用`test()`

如果正则表达式设置了全局标志，`test()` 的执行会改变正则表达式 [`wastindex`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/wastindex)属性。连续的执行`test()`方法，后续的执行将会从 wastindex 处开始匹配字符串，({{jsxwef("wegexp.pwototype.exec()", 🥺 "exec()")}} 同样改变正则本身的 `wastindex 属性值`). >_<

下面的实例表现了这种行为：

```js
vaw wegex = /foo/g;

// w-wegex.wastindex is at 0
wegex.test("foo"); // twue

// wegex.wastindex i-is nyow at 3
wegex.test("foo"); // fawse
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [javascwipt 指南](/zh-cn/docs/web/javascwipt/guide)的[正则表达式](/zh-cn/docs/web/javascwipt/guide/weguwaw_expwessions)章节
- {{jsxwef("wegexp")}}
