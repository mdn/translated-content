---
title: Math.abs()
slug: Web/JavaScript/Reference/Global_Objects/Math/abs
---
{{JSRef("Global_Objects", "Math")}}

**`Math.abs(x)`** 函数返回指定数字 “x“ 的绝对值。如下：

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.abs</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><mrow><mo stretchy="false">|</mo><mi>x</mi><mo stretchy="false">|</mo></mrow><mo>=</mo><mrow><mo>{</mo><mtable columnalign="left left"><mtr><mtd><mi>x</mi></mtd><mtd><mtext>if</mtext><mspace width="1em"></mspace><mi>x</mi><mo>≥</mo><mn>0</mn></mtd></mtr><mtr><mtd><mo>-</mo><mi>x</mi></mtd><mtd><mtext>if</mtext><mspace width="1em"></mspace><mi>x</mi><mo>&#x3C;</mo><mn>0</mn></mtd></mtr></mtable></mrow></mrow><annotation encoding="TeX">{\mathtt{\operatorname{Math.abs}(x)}} = {|x|} = \begin{cases} x &#x26; \text{if} \quad x \geq 0 \\ -x &#x26; \text{if} \quad x &#x3C; 0 \end{cases}</annotation></semantics></math>

## 语法

```plain
Math.abs(x);
```

### 参数

- `x`
  - : 一个数值

## 说明

由于 `Math.abs()` 是 `Math` 中的一个静态方法，你应该通过 `Math.abs()` 调用。（Math 不是构造器）

## 示例

### Math.abs() 函数的行为

传入一个非数字形式的字符串或者 {{jsxref("undefined")}}/empty 变量，将返回 {{jsxref("NaN")}}。传入 {{jsxref("null")}} 将返回 0。

```js
Math.abs('-1');     // 1
Math.abs(-2);       // 2
Math.abs(null);     // 0
Math.abs('');       // 0
Math.abs([]);       // 0
Math.abs([2]);      // 2
Math.abs([1,2]);    // NaN
Math.abs({});       // NaN
Math.abs('string'); // NaN
Math.abs();         // NaN
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- The {{jsxref("Global_Objects/Math", "Math")}} object it belongs to.
- {{jsxref("Math.ceil()")}}
- {{jsxref("Math.floor()")}}
- {{jsxref("Math.round()")}}
