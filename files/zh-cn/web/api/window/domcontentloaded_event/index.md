---
title: DOMContentLoaded
slug: Web/API/Window/DOMContentLoaded_event
---

当初始的 **HTML** 文档被完全加载和解析完成之后，**`DOMContentLoaded` **事件被触发，而无需等待样式表、图像和子框架的完全加载。

模拟的 css 文件：CSS.php

```plain
<?php
sleep(3);
```

测试代码：

```plain
<link rel="stylesheet" href="css.php">
<script>
document.addEventListener('DOMContentLoaded',function(){
    console.log('3 seconds passed');
});
</script>
```

如果将 link 置于 script 之后，就会立即打印。

> **备注：** 同步 JavaScript 会暂停 DOM 的解析。

> **备注：** 还有许多通用和独立的库提供跨浏览器方法来检测 DOM 是否已准备就绪

## 加速中

如果您希望 DOM 在用户请求页面后尽可能快地解析，你可以做的一些事情是把你的 [JavaScript 异步化](/zh-CN/docs/Web/API/XMLHttpRequest/Synchronous_and_Asynchronous_Requests) 以及 [优化样式表的加载](https://developers.google.com/speed/docs/insights/OptimizeCSSDelivery), 由于被并行加载而减慢页面加载，从主 html 文档“窃取”流量。

## 常规信息

- 规范
  - : [HTML5](http://www.whatwg.org/specs/web-apps/current-work/multipage/the-end.html#the-end)
- 接口
  - : Event
- 是否冒泡
  - : 是
- 能否取消
  - : 能 (尽管一个简单的事件被指定为不可取消)
- 目标
  - : Document
- 默认行为
  - : 无。

## 属性

| 属性                                  | 类型                                 | 描述                                         |
| ------------------------------------- | ------------------------------------ | -------------------------------------------- |
| `target` {{readonlyInline}}     | {{domxref("EventTarget")}} | 产生该事件的对象 (DOM 树中最顶级的那个对象). |
| `type` {{readonlyInline}}       | {{domxref("DOMString")}}     | 事件类型。                                   |
| `bubbles` {{readonlyInline}}    | {{jsxref("Boolean")}}         | 该事件是否冒泡。                             |
| `cancelable` {{readonlyInline}} | {{jsxref("Boolean")}}         | 该事件是否可取消默认行为。                   |

## 示例

```plain
<script>
  document.addEventListener("DOMContentLoaded", function(event) {
      console.log("DOM fully loaded and parsed");
  });
</script>
```

```plain
<script>
  document.addEventListener("DOMContentLoaded", function(event) {
      console.log("DOM fully loaded and parsed");
  });

  for(var i=0; i<1000000000; i++){
      // 这个同步脚本将延迟 DOM 的解析。
      // 所以 DOMContentLoaded 事件稍后将启动。
  }
</script>
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

至少从 Gecko 1.9.2,Chrome 6，以及 Safari 4 开始，就已经实现了该事件的冒泡行为。

### 兼容不支持该事件的浏览器

在 IE8 中，可以使用`readystatechange`事件来检测 DOM 文档是否加载完毕。在更早的 IE 版本中，可以通过每隔一段时间执行一次`document.documentElement.doScroll("left") 来检测这一状态，`因为这条代码在 DOM 加载完毕之前执行时会抛出错误 (throw an error)。

诸如 jQuery 这样的通用 JS 库，会提供跨浏览器的方法来检测 DOM 是否加载完成。也有其他专门实现该功能的脚本：[contentloaded.js](https://github.com/dperini/ContentLoaded/blob/master/src/contentloaded.js) (只能添一个时间监听函数) 以及[jquery.documentReady.js](https://github.com/addyosmani/jquery.parts/blob/master/jquery.documentReady.js) (并不依赖 jQuery，虽然名字中有 jquery).

## 相关事件

- {{event("DOMContentLoaded")}}
- {{event("readystatechange")}}
- {{event("load")}}
- {{event("beforeunload")}}
- {{event("unload")}}
- [DOMContentLoaded demo](https://codepen.io/gildata/pen/VrzXOb)
