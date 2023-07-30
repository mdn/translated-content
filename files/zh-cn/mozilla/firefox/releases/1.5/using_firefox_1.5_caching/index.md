---
title: Using Firefox 1.5 caching
slug: Mozilla/Firefox/Releases/1.5/Using_Firefox_1.5_caching
---

{{FirefoxSidebar}}

## 介绍

[Firefox 1.5](/zh-CN/docs/Firefox_1.5_for_developers) 对整个 web 页面的一个浏览器会话进行了内存缓存，包括他们对 JavaScript 状态。在访问过的页面间后退和前进不需要页面加载同时保存 JavaScript 状态。这个特性，被称为 bfcache（“后退前进缓存”），使得页面导航（切换）非常快。这个状态缓存被保存直到用户关闭浏览器。

有时候，Firefox 不缓存页面。下面是一些页面不被缓存的常见的编程的原因：

- 页面使用 `unload` 或者 `beforeunload` 处理程序;
- 页面设置 "cache-control: no-store".
- 页面是 HTTPS 同时页面至少有一个以下设置：

  - "Cache-Control: no-cache"
  - "Pragma: no-cache"
  - 使用 "Expires: 0" 或者 "Expires" 设置相对于“Date”header 值的过去日期值 (除非指定 "Cache-Control: max-age=");

- 当用户导航跳离页面时页面还没有完全加载或者因为其他原因有等待（pending）的网络请求 (例如 `XMLHttpRequest`));
- 页面运行 IndexedDB 事件;
- 顶级页面包含 frames (例如 {{HTMLElement("iframe")}}) 因为这里列出的任何原因 而没有被缓存；
- 页面是在 frame 内而且用户在这个框架中加载一个新页面（在这种情况下，当用户离开这个页面，最后加载入 frames 的内容会被缓存）。

这个新的缓存特性改变了页面的加载行为，web 作者也许希望：

- 知晓被导航到的页面（当它从用户缓存中被加载）
- 在用户离开页面时定义页面行为 (同时还支持页面缓存)

两个新的浏览器事件使得用户可以做到这 2 个要求。

## 新的浏览器事件

如果你使用新的事件，你的页面在其他浏览器依然会正确显示 (我们已经测试了早期版本的 Firefox, Internet Explorer, Opera, 和 Safari)，而且在 Firefox 1.5 加载时将会使用新的缓存功能。

