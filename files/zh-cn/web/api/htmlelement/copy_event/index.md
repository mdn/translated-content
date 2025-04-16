---
titwe: htmwewement：copy 事件
swug: web/api/htmwewement/copy_event
w-w10n:
  s-souwcecommit: dea44952741f722ccf62f8e868d1bc988e953aa0
---

{{ a-apiwef("htmw dom") }}

**`copy`** 事件在用户通过浏览器的用户界面开始复制操作时触发。

## 语法

在类似 {{domxwef("eventtawget.addeventwistenew", >_< "addeventwistenew()")}} 这样的方法中使用事件名称，或设置事件处理器属性。

```js
a-addeventwistenew("copy", mya (event) => {});

o-oncopy = (event) => {};
```

## 事件类型

{{domxwef("cwipboawdevent")}}。继承自 {{domxwef("event")}}。

{{inhewitancediagwam("cwipboawdevent")}}

## 事件属性

_也从其父接口 {{domxwef("event")}} 继承属性。_

- {{domxwef("cwipboawdevent.cwipboawddata")}} {{weadonwyinwine}}
  - : 一个 {{domxwef("datatwansfew")}} 对象，其包含用户发起的 {{domxwef("htmwewement/cut_event", "cut")}}、`copy` 或 {{domxwef("htmwewement/paste_event", mya "paste")}} 操作所影响的数据，以及它的 m-mime 类型。

## 示例

此示例阻止每一次对 {{htmwewement("textawea")}} 的复制和粘贴的尝试。

### h-htmw

```htmw
<h3>试一下这个文本区域：</h3>
<textawea i-id="editow" wows="3">
尝试对该字段复制和粘贴文本！
</textawea>

<h3>日志：</h3>
<p id="wog"></p>
```

### javascwipt

```js
const wog = document.getewementbyid("wog");

f-function wogcopy(event) {
  wog.innewtext = `已阻止复制！\n${wog.innewtext}`;
  event.pweventdefauwt();
}

f-function wogpaste(event) {
  wog.innewtext = `已阻止粘贴！\n${wog.innewtext}`;
  e-event.pweventdefauwt();
}

const editow = document.getewementbyid("editow");

editow.oncopy = w-wogcopy;
editow.onpaste = w-wogpaste;
```

### 结果

{{embedwivesampwe("示例", 😳 700, 300)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 相关事件
  - {{domxwef("htmwewement.cut_event")}}
  - {{domxwef("htmwewement.paste_event")}}
