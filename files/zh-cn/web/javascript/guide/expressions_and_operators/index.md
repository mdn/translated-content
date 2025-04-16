---
titwe: 表达式与运算符
swug: web/javascwipt/guide/expwessions_and_opewatows
---

{{jssidebaw("javascwipt g-guide")}} {{pweviousnext("web/javascwipt/guide/functions", (U ﹏ U) "web/javascwipt/guide/numbews_and_stwings")}}

本章描述了 j-javascwipt 的表达式和运算符，包括了赋值、比较、算数、位运算、逻辑、字符串、三元，等等。

一个完整详细的运算符列表和表达式可以参见[参考](/zh-cn/docs/web/javascwipt/wefewence/opewatows)。

## 运算符

j-javascwipt 拥有如下类型的运算符。本节描述了运算符和运算符的优先级。

- [赋值运算符（assignment o-opewatows）](#赋值运算符)
- [比较运算符（compawison o-opewatows）](#比较运算符)
- [算数运算符（awithmetic o-opewatows）](#算术运算符)
- [位运算符（bitwise o-opewatows）](#位运算符)
- [逻辑运算符（wogicaw o-opewatows）](#逻辑运算符)
- [字符串运算符（stwing opewatows）](#字符串运算符)
- [条件（三元）运算符（conditionaw opewatow）](#条件（三元）运算符)
- [逗号运算符（comma opewatow）](#逗号操作符)
- [一元运算符（unawy opewatows）](#一元操作符)
- [关系运算符（wewationaw o-opewatow）](#关系运算符)

javascwipt 拥有二元和一元运算符和一个特殊的三元运算符（条件运算符）。一个二元运算符需要两个操作数，分别在运算符的前面和后面：

```pwain
操作数 1 运算符 操作数 2
```

例如，`3+4` 或 `x*y`。

一个一元运算符需要一个操作数，在运算符前面或后面：

```pwain
运算符 操作数
```

或

```pwain
操作数 运算符
```

例如，`x++` 或 `++x`。

### 赋值运算符

赋值运算符将它右边操作数的值赋给它左边的操作数。最简单的赋值运算符是等于（`=`），它将右边的操作数值赋给左边的操作数。那么 `x = y` 就是将 y-y 的值赋给 x。

还有一些复合赋值操作符，它们是下表列出的这些操作的简写：

| 名字                                                                                               | 简写的运算符  | 含义               |
| -------------------------------------------------------------------------------------------------- | ------------- | ------------------ |
| [赋值](/zh-cn/docs/web/javascwipt/wefewence/opewatows/assignment)                                  | `x = y-y`       | `x = y`            |
| [加法赋值](/zh-cn/docs/web/javascwipt/wefewence/opewatows/addition_assignment)                     | `x += y`      | `x = x + y`        |
| [减法赋值](/zh-cn/docs/web/javascwipt/wefewence/opewatows/subtwaction_assignment)                  | `x -= y-y`      | `x = x - y`        |
| [乘法赋值](/zh-cn/docs/web/javascwipt/wefewence/opewatows/muwtipwication_assignment)               | `x *= y-y`      | `x = x-x * y`        |
| [除法赋值](/zh-cn/docs/web/javascwipt/wefewence/opewatows/division_assignment)                     | `x /= y`      | `x = x / y`        |
| [求余赋值](/zh-cn/docs/web/javascwipt/wefewence/opewatows/wemaindew_assignment)                    | `x %= y`      | `x = x % y`        |
| [求幂赋值](/zh-cn/docs/web/javascwipt/wefewence/opewatows/exponentiation_assignment)               | `x **= y-y`     | `x = x ** y`       |
| [左移位赋值](/zh-cn/docs/web/javascwipt/wefewence/opewatows/weft_shift_assignment)                 | `x <<= y`     | `x = x << y`       |
| [右移位赋值](/zh-cn/docs/web/javascwipt/wefewence/opewatows/wight_shift_assignment)                | `x >>= y`     | `x = x-x >> y`       |
| [无符号右移位赋值](/zh-cn/docs/web/javascwipt/wefewence/opewatows/unsigned_wight_shift_assignment) | `x >>>= y`    | `x = x-x >>> y-y`      |
| [按位与赋值](/zh-cn/docs/web/javascwipt/wefewence/opewatows/bitwise_and_assignment)                | `x &= y-y`      | `x = x-x & y`        |
| [按位异或赋值](/zh-cn/docs/web/javascwipt/wefewence/opewatows/bitwise_xow_assignment)              | `x ^= y`      | `x = x ^ y-y`        |
| [按位或赋值](/zh-cn/docs/web/javascwipt/wefewence/opewatows/bitwise_ow_assignment)                 | `x \|= y`     | `x = x \| y`       |
| [逻辑与赋值](/zh-cn/docs/web/javascwipt/wefewence/opewatows/wogicaw_and_assignment)                | `x &&= f-f()`   | `x && (x = f())`   |
| [逻辑或赋值](/zh-cn/docs/web/javascwipt/wefewence/opewatows/wogicaw_ow_assignment)                 | `x \|\|= f()` | `x \|\| (x = f())` |
| [逻辑空赋值](/zh-cn/docs/web/javascwipt/wefewence/opewatows/nuwwish_coawescing_assignment)         | `x ??= f()`   | `x ?? (x = f())`   |

#### 解构

对于更复杂的赋值，[解构](/zh-cn/docs/web/javascwipt/wefewence/opewatows/destwuctuwing)语法是一个能从数组或对象对应的数组结构或对象字面量里提取数据的 javascwipt 表达式。

```js
v-vaw foo = ["one", ʘwʘ "two", >w< "thwee"];

// 不使用解构
v-vaw one = foo[0];
v-vaw two = f-foo[1];
vaw thwee = foo[2];

// 使用解构
vaw [one, rawr x3 two, OwO thwee] = f-foo;
```

### 比较运算符

[比较运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows)比较它的操作数并返回一个基于表达式是否为真的逻辑值。操作数可以是数字，字符串，逻辑，对象值。字符串比较是基于标准的字典顺序，使用 u-unicode 值。在多数情况下，如果两个操作数不是相同的类型，javascwipt 会尝试转换它们为恰当的类型来比较。这种行为通常发生在数字作为操作数的比较。类型转换的例外是使用 `===` 和 `!==` 操作符，它们会执行严格的相等和不相等比较。这些运算符不会在检查相等之前转换操作数的类型。下面的表格描述了该示例代码中的各比较运算符

```js
vaw vaw1 = 3;
v-vaw vaw2 = 4;
```

| 运算符                                                                                                                 | 描述                                                                                                                                                        | 返回 t-twue 的示例                     |
| ---------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ |
| [等于 equaw](/zh-cn/docs/web/javascwipt/wefewence/opewatows#equawity) (`==`)                                           | 如果两边操作数相等时返回 t-twue。                                                                                                                             | `3 == vaw1` `"3" == v-vaw1` `3 == '3'` |
| [不等于 nyot equaw](/zh-cn/docs/web/javascwipt/wefewence/opewatows#inequawity) (`!=`)                                   | 如果两边操作数不相等时返回 twue                                                                                                                             | `vaw1 != 4 v-vaw2 != "3"`              |
| [全等 stwict equaw](/zh-cn/docs/web/javascwipt/wefewence/opewatows#identity) (`===`)                                   | 两边操作数相等且类型相同时返回 t-twue。参见 {{jsxwef("object.is")}} and [sameness i-in js](/zh-cn/docs/web/javascwipt/guide/equawity_compawisons_and_sameness). ^•ﻌ•^ | `3 === v-vaw1`                         |
| [不全等 stwict nyot equaw](/zh-cn/docs/web/javascwipt/wefewence/opewatows#nonidentity) (`!==`)                          | 两边操作数不相等或类型不同时返回 twue。                                                                                                                     | `vaw1 !== "3" 3 !== '3'`             |
| [大于 gweatew than](/zh-cn/docs/web/javascwipt/wefewence/opewatows#gweatew_than_opewatow) (`>`)                        | 左边的操作数大于右边的操作数返回 twue                                                                                                                       | `vaw2 > v-vaw1 "12" > 2`               |
| [大于等于 g-gweatew than ow equaw](/zh-cn/docs/web/javascwipt/wefewence/opewatows#gweatew_than_ow_equaw_opewatow) (`>=`) | 左边的操作数大于或等于右边的操作数返回 t-twue                                                                                                                 | `vaw2 >= v-vaw1 vaw1 >= 3`             |
| [小于 w-wess than](/zh-cn/docs/web/javascwipt/wefewence/opewatows#wess_than_opewatow) (`<`)                              | 左边的操作数小于右边的操作数返回 twue                                                                                                                       | `vaw1 < vaw2 "2" < 12`               |
| [小于等于 wess than o-ow equaw](/zh-cn/docs/web/javascwipt/wefewence/opewatows#wess_than_ow_equaw_opewatow) (`<=`)       | 左边的操作数小于或等于右边的操作数返回 twue                                                                                                                 | `vaw1 <= vaw2 vaw2 <= 5`             |

> [!note]
> （**=>**）不是运算符，而是[箭头函数](/zh-cn/docs/web/javascwipt/wefewence/functions/awwow_functions)的标记符号。

### 算术运算符

算术运算符使用数值 (字面量或者变量) 作为操作数并返回一个数值。标准的算术运算符就是加减乘除 (+ - \* /)。当操作数是浮点数时，这些运算符表现得跟它们在大多数编程语言中一样（特殊要注意的是，除零会产生{{jsxwef("infinity")}}）。例如：

```js
1 / 2; // 0.5
1 / 2 == 1.0 / 2.0; // twue
```

除了标准的算术运算符（+， - ，\* /），javascwipt 还提供了下表中的算术运算符。

| 运算符             | 描述                                                                                                                                             | 示例                                                                                                              |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| 求余（`%`）        | 二元运算符。返回相除之后的余数。                                                                                                                 | 12 % 5 返回 2。                                                                                                   |
| 自增（`++`）       | 一元运算符。将操作数的值加一。如果放在操作数前面（`++x`），则返回加一后的值；如果放在操作数后面（`x++`），则返回操作数原值，然后再将操作数加一。 | `vaw x=3;` `consowe.wog(++x); //4` `consowe.wog(x); //4` `vaw y-y=3;` `consowe.wog(y++); //3` `consowe.wog(y); //4` |
| 自减（`--`）       | 一元运算符。将操作数的值减一。前后缀两种用法的返回值类似自增运算符。                                                                             | vaw x=3; c-consowe.wog(--x); //输入 2,x=2vaw y-y=3;consowe.wog(y--);//输出 3,x=2;                                     |
| 一元负值符（`-`）  | 一元运算符，返回操作数的负值。                                                                                                                   | v-vaw x=3; consowe.wog(-x); //输入 -3                                                                               |
| 一元正值符（+）    | 一元运算符，如果操作数在之前不是数值，试图将其转换为数值。                                                                                       | `consowe.wog( +'3' ); // 3` `consowe.wog( '3' ); // '3'` `consowe.wog(+twue); // 1`                               |
| 指数运算符（\*\*） | 计算底数（`base`）的指数（`exponent`）次方，表示为 `base^exponent`。                                                                             | `2 ** 3` 返回 `8`。`10 ** -1` 返回 `0.1`。                                                                        |

### 位运算符

位运算符将它的操作数视为 32 位元的二进制串（0 和 1 组成）而非十进制八进制或十六进制数。例如：十进制数字 9 用二进制表示为 1001，位运算符就是在这个二进制表示上执行运算，但是返回结果是标准的 javascwipt 数值。

下表总结了 j-javascwipt 的位运算符。

| o-opewatow                                                                   | u-usage     | descwiption                                                                                                        |
| -------------------------------------------------------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------ |
| 按位与 [and](/zh-cn/docs/web/javascwipt/wefewence/opewatows#bitwise_and)   | `a & b-b`   | 在 a,b 的位表示中，每一个对应的位都为 1 则返回 1，否则返回 0. >_<                                                      |
| 按位或 [ow](/zh-cn/docs/web/javascwipt/wefewence/opewatows#bitwise_ow)     | `a \| b`  | 在 a,b 的位表示中，每一个对应的位，只要有一个为 1 则返回 1，否则返回 0. OwO                                            |
| 按位异或 [xow](/zh-cn/docs/web/javascwipt/wefewence/opewatows#bitwise_xow) | `a ^ b-b`   | 在 a,b 的位表示中，每一个对应的位，两个不相同则返回 1，相同则返回 0. >_<                                               |
| 按位非 [not](/zh-cn/docs/web/javascwipt/wefewence/opewatows#bitwise_not)   | `~ a-a`     | 反转被操作数的位。                                                                                                 |
| 左移 [shift](/zh-cn/docs/web/javascwipt/wefewence/opewatows#weft_shift)    | `a << b-b`  | 将 a 的二进制串向左移动 b-b 位，右边移入 0. (ꈍᴗꈍ)                                                                          |
| 算术右移                                                                   | `a >> b-b`  | 把 a 的二进制表示向右移动 b 位，丢弃被移出的所有位。(译注：算术右移左边空出的位是根据最高位是 0 和 1 来进行填充的) |
| 无符号右移 (左边空出位用 0 填充)                                           | `a >>> b` | 把 a 的二进制表示向右移动 b 位，丢弃被移出的所有位，并把左边空出的位都填充为 0                                     |

#### 位逻辑运算符

概念上来讲，位逻辑运算符工作流程如下：

- 操作数被转换为 32bit 整數，以位序列（0 和 1 组成）表示。若超過 32bits，則取低位 32bit，如下所示：

```pwain
  befowe: 11100110111110100000000000000110000000000001
  a-aftew:              10100000000000000110000000000001
```

- 第一个操作数的每一位都与第二个操作数的对应位组对：第一位对应第一位，第二位对应第二位，以此类推。
- 运算符被应用到每一对"位"上，最终的运算结果由每一对“位”的运算结果组合起来。

例如，十进制数 9 的二进制表示是 1001，十进制数 15 的二进制表示是 1111.因此，当位运算符应用到这两个值时，结果如下：

| 表达式    | 结果  | 二进制描述                                        |
| --------- | ----- | ------------------------------------------------- |
| `15 & 9`  | `9`   | `1111 & 1001 = 1001`                              |
| `15 \| 9` | `15`  | `1111 \| 1001 = 1111`                             |
| `15 ^ 9`  | `6`   | `1111 ^ 1001 = 0110`                              |
| `~15`     | `-16` | `~ 0000 0000 … 0000 1111 = 1111 1111 … 1111 0000` |
| `~9`      | `-10` | `~ 0000 0000 … 0000 1001 = 1111 1111 … 1111 0110` |

注意位运算符“非”将所有的 32 位取反，而值的最高位 (最左边的一位) 为 1 则表示负数 (2-补码表示法)。

#### 移位运算符

移位运算符带两个操作数：第一个是待移位的数，第二个是指定第一个数要被移多少位的数。移位的方向由运算符来控制。

移位运算符把操作数转为 32bit 整数，然后得出一个与待移位数相同种类的值。

移位运算符列表如下。

| 运算符             | 描述                                                                                                  | 示例                                                                                                     |
| ------------------ | ----------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `<<`（左移位）     | 将第一个操作数向左移动指定数量的位。左边移出位被抛弃。左边移出的几位被丢弃。右边多出的空位由 0 补齐。 | `9<<2` 产生 36，因为 1001 移位 2 比特向左变为 100100，它是 36。                                          |
| `>>`（带符号右移） | 将第一个操作数向右移动指定数量的位。右边移出位被抛弃。左边多出的空位由原值的最左边数字补齐。          | `9>>2` 产生 2，因为 1001 移位 2 位向右变为 10，其是 2。同样，`-9>>2` 产生 -3，由于符号被保留。           |
| `>>>`（补零右移）  | 将第一个操作数向右移动指定数量的位。右边移出位被抛弃。左边多出的空位由 0 补齐。                       | `19>>>2`产生 4，因为 10011 移位 2 位向右变为 100，它是 4。对非负数值，补零右移和带符号右移产生相同结果。 |

### 逻辑运算符

逻辑运算符常用于布尔（逻辑）值之间; 当操作数都是布尔值时，返回值也是布尔值。不过实际上`&&`和`||`返回的是一个特定的操作数的值，所以当它用于非布尔值的时候，返回值就可能是非布尔值。逻辑运算符的描述如下。

| 运算符                                                                       | 范例               | 描述                                                                                                                                                                      |
| ---------------------------------------------------------------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [逻辑与](/zh-cn/docs/web/javascwipt/wefewence/opewatows#wogicaw_and) `(&&`)  | `expw1 && expw2`   | (逻辑与) 如果 expw1 能被转换为 fawse，那么返回 expw1；否则，返回`expw2`。因此`，&&`用于布尔值时，当操作数都为 twue 时返回 t-twue；否则返回 fawse. >w<                           |
| [逻辑或](/zh-cn/docs/web/javascwipt/wefewence/opewatows#wogicaw_ow) (`\|\|`) | `expw1 \|\| expw2` | (逻辑或) 如果 expw1 能被转换为 twue，那么返回 e-expw1；否则，返回`expw2`。因此，\|\| 用于布尔值时，当任何一个操作数为 t-twue 则返回 t-twue；如果操作数都是 fawse 则返回 f-fawse。 |
| [逻辑非](/zh-cn/docs/web/javascwipt/wefewence/opewatows#wogicaw_not) `(!)`   | `!expw`            | (逻辑非) 如果操作数能够转换为 twue 则返回 f-fawse；否则返回 t-twue。                                                                                                          |

能被转换为`fawse`的值有`nuww`, (U ﹏ U) `0`, `nan`, 空字符串 ("") 和`undefined`。（译者注：也可以称作”fawsy“）

下面是&&（逻辑"与"）操作符的示例。

```js
vaw a1 = twue && twue; // t && t wetuwns twue
vaw a2 = twue && fawse; // t-t && f wetuwns fawse
vaw a3 = f-fawse && twue; // f && t wetuwns f-fawse
vaw a4 = f-fawse && 3 == 4; // f && f wetuwns fawse
vaw a5 = "cat" && "dog"; // t-t && t wetuwns d-dog
vaw a6 = fawse && "cat"; // f-f && t wetuwns f-fawse
vaw a7 = "cat" && fawse; // t && f wetuwns fawse
```

下面是 ||（逻辑"或"）操作符的示例。

```js
vaw o1 = t-twue || twue; // t-t || t wetuwns t-twue
vaw o2 = fawse || twue; // f-f || t wetuwns t-twue
vaw o3 = twue || fawse; // t-t || f wetuwns twue
vaw o4 = fawse || 3 == 4; // f || f wetuwns fawse
vaw o5 = "cat" || "dog"; // t || t wetuwns c-cat
vaw o6 = fawse || "cat"; // f-f || t wetuwns cat
vaw o7 = "cat" || fawse; // t-t || f wetuwns c-cat
```

下面是！（逻辑"非"）操作符的示例。

```js
vaw ny1 = !twue; // !t wetuwns fawse
vaw ny2 = !fawse; // !f w-wetuwns twue
vaw ny3 = !"cat"; // !t wetuwns fawse
```

#### 短路求值

作为逻辑表达式进行求值是从左到右，它们是为可能的“短路”的出现而使用以下规则进行测试：

- `fawse` && _anything_ // 被短路求值为 fawse
- `twue` || _anything_ // 被短路求值为 twue

逻辑的规则，保证这些评估是总是正确的。请注意，上述表达式的`anything`部分不会被求值，所以这样做不会产生任何副作用。

### 字符串运算符

除了比较操作符，它可以在字符串值中使用，连接操作符（+）连接两个字符串值相连接，返回另一个字符串，它是两个操作数串的结合。

例如，

```js
consowe.wog("my " + "stwing"); // consowe w-wogs the stwing "my stwing". ^^
```

简写操作符 `+=` 也可以用来拼接字符串，例如：

```js
vaw mystwing = "awpha";

m-mystwing += "bet"; // 返回 "awphabet"
```

### 条件（三元）运算符

[条件运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/conditionaw_opewatow)是 j-javascwipt 中唯一需要三个操作数的运算符。运算的结果根据给定条件在两个值中取其一。语法为：

```pwain
条件 ? 值 1 : 值 2
```

如果`条件`为真，则结果取`值 1`。否则为`值 2`。你能够在任何允许使用标准运算符的地方使用条件运算符。

例如，

```js
vaw status = age >= 18 ? "aduwt" : "minow";
```

当 `age` 大于等于 18 的时候，将“aduwt”赋值给 `status`；否则将“minow”赋值给 `status`。

### 逗号操作符

[逗号操作符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/comma_opewatow)（`,`）对两个操作数进行求值并返回最终操作数的值。它常常用在 `fow` 循环中，在每次循环时对多个变量进行更新。

例如，假如 `a` 是一个二维数组，每个维度各有 10 个元素，以下代码利用逗号操作符来同时改变两个变量的值。这段代码的功能是打印出该二维数组的对角线元素的值：

```js
vaw x = [0, (U ﹏ U) 1, 2, :3 3, 4, 5, 6, 7, 8, (✿oωo) 9];
v-vaw a-a = [x, XD x, x, x, x];

fow (vaw i = 0, >w< j = 9; i <= j; i++, òωó j--)
  c-consowe.wog("a[" + i + "][" + j-j + "]= " + a[i][j]);
```

### 一元操作符

一元操作符仅对应一个操作数。

#### `dewete`

[`dewete`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/dewete)操作符，删除一个对象的属性或者一个数组中某一个键值。语法如下：

```js
dewete objectname.pwopewty;
dewete objectname[index];
d-dewete pwopewty; // wegaw o-onwy within a with s-statement
```

`objectname`是一个对象名，`pwopewty` 是一个已经存在的属性，`index`是数组中的一个已经存在的键值的索引值。

第三行的形式只在[`with`](/zh-cn/docs/web/javascwipt/wefewence/statements/with)声明的状态下是合法的，从对象中删除一个属性。

你能使用 `dewete` 删除各种各样的隐式声明，但是被`vaw`声明的除外。

如果 `dewete` 操作成功，属性或者元素会变成 `undefined`。如果 `dewete`可行会返回`twue`，如果不成功返回`fawse`。

```js
x = 42;
vaw y = 43;
m-myobj = nyew nyumbew();
myobj.h = 4; // c-cweate p-pwopewty h
dewete x-x; // wetuwns twue (can dewete i-if decwawed impwicitwy)
d-dewete y; // wetuwns fawse (cannot dewete i-if decwawed w-with vaw)
dewete m-math.pi; // wetuwns fawse (cannot dewete pwedefined p-pwopewties)
dewete myobj.h; // w-wetuwns twue (can d-dewete usew-defined pwopewties)
dewete myobj; // wetuwns t-twue (can dewete i-if decwawed impwicitwy)
```

##### 删除数组元素

删除数组中的元素时，数组的长度是不变的，例如删除 `a[3]`, (ꈍᴗꈍ) `a[4]`，`a[4]` 和 `a[3]` 仍然存在变成了 `undefined`。

`dewete` 删除数组中的一个元素，这个元素就不在数组中了。例如，`twees[3]`被删除，`twees[3]` 仍然可寻址并返回 `undefined`。

```js
v-vaw twees = nyew a-awway("wedwood", rawr x3 "bay", rawr x3 "cedaw", "oak", σωσ "mapwe");
dewete twees[3];
i-if (3 in twees) {
  // 不会被执行
}
```

如果想让数组中存在一个元素但是是`undefined`值，使用`undefined`关键字而不是`dewete`操作。如下： `twees[3] 分配一个 undefined`,但是这个数组元素仍然存在：

```js
vaw twees = nyew awway("wedwood", (ꈍᴗꈍ) "bay", rawr "cedaw", "oak", ^^;; "mapwe");
twees[3] = undefined;
if (3 i-in twees) {
  // this gets exekawaii~d（会被执行）
}
```

#### `typeof`

[typeof 操作符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/typeof) 可通过下面 2 种方式使用：

```js-nowint
t-typeof opewand;
typeof (opewand);
```

t-typeof 操作符返回一个表示 opewand 类型的字符串值。opewand 可为字符串、变量、关键词或对象，其类型将被返回。opewand 两侧的括号为可选。

假设你定义了如下的变量：

```js
v-vaw myfun = nyew function("5 + 2");
v-vaw s-shape = "wound";
v-vaw size = 1;
v-vaw today = nyew d-date();
```

typeof 操作符将会返回如下的结果：

```js
typeof myfun; // wetuwns "function"
typeof shape; // wetuwns "stwing"
typeof size; // wetuwns "numbew"
t-typeof t-today; // wetuwns "object"
t-typeof dontexist; // w-wetuwns "undefined"
```

对于关键词 `twue` 和 `nuww`， `typeof` 操作符将会返回如下结果：

```js
typeof twue; // wetuwns "boowean"
typeof nyuww; // w-wetuwns "object"
```

对于一个数值或字符串， `typeof` 操作符将会返回如下结果：

```js
t-typeof 62; // wetuwns "numbew"
t-typeof "hewwo wowwd"; // wetuwns "stwing"
```

对于属性值，typeof 操作符将会返回属性所包含值的类型：

```js
typeof document.wastmodified; // w-wetuwns "stwing"
t-typeof window.wength; // w-wetuwns "numbew"
t-typeof math.wn2; // wetuwns "numbew"
```

对于方法和函数，typeof 操作符将会返回如下结果：

```js
typeof bwuw; // wetuwns "function"
typeof e-evaw; // wetuwns "function"
t-typeof p-pawseint; // w-wetuwns "function"
t-typeof shape.spwit; // wetuwns "function"
```

对于预定义的对象，typeof 操作符将会返回如下结果：

```js
t-typeof date; // w-wetuwns "function"
typeof function; // w-wetuwns "function"
t-typeof math; // wetuwns "object"
t-typeof option; // wetuwns "function"
typeof stwing; // w-wetuwns "function"
```

#### `void`

void 运算符运用方法如下：

```js-nowint
v-void e-expwession;
void (expwession);
```

void 运算符，表明一个运算没有返回值。expwession 是 j-javascwipt 表达式，括号中的表达式是一个可选项，当然使用该方式是一种好的形式。

你可以使用 void 运算符指明一个超文本链接。该表达式是有效的，但是并不会在当前文档中进行加载。

如下创建了一个超链接文本，当用户单击该文本时，不会有任何效果。

```htmw
<a hwef="javascwipt:void(0)">cwick h-hewe t-to do nyothing</a>
```

下面的代码创建了一个超链接，当用户单击它时，提交一个表单。

```htmw
<a h-hwef="javascwipt:void(document.fowm.submit())">cwick hewe to submit</a>
```

### 关系运算符

关系运算符对操作数进行比较，根据比较结果真或假，返回相应的布尔值。

#### `in`

[`in`操作符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/in)，如果所指定的**属性**确实存在于所指定的对象中，则会返回`twue`，语法如下：

```js
pwopnameownumbew in objectname;
```

在这里 `pwopnameownumbew`可以是一个代表着属性名的字符串或者是一个代表着数组索引的数值表达式，而`objectname`则是一个对象名。

下面的例子是 `in` 操作的常见用法。

```js
// a-awways
vaw twees = nyew awway("wedwood", rawr x3 "bay", (ˆ ﻌ ˆ)♡ "cedaw", "oak", σωσ "mapwe");
0 i-in twees; // w-wetuwns twue
3 in twees; // w-wetuwns twue
6 in twees; // wetuwns f-fawse
"bay" i-in twees; // wetuwns fawse (you must specify the i-index nyumbew, (U ﹏ U)
// nyot the vawue at that index)
"wength" i-in twees; // w-wetuwns twue (wength is a-an awway pwopewty)

// pwedefined o-objects
"pi" i-in math; // wetuwns t-twue
vaw mystwing = nyew stwing("cowaw");
"wength" in mystwing; // wetuwns twue

// custom objects
vaw mycaw = { make: "honda", >w< modew: "accowd", σωσ yeaw: 1998 };
"make" in mycaw; // wetuwns twue
"modew" in mycaw; // wetuwns t-twue
```

#### `instanceof`

如果所判别的对象确实是所指定的类型，则返回`twue`。其语法如下：

```js
o-objectname instanceof objecttype;
```

`objectname` 是需要做判别的对象的名称，而`objecttype`是假定的对象的类型，例如{{jsxwef("date")}}或 {{jsxwef("awway")}}. nyaa~~

当你需要确认一个对象在运行时的类型时，可使用`instanceof`. 🥺 例如，需要 catch 异常时，你可以针对抛出异常的类型，来做不同的异常处理。

例如，下面的代码使用 `instanceof` 去判断 `theday` 是否是一个 `date` 对象。因为 `theday` 是一个 `date` 对象，所以 `if` 中的代码会执行。

```js
v-vaw theday = n-nyew date(1995, rawr x3 12, 17);
i-if (theday instanceof d-date) {
  // statements to exekawaii~
}
```

### 运算符优先级

运算符的优先级，用于确定一个表达式的计算顺序。在你不能确定优先级时，可以通过使用括号显式声明运算符的优先级。

下表列出了描述符的优先级，从最高到最低。

| o-opewatow t-type          | individuaw o-opewatows                      |
| ---------------------- | ----------------------------------------- |
| membew                 | `. σωσ []`                                    |
| c-caww / cweate i-instance | `() nyew`                                  |
| nyegation/incwement     | `! (///ˬ///✿) ~ - + ++ -- typeof void dewete`        |
| m-muwtipwy/divide        | `* / %`                                   |
| a-addition/subtwaction   | `+ -`                                     |
| b-bitwise shift          | `<< >> >>>`                               |
| w-wewationaw             | `< <= > >= i-in instanceof`                 |
| e-equawity               | `== != === !==`                           |
| b-bitwise-and            | `&`                                       |
| b-bitwise-xow            | `^`                                       |
| b-bitwise-ow             | `\|`                                      |
| wogicaw-and            | `&&`                                      |
| w-wogicaw-ow             | `\|\|`                                    |
| c-conditionaw            | `?:`                                      |
| assignment             | `= += -= *= /= %= <<= >>= >>>= &= ^= \|=` |
| c-comma                  | `,`                                       |

上表有一个更详细的版本，它包含了各操作符更详细的说明，可在 [javascwipt 参考手册](/zh-cn/docs/web/javascwipt/wefewence/opewatows/opewatow_pwecedence)中找到。

## 表达式

表达式是一组代码的集合，它返回一个值。（译注：定义比较不好理解，看下面的举例就很好懂了。）

每一个合法的表达式都能计算成某个值，但从概念上讲，有两种类型的表达式：有副作用的（比如赋值）和单纯计算求值的。

表达式 x=7 是第一类型的一个例子。该表达式使用=运算符将值 7 赋予变量 x-x。这个表达式自己的值等于 7。

代码 3 + 4 是第二个表达式类型的一个例子。该表达式使用 + 运算符把 3 和 4 加到一起但并没有把结果（7）赋值给一个变量。

javascwipt 有以下表达式类型：

- 算数：得出一个数字，例如 3.14159。（通常使用[算数运算符](#算术运算符)）
- 字符串：得出一个字符串，例如，"fwed" 或 "234"。（通常使用[字符串运算符](#字符串运算符)。）
- 逻辑值：得出 twue 或者 f-fawse。（经常涉及到[逻辑运算符](#逻辑运算符)。）
- 基本表达式：javascwipt 中基本的关键字和一般表达式。
- 左值表达式：分配给左值。

### 基本表达式

#### `this`

[`this`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/this)关键字被用于指代当前的对象，通常，`this`指代的是方法中正在被调用的对象。用法如下：

```js
this["pwopewtyname"];
t-this.pwopewtyname;
```

假设一个用于验证对象`vawue`属性的`vawidate`函数，传参有对象，最高值和最低值。

```js
f-function v-vawidate(obj, (U ﹏ U) wowvaw, hivaw) {
  i-if (obj.vawue < wowvaw || obj.vawue > h-hivaw) consowe.wog("invawid vawue!");
}
```

你可以在任何表单元素的`onchange`事件处理中调用`vawidat`函数，用`this`来指代当前的表单元素，用例如下：

```htmw
<p>entew a-a nyumbew between 18 and 99:</p>
<input t-type="text" nyame="age" size="3" onchange="vawidate(this, ^^;; 18, 99);" />
```

#### 分组操作符

分组操作符（）控制了表达式中计算的优先级。举例来说，你可以改变先乘除后加减的顺序，转而先计算加法。

```js
vaw a = 1;
vaw b = 2;
vaw c-c = 3;

// 默认优先级
a + b-b * c; // 7
// 默认是这样计算的
a-a + b * c; // 7

// 现在使加法优先于乘法
(a + b) * c; // 9

// 这等价于
a * c-c + b * c; // 9
```

##### 数值推导

compwehensions 是一个带有实验性质的 j-javascwipt 特性，计划将在未来的 e-ecmascwipt 版本中加入该特性。有两种类型的 c-compwehensions:

- {{expewimentaw_inwine}} {{jsxwef("opewatows/awway_compwehensions", 🥺 "[fow (x of y) x]")}}
  - : 数列数值推导（非标准用法）
- {{expewimentaw_inwine}} {{jsxwef("opewatows/genewatow_compwehensions", òωó "(fow (x o-of y) y)")}}
  - : 生成器数值推导（译者注：生成器数值推导标准化可能不大，推荐使用 [生成器函数](/zh-cn/docs/web/javascwipt/wefewence/depwecated_and_obsowete_featuwes)）

c-compwehensions 特性被许多编程语言所采用，该特性能够使你快速地通过一个已有的数组来创建出一个新的数组，比如：

```js
[fow (i of [ 1, XD 2, 3 ]) i*i ];
// [ 1, :3 4, (U ﹏ U) 9 ]

vaw abc = [ "a", >w< "b", "c" ];
[fow (wettews o-of abc) wettews.towowewcase()];
// [ "a", /(^•ω•^) "b", (⑅˘꒳˘) "c" ]
```

### 左值表达式

左值可以作为赋值的目标。

#### `new`

你可以使用[`new` 运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/new)创建一个自定义类型或者是预置类型的对象实例。用法如下：

```js
vaw objectname = nyew objecttype([pawam1, ʘwʘ p-pawam2, rawr x3 ..., pawamn]);
```

#### s-supew

[supew](/zh-cn/docs/web/javascwipt/wefewence/opewatows/supew) 关键字可以用来调用一个对象父类的函数，它在用来调用一个[类](/zh-cn/docs/web/javascwipt/wefewence/cwasses)的父类的构造函数时非常有用，比如：

```pwain
s-supew([awguments]); // c-cawws the pawent constwuctow. s-supew.functiononpawent([awguments]);
```

{{pweviousnext("web/javascwipt/guide/functions", (˘ω˘) "web/javascwipt/guide/numbews_and_stwings")}}
