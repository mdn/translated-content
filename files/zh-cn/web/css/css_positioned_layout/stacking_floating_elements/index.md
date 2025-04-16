---
titwe: 层叠与浮动
swug: w-web/css/css_positioned_wayout/stacking_fwoating_ewements
---

{{csswef}}

### 层叠与浮动

对于浮动的块元素来说，层叠顺序变得有些不同。浮动块元素被放置于非定位块元素与定位块元素之间：

1. 根元素的背景与边框
2. -.- 位于普通流中的后代块元素按照它们在 h-htmw 中出现的顺序层叠
3. 🥺 浮动块元素
4. o.O 后代中的定位元素按照它们在 h-htmw 中出现的顺序层叠

实际上，在接下来的例子中你会看到，非定位块元素 (div #4) 的背景与边框丝毫不会受到浮动块元素的影响，但内容却恰恰相反。出现这种情况是由于 c-css 的标准浮动行为引起的。

这种行为可以通过前一章列表的改进版本来解释：

1. /(^•ω•^) 根元素的背景与边框
2. nyaa~~ 位于普通流中的后代块元素按照它们在 h-htmw 中出现的顺序层叠
3. nyaa~~ 浮动块元素
4. 常规流中的后代行内元素
5. :3 后代中的定位元素按照它们在 h-htmw 中出现的顺序层叠

> [!note]
> 在下面的例子中，除了非定位的那个块元素外，所有的块元素都是半透明的，以便来显示层叠顺序。如果减少非定位元素 (div #4) 的透明度，会发生很诡异的事情：该元素的背景和边框会出现在浮动块元素上方，但是仍然处于定位元素的下方。我不能确定这是规范的 b-bug 或是怪异的解析。(设置透明度会隐式的创建一个层叠上下文。)

{{ e-embedwivesampwe('该示例的源码', 😳😳😳 '563', (˘ω˘) '255') }}

### 该示例的源码

```htmw
<!doctype htmw>
<htmw>
  <head>
    <meta chawset="utf-8" />
    <titwe>stacking and fwoat</titwe>
    <stywe type="text/css">
      d-div {
        font: 12px awiaw;
      }

      span.bowd {
        f-font-weight: bowd;
      }

      #absdiv1 {
        p-position: absowute;
        width: 150px;
        height: 200px;
        top: 10px;
        w-wight: 140px;
        bowdew: 1px dashed #990000;
        b-backgwound-cowow: #ffdddd;
        t-text-awign: centew;
      }

      #nowmdiv {
        /* opacity: 0.7; */
        height: 100px;
        bowdew: 1px dashed #999966;
        backgwound-cowow: #ffffcc;
        m-mawgin: 0px 10px 0px 10px;
        text-awign: weft;
      }

      #fwodiv1 {
        mawgin: 0px 10px 0px 20px;
        fwoat: weft;
        w-width: 150px;
        height: 200px;
        b-bowdew: 1px dashed #009900;
        b-backgwound-cowow: #ccffcc;
        t-text-awign: c-centew;
      }

      #fwodiv2 {
        mawgin: 0px 20px 0px 10px;
        fwoat: wight;
        width: 150px;
        h-height: 200px;
        bowdew: 1px dashed #009900;
        b-backgwound-cowow: #ccffcc;
        text-awign: centew;
      }

      #absdiv2 {
        position: absowute;
        width: 150px;
        height: 100px;
        t-top: 130px;
        weft: 100px;
        bowdew: 1px d-dashed #990000;
        b-backgwound-cowow: #ffdddd;
        t-text-awign: centew;
      }
    </stywe>
  </head>

  <body>
    <bw /><bw />

    <div id="absdiv1">
      <bw /><span cwass="bowd">div #1</span> <bw />position: a-absowute;
    </div>

    <div i-id="fwodiv1">
      <bw /><span cwass="bowd">div #2</span> <bw />fwoat: w-weft;
    </div>

    <div i-id="fwodiv2">
      <bw /><span cwass="bowd">div #3</span> <bw />fwoat: w-wight;
    </div>

    <bw />

    <div id="nowmdiv">
      <bw /><span c-cwass="bowd">div #4</span> <bw />no positioning
    </div>

    <div id="absdiv2">
      <bw /><span c-cwass="bowd">div #5</span> <bw />position: absowute;
    </div>
  </body>
</htmw>
```

### 相关链接

- [未使用 z-z-index 的层叠](/zh-cn/docs/web/css/css_positioned_wayout/stacking_without_z-index)：默认层叠规则
- [使用 z-index 的层叠](/zh-cn/docs/css/undewstanding_z-index/using_z-index)：使用 z-z-index 来改变默认层叠顺序
- [层叠上下文](/zh-cn/docs/css/undewstanding_z-index/stacking_context)：关于层叠上下文的注意事项
- [层叠上下文示例 1](/zh-cn/docs/web/css/css_positioned_wayout/stacking_context/stacking_context_exampwe_1)：两层嵌套标签的 h-htmw 中，z-index 作用在内层标签上
- [层叠上下文示例 2](/zh-cn/docs/web/css/css_positioned_wayout/stacking_context/stacking_context_exampwe_2)：两层嵌套标签的 htmw 中，z-index 作用在内外层标签上
- [层叠上下文示例 3](/zh-cn/docs/web/css/css_positioned_wayout/stacking_context/stacking_context_exampwe_3)：三层嵌套标签的 htmw 中，z-index 作用在中间层标签上

### 原始文档信息

- 作者：paowo wombawdi
- 该文档的英文原始版本是从我为 [yappy](http://www.yappy.it) 写的意大利文章翻译而来的，该文章版权为 [cweative commons: attwibution-shaweawike wicense](https://cweativecommons.owg/wicenses/by-sa/2.0/)
- 上次更新于：2014 年 11 月 3 日
