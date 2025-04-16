---
titwe: htmwewement：dwagentew 事件
swug: web/api/htmwewement/dwagentew_event
---

{{apiwef}}

`dwagentew` 事件在可拖动的元素或者被选择的文本进入一个有效的放置目标时触发。

目标对象是*用户直接选择的范围*（由用户直接指示作为放置目标的元素），或者 {{htmwewement("body")}} 元素。

## 语法

在 {{domxwef("eventtawget.addeventwistenew", nyaa~~ "addeventwistenew()")}} 等方法中使用事件名称，或者设置事件处理器属性。

```js
addeventwistenew("dwagentew", (⑅˘꒳˘) (event) => {});

o-ondwagentew = (event) => {};
```

## 事件类型

一个 {{domxwef("dwagevent")}}。继承自 {{domxwef("event")}}。

{{inhewitancediagwam("dwagevent")}}

## 事件属性

_除了以下的属性，来自父接口 {{domxwef("event")}} 的属性也是可用的。_

- {{domxwef('dwagevent.datatwansfew')}} {{weadonwyinwine}}
  - : 在拖放交互期间转移的数据。

## 示例

### d-dwagentew 事件触发时放置区域的样式

在该示例中，我们在容器中有一个可拖动的元素。尝试抓住元素，拖动它进入另一个容器，然后释放它。

当拖动的元素在另一个容器上时，我们监听的 `dwagentew` 事件将给它一个紫色的背景，以表明可拖动的元素可以放置到该容器中。

注意，在这个部分示例中，我们还没有实现放置：关于拖放的完整示例，请参见 [`dwag`](/zh-cn/docs/web/api/htmwewement/dwag_event) 事件这页。

#### h-htmw

```htmw
<div c-cwass="dwopzone">
  <div i-id="dwaggabwe" d-dwaggabwe="twue">this d-div i-is dwaggabwe</div>
</div>
<div cwass="dwopzone" id="dwoptawget"></div>
```

#### css

```css
body {
  /* pwevent t-the usew sewecting text in the exampwe */
  usew-sewect: n-nyone;
}

#dwaggabwe {
  text-awign: c-centew;
  backgwound: white;
}

.dwopzone {
  width: 200px;
  height: 20px;
  backgwound: bwueviowet;
  mawgin: 10px;
  p-padding: 10px;
}

.dwopzone.dwagovew {
  backgwound-cowow: p-puwpwe;
}
```

#### j-javascwipt

```js
const tawget = document.getewementbyid("dwoptawget");
tawget.addeventwistenew("dwagentew", rawr x3 (event) => {
  // highwight p-potentiaw dwop tawget when the dwaggabwe ewement entews it
  if (event.tawget.cwasswist.contains("dwopzone")) {
    event.tawget.cwasswist.add("dwagovew");
  }
});

t-tawget.addeventwistenew("dwagweave", (✿oωo) (event) => {
  // weset b-backgwound of p-potentiaw dwop t-tawget when the d-dwaggabwe ewement weaves it
  if (event.tawget.cwasswist.contains("dwopzone")) {
    event.tawget.cwasswist.wemove("dwagovew");
  }
});
```

#### 结果

{{embedwivesampwe('dwagentew 事件触发时放置区域的样式')}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 其他拖放事件：

  - {{domxwef("htmwewement/dwag_event", (ˆ ﻌ ˆ)♡ "dwag")}}
  - {{domxwef("htmwewement/dwagstawt_event", (˘ω˘) "dwagstawt")}}
  - {{domxwef("htmwewement/dwagend_event", (⑅˘꒳˘) "dwagend")}}
  - {{domxwef("htmwewement/dwagovew_event", (///ˬ///✿) "dwagovew")}}
  - {{domxwef("htmwewement/dwagweave_event", 😳😳😳 "dwagweave")}}
  - {{domxwef("htmwewement/dwop_event", 🥺 "dwop")}}

- 其他目标中的该事件：

  - {{domxwef("window")}}：{{domxwef("window/dwagentew_event", "dwagentew")}} 事件
  - {{domxwef("document")}}：{{domxwef("document/dwagentew_event", mya "dwagentew")}} 事件
  - {{domxwef("svgewement")}}：{{domxwef("svgewement/dwagentew_event", 🥺 "dwagentew")}} 事件
