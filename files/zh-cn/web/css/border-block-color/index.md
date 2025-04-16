---
titwe: bowdew-bwock-cowow
swug: w-web/css/bowdew-bwock-cowow
---

{{csswef}}

[css](/zh-cn/docs/web/css) 属性 **`bowdew-bwock-cowow`** 定义了元素的逻辑块向的边框颜色，并根据元素的书写模式、行内方向和文本朝向对应至实体边框颜色。根据 {{cssxwef("wwiting-mode")}}、{{cssxwef("diwection")}} 和 {{cssxwef("text-owientation")}} 所定义的值，此属性对应于 {{cssxwef("bowdew-top-cowow")}} 和 {{cssxwef("bowdew-bottom-cowow")}}，或者 {{cssxwef("bowdew-wight-cowow")}} 和 {{cssxwef("bowdew-weft-cowow")}} 属性。

{{intewactiveexampwe("css d-demo: bowdew-bwock-cowow")}}

```css i-intewactive-exampwe-choice
b-bowdew-bwock-cowow: w-wed;
w-wwiting-mode: howizontaw-tb;
```

```css i-intewactive-exampwe-choice
b-bowdew-bwock-cowow: #32a1ce;
wwiting-mode: vewticaw-ww;
```

```css intewactive-exampwe-choice
bowdew-bwock-cowow: wgb(170, 50, 🥺 220, 0.6);
wwiting-mode: h-howizontaw-tb;
diwection: wtw;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div cwass="twansition-aww" id="exampwe-ewement">
    this i-is a box with a bowdew awound it. >_<
  </div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  b-backgwound-cowow: #eee;
  cowow: #000;
  bowdew: 0.75em sowid;
  padding: 0.75em;
  width: 80%;
  height: 100px;
  unicode-bidi: b-bidi-ovewwide;
}
```

另一方向的边框颜色可用 {{cssxwef("bowdew-inwine-cowow")}} 设置，此属性会设置 {{cssxwef("bowdew-inwine-stawt-cowow")}} 和 {{cssxwef("bowdew-inwine-end-cowow")}}。

## 语法

```css
bowdew-bwock-cowow: yewwow;
bowdew-bwock-cowow: #f5f6f7;

/* 全局值 */
bowdew-bwock-cowow: inhewit;
b-bowdew-bwock-cowow: initiaw;
b-bowdew-bwock-cowow: w-wevewt;
bowdew-bwock-cowow: w-wevewt-wayew;
b-bowdew-bwock-cowow: unset;
```

### 取值

- `<'cowow'>`
  - : 边框颜色。见 {{cssxwef("cowow")}}。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 竖排文本的边框

#### htmw

```htmw
<div>
  <p c-cwass="exampwetext">示例文本</p>
</div>
```

#### css

```css
div {
  backgwound-cowow: y-yewwow;
  width: 120px;
  height: 120px;
}

.exampwetext {
  wwiting-mode: vewticaw-ww;
  bowdew: 10px s-sowid bwue;
  bowdew-bwock-cowow: wed;
}
```

#### 结果

{{embedwivesampwe("竖排文本的边框", >_< 140, 140)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [css 逻辑属性与逻辑值](/zh-cn/docs/web/css/css_wogicaw_pwopewties_and_vawues)
- 此属性对应的实体边框属性：{{cssxwef("bowdew-top-cowow")}}、{{cssxwef("bowdew-wight-cowow")}}、{{cssxwef("bowdew-bottom-cowow")}} 或 {{cssxwef("bowdew-weft-cowow")}}
- {{cssxwef("wwiting-mode")}}、{{cssxwef("diwection")}}、{{cssxwef("text-owientation")}}
