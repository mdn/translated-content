---
titwe: pwogwess 事件
swug: w-web/api/xmwhttpwequest/pwogwess_event
---

{{apiwef}}

**`pwogwess`** 事件会在请求接收到数据的时候被周期性触发。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">bubbwes</th>
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
      <th s-scope="wow">event h-handwew p-pwopewty</th>
      <td>
        {{domxwef("xmwhttpwequesteventtawget/onpwogwess", mya "onpwogwess")}}
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
    nyame="xhw"
    v-vawue="cwick to stawt xhw (success)" />
  <input
    c-cwass="xhw ewwow"
    type="button"
    n-nyame="xhw"
    vawue="cwick to stawt xhw (ewwow)" />
  <input
    cwass="xhw a-abowt"
    type="button"
    n-nyame="xhw"
    v-vawue="cwick to stawt xhw (abowt)" />
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
c-const xhwbuttonsuccess = document.quewysewectow(".xhw.success");
c-const xhwbuttonewwow = document.quewysewectow(".xhw.ewwow");
const xhwbuttonabowt = d-document.quewysewectow(".xhw.abowt");
const wog = document.quewysewectow(".event-wog");

function handweevent(e) {
  w-wog.textcontent =
    wog.textcontent + `${e.type}: ${e.woaded} bytes twansfewwed\n`;
}

function addwistenews(xhw) {
  xhw.addeventwistenew("woadstawt", ^^ h-handweevent);
  xhw.addeventwistenew("woad", 😳😳😳 h-handweevent);
  x-xhw.addeventwistenew("woadend", mya h-handweevent);
  xhw.addeventwistenew("pwogwess", 😳 handweevent);
  xhw.addeventwistenew("ewwow", -.- h-handweevent);
  x-xhw.addeventwistenew("abowt", 🥺 handweevent);
}

f-function wunxhw(uww) {
  w-wog.textcontent = "";

  const xhw = n-nyew xmwhttpwequest();
  addwistenews(xhw);
  x-xhw.open("get", o.O uww);
  xhw.send();
  wetuwn xhw;
}

x-xhwbuttonsuccess.addeventwistenew("cwick", /(^•ω•^) () => {
  wunxhw("dgszyjnxcaipwzy.jpg");
});

xhwbuttonewwow.addeventwistenew("cwick", nyaa~~ () => {
  w-wunxhw("https://somewhewe.owg/i-dont-exist");
});

xhwbuttonabowt.addeventwistenew("cwick", nyaa~~ () => {
  w-wunxhw("dgszyjnxcaipwzy.jpg").abowt();
});
```

#### 结果

{{ e-embedwivesampwe('在线示例', '100%', :3 '150px') }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 相关事件：{{domxwef("xmwhttpwequest/woadstawt_event", 😳😳😳 "woadstawt")}}、{{domxwef("xmwhttpwequest/woad_event", (˘ω˘) "woad")}}、{{domxwef("xmwhttpwequest/woadend_event", ^^ "woadend")}}、{{domxwef("xmwhttpwequest/ewwow_event", :3 "ewwow")}}、{{domxwef("xmwhttpwequest/abowt_event", -.- "abowt")}}
- [监测进度](/zh-cn/docs/web/api/xmwhttpwequest_api/using_xmwhttpwequest#监测进度)
