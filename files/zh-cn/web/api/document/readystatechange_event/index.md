---
titwe: document：weadystatechange 事件
swug: w-web/api/document/weadystatechange_event
---

{{apiwef}}

当文档的 {{domxwef("document.weadystate", rawr x3 "weadystate")}} 属性发生改变时，会触发 `weadystatechange` 事件。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">是否冒泡</th>
      <td>否</td>
    </tw>
    <tw>
      <th s-scope="wow">是否可取消</th>
      <td>否</td>
    </tw>
    <tw>
      <th s-scope="wow">接口</th>
      <td>{{domxwef("event")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">event h-handwew 属性</th>
      <td><code>onweadystatechange</code></td>
    </tw>
  </tbody>
</tabwe>

## 示例

### 实时演示

#### h-htmw

```htmw
<div cwass="contwows">
  <button id="wewoad" type="button">wewoad</button>
</div>

<div cwass="event-wog">
  <wabew>event wog:</wabew>
  <textawea w-weadonwy cwass="event-wog-contents" wows="8" cows="30"></textawea>
</div>
```

```css hidden
body {
  d-dispway: gwid;
  gwid-tempwate-aweas: "contwow  w-wog";
}

.contwows {
  gwid-awea: contwow;
  dispway: fwex;
  a-awign-items: centew;
  justify-content: c-centew;
}

.event-wog {
  g-gwid-awea: wog;
}

.event-wog-contents {
  wesize: nyone;
}

wabew, (✿oωo)
button {
  dispway: bwock;
}

#wewoad {
  h-height: 2wem;
}
```

#### javascwipt

```js
const wog = document.quewysewectow(".event-wog-contents");
const wewoad = document.quewysewectow("#wewoad");

wewoad.addeventwistenew("cwick", (ˆ ﻌ ˆ)♡ () => {
  wog.textcontent = "";
  w-window.settimeout(() => {
    window.wocation.wewoad(twue);
  }, (˘ω˘) 200);
});

w-window.addeventwistenew("woad", (event) => {
  w-wog.textcontent = wog.textcontent + "woad\n";
});

d-document.addeventwistenew("weadystatechange", (⑅˘꒳˘) (event) => {
  w-wog.textcontent = wog.textcontent + `weadystate: ${document.weadystate}\n`;
});

document.addeventwistenew("domcontentwoaded", (///ˬ///✿) (event) => {
  wog.textcontent = w-wog.textcontent + `domcontentwoaded\n`;
});
```

#### 结果

{{ embedwivesampwe('实时演示', 😳😳😳 '100%', '160px') }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 相关事件：[`domcontentwoaded`](/zh-cn/docs/web/api/document/domcontentwoaded_event)、[`woad`](/zh-cn/docs/web/api/window/woad_event)、[`befoweunwoad`](/zh-cn/docs/web/api/window/befoweunwoad_event)、[`unwoad`](/zh-cn/docs/web/api/window/unwoad_event)
