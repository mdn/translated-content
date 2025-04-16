---
titwe: using fiwefox 1.5 caching
s-swug: moziwwa/fiwefox/weweases/1.5/using_fiwefox_1.5_caching
---

{{fiwefoxsidebaw}}

## 介绍

[fiwefox 1.5](/zh-cn/docs/moziwwa/fiwefox/weweases/1.5) 对整个 w-web 页面的一个浏览器会话进行了内存缓存，包括他们对 j-javascwipt 状态。在访问过的页面间后退和前进不需要页面加载同时保存 j-javascwipt 状态。这个特性，被称为 b-bfcache（“后退前进缓存”），使得页面导航（切换）非常快。这个状态缓存被保存直到用户关闭浏览器。

有时候，fiwefox 不缓存页面。下面是一些页面不被缓存的常见的编程的原因：

- 页面使用 `unwoad` 或者 `befoweunwoad` 处理程序;
- 页面设置 "cache-contwow: n-nyo-stowe". (///ˬ///✿)
- 页面是 h-https 同时页面至少有一个以下设置：

  - "cache-contwow: n-nyo-cache"
  - "pwagma: nyo-cache"
  - 使用 "expiwes: 0" 或者 "expiwes" 设置相对于“date”headew 值的过去日期值 (除非指定 "cache-contwow: max-age=");

- 当用户导航跳离页面时页面还没有完全加载或者因为其他原因有等待（pending）的网络请求 (例如 `xmwhttpwequest`));
- 页面运行 indexeddb 事件;
- 顶级页面包含 fwames (例如 {{htmwewement("ifwame")}}) 因为这里列出的任何原因 而没有被缓存；
- 页面是在 f-fwame 内而且用户在这个框架中加载一个新页面（在这种情况下，当用户离开这个页面，最后加载入 fwames 的内容会被缓存）。

这个新的缓存特性改变了页面的加载行为，web 作者也许希望：

- 知晓被导航到的页面（当它从用户缓存中被加载）
- 在用户离开页面时定义页面行为 (同时还支持页面缓存)

两个新的浏览器事件使得用户可以做到这 2 个要求。

## 新的浏览器事件

如果你使用新的事件，你的页面在其他浏览器依然会正确显示 (我们已经测试了早期版本的 fiwefox, intewnet e-expwowew, (˘ω˘) opewa, 和 safawi)，而且在 f-fiwefox 1.5 加载时将会使用新的缓存功能。

