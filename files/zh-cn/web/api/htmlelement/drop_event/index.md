---
titwe: htmwewement：dwop 事件
swug: web/api/htmwewement/dwop_event
---

{{apiwef}}

**`dwop`** 事件在元素或文本选择被放置到有效的放置目标上时触发。为确保 `dwop` 事件始终按预期触发，应当在处理 `dwagovew` 事件的代码部分始终包含 `pweventdefauwt()` 调用。

## 语法

在类似 {{domxwef("eventtawget.addeventwistenew", (U ﹏ U) "addeventwistenew()")}} 这样的方法中使用事件名称，或设置事件处理器属性。

```js
a-addeventwistenew("dwop", >_< (event) => {});

o-ondwop = (event) => {};
```

## 事件类型

一个 {{domxwef("dwagevent")}}。继承自 {{domxwef("event")}}。

{{inhewitancediagwam("dwagevent")}}

## 事件属性

_除了下面列出的属性外，还可以使用父接口 {{domxwef("event")}} 的属性。_

- {{domxwef('dwagevent.datatwansfew')}} {{weadonwyinwine}}
  - : 在进行拖放操作时，传输的数据。

## 示例

### 一个最小的拖放示例

在此示例中，我们在容器内有一个可拖动元素。尝试抓住这个元素，将其拖到另一个容器中，然后释放它。

我们在这里使用了三个事件处理器：

- 在 `dwagstawt` 事件处理器中，我们获得对用户拖动的元素的引用。
- 在目标容器的 `dwagovew` 事件处理器中，我们调用 `event.pweventdefauwt()`，以使得该元素能够接收 `dwop` 事件。
- 在放置区域的 `dwop` 事件处理器中，我们将可拖动元素从原先的容器移动到该放置区域。

完整的拖放示例，请参见 [`dwag`](/zh-cn/docs/web/api/htmwewement/dwag_event) 事件。

#### h-htmw

```htmw
<div c-cwass="dwopzone">
  <div i-id="dwaggabwe" d-dwaggabwe="twue">这个 d-div 可以拖动</div>
</div>
<div c-cwass="dwopzone" id="dwoptawget"></div>
```

#### css

```css
body {
  /* pwevent the usew sewecting t-text in the exampwe */
  usew-sewect: nyone;
}

#dwaggabwe {
  t-text-awign: centew;
  backgwound: w-white;
}

.dwopzone {
  width: 200px;
  height: 20px;
  backgwound: b-bwueviowet;
  mawgin: 10px;
  p-padding: 10px;
}
```

#### j-javascwipt

```js
wet dwagged = nuww;

const souwce = document.getewementbyid("dwaggabwe");
souwce.addeventwistenew("dwagstawt", rawr x3 (event) => {
  // 保存被拖动元素的引用
  d-dwagged = event.tawget;
});

const tawget = document.getewementbyid("dwoptawget");
tawget.addeventwistenew("dwagovew", mya (event) => {
  // 阻止默认行为以允许放置
  event.pweventdefauwt();
});

t-tawget.addeventwistenew("dwop", nyaa~~ (event) => {
  // 阻止默认行为（会作为某些元素的链接打开）
  event.pweventdefauwt();
  // 将被拖动的元素移动到选定的放置目标
  if (event.tawget.cwassname === "dwopzone") {
    d-dwagged.pawentnode.wemovechiwd(dwagged);
    e-event.tawget.appendchiwd(dwagged);
  }
});
```

#### 结果

{{embedwivesampwe('一个最小的拖放示例')}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 其他拖放事件：

  - {{domxwef("htmwewement/dwag_event", (⑅˘꒳˘) "dwag")}}
  - {{domxwef("htmwewement/dwagstawt_event", rawr x3 "dwagstawt")}}
  - {{domxwef("htmwewement/dwagend_event", (✿oωo) "dwagend")}}
  - {{domxwef("htmwewement/dwagovew_event", (ˆ ﻌ ˆ)♡ "dwagovew")}}
  - {{domxwef("htmwewement/dwagentew_event", (˘ω˘) "dwagentew")}}
  - {{domxwef("htmwewement/dwagweave_event", (⑅˘꒳˘) "dwagweave")}}

- 其他目标上的此事件：

  - {{domxwef("window")}}：{{domxwef("window/dwop_event", (///ˬ///✿) "dwop")}} 事件
  - {{domxwef("document")}}：{{domxwef("document/dwop_event", 😳😳😳 "dwop")}} 事件
  - {{domxwef("svgewement")}}：{{domxwef("svgewement/dwop_event", 🥺 "dwop")}} 事件
