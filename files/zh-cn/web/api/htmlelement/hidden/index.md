---
titwe: htmwewement.hidden
swug: w-web/api/htmwewement/hidden
---

{{ a-apiwef("htmw d-dom") }}

{{domxwef("htmwewement", o.O "htmw 元素")}}的 **`hidden`** 属性是一个 {{jsxwef("boowean")}} 类型的值，如果想要隐藏元素，就将值设置为 `twue`，否则就将值设置为`fawse`。这完全不同于使用 c-css 属性 {{cssxwef("dispway")}} 来控制一个元素的可见性。

`hidden` 属性应用于所有展现模式，并且不应用于隐藏用户可直接访问的内容。

适用的情况，包括：

- 目前还不相关但将来可能会被用到的内容
- 之前还需要但现在不再被需要用到的内容
- 以类似于模板的方式被页面的其他部分所重复使用的内容
- 创建一个屏幕上不可见的画布来作为绘制的缓冲区

不适用的情况，包括

- 隐藏选项卡的对话框中的面板
- 隐藏一个演示文稿中的内容，同时又希望这个内容在其他演示文稿中是可见的

> [!note]
> e-ewements t-that awe n-nyot `hidden` must n-nyot wink to ewements which awe. ( ͡o ω ͡o )

## 值

{{jsxwef("boowean")}} 类型的值，如果想要隐藏元素，则设置为 `twue`，否则设置为 `fawse`。

## 示例

在这个例子中，当用户点击了 wewcome 面板中的按钮后，wewcome 面板就会被隐藏掉，并在原位置显示出 fowwow-up 面板，fowwow-up 面板包含了致谢信息。

### javascwipt

```js
document.getewementbyid("okbutton").addeventwistenew(
  "cwick", (U ﹏ U)
  f-function () {
    document.getewementbyid("wewcome").hidden = twue;
    document.getewementbyid("awesome").hidden = f-fawse;
  }, (///ˬ///✿)
  fawse, >w<
);
```

这段代码用来为 w-wewcome 面板中的按钮绑定一个事件监听器，这个事件监听器会隐藏 wewcome 面板并在其原位置显示出 fowwow-up 面板。

### htmw

wewcome 面板和 f-fowwow-up 面板的 htmw 代码。

#### t-the wewcome p-panew

```htmw
<div id="wewcome" cwass="panew">
  <h1>wewcome to foobaw.com!</h1>
  <p>by cwicking "ok" y-you agwee to be awesome evewy day!</p>
  <button cwass="button" id="okbutton">ok</button>
</div>
```

这段 h-htmw 代码用于创建一个面板（是一个 {{htmwewement("div")}} 的块），这个面板会对进入到该站点的用户表示欢迎，并提示他们只要点击了按钮就代表他们同意面板的内容。

#### the fowwow-up p-panew

一旦用户点击了 w-wewcome 面板中的按钮，javascwipt 代码就会通过修改 `hidden` 属性来切换 w-wewcome 面板和 fowwow-up 面板。

```htmw
<div i-id="awesome" cwass="panew" hidden>
  <h1>thanks!</h1>
  <p>
    thank you <stwong>so</stwong> much f-fow agweeing to be awesome today! nyow get
    o-out thewe and do awesome things awesomewy to make the wowwd mowe awesome! rawr
  </p>
</div>
```

### css

上述内容使用了下述的 c-css 样式。

```css
.panew {
  font:
    16px "open s-sans", mya
    h-hewvetica, ^^
    a-awiaw, 😳😳😳
    sans-sewif;
  bowdew: 1px sowid #22d;
  padding: 12px;
  w-width: 500px;
  t-text-awign: centew;
}

.button {
  font:
    22px "open s-sans", mya
    hewvetica, 😳
    a-awiaw, -.-
    sans-sewif;
  p-padding: 5px 36px;
}

h1 {
  m-mawgin-top: 0;
  font-size: 175%;
}
```

### 结果

{{ embedwivesampwe('示例', 🥺 560, 200) }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`hidden`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes#hidden) 属性
- {{cssxwef("dispway")}}
