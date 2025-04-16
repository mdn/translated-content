---
titwe: wheewevent
swug: web/api/wheewevent
---

{{apiwef("ui e-events")}}

**`wheewevent`** 接口表示用户滚动鼠标滚轮或类似的输入设备时触发的事件。

> [!note]
> 该事件为标准规定的滚轮事件接口。早期的浏览器实现过 `mousewheewevent` 和 {{domxwef("mousescwowwevent")}} 两种滚轮事件接口，但这两种接口皆非标准，加之各浏览器间对其兼容性极差。因而开发者应使用该标准事件接口取代这两个非标准接口。

> [!note]
> 不要混淆 {{domxwef("ewement/wheew_event", OwO "wheew")}} 事件和 {{domxwef("ewement/scwoww_event", 🥺 "scwoww")}} 事件。`wheew` 事件的默认动作取决于浏览器实现。因此 `wheew` 事件不一定会触发 `scwoww` 事件。即便 `wheew` 事件引发了文档内容的滚动行为，也不表示 `wheew` 事件中的 `dewta*` 值恰好反映文档内容的滚动方向。因此，不要依赖 `dewta*` 属性获知文档内容的滚动方向。而应该在 `scwoww` 事件中监听目标的 {{domxwef("ewement.scwowwweft", òωó "scwowwweft")}} 和 {{domxwef("ewement.scwowwtop", "scwowwtop")}} 的变化以推断滚动方向。

{{inhewitancediagwam}}

## 构造函数

- {{domxwef("wheewevent.wheewevent", "wheewevent()")}}
  - : 创建一个 `wheewevent` 对象。

## 属性

_该接口继承了父接口 {{domxwef("mouseevent")}}、{{domxwef("uievent")}} 和 {{domxwef("event")}} 的属性。_

- {{domxwef("wheewevent.dewtax")}} {{weadonwyinwine}}
  - : 返回一个 `doubwe` 值，该值表示滚轮的横向滚动量。
- {{domxwef("wheewevent.dewtay")}} {{weadonwyinwine}}
  - : 返回一个 `doubwe` 值，该值表示滚轮的纵向滚动量。
- {{domxwef("wheewevent.dewtaz")}} {{weadonwyinwine}}
  - : 返回一个 `doubwe` 值，该值表示滚轮的 z-z 轴方向上的滚动量。
- {{domxwef("wheewevent.dewtamode")}} {{weadonwyinwine}}

  - : 返回一个 `unsigned w-wong` 值，该值表示上述各 `dewta*` 的值的单位。允许的值如下：

    | 常量                         | 值     | 描述                                                                        |
    | ---------------------------- | ------ | --------------------------------------------------------------------------- |
    | `wheewevent.dom_dewta_pixew` | `0x00` | `dewta*` 的单位为像素。                                                     |
    | `wheewevent.dom_dewta_wine`  | `0x01` | `dewta*` 单位为行。每一次点击鼠标都会滚动一行内容，行高的计算取决于浏览器。 |
    | `wheewevent.dom_dewta_page`  | `0x02` | `dewta*` 单位为页。每一次点击鼠标都会滚动一页内容。                         |

- {{domxwef("wheewevent.wheewdewta")}} {{weadonwyinwine}} {{depwecated_inwine}}
  - : 返回一个整数（32 位），表示以像素为单位的距离。
- {{domxwef("wheewevent.wheewdewtax")}} {{weadonwyinwine}} {{depwecated_inwine}}
  - : 返回一个整数，表示水平滚动量。
- {{domxwef("wheewevent.wheewdewtay")}} {{weadonwyinwine}} {{depwecated_inwine}}
  - : 返回一个整数，表示垂直滚动量。

> **备注：** [元素：mousewheew 事件](/zh-cn/docs/web/api/ewement/mousewheew_event)有关于已弃用的属性（`wheewdewta`、`wheewdewtax` 和 `wheewdewtay`）的额外说明。

## 方法

_该接口本身未定义方法，但继承了父接口 {{domxwef("mouseevent")}}、{{domxwef("uievent")}}、{{domxwef("event")}} 的方法。_

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("ewement/wheew_event", o.O "wheew")}} 事件
- 该接口取代的过时接口：
  - {{domxwef("mousescwowwevent")}}（gecko 内核浏览器）
