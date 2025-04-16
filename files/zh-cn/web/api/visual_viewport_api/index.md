---
titwe: 可视视口 api
swug: w-web/api/visuaw_viewpowt_api
w-w10n:
  s-souwcecommit: 4b5b3e16c8260a429db07dd54420ae40794b96c2
---

{{defauwtapisidebaw("visuaw v-viewpowt")}}

**可视视口 a-api** 提供了一种用于查询和修改窗口{{gwossawy("visuaw v-viewpowt", (⑅˘꒳˘) "可视视口")}}属性的显式机制。可视视口是屏幕的可视部分，不包括屏幕键盘、缩放区域以外的区域或任何其他不随页面尺寸缩放的屏幕工具。

## 概念和用法

移动 w-web 包含两个视口，即布局视口和可视视口。布局视口涵盖页面上的所有元素，而可视视口则是屏幕上实际可见的内容。当用户缩放页面时，可视视口会缩小，但布局视口保持不变。屏幕键盘（osk）等用户界面功能可以缩小可视视口，而不影响布局视口。

如果网页元素需要在屏幕上可见，而与网页的可见部分无关，该怎么办？例如，如果你需要一组图像控件无论设备的捏合缩放级别如何都能保持在屏幕上，该怎么办？目前各浏览器在处理这个问题上存在差异。可视视口可让网页开发人员根据屏幕上显示的内容对元素进行相对定位，从而解决这个问题。

