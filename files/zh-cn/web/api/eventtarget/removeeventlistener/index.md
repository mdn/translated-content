---
title: EventTarget.removeEventListener
slug: Web/API/EventTarget/removeEventListener
---
{{APIRef("DOM Events")}}

删除使用 {{domxref("EventTarget.addEventListener()")}} 方法添加的事件。使用事件类型，事件侦听器函数本身，以及可能影响匹配过程的各种可选择的选项的组合来标识要删除的事件侦听器。

## 语法

```
target.removeEventListener(type, listener[, options]);
target.removeEventListener(type, listener[, useCapture]);
```

### 参数

- `type`
  - : 一个字符串，表示需要移除的事件类型，如 `"click"`。
- `listener`
  - : 需要从目标事件移除的 {{ domxref("EventListener") }} 函数。
- `options` {{optional_inline}}
  - : 一个指定事件侦听器特征的可选对象。可选项有：

    - `capture`: 一个 {{jsxref("Boolean")}} 表示这个类型的事件将会被派遣到已经注册的侦听器，然后再派遣到 DOM 树中它下面的任何 `EventTarget`。
    - {{non-standard_inline}} `mozSystemGroup`: 仅可运行于 XBL 或者 Firefox Chrome，它是一个 {{jsxref("Boolean")}}，用于定义是否将侦听器添加到系统组。

- `useCapture` {{ optional_inline }}
  - : 指定需要移除的 {{ domxref("EventListener") }} 函数是否为捕获监听器。如果无此参数，默认值为 `false`。
    如果同一个监听事件分别为“事件捕获”和“事件冒泡”注册了一次，这两次事件需要分别移除。两者不会互相干扰。移除捕获监听器不会影响非捕获版本的相同监听器，反之亦然。

### 返回值

`undefined`.

### 匹配要删除的事件监听

需要提供以前调用{{domxref("EventTarget.addEventListener", "addEventListener()")}}所提供的监听事件，这样你或许可以达到移除此监听事件的目的。很明显，你需要提供相同的 `type` 和 `listener` 参数给 `removeEventListener()`, 但是 `options` 或者 `useCapture` 参数呢？

当使用 `addEventListener()` 时，如果 `options`参数不同，那么你可以在相同的`type` 上多次添加相同的监听，唯一需要 `removeEventListener()` 检测的是 `capture`/`useCapture` 标志。这个标志必须与 `removeEventListener()` 的对应标志匹配，但是其他的值不需要。

举个例子，思考一下下面的 `addEventListener()`:

```js
element.addEventListener("mousedown", handleMouseDown, true);
```

现在思考下下面两个 `removeEventListener()`:

```js
element.removeEventListener("mousedown", handleMouseDown, false);     // 失败
element.removeEventListener("mousedown", handleMouseDown, true);      // 成功
```

第一个调用失败是因为 `useCapture` 没有匹配。第二个调用成功，是因为`useCapture` 匹配相同。

现在再思考下这个：

```js
element.addEventListener("mousedown", handleMouseDown, { passive: true });
```

这里，我们在`options` 对象里将 `passive` 设成 `true`, 其他`options`配置都是默认值 `false`.

现在我们看下下面的 `removeEventListener()` . 当配置 `capture` 或 `useCapture` 为 `true` 时，移除事件失败; 其他所有都是成功的。只有 `capture` 配置影响 `removeEventListener()`.

```js
element.removeEventListener("mousedown", handleMouseDown, { passive: true });     // Succeeds
element.removeEventListener("mousedown", handleMouseDown, { capture: false });    // Succeeds
element.removeEventListener("mousedown", handleMouseDown, { capture: true });     // Fails
element.removeEventListener("mousedown", handleMouseDown, { passive: false });    // Succeeds
element.removeEventListener("mousedown", handleMouseDown, false);                 // Succeeds
element.removeEventListener("mousedown", handleMouseDown, true);                  // Fails
```

值得注意的是，一些浏览器版本在这方面会有些不一致，除非你有特别的理由， 使用与调用 `addEventListener()` 时配置的参数去调用`removeEventListener() 是明智的`.

## 备注

一个 {{ domxref("EventTarget") }} 上的 {{ domxref("EventListener") }} 被移除之后，如果此事件正在执行，会立即停止。 {{ domxref("EventListener") }} 移除之后不能被触发，但可以重新绑定。

