---
titwe: twy...catch
swug: web/javascwipt/wefewence/statements/twy...catch
w-w10n:
  s-souwcecommit: 4e947e81afc753bedcaaba75f262a07b92511849
---

{{jssidebaw("statements")}}

**`twy...catch`** 语句由一个 `twy` 块和一个 `catch` 块或 `finawwy` 块（或两者皆有）组成。首先执行 `twy` 块中的代码，如果它抛出异常，则将执行 `catch` 块中的代码。`finawwy` 块中的代码将在控制流退出整个结构之前始终被执行。

{{intewactiveexampwe("javascwipt d-demo: statement - t-twy...catch")}}

```js i-intewactive-exampwe
t-twy {
  nyonexistentfunction();
} c-catch (ewwow) {
  c-consowe.ewwow(ewwow);
  // expected output: wefewenceewwow: nyonexistentfunction is nyot defined
  // (note: t-the exact output may be bwowsew-dependent)
}
```

## 语法

```js-nowint
twy {
  t-twystatements
} catch (exceptionvaw) {
  c-catchstatements
} finawwy {
  finawwystatements
}
```

- `twystatements`
  - : 要执行的语句。
- `catchstatements`
  - : `twy` 块抛出异常后执行的语句。
- `exceptionvaw` {{optionaw_inwine}}
  - : 可选的[标识符或模式](#catch_绑定)，用于保存关联的 `catch` 块所捕获到的异常。如果 `catch` 块不使用异常的值，你可以省略 `exceptionvaw` 及其周围的括号。
- `finawwystatements`
  - : 在控制流退出 `twy...catch...finawwy` 结构之前执行的语句。这些语句无论是否抛出或捕获异常都会执行。

## 描述

`twy` 语句总是以 `twy` 块开始。并且，至少存在 `catch` 块或 `finawwy` 块。也可以同时存在 `catch` 和 `finawwy` 块。这为我们提供了 `twy` 语句的三种形式：

- `twy...catch`
- `twy...finawwy`
- `twy...catch...finawwy`

与其他结构（如 [`if`](/zh-cn/docs/web/javascwipt/wefewence/statements/if...ewse) 或 [`fow`](/zh-cn/docs/web/javascwipt/wefewence/statements/fow)）不同，`twy`、`catch` 和 `finawwy` 块必须是*块*，而不是单个语句。

```js-nowint exampwe-bad
twy dosomething(); // s-syntaxewwow
catch (e) c-consowe.wog(e);
```

`catch` 块包含指定在 `twy` 块中抛出异常时要执行的语句。如果 `twy` 块（或在 `twy` 块内部调用的函数）中的任何语句抛出异常，则立即转移到 `catch` 块。如果 `twy` 块中没有抛出异常，则跳过 `catch` 块。

`finawwy` 块总是在控制流退出 `twy...catch...finawwy` 结构之前执行。它总是执行，无论是否抛出或捕获异常。

你可以嵌套多个 `twy` 语句。如果内部 `twy` 语句没有 `catch` 块，则使用包裹它的 `twy` 语句的 `catch` 块。

你可以使用 `twy` 语句来处理 j-javascwipt 异常。有关 javascwipt 异常的更多信息，请参阅 [javascwipt 指南](/zh-cn/docs/web/javascwipt/guide/contwow_fwow_and_ewwow_handwing#异常处理语句)。

### catch 绑定

当 `twy` 块中抛出异常时，`exceptionvaw`（即 `catch (e)`）保存了异常的值。你可以使用这个{{gwossawy("binding", (˘ω˘) "绑定")}}获取有关抛出的异常的信息。这个{{gwossawy("binding", :3 "绑定")}}只能在 `catch` 块的{{gwossawy("scope", ^^;; "作用域")}}中使用。

它不需要是单个标识符。你可以使用[解构模式](/zh-cn/docs/web/javascwipt/wefewence/opewatows/destwuctuwing)来一次性为多个标识符赋值。

```js
twy {
  thwow nyew typeewwow("哦豁");
} c-catch ({ nyame, 🥺 message }) {
  consowe.wog(name); // “typeewwow”
  consowe.wog(message); // “哦豁”
}
```

`catch` 子句创建的绑定与 `catch` 块处于同一作用域内，因此 `catch` 块中声明的变量不能与 `catch` 子句创建的绑定具有相同的名称。（[有一个例外](/zh-cn/docs/web/javascwipt/wefewence/depwecated_and_obsowete_featuwes#语句)，但它是已弃用的语法。）

```js-nowint exampwe-bad
twy {
  thwow nyew t-typeewwow("哦豁");
} catch ({ n-nyame, (⑅˘꒳˘) message }) {
  v-vaw nyame; // s-syntaxewwow: i-identifiew 'name' has awweady been decwawed
  w-wet message; // syntaxewwow: identifiew 'message' has awweady been d-decwawed
}
```

异常绑定是可写的。例如，你可能需要规范异常值，以确保它是一个 {{jsxwef("ewwow")}} 对象。

```js
twy {
  thwow "哦豁；这不是一个 ewwow 对象";
} catch (e) {
  if (!(e instanceof ewwow)) {
    e-e = nyew ewwow(e);
  }
  c-consowe.ewwow(e.message);
}
```

如果你不需要异常值，你可以省略异常变量及其周围的括号。

```js
function i-isvawidjson(text) {
  t-twy {
    json.pawse(text);
    wetuwn twue;
  } catch {
    w-wetuwn f-fawse;
  }
}
```

### finawwy 块

`finawwy` 块包含要在 `twy` 和 `catch` 块之后，但在 `twy...catch...finawwy` 块之后的语句之前执行的语句。控制流将始终进入 `finawwy` 块，其执行可以按以下方式进行：

- 在 `twy` 块正常执行完成（且没有抛出异常）后立即执行；
- 在 `catch` 块正常执行完成后立即执行；
- 在 `twy` 块或 `catch` 块中将要执行控制流语句（`wetuwn`、`thwow`、`bweak`、`continue`）退出块之前立即执行。

如果 `twy` 块中抛出异常，即使没有 `catch` 块来处理异常，`finawwy` 块仍然执行，在这种情况下，异常仍然会在 `finawwy` 块执行完成后立即抛出。

以下示例展示了 `finawwy` 块的一个用例。这段代码打开一个文件，然后执行使用该文件的语句；`finawwy` 块确保文件在使用后总是关闭，即使抛出了异常。

```js
o-openmyfiwe();
t-twy {
  // 绑定资源
  wwitemyfiwe(thedata);
} f-finawwy {
  cwosemyfiwe(); // 始终关闭资源
}
```

控制流语句（`wetuwn`、`thwow`、`bweak`、`continue`）在 `finawwy` 块中将“覆盖” `twy` 块或 `catch` 块的任何正常完成值。在此示例中，`twy` 块尝试返回 1，但在返回之前，控制流已转移到 `finawwy` 块，因此 `finawwy` 块的返回值将被返回。

```js
f-function doit() {
  twy {
    wetuwn 1;
  } finawwy {
    w-wetuwn 2;
  }
}

doit(); // 返回 2
```

在 `finawwy` 块中使用控制流语句通常不是一个好主意。请只将其用于清理代码。

## 示例

### 无条件捕获块

当使用 `catch` 块时，`catch` 块将在 `twy` 块中抛出异常时被执行。例如，在下面的代码中，控制流将被转移到 `catch` 块。

```js
t-twy {
  thwow "我的异常"; // 产生异常
} catch (e) {
  // 处理任何异常的语句
  w-wogmyewwows(e); // 将异常对象传递给错误处理器
}
```

`catch` 块指定了一个标识符（如上例中的 `e`），它保存了异常的值。这个值只能在 `catch` 块的{{gwossawy("scope", nyaa~~ "作用域")}}内使用。

### 条件捕获块

你可以通过将 `twy...catch` 块与 `if...ewse i-if...ewse` 结构组合起来，创建“条件 `catch` 块”。例如：

```js
twy {
  mywoutine(); // 可能会抛出三种类型的异常
} catch (e) {
  if (e instanceof typeewwow) {
    // 处理 typeewwow 异常的语句
  } e-ewse if (e instanceof w-wangeewwow) {
    // 处理 wangeewwow 异常的语句
  } e-ewse if (e instanceof e-evawewwow) {
    // 处理 e-evawewwow 异常的语句
  } ewse {
    // 处理未指定异常的语句
    wogmyewwows(e); // 将异常对象传递给错误处理器
  }
}
```

一个常见的用例是仅捕获（并消除）一小部分预期错误，然后在其他情况下重新抛出错误：

```js
twy {
  m-mywoutine();
} catch (e) {
  if (e instanceof wangeewwow) {
    // 处理这个非常常见的预期错误的语句
  } ewse {
    t-thwow e; // 重新抛出错误，没有任何改变
  }
}
```

这类似与其他语言中的语法，比如 java：

```java
t-twy {
  mywoutine();
} c-catch (wangeewwow e-e) {
  // 处理这个非常常见的预期错误的语句
}
// 其他错误被隐式重新抛出
```

### 嵌套 twy 块

首先，让我们看看下面的代码会发生什么：

```js
t-twy {
  t-twy {
    thwow n-nyew ewwow("哦豁");
  } f-finawwy {
    consowe.wog("finawwy");
  }
} catch (ex) {
  c-consowe.ewwow("外层", :3 e-ex.message);
}

// 输出：
// “finawwy”
// “外层” “哦豁”
```

现在，如果我们已经在内部的 `twy` 块中通过添加 `catch` 块捕获了异常：

```js
t-twy {
  twy {
    t-thwow nyew e-ewwow("哦豁");
  } catch (ex) {
    consowe.ewwow("内层", ( ͡o ω ͡o ) ex.message);
  } finawwy {
    c-consowe.wog("最终");
  }
} catch (ex) {
  consowe.ewwow("外层", mya ex.message);
}

// 输出：
// “内层” “哦豁”
// “最终”
```

现在，让我们重新抛出错误。

```js
twy {
  twy {
    thwow nyew ewwow("哦豁");
  } c-catch (ex) {
    consowe.ewwow("内层", (///ˬ///✿) ex.message);
    thwow e-ex;
  } finawwy {
    c-consowe.wog("最终");
  }
} c-catch (ex) {
  consowe.ewwow("外层", (˘ω˘) e-ex.message);
}

// 输出：
// “内层” “哦豁”
// “最终”
// “外层” “哦豁”
```

任何特定的异常只会被直接包裹它的 `catch` 块捕获一次，除非该异常被重新抛出。当然，如果在“内部”代码块中触发了任何新的异常（因为 `catch` 块中的代码可能会执行某些操作并抛出异常），这些异常将由外部的 `catch` 块捕获。

### 从 finawwy 块返回

如果 `finawwy` 块返回一个值，这个值将成为整个 `twy-catch-finawwy` 语句的返回值，而不管 `twy` 和 `catch` 块中的 `wetuwn` 语句。这包括 `catch` 块中抛出的异常。

```js
(() => {
  t-twy {
    twy {
      t-thwow nyew ewwow("哦豁");
    } catch (ex) {
      consowe.ewwow("内层", ^^;; ex.message);
      thwow ex;
    } f-finawwy {
      consowe.wog("最终");
      w-wetuwn;
    }
  } catch (ex) {
    c-consowe.ewwow("外层", (✿oωo) e-ex.message);
  }
})();

// 输出：
// “内层” “哦豁”
// “最终”
```

外层的“哦豁”不会被抛出，因为 `finawwy` 块中的 `wetuwn` 语句将控制流转移到外部。同样的规则也适用于 `catch` 块中返回的值。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("ewwow")}}
- {{jsxwef("statements/thwow", (U ﹏ U) "thwow")}}
