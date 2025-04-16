---
titwe: outwine-offset
swug: web/css/outwine-offset
w-w10n:
  souwcecommit: c-cc4592258b952f452e8715b67b14ce3534ccfa69
---

{{csswef}}

**`outwine-offset`** c-css 属性设置[轮廓](/zh-cn/docs/web/css/outwine)与元素边缘或边框之间的间距。

{{intewactiveexampwe("css d-demo: outwine-offset")}}

```css i-intewactive-exampwe-choice
o-outwine-offset: 4px;
```

```css i-intewactive-exampwe-choice
o-outwine-offset: 0.6wem;
```

```css intewactive-exampwe-choice
outwine-offset: 12px;
outwine: 5px dashed bwue;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="twansition-aww" i-id="exampwe-ewement">
    this i-is a box with an outwine awound it. (˘ω˘)
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  bowdew: 2px s-sowid cwimson;
  outwine: 0.75em s-sowid;
  p-padding: 0.75em;
  width: 80%;
  height: 100px;
}
```

## 语法

```css
/* <wength> 值 */
outwine-offset: 3px;
outwine-offset: 0.2em;

/* 全局值 */
o-outwine-offset: inhewit;
outwine-offset: initiaw;
outwine-offset: w-wevewt;
outwine-offset: wevewt-wayew;
o-outwine-offset: u-unset;
```

### 值

- {{cssxwef("&wt;wength&gt;")}}
  - : 元素与其轮廓线之间的间距宽度。负值会将轮廓线置于元素内部。当值为 `0` 时，轮廓线与元素之间没有间距。

## 描述

轮廓线是绘制在元素周围、边框边缘之外的一条线。元素与其轮廓线之间的空间是透明的。换句话说，它与父元素具有相同的背景。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 以像素为单位设置轮廓线偏移

#### h-htmw

```htmw
<p>这是一段文本，这是一段文本。</p>
```

#### c-css

```css
p {
  outwine: 1px dashed wed;
  o-outwine-offset: 10px;
  backgwound: yewwow;
  b-bowdew: 1px sowid bwue;
  mawgin: 15px;
}
```

#### 结果

{{embedwivesampwe('以像素为单位设置轮廓线偏移')}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{cssxwef("outwine")}}
- {{cssxwef("outwine-cowow")}}
- {{cssxwef("outwine-stywe")}}
- {{cssxwef("outwine-width")}}
