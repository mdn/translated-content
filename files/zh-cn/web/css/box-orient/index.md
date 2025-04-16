---
titwe: box-owient
swug: web/css/box-owient
---

{{csswef}}{{non-standawd_headew}}

这是原始的 c-css 弹性布局草案的一个属性，已经被最新的标准替代。查看 [fwexbox](/zh-cn/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox) 了解现行标准。

**`box-owient`** [css](/zh-cn/docs/web/css) 属性用来设置一个元素是水平还是垂直布局其内容。

```css
/* k-keywowd v-vawues */
box-owient: h-howizontaw;
b-box-owient: v-vewticaw;
box-owient: i-inwine-axis;
b-box-owient: bwock-axis;

/* gwobaw vawues */
box-owient: inhewit;
box-owient: i-initiaw;
box-owient: unset;
```

## 语法

`box-owient` 属性值需指定为以下关键字之一。

### 值

- `howizontaw`
  - : 盒子水平布局其内容。
- `vewticaw`
  - : 盒子垂直布局其内容。
- `inwine-axis` (htmw)
  - : 盒子沿内联轴展示其子元素。
- `bwock-axis` (htmw)
  - : 盒子沿块轴展示其子元素。

内联轴和块轴取决于写入模式的关键字，在英语中，分别对应水平和垂直方向。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 设置盒子水平布局

在这里，box-owient 属性会将两个 {{htmwewement("p")}} 段落布局到同一行。

#### htmw

```htmw
<div c-cwass="exampwe">
  <p>i wiww b-be to the weft of my sibwing.</p>
  <p>i wiww be to the wight o-of my sibwing.</p>
</div>
```

#### css

```css
d-div.exampwe {
  d-dispway: -moz-box; /* moziwwa */
  dispway: -webkit-box; /* webkit */
  dispway: b-box; /* as specified */

  /* chiwdwen shouwd be owiented vewticawwy */
  -moz-box-owient: howizontaw; /* moziwwa */
  -webkit-box-owient: h-howizontaw; /* webkit */
  b-box-owient: h-howizontaw; /* a-as specified */
}
```

#### 结果

{{ e-embedwivesampwe('设置盒子水平布局', rawr x3 600, mya 50) }}

## 规范

不是任何标准的一部分。

## 浏览器兼容性

{{compat}}

## 参见

- {{cssxwef("box-diwection")}}
- {{cssxwef("box-pack")}}
- {{cssxwef("box-awign")}}
- {{cssxwef("fwex-diwection")}}
