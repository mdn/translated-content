---
title: mouseleave
slug: Web/API/Element/mouseleave_event
---

{{APIRef}}

指点设备（通常是鼠标）的指针移出某个元素时，会触发`mouseleave`事件。

`mouseleave` 和 {{event('mouseout')}} 是相似的，但是两者的不同在于`mouseleave` 不会冒泡而`mouseout` 会冒泡。
这意味着当指针离开元素及其所有后代时，会触发`mouseleave`，而当指针离开元素或离开元素的后代（即使指针仍在元素内）时，会触发`mouseout`。

<table class="standard" style="border: solid 1px">
  <tbody>
    <tr>
      <td>
        <img
          alt="mouseenter.png"
          class="default internal"
          src="/@api/deki/files/5910/=mouseleave.png"
        />
      </td>
      <td>
        <img
          alt="mouseover.png"
          class="default internal"
          src="/@api/deki/files/5911/=mouseout.png"
        />
      </td>
    </tr>
    <tr>
      <td>
        当离开它们时，一个<code>mouseleave</code>事件被发送到层次结构的每个元素。当指针从文本移动到这里表示的最外面的
        div 之外的区域时，这里 4 个事件会发送到层次结构的四个元素。
      </td>
      <td>
        一个单一的鼠标事件<code>mouseout</code>被发送到 DOM
        树最深的元素，然后它冒泡层次，直到它被处理程序取消或到达根。
      </td>
    </tr>
  </tbody>
</table>

## 一般信息

