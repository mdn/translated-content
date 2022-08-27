---
title: EventTarget.addEventListener()
slug: Web/API/EventTarget/addEventListener
---
{{APIRef("DOM Events")}}

**EventTarget.addEventListener()** 方法将指定的监听器注册到 {{domxref("EventTarget")}} 上，当该对象触发指定的事件时，指定的回调函数就会被执行。 事件目标可以是一个文档上的元素 {{domxref("Element")}},{{domxref("Document")}}和{{domxref("Window")}}或者任何其他支持事件的对象 (比如 [`XMLHttpRequest`](/zh-CN/DOM/XMLHttpRequest))`。`

`addEventListener()`的工作原理是将实现{{domxref("EventListener")}}的函数或对象添加到调用它的{{domxref("EventTarget")}}上的指定事件类型的事件侦听器列表中。

## 语法

```js
target.addEventListener(type, listener, options);
target.addEventListener(type, listener, useCapture);
target.addEventListener(type, listener, useCapture, wantsUntrusted {{
Non-standard_inline}});  // Gecko/Mozilla only
```

### 参数

- `type`
  - : 表示监听[事件类型](/zh-CN/docs/Web/Events)的字符串。

- `listener`
  - : 当所监听的事件类型触发时，会接收到一个事件通知（实现了 {{domxref("Event")}} 接口的对象）对象。`listener` 必须是一个实现了 {{domxref("EventListener")}} 接口的对象，或者是一个[函数](/zh-CN/docs/Web/JavaScript/Guide/Functions)。有关回调本身的详细信息，请参阅[事件监听回调](#事件监听回调)
- options {{optional_inline}}

  - : 一个指定有关 `listener` 属性的可选参数**对象**。可用的选项如下：

    - `capture`: {{jsxref("Boolean")}}，表示 `listener` 会在该类型的事件捕获阶段传播到该 `EventTarget` 时触发。
    - `once`: {{jsxref("Boolean")}}，表示 `listener 在添加之后最多只调用一次。如果是` `true，` `listener` 会在其被调用之后自动移除。
    - `passive`: {{jsxref("Boolean")}}，设置为 true 时，表示 `listener` 永远不会调用 `preventDefault()`。如果 listener 仍然调用了这个函数，客户端将会忽略它并抛出一个控制台警告。查看 [使用 passive 改善的滚屏性能](#使用_passive_改善的滚屏性能) 了解更多。
    - `signal`：{{domxref("AbortSignal")}}，该 `AbortSignal` 的 {{domxref("AbortController/abort()", "abort()")}} 方法被调用时，监听器会被移除。
    - {{non-standard_inline}} `mozSystemGroup`: 只能在 XBL 或者是 Firefox' chrome 使用，这是个 {{jsxref("Boolean")}}，表示 `listener` 被添加到 system group。

- `useCapture` {{optional_inline}}
  - : {{jsxref("Boolean")}}，在 DOM 树中，注册了 listener 的元素， 是否要先于它下面的 EventTarget，调用该 listener。 当 useCapture(设为 true) 时，沿着 DOM 树向上冒泡的事件，不会触发 listener。当一个元素嵌套了另一个元素，并且两个元素都对同一事件注册了一个处理函数时，所发生的事件冒泡和事件捕获是两种不同的事件传播方式。事件传播模式决定了元素以哪个顺序接收事件。进一步的解释可以查看 [事件流](http://www.w3.org/TR/DOM-Level-3-Events/#event-flow) 及 [JavaScript Event order](http://www.quirksmode.org/js/events_order.html#link4) 文档。 如果没有指定， `useCapture` 默认为 false 。

> **备注：** 对于事件目标上的事件监听器来说，事件会处于“目标阶段”，而不是冒泡阶段或者捕获阶段。捕获阶段的事件监听器在任何非捕获阶段的事件监听器之前被调用。

- `wantsUntrusted` {{optional_inline}} {{Non-standard_inline}}
  - : 如果为 `true`, 则事件处理程序会接收网页自定义的事件。此参数只适用于 Gecko（{{glossary("chrome")}}的默认值为 true，其他常规网页的默认值为 false），主要用于附加组件的代码和浏览器本身。

### 返回值

`undefined`.

## 用法说明

### 事件监听回调

事件监听器可以被指定为回调函数或实现 {{domxref("EventListener")}}的对象，其{{domxref("EventListener.handleEvent", "handleEvent()")}} 方法用作回调函数。

回调函数本身具有与`handleEvent()`方法相同的参数和返回值;也就是说，回调接受一个参数：一个基于{{domxref("Event")}} 的对象，描述已发生的事件，并且它不返回任何内容。

例如，一个可用于处理{{event("fullscreenchange")}}和{{event("fullscreenerror")}}的事件处理函数可以像这样：

```js
function eventHandler(event) {
  if (event.type == fullscreenchange) {
    /* handle a full screen toggle */
  } else /* fullscreenerror */ {
    /* handle a full screen toggle error */
  }
}
```

### option 支持的安全检测

在旧版本的 DOM 的规定中， `addEventListener()`的第三个参数是一个布尔值表示是否在捕获阶段调用事件处理程序。随着时间的推移，很明显需要更多的选项。与其在方法之中添加更多参数（传递可选值将会变得异常复杂），倒不如把第三个参数改为一个包含了各种属性的对象，这些属性的值用来被配置删除事件侦听器的过程。

因为旧版本的浏览器（以及一些相对不算古老的）仍然假定第三个参数是布尔值，你需要编写一些代码来有效地处理这种情况。你可以对每一个你感兴趣的 options 值进行特性检测。

如果你想检测 `passive` 值可以参考下面这个例子：

```js
var passiveSupported = false;

try {
  var options = Object.defineProperty({}, "passive", {
    get: function() {
      passiveSupported = true;
    }
  });

  window.addEventListener("test", null, options);
} catch(err) {}
```

这段代码为 `passive` 属性创建了一个带有 getter 函数的 `options` 对象；getter 设定了一个标识， `passiveSupported`，被调用后就会把其设为`true`。那意味着如果浏览器检查 `options` 对象上的 `passive` 值时， `passiveSupported` 将会被设置为 `true`；否则它将保持 `false`。然后我们调用 `addEventListener()` 去设置一个指定这些选项的空事件处理器，这样如果浏览器将第三个参数认定为对象的话，这些选项值就会被检查。

你可以利用这个方法检查 options 之中任一个值。只需使用与上面类似的代码，为选项设定一个 getter。

然后，当你想实际创建一个是否支持 options 的事件侦听器时，你可以这样做：

```js
someElement.addEventListener("mouseup", handleMouseUp, passiveSupported
                               ? { passive: true } : false);
```

我们在 `someElement` 这里添加了一个{{event("mouseup")}}。对于第三个参数，如果 `passiveSupported` 是 `true` ，我们传递了一个 `passive` 值为 `true` 的 `options` 对象；如果相反的话，我们知道要传递一个布尔值，于是就传递 `false` 作为 `useCapture` 的参数。

如果你愿意，你可以用一个类似 [Modernizr](https://modernizr.com/docs) 或 [Detect It](https://github.com/rafrex/detect-it) 的第三方库来帮助你做这项测试。

你可以在 [Web Incubator Community Group](https://wicg.github.io/admin/charter.html) 里关于[`EventListenerOptions`](https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md#feature-detection) 的文章中了解更多。

## 示例

### 添加一个简单的监听器

下面这个例子用来展示如何使用 `addEventListener()` 监听鼠标点击一个元素。

```html
<table id="outside">
    <tr><td id="t1">one</td></tr>
    <tr><td id="t2">two</td></tr>
</table>
```

```js
// 改变 t2 的函数
function modifyText() {
  var t2 = document.getElementById("t2");
  if (t2.firstChild.nodeValue == "three") {
    t2.firstChild.nodeValue = "two";
  } else {
    t2.firstChild.nodeValue = "three";
  }
}

// 为 table 添加事件监听器
var el = document.getElementById("outside");
el.addEventListener("click", modifyText, false);
```

在上个例子中，`modifyText()` 是一个 `click` 事件的监听器，通过使用`addEventListenter()`注册到 table 对象上。在表格中任何位置单击都会触发事件并执行`modifyText()`。

#### 结果

{{EmbedLiveSample('添加一个简单的监听器')}}

### 带有匿名函数的监听器

现在我们来看看如何使用匿名函数来为事件监听器进行传参。

```html
<table id="outside">
    <tr><td id="t1">one</td></tr>
    <tr><td id="t2">two</td></tr>
</table>
```

```js
// 改变 t2 值的函数
function modifyText(new_text) {
  var t2 = document.getElementById("t2");
  t2.firstChild.nodeValue = new_text;
}

// 为 table 对象添加事件监听器
var el = document.getElementById("outside");
el.addEventListener("click", function(){modifyText("four")}, false);
```

请注意，侦听器是一个匿名函数，它封装了代码，然后代码可以将参数发送到`modifyText()`函数，该函数负责实际响应事件。

#### 结果

{{EmbedLiveSample('带有匿名函数的监听器')}}

### 带有箭头函数的监听器

这个例子用来展示如何通过箭头函数来实现一个监听器。

#### HTML

```html
<table id="outside">
    <tr><td id="t1">one</td></tr>
    <tr><td id="t2">two</td></tr>
</table>
```

#### JavaScript

```js
// Function to change the content of t2
function modifyText(new_text) {
  var t2 = document.getElementById("t2");
  t2.firstChild.nodeValue = new_text;
}

// Add event listener to table with an arrow function
var el = document.getElementById("outside");
el.addEventListener("click", () => { modifyText("four"); }, false);
```

#### 结果

{{EmbedLiveSample('带有箭头函数的监听器')}}

请注意尽管匿名函数和箭头函数有些类似，但是他们绑定不同的`this`对象。匿名函数（和所有传统的 Javascript 函数）创建他们独有的`this`对象，而箭头函数则继承绑定他所在函数的`this`对象。

这意味着在使用箭头函数时，原函数中可用的变量和常量在事件处理器中同样可用。

### options 用法示例

#### HTML

```html
<div class="outer">
    outer, once & none-once
    <div class="middle" target="_blank">
        middle, capture & none-capture
        <a class="inner1" href="https://www.mozilla.org" target="_blank">
            inner1, passive & preventDefault(which is not allowed)
        </a>
        <a class="inner2" href="https://developer.mozilla.org/" target="_blank">
            inner2, none-passive & preventDefault(not open new page)
        </a>
    </div>
</div>
```

#### CSS

```css
    .outer, .middle, .inner1, .inner2 {
        display:block;
        width:520px;
        padding:15px;
        margin:15px;
        text-decoration:none;
    }
    .outer{
        border:1px solid red;
        color:red;
    }
    .middle{
        border:1px solid green;
        color:green;
        width:460px;
    }
    .inner1, .inner2{
        border:1px solid purple;
        color:purple;
        width:400px;
    }
```

#### JavaScript

```js
let outer  = document.getElementsByClassName('outer') [0];
    let middle = document.getElementsByClassName('middle')[0];
    let inner1 = document.getElementsByClassName('inner1')[0];
    let inner2 = document.getElementsByClassName('inner2')[0];

    let capture = {
        capture : true
    };
    let noneCapture = {
        capture : false
    };
    let once = {
        once : true
    };
    let noneOnce = {
        once : false
    };
    let passive = {
        passive : true
    };
    let nonePassive = {
        passive : false
    };


    outer .addEventListener('click', onceHandler, once);
    outer .addEventListener('click', noneOnceHandler, noneOnce);
    middle.addEventListener('click', captureHandler, capture);
    middle.addEventListener('click', noneCaptureHandler, noneCapture);
    inner1.addEventListener('click', passiveHandler, passive);
    inner2.addEventListener('click', nonePassiveHandler, nonePassive);

    function onceHandler(event)
    {
        alert('outer, once');
    }
    function noneOnceHandler(event)
    {
        alert('outer, none-once, default');
    }
    function captureHandler(event)
    {
        //event.stopImmediatePropagation();
        alert('middle, capture');
    }
    function noneCaptureHandler(event)
    {
        alert('middle, none-capture, default');
    }
    function passiveHandler(event)
    {
        // Unable to preventDefault inside passive event listener invocation.
        //在调用 passive 事件监听器内部不能使用 preventDefault
        event.preventDefault();
        alert('inner1, passive, open new page');
    }
    function nonePassiveHandler(event)
    {
        event.preventDefault();
        //event.stopPropagation();
        alert('inner2, none-passive, default, not open new page');
    }
```

#### 结果

分别点击 outer, middle, inner 以查看选项的工作方式。

{{ EmbedLiveSample('options 用法示例', 600, 310) }}

在使用`options` 对象中具体的值前，最好确保用户的浏览器支持它，因为这些是历史上并非所有浏览器都支持的附加功能。你可以查看 [option 支持的安全检测](#option支持的安全检测)以了解更多

## 备注

### 为什么要使用 `addEventListener`?

`addEventListener()` 是 W3C DOM 规范中提供的注册事件监听器的方法。它的优点包括：

- 它允许给一个事件注册多个监听器。 特别是在使用{{Glossary("AJAX")}}库，JavaScript 模块，或其他需要第三方库/插件的代码。
- 它提供了一种更精细的手段控制 `listener` 的触发阶段。（即可以选择捕获或者冒泡）。
- 它对任何 DOM 元素都是有效的，而不仅仅只对 HTML 元素有效。

除了这种方法以外，后文会简单阐述一些[注册事件监听器的旧方法](#注册_listener_的旧方法)。

### 在事件分派时添加事件处理器

当一个 `EventListener` 在 `EventTarget` 正在处理事件的时候被注册到 `EventTarget` 上，它不会被立即触发，但可能在事件流后面的事件触发阶段被触发，例如可能在捕获阶段添加，然后在冒泡阶段被触发。

### 多个相同的事件处理器

同一个 `EventTarget 注册了多个相同的 EventListener`，那么重复的实例会被抛弃。所以这么做不会使得 `EventListener` 被调用两次，也不需要用 [removeEventListener](/zh-CN/docs/Web/API/EventTarget/removeEventListener) 手动清除多余的`EventListener` ，因为重复的都被自动抛弃了，前提是`options`中的`capture`的参数值一致，如果`capture`的值不一致，此时就算重复定义，也不会被抛弃掉。

### 处理过程中 `this` 的值的问题

通常来说 this 的值是触发事件的元素的引用，这种特性在多个相似的元素使用同一个通用事件监听器时非常让人满意。

当使用 `addEventListener()` 为一个元素注册事件的时候，句柄里的 this 值是该元素的引用。其与传递给句柄的 event 参数的 `currentTarget 属性的值一样。`

如果一个事件的属性 ( 例如. onClick) 是指定在一个 HTML 的元素上的，则这个属性中的 JavaScript 语句实际上会被包裹在一个处理函数中，在这个处理函数中使用 this 的效果和使用 addEventListener 来绑定事件的效果是一样的； this 的出现代表了元素的引用。注意到在一个函数里 this 调用的的效果和标准规则里面是一样的。

比如下面的例子：

```html
<table id="t" onclick="modifyText();">
. . .
```

这时`modifyText()`中的`this` 的值会变成全局 (window) 对象的引用（在[严格模式](/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)中为 `undefined）`。

> **备注：**  JavaScript 1.8.5 引入了[`Function.prototype.bind()`](/zh-CN/JavaScript/Reference/Global_Objects/Function/bind) 方法，允许制定函数调用时的 `this` 的值。这使得想要绕开由于调用情况不同，this 取值不同的问题变得十分容易 。然而请注意，你应该保留一个 `listener 的`引用，以便在未来需要的时候能够比较好地移除。

下面是 `bind` 相关的例子：

```js
var Something = function(element) {
  // |this| is a newly created object
  this.name = 'Something Good';
  this.onclick1 = function(event) {
    console.log(this.name); // undefined, as |this| is the element
  };
  this.onclick2 = function(event) {
    console.log(this.name); // 'Something Good', as |this| is bound to newly created object
  };
  element.addEventListener('click', this.onclick1, false);
  element.addEventListener('click', this.onclick2.bind(this), false); // Trick
}
var s = new Something(document.body);
```

上面这个例子的一个问题是不可能移除使用了 `bind` 的监听器。一种解决办法是使用定制的函数'handleEvent'去捕获任意类型：

```js
var Something = function(element) {
  // |this| is a newly created object
  this.name = 'Something Good';
  this.handleEvent = function(event) {
    console.log(this.name); // 'Something Good', as this is bound to newly created object
    switch(event.type) {
      case 'click':
        // some code here...
        break;
      case 'dblclick':
        // some code here...
        break;
    }
  };

  // Note that the listeners in this case are |this|, not this.handleEvent
  element.addEventListener('click', this, false);
  element.addEventListener('dblclick', this, false);

  // You can properly remove the listeners
  element.removeEventListener('click', this, false);
  element.removeEventListener('dblclick', this, false);
}
var s = new Something(document.body);
```

另一种控制 this 指向的方法是，给 `EventListener` 传递一个函数，调用想要访问对应作用域对象的方法：

```js
class SomeClass {

  constructor() {
    this.name = 'Something Good';
  }

  register() {
    var that = this;
    window.addEventListener('keydown', function(e) {return that.someMethod(e);});
  }

  someMethod(e) {
    console.log(this.name);
    switch(e.keyCode) {
      case 5:
        // some code here...
        break;
      case 6:
        // some code here...
        break;
    }
  }

}

var myObject = new SomeClass();
myObject.register();
```

### 传统的 Internet Explorer 及其 attachEvent 方法

对于 Internet Explorer 来说，在 IE 9 之前，你必须使用 [`attachEvent`](<http://msdn.microsoft.com/en-us/library/ms536343(VS.85).aspx>) 而不是使用标准方`法 addEventListener`。为了支持 IE，前面的例子需要改成这样：

```js
if (el.addEventListener) {
  el.addEventListener('click', modifyText, false);
} else if (el.attachEvent)  {
  el.attachEvent('onclick', modifyText);
}
```

使用 `attachEvent` 方法有个缺点，`this` 的值会变成 `window` 对象的引用而不是触发事件的元素。

`attachEvent()`方法可以与`onresize`事件配对，以检测何时调整网页中的某些元素的大小。专有的`mselementresize`事件与注册事件处理程序的`addEventListener`方法配对时，提供与`onresize`类似的功能，在调整某些 HTML 元素大小时触发。

### 兼容性

在你的 script 的开头添加以下方法，你就可以使用以下如 `addEventListener`, `removeEventListener`, `Event.preventDefault` 和`Event.stopPropagation` 等不被 IE8 支持的方法。 这些代码支持 `handleEvent` 的使用 ，包含 `DOMContentLoaded` 事件。

> **备注：** IE8 不具有任何替代 useCapture 的方法，useCapture 是 IE8 不支持的。 请注意下面的代码只能添加 IE8。另外请注意，下面这个 IE8 polyfill 只适用于标准模式：需要 DOCTYPE 声明。

```js
(function() {
  if (!Event.prototype.preventDefault) {
    Event.prototype.preventDefault=function() {
      this.returnValue=false;
    };
  }
  if (!Event.prototype.stopPropagation) {
    Event.prototype.stopPropagation=function() {
      this.cancelBubble=true;
    };
  }
  if (!Element.prototype.addEventListener) {
    var eventListeners=[];

    var addEventListener=function(type,listener /*, useCapture (will be ignored) */) {
      var self=this;
      var wrapper=function(e) {
        e.target=e.srcElement;
        e.currentTarget=self;
        if (typeof listener.handleEvent != 'undefined') {
          listener.handleEvent(e);
        } else {
          listener.call(self,e);
        }
      };
      if (type=="DOMContentLoaded") {
        var wrapper2=function(e) {
          if (document.readyState=="complete") {
            wrapper(e);
          }
        };
        document.attachEvent("onreadystatechange",wrapper2);
        eventListeners.push({object:this,type:type,listener:listener,wrapper:wrapper2});

        if (document.readyState=="complete") {
          var e=new Event();
          e.srcElement=window;
          wrapper2(e);
        }
      } else {
        this.attachEvent("on"+type,wrapper);
        eventListeners.push({object:this,type:type,listener:listener,wrapper:wrapper});
      }
    };
    var removeEventListener=function(type,listener /*, useCapture (will be ignored) */) {
      var counter=0;
      while (counter<eventListeners.length) {
        var eventListener=eventListeners[counter];
        if (eventListener.object==this && eventListener.type==type && eventListener.listener==listener) {
          if (type=="DOMContentLoaded") {
            this.detachEvent("onreadystatechange",eventListener.wrapper);
          } else {
            this.detachEvent("on"+type,eventListener.wrapper);
          }
          eventListeners.splice(counter, 1);
          break;
        }
        ++counter;
      }
    };
    Element.prototype.addEventListener=addEventListener;
    Element.prototype.removeEventListener=removeEventListener;
    if (HTMLDocument) {
      HTMLDocument.prototype.addEventListener=addEventListener;
      HTMLDocument.prototype.removeEventListener=removeEventListener;
    }
    if (Window) {
      Window.prototype.addEventListener=addEventListener;
      Window.prototype.removeEventListener=removeEventListener;
    }
  }
})();
```

### 注册 `listener` 的旧方法

`addEventListener()` 在 DOM 2 [Events](http://www.w3.org/TR/DOM-Level-2-Events) 规范中引入。在这之前，事件监听器应该用以下的方法注册：

```js
// Pass a function reference — do not add '()' after it, which would call the function!
el.onclick = modifyText;

// Using a function expression
element.onclick = function() {
    // ... function logic ...
};
```

这个方法会替换这个元素上所有已存在的 on`click` 事件。对于其他事件是类似的，比如 `blur` (`onblur`)、 `keypress` (`onkeypress`) 等等。

由于这是 DOM 0 规范的基本内容，几乎所有浏览器都支持这个，而且不需要特殊的跨浏览器兼容代码。因此通常这个方法被用于动态地注册事件处理器，除非必须使用 `addEventListener()` 才能提供的特殊特性。

### 内存问题

```js
var i;
var els = document.getElementsByTagName('*');

// Case 1
for(i=0 ; i<els.length ; i++){
  els[i].addEventListener("click", function(e){/*do something*/}, false});
}

// Case 2
function processEvent(e){
  /*do something*/
}

for(i=0 ; i<els.length ; i++){
  els[i].addEventListener("click", processEvent, false});
}
```

在第一种情况下，每个循环中都会创建一个新的（匿名）函数。在第二种情况下，会使用先前声明的相同的函数作为事件处理器。这样的结果是占用的存储空间更小。而且，在第一种情况中，由于没有保持到匿名函数的引用，它不可能被调用 [`element.removeEventListener`](/zh-CN/DOM/element.removeEventListener)，这是因为我们没有一个可参考的处理器，而在第二种情况，它可以被 `myElement.removeEventListener("click", processEvent, false)`。

但是，真正影响内存的并不是没有保持函数引用，而是没有保持 **静态** 函数引用。在下面的两个示例中，每一个循环都重新定义了一个函数，并且保持了函数引用，但是并不是动态的函数引用。第三个示例中，在每次循环中都重新赋值了一个匿名函数的引用。第四个示例，函数定义始终没有改变，但是依然是非静态的，因为每次都重新定义了函数（除非被编译器变量 \[\[提升]]）。尽管表现上看起来很好理解（\[\[重复添加相同的事件监听]]），但是每次循环都是将事件处理函数指向了一个唯一的新创建的函数的引用。同时，因为函数定义本身没有改变，每次触发事件监听器时调用的还是同一个方法（特别是在经过优化的代码中）。

在这两个示例中，每次循环都会重复定义函数并保持函数引用，所以上面的移除语句也可以移除对应的监听器，但是只能移除最后一个。

```
// For illustration only: Note "MISTAKE" of [j] for [i] thus causing desired events to all attach to SAME element

// Case 3
for(var i=0, j=0 ; i<els.length ; i++){
  /*do lots of stuff with j*/
  els[j].addEventListener("click", processEvent = function(e){/*do something*/}, false);
}

// Case 4
for(var i=0, j=0 ; i<els.length ; i++){
  /*do lots of stuff with j*/
  function processEvent(e){/*do something*/};
  els[j].addEventListener("click", processEvent, false);
```

### 使用 passive 改善的滚屏性能

根据规范，`passive` 选项的默认值始终为 false。但是，这引入了处理某些触摸事件（以及其他）的事件监听器在尝试处理滚动时阻止浏览器的主线程的可能性，从而导致滚动处理期间性能可能大大降低。

为防止出现此问题，某些浏览器（特别是 Chrome 和 Firefox）已将文档级节点 {{domxref("Window")}}，{{domxref("Document")}}和{{domxref("Document.body")}}的{{event("touchstart")}}和{{event("touchmove")}}事件的`passive`选项的默认值更改为 true。这可以防止调用事件监听器，因此在用户滚动时无法阻止页面呈现。

```js
var elem = document.getElementById('elem');
elem.addEventListener('touchmove', function listener() { /* do something */ }, { passive: true });
```

添加 passive 参数后，`touchmove`事件不会阻塞页面的滚动（同样适用于鼠标的滚轮事件）。在这里查看[demo](https://developers.google.com/web/updates/2016/06/passive-event-listeners)（需要翻墙）。

> **备注：** 那些不支持参数`options`的浏览器，会把第三个参数默认为`useCapture`，即设置`useCapture`为 true

您可以通过将`passive`的值显式设置为`false`来覆盖此行为，如下所示：

```js
/* Feature detection */
/*特征检测*/
var passiveIfSupported = false;

try {
  window.addEventListener("test", null, Object.defineProperty({}, "passive", { get: function() { passiveIfSupported = { passive: true }; } }));
} catch(err) {}

window.addEventListener('scroll', function(event) {
  /* do something */
  // can't use event.preventDefault();
  // 不能使用 event.preventDefault()
}, passiveIfSupported );
```

在不支持`addEventListener()`的`options`参数的旧浏览器上，尝试使用它会阻止使用`useCapture`参数而不正确使用特征检测。

您无需担心基本{{event("scroll")}} 事件的`passive`值。由于无法取消，因此事件监听器无法阻止页面呈现。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{domxref("EventTarget.removeEventListener()")}}
- [Creating and triggering custom events](/zh-CN/docs/Web/Guide/Events/Creating_and_triggering_events)
- [More details on the use of `this` in event handlers](http://www.quirksmode.org/js/this.html)
