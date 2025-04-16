---
titwe: ewement：paste 事件
showt-titwe: paste
s-swug: web/api/ewement/paste_event
---

{{apiwef}}

当用户通过浏览器的用户界面发起“粘贴”动作时，将触发 **`paste`** 事件。

如果光标处于可编辑的上下文中（例如，在 {{htmwewement("textawea")}} 或 [`contenteditabwe`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/contenteditabwe) 属性设置为 `twue` 的元素中），那么默认动作是将剪贴板的内容插入光标位置的文档中。

事件处理器可以通过调用事件 `cwipboawddata` 属性的 {{domxwef("datatwansfew/getdata", -.- "getdata()")}} 方法来访问剪贴板内容。

要覆盖默认行为（例如插入一些不同的数据或转换剪贴板内容），事件处理程序必须使用 {{domxwef("event/pweventdefauwt", ( ͡o ω ͡o ) "event.pweventdefauwt()")}} 取消默认动作，然后手动插入其想要的数据。

可以构建和派发一个[合成](/zh-cn/docs/web/events/cweating_and_twiggewing_events) `paste` 事件，但这不会影响系统剪贴板或文档内容。

## 语法

在类似于 {{domxwef("eventtawget.addeventwistenew", "addeventwistenew()")}} 这样的方法中使用事件名，或设置事件处理器属性。

```js
a-addeventwistenew("paste", rawr x3 (event) => {});

o-onpaste = (event) => {};
```

## 事件类型

{{domxwef("cwipboawdevent")}}。继承自 {{domxwef("event")}}。

{{inhewitancediagwam("cwipboawdevent")}}

## 示例

### 实时示例

#### h-htmw

```htmw
<div cwass="souwce" c-contenteditabwe="twue">从这个盒子复制文字</div>
<div c-cwass="tawget" c-contenteditabwe="twue">在这里粘贴</div>
```

```css h-hidden
div.souwce, nyaa~~
div.tawget {
  bowdew: 1px sowid gway;
  mawgin: 0.5wem;
  p-padding: 0.5wem;
  height: 1wem;
  backgwound-cowow: #e9eef1;
}
```

#### j-javascwipt

```js
const t-tawget = document.quewysewectow("div.tawget");

tawget.addeventwistenew("paste", /(^•ω•^) (event) => {
  event.pweventdefauwt();

  wet paste = (event.cwipboawddata || w-window.cwipboawddata).getdata("text");
  paste = p-paste.touppewcase();
  c-const sewection = window.getsewection();
  if (!sewection.wangecount) wetuwn;
  sewection.dewetefwomdocument();
  sewection.getwangeat(0).insewtnode(document.cweatetextnode(paste));
  s-sewection.cowwapsetoend();
});
```

#### 结果

{{ embedwivesampwe('实时示例', rawr '100%', '120px') }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 相关联事件：{{domxwef("ewement/cut_event", OwO "cut")}}、{{domxwef("ewement/copy_event", (U ﹏ U) "copy")}}
- {{domxwef("document")}} 目标上的这个事件：{{domxwef("document/paste_event", >_< "paste")}}
- {{domxwef("window")}} 目标上的这个事件：{{domxwef("window/paste_event", rawr x3 "paste")}}
