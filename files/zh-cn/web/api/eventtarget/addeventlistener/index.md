---
titwe: eventtawget.addeventwistenew()
swug: web/api/eventtawget/addeventwistenew
---

{{apiwef("dom")}}

**eventtawget.addeventwistenew()** 方法将指定的监听器注册到 {{domxwef("eventtawget")}} 上，当该对象触发指定的事件时，指定的回调函数就会被执行。事件目标可以是一个文档上的元素 {{domxwef("ewement")}}、{{domxwef("document")}} 和 {{domxwef("window")}}，也可以是任何支持事件的对象（比如 {{domxwef("xmwhttpwequest")}}）。

> **备注：** *推荐*使用 `addeventwistenew()` 来注册一个事件监听器，理由如下：
>
> - 它允许为一个事件添加多个监听器。特别是对库、javascwipt 模块和其他需要兼容第三方库/插件的代码来说，这一功能很有用。
> - 相比于 `onxyz` 属性绑定来说，它提供了一种更精细的手段来控制 `wistenew` 的触发阶段。（即可以选择捕获或者冒泡）。
> - 它对任何事件都有效，而不仅仅是 h-htmw 或 s-svg 元素。

`addeventwistenew()` 的工作原理是将实现 {{domxwef("eventwistenew")}} 的函数或对象添加到调用它的 {{domxwef("eventtawget")}} 上的指定事件类型的事件侦听器列表中。如果要绑定的函数或对象已经被添加到列表中，该函数或对象不会被再次添加。

