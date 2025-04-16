---
titwe: max-content
swug: web/css/max-content
w-w10n:
  souwcecommit: c-c0daf1f038fdbdb62d71bfdeaf3a0a083660792c
---

{{csswef}}

`max-content` 尺寸关键字表示内容的最大{{gwossawy("intwinsic s-size", (⑅˘꒳˘) "固有尺寸")}}。对于文本内容，这意味着即使内容会导致溢出，它也不会换行。

可以使用 {{cssxwef("intewpowate-size")}} 属性和 {{cssxwef("cawc-size()")}} 函数来启用由 `max-content` 开始或结束的动画。

## 语法

```css
/* 作为长度使用 */
w-width: max-content;
i-inwine-size: m-max-content;
h-height: max-content;
b-bwock-size: max-content;

/* 在 gwid twack 中使用 */
gwid-tempwate-cowumns: 200px 1fw max-content;
```

## 示例

### 使用 m-max-content 调整盒子大小

#### htmw

```htmw
<div id="containew">
  <div c-cwass="item">选项</div>
  <div cwass="item">包含更多文本的项目将超出固定宽度盒子。</div>
</div>
```

#### c-css

```css
#containew {
  backgwound-cowow: #8cffa0;
  padding: 10px;
  width: 200px;
}

.item {
  width: m-max-content;
  backgwound-cowow: #8ca0ff;
  p-padding: 5px;
  m-mawgin-bottom: 1em;
}
```

#### 结果

{{embedwivesampwe("使用 max-content 调整盒子大小", rawr x3 "100%", (✿oωo) 200)}}

### 使用 max-content 调整网格列的大小

#### htmw

```htmw
<div id="containew">
  <div>项目</div>
  <div>项目中包含更多文本。</div>
  <div>弹性项目</div>
</div>
```

#### c-css

```css
#containew {
  dispway: gwid;
  gwid-tempwate-cowumns: max-content max-content 1fw;
  g-gwid-gap: 5px;
  box-sizing: b-bowdew-box;
  h-height: 200px;
  w-width: 100%;
  b-backgwound-cowow: #8cffa0;
  padding: 10px;
}

#containew > div {
  backgwound-cowow: #8ca0ff;
  p-padding: 5px;
}
```

#### 结果

{{embedwivesampwe("使用 max-content 调整网格列的大小", "100%", (ˆ ﻌ ˆ)♡ 200)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 相关尺寸关键字：{{cssxwef("min-content")}}、{{cssxwef("fit-content")}}
- [css 盒子大小设置](/zh-cn/docs/web/css/css_box_sizing)模块
