---
title: mouseenter
slug: Web/API/Element/mouseenter_event
---
{{APIRef}}

当定点设备（通常指鼠标）移动到元素上时就会触发 `mouseenter 事件`

类似 {{event('mouseover')}}，它们两者之间的差别是 `mouseenter` 不会[冒泡](/zh-CN/docs/Web/API/Event/bubbles)（bubble），也就是说当指针从它的子层物理空间移到它的物理空间上时不会触发

![mouseenter.png](/@api/deki/files/5908/=mouseenter.png)(mouseenter 事件) 触发时，会向层次结构的每个元素发送一个 mouseenter 事件。当指针到达文本时，此处将 4 个事件发送到层次结构的四个元素。![mouseover.png](/@api/deki/files/5909/=mouseover.png)一个单独的 mouseover 事件被发送到 DOM 树的最深层元素，然后它将层次结构向上冒泡，直到它被处理程序取消或到达根目录。

对于深层次结构，发送的 *mouseover* 事件数量可能非常大并且会导致严重的性能问题。在这种情况下，最好是监听 *mouseenter* 事件。（可使用 chrome 开发者工具选项卡中的 Performance 进行性能测试）

结合其对称事件，`mouseleave`, mouseenter DOM 事件的行为方式与 CSS {{cssxref(':hover')}} 伪类非常相似。.

## General info

- Specification
  - [: DOM L3](http://www.w3.org/TR/DOM-Level-3-Events/#event-type-mouseenter)
- Interface
  - : {{domxref('MouseEvent')}}
- Synchronicity
  - : Synchronous
- Bubbles
  - : No
- Cancelable
  - : No
- Target
  - : Element
- Default Action
  - : None

## Properties 属性列表

| Property 属性                            | Type 类型                            | Description 描述                                                                                                                                                                                                                                                                                              |
| ---------------------------------------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `target` {{readonlyInline}}        | {{domxref("EventTarget")}} | 事件 (event) 目标（DOM 树中最顶层的目标）。                                                                                                                                                                                                                                                                   |
| `type` {{readonlyInline}}          | {{domxref("DOMString")}}     | 事件 (event) 类型。                                                                                                                                                                                                                                                                                           |
| `bubbles` {{readonlyInline}}       | Boolean                              | 这个事件是否冒泡                                                                                                                                                                                                                                                                                              |
| `cancelable` {{readonlyInline}}    | `Boolean`                            | 这个事件可否取消                                                                                                                                                                                                                                                                                              |
| `view` {{readonlyInline}}          | {{domxref("WindowProxy")}} | {{domxref("document.defaultView")}} (document 的 `window` )                                                                                                                                                                                                                                      |
| `detail` {{readonlyInline}}        | `long` (`float`)                     | 0.                                                                                                                                                                                                                                                                                                            |
| `currentTarget` {{readonlyInline}} | {{domxref("EventTarget")}} | 事件监听器监听的节点                                                                                                                                                                                                                                                                                          |
| `relatedTarget` {{readonlyInline}} | {{domxref("EventTarget")}} | 对于 `mouseover`, `mouseout`, `mouseenter` 和 `mouseleave` 事件: the target of the complementary event (the `mouseleave` target in the case of a `mouseenter` event). `null` otherwise.                                                                                                                       |
| `screenX` {{readonlyInline}}       | long                                 | 鼠标指针相对于屏幕的 X 轴坐标                                                                                                                                                                                                                                                                                 |
| `screenY` {{readonlyInline}}       | long                                 | 鼠标指针相对于屏幕的 Y 轴坐标                                                                                                                                                                                                                                                                                 |
| `clientX` {{readonlyInline}}       | long                                 | 鼠标指针相对于 DOM 元素的 X 轴坐标                                                                                                                                                                                                                                                                            |
| `clientY` {{readonlyInline}}       | long                                 | 鼠标指针相对于 DOM 元素的 Y 轴坐标                                                                                                                                                                                                                                                                            |
| `button` {{readonlyInline}}        | unsigned short                       | 始终为 0，因为没有按钮会触发这个事件 (mouse movement 事件干的).                                                                                                                                                                                                                                               |
| `buttons` {{readonlyInline}}       | unsigned short                       | 表明当事件触发时鼠标上按下的键：左键=1，右键=2，中键 (鼠标滚轮) =4，第四个按钮 (通常是 “浏览器返回上一个页面”按钮)=8，第五个按钮 (通常是“浏览器向前导航”按钮)=16. 如果很多按钮同时按下，那就返回这些值的逻辑计算值。比如，当左键和右键同时按下时返回 3 (=1 \| 2). [了解更多](/zh-CN/docs/Web/API/MouseEvent). |
| `mozPressure` {{readonlyInline}}   | float                                | The amount of pressure applied to a touch or tabdevice when generating the event; this value ranges between 0.0 (minimum pressure) and 1.0 (maximum pressure).                                                                                                                                                |
| `ctrlKey` {{readonlyInline}}       | boolean                              | `true` 代表当事件触发时按着 ctrl 键。`false` 反之。                                                                                                                                                                                                                                                           |
| `shiftKey` {{readonlyInline}}      | boolean                              | `true` 代表当事件触发时按着 shift 键。`false` 反之。                                                                                                                                                                                                                                                          |
| `altKey` {{readonlyInline}}        | boolean                              | `true` 代表当事件触发时按着 alt 键。`false` 反之。                                                                                                                                                                                                                                                            |
| `metaKey` {{readonlyInline}}       | boolean                              | `true` 代表当事件触发时按着 meta 键 (???) `false` 反之。                                                                                                                                                                                                                                                      |

## Examples

鼠标悬停 ( [`mouseover`](/zh-CN/docs/Web/Events/mouseover#Example)) 文档中有一个示例说明了 mouseover 和 mouseenter 之间的区别。

以下示例说明如何使用 mouseover 模拟 mouseenter 事件的事件委派原则。

```html
<ul id="test">
  <li>
    <ul class="enter-sensitive">
      <li>item 1-1</li>
      <li>item 1-2</li>
    </ul>
  </li>
  <li>
    <ul class="enter-sensitive">
      <li>item 2-1</li>
      <li>item 2-2</li>
    </ul>
  </li>
</ul>

<script>
  var delegationSelector = ".enter-sensitive";

  document.getElementById("test").addEventListener("mouseover", function( event ) {
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

    // the "delegated mouseenter" handler can now be executed
    // change the color of the text
    target.style.color = "orange";
    // reset the color after a small amount of time
    setTimeout(function() {
        target.style.color = "";
    }, 500);


  }, false);


  // function used to check if a DOM element matches a given selector
  // the following code can be replaced by this IE8 compatible function: https://gist.github.com/2851541
  function matches( elem, selector ){
    // the webkitMatchesSelector is prefixed in most (if not all) browsers
    return elem.webkitMatchesSelector( selector );
  };
</script>
```

## 规范

{{Specifications}}

## Browser compatibility

{{Compat("api.Element.mouseenter_event")}}

## See also

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
