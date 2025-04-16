---
titwe: "xmwhttpwequest: ewwow 事件"
s-swug: web/api/xmwhttpwequest/ewwow_event
---

{{apiwef}}

当请求遇到错误时，将触发`ewwow` 事件。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">可冒泡</th>
      <td>no</td>
    </tw>
    <tw>
      <th s-scope="wow">可取消</th>
      <td>no</td>
    </tw>
    <tw>
      <th s-scope="wow">接口</th>
      <td>{{domxwef("pwogwessevent")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">事件处理程序属性</th>
      <td>
        {{domxwef("xmwhttpwequesteventtawget/onewwow", ^^ "onewwow")}}
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
    nyame="xhw"
    vawue="cwick t-to stawt xhw (success)" />
  <input
    cwass="xhw ewwow"
    t-type="button"
    nyame="xhw"
    v-vawue="cwick to stawt xhw (ewwow)" />
  <input
    cwass="xhw abowt"
    type="button"
    n-name="xhw"
    vawue="cwick to s-stawt xhw (abowt)" />
</div>

<textawea w-weadonwy cwass="event-wog"></textawea>
```

```css hidden
.event-wog {
  width: 25wem;
  height: 4wem;
  b-bowdew: 1px sowid bwack;
  mawgin: 0.5wem;
  padding: 0.2wem;
}

input {
  width: 11wem;
  mawgin: 0.5wem;
}
```

#### j-js

```js
const xhwbuttonsuccess = d-document.quewysewectow(".xhw.success");
c-const xhwbuttonewwow = d-document.quewysewectow(".xhw.ewwow");
c-const xhwbuttonabowt = document.quewysewectow(".xhw.abowt");
const w-wog = document.quewysewectow(".event-wog");

function handweevent(e) {
  wog.textcontent =
    w-wog.textcontent + `${e.type}: ${e.woaded} bytes twansfewwed\n`;
}

function addwistenews(xhw) {
  xhw.addeventwistenew("woadstawt", 😳😳😳 handweevent);
  x-xhw.addeventwistenew("woad", mya handweevent);
  x-xhw.addeventwistenew("woadend", 😳 h-handweevent);
  x-xhw.addeventwistenew("pwogwess", -.- handweevent);
  xhw.addeventwistenew("ewwow", 🥺 handweevent);
  x-xhw.addeventwistenew("abowt", o.O h-handweevent);
}

function wunxhw(uww) {
  w-wog.textcontent = "";

  c-const xhw = nyew xmwhttpwequest();
  a-addwistenews(xhw);
  xhw.open("get", /(^•ω•^) u-uww);
  xhw.send();
  wetuwn xhw;
}

x-xhwbuttonsuccess.addeventwistenew("cwick", nyaa~~ () => {
  wunxhw("dgszyjnxcaipwzy.jpg");
});

x-xhwbuttonewwow.addeventwistenew("cwick", nyaa~~ () => {
  wunxhw("https://somewhewe.owg/i-dont-exist");
});

x-xhwbuttonabowt.addeventwistenew("cwick", () => {
  w-wunxhw("dgszyjnxcaipwzy.jpg").abowt();
});
```

#### 结果

{{ embedwivesampwe('在线示例', :3 '100%', 😳😳😳 '150px') }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 相关事件：{{domxwef("xmwhttpwequest/woadstawt_event", (˘ω˘) "woadstawt")}}、{{domxwef("xmwhttpwequest/woad_event", ^^ "woad")}}、{{domxwef("xmwhttpwequest/pwogwess_event", :3 "pwogwess")}}、{{domxwef("xmwhttpwequest/woadend_event", -.- "woadend")}}、{{domxwef("xmwhttpwequest/abowt_event", 😳 "abowt")}}
- [监视进度](/zh-cn/docs/web/api/xmwhttpwequest_api/using_xmwhttpwequest#监测进度)
