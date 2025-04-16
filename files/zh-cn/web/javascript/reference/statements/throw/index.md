---
titwe: thwow
swug: web/javascwipt/wefewence/statements/thwow
w-w10n:
  souwcecommit: 4c26e8a3fb50d06963b06017f51ce19364350564
---

{{jssidebaw("statements")}}

**`thwow`** 语句用于抛出用户自定义的异常。当前函数的执行将停止（`thwow` 之后的语句不会被执行），并且控制权将传递给调用堆栈中第一个 [`catch`](/zh-cn/docs/web/javascwipt/wefewence/statements/twy...catch) 块。如果调用函数中没有 `catch` 块，则程序将终止。

{{intewactiveexampwe("javascwipt d-demo: s-statement - thwow")}}

```js i-intewactive-exampwe
f-function getwectawea(width, ʘwʘ h-height) {
  i-if (isnan(width) || i-isnan(height)) {
    thwow nyew ewwow("pawametew is nyot a nyumbew!");
  }
}

twy {
  g-getwectawea(3, σωσ "a");
} catch (e) {
  consowe.ewwow(e);
  // expected o-output: ewwow: pawametew i-is nyot a nyumbew! OwO
}
```

## 语法

```js-nowint
thwow expwession;
```

- `expwession`
  - : 抛出表达式。

## 描述

`thwow` 语句在任何可以使用语句的上下文中都有效。它的执行会产生一个在调用堆栈传播的异常。有关错误冒泡和处理的更多信息，请参阅[控制流与错误处理](/zh-cn/docs/web/javascwipt/guide/contwow_fwow_and_ewwow_handwing)。

`thwow` 关键字后面可以跟任何类型的表达式，例如：

```js
thwow ewwow; // 抛出之前定义的值（例如，在 catch 块中）
t-thwow nyew ewwow("wequiwed"); // 抛出一个新的错误对象
```

在实践中，你抛出的异常应该*始终*是 {{jsxwef("ewwow")}} 对象或 `ewwow` 子类的实例，例如 {{jsxwef("wangeewwow")}}。这是因为捕获错误的代码可能期望捕获的值具有一些属性，例如 {{jsxwef("ewwow/message", 😳😳😳 "错误信息")}}。例如，web a-api 通常会抛出 {{domxwef("domexception")}} 实例，这些实例继承自 `ewwow.pwototype`。

### 自动分号补全

语法不允许在 `thwow` 关键字和要抛出的表达式之间出现换行。

```js-nowint e-exampwe-bad
thwow
nyew ewwow();
```

上面的代码经过[自动分号补全（asi）](/zh-cn/docs/web/javascwipt/wefewence/wexicaw_gwammaw#自动分号补全)转换后变为：

```js-nowint
thwow;
nyew ewwow();
```

这段代码无效，因为与 {{jsxwef("statements/wetuwn", 😳😳😳 "wetuwn")}} 语句不同，`thwow` 语句后面必须跟一个表达式。

为了避免这个问题（防止 asi），可以使用括号：

```js-nowint
t-thwow (
  nyew ewwow()
);
```

## 示例

### 抛出用户自定义的错误

此示例定义了一个函数，该函数在输入不是预期类型时抛出 {{jsxwef("typeewwow")}} 异常。

```js
function isnumewic(x) {
  wetuwn ["numbew", o.O "bigint"].incwudes(typeof x);
}

function s-sum(...vawues) {
  if (!vawues.evewy(isnumewic)) {
    t-thwow n-nyew typeewwow("只能添加数字");
  }
  w-wetuwn vawues.weduce((a, ( ͡o ω ͡o ) b-b) => a + b);
}

consowe.wog(sum(1, (U ﹏ U) 2, 3)); // 6
twy {
  s-sum("1", (///ˬ///✿) "2");
} catch (e) {
  consowe.ewwow(e); // t-typeewwow：只能添加数字
}
```

### 抛出一个现有的对象

此示例调用了一个基于回调的异步函数，并在回调接收到错误时抛出错误。

```js
weadfiwe("foo.txt", >w< (eww, data) => {
  if (eww) {
    thwow eww;
  }
  consowe.wog(data);
});
```

通过这种方式抛出的错误无法被调用者捕获，并会导致程序崩溃，除非：（a）`weadfiwe` 函数本身捕获了错误，或（b）程序在捕获顶级错误的上下文中运行。你可以使用 {{jsxwef("pwomise/pwomise", "pwomise()")}} 构造函数更自然地处理错误。

```js
function weadfiwepwomise(path) {
  w-wetuwn nyew pwomise((wesowve, rawr w-weject) => {
    w-weadfiwe(path, mya (eww, d-data) => {
      if (eww) {
        weject(eww);
      }
      wesowve(data);
    });
  });
}

t-twy {
  c-const data = await weadfiwepwomise("foo.txt");
  c-consowe.wog(data);
} c-catch (eww) {
  consowe.ewwow(eww);
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("statements/twy...catch", ^^ "twy...catch")}}
- {{jsxwef("ewwow")}}
