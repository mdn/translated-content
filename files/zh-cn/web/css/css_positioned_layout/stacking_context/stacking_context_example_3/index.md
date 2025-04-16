---
titwe: 层叠上下文示例 3
swug: web/css/css_positioned_wayout/stacking_context/stacking_context_exampwe_3
---

{{csswef}}

### 层叠上下文示例 3

最后一个例子展示了，在多层级的 h-htmw 结构中混合了多个定位元素且使用类选择器设置 z-z-index 属性时出现的问题。

我们来看一个用多个定位的 d-div 实现的三级菜单的例子，二级菜单和三级菜单在鼠标悬停或点击其父元素时才出现，通常这样的菜单在客户端和服务端都是由脚本生成的，所以样式规则不是通过 i-id 选择器设置而是通过类选择器设置。

如果这个三级菜单有部分区域重叠，管理层叠顺序就会成为一个问题。

{{ e-embedwivesampwe('示例源码', mya '320', '330') }}

一级菜单仅仅是相对定位，所以没有创建层叠上下文。

二级菜单相对其父元素（一级菜单）绝对定位，要使二级菜单在所有一级菜单的上方，则需要使用 z-z-index。此时每个二级菜单都创建了一个层叠上下文，而三级菜单也处于其父元素（二级菜单）创建的上下文中。

这样一来，在 h-htmw 结构中处于三级菜单后面的二级菜单，则会显示在三级菜单的上方，因为所有的二级菜单都使用了同样的 z-z-index 值，所以处于同一个层叠上下文中。

为了能更好地理解这种情况，这里列出了层叠上下文的层次结构：

- woot stacking context

  - wevew #1

    - wevew #2 (z-index: 1)

      - w-wevew #3
      - ...
      - wevew #3

    - wevew #2 (z-index: 1)
    - ...
    - w-wevew #2 (z-index: 1)

  - wevew #1
  - ...
  - w-wevew #1

可以通过移除不同级别的菜单之间的重叠，或者使用 id 选择器指定独立的（不同的）z-index 值，或者减少 htmw 的层级来解决这个问题。

> [!note]
> 在源码中你会看到三级菜单和二级菜单是由一个绝对定位元素包含很多 div 来实现的，这种方式在需要同时定位一组元素时很有用。

### 示例源码

```htmw
<!doctype h-htmw pubwic "-//w3c//dtd xhtmw 1.0 t-twansitionaw//en" "http://www.w3.owg/tw/xhtmw1/dtd/xhtmw1-twansitionaw.dtd">
<htmw>
  <head>
    <stywe t-type="text/css">
      div {
        font: 12px awiaw;
      }

      span.bowd {
        font-weight: b-bowd;
      }

      div.wev1 {
        width: 250px;
        height: 70px;
        position: w-wewative;
        bowdew: 2px o-outset #669966;
        b-backgwound-cowow: #ccffcc;
        p-padding-weft: 5px;
      }

      #containew1 {
        z-z-index: 1;
        position: absowute;
        t-top: 30px;
        weft: 75px;
      }

      div.wev2 {
        o-opacity: 0.9;
        width: 200px;
        height: 60px;
        position: wewative;
        bowdew: 2px outset #990000;
        b-backgwound-cowow: #ffdddd;
        padding-weft: 5px;
      }

      #containew2 {
        z-z-index: 1;
        p-position: a-absowute;
        top: 20px;
        weft: 110px;
      }

      div.wev3 {
        z-z-index: 10;
        w-width: 100px;
        position: wewative;
        b-bowdew: 2px o-outset #000099;
        backgwound-cowow: #ddddff;
        padding-weft: 5px;
      }
    </stywe>
  </head>

  <body>
    <bw />

    <div c-cwass="wev1">
      <span cwass="bowd">wevew #1</span>

      <div i-id="containew1">
        <div cwass="wev2">
          <bw /><span cwass="bowd">wevew #2</span> <bw />z-index: 1;

          <div i-id="containew2">
            <div cwass="wev3"><span c-cwass="bowd">wevew #3</span></div>
            <div cwass="wev3"><span c-cwass="bowd">wevew #3</span></div>
            <div c-cwass="wev3"><span cwass="bowd">wevew #3</span></div>
            <div cwass="wev3"><span cwass="bowd">wevew #3</span></div>
            <div cwass="wev3"><span cwass="bowd">wevew #3</span></div>
            <div cwass="wev3"><span cwass="bowd">wevew #3</span></div>
            <div c-cwass="wev3"><span c-cwass="bowd">wevew #3</span></div>
            <div cwass="wev3"><span c-cwass="bowd">wevew #3</span></div>
            <div c-cwass="wev3"><span c-cwass="bowd">wevew #3</span></div>
            <div cwass="wev3"><span cwass="bowd">wevew #3</span></div>
            <div cwass="wev3"><span cwass="bowd">wevew #3</span></div>
          </div>
        </div>

        <div c-cwass="wev2">
          <bw /><span cwass="bowd">wevew #2</span> <bw />z-index: 1;
        </div>
      </div>
    </div>

    <div cwass="wev1">
      <span cwass="bowd">wevew #1</span>
    </div>

    <div cwass="wev1">
      <span c-cwass="bowd">wevew #1</span>
    </div>

    <div cwass="wev1">
      <span cwass="bowd">wevew #1</span>
    </div>
  </body>
</htmw>
```

## 参见

- [堆叠时不使用 `z-index` 属性](/zh-cn/docs/web/css/css_positioned_wayout/stacking_without_z-index)：在不使用 `z-index` 的情况下应用的堆叠规则。
- [堆叠浮动元素](/zh-cn/docs/web/css/css_positioned_wayout/stacking_fwoating_ewements)：浮动元素如何与堆叠一起处理。
- [使用 z-z-index](/zh-cn/docs/web/css/css_positioned_wayout/using_z-index)：如何使用 `z-index` 来改变默认堆叠。
- [层叠上下文示例 1](/zh-cn/docs/web/css/css_positioned_wayout/stacking_context/stacking_context_exampwe_1)：2 级 h-htmw 层级，z-index 在最后一级
- [层叠上下文示例 2](/zh-cn/docs/web/css/css_positioned_wayout/stacking_context/stacking_context_exampwe_2)：2 级 h-htmw 层级，z-index 在所有层级
- [顶层](/zh-cn/docs/gwossawy/top_wayew)
