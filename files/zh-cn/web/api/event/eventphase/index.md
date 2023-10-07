---
title: Event.eventPhase
slug: Web/API/Event/eventPhase
---

{{ApiRef("DOM")}}

表示事件流当前处于哪一个阶段。

## 语法

```js
var phase = event.eventPhase;
```

返回一个代表当前执行阶段的 整数值，下面列出了不同的执行阶段[事件阶段常量](#事件阶段常量).

## 常量

### 事件阶段常量

### 下面这些值表示了事件流当前执行的阶段。

| 常量                    | 值  | 描述                                                                                                                                                                                                                                                                                                            |
| ----------------------- | --- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Event.NONE`            | 0   | 这个时间，没有事件正在被处理                                                                                                                                                                                                                                                                                    |
| `Event.CAPTURING_PHASE` | 1   | 事件正在被目标元素的祖先对象处理。这个处理过程从{{domxref("Window")}}开始，然后{{domxref("Document")}}, 然后是{{domxref("HTMLHtmlElement")}}, 一直这样，直到目标元素的父元素。通过{{domxref("EventTarget.addEventListener()")}} 注册为捕获模式的{{domxref("EventListener", "Event listeners", "", 1)}} 被调用。 |
| `Event.AT_TARGET`       | 2   | 事件对象已经抵达{{domxref("EventTarget", "the event's target", "", 1)}}. 为这个阶段注册的事件监听被调用。如果 {{domxref("Event.bubbles")}} 的值为 false，对事件对象的处理在这个阶段后就会结束。                                                                                                                 |
| `Event.BUBBLING_PHASE`  | 3   | 事件对象逆向向上传播回目标元素的祖先元素，从父亲元素开始，并且最终到达包含元素 {{domxref("Window")}}. 这就是冒泡，并且只有{{domxref("Event.bubbles")}} 值为 true 的时候才会发生。为这个阶段注册的{{domxref("EventListener", "Event listeners", "", 1)}} 在这个过程中被触发。                                    |

更多细节，请看[section 3.1, Event dispatch and DOM event flow](http://www.w3.org/TR/DOM-Level-3-Events/#event-flow), DOM 级别 3 的事件说明。

## 示例

### HTML 内容

```html
<h4>Event Propagation Chain</h4>
<ul>
  <li>Click 'd1'</li>
  <li>Analyse event propagation chain</li>
  <li>Click next div and repeat the experience</li>
  <li>Change Capturing mode</li>
  <li>Repeat the experience</li>
</ul>
<input type="checkbox" id="chCapture" />
<label for="chCapture">Use Capturing</label>
<div id="d1">
  d1
  <div id="d2">
    d2
    <div id="d3">
      d3
      <div id="d4">d4</div>
    </div>
  </div>
</div>
<div id="divInfo"></div>
```

### CSS 内容

```css
div {
  margin: 20px;
  padding: 4px;
  border: thin black solid;
}

#divInfo {
  margin: 18px;
  padding: 8px;
  background-color: white;
  font-size: 80%;
}
```

### JavaScript 内容

```js
var clear = false,
  divInfo = null,
  divs = null,
  useCapture = false;
window.onload = function () {
  divInfo = document.getElementById("divInfo");
  divs = document.getElementsByTagName("div");
  chCapture = document.getElementById("chCapture");
  chCapture.onclick = function () {
    RemoveListeners();
    AddListeners();
  };
  Clear();
  AddListeners();
};

function RemoveListeners() {
  for (var i = 0; i < divs.length; i++) {
    var d = divs[i];
    if (d.id != "divInfo") {
      d.removeEventListener("click", OnDivClick, true);
      d.removeEventListener("click", OnDivClick, false);
    }
  }
}

function AddListeners() {
  for (var i = 0; i < divs.length; i++) {
    var d = divs[i];
    if (d.id != "divInfo") {
      d.addEventListener("click", OnDivClick, false);
      if (chCapture.checked) d.addEventListener("click", OnDivClick, true);
      d.onmousemove = function () {
        clear = true;
      };
    }
  }
}

function OnDivClick(e) {
  if (clear) {
    Clear();
    clear = false;
  }
  if (e.eventPhase == 2) e.currentTarget.style.backgroundColor = "red";
  var level =
    e.eventPhase == 0
      ? "none"
      : e.eventPhase == 1
      ? "capturing"
      : e.eventPhase == 2
      ? "target"
      : e.eventPhase == 3
      ? "bubbling"
      : "error";
  divInfo.innerHTML += e.currentTarget.id + "; eventPhase: " + level + "<br/>";
}

function Clear() {
  for (var i = 0; i < divs.length; i++) {
    if (divs[i].id != "divInfo")
      divs[i].style.backgroundColor = i & 1 ? "#f6eedb" : "#cceeff";
  }
  divInfo.innerHTML = "";
}
```

{{ EmbedLiveSample('示例', '', '700') }}

## 规范

{{Specifications}}
