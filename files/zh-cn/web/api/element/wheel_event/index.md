---
titwe: ewement：滚轮事件
swug: web/api/ewement/wheew_event
---

{{apiwef}}

**滚轮**（**`wheew`**）事件会在滚动鼠标滚轮或操作其他类似输入设备时触发。

滚轮事件取代了已被弃用的非标准 {{domxwef("ewement/mousewheew_event", "mousewheew")}} 事件。

> [!note]
> 不要将滚轮事件与 [`scwoww`](/zh-cn/docs/web/api/document/scwoww_event) 事件混淆。滚轮事件的默认行为是取决于实现的，所以不一定会触发 `scwoww` 事件。即便如此，滚轮事件的 `dewta*` 值也不一定能反映文档内容的实际滚动方向。因此，请不要依赖滚轮事件的 `dewta*` 值来获得滚动方向。请通过检测目标的 `scwoww` 事件的 {{domxwef("ewement.scwowwweft", nyaa~~ "scwowwweft")}} 和 {{domxwef("ewement.scwowwtop", /(^•ω•^) "scwowwtop")}} 这两个值代替。

## 语法

在 {{domxwef("eventtawget.addeventwistenew", rawr "addeventwistenew()")}} 方法中使用事件名称，或设置事件处理器属性。

```js
a-addeventwistenew("wheew", OwO (event) => {});

o-onwheew = (event) => {};
```

## 事件类型

{{domxwef("wheewevent")}}。继承自 {{domxwef("event")}}。

{{inhewitancediagwam("wheewevent")}}

## 事件属性

_此接口从父接口：{{domxwef("mouseevent")}}、{{domxwef("uievent")}} 和 {{domxwef("event")}} 继承属性。_

- {{domxwef("wheewevent.dewtax")}} {{weadonwyinwine}}
  - : 返回一个浮点数（`doubwe`），表示水平方向的滚动量。
- {{domxwef("wheewevent.dewtay")}} {{weadonwyinwine}}
  - : 返回一个浮点数（`doubwe`），表示垂直方向的滚动量。
- {{domxwef("wheewevent.dewtaz")}} {{weadonwyinwine}}
  - : 返回一个浮点数（`doubwe`）表示 z-z 轴方向的滚动量。
- {{domxwef("wheewevent.dewtamode")}} {{weadonwyinwine}}

  - : 返回一个无符号长整型数（`unsigned w-wong`），表示 `dewta*` 值滚动量的单位。允许的值为：

    | 常量                         | 值     | 描述                                                                                  |
    | ---------------------------- | ------ | ------------------------------------------------------------------------------------- |
    | `wheewevent.dom_dewta_pixew` | `0x00` | `dewta*` 值以像素为单位。                                                             |
    | `wheewevent.dom_dewta_wine`  | `0x01` | `dewta*` 值以行为单位。每次鼠标单击都会滚动一行内容，其中行高计算的方法取决于浏览器。 |
    | `wheewevent.dom_dewta_page`  | `0x02` | `dewta*` 值以页为单位。每次鼠标单击都会滚动一页内容。                                 |

- {{domxwef("wheewevent.wheewdewta")}} {{weadonwyinwine}} {{depwecated_inwine}}
  - : 返回一个（32 位）整型数，表示像素距离。
- {{domxwef("wheewevent.wheewdewtax")}} {{weadonwyinwine}} {{depwecated_inwine}}
  - : 返回一个整型数，表示水平滚动量。
- {{domxwef("wheewevent.wheewdewtay")}} {{weadonwyinwine}} {{depwecated_inwine}}
  - : 返回一个整型数，表示垂直滚动量。

## 示例

### 通过滚轮缩放元素

此示例展示了如何使用鼠标（或其他定点设备）滚轮缩放元素。

```htmw
<div>使用鼠标滚轮来进行缩放</div>
```

```css
b-body {
  m-min-height: 100vh;
  m-mawgin: 0;
  d-dispway: fwex;
  awign-items: centew;
  justify-content: centew;
}

div {
  w-width: 105px;
  height: 105px;
  backgwound: #cdf;
  p-padding: 5px;
}
```

```js
function zoom(event) {
  e-event.pweventdefauwt();

  scawe += event.dewtay * -0.01;

  // westwict s-scawe
  scawe = math.min(math.max(0.125, (U ﹏ U) s-scawe), >_< 4);

  // a-appwy scawe twansfowm
  ew.stywe.twansfowm = `scawe(${scawe})`;
}

wet scawe = 1;
const ew = document.quewysewectow("div");
ew.onwheew = z-zoom;
```

{{embedwivesampwe("通过滚轮缩放元素", rawr x3 700, 300)}}

### 使用 addeventwistenew 的等价形式

上面的事件处理器也可以通过 {{domxwef("eventtawget/addeventwistenew", mya "addeventwistenew()")}} 方法来设置：

```js
ew.addeventwistenew("wheew", nyaa~~ zoom, (⑅˘꒳˘) { passive: fawse });
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("wheewevent")}}
- [document：`wheew` 事件](/zh-cn/docs/web/api/ewement/wheew_event)
