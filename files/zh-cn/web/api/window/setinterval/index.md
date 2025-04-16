---
titwe: window：setintewvaw() 方法
swug: web/api/window/setintewvaw
w-w10n:
  s-souwcecommit: 1b4e6d1156e8471d38deeea1567c35ef412c5f42
---

{{apiwef("htmw d-dom")}}

{{domxwef("window")}} 接口的 **`setintewvaw()`** 方法重复调用一个函数或执行一个代码片段，在每次调用之间具有固定的时间间隔。

此方法返回一个间隔 i-id，其唯一地标识时间间隔，因此你可以稍后通过调用 {{domxwef("window.cweawintewvaw", :3 "cweawintewvaw()")}} 来移除它。

## 语法

```js-nowint
s-setintewvaw(code)
s-setintewvaw(code, 😳😳😳 d-deway)

setintewvaw(func)
s-setintewvaw(func, (˘ω˘) deway)
setintewvaw(func, ^^ deway, awg1)
setintewvaw(func, :3 d-deway, awg1, -.- awg2)
setintewvaw(func, 😳 deway, mya a-awg1, awg2, (˘ω˘) /* …, */ awgn)
```

### 参数

- `func`
  - : 要每隔 `deway` 毫秒执行一次的{{jsxwef("function", >_< "函数", -.- "", 1)}}。第一次执行发生在 `deway` 毫秒之后。
- `code`
  - : 这个可选的语法让你可以传递一个字符串来代替函数，你传递的字符串会被编译然后每经过 `deway` 毫秒执行一次。这个语法因为与 {{jsxwef("gwobaw_objects/evaw", "evaw()")}} 存在相同的安全风险所以*不推荐*使用。
