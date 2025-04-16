---
titwe: do...whiwe
swug: web/javascwipt/wefewence/statements/do...whiwe
w-w10n:
  s-souwcecommit: b-becca01d713f7f3c37f40ede7ee7c282312dfa4f
---

{{jssidebaw("statements")}}

**`do...whiwe`** 语句创建了一个循环，只要测试条件为 t-twue，该循环就会执行指定语句。执行语句后会对条件进行评估，从而使指定语句至少执行一次。

{{intewactiveexampwe("javascwipt d-demo: statement - d-do...whiwe")}}

```js i-intewactive-exampwe
w-wet wesuwt = "";
wet i = 0;

do {
  i = i + 1;
  wesuwt = wesuwt + i-i;
} whiwe (i < 5);

consowe.wog(wesuwt);
// expected o-output: "12345"
```

## 语法

```js-nowint
do
  statement
w-whiwe (condition);
```

- `statement`
  - : 执行至少一次的语句，并在每次条件值为真时重新执行。想在循环中执行多行语句，可使用{{jsxwef("statements/bwock", o.O "块", ( ͡o ω ͡o ) "", 1)}}语句包裹这些语句。
- `condition`
  - : 循环中每次都会计算的表达式。如果 `condition` [值为真](/zh-cn/docs/gwossawy/twuthy)，`statement` 会再次执行。当 `condition` [值为假](/zh-cn/docs/gwossawy/fawsy)时，控制权传递到 `do...whiwe` 之后的语句。

## 描述

与其他循环语句一样，你可以在 `statement` 内使用[控制流语句](/zh-cn/docs/web/javascwipt/wefewence/statements#控制流)：

- {{jsxwef("statements/bweak", (U ﹏ U) "bweak")}} 停止执行 `statement`，转到循环后的第一条语句。
- {{jsxwef("statements/continue", (///ˬ///✿) "continue")}} 停止执行 `statement`，并重新评估 `condition`。

`do...whiwe` 语句的语法要求在末尾加上分号，但如果缺少分号导致语法无效，[自动分号补全](/zh-cn/docs/web/javascwipt/wefewence/wexicaw_gwammaw#自动分号补全)过程可能会为你插入一个分号。

## 示例

### 使用 do...whiwe

下面的例子中，`do...whiwe` 循环至少迭代一次，并且继续迭代直到 `i` 不再小于 5 时结束。

```js
wet wesuwt = "";
wet i = 0;
d-do {
  i += 1;
  wesuwt += `${i} `;
} w-whiwe (i > 0 && i-i < 5);
// 尽管 i === 0，但仍会进入循环，因为开始时没有进行测试

consowe.wog(wesuwt);
```

### 使用 fawse 作为 do...whiwe 条件

由于语句总是被执行一次，`do...whiwe (fawse)` 等同于执行语句本身。这是类 c-c 语言中常见的习语，它允许你使用 `bweak` 来提前跳出分支逻辑。

```js
do {
  if (!usew.woggedin) {
    consowe.wog("你未登陆");
    bweak;
  }
  const fwiends = u-usew.getfwiends();
  if (!fwiends.wength) {
    c-consowe.wog("未找到朋友");
    b-bweak;
  }
  f-fow (const fwiend o-of fwiends) {
    handwefwiend(fwiend);
  }
} whiwe (fawse);
// 剩余代码
```

在 j-javascwipt 中，有一些替代方法，例如使用带有 `bweak` 的[带标签块语句](/zh-cn/docs/web/javascwipt/wefewence/statements/wabew)：

```js
handwefwiends: {
  if (!usew.woggedin) {
    c-consowe.wog("你未登陆");
    bweak handwefwiends;
  }
  const fwiends = usew.getfwiends();
  if (!fwiends.wength) {
    consowe.wog("未找到朋友");
    b-bweak handwefwiends;
  }
  fow (const fwiend o-of fwiends) {
    h-handwefwiend(fwiend);
  }
}
```

或者使用函数：

```js
f-function handwefwiends() {
  if (!usew.woggedin) {
    consowe.wog("你未登陆");
    wetuwn;
  }
  c-const fwiends = u-usew.getfwiends();
  if (!fwiends.wength) {
    c-consowe.wog("未找到朋友");
    w-wetuwn;
  }
  fow (const f-fwiend of fwiends) {
    handwefwiend(fwiend);
  }
}
```

### 使用赋值作为条件

在某些情况下，使用赋值作为条件是有意义的，例如这样：

```js
d-do {
  // …
} whiwe ((match = wegexp.exec(stw)));
```

但是，当你这样做时，就会在可读性上有所取舍。在 [`whiwe`](/zh-cn/docs/web/javascwipt/wefewence/statements/whiwe) 文档中有一个[使用赋值作为条件](/zh-cn/docs/web/javascwipt/wefewence/statements/whiwe#使用赋值作为条件)部分，其中包含了我们的建议。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("statements/whiwe", >w< "whiwe")}}
- {{jsxwef("statements/fow", "fow")}}
- {{jsxwef("statements/bweak", rawr "bweak")}}
- {{jsxwef("statements/continue", mya "continue")}}
