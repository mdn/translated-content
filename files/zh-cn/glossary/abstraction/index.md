---
title: 抽象编程（Abstraction）
slug: Glossary/Abstraction
---

{{GlossarySidebar}}

在{{Glossary("computer programming", "计算机编程")}}领域中，抽象编程指在研发大型复杂软件系统时，通过抽象的方法来降低编程复杂度，实现系统快速高效设计和开发的编程模式。它将系统各功能实现的技术细节隐藏在相对简单的 {{Glossary("API", "API 接口")}}之后。

## 数据抽象的好处

- 使用户避免撰写低等级代码。
- 避免代码重复，增加代码的复用性。
- 在不影响用户的前提下可以独立修改类的内部实现。
- 有效提升应用程序的安全性，因为只向用户提供重要的细节。

## 示例

```js
class ImplementAbstraction {
  // 设置一系列内部成员的值的方法
  set(x, y) {
    this.a = x;
    this.b = y;
  }
  display() {
    console.log(`a = ${this.a}`);
    console.log(`b = ${this.b}`);
  }
}
const obj = new ImplementAbstraction();
obj.set(10, 20);
obj.display();
// a = 10
// b = 20
```

## 参见

- 维基百科上的[抽象化](<https://zh.wikipedia.org/wiki/抽象化_(計算機科學)>)
