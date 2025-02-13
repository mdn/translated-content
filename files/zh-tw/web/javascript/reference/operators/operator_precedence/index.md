---
title: 運算子優先序
slug: Web/JavaScript/Reference/Operators/Operator_precedence
---

{{jsSidebar("Operators")}}

運算子優先序（Operator precedence）決定了運算子彼此之間被語法解析的方式，優先序較高的運算子會成為優先序較低運算子的運算元（operands）。

{{InteractiveExample("JavaScript Demo: Expressions - Operator precedence")}}

```js interactive-example
console.log(3 + 4 * 5); // 3 + 20
// Expected output: 23

console.log(4 * 3 ** 2); // 4 * 9
// Expected output: 36

let a;
let b;

console.log((a = b = 5));
// Expected output: 5
```

## 相依性(Associativity)

當優先序相同時，使用相依性決定運算方向。範例如下：

```plain
a OP b OP c
```

左相依性 (Left-associativity) ，表示處理順序為從左至右 `(a OP b) OP c`，反之，右相依性(right-associativity) 表示處理順序為從右至左 `a OP (b OP c)`。賦值運算符 (Assignment operators) 為右相依性，範例如下：

```js
a = b = 5;
```

`a` 和 `b` 的預期結果為 5，因為賦值運算符 (Assignment operator) 為右相依性，因此從右至左返回值。一開始 `b` 被設定為 5，接著 `a` 也被設定為 5。

## 表格(Table)

下方表格列出運算子的相依性，從高 (19) 到低 (1)。