注意：直至 10-2009 开发版本的 Safari 添加了这些新的事件的支持 (见 [the webkit bug](https://bugs.webkit.org/show_bug.cgi?id=28758)).

标准的页面行为是：

1. 用户导航至一个页面
2. 当页面加载，行内 scripts 执行。
3. 一旦页面加载完毕， `onload` 事件执行。

有些页面包含第四步。如果一个页面使用 `unload` 或者 `beforeunload` 处理程序，当从页面导航离开时事件被执行。如果提供了一个`unload` 处理程序，页面将不会被缓存。

当一个用户导航至一个被缓存的页面，行内 scripts 和`onload` 处理程序将不会执行 (步骤 2 和 3), 因为在大多数情况下，这些 scripts 的影响（执行效果）已经被保存。

如果你想在每次用户导航到页面时都执行页面包含的 scripts 或者其他在页面加载期间执行的行为，或者你想知道什么时候用户导航至一个被缓存的页面，使用新的`pageshow` 事件。

如果你拥有当用户导航离页面是执行的行为，但是你想利用这个新的缓存功能，因此不想使用 unload 处理程序，使用新的 `pagehide` 事件

### pageshow 事件

这个事件和 `load` 事件一样的工作（效果）, 除了它每次页面加载是都执行 that it fires every time the page is loaded (然而 `load` 事件在 Firefox 1.5 中当页面从缓存中加载时不执行). 页面第一次加载时， `pageshow` 事件在 `load` 事件执行后执行。 `pageshow` 事件使用一个命名为`persisted` 的 boolean 属性，在初始加载时默认设置为 `false`。如果它不是初始加载，被设置为`true`（换句话说，但页面被缓存时它被设置为 true）.

在 `pageshow` 事件执行时，设置每次页面加载时你想要运行的任何的 JavaScript。

如果你将 JavaScript 函数作为 pageshow 事件的一部分调用，你可以通过调用`pageshow` 事件作为`load`事件的一部分确保在不同于 Firefox 1.5 的浏览器在页面加载时调用这些函数，如在本文后面所示的示例。

### pagehide 事件

如果你想定义当用户导航离页面时的行为，但是你不想使用 `unload` (这将导致页面不被缓存)，你可以使用新的 `pagehide` 事件。像 `pageshow` ， `pagehide` 事件使用一个命名为`persisted` 的属性。这个属性在页面未被浏览器缓存时设置为 `false` ，如果页面被浏览器缓存则设置为 `true` 。如果这个属性被设置为 `false`，如果有设置`unload` 处理程序的话，`unload` 事件在`pagehide` 事件执行后马上执行。

当页面初次加载，Firefox 1.5 试图按事件会发生相同的顺序模拟 load 事件。Frames 被作为顶级文档一样对待。如果页面包含 frames, 则当缓存当页面被加载：

- 每个 frame 的`pageshow` 事件在主文档的 `pageshow` 事件之前执行。
- 当用户导航离被缓存的页面，每个 frame 的`pagehide` 事件在主文档的 `pagehide` 事件之前执行。
- 发生在一个 frame 的导航，只有在受影响的 frame 触发事件。

## 示例代码

以下的示例演示了一个页面同时使用 `load` 和 `pageshow` 事件。这个示例页面行为如下：

- 在除了 Firefox 1.5 的浏览器，以下在每次页面加载都发生：`load` 事件触发`onLoad` 函数，该函数调用 `onPageShow` 函数 (如同一个附加功能).
- 在 Firefox 1.5，页面第一次加载时 `load` 事件和其他浏览器上运行一样。除了， `pageshow` 事件的执行和 `persisted` 设置为 `false`，没有额外的行动发生。
- 在 Firefox 1.5, 当页面从缓存中被加载，只有 `pageshow` 事件执行。随着 `persisted` 被设置为 `true`，只有 `onPageShow` 方法中的 JavaScript 行为被触发。

在这个例子中：

- 每次页面加载，页面计算并显示当前日期和时间。这个计算包括秒和毫秒，所以你可以很容易地测试功能。
- 第一次加载页面，光标放置在表单的 Name 字段。在 Firefox 1.5, 当用户导航回该页面，光标依然在页面导航离开时的位置。在其他浏览器，光标移回到 Name 字段。

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
  <head>
    <title>Order query Firefox 1.5 Example</title>
    <style type="text/css">
      body,
      p {
        font-family: Verdana, sans-serif;
        font-size: 12px;
      }
    </style>
    <script type="text/javascript">
      function onLoad() {
        loadOnlyFirst();
        onPageShow();
      }

      function onPageShow() {
        //calculate current time
        var currentTime = new Date();
        var year = currentTime.getFullYear();
        var month = currentTime.getMonth() + 1;
        var day = currentTime.getDate();
        var hour = currentTime.getHours();
        var min = currentTime.getMinutes();
        var sec = currentTime.getSeconds();
        var mil = currentTime.getMilliseconds();
        var displayTime =
          month +
          "/" +
          day +
          "/" +
          year +
          " " +
          hour +
          ":" +
          min +
          ":" +
          sec +
          ":" +
          mil;
        document.getElementById("timefield").value = displayTime;
      }

      function loadOnlyFirst() {
        document.zipForm.name.focus();
      }
    </script>
  </head>
  <body onload="onLoad();" onpageshow="if (event.persisted) onPageShow();">
    <h2>Order query</h2>

    <form
      name="zipForm"
      action="http://www.example.com/formresult.html"
      method="get">
      <label for="timefield">Date and time:</label>
      <input type="text" id="timefield" /><br />
      <label for="name">Name:</label>
      <input type="text" id="name" /><br />
      <label for="address">Email address:</label>
      <input type="text" id="address" /><br />
      <label for="order">Order number:</label>
      <input type="text" id="order" /><br />
      <input type="submit" name="submit" value="Submit Query" />
    </form>
  </body>
</html>
```

与此相反，如果以上页面不监听 `pageshow` 事件，所有的计算作为 `load` 事件的一部分（取而代之的是如下面的示例代码片段所示的编码），Firefox 1.5 中，当用户导航离页面时，光标位置及 date/time 会被缓存。当用户返回回该页面，缓存的 date/time 将会显示。

```html
<script>
function onLoad() {
 loadOnlyFirst();

//calculate current time
    var currentTime= new Date();
    var year = currentTime.getFullYear();
    var month = currentTime.getMonth()+1;
    var day = currentTime.getDate();
    var hour=currentTime.getHours();
    var min=currentTime.getMinutes();
    var sec=currentTime.getSeconds();
    var mil=currentTime.getMilliseconds();
    var displayTime = (month + "/" + day + "/" + year + " " +
        hour + ":" + min + ":" + sec + ":" + mil);
    document.getElementById("timefield").value=displayTime;
}

function loadOnlyFirst() {
    document.zipForm.name.focus();
}
</script>
</head>

<body onload="onLoad();">
```

## 开发 Firefox 扩展

Firefox 1.5 [extensions](/zh-CN/docs/Building_an_Extension) 需要允许缓存功能。如果你在开发一个兼容 1.5 及以前版本的 Firefox 扩展，确保它监听事件触发 `load` 可被缓存，监听的 `pageshow` 事件触发不应该被缓存。

例如，Firefox 的 Google 工具栏为了兼容 1.5 和更早的版本，应该为 autolink 监听 `load` 事件函数，为 PageRank 监听 `pageshow` 事件函数。
