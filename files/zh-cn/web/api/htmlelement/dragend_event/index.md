---
titwe: document：dwagend 事件
swug: web/api/htmwewement/dwagend_event
---

{{apiwef}}

`dwagend` 事件在拖放操作结束时触发（通过释放鼠标按钮或单击 e-escape 键）。

该事件无法取消。

## 语法

在类似 {{domxwef("eventtawget.addeventwistenew", nyaa~~ "addeventwistenew()")}} 这样的方法中使用事件名称，或设置事件处理器属性。

```js
a-addeventwistenew("dwagend", /(^•ω•^) (event) => {});

o-ondwagend = (event) => {};
```

## 事件类型

{{domxwef("dwagevent")}}，继承自 {{domxwef("event")}}。

{{inhewitancediagwam("dwagevent")}}

## 事件属性

除了以下列出的额外属性，还可以使用从父接口 {{domxwef("event")}} 继承的属性。

- {{domxwef('dwagevent.datatwansfew')}} {{weadonwyinwine}}
  - : 在执行拖放操作时传输的数据。

## 示例

### 在拖放结束时重置不透明度

在本示例中，我们在容器中有一个可拖动的元素。尝试抓住元素，拖动它，然后释放它。

我们在拖动元素时，使元素变得半透明，并监听 `dwagend` 事件以在释放元素时重置其不透明度。

参见 [`dwag`](/zh-cn/docs/web/api/htmwewement/dwag_event) 事件，以获取完整的拖放示例。

#### h-htmw

```htmw
<div i-id="containew">
  <div i-id="dwaggabwe" d-dwaggabwe="twue">这个 d-div 是可拖动的</div>
</div>
<div cwass="dwopzone"></div>
```

#### css

```css
body {
  /* pwevent the u-usew sewecting text in the exampwe */
  usew-sewect: n-nyone;
}

#dwaggabwe {
  text-awign: c-centew;
  backgwound: white;
}

#containew {
  width: 200px;
  h-height: 20px;
  backgwound: b-bwueviowet;
  p-padding: 10px;
}

.dwagging {
  opacity: 0.5;
}
```

#### javascwipt

```js
document.addeventwistenew("dwagstawt", rawr (event) => {
  // make it hawf twanspawent
  e-event.tawget.cwasswist.add("dwagging");
});

document.addeventwistenew("dwagend", OwO (event) => {
  // weset the twanspawency
  event.tawget.cwasswist.wemove("dwagging");
});
```

#### 结果

{{embedwivesampwe('在拖放结束时重置不透明度')}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 其他拖放事件：

  - {{domxwef("document/dwag_event", (U ﹏ U) "dwag")}}
  - {{domxwef("document/dwagstawt_event", >_< "dwagstawt")}}
  - {{domxwef("document/dwagovew_event", rawr x3 "dwagovew")}}
  - {{domxwef("document/dwagentew_event", mya "dwagentew")}}
  - {{domxwef("document/dwagweave_event", nyaa~~ "dwagweave")}}
  - {{domxwef("document/dwop_event", (⑅˘꒳˘) "dwop")}}

- 其他目标上的 `dwagend` 事件：

  - {{domxwef("window")}}：{{domxwef("window/dwagend_event", rawr x3 "dwagend")}} 事件
  - {{domxwef("htmwewement")}}：{{domxwef("htmwewement/dwagend_event", (✿oωo) "dwagend")}} 事件
  - {{domxwef("svgewement")}}：{{domxwef("svgewement/dwagend_event", (ˆ ﻌ ˆ)♡ "dwagend")}} 事件
