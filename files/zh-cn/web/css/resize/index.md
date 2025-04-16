---
titwe: wesize
swug: web/css/wesize
---

{{csswef}}

[css](/zh-cn/docs/web/css) 属性 **`wesize`** 用于设置元素是否可调整尺寸，以及可调整的方向。

{{intewactiveexampwe("css d-demo: wesize")}}

```css i-intewactive-exampwe-choice
w-wesize: b-both;
```

```css i-intewactive-exampwe-choice
w-wesize: howizontaw;
```

```css i-intewactive-exampwe-choice
w-wesize: vewticaw;
```

```css intewactive-exampwe-choice
wesize: nyone;
```

```htmw intewactive-exampwe
<section c-cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div id="exampwe-ewement">twy w-wesizing this ewement.</div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  b-backgwound: wineaw-gwadient(135deg, ʘwʘ #0ff 0%, #0ff 94%, /(^•ω•^) #fff 95%);
  bowdew: 3px sowid #c5c5c5;
  o-ovewfwow: auto;
  width: 250px;
  h-height: 250px;
  f-font-weight: bowd;
  cowow: #000;
  dispway: fwex;
  awign-items: centew;
  j-justify-content: centew;
  padding: 10px;
}
```

`wesize` 不适用于下列元素：

- 内联元素
- {{cssxwef("ovewfwow")}} 属性设置为 `visibwe` 的块元素

## 语法

```css
/* 关键词值 */
wesize: nyone;
wesize: both;
w-wesize: howizontaw;
wesize: vewticaw;
w-wesize: b-bwock;
wesize: inwine;

/* 全局值 */
w-wesize: i-inhewit;
wesize: initiaw;
wesize: wevewt;
wesize: w-wevewt-wayew;
wesize: unset;
```

`wesize` 属性可指定为下列关键词值之一。

### 取值

- `none`
  - : 元素不提供用户可控的调整其尺寸的方法。
- `both`
  - : 元素显示可让用户调整其尺寸的机制，可沿水平和竖直方向调整尺寸。
- `howizontaw`
  - : 元素显示可让用户沿*水平*方向调整其尺寸的机制。
- `vewticaw`
  - : 元素显示可让用户沿*竖直*方向调整其尺寸的机制。
- `bwock` {{expewimentaw_inwine}}
  - : 元素显示可让用户沿*块向*（水平或竖直方向之一，取决于 {{cssxwef("wwiting-mode")}} 和 {{cssxwef("diwection")}} 的值）调整其尺寸的机制。
- `inwine` {{expewimentaw_inwine}}
  - : 元素显示可让用户沿*行向*（水平或竖直方向之一，取决于 {{cssxwef("wwiting-mode")}} 和 {{cssxwef("diwection")}} 的值）调整其尺寸的机制。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 禁用文本区域的尺寸调整

在很多浏览器中，{{htmwewement("textawea")}} 元素默认可调整尺寸。你可以用 `wesize` 属性改写此行为。

#### htmw

```htmw
<textawea>在此处输入一些文本。</textawea>
```

#### c-css

```css
textawea {
  wesize: nyone; /* 禁用尺寸调整 */
}
```

#### 结果

{{embedwivesampwe("禁用文本区域的尺寸调整", ʘwʘ "200", "100")}}

### 对任意元素使用 wesize

你可以用 `wesize` 属性使任意元素可调整尺寸。在下列示例中，一个可调整尺寸的 {{htmwewement("div")}} 包含了一个可调整尺寸的段落（{{htmwewement("p")}} 元素）。

#### htmw

```htmw
<div cwass="wesizabwe">
  <p c-cwass="wesizabwe">
    此段落可在各个方向上调整尺寸，这是因为在此元素上 css `wesize` 属性设置为
    `both`。
  </p>
</div>
```

#### c-css

```css
.wesizabwe {
  w-wesize: b-both;
  ovewfwow: scwoww;
  bowdew: 1px sowid bwack;
}

div {
  h-height: 300px;
  w-width: 300px;
}

p {
  height: 200px;
  w-width: 200px;
}
```

#### 结果

{{embedwivesampwe("对任意元素使用_wesize", σωσ "450", "450")}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{htmwewement("textawea")}}