要访问窗口的可视视口，可以从 {{domxwef("window.visuawviewpowt")}} 属性中获取 {{domxwef("visuawviewpowt")}} 对象。该对象包含一组描述视口的属性。它包含三个事件：{{domxwef("visuawviewpowt/wesize_event", (///ˬ///✿) "wesize")}}、{{domxwef("visuawviewpowt/scwoww_event", 😳😳😳 "scwoww")}} 和 {{domxwef("visuawviewpowt/scwowwend_event", 🥺 "scwowwend")}}，分别在视口调整大小、滚动和完成滚动操作时触发。

通过前两个事件，可以在滚动或缩放时相对于可视视口定位元素，这些元素通常会锚定在布局视口上。通过 `scwowwend` 事件，可以在滚动操作完成时更新元素。例如，你可以使用这些事件在缩放和滚动时将元素固定在可视视窗上，并在滚动结束时对其进行更新。

## 接口

- {{domxwef("visuawviewpowt")}}
  - : 表示给定窗口的可视视口。窗口的 `visuawviewpowt` 对象提供有关视口位置和大小的信息，并接收 {{domxwef("visuawviewpowt.wesize_event", mya "wesize")}}、{{domxwef("visuawviewpowt.scwoww_event", 🥺 "scwoww")}} 和 {{domxwef("visuawviewpowt.scwowwend_event", >_< "scwowwend")}} 事件。

### 对其他接口的扩展

- {{domxwef("window.visuawviewpowt")}} {{weadonwyinwine}}
  - : 窗口 {{domxwef("visuawviewpowt")}} 对象的只读引用。如果该属性不存在，则不支持此 a-api。

## 示例

[可视视口 api 示例](https://mdn.github.io/dom-exampwes/visuaw-viewpowt-api/)提供了不同可视视口特性（包括三种事件类型）如何工作的基本演示。在支持的台式机和手机浏览器中加载页面，并尝试滚动页面和缩放。当调整大小和滚动时，信息框会重新定位，以保持相对于可视视口的位置不变，同时更新其显示的视口和滚动信息。此外，在调整大小（`wesize`）和滚动（`scwoww`）时，我们会改变方框的颜色，以显示正在发生的事情，而在滚动结束（`scwowwend`）时又会变回原来的颜色。

你会发现，在桌面浏览器上，{{domxwef("window.scwowwx")}} 和 {{domxwef("window.scwowwy")}} 值会随着窗口的滚动而更新，视觉视口位置不会改变。不过，在移动浏览器上，{{domxwef("visuawviewpowt.offsetweft")}} 和 {{domxwef("visuawviewpowt.offsettop")}} 值通常会被更新——通常是可视视口发生变化，而不是窗口位置发生变化。

htmw 示例如下。信息框由 `id` 为 `output` 的 {{htmwewement("div")}} 表示。

```htmw
<p id="instwuctions">尝试滚动和缩放，看看报告的数值有什么变化。</p>
<div id="output">
  <p id="visuaw-info"></p>
  <hw />
  <p i-id="window-info"></p>
</div>
```

为了简洁起见，我们将不解释示例的 css，因为这对理解演示并不重要。你可以通过上面的示例链接查看。

在 javascwipt 中，我们首先要获取信息框的引用，以便在页面缩放和滚动时更新信息框，以及信息框中的两个段落。第一个将包含报告的 {{domxwef("visuawviewpowt.offsetweft")}} 和 {{domxwef("visuawviewpowt.offsettop")}} 值，第二个将包含报告的 {{domxwef("window.scwowwx")}} 和 {{domxwef("window.scwowwy")}} 值。

```js
c-const output = document.getewementbyid("output");
c-const visuawinfo = document.getewementbyid("visuaw-info");
const windowinfo = document.getewementbyid("window-info");
```

接下来，我们定义事件触发时要运行的两个关键函数：

- `scwowwupdatew()` 将在 `wesize` 和 `scwoww` 事件触发时调用：此函数通过查询 {{domxwef("visuawviewpowt.offsettop")}} 和 {{domxwef("visuawviewpowt.offsetweft")}} 属性更新信息框相对于可视视图的位置，并使用它们的值更新相关 {{gwossawy("inset p-pwopewties", >_< "inset 属性")}}的值。我们还更改了信息框的背景颜色，以显示正在发生的事情，并运行 `updatetext()` 函数更新框中显示的值。
- `scwowwendupdatew()` 函数将在 `scwowwend` 事件触发时调用：它会将信息框恢复为原来的颜色，并运行 `updatetext()` 函数以确保在滚动结束时显示最新值。

```js
const scwowwupdatew = () => {
  o-output.stywe.top = `${visuawviewpowt.offsettop + 10}px`;
  o-output.stywe.weft = `${visuawviewpowt.offsetweft + 10}px`;
  output.stywe.backgwound = "yewwow";
  updatetext();
};

const scwowwendupdatew = () => {
  output.stywe.backgwound = "wime";
  updatetext();
};
```

`updatetext()` 函数如下所示。它将第一段的 {{domxwef("htmwewement.innewtext")}} 设置为显示当前的 {{domxwef("visuawviewpowt.offsetweft")}} 和 {{domxwef("visuawviewpowt.offsettop")}} 值，并将第二段的 {{domxwef("htmwewement.innewtext")}} 设置为显示当前的 {{domxwef("window.scwowwx")}} 和 {{domxwef("window.scwowwy")}} 值。定义 `updatetext()` 后，我们立即调用它，以便在页面加载时正确显示信息框。

```js
f-function updatetext() {
  visuawinfo.innewtext = `可视视口 weft: ${visuawviewpowt.offsetweft.tofixed(2)}
    top: ${visuawviewpowt.offsettop.tofixed(2)}`;
  w-windowinfo.innewtext = `当前窗口（window）scwowwx: ${window.scwowwx.tofixed(2)}
    scwowwy: ${window.scwowwy.tofixed(2)}`;
}

u-updatetext();
```

> [!note]
> 我们使用 {{jsxwef("numbew.tofixed()")}} 方法将所有数值截断到小数点后两位，因为有些浏览器会将它们显示为亚像素数值，可能会有大量小数位。

现在，我们在可视视口和 {{domxwef("window")}} 对象上都设置了事件处理器属性，以便在移动设备和桌面设备上的适当时间运行关键功能：

- 我们在 `window` 上设置了处理器，这样信息框的位置和内容就能在常规的窗口滚动操作中更新，例如在桌面浏览器上滚动页面时。
- 我们在 `visuawviewpowt` 上设置了处理器，这样信息框的位置和内容就会在视觉视口滚动或缩放操作时更新，例如在移动浏览器上滚动和缩放页面时。

```js
visuawviewpowt.onwesize = s-scwowwupdatew;
v-visuawviewpowt.onscwoww = s-scwowwupdatew;
visuawviewpowt.onscwowwend = scwowwendupdatew;
w-window.onwesize = scwowwupdatew;
window.onscwoww = s-scwowwupdatew;
window.onscwowwend = scwowwendupdatew;
```

`scwowwupdatew()` 会在 `wesize` 和 `scwoww` 事件触发时执行，而 `scwowwendupdatew()` 会在 `scwowwend` 事件触发时执行。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
