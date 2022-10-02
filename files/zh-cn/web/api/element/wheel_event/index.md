---
title: 滚轮事件
slug: Web/API/Element/wheel_event
---

当滚动鼠标滚轮或操作其它类似输入设备时会触发**滚轮事件**。滚轮事件替换了已被弃用的非标准{{domxref("mousewheel")}}事件。

> **备注：** 请勿想当然依据滚轮方向（即该事件的各 delta 属性值）来推断文档内容的滚动方向，因标准未定义滚轮事件具体会引发什么样的行为，引发的行为实际上是各浏览器自行定义的。即便滚轮事件引发了文档内容的滚动行为，也不表示滚轮方向和文档内容的滚动方向一定相同。因而通过该滚轮事件获知文档内容滚动方向的方法并不可靠。要获取文档内容的滚动方向，可在文档内容滚动事件（{{event("scroll")}}）中监视{{domxref("Element.scrollLeft", "scrollLeft")}}和{{domxref("Element.scrollTop", "scrollTop")}}二值变化情况，即可推断出滚动方向了。

## 概要

- 接口
  - : {{domxref("WheelEvent")}}
- 同步性
  - : 异步
- 事件冒泡
  - : 是
- 可取消
  - : 是
- 目标元素
  - : defaultView, Document, Element
- 默认行为
  - : 滚动，历史记录切换，或者放大／缩小。

## 属性

_滚轮事件实现了以下事件的属性： {{domxref("WheelEvent")}}, {{domxref("MouseEvent")}}, {{domxref("UIEvent")}} and {{domxref("Event")}}._

### Properties of `WheelEvent`

{{page("/zh-CN/docs/Web/API/WheelEvent", "属性")}}

### Properties of `MouseEvent`

{{page("/zh-CN/docs/Web/API/MouseEvent", "属性")}}

### Properties of `UIEvent`

{{page("/zh-CN/docs/Web/API/UIEvent", "属性")}}

### Properties of `Event`

{{page("/zh-CN/docs/Web/API/Event", "属性")}}

## 方法

_滚轮事件实现了以下事件的方法： {{domxref("WheelEvent")}}, {{domxref("MouseEvent")}}, {{domxref("UIEvent")}} and {{domxref("Event")}}._

### Methods of `WheelEvent`

{{page("/zh-CN/docs/Web/API/WheelEvent", "方法")}}

### Methods of `MouseEvent`

{{page("/zh-CN/docs/Web/API/MouseEvent", "方法")}}

### Methods of `UIEvent`

{{page("/zh-CN/docs/Web/API/UIEvent", "方法")}}

### Methods of `Event`