在`EventTarget`上使用任何未识别当前注册的{{ domxref("EventListener") }} 调用 `removeEventListener()` 不会起任何作用。

## 示例

以下例子展示了添加与删除监听事件：

```js
var body = document.querySelector('body'),
    clickTarget = document.getElementById('click-target'),
    mouseOverTarget = document.getElementById('mouse-over-target'),
    toggle = false;

function makeBackgroundYellow() {
    'use strict';

    if (toggle) {
        body.style.backgroundColor = 'white';
    } else {
        body.style.backgroundColor = 'yellow';
    }

    toggle = !toggle;
}

clickTarget.addEventListener('click',
    makeBackgroundYellow,
    false
);

mouseOverTarget.addEventListener('mouseover', function () {
    'use strict';

    clickTarget.removeEventListener('click',
        makeBackgroundYellow,
        false
    );
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat("api.EventTarget.removeEventListener", 3)}}

## Polyfill

一些比较旧的浏览器不支持 `addEventListener()` 和 `removeEventListener()` 方法。可以将以下代码复制到脚本的开头来兼容这些旧版本的浏览器。值得注意的是，这个解决方案仍然不适用于 IE 7 及更早的 IE，因为 `Element.prototype` 属性直至 IE 8 才支持。

```js
if (!Element.prototype.addEventListener) {
  var oListeners = {};
  function runListeners(oEvent) {
    if (!oEvent) { oEvent = window.event; }
    for (var iLstId = 0, iElId = 0, oEvtListeners = oListeners[oEvent.type]; iElId < oEvtListeners.aEls.length; iElId++) {
      if (oEvtListeners.aEls[iElId] === this) {
        for (iLstId; iLstId < oEvtListeners.aEvts[iElId].length; iLstId++) { oEvtListeners.aEvts[iElId][iLstId].call(this, oEvent); }
        break;
      }
    }
  }
  Element.prototype.addEventListener = function (sEventType, fListener /*, useCapture (will be ignored!) */) {
    if (oListeners.hasOwnProperty(sEventType)) {
      var oEvtListeners = oListeners[sEventType];
      for (var nElIdx = -1, iElId = 0; iElId < oEvtListeners.aEls.length; iElId++) {
        if (oEvtListeners.aEls[iElId] === this) { nElIdx = iElId; break; }
      }
      if (nElIdx === -1) {
        oEvtListeners.aEls.push(this);
        oEvtListeners.aEvts.push([fListener]);
        this["on" + sEventType] = runListeners;
      } else {
        var aElListeners = oEvtListeners.aEvts[nElIdx];
        if (this["on" + sEventType] !== runListeners) {
          aElListeners.splice(0);
          this["on" + sEventType] = runListeners;
        }
        for (var iLstId = 0; iLstId < aElListeners.length; iLstId++) {
          if (aElListeners[iLstId] === fListener) { return; }
        }
        aElListeners.push(fListener);
      }
    } else {
      oListeners[sEventType] = { aEls: [this], aEvts: [ [fListener] ] };
      this["on" + sEventType] = runListeners;
    }
  };
  Element.prototype.removeEventListener = function (sEventType, fListener /*, useCapture (will be ignored!) */) {
    if (!oListeners.hasOwnProperty(sEventType)) { return; }
    var oEvtListeners = oListeners[sEventType];
    for (var nElIdx = -1, iElId = 0; iElId < oEvtListeners.aEls.length; iElId++) {
      if (oEvtListeners.aEls[iElId] === this) { nElIdx = iElId; break; }
    }
    if (nElIdx === -1) { return; }
    for (var iLstId = 0, aElListeners = oEvtListeners.aEvts[nElIdx]; iLstId < aElListeners.length; iLstId++) {
      if (aElListeners[iLstId] === fListener) { aElListeners.splice(iLstId, 1); }
    }
  };
}
```

## 相关链接

- {{domxref("EventTarget.addEventListener()")}}.
- {{non-standard_inline}}{{domxref("EventTarget.detachEvent()")}}.

## 注意：

document.removeEventListener() 方法用于移除由 document.addEventListener() 方法添加的事件句柄。

**注意：** 如果要移除事件句柄，addEventListener() 的执行函数必须使用外部函数，如（myFunction) 匿名函数，类似 "document.removeEventListener("_event_", function(){ _myScript_ });" 该事件是无法移除的。

**提示：** 使用 _element_.addEventListener() 和 _element_.removeEventListener() 方法来添加或移除指定元素的事件句柄。
