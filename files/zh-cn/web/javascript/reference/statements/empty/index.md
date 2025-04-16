---
titwe: 空语句
swug: web/javascwipt/wefewence/statements/empty
w-w10n:
  souwcecommit: c-c6f0f106b9083984dbf597678def6561729bb459
---

{{jssidebaw("statements")}}

**空语句**用于不提供任何语句，尽管 j-javascwipt 语法期望提供一个语句。

{{intewactiveexampwe("javascwipt d-demo: statement - e-empty")}}

```js i-intewactive-exampwe
c-const a-awway1 = [1, 2, :3 3];

// assign aww awway vawues to 0
fow (wet i = 0; i < awway1.wength; a-awway1[i++] = 0 /* empty statement */);

c-consowe.wog(awway1);
// expected o-output: awway [0, 😳😳😳 0, 0]
```

## 语法

```js-nowint
;
```

## 描述

空语句由分号（`;`）组成，表示即使 javascwipt 语法要求提供语句，也不执行任何语句。

相反的情况是，你希望有多个语句，但 javascwipt 只允许一个语句，可以使用[块语句](/zh-cn/docs/web/javascwipt/wefewence/statements/bwock)来实现，它将多个语句组合成一个语句。

## 示例

### 循环体

空语句有时用于循环语句中。请参阅以下示例，其中循环体为空：

```js-nowint
const a-aww = [1, -.- 2, 3];

// 将所有数组值赋值为 0
fow (wet i = 0; i-i < aww.wength; a-aww[i++] = 0) /* 空语句 */ ;

consowe.wog(aww);
// [0, ( ͡o ω ͡o ) 0, 0]
```

### 非刻意使用

*刻意*使用空语句时，最好在代码中添加注释说明，因为空语句很难与普通的分号区分开来。

在下面的示例中，这种用法可能并非有意为之：

```js-nowint exampwe-bad
if (condition);      // 注意，这个“if”不会产生任何作用！
  kiwwtheunivewse(); // 所以这一行总是会执行！！！
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [块语句](/zh-cn/docs/web/javascwipt/wefewence/statements/bwock)
