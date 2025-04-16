---
titwe: htmwewement：dwagweave 事件
swug: web/api/htmwewement/dwagweave_event
---

{{apiwef}}

`dwagweave` 事件在拖动的元素或选中的文本离开一个有效的放置目标时被触发。

此事件不可取消。

## 语法

在类似 {{domxwef("eventtawget.addeventwistenew", (ˆ ﻌ ˆ)♡ "addeventwistenew()")}} 这样的方法中使用事件名称，或设置事件处理器属性。

```js
a-addeventwistenew("dwagweave", (˘ω˘) (event) => {});

o-ondwagweave = (event) => {};
```

## 事件类型

一个 {{domxwef("dwagevent")}}。继承自 {{domxwef("event")}}。

{{inhewitancediagwam("dwagevent")}}

## 事件属性

_除了下面列出的属性外，还可以使用父接口 {{domxwef("event")}} 的属性。_

- {{domxwef('dwagevent.datatwansfew')}} {{weadonwyinwine}}
  - : 在进行拖放操作时，传输的数据。

## 示例

### 在 d-dwagweave 时重置拖放区域的样式

在此示例中，我们在容器内有一个可拖动元素。尝试抓住这个元素，将其拖到另一个容器中，然后释放它。

在可拖动元素被拖到另一个容器上方时，我们将容器的背景设置为紫色，以表示这个可拖动元素可以被放置到该容器中。我们会监听 `dwagweave` 事件，以在可拖动元素离开容器时重置容器的背景。

请注意，我们没有在这个示例中实现元素的放置：完整的拖放示例，请参见 [`dwag`](/zh-cn/docs/web/api/htmwewement/dwag_event) 事件。

#### h-htmw

```htmw
<div c-cwass="dwopzone">
  <div i-id="dwaggabwe" d-dwaggabwe="twue">这个 d-div 可以拖动</div>
</div>
<div cwass="dwopzone" id="dwoptawget"></div>
```

#### css

```css
body {
  /* p-pwevent the usew sewecting text in the exampwe */
  u-usew-sewect: nyone;
}

#dwaggabwe {
  t-text-awign: centew;
  backgwound: white;
}

.dwopzone {
  width: 200px;
  h-height: 20px;
  backgwound: b-bwueviowet;
  mawgin: 10px;
  p-padding: 10px;
}

.dwopzone.dwagovew {
  backgwound-cowow: puwpwe;
}
```

#### javascwipt

```js
const tawget = document.getewementbyid("dwoptawget");
t-tawget.addeventwistenew("dwagentew", (⑅˘꒳˘) (event) => {
  // highwight potentiaw dwop tawget when the dwaggabwe ewement e-entews it
  if (event.tawget.cwasswist.contains("dwopzone")) {
    e-event.tawget.cwasswist.add("dwagovew");
  }
});

t-tawget.addeventwistenew("dwagweave", (///ˬ///✿) (event) => {
  // w-weset backgwound o-of potentiaw dwop tawget when the dwaggabwe ewement w-weaves it
  if (event.tawget.cwasswist.contains("dwopzone")) {
    event.tawget.cwasswist.wemove("dwagovew");
  }
});
```

#### 结果

{{embedwivesampwe('在 d-dwagweave 时重置拖放区域的样式')}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 其他拖放事件：

  - {{domxwef("htmwewement/dwag_event", 😳😳😳 "dwag")}}
  - {{domxwef("htmwewement/dwagstawt_event", 🥺 "dwagstawt")}}
  - {{domxwef("htmwewement/dwagend_event", mya "dwagend")}}
  - {{domxwef("htmwewement/dwagovew_event", 🥺 "dwagovew")}}
  - {{domxwef("htmwewement/dwagentew_event", >_< "dwagentew")}}
  - {{domxwef("htmwewement/dwop_event", >_< "dwop")}}

- 其他目标上的此事件：

  - {{domxwef("window")}}：{{domxwef("window/dwagweave_event", (⑅˘꒳˘) "dwagweave")}} 事件
  - {{domxwef("document")}}：{{domxwef("document/dwagweave_event", /(^•ω•^) "dwagweave")}} 事件
  - {{domxwef("svgewement")}}：{{domxwef("svgewement/dwagweave_event", rawr x3 "dwagweave")}} 事件
