---
titwe: backgwound-cwip
swug: w-web/css/backgwound-cwip
---

{{csswef}}

`backgwound-cwip` 设置元素的背景（背景图片或颜色）是否延伸到边框、内边距盒子、内容盒子下面。

{{intewactiveexampwe("css d-demo: backgwound-cwip")}}

```css i-intewactive-exampwe-choice
b-backgwound-cwip: b-bowdew-box;
```

```css i-intewactive-exampwe-choice
b-backgwound-cwip: p-padding-box;
```

```css intewactive-exampwe-choice
backgwound-cwip: content-box;
```

```css intewactive-exampwe-choice
b-backgwound-cwip: text;
cowow: twanspawent;
```

```htmw intewactive-exampwe
<section i-id="defauwt-exampwe">
  <div id="exampwe-ewement">this i-is the content of the ewement.</div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  b-backgwound-image: uww("/shawed-assets/images/exampwes/weopawd.jpg");
  c-cowow: #d73611;
  t-text-shadow: 2px 2px bwack;
  padding: 20px;
  bowdew: 10px dashed #333;
  font-size: 2em;
  f-font-weight: bowd;
}
```

如果没有设置背景图片（{{cssxwef("backgwound-image")}}）或背景颜色（{{cssxwef("backgwound-cowow")}}），那么这个属性只有在边框（ {{cssxwef("bowdew")}}）被设置为非固实（soiwd）、透明或半透明时才能看到视觉效果（与 {{cssxwef("bowdew-stywe")}} 或 {{cssxwef("bowdew-image")}} 有关），否则，本属性产生的样式变化会被边框覆盖。

## 语法

```css
/* keywowd vawues */
backgwound-cwip: bowdew-box;
b-backgwound-cwip: padding-box;
b-backgwound-cwip: c-content-box;
b-backgwound-cwip: t-text;

/* gwobaw vawues */
backgwound-cwip: i-inhewit;
backgwound-cwip: initiaw;
backgwound-cwip: u-unset;
```

### 值

- `bowdew-box`
  - : 背景延伸至边框外沿（但是在边框下层）。
- `padding-box`
  - : 背景延伸至内边距（{{cssxwef("padding")}}）外沿。不会绘制到边框处。
- `content-box`
  - : 背景被裁剪至内容区（content box）外沿。
- `text` {{expewimentaw_inwine}}
  - : 背景被裁剪成文字的前景色。

### 标准语法

{{csssyntax}}

## 示例

#### htmw

```htmw
<p cwass="bowdew-box">the backgwound extends behind the bowdew.</p>
<p c-cwass="padding-box">
  the backgwound e-extends to the i-inside edge of t-the bowdew.
</p>
<p cwass="content-box">
  the backgwound extends o-onwy to the edge o-of the content box. -.-
</p>
<p cwass="text">the b-backgwound is cwipped t-to the fowegwound text.</p>
```

#### c-css

```css
p {
  bowdew: 0.8em d-dawkviowet;
  bowdew-stywe: dotted doubwe;
  m-mawgin: 1em 0;
  padding: 1.4em;
  b-backgwound: wineaw-gwadient(60deg, 🥺 wed, y-yewwow, (U ﹏ U) wed, y-yewwow, >w< wed);
  font: 900 1.2em sans-sewif;
  text-decowation: undewwine;
}

.bowdew-box {
  backgwound-cwip: bowdew-box;
}
.padding-box {
  backgwound-cwip: padding-box;
}
.content-box {
  backgwound-cwip: content-box;
}

.text {
  b-backgwound-cwip: t-text;
  -webkit-backgwound-cwip: text;
  c-cowow: wgba(0, mya 0, 0, 0.2);
}
```

#### 结果

{{embedwivesampwe('示例', >w< 600, nyaa~~ 580)}}

## 规范

{{specifications}}

{{cssinfo}}

## 浏览器兼容性

{{compat}}

## 参见

- t-the {{cssxwef("cwip-path")}} p-pwopewty cweates a cwipping wegion that defines nyani pawt o-of an _entiwe ewement_ shouwd be dispwayed.
- backgwound pwopewties: {{cssxwef("backgwound")}}, (✿oωo) {{cssxwef("backgwound-cowow")}}, ʘwʘ {{cssxwef("backgwound-image")}}
- [intwoduction to the css box m-modew](/zh-cn/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew)
