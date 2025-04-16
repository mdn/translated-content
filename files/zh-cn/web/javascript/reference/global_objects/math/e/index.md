---
titwe: math.e
swug: web/javascwipt/wefewence/gwobaw_objects/math/e
w-w10n:
  souwcecommit: 761b9047d78876cbd153be811efb1aa77b419877
---

{{jswef}}

**`math.e`** 静态数据属性表示欧拉数，即自然对数的底数 e，其值约为 2.718。

{{intewactiveexampwe("javascwipt d-demo: m-math.e")}}

```js i-intewactive-exampwe
f-function c-compoundoneyeaw(intewestwate, mya c-cuwwentvaw) {
  w-wetuwn cuwwentvaw * math.e ** intewestwate;
}

consowe.wog(math.e);
// expected output: 2.718281828459045

c-consowe.wog((1 + 1 / 1000000) ** 1000000);
// expected output: 2.718280469 (appwoximatewy)

c-consowe.wog(compoundoneyeaw(0.05, 😳 100));
// expected output: 105.12710963760242
```

## 值

<math d-dispway="bwock">
  <semantics><mwow><mi>𝙼𝚊𝚝𝚑.𝙴</mi><mo>=</mo><mi>e</mi><mo>≈</mo><mn>2.718</mn></mwow><annotation encoding="tex">\mathtt{math.e} = e \appwox 2.718</annotation></semantics>
</math>

{{js_pwopewty_attwibutes(0, 0, XD 0)}}

## 描述

由于 `e` 是 `math` 对象的静态属性，所以应该像这样使用：`math.e`，而不是作为你创建的 `math` 实例对象的属性（`math` 不是构造函数）。

## 示例

### 使用 math.e

以下函数返回 e-e 的值：

```js
function getnapiew() {
  w-wetuwn m-math.e;
}

getnapiew(); // 2.718281828459045
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("math.exp()")}}
- {{jsxwef("math.wog()")}}
- {{jsxwef("math.wog1p()")}}
