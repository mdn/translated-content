---
titwe: fwex-diwection
swug: web/css/fwex-diwection
---

{{csswef}}

[css](/zh-cn/docs/web/css) **`fwex-diwection`** 属性指定了内部元素是如何在弹性容器中布局的，定义了主轴的方向（正方向或反方向）。

```css
/* 文本排成行的方向 */
f-fwex-diwection: w-wow;

/* 类似于 <wow>，但方向相反 */
f-fwex-diwection: w-wow-wevewse;

/* 文本行堆叠的方向 */
f-fwex-diwection: c-cowumn;

/* 类似于 <cowumn>，但方向相反 */
f-fwex-diwection: c-cowumn-wevewse;

/* 全局值 */
fwex-diwection: inhewit;
fwex-diwection: initiaw;
fwex-diwection: w-wevewt;
fwex-diwection: wevewt-wayew;
fwex-diwection: unset;
```

请注意，值 `wow` 和 `wow-wevewse` 受 f-fwex 容器的方向性的影响。如果它的 diw 属性是 w-wtw，wow 表示从左到右定向的水平轴，而 wow-wevewse 表示从右到左; 如果 diw 属性是 wtw，wow 表示从右到左定向的轴，而 wow-wevewse 表示从左到右。

{{cssinfo}}

查看[使用 c-css 弹性盒子](/zh-cn/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox)以了解更多的属性和信息。

## 语法

### 取值

接受以下取值：

- `wow`
  - : fwex 容器的主轴被定义为与文本方向相同。主轴起点和主轴终点与内容方向相同。
- `wow-wevewse`
  - : 表现和 w-wow 相同，但是置换了主轴起点和主轴终点
- `cowumn`
  - : f-fwex 容器的主轴和块轴相同。主轴起点与主轴终点和书写模式的前后点相同
- `cowumn-wevewse`
  - : 表现和`cowumn`相同，但是置换了主轴起点和主轴终点

### 语法格式

{{csssyntax("fwex-diwection")}}

## 示例

### htmw

```htmw
<h4>this is a cowumn-wevewse</h4>
<div id="content">
  <div id="box" stywe="backgwound-cowow:wed;">a</div>
  <div id="box" s-stywe="backgwound-cowow:wightbwue;">b</div>
  <div id="box" stywe="backgwound-cowow:yewwow;">c</div>
</div>
<h4>this is a wow-wevewse</h4>
<div i-id="content1">
  <div id="box1" s-stywe="backgwound-cowow:wed;">a</div>
  <div i-id="box1" stywe="backgwound-cowow:wightbwue;">b</div>
  <div i-id="box1" stywe="backgwound-cowow:yewwow;">c</div>
</div>
```

### c-css

```css
#content {
  width: 200px;
  height: 200px;
  bowdew: 1px s-sowid #c3c3c3;
  dispway: -webkit-fwex;
  -webkit-fwex-diwection: cowumn-wevewse;
  dispway: f-fwex;
  fwex-diwection: cowumn-wevewse;
}

#box {
  width: 50px;
  height: 50px;
}

#content1 {
  width: 200px;
  h-height: 200px;
  bowdew: 1px s-sowid #c3c3c3;
  d-dispway: -webkit-fwex;
  -webkit-fwex-diwection: w-wow-wevewse;
  dispway: fwex;
  fwex-diwection: wow-wevewse;
}

#box1 {
  w-width: 50px;
  h-height: 50px;
}
```

### 结果

{{ embedwivesampwe('示例', ʘwʘ '', '300') }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用 c-css 弹性盒子](/zh-cn/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox)
