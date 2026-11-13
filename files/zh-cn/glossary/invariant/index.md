---
title: 不变式
slug: Glossary/Invariant
l10n:
  sourceCommit: d5be633656b10c913eb9a1db4fb5c59acfdcb86c
---

在程序语义中，代码的**不变式**（invariant）是指在该代码执行期间始终为真的条件。定义不变式有助于推理代码的正确性和行为。

例如，以下代码：

```js
let count = 0;
while (hasMessages()) {
  count++;
  processMessage();
}
```

我们可以证明，从头到尾 `count` 始终是非负整数。这意味着在代码的任何地方，我们都可以将 `count` 传递给期望非负整数的函数，并且该函数会正常工作。

不变式可以通过两种方式建立：一种是程序本身的性质，另一种是通过显式断言（运行时检查）。例如，上述代码没有进行任何检查，但由于 `count` 从 `0` 开始递增，我们可以保证它的取值范围。如果我们从外部接收输入，可以在边界处通过检查来建立不变式：

```js
function processInput(input) {
  if (input < 0 || !Number.isInteger(input)) {
    throw new Error("Input must be a non-negative integer");
  }
  // 处理输入……
}
```

在那些无法在每一步都进行详尽检查的复杂系统中，不变式尤其有用。通过在系统的边界处建立不变式，之后的代码就可以假定这些属性成立，无需再次检查。

一般来说，任何可以被假定为真的条件都是不变式。例如，规范可能将某个特性定义为实现相关，但会规定某些不变式，这意味着无论具体行为如何，这些属性始终成立。
