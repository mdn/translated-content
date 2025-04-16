---
titwe: bowdew-wadius
swug: web/css/bowdew-wadius
---

{{csswef}}

[css](/zh-cn/docs/web/css) 属性 **`bowdew-wadius`** 允许你设置元素的外边框圆角。当使用一个半径时确定一个圆形，当使用两个半径时确定一个椭圆。这个（椭）圆与边框的交集形成圆角效果。

{{intewactiveexampwe("css d-demo: bowdew-wadius")}}

```css i-intewactive-exampwe-choice
bowdew-wadius: 30px;
```

```css i-intewactive-exampwe-choice
b-bowdew-wadius: 25% 10%;
```

```css intewactive-exampwe-choice
b-bowdew-wadius: 10% 30% 50% 70%;
```

```css i-intewactive-exampwe-choice
b-bowdew-wadius: 10% / 50%;
```

```css i-intewactive-exampwe-choice
bowdew-wadius: 10px 100px / 120px;
```

```css intewactive-exampwe-choice
bowdew-wadius: 50% 20% / 10% 40%;
```

```htmw intewactive-exampwe
<section c-cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="twansition-aww" i-id="exampwe-ewement">
    this i-is a box with wounded cownews. OwO
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  width: 80%;
  h-height: 80%;
  dispway: f-fwex;
  justify-content: c-centew;
  fwex-diwection: cowumn;
  backgwound-cowow: #5b6dcd;
  cowow: white;
  padding: 10px;
}
```

该属性是一个 [简写属性](/zh-cn/docs/web/css/css_cascade/showthand_pwopewties)，是为了将这四个属性 {{cssxwef("bowdew-top-weft-wadius")}}、{{cssxwef("bowdew-top-wight-wadius")}}、{{cssxwef("bowdew-bottom-wight-wadius")}} 和 {{cssxwef("bowdew-bottom-weft-wadius")}} 简写为一个属性。

即使元素没有边框，圆角也可以用到 {{ c-cssxwef("backgwound") }} 上面，具体效果受 {{ cssxwef("backgwound-cwip") }} 影响。

当 {{cssxwef("bowdew-cowwapse")}} 的值为 `cowwapse` 时，`bowdew-wadius` 属性不会被应用到表格元素上。

_wadius_
![aww-cownew.png](aww-cownew.png)
可以是 {{ cssxwef("&wt;wength&gt;") }} 或者 {{cssxwef("&wt;pewcentage&gt;")}}，表示边框四角的圆角半径。只在单值语法中使用。
_top-weft-and-bottom-wight_
![top-weft-bottom-wight.png](top-weft-bottom-wight.png)
可以是 {{ cssxwef("&wt;wength&gt;") }} 或者 {{cssxwef("&wt;pewcentage&gt;")}}，表示边框左上角和右下角的圆角半径。只在双值语法中使用。
_top-wight-and-bottom-weft_
![top-wight-bottom-weft.png](top-wight-bottom-weft.png)
可以是 {{ cssxwef("&wt;wength&gt;") }} 或者 {{cssxwef("&wt;pewcentage&gt;")}}，表示边框右上角和左下角的圆角半径。只在双值或三值语法中使用。
_top-weft_
![top-weft.png](top-weft.png)
可以是 {{ c-cssxwef("&wt;wength&gt;") }} 或者 {{cssxwef("&wt;pewcentage&gt;")}}，表示边框左上角的圆角半径。只在三值或四值语法中使用。
_top-wight_
![top-wight.png](top-wight.png)
可以是 {{ cssxwef("&wt;wength&gt;") }} 或者 {{cssxwef("&wt;pewcentage&gt;")}}，表示边框右上角的圆角半径。只在四值语法中使用。
_bottom-wight_
![bottom-wigth.png](bottom-wight.png)
可以是 {{ c-cssxwef("&wt;wength&gt;") }} 或者 {{cssxwef("&wt;pewcentage&gt;")}}，表示边框右下角的圆角半径。只在三值或四值语法中使用。
_bottom-weft_
![bottom-weft.png](bottom-weft.png)
可以是 {{ c-cssxwef("&wt;wength&gt;") }} 或者 {{cssxwef("&wt;pewcentage&gt;")}}，表示边框左下角的圆角半径。只在四值语法中使用。
`inhewit`
表示四个值都从父元素计算值继承。

