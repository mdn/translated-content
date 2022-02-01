---
title: 运算符优先级
slug: Web/JavaScript/Reference/Operators/Operator_Precedence
tags:
  - 指南
  - JavaScript
  - 优先级
translation_of: Web/JavaScript/Reference/Operators/Operator_Precedence
---
{{jsSidebar("Operators")}}

**运算符的优先级**决定了表达式中运算执行的先后顺序。优先级高的运算符会作为优先级低的运算符的操作符。

{{EmbedInteractiveExample("pages/js/expressions-operatorprecedence.html")}}

## 优先级和结合性

考虑由下面的表示法描述的表达式。其中，OP<sub>1</sub> 和 OP<sub>2</sub> 都是操作符的占位符。

```js
a OP1 b OP2 c
```

如果 `OP1` 和 `OP2` 具有不同的优先级（见下表），则优先级最高的运算符先执行，不用考虑结合性。观察乘法如何具有比加法更高的优先级并首先执行，即使加法是首先写入代码的。

```js
console.log(3 + 10 * 2);   // 输出 23
console.log(3 + (10 * 2)); // 输出 23 因为这里的括号是多余的
console.log((3 + 10) * 2); // 输出 26 因为括号改变了优先级
```

左结合（左到右）相当于把左边的子表达式加上小括号 `(a OP b) OP c`，右结合（右到左）相当于 `a OP (b OP c)`。赋值运算符是右结合的，所以你可以这么写：

```js
a = b = 5; // 相当于 a = (b = 5);
```

预期结果是 `a` 和 `b` 的值都会成为 5。这是因为赋值运算符的返回结果就是赋值运算符右边的那个值，具体过程是：首先 `b` 被赋值为 5，然后 `a` 也被赋值为 `b = 5` 的返回值，也就是 5。

另一个例子是，只有幂运算符是右结合的，而其他算术运算符都是左结合的。有趣的是，无论结合性和优先级如何，求值顺序总是从左到右。

<table class="standard-table">
    <tbody>
        <tr>
            <td>代码</td>
            <td>输出</td>
        </tr>
        <tr>
            <td>
                <pre class="brush: js">
function echo(name, num) {
    console.log("Evaluating the " + name + " side");
    return num;
}
// 注意这里的除法运算符 (/)
console.log(echo("left", 6) / echo("right", 2));
</pre>
            </td>
            <td>
                <pre class="brush: plain">
Evaluating the left side
Evaluating the right side
3
</pre>
            </td>
        </tr>
        <tr>
            <td>
                <pre class="brush: js">
function echo(name, num) {
    console.log("Evaluating the " + name + " side");
    return num;
}
// 注意这里的幂运算符 (**)
console.log(echo("left", 2) ** echo("right", 3));</pre>
            </td>
            <td>
                <pre class="brush: plain">
Evaluating the left side
Evaluating the right side
8</pre>
            </td>
        </tr>
    </tbody>
</table>

当有多个具有相同优先级的运算符时，结合性的差异就会发挥作用。仅使用一个或多个不同优先级的运算符时，结合性不会影响输出，如上面的例子所示。在下面的示例中，观察使用多个相同运算符时结合性会如何影响输出。

<table class="standard-table">
    <tbody>
        <tr>
            <td>代码</td>
            <td>输出</td>
        </tr>
        <tr>
            <td>
                <pre class="brush: js">
function echo(name, num) {
    console.log("Evaluating the " + name + " side");
    return num;
}
// 注意这里的除法运算符 (/)
console.log(echo("left", 6) / echo("middle", 2) / echo("right", 3));
</pre>
            </td>
            <td>
                <pre class="brush: plain">
Evaluating the left side
Evaluating the middle side
Evaluating the right side
1
</pre>
            </td>
        </tr>
        <tr>
            <td>
                <pre class="brush: js">