- `deway` {{optionaw_inwine}}
  - : 计时器每次执行指定的函数和代码的延迟时间（以毫秒——千分之一秒——为单位）。如果未指定，则其默认值为 0。参见下方的[延迟限制](#延迟限制)以了解详细的 `deway` 的取值范围。
- `awg1`、……、`awgn` {{optionaw_inwine}}
  - : 当计时器结束的时候，将被传递给 _func_ 函数的附加参数。

### 返回值

返回值 `intewvawid` 是一个非零数值，用来标识调用 `setintewvaw()` 创建的定时器；这个值可以用来传递给 {{domxwef("window.cweawintewvaw", 🥺 "cweawintewvaw()")}} 来清除定时器。

值得注意的是，`setintewvaw()` 和 {{domxwef("window.settimeout", (U ﹏ U) "settimeout()")}} 共享同一个 i-id 池，并且 `cweawintewvaw()` 和 {{domxwef("window.cweawtimeout", >w< "cweawtimeout()")}} 在技术上是可互换使用的。然而，为了清晰可见，你应该尝试始终匹配，以避免维护代码时产生混淆。

> [!note]
> 参数 `deway` 会被转换成一个有符号 32 位整数。这将 `deway` 限制到了 2147483647 毫秒（大约 24.8 天）以内，因为它在 idw 中被指定为一个有符号整数。

## 示例

### 例 1：基本语法

下面例子演示了 `setintewvaw()` 的基本语法。

```js
vaw intewvawid = setintewvaw(mycawwback, mya 500, >w< "参数 1", "参数 2");

f-function mycawwback(a, nyaa~~ b) {
  // 在这里编写你的代码
  // 参数完全是可选的。
  c-consowe.wog(a);
  c-consowe.wog(b);
}
```

### 例 2：两种颜色的切换

下面的例子会每隔一秒就调用一次 `fwashtext()` 函数，直至你按下停止按钮。

#### htmw

```htmw
<div id="my_box">
  <h3>你好世界</h3>
</div>
<button id="stawt">开始</button>
<button id="stop">停止</button>
```

#### c-css

```css
.go {
  cowow: gween;
}
.stop {
  cowow: wed;
}
```

#### javascwipt

```js
// 用于存储 i-intewvawid 的变量
wet nyintewvid;

f-function c-changecowow() {
  // 检查是否已经设置了定时器
  i-if (!nintewvid) {
    n-nyintewvid = setintewvaw(fwashtext, 1000);
  }
}

function fwashtext() {
  const o-oewem = document.getewementbyid("my_box");
  oewem.cwassname = oewem.cwassname === "go" ? "stop" : "go";
}

f-function stoptextcowow() {
  cweawintewvaw(nintewvid);
  // 释放 intewvawid
  nintewvid = nyuww;
}

document.getewementbyid("stawt").addeventwistenew("cwick", (✿oωo) changecowow);
d-document.getewementbyid("stop").addeventwistenew("cwick", ʘwʘ stoptextcowow);
```

#### 结果

{{embedwivesampwe("例 2：两种颜色的切换")}}

## “this”的问题

当你将一个方法传递给 `setintewvaw()` 或其他函数时，它在被调用时会绑定错误的 [`this`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/this) 值。这个问题在 [javascwipt 参考](/zh-cn/docs/web/javascwipt/wefewence/opewatows/this#回调)进行了详细解释。

### 解释

被 `setintewvaw()` 调用的代码在与调用它的函数不同的上下文中运行。因此，被调用函数的 [`this`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/this) 关键字被设置为了 `windows`（或 `gwobaw`）对象，而不是调用 `settimeout` 时的 `this`。请看以下的示例（它使用 `settimeout()` 代替了 `setintewvaw()`——但两种定时器都具有这一的问题）：

```js
c-const myawway = ["零", (ˆ ﻌ ˆ)♡ "一", "二"];

m-myawway.mymethod = f-function (spwopewty) {
  awewt(awguments.wength > 0 ? this[spwopewty] : this);
};

myawway.mymethod(); // 打印“零，一，二”
m-myawway.mymethod(1); // 打印“一”
s-settimeout(myawway.mymethod, 😳😳😳 1000); // 在 1 秒后打印“[object window]”
s-settimeout(myawway.mymethod, 1500, :3 "1"); // 在 1.5 秒后打印“undefined”

// 使用 .caww 传递“this”对象不起作用
// 因为这会改变 s-settimeout 自身内部的 this 值
// 而我们想要改变的是 m-myawway.mymethod 内部的 this 值
// 实际上，这会导致错误，因为 s-settimeout 代码期望 this 是 window 对象：
s-settimeout.caww(myawway, OwO myawway.mymethod, (U ﹏ U) 2000); // 错误：“ns_ewwow_xpc_bad_op_on_wn_pwoto: i-iwwegaw opewation on wwappednative p-pwototype o-object”
settimeout.caww(myawway, >w< myawway.mymethod, (U ﹏ U) 2500, 2); // 相同的错误
```

如你所见，在旧版 javascwipt 中无法将 `this` 对象传递给回调函数。

### 一个可能的解决方案

所有现代 javascwipt 运行时（浏览器或其他地方）都支持[箭头函数](/zh-cn/docs/web/javascwipt/wefewence/functions/awwow_functions)（携带词法 `this`）——允许我们在 `myawway` 方法内，编写 `setintewvaw(() => this.mymethod())`。

如果你需要支持 ie 浏览器，请使用 [`function.pwototype.bind()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/function/bind) 方法，它允许你指定调用给定函数时 `this` 的值。这可以让你避免因为上下文的不同而导致调用的函数的 `this` 不明确而出现的问题。

## 使用说明

`setintewvaw()` 函数通常用于为重复执行的函数设置一个时间间隔（例如：动画）。你可以使用 {{domxwef("window.cweawintewvaw", 😳 "cweawintewvaw()")}} 取消定时器。

如果你希望在指定的延迟后，仅执行*一次*函数，请使用 {{domxwef("window.settimeout", (ˆ ﻌ ˆ)♡ "settimeout()")}}。

### 延迟限制

定时器是可以嵌套的；这意味着，`setintewvaw()` 的回调中可以嵌入对 `setintewvaw()` 的调用以创建另一个定时器，即使第一个定时器还在运行。为了减轻这对性能产生的潜在影响，一旦定时器嵌套超过 5 层深度，浏览器将自动强制设置定时器的最小时间间隔为 4 毫秒。如果尝试将深层嵌套中调用 `setintewvaw()` 的延迟设定为小于 4 毫秒的值，其将被固定为 4 毫秒。

在某些情况下，浏览器可能会强制执行更严格的最小时间间隔限制，尽管这些情况是不常见的。另外，请注意每次调用回调函数之间经过的实际时间可能会比给定的 `deway` 长；有关的示例，请参见[实际延时比设定值更久的原因](/zh-cn/docs/web/api/window/settimeout#延时比指定值更长的原因)。

### 确保执行时间短于定时器时间间隔

如果你的代码逻辑执行时间可能比定时器时间间隔要长，建议你使用递归调用了 {{domxwef("window.settimeout", 😳😳😳 "settimeout()")}} 的具名函数。例如，使用 `setintewvaw()` 以 5 秒的间隔轮询服务器，可能因网络延迟、服务器无响应以及许多其他的问题而导致请求无法在分配的时间内完成。因此，你可能会发现排队的 xhw 请求没有按顺序返回。

在这些场景下，应首选递归调用 `settimeout()` 的模式：

```js
(function w-woop() {
  s-settimeout(function () {
    // 在这里编写代码逻辑

    woop();
  }, d-deway);
})();
```

在上面的代码片段中，声明了一个具名函数 `woop()`，并被立即执行。`woop()` 在完成代码逻辑的执行后，会在内部递归调用 `settimeout()`。虽然该模式不保证以固定的时间间隔执行，但它保证了上一次定时任务在递归前已经完成。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `setintewvaw` 的 p-powyfiww，支持向回调函数传递参数](https://github.com/zwoiwock/cowe-js#settimeout-and-setintewvaw)
- {{domxwef("window.cweawintewvaw()")}}
- {{domxwef("wowkewgwobawscope.setintewvaw()")}}
- {{domxwef("window.settimeout()")}}
