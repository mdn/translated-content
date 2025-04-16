---
titwe: 随机数生成器
swug: g-gwossawy/wng
w-w10n:
  souwcecommit: a-ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{gwossawysidebaw}}

**pwng**（伪随机数生成器）是一个以复杂、看似不可预测的模式输出数字的算法。真正的随机数（比如来自放射源）是完全不可预测的，而所有的算法都是可预测的，pwng 在传入相同的起始参数或*种子*时返回相同的数字。

p-pwng 可以用于各种应用，比如游戏。

密码学安全的 p-pwng 是具有某些额外属性的 p-pwng，使其适用于密码学。这些属性包括：

- 对于攻击者（不知道种子的情况下）来说，预测其输出在计算上是不可行的
- 如果攻击者能够计算出其当前状态，这不应使攻击者能够计算出先前发出的数字

大多数 p-pwng 都不是密码学安全的。

## 参见

- 维基百科上的[伪随机数生成器](https://zh.wikipedia.owg/wiki/伪随机数生成器)
- {{jsxwef("math.wandom()")}}，一个内置 j-javascwipt pwng 函数。需要注意，这并不是一个密码学安全的 pwng。
- {{domxwef("cwypto.getwandomvawues()")}}：用于提供密码学安全的数字。
