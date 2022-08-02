---
title: 'HTMLElement: transitionstart 事件'
slug: Web/API/Element/transitionstart_event
tags:
  - CSS Transitions
  - 事件
  - HTML DOM
  - HTMLElement
  - 参考
  - TransitionEvent
  - transitionstart
original_slug: Web/API/HTMLElement/transitionstart_event
browser-compat: api.HTMLElement.transitionstart_event
---
{{APIRef}}{{SeeCompatTable}}

**`transitionstart`** 事件会在 [CSS transition](/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions) 实际开始的时候触发， 或者说在某个 {{cssxref("transition-delay")}} 已经结束之后触发。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">是否冒泡</th>
      <td>是</td>
    </tr>
    <tr>
      <th scope="row">是否可取消</th>
      <td>否</td>
    </tr>
    <tr>
      <th scope="row">接口</th>
      <td>{{domxref("TransitionEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">事件处理器属性</th>
      <td>
        {{domxref("GlobalEventHandlers/ontransitionstart", "ontransitionstart")}}
      </td>
    </tr>
  </tbody>
</table>

## 示例

下列代码对 `transitionstart` 事件添加了一个监听器：

```js
element.addEventListener('transitionstart', () => {
  console.log('transition 开始');
});
```

一样的代码，但是使用 [`ontransitionstart`](/en-US/docs/Web/API/GlobalEventHandlers/ontransitionstart) 属性来替代 `addEventListener()`：

```js
element.ontransitionstart = () => {
  console.log('transition 开始');
};
```

### 运行实例

在下面的例子中，我们有一个简单的 {{htmlelement("div")}} 元素，并设置了一个包含 delay 的 transition 样式。

```html
<div class="transition">Hover over me</div>
<div class="message"></div>
```

```css
.transition {
  width: 100px;
  height: 100px;
  background: rgba(255,0,0,1);
  transition-property: transform, background;
  transition-duration: 2s;
  transition-delay: 1s;
}

.transition:hover {
  transform: rotate(90deg);
  background: rgba(255,0,0,0);
}
```

对此，我们再添加一些 JavaScript 代码来指出 {{domxref("HTMLElement/transitionstart_event", "transitionstart")}} 和 {{domxref("HTMLElement/transitionrun_event", "transitionrun")}} 事件在哪里触发。

```js
const transition = document.querySelector('.transition');
const message = document.querySelector('.message');

transition.addEventListener('transitionrun', function() {
  message.textContent = 'transitionrun 触发了';
});

transition.addEventListener('transitionstart', function() {
  message.textContent = 'transitionstart 触发了';
});

transition.addEventListener('transitionend', function() {
  message.textContent = 'transitionend 触发了';
});
```

{{ EmbedLiveSample('Examples', '100%', '150px') }}

不同的地方是：

- transitionrun 在 transition 创建的时候被触发。（或者说在某个 delay 开始的时候）
- transitionstart 在动画实际开始的时候被触发。 (或者说在某个 delay 结束的时候)

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("GlobalEventHandlers.ontransitionstart")}} 事件处理器
- {{domxref("TransitionEvent")}} 接口
- CSS 属性: {{cssxref("transition")}}, {{cssxref("transition-delay")}}, {{cssxref("transition-duration")}}, {{cssxref("transition-property")}}, {{cssxref("transition-timing-function")}}
- 相关的事件: {{domxref("HTMLElement/transitionend_event", "transitionend")}}, {{domxref("HTMLElement/transitionrun_event", "transitionrun")}}, {{domxref("HTMLElement/transitioncancel_event", "transitioncancel")}}
- 在 {{domxref("Document")}} targets 上的此事件: {{domxref("Document/transitionstart_event", "transitionstart")}}
- 在 {{domxref("Window")}} targets 上的此事件: {{domxref("Window/transitionstart_event", "transitionstart")}}
