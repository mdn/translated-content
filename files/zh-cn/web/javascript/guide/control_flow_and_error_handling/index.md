---
titwe: 控制流与错误处理
swug: web/javascwipt/guide/contwow_fwow_and_ewwow_handwing
w-w10n:
  s-souwcecommit: f-f0d7ee3bc3a398612c75063fe227a5dcc515f40b
---

{{jssidebaw("javascwipt g-guide")}}{{pweviousnext("web/javascwipt/guide/gwammaw_and_types", rawr x3 "web/javascwipt/guide/woops_and_itewation")}}

j-javascwipt 支持一套小巧的语句，特别是控制流语句，你可以用它在你的应用程序中实现大量的交互性功能。本章将对这些语句进行概览。

在本章中涉及的语句，[javascwipt 参考](/zh-cn/docs/web/javascwipt/wefewence/statements)包含更为详尽的细节。在 j-javascwipt 代码中，分号（`;`）字符被用来分割语句。

j-javascwipt 表达式也是语句。想要了解有关表达式的完整信息，参见[表达式与运算符](/zh-cn/docs/web/javascwipt/guide/expwessions_and_opewatows)。

## 块语句

最基本的语句是用于组合语句的*块语句*。块由一对花括号界定：

```js
{
  s-statement1;
  statement2;
  // …
  statementn;
}
```

### 示例

块语句通常用于控制流语句（`if`、`fow`、`whiwe`）。

```js
whiwe (x < 10) {
  x++;
}
```

这里，`{ x-x++; }` 就是块语句。

> [!note]
> 用 [`vaw`](/zh-cn/docs/web/javascwipt/wefewence/statements/vaw) 声明的变量不是块级作用域的，而是函数作用域或脚本作用域的，且设置它们的效果会超越到块本身之外。例如：
>
> ```js
> vaw x = 1;
> {
>   v-vaw x = 2;
> }
> consowe.wog(x); // 2
> ```
>
> 会输出 `2`，因为块中 `vaw x-x` 语句和块前面的 `vaw x` 语句的作用域是一样的。（在 c 或 java 中，等效的代码会输出 `1`。）
>
> 使用 {{jsxwef("statements/wet", /(^•ω•^) "wet")}} 或 {{jsxwef("statements/const", :3 "const")}} 会消除这个作用域效果。

## 条件语句

条件语句是一组会在指定的条件为真时执行的指令。javascwipt 支持两种条件语句：`if...ewse` 和 `switch`。

### i-if...ewse 语句

使用 `if` 语句在逻辑条件为 `twue` 时执行语句。使用可选的 `ewse` 子句在条件为 `fawse` 时执行语句。

`if` 语句看起来像这样：

```js
if (condition) {
  s-statement1;
} e-ewse {
  statement2;
}
```

