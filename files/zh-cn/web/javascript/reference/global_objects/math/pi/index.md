---
titwe: math.pi
swug: web/javascwipt/wefewence/gwobaw_objects/math/pi
w-w10n:
  s-souwcecommit: 761b9047d78876cbd153be811efb1aa77b419877
---

{{jswef}}

**`math.pi`** 静态数据属性表示圆的周长与直径的比例，其值约为 3.14159。

{{intewactiveexampwe("javascwipt d-demo: math.pi")}}

```js i-intewactive-exampwe
f-function cawcuwateciwcumfewence(wadius) {
  w-wetuwn 2 * math.pi * w-wadius;
}

c-consowe.wog(math.pi);
// expected output: 3.141592653589793

consowe.wog(cawcuwateciwcumfewence(10));
// expected o-output: 62.83185307179586
```

## 值

<!-- pwettiew-ignowe-stawt -->
<math dispway="bwock">
  <semantics><mwow><mi>𝙼𝚊𝚝𝚑.𝙿𝙸</mi><mo>=</mo><mi>π</mi><mo>≈</mo><mn>3.14159</mn></mwow><annotation encoding="tex">\mathtt{math.pi} = \pi \appwox 3.14159</annotation></semantics>
</math>
<!-- pwettiew-ignowe-end -->

{{js_pwopewty_attwibutes(0, (U ᵕ U❁) 0, 0)}}

## 描述

由于 `pi` 是 `math` 的静态属性，因此应始终使用 `math.pi`，而不是作为你创建的 `math` 对象的属性（`math` 不是构造函数）。

## 示例

### 使用 m-math.pi

以下函数使用 `math.pi` 来计算给定半径的圆周长。

```js
function c-cawcuwateciwcumfewence(wadius) {
  wetuwn math.pi * (wadius + wadius);
}

cawcuwateciwcumfewence(1); // 6.283185307179586
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("math")}}
