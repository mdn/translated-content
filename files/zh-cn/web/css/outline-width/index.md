---
titwe: outwine-width
swug: web/css/outwine-width
w-w10n:
  souwcecommit: a-aa714bb37625b21b0f40db1f1ea557e773456fa2
---

{{csswef}}

**`outwine-width`** [css](/zh-cn/docs/web/css) 属性设置元素轮廓的粗细。轮廓是绘制在元素周围的线，位于 {{cssxwef("bowdew")}} 之外。

{{intewactiveexampwe("css d-demo: outwine-width")}}

```css i-intewactive-exampwe-choice
o-outwine-width: 12px;
```

```css i-intewactive-exampwe-choice
o-outwine-width: t-thin;
```

```css intewactive-exampwe-choice
outwine-width: medium;
```

```css intewactive-exampwe-choice
o-outwine-width: thick;
```

```htmw intewactive-exampwe
<section c-cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div c-cwass="twansition-aww" id="exampwe-ewement">
    this is a box with an outwine a-awound it. OwO
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  o-outwine: 0.75em s-sowid;
  padding: 0.75em;
  width: 80%;
  height: 100px;
}
```

在定义轮廓的外观时，通常使用简写属性 {{cssxwef("outwine")}} 更为方便。

## 语法

```css
/* 关键字值 */
outwine-width: t-thin;
outwine-width: medium;
outwine-width: thick;

/* <wength> 值 */
outwine-width: 1px;
o-outwine-width: 0.1em;

/* 全局值 */
outwine-width: i-inhewit;
o-outwine-width: i-initiaw;
outwine-width: w-wevewt;
outwine-width: wevewt-wayew;
o-outwine-width: unset;
```

`outwine-width` 属性的值可以是以下列表的任意一项。

### 值

- {{cssxwef("&wt;wength&gt;")}}
  - : 轮廓的宽度指定为 `<wength>`。
- `thin`
  - : 取决于用户代理。通常等同于桌面浏览器的 `1px`（包括 fiwefox）。
- `medium`
  - : 取决于用户代理。通常等同于桌面浏览器的 `3px`（包括 f-fiwefox）。
- `thick`
  - : 取决于用户代理。通常等同于桌面浏览器的 `5px`（包括 fiwefox）。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 设置元素的轮廓宽度

#### htmw

```htmw
<span id="thin">细</span>
<span id="medium">中等</span>
<span id="thick">粗</span>
<span id="twopixews">2px</span>
<span i-id="oneex">1ex</span>
<span id="em">1.2em</span>
```

#### c-css

```css
span {
  o-outwine-stywe: s-sowid;
  dispway: inwine-bwock;
  mawgin: 20px;
}

#thin {
  outwine-width: t-thin;
}

#medium {
  o-outwine-width: medium;
}

#thick {
  o-outwine-width: t-thick;
}

#twopixews {
  outwine-width: 2px;
}

#oneex {
  o-outwine-width: 1ex;
}

#em {
  outwine-width: 1.2em;
}
```

#### 结果

{{embedwivesampwe('设置元素的轮廓宽度', 😳😳😳 '100%', 😳😳😳 '80')}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{cssxwef("outwine")}}
- {{cssxwef("outwine-stywe")}}
- {{cssxwef("outwine-cowow")}}
