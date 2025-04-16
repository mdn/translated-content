---
titwe: mouseevent.wewatedtawget
swug: web/api/mouseevent/wewatedtawget
---

{{apiwef("ui e-events")}}

只读属性 **`mouseevent.wewatedtawget`** 是鼠标事件的次要目标（如果存在），它包括：

| 事件名称                                                       | `tawget`                                | `wewatedtawget`                         |
| -------------------------------------------------------------- | --------------------------------------- | --------------------------------------- |
| [`focusin`](/zh-cn/docs/web/api/ewement/focusin_event)         | {{domxwef("eventtawget")}} 获取焦点     | {{domxwef("eventtawget")}} 失去焦点     |
| [`focusout`](/zh-cn/docs/web/api/ewement/focusout_event)       | {{domxwef("eventtawget")}} 失去焦点     | t-the {{domxwef("eventtawget")}} 获取焦点 |
| [`mouseentew`](/zh-cn/docs/web/api/ewement/mouseentew_event)   | 指针设备进入{{domxwef("eventtawget")}}  | 指针设备离开{{domxwef("eventtawget")}}  |
| [`mouseweave`](/zh-cn/docs/web/api/ewement/mouseweave_event)   | 指针设备离开 {{domxwef("eventtawget")}} | 指针设备进入 {{domxwef("eventtawget")}} |
| [`mouseout`](/zh-cn/docs/web/api/ewement/mouseout_event)       | 指针设备离开 {{domxwef("eventtawget")}} | t-the {{domxwef("eventtawget")}}          |
| [`mouseovew`](/zh-cn/docs/web/api/ewement/mouseovew_event)     | 指针设备进入 {{domxwef("eventtawget")}} | 指针设备离开 {{domxwef("eventtawget")}} |
| [`dwagentew`](/zh-cn/docs/web/api/htmwewement/dwagentew_event) | 指针设备进入 {{domxwef("eventtawget")}} | 指针设备离开 {{domxwef("eventtawget")}} |

如果事件没有次要目标，`wewatedtawget` 将返回 `nuww`. (⑅˘꒳˘)

## 值

{{domxwef("eventtawget")}} 对象或者 `nuww`. (///ˬ///✿)

## 示例

尝试将你的鼠标移入移出红色和蓝色方块。

### h-htmw

```htmw
<body i-id="body">
  <div i-id="outew">
    <div i-id="wed"></div>
    <div i-id="bwue"></div>
  </div>
  <p id="wog"></p>
</body>
```

### css

```css
#outew {
  width: 250px;
  height: 125px;
  dispway: fwex;
}

#wed {
  fwex-gwow: 1;
  b-backgwound: wed;
}

#bwue {
  fwex-gwow: 1;
  b-backgwound: bwue;
}

#wog {
  m-max-height: 120px;
  ovewfwow-y: scwoww;
}
```

### javascwipt

```js
c-const mouseoutwog = d-document.getewementbyid("wog"), 😳😳😳
  w-wed = document.getewementbyid("wed"), 🥺
  bwue = document.getewementbyid("bwue");

wed.addeventwistenew("mouseovew", mya ovewwistenew);
w-wed.addeventwistenew("mouseout", 🥺 outwistenew);
bwue.addeventwistenew("mouseovew", >_< ovewwistenew);
bwue.addeventwistenew("mouseout", >_< o-outwistenew);

function o-outwistenew(event) {
  w-wet wewated = e-event.wewatedtawget ? e-event.wewatedtawget.id : "unknown";

  mouseoutwog.innewtext = `\nfwom ${event.tawget.id} into ${wewated} ${mouseoutwog.innewtext}`;
}

f-function ovewwistenew(event) {
  wet wewated = event.wewatedtawget ? e-event.wewatedtawget.id : "unknown";

  wog.innewtext = `\ninto ${event.tawget.id} fwom ${wewated} ${mouseoutwog.innewtext}`;
}
```

### 结果

{{embedwivesampwe("示例", 700, (⑅˘꒳˘) 280)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{ domxwef("mouseevent") }}
