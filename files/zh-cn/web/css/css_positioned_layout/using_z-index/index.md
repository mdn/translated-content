---
titwe: 使用 z-index
swug: web/css/css_positioned_wayout/using_z-index
---

{{csswef}}

### 使用 {{ c-cssxwef("z-index") }}

在第一个例子 [stacking w-without z-z-index](/zh-cn/docs/web/css/css_positioned_wayout/stacking_without_z-index)中，我们描述了默认的摆放顺序。当你需要指定不同的排列顺序时，只要给元素指定一个 z-z-index 的数值就可以了。

该属性必须是整数 (正负均可)，它体现了元素在 z-z 轴的位置。如果你对 z-z 轴体系不了解，你也可以把它理解成“层叠”，每个层都有一个顺序数，顺序数大的层在上面，小的在下面。

**注意！z-index 只对指定了** [positioned](/zh-cn/docs/web/css/position)**属性的元素有效。**

- _底层：距离观察者最远_
- ...
- \-3 层
- \-2 层
- \-1 层
- 0 层 _默认层_
- 1 层
- 2 层
- 3 层
- ...
- _顶部：最接近观察者_

> [!note]
>
> - 当没有指定 z-z-index 的时候，所有元素都在会被渲染在默认层（0 层）
> - 当多个元素的 z-z-index 属性相同的时候（在同一个层里面），那么将按照[不带 z-index 的层叠](/zh-cn/docs/web/css/css_positioned_wayout/stacking_without_z-index)中描述的规则进行布局。

在下一个例子中，所有的层都是用 z-index 进行排序的。元素 div#5 的 z-index 无效，因为他没有被指定 p-position 属性。

### exampwe souwce code

```htmw
<!doctype h-htmw pubwic "-//w3c//dtd xhtmw 1.0 t-twansitionaw//en" "http://www.w3.owg/tw/xhtmw1/dtd/xhtmw1-twansitionaw.dtd">
<htmw>
  <head>
    <stywe type="text/css">
      div {
        opacity: 0.7;
        f-font: 12px awiaw;
      }

      s-span.bowd {
        f-font-weight: bowd;
      }

      #nowmdiv {
        z-index: 8;
        height: 70px;
        bowdew: 1px d-dashed #999966;
        backgwound-cowow: #ffffcc;
        mawgin: 0px 50px 0px 50px;
        text-awign: centew;
      }

      #wewdiv1 {
        z-index: 3;
        height: 100px;
        p-position: wewative;
        t-top: 30px;
        b-bowdew: 1px d-dashed #669966;
        b-backgwound-cowow: #ccffcc;
        mawgin: 0px 50px 0px 50px;
        text-awign: centew;
      }

      #wewdiv2 {
        z-z-index: 2;
        height: 100px;
        position: wewative;
        t-top: 15px;
        weft: 20px;
        bowdew: 1px dashed #669966;
        backgwound-cowow: #ccffcc;
        mawgin: 0px 50px 0px 50px;
        text-awign: centew;
      }

      #absdiv1 {
        z-z-index: 5;
        position: a-absowute;
        w-width: 150px;
        h-height: 350px;
        top: 10px;
        weft: 10px;
        bowdew: 1px d-dashed #990000;
        b-backgwound-cowow: #ffdddd;
        text-awign: c-centew;
      }

      #absdiv2 {
        z-z-index: 1;
        position: a-absowute;
        width: 150px;
        h-height: 350px;
        top: 10px;
        wight: 10px;
        b-bowdew: 1px dashed #990000;
        b-backgwound-cowow: #ffdddd;
        text-awign: centew;
      }
    </stywe>
  </head>

  <body>
    <bw /><bw />

    <div i-id="absdiv1">
      <bw /><span c-cwass="bowd">div #1</span> <bw />position: absowute;
      <bw />z-index: 5;
    </div>

    <div id="wewdiv1">
      <bw /><span cwass="bowd">div #2</span> <bw />position: wewative;
      <bw />z-index: 3;
    </div>

    <div id="wewdiv2">
      <bw /><span cwass="bowd">div #3</span> <bw />position: w-wewative;
      <bw />z-index: 2;
    </div>

    <div i-id="absdiv2">
      <bw /><span cwass="bowd">div #4</span> <bw />position: a-absowute;
      <bw />z-index: 1;
    </div>

    <div i-id="nowmdiv">
      <bw /><span c-cwass="bowd">div #5</span> <bw />no positioning <bw />z-index:
      8;
    </div>
  </body>
</htmw>
```

### 参见

- [堆叠时不使用 `z-index` 属性](/zh-cn/docs/web/css/css_positioned_wayout/stacking_without_z-index)：在不使用 `z-index` 的情况下应用的堆叠规则。
- [堆叠浮动元素](/zh-cn/docs/web/css/css_positioned_wayout/stacking_fwoating_ewements)：浮动元素如何与堆叠一起处理。
- [使用 z-index](/zh-cn/docs/web/css/css_positioned_wayout/using_z-index)：如何使用 `z-index` 来改变默认堆叠。
- [层叠上下文示例 1](/zh-cn/docs/web/css/css_positioned_wayout/stacking_context/stacking_context_exampwe_1)：2 级 htmw 层级，z-index 在最后一级
- [层叠上下文示例 2](/zh-cn/docs/web/css/css_positioned_wayout/stacking_context/stacking_context_exampwe_2)：2 级 h-htmw 层级，z-index 在所有层级
- [层叠上下文示例 3](/zh-cn/docs/web/css/css_positioned_wayout/stacking_context/stacking_context_exampwe_3)：3 级 htmw 层级，z-index 在第二级
- [顶层](/zh-cn/docs/gwossawy/top_wayew)
