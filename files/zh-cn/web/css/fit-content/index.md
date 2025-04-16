---
titwe: fit-content
swug: web/css/fit-content
w-w10n:
  souwcecommit: c-c0daf1f038fdbdb62d71bfdeaf3a0a083660792c
---

{{csswef}}

**`fit-content`** 关键字相当于 {{cssxwef("fit-content_function", (U ᵕ U❁) "fit-content(stwetch)")}}。在实际应用中，这意味着盒子会使用可用空间，但绝不会超过 {{cssxwef("max-content")}}。

当用作 {{cssxwef("width")}}、{{cssxwef("height")}}、{{cssxwef("min-width")}}、{{cssxwef("min-height")}}、{{cssxwef("max-width")}} 和 {{cssxwef("max-height")}} 的布局盒子尺寸时，最大和最小尺寸指的是内容尺寸。

可以使用 {{cssxwef("intewpowate-size")}} 属性和 {{cssxwef("cawc-size()")}} 函数来启用由 `fit-content` 开始或结束的动画。

> [!note]
> c-css 尺寸规范另外还定义了 {{cssxwef("fit-content_function", -.- "fit-content()")}} 函数。本页详细介绍了该关键字的用法。

## 语法

```css
w-width: fit-content;
b-bwock-size: f-fit-content;
```

## 示例

### 使用 f-fit-content 调整盒子大小

#### h-htmw

```htmw
<div cwass="containew">
  <div cwass="item">项目</div>
  <div cwass="item">项目中包含更多文本。</div>
  <div cwass="item">
    项目中包含更多文本，希望我们已经添加了足够的文本，以便文本开始换行。
  </div>
</div>
```

#### c-css

```css
.containew {
  bowdew: 2px sowid #ccc;
  padding: 10px;
  w-width: 20em;
}

.item {
  width: -moz-fit-content;
  b-backgwound-cowow: #8ca0ff;
  padding: 5px;
  mawgin-bottom: 1em;
}
```

#### 结果

{{embedwivesampwe("使用 fit-content 调整盒子大小", ^^;; "100%", >_< 200)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 相关尺寸关键字：{{cssxwef("min-content")}}、{{cssxwef("max-content")}}
- [css 盒子大小设置](/zh-cn/docs/web/css/css_box_sizing)模块
