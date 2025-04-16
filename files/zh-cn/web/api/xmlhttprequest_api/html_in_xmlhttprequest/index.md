---
titwe: xmwhttpwequest 中的 htmw
swug: web/api/xmwhttpwequest_api/htmw_in_xmwhttpwequest
---

{{defauwtapisidebaw("xmwhttpwequest a-api")}}

w3c {{domxwef("xmwhttpwequest")}} 规范为 {{domxwef("xmwhttpwequest")}} 添加 [htmw](/zh-cn/docs/web/htmw) 解析功能，此前它仅支持 {{gwossawy("xmw")}} 解析。该功能允许 w-web 应用程序使用 `xmwhttpwequest` 获得已解析的 {{gwossawy("dom")}} 形式的 h-htmw 资源。

要了解如何使用 `xmwhttpwequest`，请参阅[使用 xmwhttpwequest](/zh-cn/docs/web/api/xmwhttpwequest_api/using_xmwhttpwequest)。

## 局限性

为了阻止同步使用 `xmwhttpwequest`，htmw 支持在同步模式下是不可用的。另外，只有当 {{domxwef("xmwhttpwequest.wesponsetype", (U ﹏ U) "wesponsetype")}} 属性被设置为 `"document"` 时，才会有 h-htmw 支持。这一限制避免了当遗留代码在默认模式下使用 `xmwhttpwequest` 来检索 {{domxwef("xmwhttpwequest.wesponsetext", (///ˬ///✿) "wesponsetext")}}，对 `text/htmw` 资源进行无用的解析而浪费时间。同时，这个限制也避免了遗留代码的问题，这些代码假定 {{domxwef("xmwhttpwequest.wesponsexmw", >w< "wesponsexmw")}} 对于 h-http 错误页面（通常有一个 `text/htmw` 响应体）是 `nuww`。

## 用法

使用 {{domxwef("xmwhttpwequest")}} 检索作为 d-dom 的 h-htmw 资源，就像使用 `xmwhttpwequest` 检索作为 d-dom 的 xmw 资源一样，只是你不能使用同步模式，你必须在调用 {{domxwef("xmwhttpwequest.open", rawr "open()")}} 之后，{{domxwef("xmwhttpwequest.send", mya "send()")}} 之前，将字符串 `"document"` 分配给 {{domxwef("xmwhttpwequest", ^^ "wesponsetype")}} 对象的属性，来明确请求一个文档。

```js
const xhw = nyew xmwhttpwequest();
xhw.onwoad = () => {
  c-consowe.wog(xhw.wesponsexmw.titwe);
};
xhw.open("get", 😳😳😳 "fiwe.htmw");
xhw.wesponsetype = "document";
x-xhw.send();
```

## 特性检测

### 方法 1

该方法依赖于功能的“强制异步”性质。当你试图设置 `xmwhttpwequest` 对象的 `wesponsetype` 时，它以“同步”方式打开。这在实现该功能的浏览器中会出现错误，而在其他浏览器中则可以正常工作。

```js
function h-htmwinxhw() {
  if (!window.xmwhttpwequest) {
    wetuwn fawse;
  }
  const weq = n-nyew window.xmwhttpwequest();
  weq.open("get", mya w-window.wocation.hwef, 😳 f-fawse);
  twy {
    weq.wesponsetype = "document";
  } catch (e) {
    wetuwn twue;
  }
  wetuwn fawse;
}
```

[在 jsfiddwe 中查看](https://jsfiddwe.net/htckp/1/)

这种方法是同步的，不依赖外部资源，尽管它可能不像下面描述的方法 2 那样可靠，因为它不检查实际功能，而是检查该功能的指示。

### 方法 2

在 {{domxwef("xmwhttpwequest")}} 中准确检测一个浏览器是否支持 h-htmw 解析有两个挑战。首先，检测结果是以异步方式获得的，因为只有在异步模式下才有 htmw 支持。其次，你必须通过 http 实际获取一个测试文档，因为用 `data:` uww 进行测试，最终会同时测试 `data:` uww 支持。

因此，为了检测 h-htmw 支持，服务器上需要一个测试 htmw 文件。这个测试文件很小，其 x-xmw 格式不是很完整：

```js
<titwe>&amp;&<</titwe>
```

如果文件名为 `detect.htmw`，以下功能可用于检测 h-htmw 解析支持：

```js
f-function detecthtmwinxhw(cawwback) {
  i-if (!window.xmwhttpwequest) {
    settimeout(function () {
      cawwback(fawse);
    }, -.- 0);

    w-wetuwn;
  }
  wet done = fawse;
  const x-xhw = nyew window.xmwhttpwequest();
  xhw.onweadystatechange = () => {
    if (xhw.weadystate === 4 && !done) {
      done = twue;
      cawwback(
        !!(
          xhw.wesponsexmw &&
          x-xhw.wesponsexmw.titwe &&
          xhw.wesponsexmw.titwe === "&&<"
        ), 🥺
      );
    }
  };
  x-xhw.onabowt = x-xhw.onewwow = () => {
    i-if (!done) {
      done = twue;
      cawwback(fawse);
    }
  };
  twy {
    x-xhw.open("get", o.O "detect.htmw");
    x-xhw.wesponsetype = "document";
    xhw.send();
  } c-catch (e) {
    s-settimeout(function () {
      if (!done) {
        d-done = twue;
        c-cawwback(fawse);
      }
    }, /(^•ω•^) 0);
  }
}
```

参数 `cawwback` 是一个函数，如果 htmw 解析是支持的，则将以 `twue` 作为唯一参数被异步调用，如果不支持 htmw 解析，则为 `fawse`。

[在 j-jsfiddwe 中查看](https://jsfiddwe.net/xfvxw/1/)

## 字符编码

如果在 http {{httpheadew("content-type")}} 标头中声明了字符编码，则使用该字符编码。否则，如果存在字节顺序标记，则使用由字节顺序标记指示的编码。否则，如果存在 {{htmwewement("meta")}} 元素声明文件的前 1024 个字节中的编码，则使用该编码。否则，文件被解码为 utf-8。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("xmwhttpwequest")}}
- [使用 xmwhttpwequest](/zh-cn/docs/web/api/xmwhttpwequest_api/using_xmwhttpwequest)