- 规范
  - : [DOM L3](https://www.w3.org/TR/DOM-Level-3-Events/#event-type-mouseleave)
- 接口
  - : {{domxref("MouseEvent")}}
- 是否冒泡
  - : 否
- 是否可取消
  - : 否
- 对象
  - : Element
- 默认动作
  - : 无

## 属性

| Property                                 | Type                                 | Description                                                                                                                                                                                                                                                                                |
| ---------------------------------------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `target` {{readonlyInline}}        | {{domxref("EventTarget")}} | 事件目标（DOM 树中最顶端的目标）。                                                                                                                                                                                                                                                         |
| `type` {{readonlyInline}}          | {{domxref("DOMString")}}     | 事件的类型。                                                                                                                                                                                                                                                                               |
| `bubbles` {{readonlyInline}}       | Boolean                              | 事件是否正常冒泡                                                                                                                                                                                                                                                                           |
| `cancelable` {{readonlyInline}}    | `Boolean`                            | 事件是否可以取消？                                                                                                                                                                                                                                                                         |
| `view` {{readonlyInline}}          | {{domxref("WindowProxy")}} | {{domxref("document.defaultView")}} (`window` of the document)                                                                                                                                                                                                                |
| `detail` {{readonlyInline}}        | `long` (`float`)                     | 0.                                                                                                                                                                                                                                                                                         |
| `currentTarget` {{readonlyInline}} | {{domxref("EventTarget")}} | 附有事件侦听器的节 ​​ 点。                                                                                                                                                                                                                                                                 |
| `relatedTarget` {{readonlyInline}} | {{domxref("EventTarget")}} | `mouseover`, `mouseout`, `mouseenter` 和 `mouseleave` 事件：互补事件的目标 (详情查看[relatedTarget](/zh-CN/docs/Web/API/MouseEvent/relatedTarget))。                                                                                                                                       |
| `screenX` {{readonlyInline}}       | long                                 | 全局（屏幕）坐标中鼠标指针的 X 坐标。                                                                                                                                                                                                                                                      |
| `screenY` {{readonlyInline}}       | long                                 | 全局（屏幕）坐标中鼠标指针的 Y 坐标。                                                                                                                                                                                                                                                      |
| `clientX` {{readonlyInline}}       | long                                 | 鼠标指针在本地（DOM 内容）坐标中的 X 坐标。                                                                                                                                                                                                                                                |
| `clientY` {{readonlyInline}}       | long                                 | 鼠标指针在本地（DOM 内容）坐标中的 Y 坐标。                                                                                                                                                                                                                                                |
| `button` {{readonlyInline}}        | unsigned short                       | 这总是为 0，因为没有按钮按下触发这个事件（鼠标移动触发的事件）。                                                                                                                                                                                                                           |
| `buttons` {{readonlyInline}}       | unsigned short                       | 当鼠标事件被触发时按下按键：左按键= 1，右按键= 2，中（轮）按键= 4，第四按键（通常为“浏览器后退”按键）= 8，第五按键（通常为“浏览器前进“按键）= 16。如果按下两个或更多按键，则返回值的逻辑和。例如，如果按下左按键和右按键，返回 3（= 1 \| 2）。[更多信息](/zh-CN/docs/Web/API/MouseEvent)。 |
| `mozPressure` {{readonlyInline}}   | float                                | 生成事件时施加到触摸或 tabdevice 的压力量;此值介于 0.0（最小压力）和 1.0（最大压力）之间。                                                                                                                                                                                                 |
| `ctrlKey` {{readonlyInline}}       | boolean                              | 当事件触发时，Ctrl 键是被按下的，则为`true` ，否则为`false`                                                                                                                                                                                                                                |
| `shiftKey` {{readonlyInline}}      | boolean                              | 当事件触发时，shift 键是被按下的，则为`true` ，否则为`false`                                                                                                                                                                                                                               |
| `altKey` {{readonlyInline}}        | boolean                              | 当事件触发时，alt 键是被按下的，则为`true` ，否则为`false`                                                                                                                                                                                                                                 |
| `metaKey` {{readonlyInline}}       | boolean                              | 当事件触发时，meta 键是被按下的，则为`true` ，否则为`false`                                                                                                                                                                                                                                |

## 例子

[`mouseout`](/zh-CN/docs/Web/Events/mouseout#Example) 文档有一个例子，说明了 `mouseout` 和 `mouseleave` 之间的区别。

以下示例说明了如何使用`mouseout`来模拟`mouseleave`事件的事件委托原则。

```html
<ul id="test">
  <li>
    <ul class="leave-sensitive">
      <li>item 1-1</li>
      <li>item 1-2</li>
    </ul>
  </li>
  <li>
    <ul class="leave-sensitive">
      <li>item 2-1</li>
      <li>item 2-2</li>
    </ul>
  </li>
</ul>

<script>
  var delegationSelector = ".leave-sensitive";

  document.getElementById("test").addEventListener("mouseout", function( event ) {
    var target = event.target,
        related = event.relatedTarget,
        match;

    // search for a parent node matching the delegation selector
    while ( target && target != document && !( match = matches( target, delegationSelector ) ) ) {
        target = target.parentNode;
    }

    // exit if no matching node has been found
    if ( !match ) { return; }

    // loop through the parent of the related target to make sure that it's not a child of the target
    while ( related && related != target && related != document ) {
        related = related.parentNode;
    }

    // exit if this is the case
    if ( related == target ) { return; }

    // the "delegated mouseleave" handler can now be executed
    // change the color of the text
    target.style.color = "orange";
    // reset the color after a small amount of time
    setTimeout(function() {
        target.style.color = "";
    }, 500);


  }, false);


  // function used to check if a DOM element matches a given selector
  // the following code can be replaced by this IE8 compatible function: https://gist.github.com/2851541
  function matches( elem, selector ) {
    if (typeof elem.matchesSelector === "function") {
      // the matchesSelector is prefixed in most (if not all) browsers
      return elem.matchesSelector( selector );
    } else if (typeof elem.matches === "function") {
      return elem.matches( selector );
    }
  };
</script>
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{Event("mousedown")}}
- {{Event("mouseup")}}
- {{Event("mousemove")}}
- {{Event("click")}}
- {{Event("dblclick")}}
- {{Event("mouseover")}}
- {{Event("mouseout")}}
- {{Event("mouseenter")}}
- {{Event("mouseleave")}}
- {{Event("contextmenu")}}
