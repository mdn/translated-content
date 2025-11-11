---
title: console
slug: Web/API/console
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

**`console`** 对象提供了浏览器控制台调试的接口（如：Firefox 的 [Web console](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html)）。在不同浏览器上它的工作方式可能不一样，但通常都会提供一套共性的功能。

`console` 对象可以从任何全局作用域中访问。例如：

```js
console.log("无法打开指定链接");
```

## 实例方法

- {{domxref("console/assert_static", "console.assert()")}}
  - : 如果第一个参数为 `false`，则将消息和堆栈跟踪记录到控制台。
- {{domxref("console.clear_static", "console.clear()")}}
  - : 清空控制台。
- {{domxref("console.count_static", "console.count()")}}
  - : 以参数为标识记录调用的次数，调用时在控制台打印标识以及调用次数。
- {{domxref("console.countReset_static", "console.countReset()")}}
  - : 重置指定标签的计数器值。
- {{domxref("console.debug_static", "console.debug()")}}
  - : 在控制台打印一条 `"debug"` 级别的消息。
- {{domxref("console.dir_static", "console.dir()")}}
  - : 显示一个由特定的 Javascript 对象列表组成的可交互列表。这个列表可以使用三角形隐藏和显示来审查子对象的内容。
- {{domxref("console.dirxml_static", "console.dirxml()")}}
  - : 打印 XML/HTML 元素表示的指定对象，否则显示 JavaScript 对象视图。
