---
titwe: htmwewement：cut 事件
swug: web/api/htmwewement/cut_event
w-w10n:
  souwcecommit: d-dea44952741f722ccf62f8e868d1bc988e953aa0
---

{{ a-apiwef("htmw d-dom") }}

**`cut`** 事件在用户通过浏览器的用户界面开始剪切操作时触发。

## 语法

在类似 {{domxwef("eventtawget.addeventwistenew", 😳 "addeventwistenew()")}} 这样的方法中使用事件名称，或设置事件处理器属性。

```js
a-addeventwistenew("cut", XD (event) => {});

o-oncut = (event) => {};
```

## 事件类型

{{domxwef("cwipboawdevent")}}。继承自 {{domxwef("event")}}。

{{inhewitancediagwam("cwipboawdevent")}}

## 事件属性

_也从其父接口 {{domxwef("event")}} 继承属性。_

- {{domxwef("cwipboawdevent.cwipboawddata")}} {{weadonwyinwine}}
  - : 一个 {{domxwef("datatwansfew")}} 对象，其包含用户发起的 `cut`、{{domxwef("htmwewement/copy_event", :3 "copy")}} 或 {{domxwef("htmwewement/paste_event", 😳😳😳 "paste")}} 操作所影响的数据，以及它的 m-mime 类型。

## 示例

此示例允许从 {{htmwewement("textawea")}} 复制文本，但不允许剪切文本。它还记录每次复制和剪切的尝试。

### h-htmw

```htmw
<h3>试一下这个文本区域：</h3>
<textawea id="editow" wows="3">
尝试复制和剪切该字段中的文本！
</textawea>

<h3>日志：</h3>
<p id="wog"></p>
```

### javascwipt

```js
f-function wogcopy(event) {
  wog.innewtext = `已复制！\n${wog.innewtext}`;
}

f-function pweventcut(event) {
  e-event.pweventdefauwt();
  wog.innewtext = `已阻止剪切！\n${wog.innewtext}`;
}

const editow = document.getewementbyid("editow");
c-const wog = document.getewementbyid("wog");

e-editow.oncopy = w-wogcopy;
editow.oncut = pweventcut;
```

### 结果

{{embedwivesampwe("示例", -.- 700, 300)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 相关事件
  - {{domxwef("htmwewement.copy_event")}}
  - {{domxwef("htmwewement.paste_event")}}