function echo(name, num) {
    console.log("Evaluating the " + name + " side");
    return num;
}
// 注意这里的幂运算符 (**)
console.log(echo("left", 2) ** echo("middle", 3) ** echo("right", 2));
</pre>
            </td>
            <td>
                <pre class="brush: plain">
Evaluating the left side
Evaluating the middle side
Evaluating the right side
512
</pre>
            </td>
        </tr>
        <tr>
            <td>
                <pre class="brush: js">
function echo(name, num) {
    console.log("Evaluating the " + name + " side");
    return num;
}
// 注意这里左边和中间的被圆括号包围的求幂表达式
console.log((echo("left", 2) ** echo("middle", 3)) ** echo("right", 2));</pre>
            </td>
            <td>
                <pre class="brush: plain">
Evaluating the left side
Evaluating the middle side
Evaluating the right side
64</pre>
            </td>
        </tr>
    </tbody>
</table>

观察上面的代码片段，`6 / 3 / 2` 与 `(6 / 3) / 2` 是相同的，因为除法是左结合的。而幂运算符是右结合的，所以 `2 ** 3 ** 2` 与 `2 ** (3 ** 2)` 是相同的。因此，`(2 ** 3) ** 2` 会更改执行顺序，并导致输出上表中的 64。

请记住，判断执行顺序的时候，优先级在结合性之前。所以，混合求除法和幂时，求幂会先于除法。例如，`2 ** 3 / 3 ** 2` 的结果是 0.8888888888888888，因为它相当于 `(2 ** 3) / (3 ** 2)`。

### 分组和短路的注意事项

在下表中，**分组（Grouping）** 具有最高优先级。然而，这并不意味着总是优先对分组符号 `( … )` 内的表达式进行求值，尤其是涉及短路时。

短路是条件求值的术语。例如，在表达式 `a && (b + c)` 中，如果 `a` 为虚值（{{Glossary("falsy")}}），那么即使 `(b + c)` 在圆括号中，也不会被求值。我们可以说逻辑或运算符（“OR”）是“短路的”。除了逻辑或运算符外，其他短路运算符还包括逻辑与（“AND”）、空值合并、可选链和条件（三元）运算符。下面有更多例子：

```js
a || (b * c);  // 首先对 `a` 求值，如果 `a` 为真值则直接返回 `a`
a && (b < c);  // 首先对 `a` 求值，如果 `a` 为虚值则直接返回 `a`
a ?? (b || c); // 首先对 `a` 求值，如果 `a` 不是 `null` 或 `undefined` 则直接返回 `a`
a?.b.c;        // 首先对 `a` 求值，如果 `a` 是 `null` 或 `undefined` 则直接返回 `undefined`
```

## 示例

```js
3 > 2 && 2 > 1
// 返回 true

3 > 2 > 1
// 返回 false，因为 3 > 2 是 true，然后 true 会在比较运算符中
// 被隐式转换为 1，因此 true > 1 会变为 1 > 1，结果是 false
// 加括号可以更清楚：(3 > 2) > 1
```

## 汇总表

下面的表格将所有运算符按照优先级的不同从高（19）到低（1）排列。

