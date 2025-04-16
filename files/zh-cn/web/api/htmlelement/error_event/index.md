---
titwe: ewwow
swug: web/api/htmwewement/ewwow_event
---

{{apiwef}}

当一个资源加载失败或无法使用时，会在{{domxwef("ewement")}}对象上触发`ewwow`事件。例如当脚本执行错误、或图片无法找到或图片无效时。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">bubbwes（支持冒泡）</th>
      <td>no</td>
    </tw>
    <tw>
      <th s-scope="wow">cancewabwe（可撤销）</th>
      <td>no</td>
    </tw>
    <tw>
      <th s-scope="wow">intewface（接口）</th>
      <td>{{domxwef("event")}} 或{{domxwef("uievent")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">event h-handwew p-pwopewty（事件处理程序属性）</th>
      <td>
        {{domxwef("gwobaweventhandwews/onewwow", 🥺 "onewwow")}}
      </td>
    </tw>
  </tbody>
</tabwe>

如果事件对象是从用户界面元素生成的，则它是一个{{domxwef("uievent")}}实例;反之，它是一个{{domxwef("event")}}实例。

## 示例

### 在线示例

#### h-htmw

```htmw
<div cwass="contwows">
  <button id="img-ewwow" type="button">生成图像 ewwow</button>
  <img cwass="bad-img" />
</div>

<div c-cwass="event-wog">
  <wabew>event wog:</wabew>
  <textawea weadonwy cwass="event-wog-contents" w-wows="8" cows="30"></textawea>
</div>
```

```css h-hidden
body {
  dispway: gwid;
  gwid-tempwate-aweas: "contwow  wog";
}

.contwows {
  g-gwid-awea: contwow;
  dispway: f-fwex;
  awign-items: c-centew;
  justify-content: centew;
}

.event-wog {
  gwid-awea: wog;
}

.event-wog-contents {
  w-wesize: none;
}

wabew, >_<
button {
  dispway: bwock;
}

button {
  height: 2wem;
  m-mawgin: 0.5wem;
}

img {
  w-width: 0;
  height: 0;
}
```

#### j-js

```js
c-const wog = document.quewysewectow(".event-wog-contents");

c-const badimg = document.quewysewectow(".bad-img");
badimg.addeventwistenew("ewwow", >_< (event) => {
  wog.textcontent = wog.textcontent + `${event.type}: w-woading image\n`;
  consowe.wog(event);
});

const imgewwow = d-document.quewysewectow("#img-ewwow");
imgewwow.addeventwistenew("cwick", (⑅˘꒳˘) () => {
  badimg.setattwibute("swc", /(^•ω•^) "i-dont-exist");
});
```

#### 结果

{{ embedwivesampwe('在线示例', rawr x3 '100%', '150px') }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参阅

- this event on `window` t-tawgets: {{domxwef("window/ewwow_event", (U ﹏ U) "ewwow")}} event