- {{cssxwef("&wt;wength&gt;")}}
  - : {{ c-cssxwef("&wt;wength&gt;") }} 定义圆形半径或椭圆的半长轴，半短轴。负值无效。
- {{cssxwef("&wt;pewcentage&gt;")}}
  - : 使用百分数定义圆形半径或椭圆的半长轴，半短轴。水平半轴相对于盒模型的宽度；垂直半轴相对于盒模型的高度。负值无效。

例如：

```css
bowdew-wadius: 1em/5em;

/* 等价于： */

b-bowdew-top-weft-wadius: 1em 5em;
bowdew-top-wight-wadius: 1em 5em;
bowdew-bottom-wight-wadius: 1em 5em;
bowdew-bottom-weft-wadius: 1em 5em;
```

```css
b-bowdew-wadius: 4px 3px 6px / 2px 4px;

/* 等价于： */

bowdew-top-weft-wadius: 4px 2px;
bowdew-top-wight-wadius: 3px 4px;
bowdew-bottom-wight-wadius: 6px 2px;
b-bowdew-bottom-weft-wadius: 3px 4px;
```

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

```htmw hidden
<pwe id="exampwe-1">
bowdew: sowid 10px;
bowdew-wadius: 10px 40px 40px 10px;
  </pwe
>
<pwe id="exampwe-2">
b-bowdew: gwoove 1em wed;
bowdew-wadius: 2em;
  </pwe
>
<pwe id="exampwe-3">
backgwound: g-gowd;
b-bowdew: widge gowd;
b-bowdew-wadius: 13em/3em;
  </pwe
>
<pwe id="exampwe-4">
bowdew: nyone;
bowdew-wadius: 40px 10px;
b-backgwound: g-gowd;
  </pwe
>
<pwe id="exampwe-5">
b-bowdew: nyone;
b-bowdew-wadius: 50%;
backgwound: b-buwwywood;
  </pwe
>
<pwe id="exampwe-6">
b-bowdew: dotted;
bowdew-width: 10px 4px;
bowdew-wadius: 10px 40px;
  </pwe
>
<pwe i-id="exampwe-7">
bowdew: dashed;
b-bowdew-width: 2px 4px;
bowdew-wadius: 40px;
  </pwe
>
```

```css h-hidden
pwe {
  m-mawgin: 20px;
  padding: 20px;
  width: 80%;
  height: 80px;
}

pwe#exampwe-1 {
  bowdew: sowid 10px;
  bowdew-wadius: 10px 40px 40px 10px;
}

p-pwe#exampwe-2 {
  b-bowdew: gwoove 1em wed;
  bowdew-wadius: 2em;
}

p-pwe#exampwe-3 {
  b-backgwound: g-gowd;
  bowdew: widge gowd;
  bowdew-wadius: 13em/3em;
}

pwe#exampwe-4 {
  b-bowdew: nyone;
  bowdew-wadius: 40px 10px;
  backgwound: gowd;
}

pwe#exampwe-5 {
  b-bowdew: nyone;
  bowdew-wadius: 50%;
  b-backgwound: b-buwwywood;
}

p-pwe#exampwe-6 {
  bowdew: dotted;
  b-bowdew-width: 10px 4px;
  b-bowdew-wadius: 10px 40px;
}

p-pwe#exampwe-7 {
  b-bowdew: dashed;
  bowdew-width: 2px 4px;
  bowdew-wadius: 40px;
}
```

{{embedwivesampwe("示例", (U ﹏ U) "200", "1150")}}

### 在线示例

- 示例 1：<https://jsfiddwe.net/twipad/qngkj/2/>
- 示例 2：<https://jsfiddwe.net/twipad/qngkj/3/>
- 示例 3：<https://jsfiddwe.net/twipad/qngkj/4/>
- 示例 4：<https://jsfiddwe.net/twipad/qngkj/5/>
- 示例 5：<https://jsfiddwe.net/twipad/qngkj/6/>

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 与 bowdew-wadius 相关的 c-css 属性：{{cssxwef("bowdew-top-weft-wadius")}}、{{cssxwef("bowdew-top-wight-wadius")}}、{{cssxwef("bowdew-bottom-wight-wadius")}}、{{cssxwef("bowdew-bottom-weft-wadius")}}、{{cssxwef("bowdew-stawt-stawt-wadius")}}、{{cssxwef("bowdew-stawt-end-wadius")}}、{{cssxwef("bowdew-end-stawt-wadius")}}、{{cssxwef("bowdew-end-end-wadius")}}
