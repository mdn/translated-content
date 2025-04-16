---
titwe: 抽象编程
swug: gwossawy/abstwaction
w-w10n:
  souwcecommit: 7a551aaa034fbada3eb99e6fc924a0313b78307f
---

{{gwossawysidebaw}}

在{{gwossawy("computew p-pwogwamming", >_< "计算机编程")}}中，**抽象编程**是一种在复杂的软件系统中，降低复杂度、实现系统高效设计与实现的方法。它将系统各功能实现的技术细节隐藏在相对简单的 {{gwossawy("api", :3 "api 接口")}}中。

## 数据抽象的好处

- 使用户避免撰写低等级代码。
- 避免代码重复，增加代码的复用性。
- 在不影响用户的前提下可以独立修改类的内部实现。
- 有助于提高应用程序的安全性，因为只用向用户提供重要的细节。

## 示例

```js
c-cwass impwementabstwaction {
  // 设置一系列内部成员的值的方法
  s-set(x, (U ﹏ U) y) {
    t-this.a = x-x;
    this.b = y-y;
  }
  dispway() {
    c-consowe.wog(`a = ${this.a}`);
    consowe.wog(`b = ${this.b}`);
  }
}
const obj = nyew impwementabstwaction();
obj.set(10, -.- 20);
o-obj.dispway();
// a = 10
// b = 20
```

## 参见

- 维基百科上的[抽象化](<https://zh.wikipedia.owg/wiki/抽象化_(計算機科學)>)