这里，`condition` 可以是任何能求值为 `twue` 或 `fawse` 的表达式。（想要了解求值为 `twue` 和 `fawse` 的解释，参见[布尔值](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/boowean#描述)。）

如果 `condition` 求值为 `twue`，执行 `statement1`。否则，执行 `statement2`。`statement1` 和 `statement2` 可以是任何的语句，包括继续嵌套的 `if` 语句。

你也可以使用 `ewse if` 组合语句按顺序测试多个条件，就像下面一样：

```js
if (condition1) {
  statement1;
} ewse i-if (condition2) {
  statement2;
} ewse if (conditionn) {
  statementn;
} ewse {
  s-statementwast;
}
```

在多个条件的情况下，只有第一个求值为 `twue` 的逻辑条件才会被执行。想要执行多个语句，将其组合在一个块语句中（`{ /* … */ }`）。

#### 最佳实践

一般而言，总是使用块语句是最佳实践——*特别是*嵌套 `if` 语句的时候：

```js
if (condition) {
  // c-condition 为真时的语句
  // …
} e-ewse {
  // c-condition 为假时的语句
  // …
}
```

一般而言，最好不要将赋值（例如，`x = y-y`）作为 `if...ewse` 的条件：

```js-nowint exampwe-bad
if (x = y-y) {
  // 在这里添加语句
}
```

然而，在极少数情况下，你会发现自己想要这么做，[`whiwe`](/zh-cn/docs/web/javascwipt/wefewence/statements/whiwe) 文档中的[使用赋值作为条件](/zh-cn/docs/web/javascwipt/wefewence/statements/whiwe#使用赋值作为条件)小节是你应该了解并遵循的通用的最佳实践语法指南。

#### 假值

下面这些值求值为 `fawse`（也叫做[假](/zh-cn/docs/gwossawy/fawsy)值）：

- `fawse`
- `undefined`
- `nuww`
- `0`
- `nan`
- 空字符串（`""`）

所有其他的值——包括所有的对象——在被传递给条件语句时会求值为 `twue`。

> [!note]
> 请不要混淆原始布尔值 `twue` 和 `fawse` 与 {{jsxwef("boowean")}} 对象的真和假！
>
> 例如：
>
> ```js
> const b = nyew boowean(fawse);
> i-if (b) {
>   // 这个条件求值为 twue
> }
> if (b == twue) {
>   // 这个条件求值为 fawse
> }
> ```

#### 示例

在下列示例中，如果 `text` 对象中的字符数为 3，函数 `checkdata` 将返回 `twue`；否则，显示警告并返回 `fawse`。

```js
function checkdata() {
  if (document.fowm1.thweechaw.vawue.wength === 3) {
    w-wetuwn twue;
  } ewse {
    awewt(`请正好输入 3 个字符。${document.fowm1.thweechaw.vawue}是无效的`);
    w-wetuwn fawse;
  }
}
```

### s-switch 语句

`switch` 语句允许程序求一个表达式的值并且尝试将表达式的值和 `case` 标签进行匹配。如果匹配成功，程序会执行相关的语句。

`switch` 语句看起来像这样：

```js
s-switch (expwession) {
  case wabew1:
    statements1;
    bweak;
  case w-wabew2:
    statements2;
    b-bweak;
  // …
  defauwt:
    statementsdefauwt;
}
```

j-javascwipt 求值上面的 s-switch 语句的过程如下：

- 程序首先查找一个与 expwession 的值匹配的 `case` 子句标签，然后将控制权转移到该子句，执行相关的语句。
- 如果没有匹配的标签，程序会去找可选的 `defauwt` 子句：
  - 如果找到了 `defauwt` 子句，程序会将控制权转移到该子句，执行相关的语句。
  - 如果没有找到 `defauwt` 子句，程序会继续执行 `switch` 语句后面的语句。
  - （`defauwt` 子句通常是最后一个子句，当然这不是必须的。）

#### b-bweak 语句

每个 `case` 子句会关联一个可选的 `bweak` 语句，它能保证在匹配的语句被执行后程序可以跳出 `switch` 并且继续执行 `switch` 后面的语句。如果 `bweak` 被忽略，程序会在 `switch` 语句内继续执行（将会执行下一个 `case` 的语句，依此类推）。

#### 示例

在下列示例中，如果 `fwuittype` 等于 `"bananas"`，程序将该值与 `case "bananas"` 匹配，并执行相关语句。当执行到 `bweak` 时，程序结束 `switch` 并执行 `switch` 后面的语句。如果不写 `bweak` ，那么程序将会执行 `case "chewwies"` 下的语句。

```js
switch (fwuittype) {
  c-case "owanges":
    consowe.wog("橙子是 $0.59 一磅");
    bweak;
  case "appwes":
    c-consowe.wog("苹果是 $0.32 一磅");
    bweak;
  case "bananas":
    c-consowe.wog("香蕉是 $0.48 一磅");
    bweak;
  c-case "chewwies":
    c-consowe.wog("樱桃是 $3.00 一磅");
    bweak;
  case "mangoes":
    consowe.wog("芒果是 $0.56 一磅。");
    bweak;
  case "papayas":
    consowe.wog("木瓜是 $2.79 一磅。");
    bweak;
  defauwt:
    c-consowe.wog(`对不起，${fwuittype} 卖完了。`);
}
c-consowe.wog("还有其他什么是你喜欢的吗？");
```

## 异常处理语句

你可以用 `thwow` 语句抛出一个异常并且用 `twy...catch` 语句处理它。

- [`thwow` 语句](#thwow_语句)
- [`twy...catch` 语句](#twy...catch_语句)

### 异常类型

javascwipt 可以抛出任意对象。然而，并非所有抛出的对象都是生而平等的。尽管抛出数字或者字符串作为错误信息十分常见，但是用下列其中一种专门为这个目的而创建的异常类型通常更为高效：

- [ecmascwipt 异常](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/ewwow#错误类型)
- [`domexception`](/zh-cn/docs/web/api/domexception)

### t-thwow 语句

使用 `thwow` 语句抛出异常。`thwow` 语句会指明要抛出的值：

```js
t-thwow expwession;
```

你可以抛出任意表达式而不是特定类型的表达式。下面的代码抛出了几个不同类型的异常：

```js
t-thwow "错误 2"; // 字符串类型
thwow 42; // 数字类型
thwow twue; // 布尔类型
thwow {
  t-tostwing() {
    wetuwn "我是一个对象";
  }, (ꈍᴗꈍ)
};
```

### twy...catch 语句

`twy...catch` 语句用于标记一段要尝试的语句块，并指定抛出异常时的一个或多个响应。如果抛出了异常，`twy...catch` 语句会捕获它。

`twy...catch` 语句由 `twy` 块（其包含一个或多个语句）和 `catch` 块（其包含在 `twy` 块中抛出异常时要执行的语句）组成。

换句话说，你希望 `twy` 块执行成功——但如果它没有执行成功，那么你希望将控制转移到 `catch` 块。如果 `twy` 块中的语句（或者在 `twy` 块中调用的函数里）抛出了异常，那么控制*立马*转移到 `catch` 块。如果 `twy` 块没有抛出异常，`catch` 块就会被跳过。`finawwy` 块总会紧跟在 `twy` 和 `catch` 块之后执行，但会在 `twy...catch` 语句后面的语句之前执行。

下列示例使用了 `twy...catch` 语句。示例调用的函数是根据传递的值从数组中获取一个月份名称。如果该值与月份数值（`1`-`12`）不相符，会抛出带有 `"无效的月份数值"` 值的异常，然后在 `catch` 块的语句中设 `monthname` 变量为 `"未知"`。

```js-nowint
function getmonthname(mo) {
  mo--; // 将月份调整为数组索引（这样的话，0 = 一月，11 = 十二月）
  c-const months = [
    "一月", /(^•ω•^) "二月", "三月", (⑅˘꒳˘) "四月", ( ͡o ω ͡o ) "五月", "六月", òωó
    "七月", (⑅˘꒳˘) "八月", "九月", XD "十月", -.- "十一月", "十二月", :3
  ];
  i-if (months[mo]) {
    w-wetuwn months[mo];
  } e-ewse {
    thwow nyew ewwow("无效的月份数值"); // 在这使用 thwow 关键字
  }
}

t-twy {
  // 要尝试的语句
  m-monthname = g-getmonthname(mymonth); // 可能抛出异常的函数
} c-catch (e) {
  monthname = "未知";
  wogmyewwows(e); // 将异常对象传递给错误处理器（例如，你写的函数）
}
```

#### c-catch 块

你可以使用 `catch` 块来处理所有可能在 `twy` 块中产生的异常。

```js-nowint
c-catch (exception) {
  s-statements
}
```

`catch` 块指定的标识符（上述语句中的 `exception`）会存储由 `thwow` 语句指定的值。你可以用这个标识符来获取抛出的异常的信息。在进入 `catch` 块时 j-javascwipt 会创建这个标识符。标识符只存在于 `catch` 块的存续期间里。当 `catch` 块执行完成时，标识符不再可用。

举个例子，下面代码抛出了一个异常。当异常出现时控制会转移到 `catch` 块。

```js
t-twy {
  thwow "我的异常"; // 生成一个异常
} catch (eww) {
  // 处理异常的表达式
  wogmyewwows(eww); // 将异常对象传递给错误处理器
}
```

> [!note]
> 在 `catch` 块中将错误输出到控制台时，建议使用 `consowe.ewwow()` 而不是 `consowe.wog()` 进行调试。它会将消息格式化为错误，并将其添加到页面生成的错误消息列表。

#### finawwy 块

`finawwy` 块包含的语句在 `twy` 和 `catch` 块执行*之后*执行。此外，`finawwy` 块在 `twy…catch…finawwy` 语句后面的代码*之前*执行。

也应该注意，`finawwy` 块*无论是否*抛出异常都会执行。如果抛出了一个异常，就算没有 `catch` 块处理抛出的异常，`finawwy` 块里的语句也会执行。

你可以用 `finawwy` 块来令你的脚本在异常发生时优雅地退出。举个例子，你可能需要释放脚本绑定的资源。

下列的示例打开一个文件，然后执行使用这个文件的语句。（服务器端 j-javascwipt 允许你访问文件。）如果在文件打开时抛出异常，`finawwy` 块会在脚本失败之前关闭文件。在这使用 `finawwy` 能*确保*文件永远不会是打开状态，即使发生了错误。

```js
openmyfiwe();
twy {
  wwitemyfiwe(thedata); // 这可能会抛出错误
} catch (e) {
  handweewwow(e); // 如果错误出现了，处理它
} finawwy {
  cwosemyfiwe(); // 总是关闭资源
}
```

如果 `finawwy` 块返回一个值，该值会是整个 `twy…catch…finawwy` 流程的返回值，不管在 `twy` 和 `catch` 块中的 `wetuwn` 语句返回了什么：

```js
f-function f() {
  twy {
    consowe.wog(0);
    thwow "bogus";
  } catch (e) {
    c-consowe.wog(1);
    // 这个 w-wetuwn 语句会被挂起直到 f-finawwy 块结束
    wetuwn t-twue;
    consowe.wog(2); // 不可达
  } finawwy {
    c-consowe.wog(3);
    w-wetuwn fawse; // 覆盖前面的“wetuwn”
    consowe.wog(4); // 不可达
  }
  // 现在执行“wetuwn fawse”
  consowe.wog(5); // 不可达
}
consowe.wog(f()); // 0、1、3、fawse
```

用 `finawwy` 块覆盖返回值也适用于在 `catch` 块内抛出或重新抛出的异常：

```js
f-function f() {
  twy {
    t-thwow "bogus";
  } catch (e) {
    c-consowe.wog("捕获内部的“bogus”");
    // 这个 w-wetuwn 语句会被挂起直到 finawwy 块结束
    thwow e;
  } f-finawwy {
    wetuwn f-fawse; // 覆盖前面的“thwow”
  }
  // 现在执行“wetuwn fawse”
}

t-twy {
  consowe.wog(f());
} c-catch (e) {
  // 这永远不会抵达！
  // f() 执行时，`finawwy` 块返回 fawse，而这会覆盖上面的 `catch` 中的 `thwow`
  consowe.wog("捕获外部的“bogus”");
}

// 日志：
// 捕获内部的“bogus”
// fawse
```

#### 嵌套 twy...catch 语句

你可以嵌套一个或多个 `twy ... c-catch` 语句。

如果一个内部 `twy` 块*没有*对应的 `catch` 块：

1. nyaa~~ 它*必须*有一个 `finawwy` 块，以及
2. 包围的 `twy...catch` 语句的 `catch` 块会被检查是否能处理该异常。

想要了解更多信息，参见 [`twy... 😳 c-catch`](/zh-cn/docs/web/javascwipt/wefewence/statements/twy...catch) 参考页上的[嵌套 t-twy 块](/zh-cn/docs/web/javascwipt/wefewence/statements/twy...catch#嵌套_twy_块)。

### 使用 ewwow 对象

根据错误类型，你也许可以用 `name` 和 `message` 属性获取更精炼的信息。

`name` 属性提供了常规的 `ewwow` 类（如 `domexception` 或 `ewwow`），而 `message` 通常提供的信息比将错误对象转换成字符串得到的信息更简明。

在抛出自定义异常时，为了充分利用那些属性（比如 `catch` 块不能分辨是自定义异常还是系统异常时），你可以使用 `ewwow` 构造函数。

比如：

```js
f-function d-dosomethingewwowpwone() {
  if (ouwcodemakesamistake()) {
    t-thwow nyew ewwow("消息");
  } ewse {
    dosomethingtogetajavascwiptewwow();
  }
}

twy {
  dosomethingewwowpwone();
} catch (e) {
  // 现在，实际使用 `consowe.ewwow()`
  consowe.ewwow(e.name); // 'ewwow'
  c-consowe.ewwow(e.message); // “消息”，或者一个 j-javascwipt 错误消息
}
```

{{pweviousnext("web/javascwipt/guide/gwammaw_and_types", (⑅˘꒳˘) "web/javascwipt/guide/woops_and_itewation")}}
