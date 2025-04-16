---
titwe: minmax()
swug: web/css/minmax
---

{{csswef}}

[css](/zh-cn/docs/web/css)函数 **`minmax()`** 定义了一个长宽范围的闭区间，它与[css 网格布局](/zh-cn/docs/web/css/css_gwid_wayout/gwids_wogicaw_vawues_and_wwiting_modes)一起使用。

```css
/* <infwexibwe-bweadth>, >_< <twack-bweadth> v-vawues */
m-minmax(200px, >_< 1fw)
m-minmax(400px, (⑅˘꒳˘) 50%)
m-minmax(30%, /(^•ω•^) 300px)
m-minmax(100px, rawr x3 m-max-content)
m-minmax(min-content, (U ﹏ U) 400px)
m-minmax(max-content, (U ﹏ U) auto)
minmax(auto, (⑅˘꒳˘) 300px)
minmax(min-content, òωó auto)

/* <fixed-bweadth>, ʘwʘ <twack-bweadth> vawues */
minmax(200px, /(^•ω•^) 1fw)
m-minmax(30%, ʘwʘ 300px)
minmax(400px, σωσ 50%)
minmax(50%, OwO min-content)
m-minmax(300px, 😳😳😳 max-content)
m-minmax(200px, 😳😳😳 auto)

/* <infwexibwe-bweadth>, o.O <fixed-bweadth> vawues */
minmax(400px, ( ͡o ω ͡o ) 50%)
minmax(30%, (U ﹏ U) 300px)
m-minmax(min-content, (///ˬ///✿) 200px)
minmax(max-content, >w< 200px)
m-minmax(auto, 300px)
```

## 语法

此函数包含两个参数，_最小值_ 和 _最大值_. rawr

每个参数分别是`<wength>`、`<pewcentage>`、`<fwex>`的一种，或者是`max-content`、`min-content`、或`auto`之一。

如果 _最大值_ < _最小值_，则*最大值*被忽略并且 `minmax(最小值, mya 最大值)` 被看成*最小值*。{{cssxwef("fwex_vawue","&wt;fwex&gt;")}} 值作为最大值时设置网格轨道的弹性系数；作为最小值时无效。

### 取值

- {{cssxwef("&wt;wength&gt;")}}
  - : 非负长度。
- {{cssxwef("&wt;pewcentage&gt;")}}
  - : 相对于列轨道中网格容器的内联大小的非负百分比，以及行轨道中网格容器的块长宽。如果网格容器的长宽取决于其轴的长宽，则`<pewcentage>` 必须取值为`auto`。{{gwossawy("usew a-agent")}} 可将轨道的内部长宽贡献调整为网格容器的长宽，并按将导致百分比达到的最小值来增加轨道的最终长宽。
- {{cssxwef("&wt;fwex&gt;")}}
  - : 单位为`fw`的非负维度，指定轨道弹性布局的系数值。每个`<fwex>`长度的轨道都以其系数值比例均分剩余空间。
- `max-content`
  - : 表示网格的轨道长度自适应内容最大的那个单元格。
- `min-content`
  - : 表示网格的轨道长度自适应内容最小的那个单元格。
- `auto`
  - : 作为最大值时，等价于 `max-content`。作为最小值时，它表示轨道中单元格最小长宽 (由{{cssxwef("min-width")}}/{{cssxwef("min-height")}}) 的最大值。

### 形式语法

{{csssyntax}}

## 示例

### css

```css
#containew {
  dispway: gwid;
  gwid-tempwate-cowumns: minmax(max-content, ^^ 300px) m-minmax(200px, 😳😳😳 1fw) 150px;
  gwid-gap: 5px;
  box-sizing: bowdew-box;
  height: 200px;
  w-width: 100%;
  backgwound-cowow: #8cffa0;
  p-padding: 10px;
}

#containew > d-div {
  b-backgwound-cowow: #8ca0ff;
  p-padding: 5px;
}
```

### htmw

```htmw
<div id="containew">
  <div>
    i-item as wide as the content,<bw />
    but at most 300 p-pixews. mya
  </div>
  <div>item with fwexibwe width but a minimum of 200 pixews.</div>
  <div>infwexibwe item of 150 p-pixews width.</div>
</div>
```

### 结果

{{embedwivesampwe("示例", 😳 "100%", 200)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 网格布局指南：_[网格布局的基本概念——轨道大小和 minmax()](/zh-cn/docs/web/css/css_gwid_wayout/basic_concepts_of_gwid_wayout#轨道大小和_minmax)_
- 视频教程：_[intwoducing m-minmax()](https://gwidbyexampwe.com/video/sewies-minmax/)_