- {{domxref("console.error_static", "console.error()")}}
  - : 打印一条错误信息，使用方法可以参考[使用字符串替换](#使用字符串替换)。
- `console.exception()` {{Non-standard_inline}} {{deprecated_inline}}
  - : `error()` 方法的别称。
- {{domxref("console.group_static", "console.group()")}}
  - : 创建一个新的内联[分组](#在_console_中使用编组), 后续所有打印内容将会以子层级的形式展示。调用 `groupEnd()`来闭合组。
- {{domxref("console.groupCollapsed_static", "console.groupCollapsed()")}}
  - : 创建一个新的内联[分组](#在_console_中使用编组)。使用方法和 `group()` 相同，不同的是，`groupCollapsed()` 方法打印出来的内容默认是折叠的。调用`groupEnd()`来闭合组。
- {{domxref("console.groupEnd_static", "console.groupEnd()")}}
  - : 闭合当前内联[分组](#在_console_中使用编组)。
- {{domxref("console.info_static", "console.info()")}}
  - : 打印资讯类说明信息，使用方法可以参考[使用字符串替换](#使用字符串替换)。
- {{domxref("console.log_static", "console.log()")}}
  - : 打印内容的通用方法，使用方法可以参考[使用字符串替换](#使用字符串替换)。
- {{domxref("console.profile_static", "console.profile()")}} {{Non-standard_inline}}
  - : Starts the browser's built-in profiler (for example, the [Firefox performance tool](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html)). You can specify an optional name for the profile.
- {{domxref("console.profileEnd_static", "console.profileEnd()")}} {{Non-standard_inline}}
  - : Stops the profiler. You can see the resulting profile in the browser's performance tool (for example, the [Firefox performance tool](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html)).
- {{domxref("console.table_static", "console.table()")}}
  - : 将列表型的数据打印成表格。
- {{domxref("console.time_static", "console.time()")}}
  - : 启动一个以入参作为特定名称的[定时器](#定时器)，在显示页面中可同时运行的定时器上限为 10,000.
- {{domxref("console.timeEnd_static", "console.timeEnd()")}}
  - : 结束特定的[定时器](#定时器)并以毫秒打印其从开始到结束所用的时间。
- {{domxref("console.timeLog_static", "console.timeLog()")}}
  - : 打印特定[定时器](#定时器)所运行的时间。
- {{domxref("console.timeStamp_static", "console.timeStamp()")}} {{Non-standard_inline}}
  - : 添加一个标记到浏览器的 [Timeline](https://developer.chrome.google.cn/docs/devtools/performance/timeline-reference) 或 [Waterfall](https://profiler.firefox.com/docs/) 工具。
- {{domxref("console.trace_static", "console.trace()")}}
  - : 输出[堆栈跟踪](#堆栈跟踪)。
- {{domxref("console.warn_static", "console.warn()")}}
  - : 打印一个警告信息，可以使用[字符串替换](#使用字符串替换)和额外的参数。

## 示例

### 输出文本到控制台

console 对象中较多使用的主要有四个方法 {{domxref("console.log_static", "console.log()")}}、{{domxref("console.info_static", "console.info()")}}、{{domxref("console.warn_static", "console.warn()")}} 和{{domxref("console.error_static", "console.error()")}}。每一个结果在日志中都有不同的样式，可以使用浏览器控制台的日志筛选功能筛选出感兴趣的日志信息。

有两种途径使用这些方法，可以简单的传入一组对象，其中的字符串对象会被连接到一起，输出到控制台。或者可以传入包含零个或多个的替换的字符串，后面跟着被替换的对象列表。

#### 打印单个对象

使用日志记录方法的最简单方式是输出单个对象：

```js
const someObject = { str: "一些文本", id: 5 };
console.log(someObject);
```

打印结果类似下面：

```plain
{str:"一些文本", id:5}
```

#### 打印多个对象

可以打印多个对象，就像下面一样：

```js
const car = "道奇战马";
const someObject = { str: "一些文本", id: 5 };
console.info("我的第一辆车是", car, "。该对象为：", someObject);
```

打印结果类似下面：

```plain
我的第一辆车是 道奇战马。该对象为： {str:"一些文本", id:5}
```

#### 使用字符串替换

可以在传递给 console 的方法的时候使用下面的字符以期进行参数的替换。

| 替换字符串   | 描述                                                                                                     |
| ------------ | -------------------------------------------------------------------------------------------------------- |
| `%o` or `%O` | 打印 JavaScript 对象。在审阅器点击对象名字可展开更多对象的信息。                                         |
| `%d` or `%i` | 打印整数。支持数字格式化。例如，`console.log("Foo %.2d", 1.1)` 会输出有先导 0 的两位有效数字：`Foo 01`。 |
| `%s`         | 打印字符串。                                                                                             |
| `%f`         | 打印浮点数。支持格式化，比如 `console.log("Foo %.2f", 1.1)` 会输出两位小数：`Foo 1.10`                   |

> [!NOTE]
> Chrome 不支持精确格式化。

当要替换的参数类型和预期的打印类型不同时，参数会被转换成预期的打印类型。

```js
for (let i = 0; i < 5; i++) {
  console.log("你好，%s。你已经联系我 %d 次了。", "小明", i + 1);
}
```

输出样例如下所示：

```plain
你好，小明。你已经联系我 1 次了。
你好，小明。你已经联系我 2 次了。
你好，小明。你已经联系我 3 次了。
你好，小明。你已经联系我 4 次了。
你好，小明。你已经联系我 5 次了。
```

#### 为控制台定义样式

可以使用 `%c` 为打印内容定义样式：

```js
console.log(
  "This is %cMy stylish message",
  "color: yellow; font-style: italic; background-color: blue;padding: 2px",
);
```

指令前的文本不会受到影响，但指令后的文本将会使用参数中声明的 CSS 样式。

![Firefox 控制台中添加了样式的文本](css-styling.png)

`%c` 语法可用的属性如下 (至少在 Firefox 中是这样，别的浏览器会有诸多不同）：

- {{cssxref("background")}} 与其全写版本。
- {{cssxref("border")}} 与其全写版本。
- {{cssxref("border-radius")}}
- {{cssxref("box-decoration-break")}}
- {{cssxref("box-shadow")}}
- {{cssxref("clear")}} 和 {{cssxref("float")}}
- {{cssxref("color")}}
- {{cssxref("cursor")}}
- {{cssxref("display")}}
- {{cssxref("font")}} 与其全写版本。
- {{cssxref("line-height")}}
- {{cssxref("margin")}}
- {{cssxref("outline")}} 与其全写版本。
- {{cssxref("padding")}}
- {{cssxref("text-transform")}} 这类 `text-*` 属性
- {{cssxref("white-space")}}
- {{cssxref("word-spacing")}} 和 {{cssxref("word-break")}}
- {{cssxref("writing-mode")}}

> [!NOTE]
> 控制台信息的默认行为与行内元素相似。为了应用 `padding`、`margin` 这类效果，你应当将 `display` 属性设置为 `display: inline-block`。

### 在 console 中使用编组

可以使用嵌套组来把视觉上相关的元素合并，以协助组织你的输出。使用`console.group()`创建新的嵌套块，或者用`console.groupCollapsed()` 创建默认折叠的块，这种块需要点击闭合按钮来展开才能读到。

直接调用 `console.groupEnd()`.就可以退出当前组。比如下面的代码：

```js
console.log("This is the outer level");
console.group();
console.log("Level 2");
console.group();
console.log("Level 3");
console.warn("More of level 3");
console.groupEnd();
console.log("Back to level 2");
console.groupEnd();
console.debug("Back to the outer level");
```

执行结果：

![Firefox 控制台中的嵌套编组演示](console_groups_demo.png)

### 计时器

你可以使用计时器来计算一段特定操作的周期。使用 `console.time()` 方法以创建一个计时器，其唯一的参数表示了计时器的名字。使用 `console.timeEnd()` 方法以关闭计时器，并获取经过的毫秒数，其同样以计时器的名字作为参数。一个页面最多同时只能有 10000 个计数器运行。

示例：:

```js
console.time("answer time");
alert("Click to continue");
console.timeLog("answer time");
alert("Do a bunch of other stuff...");
console.timeEnd("answer time");
```

这段代码将会打印需要用户关闭 alert box 的时间，打印时间到控制台上，等用户关闭第二个 alert 后，把结束时间打印到控制台。

![Firefox 控制台的时间记录](console-timelog.png)

注意无论在开始还是结束的时候都会打印计时器的名字。

> [!NOTE]
> 如果使用计时器来记录网络时间请求的话下面的内容很重要。计时器将会报告传输过程的整个时间，而网络面板里显示的时间只计算了请求头部所需要的时间。如果启用了响应体日志记录，那么列出的响应头部和响应体组合的时间应该与在控制台输出中看到的时间相符。

### 堆栈跟踪

控制台也支持输出堆栈，其将会显示到调用 {{domxref("console.trace_static")}} 的点的调用路径。如下所示：

```js
function foo() {
  function bar() {
    console.trace();
  }
  bar();
}

foo();
```

控制台的输出：

![Firefox 控制台的堆栈跟踪](api-trace2.png)

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Firefox 开发者工具](https://firefox-source-docs.mozilla.org/devtools-user/index.html)
- [Web 控制台](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html)——Firefox Web 控制台如何处理控制台 API 的调用
- [about:debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html)——如何在调试移动设备时查看控制台输出
- [Google Chrome 开发者工具](https://developer.chrome.google.cn/docs/devtools/console/api/)
- [Microsoft Edge 开发者工具](https://learn.microsoft.com/zh-cn/archive/microsoft-edge/legacy/developer/)
- [Safari Web Inspector](https://developer.apple.com/library/archive/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/Console/Console.html)
