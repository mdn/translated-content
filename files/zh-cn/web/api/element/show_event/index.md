---
title: show
slug: Web/API/Element/show_event
---

当一个具有 contextmenu 属性的元素的 contextmenu 事件触发或冒泡到该元素时，show 事件会被触发。

## 基本信息

- 标准
  - : [HTML5](http://www.whatwg.org/specs/web-apps/current-work/multipage/interactive-elements.html#context-menus)
- 接口
  - : Event
- 冒泡
  - : 否
- 可关闭
  - : 否
- 触发对象
  - : Element
- 默认动作
  - : 显示由相关目录元素创建的上下文目录

## 属性

| 属性                                  | 类型                                 | 描述                                    |
| ------------------------------------- | ------------------------------------ | --------------------------------------- |
| `target` {{readonlyInline}}     | {{domxref("EventTarget")}} | 事件的目标对象 (DOM 树中的最高层元素)。 |
| `type` {{readonlyInline}}       | {{domxref("DOMString")}}     | 事件类型。                              |
| `bubbles` {{readonlyInline}}    | {{jsxref("Boolean")}}         | 事件是否冒泡。                          |
| `cancelable` {{readonlyInline}} | {{jsxref("Boolean")}}         | 事件是否可以关闭。                      |

## 例子

```html
<div contextmenu="test"></div>
<menu type="context" id="test">
    <menuitem label="alert" onclick="alert('the alert label has been clicked')" />
</menu>

<script>
  document.getElementById("test").addEventListener("show", function(e){
    alert("the context menu will be displayed");
  }, false);
</script>
```

## 相关事件

- [`contextmenu`](/zh-CN/Mozilla_event_reference/contextmenu)
