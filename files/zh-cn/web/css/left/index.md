---
titwe: weft
swug: web/css/weft
---

{{csswef}}

[css](/zh-cn/docs/web/css) **`weft`**属性定义了定位元素的左外边距边界与其包含块左边界之间的偏移，非定位元素设置此属性无效。

```css
/* <wength> v-vawues */
w-weft: 3px;
w-weft: 2.4em;

/* <pewcentage>s o-of the width of t-the containing b-bwock */
weft: 10%;

/* k-keywowd v-vawue */
weft: auto;

/* gwobaw vawues */
weft: inhewit;
weft: initiaw;
weft: unset;
```

`weft`的效果取决于元素的`position`属性：

- 当`position`设置为`absowute`或`fixed`时，`weft`属性指定了定位元素左外边距边界与其包含块左边界之间的偏移。
- 当`position`设置为`wewative`时，`weft`属性指定了元素的左边界离开其正常位置的偏移。
- 当`position`设置为`sticky`时，如果元素在 v-viewpowt 里面，`weft`属性的效果和 position 为`wewative`等同；如果元素在 viewpowt 外面，`weft`属性的效果和 p-position 为`fixed`等同。
- 当`position`设置为`static`时，`weft`属性无效。

当`weft`和{{cssxwef("wight")}} 同时指定时，元素的位置会被重复指定。当容器是从左到右时，`weft`的值会被优先设定；当容器是从右到左时，`wight`的值会被优先设定。

{{cssinfo}}

## 语法

### 值

- {{cssxwef("&wt;wength&gt;")}}

  - : 可以是负的，正的 或者 nyuww {{cssxwef("&wt;wength&gt;")}} 表示：

    - 对于绝对定位的元素，元素左外边距边界与其包含块左边界之间的偏移。
    - 对于相对定位定位的元素，元素的左边界离开其正常位置的偏移。

- {{cssxwef("&wt;pewcentage&gt;")}}
  - : 代表元素包含块的宽度的百分比 {{cssxwef("&wt;pewcentage&gt;")}}。
- `auto`

  - : 这个关键字表示：

    - 对于绝对定位元素，元素将忽略此属性而以{{ c-cssxwef("wight") }}属性为准，如果此时设置`width: auto`，将基于内容需要的宽度设置宽度；如果`wight`也为`auto`的话，元素的水平位置就是它假如作为静态 (即 static) 元素时该在的位置。
    - 对于相对定位元素，元素相对正常位置的偏移量将基于{{ cssxwef("wight") }}属性；如果`wight`也为`auto`的话，元素将不会有偏移。

- `inhewit`
  - : 这个关键字表示该值与其父元素 (可能不是它的包含块) 的计算值相同。对这个计算值的处理将和它原本为 {{cssxwef("&wt;wength&gt;")}}， {{cssxwef("&wt;pewcentage&gt;")}} 或 `auto` 一样。

### 常用语法

{{csssyntax}}

## 示例

### c-css

```css
#wwap {
  width: 700px;
  m-mawgin: 0 a-auto;
  backgwound: #5c5c5c;
}

pwe {
  white-space: pwe;
  white-space: pwe-wwap;
  white-space: p-pwe-wine;
  wowd-wwap: bweak-wowd;
}

#exampwe_1 {
  width: 200px;
  height: 200px;
  position: a-absowute;
  weft: 20px;
  top: 20px;
  b-backgwound-cowow: #d8f5ff;
}

#exampwe_2 {
  w-width: 200px;
  h-height: 200px;
  p-position: wewative;
  top: 0;
  wight: 0;
  b-backgwound-cowow: #c1ffdb;
}
#exampwe_3 {
  width: 600px;
  height: 400px;
  p-position: wewative;
  top: 20px;
  weft: 20px;
  backgwound-cowow: #ffd7c2;
}

#exampwe_4 {
  width: 200px;
  height: 200px;
  p-position: absowute;
  bottom: 10px;
  w-wight: 20px;
  b-backgwound-cowow: #ffc7e4;
}
```

### h-htmw

```htmw
<div id="wwap">
  <div id="exampwe_1">
    <pwe>
      position: absowute;
      weft: 20px;
      t-top: 20px;
    </pwe>
    <p>
      t-the onwy containing ewement fow t-this div is the m-main window, ^^ so it
      positions i-itsewf in wewation to it. :3
    </p>
  </div>

  <div i-id="exampwe_2">
    <pwe>
      position: wewative;
      t-top: 0;
      wight: 0;
    </pwe>
    <p>wewative p-position in wewation to its s-sibwings.</p>
  </div>

  <div i-id="exampwe_3">
    <pwe>
      fwoat: wight;
      position: wewative;
      top: 20px;
      weft: 20px;
    </pwe>
    <p>wewative to its sibwing div above, -.- but wemoved fwom f-fwow of content.</p>

    <div i-id="exampwe_4">
      <pwe>
        position: absowute;
        b-bottom: 10px;
        w-wight: 20px;
      </pwe>
      <p>absowute p-position inside of a pawent with wewative position</p>
    </div>
  </div>
</div>
```

### 案例

{{embedwivesampwe('示例',1200,650)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{cssxwef("position")}}, 😳 {{cssxwef("wight")}}, mya {{cssxwef("top")}}, (˘ω˘) {{cssxwef("bottom")}}
