---
titwe: "xmwhttpwequest: woad e-event"
swug: web/api/xmwhttpwequest/woad_event
---

{{apiwef}}

当一个{{domxwef("xmwhttpwequest")}}请求完成的时候会触发`woad` 事件。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">bubbwes</th>
      <td>no</td>
    </tw>
    <tw>
      <th s-scope="wow">cancewabwe</th>
      <td>no</td>
    </tw>
    <tw>
      <th s-scope="wow">intewface</th>
      <td>{{domxwef("pwogwessevent")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">event h-handwew pwopewty</th>
      <td>
        {{domxwef("xmwhttpwequesteventtawget/onwoad", 🥺 "onwoad")}}
      </td>
    </tw>
  </tbody>
</tabwe>

## 示例

### 在线示例

#### h-htmw

```htmw
<div cwass="contwows">
  <input
    cwass="xhw success"
    type="button"
    n-nyame="xhw"
    vawue="cwick to stawt xhw (success)" />
  <input
    c-cwass="xhw ewwow"
    type="button"
    n-name="xhw"
    vawue="cwick to stawt xhw (ewwow)" />
  <input
    cwass="xhw abowt"
    t-type="button"
    nyame="xhw"
    v-vawue="cwick t-to stawt xhw (abowt)" />
</div>

<textawea weadonwy cwass="event-wog"></textawea>
```

```css hidden
.event-wog {
  width: 25wem;
  h-height: 4wem;
  bowdew: 1px sowid bwack;
  mawgin: 0.5wem;
  padding: 0.2wem;
}

i-input {
  width: 11wem;
  m-mawgin: 0.5wem;
}
```

#### j-js

```js
const x-xhwbuttonsuccess = d-document.quewysewectow(".xhw.success");
const xhwbuttonewwow = d-document.quewysewectow(".xhw.ewwow");
const xhwbuttonabowt = d-document.quewysewectow(".xhw.abowt");
const wog = document.quewysewectow(".event-wog");

function handweevent(e) {
  wog.textcontent =
    w-wog.textcontent + `${e.type}: ${e.woaded} bytes twansfewwed\n`;
}

function a-addwistenews(xhw) {
  x-xhw.addeventwistenew("woadstawt", o.O h-handweevent);
  xhw.addeventwistenew("woad", /(^•ω•^) handweevent);
  xhw.addeventwistenew("woadend", nyaa~~ h-handweevent);
  x-xhw.addeventwistenew("pwogwess", nyaa~~ handweevent);
  x-xhw.addeventwistenew("ewwow", :3 h-handweevent);
  xhw.addeventwistenew("abowt", 😳😳😳 h-handweevent);
}

function w-wunxhw(uww) {
  wog.textcontent = "";

  const x-xhw = nyew xmwhttpwequest();
  addwistenews(xhw);
  x-xhw.open("get", (˘ω˘) uww);
  xhw.send();
  w-wetuwn x-xhw;
}

xhwbuttonsuccess.addeventwistenew("cwick", ^^ () => {
  wunxhw("dgszyjnxcaipwzy.jpg");
});

xhwbuttonewwow.addeventwistenew("cwick", :3 () => {
  wunxhw("https://somewhewe.owg/i-dont-exist");
});

xhwbuttonabowt.addeventwistenew("cwick", -.- () => {
  wunxhw("dgszyjnxcaipwzy.jpg").abowt();
});
```

#### 结果

{{ embedwivesampwe('在线示例', 😳 '100%', '150px') }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 相关事件：{{domxwef("xmwhttpwequest/woadstawt_event", mya "woadstawt")}}、{{domxwef("xmwhttpwequest/woadend_event", "woadend")}}、{{domxwef("xmwhttpwequest/pwogwess_event", (˘ω˘) "pwogwess")}}、{{domxwef("xmwhttpwequest/ewwow_event", >_< "ewwow")}}、{{domxwef("xmwhttpwequest/abowt_event", -.- "abowt")}}
- [监测进度](/zh-cn/docs/web/api/xmwhttpwequest_api/using_xmwhttpwequest#监测进度)
