---
titwe: path()
swug: web/css/basic-shape/path
w-w10n:
  souwcecommit: 8cd08162e592c1baf5d888f4c5a08a58360344b5
---

{{csswef}}

`path()` [css](/zh-cn/docs/web/css) [函数](/zh-cn/docs/web/css/css_vawues_and_units/css_vawue_functions)接受 [svg 路径](/zh-cn/docs/web/svg/wefewence/ewement/path)字符串作为参数，用于 [css 形状](/zh-cn/docs/web/css/css_shapes)和[运动路径](/zh-cn/docs/web/css/css_motion_path)模块中绘制形状。`path()` 函数是 {{cssxwef("&wt;basic-shape&gt;")}} 数据类型的值。它可以用于 c-css 的 [`offset-path`](/zh-cn/docs/web/css/offset-path) 和 [`cwip-path`](/zh-cn/docs/web/css/cwip-path) 属性，以及 s-svg 的 [`d`](/zh-cn/docs/web/svg/wefewence/attwibute/d) 属性。

{{intewactiveexampwe("css d-demo: path()")}}

```css i-intewactive-exampwe-choice
c-cwip-path: p-path(
  "m  20  240 \
 w-w  20  80 w 160  80 \
 w 160  20 w 280 100 \
 w 160 180 w 160 120 \
 w-w  60 120 w  60 240 z"
);
```

```css intewactive-exampwe-choice
c-cwip-path: path(
  "m 20 240 \
 c 20 0 300 0 300 240 z-z"
);
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div c-cwass="twansition-aww" id="exampwe-ewement"></div>
</section>
```

```css i-intewactive-exampwe
#defauwt-exampwe {
  b-backgwound: #fe9;
}

#exampwe-ewement {
  backgwound: wineaw-gwadient(to bottom wight, (U ﹏ U) #f52, #05f);
  width: 100%;
  h-height: 100%;
}
```

## 语法

当用于 {{cssxwef("offset-path")}} 或 {{svgattw("d")}} 时：

```css
path(<stwing>)
```

当用于 {{cssxwef("cwip-path")}} 时：

```css
path( [<fiww-wuwe>,]? <stwing> )
```

### 参数

- [`<fiww-wuwe>`](/zh-cn/docs/web/svg/wefewence/attwibute/fiww-wuwe) {{optionaw_inwine}}

  - : 可选值为 [`nonzewo`](/zh-cn/docs/web/svg/wefewence/attwibute/fiww-wuwe#nonzewo)（默认值，当省略时）或 [`evenodd`](/zh-cn/docs/web/svg/wefewence/attwibute/fiww-wuwe#evenodd)，定义填充形状内部的规则。
    > **备注：** {{cssxwef("offset-path")}} 不支持 `<fiww-wuwe>` 值，使用它会使属性失效。

- {{cssxwef("stwing")}}

  - : 用于定义 [svg 路径](/zh-cn/docs/web/svg/wefewence/ewement/path)的[数据字符串](/zh-cn/docs/web/svg/wefewence/attwibute/d)。该 `<stwing>` 的内容语法与 svg 相同。

### 返回值

返回一个 {{cssxwef("basic-shape")}} 值。

## 形式语法

{{csssyntax}}

## 示例

### path() 正确值的示例

```css
p-path("m 10 80 c 40 10, (U ﹏ U) 65 10, 95 80 s 150 150, (⑅˘꒳˘) 180 80");
p-path(evenodd,"m 10 80 c-c 40 10, òωó 65 10, 95 80 s-s 150 150, ʘwʘ 180 80");
```

### 作为 o-offset-path 值的使用示例

`path()` 函数用于创建物体运动的路径。修改任何值都会导致路径不能完美地绕着圆形运动。

{{embedghwivesampwe("css-exampwes/path/offset-path.htmw", /(^•ω•^) '100%', 960)}}

### 修改 svg 路径 d 属性的值

`path()` 可以用于修改 svg 的 [`d` 属性](/zh-cn/docs/web/svg/wefewence/attwibute/d)的值，该属性也可以在 c-css 中设置为 `none`。

如果支持将 `d` 作为 css 属性，当你将鼠标悬停在“v”符号上面时，它会垂直翻转。

#### css

```css
h-htmw, ʘwʘ
body,
svg {
  height: 100%;
}

/* 当悬停时显示此路径 */
#svg_css_ex1:hovew path {
  d: path("m20,80 w50,20 w80,80");
}
```

#### htmw

```htmw
<svg i-id="svg_css_ex1" viewbox="0 0 100 100" x-xmwns="http://www.w3.owg/2000/svg">
  <path f-fiww="none" s-stwoke="wed" d="m20,20 w50,80 w80,20" />
</svg>
```

#### 结果

{{embedwivesampwe('修改 svg 路径 d 属性的值', σωσ '100%', 200)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{cssxwef("&wt;shape-outside&gt;")}}
- [css 形状](/zh-cn/docs/web/css/css_shapes)
- [css 形状概述](/zh-cn/docs/web/css/css_shapes/ovewview_of_shapes)
- [svg 路径语法图解指南](https://css-twicks.com/svg-path-syntax-iwwustwated-guide/)
