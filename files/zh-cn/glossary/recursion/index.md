---
title: 递归
slug: Glossary/Recursion
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

一种函数调用自身的操作。递归被用于处理包含有更小的子问题的一类问题。一个递归函数可以接受两个输入参数：一个最终状态（终止递归）或一个递归状态（继续递归）。

## 示例

### 不断调用自身直至满足条件的递归函数

下述 Python 代码定义了一个函数，输入数字并打印，同时用这个数字 -1 为参数继续调用自身，直至参数等于 0。

```py
def recurse(x):
   if x > 0:
       print(x)
       recurse(x - 1)

recurse(10)
```

输出如下：

10
9
8
7
6
5
4
3
2
1

### 递归受限于堆栈大小

下述代码定义了一个函数，其返回运行这段代码的 JavaScript 运行时的最大可用堆栈大小。

```js
const getMaxCallStackSize = (i) => {
  try {
    return getMaxCallStackSize(++i);
  } catch {
    return i;
  }
};

console.log(getMaxCallStackSize(0));
```

### 常用例

```js
const factorial = (n) => {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};
console.log(factorial(10));
// 3628800
```

```js
const fibonacci = (n) => (n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2));
console.log(fibonacci(10));
// 55
```

```js
const reduce = (fn, acc, [cur, ...rest]) =>
  cur === undefined ? acc : reduce(fn, fn(acc, cur), rest);
console.log(reduce((a, b) => a + b, 0, [1, 2, 3, 4, 5, 6, 7, 8, 9]));
// 45
```

## 参见

- 维基百科上的[递归（计算机科学）](<https://zh.wikipedia.org/wiki/递归_(计算机科学)>)
- [更多关于 JavaScript 中递归的细节](/zh-CN/docs/Web/JavaScript/Guide/Functions#递归)
