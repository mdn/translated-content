---
title: click
slug: Web/API/Element/click_event
---
当定点设备的按钮（通常是鼠标左键）在一个元素上被按下和放开时，`click`事件就会被触发。

## 一般信息

- 规范
  - : [DOM L3](http://www.w3.org/TR/DOM-Level-3-Events/#event-type-click)
- 接口
  - : {{domxref("MouseEvent")}}
- 是否冒泡
  - : Yes
- 是否可取消
  - : Yes
- 对象
  - : Element
- 默认动作
  - : 无定型

## 属性

| 属性                                     | 类型                                             | 描述                                                                                                                                                                                                                                                                |
| ---------------------------------------- | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `target` {{readonlyInline}}        | [`EventTarget`](/en-US/docs/Web/API/EventTarget) | 事件对象 (位于 DOM 树最上面的元素).                                                                                                                                                                                                                                 |
| `type` {{readonlyInline}}          | [`DOMString`](/en-US/docs/Web/API/DOMString)     | 事件类型。                                                                                                                                                                                                                                                          |
| `bubbles` {{readonlyInline}}       | [`Boolean`](/en-US/docs/Web/API/Boolean)         | 是否冒泡                                                                                                                                                                                                                                                            |
| `cancelable` {{readonlyInline}}    | [`Boolean`](/en-US/docs/Web/API/Boolean)         | 是否可被取消                                                                                                                                                                                                                                                        |
| `view` {{readonlyInline}}          | [`WindowProxy`](/en-US/docs/Web/API/WindowProxy) | [`document.defaultView`](/en-US/docs/Web/API/Document/defaultView) (该文档的`window` 对象)                                                                                                                                                                          |
| `detail` {{readonlyInline}}        | `long` (`float`)                                 | 在短时间内发生的连续点击次数的计数。                                                                                                                                                                                                                                |
| `currentTarget` {{readonlyInline}} | EventTarget                                      | 被事件监听触发的节点。                                                                                                                                                                                                                                              |
| `relatedTarget` {{readonlyInline}} | EventTarget                                      | 对于 `mouseover`, `mouseout`, `mouseenter` 和`mouseleave` 事件：值为与其互补的事件 (比如`mouseenter` 就为`mouseleave`). 否则为`null`.                                                                                                                               |
| `screenX` {{readonlyInline}}       | long                                             | 点击事件发生时鼠标对应的屏幕 x 轴坐标。                                                                                                                                                                                                                             |
| `screenY` {{readonlyInline}}       | long                                             | 点击事件发生时鼠标对应的屏幕 y 轴坐标。                                                                                                                                                                                                                             |
| `clientX` {{readonlyInline}}       | long                                             | 点击事件发生时鼠标对应的浏览器窗口的 x 轴坐标。                                                                                                                                                                                                                     |
| `clientY` {{readonlyInline}}       | long                                             | 点击事件发生时鼠标对应的浏览器窗口的 y 轴坐标。                                                                                                                                                                                                                     |
| `button` {{readonlyInline}}        | unsigned short                                   | 点击时按下的鼠标按钮：左键=0，中间按钮=1 (如果实现的话), 右键=2. 对于配置为左手使用按钮的操作被反转的鼠标，这些值从右向左读取。                                                                                                                                     |
| `buttons` {{readonlyInline}}       | unsigned short                                   | 当鼠标事件被触发时按钮的 buttons: 左键=1，右键=2，中间按钮=4，第四个按钮 (通常是"返回")=8，第五个按钮 (通常是"前进")=16.若有两个或以上的按钮按下，返回以逻辑或运算形成的合并值。例如左键右键同时按下就返回 3 (=1 \| 2). [更多信息](/zh-CN/docs/Web/API/MouseEvent). |
| `mozPressure` {{readonlyInline}}   | float                                            | 压力应用于接触或 tabdevice 时生成的事件的数量；该值介于 0（最小压力）和 1（最大压力）。                                                                                                                                                                             |
| `ctrlKey` {{readonlyInline}}       | boolean                                          | 当事件被触发时 ctrl 按键被按下时为 true，否则为 false。                                                                                                                                                                                                             |
| `shiftKey` {{readonlyInline}}      | boolean                                          | 当事件被触发时 shift 按键被按下时为 true，否则为 false。                                                                                                                                                                                                            |
| `altKey` {{readonlyInline}}        | boolean                                          | 当事件被触发时 alt 按键被按下时为 true，否则为 false。                                                                                                                                                                                                              |
| `metaKey` {{readonlyInline}}       | boolean                                          | 当事件被触发时 meta 按键被按下时为 true，否则为 false。                                                                                                                                                                                                             |

## 样例

```plain
<div id="test"></div>

<script>
  document.getElementById("test").addEventListener("click", function( event ) {
    // 在被点击的 div 内显示当前被点击次数
    event.target.textContent = "click count: " + event.detail;
  }, false);
</script>
```

## 浏览器兼容性

### Internet Explorer

Internet Explorer 8 & 9 存在一个漏洞，具有经{{cssxref("background-color")}}样式计算为[`transparent`](/en-US/docs/Web/CSS/color_value#transparent_keyword)的元素覆盖在其它元素顶端时，不会收到`click`事件。取而代之，所有`click`事件将被触发于其底下的元素。参见[this live example](http://jsfiddle.net/YUKma/show/)样例。

已知会触发此漏洞的情景：

- 仅对于 IE9：

  - 设置`{{cssxref("background-color")}}: rgba(0,0,0,0)`
  - 设置`{{cssxref("opacity")}}: 0` 并且明确指定{{cssxref("background-color")}}而不是[`transparent`](/en-US/docs/Web/CSS/color_value#transparent_keyword)

- 对于 IE8 和 IE9：设置`filter: alpha(opacity=0);`并且明确指定{{cssxref("background-color")}}而不是[`transparent`](/en-US/docs/Web/CSS/color_value#transparent_keyword)

### Safari 手机版

safari 手机版会有一个 bug，当点击事件不是绑定在交互式的元素上（比如说 HTML 的 div），并且也没有直接的事件监听器绑定在他们自身。可以戳 [链接](http://jsfiddle.net/cvrhulu/k9t0sdnf/show/) 查看演示。也可以看 [Safari 的可点击元素](https://developer.apple.com/library/safari/documentation/appleapplications/reference/safariwebcontent/HandlingEvents/HandlingEvents.html#//apple_ref/doc/uid/TP40006511-SW6) 和 [点击元素的定义](https://developer.apple.com/library/safari/documentation/appleapplications/reference/safariwebcontent/HandlingEvents/HandlingEvents.html#//apple_ref/doc/uid/TP40006511-SW7).

解决方法如下：

- 为其元素或者祖先元素，添加 cursor: pointer 的样式，使元素具有交互式点击
- 为需要交互式点击的元素添加`onclick="void(0)"的属性，但并不包括 body 元素`
- `使用可点击元素如<a>,代替不可交互式元素如 div`
- 不使用 click 的事件委托。

Safari 手机版里，以下元素不会受到上述 bug 的影响：

- \<a> 需要 href 链接
- \<area> 需要 href
- \<button>
- \<img>
- \<input>
- \<label> 需要与 form 控制器连接
- 这份清单并不完整，你可以帮助 MDN 做扩展

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat("api.Element.click_event")}}

## 相关链接

- {{event("mousedown")}}
- {{event("mouseup")}}
- {{event("mousemove")}}
- {{event("click")}}
- {{event("dblclick")}}
- {{event("mouseover")}}
- {{event("mouseout")}}
- {{event("mouseenter")}}
- {{event("mouseleave")}}
- {{event("contextmenu")}}