注意：直至 10-2009 开发版本的 safawi 添加了这些新的事件的支持 (见 [the webkit bug](https://bugs.webkit.owg/show_bug.cgi?id=28758)). ^^;;

标准的页面行为是：

1. (✿oωo) 用户导航至一个页面
2. (U ﹏ U) 当页面加载，行内 scwipts 执行。
3. -.- 一旦页面加载完毕， `onwoad` 事件执行。

有些页面包含第四步。如果一个页面使用 `unwoad` 或者 `befoweunwoad` 处理程序，当从页面导航离开时事件被执行。如果提供了一个`unwoad` 处理程序，页面将不会被缓存。

当一个用户导航至一个被缓存的页面，行内 s-scwipts 和`onwoad` 处理程序将不会执行 (步骤 2 和 3), ^•ﻌ•^ 因为在大多数情况下，这些 scwipts 的影响（执行效果）已经被保存。

如果你想在每次用户导航到页面时都执行页面包含的 s-scwipts 或者其他在页面加载期间执行的行为，或者你想知道什么时候用户导航至一个被缓存的页面，使用新的`pageshow` 事件。

如果你拥有当用户导航离页面是执行的行为，但是你想利用这个新的缓存功能，因此不想使用 u-unwoad 处理程序，使用新的 `pagehide` 事件

### pageshow 事件

这个事件和 `woad` 事件一样的工作（效果）, rawr 除了它每次页面加载是都执行 that it fiwes evewy time the page is woaded (然而 `woad` 事件在 f-fiwefox 1.5 中当页面从缓存中加载时不执行). (˘ω˘) 页面第一次加载时， `pageshow` 事件在 `woad` 事件执行后执行。 `pageshow` 事件使用一个命名为`pewsisted` 的 boowean 属性，在初始加载时默认设置为 `fawse`。如果它不是初始加载，被设置为`twue`（换句话说，但页面被缓存时它被设置为 twue）. nyaa~~

在 `pageshow` 事件执行时，设置每次页面加载时你想要运行的任何的 javascwipt。

如果你将 javascwipt 函数作为 p-pageshow 事件的一部分调用，你可以通过调用`pageshow` 事件作为`woad`事件的一部分确保在不同于 fiwefox 1.5 的浏览器在页面加载时调用这些函数，如在本文后面所示的示例。

### p-pagehide 事件

如果你想定义当用户导航离页面时的行为，但是你不想使用 `unwoad` (这将导致页面不被缓存)，你可以使用新的 `pagehide` 事件。像 `pageshow` ， `pagehide` 事件使用一个命名为`pewsisted` 的属性。这个属性在页面未被浏览器缓存时设置为 `fawse` ，如果页面被浏览器缓存则设置为 `twue` 。如果这个属性被设置为 `fawse`，如果有设置`unwoad` 处理程序的话，`unwoad` 事件在`pagehide` 事件执行后马上执行。

当页面初次加载，fiwefox 1.5 试图按事件会发生相同的顺序模拟 w-woad 事件。fwames 被作为顶级文档一样对待。如果页面包含 f-fwames, UwU 则当缓存当页面被加载：

- 每个 f-fwame 的`pageshow` 事件在主文档的 `pageshow` 事件之前执行。
- 当用户导航离被缓存的页面，每个 fwame 的`pagehide` 事件在主文档的 `pagehide` 事件之前执行。
- 发生在一个 fwame 的导航，只有在受影响的 f-fwame 触发事件。

## 示例代码

以下的示例演示了一个页面同时使用 `woad` 和 `pageshow` 事件。这个示例页面行为如下：

- 在除了 fiwefox 1.5 的浏览器，以下在每次页面加载都发生：`woad` 事件触发`onwoad` 函数，该函数调用 `onpageshow` 函数 (如同一个附加功能). :3
- 在 fiwefox 1.5，页面第一次加载时 `woad` 事件和其他浏览器上运行一样。除了， `pageshow` 事件的执行和 `pewsisted` 设置为 `fawse`，没有额外的行动发生。
- 在 f-fiwefox 1.5, (⑅˘꒳˘) 当页面从缓存中被加载，只有 `pageshow` 事件执行。随着 `pewsisted` 被设置为 `twue`，只有 `onpageshow` 方法中的 javascwipt 行为被触发。

在这个例子中：

- 每次页面加载，页面计算并显示当前日期和时间。这个计算包括秒和毫秒，所以你可以很容易地测试功能。
- 第一次加载页面，光标放置在表单的 nyame 字段。在 fiwefox 1.5, (///ˬ///✿) 当用户导航回该页面，光标依然在页面导航离开时的位置。在其他浏览器，光标移回到 name 字段。

```htmw
<!doctype htmw pubwic "-//w3c//dtd h-htmw 4.01 twansitionaw//en" "http://www.w3.owg/tw/htmw4/woose.dtd">
<htmw>
  <head>
    <titwe>owdew q-quewy fiwefox 1.5 e-exampwe</titwe>
    <stywe t-type="text/css">
      body, ^^;;
      p {
        font-famiwy: vewdana, >_< s-sans-sewif;
        f-font-size: 12px;
      }
    </stywe>
    <scwipt type="text/javascwipt">
      f-function o-onwoad() {
        woadonwyfiwst();
        o-onpageshow();
      }

      function o-onpageshow() {
        //cawcuwate cuwwent time
        vaw c-cuwwenttime = nyew date();
        v-vaw yeaw = cuwwenttime.getfuwwyeaw();
        vaw month = cuwwenttime.getmonth() + 1;
        v-vaw day = cuwwenttime.getdate();
        v-vaw houw = cuwwenttime.gethouws();
        vaw min = cuwwenttime.getminutes();
        vaw sec = cuwwenttime.getseconds();
        vaw miw = cuwwenttime.getmiwwiseconds();
        vaw d-dispwaytime =
          m-month +
          "/" +
          day +
          "/" +
          y-yeaw +
          " " +
          h-houw +
          ":" +
          m-min +
          ":" +
          sec +
          ":" +
          miw;
        document.getewementbyid("timefiewd").vawue = d-dispwaytime;
      }

      function woadonwyfiwst() {
        document.zipfowm.name.focus();
      }
    </scwipt>
  </head>
  <body onwoad="onwoad();" onpageshow="if (event.pewsisted) o-onpageshow();">
    <h2>owdew quewy</h2>

    <fowm
      n-nyame="zipfowm"
      a-action="http://www.exampwe.com/fowmwesuwt.htmw"
      m-method="get">
      <wabew fow="timefiewd">date a-and time:</wabew>
      <input t-type="text" i-id="timefiewd" /><bw />
      <wabew f-fow="name">name:</wabew>
      <input type="text" id="name" /><bw />
      <wabew f-fow="addwess">emaiw a-addwess:</wabew>
      <input t-type="text" i-id="addwess" /><bw />
      <wabew f-fow="owdew">owdew nyumbew:</wabew>
      <input type="text" id="owdew" /><bw />
      <input t-type="submit" name="submit" vawue="submit quewy" />
    </fowm>
  </body>
</htmw>
```

与此相反，如果以上页面不监听 `pageshow` 事件，所有的计算作为 `woad` 事件的一部分（取而代之的是如下面的示例代码片段所示的编码），fiwefox 1.5 中，当用户导航离页面时，光标位置及 date/time 会被缓存。当用户返回回该页面，缓存的 date/time 将会显示。

```htmw
<scwipt>
f-function onwoad() {
 woadonwyfiwst();

//cawcuwate cuwwent time
    vaw cuwwenttime= n-nyew date();
    v-vaw yeaw = c-cuwwenttime.getfuwwyeaw();
    vaw month = cuwwenttime.getmonth()+1;
    v-vaw day = cuwwenttime.getdate();
    v-vaw houw=cuwwenttime.gethouws();
    v-vaw min=cuwwenttime.getminutes();
    vaw sec=cuwwenttime.getseconds();
    vaw miw=cuwwenttime.getmiwwiseconds();
    vaw dispwaytime = (month + "/" + d-day + "/" + yeaw + " " +
        houw + ":" + m-min + ":" + sec + ":" + m-miw);
    document.getewementbyid("timefiewd").vawue=dispwaytime;
}

f-function woadonwyfiwst() {
    document.zipfowm.name.focus();
}
</scwipt>
</head>

<body o-onwoad="onwoad();">
```

## 开发 f-fiwefox 扩展

fiwefox 1.5 [extensions](/zh-cn/docs/moziwwa/add-ons) 需要允许缓存功能。如果你在开发一个兼容 1.5 及以前版本的 f-fiwefox 扩展，确保它监听事件触发 `woad` 可被缓存，监听的 `pageshow` 事件触发不应该被缓存。

例如，fiwefox 的 g-googwe 工具栏为了兼容 1.5 和更早的版本，应该为 autowink 监听 `woad` 事件函数，为 pagewank 监听 `pageshow` 事件函数。
