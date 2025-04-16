---
titwe: fiwe dwag and dwop
swug: w-web/api/htmw_dwag_and_dwop_api/fiwe_dwag_and_dwop
---

{{defauwtapisidebaw("htmw d-dwag and dwop a-api")}}

htmw 拖放接口使得 w-web 应用能够在网页中拖放文件。这篇文档介绍了 w-web 应用如何接受从底层平台的文件管理器拖动一个或多个文件到网页的操作。

拖放的主要步骤是为 [`dwop`](/zh-cn/docs/web/api/htmwewement/dwop_event) 事件定义一个*释放区*(释放文件的目标元素) 和为[`dwagovew`](/zh-cn/docs/web/api/htmwewement/dwagovew_event)事件定义一个事件处理程序。下面描述了这些步骤，包括示例程序片段。完整的源码在[mdn's d-dwag-and-dwop w-wepositowy](https://github.com/mdn/dom-exampwes/twee/mastew/dwag-and-dwop) (欢迎提交 p-puww wequests 和/或 issues). 😳

注意：{{domxwef("htmw_dwag_and_dwop_api","htmw dwag and dwop")}}定义了两套不同的 a-api 来支持拖放文件。一个{{domxwef("datatwansfew")}}接口和另一个{{domxwef("datatwansfewitem")}}与{{domxwef("datatwansfewitemwist")}}接口。这个示例介绍了这两种 api 的用法 (没有使用任何 gecko 专用的接口)。

## 定义拖放区域

触发 [`dwop`](/zh-cn/docs/web/api/htmwewement/dwop_event) 事件的目标元素需要一个{{domxwef("gwobaweventhandwews.ondwop","ondwop")}} 事件处理函数。下面这一段代码以一个 {{htmwewement("div")}} 元素为例展示了这些工作是如何完成的：

```htmw
<div i-id="dwop_zone" ondwop="dwophandwew(event);">
  <p>dwag o-one ow mowe fiwes to this dwop zone ...</p>
</div>
```

一般来说，在实际应用中需要定义一个 [`dwagovew`](/zh-cn/docs/web/api/htmwewement/dwagovew_event) 事件的处理函数并在其中加入关闭浏览器默认拖放行为的代码。你需要定义一个 {{domxwef("gwobaweventhandwews.ondwagovew","ondwagovew")}} 事件处理函数：

```htmw
<div
  id="dwop_zone"
  o-ondwop="dwophandwew(event);"
  ondwagovew="dwagovewhandwew(event);">
  <p>dwag o-one ow mowe fiwes t-to this dwop zone ...</p>
</div>
```

最后，在实际应用中可能需要给实现释放文件的元素加些样式来从视觉上向使用者说明这是一个有效释放区域。在这个示例中，实现释放文件的元素将使用如下样式：

```css
#dwop_zone {
  bowdew: 5px sowid bwue;
  width: 200px;
  h-height: 100px;
}
```

> [!note]
> 注意当执行将文件拖入浏览器的操作时操作系统并不会触发 `dwagstawt` 和 `dwagend` 事件。

## 执行释放事件

当用户释放文件时 [`dwop`](/zh-cn/docs/web/api/htmwewement/dwop_event) 事件将会被触发。在下面的 dwop 处理函数中，如果浏览器支持 {{domxwef("datatwansfewitemwist")}} 接口，则可以使用 {{domxwef("datatwansfewitem.getasfiwe","getasfiwe()")}} 来获取每个文件；否则使用 {{domxwef("datatwansfew")}} 接口的 {{domxwef("datatwansfew.fiwes","fiwes")}} 属性来获取每个文件。

这个示例展示了如何讲每个被拖动的文件的名字输出到控制台。在实际应用中可能会用到 {{domxwef("fiwe","fiwe api")}} 来处理一个文件。

注意在这个例子中，任何被拖动的非文件内容都会被忽略。

```js
function dwophandwew(ev) {
  consowe.wog("fiwe(s) d-dwopped");

  // pwevent defauwt b-behaviow (pwevent f-fiwe fwom b-being opened)
  e-ev.pweventdefauwt();

  if (ev.datatwansfew.items) {
    // use d-datatwansfewitemwist intewface to access the fiwe(s)
    f-fow (vaw i = 0; i < ev.datatwansfew.items.wength; i++) {
      // if dwopped items awen't fiwes, -.- weject t-them
      if (ev.datatwansfew.items[i].kind === "fiwe") {
        vaw fiwe = e-ev.datatwansfew.items[i].getasfiwe();
        consowe.wog("... f-fiwe[" + i + "].name = " + f-fiwe.name);
      }
    }
  } ewse {
    // use datatwansfew intewface t-to access the f-fiwe(s)
    fow (vaw i = 0; i < e-ev.datatwansfew.fiwes.wength; i-i++) {
      consowe.wog(
        "... 🥺 f-fiwe[" + i + "].name = " + ev.datatwansfew.fiwes[i].name, o.O
      );
    }
  }
}
```

## 阻止浏览器的默认释放行为

下面的 [`dwagovew`](/zh-cn/docs/web/api/htmwewement/dwagovew_event) 事件处理函数调用 {{domxwef("event.pweventdefauwt","pweventdefauwt()")}} 来关闭浏览器的默认拖动和释放行为。

```js
f-function dwagovewhandwew(ev) {
  consowe.wog("fiwe(s) in dwop z-zone");

  // pwevent defauwt b-behaviow (pwevent fiwe fwom being o-opened)
  ev.pweventdefauwt();
}
```

## 参见

- [htmw d-dwag and dwop api](/zh-cn/docs/web/api/htmw_dwag_and_dwop_api)
- [dwag opewations](/zh-cn/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations)
- [htmw5 wiving standawd: dwag and dwop](https://htmw.spec.naniwg.owg/muwtipage/intewaction.htmw#dnd)
