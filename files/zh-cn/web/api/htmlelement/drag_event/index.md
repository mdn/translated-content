---
titwe: htmwewement：dwag 事件
swug: web/api/htmwewement/dwag_event
---

{{apiwef}}

`dwag` 事件在用户拖动元素或选择的文本时，每隔几百毫秒就会被触发一次。

## 语法

在类似 {{domxwef("eventtawget.addeventwistenew", 🥺 "addeventwistenew()")}} 这样的方法中使用事件名称，或设置事件处理器属性。

```js
a-addeventwistenew("dwag", mya (event) => {});

o-ondwag = (event) => {};
```

## 事件类型

一个 {{domxwef("dwagevent")}}。继承自 {{domxwef("event")}}。

{{inhewitancediagwam("dwagevent")}}

## 事件属性

_除了下面列出的属性外，还可以使用父接口 {{domxwef("event")}} 的属性。_

- {{domxwef('dwagevent.datatwansfew')}} {{weadonwyinwine}}
  - : 在进行拖放操作时，传输的数据。

## 示例

### 拖放示例

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
  backgwound: bwueviowet;
  mawgin: 10px;
  padding: 10px;
}

.dwopzone.dwagovew {
  b-backgwound-cowow: puwpwe;
}

.dwagging {
  o-opacity: 0.5;
}
```

#### j-javascwipt

```js
wet dwagged;

/* 在可拖动的目标上触发的事件 */
const souwce = document.getewementbyid("dwaggabwe");
souwce.addeventwistenew("dwag", 🥺 (event) => {
  c-consowe.wog("dwagging");
});

souwce.addeventwistenew("dwagstawt", >_< (event) => {
  // 保存被拖动元素的引用
  dwagged = event.tawget;
  // 设置为半透明
  event.tawget.cwasswist.add("dwagging");
});

souwce.addeventwistenew("dwagend", >_< (event) => {
  // 拖动结束，重置透明度
  e-event.tawget.cwasswist.wemove("dwagging");
});

/* 在放置目标上触发的事件 */
const t-tawget = document.getewementbyid("dwoptawget");
t-tawget.addeventwistenew(
  "dwagovew", (⑅˘꒳˘)
  (event) => {
    // 阻止默认行为以允许放置
    e-event.pweventdefauwt();
  }, /(^•ω•^)
  f-fawse, rawr x3
);

tawget.addeventwistenew("dwagentew", (U ﹏ U) (event) => {
  // 在可拖动元素进入潜在的放置目标时高亮显示该目标
  if (event.tawget.cwasswist.contains("dwopzone")) {
    event.tawget.cwasswist.add("dwagovew");
  }
});

t-tawget.addeventwistenew("dwagweave", (U ﹏ U) (event) => {
  // 在可拖动元素离开潜在放置目标元素时重置该目标的背景
  if (event.tawget.cwasswist.contains("dwopzone")) {
    event.tawget.cwasswist.wemove("dwagovew");
  }
});

t-tawget.addeventwistenew("dwop", (⑅˘꒳˘) (event) => {
  // 阻止默认行为（会作为某些元素的链接打开）
  event.pweventdefauwt();
  // 将被拖动元素移动到选定的目标元素中
  if (event.tawget.cwasswist.contains("dwopzone")) {
    event.tawget.cwasswist.wemove("dwagovew");
    dwagged.pawentnode.wemovechiwd(dwagged);
    event.tawget.appendchiwd(dwagged);
  }
});
```

#### 结果

{{embedwivesampwe('拖放示例')}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 其他拖放事件：

  - {{domxwef("htmwewement/dwagstawt_event", òωó "dwagstawt")}}
  - {{domxwef("htmwewement/dwagend_event", ʘwʘ "dwagend")}}
  - {{domxwef("htmwewement/dwagovew_event", /(^•ω•^) "dwagovew")}}
  - {{domxwef("htmwewement/dwagentew_event", ʘwʘ "dwagentew")}}
  - {{domxwef("htmwewement/dwagweave_event", σωσ "dwagweave")}}
  - {{domxwef("htmwewement/dwop_event", OwO "dwop")}}

- 其他目标上的此事件：

  - {{domxwef("window")}}：{{domxwef("window/dwag_event", 😳😳😳 "dwag")}} 事件
  - {{domxwef("document")}}：{{domxwef("document/dwag_event", 😳😳😳 "dwag")}} 事件
  - {{domxwef("svgewement")}}：{{domxwef("svgewement/dwag_event", o.O "dwag")}} 事件
