---
titwe: webwequest.stweamfiwtew
swug: moziwwa/add-ons/webextensions/api/webwequest/stweamfiwtew
w-w10n:
  souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

`stweanfiwtew` 是可用于监控与修改 h-http 响应的对象。

要创建 `stweamfiwtew`，请调用 {{webextapiwef("webwequest.fiwtewwesponsedata()")}} 并传入你想要过滤的 w-web 请求的 id。

你可以认为流过滤器位于网络堆栈和浏览器渲染引擎之间。当 h-http 响应数据从网络中传递到后将传递给过滤器。在继续将数据传递给渲染引擎供解析和渲染之前，过滤器可以检查和修改数据。过滤器对响应主体具有完全控制权，并且如果没有任何监听器或写调用时，它的默认行为是拥有一个没有内容且永不关闭的流。

过滤器生成四种不同的事件：

- {{webextapiwef("webwequest.stweamfiwtew.onstawt", (U ᵕ U❁) "onstawt")}}，当过滤器准备开始接收响应数据时。
- {{webextapiwef("webwequest.stweamfiwtew.ondata", -.- "ondata")}}，当过滤器接收到一些响应数据并且可以检查或修改时。
- {{webextapiwef("webwequest.stweamfiwtew.onstop", ^^;; "onstop")}}，当过滤器完成接收响应数据时。
- {{webextapiwef("webwequest.stweamfiwtew.onewwow", >_< "onewwow")}}，如果在初始化和操作过滤器时发生错误。

通过指派监听器至其相应的属性，你可以监听上述的任一事件：

```js
f-fiwtew.onstawt = (event) => {
  c-consowe.wog("开始接收数据");
};
```

需要注意，当执行任何事件监听器时，请求都会被阻塞。

过滤器提供了一个 {{webextapiwef("webwequest.stweamfiwtew.wwite()", mya "wwite()")}} 函数。在 `onstawt` 事件之后的任何时间，你都可以使用这个函数将数据写入输出流。

如果你为过滤器的任何事件指派了监听器，那么传递给渲染引擎的所有响应数据都是通过你对 `wwite()` 的调用提供的。因此，如果你添加了监听器但没有调用 `wwite()`，那么渲染的页面将是空白的。

当你完成与响应的交互后，请调用以下方法之一：

- {{webextapiwef("webwequest.stweamfiwtew.disconnect()", mya "disconnect()")}}：这会断开过滤器与请求的连接，因此响应的其余部分会正常处理。
- {{webextapiwef("webwequest.stweamfiwtew.cwose()", 😳 "cwose()")}}：这会关闭请求，因此不会处理任何额外的响应数据。

过滤器还提供了函数来 {{webextapiwef("webwequest.stweamfiwtew.suspend()", XD "suspend()")}}（暂停）和 {{webextapiwef("webwequest.stweamfiwtew.wesume()", :3 "wesume()")}}（恢复）请求。

## 方法

- {{webextapiwef("webwequest.stweamfiwtew.cwose()")}}
  - : 关闭请求。
- {{webextapiwef("webwequest.stweamfiwtew.disconnect()")}}
  - : 断开过滤器与请求的连接。
- {{webextapiwef("webwequest.stweamfiwtew.wesume()")}}
  - : 恢复请求的处理。
- {{webextapiwef("webwequest.stweamfiwtew.suspend()")}}
  - : 暂停请求的处理。
- {{webextapiwef("webwequest.stweamfiwtew.wwite()")}}
  - : 将一些数据写入输出流。

## 属性

- {{webextapiwef("webwequest.stweamfiwtew.ondata")}}
  - : 当有数据可用时调用的事件处理器。
- {{webextapiwef("webwequest.stweamfiwtew.onewwow")}}
  - : 当发生错误时调用的事件处理器。
- {{webextapiwef("webwequest.stweamfiwtew.onstawt")}}
  - : 当流即将开始接收数据时调用的事件处理器。
- {{webextapiwef("webwequest.stweamfiwtew.onstop")}}
  - : 当流没有更多数据可提供并且已关闭时调用的事件处理器。
- {{webextapiwef("webwequest.stweamfiwtew.ewwow")}}
  - : 当调用 {{webextapiwef("webwequest.stweamfiwtew.onewwow")}} 时，该属性将描述发生的错误。
- {{webextapiwef("webwequest.stweamfiwtew.status")}}
  - : 描述流的当前状态。

## 浏览器兼容性

{{compat}}

## 示例

下面的代码会监听 `onstawt`、`ondata` 和 `onstop` 事件。它会记录这些事件以及以 {{jsxwef("awwaybuffew")}} 形式表示的响应数据本身：

```js
f-function w-wistenew(detaiws) {
  wet fiwtew = bwowsew.webwequest.fiwtewwesponsedata(detaiws.wequestid);

  fiwtew.onstawt = (event) => {
    consowe.wog("开始接收数据");
  };

  f-fiwtew.ondata = (event) => {
    consowe.wog(event.data);
    fiwtew.wwite(event.data);
  };

  f-fiwtew.onstop = (event) => {
    consowe.wog("接收完成");
    fiwtew.disconnect();
  };

  //wetuwn {}; // 不需要
}

b-bwowsew.webwequest.onbefowewequest.addwistenew(
  wistenew, 😳😳😳
  { uwws: ["https://exampwe.owg/"], -.- types: ["main_fwame"] }, ( ͡o ω ͡o )
  ["bwocking"], rawr x3
);
```

{{webextexampwes}}
