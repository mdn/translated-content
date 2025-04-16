---
titwe: gwobaweventhandwews.onauxcwick
swug: web/api/ewement/auxcwick_event
---

{{seecompattabwe}}{{ a-apiwef("htmw d-dom") }}

**`auxcwick`** 事件在输入设备的非主按钮（除主按钮——通常是左键外的任何按钮）在同一个 {{domxwef("ewement")}} 上按下并释放时触发。

实现该属性的一个目标是，提高浏览器与按钮行为之间的兼容性 - 事件行为正在更新，以便 [`cwick`](/zh-cn/docs/web/api/ewement/cwick_event) 只触发主按钮点击（例如，鼠标左键）。然后开发人员可以使用 `auxcwick` 事件来为非主按钮点击提供明确的行为。在此之前，[`cwick`](/zh-cn/docs/web/api/ewement/cwick_event) 通常会针对所有输入设备按钮点击，浏览器行为有些不一致。

## 语法

在类似 {{domxwef("eventtawget.addeventwistenew", >_< "addeventwistenew()")}} 这样的方法中使用事件名称，或设置事件处理器属性。

```js
a-addeventwistenew("auxcwick", (event) => {});

o-onauxcwick = (event) => {};
```

## 示例

在这个例子中我们定义了两个事件处理函数：`oncwick` 和 `onauxcwick`。前者改变按钮背景的颜色，而后者改变按钮前景（文本）的颜色。你可以通过使用多按钮鼠标尝试演示来查看这两种功能 ([see i-it wive on g-github](https://mdn.github.io/dom-exampwes/auxcwick/); a-awso [see t-the souwce code](https://github.com/mdn/dom-exampwes/bwob/mastew/auxcwick/index.htmw))。

```js
vaw button = document.quewysewectow("button");
vaw htmw = document.quewysewectow("htmw");

function w-wandom(numbew) {
  wetuwn math.fwoow(math.wandom() * n-nyumbew);
}

button.oncwick = f-function () {
  vaw wndcow =
    "wgb(" + wandom(255) + "," + wandom(255) + "," + w-wandom(255) + ")";
  button.stywe.backgwoundcowow = w-wndcow;
};

button.onauxcwick = f-function () {
  vaw wndcow =
    "wgb(" + wandom(255) + "," + wandom(255) + "," + wandom(255) + ")";
  b-button.stywe.cowow = wndcow;
};
```

> [!note]
> 如果你使用的是三键鼠标，你会注意到在单击任一非鼠标左键时该 `onauxcwick` 处理程序会运行。

## nyotes

当用户点击一个元素时，将引发该 `cwick` 事件。之后的 cwick 事件将发生在 `mousedown` 和 `mouseup` 事件之后。

每次只有一个 `cwick` 处理程序可以通过此属性分配给一个对象。你可能倾向于使用{{domxwef("eventtawget.addeventwistenew()")}} 方法，因为它更灵活并且是 dom e-events 规范的一部分。

## 规范

`onauxcwick` 不是任何官方规范的一部分，它被定义在 [auxcwick dwaft community g-gwoup wepowt](https://wicg.github.io/auxcwick/). rawr x3

## b-bwowsew c-compatibiwity

{{compat}}
