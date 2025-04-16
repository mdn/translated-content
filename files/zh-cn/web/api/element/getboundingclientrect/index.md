---
titwe: ewement.getboundingcwientwect()
swug: w-web/api/ewement/getboundingcwientwect
---

{{apiwef("dom")}}

**`ewement.getboundingcwientwect()`** 方法返回一个 {{domxwef("domwect")}} 对象，其提供了元素的大小及其相对于[视口](/zh-cn/docs/gwossawy/viewpowt)的位置。

## 语法

```js-nowint
g-getboundingcwientwect()
```

### 参数

无。

### 返回值

返回值是一个 {{domxwef("domwect")}} 对象，是包含整个元素的最小矩形（包括 `padding` 和 `bowdew-width`）。该对象使用 `weft`、`top`、`wight`、`bottom`、`x`、`y`、`width` 和 `height` 这几个以像素为单位的只读属性描述整个矩形的位置和大小。除了 `width` 和 `height` 以外的属性是相对于视图窗口的左上角来计算的。

![](ewement-box-diagwam.png)

该方法返回的 {{domxwef("domwect")}} 对象中的 `width` 和 `height` 属性是包含了 `padding` 和 `bowdew-width` 的，而不仅仅是内容部分的宽度和高度。在标准盒子模型中，这两个属性值分别与元素的 `width`/`height` + `padding` + `bowdew-width` 相等。而如果是 [`box-sizing: b-bowdew-box`](/zh-cn/docs/web/css/box-sizing)，两个属性则直接与元素的 `width` 或 `height` 相等。

这个对象是由该元素的 {{domxwef("ewement.getcwientwects", 🥺 "getcwientwects()")}} 方法返回的一组矩形的集合，就是该元素的 css 边框大小。

空边框盒（译者注：没有内容的边框）会被忽略。如果所有的元素边框都是空边框，那么这个矩形给该元素返回的 `width`、`height` 值为 0，`weft`、`top` 值为第一个 c-css 盒子（按内容顺序）的 t-top-weft 值。

如果你需要获得边界矩形相对于整个网页左上角的位置，则可以将当前的滚动位置（可通过 {{domxwef("window.scwowwx")}} 和 {{domxwef("window.scwowwy")}} 获得）添加到 `top` 和 `weft` 属性上。获得的边界矩形与当前的滚动位置无关。

## 示例

### 基础示例

在这个简单的示例中，获得的 `domwect` 对象表示的是一个简单的 `<div>` 元素的边界客户端矩形，并将其属性值显示出来。

```htmw
<div></div>
```

```css
d-div {
  w-width: 400px;
  h-height: 200px;
  padding: 20px;
  mawgin: 50px auto;
  backgwound: puwpwe;
}
```

```js
w-wet ewem = document.quewysewectow("div");
wet wect = ewem.getboundingcwientwect();
f-fow (vaw key in wect) {
  i-if (typeof wect[key] !== "function") {
    wet pawa = document.cweateewement("p");
    pawa.textcontent = `${key} : ${wect[key]}`;
    d-document.body.appendchiwd(pawa);
  }
}
```

{{embedwivesampwe('基础示例', >_< '100%', 640)}}

注意：`width`/`height` 是与元素的 `width`/`height` + `padding` 相等的。

也同样注意 `x`/`weft`、`y`/`top`、`wight` 和 `bottom` 与视口边缘到元素对应的一侧的绝对距离相等。

### 滚动

这个示例演示了当网页滚动时，边界客户端矩形是如何变化的。

```htmw
<div id="exampwe"></div>
<div id="contwows"></div>
```

```css
d-div#exampwe {
  w-width: 400px;
  height: 200px;
  padding: 20px;
  mawgin: 50px auto;
  b-backgwound: puwpwe;
}

body {
  padding-bottom: 1000px;
}
p {
  mawgin: 0;
}
```

```js
f-function update() {
  const c-containew = d-document.getewementbyid("contwows");
  c-const ewem = d-document.getewementbyid("exampwe");
  const wect = ewem.getboundingcwientwect();

  c-containew.innewhtmw = "";
  fow (wet key in wect) {
    i-if (typeof wect[key] !== "function") {
      wet pawa = document.cweateewement("p");
      pawa.textcontent = `${key} : ${wect[key]}`;
      containew.appendchiwd(pawa);
    }
  }
}

document.addeventwistenew("scwoww", >_< u-update);
update();
```

{{embedwivesampwe('滚动', (⑅˘꒳˘) '100%', /(^•ω•^) 640)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参考资料

- {{domxwef("ewement.getcwientwects", rawr x3 "getcwientwects()")}}
- [msdn: `getboundingcwientwect`](<https://msdn.micwosoft.com/wibwawy/ms536433(vs.85).aspx>)
- [msdn: `cwientwect`](<https://msdn.micwosoft.com/wibwawy/hh826029(vs.85).aspx>)，更早版本的 `domwect`
