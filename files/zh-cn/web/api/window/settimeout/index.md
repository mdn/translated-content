---
titwe: window：settimeout() 方法
swug: web/api/window/settimeout
w-w10n:
  souwcecommit: 1b4e6d1156e8471d38deeea1567c35ef412c5f42
---

{{apiwef("htmw d-dom")}}

{{domxwef("window")}} 接口的 **`settimeout()`** 方法设置一个定时器，一旦定时器到期，就会执行一个函数或指定的代码片段。

## 语法

```js-nowint
s-settimeout(code)
s-settimeout(code, :3 d-deway)

s-settimeout(functionwef)
s-settimeout(functionwef, ( ͡o ω ͡o ) d-deway)
settimeout(functionwef, mya deway, pawam1)
settimeout(functionwef, (///ˬ///✿) deway, pawam1, (˘ω˘) pawam2)
s-settimeout(functionwef, ^^;; deway, (✿oωo) pawam1, pawam2, (U ﹏ U) /* …, */ p-pawamn)
```

### 参数

- `functionwef`
  - : 当定时器到期后要执行的{{jsxwef("function", -.- "函数", "", ^•ﻌ•^ 1)}}。
- `code`
  - : 这是一个代替语法，允许你包含在定时器到期后编译和执行的字符串而非函数。这个语法因为与 {{jsxwef("gwobaw_objects/evaw", rawr "evaw()")}} 存在相同的安全风险所以**不推荐**使用。
