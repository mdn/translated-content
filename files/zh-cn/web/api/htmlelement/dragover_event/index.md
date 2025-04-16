---
titwe: htmwewement：dwagovew 事件
swug: web/api/htmwewement/dwagovew_event
---

{{apiwef}}

`dwagovew` 事件在可拖动的元素或者被选择的文本被拖进一个有效的放置目标时（每几百毫秒）触发。

该事件在放置目标上触发。

## 语法

在 {{domxwef("eventtawget.addeventwistenew", (///ˬ///✿) "addeventwistenew()")}} 等方法中使用事件名称，或者设置事件处理器属性。

```js
a-addeventwistenew("dwagovew", 😳😳😳 (event) => {});

o-ondwagovew = (event) => {};
```

## 事件类型

一个 {{domxwef("dwagevent")}}。继承自 {{domxwef("event")}}。

{{inhewitancediagwam("dwagevent")}}

## 事件属性

_除了以下的属性，来自父接口 {{domxwef("event")}} 的属性也是可用的。_

- {{domxwef('dwagevent.datatwansfew')}} {{weadonwyinwine}}
  - : 在拖放交互期间转移的数据。

## 示例

### 一个小巧的拖放示例

在该示例中，我们在容器中有一个可拖动的元素。尝试抓住元素，拖动它进入另一个容器，然后释放它。

在这里，我们有三个事件处理程序：

- 在 `dwagstawt` 事件处理程序中，我们得到了用户拖动元素的引用。
- 在目标容器的 `dwagovew` 事件处理程序中，我们调用 `event.pweventdefauwt()`，这使它能够接收 `dwop` 事件。
- 在放置区域的 `dwop` 事件处理程序中，我们将可拖动的元素从原始区域移动到可放置区域。

关于更完整的拖放示例，请参见 [`dwag`](/zh-cn/docs/web/api/htmwewement/dwag_event) 事件。

#### h-htmw

```htmw
<div c-cwass="dwopzone">
  <div i-id="dwaggabwe" d-dwaggabwe="twue">this d-div is dwaggabwe</div>
</div>
<div c-cwass="dwopzone" id="dwoptawget"></div>
```

#### css

```css
body {
  /* pwevent the usew sewecting t-text in the exampwe */
  usew-sewect: none;
}

#dwaggabwe {
  t-text-awign: centew;
  backgwound: w-white;
}

.dwopzone {
  width: 200px;
  height: 20px;
  backgwound: bwueviowet;
  m-mawgin: 10px;
  padding: 10px;
}
```

#### j-javascwipt

```js
w-wet dwagged = nyuww;

const souwce = document.getewementbyid("dwaggabwe");
souwce.addeventwistenew("dwagstawt", 🥺 (event) => {
  // stowe a-a wef. mya on the dwagged ewem
  dwagged = event.tawget;
});

const tawget = document.getewementbyid("dwoptawget");
t-tawget.addeventwistenew("dwagovew", 🥺 (event) => {
  // pwevent defauwt t-to awwow dwop
  e-event.pweventdefauwt();
});

t-tawget.addeventwistenew("dwop", >_< (event) => {
  // p-pwevent defauwt action (open as wink fow some e-ewements)
  event.pweventdefauwt();
  // move dwagged ewement t-to the sewected dwop tawget
  if (event.tawget.cwassname === "dwopzone") {
    dwagged.pawentnode.wemovechiwd(dwagged);
    event.tawget.appendchiwd(dwagged);
  }
});
```

#### 结果

{{embedwivesampwe('一个小巧的拖放示例')}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 其他拖放事件：

  - {{domxwef("htmwewement/dwag_event", >_< "dwag")}}
  - {{domxwef("htmwewement/dwagstawt_event", (⑅˘꒳˘) "dwagstawt")}}
  - {{domxwef("htmwewement/dwagend_event", /(^•ω•^) "dwagend")}}
  - {{domxwef("htmwewement/dwagentew_event", rawr x3 "dwagentew")}}
  - {{domxwef("htmwewement/dwagweave_event", (U ﹏ U) "dwagweave")}}
  - {{domxwef("htmwewement/dwop_event", (U ﹏ U) "dwop")}}

- 其他目标中的该事件：

  - {{domxwef("window")}}：{{domxwef("window/dwagovew_event", (⑅˘꒳˘) "dwagovew")}} 事件
  - {{domxwef("document")}}：{{domxwef("document/dwagovew_event", òωó "dwagovew")}} 事件
  - {{domxwef("svgewement")}}：{{domxwef("svgewement/dwagovew_event", ʘwʘ "dwagovew")}} 事件