请注意，下表中故意不包含[展开语法（Spread syntax）](/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_syntax) —— 原因可以引用[Stack Overflow 上的一个回答](https://stackoverflow.com/a/48656377)，“[展开语法不是一个运算符](https://stackoverflow.com/q/44934828/1048572)，因此没有优先级。它是数组字面量和函数调用（和对象字面量）语法的一部分。”

<table class="fullwidth-table">
    <tbody>
        <tr>
            <th>优先级</th>
            <th>运算符类型</th>
            <th>结合性</th>
            <th>运算符</th>
        </tr>
        <tr>
            <td>19</td>
            <td>{{jsxref("Operators/Grouping", "分组", "", 1)}}</td>
            <td>n/a（不相关）</td>
            <td><code>( … )</code></td>
        </tr>
        <tr>
            <td rowspan="5">18</td>
            <td>{{jsxref("Operators/Property_Accessors", "成员访问", "#点号表示法", 1)}}</td>
            <td>从左到右</td>
            <td><code>… . …</code></td>
        </tr>
        <tr>
            <td>{{jsxref("Operators/Property_Accessors", "需计算的成员访问", "#方括号表示法", 1)}}</td>
            <td>从左到右</td>
            <td><code>… [ … ]</code></td>
        </tr>
        <tr>
            <td>{{jsxref("Operators/new","new")}}（带参数列表）</td>
            <td>n/a</td>
            <td><code>new … ( … )</code></td>
        </tr>
        <tr>
            <td><a href="/zh-CN/docs/Web/JavaScript/Guide/Functions">函数调用</a></td>
            <td>从左到右</td>
            <td><code>… ( <var>… </var>)</code></td>
        </tr>
        <tr>
            <td><a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/Optional_chaining">可选链（Optional chaining）</a></td>
            <td>从左到右</td>
            <td><code>?.</code></td>
        </tr>
        <tr>
            <td>17</td>
            <td>{{jsxref("Operators/new","new")}}（无参数列表）</td>
            <td>从右到左</td>
            <td><code>new …</code></td>
        </tr>
        <tr>
            <td rowspan="2">16</td>
            <td>{{jsxref("Operators","后置递增","#自增和自减", 1)}}</td>
            <td rowspan="2">n/a</td>
            <td><code>… ++</code></td>
        </tr>
        <tr>
            <td>{{jsxref("Operators","后置递减","#自增和自减", 1)}}</td>
            <td><code>… --</code></td>
        </tr>
        <tr>
            <td rowspan="10">15</td>
            <td><a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/Logical_NOT">逻辑非 (!)</a></td>
            <td rowspan="10">从右到左</td>
            <td><code>! …</code></td>
        </tr>
        <tr>
            <td><a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT">按位非 (~)</a></td>
            <td><code>~ …</code></td>
        </tr>
        <tr>
            <td><a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/Unary_plus">一元加法 (+)</a></td>
            <td><code>+ …</code></td>
        </tr>
        <tr>
            <td><a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/Unary_negation">一元减法 (-)</a></td>
            <td><code>- …</code></td>
        </tr>
        <tr>
            <td>{{jsxref("Operators","前置递增","#自增和自减", 1)}}</td>
            <td><code>++ …</code></td>
        </tr>
        <tr>
            <td>{{jsxref("Operators","前置递减","#自增和自减", 1)}}</td>
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
            <td><a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/Exponentiation">幂 (**)</a></td>
            <td>从右到左</td>
            <td><code>… ** …</code></td>
        </tr>
        <tr>
            <td rowspan="3">13</td>
            <td><a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/Multiplication">乘法 (*)</a></td>
            <td rowspan="3">从左到右</td>
            <td><code>… * …</code></td>
        </tr>
        <tr>
            <td><a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/Division">除法 (/)</a></td>
            <td><code>… / …</code></td>
        </tr>
        <tr>
            <td><a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/Remainder">取余 (%)</a></td>
            <td><code>… % …</code></td>
        </tr>
        <tr>
            <td rowspan="2">12</td>
            <td><a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/Addition">加法 (+)</a></td>
            <td rowspan="2">从左到右</td>
            <td><code>… + …</code></td>
        </tr>
        <tr>
            <td><a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/Subtraction">减法 (-)</a></td>
            <td><code>… - …</code></td>
        </tr>
        <tr>
            <td rowspan="3">11</td>
            <td><a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/Left_shift">按位左移 (&lt;&lt;)</a></td>
            <td rowspan="3">从左到右</td>
            <td><code>… &lt;&lt; …</code></td>
        </tr>
        <tr>
            <td><a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/Right_shift">按位右移 (&gt;&gt;)</a></td>
            <td><code>… &gt;&gt; …</code></td>
        </tr>
        <tr>
            <td><a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift">无符号右移 (&gt;&gt;&gt;)</a></td>
            <td><code>… &gt;&gt;&gt; …</code></td>
        </tr>
        <tr>
            <td rowspan="6">10</td>
            <td><a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/Less_than">小于 (&lt;)</a></td>
            <td rowspan="6">从左到右</td>
            <td><code>… &lt; …</code></td>
        </tr>
        <tr>
            <td><a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/Less_than_or_equal">小于等于 (&lt;=)</a></td>
            <td><code>… &lt;= …</code></td>
        </tr>
        <tr>
            <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Greater_than">大于 (&gt;)</a></td>
            <td><code>… &gt; …</code></td>
        </tr>
        <tr>
            <td><a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/Greater_than_or_equal">大于等于 (&gt;=)</a></td>
            <td><code>… &gt;= …</code></td>
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
            <td><a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/Equality">相等 (==)</a></td>
            <td rowspan="4">从左到右</td>
            <td><code>… == …</code></td>
        </tr>
        <tr>
            <td><a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/Inequality">不相等 (!=)</a></td>
            <td><code>… != …</code></td>
        </tr>
        <tr>
            <td><a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/Strict_equality">一致/严格相等 (===)</a></td>
            <td><code>… === …</code></td>
        </tr>
        <tr>
            <td><a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/Strict_inequality">不一致/严格不相等 (!==)</a></td>
            <td><code>… !== …</code></td>
        </tr>
        <tr>
            <td>8</td>
            <td><a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/Bitwise_AND">按位与 (&amp;)</a></td>
            <td>从左到右</td>
            <td><code>… &amp; …</code></td>
        </tr>
        <tr>
            <td>7</td>
            <td><a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR">按位异或 (^)</a></td>
            <td>从左到右</td>
            <td><code>… ^ …</code></td>
        </tr>
        <tr>
            <td>6</td>
            <td><a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/Bitwise_OR">按位或 (|)</a></td>
            <td>从左到右</td>
            <td><code>… | …</code></td>
        </tr>
        <tr>
            <td>5</td>
            <td><a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/Logical_AND">逻辑与 (&amp;&amp;)</a></td>
            <td>从左到右</td>
            <td><code>… &amp;&amp; …</code></td>
        </tr>
        <tr>
            <td rowspan="2">4</td>
            <td><a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/Logical_OR">逻辑或 (||)</a></td>
            <td>从左到右</td>
            <td><code>… || …</code></td>
        </tr>
        <tr>
            <td><a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator">空值合并 (??)</a></td>
            <td>从左到右</td>
            <td><code>… ?? …</code></td>
        </tr>
        <tr>
            <td>3</td>
            <td><a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/Conditional_Operator">条件（三元）运算符</a></td>
            <td>从右到左</td>
            <td><code>… ? … : …</code></td>
        </tr>
        <tr>
            <td rowspan="16">2</td>
            <td rowspan="16"><a href="/zh-CN/docs/Web/JavaScript/Reference/Operators#赋值运算符">赋值</a></td>
            <td rowspan="16">从右到左</td>
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
            <td><code>… &lt;&lt;= …</code></td>
        </tr>
        <tr>
            <td><code>… &gt;&gt;= …</code></td>
        </tr>
        <tr>
            <td><code>… &gt;&gt;&gt;= …</code></td>
        </tr>
        <tr>
            <td><code>… &amp;= …</code></td>
        </tr>
        <tr>
            <td><code>… ^= …</code></td>
        </tr>
        <tr>
            <td><code>… |= …</code></td>
        </tr>
        <tr>
            <td><code>… &amp;&amp;= …</code></td>
        </tr>
        <tr>
            <td><code>… ||= …</code></td>
        </tr>
        <tr>
            <td><code>… ??= …</code></td>
        </tr>
        <tr>
            <td>1</td>
            <td><a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/Comma_Operator">逗号 / 序列</a></td>
            <td>从左到右</td>
            <td><code>… , …</code></td>
        </tr>
    </tbody>
</table>
