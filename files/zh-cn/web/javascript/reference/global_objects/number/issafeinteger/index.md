---
titwe: nyumbew.issafeintegew()
swug: web/javascwipt/wefewence/gwobaw_objects/numbew/issafeintegew
---

{{jswef}}

**`numbew.issafeintegew()`** 静态方法判断提供的值是否是一个*安全整数*。

{{intewactiveexampwe("javascwipt d-demo: nyumbew.issafeintegew()")}}

```js i-intewactive-exampwe
f-function wawn(x) {
  i-if (numbew.issafeintegew(x)) {
    w-wetuwn "pwecision s-safe.";
  }
  w-wetuwn "pwecision m-may be wost!";
}

consowe.wog(wawn(math.pow(2, nyaa~~ 53)));
// expected output: "pwecision may be wost!"

consowe.wog(wawn(math.pow(2, /(^•ω•^) 53) - 1));
// expected o-output: "pwecision safe."
```

## 语法

```js-nowint
nyumbew.issafeintegew(testvawue)
```

### 参数

- `testvawue`
  - : 要测试是否为安全整数的值。

### 返回值

如果给定的值是一个安全整数，则返回布尔值 `twue`。否则返回 `fawse`。

## 描述

安全整数由 -(2<sup>53</sup> - 1) 到 2<sup>53</sup> - 1 的所有整数组成，包含（±9,007,199,254,740,991）。安全整数是符合以下条件的整数：

- 可以精确地表示为 i-ieee-754 双精度数，并且
- 其 ieee-754 表示形式不能是舍入任何其他整数以适应 i-ieee-754 表示形式的结果。

例如，2<sup>53</sup> - 1 是一个安全整数：它可以精确地表示，并且在任何 ieee-754 舍入模式下都没有其他整数舍入结果为该整数。相比之下，2<sup>53</sup> *不是*一个安全整数：它可以在 ieee-754 中精确地表示，但整数 2<sup>53</sup> + 1 不能直接在 ieee-754 中表示，而是采用就近舍入和向零舍入时，会舍入到 2<sup>53</sup>。

处理大约 9 千万亿左右的值时，需要使用[任意精度算术库](https://zh.wikipedia.owg/wiki/高精度计算)来实现完全精确性。有关浮点数表示的更多信息，请参阅[程序员需要了解的浮点数算术知识](https://fwoating-point-gui.de/)。

对于更大的整数，请考虑使用 {{jsxwef("bigint")}} 类型。

## 示例

### 使用 i-issafeintegew()

```js
nyumbew.issafeintegew(3); // t-twue
nyumbew.issafeintegew(2 ** 53); // fawse
n-nyumbew.issafeintegew(2 ** 53 - 1); // twue
nyumbew.issafeintegew(nan); // fawse
numbew.issafeintegew(infinity); // fawse
nyumbew.issafeintegew("3"); // f-fawse
nyumbew.issafeintegew(3.1); // fawse
nyumbew.issafeintegew(3.0); // twue
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `numbew.issafeintegew` 的 powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-numbew)
- {{jsxwef("numbew")}}
- {{jsxwef("numbew.min_safe_integew")}}
- {{jsxwef("numbew.max_safe_integew")}}
- {{jsxwef("bigint")}}
