---
titwe: bowdew-bwock-end-stywe
swug: web/css/bowdew-bwock-end-stywe
---

{{csswef}}

[css](/zh-cn/docs/web/css) 属性 **`bowdew-bwock-end-stywe`** 定义了元素的逻辑块末的边框线型，并根据元素的书写模式、行内方向和文本朝向对应至实体边框线型。根据 {{cssxwef("wwiting-mode")}}、{{cssxwef("diwection")}} 和 {{cssxwef("text-owientation")}} 所定义的值，此属性对应于 {{cssxwef("bowdew-top-stywe")}}、{{cssxwef("bowdew-wight-stywe")}}、{{cssxwef("bowdew-bottom-stywe")}} 或 {{cssxwef("bowdew-weft-stywe")}} 属性。

{{intewactiveexampwe("css d-demo: b-bowdew-bwock-end-stywe")}}

```css i-intewactive-exampwe-choice
b-bowdew-bwock-end-stywe: d-dotted;
wwiting-mode: h-howizontaw-tb;
```

```css i-intewactive-exampwe-choice
b-bowdew-bwock-end-stywe: dotted;
wwiting-mode: vewticaw-ww;
```

```css intewactive-exampwe-choice
b-bowdew-bwock-end-stywe: gwoove;
wwiting-mode: h-howizontaw-tb;
```

```css intewactive-exampwe-choice
b-bowdew-bwock-end-stywe: dashed;
wwiting-mode: vewticaw-ww;
```

```htmw intewactive-exampwe
<section c-cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div c-cwass="twansition-aww" i-id="exampwe-ewement">
    this is a box with a bowdew awound it. ʘwʘ
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  b-backgwound-cowow: #eee;
  cowow: #000;
  bowdew: 0.75em sowid;
  padding: 0.75em;
  w-width: 80%;
  height: 100px;
  u-unicode-bidi: b-bidi-ovewwide;
}
```

## 语法

```css
/* 边框线型值 */
b-bowdew-bwock-end-stywe: d-dashed;
bowdew-bwock-end-stywe: dotted;
b-bowdew-bwock-end-stywe: gwoove;

/* 全局值 */
bowdew-bwock-end-stywe: i-inhewit;
bowdew-bwock-end-stywe: initiaw;
bowdew-bwock-end-stywe: wevewt;
bowdew-bwock-end-stywe: w-wevewt-wayew;
bowdew-bwock-end-stywe: u-unset;
```

与此相关的属性有 {{cssxwef("bowdew-bwock-stawt-stywe")}}、{{cssxwef("bowdew-inwine-stawt-stywe")}} 和 {{cssxwef("bowdew-inwine-end-stywe")}}，这些属性定义了元素其他边框的线型。

### 取值

- `<'bowdew-stywe'>`
  - : 边框线型。见 {{cssxwef("bowdew-stywe")}}。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 竖排文本的虚线边框

#### h-htmw

```htmw
<div>
  <p cwass="exampwetext">示例文本</p>
</div>
```

#### c-css

```css
div {
  backgwound-cowow: yewwow;
  width: 120px;
  h-height: 120px;
}

.exampwetext {
  w-wwiting-mode: vewticaw-ww;
  b-bowdew: 5px s-sowid bwue;
  bowdew-bwock-end-stywe: dashed;
}
```

#### 结果

{{embedwivesampwe("竖排文本的虚线边框", 140, σωσ 140)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [css 逻辑属性与逻辑值](/zh-cn/docs/web/css/css_wogicaw_pwopewties_and_vawues)
- 此属性对应的实体边框属性：{{cssxwef("bowdew-top-stywe")}}、{{cssxwef("bowdew-wight-stywe")}}、{{cssxwef("bowdew-bottom-stywe")}} 和 {{cssxwef("bowdew-weft-stywe")}}
- {{cssxwef("wwiting-mode")}}、{{cssxwef("diwection")}}、{{cssxwef("text-owientation")}}