<table class="fullwidth-table">
  <tbody>
    <tr>
      <th>優先性<br />Precedence</th>
      <th>運算子名稱<br />Operator type</th>
      <th>相依性<br />Associativity</th>
      <th>運算子<br />Individual operators</th>
    </tr>
    <tr>
      <td>19</td>
      <td>
        {{jsxref("Operators/Grouping", "Grouping", "", 1)}}
      </td>
      <td>無</td>
      <td><code>( … )</code></td>
    </tr>
    <tr>
      <td rowspan="5">18</td>
      <td>
        {{jsxref("Operators/Property_Accessors", "Member Access", "#dot_notation", 1)}}
      </td>
      <td>從左至右</td>
      <td><code>… . …</code></td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Property_Accessors", "Computed Member Access", "#bracket_notation", 1)}}
      </td>
      <td>從左至右</td>
      <td><code>… [ … ]</code></td>
    </tr>
    <tr>
      <td>{{jsxref("Operators/new","new")}} (with argument list)</td>
      <td>無</td>
      <td><code>new … ( … )</code></td>
    </tr>
    <tr>
      <td><a href="/zh-TW/docs/Web/JavaScript/Guide/Functions">呼叫函式</a></td>
      <td>從左至右</td>
      <td>
        <code>… ( <var>… </var>)</code>
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="/zh-TW/docs/Web/JavaScript/Reference/Operators/Optional_chaining"
          >可選串連（Optional chaining）</a
        >
      </td>
      <td>從左至右</td>
      <td><code>?.</code></td>
    </tr>
    <tr>
      <td>17</td>
      <td>
        {{jsxref("Operators/new","new")}} (without argument list)
      </td>
      <td>從右至左</td>
      <td><code>new …</code></td>
    </tr>
    <tr>
      <td rowspan="2">16</td>
      <td>
        {{jsxref("Operators","字尾遞增","#遞增與遞減", 1)}}
      </td>
      <td rowspan="2">無</td>
      <td><code>… ++</code></td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators","字尾遞減","#遞增與遞減", 1)}}
      </td>
      <td><code>… --</code></td>
    </tr>
    <tr>
      <td rowspan="10">15</td>
      <td>
        <a href="/zh-TW/docs/Web/JavaScript/Reference/Operators/Logical_NOT"
          >Logical NOT</a
        >
      </td>
      <td rowspan="10">從右至左</td>
      <td><code>! …</code></td>
    </tr>
    <tr>
      <td>
        <a href="/zh-TW/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT"
          >Bitwise NOT</a
        >
      </td>
      <td><code>~ …</code></td>
    </tr>
    <tr>
      <td>
        <a href="/zh-TW/docs/Web/JavaScript/Reference/Operators/Unary_plus"
          >Unary Plus</a
        >
      </td>
      <td><code>+ …</code></td>
    </tr>
    <tr>
      <td>
        <a href="/zh-TW/docs/Web/JavaScript/Reference/Operators/Unary_negation"
          >Unary Negation</a
        >
      </td>
      <td><code>- …</code></td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators","字首遞增","#遞增與遞減", 1)}}
      </td>
      <td><code>++ …</code></td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators","字首遞減","#遞增與遞減", 1)}}
      </td>
      <td><code>-- …</code></td>
    </tr>
    <tr>
      <td>{{jsxref("Operators/typeof", "typeof")}}</td>
      <td><code>typeof …</code></td>
    </tr>
    <tr>
      <td>{{jsxref("Operators/void", "void")}}</td>
      <td><code>void …</code></td>
    </tr>
    <tr>
      <td>{{jsxref("Operators/delete", "delete")}}</td>
      <td><code>delete …</code></td>
    </tr>
    <tr>
      <td>{{jsxref("Operators/await", "await")}}</td>
      <td><code>await …</code></td>
    </tr>
    <tr>
      <td>14</td>
      <td>
        <a href="/zh-TW/docs/Web/JavaScript/Reference/Operators/Exponentiation"
          >Exponentiation</a
        >
      </td>
      <td>從右至左</td>
      <td><code>… ** …</code></td>
    </tr>
    <tr>
      <td rowspan="3">13</td>
      <td>
        <a href="/zh-TW/docs/Web/JavaScript/Reference/Operators/Multiplication"
          >Multiplication</a
        >
      </td>
      <td rowspan="3">從左至右</td>
      <td><code>… * …</code></td>
    </tr>
    <tr>
      <td>
        <a href="/zh-TW/docs/Web/JavaScript/Reference/Operators/Division"
          >Division</a
        >
      </td>
      <td><code>… / …</code></td>
    </tr>
    <tr>
      <td>
        <a href="/zh-TW/docs/Web/JavaScript/Reference/Operators/Remainder"
          >Remainder</a
        >
      </td>
      <td><code>… % …</code></td>
    </tr>
    <tr>
      <td rowspan="2">12</td>
      <td>
        <a href="/zh-TW/docs/Web/JavaScript/Reference/Operators/Addition"
          >Addition</a
        >
      </td>
      <td rowspan="2">從左至右</td>
      <td><code>… + …</code></td>
    </tr>
    <tr>
      <td>
        <a href="/zh-TW/docs/Web/JavaScript/Reference/Operators/Subtraction"
          >Subtraction</a
        >
      </td>
      <td><code>… - …</code></td>
    </tr>
    <tr>
      <td rowspan="3">11</td>
      <td>
        <a href="/zh-TW/docs/Web/JavaScript/Reference/Operators/Left_shift"
          >Bitwise Left Shift</a
        >
      </td>
      <td rowspan="3">從左至右</td>
      <td><code>… &#x3C;&#x3C; …</code></td>
    </tr>
    <tr>
      <td>
        <a href="/zh-TW/docs/Web/JavaScript/Reference/Operators/Right_shift"
          >Bitwise Right Shift</a
        >
      </td>
      <td><code>… >> …</code></td>
    </tr>
    <tr>
      <td>
        <a
          href="/zh-TW/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift"
          >Bitwise Unsigned Right Shift</a
        >
      </td>
      <td><code>… >>> …</code></td>
    </tr>
    <tr>
      <td rowspan="6">10</td>
      <td>
        <a href="/zh-TW/docs/Web/JavaScript/Reference/Operators/Less_than"
          >Less Than</a
        >
      </td>
      <td rowspan="6">從左至右</td>
      <td><code>… &#x3C; …</code></td>
    </tr>
    <tr>
      <td>
        <a
          href="/zh-TW/docs/Web/JavaScript/Reference/Operators/Less_than_or_equal"
          >Less Than Or Equal</a
        >
      </td>
      <td><code>… &#x3C;= …</code></td>
    </tr>
    <tr>
      <td>
        <a href="/zh-TW/docs/Web/JavaScript/Reference/Operators/Greater_than"
          >Greater Than</a
        >
      </td>
      <td><code>… > …</code></td>
    </tr>
    <tr>
      <td>
        <a
          href="/zh-TW/docs/Web/JavaScript/Reference/Operators/Greater_than_or_equal"
          >Greater Than Or Equal</a
        >
      </td>
      <td><code>… >= …</code></td>
    </tr>
    <tr>
      <td>{{jsxref("Operators/in", "in")}}</td>
      <td><code>… in …</code></td>
    </tr>
    <tr>
      <td>{{jsxref("Operators/instanceof", "instanceof")}}</td>
      <td><code>… instanceof …</code></td>
    </tr>
    <tr>
      <td rowspan="4">9</td>
      <td>
        <a href="/zh-TW/docs/Web/JavaScript/Reference/Operators/Equality"
          >Equality</a
        >
      </td>
      <td rowspan="4">從左至右</td>
      <td><code>… == …</code></td>
    </tr>
    <tr>
      <td>
        <a href="/zh-TW/docs/Web/JavaScript/Reference/Operators/Inequality"
          >Inequality</a
        >
      </td>
      <td><code>… != …</code></td>
    </tr>
    <tr>
      <td>
        <a href="/zh-TW/docs/Web/JavaScript/Reference/Operators/Strict_equality"
          >Strict Equality</a
        >
      </td>
      <td><code>… === …</code></td>
    </tr>
    <tr>
      <td>
        <a
          href="/zh-TW/docs/Web/JavaScript/Reference/Operators/Strict_inequality"
          >Strict Inequality</a
        >
      </td>
      <td><code>… !== …</code></td>
    </tr>
    <tr>
      <td>8</td>
      <td>
        <a href="/zh-TW/docs/Web/JavaScript/Reference/Operators/Bitwise_AND"
          >Bitwise AND</a
        >
      </td>
      <td>從左至右</td>
      <td><code>… &#x26; …</code></td>
    </tr>
    <tr>
      <td>7</td>
      <td>
        <a href="/zh-TW/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR"
          >Bitwise XOR</a
        >
      </td>
      <td>從左至右</td>
      <td><code>… ^ …</code></td>
    </tr>
    <tr>
      <td>6</td>
      <td>
        <a href="/zh-TW/docs/Web/JavaScript/Reference/Operators/Bitwise_OR"
          >Bitwise OR</a
        >
      </td>
      <td>從左至右</td>
      <td><code>… | …</code></td>
    </tr>
    <tr>
      <td>5</td>
      <td>
        <a href="/zh-TW/docs/Web/JavaScript/Reference/Operators/Logical_AND"
          >Logical AND</a
        >
      </td>
      <td>從左至右</td>
      <td><code>… &#x26;&#x26; …</code></td>
    </tr>
    <tr>
      <td rowspan="2">4</td>
      <td>
        <a href="/zh-TW/docs/Web/JavaScript/Reference/Operators/Logical_OR"
          >Logical OR</a
        >
      </td>
      <td>從左至右</td>
      <td><code>… || …</code></td>
    </tr>
    <tr>
      <td>
        <a
          href="/zh-TW/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator"
          >Nullish Coalescing</a
        >
      </td>
      <td>從左至右</td>
      <td><code>… ?? …</code></td>
    </tr>
    <tr>
      <td>3</td>
      <td>
        <a
          href="/zh-TW/docs/Web/JavaScript/Reference/Operators/Conditional_Operator"
          >條件運算</a
        >
      </td>
      <td>從右至左</td>
      <td><code>… ? … : …</code></td>
    </tr>
    <tr>
      <td rowspan="16">2</td>
      <td rowspan="16">
        <a href="/zh-TW/docs/Web/JavaScript/Reference/Operators#賦值運算子"
          >賦值</a
        >
      </td>
      <td rowspan="16">從右至左</td>
      <td><code>… = …</code></td>
    </tr>
    <tr>
      <td><code>… += …</code></td>
    </tr>
    <tr>
      <td><code>… -= …</code></td>
    </tr>
    <tr>
      <td><code>… **= …</code></td>
    </tr>
    <tr>
      <td><code>… *= …</code></td>
    </tr>
    <tr>
      <td><code>… /= …</code></td>
    </tr>
    <tr>
      <td><code>… %= …</code></td>
    </tr>
    <tr>
      <td><code>… &#x3C;&#x3C;= …</code></td>
    </tr>
    <tr>
      <td><code>… >>= …</code></td>
    </tr>
    <tr>
      <td><code>… >>>= …</code></td>
    </tr>
    <tr>
      <td><code>… &#x26;= …</code></td>
    </tr>
    <tr>
      <td><code>… ^= …</code></td>
    </tr>
    <tr>
      <td><code>… |= …</code></td>
    </tr>
    <tr>
      <td><code>… &#x26;&#x26;= …</code></td>
    </tr>
    <tr>
      <td><code>… ||= …</code></td>
    </tr>
    <tr>
      <td><code>… ??= …</code></td>
    </tr>
    <tr>
      <td>1</td>
      <td>
        <a href="/zh-TW/docs/Web/JavaScript/Reference/Operators/Comma_Operator"
          >Comma / Sequence</a
        >
      </td>
      <td>從左至右</td>
      <td><code>… , …</code></td>
    </tr>
  </tbody>
</table>
