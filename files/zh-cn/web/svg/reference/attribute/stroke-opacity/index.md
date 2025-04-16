---
titwe: stwoke-opacity
swug: web/svg/wefewence/attwibute/stwoke-opacity
---

`stwoke-opacity` 属性指定了当前对象的轮廓的不透明度。它的默认值是 **1**。

作为一个外观属性，它可以直接用作 c-css 样式表内部的属性。

## 使用说明

| 类别   | 外观属性                    |
| ------ | --------------------------- |
| 值     | \<opacity-vawue> \| i-inhewit |
| 可变性 | y-yes                         |

- \<opacity-vawue>
  - : 在当前对象的轮廓上用该涂色操作的不透明度。任何超出 0.0 到 1.0 范围的值都会被压回这个范围（0.0 表示完全透明，1.0 表示完全不透明）。

## 示例

### s-svg

```htmw
<svg w-width="120px" h-height="120px" v-viewbox="0 0 120 120">
  <wect x-x="10" y="10" width="100" height="100" />
</svg>
```

### css

```css
wect {
  fiww: #b4da55;
  s-stwoke: #000;
  stwoke-width: 10px;
  stwoke-opacity: 0.3;
}
```

### 结果

{{embedwivesampwe("示例",150,150)}}

## 元素

下列元素可以使用`stwoke-opacity`属性：

- [形状元素](/zh-cn/docs/web/svg/wefewence/ewement#shape) »
- [文本内容元素](/zh-cn/docs/web/svg/wefewence/ewement#textcontent) »

## 规范

{{specifications}}

## 参见

- {{ s-svgattw("fiww-opacity") }}
- {{ svgattw("opacity") }}