{{page("/zh-CN/docs/Web/API/Event", "方法")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

### 跨浏览器监听滚动事件

`以下脚本创建了一个全局的 addWheelListener` 方法，它可以兼容各浏览器监听滚动事件，并且阻止默认行为。

```js
// creates a global "addWheelListener" method
// example: addWheelListener( elem, function( e ) { console.log( e.deltaY ); e.preventDefault(); } );
(function(window,document) {

    var prefix = "", _addEventListener, onwheel, support;

    // detect event model
    if ( window.addEventListener ) {
        _addEventListener = "addEventListener";
    } else {
        _addEventListener = "attachEvent";
        prefix = "on";
    }

    // detect available wheel event
    support = "onwheel" in document.createElement("div") ? "wheel" : // 各个厂商的高版本浏览器都支持"wheel"
              document.onmousewheel !== undefined ? "mousewheel" : // Webkit 和 IE 一定支持"mousewheel"
              "DOMMouseScroll"; // 低版本 firefox

    window.addWheelListener = function( elem, callback, useCapture ) {
        _addWheelListener( elem, support, callback, useCapture );

        // handle MozMousePixelScroll in older Firefox
        if( support == "DOMMouseScroll" ) {
            _addWheelListener( elem, "MozMousePixelScroll", callback, useCapture );
        }
    };

    function _addWheelListener( elem, eventName, callback, useCapture ) {
        elem[ _addEventListener ]( prefix + eventName, support == "wheel" ? callback : function( originalEvent ) {
            !originalEvent && ( originalEvent = window.event );

            // create a normalized event object
            var event = {
                // keep a ref to the original event object
                originalEvent: originalEvent,
                target: originalEvent.target || originalEvent.srcElement,
                type: "wheel",
                deltaMode: originalEvent.type == "MozMousePixelScroll" ? 0 : 1,
                deltaX: 0,
                deltaZ: 0,
                preventDefault: function() {
                    originalEvent.preventDefault ?
                        originalEvent.preventDefault() :
                        originalEvent.returnValue = false;
                }
            };

            // calculate deltaY (and deltaX) according to the event
            if ( support == "mousewheel" ) {
                event.deltaY = - 1/40 * originalEvent.wheelDelta;
                // Webkit also support wheelDeltaX
                originalEvent.wheelDeltaX && ( event.deltaX = - 1/40 * originalEvent.wheelDeltaX );
            } else {
                event.deltaY = originalEvent.detail;
            }

            // it's time to fire the callback
            return callback( event );

        }, useCapture || false );
    }

})(window,document);
```

## Gecko notes

### 滚轮事件和其它的鼠标滚动事件

如果一个用户真实操作触发的滚轮事件没有被处理，这会触发一个 `DOMMouseScroll` 事件和一个 `MozMousePixelScroll` 事件以向下兼容。它们的属性值由滚轮事件 delta 值和最近的 ancestor clipped 元素计算出。(i.e., [`overflow`](/zh-CN/CSS/overflow) 不可见). 如果滚轮事件或其它任意一个剩余事件被 {{ domxref("event.preventDefault()") }}阻止，将什么都不会发生。

以下为事件顺序：

1. 滚轮事件处于默认事件组 (web 应用和浏览器插件都可以处理这个组的事件)
2. 当连续滚轮事件 deltaY 的值累计大于 1 或小于－1 时，`竖直方向的 DOMMouseScroll` 事件既属于默认事件组也属于系统事件组
3. 当最近的滚轮事件的 deltaY 值非零时，两个事件组都包含竖直方向的 MozMousePixelScroll 事件
4. 当连续滚轮事件 deltaX 的值累计大于 1 或小于－1 时，两个事件组都包含水平`方向的 DOMMouseScroll` 事件
5. 当最近的滚轮事件的 deltaX 值非零时，两个事件组都包含水平方向的 MozMousePixelScroll 事件
6. 一个滚轮事件处于系统事件组 (只有浏览器插件可以处理这个组的事件)

| `wheel` (default event group)      | `preventDefault()` called  |                            |                            |                            |                            |
| ---------------------------------- | -------------------------- | -------------------------- | -------------------------- | -------------------------- | -------------------------- |
| `DOMMouseScroll` (Vertical)        | Not fired                  | `preventDefault()` called  |                            |                            |                            |
| `MozMousePixelScroll` (Vertical)   | Not fired                  | `defaultPrevented` is true | `preventDefault()` called  |                            |                            |
| `DOMMouseScroll` (Horizontal)      | Not fired                  | Not affected               | Not affected               | `preventDefault()` called  |                            |
| `MozMousePixelScroll` (Horizontal) | Not fired                  | Not affected               | Not affected               | `defaultPrevented` is true | `preventDefault()` called  |
| `wheel` (system event group)       | `defaultPrevented` is true | `defaultPrevented` is true | `defaultPrevented` is true | `defaultPrevented` is true | `defaultPrevented` is true |

如果一个浏览器插件需要知道剩余事件是否被 web 内容所处理，它可以使用第 6 个滚轮事件判断，详细内容请查阅系统事件组 [`nsIEventListenerService`](/zh-CN/docs/XPCOM_Interface_Reference/nsIEventListenerService) 的文档。

通过设置用户偏好可以修改 delta 值和默认行为 ([details](https://wiki.mozilla.org/Gecko:Mouse_Wheel_Scrolling#Preferences_for_customizing_delta_values_and_default_action))，因此开发者不应该期望在处理这个事件后发生特殊的行为。

### delta 值

delta 值并不代表默认情况下的实际滚动值，如果用户在滚动滚轮时按住其他键，可能会产生其他行为，比如在浏览记录中前进／回退，或者放大／缩小网页内容。此外，滚动过程中被滚动的元素不一定是目标元素，滚轮事件的目标元素是由事件触发时光标所在位置计算出的。That event may not only not be the one actually being scrolled，甚至都不可滚动。

### deltaMode 值

在 Windows 下，以下三个原生事件造成了 DOM 滚轮事件。

- WM_MOUSEWHEEL (竖直方向的滚动事件)
  - : `deltaMode` 值可以是 `DOM_DELTA_LINE` 或 `DOM_DELTA_PAGE。`它取决于 Windows 的用户设置 (默认设置为 `DOM_DELTA_LINE`)。
- WM_MOUSEHWHEEL (水平方向的滚动事件)
  - : `deltaMode` 值可以是 `DOM_DELTA_LINE` 或 `DOM_DELTA_PAGE`。然而 `Windows` 的滚轮速度设置界面和鼠标驱动工具都没有提供改为 page scroll 的选项。所以这个值通常为 `DOM_DELTA_LINE`.
- WM_GESTURE (Only when caused by panning)
  - : `deltaMode` 值总是 `DOM_DELTA_PIXEL`。但请注意大多数笔记本的触摸板都在模拟鼠标滚轮事件而不是调用这个事件，WM_GESTURE 事件通常被平板电脑使用。

在 Mac 下 deltaMode 值由设备决定。如果设备支持高分辨率像素级滚动，`deltaMode`值就是典型的 `DOM_DELTA_PIXEL`. 然而用户可以通过加前缀`"mousewheel.enable_pixel_scrolling"`将其改变为 `DOM_DELTA_LINE` 。如果设备不支持高分辨率滚动，那么 deltaModel 值将一直为 `DOM_DELTA_LINE`.

在其它平台下，`deltaMode` 值总是 `DOM_DELTA_LINE`。

### Untrusted events

非用户真实操作触发的滚轮事件不会引发默认行为。

## 参考

- {{ domxref("WheelEvent") }}
- Gecko's legacy events: `DOMMouseScroll` and `MozMousePixelScroll`
- Non-Gecko browsers' legacy event: `mousewheel`
- WebKit bug: <https://bugs.webkit.org/show_bug.cgi?id=94081>
