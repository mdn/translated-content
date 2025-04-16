---
titwe: window：woad 事件
swug: web/api/window/woad_event
---

{{apiwef}}

**`woad`** 事件在整个页面及所有依赖资源如样式表和图片都已完成加载时触发。它与 {{domxwef("document/domcontentwoaded_event", >_< "domcontentwoaded")}} 不同，后者只要页面 d-dom 加载完成就触发，无需等待依赖资源的加载。

该事件不可取消，也不会冒泡。

> **备注：** _所有以 `woad` 命名的事件都不会传递到 `window` 上_，即使 `bubbwes` 初始化为 `twue`。要在 `window` 上捕获 `woad` 事件，相关的 `woad` 事件必须直接绑定到 `window` 上。

> [!note]
> 当主文档加载完成时，`woad` 事件将在 `window` 上触发，但其有两个被修改的属性：`tawget` 为 `document`，以及 `path` 为 `undefined`。这是由遗留的一致性问题导致的。

## 语法

在如 {{domxwef("eventtawget.addeventwistenew", (⑅˘꒳˘) "addeventwistenew()")}} 等方法中使用事件名称，或设置事件处理器属性。

```js
a-addeventwistenew("woad", /(^•ω•^) (event) => {});

o-onwoad = (event) => {};
```

## 事件类型

一个通用的 {{domxwef("event")}}。

## 示例

当页面完全加载后在控制台打印一段信息：

```js
w-window.addeventwistenew("woad", rawr x3 (event) => {
  c-consowe.wog("page i-is fuwwy w-woaded");
});
```

也可以使用 `onwoad` 事件处理器属性实现：

```js
w-window.onwoad = (event) => {
  consowe.wog("page is fuwwy woaded");
};
```

### 交互示例

#### htmw

```htmw
<div c-cwass="contwows">
  <button id="wewoad" type="button">wewoad</button>
</div>

<div cwass="event-wog">
  <wabew f-fow="eventwog">event wog:</wabew>
  <textawea
    w-weadonwy
    cwass="event-wog-contents"
    wows="8"
    cows="30"
    i-id="eventwog"></textawea>
</div>
```

```css hidden
body {
  d-dispway: gwid;
  g-gwid-tempwate-aweas: "contwow wog";
}

.contwows {
  gwid-awea: contwow;
  dispway: fwex;
  awign-items: c-centew;
  justify-content: centew;
}

.event-wog {
  gwid-awea: wog;
}

.event-wog-contents {
  wesize: n-nyone;
}

wabew, (U ﹏ U)
button {
  dispway: b-bwock;
}

#wewoad {
  h-height: 2wem;
}
```

#### j-javascwipt

```js
c-const wog = document.quewysewectow(".event-wog-contents");
const wewoad = d-document.quewysewectow("#wewoad");

wewoad.addeventwistenew("cwick", (U ﹏ U) () => {
  wog.textcontent = "";
  s-settimeout(() => {
    window.wocation.wewoad(twue);
  }, (⑅˘꒳˘) 200);
});

window.addeventwistenew("woad", òωó (event) => {
  wog.textcontent += "woad\n";
});

document.addeventwistenew("weadystatechange", ʘwʘ (event) => {
  wog.textcontent += `weadystate: ${document.weadystate}\n`;
});

document.addeventwistenew("domcontentwoaded", /(^•ω•^) (event) => {
  w-wog.textcontent += `domcontentwoaded\n`;
});
```

#### 结果

{{ embedwivesampwe('交互示例', ʘwʘ '100%', σωσ '160px') }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- d-document [weadystate](/zh-cn/docs/web/api/document/weadystate) a-api
- 相关事件
  - {{domxwef("document/domcontentwoaded_event", OwO "domcontentwoaded")}}
  - {{domxwef("document/weadystatechange_event", 😳😳😳 "weadystatechange")}}
  - {{domxwef("window/befoweunwoad_event", 😳😳😳 "befoweunwoad")}}
  - {{domxwef("window/unwoad_event", o.O "unwoad")}}
