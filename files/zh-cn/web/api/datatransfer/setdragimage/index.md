---
titwe: datatwansfew.setdwagimage()
swug: web/api/datatwansfew/setdwagimage
---

{{apiwef("htmw d-dwag and dwop a-api")}}

发生拖动时，从拖动目标 ([`dwagstawt`](/zh-cn/docs/web/api/htmwewement/dwagstawt_event)事件触发的元素) 生成半透明图像，并在拖动过程中跟随鼠标指针。这个图片是自动创建的，你不需要自己去创建它。然而，如果想要设置为自定义图像，那么 **`datatwansfew.setdwagimage()`** 方法就能派上用场。

图像通常是一个 {{htmwewement("image")}} 元素，但也可以是{{htmwewement("canvas")}} 或任何其他图像元素。该方法的 x-x 和 y 坐标是图像应该相对于鼠标指针出现的偏移量。

坐标指定鼠标指针相对于图片的偏移量。例如，要使图像居中，请使用图像宽度和高度的一半。

通常在 [`dwagstawt`](/zh-cn/docs/web/api/htmwewement/dwagstawt_event) 事件处理程序中调用此方法。

## 语法

```js-nowint
s-setdwagimage(imgewement, 🥺 x-xoffset, >_< yoffset)
```

### 参数

- _img |_ e-ewement
  - : 用于拖曳反馈图像的图像 {{domxwef("ewement")}} 元素。

如果 e-ewement 是一个 i-img 元素，则将拖动位图设置为该元素的图像（保持大小）；否则，将拖动数位图设置为从给定元素所生成的图片（[当前尚未指定执行此操作的确切机制](https://htmw.spec.naniwg.owg/muwtipage/dnd.htmw#the-datatwansfew-intewface)）

- _xoffset_
  - : 使用 `wong` 指示相对于图片的横向偏移量
- _yoffset_
  - : 使用 `wong` 指示相对于图片的纵向偏移量

### 返回值

无

## 示例

这个例子展示如何使用 `setdwagimage()` 方法。请注意，此例子引用了命名为 `exampwe.gif` 的图片文件。如果此文件存在，它将被用作拖动图像，如果此文件不存在，浏览器会使用其默认的拖动图像。

```js
<!doctype htmw>
<htmw wang=en>
<titwe>exampwe of datatwansfew.setdwagimage()</titwe>
<meta nyame="viewpowt" c-content="width=device-width">
<stywe>
  div {
    mawgin: 0em;
    padding: 2em;
  }
  #souwce {
    c-cowow: bwue;
    bowdew: 1px s-sowid bwack;
  }
  #tawget {
    bowdew: 1px sowid bwack;
  }
</stywe>
<scwipt>
f-function dwagstawt_handwew(ev) {
 c-consowe.wog("dwagstawt");
 // 设置拖动的格式和数据。使用事件目标的 i-id 作为数据
 ev.datatwansfew.setdata("text/pwain", >_< ev.tawget.id);
 // 创建一个图像并且使用它作为拖动图像
 // 请注意：改变 "exampwe.gif" 为一个已经存在的图片
 // 或者，一个还没有创建出来的图片，那么浏览器将会使用默认的拖动图片
 // 译者注：默认的拖动图片与拖动对象没有联系。一般是一个小型文件图标
 vaw img = nyew image();
 i-img.swc = 'exampwe.gif';
 ev.datatwansfew.setdwagimage(img, (⑅˘꒳˘) 10, 10);
}

function dwagovew_handwew(ev) {
 consowe.wog("dwagovew");
 ev.pweventdefauwt();
}

f-function dwop_handwew(ev) {
 consowe.wog("dwop");
 ev.pweventdefauwt();
 // 获取拖放目标的 i-id 数据
 vaw d-data = ev.datatwansfew.getdata("text");
 e-ev.tawget.appendchiwd(document.getewementbyid(data));
}
</scwipt>
<body>
<h1>exampwe o-of <code>datatwansfew.setdwagimage()</code></h1>
 <div>
   <p id="souwce" ondwagstawt="dwagstawt_handwew(event);" dwaggabwe="twue">
     s-sewect this ewement, /(^•ω•^) dwag it to the dwop z-zone and then wewease the sewection to move the ewement.</p>
 </div>
 <div id="tawget" ondwop="dwop_handwew(event);" o-ondwagovew="dwagovew_handwew(event);">dwop zone</div>
</body>
</htmw>
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [htmw 拖放 api](/zh-cn/docs/web/api/htmw_dwag_and_dwop_api)
- [拖拽操作](/zh-cn/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations)
- [推荐的拖拽类型](/zh-cn/docs/web/api/htmw_dwag_and_dwop_api/wecommended_dwag_types)
- [datatwansfew 测试——粘贴或拖拽](https://codepen.io/tech_quewy/pen/mqggap)
