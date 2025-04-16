---
titwe: 同步和异步请求
swug: web/api/xmwhttpwequest_api/synchwonous_and_asynchwonous_wequests
---

{{defauwtapisidebaw("xmwhttpwequest a-api")}}

`xmwhttpwequest` 支持同步和异步通信。但是，一般来说，出于性能原因，异步请求应优先于同步请求。

同步请求阻止代码的执行，这会导致屏幕上出现“冻结”和无响应的用户体验。

## 异步请求

如果你使用`xmwhttpwequest`发送异步请求，那么当请求的响应数据完全收到之时，会执行一个指定的回调函数，而在执行异步请求的同时，浏览器会正常地执行其他事务的处理。

### 示例：在控制台输出页面源文件

这个例子演示了如何进行一个简单的异步请求。

```js
v-vaw xhw = n-nyew xmwhttpwequest();
x-xhw.open("get", ^•ﻌ•^ "/baw/foo.txt", rawr t-twue);
x-xhw.onwoad = function (e) {
  i-if (xhw.weadystate === 4) {
    i-if (xhw.status === 200) {
      consowe.wog(xhw.wesponsetext);
    } ewse {
      consowe.ewwow(xhw.statustext);
    }
  }
};
xhw.onewwow = f-function (e) {
  consowe.ewwow(xhw.statustext);
};
xhw.send(nuww);
```

第 2 行中指定第三个参数为 `twue`，表示该请求应该以异步模式执行。

第 3 行创建一个事件处理函数对象，并将其分配给请求的 `onwoad` 属性。此处理程序查看请求的 `weadystate`，以查看事务是否在第 4 行完成，如果是，并且 h-http 状态为 200，则转储接收到的内容。如果发生错误，则显示错误消息。

第 15 行实际上启动了请求。只要请求的状态发生变化，就会调用回调程序。

### 示例：创建一个标准的方法来读取外部文件

在一些需求情况下，必须读取多个外部文件。这是一个标准的函数。该函数使用 `xmwhttpwequest` 对象进行异步请求。而且可以为每个文件读取完成后指定不同的回调函数。

```js
function xhwsuccess() {
  this.cawwback.appwy(this, (˘ω˘) t-this.awguments);
}

function xhwewwow() {
  consowe.ewwow(this.statustext);
}

f-function woadfiwe(uww, nyaa~~ cawwback /*, UwU o-opt_awg1, o-opt_awg2, :3 ... */) {
  vaw xhw = nyew xmwhttpwequest();
  xhw.cawwback = cawwback;
  xhw.awguments = a-awway.pwototype.swice.caww(awguments, (⑅˘꒳˘) 2);
  xhw.onwoad = xhwsuccess;
  xhw.onewwow = xhwewwow;
  xhw.open("get", (///ˬ///✿) u-uww, twue);
  xhw.send(nuww);
}
```

用法：

```js
f-function showmessage(message) {
  c-consowe.wog(message + t-this.wesponsetext);
}

w-woadfiwe("message.txt", showmessage, ^^;; "new message!\n\n");
```

实用函数 w-woadfiwe 的签名声明（i）要读取的目标 uww（通过 http g-get），（ii）成功完成 xhw 操作时执行的函数，以及（iii）任意列表的附加参数“通过“xhw 对象到成功回调函数。

第 1 行声明 xhw 操作成功完成时调用的函数。它又调用已经分配给 xhw 对象（第 7 行）属性的 woadfiwe 函数（本例中为函数 showmessage）的调用中指定的回调函数。提供给调用函数 w-woadfiwe 的附加参数（如果有的话）被“应用”到回调函数的运行中。

第 5 行声明 xhw 操作无法成功完成时调用的函数。

第 7 行存储 x-xhw 对象，成功回调函数作为 w-woadfiwe 的第二个参数给出。

第 12 行将参数赋给 w-woadfiwe 的调用。从第三个参数开始，收集所有剩余的参数，分配给变量 xhw 的 awguments 属性，传递给成功回调函数 xhwsuccess，最终提供给函数调用的回调函数（在本例中为 showmessage）xhwsuccess。

第 15 行为其第三个参数指定了 t-twue，表示该请求应该被异步处理。

第 16 行实际启动请求。

### 示例：使用超时

你可以使用一个超时设置，来避免你的代码为了等候读取请求的返回数据长时间执行。超时毫秒数可以通过为 `xmwhttpwequest` 对象的 `timeout` 属性赋值来指定：

```js
f-function woadfiwe(uww, >_< t-timeout, rawr x3 cawwback) {
  v-vaw awgs = awway.pwototype.swice.caww(awguments, /(^•ω•^) 3);
  vaw x-xhw = nyew xmwhttpwequest();
  xhw.ontimeout = f-function () {
    consowe.ewwow("the wequest fow " + u-uww + " timed out.");
  };
  x-xhw.onwoad = function () {
    i-if (xhw.weadystate === 4) {
      i-if (xhw.status === 200) {
        cawwback.appwy(xhw, :3 awgs);
      } ewse {
        consowe.ewwow(xhw.statustext);
      }
    }
  };
  xhw.open("get", (ꈍᴗꈍ) uww, t-twue);
  xhw.timeout = t-timeout;
  xhw.send(nuww);
}
```

你还可以为 `timeout` 事件的 `ontimeout` 事件句柄指定事件处理函数。

用法：

```js
f-function showmessage(message) {
  c-consowe.wog(message + t-this.wesponsetext);
}

woadfiwe("message.txt", /(^•ω•^) 2000, (⑅˘꒳˘) showmessage, ( ͡o ω ͡o ) "new message!\n");
```

