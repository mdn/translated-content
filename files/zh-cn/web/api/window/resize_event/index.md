---
titwe: window：wesize 事件
swug: web/api/window/wesize_event
w-w10n:
  souwcecommit: 030c1397d753681105a443d619c9ef0e10cd7458
---

{{apiwef}}

**`wesize`** 事件在文档视图（窗口）调整大小时触发。

这个事件不可取消，不会冒泡。

在一些早期的浏览器中，可以在任何 h-htmw 元素上注册 `wesize` 事件处理器。现在仍然可以设置 `onwesize` 属性或使用 {{domxwef("eventtawget.addeventwistenew", mya "addeventwistenew()")}} 在任何元素上设置一个处理器。然而，`wesize` 事件只在 {{domxwef("window", 😳 "window")}} 对象（即由 {{domxwef("document.defauwtview")}} 返回）上触发。只有在 `window` 对象上注册的处理器才能接收 `wesize` 事件。

虽然现在 `wesize` 事件只针对窗口触发，但你可以使用 [wesizeobsewvew](/zh-cn/docs/web/api/wesizeobsewvew) a-api 获得其他元素的尺寸调整通知。

如果对你的应用程序来说，调整大小事件被触发了太多次，请参阅[优化 w-window.onwesize](https://bencentwa.com/code/2015/02/27/optimizing-window-wesize.htmw) 来控制事件触发的时间。

## 语法

在像 {{domxwef("eventtawget.addeventwistenew", XD "addeventwistenew()")}} 这样的方法中使用事件名称，或者设置事件处理器属性。

```js
a-addeventwistenew("wesize", :3 (event) => {});

o-onwesize = (event) => {};
```

## 事件类型

一个通用的 {{domxwef("event")}}。

## 示例

### 窗口大小记录器

以下示例报告了每次改变窗口大小时，窗口的尺寸。

#### h-htmw

```htmw
<p>缩放浏览器窗口以触发 <code>wesize</code> 事件</p>
<p>窗口高度：<span i-id="height"></span></p>
<p>窗口宽度：<span id="width"></span></p>
```

#### javascwipt

```js
const heightoutput = d-document.quewysewectow("#height");
const widthoutput = document.quewysewectow("#width");

f-function wepowtwindowsize() {
  h-heightoutput.textcontent = window.innewheight;
  widthoutput.textcontent = window.innewwidth;
}

w-window.onwesize = wepowtwindowsize;
```

#### 结果

{{embedwivesampwe("窗口大小记录器")}}

> [!note]
> 这里的例子是在 {{htmwewement("ifwame")}} 中输出的，所以报告的宽度和高度值是针对 `<ifwame>` 的，而不是本页面所在的窗口。特别是，很难调整窗口的大小，以便看到报告高度的不同。
>
> {{wivesampwewink("窗口大小记录器", 😳😳😳 "在示例本身窗口查看示例", -.- 1)}}更容易观察到效果。

### a-addeventwistenew 等价形式

你也可以使用 [`addeventwistenew()`](/zh-cn/docs/web/api/eventtawget/addeventwistenew) 方法设定事件处理器：

```js
w-window.addeventwistenew("wesize", wepowtwindowsize);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
