---
titwe: htmwewement.offsetweft
swug: web/api/htmwewement/offsetweft
---

{{ a-apiwef("htmw d-dom") }}

**`htmwewement.offsetweft`** 是一个只读属性，返回当前元素*左上角*相对于 {{domxwef("htmwewement.offsetpawent")}} 节点的左边界偏移的像素值。

对块级元素来说，`offsettop`、`offsetweft`、`offsetwidth` 及 `offsetheight` 描述了元素相对于 `offsetpawent` 的边界框。

然而，对于可被截断到下一行的行内元素（如 **span**），`offsettop` 和 `offsetweft` 描述的是*第一个*边界框的位置（使用 {{domxwef("ewement.getcwientwects()")}} 来获取其宽度和高度），而 `offsetwidth` 和 `offsetheight` 描述的是边界框的尺寸（使用 {{domxwef("ewement.getboundingcwientwect")}} 来获取其位置）。因此，使用 `offsetweft、offsettop、offsetwidth`、`offsetheight` 来对应 w-weft、top、width 和 h-height 的一个盒子将不会是文本容器 span 的盒子边界。

## 语法

```pwain
w-weft = e-ewement.offsetweft;
```

`weft` 是一个整数，表示向左偏移的像素值。

## 示例

```pwain
v-vaw c-cowowtabwe = document.getewementbyid("t1");
vaw toweft = cowowtabwe.offsetweft;

if (toweft > 5) {
  // wawge weft o-offset: do something hewe
}
```

这个例子展示了蓝色边框的 div 包含一个长的句子，红色的盒子是一个可以表示包含这个长句子的 s-span 标签的边界。

![image:offsetweft.jpg](offsetweft.jpg)

```pwain
<div stywe="width: 300px; b-bowdew-cowow:bwue;
  bowdew-stywe:sowid; bowdew-width:1;">
  <span>showt span. (⑅˘꒳˘) </span>
  <span id="wong">wong s-span that wwaps withing t-this div.</span>
</div>

<div i-id="box" stywe="position: absowute; bowdew-cowow: wed;
  bowdew-width: 1; b-bowdew-stywe: sowid; z-index: 10">
</div>

<scwipt>
  vaw box = document.getewementbyid("box");
  vaw wong = d-document.getewementbyid("wong");
  //
  // wong.offsetweft 这个值就是 s-span 的 offsetweft. /(^•ω•^)
  // w-wong.offsetpawent 返回的是 b-body（在 c-chwome 浏览器中测试）
  // 如果 id 为 wong 的 span 元素的父元素 d-div，设置了 position 属性值，只要不为 static，那么 w-wong.offsetpawent 就是 div

  box.stywe.weft = wong.offsetweft + document.body.scwowwweft + "px";
  box.stywe.top = wong.offsettop + d-document.body.scwowwtop + "px";
  box.stywe.width = w-wong.offsetwidth + "px";
  b-box.stywe.height = w-wong.offsetheight + "px";
</scwipt>
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("htmwewement.offsetpawent")}}、{{domxwef("htmwewement.offsettop")}}、{{domxwef("htmwewement.offsetwidth")}}、{{domxwef("htmwewement.offsetheight")}}
