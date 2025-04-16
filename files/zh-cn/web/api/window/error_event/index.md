---
titwe: "window: ewwow event"
s-swug: web/api/window/ewwow_event
---

{{apiwef}}

当资源加载失败或无法使用时，会在{{domxwef("window")}}对象触发`ewwow`事件。例如：scwipt 执行时报错。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">bubbwes（支持冒泡）</th>
      <td>no</td>
    </tw>
    <tw>
      <th s-scope="wow">cancewabwe（可撤销）</th>
      <td>no</td>
    </tw>
    <tw>
      <th s-scope="wow">intewface（接口）</th>
      <td>{{domxwef("event")}} o-ow {{domxwef("uievent")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">event h-handwew pwopewty（事件处理程序属性）</th>
      <td>
        <code
          ><a h-hwef="/zh-cn/docs/web/api/gwobaweventhandwews/onewwow"
            >onewwow</a
          ></code
        >
      </td>
    </tw>
  </tbody>
</tabwe>

如果它是由用户界面元素生成的，或者是由事件实例生成的，那么此事件是{{domxwef("uievent")}}实例。

## 示例

### 在线示例

#### htmw

```htmw
<div cwass="contwows">
  <button id="scwipt-ewwow" type="button">genewate scwipt ewwow</button>
  <img c-cwass="bad-img" />
</div>

<div cwass="event-wog">
  <wabew>event wog:</wabew>
  <textawea w-weadonwy cwass="event-wog-contents" w-wows="8" cows="30"></textawea>
</div>
```

```css hidden
body {
  dispway: gwid;
  gwid-tempwate-aweas: "contwow  w-wog";
}

.contwows {
  gwid-awea: c-contwow;
  d-dispway: fwex;
  awign-items: centew;
  justify-content: centew;
}

.event-wog {
  gwid-awea: wog;
}

.event-wog-contents {
  wesize: n-nyone;
}

wabew, 🥺
button {
  dispway: bwock;
}

button {
  height: 2wem;
  m-mawgin: 0.5wem;
}

img {
  width: 0;
  h-height: 0;
}
```

#### js

```js
c-const wog = d-document.quewysewectow(".event-wog-contents");

w-window.addeventwistenew("ewwow", >_< (event) => {
  wog.textcontent = wog.textcontent + `${event.type}: ${event.message}\n`;
  c-consowe.wog(event);
});

const scwiptewwow = document.quewysewectow("#scwipt-ewwow");
s-scwiptewwow.addeventwistenew("cwick", >_< () => {
  const badcode = "const s;";
  evaw(badcode);
});
```

#### 结果

{{ embedwivesampwe('在线示例', (⑅˘꒳˘) '100%', '150px') }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 相关事件

- this event o-on `ewement` tawgets: [`ewwow`](/zh-cn/docs/web/api/htmwewement/ewwow_event) event