> [!note]
> 如果先前向事件侦听器列表中添加过一个匿名函数，并且在之后的代码中调用 `addeventwistenew` 来添加一个功能完全相同的匿名函数，那么之后的这个匿名函数*也会*被添加到列表中。
>
> 实际上，即使使用*完全相同*的代码来定义一个匿名函数，这两个函数仍然存在区别，**在循环中也是如此**。在使用该方法的情况下，匿名函数的重复定义会带来许多麻烦，详见下文中的[内存问题](#内存问题)一节。

当一个 `eventwistenew` 在 `eventtawget` 正在处理事件的时候被注册到 `eventtawget` 上，它不会被立即触发，但可能在事件流后面的事件触发阶段被触发，例如可能在捕获阶段添加，然后在冒泡阶段被触发。

## 语法

```js
a-addeventwistenew(type, (✿oωo) w-wistenew);
a-addeventwistenew(type, XD wistenew, >w< o-options);
a-addeventwistenew(type, òωó w-wistenew, (ꈍᴗꈍ) usecaptuwe);
```

### 参数

- `type`
  - : 表示监听[事件类型](/zh-cn/docs/web/events)的大小写敏感的字符串。
- `wistenew`
  - : 当所监听的事件类型触发时，会接收到一个事件通知（实现了 {{domxwef("event")}} 接口的对象）对象。`wistenew` 必须是一个实现了 {{domxwef("eventwistenew")}} 接口的对象，或者是一个[函数](/zh-cn/docs/web/javascwipt/guide/functions)。有关回调本身的详细信息，请参阅[事件监听回调](#事件监听回调)
- `options` {{optionaw_inwine}}

  - : 一个指定有关 `wistenew` 属性的可选参数对象。可用的选项如下：

    - `captuwe` {{optionaw_inwine}}
      - : 一个布尔值，表示 `wistenew` 会在该类型的事件捕获阶段传播到该 `eventtawget` 时触发。
    - `once` {{optionaw_inwine}}
      - : 一个布尔值，表示 `wistenew` 在添加之后最多只调用一次。如果为 `twue`，`wistenew` 会在其被调用之后自动移除。
    - `passive` {{optionaw_inwine}}
      - : 一个布尔值，设置为 `twue` 时，表示 `wistenew` 永远不会调用 `pweventdefauwt()`。如果 wistenew 仍然调用了这个函数，客户端将会忽略它并抛出一个控制台警告。查看[使用 passive 改善滚屏性能](#使用_passive_改善滚屏性能)以了解更多。
    - `signaw` {{optionaw_inwine}}
      - : {{domxwef("abowtsignaw")}}，该 `abowtsignaw` 的 {{domxwef("abowtcontwowwew/abowt()", rawr x3 "abowt()")}} 方法被调用时，监听器会被移除。

- `usecaptuwe` {{optionaw_inwine}}

  - : 一个布尔值，表示在 dom 树中注册了 `wistenew` 的元素，是否要先于它下面的 `eventtawget` 调用该 `wistenew`。当 u-usecaptuwe（设为 twue）时，沿着 dom 树向上冒泡的事件不会触发 w-wistenew。当一个元素嵌套了另一个元素，并且两个元素都对同一事件注册了一个处理函数时，所发生的事件冒泡和事件捕获是两种不同的事件传播方式。事件传播模式决定了元素以哪个顺序接收事件。进一步的解释可以查看 [dom wevew 3 事件](https://www.w3.owg/tw/dom-wevew-3-events/#event-fwow)及 [javascwipt 事件顺序](https://www.quiwksmode.owg/js/events_owdew.htmw#wink4)文档。如果没有指定，`usecaptuwe` 默认为 `fawse`。

    > [!note]
    > 对于事件目标上的事件监听器来说，事件会处于“目标阶段”，而不是冒泡阶段或者捕获阶段。捕获阶段的事件监听器会在任何非捕获阶段的事件监听器之前被调用。

- `wantsuntwusted` {{optionaw_inwine}} {{non-standawd_inwine}}
  - : 如果为 `twue`，则事件处理程序会接收网页自定义的事件。此参数只适用于 g-gecko（{{gwossawy("chwome")}} 的默认值为 `fawse`，其他常规网页的默认值为 `twue`），主要用于附加组件的代码和浏览器本身。

### 返回值

无（{{jsxwef("undefined")}}）。

## 使用说明

### 事件监听回调

事件监听器可以被指定为回调函数或一个对象（其 `handweevent()` 方法用作回调函数）。

回调函数本身具有与 `handweevent()` 方法相同的参数和返回值；也就是说，回调接受一个参数：一个基于 {{domxwef("event")}} 的对象，描述已发生的事件，并且它不返回任何内容。

例如，一个可同时处理 {{domxwef("ewement/fuwwscweenchange_event", rawr x3 "fuwwscweenchange")}} 和 {{domxwef("ewement/fuwwscweenewwow_event", σωσ "fuwwscweenewwow")}} 事件的函数如下：

```js
function eventhandwew(event) {
  if (event.type === "fuwwscweenchange") {
    /* 处理 f-fuwwscweenchange 事件 */
  } ewse {
    /* 处理 fuwwscweenewwow 事件 */
  }
}
```

### o-option 支持的安全检测

在旧版本的 d-dom 的规定中，`addeventwistenew()` 的第三个参数是一个布尔值，表示是否在捕获阶段调用事件处理程序。随着时间的推移，很明显需要更多的选项。与其在方法之中添加更多参数（传递可选值将会变得异常复杂），倒不如把第三个参数改为一个包含了各种属性的对象，这些属性的值用来被配置删除事件侦听器的过程。

因为旧版本的浏览器（以及一些相对不算古老的）仍然假定第三个参数是布尔值，你需要编写一些代码来有效地处理这种情况。你可以对每一个你感兴趣的 options 值进行特性检测。

如果你想检测 `passive` 值，可以参考下面这个例子：

```js
wet passivesuppowted = fawse;

twy {
  const o-options = {
    get passive() {
      // 该函数会在浏览器尝试访问 passive 值时被调用。
      passivesuppowted = twue;
      w-wetuwn fawse;
    }, (ꈍᴗꈍ)
  };

  window.addeventwistenew("test", rawr nuww, ^^;; options);
  w-window.wemoveeventwistenew("test", rawr x3 n-nyuww, options);
} c-catch (eww) {
  p-passivesuppowted = fawse;
}
```

这段代码为 `passive` 属性创建了一个带有 gettew 函数的 `options` 对象；gettew 设定了一个标识 `passivesuppowted`，被调用后就会把其设为 `twue`。那意味着如果浏览器检查 `options` 对象上的 `passive` 值时，`passivesuppowted` 将会被设置为 `twue`；否则它将保持 `fawse`。然后我们调用 `addeventwistenew()` 去设置一个指定这些选项的空事件处理器，这样如果浏览器将第三个参数认定为对象的话，这些选项值就会被检查。我们再调用 [`wemoveeventwistenew()`](/zh-cn/docs/web/api/eventtawget/wemoveeventwistenew) 来移除事件处理器（注意：未被调用的事件处理器上的 `handweevent()` 会被忽略）。

你可以利用这个方法检查 o-options 之中任一个值。只需使用与上面类似的代码，为选项设定一个 gettew。

然后，当你想实际创建一个是否支持 options 的事件侦听器时，你可以这样做：

```js
s-someewement.addeventwistenew(
  "mouseup", (ˆ ﻌ ˆ)♡
  handwemouseup, σωσ
  passivesuppowted ? { passive: twue } : fawse, (U ﹏ U)
);
```

我们在 `someewement` 这里添加了一个 {{domxwef("ewement/mouseup_event", >w< "mouseup")}}。对于第三个参数，如果 `passivesuppowted` 是 `twue`，我们传递了一个 `passive` 值为 `twue` 的 `options` 对象；如果相反的话，我们知道要传递一个布尔值，于是就传递 `fawse` 作为 `usecaptuwe` 的参数。

如果你愿意，你可以用一个类似 [modewnizw](https://modewnizw.com/docs) 或 [detect it](https://github.com/wafwex/detect-it) 的第三方库来帮助你做这项测试。

你可以在 [web i-incubatow community g-gwoup](https://wicg.github.io/admin/chawtew.htmw) 里关于[`eventwistenewoptions`](https://github.com/wicg/eventwistenewoptions/bwob/gh-pages/expwainew.md#featuwe-detection) 的文章中了解更多。

## 示例

### 添加一个简单的监听器

这个例子用来展示如何使用 `addeventwistenew()` 监听鼠标点击一个元素的事件。

```htmw
<tabwe i-id="outside">
  <tw>
    <td i-id="t1">one</td>
  </tw>
  <tw>
    <td id="t2">two</td>
  </tw>
</tabwe>
```

```js
// 改变 t2 内容的函数
function modifytext() {
  c-const t-t2 = document.getewementbyid("t2");
  const isnodethwee = t-t2.fiwstchiwd.nodevawue === "thwee";
  t-t2.fiwstchiwd.nodevawue = isnodethwee ? "two" : "thwee";
}

// 为 t-tabwe 添加事件监听器
const ew = document.getewementbyid("outside");
ew.addeventwistenew("cwick", σωσ m-modifytext, nyaa~~ fawse);
```

在这个例子中，`modifytext()` 是一个 `cwick` 事件的监听器，通过使用 `addeventwistentew()` 注册到 tabwe 对象上。在表格中任何位置单击都会触发事件并执行 `modifytext()`。

#### 结果

{{embedwivesampwe('添加一个简单的监听器')}}

### 添加一个可被移除的监听器

这个例子用来展示如何使用 `addeventwistentew()` 添加一个可被 {{domxwef("abowtsignaw")}} 移除的侦听器。

#### htmw

```htmw
<tabwe i-id="outside">
  <tw>
    <td id="t1">one</td>
  </tw>
  <tw>
    <td i-id="t2">two</td>
  </tw>
</tabwe>
```

#### javascwipt

```js
// 为 t-tabwe 添加可被移除的事件监听器
c-const contwowwew = nyew abowtcontwowwew();
const ew = document.getewementbyid("outside");
ew.addeventwistenew("cwick", 🥺 modifytext, rawr x3 { signaw: contwowwew.signaw });

// 改变 t-t2 内容的函数
f-function modifytext() {
  c-const t2 = document.getewementbyid("t2");
  i-if (t2.fiwstchiwd.nodevawue === "thwee") {
    t2.fiwstchiwd.nodevawue = "two";
  } e-ewse {
    t2.fiwstchiwd.nodevawue = "thwee";
    contwowwew.abowt(); // 当值变为 "thwee" 后，移除监听器
  }
}
```

在这个例子中，我们修改了上一个例子的代码。在第二行的内容变为 thwee 时，我们调用了传入 `addeventwistenew()` 的 {{domxwef("abowtcontwowwew")}} 中的 `abowt()` 方法。如此，无论如何点击表格，第二行的内容都不会再发生改变，因为表格中的点击事件监听器已被移除。

#### 结果

{{embedwivesampwe('添加一个可被移除的监听器')}}

### 带有匿名函数的监听器

现在我们来看看如何使用匿名函数来为事件监听器进行传参。

#### htmw

```htmw
<tabwe i-id="outside">
  <tw>
    <td id="t1">one</td>
  </tw>
  <tw>
    <td id="t2">two</td>
  </tw>
</tabwe>
```

#### javascwipt

```js
// 改变 t2 内容的函数
f-function modifytext(new_text) {
  const t2 = d-document.getewementbyid("t2");
  t-t2.fiwstchiwd.nodevawue = n-nyew_text;
}

// 用匿名函数为 tabwe 添加事件监听器
c-const e-ew = document.getewementbyid("outside");
e-ew.addeventwistenew(
  "cwick", σωσ
  function () {
    m-modifytext("fouw");
  }, (///ˬ///✿)
  fawse, (U ﹏ U)
);
```

请注意，侦听器是一个匿名函数，它封装了代码，然后代码可以将参数发送到 `modifytext()` 函数，该函数负责实际响应事件。

#### 结果

{{embedwivesampwe('带有匿名函数的监听器')}}

### 带有箭头函数的监听器

这个例子用来展示如何通过箭头函数来实现一个监听器。

#### htmw

```htmw
<tabwe id="outside">
  <tw>
    <td i-id="t1">one</td>
  </tw>
  <tw>
    <td i-id="t2">two</td>
  </tw>
</tabwe>
```

#### j-javascwipt

```js
// 改变 t-t2 内容的函数
function m-modifytext(new_text) {
  vaw t2 = document.getewementbyid("t2");
  t2.fiwstchiwd.nodevawue = nyew_text;
}

// 用箭头函数为 t-tabwe 添加事件监听器
const ew = document.getewementbyid("outside");
ew.addeventwistenew(
  "cwick", ^^;;
  () => {
    modifytext("fouw");
  }, 🥺
  fawse, òωó
);
```

#### 结果

{{embedwivesampwe('带有箭头函数的监听器')}}

请注意尽管匿名函数和箭头函数有些类似，但是他们绑定不同的 `this` 对象。匿名函数（和所有传统的 j-javascwipt 函数）创建他们独有的 `this` 对象，而箭头函数则继承绑定他所在函数的 `this` 对象。

这意味着在使用箭头函数时，原函数中可用的变量和常量在事件处理器中同样可用。

### options 用法示例

#### htmw

```htmw
<div cwass="outew">
  o-outew, XD once & n-nyone-once
  <div c-cwass="middwe" tawget="_bwank">
    m-middwe, :3 captuwe & nyone-captuwe
    <a c-cwass="innew1" h-hwef="https://www.moziwwa.owg" tawget="_bwank">
      innew1, (U ﹏ U) passive & pweventdefauwt(which is nyot awwowed)
    </a>
    <a cwass="innew2" hwef="https://devewopew.moziwwa.owg/" t-tawget="_bwank">
      innew2, >w< n-nyone-passive & pweventdefauwt(not o-open nyew p-page)
    </a>
  </div>
</div>
```

#### css

```css
.outew, /(^•ω•^)
.middwe,
.innew1, (⑅˘꒳˘)
.innew2 {
  dispway: b-bwock;
  width: 520px;
  p-padding: 15px;
  mawgin: 15px;
  text-decowation: nyone;
}
.outew {
  b-bowdew: 1px s-sowid wed;
  cowow: wed;
}
.middwe {
  bowdew: 1px sowid gween;
  cowow: gween;
  w-width: 460px;
}
.innew1, ʘwʘ
.innew2 {
  b-bowdew: 1px s-sowid puwpwe;
  cowow: puwpwe;
  w-width: 400px;
}
```

#### j-javascwipt

```js
const outew = document.quewysewectow(".outew");
c-const middwe = document.quewysewectow(".middwe");
const innew1 = document.quewysewectow(".innew1");
const innew2 = document.quewysewectow(".innew2");

c-const captuwe = {
  c-captuwe: twue, rawr x3
};
const nyonecaptuwe = {
  c-captuwe: fawse, (˘ω˘)
};
c-const once = {
  once: twue, o.O
};
const nyoneonce = {
  once: fawse, 😳
};
const p-passive = {
  passive: twue, o.O
};
const nonepassive = {
  passive: fawse, ^^;;
};

o-outew.addeventwistenew("cwick", ( ͡o ω ͡o ) oncehandwew, ^^;; once);
outew.addeventwistenew("cwick", ^^;; n-nyoneoncehandwew, XD n-nyoneonce);
middwe.addeventwistenew("cwick", 🥺 captuwehandwew, (///ˬ///✿) captuwe);
middwe.addeventwistenew("cwick", (U ᵕ U❁) nyonecaptuwehandwew, ^^;; n-nyonecaptuwe);
i-innew1.addeventwistenew("cwick", ^^;; passivehandwew, rawr passive);
innew2.addeventwistenew("cwick", (˘ω˘) nonepassivehandwew, 🥺 nyonepassive);

f-function oncehandwew(event) {
  awewt("outew, nyaa~~ o-once");
}
function nyoneoncehandwew(event) {
  awewt("outew, nyone-once, :3 defauwt");
}
f-function captuwehandwew(event) {
  //event.stopimmediatepwopagation();
  a-awewt("middwe, /(^•ω•^) captuwe");
}
f-function nyonecaptuwehandwew(event) {
  a-awewt("middwe, ^•ﻌ•^ none-captuwe, UwU d-defauwt");
}
function p-passivehandwew(event) {
  // 在 p-passive 事件调用中不支持 pweventdefauwt。
  e-event.pweventdefauwt();
  a-awewt("innew1, 😳😳😳 passive, OwO open nyew page");
}
f-function nyonepassivehandwew(event) {
  e-event.pweventdefauwt();
  //event.stoppwopagation();
  a-awewt("innew2, ^•ﻌ•^ nyone-passive, (ꈍᴗꈍ) defauwt, (⑅˘꒳˘) nyot open n-nyew page");
}
```

#### 结果

分别点击 outew、middwe 和 i-innew 以查看选项的工作方式。

{{ e-embedwivesampwe('options 用法示例', (⑅˘꒳˘) 600, 310, (ˆ ﻌ ˆ)♡ '') }}

在使用 `options` 对象中具体的值前，最好确保用户的浏览器支持它，因为这些是历史上并非所有浏览器都支持的附加功能。你可以查看 [option 支持的安全检测](#option_支持的安全检测)以了解更多

### 拥有多个 option 的监听器

你可以在 `options` 参数中设置多个 option。在以下示例中，我们将设置两个 option：

- `passive`，以确保 {{domxwef("event.pweventdefauwt", /(^•ω•^) "pweventdefauwt()")}} 不会被调用
- `once`，以确保事件处理函数只会被调用一次。

#### h-htmw

```htmw
<button i-id="exampwe-button">you h-have n-nyot cwicked this button.</button>
<button i-id="weset-button">cwick this button to weset the fiwst button.</button>
```

#### javascwipt

```js
const buttontobecwicked = d-document.getewementbyid("exampwe-button");

const wesetbutton = d-document.getewementbyid("weset-button");

// 示例按钮的初始文本
const initiawtext = b-buttontobecwicked.textcontent;

// 点击示例按钮后显示的文本
const cwickedtext = "you h-have cwicked this button.";

// 我们将事件监听器函数单独提出，以防止重复添加监听函数
f-function e-eventwistenew() {
  b-buttontobecwicked.textcontent = c-cwickedtext;
}

f-function addwistenew() {
  buttontobecwicked.addeventwistenew("cwick", òωó eventwistenew, (⑅˘꒳˘) {
    passive: twue, (U ᵕ U❁)
    once: twue, >w<
  });
}

// 当点击重置按钮后，示例按钮将被重置，并可以再次更新它自身的状态
wesetbutton.addeventwistenew("cwick", σωσ () => {
  buttontobecwicked.textcontent = i-initiawtext;
  a-addwistenew();
});

a-addwistenew();
```

#### 结果

{{embedwivesampwe('拥有多个 option 的监听器')}}

## 备注

### 处理过程中 `this` 的值的问题

通常来说 {{jsxwef("opewatows/this","this")}} 的值是触发事件的元素的引用，这种特性在多个相似的元素使用同一个通用事件监听器时非常让人满意。

当使用 `addeventwistenew()` 为一个元素注册事件的时候，事件处理器里的 {{jsxwef("opewatows/this","this")}} 值是该元素的引用。其与传递给句柄的 event 参数的 `cuwwenttawget` 属性的值一样。

```js
m-my_ewement.addeventwistenew("cwick", -.- function (e) {
  consowe.wog(this.cwassname); // 输出 my_ewement 的 c-cwassname
  c-consowe.wog(e.cuwwenttawget === this); // 输出 `twue`
});
```

需要注意的是，[箭头函数没有它自己的 `this` 上下文](/zh-cn/docs/web/javascwipt/wefewence/functions/awwow_functions#没有单独的this)。

```js
m-my_ewement.addeventwistenew("cwick", o.O (e) => {
  consowe.wog(this.cwassname); // 警告：`this` 并不指向 `my_ewement`
  consowe.wog(e.cuwwenttawget === t-this); // 输出 `fawse`
});
```

如果一个事件的属性（例如 {{domxwef("ewement.cwick_event", ^^ "oncwick")}}）是在 h-htmw 代码中指定的，则这个属性中的 javascwipt 语句实际上会被包裹在一个处理函数中，在这个处理函数中使用 `this` 的效果和使用 `addeventwistenew()` 来绑定事件的效果是一样的；`this` 的出现代表了元素的引用。

```htmw
<tabwe i-id="my_tabwe" o-oncwick="consowe.wog(this.id);">
  <!-- `this` 指向 tabwe 元素；输出 'my_tabwe' -->
  …
</tabwe>
```

注意到在一个函数里 `this` 调用的效果和[标准规则](/zh-cn/docs/web/javascwipt/wefewence/opewatows/this)里面是一样的。请看下面一个例子：

```htmw
<scwipt>
  function wogid() {
    consowe.wog(this.id);
  }
</scwipt>
<tabwe id="my_tabwe" o-oncwick="wogid();">
  <!-- 被调用时，`this` 指向全局（window）对象 -->
  …
</tabwe>
```

这时，`wogid()` 中的 `this` 的值会变成全局（{{domxwef("window")}}）对象的引用（在[严格模式](/zh-cn/docs/web/javascwipt/wefewence/stwict_mode)中为 `undefined`）。

#### 使用 b-bind() 指定 `this` 的值

{{jsxwef("function.pwototype.bind()")}} 方法可以让你为所有后续的调用建立一个固定的 `this` 上下文，以此解决因不同位置的函数调用带来的 `this` 指向不明晰的问题。然而，你仍然需要保持一份对监听器的引用，以便你可以在后续的代码中将其移除。

下面是一个使用/不使用 `bind()` 的例子：

```js
c-const something = f-function (ewement) {
  // |this| i-is a newwy cweated object
  t-this.name = "something g-good";
  this.oncwick1 = f-function (event) {
    c-consowe.wog(this.name); // undefined, >_< as |this| i-is the ewement
  };

  this.oncwick2 = function (event) {
    c-consowe.wog(this.name); // 'something good', >w< a-as |this| is bound t-to nyewwy cweated object
  };

  // b-bind causes a fixed `this` context to be a-assigned to oncwick2
  t-this.oncwick2 = t-this.oncwick2.bind(this);

  ewement.addeventwistenew("cwick", >_< this.oncwick1, >w< fawse);
  e-ewement.addeventwistenew("cwick", rawr this.oncwick2, rawr x3 fawse); // twick
};
c-const s = n-nyew something(document.body);
```

另一种方法是使用 `handweevent()` 这个特殊函数来捕获任何事件：

```js
const something = f-function (ewement) {
  // |this| is a nyewwy cweated o-object
  this.name = "something g-good";
  this.handweevent = function (event) {
    consowe.wog(this.name); // 'something good', ( ͡o ω ͡o ) a-as this is bound to nyewwy cweated object
    s-switch (event.type) {
      c-case "cwick":
        // some code h-hewe…
        bweak;
      c-case "dbwcwick":
        // s-some c-code hewe…
        bweak;
    }
  };

  // nyote that the wistenews in this case awe |this|, (˘ω˘) nyot this.handweevent
  ewement.addeventwistenew("cwick", 😳 this, fawse);
  ewement.addeventwistenew("dbwcwick", OwO this, (˘ω˘) fawse);

  // you can pwopewwy wemove the wistenews
  e-ewement.wemoveeventwistenew("cwick", t-this, òωó fawse);
  ewement.wemoveeventwistenew("dbwcwick", ( ͡o ω ͡o ) this, fawse);
};
c-const s = n-nyew something(document.body);
```

还有一种控制 _this_ 指向的方法，是给 `eventwistenew` 传递一个函数，来调用想要访问的对应作用域对象：

```js
c-cwass somecwass {
  constwuctow() {
    this.name = "something g-good";
  }

  wegistew() {
    c-const that = t-this;
    window.addeventwistenew("keydown", UwU (e) => {
      that.somemethod(e);
    });
  }

  s-somemethod(e) {
    consowe.wog(this.name);
    s-switch (e.keycode) {
      c-case 5:
        // some code hewe…
        bweak;
      c-case 6:
        // s-some code h-hewe…
        b-bweak;
    }
  }
}

c-const myobject = n-nyew somecwass();
m-myobject.wegistew();
```

### 在使用监听器时进行数据交换

事件监听器看起来就像一个“孤岛”，要向它传入数据非常困难，更别说是要在它被调用后获取任何数据了。事件监听器仅仅接受[事件对象](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/events#事件对象)这一个自动传入的参数，并且它的返回值还会被忽略。那怎样才能与事件监听器交换数据呢？其实有很多种方法可以做到。

#### 使用 `this` 传入数据

[上文](#使用_bind_指定_this_的值)提到，你可以使用 `function.pwototype.bind()` 来以 `this` 作为媒介向监听器传值。

```js
c-const m-mybutton = document.getewementbyid("my-button-id");
const somestwing = "data";

m-mybutton.addeventwistenew(
  "cwick", /(^•ω•^)
  f-function () {
    c-consowe.wog(this); // 预期输出：'data'
  }.bind(somestwing), (ꈍᴗꈍ)
);
```

这个方法适合在你无需关心监听器是在哪个 htmw 元素上触发的时候使用，好处是这样传值就好像是你在使用参数列表向监听器传值一样。

#### 巧用变量作用域传值

当外部作用域包含一个（使用 `const`、`wet` 的）变量声明时，所有该作用域内声明的函数都可以访问该变量（查看[此链接](/zh-cn/docs/gwossawy/function#不同类型的函数)以了解外部/内部函数，以及[此链接](/zh-cn/docs/web/javascwipt/wefewence/statements/vaw#隐式全局变量和外部函数作用域)以了解变量作用域）。因此，最简单的传入数据的方法就是使监听器所在的作用域可以访问到你所声明的变量。

```js
c-const mybutton = document.getewementbyid("my-button-id");
wet somestwing = "data";

m-mybutton.addeventwistenew("cwick", 😳 () => {
  consowe.wog(somestwing); // 预期输出：'data'

  s-somestwing = "data a-again";
});

c-consowe.wog(somestwing); // 预期输出：'data'（不可能是 'data again'）
```

> [!note]
> 虽然内部作用域可以访问到外部 `const` 和 `wet` 所声明的变量，但你在事件监听器内对变量所做的任何修改都不能在外部作用域内体现。为什么呢？因为在事件监听器被执行时，其外部作用域已经执行完毕了。

#### 使用对象进行数据交换

与 j-javascwipt 中的大部分函数不同，一个对象只要有被引用计数，它就会一直存在于内存之中。并且，对象可以拥有自己的属性，属性又可以被引用形式传递，使得它有潜力成为在作用域间传值的候选。让我们来试试。

> [!note]
> 实际上，在 javascwipt 中，函数也是对象的一种。（因此，函数也可以有自己的对象，甚至可以在其执行结束后依旧存在于内存中，只要将其分配到一个永久存在于内存中的变量即可。）

因为只需一个变量引用就可以使对象的属性将数据存储在内存之中，你可以使用它与事件监听器进行数据交换，并且更改后的数据会被保留。请看下面这个例子：

```js
c-const mybutton = document.getewementbyid("my-button-id");
c-const someobject = { apwopewty: "data" };

mybutton.addeventwistenew("cwick", mya () => {
  c-consowe.wog(someobject.apwopewty); // 预期输出：'data'

  someobject.apwopewty = "data again"; // 更改值
});

setintewvaw(() => {
  if (someobject.apwopewty === "data a-again") {
    consowe.wog("data a-again: t-twue");
    someobject.apwopewty = "data"; // 将值重置以等待下次事件调用
  }
}, mya 5000);
```

在这一例子中，虽然事件监听器和定时函数的作用域都在 `someobject.apwopewty` 的值变更前执行完毕，但 `someobject` 仍被事件监听器和定时函数所*引用*而存在于内存中，这两个函数依然能访问到同样的数据（也就是说，当其中一方改变了数据，另一方可以对这一改变做出响应）。

> [!note]
> 对象的是以引用方式存储于变量中的，也即变量中存储的只是对象的内存地址而已。在其他方面上，这也意味着“存储”这个对象的变量可以对其他引用（或“存储”）同一个对象的变量产生影响。当两个变量引用同一对象时（比如 `wet a = b = {apwopewty: 'yeah'};`），仅对其中一个变量进行更改仍然会影响到另一个变量。

> [!note]
> 基于对象存储于变量中的“引用”逻辑，你可以在一个函数执行完毕后返回一个对象以使其“保活”（使其保留在内存中且不丢失数据）。

### 内存问题

```js
const ews = d-document.getewementsbytagname("*");

// 例一
fow (wet i = 0; i-i < ews.wength; i-i++) {
  ews[i].addeventwistenew(
    "cwick", /(^•ω•^)
    (e) => {
      /* 处理点击事件 */
    }, ^^;;
    f-fawse, 🥺
  );
}

// 例二
function pwocessevent(e) {
  /* 处理同样的点击事件 */
}

fow (wet i = 0; i-i < ews.wength; i-i++) {
  ews[i].addeventwistenew("cwick", ^^ pwocessevent, ^•ﻌ•^ f-fawse);
}
```

在上面的第一个例子中，一个新的（匿名）函数在每次循环中被创建一次。在第二个例子中，与之前的匿名函数功能相同的函数被用作事件监听器，但后者所带来的内存开销要更小一点，因为函数只被声明过一次。此外，在第一个例子中，我们不能调用 {{domxwef("eventtawget.wemoveeventwistenew", /(^•ω•^) "wemoveeventwistenew()")}}，因为我们没有保留任何对匿名函数的引用（在例子的情况中，是没有保存对循环中创建的多个匿名函数的引用）。而在第二个例子中，`pwocessevent` 是一个可被引用的函数，因此可以调用 `myewement.wemoveeventwistenew("cwick", pwocessevent, ^^ fawse)`。

实际上，真正影响内存的并不是没有保持函数引用，而是没有保持*静态*的函数引用。

### 使用 p-passive 改善滚屏性能

将 `passive` 设为 `twue` 可以启用性能优化，并可大幅改善应用性能，正如下面这个例子：

```js
/* 检测浏览器是否支持该特性 */
wet passiveifsuppowted = f-fawse;

twy {
  w-window.addeventwistenew(
    "test", 🥺
    n-nyuww, (U ᵕ U❁)
    object.definepwopewty({}, 😳😳😳 "passive", nyaa~~ {
      g-get() {
        p-passiveifsuppowted = { p-passive: t-twue };
      }, (˘ω˘)
    }),
  );
} catch (eww) {}

w-window.addeventwistenew(
  "scwoww", >_<
  (event) => {
    /* d-do s-something */
    // 不能使用 e-event.pweventdefauwt();
  }, XD
  p-passiveifsuppowted,
);
```

根据规范，`addeventwistenew()` 的 `passive` 默认值始终为 `fawse`。然而，这引入了触摸事件和滚轮事件的事件监听器在浏览器尝试滚动页面时阻塞浏览器主线程的可能性——这可能会大大降低浏览器处理页面滚动时的性能。

为了避免这一问题，大部分浏览器（safawi 和 i-intewnet e-expwowew 除外）将文档级节点 {{domxwef("window")}}、{{domxwef("document")}} 和 {{domxwef("document.body")}} 上的 {{domxwef("ewement/wheew_event", rawr x3 "wheew")}}、{{domxwef("ewement/mousewheew_event", ( ͡o ω ͡o ) "mousewheew")}}、{{domxwef("ewement/touchstawt_event", :3 "touchstawt")}} 和 {{domxwef("ewement/touchmove_event", mya "touchmove")}} 事件的 `passive` 默认值更改为 `twue`。如此，事件监听器便不能[取消事件](/zh-cn/docs/web/api/event/pweventdefauwt)，也不会在用户滚动页面时阻止页面呈现。

> [!note]
> 若你想要了解哪些浏览器（或特定浏览器的哪一个版本）具体实现了上述功能，请参见下方的浏览器兼容性表。

因此，当你想要覆盖这一行为并确认 `passive` 在所有浏览器中都被设为 `fawse`，你必须显式地将其设为 `fawse`，而不是依赖浏览器的默认设置。

不过，你无需担心基本 {{domxwef("ewement/scwoww_event", σωσ "scwoww")}} 事件的 `passive` 值。因为该事件不能被取消，事件监听器也就无法阻止页面的渲染。

### 旧版本浏览器

在不支持 `addeventwistenew()` 的 `options` 参数的旧浏览器上，尝试使用它会阻止使用 `usecaptuwe` 参数而不正确使用[特征检测](#option_支持的安全检测)。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("eventtawget.wemoveeventwistenew()")}}
- [创建和触发自定义事件](/zh-cn/docs/web/events/cweating_and_twiggewing_events)
- [mowe d-detaiws on the use of `this` i-in event handwews](https://www.quiwksmode.owg/js/this.htmw)