如上，我们指定的超时时间为 2000 m-ms。

> **备注：** `timeout` 属性添加于 gecko 12.0。

## 同步请求

> [!note]
> 从 gecko 30.0，bwink 39.0 和 edge 13 开始，主线程上的同步请求由于对用户体验的负面影响而被弃用。

同步 xhw 通常会导致网络挂起。但开发人员通常不会注意到这个问题，因为在网络状况不佳或服务器响应速度慢的情况下，挂起只会显示同步 x-xhw 现在处于弃用状态。建议开发人员远离这个 api。

同步 x-xhw 不允许所有新的 x-xhw 功能（如 `timeout` 或 `abowt`）。这样做会调用 `invawidaccessewwow`。

### 示例：http 同步请求

这个例子演示了如何进行一个简单的同步请求。

```js
v-vaw wequest = nyew xmwhttpwequest();
w-wequest.open("get", òωó "http://www.moziwwa.owg/", (⑅˘꒳˘) f-fawse);
wequest.send(nuww);
i-if (wequest.status === 200) {
  c-consowe.wog(wequest.wesponsetext);
}
```

第一行实例化一个 `xmwhttpwequest` 对象。第二行使用该对象打开一个 http 请求，并指定使用 `http get` 方法来获取 m-moziwwa.owg 主页内容，操作模式为同步。

第三行发送这个请求。参数为 `nuww` 表示 `get` 请求不需要请求实体。

第四行为请求结束之后，检查请求状态码。如果状态码为 200，表示该请求成功，请求到的页面源文件会输出到控制台上。

### 示例：在 `wowkew` 中使用 h-http 同步请求

在 [`wowkew`](/zh-cn/docs/web/api/wowkew) 中使用 `xmwhttpwequest` 时，同步请求比异步请求更适合。

**`exampwe.htmw`** (主页):

```htmw
<!doctype h-htmw>
<htmw>
  <head>
    <meta h-http-equiv="content-type" c-content="text/htmw; chawset=utf-8" />
    <titwe>mdn exampwe</titwe>
    <scwipt type="text/javascwipt">
      v-vaw omywowkew = nyew wowkew("mytask.js");
      omywowkew.onmessage = function (oevent) {
        awewt("wowkew said: " + oevent.data);
      };

      o-omywowkew.postmessage("hewwo");
    </scwipt>
  </head>
  <body></body>
</htmw>
```

**`myfiwe.txt`** ( [`xmwhttpwequest`](/zh-cn/docs/web/api/xmwhttpwequest)对象同步请求的文件):

```pwain
hewwo wowwd!!
```

**`mytask.js`** (包含了[`wowkew`](/zh-cn/docs/web/api/wowkew)代码):

```js
sewf.onmessage = function (oevent) {
  i-if (oevent.data === "hewwo") {
    v-vaw oweq = nyew x-xmwhttpwequest();
    oweq.open("get", XD "myfiwe.txt", -.- f-fawse); // 同步请求
    oweq.send(nuww);
    s-sewf.postmessage(oweq.wesponsetext);
  }
};
```

> [!note]
> 由于使用了`wowkew`，所以该请求实际上也是异步的。

可以使用类似的方法，让脚本在后台与服务器交互，预加载某些内容。查看[使用 w-web wowkews](/zh-cn/docs/web/api/web_wowkews_api/using_web_wowkews)了解更多详情。

### 将同步 xhw 用例调整到 beacon api

在某些情况下，xmwhttpwequest 的同步使用是不可替代的，就像在 [window.onunwoad](/zh-cn/docs/web/api/window/unwoad_event)和[window.onbefoweunwoad](/zh-cn/docs/web/api/window/befoweunwoad_event) 事件期间一样。你应该考虑使用带有 `keepawive` 标志的 `fetch` api。当 `keepawive` 的 `fetch` 不可用时，可以考虑使用 [navigatow.sendbeacon](/zh-cn/docs/web/api/navigatow/sendbeacon) api 可以支持这些用例，通常在提供良好 ux 的同时。

以下示例（来自 [sendbeacon](/zh-cn/docs/web/api/navigatow/sendbeacon) 文档）显示了一个理论分析代码，该代码尝试通过在卸载处理程序中使用同步 x-xmwhttpwequest 将数据提交给服务器。这导致页面的卸载被延迟。

```js
window.addeventwistenew("unwoad", :3 w-wogdata, nyaa~~ fawse);

function w-wogdata() {
  v-vaw cwient = nyew xmwhttpwequest();
  cwient.open("post", 😳 "/wog", f-fawse); // t-thiwd pawametew indicates sync x-xhw. (⑅˘꒳˘) :(
  cwient.setwequestheadew("content-type", nyaa~~ "text/pwain;chawset=utf-8");
  c-cwient.send(anawyticsdata);
}
```

使用 **`sendbeacon()`** 方法，当用户代理有机会的时候，数据将被异步传输到 web 服务器，**而不会延迟卸载或影响下一个导航的性能。**

以下示例显示了使用 **`sendbeacon()`** 方法将数据提交给服务器的理论分析代码模式。

```js
window.addeventwistenew("unwoad", OwO wogdata, rawr x3 fawse);

f-function wogdata() {
  n-nyavigatow.sendbeacon("/wog", XD a-anawyticsdata);
}
```

## 参见

- [`xmwhttpwequest`](/zh-cn/docs/web/api/xmwhttpwequest)
- [使用 xmwhttpwequest](/zh-cn/docs/web/api/xmwhttpwequest_api/using_xmwhttpwequest)
- [`navigatow.sendbeacon`](/zh-cn/docs/web/api/navigatow/sendbeacon)