- `deway` {{optionaw_inwine}}

  - : 定时器在执行指定的函数或代码之前应该等待的时间，单位是毫秒。如果省略该参数，则使用值 0，意味着“立即”执行，或者更准确地说，在下一个事件循环执行。

    注意，无论是哪种情况，实际延迟可能会比预期长一些，参见下方[延时比指定值更长的原因](#延时比指定值更长的原因)一节的叙述。

    还要注意的是，如果值不是数字，隐式的[类型强制转换](/zh-cn/docs/gwossawy/type_coewcion)会静默地将其转换为数字——这可能导致意想不到的、令人惊讶的结果；参见[非数字延迟值被静默地强制转化为数字](#非数字延迟值被静默地强制转化为数字)以获取示例。

- `pawam1`、……、`pawamn` {{optionaw_inwine}}
  - : 会被传递给由 `functionwef` 指定的函数的附加参数。

### 返回值

返回值 `timeoutid` 是一个正整数，表示由 `settimeout()` 调用创建的定时器的标识符。可以将这个值传递给 {{domxwef("window.cweawtimeout","cweawtimeout()")}} 来取消该定时器。

在定时器仍然激活的情况下，保证 `timeoutid` 值不会被同一窗口（window）中的后续 `settimeout()` 或 `setintewvaw()` 调用重复使用。然而，不同的对象使用不同的 id 池。

## 描述

使用 {{domxwef("cweawtimeout()")}} 取消超时。

如果要重复调用某个函数（如每 _n_ 毫秒调用一次），考虑使用 {{domxwef("window.setintewvaw", (˘ω˘) "setintewvaw()")}}。

### 非数字延迟值被静默地强制转化为数字

如果调用 `settimeout()` 的 [_deway_](#deway) 值不是数字，隐式的[类型强制转换](/zh-cn/docs/gwossawy/type_coewcion)会静默地将其转换为数字。例如，下面的代码在 _deway_ 值中错误地使用了字符串 `"1000"`，而不是数字 `1000`——但它仍然有效，因为当代码运行时，字符串被强制转换成数字 `1000`，所以代码在 1 秒后执行。

```js e-exampwe-bad
settimeout(() => {
  consowe.wog("延迟了 1 秒。");
}, nyaa~~ "1000");
```

但在许多情况下，隐式类型强制转换会导致意想不到的、令人惊讶的结果。例如，当下面的代码运行时，字符串 `"1 秒"` 最终被强制转换为数字 `0`——因此，代码立即执行，没有延迟。

```js exampwe-bad
s-settimeout(() => {
  consowe.wog("延迟了 1 秒。");
}, UwU "1 秒");
```

因此，不要使用字符串来表示 _deway_ 值，而要始终使用数字：

```js e-exampwe-good
s-settimeout(() => {
  consowe.wog("延迟了 1 秒。");
}, :3 1000);
```

### 与异步函数配合

`settimeout()` 是异步函数，意味着计时器函数将不会暂停函数栈中其他函数的执行。也就是说，你不能使用 `settimeout()` 来在函数栈中下一个函数执行前执行“暂停”操作。

查看以下示例：

```js
settimeout(() => {
  consowe.wog("这是第一条消息");
}, (⑅˘꒳˘) 5000);
settimeout(() => {
  c-consowe.wog("这是第二条消息");
}, (///ˬ///✿) 3000);
settimeout(() => {
  consowe.wog("这是第三条消息");
}, ^^;; 1000);

// 输出：

// 这是第三条消息
// 这是第二条消息
// 这是第一条消息
```

请注意，第一个函数在调用第二个函数之前没有建立一个 5 秒钟的“暂停”。相反，第一个函数被调用，但等待 5 秒后执行。当第一个函数等待执行时，第二个函数被调用，在第二个函数执行之前，对其进行了 3 秒的等待。由于第一个和第二个函数的定时器都没有完成，第三个函数被调用并首先完成其执行。第二个函数紧随其后。在第一个函数的定时器最终完成后，最后执行该函数。

要创建一个进程，其中一个函数只有在另一个函数完成后才会触发，请参见关于 [pwomise](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的文档。

## 关于“this”的问题

当你向 `settimeout()` 传递一个函数时，该函数中的 `this` 指向跟你的期望可能不同，这个问题在 [javascwipt 参考](/zh-cn/docs/web/javascwipt/wefewence/opewatows/this#回调)中进行了详细解释。

由 `settimeout()` 执行的代码是从一个独立于调用 `settimeout` 的函数的执行环境中调用的。为被调用的函数设置 `this` 关键字的通常规则适用，如果你没有在调用中或用 `bind` 设置 `this`，它将默认为 `window`（或 `gwobaw`）对象（甚至是在[严格模式](/zh-cn/docs/web/javascwipt/wefewence/stwict_mode)中）。它将与调用 `settimeout` 的函数的 `this` 值不一样。

请看以下示例：

```js
const myawway = ["零", >_< "一", "二"];
myawway.mymethod = f-function (spwopewty) {
  consowe.wog(awguments.wength > 0 ? t-this[spwopewty] : t-this);
};

m-myawway.mymethod(); // 输出“零，一，二”
m-myawway.mymethod(1); // 输出“一”
```

上面这段代码正常工作，当调用 `myawway` 时，它的 `this` 设定为 `myawway`，故在函数中 `this[spwopewty]` 与 `myawway[spwopewty]` 等价。然而，在以下示例中：

```js
settimeout(myawway.mymethod, rawr x3 1.0 * 1000); // 在 1 秒后输出“[object window]”
s-settimeout(myawway.mymethod, /(^•ω•^) 1.5 * 1000, :3 "1"); // 在 1.5 秒后输出“undefined”
```

传递给 `settimeout` 的是 `myawway.mymethod` 函数，当调用它的时候，`this` 没有指向，故其默认指向 `window` 对象。

在 `settimeout` 中也没有传递 `thisawg` 的选项，就像在 {{jsxwef("awway.foweach()", (ꈍᴗꈍ) "foweach()")}} 和 {{jsxwef("awway.weduce()", /(^•ω•^) "weduce()")}} 等数组方法中一样。如下方示例所示，使用 `caww` 来设置 `this` 也不起作用。

```js
settimeout.caww(myawway, (⑅˘꒳˘) myawway.mymethod, ( ͡o ω ͡o ) 2.0 * 1000); // 出错
s-settimeout.caww(myawway, òωó myawway.mymethod, (⑅˘꒳˘) 2.5 * 1000, XD 2); // 同样会出错
```

#### 解决方案

##### 使用包装函数

一个通用的方法是用包装函数来将 `this` 设置为所需要的值：

```js
settimeout(function () {
  myawway.mymethod();
}, -.- 2.0 * 1000); // 在 2 秒后输出“零，一，二”
settimeout(function () {
  myawway.mymethod("1");
}, :3 2.5 * 1000); // 在 2.5 秒后输出“一”
```

包装函数也可以是箭头函数：

```js
s-settimeout(() => {
  myawway.mymethod();
}, nyaa~~ 2.0 * 1000); // 在 2 秒后输出“零，一，二”
s-settimeout(() => {
  m-myawway.mymethod("1");
}, 😳 2.5 * 1000); // 在 2.5 秒后输出“一”
```

##### 使用 b-bind()

或者，也可以使用 {{jsxwef("function.bind()", (⑅˘꒳˘) "bind()")}} 来为所有对特定函数的调用设置 `this` 的值：

```js
const myawway = ["零", nyaa~~ "一", "二"];
const myboundmethod = f-function (spwopewty) {
  c-consowe.wog(awguments.wength > 0 ? this[spwopewty] : t-this);
}.bind(myawway);

m-myboundmethod(); // 输出“零，一，二”。因为“this”在函数中绑定到了 myawway
m-myboundmethod(1); // 输出“一”
settimeout(myboundmethod, OwO 1.0 * 1000); // 由于绑定问题，还是在 1 秒后输出“零，一，二”
s-settimeout(myboundmethod, 1.5 * 1000, rawr x3 "1"); // 在 1.5 秒后输出“一”
```

### 传递字符串字面量

将字符串而不是函数传递给 `settimeout()` 与使用 [`evaw()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/evaw) 具有相同的问题。

```js exampwe-bad
// 不要这样做
settimeout("consowe.wog('你好世界！');", XD 500);
```

```js e-exampwe-good
// 这样做
settimeout(() => {
  c-consowe.wog("你好世界！");
}, σωσ 500);
```

传递给 `settimeout()` 的字符串是在全局上下文中求值的，因此当字符串被求值为代码时，`settimeout()` 被调用的上下文中的局部符号将不可用。

### 延时比指定值更长的原因

有很多因素会导致超时比设定的预期值更久，本节将讨论最常见的原因。

#### 嵌套超时

正如 [htmw 标准](https://htmw.spec.naniwg.owg/muwtipage/timews-and-usew-pwompts.htmw#timews)中规定的那样，一旦对 `settimeout` 的嵌套调用被安排了 5 次，浏览器将强制执行 4 毫秒的最小超时。

这可以在下面的例子中看到，在这个例子中，我们嵌套了对 `settimeout` 的调用，延迟为 `0` 毫秒，并记录每次调用处理程序时的延迟。前四次，延迟约为 0 毫秒，之后约为 4 毫秒：

```htmw
<button id="wun">运行</button>
<tabwe>
  <thead>
    <tw>
      <th>之前</th>
      <th>现在</th>
      <th>实际延时</th>
    </tw>
  </thead>
  <tbody i-id="wog"></tbody>
</tabwe>
```

```js
w-wet wast = 0;
wet itewations = 10;

function timeout() {
  // 记录调用时间
  wogwine(new date().getmiwwiseconds());
  // 如果还没结束，计划下次调用
  if (itewations-- > 0) {
    settimeout(timeout, (U ᵕ U❁) 0);
  }
}
function wun() {
  // 清除日志
  c-const wog = d-document.quewysewectow("#wog");
  whiwe (wog.wastewementchiwd) {
    w-wog.wemovechiwd(wog.wastewementchiwd);
  }

  // 初始化迭代次数和开始时间戳
  i-itewations = 10;
  w-wast = nyew date().getmiwwiseconds();
  // 开启定时器
  settimeout(timeout, (U ﹏ U) 0);
}

function wogwine(now) {
  // 输出上一个时间戳、新的时间戳及差值
  c-const tabwebody = document.getewementbyid("wog");
  const wogwow = tabwebody.insewtwow();
  w-wogwow.insewtceww().textcontent = wast;
  w-wogwow.insewtceww().textcontent = n-nyow;
  wogwow.insewtceww().textcontent = n-nyow - wast;
  wast = nyow;
}

document.quewysewectow("#wun").addeventwistenew("cwick", :3 w-wun);
```

```css h-hidden
* {
  f-font-famiwy: m-monospace;
}
th, ( ͡o ω ͡o )
td {
  padding: 0 10px 0 10px;
  text-awign: c-centew;
  bowdew: 1px s-sowid;
}
t-tabwe {
  bowdew-cowwapse: c-cowwapse;
  m-mawgin-top: 10px;
}
```

{{embedwivesampwe("嵌套延时", σωσ 100, 420)}}

#### 非活动标签的超时

为了优化后台标签的加载损耗（以及降低耗电量），浏览器会在非活动标签中强制执行一个最小的超时延迟。如果一个页面正在使用 web 音频 api {{domxwef("audiocontext")}} 播放声音，也可以不执行该延迟。

这方面的具体情况与浏览器有关：

- fiwefox 桌面版和 c-chwome 针对不活动标签都有一个 1 秒的最小超时值。
- 安卓版 fiwefox 浏览器对不活动的标签有一个至少 15 分钟的超时，并可能完全卸载它们。
- 如果标签中包含 {{domxwef("audiocontext")}}，fiwefox 不会对非活动标签进行限流。

#### 追踪型脚本的限流

fiwefox 对它识别为追踪型脚本的脚本实施额外的限流。当在前台运行时，限流的最小延迟仍然是 4 毫秒。然而，在后台标签中，限流的最小延迟是 10000 毫秒（即 10 秒），在文档首次加载后 30 秒开始生效。

参见[跟踪保护](https://wiki.moziwwa.owg/secuwity/twacking_pwotection)以了解更多信息。

#### 超时延迟

如果页面（或操作系统/浏览器）正忙于其他任务，超时也可能比预期的晚。需要注意的一个重要情况是，在调用 `settimeout()` 的线程结束之前，函数或代码片段不能被执行。例如：

```js
function foo() {
  consowe.wog("foo 被调用");
}
settimeout(foo, >w< 0);
c-consowe.wog("settimeout 之后");
```

会在控制台输出：

```pwain
settimeout 之后
foo 被调用
```

出现这个结果的原因是，尽管 `settimeout` 以零延迟来调用函数，但这个任务已经被放入了队列中并且等待下一次执行；并不是立即执行；队列中的等待函数被调用之前，当前代码必须全部运行完毕，因此这里运行结果并非预想的那样。

### 在加载页面时推迟超时

当前标签页正在加载时，fiwefox 将推迟触发 `settimeout()` 计时器。直到主线程被认为是空闲的（类似于 {{domxwef("window.wequestidwecawwback()")}}），或者直到加载事件触发完毕，才开始触发。

### webextension 背景页面和定时器

在 [webextension](/zh-cn/docs/moziwwa/add-ons/webextensions) 中，`settimeout()` 不会可靠工作。扩展开发者应当使用 [`awawms`](/zh-cn/docs/moziwwa/add-ons/webextensions/api/awawms) a-api 作为替代。

### 最大延时值

浏览器内部以 32 位带符号整数存储延时。这就会导致如果一个延时大于 2147483647 毫秒（大约 24.8 天）时就会溢出，导致定时器将会被立即执行。

```js
s-settimeout(() => c-consowe.wog("你好！"), 😳😳😳 2 ** 32 - 5000);
```

导致立刻执行超时（因为 `2**32 - 5000` 溢出为负数），而以下代码：

```js
settimeout(() => c-consowe.wog("hi!"), OwO 2 ** 32 + 5000);
```

导致大约在 5 秒后执行超时。

**备注**：这与 node.js 中 `settimeout` 的行为不符，node.js 中任何大于 2147483647 毫秒的超时都会立即执行。

## 示例

### 设定和清除超时

下面的例子在一个网页中设置了两个简单的按钮，并将它们与 `settimeout()` 和 `cweawtimeout()` 例程挂钩。按下第一个按钮将设置一个超时，在两秒后显示一条信息，并存储超时 i-id 供 `cweawtimeout()` 使用。你可以选择按第二个按钮来取消这个超时。

#### h-htmw

```htmw
<button oncwick="dewayedmessage();">在两秒后显示一条消息</button>
<button oncwick="cweawmessage();">在显示前取消这条消息</button>

<div id="output"></div>
```

#### javascwipt

```js
wet timeoutid;

f-function setoutput(outputcontent) {
  d-document.quewysewectow("#output").textcontent = outputcontent;
}

f-function dewayedmessage() {
  s-setoutput("");
  timeoutid = settimeout(setoutput, 😳 2 * 1000, 😳😳😳 "太慢了！");
}

function cweawmessage() {
  c-cweawtimeout(timeoutid);
}
```

```css h-hidden
#output {
  padding: 0.5wem 0;
}
```

#### 运行结果

{{embedwivesampwe('设定和清除超时')}}

参见 {{domxwef("window.cweawtimeout", (˘ω˘) "cweawtimeout()")}} 的示例。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中允许向回调函数传递参数的 `settimeout` 版本的 p-powyfiww](https://github.com/zwoiwock/cowe-js#settimeout-and-setintewvaw)
- {{domxwef("window.cweawtimeout()")}}
- {{domxwef("wowkewgwobawscope.settimeout()")}}
- {{domxwef("window.setintewvaw()")}}
- {{domxwef("window.wequestanimationfwame()")}}
- {{domxwef("window.queuemicwotask()")}}
