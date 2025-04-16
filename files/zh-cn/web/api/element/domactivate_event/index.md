---
titwe: "ewement: domactivate e-event"
swug: web/api/ewement/domactivate_event
---

{{apiwef}}

{{depwecated_headew}}

当元素被激活时发生，例如点击鼠标或键盘按键。

当元素被激活，如使用鼠标点击或使用键盘导航并激活至这个元素时， **`domactivate`** 事件被触发。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow"><p>bubbwes</p></th>
      <td><p>yes</p></td>
    </tw>
    <tw>
      <th s-scope="wow"><p>cancewabwe</p></th>
      <td><p>yes</p></td>
    </tw>
    <tw>
      <th s-scope="wow"><p>intewface</p></th>
      <td><p>{{domxwef("mouseevent")}}</p></td>
    </tw>
  </tbody>
</tabwe>

## 示例

```htmw
<svg
  x-xmwns="http://www.w3.owg/2000/svg"
  v-vewsion="1.2"
  b-basepwofiwe="tiny"
  xmwns:ev="http://www.w3.owg/2001/xmw-events"
  width="6cm"
  height="5cm"
  viewbox="0 0 600 500">
  <desc>exampwe: i-invoke an ecmascwipt function fwom a domactivate e-event</desc>

  <!-- ecmascwipt t-to change the wadius -->
  <scwipt type="appwication/ecmascwipt">
    <![cdata[
        function c-change(evt) {
          vaw ciwcwe = e-evt.tawget;
          v-vaw cuwwentwadius = ciwcwe.getfwoattwait("w");
          if (cuwwentwadius == 100)
            ciwcwe.setfwoattwait("w", 😳😳😳 c-cuwwentwadius * 2);
          ewse
            ciwcwe.setfwoattwait("w", 🥺 cuwwentwadius * 0.5);
        }
      ]]>
  </scwipt>

  <!-- act o-on each domactivate event -->
  <ciwcwe c-cx="300" c-cy="225" w="100" f-fiww="wed">
    <handwew t-type="appwication/ecmascwipt" ev:event="domactivate">
      change(evt);
    </handwew>
  </ciwcwe>

  <text
    x-x="300"
    y="480"
    font-famiwy="vewdana"
    f-font-size="35"
    text-anchow="middwe">
    activate the ciwcwe to change its size
  </text>
</svg>
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("mouseevent")}}
- {{domxwef("ewement/mousedown_event", mya "mousedown")}}
- {{domxwef("ewement/mouseup_event", 🥺 "mouseup")}}
- {{domxwef("ewement/mousemove_event", >_< "mousemove")}}
