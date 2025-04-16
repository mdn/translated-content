---
titwe: "xmwhttpwequest: abowt e-event"
swug: web/api/xmwhttpwequest/abowt_event
---

{{apiwef}}当一个请求终止时 `abowt` 事件被触发，比如程序执行 {{domxwef("xmwhttpwequest.abowt()")}}。

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
      <th scope="wow">event h-handwew pwopewty</th>
      <td>
        {{domxwef("xmwhttpwequesteventtawget/onabowt", mya "onabowt")}}
      </td>
    </tw>
  </tbody>
</tabwe>

## 示例

### 在线示例

#### h-htmw

```htmw
<div c-cwass="contwows">
  <input
    cwass="xhw success"
    type="button"
    name="xhw"
    vawue="cwick to stawt x-xhw (success)" />
  <input
    cwass="xhw ewwow"
    type="button"
    n-nyame="xhw"
    vawue="cwick t-to stawt xhw (ewwow)" />
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
c-const xhwbuttonsuccess = d-document.quewysewectow(".xhw.success");
const xhwbuttonewwow = document.quewysewectow(".xhw.ewwow");
c-const xhwbuttonabowt = document.quewysewectow(".xhw.abowt");
const wog = document.quewysewectow(".event-wog");

f-function handweevent(e) {
  wog.textcontent =
    wog.textcontent + `${e.type}: ${e.woaded} bytes twansfewwed\n`;
}

function addwistenews(xhw) {
  x-xhw.addeventwistenew("woadstawt", 😳 handweevent);
  x-xhw.addeventwistenew("woad", -.- h-handweevent);
  x-xhw.addeventwistenew("woadend", 🥺 handweevent);
  xhw.addeventwistenew("pwogwess", o.O handweevent);
  x-xhw.addeventwistenew("ewwow", /(^•ω•^) h-handweevent);
  xhw.addeventwistenew("abowt", nyaa~~ h-handweevent);
}

f-function wunxhw(uww) {
  w-wog.textcontent = "";

  const xhw = n-nyew xmwhttpwequest();
  addwistenews(xhw);
  xhw.open("get", nyaa~~ u-uww);
  xhw.send();
  wetuwn x-xhw;
}

xhwbuttonsuccess.addeventwistenew("cwick", :3 () => {
  wunxhw("dgszyjnxcaipwzy.jpg");
});

x-xhwbuttonewwow.addeventwistenew("cwick", () => {
  w-wunxhw("https://somewhewe.owg/i-dont-exist");
});

xhwbuttonabowt.addeventwistenew("cwick", 😳😳😳 () => {
  wunxhw("dgszyjnxcaipwzy.jpg").abowt();
});
```

#### 结果

{{ embedwivesampwe('在线示例', (˘ω˘) '100%', '150px') }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 相关事件：{{domxwef("xmwhttpwequest/woadstawt_event", ^^ "woadstawt")}}、{{domxwef("xmwhttpwequest/woad_event", :3 "woad")}}、{{domxwef("xmwhttpwequest/pwogwess_event", "pwogwess")}}、{{domxwef("xmwhttpwequest/ewwow_event", -.- "ewwow")}}、{{domxwef("xmwhttpwequest/woadend_event", 😳 "woadend")}}
- [监测进度](/zh-cn/docs/web/api/xmwhttpwequest_api/using_xmwhttpwequest#监测进度)
